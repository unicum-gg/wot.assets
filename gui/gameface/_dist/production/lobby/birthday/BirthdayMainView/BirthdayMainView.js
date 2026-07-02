(() => {
    var __webpack_modules__ = {
            3779: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(9887),
                    s = u.n(r),
                    i = u(3377),
                    o = u(6179),
                    l = u.n(o),
                    c = u(5026);
                const m = [
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                Object.keys(s());
                const _ = {
                        XL: { mt: c.Z.mt__XL, mr: c.Z.mr__XL, mb: c.Z.mb__XL, ml: c.Z.ml__XL },
                        LG: { mt: c.Z.mt__LG, mr: c.Z.mr__LG, mb: c.Z.mb__LG, ml: c.Z.ml__LG },
                        MDp: { mt: c.Z.mt__MDp, mr: c.Z.mr__MDp, mb: c.Z.mb__MDp, ml: c.Z.ml__MDp },
                        MD: { mt: c.Z.mt__MD, mr: c.Z.mr__MD, mb: c.Z.mb__MD, ml: c.Z.ml__MD },
                        SMp: { mt: c.Z.mt__SMp, mr: c.Z.mr__SMp, mb: c.Z.mb__SMp, ml: c.Z.ml__SMp },
                        SM: { mt: c.Z.mt__SM, mr: c.Z.mr__SM, mb: c.Z.mb__SM, ml: c.Z.ml__SM },
                        XS: { mt: c.Z.mt__XS, mr: c.Z.mr__XS, mb: c.Z.mb__XS, ml: c.Z.ml__XS },
                    },
                    E = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    g = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    p = (0, i.ZP)((e) => {
                        let t = e.className,
                            u = e.width,
                            n = e.height,
                            r = e.m,
                            s = e.mt,
                            i = void 0 === s ? r : s,
                            p = e.mr,
                            A = void 0 === p ? r : p,
                            h = e.mb,
                            b = void 0 === h ? r : h,
                            f = e.ml,
                            F = void 0 === f ? r : f,
                            C = e.column,
                            D = e.row,
                            v = e.flexDirection,
                            B = void 0 === v ? (C ? 'column' : D && 'row') || void 0 : v,
                            w = e.flexStart,
                            S = e.center,
                            y = e.flexEnd,
                            x = e.spaceBetween,
                            T = e.spaceAround,
                            N = e.justifyContent,
                            P =
                                void 0 === N
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (y && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (T && 'space-around') ||
                                      void 0
                                    : N,
                            L = e.alignItems,
                            R = void 0 === L ? (w ? 'flex-start' : S && 'center') || (y && 'flex-end') || void 0 : L,
                            M = e.alignSelf,
                            k = e.wrap,
                            I = e.flexWrap,
                            O = void 0 === I ? (k ? 'wrap' : void 0) : I,
                            H = e.grow,
                            $ = e.shrink,
                            W = e.flex,
                            G = void 0 === W ? (H || $ ? `${H ? 1 : 0} ${$ ? 1 : 0} auto` : void 0) : W,
                            z = e.style,
                            U = e.children,
                            Z = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, m);
                        const q = (0, o.useMemo)(() => {
                                const e = { mt: i, mr: A, mb: b, ml: F },
                                    t = ((e) =>
                                        E.reduce((t, u) => {
                                            const n = e[u];
                                            return n && 'number' != typeof n ? t.concat(_[!0 === n ? 'MD' : n][u]) : t;
                                        }, []))(e),
                                    a = ((e) =>
                                        E.reduce((t, u) => {
                                            const n = e[u];
                                            return ('number' == typeof n && (t[g[u]] = n + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, z, a, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: G,
                                        alignSelf: M,
                                        display: B || R ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: O,
                                        justifyContent: P,
                                        alignItems: R,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, n, i, A, b, F, z, G, M, B, O, P, R]),
                            j = q.computedStyle,
                            Q = q.computedClassNames;
                        return l().createElement('div', d({ className: a()(c.Z.base, ...Q, t), style: j }, Z), U);
                    });
            },
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    s = u(6179),
                    i = u.n(s),
                    o = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: m,
                    soundHover: d,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: p,
                    onMouseUp: A,
                    onMouseLeave: h,
                    onClick: b,
                }) => {
                    const f = (0, s.useRef)(null),
                        F = (0, s.useState)(u),
                        C = F[0],
                        D = F[1],
                        v = (0, s.useState)(!1),
                        B = v[0],
                        w = v[1],
                        S = (0, s.useState)(!1),
                        y = S[0],
                        x = S[1],
                        T = (0, s.useCallback)(() => {
                            c || (f.current && (f.current.focus(), D(!0)));
                        }, [c]),
                        N = (0, s.useCallback)(
                            (e) => {
                                C && null !== f.current && !f.current.contains(e.target) && D(!1);
                            },
                            [C],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (b && b(e));
                            },
                            [c, b],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), E && E(e), x(!0));
                            },
                            [c, d, E],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                c || (A && A(e), w(!1));
                            },
                            [c, A],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), p && p(e), u && T(), w(!0));
                            },
                            [c, _, p, T, u],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e), w(!1));
                            },
                            [c, h],
                        ),
                        H = a()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: C,
                                [o.Z.base__highlightActive]: B,
                                [o.Z.base__firstHover]: y,
                            },
                            m,
                        ),
                        $ = a()(o.Z.state, o.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, s.useEffect)(() => {
                            D(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: f,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: M,
                                onMouseUp: k,
                                onMouseDown: I,
                                onMouseLeave: O,
                                onClick: P,
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
                                { className: $ },
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
                const m = (0, s.memo)(c);
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
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(a || (a = {})));
            },
            126: (e, t, u) => {
                'use strict';
                function n(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const a = n % u,
                            r = (a % t.columns) * e.width,
                            s = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: s };
                    };
                }
                u.d(t, { q: () => n });
            },
            2372: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => s });
                var n = u(6179),
                    a = u.n(n),
                    r = u(4179);
                class s extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? r.B3.GOLD : r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(3649),
                    o = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: r = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : a().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  a().createElement(
                                      'div',
                                      { className: s()(o.Z.base, u), key: `${t}-${l}` },
                                      (0, i.Uw)(t, r, e).map((e, t) =>
                                          a().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => m });
                var n = u(3138),
                    a = u(6179),
                    r = u(1043),
                    s = u(5262);
                const i = n.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, r.j)),
                    m = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6536),
                    s = u(3495),
                    i = u(1043),
                    o = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(s.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        m = u[1],
                        d = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            m(Object.assign({ width: u, height: n }, (0, o.T)(u, n, i.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    a = u(7382),
                    r = u(3495);
                const s = ['children'],
                    i = (e) => {
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
                        const i = (0, n.useContext)(r.Y),
                            o = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            m = i.small,
                            d = i.extraSmall,
                            _ = i.extraLargeWidth,
                            E = i.largeWidth,
                            g = i.mediumWidth,
                            p = i.smallWidth,
                            A = i.extraSmallWidth,
                            h = i.extraLargeHeight,
                            b = i.largeHeight,
                            f = i.mediumHeight,
                            F = i.smallHeight,
                            C = i.extraSmallHeight,
                            D = { extraLarge: h, large: b, medium: f, small: F, extraSmall: C };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && o) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && m) return t;
                            if (u.extraSmall && d) return t;
                        } else {
                            if (u.extraLargeWidth && _) return (0, a.H)(t, u, D);
                            if (u.largeWidth && E) return (0, a.H)(t, u, D);
                            if (u.mediumWidth && g) return (0, a.H)(t, u, D);
                            if (u.smallWidth && p) return (0, a.H)(t, u, D);
                            if (u.extraSmallWidth && A) return (0, a.H)(t, u, D);
                            if (!(
                                u.extraLargeWidth ||
                                u.largeWidth ||
                                u.mediumWidth ||
                                u.smallWidth ||
                                u.extraSmallWidth
                            )) {
                                if (u.extraLargeHeight && h) return t;
                                if (u.largeHeight && b) return t;
                                if (u.mediumHeight && f) return t;
                                if (u.smallHeight && F) return t;
                                if (u.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                ((i.defaultProps = {
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
                }),
                    (0, n.memo)(i));
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
                (u.d(t, { YN: () => a.Y, ZN: () => n.Z }), u(6010));
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
                (u.d(t, { T: () => a }),
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
            5739: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(3415),
                    o = u(2862),
                    l = u(729),
                    c = u(1609);
                const m = ({
                    name: e,
                    image: t,
                    isPeriodic: u = !1,
                    size: n = o.h2.Big,
                    special: r,
                    value: m,
                    valueType: d,
                    style: _,
                    className: E,
                    classNames: g,
                    tooltipArgs: p,
                    periodicIconTooltipArgs: A,
                }) => {
                    const h = (0, l.L_)(r),
                        b = (0, l.i2)(r),
                        f = (0, l.m9)(m, d);
                    return s().createElement(
                        'div',
                        { className: a()(c.Z.base, c.Z[`base__${n}`], E), style: _ },
                        s().createElement(
                            i.l,
                            { tooltipArgs: p, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: a()(c.Z.image, null == g ? void 0 : g.image) },
                                    h &&
                                        s().createElement('div', {
                                            className: a()(c.Z.highlight, null == g ? void 0 : g.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${h}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        s().createElement('div', {
                                            className: a()(c.Z.icon, null == g ? void 0 : g.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    b &&
                                        s().createElement('div', {
                                            className: a()(c.Z.overlay, null == g ? void 0 : g.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${b}_overlay)`,
                                            },
                                        }),
                                ),
                                f &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: a()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                d === o.$h.MULTI && c.Z.info__multi,
                                                null == g ? void 0 : g.info,
                                            ),
                                        },
                                        f,
                                    ),
                            ),
                        ),
                        u &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: A },
                                s().createElement('div', {
                                    className: a()(c.Z.timer, null == g ? void 0 : g.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, t, u) => {
                'use strict';
                let n, a, r, s, i, o, l, c, m;
                (u.d(t, { $h: () => s, A2: () => o, E4: () => n, h2: () => r, kK: () => i, sh: () => l, ye: () => m }),
                    (function (e) {
                        ((e.Items = 'items'),
                            (e.Equipment = 'equipment'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.Goodies = 'goodies'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Tokens = 'tokens'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.CrewBooks = 'crewBooks'),
                            (e.Customizations = 'customizations'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Currency = 'currency'),
                            (e.TankmenXp = 'tankmenXP'),
                            (e.TankmenXpFactor = 'tankmenXPFactor'),
                            (e.FreeXpFactor = 'freeXPFactor'),
                            (e.BattleToken = 'battleToken'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.FreeXp = 'freeXP'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattlePassSelectToken = 'battlePassSelectToken'),
                            (e.SelectableBonus = 'selectableBonus'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (e.NewYearFillers = 'ny22Fillers'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearToyFragments = 'ny22ToyFragments'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.CollectionItem = 'collectionItem'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.CosmicLootboxSilver = 'lootBoxToken'),
                            (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                            (e.Branch = 'branch'),
                            (e.VehicleSelect = 'vehicleSelect'),
                            (e.StyleProgress = 'styleProgress'),
                            (e.ParagonsUnlocks = 'paragonsUnlocks'),
                            (e.LootBoxToken = 'lootBoxToken'),
                            (e.PostStamp = 'giftsystem_5_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'),
                            (e.GoldenTicket = 'goldenticket'),
                            (e.LbStyleProgress = 'lbStyleProgress'),
                            (e.RewardsSlots = 'rewardsSlots'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(o || (o = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(c || (c = {})),
                    (function (e) {
                        e.ProgressionStyle = 'progressionStyle';
                    })(m || (m = {})));
            },
            729: (e, t, u) => {
                'use strict';
                u.d(t, { L_: () => A, i2: () => h, m9: () => b, p3: () => d, pI: () => p, ry: () => g });
                var n = u(2372),
                    a = u(6179),
                    r = u.n(a),
                    s = u(2862);
                const i = [
                        s.E4.Items,
                        s.E4.Equipment,
                        s.E4.Xp,
                        s.E4.XpFactor,
                        s.E4.Blueprints,
                        s.E4.BlueprintsAny,
                        s.E4.Goodies,
                        s.E4.Berths,
                        s.E4.Slots,
                        s.E4.Tokens,
                        s.E4.CrewSkins,
                        s.E4.CrewBooks,
                        s.E4.Customizations,
                        s.E4.CreditsFactor,
                        s.E4.TankmenXp,
                        s.E4.TankmenXpFactor,
                        s.E4.FreeXpFactor,
                        s.E4.BattleToken,
                        s.E4.PremiumUniversal,
                        s.E4.NaturalCover,
                        s.E4.BpCoin,
                        s.E4.BattlePassSelectToken,
                        s.E4.BattlaPassFinalAchievement,
                        s.E4.BattleBadge,
                        s.E4.BonusX5,
                        s.E4.CrewBonusX3,
                        s.E4.NewYearFillers,
                        s.E4.NewYearInvoice,
                        s.E4.EpicSelectToken,
                        s.E4.Comp7TokenWeeklyReward,
                        s.E4.Comp7TokenCouponReward,
                        s.E4.BattleBoosterGift,
                        s.E4.CosmicLootboxCommon,
                        s.E4.CosmicLootboxSilver,
                        s.E4.SelectableBonus,
                        s.E4.PostStamp,
                        s.E4.PremiumPlusUniversal,
                        s.E4.GoldenTicket,
                        s.E4.RewardsSlots,
                    ],
                    o = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints],
                    c = [s.E4.PremiumPlus, s.E4.Premium];
                let m;
                !(function (e) {
                    ((e.s16 = '16'),
                        (e.s32 = '32'),
                        (e.s48 = '48'),
                        (e.s66 = '66'),
                        (e.s80 = '80'),
                        (e.s116 = '116'),
                        (e.s296 = '296'),
                        (e.s360 = '360'),
                        (e.s400 = '400'),
                        (e.s600 = '600'));
                })(m || (m = {}));
                const d = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    E = ['engraving', 'background'],
                    g = (e, t = s.h2.Small) => {
                        const u = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            i = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case s.h2.S600x450:
                                        return 'c_600x450';
                                    case s.h2.S400x300:
                                        return 'c_400x300';
                                    case s.h2.S296x222:
                                        return 'c_296x222';
                                    case s.h2.S232x174:
                                        return 'c_232x174';
                                    case s.h2.Big:
                                        return 'c_80x80';
                                    case s.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case s.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case s.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const n = _[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(E[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case s.h2.S600x450:
                                            return 'c_600x450';
                                        case s.h2.S400x300:
                                            return 'c_400x300';
                                        case s.h2.S296x222:
                                            return 'c_296x222';
                                        case s.h2.S232x174:
                                            return 'c_232x174';
                                        case s.h2.S180x135:
                                            return 'big';
                                        case s.h2.Big:
                                        case s.h2.S80x80:
                                            return 'c_80x80';
                                        case s.h2.Small:
                                        case s.h2.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case s.h2.Mini:
                                            return m.s32;
                                        case s.h2.Small:
                                        case s.h2.S48x48:
                                            return m.s48;
                                        case s.h2.S80x80:
                                        case s.h2.Big:
                                            return m.s80;
                                        case s.h2.S128x100:
                                            return m.s116;
                                        case s.h2.S180x135:
                                        case s.h2.S232x174:
                                        case s.h2.S296x222:
                                            return m.s296;
                                        case s.h2.S400x300:
                                            return m.s400;
                                        case s.h2.S600x450:
                                            return m.s600;
                                    }
                                })(t)}`;
                            case s.E4.StyleProgress:
                            case s.E4.LbStyleProgress:
                                return f(r, t, s.ye.ProgressionStyle);
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    p = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    A = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    h = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                                return s.sh.BATTLE_BOOSTER;
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.sh.BATTLE_BOOSTER_REPLACE;
                            case s.kK.BUILT_IN_EQUIPMENT:
                                return s.sh.BUILT_IN_EQUIPMENT;
                            case s.kK.EQUIPMENT_PLUS:
                                return s.sh.EQUIPMENT_PLUS;
                            case s.kK.EQUIPMENT_TROPHY_BASIC:
                                return s.sh.EQUIPMENT_TROPHY_BASIC;
                            case s.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return s.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    b = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case s.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return r().createElement(n.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    f = (e, t, u) => {
                        const n = R.images.gui.maps.icons.quests.bonuses.$dyn(t),
                            a = n.$dyn(e);
                        return String(null != a ? a : n.$dyn(u));
                    };
            },
            2773: (e, t, u) => {
                'use strict';
                u.d(t, { $Q: () => b });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7515),
                    s = u(1856),
                    i = u(3815),
                    o = u(560),
                    l = u(7727),
                    c = u(6179),
                    m = u.n(c),
                    d = u(6358),
                    _ = u(372);
                const E = 'disable',
                    g = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    A = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    b = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = p, onDrag: n = A }) => {
                        const b = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            F = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            v = e.stepTimeout || 100,
                            B = (0, c.useState)(g),
                            w = B[0],
                            S = B[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    (S(e),
                                        D.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current }));
                                },
                                [n],
                            ),
                            x = () => {
                                const t = C.current,
                                    u = D.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    o = (0, r.u)(0, 1, s / (a - n)),
                                    l = (t.offsetWidth - h(t, i)) * o;
                                ((u.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (f.current && F.current && C.current && D.current) {
                                            if (0 === e)
                                                return (f.current.classList.add(E), void F.current.classList.remove(E));
                                            if (
                                                ((t = C.current),
                                                (u = D.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (f.current.classList.remove(E), void F.current.classList.add(E));
                                            var t, u;
                                            (f.current.classList.remove(E), F.current.classList.remove(E));
                                        }
                                    })(l));
                            },
                            T = (0, i.z)(() => {
                                ((() => {
                                    const t = D.current,
                                        u = C.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const r = Math.min(1, n / a);
                                    ((t.style.width = `${h(u, r)}px`),
                                        (t.style.display = 'flex'),
                                        b.current &&
                                            (1 === r
                                                ? b.current.classList.add(_.Z.base__nonActive)
                                                : b.current.classList.remove(_.Z.base__nonActive)));
                                })(),
                                    x());
                            });
                        ((0, c.useEffect)(() => (0, s.v)(T)),
                            (0, c.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            x();
                                        };
                                        let u = A;
                                        const n = () => {
                                            (u(), (u = (0, s.v)(T)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', T),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', T),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const t = (t) => {
                                        var u;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = C.current,
                                            s = D.current;
                                        if (!a || !r || !s) return;
                                        const i = t.screenX - w.offset - r.getBoundingClientRect().x,
                                            o = (i / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), y(g));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, w.offset, w.pending, n, y]));
                        const N = (0, o.B)((t) => e.applyStepTo(t), v, [e]),
                            P = N[0],
                            L = N[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const R = (e) => {
                            e.target.classList.contains(E) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: a()(_.Z.base, t.base), ref: b, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: a()(_.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), P(d.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: f,
                                onMouseEnter: R,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: a()(_.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = D.current;
                                        n &&
                                            0 === t.button &&
                                            ((0, l.G)('play'),
                                            t.target === n
                                                ? y({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = D.current,
                                                          a = e.contentRef.current;
                                                      if (!n || !a) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? d.Nm.Prev : d.Nm.Next));
                                    },
                                    ref: C,
                                    onMouseEnter: R,
                                },
                                m().createElement('div', { ref: D, className: a()(_.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: a()(_.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: a()(_.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), P(d.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: F,
                                onMouseEnter: R,
                            }),
                        );
                    });
            },
            2840: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(2773),
                    o = u(7950),
                    l = u(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: m,
                    scrollClassName: d,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: a()(l.Z.base, e.base) });
                        }, [n]),
                        p = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: a()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: a()(l.Z.defaultScrollArea, c) },
                            s().createElement(o.Area, { className: d, api: p, classNames: m }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            7950: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        Area: () => _,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var n = u(6483),
                    a = u.n(n),
                    r = u(1856),
                    s = u(6179),
                    i = u.n(s),
                    o = u(2773),
                    l = u(2840),
                    c = u(4682),
                    m = u(8579),
                    d = u(6358);
                const _ = ({ api: e, className: t, classNames: u, children: n, style: o }) => (
                    (0, s.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: a()(c.Z.base, t), style: o },
                        i().createElement(
                            'div',
                            {
                                className: a()(c.Z.wrapper, null == u ? void 0 : u.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: a()(c.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                ((_.Bar = o.$Q), (_.Default = l.K), (_.SeniorityAwards = m.Tm));
            },
            8579: (e, t, u) => {
                'use strict';
                u.d(t, { Tm: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(1856),
                    s = u(6179),
                    i = u.n(s),
                    o = (u(2773), u(2840), u(4682));
                u(6358);
                const l = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: a()(o.Z.base, t) },
                        i().createElement(
                            'div',
                            { className: a()(o.Z.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                            i().createElement(
                                'div',
                                { className: a()(o.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            },
            6358: (e, t, u) => {
                'use strict';
                u.d(t, { Nm: () => n.Nm, T5: () => a, he: () => n.he });
                var n = u(7308);
                const a = (0, n.EO)({
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
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, u) => {
                'use strict';
                u.d(t, { $Q: () => f });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7515),
                    s = u(1856),
                    i = u(3815),
                    o = u(560),
                    l = u(7727),
                    c = u(6179),
                    m = u.n(c),
                    d = u(7701),
                    _ = u(9168);
                const E = 'disable',
                    g = () => {},
                    p = { pending: !1, offset: 0 },
                    A = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    b = (e, t) => Math.max(20, e.offsetHeight * t),
                    f = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = A, onDrag: n = g }) => {
                        const f = (0, c.useRef)(null),
                            F = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            v = (0, c.useRef)(null),
                            B = e.stepTimeout || 100,
                            w = (0, c.useState)(p),
                            S = w[0],
                            y = w[1],
                            x = (0, c.useCallback)(
                                (e) => {
                                    (y(e),
                                        v.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [n],
                            ),
                            T = (0, i.z)(() => {
                                const t = v.current,
                                    u = D.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const r = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${b(u, r)}px`),
                                    t.classList.add(_.Z.thumb),
                                    f.current &&
                                        (1 === r
                                            ? f.current.classList.add(_.Z.base__nonActive)
                                            : f.current.classList.remove(_.Z.base__nonActive)),
                                    r
                                );
                            }),
                            N = (0, i.z)(() => {
                                const t = D.current,
                                    u = v.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    o = (0, r.u)(0, 1, s / (a - n)),
                                    l = (t.offsetHeight - b(t, i)) * o;
                                ((u.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (F.current && C.current && D.current && v.current) {
                                            if (0 === e)
                                                return (F.current.classList.add(E), void C.current.classList.remove(E));
                                            if (
                                                ((t = D.current),
                                                (u = v.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (F.current.classList.remove(E), void C.current.classList.add(E));
                                            var t, u;
                                            (F.current.classList.remove(E), C.current.classList.remove(E));
                                        }
                                    })(l));
                            }),
                            P = (0, i.z)(() => {
                                h(e, () => {
                                    (T(), N());
                                });
                            });
                        ((0, c.useEffect)(() => (0, s.v)(P)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        N();
                                    });
                                };
                                let u = g;
                                const n = () => {
                                    (u(), (u = (0, s.v)(P)));
                                };
                                return (
                                    e.events.on('recalculateContent', P),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', P),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!S.pending) return;
                                const t = (t) => {
                                        h(e, (u) => {
                                            const a = D.current,
                                                r = v.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = t.screenY - S.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), e.handleIsThumbDragging(!1), x(p));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, S.offset, S.pending, n, x]));
                        const L = (0, o.B)((t) => e.applyStepTo(t), B, [e]),
                            R = L[0],
                            M = L[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', M, !0),
                                () => document.removeEventListener('mouseup', M, !0)
                            ),
                            [M],
                        );
                        const k = (e) => {
                            e.target.classList.contains(E) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: a()(_.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: a()(_.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), R(d.Nm.Next));
                                },
                                ref: F,
                                onMouseEnter: k,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: a()(_.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = v.current;
                                        var a;
                                        n &&
                                            0 === t.button &&
                                            ((0, l.G)('play'),
                                            t.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  x({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y }))
                                                : ((a =
                                                      t.screenY > n.getBoundingClientRect().y ? d.Nm.Prev : d.Nm.Next),
                                                  v.current &&
                                                      h(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + n * a);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: D,
                                    onMouseEnter: k,
                                },
                                m().createElement('div', { ref: v, className: t.thumb }),
                                m().createElement('div', { className: a()(_.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: a()(_.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), R(d.Nm.Prev));
                                },
                                onMouseUp: M,
                                ref: C,
                                onMouseEnter: k,
                            }),
                        );
                    });
            },
            1158: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(6225),
                    o = u(9605),
                    l = u(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: m,
                    scrollClassNames: d,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: a()(l.Z.base, e.base) });
                        }, [n]),
                        p = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: a()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: a()(l.Z.area, c) },
                            s().createElement(o.Area, { className: m, classNames: d, api: p }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            9605: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { Area: () => d, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var n = u(6483),
                    a = u.n(n),
                    r = u(1856),
                    s = u(6179),
                    i = u.n(s),
                    o = u(6225),
                    l = u(1158),
                    c = u(7701),
                    m = u(5636);
                const d = ({ className: e, classNames: t, children: u, api: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(n.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: a()(m.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: a()(m.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            u,
                        ),
                    )
                );
                d.Default = l.K;
            },
            7701: (e, t, u) => {
                'use strict';
                u.d(t, { Nm: () => n.Nm, c4: () => a });
                var n = u(7308);
                const a = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, t, u) => {
                'use strict';
                u.d(t, { EO: () => E, Nm: () => d, he: () => _ });
                var n = u(7515),
                    a = u(1856),
                    r = u(3138),
                    s = u(4532),
                    i = u(9653),
                    o = u(3815),
                    l = u(4489),
                    c = u(6179),
                    m = u(7030);
                let d;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(d || (d = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    E = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: d,
                        getWrapperSize: E,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const p = (e, u) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return (0, n.u)(r, s, u);
                        };
                        return (n = {}) => {
                            const A = n.settings,
                                h = void 0 === A ? _ : A,
                                b = (0, c.useRef)(null),
                                f = (0, c.useRef)(null),
                                F = (0, i.q)(),
                                C = (0, l.f)(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, m.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = b.current;
                                        t && (u(t, e), F.trigger('change', e), g && C());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                v = D[0],
                                B = D[1],
                                w = (0, c.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = v.scrollPosition.get(),
                                            r = (null != (n = v.scrollPosition.goal) ? n : 0) - a;
                                        return p(e, t * u + r + a);
                                    },
                                    [v.scrollPosition],
                                ),
                                S = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = b.current;
                                        n &&
                                            B.start({
                                                scrollPosition: p(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: h.animationConfig,
                                                from: { scrollPosition: p(n, v.scrollPosition.get()) },
                                            });
                                    },
                                    [B, h.animationConfig, v.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        const t = b.current,
                                            u = f.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return E(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, h.step),
                                            a = w(t, e, n);
                                        S(a);
                                    },
                                    [S, w, h.step],
                                ),
                                x = (0, c.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && y(d(e)),
                                            b.current && F.trigger('mouseWheel', e, v.scrollPosition, t(b.current)));
                                    },
                                    [v.scrollPosition, y, F],
                                ),
                                T = (0, s.M)(
                                    () =>
                                        (0, a.v)(() => {
                                            const e = b.current;
                                            e &&
                                                (S(p(e, v.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [S, v.scrollPosition.goal],
                                ),
                                N = (0, o.z)(() => {
                                    const e = b.current;
                                    if (!e) return;
                                    const t = p(e, v.scrollPosition.goal);
                                    (t !== v.scrollPosition.goal && S(t, { immediate: !0 }),
                                        F.trigger('recalculateContent'));
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', T),
                                    () => {
                                        window.removeEventListener('resize', T);
                                    }
                                ),
                                [T],
                            );
                            const P = (0, c.useCallback)((e) => F.trigger('isThumbDraggingChanged', e), [F]);
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (f.current ? E(f.current) : void 0),
                                    getContainerSize: () => (b.current ? e(b.current) : void 0),
                                    getBounds: () =>
                                        b.current
                                            ? t(b.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: h.step.clampedArrowStepTimeout,
                                    clampPosition: p,
                                    handleMouseWheel: x,
                                    applyScroll: S,
                                    applyStepTo: y,
                                    contentRef: b,
                                    wrapperRef: f,
                                    scrollPosition: B,
                                    animationScroll: v,
                                    recalculateContent: N,
                                    handleIsThumbDragging: P,
                                    events: { on: F.on, off: F.off },
                                }),
                                [v.scrollPosition, S, y, P, F.off, F.on, N, x, B, h.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => a });
                var n = u(7950);
                const a = { Vertical: u(9605), Horizontal: n };
            },
            8089: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => m });
                var n = u(6179),
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
                class m extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick));
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
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            m = e.classNames,
                            d = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            E = e.onMouseDown,
                            g = e.onMouseUp,
                            p =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(e, l)),
                            A = s()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${r}`], null == m ? void 0 : m.base),
                            h = s()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${r}`], null == m ? void 0 : m.icon),
                            b = s()(o.Z.glow, null == m ? void 0 : m.glow),
                            f = s()(o.Z.caption, o.Z[`caption__${i}`], null == m ? void 0 : m.caption),
                            F = s()(o.Z.goto, null == m ? void 0 : m.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(g),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                p,
                            ),
                            'info' !== i && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: h }, a().createElement('div', { className: b })),
                            a().createElement('div', { className: f }, t),
                            n && a().createElement('div', { className: F }, n),
                        );
                    }
                }
                m.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7613: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => D });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3779),
                    s = u(280),
                    i = u(3532),
                    o = u.n(i),
                    l = u(9887),
                    c = u.n(l),
                    m = u(3377),
                    d = u(6179),
                    _ = u.n(d),
                    E = u(3393);
                const g = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
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
                Object.keys(c());
                const A = Object.keys(o()),
                    h = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    b = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    f = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    F =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': h,
                            'heading-H36': h,
                            'heading-H28': b,
                            'heading-H24': b,
                            'heading-H24R': b,
                            'heading-H22': b,
                            'heading-H20R': b,
                            'heading-H18': b,
                            'heading-H15': f,
                            'heading-H14': f,
                            'paragraph-P24': b,
                            'paragraph-P18': b,
                            'paragraph-P16': b,
                            'paragraph-P14': f,
                            'paragraph-P12': f,
                            'paragraph-P10': f,
                        }),
                    C =
                        (Object.keys(F),
                        (e) =>
                            e
                                ? ((e) => A.includes(e))(e)
                                    ? { colorClassName: E.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    D = (0, m.ZP)((e) => {
                        let t = e.text,
                            u = e.variant,
                            n = e.className,
                            i = e.color,
                            o = e.m,
                            l = e.mt,
                            c = void 0 === l ? o : l,
                            m = e.mr,
                            A = void 0 === m ? o : m,
                            h = e.mb,
                            b = void 0 === h ? o : h,
                            f = e.ml,
                            D = void 0 === f ? o : f,
                            v = e.style,
                            B = e.format,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, g);
                        const S = (0, d.useMemo)(() => {
                                const e = C(i),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, v, n), colorClassName: t };
                            }, [v, i]),
                            y = S.computedStyle,
                            x = S.colorClassName;
                        return _().createElement(
                            r.ZP,
                            p(
                                {
                                    className: a()(E.Z.base, u && E.Z[u], x, n),
                                    style: y,
                                    mt: !0 === c ? F[u || 'paragraph-P16'].mt : c,
                                    mr: !0 === A ? F[u || 'paragraph-P16'].mr : A,
                                    mb: !0 === b ? F[u || 'paragraph-P16'].mb : b,
                                    ml: !0 === D ? F[u || 'paragraph-P16'].ml : D,
                                },
                                w,
                            ),
                            void 0 !== B ? _().createElement(s.z, p({}, B, { text: t })) : t,
                        );
                    });
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
                var n = u(6179),
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
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
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
            3415: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(7078),
                    s = u(6373),
                    i = u(2056);
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
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(s.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? a().createElement(i.u, o({}, t, { contentId: l || m }), n)
                        : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
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
                            m = e.alert,
                            d = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, s);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, u, l, c, d]);
                        return r().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(4179),
                    r = u(6179);
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
                            m = e.onMouseDown,
                            d = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            A = e.decoratorId,
                            h = void 0 === A ? 0 : A,
                            b = e.isEnabled,
                            f = void 0 === b || b,
                            F = e.targetId,
                            C = void 0 === F ? 0 : F,
                            D = e.onShow,
                            v = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => C || (0, n.F)().resId, [C]),
                            y = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(u, h, { isMouseEvent: !0, on: !0, arguments: i(a) }, S),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [u, h, a, S, D]),
                            x = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(u, h, { on: !1 }, S),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [u, h, S, v]),
                            T = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', T, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && x();
                            }, [f, x]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            f
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((N = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                          l && l(e),
                                                          N && N(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (x(), null == c || c(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === p && x(), null == d || d(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === p && x(), null == m || m(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : t
                        );
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
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
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
            122: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e, t) => {
                    let u;
                    const n = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        ('function' == typeof u && u(), clearTimeout(n));
                    };
                };
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => s });
                var n = u(3138);
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = r, context: s = 'model' } = {}) {
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
                            a = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const r = 'string' == typeof a ? `${s}.${a}` : s,
                                o = n.O.view.addModelObserver(r, t, !0);
                            return (i.set(o, u), e && u(l(a)), o);
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
                            for (
                                var e,
                                    u = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return a(e, t);
                                                    var u = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? a(e, t)
                                                              : void 0
                                                    );
                                                }
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
                                    })(i.keys());
                                !(e = u()).done;
                            )
                                o(e.value, t);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => o });
                var n = u(4598),
                    a = u(9174),
                    r = u(6179),
                    s = u.n(r),
                    i = u(8246);
                const o = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: m }) {
                            const d = (0, r.useRef)([]),
                                _ = (u, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => d.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : m(e),
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
                                                    const r = null != t ? t : m(e),
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
                                                    const n = m(t);
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
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(o),
                                p = g[0],
                                A = g[1],
                                h = (0, r.useState)(() => _(o, l, m)),
                                b = h[0],
                                f = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? f(_(p, l, m)) : (E.current = !0);
                                }, [m, p, l]),
                                (0, r.useEffect)(() => {
                                    A(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (b.externalModel.dispose(), d.current.forEach((e) => e()));
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
            7044: (e, t, u) => {
                'use strict';
                (u.d(t, { f8: () => o, oG: () => n, s_: () => a, yR: () => r }), u(3649), u(728), u(4179));
                const n = 60,
                    a = 1e3,
                    r = 60,
                    s = 60 * r,
                    i = 24 * s;
                function o(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / i);
                    t -= u * i;
                    const n = Math.trunc(t / s);
                    t -= n * s;
                    const a = Math.trunc(t / r);
                    return ((t -= a * r), { days: u, hours: n, minutes: a, seconds: t });
                }
                Date.now();
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t), u.d(t, { mouse: () => i, onResize: () => r }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
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
                                            i = s[t]((e) => u([e, 'outside']));
                                        function o(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
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
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    }));
                var n = u(527);
                function a(e = 'px') {
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
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
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
                u.d(t, { O: () => a });
                var n = u(5959);
                const a = { view: u(7641), client: n };
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isClientAccessible: () => F,
                        isEventHandled: () => D,
                        isFocused: () => f,
                        pxToRem: () => A,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => y,
                    }));
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    s = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.isClientAccessible();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    S = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => r });
                const n = ['args'],
                    a = (e, t) => {
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
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                function a() {
                    return !1;
                }
                (u.d(t, { ZT: () => n, jv: () => a }), console.log);
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id)),
                        { caller: u, stack: t, resId: n }
                    );
                };
            },
            3377: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => c });
                var n = u(5415),
                    a = u(6179),
                    r = u.n(a);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    i = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    o = [n.cJ.ExtraLarge, n.cJ.Large, n.cJ.Medium, n.cJ.Small, n.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (i(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in u) return u;
                                const r = o.indexOf(t),
                                    i = (-1 !== r ? s.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = i ? e[i] : void 0;
                                return ((u[a] = void 0 !== l ? l : e[a]), u);
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, t) => s.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = a),
                                u
                            );
                        }, {}),
                    c = (e, t = l) => {
                        const u = (
                            (e, t = l) =>
                            (u) => {
                                const s = (0, n.GS)().mediaSize,
                                    i = (0, a.useMemo)(() => t(u, s), [u, s]);
                                return r().createElement(e, i);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => i(e) && void 0 !== t[e])
                                ? r().createElement(u, t)
                                : r().createElement(e, t),
                        );
                    };
            },
            2344: (e, t, u) => {
                'use strict';
                u.d(t, { D9: () => r, au: () => s });
                var n = u(2790),
                    a = u(3469);
                (u(2133), u(579), u(5360), u(9056));
                const r = n.Z,
                    s = a.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => a });
                var n = u(6179);
                const a = (e, t = []) => {
                    const u = (0, n.useRef)(),
                        a = (0, n.useCallback)((...t) => {
                            (u.current && u.current(), (u.current = e(...t)));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                u.current && u.current();
                            },
                            [a],
                        ),
                        a
                    );
                };
            },
            3469: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => s });
                var n = u(7044),
                    a = u(6179);
                const r = () => {},
                    s = (e = 0, t, u = 0, s = r) => {
                        const i = (0, a.useState)(e),
                            o = i[0],
                            l = i[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const a = Date.now(),
                                        r = t || (e > 2 * n.yR ? n.yR : 1),
                                        i = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - a) / n.s_);
                                            null !== u && t <= u ? (l(u), s && s(), clearInterval(i)) : l(t);
                                        }, r * n.s_);
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                                l(0);
                            }, [e, t, u, s]),
                            o
                        );
                    };
            },
            2133: (e, t, u) => {
                'use strict';
                u(6179);
            },
            9653: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => r });
                var n = u(6179);
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const r = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        r = (e, u) => {
                            t(e).delete(u);
                        },
                        s = (e, ...u) => {
                            for (
                                var n,
                                    r = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return a(e, t);
                                                    var u = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? a(e, t)
                                                              : void 0
                                                    );
                                                }
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
                                    })(t(e).values());
                                !(n = r()).done;
                            )
                                (0, n.value)(...u);
                        };
                    return (0, n.useMemo)(() => ({ on: u, off: r, trigger: s }), []);
                };
            },
            3815: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => r });
                var n = u(6179);
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
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var n = u(6179),
                    a = u(7739),
                    r = u(1043);
                let s, i, o;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
                        r = ((e) => {
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
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5360: (e, t, u) => {
                'use strict';
                u(6536);
                var n = u(4179);
                let a;
                (u(6179),
                    n.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(a || (a = {})));
            },
            9056: (e, t, u) => {
                'use strict';
                var n = u(4179);
                (u(6179), n.Sw.instance);
            },
            2790: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
            },
            560: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => a });
                var n = u(6179);
                function a(e, t, u = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, n.useCallback)((u) => {
                            ((a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, s),
                        r,
                    ];
                }
            },
            9630: (e, t, u) => {
                'use strict';
                u.d(t, { a: () => r, t: () => s });
                var n = u(1856),
                    a = u(6179);
                function r(e, t) {
                    (0, a.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        t,
                    );
                }
                function s(e, t) {
                    (0, a.useEffect)(() => {
                        let t = () => {};
                        const u = () => {
                            (t(), (t = (0, n.v)(e)));
                        };
                        return (
                            window.addEventListener('resize', u),
                            () => {
                                (t(), window.removeEventListener('resize', u));
                            }
                        );
                    }, t);
                }
            },
            579: (e, t, u) => {
                'use strict';
                (u(3138), u(6179));
            },
            4489: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => r });
                var n = u(5139),
                    a = u(6179);
                function r(e, t, u) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(u, e), t);
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
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
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
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
            5175: (e, t, u) => {
                'use strict';
                u.d(t, { c: () => r });
                var n = u(9480);
                const a = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? n.UI(e, (e) => ('object' == typeof e ? a(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? a(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? a(t) : t]),
                                    )
                            : e,
                    r = (e) => a(e);
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                u.d(t, { UI: () => n });
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
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
                let n;
                function a(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                (u.d(t, { BN: () => r, Uw: () => d, uF: () => a, v2: () => n, z4: () => s }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(n || (n = {})));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    o = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    l = (e, t, u = n.left) => e.split(t).reduce(u === n.left ? i : o, []),
                    c = (() => {
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
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = n.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return m.includes(u)
                                          ? c(e)
                                          : ((e, t = n.left) => {
                                                let u = [];
                                                const a =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    r = s(e);
                                                return (
                                                    l(r, /( )/, t).forEach((e) => (u = u.concat(l(e, a, n.left)))),
                                                    u
                                                );
                                            })(e, t);
                                  })(e, t),
                        );
            },
            5139: (e, t, u) => {
                'use strict';
                function n(e, t, u, n) {
                    let a,
                        r = !1,
                        s = 0;
                    function i() {
                        a && clearTimeout(a);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - s;
                        function m() {
                            ((s = Date.now()), u.apply(l, o));
                        }
                        r ||
                            (n && !a && m(),
                            i(),
                            void 0 === n && c > e
                                ? m()
                                : !0 !== t &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : m,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (o.cancel = function () {
                            (i(), (r = !0));
                        }),
                        o
                    );
                }
                u.d(t, { Z: () => n });
            },
            728: (e, t, u) => {
                'use strict';
                let n;
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
                })(n || (n = {}));
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => c, Gr: () => m, Z5: () => s, B0: () => o, ry: () => b });
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
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let o;
                var l;
                (((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    g = u(3138);
                const p = ['args'];
                function A(e, t, u, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            A(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
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
                    F = () => f(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var D = u(7572);
                const v = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: D.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => f(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => f(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            f(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                m = i.width,
                                d = i.height,
                                _ = {
                                    x: g.O.view.pxToRem(l) + s.x,
                                    y: g.O.view.pxToRem(c) + s.y,
                                    width: g.O.view.pxToRem(m),
                                    height: g.O.view.pxToRem(d),
                                };
                            f(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: h(_),
                                on: !0,
                                args: r,
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
                            C(e, F);
                        },
                        handleViewEvent: f,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
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
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = B;
            },
            7260: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(280),
                    s = u(8852);
                const i = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    o = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, n.memo)(({ text: e, binding: t, classMix: u }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            m = (0, n.useMemo)(() => t || {}, [t]);
                        let d = i.exec(e),
                            _ = e,
                            E = 0;
                        for (; d;) {
                            const u = d[0],
                                n = o.exec(u),
                                g = l.exec(u),
                                p = d[1];
                            if (n && g) {
                                const e = n[0],
                                    i = e + E++ + e;
                                ((_ = _.replace(u, `%(${i})`)),
                                    (m[i] = s.Z[e]
                                        ? a().createElement(
                                              'span',
                                              { className: s.Z[e] },
                                              a().createElement(r.z, { text: p, binding: t }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: c(e) },
                                              a().createElement(r.z, { text: p, binding: t }),
                                          )));
                            }
                            d = i.exec(e);
                        }
                        return a().createElement(r.z, { text: _, classMix: u, binding: m });
                    });
            },
            9063: (e, t, u) => {
                'use strict';
                var n = u(7739),
                    a = u(6179),
                    r = u.n(a),
                    s = u(6483),
                    i = u.n(s),
                    o = u(926),
                    l = u.n(o),
                    c = u(5415);
                const m = ['children', 'className'];
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
                const _ = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    p = (e) => {
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
                            })(e, m);
                        const a = (0, c.GS)(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return r().createElement('div', d({ className: i()(u, _[s], E[o], g[l]) }, n), t);
                    },
                    A = ['children'],
                    h = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, A);
                        return r().createElement(n.ZN, null, r().createElement(p, u, t));
                    };
                var b = u(493),
                    f = u.n(b),
                    F = u(8089),
                    C = u(7515),
                    D = u(1856),
                    v = u(4598);
                const B = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                    'onError',
                ];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const S = (0, a.forwardRef)(function (e, t) {
                        let u = e.src,
                            n = e.className,
                            s = e.autoplay,
                            i = void 0 !== s && s,
                            o = e.style,
                            l = e.loop,
                            c = void 0 !== l && l,
                            m = e.isPrebufferKeyframes,
                            d = e.keyframesNameConfig,
                            _ = e.onClick,
                            E = e.onError,
                            g = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, B);
                        const p = t,
                            A = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(
                                () =>
                                    (0, D.v)(() => {
                                        const e = A.current;
                                        if (!p || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, p],
                            ),
                            (0, a.useEffect)(() => {
                                if (p && A.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: v.ZT,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const u = (function (u) {
                                                    let n = 0;
                                                    return [
                                                        function u() {
                                                            ((() => {
                                                                if (A.current) {
                                                                    const u = A.current,
                                                                        n = u.currentTime,
                                                                        a = u.duration;
                                                                    if (
                                                                        (t !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: a }),
                                                                            ),
                                                                            (t = n)),
                                                                        A.current.paused || !p || !m)
                                                                    )
                                                                        return;
                                                                    const r = A.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((t, u) => {
                                                                        n > r[u] - 0.02 &&
                                                                            n < r[u] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != d ? d : {},
                                                                                )[u];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${d ? n : `Point_${u}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(u)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = u[0],
                                                a = u[1];
                                            return (n(), a);
                                        };
                                    e.changeTimeLoop = t();
                                    const u = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const u = e.changeTimeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const u = e.changeKeyframeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            A.current && (A.current.currentTime = (0, C.u)(0, A.current.duration, e));
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = A.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (o(), s(0));
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = A.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        _ = (e) => {
                                            (s(e), i());
                                        },
                                        E = (e) => {
                                            (s(e), o());
                                        },
                                        g = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        h = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = A.current) || u.addEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = A.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        b = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = A.current) || u.removeEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = A.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (p.current = {
                                            on: h,
                                            off: b,
                                            play: i,
                                            pause: o,
                                            stop: l,
                                            cleanup: g,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: _,
                                            goToAndStop: E,
                                            setCurrentTime: s,
                                            domRef: A.current,
                                            onChangeTime: u,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (g(), (p.current = null));
                                        }
                                    );
                                }
                            }, [d, p, m]),
                            (0, a.useEffect)(() => {
                                A.current && i && A.current.play();
                            }, [i, c]),
                            (0, a.useEffect)(() => {
                                if (A.current)
                                    return () => {
                                        A.current && A.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                w({ src: u, className: n, style: o, loop: c, ref: A, onClick: _, onError: E }, g),
                            )
                        );
                    }),
                    y = (0, a.memo)(S);
                var x = u(122),
                    T = u(2344),
                    N = u(3138),
                    P = u(5521);
                u(4179);
                const L = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function M(e = P.n.NONE, t = L, u = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== P.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (N.O.view.isEventHandled()) return;
                                (N.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                function k({
                    key: e = P.n.ESCAPE,
                    callback: t = () => N.O.view.sendEvent.close(),
                    preventPropagation: u = !0,
                } = {}) {
                    return (M(e, t, u), t);
                }
                var I = u(7727),
                    O = u(3403),
                    H = u(9990),
                    $ = u(883),
                    W = u(4538),
                    G = u(2094),
                    z = u(7351),
                    U = u(3457),
                    Z = u(7613),
                    q = u(7075);
                const j = {
                        base: 'Tip_base_71',
                        base__exit: 'Tip_base__exit_30',
                        base__general_1: 'Tip_base__general_1_4d',
                        fadeInLeft: 'Tip_fadeInLeft_f7',
                        fadeOutLeft: 'Tip_fadeOutLeft_62',
                        base__mail_1: 'Tip_base__mail_1_77',
                        base__mail_2: 'Tip_base__mail_2_e0',
                        fadeInRight: 'Tip_fadeInRight_aa',
                        fadeOutRight: 'Tip_fadeOutRight_f4',
                        base__quests_1: 'Tip_base__quests_1_38',
                        base__quests_2: 'Tip_base__quests_2_10',
                        base__gold_wagon_1: 'Tip_base__gold_wagon_1_70',
                        base__gold_wagon_2: 'Tip_base__gold_wagon_2_d6',
                        base__ticket_exchange_1: 'Tip_base__ticket_exchange_1_fa',
                        base__ticket_exchange_2: 'Tip_base__ticket_exchange_2_66',
                        background: 'Tip_background_36',
                        tip: 'Tip_tip_33',
                        header: 'Tip_header_31',
                        description: 'Tip_description_08',
                        divider: 'Tip_divider_23',
                        footer: 'Tip_footer_30',
                        countWrapper: 'Tip_countWrapper_c8',
                        count: 'Tip_count_4d',
                        count__active: 'Tip_count__active_31',
                        button: 'Tip_button_33',
                    },
                    Q = R.strings.mt_birthday.tips,
                    X = (0, a.memo)(
                        ({
                            currentTipName: e,
                            isTipSwitchAnimation: t,
                            currentTipStep: u,
                            totalTipCount: n,
                            onClick: s,
                        }) => {
                            const o = Q.$dyn(e);
                            return (
                                (0, a.useEffect)(() => {
                                    const t = W.hy[e];
                                    t && (0, I.G)(t);
                                }, [e]),
                                r().createElement(
                                    'div',
                                    { className: i()(j.base, j[`base__${e}`], t && j.base__exit) },
                                    r().createElement('div', { className: j.background }),
                                    r().createElement(
                                        'div',
                                        { className: j.tip },
                                        r().createElement(Z.ZP, { className: j.header, text: o.$dyn('title') }),
                                        r().createElement(
                                            'div',
                                            { className: j.description },
                                            r().createElement(q.R, { text: o.$dyn('description') }),
                                        ),
                                        r().createElement('div', { className: j.divider }),
                                        r().createElement(
                                            'div',
                                            { className: j.footer },
                                            r().createElement(
                                                'div',
                                                { className: j.countWrapper },
                                                Array.from({ length: n }).map((e, t) =>
                                                    r().createElement('div', {
                                                        key: `tipCount_${t + 1}`,
                                                        className: i()(j.count, u >= t && j.count__active),
                                                    }),
                                                ),
                                            ),
                                            r().createElement(
                                                U.u5,
                                                {
                                                    type: U.L$.primary,
                                                    size: U.qE.medium,
                                                    onClick: s,
                                                    mixClass: j.button,
                                                },
                                                r().createElement(Z.ZP, { text: o.$dyn('button') }),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var V = u(3215);
                const Y = (0, V.q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), lootboxEntryPoint: e.object('lootboxEntryPoint') };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e, cleanup: t }) => {
                            const u = window.subViews.addChildChangedCallback(H.T.about);
                            return (
                                t(() => {
                                    window.subViews.removeChildChangedCallback(u);
                                }),
                                {
                                    onClose: e.createCallbackNoArgs('onClose'),
                                    onInfoPage: e.createCallbackNoArgs('onInfoPageClick'),
                                    onOpenGoldenCarriage: e.createCallbackNoArgs('onOpenGoldenCarriage'),
                                    onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                                    onTipsCompleted: e.createCallback((e) => ({ tabId: e }), 'onTipsCompleted'),
                                    onOpenStorage: e.createCallbackNoArgs('lootboxEntryPoint.onOpenStorage'),
                                }
                            );
                        },
                    ),
                    K = Y[0],
                    J = Y[1];
                var ee = u(3946);
                let te, ue, ne, ae;
                (!(function (e) {
                    ((e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded'));
                })(te || (te = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed'));
                    })(ue || (ue = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(ne || (ne = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(ae || (ae = {})),
                    te.Initialization,
                    ue.Initialization);
                const re = (e) => e > 0,
                    se = (e) => !re(e);
                const ie = (0, V.q)()(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                u = (0, ee.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: u }) {
                                        return t === te.Initialization
                                            ? ae.Initialization
                                            : t === te.ForceLoading
                                              ? ae.ForceLoading
                                              : t === te.Loading
                                                ? ae.BrowserLoading
                                                : e === ue.Loaded && t === te.Loaded && u === ne.Loaded
                                                  ? ae.Loaded
                                                  : u === ne.Failed
                                                    ? ae.TextureFailed
                                                    : e === ue.Failed
                                                      ? ae.PageFailed
                                                      : ae.PageLoading;
                                    })(t.get()),
                                );
                            return { root: t, getState: u };
                        },
                        ({ externalModel: e }) => ({
                            blur: e.createCallbackNoArgs('unfocus'),
                            focus: e.createCallbackNoArgs('focus'),
                            createWebView: e.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    oe = ie[0],
                    le = ie[1],
                    ce = (e) => {
                        (0, a.useEffect)(e, []);
                    };
                const me = 'BrowserView_base_6b',
                    de = ({ message: e, className: t, classNames: u }) =>
                        r().createElement(
                            'div',
                            { className: i()('Spinner_base_87', t) },
                            e &&
                                r().createElement(
                                    'div',
                                    { className: i()('Spinner_caption_cf', null == u ? void 0 : u.caption) },
                                    e,
                                ),
                            r().createElement('div', {
                                className: i()('Spinner_gear_c4', null == u ? void 0 : u.gear),
                            }),
                            r().createElement('div', {
                                className: i()('Spinner_logo_bf', null == u ? void 0 : u.logo),
                            }),
                        ),
                    _e = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: u }) =>
                        r().createElement(
                            'div',
                            { className: 'Error_base_46' },
                            r().createElement('div', { className: 'Error_alertIcon_04' }),
                            r().createElement('div', { className: 'Error_errorCaption_f2' }, u),
                            r().createElement(U.u5, { size: U.qE.medium, mixClass: 'Error_button_cd', onClick: t }, e),
                        );
                _e.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const Ee = ({
                    message: e,
                    isError: t,
                    errorMessage: u,
                    errorBtnLabel: n,
                    errorBtnClickHandler: s,
                    overlayAlpha: i,
                }) => {
                    const o = r().createRef();
                    return (
                        (0, a.useEffect)(() => {
                            const e = o.current;
                            e && i && (e.style.opacity = i);
                        }, [o, i]),
                        r().createElement(
                            'div',
                            { className: 'Waiting_base_c5' },
                            r().createElement('div', { className: 'Waiting_blackOverlay_55', ref: o }),
                            t
                                ? r().createElement(_e, { errorBtnLabel: n, errorMessage: u, errorBtnClickHandler: s })
                                : r().createElement(de, { message: e }),
                        )
                    );
                };
                Ee.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const ge = 'DisplayBrowserState_error_4e',
                    pe = 'DisplayBrowserState_alertIcon_c4',
                    Ae = 'DisplayBrowserState_errorCaption_dd',
                    he = ({ waitingText: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: i()('DisplayBrowserState_base_e7', t) },
                            r().createElement(Ee, { errorBtnClickHandler: v.ZT, message: e }),
                        ),
                    be = () =>
                        r().createElement(
                            'div',
                            { className: ge },
                            r().createElement('div', { className: pe }),
                            r().createElement(
                                'div',
                                { className: Ae },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    fe = () =>
                        r().createElement(
                            'div',
                            { className: ge },
                            r().createElement('div', { className: pe }),
                            r().createElement(
                                'div',
                                { className: Ae },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: Ae },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function Fe(e) {
                    const t = (function (e) {
                            const t = (0, a.useRef)(!1);
                            return (
                                (e !== ae.Loaded && e !== ae.PageFailed && e !== ae.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        u = (function (e) {
                            const t = (0, a.useRef)(e);
                            return (
                                (function (e) {
                                    return e !== ae.BrowserLoading && e !== ae.PageLoading;
                                })(e) && (t.current = e),
                                t.current
                            );
                        })(e);
                    return t ? u : e;
                }
                const Ce = ({ viewState: e, waitingText: t, waitingClassName: u }) => {
                        switch (Fe(e)) {
                            case ae.BrowserLoading:
                            case ae.PageLoading:
                            case ae.ForceLoading:
                                return r().createElement(he, { waitingText: t, className: u });
                            case ae.PageFailed:
                                return r().createElement(be, null);
                            case ae.TextureFailed:
                                return r().createElement(fe, null);
                            default:
                                return null;
                        }
                    },
                    De = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function ve(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function Be(e) {
                    const t = (0, a.useState)(ve(e.scale)),
                        u = t[0],
                        n = t[1],
                        r = (function (e) {
                            return De(e)
                                ? (function (e, t) {
                                      var u;
                                      if (se(e)) return void console.warn('Invalid id, should be greater than zero', e);
                                      const n = 0 === t.scale ? 1e-5 : null != (u = t.scale) ? u : 1;
                                      return N.O.view.getBrowserTexturePath(
                                          e,
                                          Math.max(t.width, 1),
                                          Math.max(t.height, 1),
                                          n,
                                      );
                                  })(e.id, e)
                                : void 0;
                        })(Object.assign({}, e, { scale: u })),
                        s = (0, a.useState)(r),
                        i = s[0],
                        o = s[1],
                        l = (0, a.useRef)(!1),
                        c = 'width' in e ? e.width : 0,
                        m = 'height' in e ? e.height : 0,
                        d = (function () {
                            const e = (0, a.useRef)(0);
                            var t;
                            return (
                                (t = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, a.useEffect)(() => t, []),
                                (0, a.useMemo)(
                                    () => ({
                                        run: (t) => {
                                            (window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        (t(), (e.current = 0));
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
                        })();
                    return (
                        (0, a.useEffect)(() => {
                            const t = () => {
                                n(ve(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, a.useEffect)(() => {
                            if (void 0 === r || 0 === c || 0 === m || r === i) return;
                            const e = () => {
                                o(r);
                            };
                            if (!1 === l.current) return ((l.current = !0), void e());
                            const t = new Image(),
                                u = () => {
                                    d.run(e);
                                };
                            return (
                                t.addEventListener('load', u),
                                (t.src = r),
                                () => {
                                    (t.removeEventListener('load', u), (t.src = ''));
                                }
                            );
                        }, [r, i]),
                        i
                    );
                }
                const we = r().memo(function (e) {
                    const t = e.id,
                        u = e.className,
                        n = e.classNameTexture,
                        a = e.waitingClassName,
                        s = e.onMouseEnter,
                        o = e.onMouseLeave,
                        l = e.onMouseWheel,
                        c = e.onMouseMove,
                        m = e.onMouseDown,
                        d = e.onMouseUp,
                        _ = e.renderStateDisplay,
                        E = e.viewState,
                        g = e.statusCode,
                        p = e.waitingText,
                        A = e.scrollSpeed,
                        h = void 0 === A ? 20 : A,
                        b = Be(e);
                    return r().createElement(
                        'div',
                        { className: i()(me, u), onMouseEnter: s, onMouseLeave: o },
                        b &&
                            r().createElement('div', {
                                onWheel: l,
                                onMouseMove: c,
                                onMouseDown: m,
                                onMouseUp: d,
                                className: i()(me, 'BrowserView_texture_17', n),
                                'data-browser-id': t,
                                'data-browser-scroll-speed': h,
                                style: { backgroundImage: `url(${b})` },
                            }),
                        'function' == typeof _
                            ? _({ viewState: E, statusCode: g, waitingText: p, waitingClassName: a })
                            : r().createElement(Ce, {
                                  viewState: E,
                                  statusCode: g,
                                  waitingText: p,
                                  waitingClassName: a,
                              }),
                    );
                });
                var Se = u(4532);
                const ye = { type: 'measuring' };
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const Te = r().memo(function (e) {
                    const t = (function () {
                            const e = (0, a.useRef)(null),
                                t = (0, a.useState)(ye),
                                u = t[0],
                                n = t[1],
                                r = (0, Se.M)(
                                    () => (
                                        n(ye),
                                        (0, D.v)(() => {
                                            e.current
                                                ? n({
                                                      type: 'measured',
                                                      size: {
                                                          width: e.current.offsetWidth,
                                                          height: e.current.offsetHeight,
                                                      },
                                                  })
                                                : n({ type: 'none-ref' });
                                        })
                                    ),
                                    [],
                                );
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', r),
                                        r(),
                                        () => window.removeEventListener('resize', r)
                                    ),
                                    [r],
                                ),
                                [e, u, r]
                            );
                        })(),
                        u = t[0],
                        n = t[1];
                    return r().createElement(
                        'div',
                        { ref: u, className: me },
                        r().createElement(
                            we,
                            xe(
                                {},
                                e,
                                (function (e, t = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                                })(n),
                            ),
                        ),
                    );
                });
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Pe = (0, O.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            u = e.className,
                            n = e.waitingClassName,
                            s = e.isLazy,
                            i = void 0 === s || s,
                            o = e.displayContentWhenLoading,
                            l = void 0 === o || o,
                            c = e.renderStateDisplay,
                            m = e.onMouseEnter,
                            d = e.onMouseLeave,
                            _ = e.onMouseMove,
                            E = e.onMouseWheel,
                            g = e.onMouseDown,
                            p = e.onMouseUp,
                            A = le(),
                            h = A.model,
                            b = A.controls,
                            f = h.root.get(),
                            F = f.id,
                            C = f.httpStatusCode,
                            D = f.waitingMessage,
                            v = h.getState(),
                            B = l || v === ae.Loaded;
                        (ce(() => {
                            i && se(F) && b.createWebView();
                        }),
                            (0, a.useEffect)(() => {
                                re(F) && b.focus();
                            }, [F, b]),
                            ce(
                                () => (
                                    window.addEventListener('mouseleave', b.blur),
                                    window.addEventListener('mouseenter', b.focus),
                                    () => {
                                        (window.removeEventListener('mouseleave', b.blur),
                                            window.removeEventListener('mouseenter', b.focus));
                                    }
                                ),
                            ));
                        const w = (0, a.useMemo)(() => {
                            const e = {
                                onMouseEnter: m,
                                onMouseLeave: d,
                                onMouseMove: _,
                                onMouseWheel: E,
                                onMouseDown: g,
                                onMouseUp: p,
                            };
                            return B
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          (b.focus(), null == m || m(e));
                                      },
                                      onMouseLeave: (e) => {
                                          (b.blur(), null == d || d(e));
                                      },
                                  })
                                : e;
                        }, [B, b, g, m, d, _, p, E]);
                        if (se(F)) return null;
                        const S = De(e)
                                ? (function (e, t) {
                                      const u = {};
                                      return (
                                          ['width', 'height'].forEach((t) => {
                                              u[t] = e[t];
                                          }),
                                          u
                                      );
                                  })(e)
                                : {},
                            y = D.length > 0 ? D : t;
                        return e.isFullSize
                            ? r().createElement(
                                  Te,
                                  Ne({}, w, {
                                      id: F,
                                      className: u,
                                      waitingClassName: n,
                                      statusCode: C,
                                      viewState: v,
                                      waitingText: y,
                                      renderStateDisplay: c,
                                  }),
                              )
                            : r().createElement(
                                  we,
                                  Ne({}, w, S, {
                                      id: F,
                                      className: u,
                                      waitingClassName: n,
                                      statusCode: C,
                                      viewState: v,
                                      waitingText: y,
                                      renderStateDisplay: c,
                                  }),
                              );
                    }),
                    Le = ['options', 'mocks', 'mode'],
                    Re = (0, a.memo)(function (e) {
                        let t = e.options,
                            u = e.mocks,
                            n = e.mode,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Le);
                        return r().createElement(oe, { options: t, mocks: u, mode: n }, r().createElement(Pe, a));
                    });
                var Me = u(9417);
                const ke = R.strings.mt_birthday.about,
                    Ie = (0, a.memo)(
                        () => (
                            (0, a.useEffect)(() => {
                                (0, I.G)('mt_bday_2026_info_enter');
                            }, []),
                            r().createElement(
                                'div',
                                { className: 'AboutPage_base_9f' },
                                r().createElement(
                                    'div',
                                    { className: 'AboutPage_header_e3' },
                                    r().createElement(Me.h, { title: ke.header(), subTitle: ke.description() }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'AboutPage_infoContainer_83' },
                                    r().createElement(Re, { isFullSize: !0, options: { rootId: H.T.about } }),
                                ),
                            )
                        ),
                    ),
                    Oe = 'App_button_b1',
                    He = 'BirthdayIntro_arrowImage_e2';
                var $e = u(3649);
                const We = (0, a.memo)(({ title: e, description: t, image: u }) =>
                        r().createElement(
                            'div',
                            { className: 'TextBlock_base_3f' },
                            r().createElement('div', {
                                className: 'TextBlock_introImage_7c',
                                style: { backgroundImage: `url(${u})` },
                            }),
                            r().createElement(Z.ZP, { className: 'TextBlock_title_78', text: e }),
                            r().createElement(Z.ZP, { className: 'TextBlock_description_b4', text: (0, $e.z4)(t) }),
                        ),
                    ),
                    Ge = R.strings.mt_birthday.intro,
                    ze = (0, a.memo)(
                        ({ onShowIntro: e }) => (
                            k({ callback: e }),
                            r().createElement(
                                'div',
                                { className: 'BirthdayIntro_base_5b' },
                                r().createElement(
                                    'div',
                                    { className: 'BirthdayIntro_titleBlock_82' },
                                    r().createElement(Z.ZP, {
                                        text: Ge.header.title(),
                                        className: 'BirthdayIntro_title_b4',
                                    }),
                                    r().createElement(Z.ZP, {
                                        text: Ge.header.subtitle(),
                                        className: 'BirthdayIntro_subtitle_40',
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'BirthdayIntro_content_60' },
                                    r().createElement(
                                        'div',
                                        { className: 'BirthdayIntro_arrowsBlock_38' },
                                        r().createElement('div', { className: He }),
                                        r().createElement('div', { className: He }),
                                    ),
                                    W.OY.map((e) =>
                                        r().createElement(We, {
                                            key: e,
                                            title: Ge[W.Xg[e]].title(),
                                            description: Ge[W.Xg[e]].description(),
                                            image: 'R.images.mt_birthday.gui.maps.icons.intro.' + W.Xg[e],
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    U.u5,
                                    {
                                        type: U.L$.primary,
                                        size: U.qE.medium,
                                        onClick: e,
                                        mixClass: 'BirthdayIntro_button_fa',
                                    },
                                    r().createElement(Z.ZP, { text: Ge.buttons.accept() }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'BirthdayIntro_close_53' },
                                    r().createElement(F.A, {
                                        caption: Ge.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                    }),
                                ),
                            )
                        ),
                    ),
                    Ue = (0, a.memo)(
                        () => (
                            (0, a.useEffect)(() => {
                                (0, I.G)('mt_bday_2026_golden_wagon_enter');
                            }, []),
                            r().createElement(
                                'div',
                                { className: 'GoldWagonPage_base_96' },
                                r().createElement(Re, { isFullSize: !0, options: { rootId: H.T.gold_wagon } }),
                            )
                        ),
                    );
                var Ze = u(6373);
                const qe = 'NavItem_icon_9b',
                    je = 'NavItem_icon__hidden_21',
                    Qe = R.strings.mt_birthday.navigation,
                    Xe = (0, a.memo)(
                        ({ tabId: e, onClick: t, isSelected: u, hasNewItems: n = !1, disabled: s = !1 }) => {
                            const o = (0, a.useState)(!1),
                                l = o[0],
                                m = o[1],
                                d = (0, c.GS)().mediaSize >= c.cJ.Medium ? '_large' : '',
                                _ = `R.images.mt_birthday.gui.maps.icons.navigation.${H.T[e] + d}`,
                                E = u || l;
                            return r().createElement(
                                Ze.i,
                                {
                                    header: Qe.tooltips.navigationItem.header.$dyn(`c_${e}`),
                                    body: Qe.tooltips.navigationItem.body.$dyn(`c_${e}`),
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: i()(
                                            'NavItem_base_1c',
                                            l && 'NavItem_base__hovered_da',
                                            u && 'NavItem_base__selected_24',
                                            s && 'NavItem_base__disabled_d8',
                                        ),
                                        onMouseEnter: () => {
                                            (I.$.playHighlight(), s || m(!0));
                                        },
                                        onMouseLeave: () => {
                                            s || m(!1);
                                        },
                                        onClick: () => {
                                            s || (t(), I.$.playClick());
                                        },
                                    },
                                    r().createElement('div', {
                                        className: i()('NavItem_border_05', u && 'NavItem_border__visible_93'),
                                    }),
                                    r().createElement('div', {
                                        className: i()('NavItem_background_d4', u && 'NavItem_background__visible_5a'),
                                    }),
                                    n && r().createElement('div', { className: 'NavItem_bubble_6d' }),
                                    r().createElement(
                                        'div',
                                        { className: 'NavItem_iconWrapper_62' },
                                        r().createElement('div', {
                                            className: i()(qe, E && je),
                                            style: { backgroundImage: `url(${_})` },
                                        }),
                                        r().createElement('div', {
                                            className: i()(qe, !E && je),
                                            style: { backgroundImage: `url(${_ + '_active'})` },
                                        }),
                                        r().createElement('div', {
                                            className: i()('NavItem_glow_50', u && 'NavItem_glow__visible_d7'),
                                        }),
                                    ),
                                    r().createElement(Z.ZP, { text: Qe.$dyn(H.T[e]), className: 'NavItem_text_e7' }),
                                ),
                            );
                        },
                    ),
                    Ve = (0, a.memo)(
                        () => (
                            (0, a.useEffect)(() => {
                                (0, I.G)('mt_bday_2026_ticket_exchange_enter');
                            }, []),
                            r().createElement(
                                'div',
                                { className: 'TicketExchangePage_base_4a' },
                                r().createElement(Re, { isFullSize: !0, options: { rootId: H.T.ticket_exchange } }),
                            )
                        ),
                    ),
                    Ye = R.strings.mt_birthday,
                    Ke = (0, O.Pi)(() => {
                        var e;
                        viewEnv.clearInternalCacheAfterFinalize();
                        const t = J(),
                            u = t.controls,
                            n = t.model.root.get(),
                            s = n.currentTabId,
                            o = n.isTipEnabled,
                            l = n.isGeneralTipEnabled,
                            c = n.isIntroSeen,
                            m = n.isEnabledGoldWagonEntry,
                            d = n.isEnabledTicketExchangeEntry,
                            _ = (0, a.useState)(!c),
                            E = _[0],
                            g = _[1],
                            p = (0, a.useState)(0),
                            A = p[0],
                            h = p[1],
                            b = (0, a.useState)(!0),
                            f = b[0],
                            C = b[1],
                            D = (0, a.useState)(!1),
                            v = D[0],
                            B = D[1],
                            w = (0, a.useState)(!1),
                            S = w[0],
                            N = w[1],
                            P = (0, a.useState)(!1),
                            L = P[0],
                            M = P[1],
                            O = (0, a.useMemo)(() => (0, W.Zr)(l, o, s, A), [s, A, l, o]),
                            U = O[0],
                            Z = O[1],
                            q = (0, a.useState)(!1),
                            j = q[0],
                            Q = q[1],
                            V = (0, a.useState)(U),
                            Y = V[0],
                            K = V[1],
                            ee = (0, a.useState)(A),
                            te = ee[0],
                            ue = ee[1],
                            ne = (0, a.useState)(Z),
                            ae = ne[0],
                            re = ne[1],
                            se = null != (e = (0, T.D9)(U)) ? e : U,
                            ie = (0, a.useCallback)(() => {
                                if (((0, I.G)('mt_bday_2026_onboard_skip'), Z > A + 1)) return h((e) => e + 1);
                                l ? u.onTipsCompleted(null) : u.onTipsCompleted(s);
                            }, [u, s, l, A, Z]),
                            oe = (0, a.useCallback)(
                                (e) => {
                                    u.onTabChange(e);
                                },
                                [u],
                            ),
                            le = (0, a.useCallback)(() => {
                                f && N(!0);
                            }, [f]),
                            ce = (o || l) && (s === H.T.gold_wagon || s === H.T.ticket_exchange),
                            me = (0, a.useMemo)(
                                () =>
                                    i()(
                                        S && 'App_startAnimationActive_15',
                                        L && 'App_finishAnimationActive_82',
                                        v && 'App_sentAnimationActive_10',
                                    ),
                                [L, v, S],
                            );
                        ((0, a.useEffect)(() => {
                            if (S)
                                return (0, x.F)(() => {
                                    (B(!0), (0, I.G)('mt_bday_2026_post_send_animation'), N(!1));
                                }, 300);
                        }, [S]),
                            (0, a.useEffect)(() => {
                                if (L)
                                    return (
                                        B(!1),
                                        (0, I.G)('mt_bday_2026_post_send_animation_skip'),
                                        (0, x.F)(() => {
                                            M(!1);
                                        }, 300)
                                    );
                            }, [L]),
                            (0, a.useEffect)(() => {
                                h(0);
                            }, [o]),
                            (0, a.useEffect)(() => {
                                se !== U &&
                                    (Q(!0),
                                    (0, x.F)(
                                        () => {
                                            (Q(!1), K(U), ue(A), re(Z));
                                        },
                                        Y ? 300 : 0,
                                    ));
                            }, [Y, se, U, A, Z]));
                        const de = {
                            [H.T.mail]: {
                                hasNewItems: !1,
                                isVisible: !0,
                                component: r().createElement(z.z, {
                                    resId: R.views.mt_birthday.lobby.birthday.TankMailView('resId'),
                                    currentTipName: Y,
                                    handleGiftSent: le,
                                }),
                            },
                            [H.T.quests]: {
                                hasNewItems: !1,
                                isVisible: !0,
                                component: r().createElement(G.x, {
                                    resId: R.views.mt_birthday.lobby.birthday.QuestsGiverView('resId'),
                                    currentTipName: Y,
                                }),
                            },
                            [H.T.gold_wagon]: { hasNewItems: !1, isVisible: m, component: r().createElement(Ue, null) },
                            [H.T.ticket_exchange]: {
                                hasNewItems: !1,
                                isVisible: d,
                                component: r().createElement(Ve, null),
                            },
                            [H.T.about]: { hasNewItems: !1, isVisible: !0, component: r().createElement(Ie, null) },
                        };
                        return (
                            k({ callback: () => (v ? M(!0) : u.onClose()), preventPropagation: !1 }),
                            E
                                ? r().createElement(ze, {
                                      onShowIntro: () => {
                                          (I.$.playHighlight(), g((e) => !e));
                                      },
                                  })
                                : r().createElement(
                                      'div',
                                      { className: i()('App_base_e6', Y && 'App_base__tips_45') },
                                      Y &&
                                          r().createElement(
                                              r().Fragment,
                                              null,
                                              r().createElement(X, {
                                                  currentTipName: Y,
                                                  isTipSwitchAnimation: j,
                                                  currentTipStep: te,
                                                  totalTipCount: ae,
                                                  onClick: ie,
                                              }),
                                              ce && r().createElement('div', { className: 'App_tipBackground_41' }),
                                          ),
                                      r().createElement(
                                          'div',
                                          { className: i()(Oe, 'App_button__close_c4', me) },
                                          !Y &&
                                              r().createElement(F.A, {
                                                  caption: Ye.navigation.button.close(),
                                                  side: 'right',
                                                  type: 'close',
                                                  onClick: u.onClose,
                                              }),
                                      ),
                                      s === H.T.mail &&
                                          r().createElement(
                                              'div',
                                              { className: i()(Oe, 'App_button__animationControls_72', me) },
                                              r().createElement($.E, {
                                                  isActiveAnimation: f,
                                                  onToggle: () => {
                                                      C((e) => !e);
                                                  },
                                              }),
                                          ),
                                      r().createElement(
                                          'div',
                                          { className: i()('App_navigationContainer_57', me) },
                                          r().createElement(
                                              'div',
                                              { className: 'App_navigation_dc' },
                                              Object.keys(de)
                                                  .filter((e) => de[e].isVisible)
                                                  .map((e) => {
                                                      var t;
                                                      return r().createElement(Xe, {
                                                          key: e,
                                                          tabId: e,
                                                          isSelected: Number(s) === Number(e),
                                                          onClick: () => oe(e),
                                                          hasNewItems: null == (t = de[e]) ? void 0 : t.hasNewItems,
                                                      });
                                                  }),
                                          ),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: i()('App_content_fc', me) },
                                          de[s].component,
                                      ),
                                      v &&
                                          r().createElement(
                                              'div',
                                              { className: 'App_sentGiftVideo_2b' },
                                              r().createElement(y, {
                                                  autoplay: !0,
                                                  src: R.videos.mt_birthday.tankMail.sentGift(),
                                                  className: 'App_video_51',
                                                  onEnded: () => {
                                                      M(!0);
                                                  },
                                              }),
                                          ),
                                  )
                        );
                    });
                engine.whenReady.then(() => {
                    f().render(
                        r().createElement(K, null, r().createElement(h, null, r().createElement(Ke, null))),
                        document.getElementById('root'),
                    );
                });
            },
            8933: (e, t, u) => {
                'use strict';
                let n, a;
                (u(2862).E4.Vehicles,
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteSpanish = 'whiteSpanish'));
                    })(a || (a = {})));
            },
            2094: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => je });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(7727);
                const o = a().memo,
                    l = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    c = { mouseEnter: 'highlight', click: 'play' },
                    m = (e, { active: t, enableInteractiveActiveTab: u = !1 }) => !!u || e !== t,
                    d = o(function (e) {
                        const t = e.active,
                            u = e.tabs,
                            n = e.onClick,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            d = e.className,
                            _ = e.classNames,
                            E = e.sounds,
                            g = void 0 === E ? c : E,
                            p = (t) => () => {
                                m(t, e) && (g.click && (0, i.G)(g.click), null == n || n(t));
                            },
                            A = (t) => () => {
                                m(t, e) && (g.mouseEnter && (0, i.G)(g.mouseEnter), null == r || r(t));
                            },
                            h = (t) => () => {
                                m(t, e) && (g.mouseLeave && (0, i.G)(g.mouseLeave), null == o || o(t));
                            };
                        return a().createElement(
                            'div',
                            { className: s()(l.base, d) },
                            u.map(({ id: n, title: r, notification: i }, o) => {
                                var c;
                                return a().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            l.tab,
                                            n === t && s()(l.tab__active, null == _ ? void 0 : _.activeTab),
                                            !m(n, e) && l.tab__nonInteractive,
                                            null == _ ? void 0 : _.tab,
                                        ),
                                        key: n,
                                        onClick: p(n),
                                        onMouseEnter: A(n),
                                        onMouseLeave: h(n),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(u, o) &&
                                        a().createElement('div', {
                                            className: s()(l.divider, null == _ ? void 0 : _.divider),
                                        }),
                                    a().createElement(
                                        'div',
                                        { className: s()(l.state, null == _ ? void 0 : _.state) },
                                        a().createElement('div', {
                                            className: s()(l.highlight, null == _ ? void 0 : _.highlight),
                                        }),
                                        a().createElement('div', {
                                            className: s()(
                                                l.border,
                                                l.border__left,
                                                null == _ ? void 0 : _.border,
                                                null == _ ? void 0 : _.borderLeft,
                                            ),
                                        }),
                                        a().createElement('div', {
                                            className: s()(
                                                l.border,
                                                l.border__right,
                                                null == _ ? void 0 : _.border,
                                                null == _ ? void 0 : _.borderRight,
                                            ),
                                        }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: s()(l.title, null == _ ? void 0 : _.title) },
                                        r,
                                    ),
                                    void 0 !== i &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    l.notification,
                                                    l[`notification__${i.type}`],
                                                    l[`notification__${null != (c = i.size) ? c : 'medium'}`],
                                                    null == _ ? void 0 : _.notification,
                                                ),
                                            },
                                            'dot' !== i.type && i.value,
                                        ),
                                );
                            }),
                        );
                    });
                var _ = u(794),
                    E = u(7701),
                    g = u(7613),
                    p = u(122);
                const A = {
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
                };
                var h = u(5415),
                    b = u(9630),
                    f = u(3403),
                    F = u(7030),
                    C = u(7260);
                const D = {
                    base: 'App_base_2c',
                    fadeIn: 'App_fadeIn_c1',
                    button: 'App_button_6c',
                    contentWrapper: 'App_contentWrapper_e9',
                    base__general_1: 'App_base__general_1_34',
                    background: 'App_background_d7',
                    header: 'App_header_2a',
                    tabsWrapper: 'App_tabsWrapper_f4',
                    tab: 'App_tab_ff',
                    tabTitle: 'App_tabTitle_7f',
                    activeTab: 'App_activeTab_fe',
                    content: 'App_content_84',
                    person: 'App_person_50',
                    person__assignments: 'App_person__assignments_11',
                    person__challenge: 'App_person__challenge_43',
                    voice: 'App_voice_83',
                    personMessage: 'App_personMessage_09',
                    bulletinBoard: 'App_bulletinBoard_e6',
                    errorWrapper: 'App_errorWrapper_99',
                    info: 'App_info_28',
                    wrapperTimeLeft: 'App_wrapperTimeLeft_35',
                    wrapperTimeLeft__hide: 'App_wrapperTimeLeft__hide_ae',
                    slideAndFadeTime: 'App_slideAndFadeTime_1d',
                    wrapperTimeLeft__show: 'App_wrapperTimeLeft__show_6a',
                    slideAndShowTime: 'App_slideAndShowTime_6f',
                    wrapperCountQuests: 'App_wrapperCountQuests_66',
                    wrapperCountQuests__hide: 'App_wrapperCountQuests__hide_9a',
                    slideAndFade: 'App_slideAndFade_5d',
                    wrapperCountQuests__show: 'App_wrapperCountQuests__show_3f',
                    slideAndShow: 'App_slideAndShow_db',
                    timer: 'App_timer_2f',
                    counterQuests: 'App_counterQuests_bd',
                    countdown: 'App_countdown_11',
                    scrollWrapper: 'App_scrollWrapper_5a',
                    scrollWrapper__hide: 'App_scrollWrapper__hide_18',
                    hideQuests: 'App_hideQuests_d6',
                    topLip: 'App_topLip_dd',
                    base__hasTopLip: 'App_base__hasTopLip_d0',
                    bar: 'App_bar_66',
                    bar__hide: 'App_bar__hide_1e',
                    bottomButton: 'App_bottomButton_06',
                    questsList: 'App_questsList_97',
                    quest: 'App_quest_df',
                    showQuest: 'App_showQuest_25',
                    questOffAnimation: 'App_questOffAnimation_80',
                    fadeOut: 'App_fadeOut_7a',
                };
                var v = u(2056);
                const B = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    w = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    S = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    y = (e) =>
                        S
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = w.length - 1; u >= 0; u--) for (; e >= w[u];) ((t += B[u]), (e -= w[u]));
                                  return t;
                              })(e),
                    x = R.strings.mt_birthday.quests.rules,
                    T = R.images.gui.maps.icons,
                    N = (0, n.memo)(({ minLevel: e, maxLevel: t, battleTypes: u }) => {
                        const r = (0, n.useMemo)(() => u.slice(0, 3), [u]);
                        return a().createElement(
                            v.u,
                            {
                                contentId: R.views.mt_birthday.lobby.tooltips.DescriptionRulesTooltip('resId'),
                                args: { minLevel: e, maxLevel: t, battleTypes: u },
                                ignoreShowDelay: !0,
                            },
                            a().createElement(
                                'div',
                                { className: 'DescriptionRules_base_20' },
                                a().createElement(g.ZP, { className: 'DescriptionRules_modes_a6', text: x.modes() }),
                                r.map((e, t) =>
                                    a().createElement('div', {
                                        className: s()(
                                            'DescriptionRules_battleTypeIcon_8d',
                                            t === r.length - 1 && 'DescriptionRules_battleTypeIcon__last_4f',
                                        ),
                                        key: e,
                                        style: { backgroundImage: `url(${T.quests.prebattleConditions.$num(e)})` },
                                    }),
                                ),
                                u.length > 3 &&
                                    a().createElement(g.ZP, {
                                        className: 'DescriptionRules_ellipsis_83',
                                        text: x.ellipsis(),
                                    }),
                                a().createElement('div', { className: 'DescriptionRules_conditionSeparator_e9' }),
                                a().createElement(C.B, {
                                    text: x.vehicleLevel(),
                                    binding: { minLvl: y(e), maxLvl: y(t) },
                                    classMix: 'DescriptionRules_vehicleLevel_db',
                                }),
                            ),
                        );
                    });
                var P = u(7044),
                    L = u(2344);
                var M = u(3649);
                const k = R.strings.mt_birthday.countdown.timeLeft,
                    I = ({ hours: e, minutes: t }) =>
                        e > 0 || t === P.oG - 1
                            ? t === P.oG - 1
                                ? (0, M.uF)(k.hour(), { hours: e + 1 })
                                : (0, M.uF)(k.hours(), { hours: e, minutes: t + 1 })
                            : t > 0
                              ? (0, M.uF)(k.minutes(), { minutes: t + 1 })
                              : k.lessOneMin(),
                    O = (0, n.memo)(({ timeToUpdate: e, isCounter: t = !1 }) => {
                        const u = (0, L.au)(e);
                        return a().createElement(
                            'div',
                            { className: 'GiverCountdown_base_89' },
                            a().createElement('div', {
                                className: t ? 'GiverCountdown_iconCounter_70' : 'GiverCountdown_icon_7c',
                            }),
                            a().createElement(g.ZP, {
                                text: I((0, P.f8)(u)),
                                className: s()(
                                    'GiverCountdown_countdownText_54',
                                    t ? 'GiverCountdown_textFontCounter_72' : 'GiverCountdown_textFont_1a',
                                ),
                            }),
                        );
                    });
                var H = u(2862);
                let $;
                !(function (e) {
                    ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Disabled = 'disabled'), (e.Active = 'active'));
                })($ || ($ = {}));
                const W = {
                    [h.cJ.ExtraSmall]: { questDividerHeight: 50, questCardHeight: 120, questCardMarginBottom: 8 },
                    [h.cJ.Small]: { questDividerHeight: 50, questCardHeight: 120, questCardMarginBottom: 8 },
                    [h.cJ.Medium]: { questDividerHeight: 50, questCardHeight: 140, questCardMarginBottom: 10 },
                    [h.cJ.Large]: { questDividerHeight: 60, questCardHeight: 160, questCardMarginBottom: 16 },
                    [h.cJ.ExtraLarge]: { questDividerHeight: 60, questCardHeight: 200, questCardMarginBottom: 20 },
                };
                var G = u(5739);
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                const U = (0, n.memo)(({ data: e, size: t = H.h2.Small }) =>
                        a().createElement(
                            'div',
                            { className: 'RewardsList_base_ab' },
                            e.map((e, u) =>
                                a().createElement(
                                    'div',
                                    { key: u + e.name, className: 'RewardsList_reward_9f' },
                                    a().createElement(
                                        G.Q,
                                        z({ size: t, classNames: { info: 'RewardsList_info_8d' } }, e),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    Z = {
                        base: 'Quest_base_7c',
                        questCardWrapper: 'Quest_questCardWrapper_d0',
                        questCardWrapper__left: 'Quest_questCardWrapper__left_65',
                        increaseWidth: 'Quest_increaseWidth_bf',
                        gradientBg: 'Quest_gradientBg_2b',
                        questCardWrapper__right: 'Quest_questCardWrapper__right_68',
                        decreaseWidth: 'Quest_decreaseWidth_1f',
                        questCard: 'Quest_questCard_dd',
                        questCard__done: 'Quest_questCard__done_8b',
                        doneBg: 'Quest_doneBg_8d',
                        disabledBg: 'Quest_disabledBg_8c',
                        counterBlock: 'Quest_counterBlock_aa',
                        counterComplete: 'Quest_counterComplete_9d',
                        content: 'Quest_content_f0',
                        questCard__disableAllQuests: 'Quest_questCard__disableAllQuests_60',
                        questCard__hideAllContent: 'Quest_questCard__hideAllContent_49',
                        quests: 'Quest_quests_93',
                        rewards: 'Quest_rewards_f6',
                        separator: 'Quest_separator_ea',
                        lockedBlock: 'Quest_lockedBlock_77',
                        disabledBlock: 'Quest_disabledBlock_70',
                        lockedContent: 'Quest_lockedContent_65',
                        disabledContent: 'Quest_disabledContent_af',
                        iconDisabled: 'Quest_iconDisabled_9a',
                        lockedText: 'Quest_lockedText_5c',
                        disabledText: 'Quest_disabledText_e7',
                        disabledDescription: 'Quest_disabledDescription_c7',
                        fadeIn: 'Quest_fadeIn_d2',
                        fadeOut: 'Quest_fadeOut_c0',
                    },
                    q = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let j, Q;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(j || (j = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Q || (Q = {})));
                const X = ({ size: e = j.Default, classMix: t }) =>
                        a().createElement('div', { className: s()(q.background, q[`background__${e}`], t) }),
                    V = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Y = ({ size: e }) => {
                        const t = s()(V.base, V[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    K = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    J = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = s()(
                                    K.base,
                                    K[`base__${e}`],
                                    u && K.base__disabled,
                                    r && K.base__finished,
                                    i && K.base__withoutBounce,
                                ),
                                l = !u && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: t },
                                a().createElement('div', { className: K.pattern }),
                                a().createElement('div', { className: K.gradient }),
                                l && a().createElement(Y, { size: e }),
                            );
                        },
                    ),
                    ee = ({ size: e, value: t, lineRef: u, disabled: r, onComplete: s }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            a().createElement(J, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: u })
                        );
                    };
                let te, ue;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(te || (te = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(ue || (ue = {})));
                const ne = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                m = (0, n.useState)(ue.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === ue.In,
                                g = d === ue.End,
                                A = d === ue.Idle,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (A && !u) {
                                    const e = t;
                                    return (0, p.F)(() => {
                                        h(ue.In);
                                    }, e);
                                }
                            }, [h, u, A, t]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        const u = e + t;
                                        return (0, p.F)(() => {
                                            (o && o(), h(ue.End));
                                        }, u);
                                    }
                                }, [h, E, o, t, e]));
                            const b = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return g
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: F },
                                      a().createElement(
                                          'div',
                                          { style: A ? b : f, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(Y, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    ae = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(J, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    a().createElement(ne, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    re = (e) => (e ? { left: 0 } : { right: 0 }),
                    se = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    ie = (e) => ({ transitionDuration: `${e}ms` }),
                    oe = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const d = o < r,
                                _ = (0, n.useState)(te.Idle),
                                E = _[0],
                                g = _[1],
                                A = E === te.End,
                                h = E === te.Idle,
                                b = E === te.Grow,
                                f = E === te.Shrink,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        (g(e), c && c(e));
                                    },
                                    [c],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        (0, p.F)(() => {
                                            F(e);
                                        }, t),
                                    [F],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return h
                                        ? C(te.Grow, t)
                                        : b
                                          ? C(te.Shrink, e)
                                          : f
                                            ? C(te.End, e)
                                            : void (A && l && l());
                            }, [C, u, A, b, h, f, l, t, e]);
                            const D = (0, n.useMemo)(() => Object.assign({ width: '100%' }, ie(e), re(d)), [d, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, ie(e), re(d)), [d, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, se(d, r), ie(e)), [r, d, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, se(d, r), ie(e)),
                                    [r, d, o, e],
                                );
                            if (A) return null;
                            const S = s()(
                                'ProgressBarDeltaGrow_base_7e',
                                m,
                                d && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: h ? B : w, className: S },
                                a().createElement(
                                    'div',
                                    { style: f ? v : D, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(Y, { size: i }),
                                ),
                            );
                        },
                    ),
                    le = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, n.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === te.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(J, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? A : p,
                                }),
                                u >= 0 &&
                                    a().createElement(oe, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ce = ['onComplete', 'onEndAnimation'];
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const de = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, ce);
                        const s = (0, n.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== i && o(e), e && t && t(), u && u());
                            }, [i, t, u, r.to]);
                        switch (r.animationSettings.type) {
                            case Q.Simple:
                                return a().createElement(ae, me({}, r, { onEndAnimation: l, isComplete: i }));
                            case Q.Growing:
                                return a().createElement(le, me({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    _e = ['onEndAnimation'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ge = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, _e);
                    const r = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            ((r.current.from = void 0), t && t());
                        }, [t]),
                        i = 'number' == typeof r.current.from ? r.current.from : u.from;
                    return (
                        (r.current.from = i),
                        a().createElement(de, Ee({}, u, { onEndAnimation: s, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const Ae = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return a().createElement(ee, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return s.withStack
                                ? a().createElement(ge, c)
                                : a().createElement(de, pe({ key: `${r}-${t}` }, c));
                        },
                    ),
                    he = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    });
                var be = u(7515);
                const fe = (e, t, u) => ('number' == typeof u ? ((0, be.u)(0, t, u) / t) * 100 : e),
                    Fe = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    Ce = {
                        freezed: !1,
                        withStack: !1,
                        type: Q.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    De = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Fe,
                            size: u = j.Default,
                            animationSettings: r = Ce,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: l,
                            value: c,
                            deltaFrom: m,
                            lineRef: d,
                            onChangeAnimationState: _,
                            onEndAnimation: E,
                            onComplete: g,
                        }) => {
                            const p = ((e, t, u) =>
                                (0, n.useMemo)(() => {
                                    const n = ((0, be.u)(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: fe(n, t, u) };
                                }, [u, t, e]))(c, e, m);
                            return a().createElement(
                                'div',
                                { className: s()(q.base, q[`base__${u}`]), style: he(t) },
                                !o && a().createElement(X, { size: u, classMix: l }),
                                a().createElement(Ae, {
                                    size: u,
                                    lineRef: d,
                                    disabled: i,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: E,
                                    onChangeAnimationState: _,
                                    onComplete: g,
                                }),
                            );
                        },
                    );
                var ve = u(4179);
                const Be = {
                        base: 'QuestProgress_base_d5',
                        conditionSeparator: 'QuestProgress_conditionSeparator_98',
                        condition: 'QuestProgress_condition_70',
                        base__done: 'QuestProgress_base__done_14',
                        conditionText: 'QuestProgress_conditionText_fb',
                        progressTotal: 'QuestProgress_progressTotal_78',
                        conditionIcon: 'QuestProgress_conditionIcon_a7',
                        progressBar: 'QuestProgress_progressBar_5d',
                        progressBg: 'QuestProgress_progressBg_d1',
                    },
                    we = R.strings.mt_birthday.quests,
                    Se = (0, n.memo)(({ state: e, current: t, total: u, earned: r, iconKey: i }) => {
                        const o = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.gui.maps.icons.quests.battleCondition.c_90.${'icon_battle_condition_' + i + '_90x90'}')`,
                                }),
                                [i],
                            ),
                            l = ve.Z5.getRealFormat(t, ve.Gr.WO_ZERO_DIGITS),
                            c = '/ ' + ve.Z5.getRealFormat(u, ve.Gr.WO_ZERO_DIGITS);
                        return a().createElement(
                            'div',
                            { className: s()(Be.base, Be[`base__${e}`]) },
                            a().createElement(
                                'div',
                                { className: Be.condition },
                                a().createElement('div', { className: Be.conditionIcon, style: o }),
                                a().createElement(g.ZP, {
                                    text: we.progress(),
                                    className: Be.conditionText,
                                    format: {
                                        binding: {
                                            current: l,
                                            total: a().createElement(g.ZP, { className: Be.progressTotal, text: c }),
                                        },
                                    },
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: Be.progressBar },
                                a().createElement(De, {
                                    size: j.Small,
                                    maxValue: u,
                                    value: t,
                                    disabled: e === $.Locked,
                                    deltaFrom: t - r,
                                }),
                                a().createElement('div', { className: Be.progressBg }),
                            ),
                        );
                    }),
                    ye = (0, n.memo)(({ quest: e }) => {
                        const t = e.bonusCondition.items[0];
                        return a().createElement(
                            'div',
                            { className: s()('QuestCondition_base_90') },
                            a().createElement(
                                'div',
                                { className: s()('QuestCondition_quest_0e') },
                                a().createElement(g.ZP, {
                                    className: 'QuestCondition_description_9b',
                                    text: e.description,
                                }),
                                a().createElement(
                                    'div',
                                    { className: 'QuestCondition_progressContainer_f0' },
                                    a().createElement(
                                        'div',
                                        { className: 'QuestCondition_questProgress_68' },
                                        a().createElement(Se, {
                                            state: e.status,
                                            current: t.current,
                                            total: t.total,
                                            iconKey: t.iconKey,
                                            earned: t.earned,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xe = R.strings.mt_birthday.quests,
                    Te = (0, n.memo)(({ quest: e, timeNewQuest: t, hasCounterComplete: u }) => {
                        const r = (0, h.GS)().mediaSize >= h.cJ.Large ? H.h2.Big : H.h2.Small,
                            i = e.status,
                            o = (0, n.useState)(''),
                            l = o[0],
                            c = o[1],
                            m = (0, n.useState)(!1),
                            d = m[0],
                            _ = m[1],
                            E = (0, n.useState)(!1),
                            A = E[0],
                            b = E[1],
                            f = i === $.Locked || l === $.Locked,
                            F = i === $.Disabled || l === $.Disabled,
                            D = i === $.Done,
                            v = i === $.Active,
                            B = u && (v || D);
                        return (
                            (0, n.useEffect)(() => {
                                if (l)
                                    return (
                                        l !== i &&
                                            (_(l === $.Disabled && i === $.Locked),
                                            b(l === $.Locked && i === $.Active)),
                                        (0, p.F)(() => {
                                            (c(i), _(!1), b(!1));
                                        }, 600)
                                    );
                                c(i);
                            }, [l, i]),
                            a().createElement(
                                'div',
                                { className: Z.base },
                                (D || v) &&
                                    a().createElement(
                                        'div',
                                        { className: s()(Z.questCardWrapper, A && Z.questCardWrapper__left) },
                                        a().createElement(
                                            'div',
                                            { className: s()(Z.questCard, Z[`questCard__${i}`]) },
                                            B &&
                                                a().createElement(
                                                    'div',
                                                    { className: Z.counterBlock },
                                                    a().createElement(C.B, {
                                                        text: D
                                                            ? xe.content.counterComplete()
                                                            : xe.content.counterActive(),
                                                        binding: {
                                                            currentComplete: e.bonusCount,
                                                            allComplete: e.bonusLimit,
                                                        },
                                                        classMix: Z.counterComplete,
                                                    }),
                                                ),
                                            a().createElement(
                                                'div',
                                                { className: Z.content },
                                                a().createElement(
                                                    'div',
                                                    { className: s()(Z.quests) },
                                                    a().createElement(ye, { quest: e }),
                                                ),
                                            ),
                                            a().createElement(
                                                'div',
                                                { className: Z.rewards },
                                                a().createElement('div', { className: Z.separator }),
                                                a().createElement(U, { size: r, data: e.rewards }),
                                            ),
                                            a().createElement('div', { className: Z.doneBg }),
                                        ),
                                        a().createElement('div', { className: Z.gradientBg }),
                                    ),
                                f &&
                                    a().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                Z.questCardWrapper,
                                                A && Z.questCardWrapper__right,
                                                d && Z.questCardWrapper__left,
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Z.lockedBlock },
                                            a().createElement(
                                                'div',
                                                { className: Z.lockedContent },
                                                a().createElement(O, { timeToUpdate: t }),
                                                a().createElement(g.ZP, {
                                                    className: Z.lockedText,
                                                    text: xe.locked.text(),
                                                }),
                                            ),
                                            a().createElement('div', { className: Z.disabledBg }),
                                        ),
                                        a().createElement('div', { className: Z.gradientBg }),
                                    ),
                                F &&
                                    a().createElement(
                                        'div',
                                        { className: s()(Z.questCardWrapper, d && Z.questCardWrapper__right) },
                                        a().createElement(
                                            'div',
                                            { className: Z.disabledBlock },
                                            a().createElement(
                                                'div',
                                                { className: Z.disabledContent },
                                                a().createElement('div', { className: Z.iconDisabled }),
                                                a().createElement(g.ZP, {
                                                    className: Z.disabledText,
                                                    text: xe.disabled.text(),
                                                }),
                                                a().createElement(g.ZP, {
                                                    className: Z.disabledDescription,
                                                    text: xe.disabled.description(),
                                                }),
                                            ),
                                            a().createElement('div', { className: Z.disabledBg }),
                                        ),
                                    ),
                            )
                        );
                    });
                ($.Active, $.Locked, $.Disabled, $.Done);
                var Ne = u(3215),
                    Pe = u(4598),
                    Le = u(5175),
                    Re = u(3946),
                    Me = u(4538);
                const ke = (0, Ne.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    assignmentsQuests: e.array('assignmentsQuests'),
                                    challengeQuests: e.array('challengeQuests'),
                                    battleTypes: e.array('battleTypes'),
                                },
                                u = (0, Re.Om)(() =>
                                    (0, Le.c)(t.assignmentsQuests.get()).map((e) => (0, Me.gu)(e), { equals: Pe.jv }),
                                ),
                                n = (0, Re.Om)(() =>
                                    (0, Le.c)(t.challengeQuests.get()).map((e) => (0, Me.gu)(e), { equals: Pe.jv }),
                                ),
                                a = (0, Re.Om)(() => (0, Le.c)(t.battleTypes.get()), { equals: Pe.jv }),
                                r = (0, Re.Om)(() => n().length, { equals: Pe.jv }),
                                s = (0, Re.Om)(() => n().reduce((e, t) => (t.status === $.Done ? ++e : e), 0), {
                                    equals: Pe.jv,
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getAssignmentsQuests: u,
                                    getChallengeQuests: n,
                                    getBattleTypes: a,
                                    getCountChallengeQuests: r,
                                    getCountDoneQuests: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onTabVisited: e.createCallback((e) => ({ idTab: e }), 'onTabVisited'),
                            onSound: e.createCallbackNoArgs('onSoundClick'),
                            onTabActivate: e.createCallbackNoArgs('onTabActivate'),
                        }),
                    ),
                    Ie = ke[0],
                    Oe = ke[1];
                var He = u(4042),
                    $e = u(9417);
                const We = {
                        base: 'Sonar_base_91',
                        back: 'Sonar_back_8e',
                        fadeIn: 'Sonar_fadeIn_d9',
                        emitter: 'Sonar_emitter_c6',
                        wave: 'Sonar_wave_51',
                        wave__0: 'Sonar_wave__0_c9',
                        sonarWave: 'Sonar_sonarWave_60',
                        wave__1: 'Sonar_wave__1_92',
                        wave__2: 'Sonar_wave__2_c0',
                        wave__3: 'Sonar_wave__3_ab',
                        wave__4: 'Sonar_wave__4_bb',
                        wave__5: 'Sonar_wave__5_dc',
                        wave__6: 'Sonar_wave__6_94',
                        wave__7: 'Sonar_wave__7_6e',
                        wave__8: 'Sonar_wave__8_73',
                        wave__9: 'Sonar_wave__9_b0',
                        wave__10: 'Sonar_wave__10_d2',
                    },
                    Ge = (0, n.memo)(({ className: e }) =>
                        a().createElement(
                            'div',
                            { className: s()(We.base, e) },
                            a().createElement(
                                'div',
                                { className: We.emitter },
                                Array.from({ length: 10 }, (e, t) =>
                                    a().createElement('div', {
                                        key: `wave-${t}`,
                                        className: s()(We.wave, We[`wave__${t}`]),
                                    }),
                                ),
                            ),
                            a().createElement('div', { className: We.back }),
                        ),
                    ),
                    ze = (0, n.memo)(({ active: e, soundOn: t }) =>
                        a().createElement(
                            'div',
                            { className: s()('SoundBtn_base_75', (e || t) && 'SoundBtn_base__active_34') },
                            a().createElement(
                                'div',
                                { className: 'SoundBtn_content_60' },
                                a().createElement(
                                    'div',
                                    { className: 'SoundBtn_icoContainer_a8' },
                                    a().createElement('div', { className: 'SoundBtn_ico_d8' }),
                                ),
                            ),
                            a().createElement(Ge, {
                                className: s()('SoundBtn_sonar_55', t && 'SoundBtn_sonar__show_ad'),
                            }),
                        ),
                    ),
                    Ue = R.strings.mt_birthday.quests,
                    Ze = [
                        { id: 0, title: Ue.tabs.assignments() },
                        { id: 1, title: Ue.tabs.test() },
                    ],
                    qe = (0, f.Pi)(({ currentTipName: e }) => {
                        const t = (0, h.GS)().mediaSize,
                            u = Oe(),
                            r = u.controls,
                            o = u.model,
                            l = o.computes.getAssignmentsQuests(),
                            c = o.computes.getChallengeQuests(),
                            m = o.computes.getBattleTypes(),
                            f = o.computes.getCountChallengeQuests(),
                            v = o.computes.getCountDoneQuests(),
                            B = o.root.get(),
                            w = B.timeUpdate,
                            S = B.timeNewQuest,
                            y = B.defaultTab,
                            x = B.minLevel,
                            T = B.maxLevel,
                            P = B.isQuestsError,
                            L = B.isQuestGiverError,
                            R = B.isSoundAnimationActive,
                            M = (0, n.useState)(!1),
                            k = M[0],
                            I = M[1],
                            H = (0, n.useState)(y),
                            $ = H[0],
                            G = H[1],
                            z = (0, n.useState)(y ? c : l),
                            U = z[0],
                            Z = z[1],
                            q = (0, n.useState)(!1),
                            j = q[0],
                            Q = q[1],
                            X = (0, n.useState)(!1),
                            V = X[0],
                            Y = X[1],
                            K = (0, n.useState)(!1),
                            J = K[0],
                            ee = K[1],
                            te = (0, n.useState)(!1),
                            ue = te[0],
                            ne = te[1],
                            ae = Boolean($) && !j,
                            re = t < h.cJ.Small;
                        ((0, n.useEffect)(
                            () =>
                                (0, p.F)(() => {
                                    J && (r.onTabVisited($), Z($ ? c : l), Q(!1));
                                }, 500),
                            [l, c, r, $, J],
                        ),
                            (0, b.a)(
                                () => (
                                    I(!0),
                                    (0, p.F)(() => {
                                        I(!1);
                                    }, 0)
                                ),
                                [],
                            ));
                        const se = (0, n.useCallback)(
                            (e) => {
                                e !== $ && (r.onTabActivate(), r.onTabVisited($), G(e), Q(!0), Y(!0), ee(!0));
                            },
                            [r, $],
                        );
                        ((0, n.useEffect)(() => {
                            (ee(!1), Q(!1), Y(!1), Z($ ? c : l));
                        }, [$, c, l]),
                            (0, n.useEffect)(() => {
                                'quests_2' === e && se(1);
                            }, [e, se]));
                        const ie = (0, E.c4)(),
                            oe = ((e, t = 3) => {
                                const u = (0, n.useState)(!1),
                                    a = u[0],
                                    r = u[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const u = () => {
                                            const u = e.animationScroll.scrollPosition.goal;
                                            r(u > t);
                                        };
                                        return (
                                            e.events.on('recalculateContent', u),
                                            e.events.on('change', u),
                                            () => {
                                                (e.events.off('recalculateContent', u), e.events.off('change', u));
                                            }
                                        );
                                    }, [e, t]),
                                    [a]
                                );
                            })(ie, 3),
                            le = oe[0],
                            ce = (0, n.useMemo)(
                                () =>
                                    ((e, t) => {
                                        let u = 0;
                                        const n = W[t].questCardHeight + W[t].questCardMarginBottom;
                                        return e.map((e, t) => (t ? (u += n) : u));
                                    })(U, t),
                                [U, t],
                            ),
                            me = (0, F.useTransition)(
                                U.map((e, u) => {
                                    const n = U.length - 1 === u;
                                    return Object.assign(
                                        {},
                                        e,
                                        { y: `${ce[u]}rem` },
                                        n && { marginBottom: `${W[t].questCardMarginBottom}rem` },
                                        { index: u },
                                    );
                                }),
                                {
                                    key: (e) => e.id,
                                    enter: ({ y: e, marginBottom: t }) => ({ y: e, marginBottom: t }),
                                    update: ({ y: e, marginBottom: t }) => ({ y: e, marginBottom: t }),
                                    config: k ? { duration: 0 } : { duration: 400, easing: A.easeInCubic },
                                    delay: k ? 0 : 1e3,
                                },
                            );
                        return (
                            (0, n.useEffect)(() => {
                                ((0, i.G)('mt_bday_2026_quest_giver_enter'), r.onTabActivate(), r.onTabVisited($));
                            }, []),
                            a().createElement(
                                'div',
                                { className: s()(D.base, le && D.base__hasTopLip, e && D[`base__${e}`]) },
                                a().createElement(
                                    'div',
                                    { className: D.contentWrapper },
                                    a().createElement(
                                        'div',
                                        { className: D.header },
                                        a().createElement($e.h, { title: Ue.header(), subTitle: Ue.description() }),
                                    ),
                                    L
                                        ? a().createElement(
                                              'div',
                                              { className: D.errorWrapper },
                                              a().createElement(He.C, {
                                                  title: Ue.errorMainView.title(),
                                                  subTitle: Ue.errorMainView.subTitle(),
                                              }),
                                          )
                                        : a().createElement(
                                              a().Fragment,
                                              null,
                                              a().createElement(
                                                  'div',
                                                  { className: D.tabsWrapper },
                                                  a().createElement(d, {
                                                      tabs: Ze,
                                                      active: $,
                                                      onClick: se,
                                                      sounds: { click: 'yes1', mouseEnter: 'highlight' },
                                                      classNames: {
                                                          tab: D.tab,
                                                          title: D.tabTitle,
                                                          activeTab: D.activeTab,
                                                      },
                                                  }),
                                              ),
                                              a().createElement(
                                                  'div',
                                                  { className: D.content },
                                                  !e &&
                                                      a().createElement(
                                                          'div',
                                                          {
                                                              className: s()(
                                                                  D.person,
                                                                  $ ? D.person__challenge : D.person__assignments,
                                                              ),
                                                          },
                                                          Boolean($) &&
                                                              a().createElement(
                                                                  a().Fragment,
                                                                  null,
                                                                  a().createElement(
                                                                      'div',
                                                                      {
                                                                          className: D.voice,
                                                                          onClick: () => {
                                                                              R || (r.onSound && r.onSound());
                                                                          },
                                                                          onMouseEnter: () => {
                                                                              (i.$.playHighlight(), ne(!0));
                                                                          },
                                                                          onMouseLeave: () => {
                                                                              ne(!1);
                                                                          },
                                                                      },
                                                                      a().createElement(ze, { active: ue, soundOn: R }),
                                                                  ),
                                                                  a().createElement(g.ZP, {
                                                                      className: D.personMessage,
                                                                      text: Ue.content.personMessage(),
                                                                  }),
                                                              ),
                                                      ),
                                                  a().createElement(
                                                      'div',
                                                      { className: D.bulletinBoard },
                                                      P
                                                          ? a().createElement(
                                                                'div',
                                                                { className: D.errorWrapper },
                                                                a().createElement(He.C, {
                                                                    title: Ue.errorQuestLoad.title(),
                                                                    subTitle: Ue.errorQuestLoad.subTitle(),
                                                                }),
                                                            )
                                                          : a().createElement(
                                                                a().Fragment,
                                                                null,
                                                                a().createElement(
                                                                    'div',
                                                                    { className: D.info },
                                                                    a().createElement(N, {
                                                                        minLevel: x,
                                                                        maxLevel: T,
                                                                        battleTypes: m,
                                                                    }),
                                                                    a().createElement(
                                                                        'div',
                                                                        {
                                                                            className: s()(
                                                                                D.wrapperCountQuests,
                                                                                $ && D.wrapperCountQuests__show,
                                                                                !$ && D.wrapperCountQuests__hide,
                                                                            ),
                                                                        },
                                                                        a().createElement(C.B, {
                                                                            text: Ue.content.questsDone(),
                                                                            binding: { currentQuests: v, allQuests: f },
                                                                            classMix: D.counterQuests,
                                                                        }),
                                                                    ),
                                                                    a().createElement(
                                                                        'div',
                                                                        {
                                                                            className: s()(
                                                                                D.wrapperTimeLeft,
                                                                                !$ && D.wrapperTimeLeft__show,
                                                                                $ && D.wrapperTimeLeft__hide,
                                                                            ),
                                                                        },
                                                                        a().createElement(g.ZP, {
                                                                            text: re
                                                                                ? Ue.content.timeLeftShort()
                                                                                : Ue.content.timeLeft(),
                                                                            className: D.timer,
                                                                        }),
                                                                        a().createElement(
                                                                            'div',
                                                                            { className: D.countdown },
                                                                            a().createElement(O, {
                                                                                timeToUpdate: w,
                                                                                isCounter: !0,
                                                                            }),
                                                                        ),
                                                                    ),
                                                                ),
                                                                a().createElement(
                                                                    'div',
                                                                    {
                                                                        className: s()(
                                                                            D.scrollWrapper,
                                                                            j && D.scrollWrapper__hide,
                                                                        ),
                                                                    },
                                                                    a().createElement('div', { className: D.topLip }),
                                                                    a().createElement(
                                                                        _.X.Vertical.Default,
                                                                        {
                                                                            api: ie,
                                                                            barClassNames: {
                                                                                base: ae ? D.bar : D.bar__hide,
                                                                                topButton: D.topButton,
                                                                                bottomButton: D.bottomButton,
                                                                            },
                                                                        },
                                                                        me((e, t) =>
                                                                            a().createElement(
                                                                                F.animated.div,
                                                                                { style: Object.assign({}, e) },
                                                                                a().createElement(
                                                                                    'div',
                                                                                    {
                                                                                        key: t.id,
                                                                                        className: V
                                                                                            ? D.questOffAnimation
                                                                                            : D.quest,
                                                                                        style: {
                                                                                            animationDelay:
                                                                                                200 * t.index + 'ms',
                                                                                        },
                                                                                    },
                                                                                    a().createElement(Te, {
                                                                                        quest: t,
                                                                                        timeNewQuest: S,
                                                                                        hasCounterComplete: ae,
                                                                                    }),
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                  ),
                                              ),
                                          ),
                                ),
                                a().createElement('div', { className: D.background }),
                            )
                        );
                    }),
                    je = (0, n.memo)((e) => {
                        const t = (0, n.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return a().createElement(
                            Ie,
                            { options: t },
                            a().createElement(qe, { currentTipName: e.currentTipName }),
                        );
                    });
            },
            7351: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => Oe });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(7613),
                    o = u(8089),
                    l = u(2056),
                    c = u(122),
                    m = u(7727),
                    d = u(3403),
                    _ = u(9417),
                    E = u(3215),
                    g = u(4598),
                    p = u(5175),
                    A = u(3946),
                    h = u(4538);
                const b = (0, E.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    selectedUsers: e.array('selectedUsers'),
                                    progression: e.object('progression'),
                                    progressionLevels: e.array('progression.levels'),
                                    infinityRewards: e.array('progression.infinityRewards'),
                                },
                                u = (0, A.Om)(() => (0, p.c)(t.selectedUsers.get()), { equals: g.jv }),
                                n = (0, A.Om)(() => (0, p.c)(t.infinityRewards.get()).map((e) => (0, h.lW)(e)), {
                                    equals: g.jv,
                                }),
                                a = (0, A.Om)(
                                    () =>
                                        (0, p.c)(t.progressionLevels.get()).map((e) =>
                                            Object.assign({}, e, { rewards: [...e.rewards.map((e) => (0, h.lW)(e))] }),
                                        ),
                                    { equals: g.jv },
                                ),
                                r = (0, A.Om)(
                                    () => {
                                        var e;
                                        const t = a();
                                        return null == (e = t[t.length - 1]) ? void 0 : e.maxPoints;
                                    },
                                    { equals: g.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    getSelectedUsers: u,
                                    getInfinityRewards: n,
                                    getProgressLevels: a,
                                    getLevelByNumber: (e) => a().find((t) => (null == t ? void 0 : t.number) === e),
                                    getProgressionMaxPoints: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onPhraseChange: e.createCallbackNoArgs('onPhraseChange'),
                            onPlayerSelect: e.createCallbackNoArgs('onPlayerSelect'),
                            onSent: e.createCallbackNoArgs('onSent'),
                            onTasks: e.createCallbackNoArgs('onTasks'),
                            onAnimationEnded: e.createCallbackNoArgs('onAnimationEnded'),
                            onComponentDestroyed: e.createCallbackNoArgs('onComponentDestroyed'),
                        }),
                    ),
                    f = b[0],
                    F = b[1],
                    C = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const v = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            s = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? 33 : o,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            d = e.lastFrameIndex,
                            _ = void 0 === d ? s - 1 : d,
                            E = e.loop,
                            g = void 0 === E || E,
                            p = e.state,
                            A = void 0 === p ? 'play' : p,
                            h = e.onAnimationDone,
                            b = e.onAnimationComplete,
                            f = e.poster,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, C);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (A) {
                                    case 'play':
                                        return (function () {
                                            const e = S(m, _, r),
                                                t = B(m, _),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == i || i(a, r),
                                                          u(r),
                                                          a === _ &&
                                                              (null == b || b(),
                                                              g || (null == h || h(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && f ? { path: f, x: 0, y: 0 } : r(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(w(e, t));
                                            return (
                                                t.addEventListener('load', n),
                                                () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, m, _, g, i, b, h, f, A]),
                            a().createElement('canvas', D({}, F, { width: t, height: u, ref: v }))
                        );
                    }),
                    B = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
                        };
                    },
                    w = (e, t) => Object.assign({}, e, { img: t }),
                    S = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, w(e, t));
                            else {
                                const t = new Image();
                                ((a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, w(e, t)));
                            }
                        }
                        return n;
                    },
                    y = {
                        base: 'AnimatedLootbox_base_2c',
                        base__blink: 'AnimatedLootbox_base__blink_e1',
                        lootboxSequence: 'AnimatedLootbox_lootboxSequence_e9',
                        lootboxSequence__hidden: 'AnimatedLootbox_lootboxSequence__hidden_2f',
                    },
                    x =
                        ((0, n.memo)(
                            ({
                                lootboxSequenceState: e,
                                setLootboxSequenceState: t,
                                isBlinkAnimation: u,
                                setIsBlinkAnimation: r,
                            }) => (
                                (0, n.useEffect)(
                                    () =>
                                        (0, c.F)(() => {
                                            (t(h.wO.PLAY), (0, m.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                        }, 200),
                                    [t],
                                ),
                                (0, n.useEffect)(() => {
                                    if (e === h.wO.STOP)
                                        return (0, c.F)(() => {
                                            (t(h.wO.PLAY), (0, m.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                        }, 2e3);
                                }, [e, t]),
                                (0, n.useEffect)(() => {
                                    if (u)
                                        return (
                                            (0, m.G)('hangar_h15_bday_tank_mail_anim_send'),
                                            (0, c.F)(() => {
                                                (t(h.wO.STOP), r(!1));
                                            }, 1500)
                                        );
                                }, [u, r, t]),
                                (0, n.useEffect)(() => {
                                    e === h.wO.STOP && r(!1);
                                }, [e, r]),
                                a().createElement(
                                    'div',
                                    { className: s()(y.base, e === h.wO.PLAY && y.base__visible, u && y.base__blink) },
                                    a().createElement(v, {
                                        width: h.FE.width,
                                        height: h.FE.height,
                                        frameCount: h.FE.frameCount,
                                        getImageSource: h.sq,
                                        state: e,
                                        loop: !1,
                                        className: s()(y.lootboxSequence, e === h.wO.STOP && y.lootboxSequence__hidden),
                                    }),
                                )
                            ),
                        ),
                        {
                            base: 'App_base_4a',
                            fadeIn: 'App_fadeIn_d8',
                            content: 'App_content_ea',
                            base__general_1: 'App_base__general_1_f1',
                            background: 'App_background_a5',
                            header: 'App_header_6a',
                            currencyContainer: 'App_currencyContainer_a6',
                            base__mail_1: 'App_base__mail_1_a0',
                            base__mail_2: 'App_base__mail_2_d3',
                            currencyText: 'App_currencyText_7b',
                            buttonText: 'App_buttonText_17',
                            buttonTextIcon: 'App_buttonTextIcon_b7',
                            currencyCountText: 'App_currencyCountText_5a',
                            currencyPostStampIcon: 'App_currencyPostStampIcon_2e',
                            giftContainer: 'App_giftContainer_b8',
                            giftContainer__center: 'App_giftContainer__center_53',
                            phraseContainer: 'App_phraseContainer_fa',
                            progressionContainer: 'App_progressionContainer_79',
                            giftSender: 'App_giftSender_9e',
                            conditionListContainer: 'App_conditionListContainer_80',
                            fadeOut: 'App_fadeOut_92',
                        }),
                    T = R.strings.mt_birthday.mail.errorPostScreen,
                    N = (0, n.memo)(() =>
                        a().createElement(
                            'div',
                            { className: 'ErrorPostScreen_base_e9' },
                            a().createElement('div', { className: 'ErrorPostScreen_icon_e4' }),
                            a().createElement(i.ZP, {
                                text: T.title(),
                                format: { classMix: 'ErrorPostScreen_title_d3' },
                            }),
                            a().createElement(i.ZP, {
                                text: T.subTitle(),
                                format: { classMix: 'ErrorPostScreen_subTitle_89' },
                            }),
                        ),
                    );
                var P = u(7260);
                const L = {
                        base: 'ConditionList_base_a8',
                        condition: 'ConditionList_condition_5c',
                        dayLimit: 'ConditionList_dayLimit_0c',
                        rewards: 'ConditionList_rewards_8a',
                        bonusChance: 'ConditionList_bonusChance_7c',
                        textCondition: 'ConditionList_textCondition_3c',
                    },
                    M = R.strings.mt_birthday.mail,
                    k = ['dayLimit', 'rewards', 'bonusChance'],
                    I = (0, n.memo)(() =>
                        a().createElement(
                            'div',
                            { className: L.base },
                            k.map((e, t) =>
                                a().createElement(
                                    'div',
                                    { key: `${t}_${e}`, className: L.condition },
                                    a().createElement('div', { className: L[e] }),
                                    a().createElement(P.B, { text: M.condition.$dyn(e), classMix: L.textCondition }),
                                ),
                            ),
                        ),
                    ),
                    O = 'GiftSentForm_stepContainer_47',
                    H = 'GiftSentForm_title_f7',
                    $ = 'Phrase_contentContainer_41',
                    W = 'Phrase_phraseText_d5',
                    G = 'Phrase_refreshContainer_8d',
                    z = 'Phrase_refreshIcon_1f',
                    U = 'Phrase_refreshText_26';
                var Z = u(3457);
                const q = R.strings.mt_birthday.mail,
                    j = (0, n.memo)(({ sentCost: e, isSentError: t, isLoading: u, disabled: n = !1, onSent: r }) =>
                        a().createElement(
                            'div',
                            { className: 'SentButton_base_7c' },
                            a().createElement(
                                Z.u5,
                                { onClick: r, mixClass: 'SentButton_sentButton_b0', disabled: n },
                                u
                                    ? a().createElement('div', { className: 'SentButton_loader_73' })
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(i.ZP, {
                                              text: e ? q.sentButton() : q.zeroSentButton(),
                                              format: {
                                                  classMix: 'SentButton_sentButtonText_03',
                                                  binding: { sentCost: e },
                                              },
                                          }),
                                          a().createElement('div', { className: 'SentButton_postStampIcon_6c' }),
                                      ),
                            ),
                            t &&
                                a().createElement(
                                    'div',
                                    { className: 'SentButton_sentError_33' },
                                    a().createElement('div', { className: 'SentButton_errorIcon_ce' }),
                                    a().createElement(i.ZP, {
                                        text: q.sentError(),
                                        format: { classMix: 'SentButton_sentErrorText_e7' },
                                    }),
                                ),
                        ),
                    ),
                    Q = R.strings.mt_birthday.mail.selectPhrase,
                    X = R.strings.player_phrases.player,
                    V = (0, n.memo)(
                        ({
                            phraseID: e,
                            disabled: t = !1,
                            onRefresh: u,
                            sentCost: r,
                            isSentError: o,
                            isLoading: l,
                            onSent: d,
                        }) => {
                            const _ = (0, n.useState)(!1),
                                E = _[0],
                                g = _[1],
                                p = (0, n.useState)(e),
                                A = p[0],
                                h = p[1],
                                b = (0, n.useState)(NaN),
                                f = b[0],
                                F = b[1],
                                C = (0, n.useCallback)(() => {
                                    ((0, m.G)('mt_bday_2026_post_change'), u());
                                }, [u]);
                            return (
                                (0, n.useEffect)(() => {
                                    if (E)
                                        return (0, c.F)(() => {
                                            g(!1);
                                        }, 500);
                                }, [E]),
                                (0, n.useEffect)(() => {
                                    (A !== e && (F(A), g(!0)), h(e));
                                }, [e, A]),
                                a().createElement(
                                    'div',
                                    { className: s()('Phrase_base_85', l && 'Phrase_base__disabled_17') },
                                    a().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Phrase_phraseContainer_f6',
                                                E && 'Phrase_phraseContainer__show_9a',
                                            ),
                                            onClick: E ? void 0 : C,
                                            onMouseEnter: () => {
                                                m.$.playHighlight();
                                            },
                                        },
                                        l && a().createElement('div', { className: 'Phrase_disabledBg_ad' }),
                                        a().createElement(
                                            'div',
                                            { className: $ },
                                            a().createElement(i.ZP, { text: X.$dyn(`c_${A}`), className: W }),
                                            a().createElement(
                                                'div',
                                                { className: G },
                                                a().createElement('div', { className: z }),
                                                a().createElement(i.ZP, { className: U, text: Q.refreshButton() }),
                                            ),
                                        ),
                                    ),
                                    E &&
                                        a().createElement(
                                            'div',
                                            { className: 'Phrase_prevPhraseContainer_28' },
                                            a().createElement(
                                                'div',
                                                { className: $ },
                                                a().createElement(i.ZP, { text: X.$dyn(`c_${f}`), className: W }),
                                                a().createElement(
                                                    'div',
                                                    { className: G },
                                                    a().createElement('div', { className: z }),
                                                    a().createElement(i.ZP, { className: U, text: Q.refreshButton() }),
                                                ),
                                            ),
                                        ),
                                    a().createElement(j, {
                                        sentCost: r,
                                        isSentError: o,
                                        disabled: t,
                                        isLoading: l,
                                        onSent: d,
                                    }),
                                )
                            );
                        },
                    ),
                    Y = {
                        base: 'PlayerCard_base_8b',
                        playerContainer: 'PlayerCard_playerContainer_82',
                        playerNickname: 'PlayerCard_playerNickname_34',
                        playerNameText: 'PlayerCard_playerNameText_36',
                        playerClanText: 'PlayerCard_playerClanText_2b',
                        online: 'PlayerCard_online_9a',
                        offline: 'PlayerCard_offline_6b',
                        inBattle: 'PlayerCard_inBattle_d4',
                        base__disabled: 'PlayerCard_base__disabled_db',
                        sentResponseIcon: 'PlayerCard_sentResponseIcon_87',
                        sentResponseBg: 'PlayerCard_sentResponseBg_79',
                    },
                    K = (0, n.memo)(({ player: e, className: t }) => {
                        const u = e.userNickName,
                            r = e.clanTag,
                            o = e.isWaitResponse,
                            l = e.playerOnlineStatus,
                            c = (0, n.useMemo)(() => s()(Y.base, o && Y.base__sent, t), [t, o]),
                            m = r ? `[${r}]` : '';
                        return a().createElement(
                            'div',
                            { className: c },
                            a().createElement('div', { className: Y[l.status] }),
                            a().createElement(
                                'div',
                                { className: Y.playerContainer },
                                a().createElement(
                                    'div',
                                    { className: Y.playerNickname },
                                    a().createElement(i.ZP, { className: Y.playerNameText, text: u }),
                                    a().createElement(i.ZP, { className: Y.playerClanText, text: m }),
                                ),
                            ),
                            o &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Y.sentResponseIcon }),
                                    a().createElement('div', { className: Y.sentResponseBg }),
                                ),
                        );
                    }),
                    J = {
                        base: 'SelectPlayers_base_13',
                        base__active: 'SelectPlayers_base__active_cb',
                        base__disabled: 'SelectPlayers_base__disabled_31',
                        base__allSpace: 'SelectPlayers_base__allSpace_2a',
                        emptyBg: 'SelectPlayers_emptyBg_ba',
                        disabledBg: 'SelectPlayers_disabledBg_95',
                        list: 'SelectPlayers_list_ce',
                        freeContainer: 'SelectPlayers_freeContainer_4a',
                        clickText: 'SelectPlayers_clickText_e9',
                        playerIcon: 'SelectPlayers_playerIcon_58',
                        subTitle: 'SelectPlayers_subTitle_f9',
                        description: 'SelectPlayers_description_29',
                    },
                    ee = R.strings.mt_birthday.mail.selectPlayers,
                    te = (0, n.memo)(
                        ({ selectedUsers: e, selectedUsersCount: t = 0, disabled: u = !1, onClick: r }) => {
                            const o = !t,
                                l = s()(J.base, J.base__active, !o && J.base__allSpace, u && J.base__disabled),
                                c = t >= 5,
                                d = (0, n.useCallback)(() => {
                                    m.$.playHighlight();
                                }, []),
                                _ = (0, n.useCallback)(() => {
                                    (m.$.playClick(), r());
                                }, [r]);
                            return a().createElement(
                                'div',
                                { className: l, onClick: _, onMouseEnter: d },
                                u && a().createElement('div', { className: J.disabledBg }),
                                o
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              'div',
                                              { className: J.clickText },
                                              a().createElement('div', { className: J.playerIcon }),
                                              a().createElement(i.ZP, { text: ee.subTitle(), className: J.subTitle }),
                                          ),
                                          a().createElement(i.ZP, { text: ee.description(), className: J.description }),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              'div',
                                              { className: s()(J.list) },
                                              e.map((e) =>
                                                  a().createElement(K, {
                                                      player: e,
                                                      className: J.playerCard,
                                                      key: e.userID,
                                                  }),
                                              ),
                                          ),
                                          !c &&
                                              a().createElement(
                                                  'div',
                                                  { className: J.freeContainer },
                                                  a().createElement(i.ZP, {
                                                      text: ee.description(),
                                                      className: J.description,
                                                  }),
                                              ),
                                      ),
                            );
                        },
                    ),
                    ue = R.strings.mt_birthday.mail.title,
                    ne = (0, n.memo)(
                        ({
                            selectedUsers: e,
                            selectedUsersCount: t,
                            isSending: u,
                            phraseID: n,
                            sentCost: r,
                            isSentError: s,
                            isDisabledSentButton: o,
                            onPlayerSelect: l,
                            onPhraseChange: c,
                            onSent: m,
                        }) =>
                            a().createElement(
                                'div',
                                { className: 'GiftSentForm_base_5e' },
                                a().createElement(
                                    'div',
                                    { className: O },
                                    a().createElement(i.ZP, { text: ue.condition(), className: H }),
                                    a().createElement(I, null),
                                ),
                                a().createElement(
                                    'div',
                                    { className: O },
                                    a().createElement(i.ZP, { text: ue.selectPlayers(), className: H }),
                                    a().createElement(te, {
                                        selectedUsers: e,
                                        selectedUsersCount: t,
                                        disabled: u,
                                        onClick: l,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: O },
                                    a().createElement(i.ZP, { text: ue.selectPhrase(), className: H }),
                                    a().createElement(V, {
                                        phraseID: n,
                                        onRefresh: c,
                                        disabled: u || o,
                                        sentCost: r,
                                        isSentError: s,
                                        isLoading: u,
                                        onSent: m,
                                    }),
                                ),
                            ),
                    );
                var ae = u(2862),
                    re = u(5739),
                    se = u(794),
                    ie = u(6358),
                    oe = u(3138);
                const le = { type: 'idle' };
                var ce = u(5415),
                    me = u(9630),
                    de = u(7515),
                    _e = u(6128),
                    Ee = u(3724),
                    ge = u(4553);
                var pe = u(6840);
                const Ae = ['api', 'value', 'maxValue', 'theme'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const be = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    fe = (e) => {
                        let t = e.api,
                            u = e.value,
                            r = e.maxValue,
                            i = void 0 === r ? 100 : r,
                            o = e.theme,
                            l = void 0 === o ? _e.uH : o,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ae);
                        const m = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            _ = (0, n.useRef)(null),
                            E = (0, de.u)(0, u, i) / i,
                            g = (0, n.useCallback)(
                                (e) => {
                                    (_.current &&
                                        m.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, n) => {
                                            const a = u.offsetWidth - n.offsetWidth,
                                                r = e - be(u, t),
                                                s = (0, de.u)(0, a, r);
                                            n.style.left = `${s}rem`;
                                        })(e, m.current, _.current),
                                        d.current &&
                                            m.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                u,
                                                { container: n, line: a },
                                            ) => {
                                                const r = Math.max(0, Math.floor(n.offsetWidth * u) - 8e4),
                                                    s = e - be(n, t),
                                                    i = (0, de.u)(0, r, s);
                                                a.style.left = `${i}rem`;
                                            })(e, E, { line: d.current, container: m.current }));
                                },
                                [E],
                            ),
                            p = (0, n.useMemo)(() => (0, ge.VQ)(l), [l]);
                        return (
                            (t.current.update = g),
                            a().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_f7', ref: m },
                                a().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_4d' },
                                    a().createElement(
                                        'div',
                                        {
                                            style: p,
                                            className: s()(
                                                'OptimizedProgressBar_background_dc',
                                                c.progressBarBackgroundClassMix,
                                            ),
                                            ref: _,
                                        },
                                        a().createElement(Ee.J, {
                                            size: c.size,
                                            classMix: c.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    a().createElement(
                                        _e.ko,
                                        he({}, c, {
                                            lineRef: d,
                                            value: u,
                                            theme: l,
                                            maxValue: i,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
                var Fe = u(4489);
                const Ce = {
                        [ce.cJ.ExtraSmall]: {
                            width: 600,
                            pointsDistance: 188,
                            pointIndent: 94,
                            pointIndentLast: 50,
                            progressionIndent: 15,
                            infinityDistance: 400,
                            infinityProgressionLeftGap: 24,
                        },
                        [ce.cJ.Small]: {
                            width: 875,
                            pointsDistance: 188,
                            pointIndent: 94,
                            pointIndentLast: 100,
                            progressionIndent: 15,
                            infinityDistance: 400,
                            infinityProgressionLeftGap: 24,
                        },
                        [ce.cJ.Medium]: {
                            width: 910,
                            pointsDistance: 284,
                            pointIndent: 142,
                            pointIndentLast: 300,
                            progressionIndent: 15,
                            infinityDistance: 600,
                            infinityProgressionLeftGap: 32,
                        },
                        [ce.cJ.Large]: {
                            width: 1130,
                            pointsDistance: 304,
                            pointIndent: 152,
                            pointIndentLast: 360,
                            progressionIndent: 60,
                            infinityDistance: 720,
                            infinityProgressionLeftGap: 40,
                        },
                        [ce.cJ.ExtraLarge]: {
                            width: 1630,
                            pointsDistance: 320,
                            pointIndent: 160,
                            pointIndentLast: 360,
                            progressionIndent: 60,
                            infinityDistance: 880,
                            infinityProgressionLeftGap: 64,
                        },
                    },
                    De = Object.assign({}, _e.uu, {
                        withStack: !0,
                        type: pe.r.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    ve = (e, t) => (t < 0 ? 0 : e[t].maxPoints),
                    Be = (e, t, u) => {
                        let n = 0;
                        const a = ve(u, t - 2),
                            r = ve(u, u.length - 1) / u.length;
                        return (
                            u.forEach((u, s) => {
                                s < t &&
                                    (n += ((e, t, u, n) => (e >= t ? n : (n / (t - u)) * (e - u)))(
                                        e,
                                        u.maxPoints,
                                        a,
                                        r,
                                    ));
                            }),
                            n
                        );
                    },
                    we = 'InfinityLevel_line_a7',
                    Se = 'InfinityLevel_secondaryPointsCount_1a';
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const xe = (0, n.memo)(
                        ({
                            currentLevel: e,
                            isMainProgressCompleted: t,
                            marginInfinity: u,
                            infinityProgressPoints: r,
                            infinityProgressDeltaFrom: o,
                            infinityProgressMaxPointsCount: l,
                            infinitySubStagesCount: c,
                            infinityRewards: m,
                        }) => {
                            const d = (0, ce.GS)().mediaSize,
                                _ = (0, n.useRef)({ update: () => {} }),
                                E = d < ce.cJ.Medium ? ae.h2.Small : ae.h2.Big,
                                g = Ce[d].infinityDistance;
                            return a().createElement(
                                'div',
                                { className: 'InfinityLevel_base_a1' },
                                a().createElement(
                                    'div',
                                    {
                                        className: 'InfinityLevel_infinityContainer_0b',
                                        style: { width: `${g}rem`, marginRight: `${u}rem` },
                                    },
                                    a().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'InfinityLevel_point_80',
                                                t && 'InfinityLevel_point__active_c0',
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            { className: 'InfinityLevel_label_bb' },
                                            a().createElement('div', { className: 'InfinityLevel_infinityIcon_df' }),
                                        ),
                                        a().createElement(i.ZP, {
                                            text: String(l - c),
                                            className: s()(Se, 'InfinityLevel_secondaryPointsCount__isZero_d0'),
                                        }),
                                        a().createElement(i.ZP, { text: String(l), className: Se }),
                                        a().createElement(
                                            'div',
                                            { className: 'InfinityLevel_rewardsContainer_d7' },
                                            a().createElement('div', {
                                                className: s()(we, 'InfinityLevel_line__top_f8'),
                                            }),
                                            a().createElement('div', {
                                                className: s()(we, 'InfinityLevel_line__bottom_96'),
                                            }),
                                            a().createElement('div', {
                                                className: s()(we, 'InfinityLevel_line__topRight_50'),
                                            }),
                                            a().createElement('div', {
                                                className: s()(we, 'InfinityLevel_line__bottomRight_1e'),
                                            }),
                                            a().createElement(
                                                'div',
                                                { className: 'InfinityLevel_rewardsBlock_b5' },
                                                m.map((t, u) =>
                                                    a().createElement(
                                                        'div',
                                                        {
                                                            key: `${t.icon}_${u}_${e}`,
                                                            className: s()(
                                                                'InfinityLevel_reward_f2',
                                                                u === m.length - 1 && 'InfinityLevel_reward__last_20',
                                                            ),
                                                        },
                                                        a().createElement(
                                                            re.Q,
                                                            ye({}, t, { image: t.image(E), size: E }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: 'InfinityLevel_progressBarContainer_c0' },
                                        a().createElement(fe, {
                                            animationSettings: De,
                                            value: r,
                                            deltaFrom: o,
                                            maxValue: l,
                                            api: _,
                                            disabled: !t,
                                            isNeverComplete: !0,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Te = 'Progression_line_57',
                    Ne = 'Progression_secondaryPointsCount_56';
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const Le = (0, n.memo)(
                        ({
                            currentLevel: e,
                            levels: t,
                            points: u,
                            deltaFrom: r,
                            infinityProgressPoints: o,
                            infinityProgressDeltaFrom: l,
                            infinityProgressMaxPointsCount: d,
                            infinitySubStagesCount: _,
                            infinityRewards: E,
                            onAnimationEnded: g,
                        }) => {
                            const p = (0, ce.GS)().mediaSize,
                                A = (() => {
                                    const e = (0, n.useState)(oe.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                u(oe.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        t
                                    );
                                })(),
                                h = (0, n.useRef)({ update: () => {} }),
                                b = t[t.length - 1],
                                f = null == b ? void 0 : b.number,
                                F = (0, n.useState)(e > f),
                                C = F[0],
                                D = F[1],
                                v = (0, n.useState)(e > f),
                                B = v[0],
                                w = v[1],
                                S = (0, n.useState)(!1),
                                y = S[0],
                                x = S[1],
                                T = (0, n.useState)(0),
                                N = T[0],
                                P = T[1],
                                L = null == b ? void 0 : b.maxPoints,
                                R = p < ce.cJ.Medium ? ae.h2.Small : ae.h2.Big,
                                M = Ce[p].pointsDistance,
                                k = M * f;
                            ((0, n.useEffect)(() => {
                                if (u >= L)
                                    return (0, c.F)(() => {
                                        D(!0);
                                    }, Me);
                            }, [u, L]),
                                (0, n.useEffect)(() => {
                                    if (C)
                                        return (0, c.F)(() => {
                                            w(!0);
                                        }, 1e3);
                                }, [C]));
                            const I = (0, ie.T5)(),
                                O = (0, I.getWrapperSize)();
                            ((0, n.useEffect)(() => {
                                if (C) {
                                    if (o !== l)
                                        return (0, c.F)(() => {
                                            g();
                                        }, 1500);
                                } else if (u !== r)
                                    return (0, c.F)(() => {
                                        g();
                                    }, 1500);
                            }, [r, l, o, C, g, u]),
                                (0, n.useEffect)(() => {
                                    u > r && (0, m.G)('bp_progress_bar_start');
                                }, [r, u]));
                            const H = (0, n.useCallback)(() => {
                                (x(!0),
                                    (0, c.F)(() => {
                                        x(!1);
                                        const e = (O || 0) / A,
                                            t = Ce[p].infinityDistance,
                                            u = p === ce.cJ.ExtraSmall ? 90 : 0;
                                        P(e ? (e - t + 10 - u) / 2 : t);
                                    }, 0));
                            }, [O, A, p]);
                            ((0, n.useEffect)(() => {
                                H();
                            }, [O, p, H]),
                                (0, me.t)(() => {
                                    H();
                                }, [O, p]),
                                (function (e, t, u) {
                                    const a = e.contentRef,
                                        r = e.wrapperRef,
                                        s = e.scrollPosition,
                                        i = e.clampPosition,
                                        o = e.animationScroll,
                                        l = e.events,
                                        c = (0, n.useState)(le),
                                        m = c[0],
                                        d = c[1];
                                    ((0, n.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = 'dragging' === m.type ? 'move' : 'grab');
                                    }, [a, m.type]),
                                        (0, n.useEffect)(() => {
                                            if ('dragging' !== m.type) return;
                                            const e = oe.O.client.events.mouse.move(([e, u]) => {
                                                    const n = a.current,
                                                        l = r.current;
                                                    if (!n || !l) return;
                                                    if ('inside' === u && e.clientX < 0) return;
                                                    const c = 'inside' === u ? e.clientX : e.clientX - l.offsetLeft,
                                                        d = m.positionFrom - c,
                                                        _ = m.previousScrollPosition + d;
                                                    s.start(
                                                        Object.assign(
                                                            {
                                                                scrollPosition: i(n, _),
                                                                from: { scrollPosition: o.scrollPosition.get() },
                                                            },
                                                            t,
                                                        ),
                                                    );
                                                }),
                                                u = oe.O.client.events.mouse.up(function () {
                                                    d({ type: 'scrollingToEnd' });
                                                });
                                            return () => {
                                                (e(), u());
                                            };
                                        }, [o.scrollPosition, i, a, m, s, r, t]),
                                        (0, n.useEffect)(() => {
                                            if ('scrollingToEnd' !== m.type) return;
                                            const e = () => {
                                                d(le);
                                            };
                                            return (
                                                o.scrollPosition.idle && e(),
                                                l.on('rest', e),
                                                () => l.off('rest', e)
                                            );
                                        }, [o.scrollPosition, m.type, l]),
                                        (0, n.useEffect)(() => {
                                            const e = a.current;
                                            if (!e) return;
                                            const t = (e) => {
                                                d({
                                                    type: 'dragging',
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: o.scrollPosition.get(),
                                                });
                                            };
                                            return (
                                                e.addEventListener('mousedown', t),
                                                () => e.removeEventListener('mousedown', t)
                                            );
                                        }, [o.scrollPosition, a, u]));
                                })(Object.assign({}, I)),
                                (0, n.useEffect)(() => {
                                    const t = ((O || 0) / A - 10) / 2,
                                        u = e * M - Ce[p].pointIndent - t,
                                        n = C ? k + N : u || 0;
                                    return (0, c.F)(() => {
                                        I.applyScroll(n * A);
                                    }, 0);
                                }, [O, A, I, C, k, p, e, M, N]));
                            const $ = ((e, t, u, a) => {
                                    const r = (0, n.useState)(0),
                                        s = r[0],
                                        i = r[1],
                                        o = (0, n.useState)(60),
                                        l = o[0],
                                        c = o[1],
                                        m = parseFloat((40 / t).toFixed(1)),
                                        d = parseFloat((40 / u).toFixed(3)),
                                        _ = (0, Fe.f)(
                                            (e) => {
                                                const u = parseFloat((e * m).toFixed(1));
                                                e <= t && s !== u && i(u);
                                                const n = 60 + parseFloat(((e - a) * d).toFixed(1));
                                                e > a && l !== n && c(n);
                                            },
                                            [s, l],
                                            150,
                                        );
                                    return (
                                        (0, n.useEffect)(() => {
                                            const t = () => {
                                                const t = parseFloat(e.animationScroll.scrollPosition.get().toFixed(1));
                                                _(t);
                                            };
                                            return (
                                                e.events.on('recalculateContent', t),
                                                e.events.on('change', t),
                                                () => {
                                                    (e.events.off('recalculateContent', t), e.events.off('change', t));
                                                }
                                            );
                                        }, [e, e.scrollPosition, _]),
                                        [s, l]
                                    );
                                })(I, Ce[p].pointsDistance, N, k - N - Ce[p].infinityDistance),
                                W = $[0],
                                G = $[1];
                            return a().createElement(
                                'div',
                                {
                                    className: 'Progression_base_99',
                                    style: {
                                        maskImage: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000 ${W}%, #000 ${G}%, rgba(0, 0, 0, 0) 100%)`,
                                    },
                                },
                                a().createElement(
                                    se.X.Horizontal.Area.Default,
                                    {
                                        api: Object.assign({}, I, { handleMouseWheel: I.handleMouseWheel }),
                                        className: 'Progression_container_4b',
                                        classNames: {
                                            content: 'Progression_scrollContent_28',
                                            wrapper: 'Progression_scrollWrapper_25',
                                        },
                                        barClassNames: { base: 'Progression_scrollBar_ac' },
                                    },
                                    a().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Progression_progressLineContainer_c4',
                                                (B || y) && 'Progression_progressLineContainer__completed_09',
                                            ),
                                            style: { width: `${k}rem` },
                                        },
                                        t.map((t, u) => {
                                            const n = (null == t ? void 0 : t.number) === e && !C,
                                                r = (null == t ? void 0 : t.number) - 1 === e && !C,
                                                o = (null == t ? void 0 : t.number) < e || C,
                                                l = b.number - 1 === u;
                                            return a().createElement(
                                                'div',
                                                {
                                                    key: `${null == t ? void 0 : t.number}_${u}`,
                                                    className: s()(
                                                        'Progression_point_e1',
                                                        n && 'Progression_point__active_0f',
                                                        o && 'Progression_point__complete_a1',
                                                    ),
                                                    style: { width: `${M}rem`, transform: `translateX(${u * M}rem)` },
                                                },
                                                a().createElement(i.ZP, {
                                                    className: 'Progression_label_9e',
                                                    text: String(null == t ? void 0 : t.number),
                                                }),
                                                !u &&
                                                    a().createElement(i.ZP, {
                                                        text: String(t.maxPoints - t.substagesCount),
                                                        className: s()(
                                                            Ne,
                                                            'Progression_secondaryPointsCount__isZero_03',
                                                        ),
                                                    }),
                                                a().createElement(i.ZP, { text: String(t.maxPoints), className: Ne }),
                                                a().createElement(
                                                    'div',
                                                    { className: 'Progression_rewardsContainer_b7' },
                                                    !r &&
                                                        a().createElement(
                                                            a().Fragment,
                                                            null,
                                                            a().createElement('div', {
                                                                className: s()(Te, 'Progression_line__top_f9'),
                                                            }),
                                                            a().createElement('div', {
                                                                className: s()(Te, 'Progression_line__bottom_fc'),
                                                            }),
                                                        ),
                                                    (l || n) &&
                                                        a().createElement(
                                                            a().Fragment,
                                                            null,
                                                            a().createElement('div', {
                                                                className: s()(Te, 'Progression_line__topRight_26'),
                                                            }),
                                                            a().createElement('div', {
                                                                className: s()(Te, 'Progression_line__bottomRight_79'),
                                                            }),
                                                        ),
                                                    a().createElement(
                                                        'div',
                                                        { className: 'Progression_rewardsBlock_4d' },
                                                        t.rewards.map((u, n) =>
                                                            a().createElement(
                                                                'div',
                                                                {
                                                                    key: `${u.icon}_${n}_${e}`,
                                                                    className: s()(
                                                                        'Progression_reward_10',
                                                                        n === t.rewards.length - 1 &&
                                                                            'Progression_reward__last_0c',
                                                                    ),
                                                                },
                                                                a().createElement(
                                                                    re.Q,
                                                                    Pe({}, u, { image: u.image(R), size: R }),
                                                                ),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            );
                                        }),
                                        a().createElement(
                                            'div',
                                            { className: 'Progression_progressBarContainer_44' },
                                            a().createElement(fe, {
                                                animationSettings: De,
                                                value: Be(u, e, t),
                                                deltaFrom: Be(r, e, t),
                                                maxValue: L,
                                                api: h,
                                            }),
                                        ),
                                    ),
                                    a().createElement(xe, {
                                        currentLevel: e,
                                        isMainProgressCompleted: C,
                                        marginInfinity: N,
                                        infinityProgressPoints: o,
                                        infinityProgressDeltaFrom: l,
                                        infinityProgressMaxPointsCount: d,
                                        infinitySubStagesCount: _,
                                        infinityRewards: E,
                                    }),
                                ),
                            );
                        },
                    ),
                    Re = R.strings.mt_birthday.mail,
                    Me = 1500,
                    ke = (0, d.Pi)(({ currentTipName: e, handleGiftSent: t }) => {
                        const u = F(),
                            r = u.controls,
                            d = u.model,
                            E = d.root.get(),
                            g = E.currencyCount,
                            p = E.isSentError,
                            A = E.isSending,
                            h = E.phraseID,
                            b = E.isPostError,
                            f = d.progression.get(),
                            C = f.currentLevel,
                            D = f.currentPoints,
                            v = f.pointsDeltaFrom,
                            B = f.infinityStartPoints,
                            w = f.infinityMaxPoints,
                            S = f.infinitySubstagesCount,
                            y = f.infinityDeltaFrom,
                            T = d.computes.getSelectedUsers(),
                            P = d.computes.getInfinityRewards(),
                            L = T.length ? 1 * T.length : 1,
                            M = g ? L : g,
                            k = T.length,
                            I = d.computes.getProgressLevels(),
                            O = (0, n.useState)(!1),
                            H = O[0],
                            $ = O[1],
                            W = (0, n.useState)(!1),
                            G = W[0],
                            z = W[1],
                            U = !T.length || M > g || !g || A,
                            Z = y === D ? D - B : y - B,
                            q = (0, n.useCallback)(() => {
                                (r.onSent(), $(!0), t(), (0, m.G)('mt_bday_2026_post_send'));
                            }, [r, t]);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    (0, c.F)(() => {
                                        H && z(!0);
                                    }, 1500),
                                [g, H],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    (0, c.F)(() => {
                                        G && (z(!1), $(!1));
                                    }, 500),
                                [G],
                            ),
                            (0, n.useEffect)(
                                () => (
                                    (0, m.G)('mt_bday_2026_post_enter'),
                                    () => {
                                        r.onComponentDestroyed();
                                    }
                                ),
                                [],
                            ),
                            a().createElement(
                                'div',
                                { className: s()(x.base, e && x[`base__${e}`]) },
                                a().createElement(
                                    'div',
                                    { className: x.content },
                                    a().createElement(
                                        'div',
                                        { className: x.header },
                                        a().createElement(_.h, { title: Re.header(), subTitle: Re.description() }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: x.currencyContainer },
                                        g
                                            ? a().createElement(
                                                  a().Fragment,
                                                  null,
                                                  a().createElement(i.ZP, {
                                                      text: Re.currencyCount(),
                                                      className: x.currencyText,
                                                      format: {
                                                          binding: {
                                                              currencyCount: a().createElement(i.ZP, {
                                                                  text: String(g),
                                                                  className: x.currencyCountText,
                                                              }),
                                                          },
                                                      },
                                                  }),
                                                  a().createElement(
                                                      l.u,
                                                      {
                                                          contentId:
                                                              R.views.mt_birthday.lobby.tooltips.PostStampTooltip(
                                                                  'resId',
                                                              ),
                                                      },
                                                      a().createElement('div', { className: x.currencyPostStampIcon }),
                                                  ),
                                              )
                                            : a().createElement(
                                                  a().Fragment,
                                                  null,
                                                  a().createElement(i.ZP, {
                                                      text: Re.zeroCount(),
                                                      className: x.currencyText,
                                                  }),
                                                  a().createElement(o.A, {
                                                      classNames: { base: x.buttonText, icon: x.buttonTextIcon },
                                                      caption: Re.earnMore(),
                                                      type: 'back',
                                                      onClick: r.onTasks,
                                                  }),
                                              ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: x.giftContainer },
                                        b
                                            ? a().createElement(N, null)
                                            : a().createElement(ne, {
                                                  selectedUsers: T,
                                                  selectedUsersCount: k,
                                                  isSending: A,
                                                  phraseID: h,
                                                  sentCost: M,
                                                  isSentError: p,
                                                  isDisabledSentButton: U,
                                                  onPlayerSelect: r.onPlayerSelect,
                                                  onPhraseChange: r.onPhraseChange,
                                                  onSent: q,
                                              }),
                                    ),
                                    !b &&
                                        a().createElement(
                                            'div',
                                            { className: x.progressionContainer },
                                            a().createElement(Le, {
                                                currentLevel: C,
                                                points: D,
                                                deltaFrom: v,
                                                levels: I,
                                                infinityProgressMaxPointsCount: w - B,
                                                infinityProgressDeltaFrom: Z,
                                                infinityProgressPoints: D - B,
                                                infinitySubStagesCount: S,
                                                infinityRewards: P,
                                                onAnimationEnded: r.onAnimationEnded,
                                            }),
                                        ),
                                ),
                                a().createElement('div', { className: x.background }),
                            )
                        );
                    }),
                    Ie = ['resId'],
                    Oe = (0, n.memo)((e) => {
                        let t = e.resId,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ie);
                        const r = (0, n.useMemo)(() => ({ rootId: t }), [t]);
                        return a().createElement(f, { options: r }, a().createElement(ke, u));
                    });
            },
            883: (e, t, u) => {
                'use strict';
                u.d(t, { E: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7613),
                    s = u(7727),
                    i = u(6179),
                    o = u.n(i);
                const l = R.strings.mt_birthday.mail.animationControls,
                    c = (0, i.memo)(({ isActiveAnimation: e, onToggle: t }) => {
                        const u = a()(
                            'AnimationControls_base_87',
                            !e && 'AnimationControls_base__disabledAnimadion_e5',
                        );
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(
                                'div',
                                {
                                    className: 'AnimationControls_hoverContainer_fa',
                                    onClick: () => {
                                        (t(), s.$.playClick());
                                    },
                                    onMouseEnter: () => {
                                        s.$.playHighlight();
                                    },
                                },
                                o().createElement('div', { className: 'AnimationControls_icon_12' }),
                                o().createElement(r.ZP, {
                                    className: 'AnimationControls_text_ff',
                                    text: e ? l.animationOffText() : l.animationOnText(),
                                }),
                            ),
                        );
                    });
            },
            4042: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => s });
                var n = u(7613),
                    a = u(6179),
                    r = u.n(a);
                const s = (0, a.memo)(({ title: e, subTitle: t }) =>
                    r().createElement(
                        'div',
                        { className: 'ErrorScreen_base_31' },
                        r().createElement('div', { className: 'ErrorScreen_icon_d1' }),
                        r().createElement(n.ZP, { text: e, format: { classMix: 'ErrorScreen_title_a3' } }),
                        r().createElement(n.ZP, { text: t, format: { classMix: 'ErrorScreen_subTitle_6d' } }),
                    ),
                );
            },
            9417: (e, t, u) => {
                'use strict';
                u.d(t, { h: () => s });
                var n = u(7613),
                    a = u(6179),
                    r = u.n(a);
                const s = (0, a.memo)(({ title: e, subTitle: t }) =>
                    r().createElement(
                        'div',
                        { className: 'Header_base_f9' },
                        r().createElement(n.ZP, { format: { classMix: 'Header_headerTitle_c9' }, text: e }),
                        r().createElement(n.ZP, { format: { classMix: 'Header_headerDescription_c5' }, text: t }),
                    ),
                );
            },
            6128: (e, t, u) => {
                'use strict';
                u.d(t, { ko: () => O, uu: () => I, uH: () => k });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(9960),
                    o = u(3724),
                    l = u(6840);
                const c = {
                        base: 'ProgressBarBlink_base_22',
                        base__medium: 'ProgressBarBlink_base__medium_0a',
                        base__small: 'ProgressBarBlink_base__small_b5',
                    },
                    m = ({ size: e }) => {
                        const t = a()(c.base, c[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    d = {
                        base: 'ProgressLineImpose_base_12',
                        base__disabled: 'ProgressLineImpose_base__disabled_82',
                        base__finished: 'ProgressLineImpose_base__finished_0f',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_e3',
                        pattern: 'ProgressLineImpose_pattern_0c',
                        base__small: 'ProgressLineImpose_base__small_7a',
                        gradient: 'ProgressLineImpose_gradient_f7',
                        glow: 'ProgressLineImpose_glow_b5',
                        glow__left: 'ProgressLineImpose_glow__left_4a',
                    },
                    _ = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = a()(
                                    d.base,
                                    d[`base__${e}`],
                                    u && d.base__disabled,
                                    r && d.base__finished,
                                    i && d.base__withoutBounce,
                                ),
                                l = !u && !r;
                            return s().createElement(
                                'div',
                                { className: o, style: n, ref: t },
                                s().createElement('div', { className: d.pattern }),
                                s().createElement('div', { className: d.gradient }),
                                l && s().createElement(m, { size: e }),
                            );
                        },
                    );
                var E = u(122);
                let g, p;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(g || (g = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(p || (p = {})));
                const A = (e) => (e ? { left: 0 } : { right: 0 }),
                    h = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    b = (e) => ({ transitionDuration: `${e}ms` }),
                    f = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: i,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const _ = o < n,
                                p = (0, r.useState)(g.Idle),
                                f = p[0],
                                F = p[1],
                                C = f === g.End,
                                D = f === g.Idle,
                                v = f === g.Grow,
                                B = f === g.Shrink,
                                w = (0, r.useCallback)(
                                    (e) => {
                                        (F(e), c && c(e));
                                    },
                                    [c],
                                ),
                                S = (0, r.useCallback)(
                                    (e, t) =>
                                        (0, E.F)(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return D
                                        ? S(g.Grow, t)
                                        : v
                                          ? S(g.Shrink, e)
                                          : B
                                            ? S(g.End, e)
                                            : void (C && l && l());
                            }, [S, u, C, v, D, B, l, t, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, b(e), A(_)), [_, e]),
                                x = (0, r.useMemo)(() => Object.assign({ width: '0%' }, b(e), A(_)), [_, e]),
                                T = (0, r.useMemo)(() => Object.assign({ width: '0%' }, h(_, n), b(e)), [n, _, e]),
                                N = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, h(_, n), b(e)),
                                    [n, _, o, e],
                                );
                            if (C) return null;
                            const P = a()(
                                'ProgressBarDeltaGrow_base_2a',
                                d,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_fd',
                            );
                            return s().createElement(
                                'div',
                                { style: D ? T : N, className: P },
                                s().createElement(
                                    'div',
                                    { style: B ? x : y, className: 'ProgressBarDeltaGrow_glow_37' },
                                    s().createElement(m, { size: i }),
                                ),
                            );
                        },
                    ),
                    F = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, r.useState)(!1),
                                E = d[0],
                                p = d[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        (e === g.Shrink && p(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                h = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                b = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: t,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: E ? b : h,
                                }),
                                u >= 0 &&
                                    s().createElement(f, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    C = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                d = (0, r.useState)(p.Idle),
                                _ = d[0],
                                g = d[1],
                                A = _ === p.In,
                                h = _ === p.End,
                                b = _ === p.Idle,
                                f = (0, r.useCallback)(
                                    (e) => {
                                        (g(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (b && !u) {
                                    const e = t;
                                    return (0, E.F)(() => {
                                        f(p.In);
                                    }, e);
                                }
                            }, [f, u, b, t]),
                                (0, r.useEffect)(() => {
                                    if (A) {
                                        const u = e + t;
                                        return (0, E.F)(() => {
                                            (o && o(), f(p.End));
                                        }, u);
                                    }
                                }, [f, A, o, t, e]));
                            const F = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                C = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return h
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_81', style: D },
                                      s().createElement(
                                          'div',
                                          { style: b ? F : C, className: 'ProgressBarDeltaSimple_delta_c8' },
                                          s().createElement(m, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    D = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: t,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(C, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    v = ['onComplete', 'onEndAnimation'];
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                const w = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, v);
                        const a = (0, r.useState)(!1),
                            i = a[0],
                            o = a[1],
                            c = (0, r.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== i && o(e), e && t && t(), u && u());
                            }, [i, t, u, n.to]);
                        switch (n.animationSettings.type) {
                            case l.r.Simple:
                                return s().createElement(
                                    D,
                                    B({}, n, { onEndAnimation: c, isComplete: !n.isNeverComplete && i }),
                                );
                            case l.r.Growing:
                                return s().createElement(
                                    F,
                                    B({}, n, { onEndAnimation: c, isComplete: !n.isNeverComplete && i }),
                                );
                            default:
                                return null;
                        }
                    }),
                    S = ({ size: e, value: t, lineRef: u, disabled: n, onComplete: a, isNeverComplete: i }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && a && a();
                            }, [l, a]),
                            s().createElement(_, {
                                size: e,
                                disabled: n,
                                baseStyles: o,
                                isComplete: !i && l,
                                lineRef: u,
                            })
                        );
                    },
                    y = ['onEndAnimation'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const T = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, y);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            ((n.current.from = void 0), t && t());
                        }, [t]),
                        i = 'number' == typeof n.current.from ? n.current.from : u.from;
                    return (
                        (n.current.from = i),
                        s().createElement(w, x({}, u, { onEndAnimation: a, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const P = (0, r.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: n,
                        deltaFrom: a,
                        animationSettings: r,
                        onEndAnimation: i,
                        onChangeAnimationState: o,
                        onComplete: l,
                        isNeverComplete: c,
                    }) => {
                        if (a === t)
                            return s().createElement(S, {
                                key: `${a}-${t}`,
                                size: e,
                                value: t,
                                lineRef: u,
                                disabled: n,
                                onComplete: l,
                                isNeverComplete: c,
                            });
                        const m = {
                            from: a,
                            to: t,
                            size: e,
                            lineRef: u,
                            disabled: n,
                            animationSettings: r,
                            onComplete: l,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            isNeverComplete: c,
                        };
                        return r.withStack ? s().createElement(T, m) : s().createElement(w, N({ key: `${a}-${t}` }, m));
                    },
                );
                var L = u(4553),
                    R = u(7515);
                const M = (e, t, u) => ('number' == typeof u ? ((0, R.u)(0, t, u) / t) * 100 : e),
                    k = L.Gh,
                    I = {
                        freezed: !1,
                        withStack: !1,
                        type: l.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    O = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = k,
                            size: u = l.$.Default,
                            animationSettings: n = I,
                            disabled: c = !1,
                            withoutBackground: m = !1,
                            progressBarBackgroundClassMix: d,
                            value: _,
                            deltaFrom: E,
                            lineRef: g,
                            onChangeAnimationState: p,
                            onEndAnimation: A,
                            onComplete: h,
                            isNeverComplete: b,
                        }) => {
                            const f = ((e, t, u) =>
                                (0, r.useMemo)(() => {
                                    const n = ((0, R.u)(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: M(n, t, u) };
                                }, [u, t, e]))(_, e, E);
                            return s().createElement(
                                'div',
                                { className: a()(i.Z.base, i.Z[`base__${u}`]), style: (0, L.VQ)(t) },
                                !m && s().createElement(o.J, { size: u, classMix: d }),
                                s().createElement(P, {
                                    size: u,
                                    lineRef: g,
                                    disabled: c,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: A,
                                    onChangeAnimationState: p,
                                    onComplete: h,
                                    isNeverComplete: b,
                                }),
                            );
                        },
                    );
            },
            3724: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(9960),
                    o = u(6840);
                const l = ({ size: e = o.$.Default, classMix: t }) =>
                    s().createElement('div', { className: a()(i.Z.background, i.Z[`background__${e}`], t) });
            },
            4553: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => a, VQ: () => n });
                const n = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    a = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    };
            },
            6840: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { $: () => n, r: () => a }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(a || (a = {})));
            },
            7075: (e, t, u) => {
                'use strict';
                u.d(t, { R: () => c });
                var n = u(280),
                    a = u(6179),
                    r = u.n(a);
                const s = {
                        blackReal: 'SplittedTextWithColorTags_blackReal_79',
                        whiteReal: 'SplittedTextWithColorTags_whiteReal_d8',
                        white: 'SplittedTextWithColorTags_white_6a',
                        whiteOrange: 'SplittedTextWithColorTags_whiteOrange_64',
                        whiteSpanish: 'SplittedTextWithColorTags_whiteSpanish_b7',
                        par: 'SplittedTextWithColorTags_par_20',
                        parSecondary: 'SplittedTextWithColorTags_parSecondary_4d',
                        parTertiary: 'SplittedTextWithColorTags_parTertiary_4a',
                        red: 'SplittedTextWithColorTags_red_66',
                        redDark: 'SplittedTextWithColorTags_redDark_21',
                        yellow: 'SplittedTextWithColorTags_yellow_97',
                        orange: 'SplittedTextWithColorTags_orange_e2',
                        cream: 'SplittedTextWithColorTags_cream_cf',
                        brown: 'SplittedTextWithColorTags_brown_d5',
                        greenBright: 'SplittedTextWithColorTags_greenBright_e1',
                        green: 'SplittedTextWithColorTags_green_1a',
                        greenDark: 'SplittedTextWithColorTags_greenDark_5d',
                        blueBooster: 'SplittedTextWithColorTags_blueBooster_0c',
                        blueTeamkiller: 'SplittedTextWithColorTags_blueTeamkiller_3a',
                        cred: 'SplittedTextWithColorTags_cred_4d',
                        gold: 'SplittedTextWithColorTags_gold_0e',
                        bond: 'SplittedTextWithColorTags_bond_5a',
                        prom: 'SplittedTextWithColorTags_prom_9e',
                    },
                    i = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    o = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, a.memo)(({ text: e, binding: t, classMix: u }) => {
                        const c = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            m = (0, a.useMemo)(() => t || {}, [t]);
                        let d = i.exec(e),
                            _ = e,
                            E = 0;
                        for (; d;) {
                            const u = d[0],
                                a = o.exec(u),
                                g = l.exec(u),
                                p = d[1].split(' ');
                            if (a && g) {
                                const e = a[0],
                                    i = e + E++ + e;
                                ((_ = _.replace(u, `%(${i})`)),
                                    (m[i] = s[e]
                                        ? p.map((u, a) =>
                                              r().createElement(n.z, {
                                                  key: `${u}_${a}`,
                                                  text: `${u}${a < p.length - 1 ? ' ' : ''}`,
                                                  binding: t,
                                                  classMix: s[e],
                                              }),
                                          )
                                        : p.map((u, a) =>
                                              r().createElement(
                                                  'div',
                                                  { style: c(e), key: `${u}_${a}` },
                                                  r().createElement(n.z, {
                                                      text: `${u}${a < p.length - 1 ? ' ' : ''}`,
                                                      binding: t,
                                                  }),
                                              ),
                                          )));
                            }
                            d = i.exec(e);
                        }
                        return r().createElement(n.z, { text: _, classMix: u, binding: m });
                    });
            },
            4538: (e, t, u) => {
                'use strict';
                u.d(t, {
                    FE: () => p,
                    OY: () => d,
                    Xg: () => m,
                    Zr: () => b,
                    gu: () => h,
                    hy: () => C,
                    lW: () => c,
                    sq: () => A,
                    wO: () => g,
                });
                var n = u(126),
                    a = u(2862),
                    r = u(729),
                    s = u(5415),
                    i = u(3649),
                    o = u(9990);
                u(8933);
                const l = (e, t = a.h2.Small) => {
                        const u = (0, i.BN)(e.vehicleName || '');
                        if (e.name === a.E4.Vehicles)
                            switch (t) {
                                case a.h2.Mini:
                                case a.h2.Small:
                                case a.h2.S48x48:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                case a.h2.Big:
                                case a.h2.S80x80:
                                    return e.isRent
                                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                        : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                case a.h2.S128x100:
                                case a.h2.S180x135:
                                    return `R.images.gui.maps.shop.vehicles.c_180x135.${u}`;
                                case a.h2.S232x174:
                                case a.h2.S296x222:
                                    return `R.images.gui.maps.shop.vehicles.c_360x270.${u}`;
                                case a.h2.S400x300:
                                case a.h2.S600x450:
                                    return `R.images.gui.maps.shop.vehicles.c_600x450.${u}`;
                                default:
                                    return (
                                        console.error('Unknown vehicle image size', t, e.vehicleName),
                                        'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                    );
                            }
                        if (e.name === a.E4.TmanToken)
                            switch (t) {
                                case a.h2.Mini:
                                case a.h2.Small:
                                case a.h2.S48x48:
                                case a.h2.Big:
                                case a.h2.S80x80:
                                    return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                case a.h2.S128x100:
                                case a.h2.S180x135:
                                case a.h2.S232x174:
                                    return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                case a.h2.S296x222:
                                    return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                case a.h2.S400x300:
                                    return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                case a.h2.S600x450:
                                    return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                default:
                                    return (
                                        console.error('Unknown image size', t),
                                        'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                    );
                            }
                        if (e.name === a.E4.CollectionItem)
                            switch (t) {
                                case a.h2.Mini:
                                case a.h2.Small:
                                case a.h2.S48x48:
                                    return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                case a.h2.Big:
                                case a.h2.S80x80:
                                    return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                case a.h2.S128x100:
                                case a.h2.S180x135:
                                case a.h2.S232x174:
                                    return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                case a.h2.S296x222:
                                    return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                case a.h2.S400x300:
                                    return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                case a.h2.S600x450:
                                    return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                default:
                                    console.error('Unknown image size', t);
                            }
                        if (e.name === a.E4.StyleProgress)
                            switch (t) {
                                case a.h2.Small:
                                case a.h2.Big:
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.progressionStyle`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                            }
                        return (0, r.ry)(e, t);
                    },
                    c = (e) => ({
                        name: e.name,
                        image: (t) => l(e, t),
                        value: e.value,
                        valueType: (0, r.p3)(e.name),
                        label: e.label,
                        special: e.overlayType,
                        tooltipArgs: (0, r.pI)({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                        type: e.type,
                        vehicleNation: e.nationTag,
                        vehicleLvl: e.level,
                        vehicleName: e.label,
                        isElite: e.isElite,
                        isRent: e.isRent,
                        rentBattles: e.rentBattles,
                        rentDays: e.rentDays,
                        isCompensation: e.isCompensation,
                        compensatedBonus: e.compensatedBonus,
                        icon: e.icon,
                    });
                let m;
                !(function (e) {
                    ((e.Stamp = 'stamps'), (e.Presents = 'presents'), (e.Reward = 'rewards'));
                })(m || (m = {}));
                const d = Object.keys(m);
                let _, E, g;
                (s.cJ.ExtraSmall,
                    s.cJ.Small,
                    s.cJ.Medium,
                    s.cJ.Large,
                    s.cJ.ExtraLarge,
                    (function (e) {
                        ((e.ASC = 'asc'), (e.DESC = 'desc'));
                    })(_ || (_ = {})),
                    (function (e) {
                        ((e.Player = 'userName'),
                            (e.Vehicle = 'vehicleShortName'),
                            (e.Damage = 'totalDamage'),
                            (e.Kills = 'kills'),
                            (e.Experience = 'xp'),
                            (e.Gift = 'gift'));
                    })(E || (E = {})),
                    Object.values(E),
                    E.Player,
                    (function (e) {
                        ((e.PLAY = 'play'), (e.STOP = 'stop'));
                    })(g || (g = {})));
                const p = {
                        width: 640,
                        height: 400,
                        frameCount: 35,
                        chunk: { count: 1, rows: 6, columns: 6 },
                        getChunkPath: () => 'R.images.mt_birthday.gui.maps.icons.tankMail.boxCanvas',
                    },
                    A = (0, n.q)(p),
                    h = (e) =>
                        Object.assign({}, e, {
                            rewards: e.bonuses
                                .filter((e) => e.label.length > 0 || e.value.length > 0)
                                .map((e) =>
                                    ((e) => ({
                                        name: e.name,
                                        image: l(e, a.h2.Big),
                                        value: e.value,
                                        valueType: (0, r.p3)(e.name),
                                        bonusType: (0, r.p3)(e.name),
                                        special: e.overlayType,
                                        tooltipArgs: (0, r.pI)(
                                            { tooltipId: e.tooltipId, tooltipType: 'mergedReward' },
                                            Number.parseInt(e.tooltipContentId),
                                        ),
                                    }))(e),
                                ),
                        }),
                    b = (e, t, u, n) => {
                        return e
                            ? [f('general', n), F.general]
                            : t
                              ? [f(String(o.T[u]), n), null != (a = F[u]) ? a : 0]
                              : ['', 0];
                        var a;
                    },
                    f = (e, t) => (e ? `${e}_${t + 1}` : ''),
                    F = { general: 1, [o.T.mail]: 2, [o.T.quests]: 2, [o.T.gold_wagon]: 2, [o.T.ticket_exchange]: 2 };
                let C;
                !(function (e) {
                    ((e.general_1 = 'mt_bday_2026_onboard_intro'),
                        (e.mail_1 = 'mt_bday_2026_onboard_post_1'),
                        (e.mail_2 = 'mt_bday_2026_onboard_post_2'),
                        (e.quests_1 = 'mt_bday_2026_onboard_quest_giver_1'),
                        (e.quests_2 = 'mt_bday_2026_onboard_quest_giver_2'),
                        (e.gold_wagon_1 = 'mt_bday_2026_onboard_wagon_1'),
                        (e.gold_wagon_2 = 'mt_bday_2026_onboard_wagon_2'),
                        (e.ticket_exchange_1 = 'mt_bday_2026_onboard_tickets_1'),
                        (e.ticket_exchange_2 = 'mt_bday_2026_onboard_tickets_2'));
                })(C || (C = {}));
            },
            9990: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { T: () => n }),
                    (function (e) {
                        ((e[(e.mail = 0)] = 'mail'),
                            (e[(e.quests = 1)] = 'quests'),
                            (e[(e.rewards = 2)] = 'rewards'),
                            (e[(e.gold_wagon = 3)] = 'gold_wagon'),
                            (e[(e.ticket_exchange = 4)] = 'ticket_exchange'),
                            (e[(e.about = 5)] = 'about'));
                    })(n || (n = {})));
            },
            5026: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            1609: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'Reward_base_ea',
                    base__s48x48: 'Reward_base__s48x48_46',
                    base__small: 'Reward_base__small_c0',
                    base__s80x80: 'Reward_base__s80x80_ce',
                    base__big: 'Reward_base__big_e5',
                    base__s128x100: 'Reward_base__s128x100_c3',
                    base__s180x135: 'Reward_base__s180x135_7c',
                    base__s232x174: 'Reward_base__s232x174_67',
                    base__s296x222: 'Reward_base__s296x222_78',
                    base__s400x300: 'Reward_base__s400x300_07',
                    base__s600x450: 'Reward_base__s600x450_f8',
                    tooltipWrapper: 'Reward_tooltipWrapper_b5',
                    icon: 'Reward_icon_df',
                    overlay: 'Reward_overlay_68',
                    highlight: 'Reward_highlight_36',
                    image: 'Reward_image_89',
                    info: 'Reward_info_72',
                    info__multi: 'Reward_info__multi_63',
                    info__credits: 'Reward_info__credits_ef',
                    info__gold: 'Reward_info__gold_36',
                    info__crystal: 'Reward_info__crystal_36',
                    info__premiumTank: 'Reward_info__premiumTank_d3',
                    timer: 'Reward_timer_d3',
                };
            },
            372: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
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
            3393: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
                };
            },
            9960: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ProgressBar_base_e9',
                    base__medium: 'ProgressBar_base__medium_f7',
                    base__small: 'ProgressBar_base__small_75',
                    background: 'ProgressBar_background_12',
                    background__medium: 'ProgressBar_background__medium_c7',
                    background__small: 'ProgressBar_background__small_d4',
                    lineWrapper: 'ProgressBar_lineWrapper_2a',
                };
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
        (__webpack_require__.j = 255),
        (() => {
            var e = { 255: 0, 552: 0, 948: 0, 593: 0, 813: 0, 419: 0, 849: 0, 610: 0 };
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
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9063));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
