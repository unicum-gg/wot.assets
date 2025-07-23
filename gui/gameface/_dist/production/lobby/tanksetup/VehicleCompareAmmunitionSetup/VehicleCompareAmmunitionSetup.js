(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = n(6483),
                    u = n.n(a),
                    r = n(7727),
                    s = n(6179),
                    o = n.n(s),
                    i = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: p,
                    onMouseMove: E,
                    onMouseDown: b,
                    onMouseUp: h,
                    onMouseLeave: g,
                    onClick: f,
                }) => {
                    const v = (0, s.useRef)(null),
                        C = (0, s.useState)(n),
                        A = C[0],
                        D = C[1],
                        F = (0, s.useState)(!1),
                        B = F[0],
                        y = F[1],
                        w = (0, s.useState)(!1),
                        S = w[0],
                        k = w[1],
                        T = (0, s.useCallback)(() => {
                            c || (v.current && (v.current.focus(), D(!0)));
                        }, [c]),
                        x = (0, s.useCallback)(
                            (e) => {
                                A && null !== v.current && !v.current.contains(e.target) && D(!1);
                            },
                            [A],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (f && f(e));
                            },
                            [c, f],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), p && p(e), k(!0));
                            },
                            [c, d, p],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e), y(!1));
                            },
                            [c, h],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), b && b(e), n && T(), y(!0));
                            },
                            [c, m, b, T, n],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (g && g(e), y(!1));
                            },
                            [c, g],
                        ),
                        H = u()(
                            i.Z.base,
                            i.Z[`base__${a}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: A,
                                [i.Z.base__highlightActive]: B,
                                [i.Z.base__firstHover]: S,
                            },
                            _,
                        ),
                        W = u()(i.Z.state, i.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, s.useEffect)(() => {
                            D(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: H,
                                onMouseEnter: M,
                                onMouseMove: N,
                                onMouseUp: I,
                                onMouseDown: P,
                                onMouseLeave: O,
                                onClick: L,
                            },
                            a !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: W },
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
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = (0, s.memo)(c);
            },
            2106: (e, t, n) => {
                'use strict';
                let a, u;
                (n.d(t, { L: () => a, q: () => u }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(u || (u = {})));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { Rh: () => c.Rh, XZ: () => m, yB: () => c.yB });
                var a = n(6483),
                    u = n.n(a),
                    r = n(1641),
                    s = n(7727),
                    o = n(6179),
                    i = n.n(o),
                    l = n(4382),
                    c = n(8844);
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
                        a = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        E = e.isAlert,
                        b = void 0 !== E && E,
                        h = e.size,
                        g = void 0 === h ? c.yB.medium : h,
                        f = e.type,
                        v = void 0 === f ? c.Rh.primary : f,
                        C = e.soundHover,
                        A = void 0 === C ? 'highlight' : C,
                        D = e.soundClick,
                        F = void 0 === D ? 'play' : D,
                        B = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        S = e.onMouseDown,
                        k = e.onClick,
                        T = e.onChange,
                        x = e.onFocus,
                        L = e.onBlur,
                        M = e.text,
                        N = e.contentStyles,
                        R = e.children,
                        I = e.alignment,
                        P = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, _);
                    const O = (0, o.useState)(!1),
                        H = O[0],
                        W = O[1],
                        $ = (0, o.useState)(!1),
                        z = ($[0], $[1]),
                        X = (0, o.useCallback)(
                            (e) => {
                                p || (T && T(), k && k(e));
                            },
                            [p, T, k],
                        ),
                        G = (0, o.useCallback)(
                            (e) => {
                                const t = e.button === r.t.LEFT;
                                p || (t && W(!0), t && S && S(e), F && (0, s.G)(F));
                            },
                            [p, S, F],
                        ),
                        Y = (0, o.useCallback)(
                            (e) => {
                                p || (W(!1), w && w(e));
                            },
                            [p, w],
                        ),
                        j = (0, o.useCallback)(
                            (e) => {
                                p || (B && B(e), A && (0, s.G)(A));
                            },
                            [p, B, A],
                        ),
                        U = (0, o.useCallback)(
                            (e) => {
                                p || (W(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        V = (0, o.useCallback)(
                            (e) => {
                                p || (z(!0), x && x(e));
                            },
                            [p, x],
                        ),
                        Z = (0, o.useCallback)(
                            (e) => {
                                p || (z(!1), L && L(e));
                            },
                            [p, L],
                        ),
                        q = i().createElement(
                            'div',
                            { className: l.Z.label },
                            i().createElement(
                                'div',
                                { className: u()(l.Z.labelContent, 's-labelContent'), style: N },
                                M || R,
                            ),
                        );
                    return i().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: u()(l.Z.base, l.Z[`base__${g}`], l.Z[`base__${v}`], {
                                    [l.Z.base__checked]: a,
                                    [l.Z.base__disabled]: p,
                                    [l.Z.base__mouseDown]: H,
                                    [l.Z.base__alert]: b,
                                    [l.Z.base__center]: I === c.N3.Center,
                                    [l.Z.base__bottom]: I === c.N3.Bottom,
                                }),
                                onClick: X,
                                onMouseEnter: j,
                                onMouseLeave: U,
                                onMouseDown: G,
                                onMouseUp: Y,
                                onFocus: V,
                                onBlur: Z,
                            },
                            P,
                        ),
                        i().createElement(
                            'div',
                            { className: l.Z.input },
                            i().createElement('div', { className: l.Z.alertOverlay }),
                            i().createElement('div', { className: l.Z.inputHoverOverlay }),
                            i().createElement('div', { className: l.Z.highlight }),
                        ),
                        i().createElement('div', { className: l.Z.checkmark }),
                        ((M || R) && q) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                'use strict';
                let a, u, r;
                (n.d(t, { N3: () => r, Rh: () => u, yB: () => a }),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(r || (r = {})));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => _ });
                var a = n(6483),
                    u = n.n(a),
                    r = n(6179),
                    s = n.n(r),
                    o = n(329),
                    i = n(2372),
                    l = n(8460);
                const c = ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: n,
                    type: a,
                    isEnough: r,
                    value: c,
                    discountValue: _,
                    showPlus: d,
                    stockBackgroundName: m = o.we.Red,
                }) => {
                    const p = u()(l.Z.value, l.Z[`value__${a}`], !r && l.Z.value__notEnough),
                        E = u()(l.Z.icon, l.Z[`icon__${a}-${n}`]),
                        b = u()(l.Z.stock, _ && l.Z.stock__indent, t && l.Z.stock__interactive),
                        h = d && c > 0 && '+',
                        g = u()(l.Z.base, l.Z[`base__${n}`]);
                    return s().createElement(
                        'span',
                        { className: g },
                        s().createElement(
                            'span',
                            { className: p },
                            h,
                            s().createElement(i.A, { value: c, format: a === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        s().createElement('span', { className: E }),
                        e &&
                            s().createElement(
                                'span',
                                { className: b },
                                s().createElement('span', {
                                    className: l.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                }),
                                Boolean(_) && _,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                const _ = s().memo(c);
            },
            329: (e, t, n) => {
                'use strict';
                let a, u, r;
                (n.d(t, { V2: () => u, et: () => a, we: () => r }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(r || (r = {})));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => s });
                var a = n(6179),
                    u = n.n(a),
                    r = n(4179);
                class s extends u().PureComponent {
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
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    u = n(6179),
                    r = n(1043),
                    s = n(5262);
                const o = a.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, r.j)),
                    _ = (0, u.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6536),
                    s = n(3495),
                    o = n(1043),
                    i = n(5262),
                    l = n(3138);
                const c = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(s.Y),
                        n = (0, a.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, a.useCallback)((e, t) => {
                            const n = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: a }, (0, i.T)(n, a, o.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return u().createElement(s.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    u = n(7382),
                    r = n(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, s);
                    const o = (0, a.useContext)(r.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        p = o.largeWidth,
                        E = o.mediumWidth,
                        b = o.smallWidth,
                        h = o.extraSmallWidth,
                        g = o.extraLargeHeight,
                        f = o.largeHeight,
                        v = o.mediumHeight,
                        C = o.smallHeight,
                        A = o.extraSmallHeight,
                        D = { extraLarge: g, large: f, medium: v, small: C, extraSmall: A };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && i) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && _) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, u.H)(t, n, D);
                        if (n.largeWidth && p) return (0, u.H)(t, n, D);
                        if (n.mediumWidth && E) return (0, u.H)(t, n, D);
                        if (n.smallWidth && b) return (0, u.H)(t, n, D);
                        if (n.extraSmallWidth && h) return (0, u.H)(t, n, D);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && g) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && C) return t;
                            if (n.extraSmallHeight && A) return t;
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
                (0, a.memo)(o);
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
                n.d(t, { YN: () => u.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    u = n(3495);
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
                function u(e, t, n) {
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
                        })(t, n),
                        r = Math.min(a, u);
                    return {
                        extraLarge: r === n.extraLarge.weight,
                        large: r === n.large.weight,
                        medium: r === n.medium.weight,
                        small: r === n.small.weight,
                        extraSmall: r === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: u === n.extraLarge.weight,
                        largeHeight: u === n.large.weight,
                        mediumHeight: u === n.medium.weight,
                        smallHeight: u === n.small.weight,
                        extraSmallHeight: u === n.extraSmall.weight,
                    };
                }
                (n.d(t, { T: () => u, u: () => a }),
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
            570: (e, t, n) => {
                'use strict';
                n.d(t, { x: () => b });
                var a = n(6483),
                    u = n.n(a),
                    r = n(1856),
                    s = n(1091),
                    o = n(6179),
                    i = n.n(o),
                    l = n(8380),
                    c = n.n(l);
                const _ = 'ScrollArea_base_47',
                    d = 'ScrollArea_base__scrollIndent_1d',
                    m = 'ScrollArea_base__verticalScrollbarMargin_50',
                    p = 'ScrollArea_base__multiple_44',
                    E = 'ScrollArea_base__hidden_ec',
                    b = i().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            a = void 0 === n ? 0 : n,
                            l = e.offsetTop,
                            b = void 0 === l ? 0 : l,
                            h = e.scrollSettings,
                            g = e.onUpdateActiveAxis,
                            f = e.onHorizontalScroll,
                            v = e.onVerticalScroll,
                            C = e.onOverScrollAtBeginning,
                            A = e.onOverScrollAtEnd,
                            D = e.wrapperIndent,
                            F = e.verticalScrollbarMargin,
                            B = e.isMultipleScroll,
                            y = e.scrollAreaContainer,
                            w = e.children,
                            S = e.classMix,
                            k = e.onScrollLeftHandled,
                            T = (0, o.useState)(!1),
                            x = T[0],
                            L = T[1],
                            M = (0, o.useState)(),
                            N = M[0],
                            R = M[1],
                            I = (0, o.useState)(),
                            P = I[0],
                            O = I[1],
                            H = (0, o.useRef)(null),
                            W = (0, o.useCallback)(() => {
                                N &&
                                    g &&
                                    g({ x: N.scrollbarXActive, y: N.scrollbarYActive }, { x: N.reach.x, y: N.reach.y });
                            }, [g, N]),
                            $ = (0, o.useCallback)(() => N, [N]),
                            z = (0, o.useCallback)(() => {
                                N && N.update();
                            }, [N]),
                            X = (0, o.useCallback)(
                                (e, t, n) => {
                                    N && (N.setScrollLeft(e, t, n), k && k(e, N.contentWidth - N.containerWidth));
                                },
                                [N, k],
                            ),
                            G = (0, o.useCallback)(
                                (e) => {
                                    N && (N.setScrollLeftImmediately(e), k && k(e, N.contentWidth - N.containerWidth));
                                },
                                [N, k],
                            ),
                            Y = (0, o.useCallback)(
                                (e, t, n) => {
                                    N && N.setScrollTop(e, t, n);
                                },
                                [N],
                            ),
                            j = (0, o.useCallback)(
                                (e) => {
                                    N && N.setScrollTopImmediately(e);
                                },
                                [N],
                            ),
                            U = (0, o.useCallback)(() => {
                                if (P && f && N) {
                                    const e = { scrollPosition: P.scrollLeft < 0 ? 0 : P.scrollLeft, reach: N.reach.x };
                                    f(e);
                                }
                            }, [f, P, N]),
                            V = (0, o.useCallback)(() => {
                                if (P && v && N) {
                                    const e = { scrollPosition: P.scrollTop, reach: N.reach.y };
                                    v(e);
                                }
                            }, [v, P, N]),
                            Z = (0, o.useCallback)(() => {
                                C && C();
                            }, [C]),
                            q = (0, o.useCallback)(() => {
                                A && A();
                            }, [A]),
                            K = (0, o.useCallback)(
                                (e) => {
                                    ('function' == typeof t ? t(e) : null !== t && (t.current = e), O(e));
                                },
                                [t],
                            ),
                            J = (0, o.useCallback)(() => {
                                N &&
                                    (N.update(),
                                    (H.current = (0, r.v)(() => {
                                        W();
                                    })));
                            }, [N, W]),
                            Q = (0, o.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, o.useEffect)(() => {
                            if (N && P)
                                return (
                                    document.addEventListener('mousemove', Q),
                                    window.addEventListener('resize', J),
                                    P.addEventListener('ps-scroll-x', U),
                                    P.addEventListener('ps-scroll-y', V),
                                    P.addEventListener('over-scroll-beginning', Z),
                                    P.addEventListener('over-scroll-ending', q),
                                    L(!0),
                                    () => {
                                        (window.removeEventListener('resize', J),
                                            document.removeEventListener('mousemove', Q),
                                            P &&
                                                (P.removeEventListener('ps-scroll-x', U),
                                                P.removeEventListener('ps-scroll-y', V),
                                                P.removeEventListener('over-scroll-beginning', Z),
                                                P.removeEventListener('over-scroll-ending', q)));
                                    }
                                );
                        }, [Q, U, Z, q, J, P, N, V]);
                        const ee = (0, o.useRef)(P || null);
                        ee.current = P || null;
                        const te = (0, s.Z)(ee);
                        ((0, o.useEffect)(
                            () => (
                                !N && P && te && R(new (c())(P, Object.assign({}, h))),
                                () => {
                                    N && (N.destroy(), R(void 0));
                                }
                            ),
                            [P, te, h, N],
                        ),
                            (0, o.useEffect)(
                                () => () => {
                                    null == H.current || H.current();
                                },
                                [],
                            ),
                            (0, o.useEffect)(
                                () =>
                                    (0, r.v)(() => {
                                        N && W();
                                    }),
                                [W, N],
                            ),
                            (0, o.useEffect)(() => {
                                a > 0 && G(a);
                            }, [a, G]),
                            (0, o.useEffect)(() => {
                                b > 0 && j(b);
                            }, [b, j]),
                            (0, o.useEffect)(() => {
                                y &&
                                    ((y.setScrollLeft = X),
                                    (y.setScrollTop = Y),
                                    (y.setScrollLeftImmediately = G),
                                    (y.setScrollTopImmediately = j),
                                    (y.updateScrollArea = z),
                                    (y.getScrollbar = $));
                            }, [y, X, G, Y, j, z, $]));
                        const ne = u()(_, { [d]: D, [E]: !x, [m]: F, [p]: B }, S);
                        return i().createElement('div', { className: ne, ref: K }, w);
                    });
            },
            8380: (e) => {
                'use strict';
                function t(e) {
                    return getComputedStyle(e);
                }
                function n(e, t) {
                    for (var n in t) {
                        var a = t[n];
                        ('number' == typeof a && (a += 'px'), (e.style[n] = a));
                    }
                    return e;
                }
                function a(e) {
                    var t = document.createElement('div');
                    return ((t.className = e), t);
                }
                var u =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function r(e, t) {
                    if (!u) throw new Error('No element matching method supported');
                    return u.call(e, t);
                }
                function s(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function o(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return r(e, t);
                    });
                }
                var i = 'ps',
                    l = {
                        thumb: function (e) {
                            return 'ps__thumb-' + e;
                        },
                        rail: function (e) {
                            return 'ps__rail-' + e;
                        },
                        buttonStart: function (e) {
                            return 'ps__button-start-' + e;
                        },
                        track: function (e) {
                            return 'ps__track_' + e;
                        },
                        buttonEnd: function (e) {
                            return 'ps__button-end-' + e;
                        },
                        consuming: 'ps__child--consume',
                    },
                    c = {
                        focus: 'ps--focus',
                        clicking: 'ps--clicking',
                        active: function (e) {
                            return 'ps--active-' + e;
                        },
                        scrolling: function (e) {
                            return 'ps--scrolling-' + e;
                        },
                    },
                    _ = { x: null, y: null },
                    d = { immediately: !1 };
                function m(e, t, n) {
                    void 0 === n && (n = {});
                    var a = e.element.classList,
                        u = c.scrolling(t);
                    a.contains(u) ? clearTimeout(_[t]) : a.add(u);
                }
                function p(e, t, n) {
                    void 0 === n && (n = {});
                    Object.assign(d, n).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (_[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var E = function (e) {
                        ((this.element = e), (this.handlers = {}));
                    },
                    b = { isEmpty: { configurable: !0 } };
                ((E.prototype.bind = function (e, t) {
                    (void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1));
                }),
                    (E.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (a) {
                            return !(!t || a === t) || (n.element.removeEventListener(e, a, !1), !1);
                        });
                    }),
                    (E.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (b.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(E.prototype, b));
                var h = function () {
                    this.eventElements = [];
                };
                function g(e) {
                    return parseInt(e, 10) || 0;
                }
                ((h.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return (t || ((t = new E(e)), this.eventElements.push(t)), t);
                }),
                    (h.prototype.bind = function (e, t, n) {
                        this.eventElement(e).bind(t, n);
                    }),
                    (h.prototype.unbind = function (e, t, n) {
                        var a = this.eventElement(e);
                        (a.unbind(t, n), a.isEmpty && this.eventElements.splice(this.eventElements.indexOf(a), 1));
                    }),
                    (h.prototype.unbindAll = function () {
                        (this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []));
                    }),
                    (h.prototype.once = function (e, t, n) {
                        var a = this.eventElement(e);
                        a.bind(t, function e(u) {
                            (a.unbind(t, e), n(u));
                        });
                    }));
                var f = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function v() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function C(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return (t.initCustomEvent(e, !1, !1, void 0), t);
                }
                var A = function (e, t, n, a, u, r) {
                    var s;
                    if ((void 0 === a && (a = !0), void 0 === u && (u = !1), void 0 === r && (r = !1), 'top' === t))
                        s = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        s = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, a, u, r) {
                        var s = n[0],
                            o = n[1],
                            i = n[2],
                            l = n[3],
                            c = n[4],
                            _ = n[5];
                        void 0 === a && (a = !0);
                        void 0 === u && (u = !1);
                        void 0 === r && (r = !1);
                        var d = e.element;
                        if (!e.reach) return;
                        ((e.reach[l] = null), d[i] < 1 && (e.reach[l] = 'start'));
                        d[i] > e[s] - e[o] - 1 && (e.reach[l] = 'end');
                        t &&
                            !u &&
                            (d.dispatchEvent(C('ps-scroll-' + l)),
                            t < 0
                                ? d.dispatchEvent(C('ps-scroll-' + c))
                                : t > 0 && d.dispatchEvent(C('ps-scroll-' + _)),
                            a &&
                                (function (e, t) {
                                    (m(e, t), p(e, t));
                                })(e, l));
                        e.reach[l] && (t || r) && d.dispatchEvent(C('ps-' + l + '-reach-' + e.reach[l]));
                    })(e, n, s, a, u, r);
                };
                var D = function (e, t, a, u) {
                    (void 0 === t && (t = !1), void 0 === a && (a = 0), void 0 === u && (u = !1));
                    var r = e.element;
                    if (r) {
                        if (
                            ((e.containerWidth = Math.round(r.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(r.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(r.scrollWidth) - 2 * a),
                            (e.contentHeight = Math.round(r.scrollHeight)),
                            !u)
                        ) {
                            e.contentWidth = Math.round(r.scrollWidth) - 2 * a;
                            var i = e.contentWidth - e.containerWidth + a;
                            r.scrollLeft < a ? (r.scrollLeft = a) : r.scrollLeft > i && (r.scrollLeft = i);
                        }
                        var _ = Math.floor(r.scrollTop),
                            d = Math.floor(r.scrollLeft) - a,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        (r.contains(e.scrollbarXRail) ||
                            (o(r, l.rail('x')).forEach(function (e) {
                                return s(e);
                            }),
                            r.appendChild(e.scrollbarXRail)),
                            r.contains(e.scrollbarYRail) ||
                                (o(r, l.rail('y')).forEach(function (e) {
                                    return s(e);
                                }),
                                r.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = F(e, g((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = g(
                                      ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = F(e, g((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = g(
                                      (_ * (e.railYHeight - e.scrollbarYHeight)) /
                                          (e.contentHeight - e.containerHeight),
                                  )))
                                : (e.scrollbarYActive = !1),
                            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                            (function (e, t, a) {
                                var u = { width: t.railXWidth },
                                    r = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (u.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (u.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (u.bottom = t.scrollbarXBottom - r)
                                    : (u.top = t.scrollbarXTop + r);
                                n(t.scrollbarXRail, u);
                                var s = { top: r, height: t.railYHeight };
                                t.isScrollbarYUsingRight
                                    ? t.isRtl
                                        ? (s.right =
                                              t.contentWidth -
                                              (t.negativeScrollAdjustment + e.scrollLeft) -
                                              t.scrollbarYRight -
                                              t.scrollbarYOuterWidth)
                                        : (s.right = t.scrollbarYRight - e.scrollLeft)
                                    : t.isRtl
                                      ? (s.left =
                                            t.negativeScrollAdjustment +
                                            e.scrollLeft +
                                            2 * t.containerWidth -
                                            t.contentWidth -
                                            t.scrollbarYLeft -
                                            t.scrollbarYOuterWidth)
                                      : (s.left = t.scrollbarYLeft + e.scrollLeft);
                                (n(t.scrollbarYRail, s),
                                    n(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * a,
                                    }),
                                    n(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * a,
                                    }));
                            })(r, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', d + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', r.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                r.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (r.classList.add(c.active('x')), A(e, 'left', d - e.lastScrollLeft, !0, t))
                                : (r.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (r.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (r.classList.add(c.active('y')), A(e, 'top', r.scrollTop - e.lastScrollTop, !0, t))
                                : (r.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (r.scrollTop = 0)),
                            (e.lastScrollTop = _),
                            (e.lastScrollLeft = d),
                            (e.scrollTopPercent = r.scrollTop / r.scrollHeight),
                            (e.scrollLeftPercent = r.scrollLeft / r.scrollWidth));
                    }
                };
                function F(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var B = {
                        linear: function (e) {
                            return e;
                        },
                        easeInQuad: function (e) {
                            return e * e;
                        },
                        easeOutQuad: function (e) {
                            return e * (2 - e);
                        },
                        easeInOutQuad: function (e) {
                            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
                        },
                        easeInCubic: function (e) {
                            return e * e * e;
                        },
                        easeOutCubic: function (e) {
                            return --e * e * e + 1;
                        },
                        easeInOutCubic: function (e) {
                            return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                        },
                        easeInQuart: function (e) {
                            return e * e * e * e;
                        },
                        easeOutQuart: function (e) {
                            return 1 - --e * e * e * e;
                        },
                        easeInOutQuart: function (e) {
                            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
                        },
                        easeInQuint: function (e) {
                            return e * e * e * e * e;
                        },
                        easeOutQuint: function (e) {
                            return 1 + --e * e * e * e * e;
                        },
                        easeInOutQuint: function (e) {
                            return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
                        },
                    },
                    y = function (e) {
                        var t,
                            n = e.percentTimeElapsed,
                            a = e.x1,
                            u = e.y1,
                            r = e.x2,
                            s = e.y2;
                        return (
                            1 -
                            (a * ((t = n), Math.pow(t, 3)) +
                                u *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                r *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                s *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(n))
                        );
                    },
                    w = { breakBounds: !1, startBound: 0, endBound: 0 },
                    S = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            a = e.direction,
                            u = e.onRefUpdateCallback,
                            r = e.duration,
                            s = e.cubicBezierPoints,
                            o = e.easingPreset,
                            i = e.scrollAmount,
                            l = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = w);
                        var _ = null,
                            d = null,
                            m = null,
                            p = null,
                            E = t === window,
                            b = ['left', 'right'].indexOf(a) > -1,
                            h = ['right', 'bottom'].indexOf(a) > -1;
                        b
                            ? ((d = E ? 'scrollX' : 'scrollLeft'),
                              (p = E ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((d = E ? 'scrollY' : 'scrollTop'),
                              (p = E ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var g = t[d],
                            f = (function (e) {
                                var t,
                                    n = e.isWindow,
                                    a = e.scrollableDomEle,
                                    u = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    s = e.isHorizontalDirection,
                                    o = e.scrollLengthProp,
                                    i = e.direction;
                                if (n) {
                                    var l = document.documentElement;
                                    t = s ? l.offsetWidth : l.offsetHeight;
                                } else t = (a[o] - a.getBoundingClientRect()[u]) | 0;
                                return ['left', 'top'].includes(i) ? r : t - r;
                            })({
                                isWindow: E,
                                scrollableDomEle: t,
                                elementLengthProp: p,
                                initialScrollPosition: g,
                                isHorizontalDirection: b,
                                scrollLengthProp: m,
                                direction: a,
                            });
                        !isNaN(i) && i < f && (f = i);
                        var v = function e(a) {
                            if (!l || !l()) {
                                var i = a - _,
                                    m = (function (e) {
                                        var t = e.easingPreset,
                                            n = e.cubicBezierPoints,
                                            a = e.duration,
                                            u = e.runTime / a;
                                        if (B.hasOwnProperty(t)) return B[t](u);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return y({ percentTimeElapsed: u, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: o, cubicBezierPoints: s, runTime: i, duration: r });
                                if (!isNaN(m)) {
                                    var p = Math.round(m * f),
                                        v = h ? p + g : f - p;
                                    if (
                                        (c.breakBounds &&
                                            (v < c.startBound
                                                ? (v = c.startBound)
                                                : v > c.endBound && (v = c.endBound)),
                                        i < r)
                                    ) {
                                        if (E) {
                                            var C = b ? v : 0,
                                                A = b ? 0 : v;
                                            window.scrollTo(C, A);
                                        } else t[d] = v;
                                        (u && u(v), requestAnimationFrame(e));
                                    } else n && n();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            ((_ = e), v(e));
                        });
                    },
                    k = function (e) {
                        var t = e.axis,
                            n = e.cursorPositionOnRail,
                            a = e.direction,
                            u = e.i,
                            r = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    a = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var u = n.scrollbarY.offsetTop,
                                        r = u + n.scrollbarYHeight;
                                    return a >= u && a <= r;
                                }
                                var s = n.scrollbarX.offsetLeft,
                                    o = s + n.scrollbarXWidth;
                                return a >= s && a <= o;
                            })({ axis: t, i: u, cursorPositionOnRail: n });
                        return r
                            ? ((function (e) {
                                  var t = e.axis,
                                      n = e.i,
                                      a = e.cursorPositionOnRail,
                                      u = (function (e, t) {
                                          if ('y' === e) {
                                              var n = t.contentHeight - t.containerHeight;
                                              return {
                                                  rail: t.railYHeight,
                                                  content: t.contentHeight,
                                                  scrollbar: t.scrollbarYHeight,
                                                  maxScroll: n,
                                              };
                                          }
                                          var a = t.contentWidth - t.containerWidth;
                                          return {
                                              rail: t.railXWidth,
                                              content: t.contentWidth,
                                              scrollbar: t.scrollbarXWidth,
                                              maxScroll: a,
                                          };
                                      })(t, n),
                                      r = (a - u.scrollbar / 2) / u.rail,
                                      s = Math.round(Math.min(u.maxScroll, Math.max(0, u.content * r)));
                                  'y' === t ? (n.element.scrollTop = s) : (n.element.scrollLeft = s);
                              })({ axis: t, i: u, cursorPositionOnRail: n }),
                              !0)
                            : ('y' === t
                                  ? (u.element.scrollTop += a * u.containerHeight)
                                  : (u.element.scrollLeft += a * u.containerWidth),
                              !1);
                    },
                    T = function (e, t, n) {
                        return function (a) {
                            t = t.toLowerCase();
                            var u = null,
                                r = function () {
                                    if (1 === a.buttons) {
                                        if (
                                            !a.target.closest('.ps__rail-' + t) ||
                                            !a.target.closest('.ps__track_' + t)
                                        ) {
                                            var r = (function (e) {
                                                    var t = e.axis,
                                                        n = e.e,
                                                        a = e.i;
                                                    return 'y' === t
                                                        ? {
                                                              cursorPosition: n.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  a.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: n.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  a.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: a, i: e }),
                                                s = r.cursorPosition - r.windowScrolled - r.elementPosition,
                                                o = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        a = e.i;
                                                    return n > ('y' === t ? a.scrollbarYTop : a.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: s, i: e });
                                            (k({ axis: t, cursorPositionOnRail: s, direction: o, i: e }) &&
                                                clearTimeout(u),
                                                D(e, !1, n));
                                        }
                                        a.stopPropagation();
                                    }
                                };
                            (r(),
                                (u = setInterval(r, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(u);
                                }));
                        };
                    };
                function x(e, t, n) {
                    var a = n[0],
                        u = n[1],
                        r = n[2],
                        s = n[3],
                        o = n[4],
                        i = n[5],
                        l = n[6],
                        _ = n[7],
                        d = n[8],
                        E = e.element,
                        b = null,
                        h = null,
                        f = null;
                    function v(n) {
                        ((E[l] = g(b + f * (n[r] - h))), m(e, _), D(e, !1, t), n.stopPropagation(), n.preventDefault());
                    }
                    function C() {
                        (p(e, _), e[d].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', v));
                    }
                    e.event.bind(e[o], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((b = E[l]),
                            (h = t[r]),
                            (f = (e[u] - e[a]) / (e[s] - e[i])),
                            e.event.bind(e.ownerDocument, 'mousemove', v),
                            e.event.once(e.ownerDocument, 'mouseup', C),
                            e[d].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var L = 1e3,
                    M = {
                        'click-rail': function (e, t) {
                            (e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', T(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', T(e, 'x', t)));
                        },
                        'drag-thumb': function (e, t) {
                            (x(e, t, [
                                'containerWidth',
                                'contentWidth',
                                'screenX',
                                'railXWidth',
                                'scrollbarX',
                                'scrollbarXWidth',
                                'scrollLeft',
                                'x',
                                'scrollbarXRail',
                            ]),
                                x(e, t, [
                                    'containerHeight',
                                    'contentHeight',
                                    'screenY',
                                    'railYHeight',
                                    'scrollbarY',
                                    'scrollbarYHeight',
                                    'scrollTop',
                                    'y',
                                    'scrollbarYRail',
                                ]));
                        },
                        keyboard: function (e, t) {
                            var n = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (a) {
                                if (
                                    !((a.isDefaultPrevented && a.isDefaultPrevented()) || a.defaultPrevented) &&
                                    r(n, ':hover')
                                ) {
                                    var u,
                                        s = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (s) {
                                        if ('IFRAME' === s.tagName) s = s.contentDocument.activeElement;
                                        else for (; s.shadowRoot; ) s = s.shadowRoot.activeElement;
                                        if (
                                            r((u = s), 'input,[contenteditable]') ||
                                            r(u, 'select,[contenteditable]') ||
                                            r(u, 'textarea,[contenteditable]') ||
                                            r(u, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var o = 0,
                                        i = 0;
                                    switch (a.which) {
                                        case 37:
                                            o = a.metaKey ? -e.contentWidth : a.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            i = a.metaKey ? e.contentHeight : a.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            o = a.metaKey ? e.contentWidth : a.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            i = a.metaKey ? -e.contentHeight : a.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            i = a.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            i = e.containerHeight;
                                            break;
                                        case 34:
                                            i = -e.containerHeight;
                                            break;
                                        case 36:
                                            i = e.contentHeight;
                                            break;
                                        case 35:
                                            i = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== o) ||
                                        (e.settings.suppressScrollY && 0 !== i) ||
                                        ((n.scrollTop -= i),
                                        (n.scrollLeft += o),
                                        D(e, !1, t),
                                        (function (t, a) {
                                            var u = Math.floor(n.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === u && a > 0) ||
                                                    (u >= e.contentHeight - e.containerHeight && a < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var r = n.scrollLeft;
                                            if (0 === a) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === r && t < 0) ||
                                                    (r >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(o, i) && a.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var a = e.element;
                            function u(u) {
                                var r = (function (e) {
                                        var t = -1 * e.deltaX,
                                            n = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== n) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                                            t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                                            e.shiftKey ? [-n, -t] : [t, n]
                                        );
                                    })(u),
                                    s = r[0],
                                    o = r[1];
                                if (
                                    !(function (e, n, u) {
                                        if (!f.isWebKit && a.querySelector('select')) return !0;
                                        if (!a.contains(e)) return !1;
                                        for (var r = e; r && r !== a; ) {
                                            if (r.classList.contains(l.consuming)) return !0;
                                            var s = t(r);
                                            if (
                                                [s.overflow, s.overflowX, s.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var o = r.scrollHeight - r.clientHeight;
                                                if (
                                                    o > 0 &&
                                                    !((0 === r.scrollTop && u > 0) || (r.scrollTop === o && u < 0))
                                                )
                                                    return !0;
                                                var i = r.scrollWidth - r.clientWidth;
                                                if (
                                                    i > 0 &&
                                                    !((0 === r.scrollLeft && n < 0) || (r.scrollLeft === i && n > 0))
                                                )
                                                    return !0;
                                            }
                                            r = r.parentNode;
                                        }
                                        return !1;
                                    })(u.target, s, o)
                                ) {
                                    var i = !1,
                                        c = (s * e.settings.wheelSpeed) | 0,
                                        _ = (o * e.settings.wheelSpeed) | 0;
                                    (e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (o ? (a.scrollTop -= _) : (a.scrollTop += c), (i = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (s ? (a.scrollLeft += c) : (a.scrollLeft -= _), (i = !0))
                                        : ((a.scrollTop -= _), (a.scrollLeft += c)),
                                        D(e, !1, n),
                                        (i =
                                            i ||
                                            (function (t, n) {
                                                var u = Math.floor(a.scrollTop),
                                                    r = 0 === a.scrollTop,
                                                    s = u + a.offsetHeight === a.scrollHeight,
                                                    o = 0 === a.scrollLeft,
                                                    i = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? r || s : o || i) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(s, o)),
                                        i && !u.ctrlKey && (u.stopPropagation(), u.preventDefault()));
                                }
                            }
                            (e.event.bind(a, 'wheel', u),
                                void 0 !== window.onmousewheel && e.event.bind(a, 'mousewheel', u));
                        },
                        touch: function (e, n) {
                            if (f.supportsTouch || f.supportsIePointer) {
                                var a = e.element,
                                    u = {},
                                    r = 0,
                                    s = {},
                                    o = null;
                                f.supportsTouch
                                    ? (e.event.bind(a, 'touchstart', d),
                                      e.event.bind(a, 'touchmove', m),
                                      e.event.bind(a, 'touchend', p))
                                    : f.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(a, 'pointerdown', d),
                                            e.event.bind(a, 'pointermove', m),
                                            e.event.bind(a, 'pointerup', p))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(a, 'MSPointerDown', d),
                                            e.event.bind(a, 'MSPointerMove', m),
                                            e.event.bind(a, 'MSPointerUp', p)));
                            }
                            function i(t, u) {
                                ((a.scrollTop -= u), (a.scrollLeft -= t), D(e, !1, n));
                            }
                            function c(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function _(e) {
                                return (
                                    (!e.pointerType || 'pen' !== e.pointerType || 0 !== e.buttons) &&
                                    (!(!e.targetTouches || 1 !== e.targetTouches.length) ||
                                        !(
                                            !e.pointerType ||
                                            'mouse' === e.pointerType ||
                                            e.pointerType === e.MSPOINTER_TYPE_MOUSE
                                        ))
                                );
                            }
                            function d(e) {
                                if (_(e)) {
                                    var t = c(e);
                                    ((u.pageX = t.pageX),
                                        (u.pageY = t.pageY),
                                        (r = new Date().getTime()),
                                        null !== o && clearInterval(o));
                                }
                            }
                            function m(n) {
                                if (_(n)) {
                                    var o = c(n),
                                        d = { pageX: o.pageX, pageY: o.pageY },
                                        m = d.pageX - u.pageX,
                                        p = d.pageY - u.pageY;
                                    if (
                                        (function (e, n, u) {
                                            if (!a.contains(e)) return !1;
                                            for (var r = e; r && r !== a; ) {
                                                if (r.classList.contains(l.consuming)) return !0;
                                                var s = t(r);
                                                if (
                                                    [s.overflow, s.overflowX, s.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var o = r.scrollHeight - r.clientHeight;
                                                    if (
                                                        o > 0 &&
                                                        !((0 === r.scrollTop && u > 0) || (r.scrollTop === o && u < 0))
                                                    )
                                                        return !0;
                                                    var i = r.scrollLeft - r.clientWidth;
                                                    if (
                                                        i > 0 &&
                                                        !(
                                                            (0 === r.scrollLeft && n < 0) ||
                                                            (r.scrollLeft === i && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                r = r.parentNode;
                                            }
                                            return !1;
                                        })(n.target, m, p)
                                    )
                                        return;
                                    (i(m, p), (u = d));
                                    var E = new Date().getTime(),
                                        b = E - r;
                                    (b > 0 && ((s.x = m / b), (s.y = p / b), (r = E)),
                                        (function (t, n) {
                                            var u = Math.floor(a.scrollTop),
                                                r = a.scrollLeft,
                                                s = Math.abs(t),
                                                o = Math.abs(n);
                                            if (o > s) {
                                                if (
                                                    (n < 0 && u === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === u)
                                                )
                                                    return 0 === window.scrollY && n > 0 && f.isChrome;
                                            } else if (
                                                s > o &&
                                                ((t < 0 && r === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === r))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, p) && n.preventDefault());
                                }
                            }
                            function p() {
                                e.settings.swipeEasing &&
                                    (clearInterval(o),
                                    (o = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(o)
                                            : s.x || s.y
                                              ? Math.abs(s.x) < 0.01 && Math.abs(s.y) < 0.01
                                                  ? clearInterval(o)
                                                  : (i(30 * s.x, 30 * s.y), (s.x *= 0.8), (s.y *= 0.8))
                                              : clearInterval(o);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                a = null,
                                u = !1,
                                r = 0,
                                s = 0,
                                o = 0;
                            function i() {
                                e.onScroll();
                            }
                            function l(a, u, r, s) {
                                (void 0 === r && (r = null),
                                    void 0 === s && (s = !1),
                                    S({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: i,
                                        duration: u,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: a,
                                        onCheckForBreakCallback: r,
                                        boundsInfo: {
                                            breakBounds: s,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    }));
                            }
                            function _() {
                                if (u) return u;
                            }
                            function d() {
                                o = 0;
                            }
                            function E(u) {
                                if (e.scrollbarXActive) {
                                    var i = a - u.screenX;
                                    ((n.scrollLeft += i), (a = u.screenX));
                                    var l = new Date().getTime();
                                    if (((r = (i / (l - s)) * 1e3), (s = l), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === c
                                            ? 0 === o && (o = window.setTimeout(d, 250))
                                            : 0 !== o && (window.clearTimeout(o), (o = 0));
                                    }
                                    (m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        u.stopPropagation(),
                                        u.preventDefault());
                                }
                            }
                            function b(e) {
                                ((a = e.screenX),
                                    (u = !0),
                                    requestAnimationFrame(function () {
                                        u = !1;
                                    }),
                                    (s = new Date().getTime()));
                            }
                            function h(a) {
                                var u = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) l(t - n.scrollLeft, L, _);
                                else if (n.scrollLeft > u) l(u - n.scrollLeft, L, _);
                                else {
                                    new Date().getTime() - s < 100 && l(r / 4, L, _, !0);
                                }
                                (p(e, 'x'),
                                    p(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', E));
                            }
                            function g() {
                                u = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((a = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', E),
                                        e.event.once(e.ownerDocument, 'mouseup', h),
                                        e.event.once(e.ownerDocument, 'mousedown', b),
                                        e.event.once(n, 'wheel', g),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    N = function (e, u) {
                        var r = this;
                        if (
                            (void 0 === u && (u = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var s in ((this.element = e),
                        e.classList.add(i),
                        (this.settings = {
                            handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch', 'drag-move'],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1e3,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 10,
                            enableHorizontalScroll: !1,
                            animationDuration: 1e3,
                            animationEasingPreset: 'easeInOutQuint',
                            isDisableScrollToLastPositionOnResize: !1,
                            overScrollWidth: 0,
                        }),
                        u))
                            r.settings[s] = u[s];
                        ((this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null));
                        var o,
                            _,
                            d = function () {
                                return e.classList.add(c.focus);
                            },
                            m = function () {
                                return e.classList.remove(c.focus);
                            };
                        ((this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((_ = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (o = e.scrollLeft < 0),
                                (e.scrollLeft = _),
                                o)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new h()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = a(l.rail('x'))),
                            (this.scrollbarXButtonStart = a(l.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = a(l.buttonEnd('x'))),
                            (this.scrollbarXTrack = a(l.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = a(l.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', d),
                            this.event.bind(this.scrollbarX, 'blur', m),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = a(l.rail('y'))),
                            (this.scrollbarYButtonStart = a(l.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = a(l.buttonEnd('y'))),
                            (this.scrollbarYTrack = a(l.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = a(l.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', d),
                            this.event.bind(this.scrollbarY, 'blur', m),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            v().then(function () {
                                var a = t(r.scrollbarXRail);
                                ((r.scrollbarXBottom = parseInt(a.bottom, 10)),
                                    isNaN(r.scrollbarXBottom)
                                        ? ((r.isScrollbarXUsingBottom = !1), (r.scrollbarXTop = g(a.top)))
                                        : (r.isScrollbarXUsingBottom = !0),
                                    (r.railBorderXWidth = g(a.borderLeftWidth) + g(a.borderRightWidth)),
                                    n(r.scrollbarXRail, { display: 'block' }),
                                    (r.railXMarginWidth = g(a.marginLeft) + g(a.marginRight)),
                                    n(r.scrollbarXRail, { display: '' }),
                                    (r.railXWidth = null),
                                    (r.railXRatio = null));
                                var u = t(r.scrollbarYRail);
                                ((r.scrollbarYRight = parseInt(u.right, 10)),
                                    isNaN(r.scrollbarYRight)
                                        ? ((r.isScrollbarYUsingRight = !1), (r.scrollbarYLeft = g(u.left)))
                                        : (r.isScrollbarYUsingRight = !0),
                                    (r.scrollbarYOuterWidth = r.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  g(n.width) +
                                                  g(n.paddingLeft) +
                                                  g(n.paddingRight) +
                                                  g(n.borderLeftWidth) +
                                                  g(n.borderRightWidth)
                                              );
                                          })(r.scrollbarY)
                                        : null),
                                    (r.railBorderYWidth = g(u.borderTopWidth) + g(u.borderBottomWidth)),
                                    n(r.scrollbarYRail, { display: 'block' }),
                                    (r.railYMarginHeight = g(u.marginTop) + g(u.marginBottom)),
                                    n(r.scrollbarXRail, { display: '' }),
                                    n(r.scrollbarYRail, { display: '' }),
                                    (r.railYHeight = null),
                                    (r.railYRatio = null),
                                    (r.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= r.contentWidth - r.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= r.contentHeight - r.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (r.isAlive = !0),
                                    r.settings.handlers.forEach(function (e) {
                                        return M[e](r, r.settings.overScrollWidth);
                                    }),
                                    (r.boundHandleButtonEnter = r.handleMouseEnter.bind(r)),
                                    (r.boundHandleMouseLeave = r.handleMouseLeave.bind(r)),
                                    (r.boundHandleMouseEnter = r.handleMouseEnter.bind(r)),
                                    (r.boundPlayClickSound = r.playClickSound.bind(r)),
                                    r.scrollbarYButtonStart.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarYButtonEnd.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonStart.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonEnd.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonStart.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarXButtonEnd.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarYButtonStart.addEventListener('mouseenter', r.boundHandleButtonEnter),
                                    r.scrollbarYButtonEnd.addEventListener('mouseenter', r.boundHandleButtonEnter),
                                    r.scrollbarYButtonStart.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarYButtonEnd.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarY.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarX.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarY.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarY.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarX.addEventListener('mousedown', r.boundPlayClickSound),
                                    (r.lastScrollTop = Math.floor(e.scrollTop)),
                                    (r.lastScrollLeft = e.scrollLeft),
                                    (r.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (r.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    r.event.bind(r.element, 'scroll', function (e) {
                                        return r.onScroll(e);
                                    }),
                                    r.settings.enableHorizontalScroll &&
                                        r.event.bind(r.element, 'wheel', function (e) {
                                            return r.onWheel(e);
                                        }),
                                    D(r, !1, r.settings.overScrollWidth, !1));
                            }));
                    };
                ((N.prototype._getAnimationSettings = function (e, t, n, a) {
                    var u = this,
                        r = 0;
                    return (
                        null !== this.element &&
                            (r = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - r,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                (D(u, !0, u.settings.overScrollWidth, !1), n && n(e));
                            },
                            onAnimationCompleteCallback: function () {
                                a && a();
                            },
                        }
                    );
                }),
                    (N.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (N.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (N.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (N.prototype.handleMouseLeave = function () {}),
                    (N.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            n(this.scrollbarXRail, { display: 'block' }),
                            n(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                g(t(this.scrollbarXRail).marginLeft) + g(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                g(t(this.scrollbarYRail).marginTop) + g(t(this.scrollbarYRail).marginBottom)),
                            n(this.scrollbarXRail, { display: 'none' }),
                            n(this.scrollbarYRail, { display: 'none' }),
                            v().then(function () {
                                (e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    D(e, !1, e.settings.overScrollWidth, !1),
                                    A(e, 'top', 0, !1, !1, !0),
                                    A(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' }));
                            }));
                    }),
                    (N.prototype.setScrollLeft = function (e, t, n) {
                        S(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (N.prototype.setScrollLeftImmediately = function (e) {
                        ((this.element.scrollLeft = 0 | e), this.update());
                    }),
                    (N.prototype.setScrollTop = function (e, t, n) {
                        S(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (N.prototype.setScrollTopImmediately = function (e) {
                        ((this.element.scrollTop = 0 | e), this.update());
                    }),
                    (N.prototype.onScroll = function (e) {
                        this.isAlive && D(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (N.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (D(this, !1, this.settings.overScrollWidth, !1),
                            A(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (N.prototype.destroy = function () {
                        this.isAlive &&
                            (this.scrollbarYButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarYButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarXButtonEnd.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonEnd.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarYButtonEnd.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarX.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarY.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarX.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.event.unbindAll(),
                            s(this.scrollbarX),
                            s(this.scrollbarY),
                            s(this.scrollbarXRail),
                            s(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (N.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = N));
            },
            8089: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r),
                    o = n(7727),
                    i = n(7476);
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class _ extends u().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, o.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            r = e.side,
                            o = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            E = e.onMouseUp,
                            b =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                    return u;
                                })(e, l)),
                            h = s()(i.Z.base, i.Z[`base__${o}`], i.Z[`base__${r}`], null == _ ? void 0 : _.base),
                            g = s()(i.Z.icon, i.Z[`icon__${o}`], i.Z[`icon__${r}`], null == _ ? void 0 : _.icon),
                            f = s()(i.Z.glow, null == _ ? void 0 : _.glow),
                            v = s()(i.Z.caption, i.Z[`caption__${o}`], null == _ ? void 0 : _.caption),
                            C = s()(i.Z.goto, null == _ ? void 0 : _.goto);
                        return u().createElement(
                            'div',
                            c(
                                {
                                    className: h,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                b,
                            ),
                            'info' !== o && u().createElement('div', { className: i.Z.shine }),
                            u().createElement('div', { className: g }, u().createElement('div', { className: f })),
                            u().createElement('div', { className: v }, t),
                            a && u().createElement('div', { className: C }, a),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => i });
                var a = n(6179),
                    u = n.n(a),
                    r = n(2056);
                const s = ['children'];
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
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, s);
                    return u().createElement(
                        r.u,
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
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(6179),
                    u = n.n(a),
                    r = n(7078),
                    s = n(6373),
                    o = n(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = u().createElement('div', { className: n }, e);
                    if (t.header || t.body) return u().createElement(s.i, t, a);
                    const l = t.contentId,
                        c = t.args,
                        _ = null == c ? void 0 : c.contentId;
                    return l || _
                        ? u().createElement(o.u, i({}, t, { contentId: l || _ }), a)
                        : u().createElement(r.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    u = n(6179),
                    r = n.n(u);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, s);
                        const p = (0, u.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, l, c, d]);
                        return r().createElement(
                            a.u,
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
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    u = n(4179),
                    r = n(6179);
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
                                    type: u.B0.TOOLTIP,
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
                            u = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            b = void 0 !== E && E,
                            h = e.decoratorId,
                            g = void 0 === h ? 0 : h,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, s);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => A || (0, a.F)().resId, [A]),
                            S = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (i(n, g, { isMouseEvent: !0, on: !0, arguments: o(u) }, w),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [n, g, u, w, D]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        i(n, g, { on: !1 }, w),
                                        y.current.isVisible && F && F(),
                                        (y.current.isVisible = !1));
                                }
                            }, [n, g, w, F]),
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
                                !1 === v && k();
                            }, [v, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ));
                        return v
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(S, p ? 100 : 400)),
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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
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
            7044: (e, t, n) => {
                'use strict';
                (n(3649), n(728), n(4179));
                Date.now();
            },
            527: (e, t, n) => {
                'use strict';
                (n.r(t), n.d(t, { mouse: () => o, onResize: () => r }));
                var a = n(2472),
                    u = n(1176);
                const r = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, u.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, u.R)(!0);
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
                            : (0, u.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let u = !0;
                                    const r = `mouse${t}`,
                                        o = s[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            u &&
                                                (o(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (u = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
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
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => u,
                        graphicsQuality: () => s,
                    }));
                var a = n(527);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                n.d(t, { O: () => u });
                var a = n(5959);
                const u = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function u(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => u, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => u });
                var a = n(2472);
                const u = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => u.W,
                        displayStatusIs: () => B,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => A,
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    }));
                var a = n(3722),
                    u = n(6112),
                    r = n(6538),
                    s = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const u = 2,
                    r = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                    return u;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var u;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? u : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            8071: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => a });
                const a = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
            },
            2344: (e, t, n) => {
                'use strict';
                n.d(t, { D9: () => s, DA: () => u.D, m2: () => r.m, tT: () => u.t });
                var a = n(2790),
                    u = (n(3469), n(2133), n(579), n(5360)),
                    r = n(9056);
                const s = a.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(6179);
                const u = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, n) => {
                'use strict';
                (n(7044), n(6179));
            },
            2133: (e, t, n) => {
                'use strict';
                n(6179);
            },
            8526: (e, t, n) => {
                'use strict';
                n.d(t, { gd: () => o });
                var a = n(3138),
                    u = n(5521),
                    r = (n(4179), n(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = u.n.NONE, t = s, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== u.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(u) {
                            if (u.keyCode === e) {
                                if (a.O.view.isEventHandled()) return;
                                (a.O.view.setEventHandled(), t(u), n && u.stopPropagation());
                            }
                        }
                    }, [t, e, n]);
                }
            },
            5360: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => c, t: () => _ });
                var a = n(7902),
                    u = n(8071),
                    r = n(6536),
                    s = n(4179),
                    o = n(7332),
                    i = n(6179);
                const l = s.Sw.instance;
                let c;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(c || (c = {}));
                const _ = (e = 'model', t = c.Deep) => {
                    const n = (0, i.useState)(0),
                        s = (n[0], n[1]),
                        _ = (0, i.useMemo)(() => (0, a.F)(), []),
                        d = _.caller,
                        m = _.resId,
                        p = (0, i.useMemo)(
                            () => (window.__feature && window.__feature !== d ? `subViews.${d}.${e}` : e),
                            [d, e],
                        ),
                        E = (0, i.useState)(() =>
                            ((e) => {
                                const t = (0, u.M)(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return (0, o.os)(t) ? t.value : t;
                            })((0, o.Gd)(p)),
                        ),
                        b = E[0],
                        h = E[1],
                        g = (0, i.useRef)(-1);
                    return (
                        (0, r.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? c.Deep : c.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== c.None)
                            ) {
                                const n = (e) => {
                                        (0, o.kJ)(e) && t === c.Deep
                                            ? (e === b && s((e) => e + 1), h(e))
                                            : h(Object.assign([], e));
                                    },
                                    a = (0, o.U0)(e);
                                g.current = l.addCallback(a, n, m, t === c.Deep);
                            }
                        }),
                        (0, i.useEffect)(() => {
                            if (t !== c.None)
                                return () => {
                                    l.removeCallback(g.current, m);
                                };
                        }, [m, t]),
                        b
                    );
                };
            },
            9056: (e, t, n) => {
                'use strict';
                n.d(t, { m: () => i });
                var a = n(7902),
                    u = n(8071),
                    r = n(4179),
                    s = n(6179);
                const o = r.Sw.instance,
                    i = (e = 'model', t = !0) => {
                        const n = (0, s.useState)(0),
                            r = (n[0], n[1]),
                            i = (0, s.useMemo)(() => (0, a.F)(), []),
                            l = i.caller,
                            c = i.resId,
                            _ = (0, s.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${e}` : e),
                                [l, e],
                            ),
                            d = (0, s.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, u.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            r((e) => e + 1);
                                        },
                                        n = o.addCallback(e, t, c);
                                    return () => o.removeCallback(n, c);
                                }
                            }, [e, t, c]),
                            d
                        );
                    };
            },
            2790: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(6179);
                const u = (e) => {
                    const t = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
            },
            579: (e, t, n) => {
                'use strict';
                (n(3138), n(6179));
            },
            1091: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const u = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    r = (e) => {
                        const t = (0, a.useState)(u(e ? e.current : null)),
                            n = t[0],
                            r = t[1];
                        return (
                            (0, a.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        u(e ? e.current : null) ? r(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => () => r(!1), [e]),
                            n
                        );
                    };
            },
            5521: (e, t, n) => {
                'use strict';
                let a, u;
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
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
                    })(u || (u = {})));
            },
            9480: (e, t, n) => {
                'use strict';
                n.d(t, { UI: () => a });
                function a(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
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
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { $: () => u, G: () => a });
                const u = {
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
                let a;
                function u(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                (n.d(t, {
                    BN: () => s,
                    Eg: () => l,
                    Uw: () => b,
                    WU: () => u,
                    e: () => o,
                    uF: () => r,
                    v2: () => a,
                    z4: () => i,
                }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(a || (a = {})));
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
                    d = (e, t, n = a.left) => e.split(t).reduce(n === a.left ? c : _, []),
                    m = (() => {
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
                    p = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t = a.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return p.includes(n)
                            ? m(e)
                            : ((e, t = a.left) => {
                                  let n = [];
                                  const u =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = i(e);
                                  return (d(r, /( )/, t).forEach((e) => (n = n.concat(d(e, u, a.left)))), n);
                              })(e, t);
                    },
                    b = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : E(e, t)));
            },
            728: (e, t, n) => {
                'use strict';
                let a;
                !(function (e) {
                    ((e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year'));
                })(a || (a = {}));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, u = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, n, u);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                u.__instance = void 0;
                const r = u;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, t, n) => {
                'use strict';
                n.d(t, {
                    c1: () => F,
                    Sw: () => r.Z,
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => s,
                    B0: () => i,
                    c9: () => v,
                    ry: () => g,
                    Eu: () => f,
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
                const u = a;
                var r = n(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let i;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    p = n(3138);
                const E = ['args'];
                function b(e, t, n, a, u, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, u);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (a, u) {
                                        var r = e.apply(t, n);
                                        function s(e) {
                                            b(r, a, u, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            b(r, a, u, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
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
                            const u = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                    return u;
                                })(t, E);
                            void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((a = u),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    C = () => v(i.CLOSE),
                    A = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var D = n(7572);
                const F = u.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: D.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => v(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, u = R.invalid('resId'), r) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: p.O.view.pxToRem(l) + s.x,
                                    y: p.O.view.pxToRem(c) + s.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(d),
                                };
                            v(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: u,
                                direction: t,
                                bbox: h(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => A(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            A(e, C);
                        },
                        handleViewEvent: v,
                        onBindingsReady: g,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const u = Object.prototype.toString.call(t[a]);
                                    if (u.startsWith('[object CoherentArrayProxy]')) {
                                        const u = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < u.length; t++) n[a].push({ value: e(u[t].value) });
                                    } else
                                        u.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = B;
            },
            7332: (e, t, n) => {
                'use strict';
                n.d(t, { Gd: () => i, U0: () => l, kJ: () => s, os: () => r });
                var a = n(7902),
                    u = n(8071);
                const r = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    s = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    o = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    i = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = (0, u.M)(`${e}.${n}`, window);
                                return r(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    l = (e) => {
                        const t = ((e) => {
                                const t = (0, a.F)(),
                                    n = t.caller,
                                    u = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: o(r, e || ''), resId: u };
                            })(),
                            n = t.modelPrefix,
                            s = e.split('.');
                        if (s.length > 0) {
                            const e = [s[0]];
                            return (
                                s.reduce((t, a) => {
                                    const s = (0, u.M)(o(n, `${t}.${a}`), window);
                                    return r(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
            },
            1922: (e, t, n) => {
                'use strict';
                n.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var a = n(6483),
                    u = n.n(a),
                    r = n(7739),
                    s = n(6179),
                    o = n.n(s),
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
                    _ = ({ header: e, content: t, aside: n, footer: a, compare: r = !1 }) => {
                        const s = c(),
                            l = u()(i.Z.base, s && i.Z[`base__${s}`], r && i.Z.base__compare),
                            _ = u()(i.Z.header, s && i.Z[`header__${s}`]),
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
                                n,
                            ),
                            a && o().createElement('div', { className: i.Z.footer }, a),
                        );
                    };
            },
            7604: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => Ve,
                        Bar: () => Ye,
                        DefaultScroll: () => Ue,
                        Direction: () => ke,
                        defaultSettings: () => Te,
                        useHorizontalScrollApi: () => Le,
                    }));
                var u = {};
                (n.r(u), n.d(u, { Area: () => dt, Bar: () => lt, Default: () => _t, useVerticalScrollApi: () => Ze }));
                var r = n(7739),
                    s = n(6179),
                    o = n.n(s),
                    i = n(6483),
                    l = n.n(i),
                    c = n(926),
                    _ = n.n(c),
                    d = n(1043);
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
                        const e = (0, s.useContext)(r.YN),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
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
                        return { mediaSize: a, mediaWidth: u, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    h = ['children', 'className'];
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const f = {
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
                    A = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, h);
                        const u = b(),
                            r = u.mediaWidth,
                            s = u.mediaHeight,
                            i = u.mediaSize;
                        return o().createElement('div', g({ className: l()(n, f[r], v[s], C[i]) }, a), t);
                    },
                    D = ['children'];
                const F = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, D);
                    return o().createElement(r.ZN, null, o().createElement(A, n, t));
                };
                var B = n(493),
                    y = n.n(B),
                    w = n(9056),
                    S = n(1856),
                    k = n(7383),
                    T = n(5360),
                    x = n(1922),
                    L = n(2262),
                    M = n(3649);
                const N = 'FormatText_base_d0',
                    I = ({ binding: e, text: t = '', classMix: n, alignment: a = M.v2.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  s.Fragment,
                                  null,
                                  t.split('\n').map((t, u) =>
                                      o().createElement(
                                          'div',
                                          { className: l()(N, n), key: `${t}-${u}` },
                                          (0, M.Uw)(t, a, e).map((e, t) =>
                                              o().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var P = n(6373);
                const O = 'visible_change',
                    H = O,
                    W = O,
                    $ = (e, t) => {
                        const n = (0, T.t)('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                u = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && u.length > 0;
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
                    },
                    z = 'epic_battle';
                let X, G, Y, j;
                (!(function (e) {
                    ((e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view'));
                })(X || (X = {})),
                    (function (e) {
                        ((e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
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
                            (e.RewardsSelectionView = 'rewards_selection_view'));
                    })(G || (G = {})),
                    (function (e) {
                        ((e.Click = 'click'), (e.Close = 'close'));
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })(j || (j = {})));
                const U = 'tooltip_watched';
                let V;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(V || (V = {}));
                const Z = ['action', 'timeLimit'];
                const q = 'metrics',
                    K = () => Date.now(),
                    J = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: u }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: u || null,
                    }),
                    Q = (e, t) => {
                        const n = (0, s.useCallback)(
                            (n, a = j.Info, u) => {
                                (u || (u = {}),
                                    Object.keys(u).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(u),
                                        }));
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    ee = (e, t) => {
                        const n = Q(e, t),
                            a = (0, s.useRef)(new Map()),
                            u = (0, s.useRef)(new Map()),
                            r = (0, s.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, K());
                                },
                                [a],
                            ),
                            o = (0, s.useCallback)(() => {
                                (a.current.clear(), u.current.clear());
                            }, [a, u]),
                            i = (0, s.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === u.current.get(e) &&
                                        u.current.set(e, K());
                                },
                                [a, u],
                            ),
                            l = (0, s.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = u.current.get(e);
                                    if (void 0 === n) return;
                                    u.current.delete(e);
                                    const r = K() - n;
                                    a.current.set(e, t + r);
                                },
                                [a, u],
                            ),
                            c = (0, s.useCallback)(
                                (e, t = 0, r, s) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    (void 0 !== u.current.get(e) && l(e), a.current.delete(e));
                                    const i = (K() - o) / 1e3;
                                    i <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, i)),
                                        n(e, r, s));
                                },
                                [a, u, n, l],
                            );
                        return [(e) => r(e), (e, t, n, a) => c(e, t, n, a), () => o(), (e) => i(e), (e) => l(e)];
                    },
                    te = (e) => {
                        const t = ee(e, q),
                            n = t[0],
                            a = t[1],
                            u = t[2],
                            r = t[3],
                            o = t[4],
                            i = (0, s.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        u = e.logLevel;
                                    a(t, n, u, J(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => i(e), () => u(), (e) => r(e), (e) => o(e)];
                    },
                    ne = (e, t) => {
                        const n = te(e),
                            a = n[0],
                            u = n[1],
                            r = t.action,
                            o = t.timeLimit,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(t, Z);
                        return (0, s.useMemo)(
                            () => ({
                                onShow: () => a(r || U),
                                onHide: () => u(Object.assign({ action: r || U, timeLimit: o || 2 }, i)),
                            }),
                            [r, o, i, a, u],
                        );
                    },
                    ae = (e, t) => {
                        const n = ee(e, t),
                            a = n[0],
                            u = n[1],
                            r = n[2],
                            s = n[3],
                            o = n[4];
                        return [(e) => a(e), (e, t, n, a) => u(e, t, n, a), () => r(), (e) => s(e), (e) => o(e)];
                    };
                var ue = n(7208),
                    re = n(8982);
                const se = 'model.tankSetup.frontlineSetup',
                    oe = {
                        base: 'AbilitiesActionsPanel_base_c0',
                        base__tiny: 'AbilitiesActionsPanel_base__tiny_b8',
                        base__small: 'AbilitiesActionsPanel_base__small_9d',
                        base__medium: 'AbilitiesActionsPanel_base__medium_31',
                        base__large: 'AbilitiesActionsPanel_base__large_15',
                        base__huge: 'AbilitiesActionsPanel_base__huge_27',
                        toReservesBtn: 'AbilitiesActionsPanel_toReservesBtn_6b',
                        checkBox: 'AbilitiesActionsPanel_checkBox_77',
                        checkBoxZone: 'AbilitiesActionsPanel_checkBoxZone_49',
                        checkBoxLabel: 'AbilitiesActionsPanel_checkBoxLabel_2a',
                        vehicleIcon: 'AbilitiesActionsPanel_vehicleIcon_2f',
                    };
                var ie = n(3457);
                const le = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let ce, _e;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big'));
                })(ce || (ce = {})),
                    (function (e) {
                        ((e.Brown = 'brown'), (e.Red = 'red'));
                    })(_e || (_e = {})));
                const de = o().memo(function ({ value: e, className: t, theme: n, size: a }) {
                    return o().createElement(
                        'div',
                        { className: l()(le.base, le[`base__${n}`], le[`base__${a}`], t) },
                        o().createElement('div', { className: le.label }, e),
                        o().createElement('div', { className: le.icon }),
                    );
                });
                var me = n(2056);
                const pe = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return o().createElement(
                            me.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, n),
                        );
                    }),
                    Ee = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    be = o().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const u = { pointsNeeded: e - (0, s.useContext)(_u), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: l()(Ee.base, t && Ee.base__isAvailable) },
                            o().createElement(
                                pe,
                                u,
                                o().createElement(
                                    'div',
                                    { className: Ee.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: Ee.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(de, { value: e, theme: t ? _e.Brown : _e.Red, size: ce.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Ee.actions },
                                o().createElement(
                                    pe,
                                    u,
                                    o().createElement(
                                        ie.u5,
                                        {
                                            size: ie.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: l()(Ee.purchaseButton, Ee.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    ie.u5,
                                    { size: ie.qE.medium, type: ie.L$.secondary, mixClass: Ee.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ge = () => {
                        const e = (0, x.GS)(),
                            t = (0, s.useContext)(_u),
                            n = (0, T.t)(se),
                            a = n.isTypeSelected,
                            u = n.vehicleType,
                            r = n.onChangeApplyAbilitiesToTypeSettings,
                            i = n.onDealConfirmed,
                            c = n.onDealCancelled,
                            _ = n.totalPurchasePrice,
                            d = n.purchaseSelectedAbilities,
                            m = (0, T.t)(`${se}.dealPanel`),
                            p = m.isDisabled,
                            E = m.canAccept,
                            b = m.canCancel,
                            h = (0, M.BN)(u),
                            g = (0, s.useCallback)(() => r(), [r]),
                            f = (0, s.useCallback)(() => i(), [i]),
                            v = (0, s.useCallback)(() => c(), [c]),
                            C = (0, s.useCallback)(() => d(), [d]),
                            A = l()(oe.base, e && oe[`base__${e}`]),
                            D = l()(oe.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            F = (0, s.useMemo)(
                                () => ({
                                    backgroundImage: h
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(h)})`
                                        : '',
                                }),
                                [h],
                            ),
                            B = (0, s.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: oe.vehicleIcon, style: F }),
                                    vehicle: R.strings.menu.classes.short.$dyn(h),
                                }),
                                [F, h],
                            ),
                            y = $('ShowAbilitiesButton', W);
                        (0, s.useEffect)(() => {
                            y && y.runTrigger(!0);
                        }, [y]);
                        const w = $('ApplyAbilitiesToTypeCheckbox', W);
                        (0, s.useEffect)(() => {
                            w && w.runTrigger(!0);
                        }, [w]);
                        const S = ne(z, { item: G.AbilitiesCheckboxTooltip, parentScreen: X.SetupView }),
                            N = _ > 0,
                            O = !N && E;
                        return o().createElement(
                            'div',
                            { className: A },
                            O &&
                                o().createElement(
                                    'div',
                                    { className: D },
                                    o().createElement(
                                        P.i,
                                        he(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(h) },
                                            S,
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: oe.checkBoxZone },
                                            o().createElement(
                                                L.XZ,
                                                { isChecked: a, onChange: g, type: L.Rh.main, size: L.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: oe.checkBoxLabel },
                                                    o().createElement(I, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: B,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                ue.f,
                                { when: !0, canAccept: N || O },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    N &&
                                        o().createElement(be, {
                                            price: _,
                                            isAvailable: t >= _,
                                            onPurchase: C,
                                            onCancel: v,
                                        }),
                                    O &&
                                        o().createElement(re.Z, {
                                            applyBtnString: a ? k.qZ : k.k4,
                                            isDisabled: p,
                                            canCancel: b,
                                            onCancel: v,
                                            onConfirm: f,
                                        }),
                                ),
                            ),
                        );
                    },
                    fe = (e, t, n) => (n < e ? e : n > t ? t : n),
                    ve = [];
                function Ce(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), ve)
                    );
                }
                function Ae(e, t, n = []) {
                    const a = (0, s.useRef)(0),
                        u = (0, s.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, s.useEffect)(() => u, [u]);
                    const r = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            ((a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, r),
                        u,
                    ];
                }
                var De = n(7727),
                    Fe = n(3138);
                function Be(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ye(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return ye(e, t);
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
                function ye(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function we(e, t, n) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let u,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    u && clearTimeout(u);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        ((s = Date.now()), n.apply(l, i));
                                    }
                                    r ||
                                        (a && !u && _(),
                                        o(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (u = setTimeout(
                                                  a
                                                      ? function () {
                                                            u = void 0;
                                                        }
                                                      : _,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (o(), (r = !0));
                                    }),
                                    i
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, s.useEffect)(() => a.cancel, [a]), a);
                }
                var Se = n(7030);
                let ke;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(ke || (ke = {}));
                const Te = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    xe = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: u,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                u = a[0],
                                r = a[1];
                            return fe(u, r, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Te : l,
                                _ = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                m = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        u = (e, ...n) => {
                                            for (var a, u = Be(t(e).values()); !(a = u()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: u }), []);
                                })(),
                                p = we(
                                    () => {
                                        Fe.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, Se.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), m.trigger('change', e), r && p());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                b = E[0],
                                h = E[1],
                                g = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const u = b.scrollPosition.get(),
                                            r = (null != (a = b.scrollPosition.goal) ? a : 0) - u;
                                        return o(e, t * n + r + u);
                                    },
                                    [b.scrollPosition],
                                ),
                                f = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            h.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, b.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, b.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return u(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            r = g(t, e, a);
                                        f(r);
                                    },
                                    [f, g, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(a(e)),
                                            _.current && m.trigger('mouseWheel', e, b.scrollPosition, t(_.current)));
                                    },
                                    [b.scrollPosition, v, m],
                                ),
                                A = ((e, t = []) => {
                                    const n = (0, s.useRef)(),
                                        a = (0, s.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        (0, S.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (f(o(e, b.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [f, b.scrollPosition.goal],
                                ),
                                D = Ce(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = o(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && f(t, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', A),
                                    () => {
                                        window.removeEventListener('resize', A);
                                    }
                                ),
                                [A],
                            );
                            const F = (0, s.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? u(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: v,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: b,
                                    recalculateContent: D,
                                    handleIsThumbDragging: F,
                                    events: { on: m.on, off: m.off },
                                }),
                                [b.scrollPosition, f, v, F, m.off, m.on, D, C, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Le = xe({
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
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ke.Next : ke.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Me = 'HorizontalBar_base_49',
                    Ne = 'HorizontalBar_base__nonActive_82',
                    Re = 'HorizontalBar_leftButton_5f',
                    Ie = 'HorizontalBar_rightButton_03',
                    Pe = 'HorizontalBar_track_0d',
                    Oe = 'HorizontalBar_thumb_fd',
                    He = 'HorizontalBar_rail_32',
                    We = 'disable',
                    $e = { pending: !1, offset: 0 },
                    ze = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Xe = () => {},
                    Ge = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ye = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ze, onDrag: a = Xe }) => {
                        const u = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)($e),
                            p = m[0],
                            E = m[1],
                            b = (0, s.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [a],
                            ),
                            h = () => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && t && n && u)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / u),
                                    l = fe(0, 1, s / (u - a)),
                                    d = (t.offsetWidth - Ge(t, o)) * l;
                                ((n.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(We),
                                                    void i.current.classList.remove(We)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(We),
                                                    void i.current.classList.add(We)
                                                );
                                            var t, n;
                                            (r.current.classList.remove(We), i.current.classList.remove(We));
                                        }
                                    })(d));
                            },
                            g = Ce(() => {
                                ((() => {
                                    const t = _.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && n)) return;
                                    const s = Math.min(1, a / r);
                                    ((t.style.width = `${Ge(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 === s ? u.current.classList.add(Ne) : u.current.classList.remove(Ne)));
                                })(),
                                    h());
                            });
                        ((0, s.useEffect)(() => (0, S.v)(g)),
                            (0, s.useEffect)(
                                () =>
                                    (0, S.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Xe;
                                        const a = () => {
                                            (n(), (n = (0, S.v)(g)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        var n;
                                        const u = e.contentRef.current;
                                        if (!u) return;
                                        const r = c.current,
                                            s = _.current;
                                        if (!u || !r || !s) return;
                                        const o = t.screenX - p.offset - r.getBoundingClientRect().x,
                                            i = (o / r.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t), b($e));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, p.offset, p.pending, a, b]));
                        const f = Ae((t) => e.applyStepTo(t), d, [e]),
                            v = f[0],
                            C = f[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const A = (e) => {
                            e.target.classList.contains(We) || (0, De.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Me, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Re, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(We) ||
                                        0 !== e.button ||
                                        ((0, De.G)('play'), v(ke.Next));
                                },
                                onMouseUp: C,
                                ref: r,
                                onMouseEnter: A,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Pe, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, De.G)('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = _.current,
                                                        u = e.contentRef.current;
                                                    if (!a || !u) return;
                                                    const r = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? ke.Prev : ke.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: A,
                                },
                                o().createElement('div', { ref: _, className: l()(Oe, t.thumb) }),
                                o().createElement('div', { className: l()(He, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Ie, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(We) ||
                                        0 !== e.button ||
                                        ((0, De.G)('play'), v(ke.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: A,
                            }),
                        );
                    }),
                    je = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ue = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: u,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(je.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(je.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(je.defaultScrollArea, u) },
                                o().createElement(Ve, { className: i, api: m, classNames: r }, e),
                            ),
                            o().createElement(Ye, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Ve = ({ api: e, className: t, classNames: n, children: a, style: u }) => (
                        (0, s.useEffect)(() => (0, S.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(je.base, t), style: u },
                            o().createElement(
                                'div',
                                {
                                    className: l()(je.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(je.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Ve.Bar = Ye),
                    (Ve.Default = Ue),
                    (Ve.SeniorityAwards = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => (0, S.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(je.base, t) },
                            o().createElement(
                                'div',
                                { className: l()(je.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: l()(je.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const Ze = xe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ke.Next : ke.Prev),
                    }),
                    qe = 'VerticalBar_base_f3',
                    Ke = 'VerticalBar_base__nonActive_42',
                    Je = 'VerticalBar_topButton_d7',
                    Qe = 'VerticalBar_bottomButton_06',
                    et = 'VerticalBar_track_df',
                    tt = 'VerticalBar_thumb_32',
                    nt = 'VerticalBar_rail_43',
                    at = 'disable',
                    ut = () => {},
                    rt = { pending: !1, offset: 0 },
                    st = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ot = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    it = (e, t) => Math.max(20, e.offsetHeight * t),
                    lt = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = st, onDrag: a = ut }) => {
                        const u = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(rt),
                            p = m[0],
                            E = m[1],
                            b = (0, s.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [a],
                            ),
                            h = Ce(() => {
                                const t = _.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && n)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${it(n, s)}px`),
                                    t.classList.add(tt),
                                    u.current &&
                                        (1 === s ? u.current.classList.add(Ke) : u.current.classList.remove(Ke)),
                                    s
                                );
                            }),
                            g = Ce(() => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && t && n && u)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / u),
                                    l = fe(0, 1, s / (u - a)),
                                    d = (t.offsetHeight - it(t, o)) * l;
                                ((n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(at),
                                                    void i.current.classList.remove(at)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(at),
                                                    void i.current.classList.add(at)
                                                );
                                            var t, n;
                                            (r.current.classList.remove(at), i.current.classList.remove(at));
                                        }
                                    })(d));
                            }),
                            f = Ce(() => {
                                ot(e, () => {
                                    (h(), g());
                                });
                            });
                        ((0, s.useEffect)(() => (0, S.v)(f)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    ot(e, () => {
                                        g();
                                    });
                                };
                                let n = ut;
                                const a = () => {
                                    (n(), (n = (0, S.v)(f)));
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
                            (0, s.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        ot(e, (n) => {
                                            const u = c.current,
                                                r = _.current,
                                                s = e.getContainerSize();
                                            if (!u || !r || !s) return;
                                            const o = t.screenY - p.offset - u.getBoundingClientRect().y,
                                                i = (o / u.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            b(rt));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, p.offset, p.pending, a, b]));
                        const v = Ae((t) => e.applyStepTo(t), d, [e]),
                            C = v[0],
                            A = v[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(at) || (0, De.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(qe, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Je, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(at) ||
                                        0 !== e.button ||
                                        ((0, De.G)('play'), C(ke.Next));
                                },
                                ref: r,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(et, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, De.G)('play'), t.target === a))
                                                (e.handleIsThumbDragging(!0),
                                                    b({
                                                        pending: !0,
                                                        offset: t.screenY - a.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        ot(e, (a) => {
                                                            if (!a) return;
                                                            const u = n(e),
                                                                r = e.clampPosition(a, a.scrollTop + u * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? ke.Prev : ke.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: _, className: t.thumb }),
                                o().createElement('div', { className: l()(nt, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Qe, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(at) ||
                                        0 !== e.button ||
                                        ((0, De.G)('play'), C(ke.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    ct = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    _t = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: u,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(ct.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(ct.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(ct.area, u) },
                                o().createElement(dt, { className: r, classNames: i, api: m }, e),
                            ),
                            o().createElement(lt, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    dt = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => (0, S.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(ct.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(ct.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                dt.Default = _t;
                const mt = { Vertical: u, Horizontal: a };
                var pt = n(9480);
                const Et = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    bt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ht = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    gt = (e) =>
                        ht
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = bt.length - 1; n >= 0; n--)
                                      for (; e >= bt[n]; ) ((t += Et[n]), (e -= bt[n]));
                                  return t;
                              })(e),
                    ft = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__elite: 'TankName_type__elite_cc',
                        base__sizeBig: 'TankName_base__sizeBig_2b',
                        name: 'TankName_name_56',
                        base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let vt, Ct;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(vt || (vt = {})),
                    (function (e) {
                        ((e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish'));
                    })(Ct || (Ct = {})));
                const At = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: u,
                        tags: r,
                        isPremiumIGR: s,
                        size: i = vt.extraSmall,
                        type: c = Ct.colored,
                        className: _,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const p = `${(0, M.BN)(a)}${e ? '_elite' : ''}`,
                            E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(p);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    ft.base,
                                    ft[`base__size${(0, M.e)(i)}`],
                                    ft[`base__type${(0, M.e)(c)}`],
                                    r && pt.UI(r, (e) => ft[`base__tag${(0, M.e)(e)}`]),
                                    _,
                                ),
                            },
                            o().createElement('div', { className: l()(ft.level, null == d ? void 0 : d.level) }, gt(u)),
                            o().createElement('div', {
                                className: l()(ft.type, e && ft.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${E})` },
                            }),
                            s && o().createElement('div', { className: ft.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: l()(ft.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    Dt = 'Aside_base_a5',
                    Ft = 'Aside_content_24',
                    Bt = 'Aside_tankDetails_35',
                    yt = 'Aside_description_f0',
                    wt = 'Aside_title_6f',
                    St = 'Aside_category_c0',
                    kt = 'Aside_text_ca',
                    Tt = 'Aside_status_91',
                    xt = 'Aside_status__activated_4e',
                    Lt = 'CategoryTitle_base_f3',
                    Mt = 'CategoryTitle_title_9d',
                    Nt = 'CategoryTitle_icon_48';
                let Rt;
                !(function (e) {
                    ((e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small'));
                })(Rt || (Rt = {}));
                const It = (0, s.memo)(({ category: e, iconTheme: t = Rt.Small, className: n }) => {
                        const a = (0, s.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: l()(Lt, n) },
                            o().createElement('div', { className: Nt, style: a }),
                            o().createElement('div', { className: Mt }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Pt = (e, t, n, a) => {
                        const u = te(z),
                            r = u[0],
                            o = u[1];
                        return [
                            (0, s.useCallback)(() => r(U), [r]),
                            (0, s.useCallback)(
                                () => o({ action: U, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [o, e, t, n, a],
                            ),
                        ];
                    },
                    Ot = 'InfoIcon_base_83',
                    Ht = 'InfoIcon_icon_47',
                    Wt = (0, s.memo)(({ item: e, className: t }) => {
                        const n = Pt(e, X.SetupView),
                            a = n[0],
                            u = n[1];
                        return o().createElement(
                            'div',
                            { className: l()(Ot, t) },
                            o().createElement(
                                me.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: u,
                                },
                                o().createElement('div', { className: Ht }),
                            ),
                        );
                    }),
                    $t = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let zt;
                !(function (e) {
                    ((e.None = 'none'), (e.Default = 'default'), (e.Active = 'active'));
                })(zt || (zt = {}));
                const Xt = (0, s.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: u }) => {
                    const r = t + 1,
                        i = (0, s.useMemo)(() => gt(r), [r]),
                        c = ((e) => {
                            const t = Q(e, q),
                                n = (0, s.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, J(e));
                                    },
                                    [t],
                                );
                            return (e) => n(e);
                        })(z),
                        _ = (0, s.useCallback)(() => {
                            (a(t),
                                De.$.playClick(),
                                c({
                                    item: G.SkillLevelTab,
                                    action: Y.Click,
                                    parentScreen: X.SetupView,
                                    info: String(r),
                                }));
                        }, [t, r, a, c]),
                        d = (0, s.useCallback)(() => De.$.playHighlight(), []);
                    return o().createElement(
                        'div',
                        { className: l()($t.base, e && $t.base__active, u), onClick: _, onMouseEnter: d },
                        o().createElement('div', { className: $t.label }, i),
                        n !== zt.None && o().createElement('div', { className: l()($t.arrow, $t[`arrow__${n}`]) }),
                    );
                });
                var Gt = n(4179),
                    Yt = n(3415),
                    jt = n(8045);
                const Ut = 'ExtendedText_base_71',
                    Vt = 'ExtendedText_base__zeroPadding_25',
                    Zt = 'ExtendedText_base__isTruncationAvailable_5b',
                    qt = 'ExtendedText_truncated_97',
                    Kt = 'ExtendedText_truncated__hide_31',
                    Jt = 'ExtendedText_unTruncated_b8';
                let Qt, en, tn;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Qt || (Qt = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(en || (en = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(tn || (tn = {})));
                const nn = { [tn.NBSP]: Qt.NoBreakSymbol, [tn.ZWNBSP]: Qt.NoBreakSymbol, [tn.NEW_LINE]: Qt.LineBreak },
                    an = {
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
                    un = 'renderers_noBreakWrapper_10',
                    rn = 'renderers_lineBreak_b5',
                    sn = 'renderers_newLine_bd',
                    on = (e) => ({ color: `#${e}` }),
                    ln = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? an[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: an[a] },
                                      e,
                                  )
                                : o().createElement('span', { key: n, 'data-block-type': t.blockType, style: on(a) }, e)
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType }, e);
                    },
                    cn = {
                        [Qt.Word]: ln,
                        [Qt.NoBreakSymbol]: ln,
                        [Qt.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [Qt.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Qt.LineBreak, className: rn }),
                        [Qt.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Qt.NewLine, className: sn }, e),
                        [Qt.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Qt.NoBreakWrapper, className: un },
                                e,
                            ),
                    },
                    _n = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((u, r) => {
                                const s = `${n}_${r}`;
                                if (((e) => void 0 !== e.childList)(u)) {
                                    const e = u,
                                        t = e.blockType,
                                        n = _n(e, cn[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [u], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    dn = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            u = cn[a],
                                            r = _n(e, u, t);
                                        return (
                                            a === Qt.NoBreakWrapper
                                                ? n.push(u({ elementList: r, textBlock: e, key: `${t}` }))
                                                : n.push(...r),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    mn = (e, t, n, a) => {
                        let u = t.exec(e),
                            r = 0;
                        for (; u; ) (r !== u.index && n(e.slice(r, u.index)), a(u), (r = t.lastIndex), (u = t.exec(e)));
                        r !== e.length && n(e.slice(r));
                    },
                    pn = (e) => {
                        const t = /[\s\u002d]/g;
                        let n = t.exec(e);
                        if (!n) return [e];
                        const a = [];
                        let u = 0;
                        for (; n; ) (a.push(e.slice(u, t.lastIndex)), (u = t.lastIndex), (n = t.exec(e)));
                        return (u !== e.length && a.push(e.slice(u)), a);
                    },
                    En = (e, t = '') => {
                        const n = [];
                        return (
                            mn(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Qt.Word, colorTag: t, childList: pn(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        u = nn[a.charAt(0)];
                                    u === Qt.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Qt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Qt.NewLine,
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
                    bn = (e, t, n = '') => {
                        const a = [];
                        return (
                            mn(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...En(e, n));
                                },
                                (e) => {
                                    const u = e[1],
                                        r = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...En(String(r), n))
                                        : a.push({ blockType: Qt.Binding, colorTag: n, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    hn = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Qt.NoBreakWrapper) (e.childList.push(a), n.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Qt.NoBreakWrapper, colorTag: '', childList: [t, a] }));
                        }
                        return (t.childList.length > 0 && n.push(t), n);
                    },
                    gn = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Qt.NoBreakSymbol
                                        ? ((n = !0), t.push(...hn(t.pop(), e)))
                                        : (n ? t.push(...hn(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    mn(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...bn(e, t));
                                        },
                                        (e) => {
                                            n.push(...bn(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, M.Eg)((0, M.z4)(e)), t),
                        );
                        return dn(n);
                    },
                    fn = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    vn = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Cn = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = vn(e, t),
                            u = e.textContent.length,
                            r = e.offsetWidth / u,
                            s = Math.ceil(a / r);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / r);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const o = Math.max(n + s, 0);
                        return u < o ? [!1, 0] : [!0, o];
                    },
                    An = (e, t, n, a, u, r) => {
                        let s = -1,
                            i = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Qt.LineBreak || c === Qt.NewLine || c === Qt.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Cn(n, a, u),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (u -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + r,
                                    p = t[l];
                                ((i = o().cloneElement(p, p.props, m)), (s = l));
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = An(e, d, e.length - 1, a, u, r),
                                    p = m[0],
                                    E = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    ((i = o().cloneElement(c, c.props, e, E)), (s = l));
                                    break;
                                }
                                u -= _.length;
                            }
                        }
                        return [s, i];
                    },
                    Dn = (e, t, n, a = '...') => {
                        const u = [...t],
                            r = e.current;
                        if (!r) return [u, !1];
                        const s = n.height,
                            o = n.width,
                            i = r.lastElementChild;
                        if (!fn(i, s) && vn(i, o) <= 0) return [u, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const u = n + Math.ceil(0.5 * (a - n));
                                    fn(e[u], t) ? (a = u - 1) : (n = u + 1);
                                }
                                return n - 1;
                            })(l, s);
                        if (c < 0) return [u, !1];
                        const _ = An(l, u, c, o, a.length, a),
                            d = _[0],
                            m = _[1];
                        return (m && (u.splice(d, 1, m), u.splice(d + 1)), [u, !0]);
                    },
                    Fn = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: u = !1,
                            isTruncationAvailable: r = !1,
                            targetId: i,
                            justifyContent: c = en.FlexStart,
                            alignContent: _ = en.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, s.useRef)(null),
                                p = (0, s.useRef)({ height: 0, width: 0 }),
                                E = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                b = E[0],
                                h = E[1],
                                g = (0, s.useMemo)(() => gn(e, a), [a, e]),
                                f = (0, s.useMemo)(() => {
                                    if (u && b.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [a, u, i, e, b.isTruncated]),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        ((p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height));
                                        const t = Dn(m, g, p.current, d),
                                            a = t[0],
                                            u = t[1];
                                        (h({ elementList: a, isTruncated: u, isTruncateFinished: !0 }), n && n(u));
                                    },
                                    [n, d, g],
                                ),
                                C = (0, s.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, s.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, s.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new jt.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(m, v, r),
                                o().createElement(
                                    'div',
                                    { className: l()(Ut, t, Vt, r && Zt), style: C },
                                    o().createElement('div', { className: Jt, ref: m }, g),
                                    o().createElement(
                                        Yt.l,
                                        { tooltipArgs: f },
                                        o().createElement(
                                            'div',
                                            { className: l()(qt, !b.isTruncateFinished && r && Kt), style: C },
                                            b.isTruncateFinished && r ? b.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Bn = {
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
                    yn = (0, s.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            u = Number(t.value),
                            r = Number(n.value),
                            i = (0, s.useMemo)(() => u < r, [u, r]),
                            c = (0, s.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(u)) {
                                    const e = a - u;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [u, a]),
                            _ = (0, s.useMemo)(() => {
                                if (!c) return {};
                                const t = (0, M.uF)(e.valueTemplate, {
                                    sign: c < 0 ? '-' : '+',
                                    value: Gt.Z5.getRealFormat(Math.abs(c), Gt.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: Bn.diffValue }, t) };
                            }, [c, e.valueTemplate]),
                            d = (0, s.useMemo)(
                                () => ({
                                    sign: t.sign,
                                    value: isNaN(u) ? t.value : Gt.Z5.getNumberFormat(u, Gt.B3.GOLD),
                                }),
                                [t, u],
                            ),
                            m = (0, s.useMemo)(() => (i ? { width: ((100 * u) / r).toString() + '%' } : {}), [i, u, r]),
                            p = (0, s.useMemo)(
                                () => (i ? { width: ((100 * (a - u)) / r).toString() + '%' } : {}),
                                [i, u, a, r],
                            );
                        return o().createElement(
                            'div',
                            { className: Bn.base },
                            o().createElement(
                                'div',
                                { className: Bn.valueWrapper },
                                c &&
                                    o().createElement(Fn, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: Bn.diff,
                                        alignContent: en.FlexEnd,
                                    }),
                                o().createElement(Fn, { text: e.valueTemplate, binding: d, classMix: Bn.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: Bn.labelWrapper },
                                o().createElement('div', { className: Bn.label }, t.name),
                            ),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: Bn.progress },
                                    o().createElement('div', { className: Bn.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: Bn.progressValue, style: m },
                                        o().createElement('div', { className: Bn.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: Bn.progressDelta, style: p }),
                                    o().createElement('div', { className: l()(Bn.progressDot, Bn.progressDot__end) }),
                                ),
                        );
                    }),
                    wn = 'Levels_base_a9',
                    Sn = 'Levels_tabsWrapper_a0',
                    kn = 'Levels_tabsBorder_cf',
                    Tn = 'Levels_tabsBorder__top_8f',
                    xn = 'Levels_tabsBorder__bottom_82',
                    Ln = 'Levels_tabsLabel_60',
                    Mn = 'Levels_tabs_8f',
                    Nn = 'Levels_tab_c3',
                    Rn = 'Levels_caret_7e',
                    In = 'Levels_params_d6',
                    Pn = 'Levels_infoIcon_68',
                    On = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            u = n[0].value.params,
                            r = n[n.length - 1].value.params,
                            i = n[t].value,
                            c = (0, s.useMemo)(() => ({ left: 80 * t + 'rem' }), [t]),
                            _ = (0, s.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: wn },
                            o().createElement(
                                'div',
                                { className: Sn },
                                o().createElement('div', { className: l()(kn, Tn) }),
                                o().createElement('div', { className: l()(kn, xn) }),
                                o().createElement(Wt, { item: G.AbilityLevelsTooltip, className: Pn }),
                                o().createElement(
                                    'div',
                                    { className: Ln },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Mn },
                                    n.map(({ value: e }, n) => {
                                        const u = n < t ? zt.Active : zt.Default;
                                        return o().createElement(Xt, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? u : zt.None,
                                            onClick: _,
                                            classMix: Nn,
                                        });
                                    }),
                                    o().createElement('div', { className: Rn, style: c }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: In },
                                i.params.map(({ value: e }, t) =>
                                    o().createElement(yn, {
                                        key: e.id,
                                        firstParam: u[t].value,
                                        lastParam: r[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Hn = (0, s.memo)(function ({ className: e }) {
                        const t = Ze(),
                            n = (0, T.t)('model.vehicleInfo'),
                            a = (0, T.t)(`${se}`).setCurrentSlotDetailsLevel,
                            u = (0, T.t)(`${se}.details`),
                            r = u.name,
                            i = u.category,
                            c = u.selectedLevel,
                            _ = u.description,
                            d = u.levelInfos,
                            m = u.isActivated,
                            p = (0, s.useCallback)((e) => a({ level: e }), [a]);
                        return o().createElement(
                            'div',
                            { className: l()(Dt, e) },
                            o().createElement(
                                mt.Vertical.Area.Default,
                                { api: t },
                                o().createElement(
                                    'div',
                                    { className: Ft },
                                    o().createElement('div', { className: Bt }, o().createElement(At, n)),
                                    o().createElement(
                                        'div',
                                        { className: yt },
                                        o().createElement('div', { className: wt }, r),
                                        o().createElement(It, { category: i, className: St }),
                                        o().createElement('div', { className: kt }, _),
                                    ),
                                    o().createElement(On, { onLevelChanged: p, selectedLevel: c, levelInfos: d }),
                                    o().createElement(
                                        'div',
                                        { className: l()(Tt, m && xt) },
                                        m
                                            ? R.strings.tank_setup.abilities.details.status.unlocked()
                                            : R.strings.tank_setup.abilities.details.status.locked(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Wn = 'BattleAbilitiesSetup_aside_bd';
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
                function $n() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                var zn = n(570),
                    Xn = n(1091);
                const Gn = 'ScrollableCards_base_e0',
                    Yn = 'ScrollableCards_scroll_4b',
                    jn = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const u = (0, s.useState)(!1),
                            r = u[0],
                            i = u[1],
                            l = (0, s.useRef)({}),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = (0, s.useRef)(!1),
                            m = (0, s.useRef)(''),
                            p = (0, Xn.Z)(c);
                        (0, s.useEffect)(
                            () => () => {
                                d.current = !1;
                            },
                            [],
                        );
                        const E = (0, s.useCallback)(() => {
                                d.current && i(!0);
                            }, []),
                            b = (0, s.useCallback)(() => {
                                d.current && i(!1);
                            }, []),
                            h = (0, s.useCallback)(() => {
                                const e = _.current,
                                    t = c.current,
                                    n = l.current;
                                if (e && n && t) {
                                    const a = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    n.setScrollTop(a, void 0, E);
                                }
                            }, [E]);
                        ((0, s.useEffect)(() => {
                            (0, S.v)(() => {
                                p &&
                                    (m.current === n
                                        ? h()
                                        : ((m.current = n),
                                          $n().then(() => {
                                              (h(), d.current || (d.current = !0));
                                          })));
                            });
                        }, [p, n, h, t]),
                            (0, s.useEffect)(() => {
                                d.current && l.current.setScrollTopImmediately(0);
                            }, [a]));
                        const g = {
                                currentCardRef: _,
                                scrollWrapperRef: c,
                                isFinalAnimationRunning: r,
                                onFinalAnimationDone: b,
                            },
                            f = (0, s.cloneElement)(e, g);
                        return o().createElement(
                            'div',
                            { className: Gn },
                            o().createElement(
                                'div',
                                { className: Yn, ref: c },
                                o().createElement(zn.x, { key: n, scrollAreaContainer: l.current }, f),
                            ),
                        );
                    };
                var Un = n(2344);
                const Vn = 'select',
                    Zn = 'undo',
                    qn = 'cancel',
                    Kn = 'swap',
                    Jn = 'demount',
                    Qn = 'demount_from_setup',
                    ea = 'demount_from_setups',
                    ta = 'destroy',
                    na = 'upgrade',
                    aa = 'add_one';
                var ua = n(1363),
                    ra = n(1641);
                const sa = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: u,
                        isEnabled: r = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, s.useCallback)(() => {
                                ((0, Gt.c9)(Gt.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: u,
                                }),
                                    De.$.playYes());
                            }, [u, t, n, a]),
                            l = (0, s.useCallback)(() => {
                                (0, Gt.c9)(Gt.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, s.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === ra.t.RIGHT)(e) && i());
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
                    oa = ['children'];
                function ia() {
                    return (
                        (ia =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ia.apply(this, arguments)
                    );
                }
                const la = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, oa);
                    return o().createElement(
                        sa,
                        ia({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var ca = n(7902);
                const _a = [
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
                function da(e) {
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
                const ma = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Gt.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    pa = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            u = e.onMouseEnter,
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
                            b = void 0 === E || E,
                            h = e.onShow,
                            g = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, _a);
                        const v = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, s.useMemo)(() => (0, ca.F)(), []).resId,
                            A = (0, s.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (ma(n, p, { isMouseEvent: !0, on: !0, arguments: da(a) }, C),
                                    h && h(),
                                    (v.current.isVisible = !0));
                            }, [n, p, a, C, h]),
                            D = (0, s.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        ma(n, p, { on: !1 }, C),
                                        v.current.isVisible && g && g(),
                                        (v.current.isVisible = !1));
                                }
                            }, [n, p, C, g]),
                            F = (0, s.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = v.current.hideTimerId;
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
                        return b
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((B = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(A, c ? 100 : 400)),
                                                      u && u(e),
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
                                      f,
                                  ),
                              )
                            : t;
                        var B;
                    },
                    Ea = ['children'];
                function ba() {
                    return (
                        (ba =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ba.apply(this, arguments)
                    );
                }
                const ha = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, Ea);
                    return o().createElement(
                        pa,
                        ba(
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
                var ga = n(5282);
                const fa = {
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
                    va = 'Warning_base_4c',
                    Ca = 'Warning_glow_79',
                    Aa = 'Warning_line_df',
                    Da = 'Warning_icon_24',
                    Fa = ({ parentId: e, reason: t, isCritical: n, lockedByDevice: a }) => {
                        const u = (0, s.useMemo)(() => ({ reason: t, isCritical: n, lockedByDevice: a }), [t, n, a]);
                        return o().createElement(
                            'div',
                            { id: e, className: va },
                            o().createElement('div', { className: Ca }),
                            o().createElement('div', { className: Aa }),
                            o().createElement(
                                me.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: u,
                                    isEnabled: u.reason !== Ba,
                                },
                                o().createElement('div', { className: Da }),
                            ),
                        );
                    },
                    Ba = '',
                    ya = ({
                        parentId: e,
                        mediaSize: t,
                        name: n,
                        tooltipArgs: a,
                        contextMenuArgs: u,
                        imageSource: r,
                        overlayType: i,
                        highlightType: c,
                        isModernized: _,
                        level: d,
                        isDisabled: m,
                        isCurrent: p,
                        isActive: E,
                        isLocked: b,
                        isClickable: h = !0,
                        details: g,
                        options: f,
                        actions: v,
                        specializations: C,
                        extraImages: A,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: B,
                        onTooltipShow: y,
                        onTooltipHide: w,
                        lockReason: S,
                        lockedByDevice: k,
                    }) => {
                        const T = (0, s.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            L = T[0],
                            M = T[1],
                            N = (0, s.useState)(!1),
                            I = N[0],
                            P = N[1],
                            O = (0, s.useCallback)(() => {
                                (!L.isActionsHovered && De.$.playHighlight(),
                                    M({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && P(!0));
                            }, [L.isActionsHovered, F]),
                            H = (0, s.useCallback)(() => {
                                F && P(!1);
                            }, [F]),
                            W = (0, s.useCallback)(() => {
                                M({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            $ = (0, s.useCallback)(() => {
                                M({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            z = h && !m,
                            X = (0, s.useCallback)(() => {
                                z && D && (De.$.playClick(), D());
                            }, [D, z]),
                            G = L.isBaseHovered || L.isActionsHovered,
                            Y = l()(
                                fa.content,
                                fa[`content__${t}`],
                                G && h && !m && fa.content__hovered,
                                !G && fa.content__out,
                                E && fa.content__installed,
                                p && fa.content__current,
                                m && fa.content__disabled,
                                !z && fa.content__nonclickable,
                            ),
                            j = (0, s.useMemo)(() => {
                                let e = o().createElement('div', {
                                    onMouseEnter: O,
                                    onMouseLeave: $,
                                    className: fa.hover,
                                    onClick: X,
                                });
                                return (
                                    a &&
                                        (e = o().createElement(
                                            ha,
                                            { args: a, onShow: y, onHide: w, isEnabled: S === Ba },
                                            e,
                                        )),
                                    u && (e = o().createElement(la, { args: u }, e)),
                                    e
                                );
                            }, [O, $, X, a, u, y, w, S]),
                            U = (0, s.useMemo)(() => {
                                if (!n) return null;
                                const e = l()(fa.name, m && fa.name__disabled);
                                return o().createElement(
                                    'div',
                                    { className: e },
                                    o().createElement(ga.n, {
                                        mediaSize: t,
                                        linesCount: 3,
                                        blocks: (0, ga.D)(systemLocale.toUpperCase(n)),
                                    }),
                                );
                            }, [t, n, m]),
                            V = (0, s.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]),
                            Z =
                                t === x.cJ.Large || t === x.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            q = (0, s.useMemo)(() => {
                                let e;
                                return (
                                    i && (e = _ ? Z.$dyn(`${i}_${d}_overlay`) : Z.$dyn(`${i}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [Z, i, _, d]),
                            K = (0, s.useMemo)(() => {
                                let e;
                                return (c && (e = Z.$dyn(`${c}_highlight`)), e && { backgroundImage: `url(${e})` });
                            }, [Z, c]),
                            J = l()(fa.options, m && fa.options__disabled),
                            Q = l()(fa.overlay, fa[`overlay__${i}`]),
                            ee = l()(fa.highlight, fa[`highlight__${c}`]),
                            te = (0, s.useMemo)(() => {
                                const e = (t === x.cJ.Large || t === x.cJ.Huge ? x.cJ.Large : x.cJ.Medium) + '_' + B,
                                    n = R.images.gui.maps.icons.specialization.$dyn(e);
                                return n && { backgroundImage: `url(${n})` };
                            }, [B, t]),
                            ne = l()(fa.category, fa[`category__${t}`]);
                        return o().createElement(
                            ha,
                            { args: a, onShow: y, onHide: w },
                            o().createElement(
                                'div',
                                { className: fa.base },
                                o().createElement(
                                    'div',
                                    { id: e, className: Y, onMouseLeave: H },
                                    K &&
                                        o().createElement(
                                            'div',
                                            { className: fa.types },
                                            o().createElement('div', { className: ee, style: K }),
                                        ),
                                    o().createElement('div', { className: fa.image, style: V }, A),
                                    m && o().createElement('div', { className: fa.disabled }),
                                    te && o().createElement('span', { className: ne, style: te }),
                                    q &&
                                        o().createElement(
                                            'div',
                                            { className: fa.types },
                                            o().createElement('div', { className: Q, style: q }),
                                        ),
                                    C && o().createElement('div', { className: fa.specialization }, C),
                                    U,
                                    g && o().createElement('div', { className: fa.details }, g),
                                    o().createElement('div', { className: J }, f),
                                    j,
                                    o().createElement(
                                        'div',
                                        { onMouseEnter: W, onMouseLeave: $, className: fa.actions },
                                        F && v
                                            ? (0, s.cloneElement)(v, Object.assign({}, v.props, { isMouseOverCard: I }))
                                            : v,
                                    ),
                                ),
                                b &&
                                    o().createElement(
                                        'div',
                                        { className: fa.locked },
                                        o().createElement(Fa, {
                                            reason: S,
                                            isCritical: m,
                                            parentId: e,
                                            lockedByDevice: k,
                                        }),
                                    ),
                            ),
                        );
                    };
                var wa = n(3934),
                    Sa = n(8401);
                const ka = 'Availability_base_51',
                    Ta = () => o().createElement('div', { className: ka }),
                    xa = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    La = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: u = !0 }) => {
                            const r = l()(
                                xa.base,
                                xa['base__' + (u ? 'shown' : 'hidden')],
                                (n || e || (a && 0 === e)) && xa.base__visually,
                            );
                            let s = null;
                            return (
                                (s = n
                                    ? o().createElement(Ta, null)
                                    : e || (a && 0 === e)
                                      ? o().createElement(wa.K, { itemsInStorage: e })
                                      : t && o().createElement(Sa.t, t)),
                                o().createElement('div', { className: r }, s)
                            );
                        },
                    ),
                    Ma = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var Na = n(8750);
                const Ra = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Ia = ({ level: e }) => {
                        const t = (0, x.GS)();
                        if (!e) return null;
                        const n = l()(Ra.base, t && Ra[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: n },
                            o().createElement(Na.a, {
                                type: Na.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Pa = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: u,
                            onSlotAction: r,
                            intCD: i,
                            level: c,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: E,
                            cost: b,
                        }) => {
                            const h = (0, x.GS)(),
                                g = t > -1,
                                f = `${i}-ability`,
                                v = (0, s.useMemo)(() => ({ intCD: i, slotType: k.YN, fieldType: 0 }), [i]),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        r({ actionType: e, intCD: i, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [r, i, n],
                                ),
                                A = (0, s.useCallback)(() => {
                                    C(Vn);
                                }, [C]),
                                D = (0, s.useContext)(_u),
                                F = (0, s.useMemo)(() => {
                                    const e = l()(Ma.bonuses, h && Ma[`base__${h}`]),
                                        t = D >= b ? _e.Brown : _e.Red;
                                    return o().createElement(
                                        'div',
                                        { className: Ma.base },
                                        o().createElement(ua._, {
                                            parentId: f,
                                            mediaSize: h,
                                            classMix: e,
                                            classColorMix: Ma.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(de, {
                                                value: b,
                                                theme: t,
                                                size: ce.Small,
                                                className: Ma.points,
                                            }),
                                    );
                                }, [h, _, f, m, b, D]),
                                B =
                                    ((0, s.useMemo)(() => o().createElement(Ia, { level: c }), [c]),
                                    (0, s.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(u),
                                        [u],
                                    ));
                            return o().createElement(ya, {
                                parentId: f,
                                mediaSize: h,
                                name: e,
                                tooltipArgs: v,
                                imageSource: B,
                                isCurrent: a,
                                isActive: g,
                                details: F,
                                isDisabled: m && D < b,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: A,
                                options: o().createElement(La, { show: E, isMounted: E }),
                            });
                        },
                    ),
                    Oa = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Ha() {
                    return (
                        (Ha =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ha.apply(this, arguments)
                    );
                }
                const Wa = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = (0, Un.tT)(se),
                            u = a.categoriesOrder,
                            r = a.onSlotAction,
                            i = a.slots,
                            c = (0, Un.tT)('model.ammunitionPanel'),
                            _ = c.onSectionSelect,
                            d = c.selectedSection,
                            m = (0, x.GS)(),
                            p = u.map(({ value: e }) => e),
                            E = i.map(({ value: e }) => e),
                            b = (0, s.useMemo)(() => {
                                if (m === x.cJ.Tiny)
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
                                    p.map((n) => {
                                        const a = e[n].shift();
                                        a && t.push(a);
                                    });
                                } while (t.length < E.length);
                                return t;
                            }, [E, p, m]),
                            h = (0, s.useCallback)(
                                (e) => {
                                    (_({ selectedSlot: e.currentSlotId, selectedSection: d }), r(e));
                                },
                                [_, r, d],
                            ),
                            g = b.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    u = a > -1 && t === a;
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: u ? e : null, className: l()(Oa.card, m && Oa[`card__${m}`]) },
                                    o().createElement(Pa, Ha({}, n, { isCurrent: u, onSlotAction: h })),
                                );
                            }),
                            f = l()(Oa.base, m && Oa[`base__${m}`], n && Oa.base__disabled);
                        return o().createElement('div', { className: f }, g);
                    },
                    $a = 'BattleAbilitiesNoSelected_base_06',
                    za = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Xa = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    Ga = 'BattleAbilitiesNoSelected_title_20',
                    Ya = 'BattleAbilitiesNoSelected_title__small_65',
                    ja = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Ua = 'BattleAbilitiesNoSelected_button_bf',
                    Va = R.strings.tank_setup.abilities.noSelected,
                    Za = () => {
                        const e = (0, x.GS)(),
                            t = (0, Un.tT)(se, Un.DA.None).showInfoPage,
                            n = (0, s.useMemo)(() => e === x.cJ.Small || e === x.cJ.Tiny, [e]),
                            a = (0, s.useMemo)(() => (e === x.cJ.Tiny ? ie.qE.small : ie.qE.medium), [e]),
                            u = (0, s.useCallback)(() => t(), [t]),
                            r = l()(za, n && Xa),
                            i = l()(Ga, n && Ya);
                        return o().createElement(
                            'div',
                            { className: $a, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: r }),
                            o().createElement('div', { className: i }, Va.title()),
                            o().createElement('div', { className: ja }, Va.subTitle()),
                            o().createElement(ie.u5, { size: a, mixClass: Ua, onClick: u }, Va.toReserves()),
                        );
                    },
                    qa = 'Content_base_d8',
                    Ka = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: qa },
                            e
                                ? o().createElement(
                                      jn,
                                      { selectedSlotId: t },
                                      o().createElement(Wa, { selectedSlot: t }),
                                  )
                                : o().createElement(Za, null),
                        );
                    }),
                    Ja = {
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
                        headerHolder: 'Header_headerHolder_db',
                        tabsHolder: 'Header_tabsHolder_8e',
                    },
                    Qa = ({ title: e, content: t, tabs: n }) => {
                        const a = (0, x.GS)(),
                            u = l()(Ja.base, a && Ja[`base__${a}`]),
                            r = l()(Ja.tabs, a && Ja[`tabs__${a}`]),
                            s = l()(Ja.title, a && Ja[`title__${a}`]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: s }, e),
                                n && o().createElement('div', { className: r }, n),
                            ),
                            t && t,
                        );
                    };
                var eu = n(8089);
                const tu = {
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let nu;
                !(function (e) {
                    ((e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon'));
                })(nu || (nu = {}));
                const au = o().memo(function ({ theme: e, className: t }) {
                        const n = (0, Un.tT)(se).showInfoPage,
                            a = (0, s.useCallback)(() => n(), [n]),
                            u = (0, s.useMemo)(() => ({ caption: l()(e === nu.OnlyIcon && tu.hidden) }), [e]);
                        return o().createElement(
                            'div',
                            { className: l()(tu.base, tu[`base__${e}`], t) },
                            o().createElement(eu.A, {
                                caption: e === nu.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                                type: 'info',
                                side: 'left',
                                onClick: a,
                                classNames: u,
                            }),
                        );
                    }),
                    uu = 'Header_base_aa',
                    ru = 'Header_points_d5',
                    su = 'Header_content_2c',
                    ou = 'Header_textWrapper_63',
                    iu = 'Header_text_dc',
                    lu = 'Header_infoButton_5e',
                    cu = o().memo(function () {
                        const e = (0, s.useContext)(_u),
                            t = (0, s.useMemo)(
                                () => ({
                                    points: o().createElement(de, {
                                        theme: _e.Brown,
                                        size: ce.Normal,
                                        value: e,
                                        className: ru,
                                    }),
                                }),
                                [e],
                            ),
                            n = Pt(G.SkillPointsTooltip, X.SetupView),
                            a = n[0],
                            u = n[1];
                        return o().createElement(
                            'div',
                            { className: uu },
                            o().createElement(Qa, {
                                title: R.strings.tank_setup.section.battleAbilities(),
                                content: o().createElement(
                                    'div',
                                    { className: su },
                                    o().createElement(au, { theme: nu.OnlyIcon, className: lu }),
                                    o().createElement(
                                        P.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: a,
                                            onMouseLeave: u,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: ou },
                                            o().createElement(Fn, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: t,
                                                classMix: iu,
                                            }),
                                        ),
                                    ),
                                ),
                            }),
                        );
                    }),
                    _u = o().createContext(0),
                    du = () => {
                        const e = (0, T.t)(se),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = (0, T.t)('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            _u.Provider,
                            { value: n },
                            o().createElement(x.Ar, {
                                header: o().createElement(cu, null),
                                content: o().createElement(Ka, { isLocked: t, selectedSlot: a }),
                                aside: o().createElement(Hn, { className: Wn }),
                                footer: o().createElement(ge, null),
                            }),
                        );
                    };
                let mu;
                !(function (e) {
                    ((e.Economic = 'economic'), (e.Crew = 'crew'), (e.OptDevice = 'optDevice'));
                })(mu || (mu = {}));
                var pu = n(5851),
                    Eu = n(8772);
                const bu = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                        tabs: 'CompareHeader_tabs_15',
                        filters: 'CompareHeader_filters_80',
                    },
                    hu = ({ type: e, tabs: t, content: n }) => {
                        const a = (0, w.m)('model', !1).vehicleInfo,
                            u = (0, x.GS)(),
                            r = l()(bu.base, bu[`base__${u}`]);
                        return o().createElement(
                            'div',
                            { className: r },
                            o().createElement(
                                'div',
                                { className: bu.title },
                                (0, M.WU)(R.strings.tank_setup.compare.section.title.$dyn(e), { name: a.vehicleName }),
                            ),
                            o().createElement(
                                'div',
                                { className: bu.description },
                                R.strings.tank_setup.compare.section.description.$dyn(e),
                            ),
                            o().createElement(
                                'div',
                                { className: bu.controlsContainer },
                                o().createElement('div', { className: bu.tabs }, t),
                                o().createElement('div', { className: bu.filters }, n),
                            ),
                        );
                    },
                    gu = {
                        base__standalone: 'InfoButton_base__standalone_a0',
                        base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                        hidden: 'InfoButton_hidden_e0',
                    };
                let fu;
                !(function (e) {
                    ((e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon'));
                })(fu || (fu = {}));
                const vu = o().memo(function ({ theme: e, className: t }) {
                    const n = (0, Un.tT)('model.tankSetup.battleBoostersSetup').showInfoPage,
                        a = (0, s.useCallback)(() => n({ tabName: mu.Economic }), [n]),
                        u = (0, s.useMemo)(() => ({ caption: l()(e === fu.OnlyIcon && gu.hidden) }), [e]);
                    return o().createElement(
                        'div',
                        { className: l()(gu.base, gu[`base__${e}`], t) },
                        o().createElement(eu.A, {
                            caption: e === fu.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                            type: 'info',
                            side: 'left',
                            onClick: a,
                            classNames: u,
                        }),
                    );
                });
                var Cu = n(9887),
                    Au = n.n(Cu);
                const Du = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Fu = (e) => e.includes('_') && ((e) => Du.includes(e))(e.split('_').at(-1)),
                    Bu = [m.ExtraLarge, m.Large, m.Medium, m.Small, m.ExtraSmall],
                    yu = (e, t) =>
                        Object.keys(e).reduce((n, a) => {
                            if (a in n) return n;
                            if (Fu(a)) {
                                const u = a.split('_').slice(0, -1).join('_');
                                if (u in n) return n;
                                const r = Bu.indexOf(t),
                                    s = (-1 !== r ? Du.slice(r) : [])
                                        .map((e) => u + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return ((n[u] = void 0 !== o ? o : e[u]), n);
                            }
                            const u = e[a];
                            return (
                                void 0 === u ||
                                    ((e, t) => Du.some((n) => void 0 !== t[`${e}_${n}`]))(a, e) ||
                                    (n[a] = u),
                                n
                            );
                        }, {}),
                    wu = (e, t = yu) => {
                        const n = (
                            (e, t = yu) =>
                            (n) => {
                                const a = b().mediaSize,
                                    u = (0, s.useMemo)(() => t(n, a), [n, a]);
                                return o().createElement(e, u);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => Fu(e) && void 0 !== t[e])
                                ? o().createElement(n, t)
                                : o().createElement(e, t),
                        );
                    },
                    Su = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    ku = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                Object.keys(Au());
                const xu = {
                        XL: { mt: Su.mt__XL, mr: Su.mr__XL, mb: Su.mb__XL, ml: Su.ml__XL },
                        LG: { mt: Su.mt__LG, mr: Su.mr__LG, mb: Su.mb__LG, ml: Su.ml__LG },
                        MDp: { mt: Su.mt__MDp, mr: Su.mr__MDp, mb: Su.mb__MDp, ml: Su.ml__MDp },
                        MD: { mt: Su.mt__MD, mr: Su.mr__MD, mb: Su.mb__MD, ml: Su.ml__MD },
                        SMp: { mt: Su.mt__SMp, mr: Su.mr__SMp, mb: Su.mb__SMp, ml: Su.ml__SMp },
                        SM: { mt: Su.mt__SM, mr: Su.mr__SM, mb: Su.mb__SM, ml: Su.ml__SM },
                        XS: { mt: Su.mt__XS, mr: Su.mr__XS, mb: Su.mb__XS, ml: Su.ml__XS },
                    },
                    Lu = (Object.keys(xu), ['mt', 'mr', 'mb', 'ml']),
                    Mu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Nu = wu((e) => {
                        let t = e.className,
                            n = e.width,
                            a = e.height,
                            u = e.m,
                            r = e.mt,
                            i = void 0 === r ? u : r,
                            c = e.mr,
                            _ = void 0 === c ? u : c,
                            d = e.mb,
                            m = void 0 === d ? u : d,
                            p = e.ml,
                            E = void 0 === p ? u : p,
                            b = e.column,
                            h = e.row,
                            g = e.flexDirection,
                            f = void 0 === g ? (b ? 'column' : h && 'row') || void 0 : g,
                            v = e.flexStart,
                            C = e.center,
                            A = e.flexEnd,
                            D = e.spaceBetween,
                            F = e.spaceAround,
                            B = e.justifyContent,
                            y =
                                void 0 === B
                                    ? (v ? 'flex-start' : C && 'center') ||
                                      (A && 'flex-end') ||
                                      (D && 'space-between') ||
                                      (F && 'space-around') ||
                                      void 0
                                    : B,
                            w = e.alignItems,
                            S = void 0 === w ? (v ? 'flex-start' : C && 'center') || (A && 'flex-end') || void 0 : w,
                            k = e.alignSelf,
                            T = e.wrap,
                            x = e.flexWrap,
                            L = void 0 === x ? (T ? 'wrap' : void 0) : x,
                            M = e.grow,
                            N = e.shrink,
                            R = e.flex,
                            I = void 0 === R ? (M || N ? `${M ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : R,
                            P = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, ku);
                        const W = (0, s.useMemo)(() => {
                                const e = { mt: i, mr: _, mb: m, ml: E },
                                    t = ((e) =>
                                        Lu.reduce((t, n) => {
                                            const a = e[n];
                                            return a && 'number' != typeof a ? t.concat(xu[!0 === a ? 'MD' : a][n]) : t;
                                        }, []))(e),
                                    u = ((e) =>
                                        Lu.reduce((t, n) => {
                                            const a = e[n];
                                            return ('number' == typeof a && (t[Mu[n]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, u, {
                                        width: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: I,
                                        alignSelf: k,
                                        display: f || S ? 'flex' : void 0,
                                        flexDirection: f,
                                        flexWrap: L,
                                        justifyContent: y,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [n, a, i, _, m, E, P, I, k, f, L, y, S]),
                            $ = W.computedStyle,
                            z = W.computedClassNames;
                        return o().createElement('div', Tu({ className: l()(Su.base, ...z, t), style: $ }, H), O);
                    });
                var Ru = n(3532),
                    Iu = n.n(Ru);
                const Pu = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Ou = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                Object.keys(Au());
                const Wu = Object.keys(Iu()),
                    $u = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    zu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Xu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Gu = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Yu =
                        (Object.keys(Gu),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': $u,
                            'heading-H36': $u,
                            'heading-H28': zu,
                            'heading-H24': zu,
                            'heading-H24R': zu,
                            'heading-H22': zu,
                            'heading-H20R': zu,
                            'heading-H18': zu,
                            'heading-H15': Xu,
                            'heading-H14': Xu,
                            'paragraph-P24': zu,
                            'paragraph-P18': zu,
                            'paragraph-P16': zu,
                            'paragraph-P14': Xu,
                            'paragraph-P12': Xu,
                            'paragraph-P10': Xu,
                        }),
                    ju =
                        (Object.keys(Yu),
                        (e) =>
                            e
                                ? ((e) => Wu.includes(e))(e)
                                    ? { colorClassName: Pu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Uu = wu((e) => {
                        let t = e.text,
                            n = e.variant,
                            a = e.className,
                            u = e.color,
                            r = e.m,
                            i = e.mt,
                            c = void 0 === i ? r : i,
                            _ = e.mr,
                            d = void 0 === _ ? r : _,
                            m = e.mb,
                            p = void 0 === m ? r : m,
                            E = e.ml,
                            b = void 0 === E ? r : E,
                            h = e.style,
                            g = e.format,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, Ou);
                        const v = (0, s.useMemo)(() => {
                                const e = ju(u),
                                    t = e.colorClassName,
                                    n = e.colorStyle,
                                    a = void 0 === n ? {} : n;
                                return { computedStyle: Object.assign({}, h, a), colorClassName: t };
                            }, [h, u]),
                            C = v.computedStyle,
                            A = v.colorClassName;
                        return o().createElement(
                            Nu,
                            Hu(
                                {
                                    className: l()(Pu.base, n && Pu[n], A, a),
                                    style: C,
                                    mt: !0 === c ? Yu[n || 'paragraph-P16'].mt : c,
                                    mr: !0 === d ? Yu[n || 'paragraph-P16'].mr : d,
                                    mb: !0 === p ? Yu[n || 'paragraph-P16'].mb : p,
                                    ml: !0 === b ? Yu[n || 'paragraph-P16'].ml : b,
                                },
                                f,
                            ),
                            void 0 !== g ? o().createElement(I, Hu({}, g, { text: t })) : t,
                        );
                    });
                var Vu = n(8934);
                const Zu = {
                        base: 'Introduction_base_7e',
                        base__enter: 'Introduction_base__enter_b2',
                        base__enterActive: 'Introduction_base__enterActive_10',
                        base__exit: 'Introduction_base__exit_65',
                        base__exitActive: 'Introduction_base__exitActive_b8',
                        introduction: 'Introduction_introduction_3a',
                        image: 'Introduction_image_bc',
                        base__large: 'Introduction_base__large_b6',
                        base__huge: 'Introduction_base__huge_de',
                        image__deluxe: 'Introduction_image__deluxe_5d',
                        image__deluxeLarge: 'Introduction_image__deluxeLarge_4a',
                        image__trophy: 'Introduction_image__trophy_e6',
                        image__trophyLarge: 'Introduction_image__trophyLarge_d7',
                        image__modernized: 'Introduction_image__modernized_5d',
                        image__modernizedLarge: 'Introduction_image__modernizedLarge_00',
                        image__economic: 'Introduction_image__economic_99',
                        image__economicLarge: 'Introduction_image__economicLarge_20',
                        description: 'Introduction_description_4b',
                        title: 'Introduction_title_96',
                        message: 'Introduction_message_87',
                        currency: 'Introduction_currency_04',
                        icon: 'Introduction_icon_06',
                        'icon__currency-deluxe': 'Introduction_icon__currency-deluxe_e0',
                        'icon__currency-modernized': 'Introduction_icon__currency-modernized_07',
                    },
                    qu = ({ introType: e }) => {
                        const t = l()(Zu.icon, Zu[`icon__currency-${e}`]),
                            n = (0, s.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: Zu.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? o().createElement(I, { binding: n, text: a, classMix: Zu.message }) : null;
                    },
                    Ku = ({ slotsType: e, haveSuitableEquipments: t = !0, buttonLabel: n, onIntroPassed: a }) => {
                        const u = (0, x.GS)(),
                            r = u === x.cJ.Large || u === x.cJ.Huge,
                            i = (0, s.useState)(!0),
                            c = i[0],
                            _ = i[1],
                            d = (0, s.useCallback)(() => {
                                _(!1);
                            }, []),
                            m = (0, s.useCallback)(() => {
                                (a(), _(!0));
                            }, [a]),
                            p = l()(Zu.base, u && Zu[`base__${u}`]),
                            E = (0, s.useMemo)(
                                () => ({
                                    enter: Zu.base__enter,
                                    enterActive: Zu.base__enterActive,
                                    exit: Zu.base__exit,
                                    exitActive: Zu.base__exitActive,
                                }),
                                [],
                            ),
                            b = l()(Zu.image, r ? Zu[`image__${e}Large`] : Zu[`image__${e}`]),
                            h = t
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(e)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(e);
                        return o().createElement(
                            Vu.Z,
                            { in: c, classNames: E, timeout: 300, onExited: m },
                            o().createElement(
                                'div',
                                { className: p, id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: Zu.introduction },
                                    o().createElement('div', { className: b }),
                                    o().createElement(
                                        'div',
                                        { className: Zu.description },
                                        o().createElement('div', { className: Zu.title }, h),
                                        o().createElement(qu, { introType: e }),
                                    ),
                                    t &&
                                        o().createElement(
                                            ie.u5,
                                            { type: ie.L$.secondary, size: ie.qE.medium, onClick: d },
                                            o().createElement(Uu, { text: n }),
                                        ),
                                ),
                            ),
                        );
                    },
                    Ju = 'Tabs_base_d9',
                    Qu = 'Tabs_base__vertical_c0',
                    er = 'Tabs_list_0a',
                    tr = 'Tabs_list__centered_dc',
                    nr = 'Tabs_wrapper_2d',
                    ar = 'Tabs_wrapper__centered_d8',
                    ur = 'Tabs_wrapper__vertical_a5';
                function rr() {
                    return (
                        (rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rr.apply(this, arguments)
                    );
                }
                const sr = 'tabs-role';
                var or;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(or || (or = {}));
                class ir extends s.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[or.TAB]);
                                return t && t.props[or.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[sr] === or.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        ((e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[or.TAB] })),
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
                        const n = o().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            u =
                                ((r = this.tabsProps),
                                (s = a),
                                !(
                                    Object.keys(r).length === Object.keys(s).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(s, e) && r[e] === s[e],
                                    )
                                ));
                        var r, s;
                        const i = l()(
                                nr,
                                n.props.className,
                                this.props.isTabsCentered && ar,
                                this.props.isVerticalTabs && ur,
                            ),
                            c = l()(er, this.props.isTabsCentered && tr);
                        if (t.activeKey !== this.state.activeKey || u) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[sr] === or.CONTENT)
                                        return e.props[or.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                u = t[0].props.children,
                                r = u.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[or.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === u.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][or.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, De.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, De.G)(this.props.onMouseEnterSound));
                                                },
                                            },
                                        ),
                                    ),
                                );
                            ((this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        o().createElement(
                                            'div',
                                            { className: c, key: or.LIST },
                                            o().createElement('div', rr({}, n.props, { className: i }), r),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = l()(Ju, this.props.isVerticalTabs && Qu);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                ir.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const lr = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function cr() {
                    return (
                        (cr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cr.apply(this, arguments)
                    );
                }
                const _r = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            u = e.onClickSound,
                            r = e.onMouseEnterSound,
                            s = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, lr);
                        return o().createElement(
                            'div',
                            cr({ className: n }, i),
                            o().createElement(
                                ir,
                                { activeKey: a, onClickSound: u, onMouseEnterSound: r, isTabsCentered: s },
                                t,
                            ),
                        );
                    },
                    dr = {
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
                    mr = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function pr() {
                    return (
                        (pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        pr.apply(this, arguments)
                    );
                }
                const Er = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        u = e.fadeInAnimation,
                        r = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, mr);
                    const _ = a ? null : n,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > s,
                        p = l()(
                            dr.base,
                            dr[`base__${t}`],
                            u && dr.base__animated,
                            r && dr.base__hidden,
                            !_ && dr.base__pattern,
                            a && dr.base__empty,
                            i,
                        );
                    return o().createElement(
                        'div',
                        pr({ className: p }, c),
                        o().createElement('div', { className: dr.bg }),
                        o().createElement('div', { className: dr.pattern }),
                        o().createElement(
                            'div',
                            { className: l()(dr.value, d && dr.value__text) },
                            m ? s : _,
                            m && o().createElement('span', { className: dr.plus }, '+'),
                        ),
                    );
                };
                Er.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const br = ({ children: e, component: t, props: n = {} }) =>
                        t ? o().createElement(t, n, e) : e || null,
                    hr = 'Tab_base_dd',
                    gr = 'Tab_base__first_4a',
                    fr = 'Tab_base__last_96',
                    vr = 'Tab_base__medium_ec',
                    Cr = 'Tab_base__active_5d',
                    Ar = 'Tab_divider_ca',
                    Dr = 'Tab_divider__show_62',
                    Fr = 'Tab_state_6c',
                    Br = 'Tab_stateHighlight_1e',
                    yr = 'Tab_stateBorder_64',
                    wr = 'Tab_stateBorder__positionLeft_e7',
                    Sr = 'Tab_stateBorder__positionRight_db',
                    kr = 'Tab_counter_e1',
                    Tr = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function xr() {
                    return (
                        (xr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        xr.apply(this, arguments)
                    );
                }
                const Lr = (0, s.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            u = void 0 !== a && a,
                            r = e.isLast,
                            s = void 0 !== r && r,
                            i = e.isMedium,
                            c = void 0 !== i && i,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            E = e.wrapper,
                            b = void 0 === E ? {} : E,
                            h = e.counter,
                            g = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, Tr);
                        return o().createElement(
                            br,
                            b,
                            o().createElement(
                                'div',
                                xr({ className: l()(hr, { [Cr]: n }, { [gr]: u }, { [fr]: s }, { [vr]: c }) }, g),
                                o().createElement(
                                    'span',
                                    { className: Fr },
                                    o().createElement('span', { className: Br }),
                                    o().createElement('span', { className: l()(yr, wr) }),
                                    o().createElement('span', { className: l()(yr, Sr) }),
                                ),
                                p,
                                !s && !n && o().createElement('span', { className: l()(Ar, Dr) }),
                                (Boolean(h) || d) &&
                                    o().createElement(
                                        'div',
                                        { className: kr },
                                        o().createElement(Er, { value: h, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    Mr = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' };
                var Nr = n(5262);
                function Rr(e, t, n) {
                    const a = (0, s.useContext)(r.YN);
                    let u = Object.entries(a).filter(([e, t]) => !0 === t && e in Nr.u);
                    return (
                        n && (u = u.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = u.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, M.e)(t))(n, e[0])]),
                            );
                            return ((e[n] = l()(t[n], ...a)), e);
                        }, {})
                    );
                }
                const Ir = ['name', 'newItemsCount', 'onTabChanged', 'isTooltipEnabled'];
                function Pr() {
                    return (
                        (Pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Pr.apply(this, arguments)
                    );
                }
                const Or = (0, s.memo)((e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.onTabChanged,
                        u = e.isTooltipEnabled,
                        r = void 0 === u || u,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                            return u;
                        })(e, Ir);
                    const l = (0, s.useMemo)(() => R.strings.tank_setup.tabs.$dyn(t), [t]),
                        c = (0, s.useCallback)(() => {
                            (De.$.playClick(), a({ name: t }));
                        }, [a, t]),
                        _ = (0, s.useMemo)(() => ({ name: t }), [t]),
                        d = Rr(['tab'], Mr);
                    return o().createElement(
                        me.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: r,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Lr,
                                Pr({}, i, { isNotified: Boolean(n), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                });
                function Hr() {
                    return (
                        (Hr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Hr.apply(this, arguments)
                    );
                }
                const Wr = ({ tabs: e, selectedTabName: t, onTabChanged: n, isTooltipEnabled: a = !0 }) => {
                        const u = $('ModernizedSetupTabHintZone', H);
                        return (
                            (0, s.useEffect)(() => {
                                u && u.runTrigger(!0);
                            }, [u]),
                            o().createElement(
                                _r,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': or.LIST },
                                    e.map(({ value: e }) =>
                                        o().createElement(
                                            Or,
                                            Hr(
                                                {
                                                    key: e.name,
                                                    onTabChanged: n,
                                                    'tabs-role': or.TAB,
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
                    $r = { intro: 'BattleBoosterSetup_intro_d3' },
                    zr = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? pt.UI(e, (e) => ('object' == typeof e ? zr(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? zr(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? zr(t) : t]),
                                    )
                            : e,
                    Xr = (e) => {
                        const t = (0, s.useRef)(-1),
                            n = (0, s.useCallback)(
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
                        return ((0, s.useEffect)(() => () => clearTimeout(t.current), []), n);
                    },
                    Gr = 'Booster_base_e5',
                    Yr = 'Booster_unit_5e';
                var jr = n(8774);
                const Ur = {
                        base: 'BoosterActions_base_95',
                        base__hidden: 'BoosterActions_base__hidden_3e',
                        base__shown: 'BoosterActions_base__shown_6a',
                    },
                    Vr = (0, s.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const u = l()(Ur.base, Ur['base__' + (t.length ? 'shown' : 'hidden')]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(jr.a, {
                                parentId: `${e}-add_one`,
                                actionType: aa,
                                onClick: n,
                                show: t.includes(aa),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(jr.a, {
                                parentId: `${e}-cancel`,
                                actionType: qn,
                                onClick: n,
                                show: t.includes(qn),
                            }),
                            o().createElement(jr.a, {
                                parentId: `${e}-undo`,
                                actionType: Zn,
                                onClick: n,
                                show: t.includes(Zn),
                            }),
                        );
                    }),
                    Zr = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: u,
                            imageName: r,
                            itemsInStorage: i,
                            price: l,
                            isCurrent: c,
                            onSlotAction: _,
                            intCD: d,
                            isDisabled: m,
                            overlayType: p,
                            isLocked: E,
                            isMounted: b,
                            isMountedInOtherSetup: h,
                            description: g,
                            isBuyMoreVisible: f,
                            isBuyMoreDisabled: v,
                            highlightType: C,
                            compare: A,
                            lockReason: D,
                            effect: F,
                        }) => {
                            const B = (0, x.GS)(),
                                y = B === x.cJ.Large || B === x.cJ.Huge,
                                w = t > -1,
                                S = `${d}-booster`,
                                T = (0, s.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !m &&
                                            w &&
                                            (!A && f && e.push(aa), (!Boolean(i) && !b) || h ? e.push(Zn) : e.push(qn)),
                                        e
                                    );
                                }, [m, w, A, f, i, b, h]),
                                L = (0, s.useCallback)(
                                    (e) => (_({ actionType: e, intCD: d, installedSlotId: t }), e === aa ? 1e3 : 120),
                                    [_, d, t],
                                ),
                                M = Xr(L),
                                N = (0, s.useCallback)(() => {
                                    T.includes(Zn) ? M(Zn) : T.includes(qn) ? M(qn) : M(Vn);
                                }, [T, M]),
                                I = (0, s.useMemo)(() => {
                                    const e = { intCD: d, slotType: k.G$, fieldType: 0 };
                                    return [
                                        e,
                                        Object.assign({}, e, {
                                            installedSlotId: t,
                                            itemInstalledSetupIdx: n,
                                            itemInstalledSetupSlotIdx: a,
                                            isMountedMoreThanOne: u,
                                            isMounted: b,
                                            isDisabled: m,
                                        }),
                                    ];
                                }, [d, t, n, a, b, u, m]),
                                P = I[0],
                                O = I[1],
                                H = (0, s.useMemo)(
                                    () =>
                                        y
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(r)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(r),
                                    [y, r],
                                ),
                                W = (0, s.useMemo)(
                                    () =>
                                        o().createElement(ua._, {
                                            parentId: S,
                                            classMix: Gr,
                                            mediaSize: B,
                                            classColorMix: Yr,
                                            linesShown: y ? 4 : 3,
                                            text: g,
                                            effect: F,
                                        }),
                                    [F, B, S, y, g],
                                );
                            return o().createElement(ya, {
                                parentId: S,
                                mediaSize: B,
                                name: e,
                                tooltipArgs: P,
                                contextMenuArgs: O,
                                imageSource: H,
                                isClickable: !0,
                                isCurrent: c,
                                isActive: w,
                                isDisabled: m,
                                isLocked: E,
                                options: o().createElement(La, {
                                    isMounted: b || h,
                                    itemsInStorage: i,
                                    show: !T.length,
                                    price: l,
                                }),
                                actions: o().createElement(Vr, {
                                    parentId: S,
                                    availableActions: T,
                                    onActionClick: M,
                                    isBuyMoreDisabled: v,
                                }),
                                details: W,
                                overlayType: p,
                                highlightType: C,
                                onSlotClick: N,
                                lockReason: D,
                            });
                        },
                    ),
                    qr = {
                        base: 'Cards_base_0a',
                        base__large: 'Cards_base__large_47',
                        base__huge: 'Cards_base__huge_d2',
                        base__disabled: 'Cards_base__disabled_a9',
                        card: 'Cards_card_ab',
                        card__large: 'Cards_card__large_b2',
                        card__huge: 'Cards_card__huge_78',
                    };
                function Kr() {
                    return (
                        (Kr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Kr.apply(this, arguments)
                    );
                }
                const Jr = ({ currentCardRef: e, selectedSlot: t, isDisabled: n = !1, modelPath: a, compare: u }) => {
                    const r = (0, x.GS)(),
                        i = (0, w.m)(a, !1).onSlotAction,
                        c = (0, w.m)(`${a}.slots`),
                        _ = zr(c);
                    const d = (0, s.useMemo)(() => _.sort((e, t) => e.name.localeCompare(t.name)), [_]).map((n) => {
                            if (!n) return null;
                            const a = t === n.installedSlotId;
                            return o().createElement(
                                'div',
                                { key: n.intCD, ref: a ? e : null, className: l()(qr.card, r && qr[`card__${r}`]) },
                                o().createElement(Zr, Kr({}, n, { isCurrent: a, onSlotAction: i, compare: u })),
                            );
                        }),
                        m = l()(qr.base, r && qr[`base__${r}`], n && qr.base__disabled);
                    return o().createElement('div', { className: m }, d);
                };
                function Qr() {
                    return (
                        (Qr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Qr.apply(this, arguments)
                    );
                }
                const es = 'model.tankSetup.battleBoostersSetup',
                    ts = R.strings.tank_setup.introduction.directives.showButton(),
                    ns = ({ compare: e = !1 }) => {
                        const t = (0, x.GS)(),
                            n = (0, w.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, w.m)(es, !1),
                            u = a.onDealConfirmed,
                            r = a.onDealCancelled,
                            i = a.onAutoRenewalChanged,
                            l = a.onTabChanged,
                            c = a.onIntroPassed,
                            _ = (0, w.m)(`${es}.tabs`),
                            d = (0, w.m)(es),
                            m = d.slots,
                            p = d.withIntroduction,
                            E = d.introductionType,
                            b = o().createElement(Wr, Qr({}, _, { onTabChanged: l, isTooltipEnabled: !1 })),
                            h = (0, s.useMemo)(
                                () =>
                                    !e && p
                                        ? o().createElement(
                                              'div',
                                              { className: $r.intro },
                                              o().createElement(Jr, {
                                                  compare: !1,
                                                  selectedSlot: n,
                                                  modelPath: es,
                                                  isDisabled: p,
                                              }),
                                              o().createElement(Ku, {
                                                  slotsType: E,
                                                  haveSuitableEquipments: m.length > 0,
                                                  buttonLabel: ts,
                                                  onIntroPassed: c,
                                              }),
                                          )
                                        : o().createElement(
                                              jn,
                                              { selectedSlotId: n, scrollAreaKey: _.selectedTabName },
                                              o().createElement(Jr, { selectedSlot: n, modelPath: es, compare: e }),
                                          ),
                                [e, p, E, m.length, _.selectedTabName, n, c],
                            );
                        return o().createElement(x.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(hu, { type: k.G$, tabs: b })
                                : o().createElement(Qa, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabs: b,
                                      content:
                                          _.selectedTabName === mu.Economic &&
                                          !p &&
                                          o().createElement(vu, { theme: fu.OnlyIcon, className: $r.infoButton }),
                                  }),
                            content: h,
                            footer:
                                !e &&
                                !p &&
                                o().createElement(Eu.w, {
                                    withConfirmation: !0,
                                    renewalType: pu.m.Boosters,
                                    parentModelPath: es,
                                    onDealConfirmed: u,
                                    onDealCancelled: r,
                                    onAutoRenewalChanged: i,
                                    mediaSize: t,
                                }),
                        });
                    },
                    as = 'tooltip';
                let us, rs, ss;
                (!(function (e) {
                    e.Bootcamp = 'bootcamp';
                })(us || (us = {})),
                    (function (e) {
                        ((e.BC_DEVICE_SETUP_SUB_VIEW = 'bc_device_setup_sub_view'),
                            (e.BC_CONSUMABLE_SETUP_SUB_VIEW = 'bc_consumable_setup_sub_view'),
                            (e.BC_EXIT_VIEW = 'bc_exit_view'),
                            (e.BC_CURRENT_PROGRESS_WIDGET = 'bc_current_progress_widget'),
                            (e.BC_RESULT_SCREEN = 'bc_result_screen'));
                    })(rs || (rs = {})),
                    (function (e) {
                        e.TooltipOpened = 'tooltip_opened';
                    })(ss || (ss = {})));
                const os = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    is = {
                        base: 'ConsumableActions_base_fc',
                        base__hidden: 'ConsumableActions_base__hidden_c1',
                        base__shown: 'ConsumableActions_base__shown_17',
                    },
                    ls = (0, s.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const u = l()(is.base, is['base__' + (t.length ? 'shown' : 'hidden')]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(jr.a, {
                                parentId: `${e}-add_one`,
                                actionType: aa,
                                onClick: n,
                                show: t.includes(aa),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(jr.a, {
                                parentId: `${e}-cancel`,
                                actionType: qn,
                                onClick: n,
                                show: t.includes(qn),
                            }),
                            o().createElement(jr.a, {
                                parentId: `${e}-undo`,
                                actionType: Zn,
                                onClick: n,
                                show: t.includes(Zn),
                            }),
                        );
                    }),
                    cs = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: u,
                            imageName: r,
                            itemsInStorage: i,
                            price: c,
                            isCurrent: _,
                            onSlotAction: d,
                            intCD: m,
                            isDisabled: p,
                            overlayType: E,
                            isLocked: b,
                            isMounted: h,
                            isMountedInOtherSetup: g,
                            isBuiltIn: f,
                            description: v,
                            isBuyMoreDisabled: C,
                            isBootCamp: A = !1,
                            compare: D,
                            lockReason: F,
                            lockedByDevice: B,
                        }) => {
                            const y = (0, x.GS)(),
                                w = y === x.cJ.Large || y === x.cJ.Huge,
                                S = t > -1,
                                T = `${m}-consumable`,
                                L = (0, s.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !p &&
                                            S &&
                                            (!_ && e.push(Kn),
                                            f ||
                                                A ||
                                                (!D && e.push(aa), (!Boolean(i) && !h) || g ? e.push(Zn) : e.push(qn))),
                                        e
                                    );
                                }, [p, A, S, _, f, D, i, h, g]),
                                M = (0, s.useCallback)(
                                    (e) => (d({ actionType: e, intCD: m, installedSlotId: t }), e === aa ? 1e3 : 300),
                                    [d, m, t],
                                ),
                                N = Xr(M),
                                I = (0, s.useCallback)(() => {
                                    L.includes(Kn) ? N(Kn) : L.includes(Zn) ? N(Zn) : L.includes(qn) ? N(qn) : N(Vn);
                                }, [L, N]),
                                P = (0, s.useMemo)(() => {
                                    const e = { intCD: m, slotType: k.mH, fieldType: 0 };
                                    return [
                                        e,
                                        A
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: u,
                                                  isMounted: h,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [m, t, n, a, u, h, p, A]),
                                O = P[0],
                                H = P[1],
                                W = (0, s.useMemo)(
                                    () =>
                                        w
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(r)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(r),
                                    [w, r],
                                ),
                                $ = (0, s.useMemo)(() => {
                                    const e = l()(os.base, y && os[`base__${y}`]);
                                    return o().createElement(ua._, {
                                        parentId: T,
                                        mediaSize: y,
                                        classMix: e,
                                        classColorMix: os.unit,
                                        linesShown: w ? 4 : 3,
                                        text: v,
                                    });
                                }, [y, w, v, T]),
                                z = ae(us.Bootcamp, rs.BC_CONSUMABLE_SETUP_SUB_VIEW),
                                X = z[0],
                                G = z[1],
                                Y = (0, s.useCallback)(() => {
                                    X(ss.TooltipOpened);
                                }, [X]),
                                U = (0, s.useCallback)(() => {
                                    G(ss.TooltipOpened, 2, j.Info, { [as]: m.toString() });
                                }, [G, m]);
                            return o().createElement(ya, {
                                parentId: T,
                                mediaSize: y,
                                name: e,
                                tooltipArgs: O,
                                contextMenuArgs: H,
                                imageSource: W,
                                isCurrent: _,
                                isActive: S,
                                isDisabled: p,
                                isLocked: b,
                                isClickable: !f,
                                options: o().createElement(La, {
                                    price: c,
                                    isMounted: h || g,
                                    itemsInStorage: i,
                                    show: !L.length,
                                }),
                                actions: o().createElement(ls, {
                                    parentId: T,
                                    availableActions: L,
                                    onActionClick: N,
                                    isBuyMoreDisabled: C,
                                }),
                                details: $,
                                overlayType: E,
                                onSlotClick: I,
                                onTooltipShow: A ? Y : void 0,
                                onTooltipHide: A ? U : void 0,
                                lockReason: F,
                                lockedByDevice: B,
                            });
                        },
                    ),
                    _s = {
                        base: 'Cards_base_57',
                        base__large: 'Cards_base__large_db',
                        base__huge: 'Cards_base__huge_ac',
                        base__disabled: 'Cards_base__disabled_4f',
                        card: 'Cards_card_4e',
                        card__large: 'Cards_card__large_87',
                        card__huge: 'Cards_card__huge_dd',
                    },
                    ds = [
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
                        'removedRpmLimiter',
                        'qualityOil',
                        'gasoline100',
                        'gasoline105',
                    ],
                    ms = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...ds,
                    ],
                    ps = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...ds,
                    ];
                function Es() {
                    return (
                        (Es =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Es.apply(this, arguments)
                    );
                }
                const bs = ({
                        currentCardRef: e,
                        isDisabled: t,
                        modelPath: n,
                        selectedSlot: a,
                        compare: u,
                        isBootCamp: r = !1,
                    }) => {
                        const s = (0, x.GS)(),
                            i = (0, w.m)(n, !1).onSlotAction,
                            c = ((e) =>
                                ((e, t, n) => {
                                    const a = n !== x.cJ.Tiny || t ? ms : ps;
                                    return e
                                        .reduce((e, t) => {
                                            const n = a.indexOf(t.value.itemName);
                                            return ((e[-1 === n ? Math.max(e.length, ps.length) : n] = t), e);
                                        }, [])
                                        .filter((e) => Boolean(e));
                                })(e, u, s))((0, w.m)(`${n}.slots`)).map(({ value: t }) => {
                                if (!t) return null;
                                const n = t.installedSlotId > -1 && a === t.installedSlotId;
                                return o().createElement(
                                    'div',
                                    { key: t.intCD, ref: n ? e : null, className: l()(_s.card, s && _s[`card__${s}`]) },
                                    o().createElement(
                                        cs,
                                        Es({}, t, { isCurrent: n, onSlotAction: i, isBootCamp: r, compare: u }),
                                    ),
                                );
                            }),
                            _ = l()(_s.base, s && _s[`base__${s}`], t && _s.base__disabled);
                        return o().createElement('div', { id: 'consumables', className: _ }, c);
                    },
                    hs = 'model.tankSetup.consumablesSetup',
                    gs = ({ compare: e = !1 }) => {
                        const t = (0, x.GS)(),
                            n = (0, w.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, w.m)('model').isBootcamp,
                            u = (0, w.m)(hs),
                            r = u.onDealConfirmed,
                            s = u.onDealCancelled,
                            i = u.onAutoRenewalChanged;
                        return o().createElement(x.Ar, {
                            header: e
                                ? o().createElement(hu, { type: k.mH })
                                : o().createElement(Qa, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                jn,
                                { selectedSlotId: n },
                                o().createElement(bs, { selectedSlot: n, modelPath: hs, compare: e, isBootCamp: a }),
                            ),
                            footer:
                                !e &&
                                o().createElement(Eu.w, {
                                    withConfirmation: !0,
                                    renewalType: pu.m.Consumables,
                                    mediaSize: t,
                                    parentModelPath: hs,
                                    onDealConfirmed: r,
                                    onDealCancelled: s,
                                    onAutoRenewalChanged: i,
                                }),
                            compare: e,
                        });
                    };
                var fs = n(2106),
                    vs = n(8586),
                    Cs = n(3978);
                const As = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    Ds = 'FilterItem_base_2e',
                    Fs = ({ name: e }) => {
                        const t = (0, s.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            }),
                            [e],
                        );
                        return o().createElement('div', { className: Ds, style: t });
                    };
                R.strings.common.percentValue();
                let Bs;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(Bs || (Bs = {}));
                const ys = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                (R.strings.crew.filterPanel.counterMultySelect.reset.header(),
                    R.strings.crew.filterPanel.counterMultySelect.reset.body());
                let ws;
                !(function (e) {
                    ((e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy'));
                })(ws || (ws = {}));
                const Ss = 'ClearBtn_base_a6',
                    ks = 'ClearBtn_stroke_09',
                    Ts = 'ClearBtn_background_61',
                    xs = 'ClearBtn_base__hover_3b',
                    Ls = 'ClearBtn_base__down_60',
                    Ms = 'ClearBtn_cross_1d',
                    Ns = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const u = (0, s.useState)(!1),
                            r = u[0],
                            i = u[1],
                            c = (0, s.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, s.useCallback)(() => {
                                ((0, De.G)(a), d(!1), i(!0));
                            }, [a]),
                            p = (0, s.useCallback)(() => {
                                ((0, De.G)(n), d(!0));
                            }, [n]),
                            E = (0, s.useCallback)(() => {
                                (d(!1), i(!1));
                            }, []),
                            b = l()(Ss, _ && xs, r && Ls);
                        return o().createElement(
                            P.i,
                            ys,
                            o().createElement(
                                'div',
                                { id: e, className: b, onMouseDown: m, onMouseOver: p, onMouseLeave: E, onClick: t },
                                o().createElement('div', { className: Ts }),
                                o().createElement('div', { className: ks }),
                                o().createElement('div', { className: Ms }),
                            ),
                        );
                    },
                    Rs = 'MatchDetails_base_a8',
                    Is = 'MatchDetails_count_d2',
                    Ps = 'MatchDetails_clear_21',
                    Os = 'MatchDetails_clear__shown_49',
                    Hs = 'MatchDetails_separator_bc',
                    Ws = 'MatchDetails_arrow_b0',
                    $s = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const u = (0, s.useCallback)(() => t(), [t]),
                            r = l()(Ps, e && Os);
                        return o().createElement(
                            'div',
                            { className: Rs },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: Is }, n),
                                    o().createElement(
                                        'span',
                                        { className: Hs },
                                        '/',
                                        o().createElement('span', { className: Ws }),
                                    ),
                                ),
                            o().createElement('span', { className: Is }, a),
                            o().createElement(
                                'span',
                                { className: r },
                                o().createElement(Ns, { parentId: 'match-details-clear-btn', onClick: u }),
                            ),
                        );
                    },
                    zs = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: u = !1,
                        onFilterChanged: r,
                        onFilterReset: i,
                        selectedSlotSpecialization: c,
                    }) => {
                        const _ = (0, x.GS)(),
                            d = $('FilterTutorialHintZone', H);
                        (0, s.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, pt.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Fs, { name: e }),
                            callback: (e, t) => {
                                (r({ name: e }), (0, Cs.d)(e, !t));
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: fs.L.ghost,
                                mixClass: l()(As.button, c && e === c && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: R.strings.tank_setup.categories.$dyn(e),
                                body: R.strings.tank_setup.categories.body.$dyn(e),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: l()(As.base, _ && As[`base__${_}`], u && As.base__detailed) },
                            u &&
                                o().createElement($s, {
                                    isFilterActive: a,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: As.buttons },
                                o().createElement(vs.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var Xs = n(2372),
                    Gs = n(7078);
                const Ys = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    js = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Us = (e) => (e ? js.disabled.text() : js.notDisabled.text()),
                    Vs = ({ disabled: e }) => {
                        const t = (0, x.GS)(),
                            n = (0, Un.m2)('model.tankSetup.optDevicesSetup.specialCurrency', !0),
                            a = n.value,
                            u = n.onGetMoreCurrency,
                            r = (0, s.useCallback)(() => u(), [u]),
                            i = (0, s.useMemo)(() => ({ tooltipId: k.$4 }), []);
                        return o().createElement(
                            'div',
                            { className: l()(Ys.base, t && Ys[`base__${t}`]) },
                            o().createElement(
                                Gs.t,
                                { args: i },
                                o().createElement(
                                    'div',
                                    { className: Ys.currency },
                                    o().createElement(Xs.A, { value: a }),
                                    o().createElement('div', { className: Ys.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                P.i,
                                { body: Us(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        ie.u5,
                                        { onClick: r, mixClass: Ys.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    };
                function Zs() {
                    return (
                        (Zs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Zs.apply(this, arguments)
                    );
                }
                const qs = (e, t) => e && o().createElement(Vs, { disabled: t }),
                    Ks = (e) =>
                        !e.isComparisonHeader &&
                        ((e) => {
                            const t = e.haveSuitableEquipments,
                                n = e.hasUnfitItems;
                            return e.isIntroduction ? qs(!t, !n) : qs(t, !t);
                        })(e),
                    Js = ({
                        tabs: e,
                        onTabChanged: t,
                        filter: n,
                        onFilterChanged: a,
                        onFilterReset: u,
                        propsForDisplayHeaderContent: r,
                        selectedSlotSpecialization: i,
                    }) => {
                        const l = r.isComparisonHeader,
                            c = e.tabs.length > 1 && o().createElement(Wr, Zs({}, e, { onTabChanged: t })),
                            _ = (0, s.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case k.S:
                                            return o().createElement(
                                                zs,
                                                Zs({}, n, {
                                                    onFilterChanged: a,
                                                    onFilterReset: u,
                                                    selectedSlotSpecialization: i,
                                                }),
                                            );
                                        case k.pi:
                                            return Ks(r);
                                        default:
                                            return null;
                                    }
                                },
                                [n, a, u, r, i],
                            );
                        return l
                            ? o().createElement(hu, { type: k.zn, tabs: c, content: _(e.selectedTabName) })
                            : o().createElement(Qa, {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  content: _(e.selectedTabName),
                                  tabs: c,
                              });
                    };
                var Qs = n(4814);
                const eo = 'Unit_base_15',
                    to = 'Unit_base__special_37',
                    no = 'Unit_glow_38',
                    ao = R.strings.tank_setup.kpi.bonus.valueTypes,
                    uo = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    ro = ({ value: e, valueType: t, valueKey: n, isSpecial: a }) => {
                        const u = 'mul' === t ? 100 * (e - 1) : e,
                            r = u > 0 ? '+' : '',
                            s = Gt.Z5.getRealFormat(u, Gt.Gr.WO_ZERO_DIGITS),
                            i = ao.$dyn(n),
                            c = `${s}${i ? ` ${i}` : uo}`;
                        return o().createElement(
                            'div',
                            { className: l()(eo, a && to) },
                            o().createElement('span', null, o().createElement('span', { className: no }), r + c),
                        );
                    },
                    so = 'Bonus_base_aa',
                    oo = 'Bonus_text_48',
                    io = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    lo = ({ values: e, localeName: t }) => {
                        const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!n) return io;
                        const a = n.value,
                            u = a.value,
                            r = 'mul' === a.valueType ? 100 * (u - 1) : u;
                        return { calcValue: r, isPositive: r > 0, valueKey: a.valueKey };
                    };
                function co() {
                    return (
                        (co =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        co.apply(this, arguments)
                    );
                }
                const _o = ({ bonus: e, mediaSize: t, isSpecial: n, visibleLinesCount: a }) => {
                        const u = ((e, t = !1) =>
                                t || lo(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(e),
                            r = (0, s.useMemo)(() => {
                                let t = null;
                                return (
                                    e.values.forEach(({ value: a }) => {
                                        a &&
                                            a.valueKey === e.localeName &&
                                            (t = o().createElement(ro, co({ isSpecial: n }, a)));
                                    }),
                                    t
                                );
                            }, [e, n]);
                        return (
                            u &&
                            o().createElement(
                                'span',
                                { className: so },
                                r,
                                ' ',
                                a &&
                                    u &&
                                    o().createElement(
                                        'span',
                                        { className: oo },
                                        o().createElement(ga.n, { linesCount: a, blocks: (0, ga.D)(u), mediaSize: t }),
                                    ),
                            )
                        );
                    },
                    mo = 'Bonuses_base_af',
                    po = 'Bonuses_bonus_d1',
                    Eo = 'Bonuses_text_37',
                    bo = 'Bonuses_effect_f8',
                    ho = 'Bonuses_icon_40',
                    go = (0, s.memo)(
                        ({ parentId: e, items: t, effect: n, mediaSize: a, maxLines: u, isSpecial: r }) => {
                            const i = (0, s.useMemo)(() => {
                                    if (!n) return [null, 0];
                                    const e = 1 === t.length ? 2 : 1;
                                    return [
                                        o().createElement(
                                            'div',
                                            { className: po },
                                            o().createElement(
                                                'span',
                                                { className: bo },
                                                o().createElement('span', { className: ho }),
                                                R.strings.tank_setup.effects.name(),
                                            ),
                                            ' ',
                                            o().createElement(
                                                'span',
                                                { className: Eo },
                                                o().createElement(ga.n, {
                                                    mediaSize: a,
                                                    linesCount: e,
                                                    blocks: (0, ga.D)(n),
                                                }),
                                            ),
                                        ),
                                        e,
                                    ];
                                }, [a, n, t.length]),
                                l = i[0],
                                c = i[1];
                            return (
                                c && (u -= c),
                                o().createElement(
                                    'div',
                                    { id: `${e}-bonuses`, className: mo },
                                    l,
                                    t.map(({ value: e }, n) => {
                                        let s;
                                        return u && e
                                            ? ((s = t.length > 2 ? 1 : 2 === t.length ? (u > 2 ? 2 : 1) : u),
                                              (u -= s),
                                              o().createElement(
                                                  'div',
                                                  { key: n, className: po },
                                                  o().createElement(_o, {
                                                      bonus: e,
                                                      mediaSize: a,
                                                      isSpecial: r,
                                                      visibleLinesCount: s,
                                                  }),
                                              ))
                                            : null;
                                    }),
                                )
                            );
                        },
                    ),
                    fo = 'DeviceActions_base_c0',
                    vo = 'DeviceActions_base__hidden_a6',
                    Co = 'DeviceActions_base__shown_b0',
                    Ao = (0, s.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: u,
                            isModernized: r,
                            isFreeToDemount: s,
                            destroyTooltipBodyPath: i,
                            level: c,
                        }) => {
                            const _ = (u || a) && t.includes(na),
                                d = t.length && (t[0] !== na || _),
                                m = l()(fo, d ? Co : vo);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(jr.a, {
                                    parentId: `${e}-cancel`,
                                    actionType: qn,
                                    onClick: n,
                                    show: t.includes(qn),
                                }),
                                o().createElement(jr.a, {
                                    parentId: `${e}-undo`,
                                    actionType: Zn,
                                    onClick: n,
                                    show: t.includes(Zn),
                                }),
                                o().createElement(jr.a, {
                                    parentId: `${e}-upgrade`,
                                    actionType: na,
                                    onClick: n,
                                    show: _,
                                    isModernized: r,
                                    level: c,
                                }),
                                o().createElement(jr.a, {
                                    parentId: `${e}-demount`,
                                    actionType: Jn,
                                    onClick: n,
                                    show: t.includes(Jn),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(jr.a, {
                                    parentId: `${e}-demount_from_setup`,
                                    actionType: Qn,
                                    onClick: n,
                                    show: t.includes(Qn),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(jr.a, {
                                    parentId: `${e}-demount_from_setups`,
                                    actionType: ea,
                                    onClick: n,
                                    show: t.includes(ea),
                                }),
                                o().createElement(jr.a, {
                                    parentId: `${e}-destroy`,
                                    actionType: ta,
                                    buttonType: fs.L.secondary,
                                    onClick: n,
                                    show: (r || !s) && t.includes(ta),
                                    isModernized: r,
                                    tooltipBodyPath: i,
                                }),
                            );
                        },
                    );
                function Do() {
                    return (
                        (Do =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Do.apply(this, arguments)
                    );
                }
                const Fo = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: u,
                            imageName: r,
                            itemsInStorage: i,
                            price: l,
                            specializations: c,
                            intCD: _,
                            isMounted: d,
                            isMountedInOtherSetup: m,
                            isDisabled: p,
                            isFreeToDemount: E,
                            overlayType: b,
                            isLocked: h,
                            bonuses: g,
                            effect: f,
                            isUpgradable: v,
                            isTrophy: C,
                            activeSpecsMask: A,
                            onSlotAction: D,
                            isCurrent: F,
                            compare: B,
                            isModernized: y,
                            level: w,
                            lockReason: S,
                            destroyTooltipBodyPath: T,
                            isBootCamp: L = !1,
                        }) => {
                            const M = (0, x.GS)(),
                                N = M === x.cJ.Large || M === x.cJ.Huge,
                                I = t > -1,
                                P = `${_}-device`,
                                O = ae(us.Bootcamp, rs.BC_DEVICE_SETUP_SUB_VIEW),
                                H = O[0],
                                W = O[1],
                                $ = (0, s.useCallback)(() => {
                                    H(ss.TooltipOpened);
                                }, [H]),
                                z = (0, s.useCallback)(() => {
                                    W(ss.TooltipOpened, 2, j.Info, { [as]: _.toString() });
                                }, [W, _]),
                                X = (0, s.useMemo)(() => {
                                    const e = [];
                                    let t = !0;
                                    return (
                                        I &&
                                            !p &&
                                            (F || e.push(Kn),
                                            L ||
                                                (d && !B
                                                    ? ((t = !F),
                                                      e.push(...((e) => (e ? [Qn, ea] : [Jn]))(u)),
                                                      e.push(ta))
                                                    : e.push(
                                                          ((e, t, n) => ((!Boolean(e) && !t) || n ? Zn : qn))(i, d, m),
                                                      ))),
                                        !v || B || p || L || e.push(na),
                                        { availableActions: e, isDeviceClickable: t }
                                    );
                                }, [I, p, v, B, L, F, d, u, i, m]),
                                G = X.availableActions,
                                Y = X.isDeviceClickable,
                                U = (0, s.useCallback)(
                                    (e) => {
                                        D({ actionType: e, intCD: _, installedSlotId: t });
                                    },
                                    [D, _, t],
                                ),
                                V = (0, s.useCallback)(() => {
                                    G.length && G[0] !== na ? U(G[0]) : U(Vn);
                                }, [G, U]),
                                Z = (0, s.useMemo)(() => {
                                    const e = { intCD: _, slotType: k.zn, fieldType: 0 };
                                    return [
                                        e,
                                        L
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: u,
                                                  isMounted: d,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [_, t, n, a, u, d, p, L]),
                                q = Z[0],
                                K = Z[1],
                                J = (0, s.useMemo)(
                                    () =>
                                        N
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(r)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(r),
                                    [N, r],
                                ),
                                Q =
                                    c && c.specializations.length
                                        ? o().createElement(Qs.G, Do({}, c, { activeSpecsMask: A, mediaSize: M }))
                                        : null,
                                ee = B
                                    ? null
                                    : o().createElement(La, {
                                          isMounted: d || m,
                                          itemsInStorage: i,
                                          price: l,
                                          possibleZeroCount: C || y,
                                          show: !G.length || Boolean(i || d || m),
                                      });
                            return o().createElement(ya, {
                                parentId: P,
                                mediaSize: M,
                                name: e,
                                tooltipArgs: q,
                                contextMenuArgs: K,
                                imageSource: J,
                                isCurrent: F,
                                isActive: I,
                                isDisabled: p,
                                isLocked: h,
                                isClickable: Y,
                                isModernized: y,
                                level: w,
                                specializations: Q,
                                details: o().createElement(
                                    go,
                                    Do(
                                        {
                                            parentId: P,
                                            isSpecial: Boolean(A),
                                            effect: f,
                                            mediaSize: M,
                                            maxLines: N ? 4 : 3,
                                        },
                                        g,
                                    ),
                                ),
                                options: ee,
                                actions: o().createElement(Ao, {
                                    parentId: P,
                                    availableActions: G,
                                    onActionClick: U,
                                    isInstalled: I,
                                    isModernized: y,
                                    level: w,
                                    isFreeToDemount: E,
                                    destroyTooltipBodyPath: T,
                                }),
                                overlayType: b,
                                onSlotClick: V,
                                shouldHandleMouseOver: !0,
                                onTooltipShow: L ? $ : void 0,
                                onTooltipHide: L ? z : void 0,
                                lockReason: S,
                            });
                        },
                    ),
                    Bo = {
                        base: 'Cards_base_f1',
                        base__large: 'Cards_base__large_a2',
                        base__huge: 'Cards_base__huge_32',
                        base__disabled: 'Cards_base__disabled_20',
                        card: 'Cards_card_5e',
                        card__large: 'Cards_card__large_0e',
                        card__huge: 'Cards_card__huge_84',
                    };
                function yo() {
                    return (
                        (yo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        yo.apply(this, arguments)
                    );
                }
                const wo = (0, s.memo)(
                        ({
                            currentCardRef: e,
                            selectedSlot: t,
                            modelPath: n,
                            isDisabled: a,
                            isBootCamp: u = !1,
                            compare: r = !1,
                        }) => {
                            const s = (0, x.GS)(),
                                i = (0, w.m)(n, !1).onSlotAction,
                                c = (0, w.m)(`${n}.slots`).map(({ value: n }) => {
                                    if (!n || !n.isVisible) return null;
                                    const a = n.installedSlotId,
                                        c = a > -1 && t === a,
                                        _ = l()(Bo.card, s && Bo[`card__${s}`]);
                                    return o().createElement(
                                        'div',
                                        { key: n.intCD, ref: c ? e : null, className: _ },
                                        o().createElement(
                                            Fo,
                                            yo({}, n, { isCurrent: c, onSlotAction: i, compare: r, isBootCamp: u }),
                                        ),
                                    );
                                }),
                                _ = l()(Bo.base, s && Bo[`base__${s}`], a && Bo.base__disabled);
                            return o().createElement('div', { className: _, id: 'optDevices' }, c);
                        },
                    ),
                    So = 'OptDevicesSetup_intro_ae',
                    ko = 'model.tankSetup.optDevicesSetup',
                    To = R.strings.tank_setup.introduction.equipments.showButton(),
                    xo = ({ compare: e }) => {
                        var t, n, a, u;
                        const r = (0, x.GS)(),
                            i = (0, w.m)(e ? 'model' : 'model.ammunitionPanel'),
                            l = i.selectedSlot,
                            c = i.sectionGroups,
                            _ = (0, w.m)('model').isBootcamp,
                            d = (0, w.m)(ko),
                            m = d.slots,
                            p = d.withIntroduction,
                            E = d.introductionType,
                            b = (0, w.m)(ko, !1),
                            h = b.onDealConfirmed,
                            g = b.onDealCancelled,
                            f = b.onTabChanged,
                            v = b.onAutoRenewalChanged,
                            C = b.onFilterChanged,
                            A = b.onFilterReset,
                            D = b.hasUnfitItems,
                            F = (0, w.m)(`${ko}.filter`),
                            B = (0, w.m)(`${ko}.tabs`),
                            y = (0, w.m)(ko, !1).onIntroPassed,
                            S =
                                c &&
                                (null == (t = c[0]) ||
                                null == (n = t.value.sections[0]) ||
                                null == (a = n.value.slots[l])
                                    ? void 0
                                    : a.value),
                            k = B.selectedTabName,
                            T = (0, w.m)(`${ko}.slots`).length,
                            L = (0, s.useMemo)(
                                () =>
                                    !e &&
                                    p &&
                                    o().createElement(
                                        'div',
                                        { className: So },
                                        o().createElement(wo, { selectedSlot: l, modelPath: ko, isDisabled: p }),
                                        o().createElement(Ku, {
                                            slotsType: E,
                                            haveSuitableEquipments: m.length > 0,
                                            buttonLabel: To,
                                            onIntroPassed: y,
                                        }),
                                    ),
                                [e, p, E, m.length, l, y],
                            ),
                            M = {
                                tabs: B,
                                filter: F,
                                onFilterChanged: C,
                                onFilterReset: A,
                                onTabChanged: f,
                                propsForDisplayHeaderContent: {
                                    isComparisonHeader: e,
                                    isIntroduction: p,
                                    haveSuitableEquipments: m.length > 0,
                                    hasUnfitItems: D,
                                },
                                selectedSlotSpecialization:
                                    null == S || null == (u = S.specializations.specializations[0])
                                        ? void 0
                                        : u.value.name,
                            };
                        return o().createElement(x.Ar, {
                            compare: e,
                            header: o().createElement(Js, M),
                            content:
                                L ||
                                o().createElement(
                                    jn,
                                    { selectedSlotId: l, scrollAreaKey: k, updateKey: `${F.selectedFilterCount}:${T}` },
                                    o().createElement(wo, {
                                        compare: e,
                                        selectedSlot: l,
                                        modelPath: ko,
                                        isDisabled: p,
                                        isBootCamp: _,
                                    }),
                                ),
                            footer:
                                !e &&
                                o().createElement(Eu.w, {
                                    withConfirmation: !0,
                                    parentModelPath: ko,
                                    mediaSize: r,
                                    onDealConfirmed: h,
                                    onDealCancelled: g,
                                    onAutoRenewalChanged: v,
                                }),
                        });
                    };
                var Lo = n(2558);
                const Mo = 200;
                let No;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(No || (No = {}));
                const Ro = {
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
                    Io = o().memo(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: u,
                            actionType: r,
                            uniqueKey: i,
                            onTransitionEnd: c,
                        }) => {
                            const _ = (0, s.useMemo)(() => n === x.cJ.Tiny, [n]),
                                d = (0, s.useMemo)(() => a === t, [a, t]),
                                m = (0, s.useMemo)(() => r === Kn || 'drag_drop' === r, [r]),
                                p = (0, s.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                E = (0, s.useMemo)(() => ((u - a > 1 && _) || !m ? 'Fade' : ''), [m, a, u, _]),
                                b = (0, s.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: Ro.base__enter,
                                                enterDone: Ro[`base__enter${p}${E}`],
                                                exit: Ro[`base__exit${p}${E}`],
                                                exitActive: Ro.base__exitActive,
                                            },
                                        }),
                                    [p, E],
                                ),
                                h = (0, s.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            ((e.className = ''), c && c());
                                        }, Mo);
                                    },
                                    [c],
                                ),
                                g = (0, s.useMemo)(() => ({ animationDuration: '200ms' }), []),
                                f = l()(Ro.base, Ro[`base__${n}`]);
                            return o().createElement(
                                Lo.Z,
                                { component: null, childFactory: b },
                                o().createElement(
                                    Vu.Z,
                                    { key: i, timeout: Mo, onEntered: h },
                                    o().createElement('div', { className: f, style: g }, e),
                                ),
                            );
                        },
                    ),
                    Po = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Oo = ({ paramName: e, value: t, metricValue: n, media: a, isSuperficial: u }) => {
                        const r = l()(Po.base, a && Po[`base__${a}`]),
                            i = l()(Po.separator, a && Po[`separator__${a}`]),
                            c = o().createElement(
                                'div',
                                { className: Po.value },
                                t || o().createElement('span', null, '—'),
                            ),
                            _ = (0, s.useMemo)(() => {
                                if ('avgPiercingPower' === e) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [e]);
                        return o().createElement(
                            'div',
                            { className: r },
                            u
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      R.strings.menu.tank_params.shortened.$dyn(e),
                                      ' ',
                                      c,
                                      o().createElement('div', { className: Po.units }, _),
                                  )
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      R.strings.menu.tank_params.$dyn(e),
                                      o().createElement('div', { className: Po.units }, n),
                                      o().createElement('div', { className: i }),
                                      c,
                                  ),
                        );
                    };
                var Ho = n(7405),
                    Wo = n(329);
                const $o = {
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
                function zo() {
                    return (
                        (zo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        zo.apply(this, arguments)
                    );
                }
                const Xo = (0, s.memo)(
                        ({
                            buyCount: e,
                            inStorageCount: t,
                            inVehicleCount: n,
                            isSuperficial: a,
                            price: u,
                            totalPrice: r,
                            mediaSize: i,
                        }) => {
                            const c = (0, s.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[
                                            a ? 'shortSpecification' : 'specification'
                                        ].inStorage(),
                                    [a],
                                ),
                                _ = (0, s.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[
                                            a ? 'shortSpecification' : 'specification'
                                        ].inVehicle(),
                                    [a],
                                ),
                                d = (0, s.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[a ? 'shortSpecification' : 'specification'].price(),
                                    [a],
                                ),
                                m = n >= 0,
                                p = u.defPrice.length > 0,
                                E = (0, s.useMemo)(
                                    () =>
                                        p
                                            ? {
                                                  tooltip: 'priceDiscount',
                                                  price: u.price[0].value.value,
                                                  defPrice: u.defPrice[0].value.value,
                                                  currencyType: u.price[0].value.name,
                                              }
                                            : void 0,
                                    [p, u.defPrice, u.price],
                                ),
                                b = l()($o.base, i && $o[`base__${i}`]),
                                h = l()($o.separator, i && $o[`separator__${i}`]),
                                g = l()($o.row, i && $o[`row__${i}`]),
                                f = l()($o.total, i && $o[`total__${i}`]),
                                v = l()($o.price, $o.price__final),
                                C = l()($o.lowResolutionValue, i && $o[`lowResolutionValue__${i}`]),
                                A = l()($o.hiResolutionValue, i && $o[`hiResolutionValue__${i}`]),
                                D = l()($o.colored, i && $o[`colored__${i}`]),
                                F = o().createElement('span', { className: $o.indent }),
                                B = o().createElement('span', { className: $o.divider }, '/');
                            return o().createElement(
                                'div',
                                { className: b },
                                o().createElement(
                                    'div',
                                    { className: g },
                                    o().createElement(
                                        'div',
                                        { className: $o.rowItem },
                                        o().createElement('div', { className: f }, c),
                                        o().createElement('div', { className: C }, F, t),
                                    ),
                                    m &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            B,
                                            o().createElement(
                                                'div',
                                                { className: $o.rowItem },
                                                o().createElement(
                                                    'div',
                                                    { className: f },
                                                    o().createElement('div', { className: D }, _),
                                                ),
                                                o().createElement('div', { className: C }, F, n),
                                            ),
                                        ),
                                    o().createElement('div', { className: h }),
                                    o().createElement(
                                        'div',
                                        { className: A },
                                        t,
                                        m &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                B,
                                                o().createElement('div', { className: D }, n),
                                            ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: g },
                                    o().createElement('div', { className: f }, d),
                                    o().createElement('div', { className: h }),
                                    o().createElement(
                                        'div',
                                        { className: $o.value },
                                        o().createElement(
                                            'div',
                                            { className: $o.overall },
                                            '(',
                                            o().createElement('span', null, e),
                                            ' ',
                                            '×',
                                            o().createElement(
                                                Gs.t,
                                                { args: E, isEnabled: p },
                                                o().createElement(
                                                    'span',
                                                    { className: $o.price },
                                                    o().createElement(Sa.t, zo({ showZero: !0 }, u)),
                                                ),
                                            ),
                                            ')',
                                            o().createElement(
                                                'span',
                                                { className: v },
                                                e
                                                    ? o().createElement(
                                                          Sa.t,
                                                          zo({ showZero: !0, ignoreDiscount: !0 }, r),
                                                      )
                                                    : o().createElement(Ho.F, {
                                                          size: Wo.et.small,
                                                          type: Wo.V2.credits,
                                                          value: 0,
                                                      }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Go = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                function Yo() {
                    return (
                        (Yo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Yo.apply(this, arguments)
                    );
                }
                const jo = ({
                    buyCount: e,
                    itemsInStorage: t,
                    itemsInVehicle: n,
                    price: a,
                    totalPrice: u,
                    specifications: r,
                    media: i,
                }) => {
                    const c = i === x.cJ.Tiny,
                        _ = r.map(({ value: e }, t) =>
                            e && ('avgPiercingPower' === e.paramName || (!c && e.value))
                                ? o().createElement(
                                      s.Fragment,
                                      { key: t },
                                      o().createElement(Oo, Yo({}, e, { media: i, isSuperficial: c })),
                                  )
                                : null,
                        ),
                        d = l()(Go.base, i && Go[`base__${i}`]);
                    return o().createElement(
                        'div',
                        { className: d },
                        o().createElement('div', { className: Go.overall }, _),
                        o().createElement(
                            'div',
                            { className: Go.total },
                            o().createElement(Xo, {
                                buyCount: e,
                                inStorageCount: t,
                                inVehicleCount: n,
                                price: a,
                                totalPrice: u,
                                isSuperficial: c,
                                mediaSize: i,
                            }),
                        ),
                    );
                };
                var Uo = n(2094);
                const Vo = {
                        base: 'Shell_base_4d',
                        base__tiny: 'Shell_base__tiny_a9',
                        shell: 'Shell_shell_61',
                        icon: 'Shell_icon_55',
                        base__large: 'Shell_base__large_aa',
                        base__huge: 'Shell_base__huge_a8',
                        count: 'Shell_count_ed',
                        count__zero: 'Shell_count__zero_45',
                        name: 'Shell_name_29',
                        base__medium: 'Shell_base__medium_5e',
                        ammunition: 'Shell_ammunition_00',
                        specifications: 'Shell_specifications_33',
                    },
                    Zo = R.strings.item_types.shell.kinds,
                    qo = ({
                        type: e,
                        intCD: t,
                        imageName: n,
                        count: a,
                        buyCount: u,
                        price: r,
                        totalPrice: i,
                        itemsInStorage: c,
                        itemsInVehicle: _,
                        specifications: d,
                        availableCount: m,
                        clipCount: p,
                        onShellUpdate: E,
                        maxCount: b,
                        installedSlotId: h,
                        itemInstalledSetupIdx: g,
                        itemInstalledSetupSlotIdx: f,
                        isMountedMoreThanOne: v,
                        mediaSize: C,
                    }) => {
                        const A = (0, s.useCallback)(
                                (e) => {
                                    E && E({ intCD: t, newCount: e });
                                },
                                [E, t],
                            ),
                            D = (0, s.useMemo)(() => {
                                const e = { slotType: k.g9, fieldType: 0, intCD: t };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: h,
                                        itemInstalledSetupIdx: g,
                                        itemInstalledSetupSlotIdx: f,
                                        isMountedMoreThanOne: v,
                                    }),
                                ];
                            }, [t, h, g, f, v]),
                            F = D[0],
                            B = D[1],
                            y = (0, s.useMemo)(() => {
                                const e = ((e) => {
                                    const t = R.images.gui.maps.icons.shell;
                                    switch (e) {
                                        case x.cJ.Huge:
                                        case x.cJ.Large:
                                            return t.large;
                                        default:
                                            return t.big;
                                    }
                                })(C);
                                return { backgroundImage: `url(${e ? e.$dyn(n) : ''})` };
                            }, [n, C]),
                            w = (0, s.useMemo)(() => {
                                const t = 'ARMOR_PIERCING_FSDS' !== e ? Zo.$dyn(e) : Zo.ARMOR_PIERCING_FSDS_SHORT();
                                return (
                                    t && o().createElement('div', { className: Vo.name }, systemLocale.toUpperCase(t))
                                );
                            }, [e]),
                            S = l()(Vo.count, !a && Vo.count__zero),
                            T = l()(Vo.base, C && Vo[`base__${C}`]);
                        return o().createElement(
                            'div',
                            { className: T },
                            o().createElement(
                                'div',
                                { className: Vo.shell },
                                o().createElement(
                                    la,
                                    { args: B },
                                    o().createElement(
                                        Gs.t,
                                        { args: F },
                                        o().createElement(
                                            'div',
                                            { className: Vo.icon, style: y },
                                            o().createElement('div', { className: S }, a),
                                        ),
                                    ),
                                ),
                                w,
                            ),
                            o().createElement(
                                'div',
                                { className: Vo.ammunition },
                                o().createElement(Uo.i, {
                                    parentId: `${t}-slider`,
                                    currentValue: a,
                                    maximum: b,
                                    sliderMaximum: m,
                                    onUpdates: A,
                                    stepCount: p,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Vo.specifications },
                                o().createElement(jo, {
                                    specifications: d,
                                    itemsInStorage: c,
                                    itemsInVehicle: _,
                                    price: r,
                                    buyCount: u,
                                    media: C,
                                    totalPrice: i,
                                }),
                            ),
                        );
                    },
                    Ko = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    Jo = o().memo(
                        ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: u = 'play' }) => {
                            const r = (0, s.useCallback)(() => {
                                    (u && (0, De.G)(u), t(e));
                                }, [e, t, u]),
                                i = (0, s.useCallback)(() => {
                                    a && (0, De.G)(a);
                                }, [a]),
                                c = l()(Ko.base, Ko[`base__${n}`]);
                            return o().createElement('div', {
                                id: `swap-${e}`,
                                onClick: r,
                                onMouseEnter: i,
                                className: c,
                            });
                        },
                    ),
                    Qo = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        shell: 'Sections_shell_a2',
                        base__large: 'Sections_base__large_d0',
                        base__huge: 'Sections_base__huge_b0',
                        swap: 'Sections_swap_be',
                        swap__noEvents: 'Sections_swap__noEvents_2d',
                    };
                function ei() {
                    return (
                        (ei =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ei.apply(this, arguments)
                    );
                }
                const ti = () => {
                    const e = (0, w.m)(ai),
                        t = e.installedCount,
                        n = e.maxCount,
                        a = e.clipCount,
                        u = e.onShellUpdate,
                        r = e.onSlotAction,
                        i = (0, w.m)(`${ai}.slots`),
                        c = (0, w.m)('model.lastSlotAction'),
                        _ = c.leftID,
                        d = c.rightID,
                        m = c.actionType,
                        p = (0, s.useState)(!1),
                        E = p[0],
                        b = p[1],
                        h = (0, x.GS)(),
                        g = n - t,
                        f = (0, s.useCallback)(
                            (e) => {
                                (E || r({ actionType: Kn, leftID: e, rightID: e + 1 }), b(!0));
                            },
                            [r, E],
                        ),
                        v = (0, s.useCallback)(() => {
                            b(!1);
                        }, [b]),
                        C = l()(Qo.base, Qo[`base__${h}`]);
                    return o().createElement(
                        'div',
                        { className: C },
                        i.map(
                            ({ value: e }, t) =>
                                Boolean(e) &&
                                o().createElement(
                                    s.Fragment,
                                    { key: t },
                                    o().createElement(
                                        Io,
                                        {
                                            index: t,
                                            uniqueKey: e.intCD,
                                            leftID: _,
                                            rightID: d,
                                            actionType: m,
                                            mediaSize: h,
                                            onTransitionEnd: v,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Qo.shell },
                                            o().createElement(
                                                qo,
                                                ei({}, e, {
                                                    clipCount: a,
                                                    maxCount: n,
                                                    availableCount: g + e.count,
                                                    mediaSize: h,
                                                    onShellUpdate: u,
                                                }),
                                            ),
                                        ),
                                    ),
                                    t !== i.length - 1 &&
                                        o().createElement(
                                            'div',
                                            { className: Qo.swap },
                                            o().createElement(Jo, { id: t, mediaSize: h, onSwap: f }),
                                        ),
                                ),
                        ),
                    );
                };
                var ni = n(5096);
                const ai = 'model.tankSetup.shellsSetup',
                    ui = () => {
                        const e = (0, x.GS)(),
                            t = (0, w.m)(ai),
                            n = t.onDealConfirmed,
                            a = t.onDealCancelled,
                            u = t.onAutoRenewalChanged;
                        return o().createElement(x.Ar, {
                            header: o().createElement(Qa, {
                                title: R.strings.tank_setup.section.shells(),
                                content: o().createElement(ni.k, { isShortened: !0, trackChanges: !0, modelPath: ai }),
                            }),
                            content: o().createElement(ti, null),
                            footer: o().createElement(Eu.w, {
                                withConfirmation: !0,
                                renewalType: pu.m.Shells,
                                parentModelPath: ai,
                                mediaSize: e,
                                onDealConfirmed: n,
                                onDealCancelled: a,
                                onAutoRenewalChanged: u,
                            }),
                        });
                    },
                    ri = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    };
                function si(e, t, n, a, u, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, u);
                }
                function oi(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (a, u) {
                            var r = e.apply(t, n);
                            function s(e) {
                                si(r, a, u, s, o, 'next', e);
                            }
                            function o(e) {
                                si(r, a, u, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const ii = ({ isHidden: e = !1 }) => {
                        const t = (0, s.useState)(!1),
                            n = t[0],
                            a = t[1],
                            u = (0, s.useRef)(null),
                            r = (0, Un.m2)('model', !1).onResized,
                            i = (0, Un.m2)('model.vehicleInfo', !0),
                            c = (0, x.GS)();
                        (0, s.useEffect)(() => {
                            const e = (0, S.v)(() => a(!0));
                            return () => e();
                        }, []);
                        const _ = (0, s.useCallback)(
                            oi(function* () {
                                (yield (0, Gt.Eu)(), yield $n());
                                const e = u.current;
                                e &&
                                    r({
                                        x: Fe.O.view.pxToRem(e.getBoundingClientRect().x),
                                        width: Fe.O.view.pxToRem(e.offsetWidth),
                                    });
                            }),
                            [r],
                        );
                        ((0, s.useEffect)(() => {
                            if (!n) return (0, S.v)(_);
                        }, [_, n]),
                            (0, s.useEffect)(
                                () => (
                                    engine.on('clientResized', _),
                                    () => {
                                        engine.off('clientResized', _);
                                    }
                                ),
                                [_, r],
                            ));
                        const d = l()(ri.base, c && ri[`base__${c}`], e && ri.base__hidden);
                        return o().createElement('div', { className: d, ref: u }, o().createElement(At, i));
                    },
                    li = {
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
                    ci = [k.zn, k.g9, k.mH, k.G$, k.YN],
                    _i = (e, t) => (t === e ? '' : ci.indexOf(t) > ci.indexOf(e) ? 'right' : 'left'),
                    di = ({ children: e, selectedSetup: t }) => {
                        const n = o().createRef(),
                            a = (0, s.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            u = (0, s.useMemo)(() => {
                                const e = _i(a.current.selectedSetup, t);
                                return { enter: li[`base__${e}Enter`] };
                            }, [t]),
                            r = (0, s.useCallback)(
                                (e) => {
                                    const u = _i(a.current.selectedSetup, t);
                                    ((e.className = l()(li.base, li.base__exit)),
                                        e.classList.add(li[`base__${u}Exit`]),
                                        (a.current.animatedElements[t] = n));
                                    (Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(li.base__previous);
                                    }),
                                        n.current && n.current.classList.add(li.base__previous));
                                },
                                [n, t],
                            ),
                            i = (0, s.useCallback)(
                                (e) => {
                                    const n = _i(a.current.previousSelectedSetup, t);
                                    ((e.className = li.base), e.classList.add(li[`base__${n}Enter`]));
                                },
                                [t],
                            ),
                            c = (0, s.useCallback)(
                                (e) => {
                                    const n = _i(a.current.previousSelectedSetup, t);
                                    e.classList.add(li[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, s.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            o().createElement(
                                Lo.Z,
                                null,
                                o().createElement(
                                    Vu.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: u,
                                        onExit: r,
                                        onEnter: i,
                                        onEntering: c,
                                    },
                                    o().createElement('div', { className: li.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    mi = ({ compare: e = !1 }) => {
                        const t = (0, w.m)('model.tankSetup').selectedSetup;
                        return o().createElement(
                            s.Fragment,
                            null,
                            o().createElement(
                                di,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case k.zn:
                                            return o().createElement(xo, { compare: e });
                                        case k.g9:
                                            return o().createElement(ui, null);
                                        case k.mH:
                                            return o().createElement(gs, { compare: e });
                                        case k.G$:
                                            return o().createElement(ns, { compare: e });
                                        case k.YN:
                                            return o().createElement(du, null);
                                        default:
                                            return o().createElement(xo, { compare: e });
                                    }
                                })(),
                            ),
                            !e && o().createElement(ii, { isHidden: t === k.YN }),
                        );
                    };
                var pi = n(9152);
                const Ei = () => {
                    const e = (0, w.m)('model', !1),
                        t = e.onClose,
                        n = e.onViewRendered,
                        a = e.onAnimationEnd,
                        u = (0, w.m)('model').show;
                    (0, s.useEffect)(() => (0, S.v)(n), [n]);
                    const r = (0, s.useCallback)(() => a(), [a]),
                        i = (0, s.useCallback)(() => t(), [t]);
                    return o().createElement(pi.S, {
                        onClose: i,
                        content: o().createElement(mi, { compare: !0 }),
                        show: u,
                        onAnimationDone: r,
                    });
                };
                engine.whenReady.then(() => {
                    y().render(
                        o().createElement(F, null, o().createElement(Ei, null)),
                        document.getElementById('root'),
                    );
                });
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => C });
                var a = n(6483),
                    u = n.n(a),
                    r = n(3457),
                    s = n(2106),
                    o = n(6373),
                    i = n(6179),
                    l = n.n(i);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    E = 'Action_image_e9',
                    b = 'Action_button_74',
                    h = R.strings.tank_setup.tooltips.action,
                    g = ['cancel', 'undo'],
                    f = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var v;
                !(function (e) {
                    ((e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn'));
                })(v || (v = {}));
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: n = '',
                    show: a = !1,
                    disabled: C = !1,
                    disabledTooltipText: A,
                    tooltipBodyPath: D,
                    buttonType: F = s.L.primary,
                    isModernized: B,
                    isFreeToDemount: y,
                    level: w,
                    onClick: S,
                }) => {
                    const k = (0, i.useRef)(null),
                        T = (0, i.useRef)(v.Hidden),
                        x = (0, i.useRef)(!1),
                        L = (0, i.useState)(!a),
                        M = L[0],
                        N = L[1],
                        I = (0, i.useState)(!1),
                        P = I[0],
                        O = I[1],
                        H = (0, i.useState)(),
                        W = H[0],
                        $ = H[1],
                        z = (0, i.useCallback)(() => {
                            const e = T.current;
                            e === v.FadeIn
                                ? ((T.current = v.Hidden), N(!0))
                                : e === v.FadeOut && (T.current = v.Visible);
                        }, []);
                    ((0, i.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', z),
                                () => {
                                    e.removeEventListener('animationend', z);
                                }
                            );
                    }, [z]),
                        (0, i.useEffect)(() => {
                            a !== x.current &&
                                (a ? ((T.current = v.FadeOut), N(!1)) : (T.current = v.FadeIn), (x.current = a));
                        }, [a]),
                        (0, i.useEffect)(() => {
                            if (P) {
                                const e = setTimeout(() => O(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [P]),
                        (0, i.useEffect)(() => () => W && clearTimeout(W), [W]));
                    const X = (0, i.useCallback)(() => {
                            P || (O(!0), T.current === v.Visible && $(setTimeout(() => S(t), 200)));
                        }, [t, S, P]),
                        G = B ? f(t, w) : t,
                        Y = (0, i.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? f(e, t) : e))(t, w, y, B);
                            return {
                                header: h.title.$dyn(e),
                                body: g.includes(e) ? void 0 : h.description.$dyn(D || e),
                            };
                        }, [t, C, A, y, B, w, D]),
                        j = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: u()(c, a ? d : _, M && m) },
                        l().createElement(
                            o.i,
                            Y,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    r.u5,
                                    { onClick: X, type: F, mixClass: b, disabled: C },
                                    l().createElement('div', { className: E, style: j }),
                                ),
                            ),
                        ),
                    );
                };
            },
            9220: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => W });
                var a = n(6483),
                    u = n.n(a),
                    r = n(3415),
                    s = n(1856),
                    o = n(8526),
                    i = n(6179),
                    l = n.n(i);
                var c = n(5521),
                    _ = n(4179);
                let d, m;
                (!(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected'));
                })(d || (d = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(m || (m = {})));
                var p = n(6373);
                const E = 'TextOverflow_base_3b',
                    b = ({ content: e, classMix: t }) => {
                        const n = (0, i.useRef)(null),
                            a = (0, i.useState)(!0),
                            r = a[0],
                            o = a[1];
                        return (
                            (0, i.useEffect)(() =>
                                (0, s.v)(() => {
                                    const e = n.current;
                                    e && e.offsetWidth >= e.scrollWidth && o(!1);
                                }),
                            ),
                            l().createElement(
                                p.i,
                                { isEnabled: r, body: e },
                                l().createElement('div', { ref: n, className: u()(E, t) }, e),
                            )
                        );
                    };
                var h = n(7727);
                const g = {
                    base: 'DropDownControl_base_46',
                    base__small: 'DropDownControl_base__small_22',
                    base__medium: 'DropDownControl_base__medium_09',
                    base__over: 'DropDownControl_base__over_e7',
                    base__down: 'DropDownControl_base__down_1c',
                    base__open: 'DropDownControl_base__open_e3',
                    base__focused: 'DropDownControl_base__focused_63',
                    base__selected: 'DropDownControl_base__selected_46',
                    base__disabled: 'DropDownControl_base__disabled_37',
                    label: 'DropDownControl_label_12',
                    label__small: 'DropDownControl_label__small_e7',
                    label__medium: 'DropDownControl_label__medium_0b',
                    label__placeholder: 'DropDownControl_label__placeholder_98',
                    button: 'DropDownControl_button_cb',
                    button__small: 'DropDownControl_button__small_b5',
                    button__medium: 'DropDownControl_button__medium_14',
                    gradient: 'DropDownControl_gradient_b5',
                    disabled: 'DropDownControl_disabled_4e',
                    arrow: 'DropDownControl_arrow_de',
                    arrow__small: 'DropDownControl_arrow__small_77',
                    arrow__medium: 'DropDownControl_arrow__medium_3d',
                    alert: 'DropDownControl_alert_75',
                    blink: 'DropDownControl_blink_68',
                };
                let f;
                !(function (e) {
                    ((e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down'));
                })(f || (f = {}));
                const v = (0, i.memo)(
                    ({
                        parentId: e,
                        variant: t = d.Basic,
                        size: n = m.Medium,
                        isOpen: a,
                        placeholder: r = R.strings.common.dropdown.placeholder.select(),
                        label: s = '',
                        classMix: o,
                        onClick: c,
                        soundHover: _,
                        soundClick: p,
                        customControl: E,
                    }) => {
                        const v = (0, i.useState)(f.Out),
                            C = v[0],
                            A = v[1],
                            D = (0, i.useState)(!1),
                            F = D[0],
                            B = D[1],
                            y = t === d.Disabled,
                            w = y || t === d.Basic,
                            S = (0, i.useCallback)(() => {
                                y || (A(f.Over), _ && (0, h.G)(_));
                            }, [y, _]),
                            k = (0, i.useCallback)(() => {
                                y || (A(f.Down), p && (0, h.G)(p));
                            }, [y, p]),
                            T = (0, i.useCallback)(() => {
                                (!y && A(f.Over), !w && B(!0));
                            }, [y, w]),
                            x = (0, i.useCallback)((e) => c && c(e), [c]),
                            L = (0, i.useCallback)(() => A(f.Out), []);
                        ((0, i.useEffect)(() => {
                            w || B(!1);
                        }, [t, w]),
                            (0, i.useEffect)(() => {
                                y && L();
                            }, [y, L]));
                        const M = u()(g.base, a && g.base__open, g[`base__${C}`], (w || !F) && g[`base__${t}`], o);
                        return l().createElement(
                            'div',
                            {
                                id: e ? `${e}_control` : void 0,
                                className: M,
                                onMouseEnter: S,
                                onMouseUp: T,
                                onMouseDown: k,
                                onMouseLeave: L,
                                onClick: x,
                            },
                            !F && t === d.Alert && l().createElement('div', { className: g.alert }),
                            l().createElement(
                                'div',
                                { className: u()(g.label, g[`label__${n}`], !s && g.label__placeholder) },
                                E || l().createElement(b, { content: s || r }),
                            ),
                            l().createElement(
                                'div',
                                { className: u()(g.button, g[`button__${n}`]) },
                                l().createElement('div', { className: u()(g.arrow, g[`arrow__${n}`]) }),
                                C === f.Over && l().createElement('div', { className: g.gradient }),
                                y && l().createElement('div', { className: g.disabled }),
                            ),
                        );
                    },
                );
                var C = n(2344);
                var A = n(570);
                const D = [
                    'children',
                    'isEnabled',
                    'selectedItemId',
                    'scrollAreaKey',
                    'withCompleteTrigger',
                    'containerClasses',
                ];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const B = (e) => {
                        let t = e.children,
                            n = e.isEnabled,
                            a = void 0 === n || n,
                            u = e.selectedItemId,
                            r = e.scrollAreaKey,
                            o = void 0 === r ? 'scrollArea' : r,
                            c = e.withCompleteTrigger,
                            _ = void 0 !== c && c,
                            d = e.containerClasses,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, D);
                        const p = (0, i.useState)(!1),
                            E = p[0],
                            b = p[1],
                            h = (0, i.useRef)({}),
                            g = (0, i.useRef)(null),
                            f = (0, i.useRef)(null),
                            v = (0, i.useRef)(null),
                            C = (0, i.useCallback)(() => {
                                b(!0);
                            }, []),
                            B = (0, i.useCallback)(() => {
                                b(!1);
                            }, []),
                            y = (0, i.useCallback)(() => {
                                const e = v.current,
                                    t = g.current,
                                    n = h.current;
                                if (e && n && t) {
                                    const a = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    n.setScrollTop(a, void 0, _ ? C : void 0);
                                }
                            }, [C, _]);
                        (0, i.useEffect)(() => {
                            if (a && null !== u) return (0, s.v)(y);
                        }, [o, y, u, a]);
                        const w = !(!f.current || !f.current.scrollbar) && f.current.scrollbar.scrollbarYActive,
                            S = {
                                scrollContainerRef: g,
                                selectedItemRef: v,
                                selectedItemId: u,
                                isScrollComplete: E,
                                scrollbarActive: w,
                                onScrollAnimationComplete: B,
                            },
                            k = (0, i.cloneElement)(t, S);
                        return l().createElement(
                            'div',
                            { className: d, ref: g },
                            l().createElement(A.x, F({ ref: f, key: o, scrollAreaContainer: h.current }, m), k),
                        );
                    },
                    y = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    w = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const S = (0, i.memo)((e) => {
                        let t = e.size,
                            n = e.classMix,
                            a = e.onClick,
                            r = e.itemRenderer,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]));
                                return u;
                            })(e, w);
                        const o = s.id,
                            c = s.isSelected,
                            _ = s.isDisabled,
                            d = s.label,
                            m = s.soundHover,
                            p = s.soundClick,
                            E = (0, i.useCallback)(
                                (e) => {
                                    _ || (a && a(e, o));
                                },
                                [o, _, a],
                            ),
                            b = (0, i.useCallback)(() => {
                                _ || (m && (0, h.G)(m));
                            }, [_, m]),
                            g = (0, i.useCallback)(() => {
                                _ || (p && (0, h.G)(p));
                            }, [_, p]),
                            f = u()(y.base, t && y[`base__${t}`], c && y.base__selected, _ && y.base__disabled, n);
                        return l().createElement(
                            'div',
                            { className: f, onMouseEnter: b, onMouseDown: g, onClick: E },
                            r ? r(s) : d,
                        );
                    }),
                    k = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const x = ({
                        size: e,
                        items: t,
                        selectedIds: n,
                        selectedItemId: a,
                        selectedItemRef: r,
                        onClick: s,
                        parentId: o,
                        soundHover: i,
                        soundClick: c,
                        itemClassMix: _,
                        itemRenderer: d,
                        scrollbarActive: m,
                    }) =>
                        l().createElement(
                            'div',
                            { className: u()(k.base, m && k.base__withScroll) },
                            t.map((t) => {
                                const u = `${o}_${t.id}`;
                                return l().createElement(
                                    'div',
                                    { id: o ? u : void 0, key: u, ref: t.id === a ? r : null },
                                    l().createElement(
                                        S,
                                        T({ size: e, soundHover: i, soundClick: c, classMix: _, itemRenderer: d }, t, {
                                            onClick: s,
                                            isSelected: n.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    L = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                        scrollMix: 'DropDownList_scrollMix_45',
                    },
                    M = {
                        handlers: ['click-rail', 'keyboard', 'wheel', 'drag-thumb'],
                        wheelSpeed: 6,
                        suppressScrollX: !0,
                        animationDuration: 300,
                        minScrollbarLength: 20,
                    },
                    N = ({
                        parentId: e,
                        size: t = m.Medium,
                        items: n,
                        selectedIds: a,
                        isOpen: r,
                        autoScroll: s,
                        classMix: o,
                        itemClassMix: c,
                        itemRenderer: _,
                        onClick: d,
                        soundHover: p,
                        soundClick: E,
                    }) => {
                        const b = (0, i.useState)(null),
                            h = b[0],
                            g = b[1],
                            f = (0, C.D9)(r);
                        (0, i.useEffect)(() => {
                            if (r && !f) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const n = e.find((e) => t.includes(e.id));
                                    return n ? n.id : null;
                                })(n, a);
                                null !== e && g(e);
                            }
                            r || g(null);
                        }, [r, n, a, f]);
                        const v = e ? `${e}_list` : void 0;
                        return l().createElement(
                            'div',
                            { id: v, className: u()(L.base, L[`base__${t}`], o) },
                            l().createElement(
                                B,
                                { selectedItemId: h, isEnabled: s, scrollSettings: M, classMix: L.scrollMix },
                                l().createElement(x, {
                                    parentId: e,
                                    items: n,
                                    size: t,
                                    selectedIds: a,
                                    onClick: d,
                                    soundHover: p,
                                    soundClick: E,
                                    itemClassMix: c,
                                    itemRenderer: _,
                                }),
                            ),
                        );
                    },
                    I = {
                        base: 'PureDropDown_base_fc',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    P = (0, i.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: n,
                            selected: a = [],
                            variant: p = d.Basic,
                            size: E = m.Medium,
                            multiple: b = !1,
                            autoScroll: h = !0,
                            placeholder: g,
                            classMix: f,
                            controlRenderer: C,
                            itemRenderer: A,
                            open: D,
                            tooltipArgs: F,
                            onChanges: B,
                            onOpen: y,
                            onClose: w,
                            onClick: S,
                            onClickOutside: k,
                            onMouseEnter: T,
                            onMouseDown: x,
                            onMouseUp: L,
                            onMouseLeave: M,
                            soundHover: R = 'highlight',
                            soundClick: P = 'play',
                            soundItemHover: O,
                            soundItemClick: H,
                        }) => {
                            const W = (0, i.useRef)(null),
                                $ = (0, i.useRef)(null),
                                z = (0, i.useRef)({ open: !1, listAbove: !1 }),
                                X = (0, i.useState)(!1),
                                G = X[0],
                                Y = X[1],
                                j = (0, i.useState)(!1),
                                U = j[0],
                                V = j[1],
                                Z = (0, i.useState)(window.innerHeight),
                                q = Z[0],
                                K = Z[1],
                                J = ((e, t) => {
                                    const n = Array.isArray(e) ? e : [e];
                                    return !t && n.length > 1 ? n.slice(0, 1) : n;
                                })(a, b),
                                Q = p !== d.Disabled,
                                ee = void 0 === D,
                                te = Boolean(ee ? G : D);
                            var ne, ae;
                            ((ne = () => {
                                K(window.innerHeight);
                            }),
                                (ae = []),
                                (0, i.useEffect)(
                                    () => (
                                        window.addEventListener('resize', ne),
                                        () => window.removeEventListener('resize', ne)
                                    ),
                                    ae,
                                ));
                            const ue = (0, i.useCallback)(() => {
                                z.current.open && ((z.current.open = !1), Y(!1), w && w());
                            }, [w]);
                            (0, o.gd)(te ? c.n.ESCAPE : c.n.NONE, ue, te);
                            const re = (0, i.useCallback)(() => {
                                (k && k(), ee && (Y(!1), (z.current.open = !1), w && w()));
                            }, [k, w, ee]);
                            ((0, i.useEffect)(() => {
                                const e = W.current;
                                if (e && te)
                                    return (
                                        _.c1.register(e, re),
                                        () => {
                                            _.c1.unregister(e, re);
                                        }
                                    );
                            }, [te, re]),
                                (0, i.useEffect)(() => {
                                    void 0 !== D && (z.current.open = D);
                                }, [D]));
                            const se = (0, i.useCallback)(() => {
                                if (!W.current || !$.current) return;
                                const e = t && t.current,
                                    n = e ? e.getBoundingClientRect().bottom : q,
                                    a =
                                        W.current.getBoundingClientRect().bottom +
                                            $.current.getBoundingClientRect().height >
                                        n;
                                a !== z.current.listAbove && ((z.current.listAbove = a), V(a));
                            }, [t, q]);
                            (0, i.useEffect)(() => (0, s.v)(se), [se, E, n.length]);
                            const oe = (0, i.useCallback)(
                                    (e) => {
                                        const t = J.findIndex((t) => t === e) > -1;
                                        let n = [];
                                        ((n = b ? (t ? J.filter((t) => t !== e) : [e, ...J]) : t ? [] : [e]),
                                            B && B(n));
                                    },
                                    [b, B, J],
                                ),
                                ie = (0, i.useCallback)(() => {
                                    ee &&
                                        ((z.current.open = !z.current.open),
                                        Y(z.current.open),
                                        z.current.open ? y && y() : w && w());
                                }, [ee, y, w]),
                                le = (0, i.useCallback)(
                                    (e) => {
                                        (Q && ie(), S && S(e));
                                    },
                                    [Q, S, ie],
                                ),
                                ce = (0, i.useCallback)(
                                    (e, t) => {
                                        (S && S(e, t), oe(t), !b && ie());
                                    },
                                    [S, b, ie, oe],
                                ),
                                _e = (0, i.useCallback)((e) => T && T(e), [T]),
                                de = (0, i.useCallback)((e) => L && L(e), [L]),
                                me = (0, i.useCallback)((e) => x && x(e), [x]),
                                pe = (0, i.useCallback)((e) => M && M(e), [M]),
                                Ee = (0, i.useMemo)(
                                    () =>
                                        n
                                            .filter((e) => J.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [n, J],
                                ),
                                be = (0, i.useMemo)(() => n.filter((e) => J.includes(e.id)), [n, J]),
                                he = C ? C(be) : void 0;
                            return l().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: W,
                                    className: u()(I.base, I[`base__${E}`], f && f.base),
                                    onMouseEnter: _e,
                                    onMouseUp: de,
                                    onMouseDown: me,
                                    onMouseLeave: pe,
                                },
                                l().createElement(
                                    'div',
                                    { className: u()(I.control, te && I.control__down) },
                                    l().createElement(
                                        r.l,
                                        { tooltipArgs: F },
                                        l().createElement(v, {
                                            parentId: e,
                                            size: E,
                                            variant: p,
                                            isOpen: te,
                                            placeholder: g,
                                            label: Ee,
                                            classMix: f && f.control,
                                            onClick: le,
                                            soundHover: R,
                                            soundClick: P,
                                            customControl: he,
                                        }),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    {
                                        ref: $,
                                        className: u()(
                                            I.list,
                                            te ? I.list__down : I.list__up,
                                            U ? I.list__above : I.list__under,
                                        ),
                                    },
                                    l().createElement(N, {
                                        parentId: e,
                                        size: E,
                                        items: n,
                                        selectedIds: J,
                                        isOpen: te,
                                        autoScroll: h,
                                        classMix: f && f.list,
                                        itemClassMix: f && f.item,
                                        itemRenderer: A,
                                        onClick: ce,
                                        soundHover: O || R,
                                        soundClick: H || P,
                                    }),
                                ),
                            );
                        },
                    ),
                    O = 'AutoRenewalDropdown_base_3d',
                    H = 'AutoRenewalDropdown_dropdownList_c6',
                    W = ({
                        nameList: e,
                        selectedAutoRenewalType: t,
                        onChange: n,
                        onOpen: a,
                        isAutoRenewalEnabled: u,
                        tooltipArgs: r,
                    }) => {
                        const s = (0, i.useState)(t),
                            o = s[0],
                            c = s[1];
                        return l().createElement(P, {
                            items: e,
                            selected: o,
                            onChanges: (e) => {
                                null != e && e.length && (c(e[0]), n(e[0]));
                            },
                            tooltipArgs: r,
                            onOpen: a,
                            size: m.Small,
                            variant: u ? d.Basic : d.Disabled,
                            classMix: { list: H, base: O },
                        });
                    };
            },
            8586: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => g });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r),
                    o = n(3457),
                    i = n(6373);
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const b = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: r,
                    withToggle: l = !1,
                    toggle: b,
                    buttonProps: h,
                }) => {
                    const g = (0, a.useCallback)(() => {
                            r(t, b);
                        }, [t, r, b]),
                        f = (0, a.useMemo)(() => {
                            if (l) {
                                const t = s()(m, b && p);
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
                    return u().createElement(i.i, n, u().createElement(o.u5, E({}, h, { onClick: g }), f));
                };
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const g = ({ ctaConfigs: e }) =>
                    u().createElement(
                        'div',
                        { className: l },
                        e.map((e) => u().createElement(b, h({ key: e.ctaType }, e))),
                    );
            },
            7208: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => p });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r),
                    o = n(2558),
                    i = n(8934),
                    l = n(4179);
                const c = 'Animation_base_ab',
                    _ = 'Animation_base__withAnimation_41',
                    d = 'Animation_base__enter_1e',
                    m = 'Animation_base__exit_88',
                    p = ({ children: e, when: t, canAccept: n }) => {
                        const r = s()(c, _),
                            p = (0, a.useCallback)((e, t) => {
                                (0, l.Eu)().then(() => {
                                    ((e.className = ''), e.classList.add(c), e.classList.add(t));
                                });
                            }, []),
                            E = (0, a.useCallback)(
                                (e) => {
                                    p(e, d);
                                },
                                [p],
                            ),
                            b = (0, a.useCallback)(
                                (e) => {
                                    p(e, m);
                                },
                                [p],
                            );
                        return t
                            ? u().createElement(
                                  o.Z,
                                  null,
                                  u().createElement(
                                      i.Z,
                                      { in: n, timeout: 500, onEnter: E, onExit: b, key: `index-${n}` },
                                      u().createElement('div', { className: r }, e),
                                  ),
                              )
                            : u().createElement('div', { className: c }, e);
                    };
            },
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => p, m: () => m });
                var a = n(2262),
                    u = n(8844),
                    r = n(6373),
                    s = n(483),
                    o = n(9056),
                    i = n(6179),
                    l = n.n(i),
                    c = n(9220),
                    _ = n(8935);
                const d = R.strings.tank_setup;
                let m;
                !(function (e) {
                    ((e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair'));
                })(m || (m = {}));
                const p = (0, i.memo)(
                    ({
                        modelPath: e,
                        label: t = d.dealPanel.autoRenew(),
                        onValueChanged: n,
                        renewType: p = m.General,
                    }) => {
                        const E = (0, o.m)(e),
                            b = E.isAutoRenewalEnabled,
                            h = E.onAutoRenewalChanged,
                            g = E.selectedAutoRenewalType,
                            f = (0, i.useCallback)(() => {
                                const e = { type: g, value: !b };
                                (h && h(e), n && n(e));
                            }, [n, h, b, g]),
                            v = (0, i.useMemo)(() => {
                                const e = d.tooltip.autoRenewal;
                                return {
                                    header: e.header.$dyn(p) || e.header.general(),
                                    body: p === m.General ? '' : e.body.$dyn(p),
                                };
                            }, [p]),
                            C = (0, i.useMemo)(() => {
                                const e = d.tooltip.autoRenewal;
                                return { header: e.dropdown.header.$dyn(g), body: e.dropdown.body.$dyn(g) };
                            }, [g]),
                            A = (0, i.useCallback)(
                                (e) => {
                                    if (!b) return;
                                    const t = { type: e, value: b };
                                    (h && h(t), n && n(t));
                                },
                                [n, h, b],
                            ),
                            D = (0, i.useMemo)(() => {
                                const e = [s.t8.Soft, s.t8.Hard],
                                    t = [];
                                for (let n = 0; n < e.length; n++) {
                                    const a = e[n],
                                        u = d.dealPanel.autoRenewType.$dyn(a);
                                    t.push({ id: a, label: u });
                                }
                                return t;
                            }, []);
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(
                                r.i,
                                v,
                                l().createElement(a.XZ, {
                                    id: 'renewal-setup-checkbox',
                                    isChecked: b,
                                    text: t,
                                    onChange: f,
                                    alignment: u.N3.Center,
                                }),
                            ),
                            p === m.Boosters &&
                                l().createElement(
                                    'div',
                                    { className: _.Z.dropdown },
                                    l().createElement(c.v, {
                                        nameList: D,
                                        selectedAutoRenewalType: g,
                                        onChange: A,
                                        isAutoRenewalEnabled: b,
                                        tooltipArgs: C,
                                    }),
                                ),
                        );
                    },
                );
            },
            8982: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => d });
                var a = n(6179),
                    u = n.n(a),
                    r = n(3457),
                    s = n(6373),
                    o = n(7383);
                const i = 'ConfirmButton_base_75',
                    l = u().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: s }) => {
                        const o = R.strings.tank_setup.dealPanel.button.$dyn(e),
                            l = (0, a.useCallback)(() => n && n(), [n]);
                        return u().createElement(
                            'div',
                            { ref: s, className: i, id: 'deal-panel-confirm' },
                            u().createElement(r.u5, { size: r.qE.medium, disabled: t, onClick: l }, o),
                        );
                    }),
                    c = 'Controls_base_d3',
                    _ = 'Controls_button_f8',
                    d = u().memo(
                        ({
                            applyBtnString: e = o.YR,
                            isDisabled: t,
                            canCancel: n,
                            onCancel: a,
                            onConfirm: i,
                            confirmButtonRef: d,
                        }) => {
                            const m = R.strings.tank_setup.dealPanel,
                                p = u().createElement(l, {
                                    applyBtnString: e,
                                    isDisabled: t,
                                    onConfirm: i,
                                    confirmButtonRef: d,
                                });
                            return u().createElement(
                                'div',
                                { id: 'deal-panel-controls', className: c },
                                t
                                    ? u().createElement(
                                          s.i,
                                          { body: m.tooltip.notEnough() },
                                          u().createElement('div', null, p),
                                      )
                                    : p,
                                u().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    u().createElement(
                                        r.u5,
                                        {
                                            size: r.qE.medium,
                                            type: r.L$.secondary,
                                            mixClass: _,
                                            disabled: !n,
                                            onClick: a,
                                        },
                                        m.button.cancel(),
                                    ),
                                ),
                            );
                        },
                    );
            },
            8772: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => A });
                var a = n(6483),
                    u = n.n(a),
                    r = n(9056),
                    s = n(6179),
                    o = n.n(s),
                    i = n(1922),
                    l = n(3934),
                    c = n(7208),
                    _ = n(5851),
                    d = n(8982);
                const m = {
                    base: 'DealPanel_base_10',
                    base__tiny: 'DealPanel_base__tiny_86',
                    base__small: 'DealPanel_base__small_f6',
                    base__medium: 'DealPanel_base__medium_8a',
                    base__renewal: 'DealPanel_base__renewal_8b',
                    base__large: 'DealPanel_base__large_7b',
                    base__huge: 'DealPanel_base__huge_b3',
                    base__dialog: 'DealPanel_base__dialog_b4',
                    storage: 'DealPanel_storage_40',
                    storage__medium: 'DealPanel_storage__medium_fe',
                    storage__large: 'DealPanel_storage__large_1e',
                    storage__huge: 'DealPanel_storage__huge_e3',
                    from: 'DealPanel_from_70',
                    plus: 'DealPanel_plus_b0',
                    renewal: 'DealPanel_renewal_a8',
                    renewal__dialog: 'DealPanel_renewal__dialog_aa',
                    control: 'DealPanel_control_39',
                    totalPrice: 'DealPanel_totalPrice_2d',
                    totalPrice__mixed: 'DealPanel_totalPrice__mixed_fd',
                };
                var p = n(8401);
                const E = 'TotalPrice_base_d9',
                    b = 'TotalPrice_message_66',
                    h = 'TotalPrice_message__hidden_29',
                    g = 'TotalPrice_plus_f0',
                    f = ({ parentId: e, isHideMessage: t, priceLabel: n, price: a, defPrice: r, discount: s }) => {
                        const i = u()(b, t && h);
                        return o().createElement(
                            'div',
                            { id: `${e}-total-price`, className: E },
                            o().createElement('div', { className: i }, n),
                            o().createElement(p.t, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: a,
                                defPrice: r,
                                discount: s,
                                priceSeparator: o().createElement('div', { className: g }),
                            }),
                        );
                    };
                let v;
                !(function (e) {
                    ((e.Column = 'column'), (e.Row = 'row'));
                })(v || (v = {}));
                const C = R.strings.tank_setup.dealPanel,
                    A = ({
                        renewalType: e,
                        withConfirmation: t = !1,
                        mediaSize: n = i.cJ.Medium,
                        parentModelPath: a,
                        panelType: p = v.Row,
                        priceLabel: E = C.toBePaid(),
                        autoRenewalLabel: b,
                        onAutoRenewalChanged: h,
                        onDealConfirmed: g,
                        onDealCancelled: A,
                    }) => {
                        const D = `${a}.dealPanel`,
                            F = (0, r.m)(D),
                            B = F.totalItemsInStorage,
                            y = F.isDisabled,
                            w = F.canAccept,
                            S = F.canCancel,
                            k = F.price,
                            T = F.defPrice,
                            x = F.discount,
                            L = (0, s.useRef)(null),
                            M = n === i.cJ.Tiny || n === i.cJ.Small,
                            N = (0, s.useCallback)(() => g && g(), [g]),
                            R = (0, s.useCallback)(() => A && A(), [A]),
                            I = p === v.Row,
                            P = Boolean(B),
                            O = Boolean(k.length),
                            H = M && P && O,
                            W = u()(m.base, n && m[`base__${n}`], e && m.base__renewal, !I && m.base__dialog),
                            $ = u()(m.storage, n && m[`storage__${n}`]),
                            z = u()(m.renewal, !I && m.renewal__dialog),
                            X = u()(m.totalPrice, H && m.totalPrice__mixed);
                        return o().createElement(
                            'div',
                            { className: W },
                            e &&
                                o().createElement(
                                    'div',
                                    { className: z },
                                    o().createElement(_.Y, { modelPath: D, renewType: e, onValueChanged: h, label: b }),
                                ),
                            o().createElement(
                                c.f,
                                { when: I, canAccept: w },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    P &&
                                        o().createElement(
                                            'div',
                                            { className: $ },
                                            !M && o().createElement('div', { className: m.from }, C.fromStorage()),
                                            o().createElement(l.K, { valueFirst: !0, itemsInStorage: B }),
                                        ),
                                    H && o().createElement('div', { className: m.plus }),
                                    O &&
                                        o().createElement(
                                            'div',
                                            { className: X },
                                            o().createElement(f, {
                                                parentId: 'deal-panel',
                                                priceLabel: E,
                                                price: k,
                                                defPrice: T,
                                                discount: x,
                                                isHideMessage: M && I,
                                            }),
                                        ),
                                    t &&
                                        w &&
                                        o().createElement(
                                            'div',
                                            { className: m.control },
                                            o().createElement(d.Z, {
                                                isDisabled: y,
                                                canCancel: S,
                                                onCancel: R,
                                                onConfirm: N,
                                                confirmButtonRef: L,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    };
            },
            8750: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => l, F: () => i });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r);
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
                    const n = s()(o.base, e !== i.SMALL && o[`base__${e}`]),
                        r = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return u().createElement('div', { className: n, style: r });
                };
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => m });
                var a = n(6483),
                    u = n.n(a),
                    r = n(3649),
                    s = n(6179),
                    o = n.n(s),
                    i = n(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = 'FormatColorTagText_effect_0f',
                    d = 'FormatColorTagText_icon_36',
                    m = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: a,
                        classColorMix: m,
                        linesShown: p,
                        withOffset: E = !0,
                        effect: b,
                    }) => {
                        const h = u()(l, m),
                            g = (0, r.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? o().createElement(
                                              'span',
                                              { key: t, className: h },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          o().createElement(
                                              'span',
                                              { key: t, className: c },
                                              o().createElement(i.n, {
                                                  mediaSize: n,
                                                  blocks: (0, i.D)(e),
                                                  linesCount: p,
                                              }),
                                          ),
                                ),
                            f = (0, s.useMemo)(
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
                                                      { key: t, className: h },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : o().createElement('span', { key: t }, `${e} `),
                                        ),
                                [h, t],
                            ),
                            v = u()(l, a);
                        return o().createElement(
                            'div',
                            { id: `${e}-details`, className: v },
                            b &&
                                o().createElement(
                                    'span',
                                    { className: _ },
                                    o().createElement('span', { className: d }),
                                    b,
                                ),
                            E ? g : o().createElement(i.n, { mediaSize: n, blocks: f, linesCount: p }),
                        );
                    };
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => d });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r),
                    o = n(7405),
                    i = n(329);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: r = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length),
                            E = s()(c, p && _);
                        return u().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (r || Boolean(e.value)) &&
                                    u().createElement(
                                        a.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        u().createElement(
                                            'div',
                                            { className: E },
                                            u().createElement(o.F, {
                                                key: t,
                                                isDiscount: p,
                                                size: d ? i.et.big : i.et.small,
                                                type: e.name,
                                                value: e.value,
                                                isEnough: e.isEnough,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    };
            },
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { S: () => m });
                var a = n(6483),
                    u = n.n(a),
                    r = n(8089),
                    s = n(8526),
                    o = n(5521),
                    i = n(7727),
                    l = n(6179),
                    c = n.n(l),
                    _ = n(1922);
                const d = {
                        base: 'SetupApp_base_7b',
                        base__shown: 'SetupApp_base__shown_a0',
                        base__compare: 'SetupApp_base__compare_9d',
                        base__setup: 'SetupApp_base__setup_92',
                        close: 'SetupApp_close_da',
                        close__hidden: 'SetupApp_close__hidden_5a',
                        close__small: 'SetupApp_close__small_61',
                        content: 'SetupApp_content_65',
                        content__compare: 'SetupApp_content__compare_6e',
                        content__shown: 'SetupApp_content__shown_dd',
                        'show-app': 'SetupApp_show-app_00',
                        content__hidden: 'SetupApp_content__hidden_78',
                        'hide-app': 'SetupApp_hide-app_29',
                        panel: 'SetupApp_panel_42',
                        back: 'SetupApp_back_20',
                    },
                    m = ({ content: e, panel: t, button: n, show: a = !0, onAnimationDone: m, onClose: p }) => {
                        const E = (0, _.GS)(),
                            b = (0, l.useRef)(null),
                            h = (0, l.useRef)(!1);
                        (0, s.gd)(o.n.ESCAPE, p);
                        const g = !t,
                            f = (0, l.useCallback)(
                                (e) => {
                                    m && e.target === b.current && m();
                                },
                                [m],
                            );
                        ((0, l.useEffect)(() => {
                            (a && (h.current = !0), h.current && (0, i.G)('cons_select_view'));
                        }, [a]),
                            (0, l.useEffect)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', f),
                                        () => {
                                            e.removeEventListener('animationend', f);
                                        }
                                    );
                            }, [f]));
                        const v = u()(d.base, a && d.base__shown, g ? d.base__compare : d.base__setup),
                            C = u()(d.content, g && d.content__compare, d['content__' + (a ? 'shown' : 'hidden')]),
                            A = !a && !h.current,
                            D = u()(d.close, E && d[`close__${E}`]);
                        return c().createElement(
                            'div',
                            { className: v },
                            g && c().createElement('div', { className: d.back }),
                            n,
                            a &&
                                c().createElement(
                                    'div',
                                    { id: 'setup-app-close-btn', className: D },
                                    c().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: p,
                                    }),
                                ),
                            !A && c().createElement('div', { id: 'setup-content', ref: b, className: C }, e),
                            t && c().createElement('div', { className: d.panel }, t),
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => p, D: () => m });
                var a = n(6483),
                    u = n.n(a),
                    r = n(1856),
                    s = n(4179),
                    o = n(6179),
                    i = n.n(o),
                    l = n(6605);
                const c = 'ShortenedText_base_fe',
                    _ = 'ShortenedText_base__shown_af';
                var d = n(3138);
                const m = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => i().createElement('span', { key: t }, `${e} `)),
                    p = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, o.useState)(e),
                            m = a[0],
                            p = a[1],
                            E = (0, o.useState)({ width: 0, height: 0 }),
                            b = E[0],
                            h = E[1],
                            g = (0, o.useRef)(null),
                            f = (0, o.useRef)({ shortened: !1 }),
                            v = (0, o.useCallback)(() => {
                                (0, s.Eu)().then(() => {
                                    const e = (0, l.D)(g);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = g.current;
                                        if (a && isFinite(n)) {
                                            const e = d.O.view.remToPx(t * n);
                                            h({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        ((0, o.useEffect)(() => {
                            if (e.length) return (f.current.shortened && (f.current.shortened = !1), (0, r.v)(v));
                        }, [e, n, v]),
                            (0, o.useEffect)(() => {
                                if (b.height && !f.current.shortened) {
                                    const t = (0, l.M)(g, b.height);
                                    if (-1 !== t) {
                                        const n = e.slice(0, t);
                                        (n.push(i().createElement('span', { key: t }, '...')),
                                            p(n),
                                            (f.current.shortened = !0));
                                    }
                                }
                            }, [e, b, n]));
                        const C = (0, o.useMemo)(() => (b.height ? { maxHeight: `${b.height}rem` } : {}), [b.height]);
                        return i().createElement('div', { ref: g, className: u()(c, b.height && _), style: C }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => r });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    u = (e, t) => e.getBoundingClientRect().top >= t,
                    r = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                r = Array.from(n.children);
                            if (r.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!u(e[n], t)) return -1;
                                    let a = 0,
                                        r = n - 1,
                                        s = !1;
                                    for (; r - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (r - a + 1));
                                        ((s = u(e[n], t)), s ? (r = n) : (a = n));
                                    }
                                    return s || u(e[r], t) ? a : r;
                                })(r, a);
                                if (t > 0) {
                                    const n = r[t].getBoundingClientRect();
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
                    u = n.n(a),
                    r = n(8526),
                    s = n(5521),
                    o = n(7727),
                    i = n(6179),
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
                            { className: u()(_.progressBar, _.base, _[`base__${e}`]), style: i },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !s && l().createElement('div', { className: u()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / a) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                r && l().createElement('div', { className: _.picker }, r),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    E = 'SlideControl_image_61',
                    b = 'SlideControl_image__hover_eb',
                    h = 'SlideControl_image__active_70',
                    g = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = u()(E, n && b, t && h);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: a }),
                        );
                    },
                    f = 'Slider_base_2c',
                    v = 'Slider_slideArea_dd',
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
                    B = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const r = u()(F.base, n && F.base__enabled, F[`base__${t}${n ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: r, onClick: a });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: n,
                        sliderMaximum: a,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: E = !0,
                        stepCount: b = 1,
                    }) => {
                        const h = (0, i.useRef)(null),
                            F = (0, i.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, i.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            w = (0, i.useState)(t),
                            S = w[0],
                            k = w[1],
                            T = (0, i.useState)(!1),
                            x = T[0],
                            L = T[1],
                            M = (0, i.useState)(!1),
                            N = M[0],
                            R = M[1],
                            I = (0, i.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        n = y.current.currentValue;
                                    if (b > 1) {
                                        t *= b;
                                        const e = n % b;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [b],
                            ),
                            P = (0, i.useCallback)(
                                (e, t) => {
                                    if (!h.current) return 0;
                                    const n = h.current.getBoundingClientRect(),
                                        a = y.current.maximum,
                                        u = n.width / a,
                                        r = e - n.left,
                                        s = Math.floor(u > 0 ? r / u : r);
                                    if (s > a) return a;
                                    if (s <= 0) return 0;
                                    if (b > 1) {
                                        let e = s - (s % b);
                                        const n = s - e;
                                        return (
                                            n > 0 && ((t && s > y.current.currentValue) || n > 0.5 * b) && (e += b),
                                            e
                                        );
                                    }
                                    return s;
                                },
                                [b],
                            ),
                            O = (0, i.useCallback)(
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
                            H = t < a,
                            W = t > 0,
                            $ = (0, i.useCallback)(() => {
                                if (H && F.current.over) {
                                    const e = I(!0);
                                    O(e);
                                }
                            }, [H, I, O]),
                            z = (0, i.useCallback)(() => {
                                if (W && F.current.over) {
                                    const e = I(!1);
                                    O(e);
                                }
                            }, [W, I, O]),
                            X = (0, i.useCallback)(() => {
                                ((F.current.down = !1), R(!1));
                            }, []),
                            G = (0, i.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && F.current.down) {
                                        F.current.move = !0;
                                        const t = P(e.clientX);
                                        O(t);
                                    } else X();
                                },
                                [X, P, O],
                            );
                        ((0, r.gd)(s.n.ARROW_UP, $),
                            (0, r.gd)(s.n.ARROW_DOWN, z),
                            (0, i.useEffect)(() => {
                                y.current.maximum = n;
                            }, [n]),
                            (0, i.useEffect)(() => {
                                if (N)
                                    return (
                                        document.addEventListener('mouseup', X),
                                        document.addEventListener('mousemove', G),
                                        () => {
                                            (document.removeEventListener('mouseup', X),
                                                document.removeEventListener('mousemove', G));
                                        }
                                    );
                            }, [N, G, X]),
                            (0, i.useEffect)(() => {
                                ((y.current.sliderMaximum = a), (y.current.sliderMinimum = _));
                            }, [a, _]),
                            (0, i.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]));
                        const Y = (0, i.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((F.current.down = !0), R(!0));
                                },
                                [d],
                            ),
                            j = (0, i.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = P(e.clientX, !F.current.move),
                                        n = y.current,
                                        a = n.currentValue,
                                        u = n.sliderMaximum,
                                        r = n.sliderMinimum;
                                    (O(t), (0, c.u)(a, t, u, r), (F.current.move = !1));
                                },
                                [P, d, O],
                            ),
                            U = (0, i.useCallback)(() => {
                                ((F.current.over = !0), L(!0), (0, o.G)('highlight'));
                            }, []),
                            V = (0, i.useCallback)(() => {
                                ((F.current.over = !1), L(!1));
                            }, []),
                            Z = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        u = t.sliderMinimum,
                                        r = I(e.deltaY > 0);
                                    (O(r), (0, c.u)(n, r, a, u));
                                },
                                [I, O],
                            );
                        return l().createElement(
                            'div',
                            { ref: h, onMouseEnter: U, onMouseLeave: V, onWheel: Z, className: f },
                            E &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: u()(C, A) },
                                        l().createElement(B, { parentId: e, type: 'minus', isEnabled: W, onClick: z }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: u()(C, D) },
                                        l().createElement(B, { parentId: e, type: 'plus', isEnabled: H, onClick: $ }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: j, onMouseDown: Y, className: v },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: S,
                                    availableMaximum: a,
                                    picker: l().createElement(g, { parentId: e, isActive: N, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => E });
                var a = n(9480),
                    u = n(6179),
                    r = n.n(u),
                    s = n(1922),
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
                        const E = o !== s.cJ.None,
                            b = (0, u.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            h = (0, u.useMemo)(() => {
                                let n = '';
                                E && (n = (o === s.cJ.Large || o === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    u = R.images.gui.maps.icons.specialization.$dyn(a);
                                return u && { backgroundImage: `url(${u})` };
                            }, [e, t, o, E]),
                            g = (0, u.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!h) return null;
                        const f = i()(
                                `specialization-${e}`,
                                _.base,
                                E && _[`base__${o}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            v = i()(_.icon, E && _[`icon__${o}`]),
                            C = E ? '' : _.specializationWrapper,
                            A = r().createElement(
                                'div',
                                { key: e, className: f },
                                r().createElement('div', { className: _.glow }),
                                r().createElement('div', { className: v, style: h }),
                            );
                        return r().createElement(
                            c.t,
                            { args: g },
                            d && n
                                ? r().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: b,
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const E = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: n,
                    mediaSize: u = s.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: i,
                }) =>
                    e.length
                        ? r().createElement(
                              'div',
                              { className: m, key: o },
                              a.UI(e, (e, a) =>
                                  r().createElement(
                                      d,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: u,
                                          onSpecializationClick: i,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            3934: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => d });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r);
                const o = 'Storage_base_53',
                    i = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = s()(o, e && i),
                            a = s()(c, 0 === t && _);
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement('div', { className: l }),
                            u().createElement('div', { className: a }, t),
                        );
                    };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    s = n.n(r),
                    o = n(9056),
                    i = n(1922);
                const l = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    c = ({ modelPath: e, isDetailed: t = !1, trackChanges: n = !1, isShortened: a = !1 }) => {
                        const r = (0, i.GS)(),
                            c = (0, o.m)(e, n),
                            _ = c.installedCount,
                            d = c.maxCount,
                            m = _ === d,
                            p = R.strings.tank_setup.shells,
                            E = m ? p.ammunitionFull() : p.ammunitionIncomplete(),
                            b = s()(l.base, !m && l.base__incomplete),
                            h = s()(l.occupancy, !m && l.occupancy__incomplete, l[`occupancy__${r}`]);
                        return u().createElement(
                            'div',
                            { className: b },
                            !a && u().createElement('div', { className: l.tip }, E),
                            t ? `${_}/${d}` : u().createElement('div', { className: h }, `${_}/${d}`),
                        );
                    };
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => u, u: () => r });
                var a = n(7727);
                const u = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    r = (e, t, n, u) => {
                        t > n ||
                            t < u ||
                            (t > e ? (0, a.G)('cons_ammo_roll_plus') : t < e && (0, a.G)('cons_ammo_roll_minus'));
                    };
            },
            483: (e, t, n) => {
                'use strict';
                n.d(t, { t8: () => a });
                let a;
                !(function (e) {
                    ((e.Undefined = 'Undefined'), (e.Soft = 'soft'), (e.Hard = 'hard'));
                })(a || (a = {}));
            },
            7383: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $4: () => _,
                    G$: () => s,
                    S: () => d,
                    YN: () => o,
                    YR: () => i,
                    g9: () => u,
                    k4: () => l,
                    mH: () => r,
                    pi: () => m,
                    qZ: () => c,
                    zn: () => a,
                });
                const a = 'optDevices',
                    u = 'shells',
                    r = 'consumables',
                    s = 'battleBoosters',
                    o = 'battleAbilities',
                    i = 'apply',
                    l = 'applyVehicle',
                    c = 'applyType',
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
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
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
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
            },
            7476: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8935: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { dropdown: 'AutoRenewal_dropdown_35' };
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
                var u = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & a || u >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), a < u && (u = a));
                    if (r) {
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
        (__webpack_require__.j = 70),
        (() => {
            var e = {
                70: 0,
                26: 0,
                543: 0,
                301: 0,
                826: 0,
                130: 0,
                418: 0,
                745: 0,
                490: 0,
                62: 0,
                884: 0,
                723: 0,
                653: 0,
                553: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        u,
                        [r, s, o] = n,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < r.length; i++)
                        ((u = r[i]), __webpack_require__.o(e, u) && e[u] && e[u][0](), (e[u] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(7604));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
