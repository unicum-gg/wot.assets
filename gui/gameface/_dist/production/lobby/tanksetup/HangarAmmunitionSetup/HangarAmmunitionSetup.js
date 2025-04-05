(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7727),
                    i = a(7363),
                    o = a.n(i),
                    u = a(6880),
                    l = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: p,
                    onMouseMove: b,
                    onMouseDown: g,
                    onMouseUp: E,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, i.useRef)(null),
                        C = (0, i.useState)(a),
                        A = C[0],
                        D = C[1],
                        S = (0, i.useState)(!1),
                        F = S[0],
                        y = S[1];
                    return (
                        (0, i.useEffect)(() => {
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
                        (0, i.useEffect)(() => {
                            D(a);
                        }, [a]),
                        o().createElement(
                            'div',
                            {
                                ref: f,
                                className: s()(
                                    u.Z.base,
                                    u.Z[`base__${n}`],
                                    c && u.Z.base__disabled,
                                    t && u.Z[`base__${t}`],
                                    A && u.Z.base__focus,
                                    F && u.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, r.G)(d), p && p(e));
                                },
                                onMouseMove: function (e) {
                                    b && b(e);
                                },
                                onMouseUp: function (e) {
                                    c || (E && E(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, r.G)(m),
                                        g && g(e),
                                        a && (c || (f.current && (f.current.focus(), D(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (v && v(e));
                                },
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: u.Z.back }),
                                    o().createElement('span', { className: u.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: s()(u.Z.state, u.Z.state__default) },
                                o().createElement('span', { className: u.Z.stateDisabled }),
                                o().createElement('span', { className: u.Z.stateHighlightHover }),
                                o().createElement('span', { className: u.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
            },
            2106: (e, t, a) => {
                'use strict';
                let n, s;
                a.d(t, { L: () => n, q: () => s }),
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
                    })(s || (s = {}));
            },
            2262: (e, t, a) => {
                'use strict';
                a.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r),
                    o = a(7727),
                    u = a(1641),
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
                        r = void 0 !== a && a,
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
                        S = void 0 === D ? 'play' : D,
                        F = e.onMouseEnter,
                        y = e.onMouseLeave,
                        B = e.onMouseUp,
                        w = e.onMouseDown,
                        k = e.onClick,
                        x = e.onChange,
                        T = e.onFocus,
                        I = e.onBlur,
                        N = e.text,
                        R = e.contentStyles,
                        L = e.children,
                        O = e.alignment,
                        M = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, _);
                    const P = (0, n.useState)(!1),
                        $ = P[0],
                        H = P[1],
                        z = (0, n.useState)(!1),
                        j = (z[0], z[1]),
                        W = (0, n.useCallback)(
                            (e) => {
                                p || (x && x(), k && k(e));
                            },
                            [p, x, k],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                const t = e.button === u.t.LEFT;
                                p || (t && H(!0), t && w && w(e), S && (0, o.G)(S));
                            },
                            [p, w, S],
                        ),
                        V = (0, n.useCallback)(
                            (e) => {
                                p || (H(!1), B && B(e));
                            },
                            [p, B],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                p || (F && F(e), A && (0, o.G)(A));
                            },
                            [p, F, A],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                p || (H(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                p || (j(!0), T && T(e));
                            },
                            [p, T],
                        ),
                        X = (0, n.useCallback)(
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
                                { className: i()(c.Z.labelContent, 's-labelContent'), style: R },
                                N || L,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: i()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${f}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: O === l.N3.Center,
                                    [c.Z.base__bottom]: O === l.N3.Bottom,
                                }),
                                onClick: W,
                                onMouseEnter: Z,
                                onMouseLeave: U,
                                onMouseDown: G,
                                onMouseUp: V,
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
                        ((N || L) && K) || null,
                    );
                };
            },
            8844: (e, t, a) => {
                'use strict';
                let n, s, r;
                a.d(t, { N3: () => r, Rh: () => s, yB: () => n }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(r || (r = {}));
            },
            7405: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => c });
                var n = a(6483),
                    s = a.n(n),
                    r = a(2372),
                    i = a(7363),
                    o = a.n(i),
                    u = a(8460),
                    l = a(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: n,
                        value: i,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: b,
                    }) =>
                        o().createElement(
                            'span',
                            { className: s()(u.Z.base, u.Z[`base__${a}`], p) },
                            o().createElement(
                                'span',
                                {
                                    className: s()(
                                        u.Z.value,
                                        u.Z[`value__${n}`],
                                        !d && u.Z.value__notEnough,
                                        null == b ? void 0 : b.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                o().createElement(r.A, { value: i, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: s()(u.Z.icon, u.Z[`icon__${n}-${a}`], null == b ? void 0 : b.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: s()(
                                            u.Z.stock,
                                            c && u.Z.stock__indent,
                                            t && u.Z.stock__interactive,
                                            null == b ? void 0 : b.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: u.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, a) => {
                'use strict';
                let n, s, r;
                a.d(t, { V2: () => s, et: () => n, we: () => r }),
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
                    })(s || (s = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => i });
                var n = a(7363),
                    s = a.n(n),
                    r = a(9916);
                class i extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3649),
                    i = a(7363),
                    o = a.n(i),
                    u = a(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, r.WU)(t, e) : t;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: s()(u.Z.base, a), key: `${t}-${l}` },
                                (0, r.Uw)(t, n, e).map((e, t) =>
                                    o().createElement(i.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => _ });
                var n = a(3138),
                    s = a(7363),
                    r = a(1043),
                    i = a(5262);
                const o = n.O.client.getSize('rem'),
                    u = o.width,
                    l = o.height,
                    c = Object.assign({ width: u, height: l }, (0, i.T)(u, l, r.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var n = a(3138),
                    s = a(6536),
                    r = a(7363),
                    i = a.n(r),
                    o = a(3495),
                    u = a(1043),
                    l = a(5262);
                const c = ({ children: e }) => {
                    const t = (0, r.useContext)(o.Y),
                        a = (0, r.useState)(t),
                        c = a[0],
                        _ = a[1],
                        d = (0, r.useCallback)((e, t) => {
                            const a = n.O.view.pxToRem(e),
                                s = n.O.view.pxToRem(t);
                            _(Object.assign({ width: a, height: s }, (0, l.T)(a, s, u.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, s.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const p = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(o.Y.Provider, { value: p }, e);
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var n = a(7363),
                    s = a(7382),
                    r = a(3495);
                const i = ['children'];
                const o = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, i);
                    const o = (0, n.useContext)(r.Y),
                        u = o.extraLarge,
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
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && u) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && _) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, s.H)(t, a, D);
                        if (a.largeWidth && p) return (0, s.H)(t, a, D);
                        if (a.mediumWidth && b) return (0, s.H)(t, a, D);
                        if (a.smallWidth && g) return (0, s.H)(t, a, D);
                        if (a.extraSmallWidth && E) return (0, s.H)(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && h) return t;
                            if (a.largeHeight && v) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && A) return t;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, n.memo)(o);
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
                a.d(t, { YN: () => s.Y, ZN: () => n.Z });
                a(6010);
                var n = a(1039),
                    s = a(3495);
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
                function s(e, t, a) {
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
                        })(t, a),
                        r = Math.min(n, s);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: s === a.extraLarge.weight,
                        largeHeight: s === a.large.weight,
                        mediumHeight: s === a.medium.weight,
                        smallHeight: s === a.small.weight,
                        extraSmallHeight: s === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => s, u: () => n }),
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
            8089: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => _ });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r),
                    o = a(7727),
                    u = a(7476);
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class _ extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, o.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick);
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
                            a = e.onClick,
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            b = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                    return s;
                                })(e, l)),
                            E = i()(u.Z.base, u.Z[`base__${o}`], u.Z[`base__${r}`], null == _ ? void 0 : _.base),
                            h = i()(u.Z.icon, u.Z[`icon__${o}`], u.Z[`icon__${r}`], null == _ ? void 0 : _.icon),
                            v = i()(u.Z.glow, null == _ ? void 0 : _.glow),
                            f = i()(u.Z.caption, u.Z[`caption__${o}`], null == _ ? void 0 : _.caption),
                            C = i()(u.Z.goto, null == _ ? void 0 : _.goto);
                        return s().createElement(
                            'div',
                            c(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(b),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                g,
                            ),
                            'info' !== o && s().createElement('div', { className: u.Z.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: v })),
                            s().createElement('div', { className: f }, t),
                            n && s().createElement('div', { className: C }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => u });
                var n = a(7363),
                    s = a.n(n),
                    r = a(2056);
                const i = ['children'];
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
                const u = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, i);
                    return s().createElement(
                        r.u,
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
                    s = a(7363),
                    r = a.n(s);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const u = R.views.common.tooltip_window.simple_tooltip_content,
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
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, i);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, d]);
                        return r().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
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
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var n = a(7902),
                    s = a(9916),
                    r = a(7363);
                const i = [
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
                const u = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
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
                            S = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, i);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, r.useMemo)(() => A || (0, n.F)().resId, [A]),
                            w = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (u(a, h, { isMouseEvent: !0, on: !0, arguments: o(s) }, B),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [a, h, s, B, D]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        u(a, h, { on: !1 }, B),
                                        y.current.isVisible && S && S(),
                                        (y.current.isVisible = !1);
                                }
                            }, [a, h, B, S]),
                            x = (0, r.useCallback)((e) => {
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
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && k();
                            }, [f, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return f
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
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
                                      F,
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
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                (a = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                        }
                    );
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => o });
                var n = a(3138);
                function s(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: a = i, context: r = 'model' } = {}) {
                    const o = new Map();
                    function u(e, t = 0) {
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
                            s = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, s);
                    };
                    return {
                        subscribe: (a, s) => {
                            const i = 'string' == typeof s ? `${r}.${s}` : r,
                                u = n.O.view.addModelObserver(i, t, !0);
                            return o.set(u, a), e && a(l(s)), u;
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
                            for (var e, a = s(o.keys()); !(e = a()).done; ) {
                                u(e.value, t);
                            }
                        },
                        unsubscribe: u,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q3: () => u });
                var n = a(4598),
                    s = a(9174),
                    r = a(7363),
                    i = a.n(r),
                    o = a(8246);
                const u = () => (e, t) => {
                    const a = (0, r.createContext)({});
                    return [
                        function ({ mode: u = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, r.useRef)([]),
                                m = (a, r, i) => {
                                    var u;
                                    const l = o.U(r),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (u = null == i ? void 0 : i.getter) ? u : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === a ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: a,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : _(e),
                                                        i = s.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : _(e),
                                                        i = s.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
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
                                                            i = Object.entries(r),
                                                            o = i.reduce(
                                                                (e, [t, a]) => ((e[a] = s.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        i.forEach(([t, a]) => {
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
                                        b = { mode: a, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === a && i ? i.controls(b) : t(b),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                p = (0, r.useRef)(!1),
                                b = (0, r.useState)(u),
                                g = b[0],
                                E = b[1],
                                h = (0, r.useState)(() => m(u, l, _)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    p.current ? f(m(g, l, _)) : (p.current = !0);
                                }, [_, g, l]),
                                (0, r.useEffect)(() => {
                                    E(u);
                                }, [u]),
                                (0, r.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                i().createElement(a.Provider, { value: v }, c)
                            );
                        },
                        () => (0, r.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => c, off: () => u, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = a(2472),
                    s = a(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, s.R)(!0);
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
                            : (0, s.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const r = `mouse${t}`,
                                        i = l[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            s &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(a)),
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
                            e.enabled && (0, s.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, s.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    });
                var n = a(527),
                    s = a(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
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
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => s, G: () => n });
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
                    s = a(514);
                const r = { view: a(7641), client: n, sound: s.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => i });
                var n = a(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, n.playSound)(s[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function s(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => s, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => s });
                var n = a(2472);
                const s = {
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
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => u,
                        arabic2roman: () => B,
                        children: () => s,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => F,
                        getFontNames: () => y,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
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
                        whenTutorialReady: () => x,
                    });
                var n = a(9690),
                    s = a(3722),
                    r = a(6112),
                    i = a(6538),
                    o = a(8566);
                function u(e) {
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
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    B = n.cg,
                    w = Object.keys(r.W).reduce(
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
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const s = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    u = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                    return s;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((s = r),
                                              Object.entries(s).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? s : i);
                        },
                        minimize() {
                            u(o);
                        },
                        move(e) {
                            u(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function n() {}
                a.d(t, { ZT: () => n, jv: () => r, yR: () => s });
                function s(e) {
                    return e;
                }
                function r() {
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
                        s = '';
                    var r;
                    t &&
                        ((s = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== a &&
                            window.subViews[a] &&
                            (n = window.subViews[a].id));
                    return { callerUrl: s, caller: a, stack: t, resId: n };
                };
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(7363);
                const s = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r });
                var n = a(7363);
                const s = [];
                function r(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), s)
                    );
                }
            },
            8526: (e, t, a) => {
                'use strict';
                a.d(t, { gd: () => o });
                var n = a(3138),
                    s = a(5521),
                    r = (a(9916), a(7363));
                const i = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = s.n.NONE, t = i, a = !1, o = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(s) {
                            if (s.keyCode === e) {
                                if (!o && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), t(s), a && s.stopPropagation();
                            }
                        }
                    }, [t, e, a, o]);
                }
            },
            2039: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => s });
                var n = a(7363);
                const s = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => r });
                var n = a(7363),
                    s = a(2039);
                function r() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, s.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, a) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), t();
                                        }, a));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
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
            5521: (e, t, a) => {
                'use strict';
                let n, s;
                a.d(t, { n: () => n }),
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
                    })(s || (s = {}));
            },
            9480: (e, t, a) => {
                'use strict';
                a.d(t, {
                    G: () => u,
                    MH: () => r,
                    U2: () => s,
                    UI: () => o,
                    dF: () => c,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                });
                var n = a(8968);
                function s(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const r = s;
                function i(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function u(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) {
                        if (t(r(e, a), a, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let s = 0; s < e.length; s++) {
                        var n;
                        const r = null == (n = e[s]) ? void 0 : n.value;
                        t(r, s, e) && a.push(r);
                    }
                    return a;
                }
                function c(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        const n = i(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function _(e, t) {
                    return (function (e, t, a) {
                        const n = [];
                        for (let s = 0; s < e.length; s++) {
                            const i = r(e, s);
                            t(i, s, e) && n.push(a(i, s, e));
                        }
                        return n;
                    })(e, n.C, t);
                }
                function d(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) {
                        n = t(n, r(e, a), a, e);
                    }
                    return n;
                }
            },
            1641: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { t: () => n }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(n || (n = {}));
            },
            8968: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                a.d(t, { C: () => n });
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => o, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    s = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let a = s.length - 1; a >= 0; a--) for (; e >= s[a]; ) (t += n[a]), (e -= s[a]);
                    return t;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (i ? `${e}` : r(e));
            },
            7727: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => s, G: () => n });
                const s = {
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
                    Uw: () => E,
                    WU: () => r,
                    dL: () => h,
                    e: () => u,
                    uF: () => i,
                    v2: () => s,
                    z4: () => l,
                });
                var n = a(1281);
                let s;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function u(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(s || (s = {}));
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
                    m = (e, t, a = s.left) => e.split(t).reduce(a === s.left ? _ : d, []),
                    p = (() => {
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
                    b = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = s.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (b.includes(a)) return p(e);
                        if ('ja' === a) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = s.left) => {
                            let a = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = l(e);
                            return m(r, /( )/, t).forEach((e) => (a = a.concat(m(e, n, s.left)))), a;
                        })(e, t);
                    },
                    E = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : g(e, t))),
                    h = (e) => r(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                var n = a(3138);
                class s {
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
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, a = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, a, s);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(r) : (this._views[a] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                s.__instance = void 0;
                const r = s;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => r.Z,
                    B3: () => u,
                    Gr: () => l,
                    Z5: () => i.Z5,
                    B0: () => o,
                    c9: () => v,
                    ry: () => E,
                    Eu: () => h,
                });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                const s = n;
                var r = a(1358);
                var i = a(8613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = a(5521),
                    m = a(3138);
                const p = ['args'];
                function b(e, t, a, n, s, r, i) {
                    try {
                        var o = e[r](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(n, s);
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
                                        a = arguments;
                                    return new Promise(function (n, s) {
                                        var r = e.apply(t, a);
                                        function i(e) {
                                            b(r, n, s, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            b(r, n, s, i, o, 'throw', e);
                                        }
                                        i(void 0);
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
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                    return s;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((n = s),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => v(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var A = a(7572);
                const D = s.instance,
                    S = {
                        DataTracker: r.Z,
                        ViewModel: A.Z,
                        ViewEventType: o,
                        NumberFormatType: u,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, s = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                u = a.getBoundingClientRect(),
                                l = u.x,
                                c = u.y,
                                _ = u.width,
                                d = u.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
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
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const s = Object.prototype.toString.call(t[n]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < s.length; t++) a[n].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => r, Z5: () => n, cy: () => s });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    r = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            7260: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => c });
                var n = a(7363),
                    s = a.n(n),
                    r = a(280),
                    i = a(8852);
                const o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    u = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, n.useMemo)(() => t || {}, [t]);
                        let d = o.exec(e),
                            m = e,
                            p = 0;
                        for (; d; ) {
                            const a = d[0],
                                n = u.exec(a),
                                b = l.exec(a),
                                g = d[1];
                            if (n && b) {
                                const e = n[0],
                                    o = e + p++ + e;
                                (m = m.replace(a, `%(${o})`)),
                                    (_[o] = i.Z[e]
                                        ? s().createElement(
                                              'span',
                                              { className: i.Z[e] },
                                              s().createElement(r.z, { text: g, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: c(e) },
                                              s().createElement(r.z, { text: g, binding: t }),
                                          ));
                            }
                            d = o.exec(e);
                        }
                        return s().createElement(r.z, { text: m, classMix: a, binding: _ });
                    });
            },
            3521: (e, t, a) => {
                'use strict';
                function n(e, t) {
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
                a.d(t, { WL: () => o, aR: () => u, jZ: () => r, yG: () => i });
                const r = (e, t = []) => {
                        const a = document.getElementById('root');
                        a && (a.style.cursor = e ? 'grabbing' : 'default');
                        for (var s, r = n(t); !(s = r()).done; ) {
                            const t = s.value,
                                a = document.getElementById(t);
                            a && (a.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    i = (e, t, a, n) => {
                        const s = a + t,
                            r = n - t;
                        return e < s ? s : e > r ? r : e;
                    },
                    o = (e, t, a) => {
                        let s = '',
                            r = 8e3;
                        for (var i, o = n(a); !(i = o()).done; ) {
                            const e = i.value,
                                a = Math.abs(e.centerX - t);
                            a < r && ((s = e.id), (r = a));
                        }
                        return s;
                    },
                    u = (e, t) => {
                        const a = t.find((t) => t.id === e);
                        return a ? a.centerX : 0;
                    };
            },
            1820: (e, t, a) => {
                'use strict';
                let n, s;
                a.d(t, { m: () => s }),
                    (function (e) {
                        (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(s || (s = {}));
            },
            4301: (e, t, a) => {
                'use strict';
                a.d(t, { iN: () => r, j2: () => s, s$: () => i });
                var n = a(4231);
                const s = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    r = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    i = (e) => r(e) || e === n.w.Respawn;
            },
            7626: (e, t, a) => {
                'use strict';
                a.d(t, { YR: () => u, UW: () => c, Tu: () => l });
                var n = a(7363),
                    s = a(9152),
                    r = a(7727),
                    i = a(3521),
                    o = a(1820);
                const u = (e) => `panel-${e}-section`,
                    l = (e, t) => {
                        const a = u(e),
                            n = t.filter((e) => e !== a);
                        return { selfId: a, blockOnGrabIds: [s.yy, ...n] };
                    },
                    c = ({ baseId: e, slotsLength: t, handleSwap: a, setIsExitBlocked: s, syncInitiator: u }) => {
                        const l = ((e, t, a) => {
                                const s = (0, n.useRef)([]),
                                    u = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, n.useCallback)((e) => {
                                        u.current.dropId ||
                                            u.current.prevPotentialDropId ||
                                            ((u.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    m = (0, n.useCallback)((e, t) => {
                                        if (s.current) {
                                            const a = (0, i.WL)(e, t, s.current);
                                            a !== u.current.prevPotentialDropId &&
                                                ((u.current.prevPotentialDropId = a),
                                                _({ activeDragId: e, potentialDropId: a }));
                                        }
                                    }, []),
                                    p = (0, n.useCallback)((e, t) => {
                                        if (s.current && t) {
                                            const a = u.current,
                                                n = (0, i.WL)(e, t, s.current);
                                            (a.dropId = n),
                                                (a.dragId = e),
                                                (a.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, r.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    b = (0, n.useCallback)(() => {
                                        const e = u.current,
                                            t = e.dragId,
                                            a = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (t || a || n) &&
                                            ((u.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    g = (0, n.useCallback)(
                                        (e) => {
                                            const t = u.current.dropId;
                                            t && t !== e ? a(e, t) : b();
                                        },
                                        [b, a],
                                    ),
                                    E = (0, n.useCallback)((e, t) => {
                                        const a = s.current.find((t) => t.id === e);
                                        a && t && (a.centerX = t);
                                    }, []),
                                    h = (0, n.useCallback)(
                                        (e, t) => {
                                            const a = t.dragId,
                                                n = t.currentCenterX;
                                            switch (e) {
                                                case o.m.Ready:
                                                    return E(a, n);
                                                case o.m.DragStart:
                                                    return d(a);
                                                case o.m.Drag:
                                                    return m(a, n);
                                                case o.m.Drop:
                                                    return p(a, n);
                                                case o.m.DropExit:
                                                    return g(a);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, m, p, g, E],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== s.current.length) {
                                            const a = new Array(e).fill(null);
                                            s.current = a.map((e, a) => ({ id: `${t}-${a}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: h,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const t = u.current,
                                                a = t.dragId,
                                                n = t.dropId;
                                            return e === a
                                                ? (0, i.aR)(n, s.current)
                                                : e === n
                                                  ? (0, i.aR)(a, s.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: b,
                                    }
                                );
                            })(t, e, a),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            m = l.resetDragResults,
                            p = (0, n.useCallback)(
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
                            (0, n.useEffect)(() => {
                                s && s(!1);
                            }, [s]),
                            (0, n.useEffect)(() => m, [u, m]),
                            { handleGrabberAction: p, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { w: () => n }),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle');
                    })(n || (n = {}));
            },
            3220: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => c, t: () => _ });
                var n = a(3215),
                    s = a(9480),
                    r = a(3946),
                    i = a(4598),
                    o = a(4301),
                    u = a(7626);
                const l = (0, n.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                a = (0, r.Om)(() => t.sectionGroups.get().length),
                                n = (0, r.Om)(
                                    (e) => {
                                        const a = s.U2(t.sectionGroups.get(), e);
                                        if (!a) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, a, {
                                            sections: s.UI(a.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: s.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, a.setupSelector, {
                                                states: s.UI(a.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: i.jv },
                                ),
                                l = (0, r.Om)(() => s.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, r.Om)((e) => n(e).sections.length),
                                _ = (0, r.Om)(
                                    (e, t) => {
                                        const a = n(e),
                                            r = s.U2(a.sections, t);
                                        if (!r) throw Error(`No ammunition section found with index: ${t}`);
                                        return r;
                                    },
                                    { equals: i.jv },
                                ),
                                d = (0, r.Om)((e, t) => _(e, t).slots.length),
                                m = (0, r.Om)((e, t) => {
                                    const a = _(e, t).slots;
                                    return s.hX(a, (e) => Boolean(e) && !(0, o.j2)(e)).length;
                                }),
                                p = (0, r.Om)((e, t) => {
                                    const a = _(e, t).slots;
                                    return s.G(a, (e) => e.intCD > 0);
                                }),
                                b = (0, r.Om)(
                                    (e, t, a) => {
                                        const n = _(e, t),
                                            r = s.U2(n.slots, a);
                                        if (!r) throw Error(`No ammunition slot found with index: ${a}`);
                                        return r;
                                    },
                                    { equals: i.jv },
                                ),
                                g = (0, r.Om)(
                                    (e) => {
                                        const t = n(e).sections;
                                        return s.v(t, (e) => (0, u.YR)(e.type));
                                    },
                                    { equals: i.jv },
                                ),
                                E = (0, r.Om)(
                                    (e, t, a) => {
                                        const n = b(e, t, a);
                                        if (!n) throw Error(`No ammunition slot found with index: ${a}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: s.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: i.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: a, group: n },
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
            6445: (e, t, a) => {
                'use strict';
                var n = {};
                a.r(n),
                    a.d(n, {
                        Area: () => es,
                        Bar: () => Yn,
                        DefaultScroll: () => Qn,
                        Direction: () => Ln,
                        defaultSettings: () => On,
                        useHorizontalScrollApi: () => Pn,
                    });
                var s = {};
                a.r(s), a.d(s, { Area: () => hs, Bar: () => bs, Default: () => Es, useVerticalScrollApi: () => ts });
                var r = a(3138),
                    i = a(7739),
                    o = a(7363),
                    u = a.n(o),
                    l = a(6483),
                    c = a.n(l),
                    _ = a(926),
                    d = a.n(_),
                    m = a(1043);
                let p, b, g;
                !(function (e) {
                    (e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = m.j.small.width)] = 'Small'),
                        (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                        (e[(e.Large = m.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.width)] = 'Small'),
                            (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                            (e[(e.Large = m.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = m.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.height)] = 'Small'),
                            (e[(e.Medium = m.j.medium.height)] = 'Medium'),
                            (e[(e.Large = m.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.height)] = 'ExtraLarge');
                    })(g || (g = {}));
                const E = () => {
                        const e = (0, o.useContext)(i.YN),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), g.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: s, mediaHeight: r, remScreenWidth: t, remScreenHeight: a };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, h);
                        const s = E(),
                            r = s.mediaWidth,
                            i = s.mediaHeight,
                            o = s.mediaSize;
                        return u().createElement('div', v({ className: c()(a, f[r], C[i], A[o]) }, n), t);
                    },
                    S = ['children'];
                const F = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, S);
                    return u().createElement(i.ZN, null, u().createElement(D, a, t));
                };
                var y = a(1533),
                    B = a.n(y),
                    w = a(7383),
                    k = a(1856),
                    x = a(3403),
                    T = a(3815),
                    I = a(2039);
                const N = (0, o.createContext)(null);
                var L = a(5262),
                    O = a(3649);
                function M(e, t, a) {
                    const n = (0, o.useContext)(i.YN);
                    let s = Object.entries(n).filter(([e, t]) => !0 === t && e in L.u);
                    return (
                        a && (s = s.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const n = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, O.e)(t))(a, e[0])]),
                            );
                            return (e[a] = c()(t[a], ...n)), e;
                        }, {})
                    );
                }
                const P = (e, t = []) => {
                        const a = (0, o.useRef)(),
                            n = (0, o.useCallback)((...t) => {
                                a.current && a.current(), (a.current = e(...t));
                            }, t);
                        return (
                            (0, o.useEffect)(
                                () => () => {
                                    a.current && a.current();
                                },
                                [n],
                            ),
                            n
                        );
                    },
                    $ = (e, t, { listenResize: a = !0, intervalMs: n = 50, minStableTicks: s = 3 }, r) => {
                        const i = (0, o.useRef)(e()),
                            u = (0, o.useState)(0),
                            l = u[0],
                            c = u[1];
                        (0, o.useEffect)(() => {
                            let a = 0;
                            const r = setInterval(() => {
                                const n = e();
                                n !== i.current
                                    ? ((i.current = n), (a = 0), t(n))
                                    : (a++, a >= s && (t(n), clearInterval(r)));
                            }, n);
                            return () => {
                                clearInterval(r);
                            };
                        }, [e, t, l, n, s, ...r]),
                            (0, o.useEffect)(() => {
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
                            }, [a]);
                    };
                var H = a(3220);
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
                    j = 'Border_base_f9',
                    W = 'Border_border_83',
                    G = 'Border_wrapper_17',
                    V = 'Border_active_e8',
                    Z = (0, o.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: a }) => {
                        const n = (0, o.useRef)(null),
                            s = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const r = (0, o.useCallback)(() => {
                            s.current && a(), (s.current = !1);
                        }, [a]);
                        (0, o.useEffect)(() => {
                            const e = n.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const i = (0, o.useMemo)(() => ({ left: e }), [e]),
                            l = (0, o.useMemo)(() => ({ width: t }), [t]);
                        return u().createElement(
                            'div',
                            { className: j },
                            u().createElement(
                                'div',
                                { ref: n, className: W, style: i },
                                u().createElement(
                                    'div',
                                    { className: G },
                                    u().createElement('div', { className: V, style: l }),
                                ),
                            ),
                        );
                    }),
                    U = (e, t) => {
                        const a = [];
                        for (let n = 0; n < e; n++) a.push(t(n));
                        return a;
                    };
                var q = a(6373),
                    X = a(9344),
                    K = a(2558),
                    Y = a(8934);
                const J = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Q = 'up',
                    ee = 'down',
                    te = ({ children: e, index: t, setSetupSwitching: a, disabled: n = !1 }) => {
                        const s = (0, o.useRef)(1 - t),
                            r = (0, o.useMemo)(() => {
                                const e = ((a = t), (r = s.current), a === r ? '' : a > r ? ee : Q);
                                var a, r;
                                const i = e && (0, O.e)(e);
                                return n ? {} : { enter: J[`base__enter${i}`], exit: J[`base__exit${i}`] };
                            }, [t, n]);
                        return (
                            (s.current = t),
                            u().createElement(
                                K.Z,
                                { className: J.base },
                                u().createElement(
                                    Y.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: r,
                                        onEnter: () => a(!0),
                                        onExited: () => a(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var ae = a(4301);
                const ne = {
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
                    se = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ie = (e) => {
                    let t = e.size,
                        a = e.value,
                        n = e.isEmpty,
                        s = e.fadeInAnimation,
                        r = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, se);
                    const _ = n ? null : a,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > i,
                        p = c()(
                            ne.base,
                            ne[`base__${t}`],
                            s && ne.base__animated,
                            r && ne.base__hidden,
                            !_ && ne.base__pattern,
                            n && ne.base__empty,
                            o,
                        );
                    return u().createElement(
                        'div',
                        re({ className: p }, l),
                        u().createElement('div', { className: ne.bg }),
                        u().createElement('div', { className: ne.pattern }),
                        u().createElement(
                            'div',
                            { className: c()(ne.value, d && ne.value__text) },
                            m ? i : _,
                            m && u().createElement('span', { className: ne.plus }, '+'),
                        ),
                    );
                };
                ie.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var oe = a(280),
                    ue = a(7902);
                const le = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var ce = a(6536),
                    _e = a(9916);
                const de = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    me = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    pe = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const n = le(`${e}.${a}`, window);
                                return de(n) ? t(e, a, n) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    be = (e) => {
                        const t = ((e) => {
                                const t = (0, ue.F)(),
                                    a = t.caller,
                                    n = t.resId,
                                    s = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: s, modelPath: me(s, e || ''), resId: n };
                            })(),
                            a = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const s = le(me(a, `${t}.${n}`), window);
                                    return de(s) ? (e.push(s.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ge = () => (window.injected || (window.injected = new Map()), window.injected);
                const Ee = _e.Sw.instance;
                let he;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(he || (he = {}));
                const ve = (e = 'model', t = he.Deep) => {
                        const a = (0, o.useState)(0),
                            n = (a[0], a[1]),
                            s = (0, o.useMemo)(() => (0, ue.F)(), []),
                            r = s.callerUrl,
                            i = s.caller,
                            u = s.resId,
                            l = (0, o.useMemo)(() => {
                                const t = (function (e) {
                                    return ge().has(e);
                                })(r.replace('.js', '.html'));
                                return window.__feature && window.__feature !== i && !t ? `subViews.${i}.${e}` : e;
                            }, [r, i, e]),
                            c = (0, o.useState)(() =>
                                ((e) => {
                                    const t = le(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return de(t) ? t.value : t;
                                })(pe(l)),
                            ),
                            _ = c[0],
                            d = c[1],
                            m = (0, o.useRef)(-1);
                        return (
                            (0, ce.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? he.Deep : he.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== he.None)
                                ) {
                                    const a = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === he.Deep
                                                ? (e === _ && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        s = be(e);
                                    m.current = Ee.addCallback(s, a, u, t === he.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== he.None)
                                    return () => {
                                        Ee.removeCallback(m.current, u);
                                    };
                            }, [u, t]),
                            _
                        );
                    },
                    fe = 'visible_change',
                    Ce = fe,
                    Ae = fe,
                    De = (e, t) => {
                        const a = ve('tutorialModel.triggers.items').filter((a) => {
                            if (!a) return !1;
                            const n = a.value,
                                s = n.triggers.filter((e) => e.value === t);
                            return n.componentId === e && s.length > 0;
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
                var Se = a(4231);
                const Fe = 'TopLabel_base_7f',
                    ye = 'TopLabel_base__ready_00',
                    Be = 'TopLabel_text_d0',
                    we = 'TopLabel_text__hangar_36',
                    ke = 'TopLabel_text__shown_25',
                    xe = 'TopLabel_text__hidden_79',
                    Te = 'TopLabel_text__truncated_29',
                    Ie = (0, o.memo)(({ panelType: e, text: t, parentRef: a, isTruncated: n = !1, show: s = !1 }) => {
                        const r = (0, o.useRef)(!1),
                            i = (0, o.useState)(!1),
                            l = i[0],
                            _ = i[1];
                        (0, o.useEffect)(() => {
                            a || (s && !r.current && (r.current = !0), _(s));
                        }, [s, a]);
                        const d = (0, o.useCallback)(() => {
                                (r.current = !0), _(!0);
                            }, []),
                            m = (0, o.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = a && a.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', m);
                                        }
                                    );
                            }, [a, d, m]),
                            u().createElement(
                                'div',
                                { className: c()(Fe, r.current && ye) },
                                u().createElement(
                                    'div',
                                    { className: c()(Be, e !== Se.w.Setup && we, n && Te, s && l ? ke : xe) },
                                    t,
                                ),
                            )
                        );
                    }),
                    Ne = 'notUsableSection';
                var Re = a(7626);
                const Le = 'Section_base_8a',
                    Oe = 'Section_label_73',
                    Me = 'Section_counter_8a',
                    Pe = 'Section_configLabel_c9',
                    $e = 'Section_configText_eb',
                    He = 'Section_configVehicleIcon_20';
                let ze;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(ze || (ze = {}));
                const je = 'tooltip_watched';
                let We;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(We || (We = {}));
                const Ge = 'epic_battle';
                let Ve, Ze, Ue;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Ve || (Ve = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(Ze || (Ze = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Ue || (Ue = {}));
                const qe = ['action', 'timeLimit'];
                const Xe = 'metrics',
                    Ke = () => Date.now(),
                    Ye = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: s }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: n || null,
                        additional_info: s || null,
                    }),
                    Je = (e, t) => {
                        const a = (0, o.useCallback)(
                            (a, n = ze.Info, s) => {
                                s || (s = {}),
                                    Object.keys(s).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: n,
                                            params: JSON.stringify(s),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => a(e, t, n);
                    },
                    Qe = (e, t) => {
                        const a = Je(e, t),
                            n = (0, o.useRef)(new Map()),
                            s = (0, o.useRef)(new Map()),
                            r = (0, o.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = n.current.get(e);
                                    (void 0 !== t && t > 0) || n.current.set(e, Ke());
                                },
                                [n],
                            ),
                            i = (0, o.useCallback)(() => {
                                n.current.clear(), s.current.clear();
                            }, [n, s]),
                            u = (0, o.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== n.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, Ke());
                                },
                                [n, s],
                            ),
                            l = (0, o.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = n.current.get(e);
                                    if (void 0 === t) return;
                                    const a = s.current.get(e);
                                    if (void 0 === a) return;
                                    s.current.delete(e);
                                    const r = Ke() - a;
                                    n.current.set(e, t + r);
                                },
                                [n, s],
                            ),
                            c = (0, o.useCallback)(
                                (e, t = 0, r, i) => {
                                    const o = n.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== s.current.get(e) && l(e), n.current.delete(e);
                                    const u = (Ke() - o) / 1e3;
                                    u <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, u)),
                                        a(e, r, i));
                                },
                                [n, s, a, l],
                            );
                        return [(e) => r(e), (e, t, a, n) => c(e, t, a, n), () => i(), (e) => u(e), (e) => l(e)];
                    },
                    et = (e) => {
                        const t = Qe(e, Xe),
                            a = t[0],
                            n = t[1],
                            s = t[2],
                            r = t[3],
                            i = t[4],
                            u = (0, o.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        a = e.timeLimit,
                                        s = e.logLevel;
                                    n(t, a, s, Ye(e));
                                },
                                [n],
                            );
                        return [(e) => a(e), (e) => u(e), () => s(), (e) => r(e), (e) => i(e)];
                    },
                    tt = (e, t) => {
                        const a = et(e),
                            n = a[0],
                            s = a[1],
                            r = t.action,
                            i = t.timeLimit,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(t, qe);
                        return (0, o.useMemo)(
                            () => ({
                                onShow: () => n(r || je),
                                onHide: () => s(Object.assign({ action: r || je, timeLimit: i || 2 }, u)),
                            }),
                            [r, i, u, n, s],
                        );
                    },
                    at = (e, t, a, n) => {
                        const s = et(Ge),
                            r = s[0],
                            i = s[1];
                        return [
                            (0, o.useCallback)(() => r(je), [r]),
                            (0, o.useCallback)(
                                () => i({ action: je, timeLimit: 2, item: e, parentScreen: t, itemState: a, info: n }),
                                [i, e, t, a, n],
                            ),
                        ];
                    };
                var nt = a(2056);
                const st = u().memo(function ({ className: e, children: t }) {
                    const a = at(Ze.SkillOrderTooltip, Ve.SetupView),
                        n = a[0],
                        s = a[1];
                    return u().createElement(
                        nt.u,
                        {
                            contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                            onMouseEnter: n,
                            onMouseLeave: s,
                        },
                        u().createElement('div', { className: e }, t),
                    );
                });
                var rt = a(7727);
                const it = 'SlotDivider_base_60',
                    ot = () => u().createElement('div', { className: it });
                var ut = a(3267),
                    lt = a(8253),
                    ct = a(3141);
                const _t = (e) => {
                    const t = (0, o.useRef)(-1),
                        a = (0, o.useCallback)(
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
                    return (0, o.useEffect)(() => () => clearTimeout(t.current), []), a;
                };
                var dt = a(8526),
                    mt = a(5521);
                const pt = 'Grabber_base_cf',
                    bt = 'Grabber_base__enabled_b0',
                    gt = 'Grabber_base__waitingUpdate_1d',
                    Et = 'Grabber_base__updating_f1',
                    ht = 'Grabber_base__active_71',
                    vt = 'Grabber_base__exit_1f',
                    ft = 'Grabber_base__showAnimation_d9';
                var Ct = a(3521),
                    At = a(1820);
                const Dt = ({
                    children: e,
                    id: t,
                    containerRef: a,
                    isEnabled: n = !0,
                    onClick: s,
                    forceCenterX: i,
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
                        S = (function () {
                            const e = (0, o.useRef)(0);
                            return (
                                (0, I.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, o.useMemo)(
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
                        })(),
                        F = 0 !== i && n,
                        y = i ? i - b.current.startCenterX : A;
                    (0, o.useEffect)(() => {
                        if (((b.current.isValid = !1), t))
                            return (0, k.v)(() => {
                                const e = g.current,
                                    n = a.current;
                                if (n && e) {
                                    const a = e.getBoundingClientRect(),
                                        s = n.getBoundingClientRect(),
                                        r = a.left + 0.5 * a.width;
                                    (b.current = {
                                        isValid: !0,
                                        minXRestriction: s.left,
                                        maxXRestriction: s.left + s.width,
                                        startX: a.left,
                                        startCenterX: r,
                                    }),
                                        _(At.m.Ready, { dragId: t, currentCenterX: r });
                                }
                            });
                    }, [m]);
                    const B = (0, o.useCallback)(
                            (e) => {
                                (p.current.isDragActive = e),
                                    f(e),
                                    p.current.grabActivationPassed && !e && (0, Ct.jZ)(!1, d);
                            },
                            [d],
                        ),
                        w = (0, o.useCallback)(() => {
                            _(At.m.DragStart, { dragId: p.current.id }),
                                (p.current.grabActivationPassed = !0),
                                (0, Ct.jZ)(!0, d);
                        }, [_, d]),
                        x = (0, o.useCallback)((e) => {
                            const t = p.current,
                                a = b.current,
                                n = a.startX,
                                s = a.startCenterX,
                                r = a.minXRestriction,
                                i = a.maxXRestriction,
                                o = s - n,
                                u = e - t.clickCenterOffset;
                            t.dropCenterX = (0, Ct.yG)(u, o, r, i);
                        }, []),
                        N = (0, o.useCallback)(
                            (e) => {
                                const t = p.current,
                                    a = b.current;
                                0 === e.button &&
                                    !t.isDragActive &&
                                    a.isValid &&
                                    n &&
                                    !l &&
                                    g.current &&
                                    ((t.actualX = e.clientX),
                                    (t.clickCenterOffset = t.actualX - a.startCenterX),
                                    B(!0));
                            },
                            [n, l, B],
                        ),
                        R = (0, o.useCallback)(() => {
                            !s || (n && b.current.isValid) || s();
                        }, [n, s]);
                    (0, dt.gd)(
                        v ? mt.n.ESCAPE : mt.n.NONE,
                        (0, T.z)(() => B(!1)),
                    ),
                        (0, o.useEffect)(() => {
                            n && i && D(0);
                        }, [i, n]);
                    const L = !v && p.current.grabActivationPassed;
                    (0, o.useLayoutEffect)(() => {
                        p.current.id = t;
                    }, [t]),
                        (0, o.useEffect)(() => {
                            if (L) {
                                const e = p.current;
                                _(At.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    i === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        S.run(() => _(At.m.DropExit, { dragId: e.id })));
                            }
                        }, [L, S, i, _]),
                        (0, o.useEffect)(() => {
                            if (n && v && p.current.id) {
                                const e = r.O.client.events.mouse.up(([e, t]) => {
                                        if ('outside' === t) return B(!1);
                                        const a = p.current,
                                            n = e.clientX;
                                        n === a.actualX && 0 === e.button && !p.current.grabActivationPassed
                                            ? s && s()
                                            : p.current.grabActivationPassed && x(n),
                                            p.current.isDragActive && B(!1);
                                    }),
                                    t = r.O.client.events.mouse.move(([e]) => {
                                        const t = p.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                        const a = e.clientX,
                                            n = t.grabActivationPassed;
                                        !n && w(),
                                            a !== t.actualX &&
                                                ((t.actualX = a),
                                                x(a),
                                                n && _(At.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                D(t.dropCenterX - b.current.startCenterX));
                                    });
                                return () => {
                                    t(), e();
                                };
                            }
                        }, [w, _, v, n, s, B, x]);
                    const O = n ? c()(pt, bt, v && ht, L && vt, F && gt, i && Et) : c()(pt, i && ft);
                    return u().createElement(
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
                                    ((t.grabActivationPassed = !1), S.run(() => _(At.m.DropExit, { dragId: t.id })));
                            },
                            className: O,
                            style: { left: y },
                        },
                        e,
                    );
                };
                let St;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(St || (St = {}));
                const Ft = 'KeyLabel_base_ec',
                    yt = 'KeyLabel_base__current_c2',
                    Bt = 'KeyLabel_base__next_fa',
                    wt = ({ text: e, show: t, panelType: a, shellState: n, className: s }) => {
                        if (!e) return null;
                        const r = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return u().createElement(
                            'div',
                            { className: c()(Ft, n === St.Current && yt, n === St.Next && Bt, s) },
                            u().createElement(Ie, { isTruncated: !0, text: r, show: t, panelType: a }),
                        );
                    };
                var kt = a(7078);
                const xt = ({ children: e, slotType: t, slotId: a, slotIntCD: n, panelType: s, isEnabled: r = !0 }) => {
                        const i = (0, o.useMemo)(() => ({ slotType: t, slotId: a, intCD: n }), [t, a, n]);
                        return u().createElement(
                            kt.t,
                            {
                                isEnabled: r,
                                args: i,
                                decoratorId: [Se.w.Battle, Se.w.Prebattle].includes(s)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            u().createElement('div', null, e),
                        );
                    },
                    Tt = 'Close_base_f3',
                    It = 'Close_base__invisible_0e',
                    Nt = 'Close_base__shown_a2',
                    Rt = 'Close_base__hover_6d',
                    Lt = 'Close_base__down_2b',
                    Ot = (0, o.memo)(
                        ({ id: e, show: t = !0, onClick: a, soundHover: n = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, o.useState)(!1),
                                i = r[0],
                                l = r[1],
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
                                    m(!0), n && (0, rt.G)(n);
                                }, [n]),
                                v = (0, o.useCallback)(() => {
                                    l(!1), m(!1);
                                }, []),
                                f = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, rt.G)(s));
                                    },
                                    [t, s],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && a && a();
                                    },
                                    [t, a],
                                );
                            (0, o.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const A = c()(Tt, !b && It, b && t && Nt, i && Lt, d && Rt);
                            return u().createElement('div', {
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
                    Mt = {
                        base: 'Slot_base_3a',
                        label: 'Slot_label_e6',
                        close: 'Slot_close_bb',
                        disabled: 'Slot_disabled_5d',
                        disabled__fixedhangar: 'Slot_disabled__fixedhangar_d3',
                        disabled__fixedsetup: 'Slot_disabled__fixedsetup_c4',
                        shadow: 'Slot_shadow_a7',
                        category: 'Slot_category_2c',
                    };
                var Pt = a(1641);
                const $t = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: n = 0,
                        args: s,
                        isEnabled: r = !0,
                        onMouseDown: i,
                    }) => {
                        const u = (0, o.useCallback)(() => {
                                (0, _e.c9)(_e.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    rt.$.playYes();
                            }, [s, t, a, n]),
                            l = (0, o.useCallback)(() => {
                                (0, _e.c9)(_e.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, n]),
                            c = (0, o.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === Pt.t.RIGHT)(e) && u();
                                },
                                [i, u],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, o.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Ht = ['children'];
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const jt = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, Ht);
                    return u().createElement(
                        $t,
                        zt({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var Wt = a(1396),
                    Gt = a(5918);
                const Vt = (0, x.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: a,
                            isMountedMoreThanOne: n,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: i,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: p,
                        }) => {
                            const b = (0, H.t)().model.root.get().vehicleCD,
                                g = (0, o.useState)(!0),
                                E = g[0],
                                h = g[1],
                                v = (0, Wt.K)();
                            (0, o.useEffect)(() => {
                                h(!1), v.run(() => h(!0), 100);
                            }, [b]);
                            const f = (0, o.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: a,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: n,
                                }),
                                [e, _, t, a, s, n],
                            );
                            return E
                                ? u().createElement(
                                      Gt.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: i,
                                          itemInstalledSetupIndex: a,
                                      },
                                      u().createElement(
                                          jt,
                                          { isEnabled: !(m || d || r || l), args: f },
                                          u().createElement('div', null, p),
                                      ),
                                  )
                                : u().createElement('div', null, p);
                        },
                    ),
                    Zt = (0, x.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: a,
                            isSelected: n,
                            isSetupSwitching: s,
                            isSectionSelected: r,
                            onActiveSlotChanged: i,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: _,
                            onSlotClear: d,
                            panelType: m,
                            isDisabled: p = !1,
                            isBorderActive: b,
                            isIncompatible: g = !1,
                            grabberId: E,
                            containerRef: h,
                            activeDragId: v,
                            handleGrabberAction: f,
                            forceLeftUpdate: C,
                            potentialDropId: A,
                            blockOnGrabIds: D,
                            contextMenuDisabled: S,
                            groupIndex: F,
                            sectionIndex: y,
                        }) => {
                            const B = (0, H.t)().model.computes.slots.slot(F, y, t),
                                w = B.imageSource,
                                x = B.isInstalled,
                                T = B.itemInstalledSetupIdx,
                                I = B.isMountedMoreThanOne,
                                N = B.overlayType,
                                R = B.keyName,
                                L = B.categoryImgSource,
                                O = B.withAttention,
                                M = B.id,
                                P = B.intCD,
                                $ = B.nonRemovable,
                                z = m === Se.w.Setup,
                                j = !(0, ae.s$)(m),
                                W = !(0, ae.iN)(m),
                                G = m === Se.w.Compare,
                                V = z && r && j,
                                Z = (0, o.useRef)(!1),
                                U = (0, o.useRef)(null),
                                q = -1 === P,
                                X = p || $;
                            (0, o.useEffect)(() => {
                                if (!Z.current && r && n)
                                    return (0, k.v)(() => {
                                        i && i(U, e, M), (Z.current = !0);
                                    });
                                Z.current = !0;
                            }, [M, r, n, i, e]),
                                (0, o.useEffect)(() => {
                                    n && _(U);
                                }, [n, _]);
                            const K = (0, o.useCallback)(() => (!n && j && !s && l(e, M), 500), [M, j, n, s, l, e]),
                                Y = _t(K),
                                J = (0, o.useCallback)(() => {
                                    X || Y('');
                                }, [Y, X]),
                                Q = (0, o.useCallback)(() => {
                                    W && !n && !v && !X && rt.$.playHighlight();
                                }, [n, v, X, W]);
                            (0, o.useEffect)(() => {
                                A && rt.$.playHighlight();
                            }, [A]);
                            const ee = (0, o.useCallback)(() => {
                                    null == d || d(M, e);
                                }, [M, d, e]),
                                te = z && (!x || $),
                                ne = Boolean(E && A === E),
                                se = E && (V || G),
                                re = `${e}-slot-${M}`,
                                ie = L && L.length > 0,
                                oe = ie ? { backgroundImage: `url(${L})` } : {},
                                ue = {
                                    id: E,
                                    containerRef: h,
                                    isEnabled: !q,
                                    onClick: J,
                                    isUpdateAvailable: Boolean(v),
                                    handleAction: f,
                                    forceCenterX: C,
                                    blockOnGrabIds: D,
                                },
                                le = {
                                    isEmpty: q,
                                    intCD: P,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: w,
                                    isDisabled: p,
                                    isInstalled: x,
                                    id: M,
                                    itemInstalledSetupIdx: T,
                                    isMountedMoreThanOne: I,
                                    contextMenuDisabled: S,
                                    isSetupSwitching: s,
                                };
                            return u().createElement(
                                'div',
                                { className: Mt.base, onMouseEnter: Q, id: re },
                                (r || G) &&
                                    !x &&
                                    u().createElement(
                                        'div',
                                        { className: Mt.close },
                                        u().createElement(Ot, { id: `close-${re}`, show: !v, onClick: ee }),
                                    ),
                                u().createElement(
                                    xt,
                                    { slotIntCD: P, slotType: e, slotId: M, isEnabled: !v, panelType: m },
                                    u().createElement(
                                        'div',
                                        { ref: U },
                                        u().createElement(
                                            lt.W,
                                            {
                                                activeDragId: v,
                                                slotType: e,
                                                isSelected: n,
                                                isBorderActive: Boolean(b),
                                                panelType: m,
                                                isDisabled: p,
                                                isPotentialDrop: ne,
                                                nonRemovable: $,
                                                onClick: se ? void 0 : J,
                                            },
                                            j &&
                                                u().createElement(
                                                    'div',
                                                    { className: Mt.label },
                                                    u().createElement(wt, { text: R, show: Boolean(r), panelType: m }),
                                                ),
                                            u().createElement(
                                                ut.J,
                                                { when: Boolean(se), wrapper: Dt, withProps: ue },
                                                u().createElement(
                                                    ut.J,
                                                    { when: j, wrapper: Vt, withProps: le },
                                                    u().createElement(ct.c, {
                                                        imageSource: w,
                                                        isIncompatible: g,
                                                        overlayType: N,
                                                        level: a,
                                                        isTemporary: te,
                                                        withAttention: O,
                                                    }),
                                                ),
                                            ),
                                            ie &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('span', { className: Mt.shadow }),
                                                    u().createElement('span', { className: Mt.category, style: oe }),
                                                ),
                                            X &&
                                                u().createElement('div', {
                                                    className: c()(Mt.disabled, !p && $ && Mt[`disabled__fixed${m}`]),
                                                }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ut = 'BattleAbilitySlot_base_74',
                    qt = 'BattleAbilitySlot_rank_01',
                    Xt = ['rank'];
                const Kt = (e) => {
                    let t = e.rank,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, Xt);
                    return u().createElement(
                        'div',
                        { className: Ut },
                        u().createElement(Zt, a),
                        t && u().createElement('div', { className: qt, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var Yt = a(4814);
                const Jt = 'OptDeviceSlot_base_14',
                    Qt = 'OptDeviceSlot_specializations_c3',
                    ea = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function ta() {
                    return (
                        (ta =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ta.apply(this, arguments)
                    );
                }
                const aa = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.activeSpecsMask,
                            r = e.isChangeSetupIndex,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, ea);
                        const o = (0, H.t)(),
                            l = o.controls,
                            _ = o.model.computes.specializations(t, a, n),
                            d = _.specializations.length,
                            m = i.panelType === Se.w.Setup || i.panelType === Se.w.Compare,
                            p = !(0, ae.s$)(i.panelType),
                            b = _.isDynamic;
                        return u().createElement(
                            'div',
                            { className: c()(Jt, d && !b && !r && 'specializationsSlot') },
                            p &&
                                u().createElement(
                                    'div',
                                    { className: Qt },
                                    u().createElement(Yt.G, {
                                        specializations: _.specializations,
                                        isDynamic: b,
                                        activeSpecsMask: s,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: i.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            u().createElement(Zt, ta({}, i, { groupIndex: t, sectionIndex: a, slotIndex: n })),
                        );
                    }),
                    na = {
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
                        base__fixed: 'ToggleCamouflageSlot_base__fixed_9a',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    sa = ({ id: e, isSelected: t, isLocked: a, onSlotSelected: n, panelType: s }) => {
                        const r = w.yZ,
                            i = (0, o.useCallback)(() => {
                                n(r, e);
                            }, [e, n, r]),
                            l = c()(na.base, na[`base__${s}`], a && na.base__disabled, t && na.base__toggle),
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
                        return u().createElement(
                            xt,
                            { slotType: r, slotId: e, panelType: s },
                            u().createElement(
                                'div',
                                { id: m, className: l, onClick: i, onMouseEnter: rt.$.playHighlight },
                                t && u().createElement('div', { className: na.glow }),
                                u().createElement('div', { className: na.image, style: _ }),
                                u().createElement('div', { className: na.toggle, style: d }),
                            ),
                        );
                    },
                    ra = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function ia() {
                    return (
                        (ia =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ia.apply(this, arguments)
                    );
                }
                const oa = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.sectionType,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, ra);
                        const i = (0, H.t)().model,
                            o = i.computes.slots.slot(t, a, n),
                            l = i.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === s ? _ : -1) === o.id;
                        switch (s) {
                            case w.zn: {
                                const e = o;
                                return u().createElement(
                                    aa,
                                    ia({}, e, r, { groupIndex: t, sectionIndex: a, slotIndex: n, isSelected: d }),
                                );
                            }
                            case w.yZ: {
                                const e = o;
                                return u().createElement(
                                    sa,
                                    ia({}, r, e, { groupIndex: t, sectionIndex: a, slotIndex: n }),
                                );
                            }
                            case w.YN: {
                                const e = o;
                                return u().createElement(
                                    Kt,
                                    ia({}, r, e, { groupIndex: t, sectionIndex: a, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return u().createElement(
                                    Zt,
                                    ia({}, r, { isSelected: d, groupIndex: t, sectionIndex: a, slotIndex: n }),
                                );
                        }
                    }),
                    ua = 'Slots_base_27',
                    la = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function ca() {
                    return (
                        (ca =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ca.apply(this, arguments)
                    );
                }
                const _a = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.sectionType,
                            s = e.onActiveSlotChanged,
                            r = e.isDisabled,
                            i = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, la);
                        const m = (0, o.useRef)(null),
                            p = (0, o.useRef)(null),
                            b = (0, H.t)(),
                            g = b.model,
                            E = b.controls,
                            h = g.computes.slots.length(t, a),
                            v = g.ammunitionPanel.get(),
                            f = v.selectedSection,
                            C = v.selectedSlot,
                            A = v.syncInitiator,
                            D = (0, o.useCallback)(
                                (e, t) => {
                                    E.dragDropSwap({
                                        sectionType: n,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [E, n],
                            ),
                            S = f === n,
                            F = n === w.YN,
                            y = S ? C : -1,
                            B = `${n}-${h}slots`,
                            k = (0, Re.UW)({
                                baseId: B,
                                slotsLength: h,
                                handleSwap: D,
                                setIsExitBlocked: _,
                                syncInitiator: A,
                            }),
                            x = k.handleGrabberAction,
                            T = k.dragState,
                            I = k.getForceCenterX;
                        (0, o.useEffect)(() => {
                            S && -1 !== y && m.current && s(m, f, y);
                        }, [s, S, f, y]);
                        const N = (e, t) => {
                                if ((r || rt.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                E.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                m.current = e ? e.current : null;
                            },
                            L = (e, t) => {
                                E.slotClear({ slotId: e, sectionType: t });
                            };
                        return u().createElement(
                            'div',
                            { id: B, ref: p, className: c()(ua, n) },
                            U(h, (e) => {
                                const c = !F && h > 1 ? `${B}-${e}` : '';
                                return u().createElement(
                                    o.Fragment,
                                    { key: `slot ${t}-${a}-${e}` },
                                    e > 0 && u().createElement(ot, null),
                                    u().createElement(
                                        oa,
                                        ca(
                                            {
                                                groupIndex: t,
                                                sectionIndex: a,
                                                slotIndex: e,
                                                sectionType: n,
                                                isSectionSelected: S,
                                                isDisabled: r,
                                                contextMenuDisabled: F,
                                                slotType: n,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: N,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: c,
                                                containerRef: p,
                                                forceLeftUpdate: I(c),
                                                activeDragId: T.activeDragId,
                                                handleGrabberAction: x,
                                                potentialDropId: T.potentialDropId,
                                                blockOnGrabIds: i,
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
                    da = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function ma() {
                    return (
                        (ma =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ma.apply(this, arguments)
                    );
                }
                const pa = (0, x.Pi)((e) => {
                    let t = e.groupIndex,
                        a = e.sectionIndex,
                        n = e.type,
                        s = e.newItemsCount,
                        r = e.panelType,
                        i = e.sectionsIds,
                        l = e.vehicle,
                        _ = e.vehicleType,
                        d = e.isSetupSwitching,
                        m = e.classMix,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, da);
                    const b = (0, H.t)().model,
                        g = (0, o.useRef)(null),
                        E = b.ammunitionPanel.get(),
                        h = E.selectedSection,
                        v = E.syncInitiator,
                        f = b.computes.slots.length(t, a),
                        C = b.computes.slots.existFilled(t, a),
                        A = De('AmmunitionPanelBattleAbilities', Ce);
                    (0, o.useEffect)(() => {
                        null == A || A.runTrigger(!0);
                    }, [A]);
                    const D = h === n,
                        S = (0, Re.Tu)(n, i),
                        F = S.selfId,
                        y = S.blockOnGrabIds,
                        B = ((l && l.length > 0) || (_ && _.length > 0)) && r !== Se.w.Battle && r !== Se.w.Respawn,
                        w = (0, o.useMemo)(
                            () => ({
                                icon: u().createElement('span', {
                                    className: He,
                                    style: {
                                        backgroundImage: _
                                            ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(_)})`
                                            : '',
                                    },
                                }),
                                vehicle: l,
                            }),
                            [l, _],
                        ),
                        k = f > 0 && r !== Se.w.Compare && r !== Se.w.Battle && r !== Se.w.Respawn,
                        x = R.strings.tank_setup.section.$dyn(n);
                    if ('string' != typeof x)
                        throw new Error(`No top label text for section type ${n} or it's not a string`);
                    return u().createElement(
                        'div',
                        {
                            id: d ? Ne : F,
                            ref: g,
                            className: c()(
                                Le,
                                m,
                                D && 'sectionSelected',
                                f > 1 && 'multiSlot',
                                v >= 0 && C && 'existFilledSlots',
                            ),
                        },
                        B &&
                            u().createElement(
                                st,
                                { className: Pe },
                                u().createElement(oe.z, {
                                    classMix: $e,
                                    text: R.strings.tank_setup.categories.reserves.config(),
                                    binding: w,
                                }),
                            ),
                        k &&
                            u().createElement(
                                'div',
                                { className: Oe },
                                u().createElement(Ie, { text: x, parentRef: g, show: !D, panelType: r }),
                            ),
                        u().createElement(
                            _a,
                            ma({ groupIndex: t, sectionIndex: a, sectionType: n, panelType: r, blockOnGrabIds: y }, p),
                        ),
                        Boolean(s) &&
                            u().createElement(
                                'div',
                                { className: Me },
                                u().createElement(ie, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var ba = a(8598);
                const ga = {
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
                    Ea = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: a,
                        imageSource: n,
                        count: s,
                        isInfinity: r,
                        isSelected: i,
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
                        const S = !(0, ae.s$)(_),
                            F = (0, o.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            y = p && p === f,
                            B = p && p === E,
                            k = (0, o.useMemo)(() => {
                                const n = { slotType: w.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: a,
                                    }),
                                ];
                            }, [d, e, t, a]),
                            x = k[0],
                            T = k[1],
                            I = (0, o.useMemo)(
                                () => ({
                                    id: p,
                                    containerRef: g,
                                    isEnabled: Boolean(p) && i,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: h,
                                    forceCenterX: v,
                                    blockOnGrabIds: C,
                                }),
                                [E, C, g, v, p, h, i],
                            ),
                            N = (0, o.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: d, slotType: w.g9, imageSource: null }),
                                [d, m],
                            );
                        return u().createElement(
                            jt,
                            { isEnabled: S && !b && !D, args: T },
                            u().createElement(
                                kt.t,
                                {
                                    args: x,
                                    decoratorId: [Se.w.Battle, Se.w.Prebattle].includes(_)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !E,
                                },
                                u().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: ga.base },
                                    l &&
                                        u().createElement(
                                            'div',
                                            { className: ga.label },
                                            u().createElement(wt, {
                                                text: l,
                                                show: i || _ === Se.w.Battle || _ === Se.w.Respawn,
                                                shellState: A,
                                                panelType: _,
                                                className: c()(
                                                    0 === m && ga.topLabel__first,
                                                    2 === m && ga.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    u().createElement(
                                        'div',
                                        {
                                            className: c()(
                                                ga.shell,
                                                !E && S && !D && ga.shell__active,
                                                B && ga.shell__grabbing,
                                                !B && y && ga.shell__potential,
                                            ),
                                        },
                                        u().createElement(
                                            ut.J,
                                            { when: S, wrapper: Dt, withProps: I },
                                            u().createElement(
                                                ut.J,
                                                { when: S, wrapper: Gt.y, withProps: N },
                                                u().createElement('div', { className: ga.image, style: F }),
                                                !r && u().createElement(ba.X, { count: s }),
                                                r && u().createElement('div', { className: ga.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    ha = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    va = ({ id: e, isSelected: t, imageSource: a, onSlotSelected: n, panelType: s }) => {
                        const r = (0, o.useCallback)(() => {
                                !t && n(e);
                            }, [e, t, n]),
                            i = c()(ha.slot, !t && ha.slot__active, ha.slot__compare),
                            l = (0, o.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            _ = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return u().createElement(
                            xt,
                            { slotType: w.WI, slotId: e, panelType: s },
                            u().createElement(
                                'div',
                                { className: ha.base },
                                u().createElement(
                                    'div',
                                    { className: i, onClick: r, id: `shell-slot-${e}` },
                                    t && u().createElement('div', { className: ha.glow }),
                                    u().createElement('div', { className: ha.image, style: l }),
                                    u().createElement('div', { className: ha.toggle, style: _ }),
                                ),
                            ),
                        );
                    },
                    fa = 'ShellContainer_base_46',
                    Ca = 'ShellContainer_base__compressed_13',
                    Aa = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Da() {
                    return (
                        (Da =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Da.apply(this, arguments)
                    );
                }
                const Sa = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.isCompare,
                            r = e.handleSlotSelected,
                            i = e.baseId,
                            o = e.grabber,
                            l = e.panelType,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, Aa);
                        const d = o.handleGrabberAction,
                            m = o.dragState,
                            p = o.getForceCenterX,
                            b = (0, H.t)().model,
                            g = b.computes.slots.length(t, a),
                            E = b.computes.slots.slot(t, a, n),
                            h = !s && g > 1 ? `${i}-${E.id}` : '';
                        return (0, ae.j2)(E)
                            ? null
                            : u().createElement(
                                  'div',
                                  { key: E.id, className: c()(fa, !s && 0 !== n && Ca) },
                                  s
                                      ? u().createElement(va, Da({}, E, { onSlotSelected: r, panelType: l }))
                                      : u().createElement(
                                            Ea,
                                            Da(
                                                {},
                                                E,
                                                {
                                                    slotIndex: n,
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
                    Fa = 'Shells_base_f9',
                    ya = (0, x.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: a,
                            isSelected: n,
                            syncInitiator: s,
                            blockOnGrabIds: r,
                            isDisabled: i,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = (0, H.t)(),
                                p = m.model,
                                b = m.controls,
                                g = p.computes.slots.length(_, d),
                                E = (0, o.useRef)(!1),
                                h = (0, o.useRef)(null),
                                v = a ? w.WI : w.g9,
                                f = `${v}-${g}shells`,
                                C = !(0, ae.iN)(e),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        b.sectionSelect({ selectedSlot: e, selectedSection: v }), C && rt.$.playClick();
                                    },
                                    [b, v, C],
                                ),
                                D = (0, o.useCallback)(() => {
                                    n || a || i || l || A(0);
                                }, [n, a, l, i, A]),
                                S = (0, o.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: v,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, v],
                                ),
                                F = (0, Re.UW)({
                                    baseId: f,
                                    slotsLength: g,
                                    handleSwap: S,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, o.useEffect)(
                                    () =>
                                        (0, k.v)(() => {
                                            E.current = !0;
                                        }),
                                    [],
                                ),
                                (0, o.useEffect)(() => {
                                    if (n && e === Se.w.Setup) {
                                        if (!E.current)
                                            return (0, k.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [n, e, t]),
                                u().createElement(
                                    'div',
                                    {
                                        id: f,
                                        ref: h,
                                        className: Fa,
                                        onClick: D,
                                        onMouseEnter: () => {
                                            !i && C && rt.$.playHighlight();
                                        },
                                    },
                                    U(g, (t) =>
                                        u().createElement(Sa, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: a,
                                            containerRef: h,
                                            handleSlotSelected: A,
                                            panelType: e,
                                            blockOnGrabIds: r,
                                            isSelected: n,
                                            isDisabled: i,
                                            isSetupSwitching: l,
                                            grabber: F,
                                            baseId: f,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Ba = {
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
                        base__fixed: 'ShellsSection_base__fixed_d4',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    wa = [Se.w.Hangar, Se.w.Battle, Se.w.Prebattle, Se.w.Respawn],
                    ka = (0, x.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: a,
                            onActiveSlotChanged: n,
                            isDisabled: s,
                            isBorderActive: r,
                            classMix: i,
                            isSetupSwitching: l,
                            setIsExitBlocked: _,
                            newItemsCount: d,
                            groupIndex: m,
                            sectionIndex: p,
                        }) => {
                            const b = (0, H.t)().model,
                                g = b.ammunitionPanel.get(),
                                E = g.ammoNotFull,
                                h = g.selectedSection,
                                v = g.syncInitiator,
                                f = (0, o.useRef)(null),
                                C = a === Se.w.Compare,
                                A = a === Se.w.Prebattle && e === w.g9,
                                D = h === e || A,
                                S = (0, o.useCallback)(() => {
                                    n(f, h, 0);
                                }, [n, h]),
                                F = (0, Re.Tu)(e, t),
                                y = F.selfId,
                                B = F.blockOnGrabIds,
                                k = ((e) => wa.includes(e))(a) && !s && E,
                                x = b.computes.slots.filteredLength(m, p),
                                T = !C && a !== Se.w.Battle && a !== Se.w.Respawn;
                            return u().createElement(
                                'div',
                                {
                                    id: l ? Ne : y,
                                    className: c()(
                                        Ba.base,
                                        i,
                                        Ba[`base__${a}`],
                                        !r && D && Ba.base__selected,
                                        C && Ba.base__compare,
                                        s && Ba.base__disabled,
                                    ),
                                    ref: f,
                                },
                                k && u().createElement('div', { className: Ba.attention }),
                                T &&
                                    u().createElement(
                                        'div',
                                        { className: Ba.label },
                                        u().createElement(Ie, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: f,
                                            show: !D,
                                            panelType: a,
                                        }),
                                    ),
                                k &&
                                    u().createElement('div', {
                                        className: c()(
                                            Ba.border,
                                            2 === x && Ba.border__double,
                                            3 === x && Ba.border__triple,
                                        ),
                                    }),
                                u().createElement(ya, {
                                    groupIndex: m,
                                    sectionIndex: p,
                                    panelType: a,
                                    onSelected: S,
                                    isSelected: D,
                                    isCompare: C,
                                    syncInitiator: v,
                                    blockOnGrabIds: B,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    u().createElement(
                                        'div',
                                        { className: Ba.counter },
                                        u().createElement(ie, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && u().createElement('div', { className: Ba.disabled }),
                            );
                        },
                    ),
                    xa = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Ta() {
                    return (
                        (Ta =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ta.apply(this, arguments)
                    );
                }
                const Ia = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: a = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: s,
                            isChangeSetupIndex: r,
                            setIsExitBlocked: i,
                        }) => {
                            const o = (0, H.t)().model,
                                l = M(['section'], xa),
                                _ = o.computes.sections.IDs(e),
                                d = {
                                    panelType: t,
                                    isDisabled: a,
                                    onActiveSlotChanged: n,
                                    isBorderActive: s,
                                    sectionsIds: _,
                                    isChangeSetupIndex: r,
                                    setIsExitBlocked: i,
                                };
                            return u().createElement(
                                'div',
                                { className: xa.base },
                                U(o.computes.sections.length(e), (a) => {
                                    const n = o.computes.sections.section(e, a);
                                    if (!n.slots || !n.slots.length) return null;
                                    const s = c()(
                                        l.section,
                                        0 !== a && (0, ae.s$)(t) && xa.section__battle,
                                        0 === a && xa.section__first,
                                    );
                                    if (n.type === w.g9 || n.type === w.WI) {
                                        const t = n;
                                        return u().createElement(
                                            ka,
                                            Ta({}, t, d, {
                                                groupIndex: e,
                                                sectionIndex: a,
                                                isSetupSwitching: r,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: s,
                                            }),
                                        );
                                    }
                                    return u().createElement(
                                        pa,
                                        Ta({}, n, d, {
                                            groupIndex: e,
                                            sectionIndex: a,
                                            isSetupSwitching: r,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: s,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Na = 'KeyboardKey_base_57',
                    Ra = 'KeyboardKey_back_43',
                    La = u().memo(({ text: e }) =>
                        u().createElement('div', { className: Na }, u().createElement('div', { className: Ra }, e)),
                    ),
                    Oa = 'SetupSwitchHotkey_base_4c',
                    Ma = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Pa = 'SetupSwitchHotkey_plusWrapper_f0',
                    $a = 'SetupSwitchHotkey_plus_f0',
                    Ha = 'SetupSwitchHotkey_plus__horizontal_e0',
                    za = 'SetupSwitchHotkey_plus__vertical_5b',
                    ja = u().memo(({ hotKeys: e }) =>
                        u().createElement(
                            'div',
                            { className: Oa },
                            e.map((e, t) => {
                                if (!e) return null;
                                const a = e.value;
                                return 0 === t
                                    ? u().createElement(La, { key: t, text: a })
                                    : u().createElement(
                                          'div',
                                          { key: t, className: Ma },
                                          u().createElement(
                                              'div',
                                              { className: Pa },
                                              u().createElement('div', { className: `${$a} ${Ha}` }),
                                              u().createElement('div', { className: `${$a} ${za}` }),
                                          ),
                                          u().createElement(La, { text: a }),
                                      );
                            }),
                        ),
                    ),
                    Wa = {
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
                function Ga() {
                    return (
                        (Ga =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ga.apply(this, arguments)
                    );
                }
                const Va = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Za = (e) => e.setupSelector.hotKeys,
                    Ua = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: a,
                            setSetupSwitching: n,
                            handleSetupSwitching: s,
                        }) => {
                            const r = M(['switch'], Wa),
                                i = (0, H.t)().model,
                                o = i.root.get().isDisabled,
                                l = i.computes.groups.group(e);
                            return u().createElement(
                                'div',
                                { key: l.groupId, className: Wa.base },
                                u().createElement(
                                    'div',
                                    { className: Wa.wrapper },
                                    u().createElement(
                                        te,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, n),
                                        u().createElement(Ia, Ga({}, t, { groupIndex: e, isChangeSetupIndex: a })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        u().createElement(
                                            'div',
                                            { className: c()(r.switch, (0, ae.iN)(t.panelType) && Wa.switch__battle) },
                                            u().createElement(X._, {
                                                states: l.setupSelector.states,
                                                onClick: s,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                u().createElement(
                                                    q.i,
                                                    {
                                                        header: Va.title(),
                                                        body: String(Va.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    u().createElement('div', {
                                                        className: Wa.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = l),
                                ((d = t.panelType) === Se.w.Battle || d === Se.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    Za(_) &&
                                    u().createElement(
                                        'div',
                                        { className: c()(Wa.hint, o && Wa.hint__disabled) },
                                        u().createElement(ja, { hotKeys: Za(l) }),
                                    )),
                            );
                            var _, d;
                        },
                    ),
                    qa = 'Groups_base_de',
                    Xa = (0, x.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: a, setSetupSwitching: n, children: s }) => {
                            const r = (0, H.t)(),
                                i = r.model,
                                l = r.controls,
                                c = i.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            (0, o.useEffect)(() => {
                                (e.panelType !== Se.w.Hangar && e.panelType !== Se.w.Setup) || !a || n(!1);
                            }, [a, e.panelType, n]),
                                (0, o.useEffect)(() => {
                                    e.panelType === Se.w.Respawn && n(!1);
                                }, [d, e.panelType, n]);
                            const m = (0, o.useCallback)(
                                (t) => {
                                    e.panelType === Se.w.Respawn && n(!0), _(t);
                                },
                                [_, e.panelType, n],
                            );
                            return u().createElement(
                                'div',
                                { className: qa },
                                U(i.computes.groups.length(), (a) =>
                                    u().createElement(Ua, {
                                        key: `group-${a}`,
                                        sectionProps: e,
                                        groupIndex: a,
                                        isSetupSwitching: t,
                                        setSetupSwitching: n,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function Ka() {
                    return (
                        (Ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ka.apply(this, arguments)
                    );
                }
                const Ya = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = u().createElement('div', { className: a }, e);
                        if (t.header || t.body) return u().createElement(q.i, t, n);
                        const s = t.contentId;
                        return s
                            ? u().createElement(nt.u, Ka({}, t, { contentId: s }), n)
                            : u().createElement(kt.t, t, n);
                    },
                    Ja = 'RoleSkillSlot_base_c4',
                    Qa = 'RoleSkillSlot_icon_79',
                    en = ({ roleSkill: e, tooltipId: t, tooltipHeader: a, tooltipBody: n, className: s }) => {
                        const r = (0, o.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: a, body: n, hasHtmlContent: !0 },
                                header: a,
                                body: n,
                                ignoreShowDelay: !0,
                            }),
                            [e, a, n, t],
                        );
                        return u().createElement(
                            Ya,
                            { tooltipArgs: r, className: c()(Ja, s) },
                            u().createElement('div', {
                                className: Qa,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    tn = 'SlotGlow_base_40',
                    an = 'SlotGlow_glow_a9',
                    nn = 'SlotGlow_glow__initialized_8d',
                    sn = 'SlotGlow_glow__shown_f2',
                    rn = 'SlotGlow_glow__hidden_94',
                    on = (0, o.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: a }) => {
                        const n = (0, o.useState)({ offset: e, slotWidth: t }),
                            s = n[0],
                            i = n[1],
                            l = (0, o.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, o.useEffect)(() => {
                            let a = l.current.initialized;
                            !a && e && ((a = !0), i({ offset: e, slotWidth: t })),
                                (l.current = { initialized: a, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, o.useEffect)(() => {
                                a || i(l.current);
                            }, [a]);
                        const _ = (0, o.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${r.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !a && s.offset === l.current.offset,
                            m = c()(an, l.current.initialized && nn, d ? sn : rn);
                        return u().createElement(
                            'div',
                            { className: tn },
                            u().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    un = (0, x.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: a,
                            isDisabled: n = !1,
                            onResize: s,
                            setIsExitBlocked: i,
                        }) => {
                            const l = (0, H.t)(),
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
                                S = (0, o.useState)(!1),
                                F = S[0],
                                y = S[1],
                                B = (0, o.useRef)(null),
                                w = (0, o.useContext)(N),
                                x = (0, o.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                T = (0, o.useCallback)(
                                    (e, t) => {
                                        if (h || p || a !== Se.w.Hangar) return;
                                        const n = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        d.sectionResized(Object.assign({ sectionType: e }, n)),
                                            w && (w.freeze(), w.resize());
                                    },
                                    [h, p, a, d, w],
                                ),
                                I = (0, o.useCallback)(
                                    (e) => {
                                        T('main', e);
                                    },
                                    [T],
                                );
                            ((e, t, a, n = []) => {
                                const s = P(
                                    () =>
                                        (0, k.v)(() =>
                                            (0, k.v)(() => {
                                                if (e.current) {
                                                    const a = e.current.getBoundingClientRect(),
                                                        n = {
                                                            width: r.O.view.pxToRem(a.width),
                                                            height: r.O.view.pxToRem(a.height),
                                                            offsetX: r.O.view.pxToRem(a.left),
                                                            offsetY: r.O.view.pxToRem(a.top),
                                                        };
                                                    window.tutorialApi.updateComponents(), t(n);
                                                }
                                            }),
                                        ),
                                    [t, e],
                                );
                                (0, o.useEffect)(() => {
                                    s();
                                }, [s, ...n]),
                                    (0, o.useEffect)(() => {
                                        if (a)
                                            return (
                                                engine.on('clientResized', s),
                                                () => {
                                                    engine.off('clientResized', s);
                                                }
                                            );
                                    }, [a, s]);
                            })(B, I, !0, [b]),
                                (0, o.useEffect)(() => () => I(), [I]);
                            const R = (0, o.useCallback)(() => {
                                    y(!1);
                                }, []),
                                L = (0, o.useCallback)(() => {
                                    if (x.current.element && B.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            t = B.current.getBoundingClientRect();
                                        D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                O = (0, o.useCallback)(
                                    (e, t, a) => {
                                        if (e.current && B.current) {
                                            const n = ((e, t, a) =>
                                                e !== a.current.slotIndex || t !== a.current.sectionIndex)(a, t, x);
                                            (x.current.element = e.current),
                                                (x.current.slotIndex = a),
                                                (x.current.sectionIndex = t),
                                                f.current && n ? y(!0) : (f.current = !0),
                                                x.current.generation && L();
                                        }
                                    },
                                    [L],
                                ),
                                $ = (0, o.useCallback)(
                                    () =>
                                        (0, k.v)(() => {
                                            (x.current.generation += 1), L();
                                        }),
                                    [x, L],
                                );
                            (0, o.useEffect)(() => (0, k.v)($), [$]),
                                (0, o.useEffect)(
                                    () => (
                                        engine.on('clientResized', $),
                                        () => {
                                            engine.off('clientResized', $);
                                        }
                                    ),
                                    [$],
                                );
                            const j = A.slotWidth,
                                W = A.slotOffset,
                                G = c()(z.base, !t && z.base__locked, !e && z.base__hidden, n && z.base__disabled),
                                V = c()(z.border, !F && z.border__hidden),
                                U = a === Se.w.Setup || a === Se.w.Compare,
                                q = {
                                    panelType: a,
                                    isDisabled: n,
                                    onActiveSlotChanged: O,
                                    isBorderActive: F,
                                    setIsExitBlocked: i,
                                };
                            (0, o.useEffect)(() => {
                                null == s || s();
                            }, [s, g.roleSkill]);
                            const X = M(['roleSkillSlot'], z);
                            return u().createElement(
                                'div',
                                { ref: B, className: G },
                                U &&
                                    u().createElement(on, {
                                        key: x.current.generation,
                                        slotOffset: W,
                                        slotWidth: j,
                                        isAnimationRunning: F,
                                    }),
                                u().createElement(
                                    Xa,
                                    { isSetupSwitching: p || h, sectionProps: q, isReady: t, setSetupSwitching: v },
                                    g.roleSkill &&
                                        u().createElement(en, {
                                            roleSkill: g.roleSkill,
                                            tooltipId: g.tooltipId,
                                            tooltipHeader: g.tooltipHeader,
                                            tooltipBody: g.tooltipBody,
                                            className: c()(z.roleSkillSlot, z[`roleSkillSlot__${a}`], X.roleSkillSlot),
                                        }),
                                ),
                                U &&
                                    u().createElement(
                                        'div',
                                        { className: V },
                                        u().createElement(Z, { slotWidth: j, slotOffset: W, onAnimationEnd: R }),
                                    ),
                            );
                        },
                    );
                var ln = a(9152);
                const cn = (0, o.createContext)(null),
                    _n = () => {
                        const e = (0, o.useContext)(cn);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var dn = a(3028),
                    mn = a(1922),
                    pn = a(2262),
                    bn = a(5310),
                    gn = a(7198);
                const En = 'model.tankSetup.frontlineSetup',
                    hn = {
                        base: 'AbilitiesActionsPanel_base_c0',
                        base__tiny: 'AbilitiesActionsPanel_base__tiny_b8',
                        toReservesBtn: 'AbilitiesActionsPanel_toReservesBtn_6b',
                        checkBox: 'AbilitiesActionsPanel_checkBox_77',
                        checkBoxZone: 'AbilitiesActionsPanel_checkBoxZone_49',
                        checkBoxLabel: 'AbilitiesActionsPanel_checkBoxLabel_2a',
                        vehicleIcon: 'AbilitiesActionsPanel_vehicleIcon_2f',
                    };
                var vn = a(3457);
                const fn = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let Cn, An;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(Cn || (Cn = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(An || (An = {}));
                const Dn = u().memo(function ({ value: e, className: t, theme: a, size: n }) {
                        return u().createElement(
                            'div',
                            { className: c()(fn.base, fn[`base__${a}`], fn[`base__${n}`], t) },
                            u().createElement('div', { className: fn.label }, e),
                            u().createElement('div', { className: fn.icon }),
                        );
                    }),
                    Sn = u().memo(function ({ pointsNeeded: e, isEnabled: t, children: a }) {
                        return u().createElement(
                            nt.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            u().createElement('div', null, a),
                        );
                    }),
                    Fn = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    yn = u().memo(function ({ price: e, isAvailable: t, onPurchase: a, onCancel: n }) {
                        const s = { pointsNeeded: e - (0, o.useContext)(jo), isEnabled: !t };
                        return u().createElement(
                            'div',
                            { className: c()(Fn.base, t && Fn.base__isAvailable) },
                            u().createElement(
                                Sn,
                                s,
                                u().createElement(
                                    'div',
                                    { className: Fn.priceContainer },
                                    u().createElement(
                                        'div',
                                        { className: Fn.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    u().createElement(Dn, { value: e, theme: t ? An.Brown : An.Red, size: Cn.Big }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Fn.actions },
                                u().createElement(
                                    Sn,
                                    s,
                                    u().createElement(
                                        vn.u5,
                                        {
                                            size: vn.qE.medium,
                                            disabled: !t,
                                            onClick: a,
                                            mixClass: c()(Fn.purchaseButton, Fn.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                u().createElement(
                                    vn.u5,
                                    { size: vn.qE.medium, type: vn.L$.secondary, mixClass: Fn.button, onClick: n },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function Bn() {
                    return (
                        (Bn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Bn.apply(this, arguments)
                    );
                }
                const wn = () => {
                        const e = (0, mn.GS)(),
                            t = (0, o.useContext)(jo),
                            a = ve(En),
                            n = a.isTypeSelected,
                            s = a.vehicleType,
                            r = a.onChangeApplyAbilitiesToTypeSettings,
                            i = a.onDealConfirmed,
                            l = a.onDealCancelled,
                            _ = a.totalPurchasePrice,
                            d = a.purchaseSelectedAbilities,
                            m = ve(`${En}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            g = m.canCancel,
                            E = (0, O.BN)(s),
                            h = (0, o.useCallback)(() => r(), [r]),
                            v = (0, o.useCallback)(() => i(), [i]),
                            f = (0, o.useCallback)(() => l(), [l]),
                            C = (0, o.useCallback)(() => d(), [d]),
                            A = c()(hn.base, e && hn[`base__${e}`]),
                            D = c()(hn.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            S = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: E
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(E)})`
                                        : '',
                                }),
                                [E],
                            ),
                            F = (0, o.useMemo)(
                                () => ({
                                    icon: u().createElement('span', { className: hn.vehicleIcon, style: S }),
                                    vehicle: R.strings.menu.classes.short.$dyn(E),
                                }),
                                [S, E],
                            ),
                            y = De('ShowAbilitiesButton', Ae),
                            B = (0, o.useRef)(_),
                            k = (0, o.useRef)(t);
                        (0, o.useEffect)(() => {
                            (B.current = _), (k.current = t);
                        }, [_, t]),
                            (0, o.useEffect)(() => {
                                y && y.runTrigger(!0);
                            }, [y]);
                        const x = De('ApplyAbilitiesToTypeCheckbox', Ae);
                        (0, o.useEffect)(() => {
                            x && x.runTrigger(!0);
                        }, [x]);
                        const T = tt(Ge, { item: Ze.AbilitiesCheckboxTooltip, parentScreen: Ve.SetupView }),
                            I = _ || B.current,
                            N = I > 0 && t === k.current,
                            L = !N && b;
                        return u().createElement(
                            'div',
                            { className: A },
                            L &&
                                u().createElement(
                                    'div',
                                    { className: D },
                                    u().createElement(
                                        q.i,
                                        Bn(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(E) },
                                            T,
                                        ),
                                        u().createElement(
                                            'div',
                                            { className: hn.checkBoxZone },
                                            u().createElement(
                                                pn.XZ,
                                                { isChecked: n, onChange: h, type: pn.Rh.main, size: pn.yB.medium },
                                                u().createElement(
                                                    'span',
                                                    { className: hn.checkBoxLabel },
                                                    u().createElement(oe.z, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: F,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            u().createElement(
                                bn.f,
                                { when: !0, canAccept: N || L },
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    N &&
                                        u().createElement(yn, {
                                            price: I,
                                            isAvailable: t >= I,
                                            onPurchase: C,
                                            onCancel: f,
                                        }),
                                    L &&
                                        u().createElement(gn.Z, {
                                            applyBtnString: n ? w.qZ : w.k4,
                                            isDisabled: p,
                                            canCancel: g,
                                            onCancel: f,
                                            onConfirm: v,
                                        }),
                                ),
                            ),
                        );
                    },
                    kn = (e, t, a) => (a < e ? e : a > t ? t : a);
                function xn(e, t, a = []) {
                    const n = (0, o.useRef)(0),
                        s = (0, o.useCallback)(() => window.clearInterval(n.current), a || []);
                    (0, o.useEffect)(() => s, [s]);
                    const r = (null != a ? a : []).concat([t]);
                    return [
                        (0, o.useCallback)((a) => {
                            (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, r),
                        s,
                    ];
                }
                function Tn(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return In(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return In(e, t);
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
                function In(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                function Nn(e, t, a) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (e, t, a, n) {
                                let s,
                                    r = !1,
                                    i = 0;
                                function o() {
                                    s && clearTimeout(s);
                                }
                                function u(...u) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function _() {
                                        (i = Date.now()), a.apply(l, u);
                                    }
                                    r ||
                                        (n && !s && _(),
                                        o(),
                                        void 0 === n && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (s = setTimeout(
                                                  n
                                                      ? function () {
                                                            s = void 0;
                                                        }
                                                      : _,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                                    (u.cancel = function () {
                                        o(), (r = !0);
                                    }),
                                    u
                                );
                            })(a, e),
                        t,
                    );
                    return (0, o.useEffect)(() => n.cancel, [n]), n;
                }
                var Rn = a(7030);
                let Ln;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ln || (Ln = {}));
                const On = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Mn = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: n,
                        getWrapperSize: s,
                        forceTriggerMouseMove: r,
                    }) => {
                        const i = (e, a) => {
                            const n = t(e),
                                s = n[0],
                                r = n[1];
                            return r <= s ? 0 : kn(s, r, a);
                        };
                        return (u = {}) => {
                            const l = u.settings,
                                c = void 0 === l ? On : l,
                                _ = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                m = (0, o.useRef)(!1),
                                p = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        n = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        s = (e, ...a) => {
                                            for (var n, s = Tn(t(e).values()); !(n = s()).done; ) (0, n.value)(...a);
                                        };
                                    return (0, o.useMemo)(() => ({ on: a, off: n, trigger: s }), []);
                                })(),
                                b = Nn(
                                    () => {
                                        r && r();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Rn.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (a(t, e), p.trigger('change', e), r && m.current && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                E = g[0],
                                h = g[1],
                                v = (0, o.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const s = E.scrollPosition.get(),
                                            r = (null != (n = E.scrollPosition.goal) ? n : 0) - s;
                                        return i(e, t * a + r + s);
                                    },
                                    [E.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            h.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, E.scrollPosition],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            a = d.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            r = v(t, e, n);
                                        f(r);
                                    },
                                    [f, v, c.step],
                                ),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(n(e)),
                                            _.current && p.trigger('mouseWheel', e, E.scrollPosition, t(_.current));
                                    },
                                    [E.scrollPosition, C, p],
                                ),
                                D = P(
                                    () =>
                                        (0, k.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (f(i(e, E.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [f, E.scrollPosition.goal],
                                ),
                                S = (0, T.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = i(e, E.scrollPosition.goal);
                                    t !== E.scrollPosition.goal && f(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
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
                                    if (!e || !r) return;
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
                                            e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', a);
                                        }
                                    );
                                }, [_]);
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? s(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: A,
                                    applyScroll: f,
                                    applyStepTo: C,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: E,
                                    recalculateContent: S,
                                    events: { on: p.on, off: p.off },
                                }),
                                [E.scrollPosition, f, C, p.off, p.on, S, A, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Pn = Mn({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ln.Next : Ln.Prev),
                        forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                    }),
                    $n = 'HorizontalBar_base_49',
                    Hn = 'HorizontalBar_base__nonActive_82',
                    zn = 'HorizontalBar_leftButton_5f',
                    jn = 'HorizontalBar_rightButton_03',
                    Wn = 'HorizontalBar_track_0d',
                    Gn = 'HorizontalBar_thumb_fd',
                    Vn = 'HorizontalBar_rail_32',
                    Zn = 'disable',
                    Un = { pending: !1, offset: 0 },
                    qn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Xn = () => {},
                    Kn = (e, t) => Math.max(20, e.offsetWidth * t),
                    Yn = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = qn, onDrag: n = Xn }) => {
                        const s = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, o.useState)(Un),
                            b = p[0],
                            g = p[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = () => {
                                const t = _.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(n && t && a && s)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / s),
                                    u = kn(0, 1, r / (s - n)),
                                    c = (t.offsetWidth - Kn(t, o)) * u;
                                (a.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (i.current && l.current && _.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Zn), void l.current.classList.remove(Zn);
                                            if (
                                                ((t = _.current),
                                                (a = d.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Zn), void l.current.classList.add(Zn);
                                            var t, a;
                                            i.current.classList.remove(Zn), l.current.classList.remove(Zn);
                                        }
                                    })(c);
                            },
                            v = (0, T.z)(() => {
                                (() => {
                                    const t = d.current,
                                        a = _.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && a)) return;
                                    const i = Math.min(1, n / r);
                                    (t.style.width = `${Kn(a, i)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 === i ? s.current.classList.add(Hn) : s.current.classList.remove(Hn));
                                })(),
                                    h();
                            });
                        (0, o.useEffect)(() => (0, k.v)(v)),
                            (0, o.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let a = Xn;
                                        const n = () => {
                                            a(), (a = (0, k.v)(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!b.pending) return;
                                const t = r.O.client.events.mouse.move(([t, a]) => {
                                        var s;
                                        const r = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!r || !i) return;
                                        const o = _.current,
                                            u = d.current;
                                        if (!o || !u) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - b.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: c });
                                    }),
                                    a = r.O.client.events.mouse.up(() => {
                                        t(), E(Un);
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, b.offset, b.pending, n, E]);
                        const f = xn((t) => e.applyStepTo(t), m, [e]),
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
                            e.target.classList.contains(Zn) || (0, rt.G)('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: c()($n, t.base), ref: s, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: c()(zn, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Zn) ||
                                        0 !== e.button ||
                                        ((0, rt.G)('play'), C(Ln.Next));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: D,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: c()(Wn, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, rt.G)('play'), t.target === n))
                                                E({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = d.current,
                                                        s = e.contentRef.current;
                                                    if (!n || !s) return;
                                                    const r = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Ln.Prev : Ln.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: D,
                                },
                                u().createElement('div', { ref: d, className: c()(Gn, t.thumb) }),
                                u().createElement('div', { className: c()(Vn, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: c()(jn, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Zn) ||
                                        0 !== e.button ||
                                        ((0, rt.G)('play'), C(Ln.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Jn = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Qn = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: s,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(Jn.base, e.base) });
                            }, [n]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: c()(Jn.defaultScroll, a), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: c()(Jn.defaultScrollArea, s) },
                                u().createElement(es, { className: i, api: m, classNames: r }, e),
                            ),
                            u().createElement(Yn, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    es = ({ api: e, className: t, classNames: a, children: n }) => (
                        (0, o.useEffect)(() => (0, k.v)(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: c()(Jn.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: c()(Jn.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: c()(Jn.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (es.Bar = Yn), (es.Default = Qn);
                const ts = Mn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ln.Next : Ln.Prev),
                    }),
                    as = 'VerticalBar_base_f3',
                    ns = 'VerticalBar_base__nonActive_42',
                    ss = 'VerticalBar_topButton_d7',
                    rs = 'VerticalBar_bottomButton_06',
                    is = 'VerticalBar_track_df',
                    os = 'VerticalBar_thumb_32',
                    us = 'VerticalBar_rail_43',
                    ls = 'disable',
                    cs = () => {},
                    _s = { pending: !1, offset: 0 },
                    ds = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ms = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ps = (e, t) => Math.max(20, e.offsetHeight * t),
                    bs = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = ds, onDrag: n = cs }) => {
                        const s = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, o.useState)(_s),
                            b = p[0],
                            g = p[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = (0, T.z)(() => {
                                const t = d.current,
                                    a = _.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const i = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${ps(a, i)}px`),
                                    (t.style.display = 'flex'),
                                    s.current &&
                                        (1 === i ? s.current.classList.add(ns) : s.current.classList.remove(ns)),
                                    i
                                );
                            }),
                            v = (0, T.z)(() => {
                                const t = _.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(n && t && a && s)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / s),
                                    u = kn(0, 1, r / (s - n)),
                                    c = (t.offsetHeight - ps(t, o)) * u;
                                (a.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (i.current && l.current && _.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(ls), void l.current.classList.remove(ls);
                                            if (
                                                ((t = _.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(ls), void l.current.classList.add(ls);
                                            var t, a;
                                            i.current.classList.remove(ls), l.current.classList.remove(ls);
                                        }
                                    })(c);
                            }),
                            f = (0, T.z)(() => {
                                ms(e, () => {
                                    h(), v();
                                });
                            });
                        (0, o.useEffect)(() => (0, k.v)(f)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    ms(e, () => {
                                        v();
                                    });
                                };
                                let a = cs;
                                const n = () => {
                                    a(), (a = (0, k.v)(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!b.pending) return;
                                const t = r.O.client.events.mouse.up(() => {
                                        E(_s);
                                    }),
                                    a = r.O.client.events.mouse.move(([t]) => {
                                        ms(e, (a) => {
                                            const s = _.current,
                                                r = d.current,
                                                i = e.getContainerSize();
                                            if (!s || !r || !i) return;
                                            const o = t.screenY - b.offset - s.getBoundingClientRect().y,
                                                u = (o / s.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: u });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, b.offset, b.pending, n, E]);
                        const C = xn((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const S = (e) => {
                            e.target.classList.contains(ls) || (0, rt.G)('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: c()(as, t.base), ref: s, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: c()(ss, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ls) ||
                                        0 !== e.button ||
                                        ((0, rt.G)('play'), A(Ln.Next));
                                },
                                ref: i,
                                onMouseEnter: S,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: c()(is, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, rt.G)('play'), t.target === n))
                                                E({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        ms(e, (n) => {
                                                            if (!n) return;
                                                            const s = a(e),
                                                                r = e.clampPosition(n, n.scrollTop + s * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Ln.Prev : Ln.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: S,
                                },
                                u().createElement('div', { ref: d, className: c()(os, t.thumb) }),
                                u().createElement('div', { className: c()(us, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: c()(rs, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ls) ||
                                        0 !== e.button ||
                                        ((0, rt.G)('play'), A(Ln.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    gs = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Es = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: s,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(gs.base, e.base) });
                            }, [n]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: c()(gs.defaultScroll, a), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: c()(gs.area, s) },
                                u().createElement(hs, { className: r, classNames: i, api: m }, e),
                            ),
                            u().createElement(bs, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    hs = ({ className: e, classNames: t, children: a, api: n }) => (
                        (0, o.useEffect)(() => (0, k.v)(n.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: c()(gs.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: c()(gs.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                a,
                            ),
                        )
                    );
                hs.Default = Es;
                const vs = { Vertical: s, Horizontal: n };
                var fs = a(8045);
                const Cs = {
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
                let As, Ds, Ss;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(As || (As = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ds || (Ds = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Ss || (Ss = {}));
                const Fs = { [Ss.NBSP]: As.NoBreakSymbol, [Ss.ZWNBSP]: As.NoBreakSymbol, [Ss.NEW_LINE]: As.LineBreak },
                    ys = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Bs = {
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
                    ws = 'renderers_noBreakWrapper_10',
                    ks = 'renderers_lineBreak_b5',
                    xs = 'renderers_newLine_bd',
                    Ts = 'renderers_word_f3',
                    Is = (e) => ({ color: `#${e}` }),
                    Ns = ({ elementList: e, textBlock: t, key: a }) => {
                        const n = t.colorTag;
                        return n
                            ? Bs[n]
                                ? u().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: c()(Ts, Bs[n]) },
                                      e,
                                  )
                                : u().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: Ts, style: Is(n) },
                                      e,
                                  )
                            : u().createElement('span', { key: a, 'data-block-type': t.blockType, className: Ts }, e);
                    },
                    Rs = {
                        [As.Word]: Ns,
                        [As.NoBreakSymbol]: Ns,
                        [As.Binding]: ({ elementList: e, textBlock: t, key: a }) =>
                            u().createElement(
                                'span',
                                { key: a, 'data-block-type': t.blockType },
                                e.map((e) => u().createElement(u().Fragment, { key: a }, e)),
                            ),
                        [As.LineBreak]: ({ key: e }) =>
                            u().createElement('span', { key: e, 'data-block-type': As.LineBreak, className: ks }),
                        [As.NewLine]: ({ elementList: e, key: t }) =>
                            u().createElement('span', { key: t, 'data-block-type': As.NewLine, className: xs }, e),
                        [As.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': As.NoBreakWrapper, className: ws },
                                e,
                            ),
                    },
                    Ls = (e, t, a) => {
                        const n = [];
                        return (
                            e.childList.forEach((s, r) => {
                                const i = `${a}_${r}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        a = Ls(e, Rs[t], i);
                                    n.push(...a);
                                } else n.push(t({ elementList: [s], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    Os = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, a) => {
                                t.push(
                                    ...((e, t) => {
                                        const a = [],
                                            n = e.blockType,
                                            s = Rs[n],
                                            r = Ls(e, s, t);
                                        return (
                                            n === As.NoBreakWrapper
                                                ? a.push(s({ elementList: r, textBlock: e, key: `${t}` }))
                                                : a.push(...r),
                                            a
                                        );
                                    })(e, a),
                                );
                            }),
                            t
                        );
                    },
                    Ms = (e, t, a, n) => {
                        let s = t.exec(e),
                            r = 0;
                        for (; s; ) r !== s.index && a(e.slice(r, s.index)), n(s), (r = t.lastIndex), (s = t.exec(e));
                        r !== e.length && a(e.slice(r));
                    },
                    Ps = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    $s = (e) => {
                        const t = [];
                        return (
                            Ms(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var a;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((a = e), a.match(Ps) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Hs = ys
                        ? (e) => {
                              const t = [];
                              return (
                                  Ms(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...$s(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const a = /[\s\u002d]/g;
                              let n = a.exec(e);
                              if (!n) return [e];
                              const s = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = t.justifyContent === Ds.FlexEnd ? n.index : a.lastIndex;
                                  s.push(e.slice(r, i)), (r = i), (n = a.exec(e));
                              }
                              return r !== e.length && s.push(e.slice(r)), s;
                          },
                    zs = (e, t = '', a) => {
                        const n = [];
                        return (
                            Ms(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: As.Word, colorTag: t, childList: Hs(e, a) });
                                },
                                (e) => {
                                    const a = e[0],
                                        s = Fs[a.charAt(0)];
                                    s === As.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: As.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let a = 0; a < e.length - 1; a++)
                                                      t.push({
                                                          blockType: As.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(a),
                                          )
                                        : n.push({ blockType: s, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    js = (e, t, a = '', n) => {
                        const s = [];
                        return (
                            Ms(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    s.push(...zs(e, a, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? s.push(...zs(String(i), a, n))
                                        : s.push({ blockType: As.Binding, colorTag: a, childList: [i] });
                                },
                            ),
                            s
                        );
                    },
                    Ws = (e, t) => {
                        if (!e) return [t];
                        const a = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === As.NoBreakWrapper) e.childList.push(n), a.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && a.push(e),
                                a.push({ blockType: As.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && a.push(t), a;
                    },
                    Gs = (e, t = {}, a) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let a = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === As.NoBreakSymbol
                                        ? ((a = !0), t.push(...Ws(t.pop(), e)))
                                        : (a ? t.push(...Ws(t.pop(), e)) : t.push(e), (a = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, a) => {
                                const n = [];
                                return (
                                    Ms(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...js(e, t, '', a));
                                        },
                                        (e) => {
                                            n.push(...js(e[2] + e[3], t, e[1], a));
                                        },
                                    ),
                                    n
                                );
                            })((0, O.Eg)((0, O.z4)(e)), t, a),
                        );
                        return Os(n);
                    },
                    Vs = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Zs = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Us = (e, t, a) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Zs(e, t),
                            s = e.textContent.length,
                            r = e.offsetWidth / s,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= a ? [!0, a + i] : [!1, n];
                        }
                        const o = Math.max(a + i, 0);
                        return s < o ? [!1, 0] : [!0, o];
                    },
                    qs = (e, t, a, n, s, r) => {
                        let i = -1,
                            o = null;
                        for (let l = a; l >= 0; l--) {
                            const a = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === As.LineBreak || c === As.NewLine || c === As.Binding) continue;
                            const _ = a.textContent || '';
                            if (!(a.childElementCount > 1)) {
                                const e = Us(a, n, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + r,
                                    p = t[l];
                                (o = u().cloneElement(p, p.props, m)), (i = l);
                                break;
                            }
                            {
                                const e = a.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = qs(e, d, e.length - 1, n, s, r),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (o = u().cloneElement(c, c.props, e, b)), (i = l);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [i, o];
                    },
                    Xs = (e, t, a, n = '...') => {
                        const s = [...t],
                            r = e.current;
                        if (!r) return [s, !1];
                        const i = a.height,
                            o = a.width,
                            u = r.lastElementChild;
                        if (!Vs(u, i) && Zs(u, o) <= 0) return [s, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let a = 0,
                                    n = e.length - 1;
                                for (; n - a >= 0; ) {
                                    const s = a + Math.ceil(0.5 * (n - a));
                                    Vs(e[s], t) ? (n = s - 1) : (a = s + 1);
                                }
                                return a - 1;
                            })(l, i);
                        if (c < 0) return [s, !1];
                        const _ = qs(l, s, c, o, n.length, n),
                            d = _[0],
                            m = _[1];
                        return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                    },
                    Ks = u().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: a,
                            binding: n,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: r = !1,
                            customTooltipArgs: i,
                            targetId: l,
                            justifyContent: _ = Ds.FlexStart,
                            alignContent: d = Ds.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const p = (0, o.useRef)(null),
                                b = (0, o.useRef)({ height: 0, width: 0 }),
                                g = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = g[0],
                                h = g[1],
                                v = (0, o.useMemo)(() => Gs(e, n, { justifyContent: _ }), [n, _, e]),
                                f = (0, o.useMemo)(() => {
                                    if (
                                        s &&
                                        E.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [n, s, l, e, i, E.isTruncated]),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        (b.current.width = e.contentRect.width),
                                            (b.current.height = e.contentRect.height);
                                        const t = Xs(p, v, b.current, m),
                                            n = t[0],
                                            s = t[1];
                                        h({ elementList: n, isTruncated: s, isTruncateFinished: !0 }), a && a(s);
                                    },
                                    [a, m, v],
                                ),
                                A = (0, o.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
                            return (
                                ((e, t, a = !0) => {
                                    const n = (0, o.useCallback)(
                                        (e) => {
                                            const a = e[0];
                                            t && t(a);
                                        },
                                        [t],
                                    );
                                    (0, o.useEffect)(() => {
                                        if (!e.current || !a) return;
                                        const t = new fs.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, a, e]);
                                })(p, C, r),
                                u().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            Cs.base,
                                            t,
                                            Cs.base__zeroPadding,
                                            r && Cs.base__isTruncationAvailable,
                                        ),
                                        style: A,
                                    },
                                    u().createElement('div', { className: Cs.unTruncated, ref: p }, v),
                                    u().createElement(
                                        Ya,
                                        {
                                            tooltipArgs: f,
                                            className: c()(
                                                Cs.tooltip,
                                                Cs[`tooltip__justify-${_}`],
                                                Cs[`tooltip__align-${d}`],
                                            ),
                                        },
                                        u().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Cs.truncated,
                                                    !E.isTruncateFinished && r && Cs.truncated__hide,
                                                ),
                                                style: A,
                                            },
                                            E.isTruncateFinished && r ? E.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Ys = a(9690);
                const Js = (e, t) => e.split(',').includes(t),
                    Qs = {
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
                let er, tr;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(er || (er = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(tr || (tr = {}));
                const ar = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: n,
                        vehicleLvl: s,
                        tags: r = '',
                        size: i = er.extraSmall,
                        type: o = tr.colored,
                        className: l,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, O.BN)(n)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return u().createElement(
                            'div',
                            {
                                className: c()(
                                    Qs.base,
                                    Qs[`base__size${(0, O.e)(i)}`],
                                    Qs[`base__type${(0, O.e)(o)}`],
                                    l,
                                ),
                            },
                            u().createElement(
                                'div',
                                { className: c()(Qs.level, null == _ ? void 0 : _.level) },
                                (0, Ys.HG)(s),
                            ),
                            u().createElement('div', {
                                className: c()(
                                    Qs.type,
                                    e && Qs[`type__elite${(0, O.e)(i)}`],
                                    Qs[`type__${i}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${p})` } : void 0,
                            }),
                            Js(r, 'premiumIGR') && u().createElement('div', { className: Qs.premiumIGR }),
                            u().createElement(
                                'div',
                                { className: c()(Qs.name, null == _ ? void 0 : _.name) },
                                d ? a : t,
                            ),
                        );
                    },
                    nr = 'Aside_base_a5',
                    sr = 'Aside_content_24',
                    rr = 'Aside_tankDetails_35',
                    ir = 'Aside_description_f0',
                    or = 'Aside_title_6f',
                    ur = 'Aside_category_c0',
                    lr = 'Aside_text_ca',
                    cr = 'Aside_status_91',
                    _r = 'Aside_status__activated_4e',
                    dr = 'Aside_statusDescrBlock_2c',
                    mr = 'Aside_statusDescription_75',
                    pr = 'Aside_infoIcon_96',
                    br = 'CategoryTitle_base_f3',
                    gr = 'CategoryTitle_title_9d',
                    Er = 'CategoryTitle_icon_48';
                let hr;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(hr || (hr = {}));
                const vr = (0, o.memo)(({ category: e, iconTheme: t = hr.Small, className: a }) => {
                        const n = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return u().createElement(
                            'div',
                            { className: c()(br, a) },
                            u().createElement('div', { className: Er, style: n }),
                            u().createElement('div', { className: gr }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    fr = 'InfoIcon_base_83',
                    Cr = 'InfoIcon_icon_47',
                    Ar = (0, o.memo)(({ item: e, className: t }) => {
                        const a = at(e, Ve.SetupView),
                            n = a[0],
                            s = a[1];
                        return u().createElement(
                            'div',
                            { className: c()(fr, t) },
                            u().createElement(
                                nt.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: n,
                                    onMouseLeave: s,
                                },
                                u().createElement('div', { className: Cr }),
                            ),
                        );
                    }),
                    Dr = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Sr;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(Sr || (Sr = {}));
                const Fr = (0, o.memo)(({ isActive: e, index: t, arrowType: a, onClick: n, classMix: s }) => {
                        const r = t + 1,
                            i = (0, o.useMemo)(() => (0, Ys.HG)(r), [r]),
                            l = ((e) => {
                                const t = Je(e, Xe),
                                    a = (0, o.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, Ye(e));
                                        },
                                        [t],
                                    );
                                return (e) => a(e);
                            })(Ge),
                            _ = (0, o.useCallback)(() => {
                                n(t),
                                    rt.$.playClick(),
                                    l({
                                        item: Ze.SkillLevelTab,
                                        action: Ue.Click,
                                        parentScreen: Ve.SetupView,
                                        info: String(r),
                                    });
                            }, [t, r, n, l]),
                            d = (0, o.useCallback)(() => rt.$.playHighlight(), []);
                        return u().createElement(
                            'div',
                            { className: c()(Dr.base, e && Dr.base__active, s), onClick: _, onMouseEnter: d },
                            u().createElement('div', { className: Dr.label }, i),
                            a !== Sr.None && u().createElement('div', { className: c()(Dr.arrow, Dr[`arrow__${a}`]) }),
                        );
                    }),
                    yr = {
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
                    Br = (0, o.memo)(({ currentParam: e, firstParam: t, lastParam: a }) => {
                        const n = Number(e.value),
                            s = Number(t.value),
                            r = Number(a.value),
                            i = (0, o.useMemo)(() => s < r, [s, r]),
                            l = (0, o.useMemo)(() => {
                                if (!isNaN(n) && !isNaN(s)) {
                                    const e = n - s;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [s, n]),
                            _ = (0, o.useMemo)(() => {
                                if (!l) return {};
                                const t = (0, O.uF)(e.valueTemplate, {
                                    sign: l < 0 ? '-' : '+',
                                    value: _e.Z5.getRealFormat(Math.abs(l), _e.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: u().createElement('div', { className: yr.diffValue }, t) };
                            }, [l, e.valueTemplate]),
                            d = (0, o.useMemo)(() => {
                                const e = !isNaN(s),
                                    a = e && s < 0 ? '-' : '';
                                return {
                                    sign: t.sign || a,
                                    value: e ? _e.Z5.getNumberFormat(Math.abs(s), _e.B3.GOLD) : t.value,
                                };
                            }, [t, s]),
                            m = (0, o.useMemo)(() => (i ? { width: ((100 * s) / r).toString() + '%' } : {}), [i, s, r]),
                            p = (0, o.useMemo)(
                                () => (i ? { width: ((100 * (n - s)) / r).toString() + '%' } : {}),
                                [i, s, n, r],
                            );
                        return u().createElement(
                            'div',
                            { className: yr.base },
                            u().createElement(
                                'div',
                                { className: yr.valueWrapper },
                                l &&
                                    u().createElement(Ks, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: yr.diff,
                                        alignContent: Ds.FlexEnd,
                                    }),
                                u().createElement(Ks, { text: e.valueTemplate, binding: d, classMix: yr.value }),
                            ),
                            u().createElement(
                                'div',
                                { className: yr.labelWrapper },
                                u().createElement('div', { className: yr.label }, t.name),
                            ),
                            i &&
                                u().createElement(
                                    'div',
                                    { className: yr.progress },
                                    u().createElement('div', { className: yr.progressDot }),
                                    u().createElement(
                                        'div',
                                        { className: yr.progressValue, style: m },
                                        u().createElement('div', { className: yr.progressValueDot }),
                                    ),
                                    u().createElement('div', { className: yr.progressDelta, style: p }),
                                    u().createElement('div', { className: c()(yr.progressDot, yr.progressDot__end) }),
                                ),
                        );
                    }),
                    wr = 'Levels_base_a9',
                    kr = 'Levels_tabsWrapper_a0',
                    xr = 'Levels_tabsBorder_cf',
                    Tr = 'Levels_tabsBorder__top_8f',
                    Ir = 'Levels_tabsBorder__bottom_82',
                    Nr = 'Levels_tabsLabel_60',
                    Rr = 'Levels_tabs_8f',
                    Lr = 'Levels_tab_c3',
                    Or = 'Levels_caret_7e',
                    Mr = 'Levels_params_d6',
                    Pr = 'Levels_infoIcon_68',
                    $r = ({ onLevelChanged: e, selectedLevel: t, levelInfos: a }) => {
                        const n = a.length - 1,
                            s = a[0].value.params,
                            r = a[a.length - 1].value.params,
                            i = a[t].value,
                            l = (0, o.useMemo)(() => ({ left: 56 * t - 12 + 'rem' }), [t]),
                            _ = (0, o.useCallback)((t) => e(t), [e]);
                        return u().createElement(
                            'div',
                            { className: wr },
                            u().createElement(
                                'div',
                                { className: kr },
                                u().createElement('div', { className: c()(xr, Tr) }),
                                u().createElement('div', { className: c()(xr, Ir) }),
                                u().createElement(Ar, { item: Ze.AbilityLevelsTooltip, className: Pr }),
                                u().createElement(
                                    'div',
                                    { className: Nr },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                u().createElement(
                                    'div',
                                    { className: Rr },
                                    a.map(({ value: e }, a) => {
                                        const s = a < t ? Sr.Active : Sr.Default;
                                        return u().createElement(Fr, {
                                            key: e.id,
                                            index: a,
                                            isActive: a <= t,
                                            arrowType: a < n ? s : Sr.None,
                                            onClick: _,
                                            classMix: Lr,
                                        });
                                    }),
                                    u().createElement('div', { className: Or, style: l }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Mr },
                                i.params.map(({ value: e }, t) =>
                                    u().createElement(Br, {
                                        key: e.id,
                                        firstParam: s[t].value,
                                        lastParam: r[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Hr = (0, o.memo)(function ({ className: e }) {
                        const t = ts(),
                            a = ve('model.vehicleInfo'),
                            n = ve(`${En}`).setCurrentSlotDetailsLevel,
                            s = ve(`${En}.details`),
                            r = s.name,
                            i = s.category,
                            l = s.selectedLevel,
                            _ = s.description,
                            d = s.levelInfos,
                            m = s.isActivated,
                            p = m
                                ? R.strings.tank_setup.abilities.details.status.unlocked()
                                : R.strings.tank_setup.abilities.details.status.locked(),
                            b = m
                                ? R.strings.tank_setup.abilities.details.description.unlocked()
                                : R.strings.tank_setup.abilities.details.description.locked(),
                            g = (0, o.useCallback)((e) => n({ level: e }), [n]);
                        return (
                            (0, o.useEffect)(() => (0, k.v)(() => (0, k.v)(t.recalculateContent)), [t]),
                            u().createElement(
                                'div',
                                { className: c()(nr, e) },
                                u().createElement(
                                    vs.Vertical.Area.Default,
                                    { api: t },
                                    u().createElement(
                                        'div',
                                        { className: sr },
                                        u().createElement('div', { className: rr }, u().createElement(ar, a)),
                                        u().createElement(
                                            'div',
                                            { className: ir },
                                            u().createElement('div', { className: or }, r),
                                            u().createElement(vr, { category: i, className: ur }),
                                            u().createElement('div', { className: lr }, _),
                                        ),
                                        u().createElement($r, { onLevelChanged: g, selectedLevel: l, levelInfos: d }),
                                        u().createElement('div', { className: c()(cr, m && _r) }, p),
                                        u().createElement(
                                            'div',
                                            { className: dr },
                                            u().createElement('div', { className: pr }),
                                            u().createElement(Ks, { text: b, classMix: mr }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    zr = 'BattleAbilitiesSetup_aside_bd';
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const jr = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            a = t.width,
                            n = t.height;
                        return 0 !== a && 0 !== n;
                    },
                    Wr = (e) => {
                        const t = (0, o.useState)(jr(e ? e.current : null)),
                            a = t[0],
                            n = t[1];
                        return (
                            (0, o.useEffect)(() => {
                                let t = 0;
                                const a = () => {
                                    t = requestAnimationFrame(() => {
                                        jr(e ? e.current : null) ? n(!0) : a();
                                    });
                                };
                                return (
                                    a(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => () => n(!1), [e]),
                            a
                        );
                    },
                    Gr = 'ScrollableCards_base_e0',
                    Vr = 'ScrollableCards_scroll_4b',
                    Zr = ({ children: e, selectedSlotId: t, scrollAreaKey: a = 'area', updateKey: n = null }) => {
                        const s = (0, o.useState)(!1),
                            r = s[0],
                            i = s[1],
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            _ = (0, o.useRef)(!1),
                            d = (0, o.useRef)(''),
                            m = Wr(l),
                            p = ts();
                        (0, o.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const b = (0, T.z)(() => {
                                _.current && i(!0), p.events.off('rest', b);
                            }),
                            g = (0, o.useCallback)(() => {
                                _.current && i(!1);
                            }, []),
                            E = (0, o.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const a = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    p.events.on('rest', b), p.applyScroll(a);
                                }
                            }, [b, p]);
                        (0, o.useEffect)(() => {
                            (0, k.v)(() => {
                                m &&
                                    (d.current === a
                                        ? E()
                                        : ((d.current = a),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              E(), _.current || (_.current = !0);
                                          })));
                            });
                        }, [m, a, E, t]),
                            (0, o.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, n]);
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: r,
                            onFinalAnimationDone: g,
                        };
                        return u().createElement(
                            'div',
                            { className: Gr },
                            u().createElement(
                                'div',
                                { className: Vr, ref: l },
                                u().createElement(vs.Vertical.Default, { key: a, api: p }, (0, o.cloneElement)(e, h)),
                            ),
                        );
                    };
                var Ur = a(8613);
                Date.now(), Ur.Ew.getRegionalDateTime, Ur.Ew.getFormattedDateTime;
                const qr = (e, t) => {
                        const a = (0, o.useRef)();
                        return (
                            (0, o.useEffect)(() => {
                                (t && !t(e)) || (a.current = e);
                            }, [t, e]),
                            a.current
                        );
                    },
                    Xr = (_e.Sw.instance, qr);
                var Kr = a(4888),
                    Yr = a(1363);
                const Jr = [
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
                function Qr(e) {
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
                const ei = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _e.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    ti = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            s = e.onMouseEnter,
                            r = e.onMouseLeave,
                            i = e.onMouseDown,
                            u = e.onClick,
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
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, Jr);
                        const f = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, o.useMemo)(() => (0, ue.F)(), []).resId,
                            A = (0, o.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (ei(a, p, { isMouseEvent: !0, on: !0, arguments: Qr(n) }, C),
                                    E && E(),
                                    (f.current.isVisible = !0));
                            }, [a, p, n, C, E]),
                            D = (0, o.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        ei(a, p, { on: !1 }, C),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1);
                                }
                            }, [a, p, C, h]),
                            S = (0, o.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        window.removeEventListener('mouseleave', D), D();
                                    }
                                ),
                                [D],
                            );
                        return g
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((F = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(A, c ? 100 : 400)),
                                                      s && s(e),
                                                      F && F(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), r && r(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && D(), u && u(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && D(), i && i(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var F;
                    },
                    ai = ['children'];
                function ni() {
                    return (
                        (ni =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ni.apply(this, arguments)
                    );
                }
                const si = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, ai);
                    return u().createElement(
                        ti,
                        ni(
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
                var ri = a(5282);
                const ii = {
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
                    oi = 'DisabledAbilities_base_1d',
                    ui = 'DisabledAbilities_glow_75',
                    li = 'DisabledAbilities_line_54',
                    ci = ({ className: e }) =>
                        u().createElement(
                            'div',
                            { className: c()(oi, e) },
                            u().createElement('div', { className: ui }),
                            u().createElement('div', { className: li }),
                        );
                let _i;
                !(function (e) {
                    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.TooHeavy = 'too_heavy'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster');
                })(_i || (_i = {}));
                const di = 'Warning_base_4c',
                    mi = 'Warning_glow_79',
                    pi = 'Warning_line_df',
                    bi = 'Warning_icon_24',
                    gi = (e) => Object.values(_i).includes(e),
                    Ei = ({ parentId: e, reason: t, isCritical: a }) => {
                        const n = (0, o.useMemo)(() => ({ reason: t, isCritical: a }), [t, a]);
                        return u().createElement(
                            'div',
                            { id: e, className: di },
                            u().createElement('div', { className: mi }),
                            u().createElement('div', { className: pi }),
                            u().createElement(
                                nt.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: n,
                                    isEnabled: gi(t),
                                },
                                u().createElement('div', { className: bi }),
                            ),
                        );
                    },
                    hi = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: a,
                        contextMenuArgs: n,
                        imageSource: s,
                        overlayType: r,
                        highlightType: i,
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
                        shouldHandleMouseOver: S,
                        category: F,
                        onTooltipShow: y,
                        onTooltipHide: B,
                        lockReason: w,
                    }) => {
                        const k = (0, mn.GS)(),
                            x = (0, o.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = x[0],
                            I = x[1],
                            N = (0, o.useState)(!1),
                            L = N[0],
                            O = N[1],
                            M = (0, o.useState)(!1),
                            P = M[0],
                            $ = M[1],
                            H = (0, o.useCallback)(() => {
                                !T.isActionsHovered && rt.$.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    S && O(!0);
                            }, [T.isActionsHovered, S]),
                            z = (0, o.useCallback)(() => {
                                S && O(!1);
                            }, [S]),
                            j = (0, o.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            W = (0, o.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            G = E && (!d || g),
                            V = (0, o.useCallback)(() => {
                                G && D && (rt.$.playClick(), D());
                            }, [D, G]),
                            Z = T.isBaseHovered || T.isActionsHovered,
                            U = (0, o.useMemo)(() => {
                                let e = u().createElement(
                                    'div',
                                    {
                                        onMouseEnter: H,
                                        onMouseLeave: W,
                                        className: ii.hover,
                                        onMouseDown: (e) => {
                                            0 === e.nativeEvent.button && ($(!0), V());
                                        },
                                        onMouseUp: (e) => {
                                            0 === e.nativeEvent.button && $(!1);
                                        },
                                    },
                                    d && g && u().createElement(ci, { className: ii.locked }),
                                );
                                return (
                                    a && (e = u().createElement(si, { args: a, onShow: y, onHide: B }, e)),
                                    n && (e = u().createElement(jt, { args: n }, e)),
                                    e
                                );
                            }, [d, g, H, W, V, a, n, y, B, P]),
                            q = (0, o.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            X =
                                k === mn.cJ.Large || k === mn.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            K = (0, o.useMemo)(() => {
                                let e;
                                return (
                                    r && (e = l ? X.$dyn(`${r}_${_}_overlay`) : X.$dyn(`${r}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [X, r, l, _]),
                            Y = (0, o.useMemo)(() => {
                                let e;
                                return i && (e = X.$dyn(`${i}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [X, i]),
                            J = (0, o.useMemo)(() => {
                                const e =
                                        (k === mn.cJ.Large || k === mn.cJ.Huge ? mn.cJ.Large : mn.cJ.Medium) + '_' + F,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [F, k]);
                        return u().createElement(
                            'div',
                            { className: ii.base },
                            u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(
                                        ii.content,
                                        ii[`content__${k}`],
                                        Z && E && !d && ii.content__hovered,
                                        !Z && ii.content__out,
                                        p && ii.content__installed,
                                        m && ii.content__current,
                                        d && ii.content__disabled,
                                        !G && ii.content__nonclickable,
                                    ),
                                    onMouseLeave: z,
                                },
                                Y &&
                                    u().createElement(
                                        'div',
                                        { className: ii.types },
                                        u().createElement('div', {
                                            className: c()(ii.highlight, ii[`highlight__${i}`]),
                                            style: Y,
                                        }),
                                    ),
                                u().createElement('div', { className: ii.image, style: q }, A),
                                d && u().createElement('div', { className: ii.disabled }),
                                J &&
                                    u().createElement('span', {
                                        className: c()(ii.category, ii[`category__${k}`]),
                                        style: J,
                                    }),
                                K &&
                                    u().createElement(
                                        'div',
                                        { className: ii.types },
                                        u().createElement('div', {
                                            className: c()(ii.overlay, ii[`overlay__${r}`]),
                                            style: K,
                                        }),
                                    ),
                                C && u().createElement('div', { className: ii.specialization }, C),
                                u().createElement(
                                    'div',
                                    { className: c()(ii.name, d && ii.name__disabled) },
                                    u().createElement(ri.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, ri.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && u().createElement('div', { className: ii.details }, h),
                                u().createElement('div', { className: c()(ii.options, d && ii.options__disabled) }, v),
                                U,
                                u().createElement(
                                    'div',
                                    { onMouseEnter: j, onMouseLeave: W, className: ii.actions },
                                    S && f
                                        ? (0, o.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: L }))
                                        : f,
                                ),
                            ),
                            b &&
                                u().createElement(
                                    'div',
                                    { className: ii.locked },
                                    u().createElement(Ei, { reason: w, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var vi = a(6391),
                    fi = a(8401);
                const Ci = 'Availability_base_51',
                    Ai = () => u().createElement('div', { className: Ci }),
                    Di = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Si = u().memo(
                        ({ itemsInStorage: e, price: t, isMounted: a, possibleZeroCount: n, show: s = !0 }) => {
                            let r = null;
                            return (
                                (r = a
                                    ? u().createElement(Ai, null)
                                    : e || (n && 0 === e)
                                      ? u().createElement(vi.Y, { location: 'storage', count: e })
                                      : t && u().createElement(fi.t, t)),
                                u().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            Di.base,
                                            Di['base__' + (s ? 'shown' : 'hidden')],
                                            (a || e || (n && 0 === e)) && Di.base__visually,
                                        ),
                                    },
                                    r,
                                )
                            );
                        },
                    ),
                    Fi = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var yi = a(8750);
                const Bi = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    wi = ({ level: e }) => {
                        const t = (0, mn.GS)();
                        if (!e) return null;
                        const a = c()(Bi.base, t && Bi[`base__${t}`]);
                        return u().createElement(
                            'div',
                            { className: a },
                            u().createElement(yi.a, {
                                type: yi.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    ki = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: a,
                            isCurrent: n,
                            imageName: s,
                            onSlotAction: r,
                            intCD: i,
                            level: l,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: g,
                        }) => {
                            const E = (0, mn.GS)(),
                                h = t > -1,
                                v = `${i}-ability`,
                                f = (0, o.useMemo)(() => ({ intCD: i, slotType: w.YN, fieldType: 0 }), [i]),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        r({ actionType: e, intCD: i, currentSlotId: a, isAutoSelect: !1 });
                                    },
                                    [r, i, a],
                                ),
                                A = (0, o.useCallback)(() => {
                                    C(Kr.eC);
                                }, [C]),
                                D = (0, o.useContext)(jo),
                                S = (0, o.useMemo)(() => {
                                    const e = c()(Fi.bonuses, E && Fi[`base__${E}`]),
                                        t = D >= g ? An.Brown : An.Red;
                                    return u().createElement(
                                        'div',
                                        { className: Fi.base },
                                        u().createElement(Yr._, {
                                            parentId: v,
                                            mediaSize: E,
                                            classMix: e,
                                            classColorMix: Fi.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            u().createElement(Dn, {
                                                value: g,
                                                theme: t,
                                                size: Cn.Small,
                                                className: Fi.points,
                                            }),
                                    );
                                }, [E, _, v, m, g, D]),
                                F =
                                    ((0, o.useMemo)(() => u().createElement(wi, { level: l }), [l]),
                                    (0, o.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(s),
                                        [s],
                                    ));
                            return u().createElement(hi, {
                                parentId: v,
                                name: e,
                                tooltipArgs: f,
                                imageSource: F,
                                isCurrent: n,
                                isActive: h,
                                details: S,
                                isDisabled: m && D < g,
                                isAbilitiesCard: !0,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: A,
                                options: u().createElement(Si, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    xi = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Ti() {
                    return (
                        (Ti =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ti.apply(this, arguments)
                    );
                }
                const Ii = ({ currentCardRef: e, selectedSlot: t, isDisabled: a }) => {
                        const n = ve(En),
                            s = n.categoriesOrder,
                            r = n.onSlotAction,
                            i = n.slots,
                            l = ve('model.ammunitionPanel'),
                            _ = l.onSectionSelect,
                            d = l.selectedSection,
                            m = (0, mn.GS)(),
                            p = s.map(({ value: e }) => e),
                            b = i.map(({ value: e }) => e),
                            g = (0, o.useMemo)(() => {
                                if (m === mn.cJ.Tiny)
                                    return b.sort(
                                        (e, t) => p.indexOf(e.category) - p.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                b.map((t) => {
                                    t.category in e || (e[t.category] = []), e[t.category].push(t);
                                }),
                                    Object.keys(e).map((t) => {
                                        e[t].sort((e, t) => e.cost - t.cost);
                                    });
                                const t = [];
                                do {
                                    p.map((a) => {
                                        const n = e[a].shift();
                                        n && t.push(n);
                                    });
                                } while (t.length < b.length);
                                return t;
                            }, [b, p, m]),
                            E = (0, o.useCallback)(
                                (e) => {
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), r(e);
                                },
                                [_, r, d],
                            ),
                            h = g.map((a) => {
                                if (!a) return null;
                                const n = a.installedSlotId,
                                    s = n > -1 && t === n;
                                return u().createElement(
                                    'div',
                                    { key: a.intCD, ref: s ? e : null, className: c()(xi.card, m && xi[`card__${m}`]) },
                                    u().createElement(ki, Ti({}, a, { isCurrent: s, onSlotAction: E })),
                                );
                            }),
                            v = c()(xi.base, m && xi[`base__${m}`], a && xi.base__disabled);
                        return u().createElement('div', { className: v }, h);
                    },
                    Ni = 'BattleAbilitiesNoSelected_base_06',
                    Ri = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Li = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    Oi = 'BattleAbilitiesNoSelected_title_20',
                    Mi = 'BattleAbilitiesNoSelected_title__small_65',
                    Pi = 'BattleAbilitiesNoSelected_subTitle_aa',
                    $i = 'BattleAbilitiesNoSelected_button_bf',
                    Hi = R.strings.tank_setup.abilities.noSelected,
                    zi = () => {
                        const e = (0, mn.GS)(),
                            t = ve(En, he.None).showInfoPage,
                            a = (0, o.useMemo)(() => e === mn.cJ.Small || e === mn.cJ.Tiny, [e]),
                            n = (0, o.useMemo)(() => (e === mn.cJ.Tiny ? vn.qE.small : vn.qE.medium), [e]),
                            s = (0, o.useCallback)(() => t(), [t]),
                            r = c()(Ri, a && Li),
                            i = c()(Oi, a && Mi);
                        return u().createElement(
                            'div',
                            { className: Ni, id: 'no-abilities-show-button' },
                            u().createElement('div', { className: r }),
                            u().createElement('div', { className: i }, Hi.title()),
                            u().createElement('div', { className: Pi }, Hi.subTitle()),
                            u().createElement(vn.u5, { size: n, mixClass: $i, onClick: s }, Hi.toReserves()),
                        );
                    },
                    ji = 'Content_base_d8',
                    Wi = u().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return u().createElement(
                            'div',
                            { className: ji },
                            e
                                ? u().createElement(
                                      Zr,
                                      { selectedSlotId: t },
                                      u().createElement(Ii, { selectedSlot: t }),
                                  )
                                : u().createElement(zi, null),
                        );
                    }),
                    Gi = 'Tabs_base_d9',
                    Vi = 'Tabs_base__vertical_c0',
                    Zi = 'Tabs_list_0a',
                    Ui = 'Tabs_list__centered_dc',
                    qi = 'Tabs_wrapper_2d',
                    Xi = 'Tabs_wrapper__centered_d8',
                    Ki = 'Tabs_wrapper__vertical_a5';
                function Yi() {
                    return (
                        (Yi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Yi.apply(this, arguments)
                    );
                }
                const Ji = 'tabs-role';
                var Qi;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(Qi || (Qi = {}));
                class eo extends o.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[Qi.TAB]);
                                return t && t.props[Qi.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = u().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Ji] === Qi.LIST);
                        if (t < 0) return;
                        const a =
                            this.props.activeKey || this._getFirstTabKey(u().Children.toArray(e[t].props.children));
                        (e[t] = u().cloneElement(e[t], {
                            children: u()
                                .Children.toArray(e[t].props.children)
                                .map((e) => u().cloneElement(e, { key: e.props[Qi.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(a);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const a = u().Children.toArray(this.props.children)[this.tabsListIndex],
                            n = a.props.children.reduce(
                                (e, t, a) => ((e[a] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((r = this.tabsProps),
                                (i = n),
                                !(
                                    Object.keys(r).length === Object.keys(i).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && r[e] === i[e],
                                    )
                                ));
                        var r, i;
                        const o = c()(
                                qi,
                                a.props.className,
                                this.props.isTabsCentered && Xi,
                                this.props.isVerticalTabs && Ki,
                            ),
                            l = c()(Zi, this.props.isTabsCentered && Ui);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Ji] === Qi.CONTENT)
                                        return e.props[Qi.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, a) => [this.tabsListIndex, e].includes(a)),
                                s = t[0].props.children,
                                r = s.map((e, t) =>
                                    u().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            n[t],
                                            { key: t, isActive: this.state.activeKey === e.props[Qi.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const a = n[t][Qi.TAB];
                                                    this.state.activeKey === a ||
                                                        (n[t].onClick && n[t].onClick(e),
                                                        this.handleSetActiveKey(a),
                                                        this.props.onClickSound && (0, rt.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    n[t].onMouseEnter && n[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, rt.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = n),
                                this.setState({
                                    activeElements: [
                                        u().createElement(
                                            'div',
                                            { className: l, key: Qi.LIST },
                                            u().createElement('div', Yi({}, a.props, { className: o }), r),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(Gi, this.props.isVerticalTabs && Vi);
                        return u().createElement('div', { className: t }, e);
                    }
                }
                eo.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const to = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function ao() {
                    return (
                        (ao =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ao.apply(this, arguments)
                    );
                }
                const no = (e) => {
                    let t = e.children,
                        a = e.className,
                        n = e.activeKey,
                        s = e.onClickSound,
                        r = e.onMouseEnterSound,
                        i = e.isTabsCentered,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, to);
                    return u().createElement(
                        'div',
                        ao({ className: a }, o),
                        u().createElement(
                            eo,
                            { activeKey: n, onClickSound: s, onMouseEnterSound: r, isTabsCentered: i },
                            t,
                        ),
                    );
                };
                var so = a(9480);
                const ro = ({ children: e, component: t, props: a = {} }) =>
                        t ? u().createElement(t, a, e) : e || null,
                    io = 'Tab_base_dd',
                    oo = 'Tab_base__first_4a',
                    uo = 'Tab_base__last_96',
                    lo = 'Tab_base__medium_ec',
                    co = 'Tab_base__active_5d',
                    _o = 'Tab_divider_ca',
                    mo = 'Tab_divider__show_62',
                    po = 'Tab_state_6c',
                    bo = 'Tab_stateHighlight_1e',
                    go = 'Tab_stateBorder_64',
                    Eo = 'Tab_stateBorder__positionLeft_e7',
                    ho = 'Tab_stateBorder__positionRight_db',
                    vo = 'Tab_counter_e1',
                    fo = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Co() {
                    return (
                        (Co =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Co.apply(this, arguments)
                    );
                }
                const Ao = (0, o.memo)((e) => {
                        let t = e.isActive,
                            a = void 0 !== t && t,
                            n = e.isFirst,
                            s = void 0 !== n && n,
                            r = e.isLast,
                            i = void 0 !== r && r,
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
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, fo);
                        return u().createElement(
                            ro,
                            g,
                            u().createElement(
                                'div',
                                Co({ className: c()(io, { [co]: a }, { [oo]: s }, { [uo]: i }, { [lo]: l }) }, h),
                                u().createElement(
                                    'span',
                                    { className: po },
                                    u().createElement('span', { className: bo }),
                                    u().createElement('span', { className: c()(go, Eo) }),
                                    u().createElement('span', { className: c()(go, ho) }),
                                ),
                                p,
                                !i && !a && u().createElement('span', { className: c()(_o, mo) }),
                                (Boolean(E) || d) &&
                                    u().createElement(
                                        'div',
                                        { className: vo },
                                        u().createElement(ie, { value: E, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    Do = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    So = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function Fo() {
                    return (
                        (Fo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Fo.apply(this, arguments)
                    );
                }
                const yo = (e) => {
                    let t = e.name,
                        a = e.newItemsCount,
                        n = e.handleTabChanged,
                        s = e.isTooltipEnabled,
                        r = void 0 === s || s,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, So);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, o.useCallback)(() => {
                            rt.$.playClick(), n({ name: t });
                        }, [n, t]),
                        _ = (0, o.useMemo)(() => ({ name: t }), [t]),
                        d = M(['tab'], Do);
                    return u().createElement(
                        nt.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: r,
                        },
                        u().createElement(
                            'div',
                            null,
                            u().createElement(
                                Ao,
                                Fo({}, i, { isNotified: Boolean(a), onClick: c }),
                                u().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function Bo() {
                    return (
                        (Bo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Bo.apply(this, arguments)
                    );
                }
                const wo = ({ tabs: e, selectedTabName: t, handleTabChanged: a, isTooltipEnabled: n = !0 }) => {
                        const s = De('ModernizedSetupTabHintZone', Ce);
                        return (
                            (0, o.useEffect)(() => {
                                s && s.runTrigger(!0);
                            }, [s]),
                            u().createElement(
                                no,
                                { key: t, activeKey: t },
                                u().createElement(
                                    'div',
                                    { 'tabs-role': Qi.LIST },
                                    so.UI(e, (e) =>
                                        u().createElement(
                                            yo,
                                            Bo(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: a,
                                                    'tabs-role': Qi.TAB,
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
                    ko = {
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
                    xo = ({ title: e, children: t, tabProps: a }) => {
                        const n = (0, mn.GS)();
                        return u().createElement(
                            'div',
                            { className: c()(ko.base, n && ko[`base__${n}`]) },
                            u().createElement(
                                'div',
                                null,
                                u().createElement('div', { className: c()(ko.title, n && ko[`title__${n}`]) }, e),
                                a &&
                                    u().createElement(
                                        'div',
                                        { className: c()(ko.tabs, n && ko[`tabs__${n}`]) },
                                        u().createElement(wo, a),
                                    ),
                            ),
                            t,
                        );
                    };
                var To = a(8089);
                const Io = {
                    base: 'InfoButton_base_62',
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let No;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(No || (No = {}));
                const Ro = u().memo(function ({ id: e, theme: t, className: a }) {
                        const n = ve(En, he.None).showInfoPage;
                        return u().createElement(
                            'div',
                            { id: e, className: c()(Io.base, Io[`base__${t}`], a) },
                            u().createElement(To.A, {
                                caption:
                                    t === No.Standalone ? R.strings.fl_common.ammunitionSetup.btn.info.label() : '',
                                type: 'info',
                                side: 'left',
                                onClick: () => n(),
                                classNames: { caption: t === No.OnlyIcon ? Io.hidden : '' },
                            }),
                        );
                    }),
                    Lo = 'Header_base_aa',
                    Oo = 'Header_points_d5',
                    Mo = 'Header_content_2c',
                    Po = 'Header_textWrapper_63',
                    $o = 'Header_text_dc',
                    Ho = 'Header_infoButton_5e',
                    zo = u().memo(function () {
                        const e = E().mediaWidth,
                            t = (0, o.useContext)(jo),
                            a = (0, o.useMemo)(
                                () => ({
                                    points: u().createElement(Dn, {
                                        theme: An.Brown,
                                        size: Cn.Normal,
                                        value: t,
                                        className: Oo,
                                    }),
                                }),
                                [t],
                            ),
                            n = at(Ze.SkillPointsTooltip, Ve.SetupView),
                            s = n[0],
                            r = n[1];
                        return u().createElement(
                            'div',
                            { className: Lo },
                            u().createElement(
                                xo,
                                { title: R.strings.tank_setup.section.battleAbilities() },
                                u().createElement(
                                    'div',
                                    { className: Mo },
                                    e <= m.j.medium.width &&
                                        u().createElement(Ro, {
                                            id: 'scenarios_btn_small',
                                            theme: No.OnlyIcon,
                                            className: Ho,
                                        }),
                                    u().createElement(
                                        q.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: s,
                                            onMouseLeave: r,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: Po },
                                            u().createElement(Ks, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: a,
                                                classMix: $o,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    jo = u().createContext(0),
                    Wo = () => {
                        const e = ve(En),
                            t = e.isLocked,
                            a = e.pointsAmount,
                            n = ve('model.ammunitionPanel').selectedSlot;
                        return u().createElement(
                            jo.Provider,
                            { value: a },
                            u().createElement(mn.Ar, {
                                header: u().createElement(zo, null),
                                content: u().createElement(Wi, { isLocked: t, selectedSlot: n }),
                                aside: u().createElement(Hr, { className: zr }),
                                footer: u().createElement(wn, null),
                            }),
                        );
                    };
                var Go = a(8175),
                    Vo = a(3755),
                    Zo = a(8774);
                const Uo = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    qo = (0, o.memo)(({ parentId: e, availableActions: t, onActionClick: a, isBuyMoreDisabled: n }) =>
                        u().createElement(
                            'div',
                            { className: c()(Uo.base, Uo['base__' + (t.length ? 'shown' : 'hidden')]) },
                            u().createElement(Zo.a, {
                                parentId: `${e}-${Kr.GV}`,
                                actionType: Kr.GV,
                                onClick: a,
                                show: t.includes(Kr.GV),
                                disabled: n,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            u().createElement(Zo.a, {
                                parentId: `${e}-${Kr.DA}`,
                                actionType: Kr.DA,
                                onClick: a,
                                show: t.includes(Kr.DA),
                            }),
                            u().createElement(Zo.a, {
                                parentId: `${e}-${Kr.FR}`,
                                actionType: Kr.FR,
                                onClick: a,
                                show: t.includes(Kr.FR),
                            }),
                        ),
                    ),
                    Xo = 'Booster_base_e5',
                    Ko = 'Booster_unit_5e',
                    Yo = (0, x.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const n = (0, mn.GS)(),
                            s = n === mn.cJ.Large || n === mn.cJ.Huge,
                            r = _n(),
                            i = r.model,
                            l = r.controls,
                            c = i.computes.boosters.booster(a),
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
                            S = c.isMountedInOtherSetup,
                            F = c.description,
                            y = c.isBuyMoreVisible,
                            B = c.isBuyMoreDisabled,
                            k = c.highlightType,
                            x = c.lockReason,
                            T = d > -1,
                            I = `${v}-booster`,
                            N = (0, o.useMemo)(() => {
                                const e = [];
                                return (
                                    !f &&
                                        T &&
                                        (!t && y && e.push(Kr.GV),
                                        (!Boolean(E) && !D) || S ? e.push(Kr.FR) : e.push(Kr.DA)),
                                    e
                                );
                            }, [f, T, t, y, E, D, S]),
                            L = (0, o.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: v, installedSlotId: d }),
                                    e === Kr.GV ? 1e3 : 120
                                ),
                                [l, v, d],
                            ),
                            O = _t(L),
                            M = (0, o.useCallback)(() => {
                                N.includes(Kr.FR) ? O(Kr.FR) : N.includes(Kr.DA) ? O(Kr.DA) : O(Kr.eC);
                            }, [N, O]),
                            P = (0, o.useMemo)(() => {
                                const e = { intCD: v, slotType: w.G$, fieldType: 0 };
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
                            $ = P[0],
                            H = P[1],
                            z = (0, o.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return u().createElement(hi, {
                            parentId: I,
                            name: _,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: z,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: f,
                            isLocked: A,
                            options: u().createElement(Si, {
                                isMounted: D || S,
                                itemsInStorage: E,
                                show: !N.length,
                                price: h,
                            }),
                            actions: u().createElement(qo, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: O,
                                isBuyMoreDisabled: B,
                            }),
                            details: u().createElement(Yr._, {
                                key: F,
                                parentId: I,
                                classMix: Xo,
                                mediaSize: n,
                                classColorMix: Ko,
                                linesShown: s ? 4 : 3,
                                text: F,
                            }),
                            overlayType: C,
                            highlightType: k,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    Jo = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    Qo = (0, x.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const n = (0, mn.GS)(),
                            s = n === mn.cJ.Large || n === mn.cJ.Huge,
                            r = _n(),
                            i = r.model,
                            l = r.controls,
                            _ = i.computes.consumables.consumable(a, t, n),
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
                            S = _.isMounted,
                            F = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            B = _.description,
                            k = _.isBuyMoreDisabled,
                            x = _.lockReason,
                            T = m > -1,
                            I = `${f}-consumable`,
                            N = (0, o.useMemo)(() => {
                                const a = [];
                                return (
                                    !C &&
                                        T &&
                                        (!e && a.push(Kr.Xo),
                                        y ||
                                            (!t && a.push(Kr.GV),
                                            (!Boolean(h) && !S) || F ? a.push(Kr.FR) : a.push(Kr.DA))),
                                    a
                                );
                            }, [C, T, e, y, t, h, S, F]),
                            L = (0, o.useCallback)(
                                (e) => (
                                    l.consumables.actSlot({ actionType: e, intCD: f, installedSlotId: m }),
                                    e === Kr.GV ? 1e3 : 300
                                ),
                                [l, f, m],
                            ),
                            O = _t(L),
                            M = (0, o.useCallback)(() => {
                                N.includes(Kr.Xo)
                                    ? O(Kr.Xo)
                                    : N.includes(Kr.FR)
                                      ? O(Kr.FR)
                                      : N.includes(Kr.DA)
                                        ? O(Kr.DA)
                                        : O(Kr.eC);
                            }, [N, O]),
                            P = (0, o.useMemo)(() => {
                                const e = { intCD: f, slotType: w.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                        isMounted: S,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [f, m, p, b, g, S, C]),
                            $ = P[0],
                            H = P[1],
                            z = (0, o.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(E)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(E);
                                return String(e);
                            }, [s, E]),
                            j = (0, o.useMemo)(
                                () =>
                                    u().createElement(Yr._, {
                                        parentId: I,
                                        mediaSize: n,
                                        classMix: c()(Jo.base, n && Jo[`base__${n}`]),
                                        classColorMix: Jo.unit,
                                        linesShown: s ? 4 : 3,
                                        text: B,
                                    }),
                                [n, s, B, I],
                            );
                        return u().createElement(hi, {
                            parentId: I,
                            name: d,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: z,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: C,
                            isLocked: D,
                            isClickable: !y,
                            options: u().createElement(Si, {
                                price: v,
                                isMounted: S || F,
                                itemsInStorage: h,
                                show: !N.length,
                            }),
                            actions: u().createElement(qo, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: O,
                                isBuyMoreDisabled: k,
                            }),
                            details: j,
                            overlayType: A,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    eu = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    tu = ({ values: e, localeName: t }) => {
                        const a = so.hX(e, ({ valueKey: e }) => e === t).pop();
                        if (!a) return eu;
                        const n = a.value,
                            s = 'mul' === a.valueType ? 100 * (n - 1) : n;
                        return { calcValue: s, isPositive: s > 0, valueKey: a.valueKey };
                    },
                    au = 'Bonus_base_aa',
                    nu = 'Bonus_bonus_49',
                    su = 'Bonus_text_48',
                    ru = 'Unit_base_15',
                    iu = 'Unit_base__special_37',
                    ou = 'Unit_glow_38',
                    uu = R.strings.tank_setup.kpi.bonus.valueTypes,
                    lu = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    cu = (0, x.Pi)(({ deviceID: e, bonusID: t }) => {
                        const a = _n().model,
                            n = a.computes.optDevices.device(e).activeSpecsMask,
                            s = a.computes.optDevices.bonusValue(e, t);
                        if (!s) return null;
                        const r = s.valueType,
                            i = s.value,
                            o = s.valueKey,
                            l = Boolean(n),
                            _ = 'mul' === r ? 100 * (i - 1) : i,
                            d = _ > 0 ? '+' : '',
                            m = _e.Z5.getRealFormat(_, _e.Gr.WO_ZERO_DIGITS),
                            p = uu.$dyn(o),
                            b = `${m}${p ? ` ${p}` : lu}`;
                        return u().createElement(
                            'div',
                            { className: c()(ru, l && iu) },
                            u().createElement('span', null, u().createElement('span', { className: ou }), d + b),
                        );
                    }),
                    _u = (0, x.Pi)(({ bonusID: e, compare: t, deviceID: a }) => {
                        const n = (0, mn.GS)(),
                            s = n === mn.cJ.Large || n === mn.cJ.Huge ? 4 : 3,
                            r = _n().model,
                            i = r.computes.optDevices.bonusVisibleLinesCount(a, e, s),
                            l = ((e, t = !1) =>
                                t || tu(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                r.computes.optDevices.bonus(a, e),
                            ),
                            c = (0, o.useMemo)(() => (0, ri.D)(String(l)), [l]);
                        return i
                            ? u().createElement(
                                  'div',
                                  { className: au },
                                  l &&
                                      u().createElement(
                                          'span',
                                          { className: nu },
                                          u().createElement(cu, { compare: t, deviceID: a, bonusID: e }),
                                          ' ',
                                          i &&
                                              l &&
                                              u().createElement(
                                                  'span',
                                                  { className: su },
                                                  u().createElement(ri.n, { linesCount: i, blocks: c, mediaSize: n }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    du = 'Bonuses_base_af',
                    mu = 'Bonuses_bonus_d1',
                    pu = 'Bonuses_text_37',
                    bu = 'Bonuses_effect_f8',
                    gu = 'Bonuses_icon_40',
                    Eu = (0, x.Pi)(({ compare: e, deviceID: t }) => {
                        const a = (0, mn.GS)(),
                            n = _n().model,
                            s = n.computes.optDevices.device(t),
                            r = s.intCD,
                            i = s.effect,
                            o = n.computes.optDevices.bonusesLength(t),
                            l = `${r}-device`,
                            c = n.computes.optDevices.bonusEffectLinesCount(t);
                        return u().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: du },
                            i &&
                                u().createElement(
                                    'div',
                                    { className: mu },
                                    u().createElement(
                                        'span',
                                        { className: bu },
                                        u().createElement('span', { className: gu }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    u().createElement(
                                        'span',
                                        { className: pu },
                                        u().createElement(ri.n, { mediaSize: a, linesCount: c, blocks: (0, ri.D)(i) }),
                                    ),
                                ),
                            U(o, (a) =>
                                u().createElement(_u, { key: `${a}_${r}`, bonusID: a, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var hu = a(2106);
                const vu = 'DeviceActions_base_c0',
                    fu = 'DeviceActions_base__hidden_a6',
                    Cu = 'DeviceActions_base__shown_b0',
                    Au = (0, o.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: a,
                            isInstalled: n,
                            isMouseOverCard: s,
                            isModernized: r,
                            isFreeToDemount: i,
                            destroyTooltipBodyPath: o,
                            level: l,
                        }) => {
                            const _ = (s || n) && t.includes(Kr.Rs),
                                d = t.length && (t[0] !== Kr.Rs || _),
                                m = c()(vu, d ? Cu : fu);
                            return u().createElement(
                                'div',
                                { className: m },
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr.DA}`,
                                    actionType: Kr.DA,
                                    onClick: a,
                                    show: t.includes(Kr.DA),
                                }),
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr.FR}`,
                                    actionType: Kr.FR,
                                    onClick: a,
                                    show: t.includes(Kr.FR),
                                }),
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr.Rs}`,
                                    actionType: Kr.Rs,
                                    onClick: a,
                                    show: _,
                                    isModernized: r,
                                    level: l,
                                }),
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr.dZ}`,
                                    actionType: Kr.dZ,
                                    onClick: a,
                                    show: t.includes(Kr.dZ),
                                    isFreeToDemount: i,
                                }),
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr.Fd}`,
                                    actionType: Kr.Fd,
                                    onClick: a,
                                    show: t.includes(Kr.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: i,
                                }),
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr.sH}`,
                                    actionType: Kr.sH,
                                    onClick: a,
                                    show: t.includes(Kr.sH),
                                }),
                                u().createElement(Zo.a, {
                                    parentId: `${e}-${Kr._2}`,
                                    actionType: Kr._2,
                                    buttonType: hu.L.secondary,
                                    onClick: a,
                                    show: (r || !i) && t.includes(Kr._2),
                                    isModernized: r,
                                    tooltipBodyPath: o,
                                }),
                            );
                        },
                    );
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const Su = (0, x.Pi)(({ compare: e, index: t, isCurrent: a }) => {
                        const n = (0, mn.GS)(),
                            s = n === mn.cJ.Large || n === mn.cJ.Huge,
                            r = _n(),
                            i = r.model,
                            l = r.controls,
                            c = i.computes.optDevices.device(t),
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
                            S = c.isFreeToDemount,
                            F = c.overlayType,
                            y = c.isLocked,
                            B = c.isUpgradable,
                            k = c.isTrophy,
                            x = c.activeSpecsMask,
                            T = c.isModernized,
                            I = c.level,
                            N = c.lockReason,
                            L = c.destroyTooltipBodyPath,
                            O = d > -1,
                            M = `${f}-device`,
                            P = (0, o.useMemo)(() => {
                                const t = [];
                                let n = !0;
                                return (
                                    O &&
                                        !D &&
                                        (a || t.push(Kr.Xo),
                                        C && !e
                                            ? ((n = !a),
                                              t.push(...((e) => (e ? [Kr.Fd, Kr.sH] : [Kr.dZ]))(b)),
                                              t.push(Kr._2))
                                            : t.push(
                                                  ((e, t, a) => ((!Boolean(e) && !t) || a ? Kr.FR : Kr.DA))(E, C, A),
                                              )),
                                    !B || e || D || t.push(Kr.Rs),
                                    { availableActions: t, isDeviceClickable: n }
                                );
                            }, [O, D, B, e, a, C, b, E, A]),
                            $ = P.availableActions,
                            H = P.isDeviceClickable,
                            z = (0, o.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: f, installedSlotId: d });
                                },
                                [l, f, d],
                            ),
                            j = (0, o.useCallback)(() => {
                                $.length && $[0] !== Kr.Rs ? z($[0]) : z(Kr.eC);
                            }, [$, z]),
                            W = (0, o.useMemo)(() => {
                                const e = { intCD: f, slotType: w.zn, fieldType: 0 };
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
                            G = W[0],
                            V = W[1],
                            Z = (0, o.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return u().createElement(hi, {
                            parentId: M,
                            name: _,
                            tooltipArgs: G,
                            contextMenuArgs: V,
                            imageSource: Z,
                            isCurrent: a,
                            isActive: O,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: H,
                            isModernized: T,
                            level: I,
                            specializations:
                                v && v.specializations.length
                                    ? u().createElement(Yt.G, Du({}, v, { activeSpecsMask: x, mediaSize: n }))
                                    : null,
                            details: u().createElement(Eu, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : u().createElement(Si, {
                                      isMounted: C || A,
                                      itemsInStorage: E,
                                      price: h,
                                      possibleZeroCount: k || T,
                                      show: !$.length || Boolean(E || C || A),
                                  }),
                            actions: u().createElement(Au, {
                                parentId: M,
                                availableActions: $,
                                onActionClick: z,
                                isInstalled: O,
                                isModernized: T,
                                level: I,
                                isFreeToDemount: S,
                                destroyTooltipBodyPath: L,
                            }),
                            overlayType: F,
                            onSlotClick: j,
                            shouldHandleMouseOver: !0,
                            lockReason: N,
                        });
                    }),
                    Fu = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    yu = (0, x.Pi)(
                        ({ index: e, type: t, compare: a = !1 }, n) => {
                            const s = (0, mn.GS)(),
                                r = _n().model,
                                i = r.ammunitionPanel.get().selectedSlot,
                                o = (() => {
                                    switch (t) {
                                        case w.zn:
                                            return r.computes.optDevices.device(e);
                                        case w.mH:
                                            return r.computes.consumables.consumable(e, a, s);
                                        case w.G$:
                                            return r.computes.boosters.booster(e);
                                        default:
                                            return r.computes.optDevices.device(e);
                                    }
                                })(),
                                l = o.isVisible,
                                _ = o.installedSlotId,
                                d = _ > -1 && i === _;
                            return l
                                ? u().createElement(
                                      'div',
                                      { className: c()(Fu.base, s && Fu[`base__${s}`]), ref: d ? n : null },
                                      (() => {
                                          switch (t) {
                                              case w.G$:
                                                  return u().createElement(Yo, { index: e, compare: a, isCurrent: d });
                                              case w.mH:
                                                  return u().createElement(Qo, { index: e, compare: a, isCurrent: d });
                                              case w.zn:
                                              default:
                                                  return u().createElement(Su, { index: e, compare: a, isCurrent: d });
                                          }
                                      })(),
                                  )
                                : null;
                        },
                        { forwardRef: !0 },
                    ),
                    Bu = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    wu = ({ isDisabled: e, compare: t = !1, currentCardRef: a, cardsAmount: n, type: s }) => {
                        const r = (0, mn.GS)();
                        return u().createElement(
                            'div',
                            { className: c()(Bu.base, r && Bu[`base__${r}`], e && Bu.base__disabled) },
                            U(n, (e) =>
                                u().createElement(yu, { key: `${e}_${r}`, index: e, compare: t, ref: a, type: s }),
                            ),
                        );
                    };
                var ku = a(3215),
                    xu = a(3522);
                const Tu = (0, ku.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, xu._)(e),
                                a = t.model,
                                n = t.computes,
                                s = e.object();
                            return Object.assign({}, a, { ammunitionPanel: s, computes: n });
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
                    Iu = (Tu[0], Tu[1]);
                var Nu = a(8586),
                    Ru = a(3978);
                const Lu = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    Ou = 'FilterItem_base_2e',
                    Mu = ({ name: e }) =>
                        u().createElement('div', {
                            className: Ou,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Pu;
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
                })(Pu || (Pu = {}));
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let $u;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })($u || ($u = {}));
                const Hu = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let zu;
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
                })(zu || (zu = {}));
                let ju;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(ju || (ju = {}));
                const Wu = 'ClearBtn_base_a6',
                    Gu = 'ClearBtn_stroke_09',
                    Vu = 'ClearBtn_background_61',
                    Zu = 'ClearBtn_base__hover_3b',
                    Uu = 'ClearBtn_base__down_60',
                    qu = 'ClearBtn_cross_1d',
                    Xu = ({ parentId: e, onClick: t, soundHover: a = 'highlight', soundClick: n = 'play' }) => {
                        const s = (0, o.useState)(!1),
                            r = s[0],
                            i = s[1],
                            l = (0, o.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, o.useCallback)(() => {
                                (0, rt.G)(n), d(!1), i(!0);
                            }, [n]),
                            p = (0, o.useCallback)(() => {
                                (0, rt.G)(a), d(!0);
                            }, [a]),
                            b = (0, o.useCallback)(() => {
                                d(!1), i(!1);
                            }, []);
                        return u().createElement(
                            q.i,
                            Hu,
                            u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(Wu, _ && Zu, r && Uu),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: b,
                                    onClick: t,
                                },
                                u().createElement('div', { className: Vu }),
                                u().createElement('div', { className: Gu }),
                                u().createElement('div', { className: qu }),
                            ),
                        );
                    },
                    Ku = 'MatchDetails_base_a8',
                    Yu = 'MatchDetails_count_d2',
                    Ju = 'MatchDetails_clear_21',
                    Qu = 'MatchDetails_clear__shown_49',
                    el = 'MatchDetails_separator_bc',
                    tl = 'MatchDetails_arrow_b0',
                    al = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: a, totalCount: n }) => {
                        const s = (0, o.useCallback)(() => t(), [t]);
                        return u().createElement(
                            'div',
                            { className: Ku },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('span', { className: Yu }, a),
                                    u().createElement(
                                        'span',
                                        { className: el },
                                        '/',
                                        u().createElement('span', { className: tl }),
                                    ),
                                ),
                            u().createElement('span', { className: Yu }, n),
                            u().createElement(
                                'span',
                                { className: c()(Ju, e && Qu) },
                                u().createElement(Xu, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    nl = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: a,
                        isEnabled: n,
                        showDetails: s = !1,
                        onFilterChanged: r,
                        onFilterReset: i,
                        selectedSlotSpecialization: l,
                    }) => {
                        const _ = (0, mn.GS)(),
                            d = De('FilterTutorialHintZone', Ce);
                        (0, o.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, so.UI)(a, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: u().createElement(Mu, { name: e }),
                            callback: (e, t) => {
                                r({ name: e }), (0, Ru.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: hu.L.ghost,
                                mixClass: c()(Lu.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return u().createElement(
                            'div',
                            { className: c()(Lu.base, _ && Lu[`base__${_}`], s && Lu.base__detailed) },
                            s &&
                                u().createElement(al, {
                                    isFilterActive: n,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            u().createElement(
                                'div',
                                { className: Lu.buttons },
                                u().createElement(Nu.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var sl = a(2372);
                const rl = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    il = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    ol = (e) => (e ? il.disabled.text() : il.notDisabled.text()),
                    ul = (0, x.Pi)(({ disabled: e }) => {
                        const t = (0, mn.GS)(),
                            a = (0, dn.t)(),
                            n = a.model,
                            s = a.controls,
                            r = n.optDevices.specialCurrency.get().value;
                        return u().createElement(
                            'div',
                            { className: c()(rl.base, t && rl[`base__${t}`]) },
                            u().createElement(
                                kt.t,
                                { args: { tooltipId: w.$4 } },
                                u().createElement(
                                    'div',
                                    { className: rl.currency },
                                    u().createElement(sl.A, { value: r }),
                                    u().createElement('div', { className: rl.currencyIcon }),
                                ),
                            ),
                            u().createElement(
                                q.i,
                                { body: ol(e) },
                                u().createElement(
                                    'div',
                                    null,
                                    u().createElement(
                                        vn.u5,
                                        { onClick: s.moreCurrencyGot, mixClass: rl.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ll = 'HeaderContent_base_cd';
                function cl() {
                    return (
                        (cl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        cl.apply(this, arguments)
                    );
                }
                const _l = (0, x.Pi)(({ compare: e }) => {
                        const t = _n(),
                            a = t.model,
                            n = t.controls,
                            s = a.optDevices.setup.get(),
                            r = s.withIntroduction,
                            i = s.hasUnfitItems,
                            o = a.optDevices.specialCurrency.get().value,
                            l = a.computes.optDevices.slotsLength(),
                            c = a.optDevices.tabs.get(),
                            _ = a.optDevices.filter.get(),
                            d = e ? void 0 : a.computes.selectedSlotSpecialization();
                        switch (c.selectedTabName) {
                            case w.S:
                                return u().createElement(
                                    'div',
                                    { className: ll },
                                    u().createElement(
                                        nl,
                                        cl({}, _, {
                                            onFilterChanged: n.filterChanged,
                                            onFilterReset: n.filterReset,
                                            selectedSlotSpecialization: d,
                                        }),
                                    ),
                                );
                            case w.pi:
                                return e
                                    ? null
                                    : !r || (0 !== o && 0 === l)
                                      ? u().createElement(
                                            'div',
                                            { className: ll },
                                            u().createElement(ul, { disabled: r ? !i : l <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    dl = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    ml = R.strings.tank_setup.compare.section,
                    pl = (0, x.Pi)(({ type: e, children: t, withContent: a }) => {
                        const n = Iu().model.vehicleInfo.get(),
                            s = (0, mn.GS)();
                        return u().createElement(
                            'div',
                            { className: c()(dl.base, dl[`base__${s}`]) },
                            u().createElement(
                                'div',
                                { className: dl.title },
                                (0, O.WU)(String(ml.title.$dyn(e)), { name: n.vehicleName }),
                            ),
                            u().createElement('div', { className: dl.description }, ml.description.$dyn(e)),
                            u().createElement(
                                'div',
                                { className: dl.controlsContainer },
                                u().createElement('div', { className: dl.tabs }, null == t ? void 0 : t(n.vehicleLvl)),
                                a && u().createElement(_l, { compare: !0 }),
                            ),
                        );
                    });
                function bl() {
                    return (
                        (bl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        bl.apply(this, arguments)
                    );
                }
                const gl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = _n(),
                            a = t.model,
                            n = t.controls,
                            s = (0, mn.GS)(),
                            r = a.ammunitionPanel.get().selectedSlot,
                            i = a.boosters.tabs.get(),
                            o = a.computes.boosters.length();
                        return u().createElement(mn.Ar, {
                            compare: e,
                            header: e
                                ? u().createElement(pl, { type: w.G$ }, () =>
                                      u().createElement(
                                          wo,
                                          bl({}, i, { handleTabChanged: n.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : u().createElement(xo, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, i, {
                                          handleTabChanged: n.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: u().createElement(
                                Zr,
                                { selectedSlotId: r, scrollAreaKey: i.selectedTabName, updateKey: o },
                                u().createElement(wu, { compare: e, type: w.G$, cardsAmount: o }),
                            ),
                            footer:
                                !e &&
                                u().createElement(Vo.w, {
                                    withConfirmation: !0,
                                    renewalType: Go.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: n.boosters.confirmDeal,
                                    onDealCancelled: n.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => n.boosters.changeAutoRenewal(e),
                                    mediaSize: s,
                                }),
                        });
                    }),
                    El = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, mn.GS)(),
                            a = _n(),
                            n = a.model,
                            s = a.controls,
                            r = n.ammunitionPanel.get().selectedSlot,
                            i = n.computes.consumables.length(e, t);
                        return u().createElement(mn.Ar, {
                            header: e
                                ? u().createElement(pl, { type: w.mH })
                                : u().createElement(xo, { title: R.strings.tank_setup.section.consumables() }),
                            content: u().createElement(
                                Zr,
                                { selectedSlotId: r },
                                u().createElement(wu, { compare: e, cardsAmount: i, type: w.mH }),
                            ),
                            footer:
                                !e &&
                                u().createElement(Vo.w, {
                                    withConfirmation: !0,
                                    renewalType: Go.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: s.consumables.confirmDeal,
                                    onDealCancelled: s.consumables.cancelDeal,
                                    onAutoRenewalChanged: s.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function hl() {
                    return (
                        (hl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        hl.apply(this, arguments)
                    );
                }
                const vl = (0, x.Pi)(({ compare: e, hasIntroduction: t }) => {
                        const a = _n(),
                            n = a.model,
                            s = a.controls,
                            r = n.optDevices.tabs.get(),
                            i = r.tabs.length > 1;
                        return e
                            ? u().createElement(pl, { type: w.zn, withContent: !0 }, (a) => {
                                  if (!i) return null;
                                  const n = e && !t && a <= 4,
                                      o = (function (e, t) {
                                          return t ? so.hX(e, (e) => 'modernized' !== e.name) : e;
                                      })(r.tabs, n);
                                  return u().createElement(
                                      wo,
                                      hl({}, Object.assign({}, r, { tabs: o }), {
                                          handleTabChanged: s.optDevices.changeTab,
                                      }),
                                  );
                              })
                            : u().createElement(
                                  xo,
                                  {
                                      title: R.strings.tank_setup.section.optDevices(),
                                      tabProps: i
                                          ? Object.assign({}, r, { handleTabChanged: s.optDevices.changeTab })
                                          : void 0,
                                      tabs:
                                          i &&
                                          u().createElement(
                                              wo,
                                              hl({}, r, { handleTabChanged: s.optDevices.changeTab }),
                                          ),
                                  },
                                  u().createElement(_l, { compare: e }),
                              );
                    }),
                    fl = {
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
                    },
                    Cl = ({ introType: e }) => {
                        const t = c()(fl.icon, fl[`icon__currency-${e}`]),
                            a = (0, o.useMemo)(
                                () => ({
                                    currencyName: u().createElement(
                                        'span',
                                        { className: fl.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: u().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            n = R.strings.tank_setup.introduction.message.$dyn(e);
                        return n ? u().createElement(oe.z, { binding: a, text: n, classMix: fl.message }) : null;
                    },
                    Al = (0, x.Pi)(() => {
                        const e = (0, mn.GS)(),
                            t = e === mn.cJ.Large || e === mn.cJ.Huge,
                            a = (0, o.useState)(!0),
                            n = a[0],
                            s = a[1],
                            r = (0, dn.t)(),
                            i = r.model,
                            l = r.controls,
                            _ = i.optDevices.setup.get().introductionType,
                            d = i.computes.optDevices.slotsLength() > 0,
                            m = (0, o.useCallback)(() => {
                                s(!1);
                            }, []),
                            p = (0, o.useCallback)(() => {
                                l.introPassed(), s(!0);
                            }, [l]),
                            b = (0, o.useMemo)(
                                () => ({
                                    enter: fl.base__enter,
                                    enterActive: fl.base__enterActive,
                                    exit: fl.base__exit,
                                    exitActive: fl.base__exitActive,
                                }),
                                [],
                            ),
                            g = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return u().createElement(
                            Y.Z,
                            { in: n, classNames: b, timeout: 300, onExited: p },
                            u().createElement(
                                'div',
                                { className: c()(fl.base, e && fl[`base__${e}`]), id: 'introduction' },
                                u().createElement(
                                    'div',
                                    { className: fl.introduction },
                                    u().createElement('div', {
                                        className: c()(fl.image, t ? fl[`image__${_}Large`] : fl[`image__${_}`]),
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: fl.description },
                                        u().createElement('div', { className: fl.title }, g),
                                        u().createElement(Cl, { introType: _ }),
                                    ),
                                    d &&
                                        u().createElement(
                                            vn.u5,
                                            { type: vn.L$.secondary, size: vn.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Dl = 'OptDevicesSetup_intro_ae',
                    Sl = 'OptDevicesSetup_footer_e6',
                    Fl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, mn.GS)(),
                            a = _n().model,
                            n = (0, dn.t)().controls,
                            s = a.ammunitionPanel.get().selectedSlot,
                            r = a.optDevices.setup.get().withIntroduction,
                            i = a.computes.optDevices.slotsLength(),
                            o = a.optDevices.filter.get().selectedFilterCount,
                            l = a.optDevices.tabs.get().selectedTabName,
                            c = a.computes.optDevices.slotsLength();
                        return u().createElement(mn.Ar, {
                            compare: e,
                            header: u().createElement(vl, { compare: e, hasIntroduction: r }),
                            content:
                                !e && r
                                    ? u().createElement(
                                          'div',
                                          { className: Dl },
                                          u().createElement(wu, {
                                              compare: !1,
                                              type: w.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          u().createElement(Al, null),
                                      )
                                    : u().createElement(
                                          Zr,
                                          { selectedSlotId: s, scrollAreaKey: l, updateKey: `${o}:${i}` },
                                          u().createElement(wu, {
                                              compare: e,
                                              type: w.zn,
                                              cardsAmount: c,
                                              isDisabled: r,
                                          }),
                                      ),
                            footer:
                                !e &&
                                u().createElement(
                                    'div',
                                    { className: Sl },
                                    u().createElement(Vo.w, {
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
                let yl, Bl, wl, kl;
                !(function (e) {
                    (e.Stereoscope = 'stereoscope'),
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
                        (e.Empty = '');
                })(yl || (yl = {})),
                    (function (e) {
                        (e.Visible = 'visible'),
                            (e.Hidden = 'hidden'),
                            (e.NotSuitableVehicle = 'notSuitableVehicle'),
                            (e.NoDataAtAll = 'noDataAtAll');
                    })(Bl || (Bl = {})),
                    (function (e) {
                        (e[(e.NoData = 0)] = 'NoData'),
                            (e[(e.Normal = 1)] = 'Normal'),
                            (e[(e.Linked = 2)] = 'Linked'),
                            (e[(e.Combined = 3)] = 'Combined');
                    })(wl || (wl = {})),
                    (function (e) {
                        (e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7');
                    })(kl || (kl = {}));
                var xl = a(5344),
                    Tl = a(5959);
                const Il = {
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
                        shine1: 'PopularLoadouts_shine1_08',
                        shine2: 'PopularLoadouts_shine2_47',
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
                    Nl = (e) => {
                        return (t = e) !== yl.Empty &&
                            t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
                            ? R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices.$dyn(e)
                            : null;
                        var t;
                    },
                    Rl = (e) => {
                        const t = Number.isInteger(e) ? `${e}` : e.toFixed(2);
                        return (0, O.dL)(t);
                    },
                    Ll = ({ popularity: e, optionalDevice: t, isHovered: a }) => {
                        const n = (0, o.useMemo)(() => {
                                const e = t.map(Nl);
                                return [...e, ...Array.from({ length: 3 - e.length }, () => null)];
                            }, [t]),
                            s = 0 === t.length;
                        return u().createElement(
                            'div',
                            { className: c()(Il.row, s && Il.row_empty) },
                            u().createElement(
                                'div',
                                { className: c()(Il.popularity, a && Il.popularity__visible) },
                                u().createElement(Ks, { text: Rl(e) }),
                            ),
                            u().createElement(
                                'div',
                                { className: c()(Il.row_images, a && Il.row_images__hovered) },
                                n.map((e, t) =>
                                    e
                                        ? u().createElement('img', { key: t, className: Il.row_image, src: e })
                                        : u().createElement('div', { key: t, className: Il.row_emptySlot }),
                                ),
                            ),
                        );
                    },
                    Ol = (0, x.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, dn.t)(),
                            a = t.model,
                            n = t.controls,
                            s = (0, o.useState)(null),
                            r = s[0],
                            i = s[1],
                            l = (0, o.useRef)(null),
                            _ = (0, o.useState)(!0),
                            d = _[0],
                            m = _[1],
                            p = (0, o.useState)(!1),
                            b = p[0],
                            g = p[1],
                            E = (0, o.useState)(a.selectedPreset.get().mType || xl.d.Common),
                            h = E[0],
                            v = E[1],
                            f = a.computes.getSortedCommonItems(),
                            C = a.computes.getSortedLegendaryItems(),
                            A = a.optionalDevicesAssistant.get().isHintShown,
                            D = a.optionalDevicesAssistant.get().state,
                            S = D === Bl.NotSuitableVehicle,
                            F = a.computes.getModeType() === kl.Comp7,
                            y = a.computes.getOptionalDevicesResultTypeForPreset(h),
                            B = a.computes.getSourceVehicleCompDescrForPreset(h);
                        (0, o.useEffect)(
                            () => (
                                A ||
                                    (l.current = window.setInterval(() => {
                                        i((e) => ('shine1' === e ? 'shine2' : 'shine1'));
                                    }, 4e3)),
                                () => {
                                    l.current && window.clearInterval(l.current);
                                }
                            ),
                            [],
                        );
                        const w = () => {
                                l.current && window.clearInterval(l.current), A || n.onHintShown();
                            },
                            k = () => {
                                const e = h === xl.d.Common ? xl.d.Legendary : xl.d.Common;
                                v(e), n.onPresetSelected(e);
                            },
                            x = h === xl.d.Common ? f : C,
                            T =
                                h === xl.d.Common
                                    ? R.strings.tank_setup.popularLoadouts.common()
                                    : R.strings.tank_setup.popularLoadouts.legendary(),
                            I = y === wl.Linked,
                            N = y === wl.NoData && xl.d.Legendary,
                            L = D === Bl.NoDataAtAll,
                            O = y === wl.Combined,
                            M = b && !O,
                            P = I || O,
                            H = ts(),
                            z = (0, o.useRef)(null),
                            j = (0, o.useCallback)(() => {
                                var e;
                                const t = null == (e = z.current) ? void 0 : e.getBoundingClientRect();
                                return t ? `${t.width},${t.height}` : null;
                            }, []);
                        $(
                            j,
                            () => {
                                H.recalculateContent();
                                const e = H.getContainerSize() || 0,
                                    t = H.getWrapperSize() || 0;
                                m(e > t);
                            },
                            { intervalMs: 50, minStableTicks: 8, listenResize: !0 },
                            [],
                        );
                        const W = (0, o.useMemo)(
                            () =>
                                Array.from({ length: 3 }, (e, t) => {
                                    var a;
                                    return null != (a = x[t]) ? a : { popularity: 0, items: [] };
                                }),
                            [x],
                        );
                        return u().createElement(
                            'div',
                            {
                                className: c()(
                                    Il.base,
                                    e && Il.base__hidden,
                                    h === xl.d.Legendary && Il.base__legendary,
                                    P && Il.base__linked,
                                    N && Il.base__noDataLegendary,
                                ),
                            },
                            u().createElement(
                                'div',
                                { className: c()(Il.backgroundWrapper, { [Il.backgroundWrapper__noData]: L || S }) },
                                u().createElement('div', { className: c()(Il.animatedBackground, r && Il[r]) }),
                            ),
                            S
                                ? u().createElement(
                                      'div',
                                      { className: Il.vehicleNotAvailable, onMouseEnter: w },
                                      u().createElement(
                                          'div',
                                          { className: Il.vehicleNotAvailable_text },
                                          R.strings.tank_setup.popularLoadouts.vehicleNotAvailable(),
                                      ),
                                  )
                                : L
                                  ? u().createElement(
                                        'div',
                                        { className: Il.noData, onMouseEnter: w },
                                        u().createElement(
                                            'div',
                                            { className: Il.noData_text },
                                            R.strings.tank_setup.popularLoadouts.noData(),
                                        ),
                                    )
                                  : u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', {
                                            className: c()([Il.border, d && Il.border_visible]),
                                        }),
                                        N &&
                                            u().createElement(
                                                'div',
                                                { className: Il.noDataLegendary },
                                                R.strings.tank_setup.popularLoadouts.noDataLegendary(),
                                            ),
                                        u().createElement(
                                            'div',
                                            { className: Il.scrollWrapper, onMouseEnter: w },
                                            u().createElement(
                                                vs.Vertical.Default,
                                                { api: H, className: Il.scroll },
                                                u().createElement(
                                                    'div',
                                                    {
                                                        className: Il.container,
                                                        ref: z,
                                                        onMouseEnter: () => g(!0),
                                                        onMouseLeave: () => g(!1),
                                                    },
                                                    W.map((e, t) =>
                                                        u().createElement(Ll, {
                                                            key: t,
                                                            popularity: e.popularity,
                                                            optionalDevice: e.items,
                                                            isHovered: M,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            u().createElement('div', { className: Il.background }),
                                            F && u().createElement('div', { className: Il.onslaughtBackground }),
                                        ),
                                        u().createElement('div', { className: Il.border }),
                                        u().createElement('div', { className: Il.lips }),
                                        u().createElement(
                                            'div',
                                            { className: Il.footer },
                                            u().createElement(
                                                'div',
                                                {
                                                    className: Il.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Tl.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Tl.playSound)('play');
                                                    },
                                                },
                                                u().createElement('div', {
                                                    className: Il.footer_arrowLeft,
                                                    onClick: k,
                                                }),
                                            ),
                                            u().createElement(
                                                'div',
                                                { className: Il.footer_wrapper },
                                                u().createElement(
                                                    nt.u,
                                                    {
                                                        contentId:
                                                            R.views.lobby.tanksetup.tooltips.PopularLoadoutsTooltip(
                                                                'resId',
                                                            ),
                                                        args: {
                                                            sourceVehicleCompDescr: B,
                                                            optionalDevicesResultType: y,
                                                        },
                                                    },
                                                    u().createElement(
                                                        'div',
                                                        null,
                                                        u().createElement('div', { className: Il.lipsIcon }),
                                                        u().createElement(
                                                            'div',
                                                            { className: Il.footer_wrapper_title },
                                                            T,
                                                        ),
                                                    ),
                                                ),
                                                u().createElement(
                                                    'div',
                                                    { className: Il.footer_wrapper_pagination },
                                                    u().createElement('div', {
                                                        className: c()(Il.dot1, 0 === h && Il.dot1__active),
                                                    }),
                                                    u().createElement('div', {
                                                        className: c()(Il.dot2, 1 === h && Il.dot2__active),
                                                    }),
                                                ),
                                            ),
                                            u().createElement(
                                                'div',
                                                {
                                                    className: Il.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Tl.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Tl.playSound)('play');
                                                    },
                                                },
                                                u().createElement('div', {
                                                    className: Il.footer_arrowRight,
                                                    onClick: k,
                                                }),
                                            ),
                                        ),
                                    ),
                        );
                    }),
                    Ml = {
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                    },
                    Pl = (0, x.Pi)(() => {
                        const e = (0, dn.t)().model.vehicleInfo.get(),
                            t = (0, mn.GS)();
                        return u().createElement(
                            'div',
                            { className: c()(Ml.base, t && Ml[`base__${t}`]) },
                            u().createElement(ar, e),
                        );
                    }),
                    $l = 'RightSideTankParameters_tankNamePosition_b3',
                    Hl = 'RightSideTankParameters_popularLoadoutsPosition_04',
                    zl = (0, x.Pi)(({ isBattleAbilities: e, arePopularLoadoutsHidden: t }) => {
                        const a = (0, dn.t)(),
                            n = a.controls,
                            s = a.model,
                            i = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = s.optionalDevicesAssistant.get().state === Bl.Hidden,
                            _ = !c,
                            d = (0, o.useCallback)(() => {
                                var e, t;
                                const a = null == (e = i.current) ? void 0 : e.getBoundingClientRect(),
                                    n = null == (t = l.current) ? void 0 : t.getBoundingClientRect();
                                return a && n ? `${a.left}-${a.width}-${n.top}` : null;
                            }, [i, l]),
                            m = (0, o.useCallback)(() => {
                                if (!i.current || !l.current) return;
                                const e = i.current.getBoundingClientRect(),
                                    t = l.current.getBoundingClientRect(),
                                    a = {
                                        width: r.O.view.pxToRem(e.width),
                                        height: r.O.view.pxToRem(e.height),
                                        offsetX: r.O.view.pxToRem(e.left),
                                        offsetY: r.O.view.pxToRem(e.top),
                                        bottomMargin: Math.round(r.O.view.pxToRem(window.outerHeight - t.top)),
                                    };
                                window.tutorialApi.updateComponents(), a.offsetX && a.width && n.resized(a);
                            }, [n]);
                        return (
                            $(d, m, { intervalMs: 50, minStableTicks: 8, listenResize: !0 }, [e, c]),
                            u().createElement(
                                u().Fragment,
                                null,
                                !e && u().createElement('div', { className: $l, ref: i }, u().createElement(Pl, null)),
                                u().createElement(
                                    'div',
                                    { className: Hl, ref: l },
                                    _ && u().createElement(Ol, { isHidden: t }),
                                ),
                            )
                        );
                    });
                var jl = a(5096),
                    Wl = a(5958);
                const Gl = {
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
                    Vl = (0, x.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: a,
                            leftID: n,
                            rightID: s,
                            uniqueKey: r,
                            onTransitionEnd: i,
                        }) => {
                            const l = Xr(r),
                                _ = a === mn.cJ.Tiny,
                                d = n === t,
                                m = l && l !== r,
                                p = (0, o.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, o.useMemo)(() => ((s - n > 1 && _) || !m ? 'Fade' : ''), [m, n, s, _]),
                                g = (0, o.useCallback)(
                                    (e) =>
                                        u().cloneElement(e, {
                                            classNames: {
                                                enterActive: Gl.base__enter,
                                                enterDone: Gl[`base__enter${p}${b}`],
                                                exit: Gl[`base__exit${p}${b}`],
                                                exitActive: Gl.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                E = (0, o.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), i && i();
                                        }, Wl.PD);
                                    },
                                    [i],
                                ),
                                h = (0, o.useMemo)(() => ({ animationDuration: `${Wl.PD}ms` }), []);
                            return u().createElement(
                                K.Z,
                                { component: null, childFactory: g },
                                u().createElement(
                                    Y.Z,
                                    { key: r, timeout: Wl.PD, onEntered: E },
                                    u().createElement(
                                        'div',
                                        { className: c()(Gl.base, Gl[`base__${a}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var Zl = a(2094);
                const Ul = {
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
                    ql = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Xl = (0, x.Pi)(({ shellID: e, specificationID: t }) => {
                        const a = (0, mn.GS)(),
                            n = a === mn.cJ.Tiny,
                            s = (0, dn.t)().model.computes.shells.specification(e, t),
                            r = s.paramName,
                            i = s.value,
                            l = s.metricValue,
                            _ = (0, o.useMemo)(() => {
                                if ('avgPiercingPower' === r) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [r]);
                        return 'avgPiercingPower' === r || (!n && i)
                            ? u().createElement(
                                  'div',
                                  { className: c()(ql.base, a && ql[`base__${a}`]) },
                                  n
                                      ? u().createElement(
                                            u().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(r),
                                            ' ',
                                            u().createElement(
                                                'div',
                                                { className: ql.value },
                                                i || u().createElement('span', null, '—'),
                                            ),
                                            u().createElement('div', { className: ql.units }, _),
                                        )
                                      : u().createElement(
                                            u().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(r),
                                            u().createElement('div', { className: ql.units }, l),
                                            u().createElement('div', {
                                                className: c()(ql.separator, a && ql[`separator__${a}`]),
                                            }),
                                            u().createElement(
                                                'div',
                                                { className: ql.value },
                                                i || u().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    Kl = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var Yl = a(7405),
                    Jl = a(329);
                const Ql = {
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
                function ec() {
                    return (
                        (ec =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ec.apply(this, arguments)
                    );
                }
                const tc = R.strings.tank_setup.shells,
                    ac = (0, x.Pi)(({ id: e }) => {
                        const t = (0, mn.GS)(),
                            a = t === mn.cJ.Tiny,
                            n = (0, dn.t)().model,
                            s = n.computes.shells.shell(e),
                            r = s.buyCount,
                            i = s.itemsInStorage,
                            l = s.itemsInVehicle,
                            _ = s.totalPrice,
                            d = s.price,
                            m = n.computes.shells.defPriceLength(e),
                            p = n.computes.shells.priceLength(e) ? n.computes.shells.price(e, 0) : null,
                            b = m ? n.computes.shells.defPrice(e, 0) : null,
                            g = (0, o.useMemo)(() => tc[a ? 'shortSpecification' : 'specification'].inStorage(), [a]),
                            E = (0, o.useMemo)(() => tc[a ? 'shortSpecification' : 'specification'].inVehicle(), [a]),
                            h = (0, o.useMemo)(() => tc[a ? 'shortSpecification' : 'specification'].price(), [a]),
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
                        return u().createElement(
                            'div',
                            { className: c()(Ql.base, t && Ql[`base__${t}`]) },
                            u().createElement(
                                'div',
                                { className: c()(Ql.row, t && Ql[`row__${t}`]) },
                                u().createElement(
                                    'div',
                                    { className: Ql.rowItem },
                                    u().createElement('div', { className: c()(Ql.total, t && Ql[`total__${t}`]) }, g),
                                    u().createElement(
                                        'div',
                                        { className: c()(Ql.lowResolutionValue, t && Ql[`lowResolutionValue__${t}`]) },
                                        u().createElement('span', { className: Ql.indent }),
                                        i,
                                    ),
                                ),
                                v &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('span', { className: Ql.divider }, '/'),
                                        u().createElement(
                                            'div',
                                            { className: Ql.rowItem },
                                            u().createElement(
                                                'div',
                                                { className: c()(Ql.total, t && Ql[`total__${t}`]) },
                                                u().createElement(
                                                    'div',
                                                    { className: c()(Ql.colored, t && Ql[`colored__${t}`]) },
                                                    E,
                                                ),
                                            ),
                                            u().createElement(
                                                'div',
                                                {
                                                    className: c()(
                                                        Ql.lowResolutionValue,
                                                        t && Ql[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                u().createElement('span', { className: Ql.indent }),
                                                l,
                                            ),
                                        ),
                                    ),
                                u().createElement('div', { className: c()(Ql.separator, t && Ql[`separator__${t}`]) }),
                                u().createElement(
                                    'div',
                                    { className: c()(Ql.hiResolutionValue, t && Ql[`hiResolutionValue__${t}`]) },
                                    i,
                                    v &&
                                        u().createElement(
                                            u().Fragment,
                                            null,
                                            u().createElement('span', { className: Ql.divider }, '/'),
                                            u().createElement(
                                                'div',
                                                { className: c()(Ql.colored, t && Ql[`colored__${t}`]) },
                                                l,
                                            ),
                                        ),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: c()(Ql.row, t && Ql[`row__${t}`]) },
                                u().createElement('div', { className: c()(Ql.total, t && Ql[`total__${t}`]) }, h),
                                u().createElement('div', { className: c()(Ql.separator, t && Ql[`separator__${t}`]) }),
                                u().createElement(
                                    'div',
                                    { className: Ql.value },
                                    u().createElement(
                                        'div',
                                        { className: Ql.overall },
                                        '(',
                                        u().createElement('span', null, r),
                                        ' ×',
                                        u().createElement(
                                            kt.t,
                                            { args: C, isEnabled: f },
                                            u().createElement(
                                                'span',
                                                { className: Ql.price },
                                                u().createElement(fi.t, ec({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        u().createElement(
                                            'span',
                                            { className: c()(Ql.price, Ql.price__final) },
                                            r
                                                ? u().createElement(fi.t, ec({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : u().createElement(Yl.F, {
                                                      size: Jl.et.small,
                                                      type: Jl.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    nc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, mn.GS)(),
                            a = (0, dn.t)().model.computes.shells.specificationsLength(e);
                        return u().createElement(
                            'div',
                            { className: c()(Kl.base, t && Kl[`base__${t}`]) },
                            u().createElement(
                                'div',
                                { className: Kl.overall },
                                U(a, (t) =>
                                    u().createElement(
                                        o.Fragment,
                                        { key: t },
                                        u().createElement(Xl, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            u().createElement('div', { className: Kl.total }, u().createElement(ac, { id: e })),
                        );
                    }),
                    sc = R.images.gui.maps.icons.shell,
                    rc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, mn.GS)(),
                            a = (0, dn.t)(),
                            n = a.model,
                            s = a.controls,
                            r = n.computes.shells.shell(e),
                            i = r.count,
                            l = r.type,
                            _ = r.intCD,
                            d = r.imageName,
                            m = r.installedSlotId,
                            p = r.itemInstalledSetupIdx,
                            b = r.itemInstalledSetupSlotIdx,
                            g = r.isMountedMoreThanOne,
                            E = n.shellsSetup.get(),
                            h = E.installedCount,
                            v = E.maxCount,
                            f = E.clipCount,
                            C = v - h + i,
                            A = (0, o.useCallback)(
                                (e) => {
                                    s.shells.updateSlot && s.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [s, _],
                            ),
                            D = (0, o.useMemo)(() => {
                                const e = { slotType: w.g9, fieldType: 0, intCD: _ };
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
                            S = D[0],
                            F = D[1],
                            y = (0, o.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case mn.cJ.Huge:
                                        case mn.cJ.Large:
                                            return sc.large;
                                        default:
                                            return sc.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            B = R.strings.item_types.shell.kinds.$dyn(l),
                            k = systemLocale.toUpperCase(B);
                        return u().createElement(
                            'div',
                            { className: c()(Ul.base, t && Ul[`base__${t}`]) },
                            u().createElement(
                                'div',
                                { className: Ul.shell },
                                u().createElement(
                                    jt,
                                    { args: F },
                                    u().createElement(
                                        kt.t,
                                        { args: S },
                                        u().createElement(
                                            'div',
                                            { className: Ul.icon, style: y },
                                            u().createElement(
                                                'div',
                                                { className: c()(Ul.count, !i && Ul.count__zero) },
                                                i,
                                            ),
                                        ),
                                    ),
                                ),
                                u().createElement('div', { className: Ul.name }, k),
                            ),
                            u().createElement(
                                'div',
                                { className: Ul.ammunition },
                                u().createElement(Zl.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: i,
                                    maximum: v,
                                    sliderMaximum: C,
                                    onUpdates: A,
                                    stepCount: f,
                                }),
                            ),
                            u().createElement(
                                'div',
                                { className: Ul.specifications },
                                u().createElement(nc, { id: e }),
                            ),
                        );
                    }),
                    ic = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    oc = ({ id: e, onSwap: t, mediaSize: a, hoverSound: n = 'highlight', clickSound: s = 'play' }) => {
                        const r = (0, o.useCallback)(() => {
                                s && (0, rt.G)(s), t(e);
                            }, [e, t, s]),
                            i = (0, o.useCallback)(() => {
                                n && (0, rt.G)(n);
                            }, [n]);
                        return u().createElement('div', {
                            id: `swap-${e}`,
                            onClick: r,
                            onMouseEnter: i,
                            className: c()(ic.base, ic[`base__${a}`]),
                        });
                    },
                    uc = {
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
                    lc = (0, x.Pi)(({ id: e, onTransitionEnd: t, onSwap: a, leftID: n, rightID: s }) => {
                        const r = (0, mn.GS)(),
                            i = (0, dn.t)().model,
                            o = i.computes.shells.length(),
                            l = i.computes.shells.shell(e).intCD;
                        return u().createElement(
                            u().Fragment,
                            null,
                            u().createElement(
                                Vl,
                                { index: e, uniqueKey: l, leftID: n, rightID: s, mediaSize: r, onTransitionEnd: t },
                                u().createElement(
                                    'div',
                                    { className: c()(uc.base, r && uc[`base__${r}`]) },
                                    u().createElement(rc, { id: e }),
                                ),
                            ),
                            e !== o - 1 &&
                                u().createElement(
                                    'div',
                                    { className: c()(uc.swap, r && uc[`swap__${r}`]) },
                                    u().createElement(oc, { id: e, mediaSize: r, onSwap: a }),
                                ),
                        );
                    }),
                    cc = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    _c = (0, x.Pi)(() => {
                        const e = (0, dn.t)(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.shells.length(),
                            s = (0, o.useState)(!1),
                            r = s[0],
                            i = s[1],
                            l = (0, mn.GS)(),
                            _ = t.computes.shells.ids(),
                            d = Xr(_),
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
                                    r || a.shells.actSlot({ actionType: Kr.Xo, leftID: e, rightID: e + 1 }), i(!0);
                                },
                                [a, r],
                            ),
                            E = (0, o.useCallback)(() => {
                                i(!1);
                            }, [i]);
                        return u().createElement(
                            'div',
                            { className: c()(cc.base, cc[`base__${l}`]) },
                            U(n, (e) =>
                                u().createElement(lc, {
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
                    dc = (0, x.Pi)(() => {
                        const e = (0, mn.GS)(),
                            t = (0, dn.t)().controls;
                        return u().createElement(mn.Ar, {
                            header: u().createElement(
                                xo,
                                { title: R.strings.tank_setup.section.shells() },
                                u().createElement(jl.k, { isShortened: !0 }),
                            ),
                            content: u().createElement(_c, null),
                            footer: u().createElement(Vo.w, {
                                withConfirmation: !0,
                                renewalType: Go.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    mc = {
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
                    pc = [w.zn, w.g9, w.mH, w.G$, w.YN],
                    bc = (e, t) => (t === e ? '' : pc.indexOf(t) > pc.indexOf(e) ? 'right' : 'left'),
                    gc = ({ children: e, selectedSetup: t }) => {
                        const a = u().createRef(),
                            n = (0, o.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, o.useMemo)(() => {
                                const e = bc(n.current.selectedSetup, t);
                                return { enter: mc[`base__${e}Enter`] };
                            }, [t]),
                            r = (0, o.useCallback)(
                                (e) => {
                                    const s = bc(n.current.selectedSetup, t);
                                    (e.className = c()(mc.base, mc.base__exit)),
                                        e.classList.add(mc[`base__${s}Exit`]),
                                        (n.current.animatedElements[t] = a);
                                    Object.values(n.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(mc.base__previous);
                                    }),
                                        a.current && a.current.classList.add(mc.base__previous);
                                },
                                [a, t],
                            ),
                            i = (0, o.useCallback)(
                                (e) => {
                                    const a = bc(n.current.previousSelectedSetup, t);
                                    (e.className = mc.base), e.classList.add(mc[`base__${a}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, o.useCallback)(
                                (e) => {
                                    const a = bc(n.current.previousSelectedSetup, t);
                                    e.classList.add(mc[`base__${a}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, o.cloneElement)(e);
                        return (
                            (n.current.previousSelectedSetup = n.current.selectedSetup),
                            (n.current.selectedSetup = t),
                            u().createElement(
                                K.Z,
                                null,
                                u().createElement(
                                    Y.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: r,
                                        onEnter: i,
                                        onEntering: l,
                                    },
                                    u().createElement('div', { className: mc.base, ref: a }, _),
                                ),
                            )
                        );
                    },
                    Ec = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = _n().model.tankSetup.get().selectedSetup;
                        return u().createElement(
                            o.Fragment,
                            null,
                            u().createElement(
                                gc,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case w.zn:
                                            return u().createElement(Fl, { compare: e });
                                        case w.g9:
                                            return u().createElement(dc, null);
                                        case w.mH:
                                            return u().createElement(El, { compare: e });
                                        case w.G$:
                                            return u().createElement(gl, { compare: e });
                                        case w.YN:
                                            return u().createElement(Wo, null);
                                        default:
                                            return u().createElement(Fl, { compare: e });
                                    }
                                })(),
                            ),
                            !e &&
                                u().createElement(zl, {
                                    isBattleAbilities: t === w.YN,
                                    arePopularLoadoutsHidden: t !== w.zn,
                                }),
                        );
                    }),
                    hc = (0, x.Pi)(() => {
                        const e = (0, dn.t)(),
                            t = e.model,
                            a = e.controls,
                            n = t.tankSetup.get().selectedSetup,
                            s = E().mediaWidth,
                            r = (0, o.useState)(!1),
                            i = r[0],
                            l = r[1];
                        (0, o.useEffect)(() => (0, k.v)(a.viewRendered), [a]);
                        const c = (0, o.useCallback)(() => {
                            i || a.close();
                        }, [i, a]);
                        return u().createElement(
                            cn.Provider,
                            { value: e },
                            u().createElement(
                                ln.Sf,
                                {
                                    show: t.show.get(),
                                    panel: u().createElement(
                                        H.k,
                                        null,
                                        u().createElement(un, {
                                            show: t.show.get(),
                                            isReady: t.isReady.get(),
                                            panelType: Se.w.Setup,
                                            setIsExitBlocked: l,
                                        }),
                                    ),
                                    button:
                                        n === w.YN &&
                                        s > m.j.medium.width &&
                                        u().createElement(Ro, { id: 'scenarios_btn', theme: No.Standalone }),
                                    onAnimationDone: a.animationEnded,
                                    onClose: c,
                                },
                                u().createElement(Ec, null),
                            ),
                        );
                    });
                r.O.view.whenTutorialReady.then(() => {
                    B().render(
                        u().createElement(dn.k, null, u().createElement(F, null, u().createElement(hc, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, a) => {
                'use strict';
                a.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7739),
                    i = a(7363),
                    o = a.n(i),
                    u = a(1960);
                let l;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(l || (l = {}));
                const c = () => {
                        const e = (0, i.useContext)(r.YN);
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
                    _ = ({ header: e, content: t, aside: a, footer: n, compare: r = !1 }) => {
                        const i = c(),
                            l = s()(u.Z.base, i && u.Z[`base__${i}`], r && u.Z.base__compare),
                            _ = s()(u.Z.header, i && u.Z[`header__${i}`]),
                            d = s()(u.Z.main),
                            m = s()(u.Z.content);
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
                                    o().createElement('div', { className: u.Z.inner }, t),
                                ),
                                a,
                            ),
                            n && o().createElement('div', { className: u.Z.footer }, n),
                        );
                    };
            },
            3522: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var n = a(4598),
                    s = a(9480),
                    r = a(3946),
                    i = a(1922);
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
                    u = [
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
                            a = (0, r.Om)(
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
                                { equals: n.jv },
                            ),
                            o = (0, r.Om)(() => a().length),
                            _ = (0, r.Om)(
                                (e) => {
                                    const t = s.U2(a(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: n.jv },
                            ),
                            d = (0, r.Om)((e) => _(e).bonuses.items.length, { equals: n.jv }),
                            m = (0, r.Om)(
                                (e, t) => {
                                    const a = _(e),
                                        n = s.U2(a.bonuses.items, t);
                                    if (!n) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            p = (0, r.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            b = (0, r.Om)((e, t, a) => {
                                const n = d(e),
                                    s = p(e);
                                let r = s ? a - s : a,
                                    i = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!r) return null;
                                    (i = n > 2 ? 1 : 2 === n ? (r > 2 ? 2 : 1) : r), (r -= i);
                                }
                                return i;
                            }),
                            g = (0, r.Om)(
                                (e, t) => {
                                    const a = m(e, t);
                                    return s.dF(a.values, ({ valueKey: e }) => e === a.localeName);
                                },
                                { equals: n.jv },
                            ),
                            E = (0, r.Om)(
                                (e, a) =>
                                    ((e, t, a) => {
                                        const n = a !== i.cJ.Tiny || t ? u : l,
                                            r = c(e),
                                            o = s.u4(
                                                r,
                                                (e, t) => {
                                                    const a = n.indexOf(t.itemName);
                                                    return (e[-1 === a ? Math.max(e.length, l.length) : a] = t), e;
                                                },
                                                [],
                                            );
                                        return s.hX(o, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, a),
                                { equals: n.jv },
                            ),
                            h = (0, r.Om)((e, t) => E(e, t).length),
                            v = (0, r.Om)(
                                (e, t, a) => {
                                    const n = s.U2(E(t, a), e);
                                    if (!n) throw Error(`No consumable found with index: ${n}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            f = (0, r.Om)(
                                () => {
                                    return (e = t.boosters.slots.get()), c(e);
                                    var e;
                                },
                                { equals: n.jv },
                            ),
                            C = (0, r.Om)(() => f().length),
                            A = (0, r.Om)(
                                (e) => {
                                    const t = s.U2(f(), e);
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
                                    bonusVisibleLinesCount: b,
                                    bonusValue: g,
                                },
                                consumables: { length: h, consumable: v },
                                boosters: { length: C, booster: A },
                            },
                        };
                    };
            },
            3028: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => c, t: () => _ });
                var n = a(5344),
                    s = a(3215),
                    r = a(4598),
                    i = a(9480),
                    o = a(3946),
                    u = a(3522);
                const l = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, u._)(e),
                                a = t.model,
                                s = t.computes,
                                l = e.object('tankSetup.shellsSetup'),
                                c = e.array('tankSetup.shellsSetup.slots'),
                                _ = e.object('ammunitionPanel'),
                                d = e.array('ammunitionPanel.sectionGroups'),
                                m = e.object('optionalDevicesAssistant'),
                                p = e.array('optionalDevicesAssistant.optionalDevicesAssistantPresets'),
                                b = e.object('optionalDevicesAssistant.selectedPreset'),
                                g = () =>
                                    i.UI(p.get(), (e) =>
                                        Object.assign({}, e, {
                                            optionalDevicesAssistantItems: i.UI(e.optionalDevicesAssistantItems, (e) =>
                                                Object.assign({}, e, { items: i.UI(e.items, r.yR) }),
                                            ),
                                        }),
                                    ),
                                E = (e) =>
                                    i.u4(
                                        p.get(),
                                        (t, a) => {
                                            if (a.presetType.mType === e) {
                                                const e = i.UI(a.optionalDevicesAssistantItems, (e) =>
                                                    Object.assign({}, e, { items: i.UI(e.items, r.yR) }),
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
                                        const t = i.U2(c.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: r.jv },
                                ),
                                C = (0, o.Om)(() => c.get().length),
                                A = (0, o.Om)(() => i.UI(c.get(), (e) => e.intCD), { equals: r.jv }),
                                D = (0, o.Om)((e) => f(e).specifications.length),
                                S = (0, o.Om)(
                                    (e, t) => {
                                        const a = f(e),
                                            n = i.U2(a.specifications, t);
                                        if (!n) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: r.jv },
                                ),
                                F = (0, o.Om)(
                                    (e, t) => {
                                        const a = f(e),
                                            n = i.U2(a.price.price, t);
                                        if (!n) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: r.jv },
                                ),
                                y = (0, o.Om)(
                                    (e, t) => {
                                        const a = f(e),
                                            n = i.U2(a.price.defPrice, t);
                                        if (!n) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: r.jv },
                                ),
                                B = (0, o.Om)((e) => f(e).price.price.length),
                                w = (0, o.Om)((e) => f(e).price.defPrice.length),
                                k = (0, o.Om)(() => {
                                    const e = _.get().selectedSlot,
                                        t = i.U2(d.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const a = i.U2(t.sections, 0);
                                    if (!a) throw Error('No section found');
                                    const n = i.U2(a.slots, e);
                                    if (!n) throw Error(`No slot found with index: ${e}`);
                                    const s = i.U2(n.specializations.specializations, 0);
                                    return null == s ? void 0 : s.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), a, {
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
                                        const t = n.d.Common || n.d.Legendary;
                                        return null == (e = g().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: C,
                                        shell: f,
                                        specificationsLength: D,
                                        specification: S,
                                        price: F,
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
            8774: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => C });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3457),
                    i = a(2106),
                    o = a(6373),
                    u = a(7363),
                    l = a.n(u);
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
                    (e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn');
                })(f || (f = {}));
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: a = '',
                    show: n = !1,
                    disabled: C = !1,
                    disabledTooltipText: A,
                    tooltipBodyPath: D,
                    buttonType: S = i.L.primary,
                    isModernized: F,
                    isFreeToDemount: y,
                    level: B,
                    onClick: w,
                }) => {
                    const k = (0, u.useRef)(null),
                        x = (0, u.useRef)(f.Hidden),
                        T = (0, u.useRef)(!1),
                        I = (0, u.useState)(!n),
                        N = I[0],
                        L = I[1],
                        O = (0, u.useState)(!1),
                        M = O[0],
                        P = O[1],
                        $ = (0, u.useState)(),
                        H = $[0],
                        z = $[1],
                        j = (0, u.useCallback)(() => {
                            const e = x.current;
                            e === f.FadeIn
                                ? ((x.current = f.Hidden), L(!0))
                                : e === f.FadeOut && (x.current = f.Visible);
                        }, []);
                    (0, u.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', j),
                                () => {
                                    e.removeEventListener('animationend', j);
                                }
                            );
                    }, [j]),
                        (0, u.useEffect)(() => {
                            n !== T.current &&
                                (n ? ((x.current = f.FadeOut), L(!1)) : (x.current = f.FadeIn), (T.current = n));
                        }, [n]),
                        (0, u.useEffect)(() => {
                            if (M) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [M]),
                        (0, u.useEffect)(() => () => H && clearTimeout(H), [H]);
                    const W = (0, u.useCallback)(() => {
                            M || (P(!0), x.current === f.Visible && z(setTimeout(() => w(t), 200)));
                        }, [t, w, M]),
                        G = F ? v(t, B) : t,
                        V = (0, u.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, a, n) => (a ? 'demount_plus' : n ? v(e, t) : e))(t, B, y, F);
                            return {
                                header: E.title.$dyn(e),
                                body: h.includes(e) ? void 0 : E.description.$dyn(D || e),
                            };
                        }, [t, C, A, y, F, B, D]),
                        Z = (0, u.useMemo)(
                            () => ({
                                backgroundImage: `url(${a || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, a],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, n ? d : _, N && m) },
                        l().createElement(
                            o.i,
                            V,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    r.u5,
                                    { onClick: W, type: S, mixClass: g, disabled: C },
                                    l().createElement('div', { className: b, style: Z }),
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
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r),
                    o = a(3457),
                    u = a(6373);
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const g = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: a,
                    callback: r,
                    withToggle: l = !1,
                    toggle: g,
                    buttonProps: E,
                }) => {
                    const h = (0, n.useCallback)(() => {
                            r(t, g);
                        }, [t, r, g]),
                        v = (0, n.useMemo)(() => {
                            if (l) {
                                const t = i()(m, g && p);
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
                    return s().createElement(u.i, a, s().createElement(o.u5, b({}, E, { onClick: h }), v));
                };
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
                const h = ({ ctaConfigs: e }) =>
                    s().createElement(
                        'div',
                        { className: l },
                        e.map((e) => s().createElement(g, E({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(9916),
                    i = a(7363),
                    o = a.n(i),
                    u = a(2558),
                    l = a(8934),
                    c = a(8529);
                const _ = ({ children: e, when: t, canAccept: a }) => {
                    const n = (0, i.useCallback)((e, t) => {
                            (0, r.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(t);
                            });
                        }, []),
                        _ = (0, i.useCallback)(
                            (e) => {
                                n(e, c.Z.base__enter);
                            },
                            [n],
                        ),
                        d = (0, i.useCallback)(
                            (e) => {
                                n(e, c.Z.base__exit);
                            },
                            [n],
                        );
                    return t
                        ? o().createElement(
                              u.Z,
                              null,
                              o().createElement(
                                  l.Z,
                                  { in: a, timeout: 500, onEnter: _, onExit: d, key: `index-${a}` },
                                  o().createElement('div', { className: s()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : o().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, a) => {
                'use strict';
                a.d(t, { my: () => v, sF: () => A });
                var n = a(6483),
                    s = a.n(n),
                    r = a(6373),
                    i = a(9480),
                    o = a(3403),
                    u = a(7363),
                    l = a.n(u),
                    c = a(1922),
                    _ = a(6391),
                    d = a(5310),
                    m = a(5851),
                    p = a(2306),
                    b = a(7198),
                    g = a(5178),
                    E = a(6826),
                    h = a(628);
                let v, f;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(v || (v = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(f || (f = {}));
                const C = R.strings.tank_setup.dealPanel,
                    A = (0, o.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: a = c.cJ.Medium,
                            panelType: n = f.Row,
                            priceLabel: o = C.toBePaid(),
                            autoRenewalLabel: v,
                            onAutoRenewalChanged: A,
                            onDealConfirmed: D,
                            onDealCancelled: S,
                            priceSeparator: F,
                            ignoreDiscount: y = !0,
                            discountTooltipEnabled: B = !1,
                            plusIconShown: w = !0,
                        }) => {
                            const k = (0, g.t)(),
                                x = k.model,
                                T = (0, u.useRef)(null),
                                I = a === c.cJ.Tiny || a === c.cJ.Small,
                                N = x.totalItemsInstalled.get(),
                                R = Boolean(x.totalItemsInStorage.get()),
                                L = Boolean(x.demountKitsCount.get()),
                                O = i.G(x.price.get(), (e) => e.value > 0) || L,
                                M = I && R && O && w;
                            return l().createElement(
                                p.h.Provider,
                                { value: k },
                                l().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            h.Z.base,
                                            a && h.Z[`base__${a}`],
                                            e && h.Z.base__renewal,
                                            n !== f.Row && h.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: s()(h.Z.renewal, n !== f.Row && h.Z.renewal__dialog) },
                                            l().createElement(m.Y, { renewType: e, onValueChanged: A, label: v }),
                                        ),
                                    l().createElement(
                                        d.f,
                                        { when: n === f.Row, canAccept: x.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(N) &&
                                                l().createElement(
                                                    r.i,
                                                    { body: C.tooltip.fromVehicle(), isEnabled: I },
                                                    l().createElement(
                                                        'div',
                                                        { className: s()(h.Z.storage, a && h.Z[`storage__${a}`]) },
                                                        !I &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                C.fromVehicle(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'vehicle',
                                                            count: N,
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            R &&
                                                l().createElement(
                                                    r.i,
                                                    { body: C.tooltip.fromStorage(), isEnabled: I },
                                                    l().createElement(
                                                        'div',
                                                        { className: s()(h.Z.storage, a && h.Z[`storage__${a}`]) },
                                                        !I &&
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
                                            M && l().createElement('div', { className: h.Z.plus }),
                                            O &&
                                                l().createElement(
                                                    'div',
                                                    { className: s()(h.Z.totalPrice, M && h.Z.totalPrice__mixed) },
                                                    l().createElement(E.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: o,
                                                        messageHidden: I && n === f.Row,
                                                        ignoreDiscount: y,
                                                        discountTooltipEnabled: B,
                                                        priceSeparator: F,
                                                    }),
                                                ),
                                            t &&
                                                x.canAccept.get() &&
                                                l().createElement(
                                                    'div',
                                                    { className: h.Z.control },
                                                    l().createElement(b.Z, {
                                                        isDisabled: x.isDisabled.get(),
                                                        canCancel: x.canCancel.get(),
                                                        onCancel: () => S && S(),
                                                        onConfirm: () => D && D(),
                                                        confirmButtonRef: T,
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
                    s = a(6373),
                    r = a(3403),
                    i = a(7363),
                    o = a.n(i),
                    u = a(8175),
                    l = a(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: a = u.my.General,
                    }) => {
                        const r = (0, l.o)(),
                            c = r.model,
                            _ = r.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, i.useCallback)(() => {
                                _.changeAutoRenewal(!d), t && t(!d);
                            }, [_, d, t]),
                            p = (0, i.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(a),
                                    n = a === u.my.General ? '' : e.body.$dyn(a);
                                return { header: String(t || e.header.general()), body: n ? String(n) : void 0 };
                            }, [a]);
                        return o().createElement(
                            s.i,
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
                    s = a(7363),
                    r = a.n(s),
                    i = a(2527);
                const o = r().memo(({ applyBtnString: e, isDisabled: t, onConfirm: a, confirmButtonRef: s }) =>
                    r().createElement(
                        'div',
                        { ref: s, className: i.Z.base, id: 'deal-panel-confirm' },
                        r().createElement(
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
                    s = a(6373),
                    r = a(7383),
                    i = a(7363),
                    o = a.n(i),
                    u = a(1957),
                    l = a(8099);
                const c = o().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: t,
                        canCancel: a,
                        onCancel: i,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = o().createElement(u.p, {
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
                                    n.u5,
                                    {
                                        size: n.qE.medium,
                                        type: n.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !a,
                                        onClick: i,
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
                    s = a(7363),
                    r = a.n(s),
                    i = a(8175),
                    o = a(5178);
                const u = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let t = e.parentModelPath,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, u);
                    const n = `${t}.dealPanel`;
                    return r().createElement(o.k, { options: { context: n } }, r().createElement(i.sF, a));
                });
            },
            6826: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7363),
                    i = a.n(r),
                    o = a(9683),
                    u = a(8401),
                    l = a(5178),
                    c = a(1523);
                const _ = ({
                    parentId: e,
                    messageHidden: t,
                    ignoreDiscount: a,
                    discountTooltipEnabled: n,
                    priceLabel: r,
                    priceSeparator: _,
                }) => {
                    const d = (0, l.t)().model,
                        m = d.demountKitsCount.get();
                    return i().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        i().createElement('div', { className: s()(c.Z.message, t && c.Z.message__hidden) }, r),
                        Boolean(m) &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(o.k, { value: m, size: 'large' }),
                                null != _ ? _ : i().createElement('div', { className: c.Z.plus }),
                            ),
                        i().createElement(u.t, {
                            ignoreDiscount: a,
                            tooltipEnabled: n,
                            bigSize: !0,
                            price: d.price.get(),
                            defPrice: d.defPrice.get(),
                            discount: d.discount.get(),
                            priceSeparator: null != _ ? _ : i().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => s, o: () => r });
                var n = a(7363);
                const s = (0, n.createContext)(null),
                    r = () => {
                        const e = (0, n.useContext)(s);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => s, t: () => r });
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
                    s = n[0],
                    r = n[1];
            },
            9683: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => u });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7363),
                    i = a.n(r);
                const o = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    u = ({ value: e, size: t = 'small', className: a }) =>
                        0 === e
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: s()(o.base, o[`base__${t}`], a) },
                                  i().createElement('div', { className: o.value }, e),
                                  i().createElement('div', { className: o.icon }),
                              );
            },
            8750: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => l, F: () => u });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r);
                const o = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let u;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(u || (u = {}));
                const l = ({ type: e = u.SMALL, imageSource: t }) => {
                    const a = i()(o.base, e !== u.SMALL && o[`base__${e}`]),
                        r = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return s().createElement('div', { className: a, style: r });
                };
            },
            1363: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3649),
                    i = a(7363),
                    o = a.n(i),
                    u = a(5282);
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
                        const p = (0, r.z4)(t)
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
                                              o().createElement(u.n, {
                                                  mediaSize: a,
                                                  blocks: (0, u.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            b = (0, i.useMemo)(
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
                            { id: `${e}-details`, className: s()(l, n) },
                            m ? p : o().createElement(u.n, { mediaSize: a, blocks: b, linesCount: d }),
                        );
                    };
            },
            6391: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => u });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7363),
                    i = a.n(r);
                const o = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    u = ({ countFirst: e = !1, location: t, count: a }) =>
                        i().createElement(
                            'div',
                            { className: s()(o.base, o[`base__${t}`], e && o.base__countFirst) },
                            i().createElement('div', { className: o.icon }),
                            i().createElement('div', { className: s()(o.count, 0 === a && o.count__zero) }, a),
                        );
            },
            3267: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => r });
                var n = a(7363),
                    s = a.n(n);
                const r = ({ wrapper: e, children: t, when: a, withProps: n }) =>
                    a ? s().createElement(e, n, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => b });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7405),
                    i = a(329),
                    o = a(7078),
                    u = a(5475),
                    l = a(9480),
                    c = a(7363),
                    _ = a.n(c);
                const d = 'Price_base_61',
                    m = 'Price_currency_ae',
                    p = 'Price_currency__discounted_a7',
                    b = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: a,
                        showZero: n = !1,
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
                                    A = !(g || ((D = e.value), (S = C), void 0 === S || D === S));
                                var D, S;
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
                                                    tooltipId: u.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: C,
                                                },
                                                isEnabled: E && A,
                                            },
                                            _().createElement(
                                                'div',
                                                { className: s()(m, A && p, null == v ? void 0 : v.currency) },
                                                _().createElement(r.F, {
                                                    isDiscount: A,
                                                    size: b ? i.et.big : i.et.small,
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
            9152: (e, t, a) => {
                'use strict';
                a.d(t, { Sf: () => g, yy: () => b });
                var n = a(6483),
                    s = a.n(n),
                    r = a(8089),
                    i = a(4598),
                    o = a(3815),
                    u = a(8526),
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
                    b = 'setup-content',
                    g = ({
                        backgroundImage: e,
                        children: t,
                        panel: a,
                        button: n,
                        show: g = !0,
                        onAnimationDone: E = i.ZT,
                        type: h = 'setup',
                        onClose: v,
                    }) => {
                        const f = (0, m.GS)(),
                            C = (0, _.useRef)(null),
                            A = (0, _.useRef)(!1);
                        (0, u.gd)(l.n.ESCAPE, v),
                            (0, _.useEffect)(() => {
                                g && (A.current = !0), A.current && (0, c.G)('cons_select_view');
                            }, [g]);
                        const D = (0, o.z)(E);
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
                                { className: s()(p.base, g && p.base__shown, p[`base__${h}`]) },
                                e &&
                                    d().createElement('div', {
                                        className: p.back,
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                n,
                                d().createElement(
                                    'div',
                                    { className: s()(p.close, f && p[`close__${f}`], !g && p.close__hidden) },
                                    d().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: v,
                                    }),
                                ),
                                d().createElement(
                                    'div',
                                    {
                                        id: b,
                                        ref: C,
                                        className: s()(
                                            p.content,
                                            p[`content__${h}`],
                                            !g && !A.current && p.content__invisible,
                                            p['content__' + (g ? 'shown' : 'hidden')],
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
                a.d(t, { n: () => b, D: () => p });
                var n = a(6483),
                    s = a.n(n),
                    r = a(1856),
                    i = a(3138),
                    o = a(9916),
                    u = a(7363),
                    l = a.n(u),
                    c = a(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var m = a(7260);
                const p = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement(m.B, { key: t, text: `${e} ` })),
                    b = ({ blocks: e, linesCount: t = 2, mediaSize: a }) => {
                        const n = (0, u.useState)(e),
                            m = n[0],
                            p = n[1],
                            b = (0, u.useState)({ width: 0, height: 0 }),
                            g = b[0],
                            E = b[1],
                            h = (0, u.useRef)(null),
                            v = (0, u.useRef)({ shortened: !1 }),
                            f = (0, u.useCallback)(() => {
                                (0, o.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const a = Number(e.split('rem')[0]),
                                            n = h.current;
                                        if (n && isFinite(a)) {
                                            const e = i.O.view.remToPx(t * a);
                                            E({ height: e, width: n.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, u.useEffect)(() => {
                            if (e.length) return v.current.shortened && ((v.current.shortened = !1), p(e)), (0, r.v)(f);
                        }, [e, a, f]),
                            (0, u.useEffect)(() => {
                                if (g.height && !v.current.shortened) {
                                    const e = (0, c.M)(h, g.height);
                                    if (-1 !== e) {
                                        const t = m.slice(0, e);
                                        t.push(l().createElement('span', { key: e }, '...')),
                                            p(t),
                                            (v.current.shortened = !0);
                                    }
                                }
                            }, [m, g, a]);
                        const C = (0, u.useMemo)(() => (g.height ? { maxHeight: `${g.height}rem` } : {}), [g.height]);
                        return l().createElement('div', { ref: h, className: s()(_, g.height && d), style: C }, m);
                    };
            },
            6605: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => n, M: () => r });
                const n = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    r = (e, t) => {
                        const a = e.current;
                        if (a) {
                            const e = a.getBoundingClientRect(),
                                n = e.top + t,
                                r = Array.from(a.children);
                            if (r.length) {
                                const t = ((e, t) => {
                                    const a = e.length - 1;
                                    if (!s(e[a], t)) return -1;
                                    let n = 0,
                                        r = a - 1,
                                        i = !1;
                                    for (; r - n > 1; ) {
                                        const a = n + Math.floor(0.5 * (r - n + 1));
                                        (i = s(e[a], t)), i ? (r = a) : (n = a);
                                    }
                                    return i || s(e[r], t) ? n : r;
                                })(r, n);
                                if (t > 0) {
                                    const a = r[t].getBoundingClientRect();
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
                    s = a.n(n),
                    r = a(8526),
                    i = a(5521),
                    o = a(7727),
                    u = a(7363),
                    l = a.n(u),
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
                        picker: r,
                        allowSlide: i,
                        theme: o = d,
                    }) => {
                        const u = {
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
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: u },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (a / n) * 100 + '%' } },
                                !i && l().createElement('div', { className: s()(_.glow, _.glow__right) }),
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
                    b = 'SlideControl_image_61',
                    g = 'SlideControl_image__hover_eb',
                    E = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: a }) => {
                        const n = s()(b, a && g, t && E);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: n }),
                        );
                    },
                    v = 'Slider_base_2c',
                    f = 'Slider_slideArea_dd',
                    C = 'Slider_editor_5c',
                    A = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    S = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    F = ({ parentId: e, type: t, isEnabled: a, onClick: n }) => {
                        const r = s()(S.base, a && S.base__enabled, S[`base__${t}${a ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: r, onClick: n });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: a,
                        sliderMaximum: n,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: b = !0,
                        stepCount: g = 1,
                    }) => {
                        const E = (0, u.useRef)(null),
                            S = (0, u.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, u.useRef)({ currentValue: t, maximum: a, sliderMaximum: n, sliderMinimum: _ }),
                            B = (0, u.useState)(t),
                            w = B[0],
                            k = B[1],
                            x = (0, u.useState)(!1),
                            T = x[0],
                            I = x[1],
                            N = (0, u.useState)(!1),
                            R = N[0],
                            L = N[1],
                            O = (0, u.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        a = y.current.currentValue;
                                    if (g > 1) {
                                        t *= g;
                                        const e = a % g;
                                        t < 0 && e ? (a -= e) : (a += t - e);
                                    } else a += t;
                                    return a;
                                },
                                [g],
                            ),
                            M = (0, u.useCallback)(
                                (e, t) => {
                                    if (!E.current) return 0;
                                    const a = E.current.getBoundingClientRect(),
                                        n = y.current.maximum,
                                        s = a.width / n,
                                        r = e - a.left,
                                        i = Math.floor(s > 0 ? r / s : r);
                                    if (i > n) return n;
                                    if (i <= 0) return 0;
                                    if (g > 1) {
                                        let e = i - (i % g);
                                        const a = i - e;
                                        return (
                                            a > 0 && ((t && i > y.current.currentValue) || a > 0.5 * g) && (e += g), e
                                        );
                                    }
                                    return i;
                                },
                                [g],
                            ),
                            P = (0, u.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.sliderMaximum,
                                        n = t.sliderMinimum;
                                    e < n ? (e = n) : e > a && (e = a),
                                        y.current.currentValue !== e && (k(e), (y.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            $ = t < n,
                            H = t > 0,
                            z = (0, u.useCallback)(() => {
                                if ($ && S.current.over) {
                                    const e = O(!0);
                                    P(e);
                                }
                            }, [$, O, P]),
                            j = (0, u.useCallback)(() => {
                                if (H && S.current.over) {
                                    const e = O(!1);
                                    P(e);
                                }
                            }, [H, O, P]),
                            W = (0, u.useCallback)(() => {
                                (S.current.down = !1), L(!1);
                            }, []),
                            G = (0, u.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && S.current.down) {
                                        S.current.move = !0;
                                        const t = M(e.clientX);
                                        P(t);
                                    } else W();
                                },
                                [W, M, P],
                            );
                        (0, r.gd)(i.n.ARROW_UP, z, !1, !0),
                            (0, r.gd)(i.n.ARROW_RIGHT, z, !1, !0),
                            (0, r.gd)(i.n.ARROW_DOWN, j, !1, !0),
                            (0, r.gd)(i.n.ARROW_LEFT, j, !1, !0),
                            (0, u.useEffect)(() => {
                                y.current.maximum = a;
                            }, [a]),
                            (0, u.useEffect)(() => {
                                if (R)
                                    return (
                                        document.addEventListener('mouseup', W),
                                        document.addEventListener('mousemove', G),
                                        () => {
                                            document.removeEventListener('mouseup', W),
                                                document.removeEventListener('mousemove', G);
                                        }
                                    );
                            }, [R, G, W]),
                            (0, u.useEffect)(() => {
                                (y.current.sliderMaximum = n), (y.current.sliderMinimum = _);
                            }, [n, _]),
                            (0, u.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]);
                        const V = (0, u.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((S.current.down = !0), L(!0));
                                },
                                [d],
                            ),
                            Z = (0, u.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = M(e.clientX, !S.current.move),
                                        a = y.current,
                                        n = a.currentValue,
                                        s = a.sliderMaximum,
                                        r = a.sliderMinimum;
                                    P(t), (0, c.u)(n, t, s, r), (S.current.move = !1);
                                },
                                [M, d, P],
                            ),
                            U = (0, u.useCallback)(() => {
                                (S.current.over = !0), I(!0), (0, o.G)('highlight');
                            }, []),
                            q = (0, u.useCallback)(() => {
                                (S.current.over = !1), I(!1);
                            }, []),
                            X = (0, u.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.currentValue,
                                        n = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        r = O(e.deltaY > 0);
                                    P(r), (0, c.u)(a, r, n, s);
                                },
                                [O, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: E, onMouseEnter: U, onMouseLeave: q, onWheel: X, className: v },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: s()(C, A) },
                                        l().createElement(F, { parentId: e, type: 'minus', isEnabled: H, onClick: j }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: s()(C, D) },
                                        l().createElement(F, { parentId: e, type: 'plus', isEnabled: $, onClick: z }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: Z, onMouseDown: V, className: f },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: a,
                                    value: w,
                                    availableMaximum: n,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: T }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => u });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r);
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
                    u = s().memo(({ isTemporary: e, overlayType: t, overlaySource: a }) => {
                        const r = i()(o.base, e && o.base__fitting),
                            u = i()(o.icon, o[`icon__${t}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement('div', { className: u, style: l }),
                        );
                    });
            },
            8253: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r);
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
                        base__fixed: 'Container_base__fixed_8a',
                    },
                    u = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: a,
                        isBorderActive: n,
                        children: r,
                        panelType: u,
                        isDisabled: l,
                        isPotentialDrop: c,
                        nonRemovable: _,
                        onClick: d,
                    }) => {
                        const m = _ && !l,
                            p = i()(
                                o.base,
                                !m && !e && o[`base__${u}`],
                                t && o[`base__${t}`],
                                a && !c && !n && o.base__selected,
                                c && o['base__dragIn' + (a ? 'Active' : '')],
                                l && o.base__disabled,
                                m && o.base__fixed,
                            );
                        return s().createElement('div', { className: p, onClick: d }, r);
                    };
            },
            8598: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => l });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r);
                const o = 'Count_base_e4',
                    u = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = i()(o, !e && u);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, a) => {
                'use strict';
                a.d(t, { c: () => p });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3977),
                    i = a(7363),
                    o = a.n(i),
                    u = a(906),
                    l = a(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    m = 'Inside_change_5a',
                    p = ({
                        level: e,
                        overlayType: t,
                        isTemporary: a,
                        withAttention: n,
                        imageSource: p,
                        isIncompatible: b,
                    }) => {
                        const g = (0, i.useMemo)(() => {
                                const a = t === r.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(a);
                            }, [t, e]),
                            E = (0, i.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !g && Boolean(t) && e;
                        return o().createElement(
                            'div',
                            null,
                            h && o().createElement(l.a, { level: e }),
                            o().createElement('div', { className: s()(c, (a || n) && _), style: E }),
                            n && o().createElement('div', { className: d }),
                            b && o().createElement('div', { className: m }),
                            g && o().createElement(u.r, { isTemporary: a, overlaySource: g, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => u });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r);
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
                    u = ({ level: e }) => {
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            a = i()(o.base, o[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: a });
                    };
            },
            4814: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => b });
                var n = a(9480),
                    s = a(7363),
                    r = a.n(s),
                    i = a(1922),
                    o = a(6483),
                    u = a.n(o),
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
                        const b = o !== i.cJ.None,
                            g = (0, s.useCallback)(() => {
                                d && a && m && m(p);
                            }, [p, d, a, m]),
                            E = (0, s.useMemo)(() => {
                                let a = '';
                                b && (a = (o === i.cJ.Large || o === i.cJ.Huge ? i.cJ.Large : i.cJ.Medium) + '_');
                                const n = `${a}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(n);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, o, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!E) return null;
                        const v = u()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${o}`],
                                a && _.base__setup,
                                t && _.base__correct,
                            ),
                            f = u()(_.icon, b && _[`icon__${o}`]),
                            C = b ? '' : _.specializationWrapper,
                            A = r().createElement(
                                'div',
                                { key: e, className: v },
                                r().createElement('div', { className: _.glow }),
                                r().createElement('div', { className: f, style: E }),
                            );
                        return r().createElement(
                            c.t,
                            { args: h },
                            d && a
                                ? r().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      A,
                                  )
                                : r().createElement('div', { className: C }, A),
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
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: a,
                    mediaSize: s = i.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: u,
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
                                          isDynamic: a,
                                          mediaSize: s,
                                          onSpecializationClick: u,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => h });
                var n = a(7363),
                    s = a.n(n),
                    r = a(6483),
                    i = a.n(r);
                let o;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(o || (o = {}));
                const u = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    p = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    g = 'SwitchButton_buttonWarning_3f',
                    E = 'SwitchButton_number_8a',
                    h = ({ id: e, state: t, currentIndex: a, isHovered: r }) => {
                        const h = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            v = e === a,
                            f = !v && t === o.WARNING;
                        return s().createElement(
                            'div',
                            { className: i()(u, { [l]: v, [c]: f, [m]: r }) },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: d }),
                            s().createElement('div', { className: b }),
                            s().createElement('div', { className: p }),
                            s().createElement('div', { className: g }),
                            s().createElement('div', { style: h, className: E }),
                        );
                    };
            },
            9344: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => m });
                var n = a(6483),
                    s = a.n(n),
                    r = a(9480),
                    i = a(7727),
                    o = a(7363),
                    u = a.n(o),
                    l = a(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: a, states: n, isDisabled: m, groupId: p }) => {
                        const b = (0, o.useRef)(null),
                            g = (0, o.useState)(!1),
                            E = g[0],
                            h = g[1],
                            v = (a + 1) % t,
                            f = (0, o.useCallback)(() => {
                                m || e({ groupId: p, currentIndex: v });
                            }, [p, m, v, e]),
                            C = (0, o.useCallback)(() => {
                                m || (h(!0), i.$.playHighlight());
                            }, [m]),
                            A = (0, o.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            D = s()(c, m && _);
                        return u().createElement(
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
                                u().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: r.MH(n, t),
                                    currentIndex: a,
                                    isHovered: E,
                                }),
                            ),
                            m && u().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, a) => {
                'use strict';
                a.d(t, { y: () => w });
                var n = a(4888),
                    s = a(7383),
                    r = a(1396),
                    i = a(3403),
                    o = a(7363),
                    u = a.n(o),
                    l = a(2558),
                    c = a(8934),
                    _ = a(3220),
                    d = a(5958);
                const m = 'BackEffects_shine_f6',
                    p = 'BackEffects_sparks_55',
                    b = 'BackEffects_nut_79',
                    g = 'BackEffects_wrench_5a',
                    E = { enterActive: 'BackEffects_shine__enterActive_54' },
                    h = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    v = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    f = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [n.dZ, n.sH],
                    A = u().memo(({ in: e, actionType: t }) =>
                        u().createElement(
                            u().Fragment,
                            null,
                            u().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: E },
                                u().createElement('div', { className: m }),
                            ),
                            u().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: h },
                                u().createElement('div', { className: p }),
                            ),
                            C.includes(t) &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: v },
                                        u().createElement('div', { className: b }),
                                    ),
                                    u().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: f },
                                        u().createElement('div', { className: g }),
                                    ),
                                ),
                        ),
                    ),
                    D = 'ColorMask_base_60',
                    S = 'ColorMask_base__enterActive_62',
                    F = ({ inProp: e, maskImage: t }) =>
                        u().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: S } },
                            u().createElement('div', { className: D, style: { maskImage: `url(${t})` } }),
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
                    w = (0, i.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: a,
                            slotType: i,
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
                                S = (0, o.useState)(!0),
                                w = S[0],
                                k = S[1],
                                x = (0, o.useState)(!0),
                                T = x[0],
                                I = x[1],
                                N = (0, o.useState)(p),
                                R = N[0],
                                L = N[1],
                                O = (0, o.useState)(a),
                                M = O[0],
                                P = O[1],
                                $ = (0, o.useState)(b),
                                H = $[0],
                                z = $[1],
                                j = (0, r.K)(),
                                W = (0, r.K)(),
                                G = [n._2, n.dZ, n.sH],
                                V = (D === a || D === M) && H !== b && G.includes(C),
                                Z = -1 === v || -1 === f,
                                U = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                q = d.Sr[C] || 0;
                            (0, o.useEffect)(() => {
                                m || L(p);
                            }, [m, p]);
                            const X = (0, o.useCallback)(
                                    (e) => {
                                        const a = Object.assign({}, B);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = E === t ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = h - E != 1 ? d.mI.SWAP : '';
                                                (a.enterDone = y[`${U}__enter${e}${n}`]),
                                                    (a.exit = y[`${U}__exit${e}${n}`]),
                                                    Z &&
                                                        (m
                                                            ? (a.enterDone = y[`${U}__enter${d.mI.FADE}`])
                                                            : (a.exit = y[`${U}__exit${d.mI.FADE}`]));
                                                break;
                                            }
                                            case n._2:
                                                (a.enterDone = y[`${U}__enter${d.mI.DESTROY}`]),
                                                    (a.exit = y[`${U}__exit${d.mI.DESTROY}`]),
                                                    j.run(() => k(!0), d.YJ),
                                                    I(!0);
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                (a.enter = y[`${U}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (a.exit = y[`${U}__exit${d.mI.DEMOUNT}`]),
                                                    j.run(() => k(!0), d.Ij);
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (i !== s.g9) {
                                                    const e = C === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    (a.enter = y[`${U}__enter${e}`]),
                                                        (a.exit = y[`${U}__exit${e}`]),
                                                        (a.exitActive = y[`${U}__exitActive${d.mI.FITTING}`]);
                                                } else
                                                    (a.enterDone = y[`${U}__enter${d.mI.FADE}`]),
                                                        (a.exit = y[`${U}__exit${d.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return u().cloneElement(e, { classNames: a, timeout: q });
                                    },
                                    [C, q, E, t, h, U, Z, m, j, i],
                                ),
                                K = (0, o.useCallback)(
                                    (e) => {
                                        W.run(() => {
                                            (e.className = ''), e.classList.add(y.base), P(a), z(b);
                                        }, q);
                                    },
                                    [W, q, a, b],
                                ),
                                Y = (0, o.useCallback)(() => {
                                    k(!1), I(!1);
                                }, []);
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(
                                    l.Z,
                                    { component: null, childFactory: X },
                                    u().createElement(
                                        c.Z,
                                        {
                                            key: a,
                                            timeout: q,
                                            classNames: B,
                                            onEntered: K,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        u().createElement('div', { className: y.base }, e),
                                    ),
                                ),
                                V &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement(A, { in: w, actionType: C }),
                                        u().createElement(F, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Dp: () => u,
                    IG: () => l,
                    Ij: () => i,
                    Kz: () => _,
                    PD: () => s,
                    Qj: () => d,
                    Sr: () => p,
                    YJ: () => o,
                    mI: () => m,
                    wx: () => c,
                });
                var n = a(4888);
                const s = 200,
                    r = 1600,
                    i = 900,
                    o = 900,
                    u = 200,
                    l = 400,
                    c = 600,
                    _ = 600,
                    d = 1200;
                let m;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(m || (m = {}));
                const p = { [n.Xo]: s, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: r, [n.sH]: r, [n.Fd]: r };
            },
            5096: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3403),
                    i = a(7363),
                    o = a.n(i),
                    u = a(1922),
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
                    _ = (0, r.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const a = (0, u.GS)(),
                            n = (0, l.t)().model.shellsSetup.get(),
                            r = n.installedCount,
                            i = n.maxCount,
                            _ = r === i,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return o().createElement(
                            'div',
                            { className: s()(c.base, !_ && c.base__incomplete) },
                            !t && o().createElement('div', { className: c.tip }, m),
                            e
                                ? `${r}/${i}`
                                : o().createElement(
                                      'div',
                                      {
                                          className: s()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${a}`],
                                          ),
                                      },
                                      `${r}/${i}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => s, u: () => r });
                var n = a(7727);
                const s = (e, t) => {
                        const a = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, n.G)(a + '_' + e) : (0, n.G)(a);
                    },
                    r = (e, t, a, s) => {
                        t > a ||
                            t < s ||
                            (t > e ? (0, n.G)('cons_ammo_roll_plus') : t < e && (0, n.G)('cons_ammo_roll_minus'));
                    };
            },
            3977: (e, t, a) => {
                'use strict';
                a.d(t, { qm: () => n });
                const n = 'equipmentModernized';
            },
            5475: (e, t, a) => {
                'use strict';
                a.d(t, { e1: () => n });
                const n = 'priceDiscount';
            },
            4888: (e, t, a) => {
                'use strict';
                a.d(t, {
                    DA: () => r,
                    FR: () => s,
                    Fd: () => u,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => i,
                    _2: () => c,
                    dZ: () => o,
                    eC: () => n,
                    sH: () => l,
                });
                const n = 'select',
                    s = 'undo',
                    r = 'cancel',
                    i = 'swap',
                    o = 'demount',
                    u = 'demount_from_setup',
                    l = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one';
            },
            5344: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { d: () => n }),
                    (function (e) {
                        (e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary');
                    })(n || (n = {}));
            },
            7383: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $4: () => m,
                    G$: () => i,
                    S: () => p,
                    WI: () => u,
                    YN: () => o,
                    YR: () => c,
                    g9: () => s,
                    k4: () => _,
                    mH: () => r,
                    pi: () => b,
                    qZ: () => d,
                    yZ: () => l,
                    zn: () => n,
                });
                const n = 'optDevices',
                    s = 'shells',
                    r = 'consumables',
                    i = 'battleBoosters',
                    o = 'battleAbilities',
                    u = 'toggleShells',
                    l = 'toggleCamouflage',
                    c = 'apply',
                    _ = 'applyVehicle',
                    d = 'applyType',
                    m = 'equipCoinInfo',
                    p = 'simple',
                    b = 'modernized';
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
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var s = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, n] = deferred[u], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || s >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < s && (s = n));
                    if (r) {
                        deferred.splice(u--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > n; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 336),
        (() => {
            var e = {
                336: 0,
                26: 0,
                301: 0,
                826: 0,
                225: 0,
                130: 0,
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
            var t = (t, a) => {
                    var n,
                        s,
                        [r, i, o] = a,
                        u = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); u < r.length; u++)
                        (s = r[u]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(6445));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
