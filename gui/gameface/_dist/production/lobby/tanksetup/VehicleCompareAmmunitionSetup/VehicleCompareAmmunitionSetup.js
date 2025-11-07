(() => {
    var __webpack_modules__ = {
            3779: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => E });
                var a = n(6483),
                    r = n.n(a),
                    u = n(9887),
                    s = n.n(u),
                    o = n(3377),
                    i = n(6179),
                    l = n.n(i),
                    c = n(5026);
                const _ = [
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
                Object.keys(s());
                const m = {
                        XL: { mt: c.Z.mt__XL, mr: c.Z.mr__XL, mb: c.Z.mb__XL, ml: c.Z.ml__XL },
                        LG: { mt: c.Z.mt__LG, mr: c.Z.mr__LG, mb: c.Z.mb__LG, ml: c.Z.ml__LG },
                        MDp: { mt: c.Z.mt__MDp, mr: c.Z.mr__MDp, mb: c.Z.mb__MDp, ml: c.Z.ml__MDp },
                        MD: { mt: c.Z.mt__MD, mr: c.Z.mr__MD, mb: c.Z.mb__MD, ml: c.Z.ml__MD },
                        SMp: { mt: c.Z.mt__SMp, mr: c.Z.mr__SMp, mb: c.Z.mb__SMp, ml: c.Z.ml__SMp },
                        SM: { mt: c.Z.mt__SM, mr: c.Z.mr__SM, mb: c.Z.mb__SM, ml: c.Z.ml__SM },
                        XS: { mt: c.Z.mt__XS, mr: c.Z.mr__XS, mb: c.Z.mb__XS, ml: c.Z.ml__XS },
                    },
                    p = (Object.keys(m), ['mt', 'mr', 'mb', 'ml']),
                    b = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    E = (0, o.ZP)((e) => {
                        let t = e.className,
                            n = e.width,
                            a = e.height,
                            u = e.m,
                            s = e.mt,
                            o = void 0 === s ? u : s,
                            E = e.mr,
                            h = void 0 === E ? u : E,
                            g = e.mb,
                            f = void 0 === g ? u : g,
                            v = e.ml,
                            C = void 0 === v ? u : v,
                            A = e.column,
                            D = e.row,
                            F = e.flexDirection,
                            B = void 0 === F ? (A ? 'column' : D && 'row') || void 0 : F,
                            y = e.flexStart,
                            S = e.center,
                            w = e.flexEnd,
                            k = e.spaceBetween,
                            T = e.spaceAround,
                            x = e.justifyContent,
                            L =
                                void 0 === x
                                    ? (y ? 'flex-start' : S && 'center') ||
                                      (w && 'flex-end') ||
                                      (k && 'space-between') ||
                                      (T && 'space-around') ||
                                      void 0
                                    : x,
                            M = e.alignItems,
                            N = void 0 === M ? (y ? 'flex-start' : S && 'center') || (w && 'flex-end') || void 0 : M,
                            R = e.alignSelf,
                            I = e.wrap,
                            P = e.flexWrap,
                            O = void 0 === P ? (I ? 'wrap' : void 0) : P,
                            H = e.grow,
                            W = e.shrink,
                            $ = e.flex,
                            z = void 0 === $ ? (H || W ? `${H ? 1 : 0} ${W ? 1 : 0} auto` : void 0) : $,
                            X = e.style,
                            G = e.children,
                            Y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, _);
                        const j = (0, i.useMemo)(() => {
                                const e = { mt: o, mr: h, mb: f, ml: C },
                                    t = ((e) =>
                                        p.reduce((t, n) => {
                                            const a = e[n];
                                            return a && 'number' != typeof a ? t.concat(m[!0 === a ? 'MD' : a][n]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        p.reduce((t, n) => {
                                            const a = e[n];
                                            return ('number' == typeof a && (t[b[n]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, X, r, {
                                        width: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: z,
                                        alignSelf: R,
                                        display: B || N ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: O,
                                        justifyContent: L,
                                        alignItems: N,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [n, a, o, h, f, C, X, z, R, B, O, L, N]),
                            Z = j.computedStyle,
                            U = j.computedClassNames;
                        return l().createElement('div', d({ className: r()(c.Z.base, ...U, t), style: Z }, Y), G);
                    });
            },
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7727),
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
                    onMouseMove: b,
                    onMouseDown: E,
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
                        S = (0, s.useState)(!1),
                        w = S[0],
                        k = S[1],
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
                                c || (null !== d && (0, u.G)(d), p && p(e), k(!0));
                            },
                            [c, d, p],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                b && b(e);
                            },
                            [b],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e), y(!1));
                            },
                            [c, h],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, u.G)(m), E && E(e), n && T(), y(!0));
                            },
                            [c, m, E, T, n],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (g && g(e), y(!1));
                            },
                            [c, g],
                        ),
                        H = r()(
                            i.Z.base,
                            i.Z[`base__${a}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: A,
                                [i.Z.base__highlightActive]: B,
                                [i.Z.base__firstHover]: w,
                            },
                            _,
                        ),
                        W = r()(i.Z.state, i.Z.state__default);
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
                let a, r;
                (n.d(t, { L: () => a, q: () => r }),
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
                    })(r || (r = {})));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { Rh: () => c.Rh, XZ: () => m, yB: () => c.yB });
                var a = n(6483),
                    r = n.n(a),
                    u = n(1641),
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
                        b = e.isAlert,
                        E = void 0 !== b && b,
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
                        S = e.onMouseUp,
                        w = e.onMouseDown,
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
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
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
                                const t = e.button === u.t.LEFT;
                                p || (t && W(!0), t && w && w(e), F && (0, s.G)(F));
                            },
                            [p, w, F],
                        ),
                        Y = (0, o.useCallback)(
                            (e) => {
                                p || (W(!1), S && S(e));
                            },
                            [p, S],
                        ),
                        j = (0, o.useCallback)(
                            (e) => {
                                p || (B && B(e), A && (0, s.G)(A));
                            },
                            [p, B, A],
                        ),
                        Z = (0, o.useCallback)(
                            (e) => {
                                p || (W(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        U = (0, o.useCallback)(
                            (e) => {
                                p || (z(!0), x && x(e));
                            },
                            [p, x],
                        ),
                        V = (0, o.useCallback)(
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
                                { className: r()(l.Z.labelContent, 's-labelContent'), style: N },
                                M || R,
                            ),
                        );
                    return i().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: r()(l.Z.base, l.Z[`base__${g}`], l.Z[`base__${v}`], {
                                    [l.Z.base__checked]: a,
                                    [l.Z.base__disabled]: p,
                                    [l.Z.base__mouseDown]: H,
                                    [l.Z.base__alert]: E,
                                    [l.Z.base__center]: I === c.N3.Center,
                                    [l.Z.base__bottom]: I === c.N3.Bottom,
                                }),
                                onClick: X,
                                onMouseEnter: j,
                                onMouseLeave: Z,
                                onMouseDown: G,
                                onMouseUp: Y,
                                onFocus: U,
                                onBlur: V,
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
                let a, r, u;
                (n.d(t, { N3: () => u, Rh: () => r, yB: () => a }),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(u || (u = {})));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u),
                    o = n(329),
                    i = n(2372),
                    l = n(8460);
                const c = ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: n,
                    type: a,
                    isEnough: u,
                    value: c,
                    discountValue: _,
                    showPlus: d,
                    stockBackgroundName: m = o.we.Red,
                }) => {
                    const p = r()(l.Z.value, l.Z[`value__${a}`], !u && l.Z.value__notEnough),
                        b = r()(l.Z.icon, l.Z[`icon__${a}-${n}`]),
                        E = r()(l.Z.stock, _ && l.Z.stock__indent, t && l.Z.stock__interactive),
                        h = d && c > 0 && '+',
                        g = r()(l.Z.base, l.Z[`base__${n}`]);
                    return s().createElement(
                        'span',
                        { className: g },
                        s().createElement(
                            'span',
                            { className: p },
                            h,
                            s().createElement(i.A, { value: c, format: a === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        s().createElement('span', { className: b }),
                        e &&
                            s().createElement(
                                'span',
                                { className: E },
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
                let a, r, u;
                (n.d(t, { V2: () => r, et: () => a, we: () => u }),
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
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(u || (u = {})));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => s });
                var a = n(6179),
                    r = n.n(a),
                    u = n(4179);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = u.B3.GOLD;
                        else e = u.B3.INTEGRAL;
                        const t = u.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => l });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(3649),
                    i = n(5287);
                const l = ({ binding: e, text: t = '', classMix: n, alignment: u = o.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              a.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: s()(i.Z.base, n), key: `${t}-${l}` },
                                      (0, o.Uw)(t, u, e).map((e, t) =>
                                          r().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    r = n(6179),
                    u = n(1043),
                    s = n(5262);
                const o = a.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, u.j)),
                    _ = (0, r.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6536),
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
                    ((0, u.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(s.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    r = n(7382),
                    u = n(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, s);
                    const o = (0, a.useContext)(u.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        p = o.largeWidth,
                        b = o.mediumWidth,
                        E = o.smallWidth,
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
                        if (n.extraLargeWidth && m) return (0, r.H)(t, n, D);
                        if (n.largeWidth && p) return (0, r.H)(t, n, D);
                        if (n.mediumWidth && b) return (0, r.H)(t, n, D);
                        if (n.smallWidth && E) return (0, r.H)(t, n, D);
                        if (n.extraSmallWidth && h) return (0, r.H)(t, n, D);
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
                n.d(t, { YN: () => r.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    r = n(3495);
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
                function r(e, t, n) {
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
                        r = (function (e, t) {
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
                        u = Math.min(a, r);
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
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
                (n.d(t, { T: () => r, u: () => a }),
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
                n.d(t, { x: () => E });
                var a = n(6483),
                    r = n.n(a),
                    u = n(1856),
                    s = n(1091),
                    o = n(6179),
                    i = n.n(o),
                    l = n(8380),
                    c = n.n(l);
                const _ = 'ScrollArea_base_47',
                    d = 'ScrollArea_base__scrollIndent_1d',
                    m = 'ScrollArea_base__verticalScrollbarMargin_50',
                    p = 'ScrollArea_base__multiple_44',
                    b = 'ScrollArea_base__hidden_ec',
                    E = i().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            a = void 0 === n ? 0 : n,
                            l = e.offsetTop,
                            E = void 0 === l ? 0 : l,
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
                            S = e.children,
                            w = e.classMix,
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
                            Z = (0, o.useCallback)(() => {
                                if (P && f && N) {
                                    const e = { scrollPosition: P.scrollLeft < 0 ? 0 : P.scrollLeft, reach: N.reach.x };
                                    f(e);
                                }
                            }, [f, P, N]),
                            U = (0, o.useCallback)(() => {
                                if (P && v && N) {
                                    const e = { scrollPosition: P.scrollTop, reach: N.reach.y };
                                    v(e);
                                }
                            }, [v, P, N]),
                            V = (0, o.useCallback)(() => {
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
                                    (H.current = (0, u.v)(() => {
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
                                    P.addEventListener('ps-scroll-x', Z),
                                    P.addEventListener('ps-scroll-y', U),
                                    P.addEventListener('over-scroll-beginning', V),
                                    P.addEventListener('over-scroll-ending', q),
                                    L(!0),
                                    () => {
                                        (window.removeEventListener('resize', J),
                                            document.removeEventListener('mousemove', Q),
                                            P &&
                                                (P.removeEventListener('ps-scroll-x', Z),
                                                P.removeEventListener('ps-scroll-y', U),
                                                P.removeEventListener('over-scroll-beginning', V),
                                                P.removeEventListener('over-scroll-ending', q)));
                                    }
                                );
                        }, [Q, Z, V, q, J, P, N, U]);
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
                                    (0, u.v)(() => {
                                        N && W();
                                    }),
                                [W, N],
                            ),
                            (0, o.useEffect)(() => {
                                a > 0 && G(a);
                            }, [a, G]),
                            (0, o.useEffect)(() => {
                                E > 0 && j(E);
                            }, [E, j]),
                            (0, o.useEffect)(() => {
                                y &&
                                    ((y.setScrollLeft = X),
                                    (y.setScrollTop = Y),
                                    (y.setScrollLeftImmediately = G),
                                    (y.setScrollTopImmediately = j),
                                    (y.updateScrollArea = z),
                                    (y.getScrollbar = $));
                            }, [y, X, G, Y, j, z, $]));
                        const ne = r()(_, { [d]: D, [b]: !x, [m]: F, [p]: B }, w);
                        return i().createElement('div', { className: ne, ref: K }, S);
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
                var r =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function u(e, t) {
                    if (!r) throw new Error('No element matching method supported');
                    return r.call(e, t);
                }
                function s(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function o(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return u(e, t);
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
                        r = c.scrolling(t);
                    a.contains(r) ? clearTimeout(_[t]) : a.add(r);
                }
                function p(e, t, n) {
                    void 0 === n && (n = {});
                    Object.assign(d, n).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (_[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var b = function (e) {
                        ((this.element = e), (this.handlers = {}));
                    },
                    E = { isEmpty: { configurable: !0 } };
                ((b.prototype.bind = function (e, t) {
                    (void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1));
                }),
                    (b.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (a) {
                            return !(!t || a === t) || (n.element.removeEventListener(e, a, !1), !1);
                        });
                    }),
                    (b.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (E.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(b.prototype, E));
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
                    return (t || ((t = new b(e)), this.eventElements.push(t)), t);
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
                        a.bind(t, function e(r) {
                            (a.unbind(t, e), n(r));
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
                var A = function (e, t, n, a, r, u) {
                    var s;
                    if ((void 0 === a && (a = !0), void 0 === r && (r = !1), void 0 === u && (u = !1), 'top' === t))
                        s = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        s = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, a, r, u) {
                        var s = n[0],
                            o = n[1],
                            i = n[2],
                            l = n[3],
                            c = n[4],
                            _ = n[5];
                        void 0 === a && (a = !0);
                        void 0 === r && (r = !1);
                        void 0 === u && (u = !1);
                        var d = e.element;
                        if (!e.reach) return;
                        ((e.reach[l] = null), d[i] < 1 && (e.reach[l] = 'start'));
                        d[i] > e[s] - e[o] - 1 && (e.reach[l] = 'end');
                        t &&
                            !r &&
                            (d.dispatchEvent(C('ps-scroll-' + l)),
                            t < 0
                                ? d.dispatchEvent(C('ps-scroll-' + c))
                                : t > 0 && d.dispatchEvent(C('ps-scroll-' + _)),
                            a &&
                                (function (e, t) {
                                    (m(e, t), p(e, t));
                                })(e, l));
                        e.reach[l] && (t || u) && d.dispatchEvent(C('ps-' + l + '-reach-' + e.reach[l]));
                    })(e, n, s, a, r, u);
                };
                var D = function (e, t, a, r) {
                    (void 0 === t && (t = !1), void 0 === a && (a = 0), void 0 === r && (r = !1));
                    var u = e.element;
                    if (u) {
                        if (
                            ((e.containerWidth = Math.round(u.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(u.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(u.scrollWidth) - 2 * a),
                            (e.contentHeight = Math.round(u.scrollHeight)),
                            !r)
                        ) {
                            e.contentWidth = Math.round(u.scrollWidth) - 2 * a;
                            var i = e.contentWidth - e.containerWidth + a;
                            u.scrollLeft < a ? (u.scrollLeft = a) : u.scrollLeft > i && (u.scrollLeft = i);
                        }
                        var _ = Math.floor(u.scrollTop),
                            d = Math.floor(u.scrollLeft) - a,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        (u.contains(e.scrollbarXRail) ||
                            (o(u, l.rail('x')).forEach(function (e) {
                                return s(e);
                            }),
                            u.appendChild(e.scrollbarXRail)),
                            u.contains(e.scrollbarYRail) ||
                                (o(u, l.rail('y')).forEach(function (e) {
                                    return s(e);
                                }),
                                u.appendChild(e.scrollbarYRail)),
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
                                var r = { width: t.railXWidth },
                                    u = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (r.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (r.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (r.bottom = t.scrollbarXBottom - u)
                                    : (r.top = t.scrollbarXTop + u);
                                n(t.scrollbarXRail, r);
                                var s = { top: u, height: t.railYHeight };
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
                            })(u, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', d + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', u.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                u.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (u.classList.add(c.active('x')), A(e, 'left', d - e.lastScrollLeft, !0, t))
                                : (u.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (u.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (u.classList.add(c.active('y')), A(e, 'top', u.scrollTop - e.lastScrollTop, !0, t))
                                : (u.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (u.scrollTop = 0)),
                            (e.lastScrollTop = _),
                            (e.lastScrollLeft = d),
                            (e.scrollTopPercent = u.scrollTop / u.scrollHeight),
                            (e.scrollLeftPercent = u.scrollLeft / u.scrollWidth));
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
                            r = e.y1,
                            u = e.x2,
                            s = e.y2;
                        return (
                            1 -
                            (a * ((t = n), Math.pow(t, 3)) +
                                r *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                u *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                s *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(n))
                        );
                    },
                    S = { breakBounds: !1, startBound: 0, endBound: 0 },
                    w = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            a = e.direction,
                            r = e.onRefUpdateCallback,
                            u = e.duration,
                            s = e.cubicBezierPoints,
                            o = e.easingPreset,
                            i = e.scrollAmount,
                            l = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = S);
                        var _ = null,
                            d = null,
                            m = null,
                            p = null,
                            b = t === window,
                            E = ['left', 'right'].indexOf(a) > -1,
                            h = ['right', 'bottom'].indexOf(a) > -1;
                        E
                            ? ((d = b ? 'scrollX' : 'scrollLeft'),
                              (p = b ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((d = b ? 'scrollY' : 'scrollTop'),
                              (p = b ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var g = t[d],
                            f = (function (e) {
                                var t,
                                    n = e.isWindow,
                                    a = e.scrollableDomEle,
                                    r = e.elementLengthProp,
                                    u = e.initialScrollPosition,
                                    s = e.isHorizontalDirection,
                                    o = e.scrollLengthProp,
                                    i = e.direction;
                                if (n) {
                                    var l = document.documentElement;
                                    t = s ? l.offsetWidth : l.offsetHeight;
                                } else t = (a[o] - a.getBoundingClientRect()[r]) | 0;
                                return ['left', 'top'].includes(i) ? u : t - u;
                            })({
                                isWindow: b,
                                scrollableDomEle: t,
                                elementLengthProp: p,
                                initialScrollPosition: g,
                                isHorizontalDirection: E,
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
                                            r = e.runTime / a;
                                        if (B.hasOwnProperty(t)) return B[t](r);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return y({ percentTimeElapsed: r, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: o, cubicBezierPoints: s, runTime: i, duration: u });
                                if (!isNaN(m)) {
                                    var p = Math.round(m * f),
                                        v = h ? p + g : f - p;
                                    if (
                                        (c.breakBounds &&
                                            (v < c.startBound
                                                ? (v = c.startBound)
                                                : v > c.endBound && (v = c.endBound)),
                                        i < u)
                                    ) {
                                        if (b) {
                                            var C = E ? v : 0,
                                                A = E ? 0 : v;
                                            window.scrollTo(C, A);
                                        } else t[d] = v;
                                        (r && r(v), requestAnimationFrame(e));
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
                            r = e.i,
                            u = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    a = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var r = n.scrollbarY.offsetTop,
                                        u = r + n.scrollbarYHeight;
                                    return a >= r && a <= u;
                                }
                                var s = n.scrollbarX.offsetLeft,
                                    o = s + n.scrollbarXWidth;
                                return a >= s && a <= o;
                            })({ axis: t, i: r, cursorPositionOnRail: n });
                        return u
                            ? ((function (e) {
                                  var t = e.axis,
                                      n = e.i,
                                      a = e.cursorPositionOnRail,
                                      r = (function (e, t) {
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
                                      u = (a - r.scrollbar / 2) / r.rail,
                                      s = Math.round(Math.min(r.maxScroll, Math.max(0, r.content * u)));
                                  'y' === t ? (n.element.scrollTop = s) : (n.element.scrollLeft = s);
                              })({ axis: t, i: r, cursorPositionOnRail: n }),
                              !0)
                            : ('y' === t
                                  ? (r.element.scrollTop += a * r.containerHeight)
                                  : (r.element.scrollLeft += a * r.containerWidth),
                              !1);
                    },
                    T = function (e, t, n) {
                        return function (a) {
                            t = t.toLowerCase();
                            var r = null,
                                u = function () {
                                    if (1 === a.buttons) {
                                        if (
                                            !a.target.closest('.ps__rail-' + t) ||
                                            !a.target.closest('.ps__track_' + t)
                                        ) {
                                            var u = (function (e) {
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
                                                s = u.cursorPosition - u.windowScrolled - u.elementPosition,
                                                o = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        a = e.i;
                                                    return n > ('y' === t ? a.scrollbarYTop : a.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: s, i: e });
                                            (k({ axis: t, cursorPositionOnRail: s, direction: o, i: e }) &&
                                                clearTimeout(r),
                                                D(e, !1, n));
                                        }
                                        a.stopPropagation();
                                    }
                                };
                            (u(),
                                (r = setInterval(u, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(r);
                                }));
                        };
                    };
                function x(e, t, n) {
                    var a = n[0],
                        r = n[1],
                        u = n[2],
                        s = n[3],
                        o = n[4],
                        i = n[5],
                        l = n[6],
                        _ = n[7],
                        d = n[8],
                        b = e.element,
                        E = null,
                        h = null,
                        f = null;
                    function v(n) {
                        ((b[l] = g(E + f * (n[u] - h))), m(e, _), D(e, !1, t), n.stopPropagation(), n.preventDefault());
                    }
                    function C() {
                        (p(e, _), e[d].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', v));
                    }
                    e.event.bind(e[o], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((E = b[l]),
                            (h = t[u]),
                            (f = (e[r] - e[a]) / (e[s] - e[i])),
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
                                    u(n, ':hover')
                                ) {
                                    var r,
                                        s = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (s) {
                                        if ('IFRAME' === s.tagName) s = s.contentDocument.activeElement;
                                        else for (; s.shadowRoot; ) s = s.shadowRoot.activeElement;
                                        if (
                                            u((r = s), 'input,[contenteditable]') ||
                                            u(r, 'select,[contenteditable]') ||
                                            u(r, 'textarea,[contenteditable]') ||
                                            u(r, 'button,[contenteditable]')
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
                                            var r = Math.floor(n.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === r && a > 0) ||
                                                    (r >= e.contentHeight - e.containerHeight && a < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var u = n.scrollLeft;
                                            if (0 === a) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === u && t < 0) ||
                                                    (u >= e.contentWidth - e.containerWidth && t > 0)
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
                            function r(r) {
                                var u = (function (e) {
                                        var t = -1 * e.deltaX,
                                            n = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== n) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                                            t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                                            e.shiftKey ? [-n, -t] : [t, n]
                                        );
                                    })(r),
                                    s = u[0],
                                    o = u[1];
                                if (
                                    !(function (e, n, r) {
                                        if (!f.isWebKit && a.querySelector('select')) return !0;
                                        if (!a.contains(e)) return !1;
                                        for (var u = e; u && u !== a; ) {
                                            if (u.classList.contains(l.consuming)) return !0;
                                            var s = t(u);
                                            if (
                                                [s.overflow, s.overflowX, s.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var o = u.scrollHeight - u.clientHeight;
                                                if (
                                                    o > 0 &&
                                                    !((0 === u.scrollTop && r > 0) || (u.scrollTop === o && r < 0))
                                                )
                                                    return !0;
                                                var i = u.scrollWidth - u.clientWidth;
                                                if (
                                                    i > 0 &&
                                                    !((0 === u.scrollLeft && n < 0) || (u.scrollLeft === i && n > 0))
                                                )
                                                    return !0;
                                            }
                                            u = u.parentNode;
                                        }
                                        return !1;
                                    })(r.target, s, o)
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
                                                var r = Math.floor(a.scrollTop),
                                                    u = 0 === a.scrollTop,
                                                    s = r + a.offsetHeight === a.scrollHeight,
                                                    o = 0 === a.scrollLeft,
                                                    i = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? u || s : o || i) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(s, o)),
                                        i && !r.ctrlKey && (r.stopPropagation(), r.preventDefault()));
                                }
                            }
                            (e.event.bind(a, 'wheel', r),
                                void 0 !== window.onmousewheel && e.event.bind(a, 'mousewheel', r));
                        },
                        touch: function (e, n) {
                            if (f.supportsTouch || f.supportsIePointer) {
                                var a = e.element,
                                    r = {},
                                    u = 0,
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
                            function i(t, r) {
                                ((a.scrollTop -= r), (a.scrollLeft -= t), D(e, !1, n));
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
                                    ((r.pageX = t.pageX),
                                        (r.pageY = t.pageY),
                                        (u = new Date().getTime()),
                                        null !== o && clearInterval(o));
                                }
                            }
                            function m(n) {
                                if (_(n)) {
                                    var o = c(n),
                                        d = { pageX: o.pageX, pageY: o.pageY },
                                        m = d.pageX - r.pageX,
                                        p = d.pageY - r.pageY;
                                    if (
                                        (function (e, n, r) {
                                            if (!a.contains(e)) return !1;
                                            for (var u = e; u && u !== a; ) {
                                                if (u.classList.contains(l.consuming)) return !0;
                                                var s = t(u);
                                                if (
                                                    [s.overflow, s.overflowX, s.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var o = u.scrollHeight - u.clientHeight;
                                                    if (
                                                        o > 0 &&
                                                        !((0 === u.scrollTop && r > 0) || (u.scrollTop === o && r < 0))
                                                    )
                                                        return !0;
                                                    var i = u.scrollLeft - u.clientWidth;
                                                    if (
                                                        i > 0 &&
                                                        !(
                                                            (0 === u.scrollLeft && n < 0) ||
                                                            (u.scrollLeft === i && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                u = u.parentNode;
                                            }
                                            return !1;
                                        })(n.target, m, p)
                                    )
                                        return;
                                    (i(m, p), (r = d));
                                    var b = new Date().getTime(),
                                        E = b - u;
                                    (E > 0 && ((s.x = m / E), (s.y = p / E), (u = b)),
                                        (function (t, n) {
                                            var r = Math.floor(a.scrollTop),
                                                u = a.scrollLeft,
                                                s = Math.abs(t),
                                                o = Math.abs(n);
                                            if (o > s) {
                                                if (
                                                    (n < 0 && r === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === r)
                                                )
                                                    return 0 === window.scrollY && n > 0 && f.isChrome;
                                            } else if (
                                                s > o &&
                                                ((t < 0 && u === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === u))
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
                                r = !1,
                                u = 0,
                                s = 0,
                                o = 0;
                            function i() {
                                e.onScroll();
                            }
                            function l(a, r, u, s) {
                                (void 0 === u && (u = null),
                                    void 0 === s && (s = !1),
                                    w({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: i,
                                        duration: r,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: a,
                                        onCheckForBreakCallback: u,
                                        boundsInfo: {
                                            breakBounds: s,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    }));
                            }
                            function _() {
                                if (r) return r;
                            }
                            function d() {
                                o = 0;
                            }
                            function b(r) {
                                if (e.scrollbarXActive) {
                                    var i = a - r.screenX;
                                    ((n.scrollLeft += i), (a = r.screenX));
                                    var l = new Date().getTime();
                                    if (((u = (i / (l - s)) * 1e3), (s = l), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === c
                                            ? 0 === o && (o = window.setTimeout(d, 250))
                                            : 0 !== o && (window.clearTimeout(o), (o = 0));
                                    }
                                    (m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        r.stopPropagation(),
                                        r.preventDefault());
                                }
                            }
                            function E(e) {
                                ((a = e.screenX),
                                    (r = !0),
                                    requestAnimationFrame(function () {
                                        r = !1;
                                    }),
                                    (s = new Date().getTime()));
                            }
                            function h(a) {
                                var r = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) l(t - n.scrollLeft, L, _);
                                else if (n.scrollLeft > r) l(r - n.scrollLeft, L, _);
                                else {
                                    new Date().getTime() - s < 100 && l(u / 4, L, _, !0);
                                }
                                (p(e, 'x'),
                                    p(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', b));
                            }
                            function g() {
                                r = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((a = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', b),
                                        e.event.once(e.ownerDocument, 'mouseup', h),
                                        e.event.once(e.ownerDocument, 'mousedown', E),
                                        e.event.once(n, 'wheel', g),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    N = function (e, r) {
                        var u = this;
                        if (
                            (void 0 === r && (r = {}),
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
                        r))
                            u.settings[s] = r[s];
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
                                var a = t(u.scrollbarXRail);
                                ((u.scrollbarXBottom = parseInt(a.bottom, 10)),
                                    isNaN(u.scrollbarXBottom)
                                        ? ((u.isScrollbarXUsingBottom = !1), (u.scrollbarXTop = g(a.top)))
                                        : (u.isScrollbarXUsingBottom = !0),
                                    (u.railBorderXWidth = g(a.borderLeftWidth) + g(a.borderRightWidth)),
                                    n(u.scrollbarXRail, { display: 'block' }),
                                    (u.railXMarginWidth = g(a.marginLeft) + g(a.marginRight)),
                                    n(u.scrollbarXRail, { display: '' }),
                                    (u.railXWidth = null),
                                    (u.railXRatio = null));
                                var r = t(u.scrollbarYRail);
                                ((u.scrollbarYRight = parseInt(r.right, 10)),
                                    isNaN(u.scrollbarYRight)
                                        ? ((u.isScrollbarYUsingRight = !1), (u.scrollbarYLeft = g(r.left)))
                                        : (u.isScrollbarYUsingRight = !0),
                                    (u.scrollbarYOuterWidth = u.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  g(n.width) +
                                                  g(n.paddingLeft) +
                                                  g(n.paddingRight) +
                                                  g(n.borderLeftWidth) +
                                                  g(n.borderRightWidth)
                                              );
                                          })(u.scrollbarY)
                                        : null),
                                    (u.railBorderYWidth = g(r.borderTopWidth) + g(r.borderBottomWidth)),
                                    n(u.scrollbarYRail, { display: 'block' }),
                                    (u.railYMarginHeight = g(r.marginTop) + g(r.marginBottom)),
                                    n(u.scrollbarXRail, { display: '' }),
                                    n(u.scrollbarYRail, { display: '' }),
                                    (u.railYHeight = null),
                                    (u.railYRatio = null),
                                    (u.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= u.contentWidth - u.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= u.contentHeight - u.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (u.isAlive = !0),
                                    u.settings.handlers.forEach(function (e) {
                                        return M[e](u, u.settings.overScrollWidth);
                                    }),
                                    (u.boundHandleButtonEnter = u.handleMouseEnter.bind(u)),
                                    (u.boundHandleMouseLeave = u.handleMouseLeave.bind(u)),
                                    (u.boundHandleMouseEnter = u.handleMouseEnter.bind(u)),
                                    (u.boundPlayClickSound = u.playClickSound.bind(u)),
                                    u.scrollbarYButtonStart.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarYButtonEnd.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonStart.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonEnd.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarXButtonStart.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarXButtonEnd.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarYButtonStart.addEventListener('mouseenter', u.boundHandleButtonEnter),
                                    u.scrollbarYButtonEnd.addEventListener('mouseenter', u.boundHandleButtonEnter),
                                    u.scrollbarYButtonStart.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarYButtonEnd.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarY.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarX.addEventListener('mouseenter', u.boundHandleMouseEnter),
                                    u.scrollbarY.addEventListener('mouseleave', u.boundHandleMouseLeave),
                                    u.scrollbarY.addEventListener('mousedown', u.boundPlayClickSound),
                                    u.scrollbarX.addEventListener('mousedown', u.boundPlayClickSound),
                                    (u.lastScrollTop = Math.floor(e.scrollTop)),
                                    (u.lastScrollLeft = e.scrollLeft),
                                    (u.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (u.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    u.event.bind(u.element, 'scroll', function (e) {
                                        return u.onScroll(e);
                                    }),
                                    u.settings.enableHorizontalScroll &&
                                        u.event.bind(u.element, 'wheel', function (e) {
                                            return u.onWheel(e);
                                        }),
                                    D(u, !1, u.settings.overScrollWidth, !1));
                            }));
                    };
                ((N.prototype._getAnimationSettings = function (e, t, n, a) {
                    var r = this,
                        u = 0;
                    return (
                        null !== this.element &&
                            (u = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - u,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                (D(r, !0, r.settings.overScrollWidth, !1), n && n(e));
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
                        w(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (N.prototype.setScrollLeftImmediately = function (e) {
                        ((this.element.scrollLeft = 0 | e), this.update());
                    }),
                    (N.prototype.setScrollTop = function (e, t, n) {
                        w(this._getAnimationSettings(e, 'bottom', t, n));
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
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
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
                class _ extends r().PureComponent {
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
                            u = e.side,
                            o = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            b = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(e, l)),
                            h = s()(i.Z.base, i.Z[`base__${o}`], i.Z[`base__${u}`], null == _ ? void 0 : _.base),
                            g = s()(i.Z.icon, i.Z[`icon__${o}`], i.Z[`icon__${u}`], null == _ ? void 0 : _.icon),
                            f = s()(i.Z.glow, null == _ ? void 0 : _.glow),
                            v = s()(i.Z.caption, i.Z[`caption__${o}`], null == _ ? void 0 : _.caption),
                            C = s()(i.Z.goto, null == _ ? void 0 : _.goto);
                        return r().createElement(
                            'div',
                            c(
                                {
                                    className: h,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(b),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                E,
                            ),
                            'info' !== o && r().createElement('div', { className: i.Z.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: f })),
                            r().createElement('div', { className: v }, t),
                            a && r().createElement('div', { className: C }, a),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7613: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => F });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3779),
                    s = n(280),
                    o = n(3532),
                    i = n.n(o),
                    l = n(9887),
                    c = n.n(l),
                    _ = n(3377),
                    d = n(6179),
                    m = n.n(d),
                    p = n(3393);
                const b = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
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
                Object.keys(c());
                const h = Object.keys(i()),
                    g = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    f = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    v = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    C = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    A =
                        (Object.keys(C),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': g,
                            'heading-H36': g,
                            'heading-H28': f,
                            'heading-H24': f,
                            'heading-H24R': f,
                            'heading-H22': f,
                            'heading-H20R': f,
                            'heading-H18': f,
                            'heading-H15': v,
                            'heading-H14': v,
                            'paragraph-P24': f,
                            'paragraph-P18': f,
                            'paragraph-P16': f,
                            'paragraph-P14': v,
                            'paragraph-P12': v,
                            'paragraph-P10': v,
                        }),
                    D =
                        (Object.keys(A),
                        (e) =>
                            e
                                ? ((e) => h.includes(e))(e)
                                    ? { colorClassName: p.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    F = (0, _.ZP)((e) => {
                        let t = e.text,
                            n = e.variant,
                            a = e.className,
                            o = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            _ = e.mr,
                            h = void 0 === _ ? i : _,
                            g = e.mb,
                            f = void 0 === g ? i : g,
                            v = e.ml,
                            C = void 0 === v ? i : v,
                            F = e.style,
                            B = e.format,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, b);
                        const S = (0, d.useMemo)(() => {
                                const e = D(o),
                                    t = e.colorClassName,
                                    n = e.colorStyle,
                                    a = void 0 === n ? {} : n;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: t };
                            }, [F, o]),
                            w = S.computedStyle,
                            k = S.colorClassName;
                        return m().createElement(
                            u.ZP,
                            E(
                                {
                                    className: r()(p.Z.base, n && p.Z[n], k, a),
                                    style: w,
                                    mt: !0 === c ? A[n || 'paragraph-P16'].mt : c,
                                    mr: !0 === h ? A[n || 'paragraph-P16'].mr : h,
                                    mb: !0 === f ? A[n || 'paragraph-P16'].mb : f,
                                    ml: !0 === C ? A[n || 'paragraph-P16'].ml : C,
                                },
                                y,
                            ),
                            void 0 !== B ? m().createElement(s.z, E({}, B, { text: t })) : t,
                        );
                    });
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => i });
                var a = n(6179),
                    r = n.n(a),
                    u = n(2056);
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
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, s);
                    return r().createElement(
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
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(6179),
                    r = n.n(a),
                    u = n(7078),
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
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, a);
                    const l = t.contentId,
                        c = t.args,
                        _ = null == c ? void 0 : c.contentId;
                    return l || _
                        ? r().createElement(o.u, i({}, t, { contentId: l || _ }), a)
                        : r().createElement(u.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    r = n(6179),
                    u = n.n(r);
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
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const p = (0, r.useMemo)(() => {
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
                    r = n(4179),
                    u = n(6179);
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
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            b = e.ignoreMouseClick,
                            E = void 0 !== b && b,
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
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const y = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, u.useMemo)(() => A || (0, a.F)().resId, [A]),
                            w = (0, u.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (i(n, g, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [n, g, r, S, D]),
                            k = (0, u.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        i(n, g, { on: !1 }, S),
                                        y.current.isVisible && F && F(),
                                        (y.current.isVisible = !1));
                                }
                            }, [n, g, S, F]),
                            T = (0, u.useCallback)((e) => {
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
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === v && k();
                            }, [v, k]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ));
                        return v
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (k(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === E && k(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === E && k(), null == _ || _(t), null == e || e(t));
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
                (n.r(t), n.d(t, { mouse: () => o, onResize: () => u }));
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const u = `mouse${t}`,
                                        o = s[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, i),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(u, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => u,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var a = n(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
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
                n.d(t, { O: () => r });
                var a = n(5959);
                const r = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
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
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => u.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => E,
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
                        whenTutorialReady: () => S,
                    }));
                var a = n(3722),
                    r = n(6112),
                    u = n(6538),
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
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
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
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    u = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(u, { isMouseEvent: !0, on: e });
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
            3377: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => c });
                var a = n(5415),
                    r = n(6179),
                    u = n.n(r);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    o = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    i = [a.cJ.ExtraLarge, a.cJ.Large, a.cJ.Medium, a.cJ.Small, a.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((n, a) => {
                            if (a in n) return n;
                            if (o(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in n) return n;
                                const u = i.indexOf(t),
                                    o = (-1 !== u ? s.slice(u) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = o ? e[o] : void 0;
                                return ((n[r] = void 0 !== l ? l : e[r]), n);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, t) => s.some((n) => void 0 !== t[`${e}_${n}`]))(a, e) ||
                                    (n[a] = r),
                                n
                            );
                        }, {}),
                    c = (e, t = l) => {
                        const n = (
                            (e, t = l) =>
                            (n) => {
                                const s = (0, a.GS)().mediaSize,
                                    o = (0, r.useMemo)(() => t(n, s), [n, s]);
                                return u().createElement(e, o);
                            }
                        )(e, t);
                        return u().memo((t) =>
                            Object.keys(t).some((e) => o(e) && void 0 !== t[e])
                                ? u().createElement(n, t)
                                : u().createElement(e, t),
                        );
                    };
            },
            2344: (e, t, n) => {
                'use strict';
                n.d(t, { D9: () => s, DA: () => r.D, m2: () => u.m, tT: () => r.t });
                var a = n(2790),
                    r = (n(3469), n(2133), n(579), n(5360)),
                    u = n(9056);
                const s = a.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e) => {
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
                    r = n(5521),
                    u = (n(4179), n(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = r.n.NONE, t = s, n = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== r.n.NONE)
                            return (
                                window.addEventListener('keydown', u, n),
                                () => {
                                    window.removeEventListener('keydown', u, n);
                                }
                            );
                        function u(r) {
                            if (r.keyCode === e) {
                                if (a.O.view.isEventHandled()) return;
                                (a.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n]);
                }
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var a = n(6179),
                    r = n(7739),
                    u = n(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = u.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = u.j.small.width)] = 'Small'),
                        (e[(e.Medium = u.j.medium.width)] = 'Medium'),
                        (e[(e.Large = u.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = u.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = u.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = u.j.small.width)] = 'Small'),
                            (e[(e.Medium = u.j.medium.width)] = 'Medium'),
                            (e[(e.Large = u.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = u.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = u.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = u.j.small.height)] = 'Small'),
                            (e[(e.Medium = u.j.medium.height)] = 'Medium'),
                            (e[(e.Large = u.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = u.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        n = e.height,
                        u = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: u, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            5360: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => c, t: () => _ });
                var a = n(7902),
                    r = n(8071),
                    u = n(6536),
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
                        b = (0, i.useState)(() =>
                            ((e) => {
                                const t = (0, r.M)(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return (0, o.os)(t) ? t.value : t;
                            })((0, o.Gd)(p)),
                        ),
                        E = b[0],
                        h = b[1],
                        g = (0, i.useRef)(-1);
                    return (
                        (0, u.Z)(() => {
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
                                            ? (e === E && s((e) => e + 1), h(e))
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
                        E
                    );
                };
            },
            9056: (e, t, n) => {
                'use strict';
                n.d(t, { m: () => i });
                var a = n(7902),
                    r = n(8071),
                    u = n(4179),
                    s = n(6179);
                const o = u.Sw.instance,
                    i = (e = 'model', t = !0) => {
                        const n = (0, s.useState)(0),
                            u = (n[0], n[1]),
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
                                        const t = (0, r.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            u((e) => e + 1);
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
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e) => {
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
                n.d(t, { Z: () => u });
                var a = n(6179);
                const r = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    u = (e) => {
                        const t = (0, a.useState)(r(e ? e.current : null)),
                            n = t[0],
                            u = t[1];
                        return (
                            (0, a.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        r(e ? e.current : null) ? u(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => () => u(!1), [e]),
                            n
                        );
                    };
            },
            5521: (e, t, n) => {
                'use strict';
                let a, r;
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
                    })(r || (r = {})));
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
                n.d(t, { $: () => r, G: () => a });
                const r = {
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
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e, t) {
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
                    Uw: () => E,
                    WU: () => r,
                    e: () => o,
                    uF: () => u,
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
                    b = (e, t = a.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return p.includes(n)
                            ? m(e)
                            : ((e, t = a.left) => {
                                  let n = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      u = i(e);
                                  return (d(u, /( )/, t).forEach((e) => (n = n.concat(d(e, r, a.left)))), n);
                              })(e, t);
                    },
                    E = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : b(e, t)));
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
                n.d(t, { Z: () => u });
                var a = n(3138);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, r);
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
                r.__instance = void 0;
                const u = r;
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
                    Sw: () => u.Z,
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
                const r = a;
                var u = n(1358);
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
                const b = ['args'];
                function E(e, t, n, a, r, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var u = e.apply(t, n);
                                        function s(e) {
                                            E(u, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(u, a, r, s, o, 'throw', e);
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
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, b);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = r),
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
                    C = () => v(i.CLOSE),
                    A = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var D = n(7572);
                const F = r.instance,
                    B = {
                        DataTracker: u.Z,
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
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), u) => {
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
                                targetID: r,
                                direction: t,
                                bbox: h(m),
                                on: !0,
                                args: u,
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
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
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
                n.d(t, { Gd: () => i, U0: () => l, kJ: () => s, os: () => u });
                var a = n(7902),
                    r = n(8071);
                const u = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    s = (e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name,
                    o = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    i = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = (0, r.M)(`${e}.${n}`, window);
                                return u(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    l = (e) => {
                        const t = ((e) => {
                                const t = (0, a.F)(),
                                    n = t.caller,
                                    r = t.resId,
                                    u = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: u, modelPath: o(u, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            s = e.split('.');
                        if (s.length > 0) {
                            const e = [s[0]];
                            return (
                                s.reduce((t, a) => {
                                    const s = (0, r.M)(o(n, `${t}.${a}`), window);
                                    return u(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
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
                    r = n.n(a),
                    u = n(7739),
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
                        const e = (0, s.useContext)(u.YN);
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
                        const s = c(),
                            l = r()(i.Z.base, s && i.Z[`base__${s}`], u && i.Z.base__compare),
                            _ = r()(i.Z.header, s && i.Z[`header__${s}`]),
                            d = r()(i.Z.main),
                            m = r()(i.Z.content);
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
            8043: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => Xe,
                        Bar: () => We,
                        DefaultScroll: () => ze,
                        Direction: () => Fe,
                        defaultSettings: () => Be,
                        useHorizontalScrollApi: () => Se,
                    }));
                var r = {};
                (n.r(r), n.d(r, { Area: () => ot, Bar: () => rt, Default: () => st, useVerticalScrollApi: () => Ge }));
                var u = n(7739),
                    s = n(6179),
                    o = n.n(s),
                    i = n(6483),
                    l = n.n(i),
                    c = n(926),
                    _ = n.n(c),
                    d = n(5415);
                const m = ['children', 'className'];
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
                const b = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: _().SMALL_WIDTH,
                        [d.fd.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: _().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    h = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: _().SMALL,
                        [d.cJ.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [d.cJ.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [d.cJ.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, m);
                        const r = (0, d.GS)(),
                            u = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', p({ className: l()(n, b[u], E[s], h[i]) }, a), t);
                    },
                    f = ['children'];
                const v = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, f);
                    return o().createElement(u.ZN, null, o().createElement(g, n, t));
                };
                var C = n(493),
                    A = n.n(C),
                    D = n(9056),
                    F = n(1856),
                    B = n(7383),
                    y = n(5360),
                    S = n(1922),
                    w = n(2262),
                    k = n(280),
                    T = n(6373);
                const x = 'visible_change',
                    L = x,
                    M = x,
                    N = (e, t) => {
                        const n = (0, y.t)('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                r = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && r.length > 0;
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
                var I = n(3649);
                const P = 'epic_battle';
                let O, H, W, $;
                (!(function (e) {
                    ((e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view'));
                })(O || (O = {})),
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
                    })(H || (H = {})),
                    (function (e) {
                        ((e.Click = 'click'), (e.Close = 'close'));
                    })(W || (W = {})),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })($ || ($ = {})));
                const z = 'tooltip_watched';
                let X;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(X || (X = {}));
                const G = ['action', 'timeLimit'];
                const Y = 'metrics',
                    j = () => Date.now(),
                    Z = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    U = (e, t) => {
                        const n = (0, s.useCallback)(
                            (n, a = $.Info, r) => {
                                (r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        }));
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    V = (e, t) => {
                        const n = U(e, t),
                            a = (0, s.useRef)(new Map()),
                            r = (0, s.useRef)(new Map()),
                            u = (0, s.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, j());
                                },
                                [a],
                            ),
                            o = (0, s.useCallback)(() => {
                                (a.current.clear(), r.current.clear());
                            }, [a, r]),
                            i = (0, s.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, j());
                                },
                                [a, r],
                            ),
                            l = (0, s.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = r.current.get(e);
                                    if (void 0 === n) return;
                                    r.current.delete(e);
                                    const u = j() - n;
                                    a.current.set(e, t + u);
                                },
                                [a, r],
                            ),
                            c = (0, s.useCallback)(
                                (e, t = 0, u, s) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    (void 0 !== r.current.get(e) && l(e), a.current.delete(e));
                                    const i = (j() - o) / 1e3;
                                    i <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, i)),
                                        n(e, u, s));
                                },
                                [a, r, n, l],
                            );
                        return [(e) => u(e), (e, t, n, a) => c(e, t, n, a), () => o(), (e) => i(e), (e) => l(e)];
                    },
                    q = (e) => {
                        const t = V(e, Y),
                            n = t[0],
                            a = t[1],
                            r = t[2],
                            u = t[3],
                            o = t[4],
                            i = (0, s.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        r = e.logLevel;
                                    a(t, n, r, Z(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => i(e), () => r(), (e) => u(e), (e) => o(e)];
                    },
                    K = (e, t) => {
                        const n = q(e),
                            a = n[0],
                            r = n[1],
                            u = t.action,
                            o = t.timeLimit,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(t, G);
                        return (0, s.useMemo)(
                            () => ({
                                onShow: () => a(u || z),
                                onHide: () => r(Object.assign({ action: u || z, timeLimit: o || 2 }, i)),
                            }),
                            [u, o, i, a, r],
                        );
                    },
                    J = (e, t) => {
                        const n = V(e, t),
                            a = n[0],
                            r = n[1],
                            u = n[2],
                            s = n[3],
                            o = n[4];
                        return [(e) => a(e), (e, t, n, a) => r(e, t, n, a), () => u(), (e) => s(e), (e) => o(e)];
                    };
                var Q = n(7208),
                    ee = n(8982);
                const te = 'model.tankSetup.frontlineSetup',
                    ne = {
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
                var ae = n(3457);
                const re = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let ue, se;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big'));
                })(ue || (ue = {})),
                    (function (e) {
                        ((e.Brown = 'brown'), (e.Red = 'red'));
                    })(se || (se = {})));
                const oe = o().memo(function ({ value: e, className: t, theme: n, size: a }) {
                    return o().createElement(
                        'div',
                        { className: l()(re.base, re[`base__${n}`], re[`base__${a}`], t) },
                        o().createElement('div', { className: re.label }, e),
                        o().createElement('div', { className: re.icon }),
                    );
                });
                var ie = n(2056);
                const le = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return o().createElement(
                            ie.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, n),
                        );
                    }),
                    ce = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    _e = o().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const r = { pointsNeeded: e - (0, s.useContext)(sr), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: l()(ce.base, t && ce.base__isAvailable) },
                            o().createElement(
                                le,
                                r,
                                o().createElement(
                                    'div',
                                    { className: ce.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: ce.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(oe, { value: e, theme: t ? se.Brown : se.Red, size: ue.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: ce.actions },
                                o().createElement(
                                    le,
                                    r,
                                    o().createElement(
                                        ae.u5,
                                        {
                                            size: ae.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: l()(ce.purchaseButton, ce.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    ae.u5,
                                    { size: ae.qE.medium, type: ae.L$.secondary, mixClass: ce.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const me = () => {
                        const e = (0, S.GS)(),
                            t = (0, s.useContext)(sr),
                            n = (0, y.t)(te),
                            a = n.isTypeSelected,
                            r = n.vehicleType,
                            u = n.onChangeApplyAbilitiesToTypeSettings,
                            i = n.onDealConfirmed,
                            c = n.onDealCancelled,
                            _ = n.totalPurchasePrice,
                            d = n.purchaseSelectedAbilities,
                            m = (0, y.t)(`${te}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            E = m.canCancel,
                            h = (0, I.BN)(r),
                            g = (0, s.useCallback)(() => u(), [u]),
                            f = (0, s.useCallback)(() => i(), [i]),
                            v = (0, s.useCallback)(() => c(), [c]),
                            C = (0, s.useCallback)(() => d(), [d]),
                            A = l()(ne.base, e && ne[`base__${e}`]),
                            D = l()(ne.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            F = (0, s.useMemo)(
                                () => ({
                                    backgroundImage: h
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(h)})`
                                        : '',
                                }),
                                [h],
                            ),
                            x = (0, s.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: ne.vehicleIcon, style: F }),
                                    vehicle: R.strings.menu.classes.short.$dyn(h),
                                }),
                                [F, h],
                            ),
                            L = N('ShowAbilitiesButton', M);
                        (0, s.useEffect)(() => {
                            L && L.runTrigger(!0);
                        }, [L]);
                        const W = N('ApplyAbilitiesToTypeCheckbox', M);
                        (0, s.useEffect)(() => {
                            W && W.runTrigger(!0);
                        }, [W]);
                        const $ = K(P, { item: H.AbilitiesCheckboxTooltip, parentScreen: O.SetupView }),
                            z = _ > 0,
                            X = !z && b;
                        return o().createElement(
                            'div',
                            { className: A },
                            X &&
                                o().createElement(
                                    'div',
                                    { className: D },
                                    o().createElement(
                                        T.i,
                                        de(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(h) },
                                            $,
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: ne.checkBoxZone },
                                            o().createElement(
                                                w.XZ,
                                                { isChecked: a, onChange: g, type: w.Rh.main, size: w.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: ne.checkBoxLabel },
                                                    o().createElement(k.z, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: x,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                Q.f,
                                { when: !0, canAccept: z || X },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    z &&
                                        o().createElement(_e, {
                                            price: _,
                                            isAvailable: t >= _,
                                            onPurchase: C,
                                            onCancel: v,
                                        }),
                                    X &&
                                        o().createElement(ee.Z, {
                                            applyBtnString: a ? B.qZ : B.k4,
                                            isDisabled: p,
                                            canCancel: E,
                                            onCancel: v,
                                            onConfirm: f,
                                        }),
                                ),
                            ),
                        );
                    },
                    pe = (e, t, n) => (n < e ? e : n > t ? t : n),
                    be = [];
                function Ee(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), be)
                    );
                }
                function he(e, t, n = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, s.useEffect)(() => r, [r]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            ((a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, u),
                        r,
                    ];
                }
                var ge = n(7727),
                    fe = n(3138);
                function ve(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ce(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ce(e, t);
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
                function Ce(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ae(e, t, n) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    u = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        ((s = Date.now()), n.apply(l, i));
                                    }
                                    u ||
                                        (a && !r && _(),
                                        o(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  a
                                                      ? function () {
                                                            r = void 0;
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
                    return ((0, s.useEffect)(() => a.cancel, [a]), a);
                }
                var De = n(7030);
                let Fe;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Fe || (Fe = {}));
                const Be = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ye = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return pe(r, u, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Be : l,
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
                                        r = (e, ...n) => {
                                            for (var a, r = ve(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                p = Ae(
                                    () => {
                                        fe.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, De.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), m.trigger('change', e), u && p());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                E = b[0],
                                h = b[1],
                                g = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = E.scrollPosition.get(),
                                            u = (null != (a = E.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + u + r);
                                    },
                                    [E.scrollPosition],
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
                                                from: { scrollPosition: o(a, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, E.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            u = g(t, e, a);
                                        f(u);
                                    },
                                    [f, g, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(a(e)),
                                            _.current && m.trigger('mouseWheel', e, E.scrollPosition, t(_.current)));
                                    },
                                    [E.scrollPosition, v, m],
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
                                        (0, F.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (f(o(e, E.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [f, E.scrollPosition.goal],
                                ),
                                D = Ee(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = o(e, E.scrollPosition.goal);
                                    (t !== E.scrollPosition.goal && f(t, { immediate: !0 }),
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
                            const B = (0, s.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
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
                                    animationScroll: E,
                                    recalculateContent: D,
                                    handleIsThumbDragging: B,
                                    events: { on: m.on, off: m.off },
                                }),
                                [E.scrollPosition, f, v, B, m.off, m.on, D, C, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Se = ye({
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
                        getDirection: (e) => (e.deltaY > 1 ? Fe.Next : Fe.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    we = 'HorizontalBar_base_49',
                    ke = 'HorizontalBar_base__nonActive_82',
                    Te = 'HorizontalBar_leftButton_5f',
                    xe = 'HorizontalBar_rightButton_03',
                    Le = 'HorizontalBar_track_0d',
                    Me = 'HorizontalBar_thumb_fd',
                    Ne = 'HorizontalBar_rail_32',
                    Re = 'disable',
                    Ie = { pending: !1, offset: 0 },
                    Pe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Oe = () => {},
                    He = (e, t) => Math.max(20, e.offsetWidth * t),
                    We = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Pe, onDrag: a = Oe }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(Ie),
                            p = m[0],
                            b = m[1],
                            E = (0, s.useCallback)(
                                (e) => {
                                    (b(e),
                                        _.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [a],
                            ),
                            h = () => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = pe(0, 1, s / (r - a)),
                                    d = (t.offsetWidth - He(t, o)) * l;
                                ((n.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (u.current && i.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    u.current.classList.add(Re),
                                                    void i.current.classList.remove(Re)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(Re),
                                                    void i.current.classList.add(Re)
                                                );
                                            var t, n;
                                            (u.current.classList.remove(Re), i.current.classList.remove(Re));
                                        }
                                    })(d));
                            },
                            g = Ee(() => {
                                ((() => {
                                    const t = _.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const s = Math.min(1, a / u);
                                    ((t.style.width = `${He(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(ke) : r.current.classList.remove(ke)));
                                })(),
                                    h());
                            });
                        ((0, s.useEffect)(() => (0, F.v)(g)),
                            (0, s.useEffect)(
                                () =>
                                    (0, F.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Oe;
                                        const a = () => {
                                            (n(), (n = (0, F.v)(g)));
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
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const u = c.current,
                                            s = _.current;
                                        if (!r || !u || !s) return;
                                        const o = t.screenX - p.offset - u.getBoundingClientRect().x,
                                            i = (o / u.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t), E(Ie));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, p.offset, p.pending, a, E]));
                        const f = he((t) => e.applyStepTo(t), d, [e]),
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
                            e.target.classList.contains(Re) || (0, ge.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(we, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Te, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Re) ||
                                        0 !== e.button ||
                                        ((0, ge.G)('play'), v(Fe.Next));
                                },
                                onMouseUp: C,
                                ref: u,
                                onMouseEnter: A,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Le, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, ge.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = _.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Fe.Prev : Fe.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: A,
                                },
                                o().createElement('div', { ref: _, className: l()(Me, t.thumb) }),
                                o().createElement('div', { className: l()(Ne, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(xe, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Re) ||
                                        0 !== e.button ||
                                        ((0, ge.G)('play'), v(Fe.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: A,
                            }),
                        );
                    }),
                    $e = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ze = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: u,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()($e.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()($e.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()($e.defaultScrollArea, r) },
                                o().createElement(Xe, { className: i, api: m, classNames: u }, e),
                            ),
                            o().createElement(We, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Xe = ({ api: e, className: t, classNames: n, children: a, style: r }) => (
                        (0, s.useEffect)(() => (0, F.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()($e.base, t), style: r },
                            o().createElement(
                                'div',
                                {
                                    className: l()($e.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()($e.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Xe.Bar = We),
                    (Xe.Default = ze),
                    (Xe.SeniorityAwards = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => (0, F.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()($e.base, t) },
                            o().createElement(
                                'div',
                                { className: l()($e.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: l()($e.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const Ge = ye({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Fe.Next : Fe.Prev),
                    }),
                    Ye = 'VerticalBar_base_f3',
                    je = 'VerticalBar_base__nonActive_42',
                    Ze = 'VerticalBar_topButton_d7',
                    Ue = 'VerticalBar_bottomButton_06',
                    Ve = 'VerticalBar_track_df',
                    qe = 'VerticalBar_thumb_32',
                    Ke = 'VerticalBar_rail_43',
                    Je = 'disable',
                    Qe = () => {},
                    et = { pending: !1, offset: 0 },
                    tt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    nt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    at = (e, t) => Math.max(20, e.offsetHeight * t),
                    rt = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = tt, onDrag: a = Qe }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(et),
                            p = m[0],
                            b = m[1],
                            E = (0, s.useCallback)(
                                (e) => {
                                    (b(e),
                                        _.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [a],
                            ),
                            h = Ee(() => {
                                const t = _.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${at(n, s)}px`),
                                    t.classList.add(qe),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(je) : r.current.classList.remove(je)),
                                    s
                                );
                            }),
                            g = Ee(() => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = pe(0, 1, s / (r - a)),
                                    d = (t.offsetHeight - at(t, o)) * l;
                                ((n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (u.current && i.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    u.current.classList.add(Je),
                                                    void i.current.classList.remove(Je)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(Je),
                                                    void i.current.classList.add(Je)
                                                );
                                            var t, n;
                                            (u.current.classList.remove(Je), i.current.classList.remove(Je));
                                        }
                                    })(d));
                            }),
                            f = Ee(() => {
                                nt(e, () => {
                                    (h(), g());
                                });
                            });
                        ((0, s.useEffect)(() => (0, F.v)(f)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    nt(e, () => {
                                        g();
                                    });
                                };
                                let n = Qe;
                                const a = () => {
                                    (n(), (n = (0, F.v)(f)));
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
                                        nt(e, (n) => {
                                            const r = c.current,
                                                u = _.current,
                                                s = e.getContainerSize();
                                            if (!r || !u || !s) return;
                                            const o = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            E(et));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, p.offset, p.pending, a, E]));
                        const v = he((t) => e.applyStepTo(t), d, [e]),
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
                            e.target.classList.contains(Je) || (0, ge.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Ye, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Ze, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Je) ||
                                        0 !== e.button ||
                                        ((0, ge.G)('play'), C(Fe.Next));
                                },
                                ref: u,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ve, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, ge.G)('play'), t.target === a))
                                                (e.handleIsThumbDragging(!0),
                                                    E({
                                                        pending: !0,
                                                        offset: t.screenY - a.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        nt(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Fe.Prev : Fe.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: _, className: t.thumb }),
                                o().createElement('div', { className: l()(Ke, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Ue, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Je) ||
                                        0 !== e.button ||
                                        ((0, ge.G)('play'), C(Fe.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    ut = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    st = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: u,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(ut.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(ut.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(ut.area, r) },
                                o().createElement(ot, { className: u, classNames: i, api: m }, e),
                            ),
                            o().createElement(rt, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ot = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => (0, F.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(ut.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(ut.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                ot.Default = st;
                const it = { Vertical: r, Horizontal: a };
                var lt = n(9480);
                const ct = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _t = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const dt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    mt = (e) =>
                        dt
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = _t.length - 1; n >= 0; n--)
                                      for (; e >= _t[n]; ) ((t += ct[n]), (e -= _t[n]));
                                  return t;
                              })(e),
                    pt = {
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
                let bt, Et;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(bt || (bt = {})),
                    (function (e) {
                        ((e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish'));
                    })(Et || (Et = {})));
                const ht = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: u,
                        isPremiumIGR: s,
                        size: i = bt.extraSmall,
                        type: c = Et.colored,
                        className: _,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const p = `${(0, I.BN)(a)}${e ? '_elite' : ''}`,
                            b = R.images.gui.maps.icons.vehicleTypes.big.$dyn(p);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    pt.base,
                                    pt[`base__size${(0, I.e)(i)}`],
                                    pt[`base__type${(0, I.e)(c)}`],
                                    u && lt.UI(u, (e) => pt[`base__tag${(0, I.e)(e)}`]),
                                    _,
                                ),
                            },
                            o().createElement('div', { className: l()(pt.level, null == d ? void 0 : d.level) }, mt(r)),
                            o().createElement('div', {
                                className: l()(pt.type, e && pt.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${b})` },
                            }),
                            s && o().createElement('div', { className: pt.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: l()(pt.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    gt = 'Aside_base_a5',
                    ft = 'Aside_content_24',
                    vt = 'Aside_tankDetails_35',
                    Ct = 'Aside_description_f0',
                    At = 'Aside_title_6f',
                    Dt = 'Aside_category_c0',
                    Ft = 'Aside_text_ca',
                    Bt = 'Aside_status_91',
                    yt = 'Aside_status__activated_4e',
                    St = 'CategoryTitle_base_f3',
                    wt = 'CategoryTitle_title_9d',
                    kt = 'CategoryTitle_icon_48';
                let Tt;
                !(function (e) {
                    ((e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small'));
                })(Tt || (Tt = {}));
                const xt = (0, s.memo)(({ category: e, iconTheme: t = Tt.Small, className: n }) => {
                        const a = (0, s.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: l()(St, n) },
                            o().createElement('div', { className: kt, style: a }),
                            o().createElement('div', { className: wt }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Lt = (e, t, n, a) => {
                        const r = q(P),
                            u = r[0],
                            o = r[1];
                        return [
                            (0, s.useCallback)(() => u(z), [u]),
                            (0, s.useCallback)(
                                () => o({ action: z, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [o, e, t, n, a],
                            ),
                        ];
                    },
                    Mt = 'InfoIcon_base_83',
                    Nt = 'InfoIcon_icon_47',
                    Rt = (0, s.memo)(({ item: e, className: t }) => {
                        const n = Lt(e, O.SetupView),
                            a = n[0],
                            r = n[1];
                        return o().createElement(
                            'div',
                            { className: l()(Mt, t) },
                            o().createElement(
                                ie.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: r,
                                },
                                o().createElement('div', { className: Nt }),
                            ),
                        );
                    }),
                    It = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Pt;
                !(function (e) {
                    ((e.None = 'none'), (e.Default = 'default'), (e.Active = 'active'));
                })(Pt || (Pt = {}));
                const Ot = (0, s.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: r }) => {
                    const u = t + 1,
                        i = (0, s.useMemo)(() => mt(u), [u]),
                        c = ((e) => {
                            const t = U(e, Y),
                                n = (0, s.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, Z(e));
                                    },
                                    [t],
                                );
                            return (e) => n(e);
                        })(P),
                        _ = (0, s.useCallback)(() => {
                            (a(t),
                                ge.$.playClick(),
                                c({
                                    item: H.SkillLevelTab,
                                    action: W.Click,
                                    parentScreen: O.SetupView,
                                    info: String(u),
                                }));
                        }, [t, u, a, c]),
                        d = (0, s.useCallback)(() => ge.$.playHighlight(), []);
                    return o().createElement(
                        'div',
                        { className: l()(It.base, e && It.base__active, r), onClick: _, onMouseEnter: d },
                        o().createElement('div', { className: It.label }, i),
                        n !== Pt.None && o().createElement('div', { className: l()(It.arrow, It[`arrow__${n}`]) }),
                    );
                });
                var Ht = n(4179),
                    Wt = n(3415),
                    $t = n(8045);
                const zt = 'ExtendedText_base_71',
                    Xt = 'ExtendedText_base__zeroPadding_25',
                    Gt = 'ExtendedText_base__isTruncationAvailable_5b',
                    Yt = 'ExtendedText_truncated_97',
                    jt = 'ExtendedText_truncated__hide_31',
                    Zt = 'ExtendedText_unTruncated_b8';
                let Ut, Vt, qt;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Ut || (Ut = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Vt || (Vt = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(qt || (qt = {})));
                const Kt = { [qt.NBSP]: Ut.NoBreakSymbol, [qt.ZWNBSP]: Ut.NoBreakSymbol, [qt.NEW_LINE]: Ut.LineBreak },
                    Jt = {
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
                    Qt = 'renderers_noBreakWrapper_10',
                    en = 'renderers_lineBreak_b5',
                    tn = 'renderers_newLine_bd',
                    nn = (e) => ({ color: `#${e}` }),
                    an = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Jt[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: Jt[a] },
                                      e,
                                  )
                                : o().createElement('span', { key: n, 'data-block-type': t.blockType, style: nn(a) }, e)
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType }, e);
                    },
                    rn = {
                        [Ut.Word]: an,
                        [Ut.NoBreakSymbol]: an,
                        [Ut.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [Ut.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Ut.LineBreak, className: en }),
                        [Ut.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Ut.NewLine, className: tn }, e),
                        [Ut.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Ut.NoBreakWrapper, className: Qt },
                                e,
                            ),
                    },
                    un = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, u) => {
                                const s = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = un(e, rn[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    sn = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = rn[a],
                                            u = un(e, r, t);
                                        return (
                                            a === Ut.NoBreakWrapper
                                                ? n.push(r({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    on = (e, t, n, a) => {
                        let r = t.exec(e),
                            u = 0;
                        for (; r; ) (u !== r.index && n(e.slice(u, r.index)), a(r), (u = t.lastIndex), (r = t.exec(e)));
                        u !== e.length && n(e.slice(u));
                    },
                    ln = (e) => {
                        const t = /[\s\u002d]/g;
                        let n = t.exec(e);
                        if (!n) return [e];
                        const a = [];
                        let r = 0;
                        for (; n; ) (a.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (n = t.exec(e)));
                        return (r !== e.length && a.push(e.slice(r)), a);
                    },
                    cn = (e, t = '') => {
                        const n = [];
                        return (
                            on(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Ut.Word, colorTag: t, childList: ln(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        r = Kt[a.charAt(0)];
                                    r === Ut.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Ut.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Ut.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(a),
                                          )
                                        : n.push({ blockType: r, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    _n = (e, t, n = '') => {
                        const a = [];
                        return (
                            on(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...cn(e, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        u = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof u || 'number' == typeof u
                                        ? a.push(...cn(String(u), n))
                                        : a.push({ blockType: Ut.Binding, colorTag: n, childList: [u] });
                                },
                            ),
                            a
                        );
                    },
                    dn = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Ut.NoBreakWrapper) (e.childList.push(a), n.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Ut.NoBreakWrapper, colorTag: '', childList: [t, a] }));
                        }
                        return (t.childList.length > 0 && n.push(t), n);
                    },
                    mn = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ut.NoBreakSymbol
                                        ? ((n = !0), t.push(...dn(t.pop(), e)))
                                        : (n ? t.push(...dn(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    on(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(..._n(e, t));
                                        },
                                        (e) => {
                                            n.push(..._n(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, I.Eg)((0, I.z4)(e)), t),
                        );
                        return sn(n);
                    },
                    pn = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    bn = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    En = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = bn(e, t),
                            r = e.textContent.length,
                            u = e.offsetWidth / r,
                            s = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const o = Math.max(n + s, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    hn = (e, t, n, a, r, u) => {
                        let s = -1,
                            i = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Ut.LineBreak || c === Ut.NewLine || c === Ut.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = En(n, a, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + u,
                                    p = t[l];
                                ((i = o().cloneElement(p, p.props, m)), (s = l));
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = hn(e, d, e.length - 1, a, r, u),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    ((i = o().cloneElement(c, c.props, e, b)), (s = l));
                                    break;
                                }
                                r -= _.length;
                            }
                        }
                        return [s, i];
                    },
                    gn = (e, t, n, a = '...') => {
                        const r = [...t],
                            u = e.current;
                        if (!u) return [r, !1];
                        const s = n.height,
                            o = n.width,
                            i = u.lastElementChild;
                        if (!pn(i, s) && bn(i, o) <= 0) return [r, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    pn(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(l, s);
                        if (c < 0) return [r, !1];
                        const _ = hn(l, r, c, o, a.length, a),
                            d = _[0],
                            m = _[1];
                        return (m && (r.splice(d, 1, m), r.splice(d + 1)), [r, !0]);
                    },
                    fn = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: u = !1,
                            targetId: i,
                            justifyContent: c = Vt.FlexStart,
                            alignContent: _ = Vt.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, s.useRef)(null),
                                p = (0, s.useRef)({ height: 0, width: 0 }),
                                b = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = b[0],
                                h = b[1],
                                g = (0, s.useMemo)(() => mn(e, a), [a, e]),
                                f = (0, s.useMemo)(() => {
                                    if (r && E.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [a, r, i, e, E.isTruncated]),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        ((p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height));
                                        const t = gn(m, g, p.current, d),
                                            a = t[0],
                                            r = t[1];
                                        (h({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r));
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
                                        const t = new $t.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(m, v, u),
                                o().createElement(
                                    'div',
                                    { className: l()(zt, t, Xt, u && Gt), style: C },
                                    o().createElement('div', { className: Zt, ref: m }, g),
                                    o().createElement(
                                        Wt.l,
                                        { tooltipArgs: f },
                                        o().createElement(
                                            'div',
                                            { className: l()(Yt, !E.isTruncateFinished && u && jt), style: C },
                                            E.isTruncateFinished && u ? E.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    vn = {
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
                    Cn = (0, s.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            r = Number(t.value),
                            u = Number(n.value),
                            i = (0, s.useMemo)(() => r < u, [r, u]),
                            c = (0, s.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(r)) {
                                    const e = a - r;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [r, a]),
                            _ = (0, s.useMemo)(() => {
                                if (!c) return {};
                                const t = (0, I.uF)(e.valueTemplate, {
                                    sign: c < 0 ? '-' : '+',
                                    value: Ht.Z5.getRealFormat(Math.abs(c), Ht.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: vn.diffValue }, t) };
                            }, [c, e.valueTemplate]),
                            d = (0, s.useMemo)(
                                () => ({
                                    sign: t.sign,
                                    value: isNaN(r) ? t.value : Ht.Z5.getNumberFormat(r, Ht.B3.GOLD),
                                }),
                                [t, r],
                            ),
                            m = (0, s.useMemo)(() => (i ? { width: ((100 * r) / u).toString() + '%' } : {}), [i, r, u]),
                            p = (0, s.useMemo)(
                                () => (i ? { width: ((100 * (a - r)) / u).toString() + '%' } : {}),
                                [i, r, a, u],
                            );
                        return o().createElement(
                            'div',
                            { className: vn.base },
                            o().createElement(
                                'div',
                                { className: vn.valueWrapper },
                                c &&
                                    o().createElement(fn, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: vn.diff,
                                        alignContent: Vt.FlexEnd,
                                    }),
                                o().createElement(fn, { text: e.valueTemplate, binding: d, classMix: vn.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: vn.labelWrapper },
                                o().createElement('div', { className: vn.label }, t.name),
                            ),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: vn.progress },
                                    o().createElement('div', { className: vn.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: vn.progressValue, style: m },
                                        o().createElement('div', { className: vn.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: vn.progressDelta, style: p }),
                                    o().createElement('div', { className: l()(vn.progressDot, vn.progressDot__end) }),
                                ),
                        );
                    }),
                    An = 'Levels_base_a9',
                    Dn = 'Levels_tabsWrapper_a0',
                    Fn = 'Levels_tabsBorder_cf',
                    Bn = 'Levels_tabsBorder__top_8f',
                    yn = 'Levels_tabsBorder__bottom_82',
                    Sn = 'Levels_tabsLabel_60',
                    wn = 'Levels_tabs_8f',
                    kn = 'Levels_tab_c3',
                    Tn = 'Levels_caret_7e',
                    xn = 'Levels_params_d6',
                    Ln = 'Levels_infoIcon_68',
                    Mn = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            r = n[0].value.params,
                            u = n[n.length - 1].value.params,
                            i = n[t].value,
                            c = (0, s.useMemo)(() => ({ left: 80 * t + 'rem' }), [t]),
                            _ = (0, s.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: An },
                            o().createElement(
                                'div',
                                { className: Dn },
                                o().createElement('div', { className: l()(Fn, Bn) }),
                                o().createElement('div', { className: l()(Fn, yn) }),
                                o().createElement(Rt, { item: H.AbilityLevelsTooltip, className: Ln }),
                                o().createElement(
                                    'div',
                                    { className: Sn },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: wn },
                                    n.map(({ value: e }, n) => {
                                        const r = n < t ? Pt.Active : Pt.Default;
                                        return o().createElement(Ot, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? r : Pt.None,
                                            onClick: _,
                                            classMix: kn,
                                        });
                                    }),
                                    o().createElement('div', { className: Tn, style: c }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: xn },
                                i.params.map(({ value: e }, t) =>
                                    o().createElement(Cn, {
                                        key: e.id,
                                        firstParam: r[t].value,
                                        lastParam: u[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Nn = (0, s.memo)(function ({ className: e }) {
                        const t = Ge(),
                            n = (0, y.t)('model.vehicleInfo'),
                            a = (0, y.t)(`${te}`).setCurrentSlotDetailsLevel,
                            r = (0, y.t)(`${te}.details`),
                            u = r.name,
                            i = r.category,
                            c = r.selectedLevel,
                            _ = r.description,
                            d = r.levelInfos,
                            m = r.isActivated,
                            p = (0, s.useCallback)((e) => a({ level: e }), [a]);
                        return o().createElement(
                            'div',
                            { className: l()(gt, e) },
                            o().createElement(
                                it.Vertical.Area.Default,
                                { api: t },
                                o().createElement(
                                    'div',
                                    { className: ft },
                                    o().createElement('div', { className: vt }, o().createElement(ht, n)),
                                    o().createElement(
                                        'div',
                                        { className: Ct },
                                        o().createElement('div', { className: At }, u),
                                        o().createElement(xt, { category: i, className: Dt }),
                                        o().createElement('div', { className: Ft }, _),
                                    ),
                                    o().createElement(Mn, { onLevelChanged: p, selectedLevel: c, levelInfos: d }),
                                    o().createElement(
                                        'div',
                                        { className: l()(Bt, m && yt) },
                                        m
                                            ? R.strings.tank_setup.abilities.details.status.unlocked()
                                            : R.strings.tank_setup.abilities.details.status.locked(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Rn = 'BattleAbilitiesSetup_aside_bd';
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
                function In() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                var Pn = n(570),
                    On = n(1091);
                const Hn = 'ScrollableCards_base_e0',
                    Wn = 'ScrollableCards_scroll_4b',
                    $n = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const r = (0, s.useState)(!1),
                            u = r[0],
                            i = r[1],
                            l = (0, s.useRef)({}),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = (0, s.useRef)(!1),
                            m = (0, s.useRef)(''),
                            p = (0, On.Z)(c);
                        (0, s.useEffect)(
                            () => () => {
                                d.current = !1;
                            },
                            [],
                        );
                        const b = (0, s.useCallback)(() => {
                                d.current && i(!0);
                            }, []),
                            E = (0, s.useCallback)(() => {
                                d.current && i(!1);
                            }, []),
                            h = (0, s.useCallback)(() => {
                                const e = _.current,
                                    t = c.current,
                                    n = l.current;
                                if (e && n && t) {
                                    const a = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    n.setScrollTop(a, void 0, b);
                                }
                            }, [b]);
                        ((0, s.useEffect)(() => {
                            (0, F.v)(() => {
                                p &&
                                    (m.current === n
                                        ? h()
                                        : ((m.current = n),
                                          In().then(() => {
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
                                isFinalAnimationRunning: u,
                                onFinalAnimationDone: E,
                            },
                            f = (0, s.cloneElement)(e, g);
                        return o().createElement(
                            'div',
                            { className: Hn },
                            o().createElement(
                                'div',
                                { className: Wn, ref: c },
                                o().createElement(Pn.x, { key: n, scrollAreaContainer: l.current }, f),
                            ),
                        );
                    };
                var zn = n(2344);
                const Xn = 'select',
                    Gn = 'undo',
                    Yn = 'cancel',
                    jn = 'swap',
                    Zn = 'demount',
                    Un = 'demount_from_setup',
                    Vn = 'demount_from_setups',
                    qn = 'destroy',
                    Kn = 'upgrade',
                    Jn = 'add_one';
                var Qn = n(1363),
                    ea = n(1641);
                const ta = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: u = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, s.useCallback)(() => {
                                ((0, Ht.c9)(Ht.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    ge.$.playYes());
                            }, [r, t, n, a]),
                            l = (0, s.useCallback)(() => {
                                (0, Ht.c9)(Ht.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, s.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === ea.t.RIGHT)(e) && i());
                                },
                                [o, i],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, s.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    na = ['children'];
                function aa() {
                    return (
                        (aa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        aa.apply(this, arguments)
                    );
                }
                const ra = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, na);
                    return o().createElement(
                        ta,
                        aa({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var ua = n(7902);
                const sa = [
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
                function oa(e) {
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
                const ia = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ht.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    la = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            u = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            E = void 0 === b || b,
                            h = e.onShow,
                            g = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, sa);
                        const v = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, s.useMemo)(() => (0, ua.F)(), []).resId,
                            A = (0, s.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (ia(n, p, { isMouseEvent: !0, on: !0, arguments: oa(a) }, C),
                                    h && h(),
                                    (v.current.isVisible = !0));
                            }, [n, p, a, C, h]),
                            D = (0, s.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        ia(n, p, { on: !1 }, C),
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
                        return E
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
                                                      r && r(e),
                                                      B && B(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (D(), u && u(t), e && e(t));
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
                    ca = ['children'];
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                const da = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, ca);
                    return o().createElement(
                        la,
                        _a(
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
                var ma = n(5282);
                const pa = {
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
                    ba = 'Warning_base_4c',
                    Ea = 'Warning_glow_79',
                    ha = 'Warning_line_df',
                    ga = 'Warning_icon_24',
                    fa = ({ parentId: e, reason: t, isCritical: n, lockedByDevice: a }) => {
                        const r = (0, s.useMemo)(() => ({ reason: t, isCritical: n, lockedByDevice: a }), [t, n, a]);
                        return o().createElement(
                            'div',
                            { id: e, className: ba },
                            o().createElement('div', { className: Ea }),
                            o().createElement('div', { className: ha }),
                            o().createElement(
                                ie.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: r,
                                    isEnabled: r.reason !== va,
                                },
                                o().createElement('div', { className: ga }),
                            ),
                        );
                    },
                    va = '',
                    Ca = ({
                        parentId: e,
                        mediaSize: t,
                        name: n,
                        tooltipArgs: a,
                        contextMenuArgs: r,
                        imageSource: u,
                        overlayType: i,
                        highlightType: c,
                        isModernized: _,
                        level: d,
                        isDisabled: m,
                        isCurrent: p,
                        isActive: b,
                        isLocked: E,
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
                        lockReason: k,
                        lockedByDevice: T,
                    }) => {
                        const x = (0, s.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            L = x[0],
                            M = x[1],
                            N = (0, s.useState)(!1),
                            I = N[0],
                            P = N[1],
                            O = (0, s.useCallback)(() => {
                                (!L.isActionsHovered && ge.$.playHighlight(),
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
                                z && D && (ge.$.playClick(), D());
                            }, [D, z]),
                            G = L.isBaseHovered || L.isActionsHovered,
                            Y = l()(
                                pa.content,
                                pa[`content__${t}`],
                                G && h && !m && pa.content__hovered,
                                !G && pa.content__out,
                                b && pa.content__installed,
                                p && pa.content__current,
                                m && pa.content__disabled,
                                !z && pa.content__nonclickable,
                            ),
                            j = (0, s.useMemo)(() => {
                                let e = o().createElement('div', {
                                    onMouseEnter: O,
                                    onMouseLeave: $,
                                    className: pa.hover,
                                    onClick: X,
                                });
                                return (
                                    a &&
                                        (e = o().createElement(
                                            da,
                                            { args: a, onShow: y, onHide: w, isEnabled: k === va },
                                            e,
                                        )),
                                    r && (e = o().createElement(ra, { args: r }, e)),
                                    e
                                );
                            }, [O, $, X, a, r, y, w, k]),
                            Z = (0, s.useMemo)(() => {
                                if (!n) return null;
                                const e = l()(pa.name, m && pa.name__disabled);
                                return o().createElement(
                                    'div',
                                    { className: e },
                                    o().createElement(ma.n, {
                                        mediaSize: t,
                                        linesCount: 3,
                                        blocks: (0, ma.D)(systemLocale.toUpperCase(n)),
                                    }),
                                );
                            }, [t, n, m]),
                            U = (0, s.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            V =
                                t === S.cJ.Large || t === S.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            q = (0, s.useMemo)(() => {
                                let e;
                                return (
                                    i && (e = _ ? V.$dyn(`${i}_${d}_overlay`) : V.$dyn(`${i}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [V, i, _, d]),
                            K = (0, s.useMemo)(() => {
                                let e;
                                return (c && (e = V.$dyn(`${c}_highlight`)), e && { backgroundImage: `url(${e})` });
                            }, [V, c]),
                            J = l()(pa.options, m && pa.options__disabled),
                            Q = l()(pa.overlay, pa[`overlay__${i}`]),
                            ee = l()(pa.highlight, pa[`highlight__${c}`]),
                            te = (0, s.useMemo)(() => {
                                const e = (t === S.cJ.Large || t === S.cJ.Huge ? S.cJ.Large : S.cJ.Medium) + '_' + B,
                                    n = R.images.gui.maps.icons.specialization.$dyn(e);
                                return n && { backgroundImage: `url(${n})` };
                            }, [B, t]),
                            ne = l()(pa.category, pa[`category__${t}`]);
                        return o().createElement(
                            da,
                            { args: a, onShow: y, onHide: w },
                            o().createElement(
                                'div',
                                { className: pa.base },
                                o().createElement(
                                    'div',
                                    { id: e, className: Y, onMouseLeave: H },
                                    K &&
                                        o().createElement(
                                            'div',
                                            { className: pa.types },
                                            o().createElement('div', { className: ee, style: K }),
                                        ),
                                    o().createElement('div', { className: pa.image, style: U }, A),
                                    m && o().createElement('div', { className: pa.disabled }),
                                    te && o().createElement('span', { className: ne, style: te }),
                                    q &&
                                        o().createElement(
                                            'div',
                                            { className: pa.types },
                                            o().createElement('div', { className: Q, style: q }),
                                        ),
                                    C && o().createElement('div', { className: pa.specialization }, C),
                                    Z,
                                    g && o().createElement('div', { className: pa.details }, g),
                                    o().createElement('div', { className: J }, f),
                                    j,
                                    o().createElement(
                                        'div',
                                        { onMouseEnter: W, onMouseLeave: $, className: pa.actions },
                                        F && v
                                            ? (0, s.cloneElement)(v, Object.assign({}, v.props, { isMouseOverCard: I }))
                                            : v,
                                    ),
                                ),
                                E &&
                                    o().createElement(
                                        'div',
                                        { className: pa.locked },
                                        o().createElement(fa, {
                                            reason: k,
                                            isCritical: m,
                                            parentId: e,
                                            lockedByDevice: T,
                                        }),
                                    ),
                            ),
                        );
                    };
                var Aa = n(3934),
                    Da = n(8401);
                const Fa = 'Availability_base_51',
                    Ba = () => o().createElement('div', { className: Fa }),
                    ya = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Sa = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: r = !0 }) => {
                            const u = l()(
                                ya.base,
                                ya['base__' + (r ? 'shown' : 'hidden')],
                                (n || e || (a && 0 === e)) && ya.base__visually,
                            );
                            let s = null;
                            return (
                                (s = n
                                    ? o().createElement(Ba, null)
                                    : e || (a && 0 === e)
                                      ? o().createElement(Aa.K, { itemsInStorage: e })
                                      : t && o().createElement(Da.t, t)),
                                o().createElement('div', { className: u }, s)
                            );
                        },
                    ),
                    wa = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var ka = n(8750);
                const Ta = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    xa = ({ level: e }) => {
                        const t = (0, S.GS)();
                        if (!e) return null;
                        const n = l()(Ta.base, t && Ta[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: n },
                            o().createElement(ka.a, {
                                type: ka.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    La = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: r,
                            onSlotAction: u,
                            intCD: i,
                            level: c,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: E,
                        }) => {
                            const h = (0, S.GS)(),
                                g = t > -1,
                                f = `${i}-ability`,
                                v = (0, s.useMemo)(() => ({ intCD: i, slotType: B.YN, fieldType: 0 }), [i]),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        u({ actionType: e, intCD: i, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [u, i, n],
                                ),
                                A = (0, s.useCallback)(() => {
                                    C(Xn);
                                }, [C]),
                                D = (0, s.useContext)(sr),
                                F = (0, s.useMemo)(() => {
                                    const e = l()(wa.bonuses, h && wa[`base__${h}`]),
                                        t = D >= E ? se.Brown : se.Red;
                                    return o().createElement(
                                        'div',
                                        { className: wa.base },
                                        o().createElement(Qn._, {
                                            parentId: f,
                                            mediaSize: h,
                                            classMix: e,
                                            classColorMix: wa.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(oe, {
                                                value: E,
                                                theme: t,
                                                size: ue.Small,
                                                className: wa.points,
                                            }),
                                    );
                                }, [h, _, f, m, E, D]),
                                y =
                                    ((0, s.useMemo)(() => o().createElement(xa, { level: c }), [c]),
                                    (0, s.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(r),
                                        [r],
                                    ));
                            return o().createElement(Ca, {
                                parentId: f,
                                mediaSize: h,
                                name: e,
                                tooltipArgs: v,
                                imageSource: y,
                                isCurrent: a,
                                isActive: g,
                                details: F,
                                isDisabled: m && D < E,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: A,
                                options: o().createElement(Sa, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    Ma = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Na() {
                    return (
                        (Na =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Na.apply(this, arguments)
                    );
                }
                const Ra = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = (0, zn.tT)(te),
                            r = a.categoriesOrder,
                            u = a.onSlotAction,
                            i = a.slots,
                            c = (0, zn.tT)('model.ammunitionPanel'),
                            _ = c.onSectionSelect,
                            d = c.selectedSection,
                            m = (0, S.GS)(),
                            p = r.map(({ value: e }) => e),
                            b = i.map(({ value: e }) => e),
                            E = (0, s.useMemo)(() => {
                                if (m === S.cJ.Tiny)
                                    return b.sort(
                                        (e, t) => p.indexOf(e.category) - p.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                (b.map((t) => {
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
                                } while (t.length < b.length);
                                return t;
                            }, [b, p, m]),
                            h = (0, s.useCallback)(
                                (e) => {
                                    (_({ selectedSlot: e.currentSlotId, selectedSection: d }), u(e));
                                },
                                [_, u, d],
                            ),
                            g = E.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    r = a > -1 && t === a;
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: r ? e : null, className: l()(Ma.card, m && Ma[`card__${m}`]) },
                                    o().createElement(La, Na({}, n, { isCurrent: r, onSlotAction: h })),
                                );
                            }),
                            f = l()(Ma.base, m && Ma[`base__${m}`], n && Ma.base__disabled);
                        return o().createElement('div', { className: f }, g);
                    },
                    Ia = 'BattleAbilitiesNoSelected_base_06',
                    Pa = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Oa = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    Ha = 'BattleAbilitiesNoSelected_title_20',
                    Wa = 'BattleAbilitiesNoSelected_title__small_65',
                    $a = 'BattleAbilitiesNoSelected_subTitle_aa',
                    za = 'BattleAbilitiesNoSelected_button_bf',
                    Xa = R.strings.tank_setup.abilities.noSelected,
                    Ga = () => {
                        const e = (0, S.GS)(),
                            t = (0, zn.tT)(te, zn.DA.None).showInfoPage,
                            n = (0, s.useMemo)(() => e === S.cJ.Small || e === S.cJ.Tiny, [e]),
                            a = (0, s.useMemo)(() => (e === S.cJ.Tiny ? ae.qE.small : ae.qE.medium), [e]),
                            r = (0, s.useCallback)(() => t(), [t]),
                            u = l()(Pa, n && Oa),
                            i = l()(Ha, n && Wa);
                        return o().createElement(
                            'div',
                            { className: Ia, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: u }),
                            o().createElement('div', { className: i }, Xa.title()),
                            o().createElement('div', { className: $a }, Xa.subTitle()),
                            o().createElement(ae.u5, { size: a, mixClass: za, onClick: r }, Xa.toReserves()),
                        );
                    },
                    Ya = 'Content_base_d8',
                    ja = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: Ya },
                            e
                                ? o().createElement(
                                      $n,
                                      { selectedSlotId: t },
                                      o().createElement(Ra, { selectedSlot: t }),
                                  )
                                : o().createElement(Ga, null),
                        );
                    }),
                    Za = {
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
                    Ua = ({ title: e, content: t, tabs: n }) => {
                        const a = (0, S.GS)(),
                            r = l()(Za.base, a && Za[`base__${a}`]),
                            u = l()(Za.tabs, a && Za[`tabs__${a}`]),
                            s = l()(Za.title, a && Za[`title__${a}`]);
                        return o().createElement(
                            'div',
                            { className: r },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: s }, e),
                                n && o().createElement('div', { className: u }, n),
                            ),
                            t && t,
                        );
                    };
                var Va = n(8089);
                const qa = {
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let Ka;
                !(function (e) {
                    ((e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon'));
                })(Ka || (Ka = {}));
                const Ja = o().memo(function ({ theme: e, className: t }) {
                        const n = (0, zn.tT)(te).showInfoPage,
                            a = (0, s.useCallback)(() => n(), [n]),
                            r = (0, s.useMemo)(() => ({ caption: l()(e === Ka.OnlyIcon && qa.hidden) }), [e]);
                        return o().createElement(
                            'div',
                            { className: l()(qa.base, qa[`base__${e}`], t) },
                            o().createElement(Va.A, {
                                caption: e === Ka.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                                type: 'info',
                                side: 'left',
                                onClick: a,
                                classNames: r,
                            }),
                        );
                    }),
                    Qa = 'Header_base_aa',
                    er = 'Header_points_d5',
                    tr = 'Header_content_2c',
                    nr = 'Header_textWrapper_63',
                    ar = 'Header_text_dc',
                    rr = 'Header_infoButton_5e',
                    ur = o().memo(function () {
                        const e = (0, s.useContext)(sr),
                            t = (0, s.useMemo)(
                                () => ({
                                    points: o().createElement(oe, {
                                        theme: se.Brown,
                                        size: ue.Normal,
                                        value: e,
                                        className: er,
                                    }),
                                }),
                                [e],
                            ),
                            n = Lt(H.SkillPointsTooltip, O.SetupView),
                            a = n[0],
                            r = n[1];
                        return o().createElement(
                            'div',
                            { className: Qa },
                            o().createElement(Ua, {
                                title: R.strings.tank_setup.section.battleAbilities(),
                                content: o().createElement(
                                    'div',
                                    { className: tr },
                                    o().createElement(Ja, { theme: Ka.OnlyIcon, className: rr }),
                                    o().createElement(
                                        T.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: a,
                                            onMouseLeave: r,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: nr },
                                            o().createElement(fn, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: t,
                                                classMix: ar,
                                            }),
                                        ),
                                    ),
                                ),
                            }),
                        );
                    }),
                    sr = o().createContext(0),
                    or = () => {
                        const e = (0, y.t)(te),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = (0, y.t)('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            sr.Provider,
                            { value: n },
                            o().createElement(S.Ar, {
                                header: o().createElement(ur, null),
                                content: o().createElement(ja, { isLocked: t, selectedSlot: a }),
                                aside: o().createElement(Nn, { className: Rn }),
                                footer: o().createElement(me, null),
                            }),
                        );
                    };
                let ir;
                !(function (e) {
                    ((e.Economic = 'economic'), (e.Crew = 'crew'), (e.OptDevice = 'optDevice'));
                })(ir || (ir = {}));
                var lr = n(5851),
                    cr = n(8772);
                const _r = {
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
                    dr = ({ type: e, tabs: t, content: n }) => {
                        const a = (0, D.m)('model', !1).vehicleInfo,
                            r = (0, S.GS)(),
                            u = l()(_r.base, _r[`base__${r}`]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(
                                'div',
                                { className: _r.title },
                                (0, I.WU)(R.strings.tank_setup.compare.section.title.$dyn(e), { name: a.vehicleName }),
                            ),
                            o().createElement(
                                'div',
                                { className: _r.description },
                                R.strings.tank_setup.compare.section.description.$dyn(e),
                            ),
                            o().createElement(
                                'div',
                                { className: _r.controlsContainer },
                                o().createElement('div', { className: _r.tabs }, t),
                                o().createElement('div', { className: _r.filters }, n),
                            ),
                        );
                    },
                    mr = {
                        base__standalone: 'InfoButton_base__standalone_a0',
                        base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                        hidden: 'InfoButton_hidden_e0',
                    };
                let pr;
                !(function (e) {
                    ((e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon'));
                })(pr || (pr = {}));
                const br = o().memo(function ({ theme: e, className: t }) {
                    const n = (0, zn.tT)('model.tankSetup.battleBoostersSetup').showInfoPage,
                        a = (0, s.useCallback)(() => n({ tabName: ir.Economic }), [n]),
                        r = (0, s.useMemo)(() => ({ caption: l()(e === pr.OnlyIcon && mr.hidden) }), [e]);
                    return o().createElement(
                        'div',
                        { className: l()(mr.base, mr[`base__${e}`], t) },
                        o().createElement(Va.A, {
                            caption: e === pr.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                            type: 'info',
                            side: 'left',
                            onClick: a,
                            classNames: r,
                        }),
                    );
                });
                var Er = n(7613),
                    hr = n(8934);
                const gr = {
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
                    fr = ({ introType: e }) => {
                        const t = l()(gr.icon, gr[`icon__currency-${e}`]),
                            n = (0, s.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: gr.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? o().createElement(k.z, { binding: n, text: a, classMix: gr.message }) : null;
                    },
                    vr = ({ slotsType: e, haveSuitableEquipments: t = !0, buttonLabel: n, onIntroPassed: a }) => {
                        const r = (0, S.GS)(),
                            u = r === S.cJ.Large || r === S.cJ.Huge,
                            i = (0, s.useState)(!0),
                            c = i[0],
                            _ = i[1],
                            d = (0, s.useCallback)(() => {
                                _(!1);
                            }, []),
                            m = (0, s.useCallback)(() => {
                                (a(), _(!0));
                            }, [a]),
                            p = l()(gr.base, r && gr[`base__${r}`]),
                            b = (0, s.useMemo)(
                                () => ({
                                    enter: gr.base__enter,
                                    enterActive: gr.base__enterActive,
                                    exit: gr.base__exit,
                                    exitActive: gr.base__exitActive,
                                }),
                                [],
                            ),
                            E = l()(gr.image, u ? gr[`image__${e}Large`] : gr[`image__${e}`]),
                            h = t
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(e)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(e);
                        return o().createElement(
                            hr.Z,
                            { in: c, classNames: b, timeout: 300, onExited: m },
                            o().createElement(
                                'div',
                                { className: p, id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: gr.introduction },
                                    o().createElement('div', { className: E }),
                                    o().createElement(
                                        'div',
                                        { className: gr.description },
                                        o().createElement('div', { className: gr.title }, h),
                                        o().createElement(fr, { introType: e }),
                                    ),
                                    t &&
                                        o().createElement(
                                            ae.u5,
                                            { type: ae.L$.secondary, size: ae.qE.medium, onClick: d },
                                            o().createElement(Er.ZP, { text: n }),
                                        ),
                                ),
                            ),
                        );
                    },
                    Cr = 'Tabs_base_d9',
                    Ar = 'Tabs_base__vertical_c0',
                    Dr = 'Tabs_list_0a',
                    Fr = 'Tabs_list__centered_dc',
                    Br = 'Tabs_wrapper_2d',
                    yr = 'Tabs_wrapper__centered_d8',
                    Sr = 'Tabs_wrapper__vertical_a5';
                function wr() {
                    return (
                        (wr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wr.apply(this, arguments)
                    );
                }
                const kr = 'tabs-role';
                var Tr;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(Tr || (Tr = {}));
                class xr extends s.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[Tr.TAB]);
                                return t && t.props[Tr.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[kr] === Tr.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        ((e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[Tr.TAB] })),
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
                            r =
                                ((u = this.tabsProps),
                                (s = a),
                                !(
                                    Object.keys(u).length === Object.keys(s).length &&
                                    Object.keys(u).every(
                                        (e) => Object.prototype.hasOwnProperty.call(s, e) && u[e] === s[e],
                                    )
                                ));
                        var u, s;
                        const i = l()(
                                Br,
                                n.props.className,
                                this.props.isTabsCentered && yr,
                                this.props.isVerticalTabs && Sr,
                            ),
                            c = l()(Dr, this.props.isTabsCentered && Fr);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[kr] === Tr.CONTENT)
                                        return e.props[Tr.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                r = t[0].props.children,
                                u = r.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[Tr.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === r.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][Tr.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, ge.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, ge.G)(this.props.onMouseEnterSound));
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
                                            { className: c, key: Tr.LIST },
                                            o().createElement('div', wr({}, n.props, { className: i }), u),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = l()(Cr, this.props.isVerticalTabs && Ar);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                xr.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Lr = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
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
                const Nr = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            r = e.onClickSound,
                            u = e.onMouseEnterSound,
                            s = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Lr);
                        return o().createElement(
                            'div',
                            Mr({ className: n }, i),
                            o().createElement(
                                xr,
                                { activeKey: a, onClickSound: r, onMouseEnterSound: u, isTabsCentered: s },
                                t,
                            ),
                        );
                    },
                    Rr = {
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
                    Ir = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                const Or = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        u = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, Ir);
                    const _ = a ? null : n,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > s,
                        p = l()(
                            Rr.base,
                            Rr[`base__${t}`],
                            r && Rr.base__animated,
                            u && Rr.base__hidden,
                            !_ && Rr.base__pattern,
                            a && Rr.base__empty,
                            i,
                        );
                    return o().createElement(
                        'div',
                        Pr({ className: p }, c),
                        o().createElement('div', { className: Rr.bg }),
                        o().createElement('div', { className: Rr.pattern }),
                        o().createElement(
                            'div',
                            { className: l()(Rr.value, d && Rr.value__text) },
                            m ? s : _,
                            m && o().createElement('span', { className: Rr.plus }, '+'),
                        ),
                    );
                };
                Or.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Hr = ({ children: e, component: t, props: n = {} }) =>
                        t ? o().createElement(t, n, e) : e || null,
                    Wr = 'Tab_base_dd',
                    $r = 'Tab_base__first_4a',
                    zr = 'Tab_base__last_96',
                    Xr = 'Tab_base__medium_ec',
                    Gr = 'Tab_base__active_5d',
                    Yr = 'Tab_divider_ca',
                    jr = 'Tab_divider__show_62',
                    Zr = 'Tab_state_6c',
                    Ur = 'Tab_stateHighlight_1e',
                    Vr = 'Tab_stateBorder_64',
                    qr = 'Tab_stateBorder__positionLeft_e7',
                    Kr = 'Tab_stateBorder__positionRight_db',
                    Jr = 'Tab_counter_e1',
                    Qr = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const tu = (0, s.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            r = void 0 !== a && a,
                            u = e.isLast,
                            s = void 0 !== u && u,
                            i = e.isMedium,
                            c = void 0 !== i && i,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            b = e.wrapper,
                            E = void 0 === b ? {} : b,
                            h = e.counter,
                            g = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Qr);
                        return o().createElement(
                            Hr,
                            E,
                            o().createElement(
                                'div',
                                eu({ className: l()(Wr, { [Gr]: n }, { [$r]: r }, { [zr]: s }, { [Xr]: c }) }, g),
                                o().createElement(
                                    'span',
                                    { className: Zr },
                                    o().createElement('span', { className: Ur }),
                                    o().createElement('span', { className: l()(Vr, qr) }),
                                    o().createElement('span', { className: l()(Vr, Kr) }),
                                ),
                                p,
                                !s && !n && o().createElement('span', { className: l()(Yr, jr) }),
                                (Boolean(h) || d) &&
                                    o().createElement(
                                        'div',
                                        { className: Jr },
                                        o().createElement(Or, { value: h, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    nu = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' };
                var au = n(5262);
                function ru(e, t, n) {
                    const a = (0, s.useContext)(u.YN);
                    let r = Object.entries(a).filter(([e, t]) => !0 === t && e in au.u);
                    return (
                        n && (r = r.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = r.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, I.e)(t))(n, e[0])]),
                            );
                            return ((e[n] = l()(t[n], ...a)), e);
                        }, {})
                    );
                }
                const uu = ['name', 'newItemsCount', 'onTabChanged', 'isTooltipEnabled'];
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const ou = (0, s.memo)((e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.onTabChanged,
                        r = e.isTooltipEnabled,
                        u = void 0 === r || r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, uu);
                    const l = (0, s.useMemo)(() => R.strings.tank_setup.tabs.$dyn(t), [t]),
                        c = (0, s.useCallback)(() => {
                            (ge.$.playClick(), a({ name: t }));
                        }, [a, t]),
                        _ = (0, s.useMemo)(() => ({ name: t }), [t]),
                        d = ru(['tab'], nu);
                    return o().createElement(
                        ie.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: u,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                tu,
                                su({}, i, { isNotified: Boolean(n), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                });
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const lu = ({ tabs: e, selectedTabName: t, onTabChanged: n, isTooltipEnabled: a = !0 }) => {
                        const r = N('ModernizedSetupTabHintZone', L);
                        return (
                            (0, s.useEffect)(() => {
                                r && r.runTrigger(!0);
                            }, [r]),
                            o().createElement(
                                Nr,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': Tr.LIST },
                                    e.map(({ value: e }) =>
                                        o().createElement(
                                            ou,
                                            iu(
                                                {
                                                    key: e.name,
                                                    onTabChanged: n,
                                                    'tabs-role': Tr.TAB,
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
                    cu = { intro: 'BattleBoosterSetup_intro_d3' },
                    _u = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? lt.UI(e, (e) => ('object' == typeof e ? _u(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? _u(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? _u(t) : t]),
                                    )
                            : e,
                    du = (e) => {
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
                    mu = 'Booster_base_e5',
                    pu = 'Booster_unit_5e';
                var bu = n(8774);
                const Eu = {
                        base: 'BoosterActions_base_95',
                        base__hidden: 'BoosterActions_base__hidden_3e',
                        base__shown: 'BoosterActions_base__shown_6a',
                    },
                    hu = (0, s.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const r = l()(Eu.base, Eu['base__' + (t.length ? 'shown' : 'hidden')]);
                        return o().createElement(
                            'div',
                            { className: r },
                            o().createElement(bu.a, {
                                parentId: `${e}-add_one`,
                                actionType: Jn,
                                onClick: n,
                                show: t.includes(Jn),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(bu.a, {
                                parentId: `${e}-cancel`,
                                actionType: Yn,
                                onClick: n,
                                show: t.includes(Yn),
                            }),
                            o().createElement(bu.a, {
                                parentId: `${e}-undo`,
                                actionType: Gn,
                                onClick: n,
                                show: t.includes(Gn),
                            }),
                        );
                    }),
                    gu = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: r,
                            imageName: u,
                            itemsInStorage: i,
                            price: l,
                            isCurrent: c,
                            onSlotAction: _,
                            intCD: d,
                            isDisabled: m,
                            overlayType: p,
                            isLocked: b,
                            isMounted: E,
                            isMountedInOtherSetup: h,
                            description: g,
                            isBuyMoreVisible: f,
                            isBuyMoreDisabled: v,
                            highlightType: C,
                            compare: A,
                            lockReason: D,
                            effect: F,
                        }) => {
                            const y = (0, S.GS)(),
                                w = y === S.cJ.Large || y === S.cJ.Huge,
                                k = t > -1,
                                T = `${d}-booster`,
                                x = (0, s.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !m &&
                                            k &&
                                            (!A && f && e.push(Jn), (!Boolean(i) && !E) || h ? e.push(Gn) : e.push(Yn)),
                                        e
                                    );
                                }, [m, k, A, f, i, E, h]),
                                L = (0, s.useCallback)(
                                    (e) => (_({ actionType: e, intCD: d, installedSlotId: t }), e === Jn ? 1e3 : 120),
                                    [_, d, t],
                                ),
                                M = du(L),
                                N = (0, s.useCallback)(() => {
                                    x.includes(Gn) ? M(Gn) : x.includes(Yn) ? M(Yn) : M(Xn);
                                }, [x, M]),
                                I = (0, s.useMemo)(() => {
                                    const e = { intCD: d, slotType: B.G$, fieldType: 0 };
                                    return [
                                        e,
                                        Object.assign({}, e, {
                                            installedSlotId: t,
                                            itemInstalledSetupIdx: n,
                                            itemInstalledSetupSlotIdx: a,
                                            isMountedMoreThanOne: r,
                                            isMounted: E,
                                            isDisabled: m,
                                        }),
                                    ];
                                }, [d, t, n, a, E, r, m]),
                                P = I[0],
                                O = I[1],
                                H = (0, s.useMemo)(
                                    () =>
                                        w
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(u)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(u),
                                    [w, u],
                                ),
                                W = (0, s.useMemo)(
                                    () =>
                                        o().createElement(Qn._, {
                                            parentId: T,
                                            classMix: mu,
                                            mediaSize: y,
                                            classColorMix: pu,
                                            linesShown: w ? 4 : 3,
                                            text: g,
                                            effect: F,
                                        }),
                                    [F, y, T, w, g],
                                );
                            return o().createElement(Ca, {
                                parentId: T,
                                mediaSize: y,
                                name: e,
                                tooltipArgs: P,
                                contextMenuArgs: O,
                                imageSource: H,
                                isClickable: !0,
                                isCurrent: c,
                                isActive: k,
                                isDisabled: m,
                                isLocked: b,
                                options: o().createElement(Sa, {
                                    isMounted: E || h,
                                    itemsInStorage: i,
                                    show: !x.length,
                                    price: l,
                                }),
                                actions: o().createElement(hu, {
                                    parentId: T,
                                    availableActions: x,
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
                    fu = {
                        base: 'Cards_base_0a',
                        base__large: 'Cards_base__large_47',
                        base__huge: 'Cards_base__huge_d2',
                        base__disabled: 'Cards_base__disabled_a9',
                        card: 'Cards_card_ab',
                        card__large: 'Cards_card__large_b2',
                        card__huge: 'Cards_card__huge_78',
                    };
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const Cu = ({ currentCardRef: e, selectedSlot: t, isDisabled: n = !1, modelPath: a, compare: r }) => {
                    const u = (0, S.GS)(),
                        i = (0, D.m)(a, !1).onSlotAction,
                        c = (0, D.m)(`${a}.slots`),
                        _ = _u(c);
                    const d = (0, s.useMemo)(() => _.sort((e, t) => e.name.localeCompare(t.name)), [_]).map((n) => {
                            if (!n) return null;
                            const a = t === n.installedSlotId;
                            return o().createElement(
                                'div',
                                { key: n.intCD, ref: a ? e : null, className: l()(fu.card, u && fu[`card__${u}`]) },
                                o().createElement(gu, vu({}, n, { isCurrent: a, onSlotAction: i, compare: r })),
                            );
                        }),
                        m = l()(fu.base, u && fu[`base__${u}`], n && fu.base__disabled);
                    return o().createElement('div', { className: m }, d);
                };
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const Du = 'model.tankSetup.battleBoostersSetup',
                    Fu = R.strings.tank_setup.introduction.directives.showButton(),
                    Bu = ({ compare: e = !1 }) => {
                        const t = (0, S.GS)(),
                            n = (0, D.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, D.m)(Du, !1),
                            r = a.onDealConfirmed,
                            u = a.onDealCancelled,
                            i = a.onAutoRenewalChanged,
                            l = a.onTabChanged,
                            c = a.onIntroPassed,
                            _ = (0, D.m)(`${Du}.tabs`),
                            d = (0, D.m)(Du),
                            m = d.slots,
                            p = d.withIntroduction,
                            b = d.introductionType,
                            E = o().createElement(lu, Au({}, _, { onTabChanged: l, isTooltipEnabled: !1 })),
                            h = (0, s.useMemo)(
                                () =>
                                    !e && p
                                        ? o().createElement(
                                              'div',
                                              { className: cu.intro },
                                              o().createElement(Cu, {
                                                  compare: !1,
                                                  selectedSlot: n,
                                                  modelPath: Du,
                                                  isDisabled: p,
                                              }),
                                              o().createElement(vr, {
                                                  slotsType: b,
                                                  haveSuitableEquipments: m.length > 0,
                                                  buttonLabel: Fu,
                                                  onIntroPassed: c,
                                              }),
                                          )
                                        : o().createElement(
                                              $n,
                                              { selectedSlotId: n, scrollAreaKey: _.selectedTabName },
                                              o().createElement(Cu, { selectedSlot: n, modelPath: Du, compare: e }),
                                          ),
                                [e, p, b, m.length, _.selectedTabName, n, c],
                            );
                        return o().createElement(S.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(dr, { type: B.G$, tabs: E })
                                : o().createElement(Ua, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabs: E,
                                      content:
                                          _.selectedTabName === ir.Economic &&
                                          !p &&
                                          o().createElement(br, { theme: pr.OnlyIcon, className: cu.infoButton }),
                                  }),
                            content: h,
                            footer:
                                !e &&
                                !p &&
                                o().createElement(cr.w, {
                                    withConfirmation: !0,
                                    renewalType: lr.m.Boosters,
                                    parentModelPath: Du,
                                    onDealConfirmed: r,
                                    onDealCancelled: u,
                                    onAutoRenewalChanged: i,
                                    mediaSize: t,
                                }),
                        });
                    },
                    yu = 'tooltip';
                let Su, wu, ku;
                (!(function (e) {
                    e.Bootcamp = 'bootcamp';
                })(Su || (Su = {})),
                    (function (e) {
                        ((e.BC_DEVICE_SETUP_SUB_VIEW = 'bc_device_setup_sub_view'),
                            (e.BC_CONSUMABLE_SETUP_SUB_VIEW = 'bc_consumable_setup_sub_view'),
                            (e.BC_EXIT_VIEW = 'bc_exit_view'),
                            (e.BC_CURRENT_PROGRESS_WIDGET = 'bc_current_progress_widget'),
                            (e.BC_RESULT_SCREEN = 'bc_result_screen'));
                    })(wu || (wu = {})),
                    (function (e) {
                        e.TooltipOpened = 'tooltip_opened';
                    })(ku || (ku = {})));
                const Tu = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    xu = {
                        base: 'ConsumableActions_base_fc',
                        base__hidden: 'ConsumableActions_base__hidden_c1',
                        base__shown: 'ConsumableActions_base__shown_17',
                    },
                    Lu = (0, s.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const r = l()(xu.base, xu['base__' + (t.length ? 'shown' : 'hidden')]);
                        return o().createElement(
                            'div',
                            { className: r },
                            o().createElement(bu.a, {
                                parentId: `${e}-add_one`,
                                actionType: Jn,
                                onClick: n,
                                show: t.includes(Jn),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(bu.a, {
                                parentId: `${e}-cancel`,
                                actionType: Yn,
                                onClick: n,
                                show: t.includes(Yn),
                            }),
                            o().createElement(bu.a, {
                                parentId: `${e}-undo`,
                                actionType: Gn,
                                onClick: n,
                                show: t.includes(Gn),
                            }),
                        );
                    }),
                    Mu = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: r,
                            imageName: u,
                            itemsInStorage: i,
                            price: c,
                            isCurrent: _,
                            onSlotAction: d,
                            intCD: m,
                            isDisabled: p,
                            overlayType: b,
                            isLocked: E,
                            isMounted: h,
                            isMountedInOtherSetup: g,
                            isBuiltIn: f,
                            description: v,
                            isBuyMoreDisabled: C,
                            isBootCamp: A = !1,
                            compare: D,
                            lockReason: F,
                            lockedByDevice: y,
                        }) => {
                            const w = (0, S.GS)(),
                                k = w === S.cJ.Large || w === S.cJ.Huge,
                                T = t > -1,
                                x = `${m}-consumable`,
                                L = (0, s.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !p &&
                                            T &&
                                            (!_ && e.push(jn),
                                            f ||
                                                A ||
                                                (!D && e.push(Jn), (!Boolean(i) && !h) || g ? e.push(Gn) : e.push(Yn))),
                                        e
                                    );
                                }, [p, A, T, _, f, D, i, h, g]),
                                M = (0, s.useCallback)(
                                    (e) => (d({ actionType: e, intCD: m, installedSlotId: t }), e === Jn ? 1e3 : 300),
                                    [d, m, t],
                                ),
                                N = du(M),
                                I = (0, s.useCallback)(() => {
                                    L.includes(jn) ? N(jn) : L.includes(Gn) ? N(Gn) : L.includes(Yn) ? N(Yn) : N(Xn);
                                }, [L, N]),
                                P = (0, s.useMemo)(() => {
                                    const e = { intCD: m, slotType: B.mH, fieldType: 0 };
                                    return [
                                        e,
                                        A
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: r,
                                                  isMounted: h,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [m, t, n, a, r, h, p, A]),
                                O = P[0],
                                H = P[1],
                                W = (0, s.useMemo)(
                                    () =>
                                        k
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(u)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(u),
                                    [k, u],
                                ),
                                z = (0, s.useMemo)(() => {
                                    const e = l()(Tu.base, w && Tu[`base__${w}`]);
                                    return o().createElement(Qn._, {
                                        parentId: x,
                                        mediaSize: w,
                                        classMix: e,
                                        classColorMix: Tu.unit,
                                        linesShown: k ? 4 : 3,
                                        text: v,
                                    });
                                }, [w, k, v, x]),
                                X = J(Su.Bootcamp, wu.BC_CONSUMABLE_SETUP_SUB_VIEW),
                                G = X[0],
                                Y = X[1],
                                j = (0, s.useCallback)(() => {
                                    G(ku.TooltipOpened);
                                }, [G]),
                                Z = (0, s.useCallback)(() => {
                                    Y(ku.TooltipOpened, 2, $.Info, { [yu]: m.toString() });
                                }, [Y, m]);
                            return o().createElement(Ca, {
                                parentId: x,
                                mediaSize: w,
                                name: e,
                                tooltipArgs: O,
                                contextMenuArgs: H,
                                imageSource: W,
                                isCurrent: _,
                                isActive: T,
                                isDisabled: p,
                                isLocked: E,
                                isClickable: !f,
                                options: o().createElement(Sa, {
                                    price: c,
                                    isMounted: h || g,
                                    itemsInStorage: i,
                                    show: !L.length,
                                }),
                                actions: o().createElement(Lu, {
                                    parentId: x,
                                    availableActions: L,
                                    onActionClick: N,
                                    isBuyMoreDisabled: C,
                                }),
                                details: z,
                                overlayType: b,
                                onSlotClick: I,
                                onTooltipShow: A ? j : void 0,
                                onTooltipHide: A ? Z : void 0,
                                lockReason: F,
                                lockedByDevice: y,
                            });
                        },
                    ),
                    Nu = {
                        base: 'Cards_base_57',
                        base__large: 'Cards_base__large_db',
                        base__huge: 'Cards_base__huge_ac',
                        base__disabled: 'Cards_base__disabled_4f',
                        card: 'Cards_card_4e',
                        card__large: 'Cards_card__large_87',
                        card__huge: 'Cards_card__huge_dd',
                    },
                    Ru = [
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
                    Iu = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...Ru,
                    ],
                    Pu = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...Ru,
                    ];
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Hu = ({
                        currentCardRef: e,
                        isDisabled: t,
                        modelPath: n,
                        selectedSlot: a,
                        compare: r,
                        isBootCamp: u = !1,
                    }) => {
                        const s = (0, S.GS)(),
                            i = (0, D.m)(n, !1).onSlotAction,
                            c = ((e) =>
                                ((e, t, n) => {
                                    const a = n !== S.cJ.Tiny || t ? Iu : Pu;
                                    return e
                                        .reduce((e, t) => {
                                            const n = a.indexOf(t.value.itemName);
                                            return ((e[-1 === n ? Math.max(e.length, Pu.length) : n] = t), e);
                                        }, [])
                                        .filter((e) => Boolean(e));
                                })(e, r, s))((0, D.m)(`${n}.slots`)).map(({ value: t }) => {
                                if (!t) return null;
                                const n = t.installedSlotId > -1 && a === t.installedSlotId;
                                return o().createElement(
                                    'div',
                                    { key: t.intCD, ref: n ? e : null, className: l()(Nu.card, s && Nu[`card__${s}`]) },
                                    o().createElement(
                                        Mu,
                                        Ou({}, t, { isCurrent: n, onSlotAction: i, isBootCamp: u, compare: r }),
                                    ),
                                );
                            }),
                            _ = l()(Nu.base, s && Nu[`base__${s}`], t && Nu.base__disabled);
                        return o().createElement('div', { id: 'consumables', className: _ }, c);
                    },
                    Wu = 'model.tankSetup.consumablesSetup',
                    $u = ({ compare: e = !1 }) => {
                        const t = (0, S.GS)(),
                            n = (0, D.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, D.m)('model').isBootcamp,
                            r = (0, D.m)(Wu),
                            u = r.onDealConfirmed,
                            s = r.onDealCancelled,
                            i = r.onAutoRenewalChanged;
                        return o().createElement(S.Ar, {
                            header: e
                                ? o().createElement(dr, { type: B.mH })
                                : o().createElement(Ua, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                $n,
                                { selectedSlotId: n },
                                o().createElement(Hu, { selectedSlot: n, modelPath: Wu, compare: e, isBootCamp: a }),
                            ),
                            footer:
                                !e &&
                                o().createElement(cr.w, {
                                    withConfirmation: !0,
                                    renewalType: lr.m.Consumables,
                                    mediaSize: t,
                                    parentModelPath: Wu,
                                    onDealConfirmed: u,
                                    onDealCancelled: s,
                                    onAutoRenewalChanged: i,
                                }),
                            compare: e,
                        });
                    };
                var zu = n(2106),
                    Xu = n(8586),
                    Gu = n(3978);
                const Yu = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    ju = 'FilterItem_base_2e',
                    Zu = ({ name: e }) => {
                        const t = (0, s.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            }),
                            [e],
                        );
                        return o().createElement('div', { className: ju, style: t });
                    };
                R.strings.common.percentValue();
                let Uu;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(Uu || (Uu = {}));
                const Vu = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                (R.strings.crew.filterPanel.counterMultySelect.reset.header(),
                    R.strings.crew.filterPanel.counterMultySelect.reset.body());
                let qu;
                !(function (e) {
                    ((e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy'));
                })(qu || (qu = {}));
                const Ku = 'ClearBtn_base_a6',
                    Ju = 'ClearBtn_stroke_09',
                    Qu = 'ClearBtn_background_61',
                    es = 'ClearBtn_base__hover_3b',
                    ts = 'ClearBtn_base__down_60',
                    ns = 'ClearBtn_cross_1d',
                    as = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const r = (0, s.useState)(!1),
                            u = r[0],
                            i = r[1],
                            c = (0, s.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, s.useCallback)(() => {
                                ((0, ge.G)(a), d(!1), i(!0));
                            }, [a]),
                            p = (0, s.useCallback)(() => {
                                ((0, ge.G)(n), d(!0));
                            }, [n]),
                            b = (0, s.useCallback)(() => {
                                (d(!1), i(!1));
                            }, []),
                            E = l()(Ku, _ && es, u && ts);
                        return o().createElement(
                            T.i,
                            Vu,
                            o().createElement(
                                'div',
                                { id: e, className: E, onMouseDown: m, onMouseOver: p, onMouseLeave: b, onClick: t },
                                o().createElement('div', { className: Qu }),
                                o().createElement('div', { className: Ju }),
                                o().createElement('div', { className: ns }),
                            ),
                        );
                    },
                    rs = 'MatchDetails_base_a8',
                    us = 'MatchDetails_count_d2',
                    ss = 'MatchDetails_clear_21',
                    os = 'MatchDetails_clear__shown_49',
                    is = 'MatchDetails_separator_bc',
                    ls = 'MatchDetails_arrow_b0',
                    cs = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const r = (0, s.useCallback)(() => t(), [t]),
                            u = l()(ss, e && os);
                        return o().createElement(
                            'div',
                            { className: rs },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: us }, n),
                                    o().createElement(
                                        'span',
                                        { className: is },
                                        '/',
                                        o().createElement('span', { className: ls }),
                                    ),
                                ),
                            o().createElement('span', { className: us }, a),
                            o().createElement(
                                'span',
                                { className: u },
                                o().createElement(as, { parentId: 'match-details-clear-btn', onClick: r }),
                            ),
                        );
                    },
                    _s = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: r = !1,
                        onFilterChanged: u,
                        onFilterReset: i,
                        selectedSlotSpecialization: c,
                    }) => {
                        const _ = (0, S.GS)(),
                            d = N('FilterTutorialHintZone', L);
                        (0, s.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, lt.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Zu, { name: e }),
                            callback: (e, t) => {
                                (u({ name: e }), (0, Gu.d)(e, !t));
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: zu.L.ghost,
                                mixClass: l()(Yu.button, c && e === c && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: R.strings.tank_setup.categories.$dyn(e),
                                body: R.strings.tank_setup.categories.body.$dyn(e),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: l()(Yu.base, _ && Yu[`base__${_}`], r && Yu.base__detailed) },
                            r &&
                                o().createElement(cs, {
                                    isFilterActive: a,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: Yu.buttons },
                                o().createElement(Xu.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var ds = n(2372),
                    ms = n(7078);
                const ps = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    bs = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Es = (e) => (e ? bs.disabled.text() : bs.notDisabled.text()),
                    hs = ({ disabled: e }) => {
                        const t = (0, S.GS)(),
                            n = (0, zn.m2)('model.tankSetup.optDevicesSetup.specialCurrency', !0),
                            a = n.value,
                            r = n.onGetMoreCurrency,
                            u = (0, s.useCallback)(() => r(), [r]),
                            i = (0, s.useMemo)(() => ({ tooltipId: B.$4 }), []);
                        return o().createElement(
                            'div',
                            { className: l()(ps.base, t && ps[`base__${t}`]) },
                            o().createElement(
                                ms.t,
                                { args: i },
                                o().createElement(
                                    'div',
                                    { className: ps.currency },
                                    o().createElement(ds.A, { value: a }),
                                    o().createElement('div', { className: ps.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                T.i,
                                { body: Es(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        ae.u5,
                                        { onClick: u, mixClass: ps.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    };
                function gs() {
                    return (
                        (gs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        gs.apply(this, arguments)
                    );
                }
                const fs = (e, t) => e && o().createElement(hs, { disabled: t }),
                    vs = (e) =>
                        !e.isComparisonHeader &&
                        ((e) => {
                            const t = e.haveSuitableEquipments,
                                n = e.hasUnfitItems;
                            return e.isIntroduction ? fs(!t, !n) : fs(t, !t);
                        })(e),
                    Cs = ({
                        tabs: e,
                        onTabChanged: t,
                        filter: n,
                        onFilterChanged: a,
                        onFilterReset: r,
                        propsForDisplayHeaderContent: u,
                        selectedSlotSpecialization: i,
                    }) => {
                        const l = u.isComparisonHeader,
                            c = e.tabs.length > 1 && o().createElement(lu, gs({}, e, { onTabChanged: t })),
                            _ = (0, s.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case B.S:
                                            return o().createElement(
                                                _s,
                                                gs({}, n, {
                                                    onFilterChanged: a,
                                                    onFilterReset: r,
                                                    selectedSlotSpecialization: i,
                                                }),
                                            );
                                        case B.pi:
                                            return vs(u);
                                        default:
                                            return null;
                                    }
                                },
                                [n, a, r, u, i],
                            );
                        return l
                            ? o().createElement(dr, { type: B.zn, tabs: c, content: _(e.selectedTabName) })
                            : o().createElement(Ua, {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  content: _(e.selectedTabName),
                                  tabs: c,
                              });
                    };
                var As = n(4814);
                const Ds = 'Unit_base_15',
                    Fs = 'Unit_base__special_37',
                    Bs = 'Unit_glow_38',
                    ys = R.strings.tank_setup.kpi.bonus.valueTypes,
                    Ss = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    ws = ({ value: e, valueType: t, valueKey: n, isSpecial: a }) => {
                        const r = 'mul' === t ? 100 * (e - 1) : e,
                            u = r > 0 ? '+' : '',
                            s = Ht.Z5.getRealFormat(r, Ht.Gr.WO_ZERO_DIGITS),
                            i = ys.$dyn(n),
                            c = `${s}${i ? ` ${i}` : Ss}`;
                        return o().createElement(
                            'div',
                            { className: l()(Ds, a && Fs) },
                            o().createElement('span', null, o().createElement('span', { className: Bs }), u + c),
                        );
                    },
                    ks = 'Bonus_base_aa',
                    Ts = 'Bonus_text_48',
                    xs = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Ls = ({ values: e, localeName: t }) => {
                        const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!n) return xs;
                        const a = n.value,
                            r = a.value,
                            u = 'mul' === a.valueType ? 100 * (r - 1) : r;
                        return { calcValue: u, isPositive: u > 0, valueKey: a.valueKey };
                    };
                function Ms() {
                    return (
                        (Ms =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ms.apply(this, arguments)
                    );
                }
                const Ns = ({ bonus: e, mediaSize: t, isSpecial: n, visibleLinesCount: a }) => {
                        const r = ((e, t = !1) =>
                                t || Ls(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(e),
                            u = (0, s.useMemo)(() => {
                                let t = null;
                                return (
                                    e.values.forEach(({ value: a }) => {
                                        a &&
                                            a.valueKey === e.localeName &&
                                            (t = o().createElement(ws, Ms({ isSpecial: n }, a)));
                                    }),
                                    t
                                );
                            }, [e, n]);
                        return (
                            r &&
                            o().createElement(
                                'span',
                                { className: ks },
                                u,
                                ' ',
                                a &&
                                    r &&
                                    o().createElement(
                                        'span',
                                        { className: Ts },
                                        o().createElement(ma.n, { linesCount: a, blocks: (0, ma.D)(r), mediaSize: t }),
                                    ),
                            )
                        );
                    },
                    Rs = 'Bonuses_base_af',
                    Is = 'Bonuses_bonus_d1',
                    Ps = 'Bonuses_text_37',
                    Os = 'Bonuses_effect_f8',
                    Hs = 'Bonuses_icon_40',
                    Ws = (0, s.memo)(
                        ({ parentId: e, items: t, effect: n, mediaSize: a, maxLines: r, isSpecial: u }) => {
                            const i = (0, s.useMemo)(() => {
                                    if (!n) return [null, 0];
                                    const e = 1 === t.length ? 2 : 1;
                                    return [
                                        o().createElement(
                                            'div',
                                            { className: Is },
                                            o().createElement(
                                                'span',
                                                { className: Os },
                                                o().createElement('span', { className: Hs }),
                                                R.strings.tank_setup.effects.name(),
                                            ),
                                            ' ',
                                            o().createElement(
                                                'span',
                                                { className: Ps },
                                                o().createElement(ma.n, {
                                                    mediaSize: a,
                                                    linesCount: e,
                                                    blocks: (0, ma.D)(n),
                                                }),
                                            ),
                                        ),
                                        e,
                                    ];
                                }, [a, n, t.length]),
                                l = i[0],
                                c = i[1];
                            return (
                                c && (r -= c),
                                o().createElement(
                                    'div',
                                    { id: `${e}-bonuses`, className: Rs },
                                    l,
                                    t.map(({ value: e }, n) => {
                                        let s;
                                        return r && e
                                            ? ((s = t.length > 2 ? 1 : 2 === t.length ? (r > 2 ? 2 : 1) : r),
                                              (r -= s),
                                              o().createElement(
                                                  'div',
                                                  { key: n, className: Is },
                                                  o().createElement(Ns, {
                                                      bonus: e,
                                                      mediaSize: a,
                                                      isSpecial: u,
                                                      visibleLinesCount: s,
                                                  }),
                                              ))
                                            : null;
                                    }),
                                )
                            );
                        },
                    ),
                    $s = 'DeviceActions_base_c0',
                    zs = 'DeviceActions_base__hidden_a6',
                    Xs = 'DeviceActions_base__shown_b0',
                    Gs = (0, s.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: r,
                            isModernized: u,
                            isFreeToDemount: s,
                            destroyTooltipBodyPath: i,
                            level: c,
                        }) => {
                            const _ = (r || a) && t.includes(Kn),
                                d = t.length && (t[0] !== Kn || _),
                                m = l()($s, d ? Xs : zs);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(bu.a, {
                                    parentId: `${e}-cancel`,
                                    actionType: Yn,
                                    onClick: n,
                                    show: t.includes(Yn),
                                }),
                                o().createElement(bu.a, {
                                    parentId: `${e}-undo`,
                                    actionType: Gn,
                                    onClick: n,
                                    show: t.includes(Gn),
                                }),
                                o().createElement(bu.a, {
                                    parentId: `${e}-upgrade`,
                                    actionType: Kn,
                                    onClick: n,
                                    show: _,
                                    isModernized: u,
                                    level: c,
                                }),
                                o().createElement(bu.a, {
                                    parentId: `${e}-demount`,
                                    actionType: Zn,
                                    onClick: n,
                                    show: t.includes(Zn),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(bu.a, {
                                    parentId: `${e}-demount_from_setup`,
                                    actionType: Un,
                                    onClick: n,
                                    show: t.includes(Un),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(bu.a, {
                                    parentId: `${e}-demount_from_setups`,
                                    actionType: Vn,
                                    onClick: n,
                                    show: t.includes(Vn),
                                }),
                                o().createElement(bu.a, {
                                    parentId: `${e}-destroy`,
                                    actionType: qn,
                                    buttonType: zu.L.secondary,
                                    onClick: n,
                                    show: (u || !s) && t.includes(qn),
                                    isModernized: u,
                                    tooltipBodyPath: i,
                                }),
                            );
                        },
                    );
                function Ys() {
                    return (
                        (Ys =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ys.apply(this, arguments)
                    );
                }
                const js = (0, s.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: r,
                            imageName: u,
                            itemsInStorage: i,
                            price: l,
                            specializations: c,
                            intCD: _,
                            isMounted: d,
                            isMountedInOtherSetup: m,
                            isDisabled: p,
                            isFreeToDemount: b,
                            overlayType: E,
                            isLocked: h,
                            bonuses: g,
                            effect: f,
                            isUpgradable: v,
                            isTrophy: C,
                            activeSpecsMask: A,
                            onSlotAction: D,
                            isCurrent: F,
                            compare: y,
                            isModernized: w,
                            level: k,
                            lockReason: T,
                            destroyTooltipBodyPath: x,
                            isBootCamp: L = !1,
                        }) => {
                            const M = (0, S.GS)(),
                                N = M === S.cJ.Large || M === S.cJ.Huge,
                                I = t > -1,
                                P = `${_}-device`,
                                O = J(Su.Bootcamp, wu.BC_DEVICE_SETUP_SUB_VIEW),
                                H = O[0],
                                W = O[1],
                                z = (0, s.useCallback)(() => {
                                    H(ku.TooltipOpened);
                                }, [H]),
                                X = (0, s.useCallback)(() => {
                                    W(ku.TooltipOpened, 2, $.Info, { [yu]: _.toString() });
                                }, [W, _]),
                                G = (0, s.useMemo)(() => {
                                    const e = [];
                                    let t = !0;
                                    return (
                                        I &&
                                            !p &&
                                            (F || e.push(jn),
                                            L ||
                                                (d && !y
                                                    ? ((t = !F),
                                                      e.push(...((e) => (e ? [Un, Vn] : [Zn]))(r)),
                                                      e.push(qn))
                                                    : e.push(
                                                          ((e, t, n) => ((!Boolean(e) && !t) || n ? Gn : Yn))(i, d, m),
                                                      ))),
                                        !v || y || p || L || e.push(Kn),
                                        { availableActions: e, isDeviceClickable: t }
                                    );
                                }, [I, p, v, y, L, F, d, r, i, m]),
                                Y = G.availableActions,
                                j = G.isDeviceClickable,
                                Z = (0, s.useCallback)(
                                    (e) => {
                                        D({ actionType: e, intCD: _, installedSlotId: t });
                                    },
                                    [D, _, t],
                                ),
                                U = (0, s.useCallback)(() => {
                                    Y.length && Y[0] !== Kn ? Z(Y[0]) : Z(Xn);
                                }, [Y, Z]),
                                V = (0, s.useMemo)(() => {
                                    const e = { intCD: _, slotType: B.zn, fieldType: 0 };
                                    return [
                                        e,
                                        L
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: r,
                                                  isMounted: d,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [_, t, n, a, r, d, p, L]),
                                q = V[0],
                                K = V[1],
                                Q = (0, s.useMemo)(
                                    () =>
                                        N
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(u)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(u),
                                    [N, u],
                                ),
                                ee =
                                    c && c.specializations.length
                                        ? o().createElement(As.G, Ys({}, c, { activeSpecsMask: A, mediaSize: M }))
                                        : null,
                                te = y
                                    ? null
                                    : o().createElement(Sa, {
                                          isMounted: d || m,
                                          itemsInStorage: i,
                                          price: l,
                                          possibleZeroCount: C || w,
                                          show: !Y.length || Boolean(i || d || m),
                                      });
                            return o().createElement(Ca, {
                                parentId: P,
                                mediaSize: M,
                                name: e,
                                tooltipArgs: q,
                                contextMenuArgs: K,
                                imageSource: Q,
                                isCurrent: F,
                                isActive: I,
                                isDisabled: p,
                                isLocked: h,
                                isClickable: j,
                                isModernized: w,
                                level: k,
                                specializations: ee,
                                details: o().createElement(
                                    Ws,
                                    Ys(
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
                                options: te,
                                actions: o().createElement(Gs, {
                                    parentId: P,
                                    availableActions: Y,
                                    onActionClick: Z,
                                    isInstalled: I,
                                    isModernized: w,
                                    level: k,
                                    isFreeToDemount: b,
                                    destroyTooltipBodyPath: x,
                                }),
                                overlayType: E,
                                onSlotClick: U,
                                shouldHandleMouseOver: !0,
                                onTooltipShow: L ? z : void 0,
                                onTooltipHide: L ? X : void 0,
                                lockReason: T,
                            });
                        },
                    ),
                    Zs = {
                        base: 'Cards_base_f1',
                        base__large: 'Cards_base__large_a2',
                        base__huge: 'Cards_base__huge_32',
                        base__disabled: 'Cards_base__disabled_20',
                        card: 'Cards_card_5e',
                        card__large: 'Cards_card__large_0e',
                        card__huge: 'Cards_card__huge_84',
                    };
                function Us() {
                    return (
                        (Us =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Us.apply(this, arguments)
                    );
                }
                const Vs = (0, s.memo)(
                        ({
                            currentCardRef: e,
                            selectedSlot: t,
                            modelPath: n,
                            isDisabled: a,
                            isBootCamp: r = !1,
                            compare: u = !1,
                        }) => {
                            const s = (0, S.GS)(),
                                i = (0, D.m)(n, !1).onSlotAction,
                                c = (0, D.m)(`${n}.slots`).map(({ value: n }) => {
                                    if (!n || !n.isVisible) return null;
                                    const a = n.installedSlotId,
                                        c = a > -1 && t === a,
                                        _ = l()(Zs.card, s && Zs[`card__${s}`]);
                                    return o().createElement(
                                        'div',
                                        { key: n.intCD, ref: c ? e : null, className: _ },
                                        o().createElement(
                                            js,
                                            Us({}, n, { isCurrent: c, onSlotAction: i, compare: u, isBootCamp: r }),
                                        ),
                                    );
                                }),
                                _ = l()(Zs.base, s && Zs[`base__${s}`], a && Zs.base__disabled);
                            return o().createElement('div', { className: _, id: 'optDevices' }, c);
                        },
                    ),
                    qs = 'OptDevicesSetup_intro_ae',
                    Ks = 'model.tankSetup.optDevicesSetup',
                    Js = R.strings.tank_setup.introduction.equipments.showButton(),
                    Qs = ({ compare: e }) => {
                        var t, n, a, r;
                        const u = (0, S.GS)(),
                            i = (0, D.m)(e ? 'model' : 'model.ammunitionPanel'),
                            l = i.selectedSlot,
                            c = i.sectionGroups,
                            _ = (0, D.m)('model').isBootcamp,
                            d = (0, D.m)(Ks),
                            m = d.slots,
                            p = d.withIntroduction,
                            b = d.introductionType,
                            E = (0, D.m)(Ks, !1),
                            h = E.onDealConfirmed,
                            g = E.onDealCancelled,
                            f = E.onTabChanged,
                            v = E.onAutoRenewalChanged,
                            C = E.onFilterChanged,
                            A = E.onFilterReset,
                            F = E.hasUnfitItems,
                            B = (0, D.m)(`${Ks}.filter`),
                            y = (0, D.m)(`${Ks}.tabs`),
                            w = (0, D.m)(Ks, !1).onIntroPassed,
                            k =
                                c &&
                                (null == (t = c[0]) ||
                                null == (n = t.value.sections[0]) ||
                                null == (a = n.value.slots[l])
                                    ? void 0
                                    : a.value),
                            T = y.selectedTabName,
                            x = (0, D.m)(`${Ks}.slots`).length,
                            L = (0, s.useMemo)(
                                () =>
                                    !e &&
                                    p &&
                                    o().createElement(
                                        'div',
                                        { className: qs },
                                        o().createElement(Vs, { selectedSlot: l, modelPath: Ks, isDisabled: p }),
                                        o().createElement(vr, {
                                            slotsType: b,
                                            haveSuitableEquipments: m.length > 0,
                                            buttonLabel: Js,
                                            onIntroPassed: w,
                                        }),
                                    ),
                                [e, p, b, m.length, l, w],
                            ),
                            M = {
                                tabs: y,
                                filter: B,
                                onFilterChanged: C,
                                onFilterReset: A,
                                onTabChanged: f,
                                propsForDisplayHeaderContent: {
                                    isComparisonHeader: e,
                                    isIntroduction: p,
                                    haveSuitableEquipments: m.length > 0,
                                    hasUnfitItems: F,
                                },
                                selectedSlotSpecialization:
                                    null == k || null == (r = k.specializations.specializations[0])
                                        ? void 0
                                        : r.value.name,
                            };
                        return o().createElement(S.Ar, {
                            compare: e,
                            header: o().createElement(Cs, M),
                            content:
                                L ||
                                o().createElement(
                                    $n,
                                    { selectedSlotId: l, scrollAreaKey: T, updateKey: `${B.selectedFilterCount}:${x}` },
                                    o().createElement(Vs, {
                                        compare: e,
                                        selectedSlot: l,
                                        modelPath: Ks,
                                        isDisabled: p,
                                        isBootCamp: _,
                                    }),
                                ),
                            footer:
                                !e &&
                                o().createElement(cr.w, {
                                    withConfirmation: !0,
                                    parentModelPath: Ks,
                                    mediaSize: u,
                                    onDealConfirmed: h,
                                    onDealCancelled: g,
                                    onAutoRenewalChanged: v,
                                }),
                        });
                    };
                var eo = n(5096),
                    to = n(2558);
                const no = 200;
                let ao;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(ao || (ao = {}));
                const ro = {
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
                    uo = o().memo(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: r,
                            actionType: u,
                            uniqueKey: i,
                            onTransitionEnd: c,
                        }) => {
                            const _ = (0, s.useMemo)(() => n === S.cJ.Tiny, [n]),
                                d = (0, s.useMemo)(() => a === t, [a, t]),
                                m = (0, s.useMemo)(() => u === jn || 'drag_drop' === u, [u]),
                                p = (0, s.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, s.useMemo)(() => ((r - a > 1 && _) || !m ? 'Fade' : ''), [m, a, r, _]),
                                E = (0, s.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: ro.base__enter,
                                                enterDone: ro[`base__enter${p}${b}`],
                                                exit: ro[`base__exit${p}${b}`],
                                                exitActive: ro.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                h = (0, s.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            ((e.className = ''), c && c());
                                        }, no);
                                    },
                                    [c],
                                ),
                                g = (0, s.useMemo)(() => ({ animationDuration: '200ms' }), []),
                                f = l()(ro.base, ro[`base__${n}`]);
                            return o().createElement(
                                to.Z,
                                { component: null, childFactory: E },
                                o().createElement(
                                    hr.Z,
                                    { key: i, timeout: no, onEntered: h },
                                    o().createElement('div', { className: f, style: g }, e),
                                ),
                            );
                        },
                    );
                var so = n(2094);
                const oo = {
                        base: 'Shell_base_4d',
                        base__tiny: 'Shell_base__tiny_a9',
                        shell: 'Shell_shell_61',
                        icon: 'Shell_icon_55',
                        base__withLimit: 'Shell_base__withLimit_4d',
                        base__large: 'Shell_base__large_aa',
                        base__huge: 'Shell_base__huge_a8',
                        count: 'Shell_count_ed',
                        base__medium: 'Shell_base__medium_5e',
                        count__zero: 'Shell_count__zero_45',
                        count__withLimit: 'Shell_count__withLimit_f9',
                        maxCountText: 'Shell_maxCountText_e0',
                        maxCountText__zero: 'Shell_maxCountText__zero_00',
                        name: 'Shell_name_29',
                        ammunition: 'Shell_ammunition_00',
                        specifications: 'Shell_specifications_33',
                    },
                    io = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    lo = ({ paramName: e, value: t, metricValue: n, media: a, isSuperficial: r }) => {
                        const u = l()(io.base, a && io[`base__${a}`]),
                            i = l()(io.separator, a && io[`separator__${a}`]),
                            c = o().createElement(
                                'div',
                                { className: io.value },
                                t || o().createElement('span', null, '—'),
                            ),
                            _ = (0, s.useMemo)(() => {
                                if ('avgPiercingPower' === e) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [e]);
                        return o().createElement(
                            'div',
                            { className: u },
                            r
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      R.strings.menu.tank_params.shortened.$dyn(e),
                                      ' ',
                                      c,
                                      o().createElement('div', { className: io.units }, _),
                                  )
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      R.strings.menu.tank_params.$dyn(e),
                                      o().createElement('div', { className: io.units }, n),
                                      o().createElement('div', { className: i }),
                                      c,
                                  ),
                        );
                    };
                var co = n(7405),
                    _o = n(329);
                const mo = {
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
                function po() {
                    return (
                        (po =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        po.apply(this, arguments)
                    );
                }
                const bo = (0, s.memo)(
                        ({
                            buyCount: e,
                            inStorageCount: t,
                            inVehicleCount: n,
                            isSuperficial: a,
                            price: r,
                            totalPrice: u,
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
                                p = r.defPrice.length > 0,
                                b = (0, s.useMemo)(
                                    () =>
                                        p
                                            ? {
                                                  tooltip: 'priceDiscount',
                                                  price: r.price[0].value.value,
                                                  defPrice: r.defPrice[0].value.value,
                                                  currencyType: r.price[0].value.name,
                                              }
                                            : void 0,
                                    [p, r.defPrice, r.price],
                                ),
                                E = l()(mo.base, i && mo[`base__${i}`]),
                                h = l()(mo.separator, i && mo[`separator__${i}`]),
                                g = l()(mo.row, i && mo[`row__${i}`]),
                                f = l()(mo.total, i && mo[`total__${i}`]),
                                v = l()(mo.price, mo.price__final),
                                C = l()(mo.lowResolutionValue, i && mo[`lowResolutionValue__${i}`]),
                                A = l()(mo.hiResolutionValue, i && mo[`hiResolutionValue__${i}`]),
                                D = l()(mo.colored, i && mo[`colored__${i}`]),
                                F = o().createElement('span', { className: mo.indent }),
                                B = o().createElement('span', { className: mo.divider }, '/');
                            return o().createElement(
                                'div',
                                { className: E },
                                o().createElement(
                                    'div',
                                    { className: g },
                                    o().createElement(
                                        'div',
                                        { className: mo.rowItem },
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
                                                { className: mo.rowItem },
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
                                        { className: mo.value },
                                        o().createElement(
                                            'div',
                                            { className: mo.overall },
                                            '(',
                                            o().createElement('span', null, e),
                                            ' ',
                                            '×',
                                            o().createElement(
                                                ms.t,
                                                { args: b, isEnabled: p },
                                                o().createElement(
                                                    'span',
                                                    { className: mo.price },
                                                    o().createElement(Da.t, po({ showZero: !0 }, r)),
                                                ),
                                            ),
                                            ')',
                                            o().createElement(
                                                'span',
                                                { className: v },
                                                e
                                                    ? o().createElement(
                                                          Da.t,
                                                          po({ showZero: !0, ignoreDiscount: !0 }, u),
                                                      )
                                                    : o().createElement(co.F, {
                                                          size: _o.et.small,
                                                          type: _o.V2.credits,
                                                          value: 0,
                                                      }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Eo = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                function ho() {
                    return (
                        (ho =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ho.apply(this, arguments)
                    );
                }
                const go = ({
                        buyCount: e,
                        itemsInStorage: t,
                        itemsInVehicle: n,
                        price: a,
                        totalPrice: r,
                        specifications: u,
                        media: i,
                    }) => {
                        const c = i === S.cJ.Tiny,
                            _ = u.map(({ value: e }, t) =>
                                e && ('avgPiercingPower' === e.paramName || (!c && e.value))
                                    ? o().createElement(
                                          s.Fragment,
                                          { key: t },
                                          o().createElement(lo, ho({}, e, { media: i, isSuperficial: c })),
                                      )
                                    : null,
                            ),
                            d = l()(Eo.base, i && Eo[`base__${i}`]);
                        return o().createElement(
                            'div',
                            { className: d },
                            o().createElement('div', { className: Eo.overall }, _),
                            o().createElement(
                                'div',
                                { className: Eo.total },
                                o().createElement(bo, {
                                    buyCount: e,
                                    inStorageCount: t,
                                    inVehicleCount: n,
                                    price: a,
                                    totalPrice: r,
                                    isSuperficial: c,
                                    mediaSize: i,
                                }),
                            ),
                        );
                    },
                    fo = R.strings.item_types.shell.kinds,
                    vo = R.strings.tank_setup.shells,
                    Co = 8,
                    Ao = 19,
                    Do = ({
                        type: e,
                        intCD: t,
                        imageName: n,
                        count: a,
                        buyCount: r,
                        price: u,
                        totalPrice: i,
                        itemsInStorage: c,
                        itemsInVehicle: _,
                        specifications: d,
                        availableCount: m,
                        clipCount: p,
                        onShellUpdate: b,
                        maxCount: E,
                        installedSlotId: h,
                        itemInstalledSetupIdx: g,
                        itemInstalledSetupSlotIdx: f,
                        isMountedMoreThanOne: v,
                        mediaSize: C,
                        isGoldShellLimit: A,
                    }) => {
                        const D = (0, s.useCallback)(
                                (e) => {
                                    b && b({ intCD: t, newCount: e });
                                },
                                [b, t],
                            ),
                            F = (0, s.useMemo)(() => {
                                const e = { slotType: B.g9, fieldType: 0, intCD: t };
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
                            y = F[0],
                            w = F[1],
                            k = (0, s.useMemo)(() => {
                                const e = ((e) => {
                                    const t = R.images.gui.maps.icons.shell;
                                    switch (e) {
                                        case S.cJ.Huge:
                                        case S.cJ.Large:
                                            return t.large;
                                        default:
                                            return t.big;
                                    }
                                })(C);
                                return { backgroundImage: `url(${e ? e.$dyn(n) : ''})` };
                            }, [n, C]),
                            x = (0, s.useMemo)(() => {
                                const t = 'ARMOR_PIERCING_FSDS' !== e ? fo.$dyn(e) : fo.ARMOR_PIERCING_FSDS_SHORT();
                                return (
                                    t && o().createElement('div', { className: oo.name }, systemLocale.toUpperCase(t))
                                );
                            }, [e]),
                            L = l()(oo.base, C && oo[`base__${C}`], A && oo.base__withLimit),
                            M = l()(oo.count, !a && oo.count__zero, A && oo.count__withLimit),
                            N = A
                                ? o().createElement(
                                      T.i,
                                      { header: vo.limitTooltip.header(), body: vo.limitTooltip.body() },
                                      o().createElement(
                                          'div',
                                          { className: M },
                                          o().createElement(Er.ZP, { text: String(a) }),
                                          o().createElement(Er.ZP, {
                                              className: l()(oo.maxCountText, !a && oo.maxCountText__zero),
                                              text: vo.limitValue.counterDash(),
                                          }),
                                          o().createElement(Er.ZP, {
                                              className: l()(oo.maxCountText, !a && oo.maxCountText__zero),
                                              width: String(m).length * (C === S.cJ.Tiny ? Co : Ao),
                                              text: String(m),
                                          }),
                                      ),
                                  )
                                : o().createElement(Er.ZP, { className: M, text: String(a) });
                        return o().createElement(
                            'div',
                            { className: L },
                            o().createElement(
                                'div',
                                { className: oo.shell },
                                o().createElement(
                                    ra,
                                    { args: w },
                                    o().createElement(
                                        ms.t,
                                        { args: y },
                                        o().createElement('div', { className: oo.icon, style: k }, N),
                                    ),
                                ),
                                x,
                            ),
                            o().createElement(
                                'div',
                                { className: oo.ammunition },
                                o().createElement(so.i, {
                                    parentId: `${t}-slider`,
                                    currentValue: a,
                                    maximum: E,
                                    sliderMaximum: m,
                                    onUpdates: D,
                                    stepCount: p,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: oo.specifications },
                                o().createElement(go, {
                                    specifications: d,
                                    itemsInStorage: c,
                                    itemsInVehicle: _,
                                    price: u,
                                    buyCount: r,
                                    media: C,
                                    totalPrice: i,
                                }),
                            ),
                        );
                    },
                    Fo = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    Bo = o().memo(
                        ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: r = 'play' }) => {
                            const u = (0, s.useCallback)(() => {
                                    (r && (0, ge.G)(r), t(e));
                                }, [e, t, r]),
                                i = (0, s.useCallback)(() => {
                                    a && (0, ge.G)(a);
                                }, [a]),
                                c = l()(Fo.base, Fo[`base__${n}`]);
                            return o().createElement('div', {
                                id: `swap-${e}`,
                                onClick: u,
                                onMouseEnter: i,
                                className: c,
                            });
                        },
                    ),
                    yo = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__smallLimit: 'Sections_base__smallLimit_78',
                        shell: 'Sections_shell_a2',
                        base__large: 'Sections_base__large_d0',
                        base__huge: 'Sections_base__huge_b0',
                        swap: 'Sections_swap_be',
                        swap__noEvents: 'Sections_swap__noEvents_2d',
                    };
                function So() {
                    return (
                        (So =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        So.apply(this, arguments)
                    );
                }
                const wo = () => {
                        const e = (0, D.m)(ko),
                            t = e.installedCount,
                            n = e.maxCount,
                            a = e.clipCount,
                            r = e.onShellUpdate,
                            u = e.onSlotAction,
                            i = e.isGoldShellLimit,
                            c = (0, D.m)(`${ko}.slots`),
                            _ = (0, D.m)('model.lastSlotAction'),
                            d = _.leftID,
                            m = _.rightID,
                            p = _.actionType,
                            b = (0, s.useState)(!1),
                            E = b[0],
                            h = b[1],
                            g = (0, S.GS)(),
                            f = n - t,
                            v = (0, s.useCallback)(
                                (e) => {
                                    (E || u({ actionType: jn, leftID: e, rightID: e + 1 }), h(!0));
                                },
                                [u, E],
                            ),
                            C = (0, s.useCallback)(() => {
                                h(!1);
                            }, [h]),
                            A = l()(yo.base, yo[`base__${g}`], i && g === S.cJ.Tiny && yo.base__smallLimit);
                        return o().createElement(
                            'div',
                            { className: A },
                            c.map(
                                ({ value: e }, t) =>
                                    Boolean(e) &&
                                    o().createElement(
                                        s.Fragment,
                                        { key: t },
                                        o().createElement(
                                            uo,
                                            {
                                                index: t,
                                                uniqueKey: e.intCD,
                                                leftID: d,
                                                rightID: m,
                                                actionType: p,
                                                mediaSize: g,
                                                onTransitionEnd: C,
                                            },
                                            o().createElement(
                                                'div',
                                                { className: yo.shell },
                                                o().createElement(
                                                    Do,
                                                    So({}, e, {
                                                        maxCount: i ? e.maxCount : n,
                                                        availableCount: i ? e.availableCount : f + e.count,
                                                        clipCount: a,
                                                        mediaSize: g,
                                                        onShellUpdate: r,
                                                        isGoldShellLimit: i,
                                                    }),
                                                ),
                                            ),
                                        ),
                                        t !== c.length - 1 &&
                                            o().createElement(
                                                'div',
                                                { className: yo.swap },
                                                o().createElement(Bo, { id: t, mediaSize: g, onSwap: v }),
                                            ),
                                    ),
                            ),
                        );
                    },
                    ko = 'model.tankSetup.shellsSetup',
                    To = () => {
                        const e = (0, S.GS)(),
                            t = (0, D.m)(ko),
                            n = t.onDealConfirmed,
                            a = t.onDealCancelled,
                            r = t.onAutoRenewalChanged,
                            u = t.isGoldShellLimit;
                        return o().createElement(S.Ar, {
                            header: o().createElement(Ua, {
                                title: R.strings.tank_setup.section.shells(),
                                content: o().createElement(eo.k, {
                                    isShortened: !0,
                                    trackChanges: !0,
                                    modelPath: ko,
                                    isGoldShellLimit: u,
                                }),
                            }),
                            content: o().createElement(wo, null),
                            footer: o().createElement(cr.w, {
                                withConfirmation: !0,
                                renewalType: lr.m.Shells,
                                parentModelPath: ko,
                                mediaSize: e,
                                onDealConfirmed: n,
                                onDealCancelled: a,
                                onAutoRenewalChanged: r,
                            }),
                        });
                    },
                    xo = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    };
                function Lo(e, t, n, a, r, u, s) {
                    try {
                        var o = e[u](s),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                function Mo(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (a, r) {
                            var u = e.apply(t, n);
                            function s(e) {
                                Lo(u, a, r, s, o, 'next', e);
                            }
                            function o(e) {
                                Lo(u, a, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const No = ({ isHidden: e = !1 }) => {
                        const t = (0, s.useState)(!1),
                            n = t[0],
                            a = t[1],
                            r = (0, s.useRef)(null),
                            u = (0, zn.m2)('model', !1).onResized,
                            i = (0, zn.m2)('model.vehicleInfo', !0),
                            c = (0, S.GS)();
                        (0, s.useEffect)(() => {
                            const e = (0, F.v)(() => a(!0));
                            return () => e();
                        }, []);
                        const _ = (0, s.useCallback)(
                            Mo(function* () {
                                (yield (0, Ht.Eu)(), yield In());
                                const e = r.current;
                                e &&
                                    u({
                                        x: fe.O.view.pxToRem(e.getBoundingClientRect().x),
                                        width: fe.O.view.pxToRem(e.offsetWidth),
                                    });
                            }),
                            [u],
                        );
                        ((0, s.useEffect)(() => {
                            if (!n) return (0, F.v)(_);
                        }, [_, n]),
                            (0, s.useEffect)(
                                () => (
                                    engine.on('clientResized', _),
                                    () => {
                                        engine.off('clientResized', _);
                                    }
                                ),
                                [_, u],
                            ));
                        const d = l()(xo.base, c && xo[`base__${c}`], e && xo.base__hidden);
                        return o().createElement('div', { className: d, ref: r }, o().createElement(ht, i));
                    },
                    Ro = {
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
                    Io = [B.zn, B.g9, B.mH, B.G$, B.YN],
                    Po = (e, t) => (t === e ? '' : Io.indexOf(t) > Io.indexOf(e) ? 'right' : 'left'),
                    Oo = ({ children: e, selectedSetup: t }) => {
                        const n = o().createRef(),
                            a = (0, s.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            r = (0, s.useMemo)(() => {
                                const e = Po(a.current.selectedSetup, t);
                                return { enter: Ro[`base__${e}Enter`] };
                            }, [t]),
                            u = (0, s.useCallback)(
                                (e) => {
                                    const r = Po(a.current.selectedSetup, t);
                                    ((e.className = l()(Ro.base, Ro.base__exit)),
                                        e.classList.add(Ro[`base__${r}Exit`]),
                                        (a.current.animatedElements[t] = n));
                                    (Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(Ro.base__previous);
                                    }),
                                        n.current && n.current.classList.add(Ro.base__previous));
                                },
                                [n, t],
                            ),
                            i = (0, s.useCallback)(
                                (e) => {
                                    const n = Po(a.current.previousSelectedSetup, t);
                                    ((e.className = Ro.base), e.classList.add(Ro[`base__${n}Enter`]));
                                },
                                [t],
                            ),
                            c = (0, s.useCallback)(
                                (e) => {
                                    const n = Po(a.current.previousSelectedSetup, t);
                                    e.classList.add(Ro[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, s.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            o().createElement(
                                to.Z,
                                null,
                                o().createElement(
                                    hr.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: r,
                                        onExit: u,
                                        onEnter: i,
                                        onEntering: c,
                                    },
                                    o().createElement('div', { className: Ro.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    Ho = ({ compare: e = !1 }) => {
                        const t = (0, D.m)('model.tankSetup').selectedSetup;
                        return o().createElement(
                            s.Fragment,
                            null,
                            o().createElement(
                                Oo,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case B.zn:
                                            return o().createElement(Qs, { compare: e });
                                        case B.g9:
                                            return o().createElement(To, null);
                                        case B.mH:
                                            return o().createElement($u, { compare: e });
                                        case B.G$:
                                            return o().createElement(Bu, { compare: e });
                                        case B.YN:
                                            return o().createElement(or, null);
                                        default:
                                            return o().createElement(Qs, { compare: e });
                                    }
                                })(),
                            ),
                            !e && o().createElement(No, { isHidden: t === B.YN }),
                        );
                    };
                var Wo = n(9152);
                const $o = () => {
                    const e = (0, D.m)('model', !1),
                        t = e.onClose,
                        n = e.onViewRendered,
                        a = e.onAnimationEnd,
                        r = (0, D.m)('model').show;
                    (0, s.useEffect)(() => (0, F.v)(n), [n]);
                    const u = (0, s.useCallback)(() => a(), [a]),
                        i = (0, s.useCallback)(() => t(), [t]);
                    return o().createElement(Wo.S, {
                        onClose: i,
                        content: o().createElement(Ho, { compare: !0 }),
                        show: r,
                        onAnimationDone: u,
                    });
                };
                engine.whenReady.then(() => {
                    A().render(
                        o().createElement(v, null, o().createElement($o, null)),
                        document.getElementById('root'),
                    );
                });
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => C });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3457),
                    s = n(2106),
                    o = n(6373),
                    i = n(6179),
                    l = n.n(i);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    b = 'Action_image_e9',
                    E = 'Action_button_74',
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
                    level: S,
                    onClick: w,
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
                            P || (O(!0), T.current === v.Visible && $(setTimeout(() => w(t), 200)));
                        }, [t, w, P]),
                        G = B ? f(t, S) : t,
                        Y = (0, i.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? f(e, t) : e))(t, S, y, B);
                            return {
                                header: h.title.$dyn(e),
                                body: g.includes(e) ? void 0 : h.description.$dyn(D || e),
                            };
                        }, [t, C, A, y, B, S, D]),
                        j = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: r()(c, a ? d : _, M && m) },
                        l().createElement(
                            o.i,
                            Y,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    u.u5,
                                    { onClick: X, type: F, mixClass: E, disabled: C },
                                    l().createElement('div', { className: b, style: j }),
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
                    r = n.n(a),
                    u = n(3415),
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
                const b = 'TextOverflow_base_3b',
                    E = ({ content: e, classMix: t }) => {
                        const n = (0, i.useRef)(null),
                            a = (0, i.useState)(!0),
                            u = a[0],
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
                                { isEnabled: u, body: e },
                                l().createElement('div', { ref: n, className: r()(b, t) }, e),
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
                        placeholder: u = R.strings.common.dropdown.placeholder.select(),
                        label: s = '',
                        classMix: o,
                        onClick: c,
                        soundHover: _,
                        soundClick: p,
                        customControl: b,
                    }) => {
                        const v = (0, i.useState)(f.Out),
                            C = v[0],
                            A = v[1],
                            D = (0, i.useState)(!1),
                            F = D[0],
                            B = D[1],
                            y = t === d.Disabled,
                            S = y || t === d.Basic,
                            w = (0, i.useCallback)(() => {
                                y || (A(f.Over), _ && (0, h.G)(_));
                            }, [y, _]),
                            k = (0, i.useCallback)(() => {
                                y || (A(f.Down), p && (0, h.G)(p));
                            }, [y, p]),
                            T = (0, i.useCallback)(() => {
                                (!y && A(f.Over), !S && B(!0));
                            }, [y, S]),
                            x = (0, i.useCallback)((e) => c && c(e), [c]),
                            L = (0, i.useCallback)(() => A(f.Out), []);
                        ((0, i.useEffect)(() => {
                            S || B(!1);
                        }, [t, S]),
                            (0, i.useEffect)(() => {
                                y && L();
                            }, [y, L]));
                        const M = r()(g.base, a && g.base__open, g[`base__${C}`], (S || !F) && g[`base__${t}`], o);
                        return l().createElement(
                            'div',
                            {
                                id: e ? `${e}_control` : void 0,
                                className: M,
                                onMouseEnter: w,
                                onMouseUp: T,
                                onMouseDown: k,
                                onMouseLeave: L,
                                onClick: x,
                            },
                            !F && t === d.Alert && l().createElement('div', { className: g.alert }),
                            l().createElement(
                                'div',
                                { className: r()(g.label, g[`label__${n}`], !s && g.label__placeholder) },
                                b || l().createElement(E, { content: s || u }),
                            ),
                            l().createElement(
                                'div',
                                { className: r()(g.button, g[`button__${n}`]) },
                                l().createElement('div', { className: r()(g.arrow, g[`arrow__${n}`]) }),
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
                            r = e.selectedItemId,
                            u = e.scrollAreaKey,
                            o = void 0 === u ? 'scrollArea' : u,
                            c = e.withCompleteTrigger,
                            _ = void 0 !== c && c,
                            d = e.containerClasses,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, D);
                        const p = (0, i.useState)(!1),
                            b = p[0],
                            E = p[1],
                            h = (0, i.useRef)({}),
                            g = (0, i.useRef)(null),
                            f = (0, i.useRef)(null),
                            v = (0, i.useRef)(null),
                            C = (0, i.useCallback)(() => {
                                E(!0);
                            }, []),
                            B = (0, i.useCallback)(() => {
                                E(!1);
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
                            if (a && null !== r) return (0, s.v)(y);
                        }, [o, y, r, a]);
                        const S = !(!f.current || !f.current.scrollbar) && f.current.scrollbar.scrollbarYActive,
                            w = {
                                scrollContainerRef: g,
                                selectedItemRef: v,
                                selectedItemId: r,
                                isScrollComplete: b,
                                scrollbarActive: S,
                                onScrollAnimationComplete: B,
                            },
                            k = (0, i.cloneElement)(t, w);
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
                    S = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const w = (0, i.memo)((e) => {
                        let t = e.size,
                            n = e.classMix,
                            a = e.onClick,
                            u = e.itemRenderer,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, S);
                        const o = s.id,
                            c = s.isSelected,
                            _ = s.isDisabled,
                            d = s.label,
                            m = s.soundHover,
                            p = s.soundClick,
                            b = (0, i.useCallback)(
                                (e) => {
                                    _ || (a && a(e, o));
                                },
                                [o, _, a],
                            ),
                            E = (0, i.useCallback)(() => {
                                _ || (m && (0, h.G)(m));
                            }, [_, m]),
                            g = (0, i.useCallback)(() => {
                                _ || (p && (0, h.G)(p));
                            }, [_, p]),
                            f = r()(y.base, t && y[`base__${t}`], c && y.base__selected, _ && y.base__disabled, n);
                        return l().createElement(
                            'div',
                            { className: f, onMouseEnter: E, onMouseDown: g, onClick: b },
                            u ? u(s) : d,
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
                        selectedItemRef: u,
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
                            { className: r()(k.base, m && k.base__withScroll) },
                            t.map((t) => {
                                const r = `${o}_${t.id}`;
                                return l().createElement(
                                    'div',
                                    { id: o ? r : void 0, key: r, ref: t.id === a ? u : null },
                                    l().createElement(
                                        w,
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
                        isOpen: u,
                        autoScroll: s,
                        classMix: o,
                        itemClassMix: c,
                        itemRenderer: _,
                        onClick: d,
                        soundHover: p,
                        soundClick: b,
                    }) => {
                        const E = (0, i.useState)(null),
                            h = E[0],
                            g = E[1],
                            f = (0, C.D9)(u);
                        (0, i.useEffect)(() => {
                            if (u && !f) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const n = e.find((e) => t.includes(e.id));
                                    return n ? n.id : null;
                                })(n, a);
                                null !== e && g(e);
                            }
                            u || g(null);
                        }, [u, n, a, f]);
                        const v = e ? `${e}_list` : void 0;
                        return l().createElement(
                            'div',
                            { id: v, className: r()(L.base, L[`base__${t}`], o) },
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
                                    soundClick: b,
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
                            size: b = m.Medium,
                            multiple: E = !1,
                            autoScroll: h = !0,
                            placeholder: g,
                            classMix: f,
                            controlRenderer: C,
                            itemRenderer: A,
                            open: D,
                            tooltipArgs: F,
                            onChanges: B,
                            onOpen: y,
                            onClose: S,
                            onClick: w,
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
                                Z = j[0],
                                U = j[1],
                                V = (0, i.useState)(window.innerHeight),
                                q = V[0],
                                K = V[1],
                                J = ((e, t) => {
                                    const n = Array.isArray(e) ? e : [e];
                                    return !t && n.length > 1 ? n.slice(0, 1) : n;
                                })(a, E),
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
                            const re = (0, i.useCallback)(() => {
                                z.current.open && ((z.current.open = !1), Y(!1), S && S());
                            }, [S]);
                            (0, o.gd)(te ? c.n.ESCAPE : c.n.NONE, re, te);
                            const ue = (0, i.useCallback)(() => {
                                (k && k(), ee && (Y(!1), (z.current.open = !1), S && S()));
                            }, [k, S, ee]);
                            ((0, i.useEffect)(() => {
                                const e = W.current;
                                if (e && te)
                                    return (
                                        _.c1.register(e, ue),
                                        () => {
                                            _.c1.unregister(e, ue);
                                        }
                                    );
                            }, [te, ue]),
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
                                a !== z.current.listAbove && ((z.current.listAbove = a), U(a));
                            }, [t, q]);
                            (0, i.useEffect)(() => (0, s.v)(se), [se, b, n.length]);
                            const oe = (0, i.useCallback)(
                                    (e) => {
                                        const t = J.findIndex((t) => t === e) > -1;
                                        let n = [];
                                        ((n = E ? (t ? J.filter((t) => t !== e) : [e, ...J]) : t ? [] : [e]),
                                            B && B(n));
                                    },
                                    [E, B, J],
                                ),
                                ie = (0, i.useCallback)(() => {
                                    ee &&
                                        ((z.current.open = !z.current.open),
                                        Y(z.current.open),
                                        z.current.open ? y && y() : S && S());
                                }, [ee, y, S]),
                                le = (0, i.useCallback)(
                                    (e) => {
                                        (Q && ie(), w && w(e));
                                    },
                                    [Q, w, ie],
                                ),
                                ce = (0, i.useCallback)(
                                    (e, t) => {
                                        (w && w(e, t), oe(t), !E && ie());
                                    },
                                    [w, E, ie, oe],
                                ),
                                _e = (0, i.useCallback)((e) => T && T(e), [T]),
                                de = (0, i.useCallback)((e) => L && L(e), [L]),
                                me = (0, i.useCallback)((e) => x && x(e), [x]),
                                pe = (0, i.useCallback)((e) => M && M(e), [M]),
                                be = (0, i.useMemo)(
                                    () =>
                                        n
                                            .filter((e) => J.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [n, J],
                                ),
                                Ee = (0, i.useMemo)(() => n.filter((e) => J.includes(e.id)), [n, J]),
                                he = C ? C(Ee) : void 0;
                            return l().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: W,
                                    className: r()(I.base, I[`base__${b}`], f && f.base),
                                    onMouseEnter: _e,
                                    onMouseUp: de,
                                    onMouseDown: me,
                                    onMouseLeave: pe,
                                },
                                l().createElement(
                                    'div',
                                    { className: r()(I.control, te && I.control__down) },
                                    l().createElement(
                                        u.l,
                                        { tooltipArgs: F },
                                        l().createElement(v, {
                                            parentId: e,
                                            size: b,
                                            variant: p,
                                            isOpen: te,
                                            placeholder: g,
                                            label: be,
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
                                        className: r()(
                                            I.list,
                                            te ? I.list__down : I.list__up,
                                            Z ? I.list__above : I.list__under,
                                        ),
                                    },
                                    l().createElement(N, {
                                        parentId: e,
                                        size: b,
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
                        isAutoRenewalEnabled: r,
                        tooltipArgs: u,
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
                            tooltipArgs: u,
                            onOpen: a,
                            size: m.Small,
                            variant: r ? d.Basic : d.Disabled,
                            classMix: { list: H, base: O },
                        });
                    };
            },
            8586: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => g });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
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
                const E = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: u,
                    withToggle: l = !1,
                    toggle: E,
                    buttonProps: h,
                }) => {
                    const g = (0, a.useCallback)(() => {
                            u(t, E);
                        }, [t, u, E]),
                        f = (0, a.useMemo)(() => {
                            if (l) {
                                const t = s()(m, E && p);
                                return r().createElement(
                                    'div',
                                    { className: c },
                                    r().createElement('div', { className: _ }),
                                    E && r().createElement('div', { className: d }),
                                    r().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, E]);
                    return r().createElement(i.i, n, r().createElement(o.u5, b({}, h, { onClick: g }), f));
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
                    r().createElement(
                        'div',
                        { className: l },
                        e.map((e) => r().createElement(E, h({ key: e.ctaType }, e))),
                    );
            },
            7208: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => p });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(2558),
                    i = n(8934),
                    l = n(4179);
                const c = 'Animation_base_ab',
                    _ = 'Animation_base__withAnimation_41',
                    d = 'Animation_base__enter_1e',
                    m = 'Animation_base__exit_88',
                    p = ({ children: e, when: t, canAccept: n }) => {
                        const u = s()(c, _),
                            p = (0, a.useCallback)((e, t) => {
                                (0, l.Eu)().then(() => {
                                    ((e.className = ''), e.classList.add(c), e.classList.add(t));
                                });
                            }, []),
                            b = (0, a.useCallback)(
                                (e) => {
                                    p(e, d);
                                },
                                [p],
                            ),
                            E = (0, a.useCallback)(
                                (e) => {
                                    p(e, m);
                                },
                                [p],
                            );
                        return t
                            ? r().createElement(
                                  o.Z,
                                  null,
                                  r().createElement(
                                      i.Z,
                                      { in: n, timeout: 500, onEnter: b, onExit: E, key: `index-${n}` },
                                      r().createElement('div', { className: u }, e),
                                  ),
                              )
                            : r().createElement('div', { className: c }, e);
                    };
            },
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => p, m: () => m });
                var a = n(2262),
                    r = n(8844),
                    u = n(6373),
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
                        const b = (0, o.m)(e),
                            E = b.isAutoRenewalEnabled,
                            h = b.onAutoRenewalChanged,
                            g = b.selectedAutoRenewalType,
                            f = (0, i.useCallback)(() => {
                                const e = { type: g, value: !E };
                                (h && h(e), n && n(e));
                            }, [n, h, E, g]),
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
                                    if (!E) return;
                                    const t = { type: e, value: E };
                                    (h && h(t), n && n(t));
                                },
                                [n, h, E],
                            ),
                            D = (0, i.useMemo)(() => {
                                const e = [s.t8.Soft, s.t8.Hard],
                                    t = [];
                                for (let n = 0; n < e.length; n++) {
                                    const a = e[n],
                                        r = d.dealPanel.autoRenewType.$dyn(a);
                                    t.push({ id: a, label: r });
                                }
                                return t;
                            }, []);
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(
                                u.i,
                                v,
                                l().createElement(a.XZ, {
                                    id: 'renewal-setup-checkbox',
                                    isChecked: E,
                                    text: t,
                                    onChange: f,
                                    alignment: r.N3.Center,
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
                                        isAutoRenewalEnabled: E,
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
                    r = n.n(a),
                    u = n(3457),
                    s = n(6373),
                    o = n(7383);
                const i = 'ConfirmButton_base_75',
                    l = r().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: s }) => {
                        const o = R.strings.tank_setup.dealPanel.button.$dyn(e),
                            l = (0, a.useCallback)(() => n && n(), [n]);
                        return r().createElement(
                            'div',
                            { ref: s, className: i, id: 'deal-panel-confirm' },
                            r().createElement(u.u5, { size: u.qE.medium, disabled: t, onClick: l }, o),
                        );
                    }),
                    c = 'Controls_base_d3',
                    _ = 'Controls_button_f8',
                    d = r().memo(
                        ({
                            applyBtnString: e = o.YR,
                            isDisabled: t,
                            canCancel: n,
                            onCancel: a,
                            onConfirm: i,
                            confirmButtonRef: d,
                        }) => {
                            const m = R.strings.tank_setup.dealPanel,
                                p = r().createElement(l, {
                                    applyBtnString: e,
                                    isDisabled: t,
                                    onConfirm: i,
                                    confirmButtonRef: d,
                                });
                            return r().createElement(
                                'div',
                                { id: 'deal-panel-controls', className: c },
                                t
                                    ? r().createElement(
                                          s.i,
                                          { body: m.tooltip.notEnough() },
                                          r().createElement('div', null, p),
                                      )
                                    : p,
                                r().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    r().createElement(
                                        u.u5,
                                        {
                                            size: u.qE.medium,
                                            type: u.L$.secondary,
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
                    r = n.n(a),
                    u = n(9056),
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
                const b = 'TotalPrice_base_d9',
                    E = 'TotalPrice_message_66',
                    h = 'TotalPrice_message__hidden_29',
                    g = 'TotalPrice_plus_f0',
                    f = ({ parentId: e, isHideMessage: t, priceLabel: n, price: a, defPrice: u, discount: s }) => {
                        const i = r()(E, t && h);
                        return o().createElement(
                            'div',
                            { id: `${e}-total-price`, className: b },
                            o().createElement('div', { className: i }, n),
                            o().createElement(p.t, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: a,
                                defPrice: u,
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
                        priceLabel: b = C.toBePaid(),
                        autoRenewalLabel: E,
                        onAutoRenewalChanged: h,
                        onDealConfirmed: g,
                        onDealCancelled: A,
                    }) => {
                        const D = `${a}.dealPanel`,
                            F = (0, u.m)(D),
                            B = F.totalItemsInStorage,
                            y = F.isDisabled,
                            S = F.canAccept,
                            w = F.canCancel,
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
                            W = r()(m.base, n && m[`base__${n}`], e && m.base__renewal, !I && m.base__dialog),
                            $ = r()(m.storage, n && m[`storage__${n}`]),
                            z = r()(m.renewal, !I && m.renewal__dialog),
                            X = r()(m.totalPrice, H && m.totalPrice__mixed);
                        return o().createElement(
                            'div',
                            { className: W },
                            e &&
                                o().createElement(
                                    'div',
                                    { className: z },
                                    o().createElement(_.Y, { modelPath: D, renewType: e, onValueChanged: h, label: E }),
                                ),
                            o().createElement(
                                c.f,
                                { when: I, canAccept: S },
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
                                                priceLabel: b,
                                                price: k,
                                                defPrice: T,
                                                discount: x,
                                                isHideMessage: M && I,
                                            }),
                                        ),
                                    t &&
                                        S &&
                                        o().createElement(
                                            'div',
                                            { className: m.control },
                                            o().createElement(d.Z, {
                                                isDisabled: y,
                                                canCancel: w,
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
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u);
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
                        u = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return r().createElement('div', { className: n, style: u });
                };
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => m });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3649),
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
                        withOffset: b = !0,
                        effect: E,
                    }) => {
                        const h = r()(l, m),
                            g = (0, u.z4)(t)
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
                            v = r()(l, a);
                        return o().createElement(
                            'div',
                            { id: `${e}-details`, className: v },
                            E &&
                                o().createElement(
                                    'span',
                                    { className: _ },
                                    o().createElement('span', { className: d }),
                                    E,
                                ),
                            b ? g : o().createElement(i.n, { mediaSize: n, blocks: f, linesCount: p }),
                        );
                    };
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => d });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    o = n(7405),
                    i = n(329);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: u = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length),
                            b = s()(c, p && _);
                        return r().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (u || Boolean(e.value)) &&
                                    r().createElement(
                                        a.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        r().createElement(
                                            'div',
                                            { className: b },
                                            r().createElement(o.F, {
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
                    r = n.n(a),
                    u = n(8089),
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
                        const b = (0, _.GS)(),
                            E = (0, l.useRef)(null),
                            h = (0, l.useRef)(!1);
                        (0, s.gd)(o.n.ESCAPE, p);
                        const g = !t,
                            f = (0, l.useCallback)(
                                (e) => {
                                    m && e.target === E.current && m();
                                },
                                [m],
                            );
                        ((0, l.useEffect)(() => {
                            (a && (h.current = !0), h.current && (0, i.G)('cons_select_view'));
                        }, [a]),
                            (0, l.useEffect)(() => {
                                const e = E.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', f),
                                        () => {
                                            e.removeEventListener('animationend', f);
                                        }
                                    );
                            }, [f]));
                        const v = r()(d.base, a && d.base__shown, g ? d.base__compare : d.base__setup),
                            C = r()(d.content, g && d.content__compare, d['content__' + (a ? 'shown' : 'hidden')]),
                            A = !a && !h.current,
                            D = r()(d.close, b && d[`close__${b}`]);
                        return c().createElement(
                            'div',
                            { className: v },
                            g && c().createElement('div', { className: d.back }),
                            n,
                            a &&
                                c().createElement(
                                    'div',
                                    { id: 'setup-app-close-btn', className: D },
                                    c().createElement(u.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: p,
                                    }),
                                ),
                            !A && c().createElement('div', { id: 'setup-content', ref: E, className: C }, e),
                            t && c().createElement('div', { className: d.panel }, t),
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => p, D: () => m });
                var a = n(6483),
                    r = n.n(a),
                    u = n(1856),
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
                            b = (0, o.useState)({ width: 0, height: 0 }),
                            E = b[0],
                            h = b[1],
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
                            if (e.length) return (f.current.shortened && (f.current.shortened = !1), (0, u.v)(v));
                        }, [e, n, v]),
                            (0, o.useEffect)(() => {
                                if (E.height && !f.current.shortened) {
                                    const t = (0, l.M)(g, E.height);
                                    if (-1 !== t) {
                                        const n = e.slice(0, t);
                                        (n.push(i().createElement('span', { key: t }, '...')),
                                            p(n),
                                            (f.current.shortened = !0));
                                    }
                                }
                            }, [e, E, n]));
                        const C = (0, o.useMemo)(() => (E.height ? { maxHeight: `${E.height}rem` } : {}), [E.height]);
                        return i().createElement('div', { ref: g, className: r()(c, E.height && _), style: C }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => u });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    r = (e, t) => e.getBoundingClientRect().top >= t,
                    u = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                u = Array.from(n.children);
                            if (u.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!r(e[n], t)) return -1;
                                    let a = 0,
                                        u = n - 1,
                                        s = !1;
                                    for (; u - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (u - a + 1));
                                        ((s = r(e[n], t)), s ? (u = n) : (a = n));
                                    }
                                    return s || r(e[u], t) ? a : u;
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
                    r = n.n(a),
                    u = n(8526),
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
                        picker: u,
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
                            { className: r()(_.progressBar, _.base, _[`base__${e}`]), style: i },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !s && l().createElement('div', { className: r()(_.glow, _.glow__right) }),
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
                    E = 'SlideControl_image__hover_eb',
                    h = 'SlideControl_image__active_70',
                    g = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = r()(b, n && E, t && h);
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
                        const u = r()(F.base, n && F.base__enabled, F[`base__${t}${n ? 'On' : 'Off'}`]);
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
                        stepCount: E = 1,
                    }) => {
                        const h = (0, i.useRef)(null),
                            F = (0, i.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, i.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            S = (0, i.useState)(t),
                            w = S[0],
                            k = S[1],
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
                                    if (E > 1) {
                                        t *= E;
                                        const e = n % E;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [E],
                            ),
                            P = (0, i.useCallback)(
                                (e, t) => {
                                    if (!h.current) return 0;
                                    const n = h.current.getBoundingClientRect(),
                                        a = y.current.maximum,
                                        r = n.width / a,
                                        u = e - n.left,
                                        s = Math.floor(r > 0 ? u / r : u);
                                    if (s > a) return a;
                                    if (s <= 0) return 0;
                                    if (E > 1) {
                                        let e = s - (s % E);
                                        const n = s - e;
                                        return (
                                            n > 0 && ((t && s > y.current.currentValue) || n > 0.5 * E) && (e += E),
                                            e
                                        );
                                    }
                                    return s;
                                },
                                [E],
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
                        ((0, u.gd)(s.n.ARROW_UP, $),
                            (0, u.gd)(s.n.ARROW_DOWN, z),
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
                                        r = n.sliderMaximum,
                                        u = n.sliderMinimum;
                                    (O(t), (0, c.u)(a, t, r, u), (F.current.move = !1));
                                },
                                [P, d, O],
                            ),
                            Z = (0, i.useCallback)(() => {
                                ((F.current.over = !0), L(!0), (0, o.G)('highlight'));
                            }, []),
                            U = (0, i.useCallback)(() => {
                                ((F.current.over = !1), L(!1));
                            }, []),
                            V = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        r = t.sliderMinimum,
                                        u = I(e.deltaY > 0);
                                    (O(u), (0, c.u)(n, u, a, r));
                                },
                                [I, O],
                            );
                        return l().createElement(
                            'div',
                            { ref: h, onMouseEnter: Z, onMouseLeave: U, onWheel: V, className: f },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: r()(C, A) },
                                        l().createElement(B, { parentId: e, type: 'minus', isEnabled: W, onClick: z }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: r()(C, D) },
                                        l().createElement(B, { parentId: e, type: 'plus', isEnabled: H, onClick: $ }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: j, onMouseDown: Y, className: v },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: w,
                                    availableMaximum: a,
                                    picker: l().createElement(g, { parentId: e, isActive: N, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => b });
                var a = n(9480),
                    r = n(6179),
                    u = n.n(r),
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
                        const b = o !== s.cJ.None,
                            E = (0, r.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            h = (0, r.useMemo)(() => {
                                let n = '';
                                b && (n = (o === s.cJ.Large || o === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    r = R.images.gui.maps.icons.specialization.$dyn(a);
                                return r && { backgroundImage: `url(${r})` };
                            }, [e, t, o, b]),
                            g = (0, r.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!h) return null;
                        const f = i()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${o}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            v = i()(_.icon, b && _[`icon__${o}`]),
                            C = b ? '' : _.specializationWrapper,
                            A = u().createElement(
                                'div',
                                { key: e, className: f },
                                u().createElement('div', { className: _.glow }),
                                u().createElement('div', { className: v, style: h }),
                            );
                        return u().createElement(
                            c.t,
                            { args: g },
                            d && n
                                ? u().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: E,
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
                    mediaSize: r = s.cJ.None,
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
                                          mediaSize: r,
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
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u);
                const o = 'Storage_base_53',
                    i = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = s()(o, e && i),
                            a = s()(c, 0 === t && _);
                        return r().createElement(
                            'div',
                            { className: n },
                            r().createElement('div', { className: l }),
                            r().createElement('div', { className: a }, t),
                        );
                    };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7613),
                    s = n(9056),
                    o = n(6179),
                    i = n.n(o),
                    l = n(1922);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = ({
                        modelPath: e,
                        isDetailed: t = !1,
                        trackChanges: n = !1,
                        isShortened: a = !1,
                        isGoldShellLimit: o = !1,
                    }) => {
                        const _ = (0, l.GS)(),
                            d = (0, s.m)(e, n),
                            m = d.installedCount,
                            p = d.maxCount,
                            b = m === p,
                            E = R.strings.tank_setup.shells,
                            h = b ? E.ammunitionFull() : E.ammunitionIncomplete(),
                            g = r()(c.base, !b && c.base__incomplete),
                            f = t ? '' : r()(c.occupancy, !b && c.occupancy__incomplete, c[`occupancy__${_}`]);
                        return i().createElement(
                            'div',
                            { className: g },
                            !a && i().createElement('div', { className: c.tip }, h),
                            !o &&
                                i().createElement(u.ZP, {
                                    className: f,
                                    text: R.strings.tank_setup.shells.counter(),
                                    format: { binding: { value: m, maximum: p } },
                                }),
                        );
                    };
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => r, u: () => u });
                var a = n(7727);
                const r = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    u = (e, t, n, r) => {
                        t > n ||
                            t < r ||
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
                    g9: () => r,
                    k4: () => l,
                    mH: () => u,
                    pi: () => m,
                    qZ: () => c,
                    zn: () => a,
                });
                const a = 'optDevices',
                    r = 'shells',
                    u = 'consumables',
                    s = 'battleBoosters',
                    o = 'battleAbilities',
                    i = 'apply',
                    l = 'applyVehicle',
                    c = 'applyType',
                    _ = 'equipCoinInfo',
                    d = 'simple',
                    m = 'modernized';
            },
            5026: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                };
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
            5287: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
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
            3393: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < r && (r = a));
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
                        r,
                        [u, s, o] = n,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < u.length; i++)
                        ((r = u[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(8043));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
