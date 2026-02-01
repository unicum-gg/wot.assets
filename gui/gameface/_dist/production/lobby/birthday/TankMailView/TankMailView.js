(() => {
    var __webpack_modules__ = {
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => F });
                var r = t(6483),
                    n = t.n(r),
                    a = t(9887),
                    s = t.n(a),
                    i = t(3377),
                    o = t(6179),
                    l = t.n(o),
                    c = t(5026);
                const E = [
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
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
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
                    d = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    A = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    F = (0, i.ZP)((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            a = e.m,
                            s = e.mt,
                            i = void 0 === s ? a : s,
                            F = e.mr,
                            D = void 0 === F ? a : F,
                            g = e.mb,
                            B = void 0 === g ? a : g,
                            C = e.ml,
                            h = void 0 === C ? a : C,
                            p = e.column,
                            b = e.row,
                            f = e.flexDirection,
                            v = void 0 === f ? (p ? 'column' : b && 'row') || void 0 : f,
                            S = e.flexStart,
                            x = e.center,
                            w = e.flexEnd,
                            y = e.spaceBetween,
                            P = e.spaceAround,
                            T = e.justifyContent,
                            R =
                                void 0 === T
                                    ? (S ? 'flex-start' : x && 'center') ||
                                      (w && 'flex-end') ||
                                      (y && 'space-between') ||
                                      (P && 'space-around') ||
                                      void 0
                                    : T,
                            k = e.alignItems,
                            O = void 0 === k ? (S ? 'flex-start' : x && 'center') || (w && 'flex-end') || void 0 : k,
                            M = e.alignSelf,
                            L = e.wrap,
                            N = e.flexWrap,
                            I = void 0 === N ? (L ? 'wrap' : void 0) : N,
                            U = e.grow,
                            G = e.shrink,
                            $ = e.flex,
                            H = void 0 === $ ? (U || G ? `${U ? 1 : 0} ${G ? 1 : 0} auto` : void 0) : $,
                            W = e.style,
                            j = e.children,
                            Z = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, E);
                        const z = (0, o.useMemo)(() => {
                                const e = { mt: i, mr: D, mb: B, ml: h },
                                    u = ((e) =>
                                        d.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(_[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        d.reduce((u, t) => {
                                            const r = e[t];
                                            return ('number' == typeof r && (u[A[t]] = r + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, W, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: H,
                                        alignSelf: M,
                                        display: v || O ? 'flex' : void 0,
                                        flexDirection: v,
                                        flexWrap: I,
                                        justifyContent: R,
                                        alignItems: O,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, D, B, h, W, H, M, v, I, R, O]),
                            X = z.computedStyle,
                            q = z.computedClassNames;
                        return l().createElement('div', m({ className: n()(c.Z.base, ...q, u), style: X }, Z), j);
                    });
            },
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, u5: () => E });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7727),
                    s = t(6179),
                    i = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: c,
                    mixClass: E,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: d,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: g,
                    onClick: B,
                }) => {
                    const C = (0, s.useRef)(null),
                        h = (0, s.useState)(t),
                        p = h[0],
                        b = h[1],
                        f = (0, s.useState)(!1),
                        v = f[0],
                        S = f[1],
                        x = (0, s.useState)(!1),
                        w = x[0],
                        y = x[1],
                        P = (0, s.useCallback)(() => {
                            c || (C.current && (C.current.focus(), b(!0)));
                        }, [c]),
                        T = (0, s.useCallback)(
                            (e) => {
                                p && null !== C.current && !C.current.contains(e.target) && b(!1);
                            },
                            [p],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                c || (B && B(e));
                            },
                            [c, B],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== m && (0, a.G)(m), d && d(e), y(!0));
                            },
                            [c, m, d],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                c || (D && D(e), S(!1));
                            },
                            [c, D],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, a.G)(_), F && F(e), t && P(), S(!0));
                            },
                            [c, _, F, P, t],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (g && g(e), S(!1));
                            },
                            [c, g],
                        ),
                        U = n()(
                            o.Z.base,
                            o.Z[`base__${r}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${u}`]]: u,
                                [o.Z.base__focus]: p,
                                [o.Z.base__highlightActive]: v,
                                [o.Z.base__firstHover]: w,
                            },
                            E,
                        ),
                        G = n()(o.Z.state, o.Z.state__default);
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
                            b(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: C,
                                className: U,
                                onMouseEnter: O,
                                onMouseMove: M,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: I,
                                onClick: k,
                            },
                            r !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: G },
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
                const E = (0, s.memo)(c);
            },
            2106: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { L: () => r }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(n || (n = {})));
            },
            126: (e, u, t) => {
                'use strict';
                function r(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (r) => {
                        const n = r % t,
                            a = (n % u.columns) * e.width,
                            s = Math.trunc(n / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(r / t)), x: a, y: s };
                    };
                }
                t.d(u, { q: () => r });
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var r = t(6179),
                    n = t.n(r),
                    a = t(4179);
                class s extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    s = t.n(a),
                    i = t(3649),
                    o = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: a = i.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              r.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  n().createElement(
                                      'div',
                                      { className: s()(o.Z.base, t), key: `${u}-${l}` },
                                      (0, i.Uw)(u, a, e).map((e, u) =>
                                          n().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    a = t(1043),
                    s = t(5262);
                const i = r.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, a.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    a = t(6536),
                    s = t(3495),
                    i = t(1043),
                    o = t(5262),
                    l = t(3138);
                (0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(s.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        E = t[1],
                        m = (0, r.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                r = l.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: r }, (0, o.T)(t, r, i.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', m), [m]));
                    const _ = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const s = ['children'],
                    i = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, s);
                        const i = (0, r.useContext)(a.Y),
                            o = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            E = i.small,
                            m = i.extraSmall,
                            _ = i.extraLargeWidth,
                            d = i.largeWidth,
                            A = i.mediumWidth,
                            F = i.smallWidth,
                            D = i.extraSmallWidth,
                            g = i.extraLargeHeight,
                            B = i.largeHeight,
                            C = i.mediumHeight,
                            h = i.smallHeight,
                            p = i.extraSmallHeight,
                            b = { extraLarge: g, large: B, medium: C, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && E) return u;
                            if (t.extraSmall && m) return u;
                        } else {
                            if (t.extraLargeWidth && _) return (0, n.H)(u, t, b);
                            if (t.largeWidth && d) return (0, n.H)(u, t, b);
                            if (t.mediumWidth && A) return (0, n.H)(u, t, b);
                            if (t.smallWidth && F) return (0, n.H)(u, t, b);
                            if (t.extraSmallWidth && D) return (0, n.H)(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && p) return u;
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
                    (0, r.memo)(i));
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => r });
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                (t.d(u, { YN: () => r.Y }), t(6010), t(1039));
                var r = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var r;
                function n(e, u, t) {
                    const r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => n }),
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
                    })(r || (r = {})));
            },
            5739: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => E });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    s = t.n(a),
                    i = t(3415),
                    o = t(2862),
                    l = t(729),
                    c = t(1609);
                const E = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: r = o.h2.Big,
                    special: a,
                    value: E,
                    valueType: m,
                    style: _,
                    className: d,
                    classNames: A,
                    tooltipArgs: F,
                    periodicIconTooltipArgs: D,
                }) => {
                    const g = (0, l.L_)(a),
                        B = (0, l.i2)(a),
                        C = (0, l.m9)(E, m);
                    return s().createElement(
                        'div',
                        { className: n()(c.Z.base, c.Z[`base__${r}`], d), style: _ },
                        s().createElement(
                            i.l,
                            { tooltipArgs: F, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == A ? void 0 : A.image) },
                                    g &&
                                        s().createElement('div', {
                                            className: n()(c.Z.highlight, null == A ? void 0 : A.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: n()(c.Z.icon, null == A ? void 0 : A.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    B &&
                                        s().createElement('div', {
                                            className: n()(c.Z.overlay, null == A ? void 0 : A.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${B}_overlay)`,
                                            },
                                        }),
                                ),
                                C &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                m === o.$h.MULTI && c.Z.info__multi,
                                                null == A ? void 0 : A.info,
                                            ),
                                        },
                                        C,
                                    ),
                            ),
                        ),
                        t &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: D },
                                s().createElement('div', {
                                    className: n()(c.Z.timer, null == A ? void 0 : A.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                'use strict';
                let r, n, a, s, i, o, l;
                (t.d(u, { $h: () => s, A2: () => o, E4: () => r, h2: () => a, kK: () => i, sh: () => l }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})),
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
                    })(l || (l = {})));
            },
            729: (e, u, t) => {
                'use strict';
                t.d(u, { L_: () => F, i2: () => D, m9: () => g, p3: () => E, pI: () => A, ry: () => d });
                var r = t(2372),
                    n = t(6179),
                    a = t.n(n),
                    s = t(2862);
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
                        s.E4.GoldenTicket,
                        s.E4.PostStamp,
                    ],
                    o = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    E = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    m = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    d = (e, u = s.h2.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
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
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case s.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case s.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = m[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
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
                                })(u)}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    A = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    F = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    D = (e) => {
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
                    g = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(r.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7613: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => b });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3779),
                    s = t(280),
                    i = t(3532),
                    o = t.n(i),
                    l = t(9887),
                    c = t.n(l),
                    E = t(3377),
                    m = t(6179),
                    _ = t.n(m),
                    d = t(3393);
                const A = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const D = Object.keys(o()),
                    g = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    B = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    C = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    h =
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
                            'heading-H56': g,
                            'heading-H36': g,
                            'heading-H28': B,
                            'heading-H24': B,
                            'heading-H24R': B,
                            'heading-H22': B,
                            'heading-H20R': B,
                            'heading-H18': B,
                            'heading-H15': C,
                            'heading-H14': C,
                            'paragraph-P24': B,
                            'paragraph-P18': B,
                            'paragraph-P16': B,
                            'paragraph-P14': C,
                            'paragraph-P12': C,
                            'paragraph-P10': C,
                        }),
                    p =
                        (Object.keys(h),
                        (e) =>
                            e
                                ? ((e) => D.includes(e))(e)
                                    ? { colorClassName: d.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    b = (0, E.ZP)((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            i = e.color,
                            o = e.m,
                            l = e.mt,
                            c = void 0 === l ? o : l,
                            E = e.mr,
                            D = void 0 === E ? o : E,
                            g = e.mb,
                            B = void 0 === g ? o : g,
                            C = e.ml,
                            b = void 0 === C ? o : C,
                            f = e.style,
                            v = e.format,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, A);
                        const x = (0, m.useMemo)(() => {
                                const e = p(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, f, r), colorClassName: u };
                            }, [f, i]),
                            w = x.computedStyle,
                            y = x.colorClassName;
                        return _().createElement(
                            a.ZP,
                            F(
                                {
                                    className: n()(d.Z.base, t && d.Z[t], y, r),
                                    style: w,
                                    mt: !0 === c ? h[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === D ? h[t || 'paragraph-P16'].mr : D,
                                    mb: !0 === B ? h[t || 'paragraph-P16'].mb : B,
                                    ml: !0 === b ? h[t || 'paragraph-P16'].ml : b,
                                },
                                S,
                            ),
                            void 0 !== v ? _().createElement(s.z, F({}, v, { text: u })) : u,
                        );
                    });
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var r = t(6179),
                    n = t.n(r),
                    a = t(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, s);
                    return n().createElement(
                        a.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
            },
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(7078),
                    s = t(6373),
                    i = t(2056);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(s.i, u, r);
                    const l = u.contentId,
                        c = u.args,
                        E = null == c ? void 0 : c.contentId;
                    return l || E
                        ? n().createElement(i.u, o({}, u, { contentId: l || E }), r)
                        : n().createElement(a.t, u, r);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var r = t(2056),
                    n = t(6179),
                    a = t.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            m = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, s);
                        const d = (0, n.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, m]);
                        return a().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                _,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var r = t(7902),
                    n = t(4179),
                    a = t(6179);
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
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const o = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            d = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            g = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            C = void 0 === B || B,
                            h = e.targetId,
                            p = void 0 === h ? 0 : h,
                            b = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, s);
                        const S = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, a.useMemo)(() => p || (0, r.F)().resId, [p]),
                            w = (0, a.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (o(t, g, { isMouseEvent: !0, on: !0, arguments: i(n) }, x),
                                    b && b(),
                                    (S.current.isVisible = !0));
                            }, [t, g, n, x, b]),
                            y = (0, a.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        o(t, g, { on: !1 }, x),
                                        S.current.isVisible && f && f(),
                                        (S.current.isVisible = !1));
                                }
                            }, [t, g, x, f]),
                            P = (0, a.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(S.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = S.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', P, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', P, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === C && y();
                            }, [C, y]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ),
                            C
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((S.current.timeoutId = window.setTimeout(w, d ? 100 : 400)),
                                                          l && l(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (y(), null == c || c(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === F && y(), null == m || m(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === F && y(), null == E || E(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var T;
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => r });
                const r = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                'use strict';
                t.d(u, { v: () => r });
                const r = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (u = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e, u) => {
                    let t;
                    const r = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(r));
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var r = t(3138);
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: s = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const r = t(u),
                            n = s.split('.').reduce((e, u) => e[u], r);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const a = 'string' == typeof n ? `${s}.${n}` : s,
                                o = r.O.view.addModelObserver(a, u, !0);
                            return (i.set(o, t), e && t(l(n)), o);
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    t = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return n(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? n(e, u)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (u && e && 'number' == typeof e.length)
                                        ) {
                                            t && (e = t);
                                            var r = 0;
                                            return function () {
                                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(i.keys());
                                !(e = t()).done;
                            )
                                o(e.value, u);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var r = t(4598),
                    n = t(9174),
                    a = t(6179),
                    s = t.n(a),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: E }) {
                            const m = (0, a.useRef)([]),
                                _ = (t, a, s) => {
                                    var o;
                                    const l = i.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        E = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        d = e({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        s = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        s = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const r = E(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = n.LO.box(r[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            s = Object.entries(a),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = n.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: d, externalModel: c, cleanup: _ };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                d = (0, a.useRef)(!1),
                                A = (0, a.useState)(o),
                                F = A[0],
                                D = A[1],
                                g = (0, a.useState)(() => _(o, l, E)),
                                B = g[0],
                                C = g[1];
                            return (
                                (0, a.useEffect)(() => {
                                    d.current ? C(_(F, l, E)) : (d.current = !0);
                                }, [E, F, l]),
                                (0, a.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (B.externalModel.dispose(), m.current.forEach((e) => e()));
                                    },
                                    [B],
                                ),
                                s().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => i, onResize: () => a }));
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            i = s[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((e.enabled = !1), r());
                            },
                            enable() {
                                ((e.enabled = !0), r());
                            },
                            enableOutside() {
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var r = t(527);
                function n(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => v,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function r() {
                    return !1;
                }
                (t.d(u, { jv: () => r }), console.log);
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: u, resId: r }
                    );
                };
            },
            3377: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => c });
                var r = t(5415),
                    n = t(6179),
                    a = t.n(n);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    i = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    o = [r.cJ.ExtraLarge, r.cJ.Large, r.cJ.Medium, r.cJ.Small, r.cJ.ExtraSmall],
                    l = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (i(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = o.indexOf(u),
                                    i = (-1 !== a ? s.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = i ? e[i] : void 0;
                                return ((t[n] = void 0 !== l ? l : e[n]), t);
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => s.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    c = (e, u = l) => {
                        const t = (
                            (e, u = l) =>
                            (t) => {
                                const s = (0, r.GS)().mediaSize,
                                    i = (0, n.useMemo)(() => u(t, s), [t, s]);
                                return a().createElement(e, i);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => i(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(6179);
                const n = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { GS: () => l, cJ: () => s });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
                let s, i, o;
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
                    })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const l = () => {
                    const e = (0, r.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            9630: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => a });
                var r = t(1856),
                    n = t(6179);
                function a(e, u) {
                    (0, n.useEffect)(() => {
                        let u = () => {};
                        const t = () => {
                            (u(), (u = (0, r.v)(e)));
                        };
                        return (
                            window.addEventListener('resize', t),
                            () => {
                                (u(), window.removeEventListener('resize', t));
                            }
                        );
                    }, u);
                }
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})));
            },
            5175: (e, u, t) => {
                'use strict';
                t.d(u, { c: () => a });
                var r = t(9480);
                const n = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? r.UI(e, (e) => ('object' == typeof e ? n(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? n(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? n(u) : u]),
                                    )
                            : e,
                    a = (e) => n(e);
            },
            9480: (e, u, t) => {
                'use strict';
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                t.d(u, { UI: () => r });
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => s });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) =>
                        a
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = n.length - 1; t >= 0; t--)
                                      for (; e >= n[t]; ) ((u += r[t]), (e -= n[t]));
                                  return u;
                              })(e);
            },
            7727: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => n, G: () => r });
                const n = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                'use strict';
                let r;
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                (t.d(u, { BN: () => n, Uw: () => c, v2: () => r }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(r || (r = {})));
                const a = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    s = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    i = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? a : s, []),
                    o = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    c = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = r.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return l.includes(t)
                                          ? o(e)
                                          : ((e, u = r.left) => {
                                                let t = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    i(a, /( )/, u).forEach((e) => (t = t.concat(i(e, n, r.left)))),
                                                    t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => s, B0: () => o, ry: () => B });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            D(a, r, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(a, r, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    h = () => C(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var b = t(7572);
                const f = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                m = i.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(m),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            8933: (e, u, t) => {
                'use strict';
                let r, n;
                (t(2862).E4.Vehicles,
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteSpanish = 'whiteSpanish'));
                    })(n || (n = {})));
            },
            5467: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    s = t.n(a),
                    i = t(2862),
                    o = t(5739),
                    l = t(122),
                    c = t(5415),
                    E = t(3403),
                    m = t(4538),
                    _ = t(9417),
                    d = t(3215),
                    A = t(4598),
                    F = t(5175),
                    D = t(3946);
                const g = (0, d.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    selectedUsers: e.array('selectedUsers'),
                                    progression: e.object('progression'),
                                    progressionLevels: e.array('progression.levels'),
                                    infinityRewards: e.array('progression.infinityRewards'),
                                },
                                t = (0, D.Om)(() => (0, F.c)(u.selectedUsers.get()), { equals: A.jv }),
                                r = (0, D.Om)(() => t()[0], { equals: A.jv }),
                                n = (0, D.Om)(() => t().slice(1), { equals: A.jv }),
                                a = (0, D.Om)(() => (0, F.c)(u.infinityRewards.get()).map((e) => (0, m.lW)(e)), {
                                    equals: A.jv,
                                }),
                                s = (0, D.Om)(
                                    () =>
                                        (0, F.c)(u.progressionLevels.get()).map((e) =>
                                            Object.assign({}, e, { rewards: [...e.rewards.map((e) => (0, m.lW)(e))] }),
                                        ),
                                    { equals: A.jv },
                                ),
                                i = (0, D.Om)(
                                    () => {
                                        var e;
                                        const u = s();
                                        return null == (e = u[u.length - 1]) ? void 0 : e.maxPoints;
                                    },
                                    { equals: A.jv },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getSelectedUsers: t,
                                    getFirstUser: r,
                                    getMoreSelectedUsers: n,
                                    getInfinityRewards: a,
                                    getProgressLevels: s,
                                    getLevelByNumber: (e) => s().find((u) => (null == u ? void 0 : u.number) === e),
                                    getProgressionMaxPoints: i,
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
                    B = g[0],
                    C = g[1],
                    h = [
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
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const b = (0, r.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            a = e.getImageSource,
                            s = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? 33 : o,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? s - 1 : m,
                            d = e.loop,
                            A = void 0 === d || d,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            g = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            C = e.poster,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, h);
                        const x = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const e = x.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = S(E, _, a),
                                                u = f(E, _),
                                                r = window.setInterval(() => {
                                                    const n = u(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == i || i(n, a),
                                                          t(a),
                                                          n === _ &&
                                                              (null == B || B(),
                                                              A || (null == g || g(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && C ? { path: C, x: 0, y: 0 } : a(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const r = () => t(v(e, u));
                                            return (
                                                u.addEventListener('load', r),
                                                () => u.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, E, _, A, i, B, g, C, D]),
                            n().createElement('canvas', p({}, b, { width: u, height: t, ref: x }))
                        );
                    }),
                    f = (e, u) => {
                        let t = e;
                        return () => {
                            const r = t;
                            return ((t += 1), t > u && (t = e), r);
                        };
                    },
                    v = (e, u) => Object.assign({}, e, { img: u }),
                    S = (e, u, t) => {
                        const r = new Map(),
                            n = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = n[e.path];
                            if (u) r.set(a, v(e, u));
                            else {
                                const u = new Image();
                                ((n[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    r.set(a, v(e, u)));
                            }
                        }
                        return r;
                    };
                var x = t(7727);
                const w = {
                        base: 'AnimatedLootbox_base_2c',
                        base__blink: 'AnimatedLootbox_base__blink_e1',
                        lootboxSequence: 'AnimatedLootbox_lootboxSequence_e9',
                        lootboxSequence__hidden: 'AnimatedLootbox_lootboxSequence__hidden_2f',
                    },
                    y = (0, r.memo)(
                        ({
                            lootboxSequenceState: e,
                            setLootboxSequenceState: u,
                            isBlinkAnimation: t,
                            setIsBlinkAnimation: a,
                        }) => (
                            (0, r.useEffect)(
                                () =>
                                    (0, l.F)(() => {
                                        (u(m.wO.PLAY), (0, x.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                    }, 200),
                                [u],
                            ),
                            (0, r.useEffect)(() => {
                                if (e === m.wO.STOP)
                                    return (0, l.F)(() => {
                                        (u(m.wO.PLAY), (0, x.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                    }, 2e3);
                            }, [e, u]),
                            (0, r.useEffect)(() => {
                                if (t)
                                    return (
                                        (0, x.G)('hangar_h15_bday_tank_mail_anim_send'),
                                        (0, l.F)(() => {
                                            (u(m.wO.STOP), a(!1));
                                        }, 600)
                                    );
                            }, [t, a, u]),
                            (0, r.useEffect)(() => {
                                e === m.wO.STOP && a(!1);
                            }, [e, a]),
                            n().createElement(
                                'div',
                                { className: s()(w.base, e === m.wO.PLAY && w.base__visible, t && w.base__blink) },
                                n().createElement(b, {
                                    width: m.FE.width,
                                    height: m.FE.height,
                                    frameCount: m.FE.frameCount,
                                    getImageSource: m.sq,
                                    state: e,
                                    loop: !1,
                                    className: s()(w.lootboxSequence, e === m.wO.STOP && w.lootboxSequence__hidden),
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
                var T = t(3457),
                    k = t(7613);
                const O = R.strings.mt_birthday.mail.emptyPostScreen,
                    M = (0, r.memo)(({ onTasks: e }) =>
                        n().createElement(
                            'div',
                            { className: 'EmptyPostScreen_base_fe' },
                            n().createElement('div', { className: 'EmptyPostScreen_icon_b3' }),
                            n().createElement(k.ZP, {
                                text: O.title(),
                                format: { classMix: 'EmptyPostScreen_title_37' },
                            }),
                            n().createElement(k.ZP, {
                                text: O.subTitle(),
                                format: { classMix: 'EmptyPostScreen_subTitle_a4' },
                            }),
                            n().createElement(
                                T.u5,
                                { type: T.L$.primary, onClick: e, mixClass: 'EmptyPostScreen_button_c0' },
                                n().createElement(k.ZP, { text: O.button() }),
                            ),
                        ),
                    );
                var L = t(6812),
                    N = t(2056),
                    I = t(7075);
                const U = R.strings.mt_birthday.mail.conditionList,
                    G = ['dayLimit', 'sentLimit', 'bonusChance'],
                    $ = (0, r.memo)(() =>
                        n().createElement(
                            'div',
                            { className: 'ConditionList_base_a8' },
                            G.map((e, u) =>
                                n().createElement(
                                    'div',
                                    { key: `${u}_${e}`, className: 'ConditionList_condition_5c' },
                                    n().createElement(k.ZP, {
                                        text: U.point(),
                                        className: 'ConditionList_conditionPoint_91',
                                    }),
                                    n().createElement(I.R, { text: U.condition.$dyn(e) }),
                                ),
                            ),
                        ),
                    ),
                    H = 'Phrase_blink_b6',
                    W = 'Phrase_particles_05',
                    j = R.strings.mt_birthday.mail.phraseContainer,
                    Z = R.strings.player_phrases.player,
                    z = (0, r.memo)(({ phraseID: e, disabled: u = !1, onRefresh: t }) => {
                        const a = (0, r.useState)(!1),
                            i = a[0],
                            o = a[1],
                            c = (0, r.useState)(e),
                            E = c[0],
                            m = c[1],
                            _ = (0, r.useCallback)(() => {
                                (x.$.playClick(), t(), o(!0));
                            }, [t]);
                        return (
                            (0, r.useEffect)(() => {
                                if (i)
                                    return (0, l.F)(() => {
                                        o(!1);
                                    }, 500);
                            }, [i]),
                            (0, r.useEffect)(
                                () =>
                                    (0, l.F)(() => {
                                        m(e);
                                    }, 250),
                                [e],
                            ),
                            n().createElement(
                                'div',
                                {
                                    className: s()(
                                        'Phrase_base_85',
                                        'Phrase_base__active_0e',
                                        u && 'Phrase_base__disabled_17',
                                    ),
                                    onClick: i ? void 0 : _,
                                    onMouseEnter: () => {
                                        x.$.playHighlight();
                                    },
                                },
                                n().createElement('div', { className: 'Phrase_poster_5c' }),
                                !u && n().createElement('div', { className: s()(H, 'Phrase_blink__left_bf') }),
                                !u && n().createElement('div', { className: s()(H, 'Phrase_blink__right_62') }),
                                n().createElement('div', { className: 'Phrase_topBorderBlink_50' }),
                                u && n().createElement('div', { className: 'Phrase_disabledBg_ad' }),
                                n().createElement(
                                    'div',
                                    { className: 'Phrase_contentContainer_41' },
                                    n().createElement('div', { className: s()(W, 'Phrase_particles__right_a7') }),
                                    n().createElement('div', { className: s()(W, 'Phrase_particles__left_8b') }),
                                    n().createElement('div', {
                                        className: s()('Phrase_phraseShine_88', i && 'Phrase_phraseShine__animate_1b'),
                                    }),
                                    n().createElement('div', { className: 'Phrase_buttonBlink_79' }),
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Phrase_phraseContainer_f6',
                                                i && 'Phrase_phraseContainer__animate_bf',
                                            ),
                                        },
                                        n().createElement(k.ZP, {
                                            text: Z.$dyn(`c_${E}`),
                                            format: { classMix: 'Phrase_phrase_e2' },
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'Phrase_refreshContainer_8d' },
                                        n().createElement('div', { className: 'Phrase_refreshIcon_1f' }),
                                        n().createElement(k.ZP, { text: j.refreshButton() }),
                                    ),
                                ),
                            )
                        );
                    });
                var X = t(280);
                const q = {
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
                    Q = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, r.useMemo)(() => u || {}, [u]);
                        let i = Y.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                r = V.exec(t),
                                c = K.exec(t),
                                E = i[1];
                            if (r && c) {
                                const e = r[0],
                                    i = e + l++ + e;
                                ((o = o.replace(t, `%(${i})`)),
                                    (s[i] = q[e]
                                        ? n().createElement(
                                              'span',
                                              { className: q[e] },
                                              n().createElement(X.z, { text: E, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: a(e) },
                                              n().createElement(X.z, { text: E, binding: u }),
                                          )));
                            }
                            i = Y.exec(e);
                        }
                        return n().createElement(X.z, { text: o, classMix: t, binding: s });
                    }),
                    J = 'SelectPlayers_playerText_99',
                    ee = 'SelectPlayers_buttonBorder_98',
                    ue = R.strings.mt_birthday.mail.selectPlayers,
                    te = (0, r.memo)(
                        ({ selectedUserName: e = '', moreSelectedUsersCount: u = 0, disabled: t = !1, onClick: a }) => {
                            const i = s()(
                                    'SelectPlayers_base_13',
                                    'SelectPlayers_base__active_cb',
                                    t && 'SelectPlayers_base__disabled_31',
                                ),
                                o = u ? ue.selectedMore() : ue.selected(),
                                l = u ? { selectedUserName: e, moreSelectedUsersCount: u } : { selectedUserName: e },
                                c = (0, r.useCallback)(() => {
                                    x.$.playHighlight();
                                }, []),
                                E = (0, r.useCallback)(() => {
                                    (x.$.playClick(), a());
                                }, [a]);
                            return n().createElement(
                                'div',
                                { className: i, onClick: E, onMouseEnter: c },
                                n().createElement('div', { className: s()(ee, 'SelectPlayers_buttonBorder__top_14') }),
                                n().createElement('div', { className: 'SelectPlayers_activeBg_63' }),
                                t && n().createElement('div', { className: 'SelectPlayers_disabledBg_95' }),
                                e.length
                                    ? n().createElement(Q, { text: o, binding: l, classMix: J })
                                    : n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement('div', { className: 'SelectPlayers_playerIcon_58' }),
                                          n().createElement(k.ZP, { text: ue.default(), format: { classMix: J } }),
                                      ),
                                n().createElement('div', {
                                    className: s()(ee, 'SelectPlayers_buttonBorder__bottom_31'),
                                }),
                            );
                        },
                    ),
                    re = R.strings.mt_birthday.mail,
                    ne = (0, r.memo)(({ sentCost: e, isSentError: u, isLoading: t, disabled: r = !1, onSent: a }) =>
                        n().createElement(
                            'div',
                            { className: 'SentButton_base_37' },
                            n().createElement(
                                T.u5,
                                { onClick: a, mixClass: 'SentButton_sentButton_a5', disabled: r },
                                t
                                    ? n().createElement('div', { className: 'SentButton_loader_3e' })
                                    : n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement(k.ZP, {
                                              text: re.sentButton(),
                                              format: {
                                                  classMix: 'SentButton_sentButtonText_b9',
                                                  binding: { sentCost: e },
                                              },
                                          }),
                                          n().createElement('div', { className: 'SentButton_postStampIcon_5d' }),
                                      ),
                            ),
                            u &&
                                n().createElement(
                                    'div',
                                    { className: 'SentButton_sentError_13' },
                                    n().createElement('div', { className: 'SentButton_errorIcon_40' }),
                                    n().createElement(k.ZP, {
                                        text: re.sentError(),
                                        format: { classMix: 'SentButton_sentErrorText_a6' },
                                    }),
                                ),
                        ),
                    ),
                    ae = R.strings.mt_birthday.mail,
                    se = (0, r.memo)(
                        ({
                            userNickname: e,
                            moreSelectedUsersCount: u,
                            isSending: t,
                            phraseID: r,
                            sentCost: a,
                            isSentError: s,
                            isDisabledSentButton: i,
                            currencyCount: o,
                            onPlayerSelect: l,
                            onPhraseChange: c,
                            onSent: E,
                        }) =>
                            n().createElement(
                                'div',
                                { className: 'GiftSentForm_base_5e' },
                                n().createElement(
                                    'div',
                                    { className: 'GiftSentForm_conditionListContainer_f0' },
                                    n().createElement($, null),
                                ),
                                n().createElement(te, {
                                    selectedUserName: e,
                                    moreSelectedUsersCount: u,
                                    disabled: t,
                                    onClick: l,
                                }),
                                n().createElement(
                                    'div',
                                    { className: 'GiftSentForm_phraseContainer_9e' },
                                    n().createElement(z, { phraseID: r, onRefresh: c, disabled: t }),
                                ),
                                n().createElement(ne, {
                                    sentCost: a,
                                    isSentError: s,
                                    disabled: i,
                                    isLoading: t,
                                    onSent: E,
                                }),
                                n().createElement(
                                    'div',
                                    { className: 'GiftSentForm_currencyContainer_89' },
                                    n().createElement(k.ZP, {
                                        text: ae.currencyCount(),
                                        format: {
                                            classMix: 'GiftSentForm_currencyText_03',
                                            binding: {
                                                currencyCount: n().createElement(k.ZP, {
                                                    text: String(o),
                                                    className: 'GiftSentForm_currencyCountText_94',
                                                }),
                                            },
                                        },
                                    }),
                                    n().createElement(
                                        N.u,
                                        { contentId: R.views.mt_birthday.lobby.tooltips.PostStampTooltip('resId') },
                                        n().createElement('div', {
                                            className: 'GiftSentForm_currencyPostStampIcon_c9',
                                        }),
                                    ),
                                ),
                            ),
                    );
                var ie = t(9630),
                    oe = t(9690),
                    le = t(7515),
                    ce = t(6128),
                    Ee = t(3724),
                    me = t(4553);
                var _e = t(6840);
                const de = ['api', 'value', 'maxValue', 'theme'];
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const Fe = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    De = (e) => {
                        let u = e.api,
                            t = e.value,
                            a = e.maxValue,
                            i = void 0 === a ? 100 : a,
                            o = e.theme,
                            l = void 0 === o ? ce.uH : o,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, de);
                        const E = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = (0, le.u)(0, t, i) / i,
                            A = (0, r.useCallback)(
                                (e) => {
                                    (_.current &&
                                        E.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, r) => {
                                            const n = t.offsetWidth - r.offsetWidth,
                                                a = e - Fe(t, u),
                                                s = (0, le.u)(0, n, a);
                                            r.style.left = `${s}rem`;
                                        })(e, E.current, _.current),
                                        m.current &&
                                            E.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: r, line: n },
                                            ) => {
                                                const a = Math.max(0, Math.floor(r.offsetWidth * t) - 8e4),
                                                    s = e - Fe(r, u),
                                                    i = (0, le.u)(0, a, s);
                                                n.style.left = `${i}rem`;
                                            })(e, d, { line: m.current, container: E.current }));
                                },
                                [d],
                            ),
                            F = (0, r.useMemo)(() => (0, me.VQ)(l), [l]);
                        return (
                            (u.current.update = A),
                            n().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_f7', ref: E },
                                n().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_4d' },
                                    n().createElement(
                                        'div',
                                        {
                                            style: F,
                                            className: s()(
                                                'OptimizedProgressBar_background_dc',
                                                c.progressBarBackgroundClassMix,
                                            ),
                                            ref: _,
                                        },
                                        n().createElement(Ee.J, {
                                            size: c.size,
                                            classMix: c.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    n().createElement(
                                        ce.ko,
                                        Ae({}, c, {
                                            lineRef: m,
                                            value: t,
                                            theme: l,
                                            maxValue: i,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    ge = {
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
                    Be = Object.assign({}, ce.uu, {
                        withStack: !0,
                        type: _e.r.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    Ce = (e, u) => (u < 0 ? 0 : e[u].maxPoints),
                    he = (e, u, t) => {
                        let r = 0;
                        const n = Ce(t, u - 2),
                            a = Ce(t, t.length - 1) / t.length;
                        return (
                            t.forEach((t, s) => {
                                s < u &&
                                    (r += ((e, u, t, r) => (e >= u ? r : (r / (u - t)) * (e - t)))(
                                        e,
                                        t.maxPoints,
                                        n,
                                        a,
                                    ));
                            }),
                            r
                        );
                    },
                    pe = (e) => Array.from(Array(e).keys()),
                    be = 'Progression_point_e1',
                    fe = 'Progression_label_9e',
                    ve = 'Progression_line_57',
                    Se = 'Progression_secondaryLine_44',
                    xe = 'Progression_secondaryPointsCount_56',
                    we = 'Progression_vector_77',
                    ye = (e) => (e >= 10 ? 21 : 15),
                    Pe = (0, r.memo)(
                        ({
                            currentLevel: e,
                            levels: u,
                            points: t,
                            deltaFrom: a,
                            infinityProgressPoints: i,
                            infinityProgressDeltaFrom: o,
                            infinityProgressMaxPointsCount: E,
                            infinitySubStagesCount: m,
                            onAnimationEnded: _,
                        }) => {
                            const d = (0, c.GS)().mediaSize,
                                A = (0, r.useRef)({ update: () => {} }),
                                F = (0, r.useRef)({ update: () => {} }),
                                D = c.cJ[d][0].toLowerCase() + c.cJ[d].slice(1),
                                g = u[u.length - 1],
                                B = null == g ? void 0 : g.number,
                                C = (0, r.useState)(e > B),
                                h = C[0],
                                p = C[1],
                                b = (0, r.useState)(e > B),
                                f = b[0],
                                v = b[1],
                                S = (0, r.useState)(!1),
                                w = S[0],
                                y = S[1],
                                P = 1 === e,
                                T = e >= (null == g ? void 0 : g.number),
                                R = null == g ? void 0 : g.maxPoints,
                                O = (0, r.useMemo)(
                                    () => [...u, Object.assign({}, g, { number: (null == g ? void 0 : g.number) + 1 })],
                                    [g, u],
                                ),
                                M = ge[d].width,
                                L = ge[d].pointsDistance * B,
                                N = h
                                    ? L - ge[d].pointIndent / 3 - ge[d].progressionIndent
                                    : (e - 1) * ge[d].pointsDistance - ge[d].pointIndent;
                            return (
                                (0, r.useEffect)(() => {
                                    if (t >= R)
                                        return (0, l.F)(() => {
                                            p(!0);
                                        }, ke);
                                }, [t, R]),
                                (0, r.useEffect)(() => {
                                    if (h)
                                        return (0, l.F)(() => {
                                            v(!0);
                                        }, 1e3);
                                }, [h]),
                                (0, r.useEffect)(() => {
                                    if (h) {
                                        if (i !== o)
                                            return (0, l.F)(() => {
                                                _();
                                            }, 1500);
                                    } else if (t !== a)
                                        return (0, l.F)(() => {
                                            _();
                                        }, 1500);
                                }, [a, o, i, h, _, t]),
                                (0, r.useEffect)(() => {
                                    t > a && (0, x.G)('bp_progress_bar_start');
                                }, [a, t]),
                                (0, ie.t)(
                                    () => (
                                        y(!0),
                                        (0, l.F)(() => {
                                            y(!1);
                                        }, 0)
                                    ),
                                    [],
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'Progression_base_99', style: { width: `${M + 40}rem` } },
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Progression_container_4b',
                                                P && 'Progression_container__first_40',
                                                T && 'Progression_container__last_78',
                                            ),
                                            style: { width: `${M}rem` },
                                        },
                                        n().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    'Progression_progressLineContainer_c4',
                                                    (f || w) && 'Progression_progressLineContainer__completed_09',
                                                ),
                                                style: { width: `${L}rem`, transform: `translateX(${-1 * N}rem)` },
                                            },
                                            O.map((t, r) => {
                                                const a = (null == t ? void 0 : t.number) === e && !h;
                                                return n().createElement(
                                                    'div',
                                                    {
                                                        key: `${null == t ? void 0 : t.number}_${r}`,
                                                        className: be,
                                                        style: {
                                                            transform: `translateX(${r * ge[d].pointsDistance}rem)`,
                                                        },
                                                    },
                                                    n().createElement(k.ZP, {
                                                        className: fe,
                                                        text: String((0, oe.HG)((null == t ? void 0 : t.number) - 1)),
                                                    }),
                                                    n().createElement('div', { className: ve }),
                                                    a &&
                                                        n().createElement(
                                                            n().Fragment,
                                                            null,
                                                            pe(t.substagesCount - 1).map((e, u) =>
                                                                n().createElement('div', {
                                                                    key: `${e}_${u}`,
                                                                    className: Se,
                                                                    style: {
                                                                        transform: `translateX(${(ge[d].pointsDistance / t.substagesCount) * (u + 1)}rem) translateY(53rem)`,
                                                                    },
                                                                }),
                                                            ),
                                                            n().createElement(k.ZP, {
                                                                text: String(u[r].maxPoints - u[r].substagesCount),
                                                                className: xe,
                                                            }),
                                                            n().createElement(k.ZP, {
                                                                text: String(u[r].maxPoints),
                                                                className: xe,
                                                                style: {
                                                                    transform: `translateX(${ge[d].pointsDistance - ye(u[r].maxPoints)}rem) translateY(49rem)`,
                                                                },
                                                            }),
                                                        ),
                                                );
                                            }),
                                            n().createElement(
                                                'div',
                                                { className: 'Progression_progressBarContainer_44' },
                                                n().createElement(De, {
                                                    animationSettings: Be,
                                                    value: he(t, e, u),
                                                    deltaFrom: he(a, e, u),
                                                    maxValue: R,
                                                    api: A,
                                                }),
                                            ),
                                        ),
                                    ),
                                    !T &&
                                        n().createElement(
                                            'div',
                                            { className: 'Progression_points_83', style: { width: `${M}rem` } },
                                            n().createElement(
                                                'div',
                                                { className: s()(be, 'Progression_point__last_4a') },
                                                n().createElement(k.ZP, { text: String((0, oe.HG)(B)), className: fe }),
                                                n().createElement('div', { className: ve }),
                                            ),
                                        ),
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Progression_infinityContainer_29',
                                                !f && 'Progression_infinityContainer__animated_15',
                                            ),
                                        },
                                        h
                                            ? n().createElement(
                                                  'div',
                                                  {
                                                      className: s()(
                                                          'Progression_activeInfinityContainer_95',
                                                          !f && 'Progression_activeInfinityContainer__animated_45',
                                                      ),
                                                      style: {
                                                          transform: `translateX(${-1 * M + ge[d].infinityProgressionTranslate}rem)`,
                                                          width: `${ge[d].pointsDistance}rem`,
                                                      },
                                                  },
                                                  n().createElement(
                                                      'div',
                                                      { className: 'Progression_infinityVectorContainer_bd' },
                                                      n().createElement('div', {
                                                          className: we,
                                                          style: {
                                                              backgroundImage: `url(R.images.mt_birthday.gui.maps.icons.tankMail.vector_left_${D})`,
                                                          },
                                                      }),
                                                      n().createElement('div', {
                                                          className: 'Progression_infinitySymbol_e6',
                                                      }),
                                                      n().createElement('div', {
                                                          className: we,
                                                          style: {
                                                              backgroundImage: `url(R.images.mt_birthday.gui.maps.icons.tankMail.vector_right_${D})`,
                                                          },
                                                      }),
                                                  ),
                                                  n().createElement(
                                                      'div',
                                                      { className: be },
                                                      n().createElement('div', { className: ve }),
                                                  ),
                                                  n().createElement(k.ZP, { text: String(0), className: xe }),
                                                  pe(m).map((e, u) =>
                                                      n().createElement('div', {
                                                          key: `${e}_${u}`,
                                                          className: Se,
                                                          style: {
                                                              transform: `translateX(${(ge[d].pointsDistance / m) * u}rem) translateY(53rem)`,
                                                          },
                                                      }),
                                                  ),
                                                  n().createElement(k.ZP, {
                                                      text: String(m),
                                                      className: xe,
                                                      style: {
                                                          transform: `translateX(${ge[d].pointsDistance - ye(m)}rem) translateY(49rem)`,
                                                      },
                                                  }),
                                                  n().createElement(
                                                      'div',
                                                      {
                                                          className: be,
                                                          style: {
                                                              transform: `translateX(${ge[d].pointsDistance}rem)`,
                                                          },
                                                      },
                                                      n().createElement('div', { className: ve }),
                                                  ),
                                                  n().createElement(
                                                      'div',
                                                      { className: 'Progression_activeInfinityProgressContainer_3d' },
                                                      n().createElement(De, {
                                                          animationSettings: Be,
                                                          value: i,
                                                          deltaFrom: o,
                                                          maxValue: E,
                                                          api: F,
                                                      }),
                                                  ),
                                              )
                                            : n().createElement(
                                                  'div',
                                                  {
                                                      className: 'Progression_disabledProgressContainer_3c',
                                                      style: {
                                                          transform: `translateX(${T && -1 * ge[d].infinityTranslate}rem)`,
                                                      },
                                                  },
                                                  T &&
                                                      n().createElement(
                                                          'div',
                                                          { className: 'Progression_infinityProgressContainer_ca' },
                                                          n().createElement(De, {
                                                              animationSettings: Be,
                                                              value: 0,
                                                              deltaFrom: 0,
                                                              maxValue: E,
                                                              api: F,
                                                              disabled: !0,
                                                          }),
                                                      ),
                                                  n().createElement('div', {
                                                      className: 'Progression_infinityIcon_6c',
                                                  }),
                                                  n().createElement('div', {
                                                      className: s()(ve, 'Progression_infinityLine_65'),
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const Re = R.strings.mt_birthday.mail,
                    ke = 1500,
                    Oe = (0, E.Pi)(() => {
                        var e, u, t;
                        const a = C(),
                            E = a.controls,
                            d = a.model,
                            A = (0, c.GS)().mediaSize,
                            F = d.root.get(),
                            D = F.currencyCount,
                            g = F.isSentError,
                            B = F.isSending,
                            h = F.phraseID,
                            p = F.isPostError,
                            b = d.progression.get(),
                            f = b.currentLevel,
                            v = b.currentPoints,
                            S = b.pointsDeltaFrom,
                            x = b.infinityStartPoints,
                            w = b.infinityMaxPoints,
                            T = b.infinitySubstagesCount,
                            R = b.infinityDeltaFrom,
                            k = 1 * d.computes.getSelectedUsers().length,
                            O = (null == (e = d.computes.getFirstUser()) ? void 0 : e.clanTag) || '',
                            N = (null == (u = d.computes.getFirstUser()) ? void 0 : u.userNickName) || '',
                            I = d.computes.getMoreSelectedUsers().length,
                            U = d.computes.getProgressLevels(),
                            G = d.computes.getProgressionMaxPoints(),
                            $ = (0, r.useState)(v >= G),
                            H = $[0],
                            W = $[1],
                            j = (0, r.useState)(m.wO.STOP),
                            Z = j[0],
                            z = j[1],
                            X = (0, r.useState)(!1),
                            q = X[0],
                            Y = X[1],
                            V = (0, r.useState)(!1),
                            K = V[0],
                            Q = V[1],
                            J = H
                                ? d.computes.getInfinityRewards()
                                : (null == (t = d.computes.getLevelByNumber(f)) ? void 0 : t.rewards) || [],
                            ee = k < 1 || k > D || !D || B,
                            ue = R === v ? v - x : R - x,
                            te = (!p && Boolean(D)) || q || K,
                            re = A < c.cJ.Medium ? i.h2.Small : i.h2.Big,
                            ne = (0, r.useCallback)(() => {
                                (E.onSent(), Y(!0));
                            }, [E]);
                        ((0, r.useEffect)(
                            () =>
                                (0, l.F)(() => {
                                    q && !D && Q(!0);
                                }, 600),
                            [D, q],
                        ),
                            (0, r.useEffect)(
                                () =>
                                    (0, l.F)(() => {
                                        K && Q(!1);
                                    }, 400),
                                [K],
                            ));
                        const ae = (0, r.useMemo)(
                            () =>
                                p
                                    ? n().createElement(L.U, null)
                                    : D || q
                                      ? n().createElement(se, {
                                            userNickname: (0, m.Xw)(N, O, Boolean(I)),
                                            moreSelectedUsersCount: I,
                                            isSending: B,
                                            phraseID: h,
                                            sentCost: k || 1,
                                            isSentError: g,
                                            isDisabledSentButton: ee,
                                            currencyCount: D,
                                            onPlayerSelect: E.onPlayerSelect,
                                            onPhraseChange: E.onPhraseChange,
                                            onSent: ne,
                                        })
                                      : n().createElement(M, { onTasks: E.onTasks }),
                            [E.onPhraseChange, E.onPlayerSelect, E.onTasks, ne, D, ee, p, B, g, I, h, k, O, N, q],
                        );
                        return (
                            (0, r.useEffect)(() => {
                                if (v >= G)
                                    return (0, l.F)(() => {
                                        W(!0);
                                    }, ke);
                            }, [v, d.computes, G]),
                            (0, r.useEffect)(
                                () => () => {
                                    E.onComponentDestroyed();
                                },
                                [],
                            ),
                            n().createElement(
                                'div',
                                { className: P.base },
                                n().createElement(
                                    'div',
                                    { className: P.header },
                                    n().createElement(_.h, { title: Re.header(), subTitle: Re.description() }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: P.content },
                                    n().createElement('div', {
                                        className: s()(P.background, te && P.background__visible),
                                    }),
                                    n().createElement('div', {
                                        className: s()(P.emptyBackground, !te && P.emptyBackground__visible),
                                    }),
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                P.giftContainer,
                                                !te && P.giftContainer__center,
                                                K && P.giftContainer__leave,
                                            ),
                                        },
                                        ae,
                                    ),
                                    te &&
                                        n().createElement(
                                            'div',
                                            { className: s()(P.lootboxContainer, K && P.lootboxContainer__leave) },
                                            n().createElement(y, {
                                                lootboxSequenceState: Z,
                                                setLootboxSequenceState: z,
                                                isBlinkAnimation: q,
                                                setIsBlinkAnimation: Y,
                                            }),
                                        ),
                                    !p &&
                                        n().createElement(
                                            'div',
                                            { className: P.progressionBlock },
                                            n().createElement(
                                                'div',
                                                { className: P.rewardsContainer },
                                                J.map((e, u) =>
                                                    n().createElement(
                                                        'div',
                                                        {
                                                            key: `${e.icon}_${u}_${f}`,
                                                            className: s()(
                                                                P.reward,
                                                                u === J.length - 1 && P.reward__last,
                                                            ),
                                                        },
                                                        n().createElement(
                                                            o.Q,
                                                            Te({}, e, { image: e.image(re), size: re }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: P.progressionContainer },
                                                n().createElement(Pe, {
                                                    currentLevel: f,
                                                    points: v,
                                                    deltaFrom: S,
                                                    levels: U,
                                                    infinityProgressMaxPointsCount: w - x,
                                                    infinityProgressDeltaFrom: ue,
                                                    infinityProgressPoints: v - x,
                                                    infinitySubStagesCount: T,
                                                    onAnimationEnded: E.onAnimationEnded,
                                                }),
                                            ),
                                        ),
                                ),
                            )
                        );
                    });
                (0, r.memo)((e) => {
                    const u = (0, r.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                    return n().createElement(B, { options: u }, n().createElement(Oe, null));
                });
            },
            6812: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => i });
                var r = t(7613),
                    n = t(6179),
                    a = t.n(n);
                const s = R.strings.mt_birthday.mail.errorPostScreen,
                    i = (0, n.memo)(() =>
                        a().createElement(
                            'div',
                            { className: 'ErrorPostScreen_base_e9' },
                            a().createElement('div', { className: 'ErrorPostScreen_icon_e4' }),
                            a().createElement(r.ZP, {
                                text: s.title(),
                                format: { classMix: 'ErrorPostScreen_title_d3' },
                            }),
                            a().createElement(r.ZP, {
                                text: s.subTitle(),
                                format: { classMix: 'ErrorPostScreen_subTitle_89' },
                            }),
                        ),
                    );
            },
            9417: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => s });
                var r = t(7613),
                    n = t(6179),
                    a = t.n(n);
                const s = (0, n.memo)(({ title: e, subTitle: u }) =>
                    a().createElement(
                        'div',
                        { className: 'Header_base_f9' },
                        a().createElement(r.ZP, { format: { classMix: 'Header_headerTitle_c9' }, text: e }),
                        a().createElement(r.ZP, { format: { classMix: 'Header_headerDescription_c5' }, text: u }),
                    ),
                );
            },
            6128: (e, u, t) => {
                'use strict';
                t.d(u, { ko: () => I, uu: () => N, uH: () => L });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    s = t.n(a),
                    i = t(9960),
                    o = t(3724),
                    l = t(6840);
                const c = {
                        base: 'ProgressBarBlink_base_22',
                        base__medium: 'ProgressBarBlink_base__medium_0a',
                        base__small: 'ProgressBarBlink_base__small_b5',
                    },
                    E = ({ size: e }) => {
                        const u = n()(c.base, c[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    m = {
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
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: a, withoutBounce: i }) => {
                            const o = n()(
                                    m.base,
                                    m[`base__${e}`],
                                    t && m.base__disabled,
                                    a && m.base__finished,
                                    i && m.base__withoutBounce,
                                ),
                                l = !t && !a;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: m.pattern }),
                                s().createElement('div', { className: m.gradient }),
                                l && s().createElement(E, { size: e }),
                            );
                        },
                    );
                var d = t(122);
                let A, F;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(A || (A = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(F || (F = {})));
                const D = (e) => (e ? { left: 0 } : { right: 0 }),
                    g = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    B = (e) => ({ transitionDuration: `${e}ms` }),
                    C = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const _ = o < r,
                                F = (0, a.useState)(A.Idle),
                                C = F[0],
                                h = F[1],
                                p = C === A.End,
                                b = C === A.Idle,
                                f = C === A.Grow,
                                v = C === A.Shrink,
                                S = (0, a.useCallback)(
                                    (e) => {
                                        (h(e), c && c(e));
                                    },
                                    [c],
                                ),
                                x = (0, a.useCallback)(
                                    (e, u) =>
                                        (0, d.F)(() => {
                                            S(e);
                                        }, u),
                                    [S],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return b
                                        ? x(A.Grow, u)
                                        : f
                                          ? x(A.Shrink, e)
                                          : v
                                            ? x(A.End, e)
                                            : void (p && l && l());
                            }, [x, t, p, f, b, v, l, u, e]);
                            const w = (0, a.useMemo)(() => Object.assign({ width: '100%' }, B(e), D(_)), [_, e]),
                                y = (0, a.useMemo)(() => Object.assign({ width: '0%' }, B(e), D(_)), [_, e]),
                                P = (0, a.useMemo)(() => Object.assign({ width: '0%' }, g(_, r), B(e)), [r, _, e]),
                                T = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, g(_, r), B(e)),
                                    [r, _, o, e],
                                );
                            if (p) return null;
                            const R = n()(
                                'ProgressBarDeltaGrow_base_2a',
                                m,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_fd',
                            );
                            return s().createElement(
                                'div',
                                { style: b ? P : T, className: R },
                                s().createElement(
                                    'div',
                                    { style: v ? y : w, className: 'ProgressBarDeltaGrow_glow_37' },
                                    s().createElement(E, { size: i }),
                                ),
                            );
                        },
                    ),
                    h = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                m = (0, a.useState)(!1),
                                d = m[0],
                                F = m[1],
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (e === A.Shrink && F(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                B = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: d ? B : g,
                                }),
                                t >= 0 &&
                                    s().createElement(C, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: D,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    p = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                m = (0, a.useState)(F.Idle),
                                _ = m[0],
                                A = m[1],
                                D = _ === F.In,
                                g = _ === F.End,
                                B = _ === F.Idle,
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (A(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (B && !t) {
                                    const e = u;
                                    return (0, d.F)(() => {
                                        C(F.In);
                                    }, e);
                                }
                            }, [C, t, B, u]),
                                (0, a.useEffect)(() => {
                                    if (D) {
                                        const t = e + u;
                                        return (0, d.F)(() => {
                                            (o && o(), C(F.End));
                                        }, t);
                                    }
                                }, [C, D, o, u, e]));
                            const h = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                b = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_81', style: b },
                                      s().createElement(
                                          'div',
                                          { style: B ? h : p, className: 'ProgressBarDeltaSimple_delta_c8' },
                                          s().createElement(E, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    b = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, a.useMemo)(
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
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    s().createElement(p, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    f = ['onComplete', 'onEndAnimation'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const S = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, f);
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            c = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== i && o(e), e && u && u(), t && t());
                            }, [i, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case l.r.Simple:
                                return s().createElement(b, v({}, r, { onEndAnimation: c, isComplete: i }));
                            case l.r.Growing:
                                return s().createElement(h, v({}, r, { onEndAnimation: c, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    x = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(_, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    w = ['onEndAnimation'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const P = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) ((t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, w);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        i = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = i),
                        s().createElement(S, y({}, t, { onEndAnimation: n, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const R = (0, a.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: r,
                        deltaFrom: n,
                        animationSettings: a,
                        onEndAnimation: i,
                        onChangeAnimationState: o,
                        onComplete: l,
                    }) => {
                        if (n === u)
                            return s().createElement(x, {
                                key: `${n}-${u}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: r,
                                onComplete: l,
                            });
                        const c = {
                            from: n,
                            to: u,
                            size: e,
                            lineRef: t,
                            disabled: r,
                            animationSettings: a,
                            onComplete: l,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                        };
                        return a.withStack ? s().createElement(P, c) : s().createElement(S, T({ key: `${n}-${u}` }, c));
                    },
                );
                var k = t(4553),
                    O = t(7515);
                const M = (e, u, t) => ('number' == typeof t ? ((0, O.u)(0, u, t) / u) * 100 : e),
                    L = k.Gh,
                    N = {
                        freezed: !1,
                        withStack: !1,
                        type: l.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    I = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = L,
                            size: t = l.$.Default,
                            animationSettings: r = N,
                            disabled: c = !1,
                            withoutBackground: E = !1,
                            progressBarBackgroundClassMix: m,
                            value: _,
                            deltaFrom: d,
                            lineRef: A,
                            onChangeAnimationState: F,
                            onEndAnimation: D,
                            onComplete: g,
                        }) => {
                            const B = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = ((0, O.u)(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: M(r, u, t) };
                                }, [t, u, e]))(_, e, d);
                            return s().createElement(
                                'div',
                                { className: n()(i.Z.base, i.Z[`base__${t}`]), style: (0, k.VQ)(u) },
                                !E && s().createElement(o.J, { size: t, classMix: m }),
                                s().createElement(R, {
                                    size: t,
                                    lineRef: A,
                                    disabled: c,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: D,
                                    onChangeAnimationState: F,
                                    onComplete: g,
                                }),
                            );
                        },
                    );
            },
            3724: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => l });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    s = t.n(a),
                    i = t(9960),
                    o = t(6840);
                const l = ({ size: e = o.$.Default, classMix: u }) =>
                    s().createElement('div', { className: n()(i.Z.background, i.Z[`background__${e}`], u) });
            },
            4553: (e, u, t) => {
                'use strict';
                t.d(u, { Gh: () => n, VQ: () => r });
                const r = (e) => ({
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
                    n = {
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
            6840: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { $: () => r, r: () => n }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(n || (n = {})));
            },
            7075: (e, u, t) => {
                'use strict';
                t.d(u, { R: () => c });
                var r = t(280),
                    n = t(6179),
                    a = t.n(n);
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
                    c = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            E = (0, n.useMemo)(() => u || {}, [u]);
                        let m = i.exec(e),
                            _ = e,
                            d = 0;
                        for (; m; ) {
                            const t = m[0],
                                n = o.exec(t),
                                A = l.exec(t),
                                F = m[1].split(' ');
                            if (n && A) {
                                const e = n[0],
                                    i = e + d++ + e;
                                ((_ = _.replace(t, `%(${i})`)),
                                    (E[i] = s[e]
                                        ? F.map((t, n) =>
                                              a().createElement(r.z, {
                                                  key: `${t}_${n}`,
                                                  text: `${t}${n < F.length - 1 ? ' ' : ''}`,
                                                  binding: u,
                                                  classMix: s[e],
                                              }),
                                          )
                                        : F.map((t, n) =>
                                              a().createElement(
                                                  'div',
                                                  { style: c(e), key: `${t}_${n}` },
                                                  a().createElement(r.z, {
                                                      text: `${t}${n < F.length - 1 ? ' ' : ''}`,
                                                      binding: u,
                                                  }),
                                              ),
                                          )));
                            }
                            m = i.exec(e);
                        }
                        return a().createElement(r.z, { text: _, classMix: t, binding: E });
                    });
            },
            4538: (e, u, t) => {
                'use strict';
                t.d(u, { FE: () => d, Xw: () => o, lW: () => l, sq: () => A, wO: () => _ });
                var r = t(126),
                    n = t(2862),
                    a = t(729),
                    s = t(5415),
                    i = t(3649);
                t(8933);
                const o = (e, u, t = !1) => {
                        let r = e.length;
                        if (!r) return '';
                        r = u ? (t ? 6 : 11) : t ? 11 : 16;
                        const n = e.length > r ? '...' : '';
                        return `${e.slice(0, r)}${n}${u}`;
                    },
                    l = (e) => ({
                        name: e.name,
                        image: (u) =>
                            ((e, u = n.h2.Small) => {
                                const t = (0, i.BN)(e.vehicleName || '');
                                if (e.name === n.E4.Vehicles)
                                    switch (u) {
                                        case n.h2.Mini:
                                        case n.h2.Small:
                                        case n.h2.S48x48:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                        case n.h2.Big:
                                        case n.h2.S80x80:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                        case n.h2.S128x100:
                                        case n.h2.S180x135:
                                            return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                        case n.h2.S232x174:
                                        case n.h2.S296x222:
                                            return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                        case n.h2.S400x300:
                                        case n.h2.S600x450:
                                            return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                        default:
                                            return (
                                                console.error('Unknown vehicle image size', u, e.vehicleName),
                                                'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                            );
                                    }
                                if (e.name === n.E4.TmanToken)
                                    switch (u) {
                                        case n.h2.Mini:
                                        case n.h2.Small:
                                        case n.h2.S48x48:
                                        case n.h2.Big:
                                        case n.h2.S80x80:
                                            return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                        case n.h2.S128x100:
                                        case n.h2.S180x135:
                                        case n.h2.S232x174:
                                            return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                        case n.h2.S296x222:
                                            return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                        case n.h2.S400x300:
                                            return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                        case n.h2.S600x450:
                                            return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                        default:
                                            return (
                                                console.error('Unknown image size', u),
                                                'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                            );
                                    }
                                if (e.name === n.E4.CollectionItem)
                                    switch (u) {
                                        case n.h2.Mini:
                                        case n.h2.Small:
                                        case n.h2.S48x48:
                                            return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                        case n.h2.Big:
                                        case n.h2.S80x80:
                                            return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                        case n.h2.S128x100:
                                        case n.h2.S180x135:
                                        case n.h2.S232x174:
                                            return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                        case n.h2.S296x222:
                                            return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                        case n.h2.S400x300:
                                            return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                        case n.h2.S600x450:
                                            return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                        default:
                                            console.error('Unknown image size', u);
                                    }
                                if (e.name === n.E4.StyleProgress)
                                    switch (u) {
                                        case n.h2.Small:
                                        case n.h2.Big:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.progressionStyle`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                return (0, a.ry)(e, u);
                            })(e, u),
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
                    });
                let c, E, m, _;
                (!(function (e) {
                    ((e.Stamp = 'stamps'), (e.Presents = 'presents'), (e.Reward = 'rewards'));
                })(c || (c = {})),
                    Object.keys(c),
                    s.cJ.ExtraSmall,
                    s.cJ.Small,
                    s.cJ.Medium,
                    s.cJ.Large,
                    s.cJ.ExtraLarge,
                    (function (e) {
                        ((e.ASC = 'asc'), (e.DESC = 'desc'));
                    })(E || (E = {})),
                    (function (e) {
                        ((e.Player = 'userName'),
                            (e.Vehicle = 'vehicleShortName'),
                            (e.Damage = 'totalDamage'),
                            (e.Kills = 'kills'),
                            (e.Experience = 'xp'),
                            (e.Gift = 'gift'));
                    })(m || (m = {})),
                    Object.values(m),
                    m.Player,
                    (function (e) {
                        ((e.PLAY = 'play'), (e.STOP = 'stop'));
                    })(_ || (_ = {})));
                const d = {
                        width: 640,
                        height: 400,
                        frameCount: 35,
                        chunk: { count: 1, rows: 6, columns: 6 },
                        getChunkPath: () => 'R.images.mt_birthday.gui.maps.icons.tankMail.boxCanvas',
                    },
                    A = (0, r.q)(d);
            },
            5026: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            1609: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            3393: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            9960: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 948),
        (() => {
            var e = { 948: 0, 419: 0, 849: 0, 610: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        ((n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5467));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
