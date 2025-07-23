(() => {
    var __webpack_modules__ = {
            3779: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => A });
                var n = u(6483),
                    r = u.n(n),
                    a = u(9887),
                    s = u.n(a),
                    o = u(3377),
                    i = u(6179),
                    l = u.n(i),
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
                    A = (0, o.ZP)((e) => {
                        let t = e.className,
                            u = e.width,
                            n = e.height,
                            a = e.m,
                            s = e.mt,
                            o = void 0 === s ? a : s,
                            A = e.mr,
                            p = void 0 === A ? a : A,
                            F = e.mb,
                            h = void 0 === F ? a : F,
                            D = e.ml,
                            C = void 0 === D ? a : D,
                            f = e.column,
                            B = e.row,
                            v = e.flexDirection,
                            b = void 0 === v ? (f ? 'column' : B && 'row') || void 0 : v,
                            w = e.flexStart,
                            S = e.center,
                            y = e.flexEnd,
                            x = e.spaceBetween,
                            P = e.spaceAround,
                            T = e.justifyContent,
                            L =
                                void 0 === T
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (y && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (P && 'space-around') ||
                                      void 0
                                    : T,
                            R = e.alignItems,
                            N = void 0 === R ? (w ? 'flex-start' : S && 'center') || (y && 'flex-end') || void 0 : R,
                            M = e.alignSelf,
                            k = e.wrap,
                            O = e.flexWrap,
                            I = void 0 === O ? (k ? 'wrap' : void 0) : O,
                            H = e.grow,
                            W = e.shrink,
                            $ = e.flex,
                            G = void 0 === $ ? (H || W ? `${H ? 1 : 0} ${W ? 1 : 0} auto` : void 0) : $,
                            U = e.style,
                            z = e.children,
                            j = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, m);
                        const Z = (0, i.useMemo)(() => {
                                const e = { mt: o, mr: p, mb: h, ml: C },
                                    t = ((e) =>
                                        E.reduce((t, u) => {
                                            const n = e[u];
                                            return n && 'number' != typeof n ? t.concat(_[!0 === n ? 'MD' : n][u]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        E.reduce((t, u) => {
                                            const n = e[u];
                                            return ('number' == typeof n && (t[g[u]] = n + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, U, r, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: G,
                                        alignSelf: M,
                                        display: b || N ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: I,
                                        justifyContent: L,
                                        alignItems: N,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, n, o, p, h, C, U, G, M, b, I, L, N]),
                            q = Z.computedStyle,
                            X = Z.computedClassNames;
                        return l().createElement('div', d({ className: r()(c.Z.base, ...X, t), style: q }, j), z);
                    });
            },
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7727),
                    s = u(6179),
                    o = u.n(s),
                    i = u(6880),
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
                    onMouseDown: A,
                    onMouseUp: p,
                    onMouseLeave: F,
                    onClick: h,
                }) => {
                    const D = (0, s.useRef)(null),
                        C = (0, s.useState)(u),
                        f = C[0],
                        B = C[1],
                        v = (0, s.useState)(!1),
                        b = v[0],
                        w = v[1],
                        S = (0, s.useState)(!1),
                        y = S[0],
                        x = S[1],
                        P = (0, s.useCallback)(() => {
                            c || (D.current && (D.current.focus(), B(!0)));
                        }, [c]),
                        T = (0, s.useCallback)(
                            (e) => {
                                f && null !== D.current && !D.current.contains(e.target) && B(!1);
                            },
                            [f],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (h && h(e));
                            },
                            [c, h],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, a.G)(d), E && E(e), x(!0));
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
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, a.G)(_), A && A(e), u && P(), w(!0));
                            },
                            [c, _, A, P, u],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (F && F(e), w(!1));
                            },
                            [c, F],
                        ),
                        H = r()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: f,
                                [i.Z.base__highlightActive]: b,
                                [i.Z.base__firstHover]: y,
                            },
                            m,
                        ),
                        W = r()(i.Z.state, i.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, s.useEffect)(() => {
                            B(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: D,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: M,
                                onMouseUp: k,
                                onMouseDown: O,
                                onMouseLeave: I,
                                onClick: L,
                            },
                            n !== l.L.ghost &&
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
                const m = (0, s.memo)(c);
            },
            2106: (e, t, u) => {
                'use strict';
                let n, r;
                (u.d(t, { L: () => n, q: () => r }),
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
                    })(r || (r = {})));
            },
            126: (e, t, u) => {
                'use strict';
                function n(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const r = n % u,
                            a = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: a, y: s };
                    };
                }
                u.d(t, { q: () => n });
            },
            2372: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => s });
                var n = u(6179),
                    r = u.n(n),
                    a = u(4179);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const t = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    s = u.n(a),
                    o = u(3649),
                    i = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: a = o.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: s()(i.Z.base, u), key: `${t}-${l}` },
                                      (0, o.Uw)(t, a, e).map((e, t) =>
                                          r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => m });
                var n = u(3138),
                    r = u(6179),
                    a = u(1043),
                    s = u(5262);
                const o = n.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, a.j)),
                    m = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6536),
                    s = u(3495),
                    o = u(1043),
                    i = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(s.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        m = u[1],
                        d = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            m(Object.assign({ width: u, height: n }, (0, i.T)(u, n, o.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    r = u(7382),
                    a = u(3495);
                const s = ['children'],
                    o = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, s);
                        const o = (0, n.useContext)(a.Y),
                            i = o.extraLarge,
                            l = o.large,
                            c = o.medium,
                            m = o.small,
                            d = o.extraSmall,
                            _ = o.extraLargeWidth,
                            E = o.largeWidth,
                            g = o.mediumWidth,
                            A = o.smallWidth,
                            p = o.extraSmallWidth,
                            F = o.extraLargeHeight,
                            h = o.largeHeight,
                            D = o.mediumHeight,
                            C = o.smallHeight,
                            f = o.extraSmallHeight,
                            B = { extraLarge: F, large: h, medium: D, small: C, extraSmall: f };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && i) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && m) return t;
                            if (u.extraSmall && d) return t;
                        } else {
                            if (u.extraLargeWidth && _) return (0, r.H)(t, u, B);
                            if (u.largeWidth && E) return (0, r.H)(t, u, B);
                            if (u.mediumWidth && g) return (0, r.H)(t, u, B);
                            if (u.smallWidth && A) return (0, r.H)(t, u, B);
                            if (u.extraSmallWidth && p) return (0, r.H)(t, u, B);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && F) return t;
                                if (u.largeHeight && h) return t;
                                if (u.mediumHeight && D) return t;
                                if (u.smallHeight && C) return t;
                                if (u.extraSmallHeight && f) return t;
                            }
                        }
                        return null;
                    };
                ((o.defaultProps = {
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
                    (0, n.memo)(o));
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
                (u.d(t, { YN: () => r.Y, ZN: () => n.Z }), u(6010));
                var n = u(1039),
                    r = u(3495);
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
                function r(e, t, u) {
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => r }),
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
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a),
                    o = u(3415),
                    i = u(2862),
                    l = u(729),
                    c = u(1609);
                const m = ({
                    name: e,
                    image: t,
                    isPeriodic: u = !1,
                    size: n = i.h2.Big,
                    special: a,
                    value: m,
                    valueType: d,
                    style: _,
                    className: E,
                    classNames: g,
                    tooltipArgs: A,
                    periodicIconTooltipArgs: p,
                }) => {
                    const F = (0, l.L_)(a),
                        h = (0, l.i2)(a),
                        D = (0, l.m9)(m, d);
                    return s().createElement(
                        'div',
                        { className: r()(c.Z.base, c.Z[`base__${n}`], E), style: _ },
                        s().createElement(
                            o.l,
                            { tooltipArgs: A, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.image, null == g ? void 0 : g.image) },
                                    F &&
                                        s().createElement('div', {
                                            className: r()(c.Z.highlight, null == g ? void 0 : g.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${F}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        s().createElement('div', {
                                            className: r()(c.Z.icon, null == g ? void 0 : g.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    h &&
                                        s().createElement('div', {
                                            className: r()(c.Z.overlay, null == g ? void 0 : g.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${h}_overlay)`,
                                            },
                                        }),
                                ),
                                D &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                d === i.$h.MULTI && c.Z.info__multi,
                                                null == g ? void 0 : g.info,
                                            ),
                                        },
                                        D,
                                    ),
                            ),
                        ),
                        u &&
                            s().createElement(
                                o.l,
                                { tooltipArgs: p },
                                s().createElement('div', {
                                    className: r()(c.Z.timer, null == g ? void 0 : g.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, t, u) => {
                'use strict';
                let n, r, a, s, o, i, l;
                (u.d(t, { $h: () => s, A2: () => i, E4: () => n, h2: () => a, kK: () => o, sh: () => l }),
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
                            (e.GoldenTicket = 'birthday2025_golden_ticket'),
                            (e.PostStamp = 'giftsystem_4_stamp'),
                            (e.Quests = 'quests'));
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
                    })(r || (r = {})),
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
                    })(a || (a = {})),
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
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
                    })(l || (l = {})));
            },
            729: (e, t, u) => {
                'use strict';
                u.d(t, { L_: () => A, i2: () => p, m9: () => F, p3: () => m, pI: () => g, ry: () => E });
                var n = u(2372),
                    r = u(6179),
                    a = u.n(r),
                    s = u(2862);
                const o = [
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
                        s.E4.GoldenTicket,
                        s.E4.PostStamp,
                    ],
                    i = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    m = (e) =>
                        o.includes(e)
                            ? s.$h.MULTI
                            : i.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    d = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    E = (e, t = s.h2.Small) => {
                        const u = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            o = e.item,
                            i = e.dogTagType,
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${a}`;
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
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${a}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const n = d[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            a = r.$dyn(u);
                                        return a ? `${a}` : `${r.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
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
                                })(t)}.${a}`;
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
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    g = (e, t, u) => {
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
                    p = (e) => {
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
                    F = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case s.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(n.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7613: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => B });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3779),
                    s = u(280),
                    o = u(3532),
                    i = u.n(o),
                    l = u(9887),
                    c = u.n(l),
                    m = u(3377),
                    d = u(6179),
                    _ = u.n(d),
                    E = u(3393);
                const g = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const p = Object.keys(i()),
                    F = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    h = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    D = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    C =
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
                            'heading-H56': F,
                            'heading-H36': F,
                            'heading-H28': h,
                            'heading-H24': h,
                            'heading-H24R': h,
                            'heading-H22': h,
                            'heading-H20R': h,
                            'heading-H18': h,
                            'heading-H15': D,
                            'heading-H14': D,
                            'paragraph-P24': h,
                            'paragraph-P18': h,
                            'paragraph-P16': h,
                            'paragraph-P14': D,
                            'paragraph-P12': D,
                            'paragraph-P10': D,
                        }),
                    f =
                        (Object.keys(C),
                        (e) =>
                            e
                                ? ((e) => p.includes(e))(e)
                                    ? { colorClassName: E.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    B = (0, m.ZP)((e) => {
                        let t = e.text,
                            u = e.variant,
                            n = e.className,
                            o = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            m = e.mr,
                            p = void 0 === m ? i : m,
                            F = e.mb,
                            h = void 0 === F ? i : F,
                            D = e.ml,
                            B = void 0 === D ? i : D,
                            v = e.style,
                            b = e.format,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, g);
                        const S = (0, d.useMemo)(() => {
                                const e = f(o),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    n = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, v, n), colorClassName: t };
                            }, [v, o]),
                            y = S.computedStyle,
                            x = S.colorClassName;
                        return _().createElement(
                            a.ZP,
                            A(
                                {
                                    className: r()(E.Z.base, u && E.Z[u], x, n),
                                    style: y,
                                    mt: !0 === c ? C[u || 'paragraph-P16'].mt : c,
                                    mr: !0 === p ? C[u || 'paragraph-P16'].mr : p,
                                    mb: !0 === h ? C[u || 'paragraph-P16'].mb : h,
                                    ml: !0 === B ? C[u || 'paragraph-P16'].ml : B,
                                },
                                w,
                            ),
                            void 0 !== b ? _().createElement(s.z, A({}, b, { text: t })) : t,
                        );
                    });
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(6179),
                    r = u.n(n),
                    a = u(2056);
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
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        a.u,
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
            3415: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(7078),
                    s = u(6373),
                    o = u(2056);
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
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? r().createElement(o.u, i({}, t, { contentId: l || m }), n)
                        : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    r = u(6179),
                    a = u.n(r);
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
                            m = e.alert,
                            d = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, s);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, u, l, c, d]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
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
                    r = u(4179),
                    a = u(6179);
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
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            p = e.decoratorId,
                            F = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            D = void 0 === h || h,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            B = e.onShow,
                            v = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => f || (0, n.F)().resId, [f]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, F, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    B && B(),
                                    (w.current.isVisible = !0));
                            }, [u, F, r, S, B]),
                            x = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, F, { on: !1 }, S),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [u, F, S, v]),
                            P = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', P, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', P, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && x();
                            }, [D, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            D
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                          l && l(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (x(), null == c || c(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === A && x(), null == d || d(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === A && x(), null == m || m(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : t
                        );
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = a, context: s = 'model' } = {}) {
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
                            r = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const a = 'string' == typeof r ? `${s}.${r}` : s,
                                i = n.O.view.addModelObserver(a, t, !0);
                            return (o.set(i, u), e && u(l(r)), i);
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
                                                    if ('string' == typeof e) return r(e, t);
                                                    var u = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? r(e, t)
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
                                    })(o.keys());
                                !(e = u()).done;

                            )
                                i(e.value, t);
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    s = u.n(a),
                    o = u(8246);
                const i = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: m }) {
                            const d = (0, a.useRef)([]),
                                _ = (u, a, s) => {
                                    var i;
                                    const l = o.U(a),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
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
                                                    const a = null != t ? t : m(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : m(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = m(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            s = Object.entries(a),
                                                            o = s.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
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
                                E = (0, a.useRef)(!1),
                                g = (0, a.useState)(i),
                                A = g[0],
                                p = g[1],
                                F = (0, a.useState)(() => _(i, l, m)),
                                h = F[0],
                                D = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? D(_(A, l, m)) : (E.current = !0);
                                }, [m, A, l]),
                                (0, a.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (h.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [h],
                                ),
                                s().createElement(u.Provider, { value: h }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t), u.d(t, { mouse: () => o, onResize: () => a }));
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${t}`,
                                            o = s[t]((e) => u([e, 'outside']));
                                        function i(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
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
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
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
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => A,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => D,
                        pxToRem: () => p,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    }));
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
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
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function C() {
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
                const b = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => a });
                const n = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                function r() {
                    return !1;
                }
                (u.d(t, { ZT: () => n, jv: () => r }), console.log);
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
                    r = u(6179),
                    a = u.n(r);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    o = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    i = [n.cJ.ExtraLarge, n.cJ.Large, n.cJ.Medium, n.cJ.Small, n.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((u, n) => {
                            if (n in u) return u;
                            if (o(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in u) return u;
                                const a = i.indexOf(t),
                                    o = (-1 !== a ? s.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = o ? e[o] : void 0;
                                return ((u[r] = void 0 !== l ? l : e[r]), u);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => s.some((u) => void 0 !== t[`${e}_${u}`]))(n, e) ||
                                    (u[n] = r),
                                u
                            );
                        }, {}),
                    c = (e, t = l) => {
                        const u = (
                            (e, t = l) =>
                            (u) => {
                                const s = (0, n.GS)().mediaSize,
                                    o = (0, r.useMemo)(() => t(u, s), [u, s]);
                                return a().createElement(e, o);
                            }
                        )(e, t);
                        return a().memo((t) =>
                            Object.keys(t).some((e) => o(e) && void 0 !== t[e])
                                ? a().createElement(u, t)
                                : a().createElement(e, t),
                        );
                    };
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => r });
                var n = u(6179);
                const r = (e, t = []) => {
                    const u = (0, n.useRef)(),
                        r = (0, n.useCallback)((...t) => {
                            (u.current && u.current(), (u.current = e(...t)));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                u.current && u.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var n = u(6179),
                    r = u(7739),
                    a = u(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
                        a = ((e) => {
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            9630: (e, t, u) => {
                'use strict';
                u.d(t, { a: () => a, t: () => s });
                var n = u(1856),
                    r = u(6179);
                function a(e, t) {
                    (0, r.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        t,
                    );
                }
                function s(e, t) {
                    (0, r.useEffect)(() => {
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
            5521: (e, t, u) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {})));
            },
            5175: (e, t, u) => {
                'use strict';
                u.d(t, { c: () => a });
                var n = u(9480);
                const r = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? n.UI(e, (e) => ('object' == typeof e ? r(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? r(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? r(t) : t]),
                                    )
                            : e,
                    a = (e) => r(e);
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                u.d(t, { UI: () => n });
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => s });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) =>
                        a
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = r.length - 1; u >= 0; u--)
                                      for (; e >= r[u]; ) ((t += n[u]), (e -= r[u]));
                                  return t;
                              })(e);
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { $: () => r, G: () => n });
                const r = {
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
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                (u.d(t, { BN: () => r, Uw: () => m, v2: () => n, z4: () => a }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(n || (n = {})));
                const a = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e, t, u) => {
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
                    i = (e, t, u = n.left) => e.split(t).reduce(u === n.left ? s : o, []),
                    l = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = n.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return c.includes(u)
                                          ? l(e)
                                          : ((e, t = n.left) => {
                                                let u = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    s = a(e);
                                                return (
                                                    i(s, /( )/, t).forEach((e) => (u = u.concat(i(e, r, n.left)))),
                                                    u
                                                );
                                            })(e, t);
                                  })(e, t),
                        );
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                u.d(t, { B3: () => c, Z5: () => s, B0: () => i, ry: () => h, Eu: () => D });
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
                const r = n;
                var a = u(1358);
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
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
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
                const A = ['args'];
                function p(e, t, u, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function s(e) {
                                            p(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            p(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    f = () => C(i.CLOSE),
                    B = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var v = u(7572);
                const b = r.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                d = o.height,
                                _ = {
                                    x: g.O.view.pxToRem(l) + s.x,
                                    y: g.O.view.pxToRem(c) + s.y,
                                    width: g.O.view.pxToRem(m),
                                    height: g.O.view.pxToRem(d),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: F(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, f);
                        },
                        handleViewEvent: C,
                        onBindingsReady: h,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            4983: (e, t, u) => {
                'use strict';
                u.d(t, { g: () => Se });
                var n = {};
                (u.r(n),
                    u.d(n, {
                        Area: () => z,
                        Bar: () => $,
                        DefaultScroll: () => U,
                        Direction: () => P,
                        defaultSettings: () => T,
                        useHorizontalScrollApi: () => N,
                    }));
                var r = {};
                (u.r(r), u.d(r, { Area: () => ue, Bar: () => J, Default: () => te, useVerticalScrollApi: () => j }));
                var a = u(6179),
                    s = u.n(a),
                    o = u(3403),
                    i = u(9417),
                    l = u(6812),
                    c = u(3215),
                    m = u(4598),
                    d = u(5175),
                    _ = u(3946),
                    E = u(4538);
                const g = (0, c.q)()(({ observableModel: e }) => {
                        const t = { root: e.object(), levels: e.object('levels') },
                            u = (0, _.Om)(() => (0, d.c)(t.levels.get()), { equals: m.jv }),
                            n = (0, _.Om)(
                                () =>
                                    u().map((e, t) =>
                                        t + 1 === u().length
                                            ? Object.assign({}, e, {
                                                  isInfinity: !0,
                                                  rewards: e.rewards.map((e) => (0, E.lW)(e)),
                                              })
                                            : Object.assign({}, e, { rewards: e.rewards.map((e) => (0, E.lW)(e)) }),
                                    ),
                                { equals: m.jv },
                            ),
                            r = (0, _.Om)(() => n().filter((e) => e.isCompleted).length, { equals: m.jv }),
                            a = (0, _.Om)(
                                () => {
                                    var e;
                                    return null == (e = n()[r()]) ? void 0 : e.number;
                                },
                                { equals: m.jv },
                            );
                        return Object.assign({}, t, {
                            computes: { getLevelsWithInfinityProgression: n, getCurrentLevel: a },
                        });
                    }, m.ZT),
                    A = g[0],
                    p = g[1];
                var F = u(6483),
                    h = u.n(F),
                    D = u(1856),
                    C = u(7515);
                const f = [];
                function B(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), f)
                    );
                }
                function v(e, t, u = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, a.useCallback)((u) => {
                            ((n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, s),
                        r,
                    ];
                }
                var b = u(7727),
                    w = u(3138),
                    S = u(4532);
                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var x = u(7030);
                let P;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(P || (P = {}));
                const T = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    L = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return (0, C.u)(r, a, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? T : l,
                                m = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (
                                                var n,
                                                    r = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return y(e, t);
                                                                    var u = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? y(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
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
                                    return (0, a.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                E = (function (e, t, u) {
                                    const n = (0, a.useMemo)(
                                        () =>
                                            (function (e, t, u, n) {
                                                let r,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), u.apply(l, i));
                                                    }
                                                    a ||
                                                        (n && !r && m(),
                                                        o(),
                                                        void 0 === n && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                                    (i.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    i
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, a.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        w.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, x.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), _.trigger('change', e), s && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                A = g[0],
                                p = g[1],
                                F = (0, a.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = A.scrollPosition.get(),
                                            a = (null != (n = A.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, t * u + a + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            p.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, A.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, A.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            a = F(t, e, n);
                                        h(a);
                                    },
                                    [h, F, c.step],
                                ),
                                f = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(n(e)),
                                            m.current && _.trigger('mouseWheel', e, A.scrollPosition, t(m.current)));
                                    },
                                    [A.scrollPosition, C, _],
                                ),
                                v = (0, S.M)(
                                    () =>
                                        (0, D.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (h(o(e, A.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [h, A.scrollPosition.goal],
                                ),
                                b = B(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, A.scrollPosition.goal);
                                    (t !== A.scrollPosition.goal && h(t, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            const P = (0, a.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: h,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: p,
                                    animationScroll: A,
                                    recalculateContent: b,
                                    handleIsThumbDragging: P,
                                    events: { on: _.on, off: _.off },
                                }),
                                [A.scrollPosition, h, C, P, _.off, _.on, b, f, p, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    N = L({
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
                        getDirection: (e) => (e.deltaY > 1 ? P.Next : P.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    M = 'HorizontalBar_base__nonActive_82',
                    k = 'disable',
                    O = { pending: !1, offset: 0 },
                    I = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    H = () => {},
                    W = (e, t) => Math.max(20, e.offsetWidth * t),
                    $ = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = I, onDrag: n = H }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, a.useState)(O),
                            _ = d[0],
                            E = d[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            A = () => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    m = (0, C.u)(0, 1, a / (r - n)),
                                    d = (t.offsetWidth - W(t, s)) * m;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (o.current.classList.add(k), void i.current.classList.remove(k));
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (o.current.classList.remove(k), void i.current.classList.add(k));
                                            var t, u;
                                            (o.current.classList.remove(k), i.current.classList.remove(k));
                                        }
                                    })(d));
                            },
                            p = B(() => {
                                ((() => {
                                    const t = c.current,
                                        u = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const s = Math.min(1, n / a);
                                    ((t.style.width = `${W(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(M) : r.current.classList.remove(M)));
                                })(),
                                    A());
                            });
                        ((0, a.useEffect)(() => (0, D.v)(p)),
                            (0, a.useEffect)(
                                () =>
                                    (0, D.v)(() => {
                                        const t = () => {
                                            A();
                                        };
                                        let u = H;
                                        const n = () => {
                                            (u(), (u = (0, D.v)(p)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!r || !a || !s) return;
                                        const o = t.screenX - _.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), g(O));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, _.offset, _.pending, n, g]));
                        const F = v((t) => e.applyStepTo(t), m, [e]),
                            f = F[0],
                            w = F[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const S = (e) => {
                            e.target.classList.contains(k) || (0, b.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()('HorizontalBar_base_49', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(k) || 0 !== e.button || ((0, b.G)('play'), f(P.Next));
                                },
                                onMouseUp: w,
                                ref: o,
                                onMouseEnter: S,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        n &&
                                            0 === t.button &&
                                            ((0, b.G)('play'),
                                            t.target === n
                                                ? g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = c.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? P.Prev : P.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: S,
                                },
                                s().createElement('div', { ref: c, className: h()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: h()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(k) || 0 !== e.button || ((0, b.G)('play'), f(P.Prev));
                                },
                                onMouseUp: w,
                                ref: i,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    G = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    U = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(G.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: h()(G.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(G.defaultScrollArea, r) },
                                s().createElement(z, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement($, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    z = ({ api: e, className: t, classNames: u, children: n, style: r }) => (
                        (0, a.useEffect)(() => (0, D.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(G.base, t), style: r },
                            s().createElement(
                                'div',
                                {
                                    className: h()(G.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(G.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((z.Bar = $),
                    (z.Default = U),
                    (z.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, a.useEffect)(() => (0, D.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(G.base, t) },
                            s().createElement(
                                'div',
                                { className: h()(G.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: h()(G.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const j = L({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? P.Next : P.Prev),
                    }),
                    Z = 'VerticalBar_base__nonActive_42',
                    q = 'disable',
                    X = () => {},
                    Y = { pending: !1, offset: 0 },
                    V = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    K = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Q = (e, t) => Math.max(20, e.offsetHeight * t),
                    J = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = V, onDrag: n = X }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, a.useState)(Y),
                            _ = d[0],
                            E = d[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    (E(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            A = B(() => {
                                const t = c.current,
                                    u = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${Q(u, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    r.current && (1 === s ? r.current.classList.add(Z) : r.current.classList.remove(Z)),
                                    s
                                );
                            }),
                            p = B(() => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    m = (0, C.u)(0, 1, a / (r - n)),
                                    d = (t.offsetHeight - Q(t, s)) * m;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (o.current.classList.add(q), void i.current.classList.remove(q));
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (o.current.classList.remove(q), void i.current.classList.add(q));
                                            var t, u;
                                            (o.current.classList.remove(q), i.current.classList.remove(q));
                                        }
                                    })(d));
                            }),
                            F = B(() => {
                                K(e, () => {
                                    (A(), p());
                                });
                            });
                        ((0, a.useEffect)(() => (0, D.v)(F)),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    K(e, () => {
                                        p();
                                    });
                                };
                                let u = X;
                                const n = () => {
                                    (u(), (u = (0, D.v)(F)));
                                };
                                return (
                                    e.events.on('recalculateContent', F),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', F),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        K(e, (u) => {
                                            const r = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = t.screenY - _.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), e.handleIsThumbDragging(!1), g(Y));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, _.offset, _.pending, n, g]));
                        const f = v((t) => e.applyStepTo(t), m, [e]),
                            w = f[0],
                            S = f[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', S, !0),
                                () => document.removeEventListener('mouseup', S, !0)
                            ),
                            [S],
                        );
                        const y = (e) => {
                            e.target.classList.contains(q) || (0, b.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()('VerticalBar_base_f3', t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, b.G)('play'), w(P.Next));
                                },
                                ref: o,
                                onMouseEnter: y,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            ((0, b.G)('play'),
                                            t.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y }))
                                                : ((r = t.screenY > n.getBoundingClientRect().y ? P.Prev : P.Next),
                                                  c.current &&
                                                      K(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              a = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: y,
                                },
                                s().createElement('div', { ref: c, className: t.thumb }),
                                s().createElement('div', { className: h()('VerticalBar_rail_43', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, b.G)('play'), w(P.Prev));
                                },
                                onMouseUp: S,
                                ref: i,
                                onMouseEnter: y,
                            }),
                        );
                    }),
                    ee = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    te = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(ee.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: h()(ee.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(ee.area, r) },
                                s().createElement(ue, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(J, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    ue = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, a.useEffect)(() => (0, D.v)(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(ee.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(ee.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                ue.Default = te;
                const ne = { Vertical: r, Horizontal: n },
                    re = { type: 'idle' };
                ('undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                var ae = u(2056),
                    se = u(5415),
                    oe = u(9630);
                const ie = (e) => {
                    if (!e) return !1;
                    const t = e.getBoundingClientRect(),
                        u = t.width,
                        n = t.height;
                    return 0 !== u && 0 !== n;
                };
                var le = u(4179);
                const ce = 'LevelsRewards_divider_5d',
                    me = 'LevelsRewards_gradient_d3',
                    de = 'LevelsRewards_gradient__current_75';
                var _e = u(5739);
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
                const ge = (0, a.memo)(
                        ({ rewardsData: e, isInfinityLevel: t, rewardItemClassMix: u, isLevelAchieved: n }) => {
                            const r = (0, se.GS)().mediaSize,
                                o = (0, a.useMemo)(() => (0, E.Ay)(r, t), [r, t]);
                            return s().createElement(
                                'div',
                                { className: 'RewardsList_base_62' },
                                e.map((e, a) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: `reward-${e.name}-${a}`,
                                            className: h()(
                                                'RewardsList_reward_95',
                                                n && 'RewardsList_reward__disabled_4f',
                                                u,
                                            ),
                                        },
                                        s().createElement(
                                            _e.Q,
                                            Ee({}, e, {
                                                size: o,
                                                name: e.name,
                                                image: e.image((0, E.Ay)(r, t)),
                                                value: e.value,
                                                valueType: e.valueType,
                                                tooltipArgs: e.tooltipArgs,
                                            }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ae = [],
                    pe = (0, a.memo)(({ isCompleted: e, isInfinityLevel: t, rewards: u }) =>
                        s().createElement(
                            'div',
                            { className: h()('RewardsColumn_base_04', t && 'RewardsColumn_base__infinity_17') },
                            s().createElement(
                                'div',
                                { className: 'RewardsColumn_rewards_f8' },
                                s().createElement(ge, {
                                    rewardsData: u || Ae,
                                    rewardItemClassMix: 'RewardsColumn_rewardItem_92',
                                    isLevelAchieved: e,
                                    isInfinityLevel: t,
                                }),
                            ),
                        ),
                    );
                var Fe = u(9690);
                const he = 'RewardsHeader_particles_e4',
                    De = (0, a.memo)(({ isCompleted: e, isInfinityLevel: t, currentLevel: u, stageLevel: n }) => {
                        const r = u === n && !e,
                            a = h()(
                                'RewardsHeader_level_e0',
                                e && 'RewardsHeader_level__achieved_e0',
                                r && 'RewardsHeader_level__current_bd',
                                t && 'RewardsHeader_level__infinity_35',
                            );
                        return s().createElement(
                            'div',
                            { className: 'RewardsHeader_base_ae' },
                            r &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: he }),
                                    s().createElement('div', {
                                        className: h()(he, 'RewardsHeader_particles__right_5b'),
                                    }),
                                ),
                            s().createElement(
                                'div',
                                { className: a },
                                t
                                    ? s().createElement(
                                          'div',
                                          { className: 'RewardsHeader_infinityContainer_af' },
                                          s().createElement('div', {
                                              className: h()(
                                                  'RewardsHeader_infinity_45',
                                                  r && 'RewardsHeader_infinity__current_d3',
                                              ),
                                          }),
                                          s().createElement('div', { className: 'RewardsHeader_light_7b' }),
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: 'RewardsHeader_numeral_90' },
                                          (0, Fe.HG)(n),
                                      ),
                            ),
                            e && s().createElement('div', { className: 'RewardsHeader_achieved_72' }),
                        );
                    });
                function Ce(e, t, u, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const fe = R.strings.mt_birthday.allRewards.tooltip,
                    Be = (e, t, u, n) =>
                        n
                            ? t < u
                                ? {
                                      header: fe.finalStage.close.header(),
                                      description: fe.finalStage.close.description(),
                                      additionalDescription: fe.finalStage.close.additionalDescription(),
                                  }
                                : { header: fe.finalStage.header(), description: fe.finalStage.description() }
                            : t < e
                              ? {
                                    header: fe.nextStage.header(),
                                    description: fe.nextStage.description(),
                                    additionalDescription: fe.nextStage.additionalDescription(),
                                }
                              : t === e
                                ? {
                                      header: fe.currentStage.header(),
                                      description: fe.currentStage.description(),
                                      additionalDescription: fe.currentStage.additionalDescription(),
                                  }
                                : { header: fe.completedStage.header(), description: fe.completedStage.description() },
                    ve = (0, a.memo)(({ currentLevel: e, allLevels: t }) => {
                        const u = (0, se.GS)().mediaSize,
                            n = N(),
                            r = (() => {
                                const e = (0, a.useState)(w.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            u(w.O.view.getScale());
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
                            o = (0, a.useState)(!1),
                            i = o[0],
                            l = o[1],
                            c = (0, a.useState)(!1),
                            m = c[0],
                            d = c[1],
                            _ = n.animationScroll.scrollPosition,
                            g = n.applyScroll,
                            A = n.getContainerSize,
                            p = n.getWrapperSize,
                            F = ((e) => {
                                const t = (0, a.useState)(ie(e ? e.current : null)),
                                    u = t[0],
                                    n = t[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        let t = 0;
                                        const u = () => {
                                            t = requestAnimationFrame(() => {
                                                ie(e ? e.current : null) ? n(!0) : u();
                                            });
                                        };
                                        return (
                                            u(),
                                            () => {
                                                cancelAnimationFrame(t);
                                            }
                                        );
                                    }, [e]),
                                    (0, a.useEffect)(() => () => n(!1), [e]),
                                    u
                                );
                            })(n.wrapperRef);
                        !(function (e, t) {
                            const u = e.contentRef,
                                n = e.wrapperRef,
                                r = e.scrollPosition,
                                s = e.clampPosition,
                                o = e.animationScroll,
                                i = e.events,
                                l = (0, a.useState)(re),
                                c = l[0],
                                m = l[1];
                            ((0, a.useEffect)(() => {
                                const e = u.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                            }, [u, c.type]),
                                (0, a.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = w.O.client.events.mouse.move(([e, a]) => {
                                            const i = u.current,
                                                l = n.current;
                                            if (!i || !l) return;
                                            if ('inside' === a && e.clientX < 0) return;
                                            const m = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                                d = c.positionFrom - m,
                                                _ = c.previousScrollPosition + d;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(i, _),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    t,
                                                ),
                                            );
                                        }),
                                        a = w.O.client.events.mouse.up(function () {
                                            m({ type: 'scrollingToEnd' });
                                        });
                                    return () => {
                                        (e(), a());
                                    };
                                }, [o.scrollPosition, s, u, c, r, n, t]),
                                (0, a.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        m(re);
                                    };
                                    return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [o.scrollPosition, c.type, i]),
                                (0, a.useEffect)(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        m({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: o.scrollPosition.get(),
                                        });
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [o.scrollPosition, u]));
                        })(Object.assign({}, n));
                        const D = (0, a.useMemo)(() => p() || 0, [p, F, u]),
                            C = (0, a.useCallback)(() => {
                                const t = (e - 0.5) * E.hD[u] * r;
                                n.applyScroll(t - D / 2);
                            }, [e, u, n, D, r]);
                        (0, a.useEffect)(() => {
                            C();
                        }, [F, u]);
                        const f = (function () {
                            var e,
                                t =
                                    ((e = function* () {
                                        const e = A(),
                                            t = _.goal;
                                        (yield (0, le.Eu)(),
                                            yield new Promise((e) => {
                                                requestAnimationFrame(() => {
                                                    requestAnimationFrame(() => {
                                                        e();
                                                    });
                                                });
                                            }));
                                        const u = A(),
                                            r = n.getBounds()[1],
                                            a = 0.3 * D,
                                            s = Math.ceil(u && e && u !== e ? (t * u) / e : t);
                                        g(s >= r - a ? r - 0.01 : s);
                                    }),
                                    function () {
                                        var t = this,
                                            u = arguments;
                                        return new Promise(function (n, r) {
                                            var a = e.apply(t, u);
                                            function s(e) {
                                                Ce(a, n, r, s, o, 'next', e);
                                            }
                                            function o(e) {
                                                Ce(a, n, r, s, o, 'throw', e);
                                            }
                                            s(void 0);
                                        });
                                    });
                            return function () {
                                return t.apply(this, arguments);
                            };
                        })();
                        return (
                            (0, oe.a)(f, [u]),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    const e = n.animationScroll.scrollPosition.goal,
                                        t = n.getBounds()[1];
                                    (l(e > 3), d(e < t - 3));
                                };
                                return (
                                    n.events.on('recalculateContent', e),
                                    n.events.on('change', e),
                                    () => {
                                        (n.events.off('recalculateContent', e), n.events.off('change', e));
                                    }
                                );
                            }, [n]),
                            s().createElement(
                                'div',
                                { className: 'LevelsRewards_base_e6' },
                                s().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            'LevelsRewards_scrollAreaWrapper_7e',
                                            i && 'LevelsRewards_scrollAreaWrapper__shadowLeft_bf',
                                            m && 'LevelsRewards_scrollAreaWrapper__shadowRight_87',
                                            i && m && 'LevelsRewards_scrollAreaWrapper__bothShadow_49',
                                        ),
                                    },
                                    s().createElement(
                                        ne.Horizontal.Area.Default,
                                        {
                                            api: Object.assign({}, n, { handleMouseWheel: n.handleMouseWheel }),
                                            className: 'LevelsRewards_rewardsWrapper_67',
                                            classNames: {
                                                content: 'LevelsRewards_scrollContent_1d',
                                                wrapper: 'LevelsRewards_scrollWrapper_a1',
                                            },
                                            areaClassName: 'LevelsRewards_scrollArea_7d',
                                            barClassNames: { base: 'LevelsRewards_scrollBar_d4' },
                                        },
                                        s().createElement(
                                            'div',
                                            {
                                                className: 'LevelsRewards_rewards_5a',
                                                onMouseEnter: () => {
                                                    b.$.playHighlight();
                                                },
                                                onMouseDown: () => {
                                                    b.$.playClick();
                                                },
                                            },
                                            t.map((u, n) => {
                                                const r = u.number === e;
                                                return s().createElement(
                                                    'div',
                                                    {
                                                        className: h()(
                                                            'LevelsRewards_column_b2',
                                                            u.isInfinity && 'LevelsRewards_column__infinity_ff',
                                                        ),
                                                        key: u.number,
                                                    },
                                                    s().createElement(
                                                        ae.u,
                                                        {
                                                            key: `column-${u.number}`,
                                                            contentId:
                                                                R.views.mt_birthday.lobby.tooltips.AdvancedSimpleTooltip(
                                                                    'resId',
                                                                ),
                                                            args: Be(u.number, e, t.length, u.isInfinity),
                                                        },
                                                        s().createElement('div', {
                                                            className: 'LevelsRewards_tooltipWrapper_49',
                                                        }),
                                                    ),
                                                    s().createElement('div', {
                                                        className: h()(
                                                            'LevelsRewards_particlesLine_0a',
                                                            'LevelsRewards_particlesLine__right_62',
                                                        ),
                                                    }),
                                                    s().createElement(De, {
                                                        currentLevel: e,
                                                        stageLevel: u.number,
                                                        isCompleted: u.isCompleted,
                                                        isInfinityLevel: u.isInfinity,
                                                    }),
                                                    s().createElement(pe, {
                                                        isCompleted: u.isCompleted,
                                                        rewards: t[n].rewards,
                                                        isInfinityLevel: u.isInfinity,
                                                    }),
                                                    r &&
                                                        s().createElement(
                                                            s().Fragment,
                                                            null,
                                                            s().createElement('div', {
                                                                className: 'LevelsRewards_backlight_93',
                                                            }),
                                                            s().createElement('div', { className: ce }),
                                                            s().createElement('div', {
                                                                className: h()(ce, 'LevelsRewards_divider__right_10'),
                                                            }),
                                                        ),
                                                    u.isInfinity &&
                                                        s().createElement(
                                                            s().Fragment,
                                                            null,
                                                            s().createElement('div', {
                                                                className: 'LevelsRewards_dots_69',
                                                            }),
                                                            s().createElement('div', { className: h()(me, r && de) }),
                                                            s().createElement('div', {
                                                                className: h()(
                                                                    me,
                                                                    'LevelsRewards_gradient__right_57',
                                                                    r && de,
                                                                ),
                                                            }),
                                                        ),
                                                );
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    be = R.strings.mt_birthday.allRewards,
                    we = (0, o.Pi)(() => {
                        const e = p().model,
                            t = e.computes.getLevelsWithInfinityProgression(),
                            u = e.computes.getCurrentLevel();
                        return s().createElement(
                            'div',
                            { className: 'App_base_3d' },
                            s().createElement('div', { className: 'App_vignette_9c' }),
                            s().createElement(
                                'div',
                                { className: 'App_header_bf' },
                                s().createElement(i.h, { title: be.header(), subTitle: be.description() }),
                            ),
                            t.length
                                ? s().createElement(
                                      'div',
                                      { className: 'App_levelsWrapper_f8' },
                                      s().createElement(ve, { allLevels: t, currentLevel: u }),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: 'App_errorScreen_76' },
                                      s().createElement(l.U, null),
                                  ),
                        );
                    }),
                    Se = (0, a.memo)((e) => {
                        const t = (0, a.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return s().createElement(A, { options: t }, s().createElement(we, null));
                    });
            },
            9756: (e, t, u) => {
                'use strict';
                var n = u(7739),
                    r = u(6179),
                    a = u.n(r),
                    s = u(6483),
                    o = u.n(s),
                    i = u(926),
                    l = u.n(i),
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
                    A = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, m);
                        const r = (0, c.GS)(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', d({ className: o()(u, _[s], E[i], g[l]) }, n), t);
                    },
                    p = ['children'],
                    F = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, p);
                        return a().createElement(n.ZN, null, a().createElement(A, u, t));
                    };
                var h = u(493),
                    D = u.n(h),
                    C = u(7727);
                const f = {
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
                    B = [
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
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                class b extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, C.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, C.G)(this.props.soundClick));
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
                            s = e.type,
                            i = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(e, B)),
                            E = o()(f.base, f[`base__${s}`], f[`base__${r}`], null == i ? void 0 : i.base),
                            g = o()(f.icon, f[`icon__${s}`], f[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = o()(f.glow, null == i ? void 0 : i.glow),
                            p = o()(f.caption, f[`caption__${s}`], null == i ? void 0 : i.caption),
                            F = o()(f.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            v(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== s && a().createElement('div', { className: f.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: p }, t),
                            n && a().createElement('div', { className: F }, n),
                        );
                    }
                }
                b.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var w = u(3138),
                    S = u(5521);
                u(4179);
                const y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function x(e = S.n.NONE, t = y, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== S.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (w.O.view.isEventHandled()) return;
                                (w.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                function P({
                    key: e = S.n.ESCAPE,
                    callback: t = () => w.O.view.sendEvent.close(),
                    preventPropagation: u = !0,
                } = {}) {
                    return (x(e, t, u), t);
                }
                var T = u(3403);
                let L;
                !(function (e) {
                    ((e[(e.mail = 0)] = 'mail'), (e[(e.rewards = 1)] = 'rewards'), (e[(e.about = 2)] = 'about'));
                })(L || (L = {}));
                var N = u(4983),
                    M = u(5467),
                    k = u(3215);
                const O = (0, k.q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), lootboxEntryPoint: e.object('lootboxEntryPoint') };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e, cleanup: t }) => {
                            const u = window.subViews.addChildChangedCallback(L.about);
                            return (
                                t(() => {
                                    window.subViews.removeChildChangedCallback(u);
                                }),
                                {
                                    onClose: e.createCallbackNoArgs('onClose'),
                                    onInfoPage: e.createCallbackNoArgs('onInfoPageClick'),
                                    onOpenGoldenCarriage: e.createCallbackNoArgs('onOpenGoldenCarriage'),
                                    onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                                    onOpenStorage: e.createCallbackNoArgs('lootboxEntryPoint.onOpenStorage'),
                                }
                            );
                        },
                    ),
                    I = O[0],
                    H = O[1];
                var W = u(3946);
                let $, G, U, z;
                (!(function (e) {
                    ((e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded'));
                })($ || ($ = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed'));
                    })(G || (G = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(U || (U = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(z || (z = {})),
                    $.Initialization,
                    G.Initialization);
                const j = (e) => e > 0,
                    Z = (e) => !j(e);
                const q = (0, k.q)()(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                u = (0, W.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: u }) {
                                        return t === $.Initialization
                                            ? z.Initialization
                                            : t === $.ForceLoading
                                              ? z.ForceLoading
                                              : t === $.Loading
                                                ? z.BrowserLoading
                                                : e === G.Loaded && t === $.Loaded && u === U.Loaded
                                                  ? z.Loaded
                                                  : u === U.Failed
                                                    ? z.TextureFailed
                                                    : e === G.Failed
                                                      ? z.PageFailed
                                                      : z.PageLoading;
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
                    X = q[0],
                    Y = q[1],
                    V = (e) => {
                        (0, r.useEffect)(e, []);
                    };
                const K = 'BrowserView_base_6b',
                    Q = ({ message: e, className: t, classNames: u }) =>
                        a().createElement(
                            'div',
                            { className: o()('Spinner_base_87', t) },
                            e &&
                                a().createElement(
                                    'div',
                                    { className: o()('Spinner_caption_cf', null == u ? void 0 : u.caption) },
                                    e,
                                ),
                            a().createElement('div', {
                                className: o()('Spinner_gear_c4', null == u ? void 0 : u.gear),
                            }),
                            a().createElement('div', {
                                className: o()('Spinner_logo_bf', null == u ? void 0 : u.logo),
                            }),
                        );
                var J = u(3457);
                const ee = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: u }) =>
                    a().createElement(
                        'div',
                        { className: 'Error_base_46' },
                        a().createElement('div', { className: 'Error_alertIcon_04' }),
                        a().createElement('div', { className: 'Error_errorCaption_f2' }, u),
                        a().createElement(J.u5, { size: J.qE.medium, mixClass: 'Error_button_cd', onClick: t }, e),
                    );
                ee.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const te = ({
                    message: e,
                    isError: t,
                    errorMessage: u,
                    errorBtnLabel: n,
                    errorBtnClickHandler: s,
                    overlayAlpha: o,
                }) => {
                    const i = a().createRef();
                    return (
                        (0, r.useEffect)(() => {
                            const e = i.current;
                            e && o && (e.style.opacity = o);
                        }, [i, o]),
                        a().createElement(
                            'div',
                            { className: 'Waiting_base_c5' },
                            a().createElement('div', { className: 'Waiting_blackOverlay_55', ref: i }),
                            t
                                ? a().createElement(ee, { errorBtnLabel: n, errorMessage: u, errorBtnClickHandler: s })
                                : a().createElement(Q, { message: e }),
                        )
                    );
                };
                te.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var ue = u(4598);
                const ne = 'DisplayBrowserState_error_4e',
                    re = 'DisplayBrowserState_alertIcon_c4',
                    ae = 'DisplayBrowserState_errorCaption_dd',
                    se = ({ waitingText: e, className: t }) =>
                        a().createElement(
                            'div',
                            { className: o()('DisplayBrowserState_base_e7', t) },
                            a().createElement(te, { errorBtnClickHandler: ue.ZT, message: e }),
                        ),
                    oe = () =>
                        a().createElement(
                            'div',
                            { className: ne },
                            a().createElement('div', { className: re }),
                            a().createElement(
                                'div',
                                { className: ae },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    ie = () =>
                        a().createElement(
                            'div',
                            { className: ne },
                            a().createElement('div', { className: re }),
                            a().createElement(
                                'div',
                                { className: ae },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            a().createElement(
                                'div',
                                { className: ae },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function le(e) {
                    const t = (function (e) {
                            const t = (0, r.useRef)(!1);
                            return (
                                (e !== z.Loaded && e !== z.PageFailed && e !== z.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        u = (function (e) {
                            const t = (0, r.useRef)(e);
                            return (
                                (function (e) {
                                    return e !== z.BrowserLoading && e !== z.PageLoading;
                                })(e) && (t.current = e),
                                t.current
                            );
                        })(e);
                    return t ? u : e;
                }
                const ce = ({ viewState: e, waitingText: t, waitingClassName: u }) => {
                        switch (le(e)) {
                            case z.BrowserLoading:
                            case z.PageLoading:
                            case z.ForceLoading:
                                return a().createElement(se, { waitingText: t, className: u });
                            case z.PageFailed:
                                return a().createElement(oe, null);
                            case z.TextureFailed:
                                return a().createElement(ie, null);
                            default:
                                return null;
                        }
                    },
                    me = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function de(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function _e(e) {
                    const t = (0, r.useState)(de(e.scale)),
                        u = t[0],
                        n = t[1],
                        a = (function (e) {
                            return me(e)
                                ? (function (e, t) {
                                      var u;
                                      if (Z(e)) return void console.warn('Invalid id, should be greater than zero', e);
                                      const n = 0 === t.scale ? 1e-5 : null != (u = t.scale) ? u : 1;
                                      return w.O.view.getBrowserTexturePath(
                                          e,
                                          Math.max(t.width, 1),
                                          Math.max(t.height, 1),
                                          n,
                                      );
                                  })(e.id, e)
                                : void 0;
                        })(Object.assign({}, e, { scale: u })),
                        s = (0, r.useState)(a),
                        o = s[0],
                        i = s[1],
                        l = (0, r.useRef)(!1),
                        c = 'width' in e ? e.width : 0,
                        m = 'height' in e ? e.height : 0,
                        d = (function () {
                            const e = (0, r.useRef)(0);
                            var t;
                            return (
                                (t = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, r.useEffect)(() => t, []),
                                (0, r.useMemo)(
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
                        (0, r.useEffect)(() => {
                            const t = () => {
                                n(de(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, r.useEffect)(() => {
                            if (void 0 === a || 0 === c || 0 === m || a === o) return;
                            const e = () => {
                                i(a);
                            };
                            if (!1 === l.current) return ((l.current = !0), void e());
                            const t = new Image(),
                                u = () => {
                                    d.run(e);
                                };
                            return (
                                t.addEventListener('load', u),
                                (t.src = a),
                                () => {
                                    (t.removeEventListener('load', u), (t.src = ''));
                                }
                            );
                        }, [a, o]),
                        o
                    );
                }
                const Ee = a().memo(function (e) {
                    const t = e.id,
                        u = e.className,
                        n = e.classNameTexture,
                        r = e.waitingClassName,
                        s = e.onMouseEnter,
                        i = e.onMouseLeave,
                        l = e.onMouseWheel,
                        c = e.onMouseMove,
                        m = e.onMouseDown,
                        d = e.onMouseUp,
                        _ = e.renderStateDisplay,
                        E = e.viewState,
                        g = e.statusCode,
                        A = e.waitingText,
                        p = e.scrollSpeed,
                        F = void 0 === p ? 20 : p,
                        h = _e(e);
                    return a().createElement(
                        'div',
                        { className: o()(K, u), onMouseEnter: s, onMouseLeave: i },
                        h &&
                            a().createElement('div', {
                                onWheel: l,
                                onMouseMove: c,
                                onMouseDown: m,
                                onMouseUp: d,
                                className: o()(K, 'BrowserView_texture_17', n),
                                'data-browser-id': t,
                                'data-browser-scroll-speed': F,
                                style: { backgroundImage: `url(${h})` },
                            }),
                        'function' == typeof _
                            ? _({ viewState: E, statusCode: g, waitingText: A, waitingClassName: r })
                            : a().createElement(ce, {
                                  viewState: E,
                                  statusCode: g,
                                  waitingText: A,
                                  waitingClassName: r,
                              }),
                    );
                });
                var ge = u(1856),
                    Ae = u(4532);
                const pe = { type: 'measuring' };
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const he = a().memo(function (e) {
                    const t = (function () {
                            const e = (0, r.useRef)(null),
                                t = (0, r.useState)(pe),
                                u = t[0],
                                n = t[1],
                                a = (0, Ae.M)(
                                    () => (
                                        n(pe),
                                        (0, ge.v)(() => {
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
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', a),
                                        a(),
                                        () => window.removeEventListener('resize', a)
                                    ),
                                    [a],
                                ),
                                [e, u, a]
                            );
                        })(),
                        u = t[0],
                        n = t[1];
                    return a().createElement(
                        'div',
                        { ref: u, className: K },
                        a().createElement(
                            Ee,
                            Fe(
                                {},
                                e,
                                (function (e, t = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                                })(n),
                            ),
                        ),
                    );
                });
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const Ce = (0, T.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            u = e.className,
                            n = e.waitingClassName,
                            s = e.isLazy,
                            o = void 0 === s || s,
                            i = e.displayContentWhenLoading,
                            l = void 0 === i || i,
                            c = e.renderStateDisplay,
                            m = e.onMouseEnter,
                            d = e.onMouseLeave,
                            _ = e.onMouseMove,
                            E = e.onMouseWheel,
                            g = e.onMouseDown,
                            A = e.onMouseUp,
                            p = Y(),
                            F = p.model,
                            h = p.controls,
                            D = F.root.get(),
                            C = D.id,
                            f = D.httpStatusCode,
                            B = D.waitingMessage,
                            v = F.getState(),
                            b = l || v === z.Loaded;
                        (V(() => {
                            o && Z(C) && h.createWebView();
                        }),
                            (0, r.useEffect)(() => {
                                j(C) && h.focus();
                            }, [C, h]),
                            V(
                                () => (
                                    window.addEventListener('mouseleave', h.blur),
                                    window.addEventListener('mouseenter', h.focus),
                                    () => {
                                        (window.removeEventListener('mouseleave', h.blur),
                                            window.removeEventListener('mouseenter', h.focus));
                                    }
                                ),
                            ));
                        const w = (0, r.useMemo)(() => {
                            const e = {
                                onMouseEnter: m,
                                onMouseLeave: d,
                                onMouseMove: _,
                                onMouseWheel: E,
                                onMouseDown: g,
                                onMouseUp: A,
                            };
                            return b
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          (h.focus(), null == m || m(e));
                                      },
                                      onMouseLeave: (e) => {
                                          (h.blur(), null == d || d(e));
                                      },
                                  })
                                : e;
                        }, [b, h, g, m, d, _, A, E]);
                        if (Z(C)) return null;
                        const S = me(e)
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
                            y = B.length > 0 ? B : t;
                        return e.isFullSize
                            ? a().createElement(
                                  he,
                                  De({}, w, {
                                      id: C,
                                      className: u,
                                      waitingClassName: n,
                                      statusCode: f,
                                      viewState: v,
                                      waitingText: y,
                                      renderStateDisplay: c,
                                  }),
                              )
                            : a().createElement(
                                  Ee,
                                  De({}, w, S, {
                                      id: C,
                                      className: u,
                                      waitingClassName: n,
                                      statusCode: f,
                                      viewState: v,
                                      waitingText: y,
                                      renderStateDisplay: c,
                                  }),
                              );
                    }),
                    fe = ['options', 'mocks', 'mode'],
                    Be = (0, r.memo)(function (e) {
                        let t = e.options,
                            u = e.mocks,
                            n = e.mode,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, fe);
                        return a().createElement(X, { options: t, mocks: u, mode: n }, a().createElement(Ce, r));
                    });
                var ve = u(9417);
                const be = R.strings.mt_birthday.about,
                    we = (0, r.memo)(() =>
                        a().createElement(
                            'div',
                            { className: 'AboutPage_base_9f' },
                            a().createElement(
                                'div',
                                { className: 'AboutPage_header_e3' },
                                a().createElement(ve.h, { title: be.header(), subTitle: be.description() }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'AboutPage_infoContainer_83' },
                                a().createElement(Be, { isFullSize: !0, options: { rootId: L.about } }),
                            ),
                        ),
                    ),
                    Se = 'App_button_b1';
                var ye = u(7613),
                    xe = u(4538);
                const Pe = 'BirthdayIntro_arrowImage_e2';
                var Te = u(3649);
                const Le = (0, r.memo)(({ title: e, description: t, image: u }) =>
                        a().createElement(
                            'div',
                            { className: 'TextBlock_base_3f' },
                            a().createElement('div', {
                                className: 'TextBlock_introImage_7c',
                                style: { backgroundImage: `url(${u})` },
                            }),
                            a().createElement(ye.ZP, { className: 'TextBlock_title_78', text: e }),
                            a().createElement(ye.ZP, { className: 'TextBlock_description_b4', text: (0, Te.z4)(t) }),
                        ),
                    ),
                    Re = R.strings.mt_birthday.intro,
                    Ne = (0, r.memo)(
                        ({ onShowIntro: e }) => (
                            P({ callback: e }),
                            a().createElement(
                                'div',
                                { className: 'BirthdayIntro_base_5b' },
                                a().createElement(
                                    'div',
                                    { className: 'BirthdayIntro_titleBlock_82' },
                                    a().createElement(ye.ZP, {
                                        text: Re.header.title(),
                                        className: 'BirthdayIntro_title_b4',
                                    }),
                                    a().createElement(ye.ZP, {
                                        text: Re.header.subtitle(),
                                        className: 'BirthdayIntro_subtitle_40',
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'BirthdayIntro_content_60' },
                                    a().createElement(
                                        'div',
                                        { className: 'BirthdayIntro_arrowsBlock_38' },
                                        a().createElement('div', { className: Pe }),
                                        a().createElement('div', { className: Pe }),
                                    ),
                                    xe.OY.map((e) =>
                                        a().createElement(Le, {
                                            key: e,
                                            title: Re[xe.Xg[e]].title(),
                                            description: Re[xe.Xg[e]].description(),
                                            image: 'R.images.mt_birthday.gui.maps.icons.intro.' + xe.Xg[e],
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    J.u5,
                                    {
                                        type: J.L$.primary,
                                        size: J.qE.medium,
                                        onClick: e,
                                        mixClass: 'BirthdayIntro_button_fa',
                                    },
                                    a().createElement(ye.ZP, { text: Re.buttons.accept() }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'BirthdayIntro_close_53' },
                                    a().createElement(b, {
                                        caption: Re.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                    }),
                                ),
                            )
                        ),
                    );
                var Me = u(6373),
                    ke = u(7030);
                const Oe = 'GoldWagon_icon_82',
                    Ie = R.strings.mt_birthday.birthdayEntryPoint.goldWagon.tooltip,
                    He = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 300,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    We = ({ hasGoldenTickets: e, onClick: t }) => {
                        const u = a().useState(!1),
                            n = u[0],
                            r = u[1],
                            s = (0, ke.useTransition)(n, Object.assign({ key: n }, He));
                        return a().createElement(
                            'div',
                            { className: 'GoldWagon_base_54', onClick: t },
                            a().createElement(
                                Me.i,
                                { header: Ie.header() },
                                a().createElement(
                                    'div',
                                    {
                                        className: 'GoldWagon_iconWrapper_ee',
                                        onClick: () => {
                                            (t(), C.$.playClick());
                                        },
                                        onMouseEnter: () => {
                                            (r(!0), C.$.playHighlight());
                                        },
                                        onMouseLeave: () => {
                                            r(!1);
                                        },
                                    },
                                    a().createElement('div', { className: Oe }),
                                    s(
                                        (e, t) =>
                                            t &&
                                            a().createElement(ke.animated.div, {
                                                className: o()(Oe, 'GoldWagon_icon__hovered_92'),
                                                style: e,
                                            }),
                                    ),
                                    e &&
                                        a().createElement(
                                            'div',
                                            { className: 'GoldWagon_flareMaskWrapper_03' },
                                            a().createElement('div', { className: 'GoldWagon_flare_be' }),
                                        ),
                                ),
                            ),
                        );
                    },
                    $e = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 300,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    Ge = 'disabled',
                    Ue = 'empty',
                    ze = {
                        base: 'Lootbox_base_66',
                        shine: 'Lootbox_shine_9b',
                        base__large: 'Lootbox_base__large_0d',
                        wrapper: 'Lootbox_wrapper_d5',
                        base__disabled: 'Lootbox_base__disabled_97',
                        icon: 'Lootbox_icon_87',
                        icon__hovered: 'Lootbox_icon__hovered_5b',
                        count: 'Lootbox_count_c2',
                        disabledAlert: 'Lootbox_disabledAlert_74',
                    },
                    je = 'LootboxCount_base_fc',
                    Ze = 'LootboxCount_infin_2d',
                    qe = 'LootboxCount_base__large_24',
                    Xe = 'LootboxCount_base__disabled_5b',
                    Ye = R.strings.mt_birthday.entryPointWidget,
                    Ve = ({ count: e, maxCount: t, hasInfinite: u, isEnabled: n }) => {
                        const r = (0, c.GS)().mediaSize;
                        let s = '',
                            i = 0;
                        e > 0
                            ? ((s = e >= t ? 'maxCount' : 'count'), (i = e >= t ? t - 1 : e), u && (s += 'HasInfinite'))
                            : (s = u ? 'hasInfiniteOnly' : '');
                        const l = String(Ye.$dyn(s)),
                            m = r >= c.cJ.Large,
                            d = m ? 24 : 20,
                            _ = a().createElement(ye.ZP, { text: Ye.mult(), style: { width: 0.6 * d + 'rem' } }),
                            E = a().createElement('div', { className: Ze }),
                            g = o()(je, m && qe, !n && Xe);
                        return a().createElement(
                            'div',
                            { className: g, style: { fontSize: `${d}rem` } },
                            a().createElement(ye.ZP, { text: l, format: { binding: { count: i, mult: _, infin: E } } }),
                        );
                    },
                    Ke = R.strings.mt_birthday.entryPointWidget;
                let Qe;
                !(function (e) {
                    ((e.Small = 'small'), (e.Large = 'large'));
                })(Qe || (Qe = {}));
                const Je = ({
                        boxesCount: e,
                        hasNew: t,
                        hasInfinite: u,
                        isLootBoxesEnabled: n,
                        size: r,
                        wrapperRef: s,
                        onClick: i,
                    }) => {
                        const l = a().useState(!1),
                            c = l[0],
                            m = l[1],
                            d = e > 0 || u,
                            _ = (n ? !d && Ue : Ge) || (t && 'new') || 'normal',
                            E = o()(ze.base, ze[`base__${_}`], ze[`base__${r}`]),
                            g = (0, ke.useTransition)(c, Object.assign({ key: c }, $e));
                        return a().createElement(
                            'div',
                            { className: E },
                            'new' === _ && a().createElement('div', { className: ze.shine }),
                            a().createElement(
                                Me.i,
                                { header: Ke.disabledTooltip.header(), body: Ke.disabledTooltip.body(), isEnabled: !n },
                                a().createElement(
                                    'div',
                                    {
                                        ref: s,
                                        className: ze.wrapper,
                                        onClick: () => {
                                            _ !== Ge && (i(), C.$.playYes());
                                        },
                                        onMouseEnter: () => {
                                            _ !== Ge && (C.$.playHighlight(), m(!0));
                                        },
                                        onMouseLeave: () => {
                                            m(!1);
                                        },
                                    },
                                    a().createElement('div', { className: ze.icon }),
                                    g(
                                        (e, t) =>
                                            t &&
                                            a().createElement(ke.animated.div, {
                                                className: o()(ze.icon, ze.icon__hovered),
                                                style: e,
                                            }),
                                    ),
                                    _ !== Ue &&
                                        d &&
                                        a().createElement(
                                            'div',
                                            { className: ze.count },
                                            a().createElement(Ve, {
                                                count: e,
                                                maxCount: 1e3,
                                                hasInfinite: u,
                                                isEnabled: _ !== Ge,
                                            }),
                                        ),
                                    _ === Ge && a().createElement('div', { className: ze.disabledAlert }),
                                ),
                            ),
                        );
                    },
                    et = 'NavItem_icon_9b',
                    tt = 'NavItem_icon__hidden_21',
                    ut = R.strings.mt_birthday.navigation,
                    nt = (0, r.memo)(
                        ({ tabId: e, onClick: t, isSelected: u, hasNewItems: n = !1, disabled: s = !1 }) => {
                            const i = (0, r.useState)(!1),
                                l = i[0],
                                m = i[1],
                                d = (0, c.GS)().mediaSize >= c.cJ.Medium ? '_large' : '',
                                _ = `R.images.mt_birthday.gui.maps.icons.navigation.${L[e] + d}`,
                                E = u || l;
                            return a().createElement(
                                Me.i,
                                {
                                    header: ut.tooltips.navigationItem.header.$dyn(`c_${e}`),
                                    body: ut.tooltips.navigationItem.body.$dyn(`c_${e}`),
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            'NavItem_base_1c',
                                            l && 'NavItem_base__hovered_da',
                                            u && 'NavItem_base__selected_24',
                                            s && 'NavItem_base__disabled_d8',
                                        ),
                                        onMouseEnter: () => {
                                            (C.$.playHighlight(), s || m(!0));
                                        },
                                        onMouseLeave: () => {
                                            s || m(!1);
                                        },
                                        onClick: () => {
                                            s || (t(), C.$.playClick());
                                        },
                                    },
                                    a().createElement('div', {
                                        className: o()('NavItem_border_05', u && 'NavItem_border__visible_93'),
                                    }),
                                    a().createElement('div', {
                                        className: o()('NavItem_background_d4', u && 'NavItem_background__visible_5a'),
                                    }),
                                    n && a().createElement('div', { className: 'NavItem_bubble_6d' }),
                                    a().createElement(
                                        'div',
                                        { className: 'NavItem_iconWrapper_62' },
                                        a().createElement('div', {
                                            className: o()(et, E && tt),
                                            style: { backgroundImage: `url(${_})` },
                                        }),
                                        a().createElement('div', {
                                            className: o()(et, !E && tt),
                                            style: { backgroundImage: `url(${_ + '_active'})` },
                                        }),
                                        a().createElement('div', {
                                            className: o()('NavItem_glow_50', u && 'NavItem_glow__visible_d7'),
                                        }),
                                    ),
                                    a().createElement(ye.ZP, { text: ut.$dyn(L[e]), className: 'NavItem_text_e7' }),
                                ),
                            );
                        },
                    );
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const at = R.strings.mt_birthday,
                    st = (0, T.Pi)(() => {
                        viewEnv.clearInternalCacheAfterFinalize();
                        const e = H(),
                            t = e.controls,
                            u = e.model,
                            n = (0, c.GS)().mediaSize,
                            s = u.root.get(),
                            i = s.currentTabId,
                            l = s.hasNewRewards,
                            m = s.isIntroSeen,
                            d = s.hasGoldenTickets,
                            _ = s.isEnabledGoldWagonEntry,
                            E = i !== L.about,
                            g = (0, r.useState)(!m),
                            A = g[0],
                            p = g[1],
                            F = n >= c.cJ.Medium ? Qe.Large : Qe.Small,
                            h = () => {
                                (C.$.playHighlight(), p((e) => !e));
                            },
                            D = (0, r.useCallback)(
                                (e) => {
                                    t.onTabChange(e);
                                },
                                [t],
                            ),
                            f = {
                                [L.mail]: {
                                    hasNewItems: !1,
                                    component: a().createElement(M.z, {
                                        resId: R.views.mt_birthday.lobby.birthday.TankMailView('resId'),
                                    }),
                                },
                                [L.rewards]: {
                                    hasNewItems: l,
                                    component: a().createElement(N.g, {
                                        resId: R.views.mt_birthday.lobby.birthday.AllRewardsView('resId'),
                                    }),
                                },
                                [L.about]: { hasNewItems: !1, component: a().createElement(we, null) },
                            };
                        return (
                            P({ callback: t.onClose, preventPropagation: !1 }),
                            A
                                ? a().createElement(Ne, { onShowIntro: h })
                                : a().createElement(
                                      'div',
                                      { className: 'App_base_e6' },
                                      a().createElement(
                                          'div',
                                          { className: o()(Se, 'App_button__close_c4') },
                                          a().createElement(b, {
                                              caption: at.navigation.button.close(),
                                              side: 'right',
                                              type: 'close',
                                              onClick: t.onClose,
                                          }),
                                      ),
                                      i === L.mail &&
                                          a().createElement(
                                              'div',
                                              { className: o()(Se, 'App_button__info_1d') },
                                              a().createElement(b, {
                                                  caption: at.navigation.howToEarn(),
                                                  side: 'left',
                                                  type: 'info',
                                                  onClick: h,
                                              }),
                                          ),
                                      a().createElement(
                                          'div',
                                          { className: 'App_navigationContainer_57' },
                                          a().createElement(
                                              'div',
                                              { className: 'App_navigation_dc' },
                                              Object.keys(f).map((e) => {
                                                  var t;
                                                  return a().createElement(nt, {
                                                      key: e,
                                                      tabId: e,
                                                      isSelected: Number(i) === Number(e),
                                                      onClick: () => D(e),
                                                      hasNewItems: null == (t = f[e]) ? void 0 : t.hasNewItems,
                                                  });
                                              }),
                                          ),
                                      ),
                                      a().createElement('div', { className: 'App_content_fc' }, f[i].component),
                                      E &&
                                          a().createElement(
                                              a().Fragment,
                                              null,
                                              a().createElement(
                                                  'div',
                                                  { className: 'App_lootBoxEntryPoint_74' },
                                                  a().createElement(
                                                      Je,
                                                      rt({}, u.lootboxEntryPoint.get(), {
                                                          size: F,
                                                          onClick: t.onOpenStorage,
                                                      }),
                                                  ),
                                              ),
                                              _ &&
                                                  a().createElement(
                                                      'div',
                                                      { className: 'App_goldWagonEntryPoint_36' },
                                                      a().createElement(We, {
                                                          hasGoldenTickets: d,
                                                          onClick: t.onOpenGoldenCarriage,
                                                      }),
                                                  ),
                                          ),
                                  )
                        );
                    });
                engine.whenReady.then(() => {
                    D().render(
                        a().createElement(I, null, a().createElement(F, null, a().createElement(st, null))),
                        document.getElementById('root'),
                    );
                });
            },
            8933: (e, t, u) => {
                'use strict';
                let n, r;
                (u(2862).E4.Vehicles,
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteSpanish = 'whiteSpanish'));
                    })(r || (r = {})));
            },
            5467: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => Me });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    s = u.n(a),
                    o = u(2862),
                    i = u(5739),
                    l = u(122),
                    c = u(5415),
                    m = u(3403),
                    d = u(4538),
                    _ = u(9417),
                    E = u(3215),
                    g = u(4598),
                    A = u(5175),
                    p = u(3946);
                const F = (0, E.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    selectedUsers: e.array('selectedUsers'),
                                    progression: e.object('progression'),
                                    progressionLevels: e.array('progression.levels'),
                                    infinityRewards: e.array('progression.infinityRewards'),
                                },
                                u = (0, p.Om)(() => (0, A.c)(t.selectedUsers.get()), { equals: g.jv }),
                                n = (0, p.Om)(() => u()[0], { equals: g.jv }),
                                r = (0, p.Om)(() => u().slice(1), { equals: g.jv }),
                                a = (0, p.Om)(() => (0, A.c)(t.infinityRewards.get()).map((e) => (0, d.lW)(e)), {
                                    equals: g.jv,
                                }),
                                s = (0, p.Om)(
                                    () =>
                                        (0, A.c)(t.progressionLevels.get()).map((e) =>
                                            Object.assign({}, e, { rewards: [...e.rewards.map((e) => (0, d.lW)(e))] }),
                                        ),
                                    { equals: g.jv },
                                ),
                                o = (0, p.Om)(
                                    () => {
                                        var e;
                                        const t = s();
                                        return null == (e = t[t.length - 1]) ? void 0 : e.maxPoints;
                                    },
                                    { equals: g.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    getSelectedUsers: u,
                                    getFirstUser: n,
                                    getMoreSelectedUsers: r,
                                    getInfinityRewards: a,
                                    getProgressLevels: s,
                                    getLevelByNumber: (e) => s().find((t) => (null == t ? void 0 : t.number) === e),
                                    getProgressionMaxPoints: o,
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
                    h = F[0],
                    D = F[1],
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
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const B = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            a = e.getImageSource,
                            s = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            d = e.lastFrameIndex,
                            _ = void 0 === d ? s - 1 : d,
                            E = e.loop,
                            g = void 0 === E || E,
                            A = e.state,
                            p = void 0 === A ? 'play' : A,
                            F = e.onAnimationDone,
                            h = e.onAnimationComplete,
                            D = e.poster,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, C);
                        const S = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (p) {
                                    case 'play':
                                        return (function () {
                                            const e = w(m, _, a),
                                                t = v(m, _),
                                                n = window.setInterval(() => {
                                                    const r = t(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == o || o(r, a),
                                                          u(a),
                                                          r === _ &&
                                                              (null == h || h(),
                                                              g || (null == F || F(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && D ? { path: D, x: 0, y: 0 } : a(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(b(e, t));
                                            return (
                                                t.addEventListener('load', n),
                                                () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, m, _, g, o, h, F, D, p]),
                            r().createElement('canvas', f({}, B, { width: t, height: u, ref: S }))
                        );
                    }),
                    v = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
                        };
                    },
                    b = (e, t) => Object.assign({}, e, { img: t }),
                    w = (e, t, u) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= t; a++) {
                            const e = u(a),
                                t = r[e.path];
                            if (t) n.set(a, b(e, t));
                            else {
                                const t = new Image();
                                ((r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, b(e, t)));
                            }
                        }
                        return n;
                    };
                var S = u(7727);
                const y = {
                        base: 'AnimatedLootbox_base_2c',
                        base__blink: 'AnimatedLootbox_base__blink_e1',
                        lootboxSequence: 'AnimatedLootbox_lootboxSequence_e9',
                        lootboxSequence__hidden: 'AnimatedLootbox_lootboxSequence__hidden_2f',
                    },
                    x = (0, n.memo)(
                        ({
                            lootboxSequenceState: e,
                            setLootboxSequenceState: t,
                            isBlinkAnimation: u,
                            setIsBlinkAnimation: a,
                        }) => (
                            (0, n.useEffect)(
                                () =>
                                    (0, l.F)(() => {
                                        (t(d.wO.PLAY), (0, S.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                    }, 200),
                                [t],
                            ),
                            (0, n.useEffect)(() => {
                                if (e === d.wO.STOP)
                                    return (0, l.F)(() => {
                                        (t(d.wO.PLAY), (0, S.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                    }, 2e3);
                            }, [e, t]),
                            (0, n.useEffect)(() => {
                                if (u)
                                    return (
                                        (0, S.G)('hangar_h15_bday_tank_mail_anim_send'),
                                        (0, l.F)(() => {
                                            (t(d.wO.STOP), a(!1));
                                        }, 600)
                                    );
                            }, [u, a, t]),
                            (0, n.useEffect)(() => {
                                e === d.wO.STOP && a(!1);
                            }, [e, a]),
                            r().createElement(
                                'div',
                                { className: s()(y.base, e === d.wO.PLAY && y.base__visible, u && y.base__blink) },
                                r().createElement(B, {
                                    width: d.FE.width,
                                    height: d.FE.height,
                                    frameCount: d.FE.frameCount,
                                    getImageSource: d.sq,
                                    state: e,
                                    loop: !1,
                                    className: s()(y.lootboxSequence, e === d.wO.STOP && y.lootboxSequence__hidden),
                                }),
                            )
                        ),
                    ),
                    P = {
                        base: 'App_base_4a',
                        fadeIn: 'App_fadeIn_d8',
                        content: 'App_content_ea',
                        background: 'App_background_a5',
                        background__leave: 'App_background__leave_46',
                        fadeOut: 'App_fadeOut_92',
                        emptyBackground: 'App_emptyBackground_d8',
                        emptyBackground__visible: 'App_emptyBackground__visible_58',
                        header: 'App_header_6a',
                        giftContainer: 'App_giftContainer_b8',
                        giftContainer__center: 'App_giftContainer__center_53',
                        giftContainer__leave: 'App_giftContainer__leave_85',
                        phraseContainer: 'App_phraseContainer_fa',
                        lootboxContainer: 'App_lootboxContainer_c1',
                        lootboxContainer__leave: 'App_lootboxContainer__leave_6a',
                        progressionBlock: 'App_progressionBlock_91',
                        reward: 'App_reward_ba',
                        fadeInRewards: 'App_fadeInRewards_41',
                        reward__last: 'App_reward__last_f9',
                        rewardsContainer: 'App_rewardsContainer_5b',
                        progressionContainer: 'App_progressionContainer_79',
                        giftSender: 'App_giftSender_9e',
                        conditionListContainer: 'App_conditionListContainer_80',
                        currencyPostStampIcon: 'App_currencyPostStampIcon_2e',
                        currencyContainer: 'App_currencyContainer_a6',
                        currencyText: 'App_currencyText_7b',
                        currencyCountText: 'App_currencyCountText_5a',
                    };
                var T = u(3457),
                    L = u(7613);
                const N = R.strings.mt_birthday.mail.emptyPostScreen,
                    M = (0, n.memo)(({ onTasks: e }) =>
                        r().createElement(
                            'div',
                            { className: 'EmptyPostScreen_base_fe' },
                            r().createElement('div', { className: 'EmptyPostScreen_icon_b3' }),
                            r().createElement(L.ZP, {
                                text: N.title(),
                                format: { classMix: 'EmptyPostScreen_title_37' },
                            }),
                            r().createElement(L.ZP, {
                                text: N.subTitle(),
                                format: { classMix: 'EmptyPostScreen_subTitle_a4' },
                            }),
                            r().createElement(
                                T.u5,
                                { type: T.L$.primary, onClick: e, mixClass: 'EmptyPostScreen_button_c0' },
                                r().createElement(L.ZP, { text: N.button() }),
                            ),
                        ),
                    );
                var k = u(6812),
                    O = u(2056),
                    I = u(7075);
                const H = R.strings.mt_birthday.mail.conditionList,
                    W = ['dayLimit', 'sentLimit', 'bonusChance'],
                    $ = (0, n.memo)(() =>
                        r().createElement(
                            'div',
                            { className: 'ConditionList_base_a8' },
                            W.map((e, t) =>
                                r().createElement(
                                    'div',
                                    { key: `${t}_${e}`, className: 'ConditionList_condition_5c' },
                                    r().createElement(L.ZP, {
                                        text: H.point(),
                                        className: 'ConditionList_conditionPoint_91',
                                    }),
                                    r().createElement(I.R, { text: H.condition.$dyn(e) }),
                                ),
                            ),
                        ),
                    ),
                    G = 'Phrase_blink_b6',
                    U = 'Phrase_particles_05',
                    z = R.strings.mt_birthday.mail.phraseContainer,
                    j = R.strings.player_phrases.player,
                    Z = (0, n.memo)(({ phraseID: e, disabled: t = !1, onRefresh: u }) => {
                        const a = (0, n.useState)(!1),
                            o = a[0],
                            i = a[1],
                            c = (0, n.useState)(e),
                            m = c[0],
                            d = c[1],
                            _ = (0, n.useCallback)(() => {
                                (S.$.playClick(), u(), i(!0));
                            }, [u]);
                        return (
                            (0, n.useEffect)(() => {
                                if (o)
                                    return (0, l.F)(() => {
                                        i(!1);
                                    }, 500);
                            }, [o]),
                            (0, n.useEffect)(
                                () =>
                                    (0, l.F)(() => {
                                        d(e);
                                    }, 250),
                                [e],
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'Phrase_base_85',
                                        'Phrase_base__active_0e',
                                        t && 'Phrase_base__disabled_17',
                                    ),
                                    onClick: o ? void 0 : _,
                                    onMouseEnter: () => {
                                        S.$.playHighlight();
                                    },
                                },
                                r().createElement('div', { className: 'Phrase_poster_5c' }),
                                !t && r().createElement('div', { className: s()(G, 'Phrase_blink__left_bf') }),
                                !t && r().createElement('div', { className: s()(G, 'Phrase_blink__right_62') }),
                                r().createElement('div', { className: 'Phrase_topBorderBlink_50' }),
                                t && r().createElement('div', { className: 'Phrase_disabledBg_ad' }),
                                r().createElement(
                                    'div',
                                    { className: 'Phrase_contentContainer_41' },
                                    r().createElement('div', { className: s()(U, 'Phrase_particles__right_a7') }),
                                    r().createElement('div', { className: s()(U, 'Phrase_particles__left_8b') }),
                                    r().createElement('div', {
                                        className: s()('Phrase_phraseShine_88', o && 'Phrase_phraseShine__animate_1b'),
                                    }),
                                    r().createElement('div', { className: 'Phrase_buttonBlink_79' }),
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Phrase_phraseContainer_f6',
                                                o && 'Phrase_phraseContainer__animate_bf',
                                            ),
                                        },
                                        r().createElement(L.ZP, {
                                            text: j.$dyn(`c_${m}`),
                                            format: { classMix: 'Phrase_phrase_e2' },
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'Phrase_refreshContainer_8d' },
                                        r().createElement('div', { className: 'Phrase_refreshIcon_1f' }),
                                        r().createElement(L.ZP, { text: z.refreshButton() }),
                                    ),
                                ),
                            )
                        );
                    });
                var q = u(280);
                const X = {
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
                    },
                    Y = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    V = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    K = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Q = (0, n.memo)(({ text: e, binding: t, classMix: u }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, n.useMemo)(() => t || {}, [t]);
                        let o = Y.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const u = o[0],
                                n = V.exec(u),
                                c = K.exec(u),
                                m = o[1];
                            if (n && c) {
                                const e = n[0],
                                    o = e + l++ + e;
                                ((i = i.replace(u, `%(${o})`)),
                                    (s[o] = X[e]
                                        ? r().createElement(
                                              'span',
                                              { className: X[e] },
                                              r().createElement(q.z, { text: m, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: a(e) },
                                              r().createElement(q.z, { text: m, binding: t }),
                                          )));
                            }
                            o = Y.exec(e);
                        }
                        return r().createElement(q.z, { text: i, classMix: u, binding: s });
                    }),
                    J = 'SelectPlayers_playerText_99',
                    ee = 'SelectPlayers_buttonBorder_98',
                    te = R.strings.mt_birthday.mail.selectPlayers,
                    ue = (0, n.memo)(
                        ({ selectedUserName: e = '', moreSelectedUsersCount: t = 0, disabled: u = !1, onClick: a }) => {
                            const o = s()(
                                    'SelectPlayers_base_13',
                                    'SelectPlayers_base__active_cb',
                                    u && 'SelectPlayers_base__disabled_31',
                                ),
                                i = t ? te.selectedMore() : te.selected(),
                                l = t ? { selectedUserName: e, moreSelectedUsersCount: t } : { selectedUserName: e },
                                c = (0, n.useCallback)(() => {
                                    S.$.playHighlight();
                                }, []),
                                m = (0, n.useCallback)(() => {
                                    (S.$.playClick(), a());
                                }, [a]);
                            return r().createElement(
                                'div',
                                { className: o, onClick: m, onMouseEnter: c },
                                r().createElement('div', { className: s()(ee, 'SelectPlayers_buttonBorder__top_14') }),
                                r().createElement('div', { className: 'SelectPlayers_activeBg_63' }),
                                u && r().createElement('div', { className: 'SelectPlayers_disabledBg_95' }),
                                e.length
                                    ? r().createElement(Q, { text: i, binding: l, classMix: J })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: 'SelectPlayers_playerIcon_58' }),
                                          r().createElement(L.ZP, { text: te.default(), format: { classMix: J } }),
                                      ),
                                r().createElement('div', {
                                    className: s()(ee, 'SelectPlayers_buttonBorder__bottom_31'),
                                }),
                            );
                        },
                    ),
                    ne = R.strings.mt_birthday.mail,
                    re = (0, n.memo)(({ sentCost: e, isSentError: t, isLoading: u, disabled: n = !1, onSent: a }) =>
                        r().createElement(
                            'div',
                            { className: 'SentButton_base_37' },
                            r().createElement(
                                T.u5,
                                { onClick: a, mixClass: 'SentButton_sentButton_a5', disabled: n },
                                u
                                    ? r().createElement('div', { className: 'SentButton_loader_3e' })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(L.ZP, {
                                              text: ne.sentButton(),
                                              format: {
                                                  classMix: 'SentButton_sentButtonText_b9',
                                                  binding: { sentCost: e },
                                              },
                                          }),
                                          r().createElement('div', { className: 'SentButton_postStampIcon_5d' }),
                                      ),
                            ),
                            t &&
                                r().createElement(
                                    'div',
                                    { className: 'SentButton_sentError_13' },
                                    r().createElement('div', { className: 'SentButton_errorIcon_40' }),
                                    r().createElement(L.ZP, {
                                        text: ne.sentError(),
                                        format: { classMix: 'SentButton_sentErrorText_a6' },
                                    }),
                                ),
                        ),
                    ),
                    ae = R.strings.mt_birthday.mail,
                    se = (0, n.memo)(
                        ({
                            userNickname: e,
                            moreSelectedUsersCount: t,
                            isSending: u,
                            phraseID: n,
                            sentCost: a,
                            isSentError: s,
                            isDisabledSentButton: o,
                            currencyCount: i,
                            onPlayerSelect: l,
                            onPhraseChange: c,
                            onSent: m,
                        }) =>
                            r().createElement(
                                'div',
                                { className: 'GiftSentForm_base_5e' },
                                r().createElement(
                                    'div',
                                    { className: 'GiftSentForm_conditionListContainer_f0' },
                                    r().createElement($, null),
                                ),
                                r().createElement(ue, {
                                    selectedUserName: e,
                                    moreSelectedUsersCount: t,
                                    disabled: u,
                                    onClick: l,
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'GiftSentForm_phraseContainer_9e' },
                                    r().createElement(Z, { phraseID: n, onRefresh: c, disabled: u }),
                                ),
                                r().createElement(re, {
                                    sentCost: a,
                                    isSentError: s,
                                    disabled: o,
                                    isLoading: u,
                                    onSent: m,
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'GiftSentForm_currencyContainer_89' },
                                    r().createElement(L.ZP, {
                                        text: ae.currencyCount(),
                                        format: {
                                            classMix: 'GiftSentForm_currencyText_03',
                                            binding: {
                                                currencyCount: r().createElement(L.ZP, {
                                                    text: String(i),
                                                    className: 'GiftSentForm_currencyCountText_94',
                                                }),
                                            },
                                        },
                                    }),
                                    r().createElement(
                                        O.u,
                                        { contentId: R.views.mt_birthday.lobby.tooltips.PostStampTooltip('resId') },
                                        r().createElement('div', {
                                            className: 'GiftSentForm_currencyPostStampIcon_c9',
                                        }),
                                    ),
                                ),
                            ),
                    );
                var oe = u(9630),
                    ie = u(9690),
                    le = u(7515),
                    ce = u(6128),
                    me = u(3724),
                    de = u(4553);
                var _e = u(6840);
                const Ee = ['api', 'value', 'maxValue', 'theme'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const Ae = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    pe = (e) => {
                        let t = e.api,
                            u = e.value,
                            a = e.maxValue,
                            o = void 0 === a ? 100 : a,
                            i = e.theme,
                            l = void 0 === i ? ce.uH : i,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Ee);
                        const m = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            _ = (0, n.useRef)(null),
                            E = (0, le.u)(0, u, o) / o,
                            g = (0, n.useCallback)(
                                (e) => {
                                    (_.current &&
                                        m.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, n) => {
                                            const r = u.offsetWidth - n.offsetWidth,
                                                a = e - Ae(u, t),
                                                s = (0, le.u)(0, r, a);
                                            n.style.left = `${s}rem`;
                                        })(e, m.current, _.current),
                                        d.current &&
                                            m.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                u,
                                                { container: n, line: r },
                                            ) => {
                                                const a = Math.max(0, Math.floor(n.offsetWidth * u) - 8e4),
                                                    s = e - Ae(n, t),
                                                    o = (0, le.u)(0, a, s);
                                                r.style.left = `${o}rem`;
                                            })(e, E, { line: d.current, container: m.current }));
                                },
                                [E],
                            ),
                            A = (0, n.useMemo)(() => (0, de.VQ)(l), [l]);
                        return (
                            (t.current.update = g),
                            r().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_f7', ref: m },
                                r().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_4d' },
                                    r().createElement(
                                        'div',
                                        {
                                            style: A,
                                            className: s()(
                                                'OptimizedProgressBar_background_dc',
                                                c.progressBarBackgroundClassMix,
                                            ),
                                            ref: _,
                                        },
                                        r().createElement(me.J, {
                                            size: c.size,
                                            classMix: c.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    r().createElement(
                                        ce.ko,
                                        ge({}, c, {
                                            lineRef: d,
                                            value: u,
                                            theme: l,
                                            maxValue: o,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Fe = {
                        [c.cJ.ExtraSmall]: {
                            width: 600,
                            pointsDistance: 400,
                            pointIndent: 102,
                            pointIndentLast: 50,
                            progressionIndent: 15,
                            infinityTranslate: 95,
                            infinityProgressionTranslate: 62,
                        },
                        [c.cJ.Small]: {
                            width: 875,
                            pointsDistance: 680,
                            pointIndent: 100,
                            pointIndentLast: 100,
                            progressionIndent: 15,
                            infinityTranslate: 86,
                            infinityProgressionTranslate: 58,
                        },
                        [c.cJ.Medium]: {
                            width: 910,
                            pointsDistance: 720,
                            pointIndent: 100,
                            pointIndentLast: 300,
                            progressionIndent: 15,
                            infinityTranslate: 98,
                            infinityProgressionTranslate: 50,
                        },
                        [c.cJ.Large]: {
                            width: 1130,
                            pointsDistance: 800,
                            pointIndent: 165,
                            pointIndentLast: 360,
                            progressionIndent: 60,
                            infinityTranslate: 160,
                            infinityProgressionTranslate: 121,
                        },
                        [c.cJ.ExtraLarge]: {
                            width: 1630,
                            pointsDistance: 1300,
                            pointIndent: 166,
                            pointIndentLast: 360,
                            progressionIndent: 60,
                            infinityTranslate: 160,
                            infinityProgressionTranslate: 121,
                        },
                    },
                    he = Object.assign({}, ce.uu, {
                        withStack: !0,
                        type: _e.r.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    De = (e, t) => (t < 0 ? 0 : e[t].maxPoints),
                    Ce = (e, t, u) => {
                        let n = 0;
                        const r = De(u, t - 2),
                            a = De(u, u.length - 1) / u.length;
                        return (
                            u.forEach((u, s) => {
                                s < t &&
                                    (n += ((e, t, u, n) => (e >= t ? n : (n / (t - u)) * (e - u)))(
                                        e,
                                        u.maxPoints,
                                        r,
                                        a,
                                    ));
                            }),
                            n
                        );
                    },
                    fe = (e) => Array.from(Array(e).keys()),
                    Be = 'Progression_point_e1',
                    ve = 'Progression_label_9e',
                    be = 'Progression_line_57',
                    we = 'Progression_secondaryLine_44',
                    Se = 'Progression_secondaryPointsCount_56',
                    ye = 'Progression_vector_77',
                    xe = (e) => (e >= 10 ? 21 : 15),
                    Pe = (0, n.memo)(
                        ({
                            currentLevel: e,
                            levels: t,
                            points: u,
                            deltaFrom: a,
                            infinityProgressPoints: o,
                            infinityProgressDeltaFrom: i,
                            infinityProgressMaxPointsCount: m,
                            infinitySubStagesCount: d,
                            onAnimationEnded: _,
                        }) => {
                            const E = (0, c.GS)().mediaSize,
                                g = (0, n.useRef)({ update: () => {} }),
                                A = (0, n.useRef)({ update: () => {} }),
                                p = c.cJ[E][0].toLowerCase() + c.cJ[E].slice(1),
                                F = t[t.length - 1],
                                h = null == F ? void 0 : F.number,
                                D = (0, n.useState)(e > h),
                                C = D[0],
                                f = D[1],
                                B = (0, n.useState)(e > h),
                                v = B[0],
                                b = B[1],
                                w = (0, n.useState)(!1),
                                y = w[0],
                                x = w[1],
                                P = 1 === e,
                                T = e >= (null == F ? void 0 : F.number),
                                R = null == F ? void 0 : F.maxPoints,
                                N = (0, n.useMemo)(
                                    () => [...t, Object.assign({}, F, { number: (null == F ? void 0 : F.number) + 1 })],
                                    [F, t],
                                ),
                                M = Fe[E].width,
                                k = Fe[E].pointsDistance * h,
                                O = C
                                    ? k - Fe[E].pointIndent / 3 - Fe[E].progressionIndent
                                    : (e - 1) * Fe[E].pointsDistance - Fe[E].pointIndent;
                            return (
                                (0, n.useEffect)(() => {
                                    if (u >= R)
                                        return (0, l.F)(() => {
                                            f(!0);
                                        }, Re);
                                }, [u, R]),
                                (0, n.useEffect)(() => {
                                    if (C)
                                        return (0, l.F)(() => {
                                            b(!0);
                                        }, 1e3);
                                }, [C]),
                                (0, n.useEffect)(() => {
                                    if (C) {
                                        if (o !== i)
                                            return (0, l.F)(() => {
                                                _();
                                            }, 1500);
                                    } else if (u !== a)
                                        return (0, l.F)(() => {
                                            _();
                                        }, 1500);
                                }, [a, i, o, C, _, u]),
                                (0, n.useEffect)(() => {
                                    u > a && (0, S.G)('bp_progress_bar_start');
                                }, [a, u]),
                                (0, oe.t)(
                                    () => (
                                        x(!0),
                                        (0, l.F)(() => {
                                            x(!1);
                                        }, 0)
                                    ),
                                    [],
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'Progression_base_99', style: { width: `${M + 40}rem` } },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Progression_container_4b',
                                                P && 'Progression_container__first_40',
                                                T && 'Progression_container__last_78',
                                            ),
                                            style: { width: `${M}rem` },
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    'Progression_progressLineContainer_c4',
                                                    (v || y) && 'Progression_progressLineContainer__completed_09',
                                                ),
                                                style: { width: `${k}rem`, transform: `translateX(${-1 * O}rem)` },
                                            },
                                            N.map((u, n) => {
                                                const a = (null == u ? void 0 : u.number) === e && !C;
                                                return r().createElement(
                                                    'div',
                                                    {
                                                        key: `${null == u ? void 0 : u.number}_${n}`,
                                                        className: Be,
                                                        style: {
                                                            transform: `translateX(${n * Fe[E].pointsDistance}rem)`,
                                                        },
                                                    },
                                                    r().createElement(L.ZP, {
                                                        className: ve,
                                                        text: String((0, ie.HG)((null == u ? void 0 : u.number) - 1)),
                                                    }),
                                                    r().createElement('div', { className: be }),
                                                    a &&
                                                        r().createElement(
                                                            r().Fragment,
                                                            null,
                                                            fe(u.substagesCount - 1).map((e, t) =>
                                                                r().createElement('div', {
                                                                    key: `${e}_${t}`,
                                                                    className: we,
                                                                    style: {
                                                                        transform: `translateX(${(Fe[E].pointsDistance / u.substagesCount) * (t + 1)}rem) translateY(53rem)`,
                                                                    },
                                                                }),
                                                            ),
                                                            r().createElement(L.ZP, {
                                                                text: String(t[n].maxPoints - t[n].substagesCount),
                                                                className: Se,
                                                            }),
                                                            r().createElement(L.ZP, {
                                                                text: String(t[n].maxPoints),
                                                                className: Se,
                                                                style: {
                                                                    transform: `translateX(${Fe[E].pointsDistance - xe(t[n].maxPoints)}rem) translateY(49rem)`,
                                                                },
                                                            }),
                                                        ),
                                                );
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: 'Progression_progressBarContainer_44' },
                                                r().createElement(pe, {
                                                    animationSettings: he,
                                                    value: Ce(u, e, t),
                                                    deltaFrom: Ce(a, e, t),
                                                    maxValue: R,
                                                    api: g,
                                                }),
                                            ),
                                        ),
                                    ),
                                    !T &&
                                        r().createElement(
                                            'div',
                                            { className: 'Progression_points_83', style: { width: `${M}rem` } },
                                            r().createElement(
                                                'div',
                                                { className: s()(Be, 'Progression_point__last_4a') },
                                                r().createElement(L.ZP, { text: String((0, ie.HG)(h)), className: ve }),
                                                r().createElement('div', { className: be }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Progression_infinityContainer_29',
                                                !v && 'Progression_infinityContainer__animated_15',
                                            ),
                                        },
                                        C
                                            ? r().createElement(
                                                  'div',
                                                  {
                                                      className: s()(
                                                          'Progression_activeInfinityContainer_95',
                                                          !v && 'Progression_activeInfinityContainer__animated_45',
                                                      ),
                                                      style: {
                                                          transform: `translateX(${-1 * M + Fe[E].infinityProgressionTranslate}rem)`,
                                                          width: `${Fe[E].pointsDistance}rem`,
                                                      },
                                                  },
                                                  r().createElement(
                                                      'div',
                                                      { className: 'Progression_infinityVectorContainer_bd' },
                                                      r().createElement('div', {
                                                          className: ye,
                                                          style: {
                                                              backgroundImage: `url(R.images.mt_birthday.gui.maps.icons.tankMail.vector_left_${p})`,
                                                          },
                                                      }),
                                                      r().createElement('div', {
                                                          className: 'Progression_infinitySymbol_e6',
                                                      }),
                                                      r().createElement('div', {
                                                          className: ye,
                                                          style: {
                                                              backgroundImage: `url(R.images.mt_birthday.gui.maps.icons.tankMail.vector_right_${p})`,
                                                          },
                                                      }),
                                                  ),
                                                  r().createElement(
                                                      'div',
                                                      { className: Be },
                                                      r().createElement('div', { className: be }),
                                                  ),
                                                  r().createElement(L.ZP, { text: String(0), className: Se }),
                                                  fe(d).map((e, t) =>
                                                      r().createElement('div', {
                                                          key: `${e}_${t}`,
                                                          className: we,
                                                          style: {
                                                              transform: `translateX(${(Fe[E].pointsDistance / d) * t}rem) translateY(53rem)`,
                                                          },
                                                      }),
                                                  ),
                                                  r().createElement(L.ZP, {
                                                      text: String(d),
                                                      className: Se,
                                                      style: {
                                                          transform: `translateX(${Fe[E].pointsDistance - xe(d)}rem) translateY(49rem)`,
                                                      },
                                                  }),
                                                  r().createElement(
                                                      'div',
                                                      {
                                                          className: Be,
                                                          style: {
                                                              transform: `translateX(${Fe[E].pointsDistance}rem)`,
                                                          },
                                                      },
                                                      r().createElement('div', { className: be }),
                                                  ),
                                                  r().createElement(
                                                      'div',
                                                      { className: 'Progression_activeInfinityProgressContainer_3d' },
                                                      r().createElement(pe, {
                                                          animationSettings: he,
                                                          value: o,
                                                          deltaFrom: i,
                                                          maxValue: m,
                                                          api: A,
                                                      }),
                                                  ),
                                              )
                                            : r().createElement(
                                                  'div',
                                                  {
                                                      className: 'Progression_disabledProgressContainer_3c',
                                                      style: {
                                                          transform: `translateX(${T && -1 * Fe[E].infinityTranslate}rem)`,
                                                      },
                                                  },
                                                  T &&
                                                      r().createElement(
                                                          'div',
                                                          { className: 'Progression_infinityProgressContainer_ca' },
                                                          r().createElement(pe, {
                                                              animationSettings: he,
                                                              value: 0,
                                                              deltaFrom: 0,
                                                              maxValue: m,
                                                              api: A,
                                                              disabled: !0,
                                                          }),
                                                      ),
                                                  r().createElement('div', {
                                                      className: 'Progression_infinityIcon_6c',
                                                  }),
                                                  r().createElement('div', {
                                                      className: s()(be, 'Progression_infinityLine_65'),
                                                  }),
                                              ),
                                    ),
                                )
                            );
                        },
                    );
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const Le = R.strings.mt_birthday.mail,
                    Re = 1500,
                    Ne = (0, m.Pi)(() => {
                        var e, t, u;
                        const a = D(),
                            m = a.controls,
                            E = a.model,
                            g = (0, c.GS)().mediaSize,
                            A = E.root.get(),
                            p = A.currencyCount,
                            F = A.isSentError,
                            h = A.isSending,
                            C = A.phraseID,
                            f = A.isPostError,
                            B = E.progression.get(),
                            v = B.currentLevel,
                            b = B.currentPoints,
                            w = B.pointsDeltaFrom,
                            S = B.infinityStartPoints,
                            y = B.infinityMaxPoints,
                            T = B.infinitySubstagesCount,
                            L = B.infinityDeltaFrom,
                            R = 1 * E.computes.getSelectedUsers().length,
                            N = (null == (e = E.computes.getFirstUser()) ? void 0 : e.clanTag) || '',
                            O = (null == (t = E.computes.getFirstUser()) ? void 0 : t.userNickName) || '',
                            I = E.computes.getMoreSelectedUsers().length,
                            H = E.computes.getProgressLevels(),
                            W = E.computes.getProgressionMaxPoints(),
                            $ = (0, n.useState)(b >= W),
                            G = $[0],
                            U = $[1],
                            z = (0, n.useState)(d.wO.STOP),
                            j = z[0],
                            Z = z[1],
                            q = (0, n.useState)(!1),
                            X = q[0],
                            Y = q[1],
                            V = (0, n.useState)(!1),
                            K = V[0],
                            Q = V[1],
                            J = G
                                ? E.computes.getInfinityRewards()
                                : (null == (u = E.computes.getLevelByNumber(v)) ? void 0 : u.rewards) || [],
                            ee = R < 1 || R > p || !p || h,
                            te = L === b ? b - S : L - S,
                            ue = (!f && Boolean(p)) || X || K,
                            ne = g < c.cJ.Medium ? o.h2.Small : o.h2.Big,
                            re = (0, n.useCallback)(() => {
                                (m.onSent(), Y(!0));
                            }, [m]);
                        ((0, n.useEffect)(
                            () =>
                                (0, l.F)(() => {
                                    X && !p && Q(!0);
                                }, 600),
                            [p, X],
                        ),
                            (0, n.useEffect)(
                                () =>
                                    (0, l.F)(() => {
                                        K && Q(!1);
                                    }, 400),
                                [K],
                            ));
                        const ae = (0, n.useMemo)(
                            () =>
                                f
                                    ? r().createElement(k.U, null)
                                    : p || X
                                      ? r().createElement(se, {
                                            userNickname: (0, d.Xw)(O, N, Boolean(I)),
                                            moreSelectedUsersCount: I,
                                            isSending: h,
                                            phraseID: C,
                                            sentCost: R || 1,
                                            isSentError: F,
                                            isDisabledSentButton: ee,
                                            currencyCount: p,
                                            onPlayerSelect: m.onPlayerSelect,
                                            onPhraseChange: m.onPhraseChange,
                                            onSent: re,
                                        })
                                      : r().createElement(M, { onTasks: m.onTasks }),
                            [m.onPhraseChange, m.onPlayerSelect, m.onTasks, re, p, ee, f, h, F, I, C, R, N, O, X],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                if (b >= W)
                                    return (0, l.F)(() => {
                                        U(!0);
                                    }, Re);
                            }, [b, E.computes, W]),
                            (0, n.useEffect)(
                                () => () => {
                                    m.onComponentDestroyed();
                                },
                                [],
                            ),
                            r().createElement(
                                'div',
                                { className: P.base },
                                r().createElement(
                                    'div',
                                    { className: P.header },
                                    r().createElement(_.h, { title: Le.header(), subTitle: Le.description() }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: P.content },
                                    r().createElement('div', {
                                        className: s()(P.background, ue && P.background__visible),
                                    }),
                                    r().createElement('div', {
                                        className: s()(P.emptyBackground, !ue && P.emptyBackground__visible),
                                    }),
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                P.giftContainer,
                                                !ue && P.giftContainer__center,
                                                K && P.giftContainer__leave,
                                            ),
                                        },
                                        ae,
                                    ),
                                    ue &&
                                        r().createElement(
                                            'div',
                                            { className: s()(P.lootboxContainer, K && P.lootboxContainer__leave) },
                                            r().createElement(x, {
                                                lootboxSequenceState: j,
                                                setLootboxSequenceState: Z,
                                                isBlinkAnimation: X,
                                                setIsBlinkAnimation: Y,
                                            }),
                                        ),
                                    !f &&
                                        r().createElement(
                                            'div',
                                            { className: P.progressionBlock },
                                            r().createElement(
                                                'div',
                                                { className: P.rewardsContainer },
                                                J.map((e, t) =>
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            key: `${e.icon}_${t}_${v}`,
                                                            className: s()(
                                                                P.reward,
                                                                t === J.length - 1 && P.reward__last,
                                                            ),
                                                        },
                                                        r().createElement(
                                                            i.Q,
                                                            Te({}, e, { image: e.image(ne), size: ne }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: P.progressionContainer },
                                                r().createElement(Pe, {
                                                    currentLevel: v,
                                                    points: b,
                                                    deltaFrom: w,
                                                    levels: H,
                                                    infinityProgressMaxPointsCount: y - S,
                                                    infinityProgressDeltaFrom: te,
                                                    infinityProgressPoints: b - S,
                                                    infinitySubStagesCount: T,
                                                    onAnimationEnded: m.onAnimationEnded,
                                                }),
                                            ),
                                        ),
                                ),
                            )
                        );
                    }),
                    Me = (0, n.memo)((e) => {
                        const t = (0, n.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return r().createElement(h, { options: t }, r().createElement(Ne, null));
                    });
            },
            6812: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => o });
                var n = u(7613),
                    r = u(6179),
                    a = u.n(r);
                const s = R.strings.mt_birthday.mail.errorPostScreen,
                    o = (0, r.memo)(() =>
                        a().createElement(
                            'div',
                            { className: 'ErrorPostScreen_base_e9' },
                            a().createElement('div', { className: 'ErrorPostScreen_icon_e4' }),
                            a().createElement(n.ZP, {
                                text: s.title(),
                                format: { classMix: 'ErrorPostScreen_title_d3' },
                            }),
                            a().createElement(n.ZP, {
                                text: s.subTitle(),
                                format: { classMix: 'ErrorPostScreen_subTitle_89' },
                            }),
                        ),
                    );
            },
            9417: (e, t, u) => {
                'use strict';
                u.d(t, { h: () => s });
                var n = u(7613),
                    r = u(6179),
                    a = u.n(r);
                const s = (0, r.memo)(({ title: e, subTitle: t }) =>
                    a().createElement(
                        'div',
                        { className: 'Header_base_f9' },
                        a().createElement(n.ZP, { format: { classMix: 'Header_headerTitle_c9' }, text: e }),
                        a().createElement(n.ZP, { format: { classMix: 'Header_headerDescription_c5' }, text: t }),
                    ),
                );
            },
            6128: (e, t, u) => {
                'use strict';
                u.d(t, { ko: () => I, uu: () => O, uH: () => k });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a),
                    o = u(9960),
                    i = u(3724),
                    l = u(6840);
                const c = {
                        base: 'ProgressBarBlink_base_22',
                        base__medium: 'ProgressBarBlink_base__medium_0a',
                        base__small: 'ProgressBarBlink_base__small_b5',
                    },
                    m = ({ size: e }) => {
                        const t = r()(c.base, c[`base__${e}`]);
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
                    _ = (0, a.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: a, withoutBounce: o }) => {
                            const i = r()(
                                    d.base,
                                    d[`base__${e}`],
                                    u && d.base__disabled,
                                    a && d.base__finished,
                                    o && d.base__withoutBounce,
                                ),
                                l = !u && !a;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                s().createElement('div', { className: d.pattern }),
                                s().createElement('div', { className: d.gradient }),
                                l && s().createElement(m, { size: e }),
                            );
                        },
                    );
                var E = u(122);
                let g, A;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(g || (g = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(A || (A = {})));
                const p = (e) => (e ? { left: 0 } : { right: 0 }),
                    F = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    h = (e) => ({ transitionDuration: `${e}ms` }),
                    D = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: o,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const _ = i < n,
                                A = (0, a.useState)(g.Idle),
                                D = A[0],
                                C = A[1],
                                f = D === g.End,
                                B = D === g.Idle,
                                v = D === g.Grow,
                                b = D === g.Shrink,
                                w = (0, a.useCallback)(
                                    (e) => {
                                        (C(e), c && c(e));
                                    },
                                    [c],
                                ),
                                S = (0, a.useCallback)(
                                    (e, t) =>
                                        (0, E.F)(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, a.useEffect)(() => {
                                if (!u)
                                    return B
                                        ? S(g.Grow, t)
                                        : v
                                          ? S(g.Shrink, e)
                                          : b
                                            ? S(g.End, e)
                                            : void (f && l && l());
                            }, [S, u, f, v, B, b, l, t, e]);
                            const y = (0, a.useMemo)(() => Object.assign({ width: '100%' }, h(e), p(_)), [_, e]),
                                x = (0, a.useMemo)(() => Object.assign({ width: '0%' }, h(e), p(_)), [_, e]),
                                P = (0, a.useMemo)(() => Object.assign({ width: '0%' }, F(_, n), h(e)), [n, _, e]),
                                T = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, F(_, n), h(e)),
                                    [n, _, i, e],
                                );
                            if (f) return null;
                            const L = r()(
                                'ProgressBarDeltaGrow_base_2a',
                                d,
                                _ && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_fd',
                            );
                            return s().createElement(
                                'div',
                                { style: B ? P : T, className: L },
                                s().createElement(
                                    'div',
                                    { style: b ? x : y, className: 'ProgressBarDeltaGrow_glow_37' },
                                    s().createElement(m, { size: o }),
                                ),
                            );
                        },
                    ),
                    C = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, a.useState)(!1),
                                E = d[0],
                                A = d[1],
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (e === g.Shrink && A(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                h = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: t,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: E ? h : F,
                                }),
                                u >= 0 &&
                                    s().createElement(D, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    f = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: r,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                d = (0, a.useState)(A.Idle),
                                _ = d[0],
                                g = d[1],
                                p = _ === A.In,
                                F = _ === A.End,
                                h = _ === A.Idle,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (g(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (h && !u) {
                                    const e = t;
                                    return (0, E.F)(() => {
                                        D(A.In);
                                    }, e);
                                }
                            }, [D, u, h, t]),
                                (0, a.useEffect)(() => {
                                    if (p) {
                                        const u = e + t;
                                        return (0, E.F)(() => {
                                            (i && i(), D(A.End));
                                        }, u);
                                    }
                                }, [D, p, i, t, e]));
                            const C = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return F
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_81', style: B },
                                      s().createElement(
                                          'div',
                                          { style: h ? C : f, className: 'ProgressBarDeltaSimple_delta_c8' },
                                          s().createElement(m, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    B = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: t,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(f, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
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
                const w = (0, a.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, v);
                        const r = (0, a.useState)(!1),
                            o = r[0],
                            i = r[1],
                            c = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && i(e), e && t && t(), u && u());
                            }, [o, t, u, n.to]);
                        switch (n.animationSettings.type) {
                            case l.r.Simple:
                                return s().createElement(B, b({}, n, { onEndAnimation: c, isComplete: o }));
                            case l.r.Growing:
                                return s().createElement(C, b({}, n, { onEndAnimation: c, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    S = ({ size: e, value: t, lineRef: u, disabled: n, onComplete: r }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, a.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            s().createElement(_, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: u })
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
                const P = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, y);
                    const n = (0, a.useRef)({}),
                        r = (0, a.useCallback)(() => {
                            ((n.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof n.current.from ? n.current.from : u.from;
                    return (
                        (n.current.from = o),
                        s().createElement(w, x({}, u, { onEndAnimation: r, key: `${o}-${u.to}`, from: o }))
                    );
                });
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const L = (0, a.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: n,
                        deltaFrom: r,
                        animationSettings: a,
                        onEndAnimation: o,
                        onChangeAnimationState: i,
                        onComplete: l,
                    }) => {
                        if (r === t)
                            return s().createElement(S, {
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
                            animationSettings: a,
                            onComplete: l,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                        };
                        return a.withStack ? s().createElement(P, c) : s().createElement(w, T({ key: `${r}-${t}` }, c));
                    },
                );
                var R = u(4553),
                    N = u(7515);
                const M = (e, t, u) => ('number' == typeof u ? ((0, N.u)(0, t, u) / t) * 100 : e),
                    k = R.Gh,
                    O = {
                        freezed: !1,
                        withStack: !1,
                        type: l.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    I = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = k,
                            size: u = l.$.Default,
                            animationSettings: n = O,
                            disabled: c = !1,
                            withoutBackground: m = !1,
                            progressBarBackgroundClassMix: d,
                            value: _,
                            deltaFrom: E,
                            lineRef: g,
                            onChangeAnimationState: A,
                            onEndAnimation: p,
                            onComplete: F,
                        }) => {
                            const h = ((e, t, u) =>
                                (0, a.useMemo)(() => {
                                    const n = ((0, N.u)(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: M(n, t, u) };
                                }, [u, t, e]))(_, e, E);
                            return s().createElement(
                                'div',
                                { className: r()(o.Z.base, o.Z[`base__${u}`]), style: (0, R.VQ)(t) },
                                !m && s().createElement(i.J, { size: u, classMix: d }),
                                s().createElement(L, {
                                    size: u,
                                    lineRef: g,
                                    disabled: c,
                                    value: h.value,
                                    deltaFrom: h.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: p,
                                    onChangeAnimationState: A,
                                    onComplete: F,
                                }),
                            );
                        },
                    );
            },
            3724: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    s = u.n(a),
                    o = u(9960),
                    i = u(6840);
                const l = ({ size: e = i.$.Default, classMix: t }) =>
                    s().createElement('div', { className: r()(o.Z.background, o.Z[`background__${e}`], t) });
            },
            4553: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => r, VQ: () => n });
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
                    r = {
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
                let n, r;
                (u.d(t, { $: () => n, r: () => r }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(r || (r = {})));
            },
            7075: (e, t, u) => {
                'use strict';
                u.d(t, { R: () => c });
                var n = u(280),
                    r = u(6179),
                    a = u.n(r);
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
                    o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, r.memo)(({ text: e, binding: t, classMix: u }) => {
                        const c = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            m = (0, r.useMemo)(() => t || {}, [t]);
                        let d = o.exec(e),
                            _ = e,
                            E = 0;
                        for (; d; ) {
                            const u = d[0],
                                r = i.exec(u),
                                g = l.exec(u),
                                A = d[1].split(' ');
                            if (r && g) {
                                const e = r[0],
                                    o = e + E++ + e;
                                ((_ = _.replace(u, `%(${o})`)),
                                    (m[o] = s[e]
                                        ? A.map((u, r) =>
                                              a().createElement(n.z, {
                                                  key: `${u}_${r}`,
                                                  text: `${u}${r < A.length - 1 ? ' ' : ''}`,
                                                  binding: t,
                                                  classMix: s[e],
                                              }),
                                          )
                                        : A.map((u, r) =>
                                              a().createElement(
                                                  'div',
                                                  { style: c(e), key: `${u}_${r}` },
                                                  a().createElement(n.z, {
                                                      text: `${u}${r < A.length - 1 ? ' ' : ''}`,
                                                      binding: t,
                                                  }),
                                              ),
                                          )));
                            }
                            d = o.exec(e);
                        }
                        return a().createElement(n.z, { text: _, classMix: u, binding: m });
                    });
            },
            4538: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Ay: () => c,
                    FE: () => p,
                    OY: () => d,
                    Xg: () => m,
                    Xw: () => i,
                    hD: () => _,
                    lW: () => l,
                    sq: () => F,
                    wO: () => A,
                });
                var n = u(126),
                    r = u(2862),
                    a = u(729),
                    s = u(5415),
                    o = u(3649);
                u(8933);
                const i = (e, t, u = !1) => {
                        let n = e.length;
                        if (!n) return '';
                        n = t ? (u ? 6 : 11) : u ? 11 : 16;
                        const r = e.length > n ? '...' : '';
                        return `${e.slice(0, n)}${r}${t}`;
                    },
                    l = (e) => ({
                        name: e.name,
                        image: (t) =>
                            ((e, t = r.h2.Small) => {
                                const u = (0, o.BN)(e.vehicleName || '');
                                if (e.name === r.E4.Vehicles)
                                    switch (t) {
                                        case r.h2.Mini:
                                        case r.h2.Small:
                                        case r.h2.S48x48:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                        case r.h2.Big:
                                        case r.h2.S80x80:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                        case r.h2.S128x100:
                                        case r.h2.S180x135:
                                            return `R.images.gui.maps.shop.vehicles.c_180x135.${u}`;
                                        case r.h2.S232x174:
                                        case r.h2.S296x222:
                                            return `R.images.gui.maps.shop.vehicles.c_360x270.${u}`;
                                        case r.h2.S400x300:
                                        case r.h2.S600x450:
                                            return `R.images.gui.maps.shop.vehicles.c_600x450.${u}`;
                                        default:
                                            return (
                                                console.error('Unknown vehicle image size', t, e.vehicleName),
                                                'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                            );
                                    }
                                if (e.name === r.E4.TmanToken)
                                    switch (t) {
                                        case r.h2.Mini:
                                        case r.h2.Small:
                                        case r.h2.S48x48:
                                        case r.h2.Big:
                                        case r.h2.S80x80:
                                            return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                        case r.h2.S128x100:
                                        case r.h2.S180x135:
                                        case r.h2.S232x174:
                                            return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                        case r.h2.S296x222:
                                            return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                        case r.h2.S400x300:
                                            return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                        case r.h2.S600x450:
                                            return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                        default:
                                            return (
                                                console.error('Unknown image size', t),
                                                'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                            );
                                    }
                                if (e.name === r.E4.CollectionItem)
                                    switch (t) {
                                        case r.h2.Mini:
                                        case r.h2.Small:
                                        case r.h2.S48x48:
                                            return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                        case r.h2.Big:
                                        case r.h2.S80x80:
                                            return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                        case r.h2.S128x100:
                                        case r.h2.S180x135:
                                        case r.h2.S232x174:
                                            return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                        case r.h2.S296x222:
                                            return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                        case r.h2.S400x300:
                                            return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                        case r.h2.S600x450:
                                            return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                        default:
                                            console.error('Unknown image size', t);
                                    }
                                if (e.name === r.E4.StyleProgress)
                                    switch (t) {
                                        case r.h2.Small:
                                        case r.h2.Big:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.progressionStyle`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                return (0, a.ry)(e, t);
                            })(e, t),
                        value: e.value,
                        valueType: (0, a.p3)(e.name),
                        label: e.label,
                        special: e.overlayType,
                        tooltipArgs: (0, a.pI)({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
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
                        toyID: e.toyID,
                        rankValue: e.rankValue,
                        icon: e.icon,
                        isNew: e.isNew,
                    }),
                    c = (e, t) =>
                        e < s.cJ.Medium
                            ? t
                                ? r.h2.Big
                                : r.h2.Small
                            : e === s.cJ.Medium
                              ? t
                                  ? r.h2.S180x135
                                  : r.h2.Big
                              : t
                                ? r.h2.S296x222
                                : r.h2.S180x135;
                let m;
                !(function (e) {
                    ((e.Stamp = 'stamps'), (e.Presents = 'presents'), (e.Reward = 'rewards'));
                })(m || (m = {}));
                const d = Object.keys(m),
                    _ = {
                        [s.cJ.ExtraSmall]: 109,
                        [s.cJ.Small]: 109,
                        [s.cJ.Medium]: 141,
                        [s.cJ.Large]: 209,
                        [s.cJ.ExtraLarge]: 209,
                    };
                let E, g, A;
                (!(function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(E || (E = {})),
                    (function (e) {
                        ((e.Player = 'userName'),
                            (e.Vehicle = 'vehicleShortName'),
                            (e.Damage = 'totalDamage'),
                            (e.Kills = 'kills'),
                            (e.Experience = 'xp'),
                            (e.Gift = 'gift'));
                    })(g || (g = {})),
                    Object.values(g),
                    g.Player,
                    (function (e) {
                        ((e.PLAY = 'play'), (e.STOP = 'stop'));
                    })(A || (A = {})));
                const p = {
                        width: 640,
                        height: 400,
                        frameCount: 35,
                        chunk: { count: 1, rows: 6, columns: 6 },
                        getChunkPath: () => 'R.images.mt_birthday.gui.maps.icons.tankMail.boxCanvas',
                    },
                    F = (0, n.q)(p);
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], a = !0, s = 0; s < t.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 255),
        (() => {
            var e = { 255: 0, 126: 0, 948: 0, 419: 0, 849: 0, 610: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, s, o] = u,
                        i = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9756));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
