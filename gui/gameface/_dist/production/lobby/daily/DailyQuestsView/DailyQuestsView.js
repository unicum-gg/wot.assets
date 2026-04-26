(() => {
    var __webpack_modules__ = {
            3779: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => E });
                var o = a(6483),
                    n = a.n(o),
                    i = a(9887),
                    s = a.n(i),
                    r = a(3377),
                    u = a(6179),
                    l = a.n(u),
                    d = a(5026);
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
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                Object.keys(s());
                const p = {
                        XL: { mt: d.Z.mt__XL, mr: d.Z.mr__XL, mb: d.Z.mb__XL, ml: d.Z.ml__XL },
                        LG: { mt: d.Z.mt__LG, mr: d.Z.mr__LG, mb: d.Z.mb__LG, ml: d.Z.ml__LG },
                        MDp: { mt: d.Z.mt__MDp, mr: d.Z.mr__MDp, mb: d.Z.mb__MDp, ml: d.Z.ml__MDp },
                        MD: { mt: d.Z.mt__MD, mr: d.Z.mr__MD, mb: d.Z.mb__MD, ml: d.Z.ml__MD },
                        SMp: { mt: d.Z.mt__SMp, mr: d.Z.mr__SMp, mb: d.Z.mb__SMp, ml: d.Z.ml__SMp },
                        SM: { mt: d.Z.mt__SM, mr: d.Z.mr__SM, mb: d.Z.mb__SM, ml: d.Z.ml__SM },
                        XS: { mt: d.Z.mt__XS, mr: d.Z.mr__XS, mb: d.Z.mb__XS, ml: d.Z.ml__XS },
                    },
                    _ = (Object.keys(p), ['mt', 'mr', 'mb', 'ml']),
                    g = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    E = (0, r.ZP)((e) => {
                        let t = e.className,
                            a = e.width,
                            o = e.height,
                            i = e.m,
                            s = e.mt,
                            r = void 0 === s ? i : s,
                            E = e.mr,
                            C = void 0 === E ? i : E,
                            b = e.mb,
                            v = void 0 === b ? i : b,
                            y = e.ml,
                            A = void 0 === y ? i : y,
                            D = e.column,
                            B = e.row,
                            h = e.flexDirection,
                            w = void 0 === h ? (D ? 'column' : B && 'row') || void 0 : h,
                            F = e.flexStart,
                            I = e.center,
                            f = e.flexEnd,
                            x = e.spaceBetween,
                            S = e.spaceAround,
                            P = e.justifyContent,
                            k =
                                void 0 === P
                                    ? (F ? 'flex-start' : I && 'center') ||
                                      (f && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (S && 'space-around') ||
                                      void 0
                                    : P,
                            R = e.alignItems,
                            T = void 0 === R ? (F ? 'flex-start' : I && 'center') || (f && 'flex-end') || void 0 : R,
                            N = e.alignSelf,
                            M = e.wrap,
                            L = e.flexWrap,
                            O = void 0 === L ? (M ? 'wrap' : void 0) : L,
                            H = e.grow,
                            Q = e.shrink,
                            U = e.flex,
                            G = void 0 === U ? (H || Q ? `${H ? 1 : 0} ${Q ? 1 : 0} auto` : void 0) : U,
                            W = e.style,
                            q = e.children,
                            z = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    o,
                                    n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, m);
                        const $ = (0, u.useMemo)(() => {
                                const e = { mt: r, mr: C, mb: v, ml: A },
                                    t = ((e) =>
                                        _.reduce((t, a) => {
                                            const o = e[a];
                                            return o && 'number' != typeof o ? t.concat(p[!0 === o ? 'MD' : o][a]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        _.reduce((t, a) => {
                                            const o = e[a];
                                            return ('number' == typeof o && (t[g[a]] = o + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, W, n, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== o && 'number' == typeof o ? o + 'rem' : o,
                                        flex: G,
                                        alignSelf: N,
                                        display: w || T ? 'flex' : void 0,
                                        flexDirection: w,
                                        flexWrap: O,
                                        justifyContent: k,
                                        alignItems: T,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, o, r, C, v, A, W, G, N, w, O, k, T]),
                            j = $.computedStyle,
                            Z = $.computedClassNames;
                        return l().createElement('div', c({ className: n()(d.Z.base, ...Z, t), style: j }, z), q);
                    });
            },
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, u5: () => m });
                var o = a(6483),
                    n = a.n(o),
                    i = a(7727),
                    s = a(6179),
                    r = a.n(s),
                    u = a(6880),
                    l = a(2106);
                const d = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: o,
                    disabled: d,
                    mixClass: m,
                    soundHover: c,
                    soundClick: p,
                    onMouseEnter: _,
                    onMouseMove: g,
                    onMouseDown: E,
                    onMouseUp: C,
                    onMouseLeave: b,
                    onClick: v,
                }) => {
                    const y = (0, s.useRef)(null),
                        A = (0, s.useState)(a),
                        D = A[0],
                        B = A[1],
                        h = (0, s.useState)(!1),
                        w = h[0],
                        F = h[1],
                        I = (0, s.useState)(!1),
                        f = I[0],
                        x = I[1],
                        S = (0, s.useCallback)(() => {
                            d || (y.current && (y.current.focus(), B(!0)));
                        }, [d]),
                        P = (0, s.useCallback)(
                            (e) => {
                                D && null !== y.current && !y.current.contains(e.target) && B(!1);
                            },
                            [D],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                d || (v && v(e));
                            },
                            [d, v],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                d || (null !== c && (0, i.G)(c), _ && _(e), x(!0));
                            },
                            [d, c, _],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                d || (C && C(e), F(!1));
                            },
                            [d, C],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                d || (null !== p && (0, i.G)(p), E && E(e), a && S(), F(!0));
                            },
                            [d, p, E, S, a],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                d || (b && b(e), F(!1));
                            },
                            [d, b],
                        ),
                        H = n()(
                            u.Z.base,
                            u.Z[`base__${o}`],
                            {
                                [u.Z.base__disabled]: d,
                                [u.Z[`base__${t}`]]: t,
                                [u.Z.base__focus]: D,
                                [u.Z.base__highlightActive]: w,
                                [u.Z.base__firstHover]: f,
                            },
                            m,
                        ),
                        Q = n()(u.Z.state, u.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, s.useEffect)(() => {
                            B(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: y,
                                className: H,
                                onMouseEnter: T,
                                onMouseMove: N,
                                onMouseUp: M,
                                onMouseDown: L,
                                onMouseLeave: O,
                                onClick: k,
                            },
                            o !== l.L.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: u.Z.back }),
                                    r().createElement('span', { className: u.Z.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: Q },
                                r().createElement('span', { className: u.Z.stateDisabled }),
                                r().createElement('span', { className: u.Z.stateHighlightHover }),
                                r().createElement('span', { className: u.Z.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                d.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = (0, s.memo)(d);
            },
            2106: (e, t, a) => {
                'use strict';
                let o, n;
                (a.d(t, { L: () => o, q: () => n }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(n || (n = {})));
            },
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => s });
                var o = a(6179),
                    n = a.n(o),
                    i = a(4179);
                class s extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = i.B3.GOLD;
                        else e = i.B3.INTEGRAL;
                        const t = i.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var o = a(6179),
                    n = a.n(o),
                    i = a(6483),
                    s = a.n(i),
                    r = a(3649),
                    u = a(5287);
                const l = ({ binding: e, text: t = '', classMix: a, alignment: i = r.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              o.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  n().createElement(
                                      'div',
                                      { className: s()(u.Z.base, a), key: `${t}-${l}` },
                                      (0, r.Uw)(t, i, e).map((e, t) =>
                                          n().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => m });
                var o = a(3138),
                    n = a(6179),
                    i = a(1043),
                    s = a(5262);
                const r = o.O.client.getSize('rem'),
                    u = r.width,
                    l = r.height,
                    d = Object.assign({ width: u, height: l }, (0, s.T)(u, l, i.j)),
                    m = (0, n.createContext)(d);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => d });
                var o = a(6179),
                    n = a.n(o),
                    i = a(6536),
                    s = a(3495),
                    r = a(1043),
                    u = a(5262),
                    l = a(3138);
                const d = (0, o.memo)(({ children: e }) => {
                    const t = (0, o.useContext)(s.Y),
                        a = (0, o.useState)(t),
                        d = a[0],
                        m = a[1],
                        c = (0, o.useCallback)((e, t) => {
                            const a = l.O.view.pxToRem(e),
                                o = l.O.view.pxToRem(t);
                            m(Object.assign({ width: a, height: o }, (0, u.T)(a, o, r.j)));
                        }, []);
                    ((0, i.Z)(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, o.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const p = (0, o.useMemo)(() => Object.assign({}, d), [d]);
                    return n().createElement(s.Y.Provider, { value: p }, e);
                });
            },
            6010: (e, t, a) => {
                'use strict';
                var o = a(6179),
                    n = a(7382),
                    i = a(3495);
                const s = ['children'];
                const r = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                o,
                                n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, s);
                    const r = (0, o.useContext)(i.Y),
                        u = r.extraLarge,
                        l = r.large,
                        d = r.medium,
                        m = r.small,
                        c = r.extraSmall,
                        p = r.extraLargeWidth,
                        _ = r.largeWidth,
                        g = r.mediumWidth,
                        E = r.smallWidth,
                        C = r.extraSmallWidth,
                        b = r.extraLargeHeight,
                        v = r.largeHeight,
                        y = r.mediumHeight,
                        A = r.smallHeight,
                        D = r.extraSmallHeight,
                        B = { extraLarge: b, large: v, medium: y, small: A, extraSmall: D };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && u) return t;
                        if (a.large && l) return t;
                        if (a.medium && d) return t;
                        if (a.small && m) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && p) return (0, n.H)(t, a, B);
                        if (a.largeWidth && _) return (0, n.H)(t, a, B);
                        if (a.mediumWidth && g) return (0, n.H)(t, a, B);
                        if (a.smallWidth && E) return (0, n.H)(t, a, B);
                        if (a.extraSmallWidth && C) return (0, n.H)(t, a, B);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && b) return t;
                            if (a.largeHeight && v) return t;
                            if (a.mediumHeight && y) return t;
                            if (a.smallHeight && A) return t;
                            if (a.extraSmallHeight && D) return t;
                        }
                    }
                    return null;
                };
                r.defaultProps = {
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
                (0, o.memo)(r);
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => o });
                const o = (e, t, a) =>
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
                a.d(t, { YN: () => n.Y, ZN: () => o.Z });
                a(6010);
                var o = a(1039),
                    n = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => o });
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var o;
                function n(e, t, a) {
                    const o = (function (e, t) {
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
                        n = (function (e, t) {
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
                        i = Math.min(o, n);
                    return {
                        extraLarge: i === a.extraLarge.weight,
                        large: i === a.large.weight,
                        medium: i === a.medium.weight,
                        small: i === a.small.weight,
                        extraSmall: i === a.extraSmall.weight,
                        extraLargeWidth: o === a.extraLarge.weight,
                        largeWidth: o === a.large.weight,
                        mediumWidth: o === a.medium.weight,
                        smallWidth: o === a.small.weight,
                        extraSmallWidth: o === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
                    };
                }
                (a.d(t, { T: () => n }),
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
                    })(o || (o = {})));
            },
            1975: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => m.$, ko: () => g, uu: () => _ });
                var o = a(6483),
                    n = a.n(o),
                    i = a(6179),
                    s = a.n(i),
                    r = a(2468),
                    u = a(7442),
                    l = a(2407),
                    d = a(156),
                    m = a(7736),
                    c = a(1635);
                a(6823);
                const p = d.Gh,
                    _ = {
                        freezed: !1,
                        withStack: !1,
                        type: m.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, i.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = p,
                            size: a = m.$.Default,
                            animationSettings: o = _,
                            disabled: i = !1,
                            withoutBackground: g = !1,
                            progressBarBackgroundClassMix: E,
                            value: C,
                            deltaFrom: b,
                            lineRef: v,
                            onChangeAnimationState: y,
                            onEndAnimation: A,
                            onComplete: D,
                        }) => {
                            const B = (0, c.S)(C, e, b);
                            return s().createElement(
                                'div',
                                { className: n()(r.Z.base, r.Z[`base__${a}`]), style: (0, d.VQ)(t) },
                                !g && s().createElement(u.J, { size: a, classMix: E }),
                                s().createElement(l.r, {
                                    size: a,
                                    lineRef: v,
                                    disabled: i,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: o,
                                    onEndAnimation: A,
                                    onChangeAnimationState: y,
                                    onComplete: D,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => l });
                var o = a(6483),
                    n = a.n(o),
                    i = a(6179),
                    s = a.n(i),
                    r = a(2468),
                    u = a(7736);
                const l = ({ size: e = u.$.Default, classMix: t }) =>
                    s().createElement('div', { className: n()(r.Z.background, r.Z[`background__${e}`], t) });
            },
            8150: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => u });
                var o = a(6179),
                    n = a.n(o),
                    i = a(6483),
                    s = a.n(i),
                    r = a(8804);
                const u = ({ size: e }) => {
                    const t = s()(r.Z.base, r.Z[`base__${e}`]);
                    return n().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => l });
                var o = a(6179),
                    n = a.n(o),
                    i = a(5680),
                    s = a(6736),
                    r = a(2386);
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = (0, o.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: o,
                        deltaFrom: l,
                        animationSettings: d,
                        onEndAnimation: m,
                        onChangeAnimationState: c,
                        onComplete: p,
                    }) => {
                        if (l === t)
                            return n().createElement(i.M, {
                                key: `${l}-${t}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: o,
                                onComplete: p,
                            });
                        const _ = {
                            from: l,
                            to: t,
                            size: e,
                            lineRef: a,
                            disabled: o,
                            animationSettings: d,
                            onComplete: p,
                            onEndAnimation: m,
                            onChangeAnimationState: c,
                        };
                        return d.withStack
                            ? n().createElement(r.F, _)
                            : n().createElement(s.H, u({ key: `${l}-${t}` }, _));
                    },
                );
            },
            1848: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var o = a(6179),
                    n = a.n(o),
                    i = a(6483),
                    s = a.n(i),
                    r = a(8150),
                    u = a(6664);
                const l = (0, o.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: o, isComplete: i, withoutBounce: l }) => {
                        const d = s()(
                                u.Z.base,
                                u.Z[`base__${e}`],
                                a && u.Z.base__disabled,
                                i && u.Z.base__finished,
                                l && u.Z.base__withoutBounce,
                            ),
                            m = !a && !i;
                        return n().createElement(
                            'div',
                            { className: d, style: o, ref: t },
                            n().createElement('div', { className: u.Z.pattern }),
                            n().createElement('div', { className: u.Z.gradient }),
                            m && n().createElement(r.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => _ });
                var o = a(6483),
                    n = a.n(o),
                    i = a(122),
                    s = a(6179),
                    r = a.n(s),
                    u = a(8150),
                    l = a(6823),
                    d = a(6147);
                const m = (e) => (e ? { left: 0 } : { right: 0 }),
                    c = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    p = (e) => ({ transitionDuration: `${e}ms` }),
                    _ = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: o,
                            size: _,
                            to: g,
                            onEndAnimation: E,
                            onChangeAnimationState: C,
                            className: b,
                        }) => {
                            const v = g < o,
                                y = (0, s.useState)(l.S.Idle),
                                A = y[0],
                                D = y[1],
                                B = A === l.S.End,
                                h = A === l.S.Idle,
                                w = A === l.S.Grow,
                                F = A === l.S.Shrink,
                                I = (0, s.useCallback)(
                                    (e) => {
                                        (D(e), C && C(e));
                                    },
                                    [C],
                                ),
                                f = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, i.F)(() => {
                                            I(e);
                                        }, t),
                                    [I],
                                );
                            (0, s.useEffect)(() => {
                                if (!a)
                                    return h
                                        ? f(l.S.Grow, t)
                                        : w
                                          ? f(l.S.Shrink, e)
                                          : F
                                            ? f(l.S.End, e)
                                            : void (B && E && E());
                            }, [f, a, B, w, h, F, E, t, e]);
                            const x = (0, s.useMemo)(() => Object.assign({ width: '100%' }, p(e), m(v)), [v, e]),
                                S = (0, s.useMemo)(() => Object.assign({ width: '0%' }, p(e), m(v)), [v, e]),
                                P = (0, s.useMemo)(() => Object.assign({ width: '0%' }, c(v, o), p(e)), [o, v, e]),
                                k = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - o)}%` }, c(v, o), p(e)),
                                    [o, v, g, e],
                                );
                            if (B) return null;
                            const R = n()(d.Z.base, b, v && 0 === g && d.Z.base__withoutBounce);
                            return r().createElement(
                                'div',
                                { style: h ? P : k, className: R },
                                r().createElement(
                                    'div',
                                    { style: F ? S : x, className: d.Z.glow },
                                    r().createElement(u.$, { size: _ }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => l });
                var o = a(6179),
                    n = a.n(o),
                    i = a(122),
                    s = a(6823),
                    r = a(8150),
                    u = a(9919);
                const l = (0, o.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: l,
                        size: d,
                        to: m,
                        onEndAnimation: c,
                        onChangeAnimationState: p,
                    }) => {
                        const _ = m < l,
                            g = (0, o.useState)(s.V.Idle),
                            E = g[0],
                            C = g[1],
                            b = E === s.V.In,
                            v = E === s.V.End,
                            y = E === s.V.Idle,
                            A = (0, o.useCallback)(
                                (e) => {
                                    (C(e), p && p(e));
                                },
                                [p],
                            );
                        ((0, o.useEffect)(() => {
                            if (y && !a) {
                                const e = t;
                                return (0, i.F)(() => {
                                    A(s.V.In);
                                }, e);
                            }
                        }, [A, a, y, t]),
                            (0, o.useEffect)(() => {
                                if (b) {
                                    const a = e + t;
                                    return (0, i.F)(() => {
                                        (c && c(), A(s.V.End));
                                    }, a);
                                }
                            }, [A, b, c, t, e]));
                        const D = (0, o.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, t, e],
                            ),
                            B = (0, o.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, t, e],
                            ),
                            h = (0, o.useMemo)(
                                () => ({ width: `${Math.abs(l - m)}%`, left: `${_ ? m : l}%` }),
                                [l, _, m],
                            );
                        return v
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: u.Z.base, style: h },
                                  n().createElement(
                                      'div',
                                      { style: y ? D : B, className: u.Z.delta },
                                      n().createElement(r.$, { size: d }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                var o = a(6179),
                    n = a.n(o),
                    i = a(2434),
                    s = a(1848),
                    r = a(6823);
                const u = (0, o.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: u,
                        disabled: l,
                        isComplete: d,
                        animationSettings: m,
                        onEndAnimation: c,
                        onChangeAnimationState: p,
                    }) => {
                        const _ = e < a,
                            g = (0, o.useState)(!1),
                            E = g[0],
                            C = g[1],
                            b = (0, o.useCallback)(
                                (e) => {
                                    (e === r.S.Shrink && C(!0), p && p(e));
                                },
                                [p],
                            ),
                            v = (0, o.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            y = (0, o.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${m.line.duration}ms` }),
                                [m.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, {
                                size: t,
                                lineRef: u,
                                disabled: l,
                                isComplete: d,
                                withoutBounce: _ && 0 === e,
                                baseStyles: E ? y : v,
                            }),
                            a >= 0 &&
                                n().createElement(i.O, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    onChangeAnimationState: b,
                                    freezed: m.freezed,
                                    onEndAnimation: c,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: m.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => r });
                var o = a(6179),
                    n = a.n(o),
                    i = a(5913),
                    s = a(1848);
                const r = (0, o.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: u,
                        isComplete: l,
                        animationSettings: d,
                        onChangeAnimationState: m,
                        onEndAnimation: c,
                    }) => {
                        const p = (0, o.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${d.line.duration}ms`,
                                transitionDelay: `${d.line.delay}ms`,
                            }),
                            [d.line.delay, d.line.duration, e],
                        );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, { size: t, lineRef: r, disabled: u, isComplete: l, baseStyles: p }),
                            a >= 0 &&
                                n().createElement(i.x, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    freezed: d.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: m,
                                    onEndAnimation: c,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => d });
                var o = a(6179),
                    n = a.n(o),
                    i = a(7736),
                    s = a(828),
                    r = a(538);
                const u = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const d = (0, o.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                o,
                                n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, u);
                    const m = (0, o.useState)(!1),
                        c = m[0],
                        p = m[1],
                        _ = (0, o.useCallback)(() => {
                            const e = 100 === d.to;
                            (e !== c && p(e), e && t && t(), a && a());
                        }, [c, t, a, d.to]);
                    switch (d.animationSettings.type) {
                        case i.r.Simple:
                            return n().createElement(s.D, l({}, d, { onEndAnimation: _, isComplete: c }));
                        case i.r.Growing:
                            return n().createElement(r.F, l({}, d, { onEndAnimation: _, isComplete: c }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                'use strict';
                let o, n;
                (a.d(t, { S: () => o, V: () => n }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(n || (n = {})));
            },
            2386: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                var o = a(6179),
                    n = a.n(o),
                    i = a(6736);
                const s = ['onEndAnimation'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const u = (0, o.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                o,
                                n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, s);
                    const u = (0, o.useRef)({}),
                        l = (0, o.useCallback)(() => {
                            ((u.current.from = void 0), t && t());
                        }, [t]),
                        d = 'number' == typeof u.current.from ? u.current.from : a.from;
                    return (
                        (u.current.from = d),
                        n().createElement(i.H, r({}, a, { onEndAnimation: l, key: `${d}-${a.to}`, from: d }))
                    );
                });
            },
            5680: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => s });
                var o = a(6179),
                    n = a.n(o),
                    i = a(1848);
                const s = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: r }) => {
                    const u = (0, o.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, o.useEffect)(() => {
                            l && r && r();
                        }, [l, r]),
                        n().createElement(i.t, { size: e, disabled: s, baseStyles: u, isComplete: l, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                'use strict';
                a.d(t, { Gh: () => n, VQ: () => o });
                const o = (e) => ({
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
            7736: (e, t, a) => {
                'use strict';
                let o, n;
                (a.d(t, { $: () => o, r: () => n }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(n || (n = {})));
            },
            1635: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => s });
                var o = a(7515),
                    n = a(6179);
                const i = (e, t, a) => {
                        if ('number' == typeof a) {
                            return ((0, o.u)(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    s = (e, t, a) =>
                        (0, n.useMemo)(() => {
                            const n = ((0, o.u)(0, t, e) / t) * 100;
                            return { value: n, deltaFrom: i(n, t, a) };
                        }, [a, t, e]);
            },
            5739: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => m });
                var o = a(6483),
                    n = a.n(o),
                    i = a(6179),
                    s = a.n(i),
                    r = a(3415),
                    u = a(2862),
                    l = a(729),
                    d = a(1609);
                const m = ({
                    name: e,
                    image: t,
                    isPeriodic: a = !1,
                    size: o = u.h2.Big,
                    special: i,
                    value: m,
                    valueType: c,
                    style: p,
                    className: _,
                    classNames: g,
                    tooltipArgs: E,
                    periodicIconTooltipArgs: C,
                }) => {
                    const b = (0, l.L_)(i),
                        v = (0, l.i2)(i),
                        y = (0, l.m9)(m, c);
                    return s().createElement(
                        'div',
                        { className: n()(d.Z.base, d.Z[`base__${o}`], _), style: p },
                        s().createElement(
                            r.l,
                            { tooltipArgs: E, className: d.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: n()(d.Z.image, null == g ? void 0 : g.image) },
                                    b &&
                                        s().createElement('div', {
                                            className: n()(d.Z.highlight, null == g ? void 0 : g.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${o}.${b}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        s().createElement('div', {
                                            className: n()(d.Z.icon, null == g ? void 0 : g.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    v &&
                                        s().createElement('div', {
                                            className: n()(d.Z.overlay, null == g ? void 0 : g.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${o}.${v}_overlay)`,
                                            },
                                        }),
                                ),
                                y &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                d.Z.info,
                                                d.Z[`info__${e}`],
                                                c === u.$h.MULTI && d.Z.info__multi,
                                                null == g ? void 0 : g.info,
                                            ),
                                        },
                                        y,
                                    ),
                            ),
                        ),
                        a &&
                            s().createElement(
                                r.l,
                                { tooltipArgs: C },
                                s().createElement('div', {
                                    className: n()(d.Z.timer, null == g ? void 0 : g.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, t, a) => {
                'use strict';
                let o, n, i, s, r, u, l;
                (a.d(t, { $h: () => s, A2: () => u, E4: () => o, Rl: () => n, h2: () => i, kK: () => r, sh: () => l }),
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
                            (e.HistoricalBattleDiscount25 = 'historical_battles_main_discount'),
                            (e.LootBoxToken = 'lootBoxToken'),
                            (e.GoldenTicket = 'birthday2025_golden_ticket'),
                            (e.PostStamp = 'giftsystem_4_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'));
                    })(o || (o = {})),
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
                    })(i || (i = {})),
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
                    })(r || (r = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(u || (u = {})),
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
            729: (e, t, a) => {
                'use strict';
                a.d(t, { L_: () => C, i2: () => b, m9: () => v, p3: () => c, pI: () => E, ry: () => g });
                var o = a(2372),
                    n = a(6179),
                    i = a.n(n),
                    s = a(2862);
                const r = [
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
                        s.E4.PremiumPlusUniversal,
                    ],
                    u = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints],
                    d = [s.E4.PremiumPlus, s.E4.Premium];
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
                const c = (e) =>
                        r.includes(e)
                            ? s.$h.MULTI
                            : u.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : d.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    p = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    g = (e, t = s.h2.Small) => {
                        const a = e.name,
                            o = e.type,
                            n = e.value,
                            i = e.icon,
                            r = e.item,
                            u = e.dogTagType,
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
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
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
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const o = p[e];
                                    if (o) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(o),
                                            i = n.$dyn(a);
                                        return i ? `${i}` : `${n.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(u, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${i}`;
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
                                })(t)}.${i}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${i}`;
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
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    E = (e, t, a) => {
                        const o = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            o,
                            a,
                        );
                    },
                    C = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    b = (e) => {
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
                    v = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case s.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return i().createElement(o.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            5036: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        Area: () => f,
                        Bar: () => w,
                        DefaultScroll: () => I,
                        Direction: () => c.Nm,
                        defaultSettings: () => c.he,
                        useHorizontalScrollApi: () => c.T5,
                    }));
                var o = a(6483),
                    n = a.n(o),
                    i = a(1856),
                    s = a(6179),
                    r = a.n(s),
                    u = a(7515),
                    l = a(3815),
                    d = a(560),
                    m = a(7727),
                    c = a(6358);
                const p = 'HorizontalBar_base_49',
                    _ = 'HorizontalBar_base__nonActive_82',
                    g = 'HorizontalBar_leftButton_5f',
                    E = 'HorizontalBar_rightButton_03',
                    C = 'HorizontalBar_track_0d',
                    b = 'HorizontalBar_thumb_fd',
                    v = 'HorizontalBar_rail_32',
                    y = 'disable',
                    A = { pending: !1, offset: 0 },
                    D = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    B = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    w = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = D, onDrag: o = B }) => {
                        const w = (0, s.useRef)(null),
                            F = (0, s.useRef)(null),
                            I = (0, s.useRef)(null),
                            f = (0, s.useRef)(null),
                            x = (0, s.useRef)(null),
                            S = e.stepTimeout || 100,
                            P = (0, s.useState)(A),
                            k = P[0],
                            R = P[1],
                            T = (0, s.useCallback)(
                                (e) => {
                                    (R(e),
                                        x.current &&
                                            o({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: x.current }));
                                },
                                [o],
                            ),
                            N = () => {
                                const t = f.current,
                                    a = x.current,
                                    o = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(o && t && a && n)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, o / n),
                                    r = (0, u.u)(0, 1, i / (n - o)),
                                    l = (t.offsetWidth - h(t, s)) * r;
                                ((a.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (F.current && I.current && f.current && x.current) {
                                            if (0 === e)
                                                return (F.current.classList.add(y), void I.current.classList.remove(y));
                                            if (
                                                ((t = f.current),
                                                (a = x.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (F.current.classList.remove(y), void I.current.classList.add(y));
                                            var t, a;
                                            (F.current.classList.remove(y), I.current.classList.remove(y));
                                        }
                                    })(l));
                            },
                            M = (0, l.z)(() => {
                                ((() => {
                                    const t = x.current,
                                        a = f.current,
                                        o = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && o && a)) return;
                                    const i = Math.min(1, o / n);
                                    ((t.style.width = `${h(a, i)}px`),
                                        (t.style.display = 'flex'),
                                        w.current &&
                                            (1 === i ? w.current.classList.add(_) : w.current.classList.remove(_)));
                                })(),
                                    N());
                            });
                        ((0, s.useEffect)(() => (0, i.v)(M)),
                            (0, s.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            N();
                                        };
                                        let a = B;
                                        const o = () => {
                                            (a(), (a = (0, i.v)(M)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', M),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', o),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', M),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', o));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!k.pending) return;
                                const t = (t) => {
                                        var a;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const i = f.current,
                                            s = x.current;
                                        if (!n || !i || !s) return;
                                        const r = t.screenX - k.offset - i.getBoundingClientRect().x,
                                            u = (r / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            o({ type: 'dragging', thumb: s, thumbOffset: r, contentOffset: u }));
                                    },
                                    a = () => {
                                        (window.removeEventListener('mousemove', t), T(A));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a));
                                    }
                                );
                            }, [e, k.offset, k.pending, o, T]));
                        const L = (0, d.B)((t) => e.applyStepTo(t), S, [e]),
                            O = L[0],
                            H = L[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', H, !0),
                                () => document.removeEventListener('mouseup', H, !0)
                            ),
                            [H],
                        );
                        const Q = (e) => {
                            e.target.classList.contains(y) || (0, m.G)('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: n()(p, t.base), ref: w, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: n()(g, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(y) ||
                                        0 !== e.button ||
                                        ((0, m.G)('play'), O(c.Nm.Next));
                                },
                                onMouseUp: H,
                                ref: F,
                                onMouseEnter: Q,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: n()(C, t.track),
                                    onMouseDown: (t) => {
                                        const o = x.current;
                                        if (o && 0 === t.button)
                                            if (((0, m.G)('play'), t.target === o))
                                                T({ pending: !0, offset: t.screenX - o.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const o = x.current,
                                                        n = e.contentRef.current;
                                                    if (!o || !n) return;
                                                    const i = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > o.getBoundingClientRect().x ? c.Nm.Prev : c.Nm.Next);
                                            }
                                    },
                                    ref: f,
                                    onMouseEnter: Q,
                                },
                                r().createElement('div', { ref: x, className: n()(b, t.thumb) }),
                                r().createElement('div', { className: n()(v, t.rail) }),
                            ),
                            r().createElement('div', {
                                className: n()(E, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(y) ||
                                        0 !== e.button ||
                                        ((0, m.G)('play'), O(c.Nm.Prev));
                                },
                                onMouseUp: H,
                                ref: I,
                                onMouseEnter: Q,
                            }),
                        );
                    }),
                    F = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    I = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: o,
                        areaClassName: i,
                        classNames: u,
                        scrollClassName: l,
                        getStepByRailClick: d,
                        onDrag: m,
                    }) => {
                        const c = (0, s.useMemo)(() => {
                                const e = o || {};
                                return Object.assign({}, e, { base: n()(F.base, e.base) });
                            }, [o]),
                            p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return r().createElement(
                            'div',
                            { className: n()(F.defaultScroll, a), onWheel: t.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: n()(F.defaultScrollArea, i) },
                                r().createElement(f, { className: l, api: p, classNames: u }, e),
                            ),
                            r().createElement(w, { getStepByRailClick: d, api: t, onDrag: m, classNames: c }),
                        );
                    },
                    f = ({ api: e, className: t, classNames: a, children: o, style: u }) => (
                        (0, s.useEffect)(() => (0, i.v)(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: n()(F.base, t), style: u },
                            r().createElement(
                                'div',
                                {
                                    className: n()(F.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: n()(F.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    o,
                                ),
                            ),
                        )
                    );
                ((f.Bar = w),
                    (f.Default = I),
                    (f.SeniorityAwards = ({ api: e, className: t, classNames: a, children: o }) => (
                        (0, s.useEffect)(() => (0, i.v)(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: n()(F.base, t) },
                            r().createElement(
                                'div',
                                { className: n()(F.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                r().createElement(
                                    'div',
                                    { className: n()(F.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    o,
                                ),
                            ),
                        )
                    )));
            },
            6358: (e, t, a) => {
                'use strict';
                a.d(t, { GN: () => n, Nm: () => o.Nm, T5: () => i, he: () => o.he });
                var o = a(9482);
                const n = (e) => {
                        var t, a;
                        return (
                            (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0) <
                            e.offsetWidth
                        );
                    },
                    i = (0, o.EO)({
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
                        getDirection: (e) => (e.deltaY > 1 ? o.Nm.Next : o.Nm.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
            },
            7701: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => o.Nm, c4: () => n });
                var o = a(9482);
                const n = (0, o.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? o.Nm.Next : o.Nm.Prev),
                });
            },
            9482: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => c, EO: () => _, he: () => p });
                var o = a(7515),
                    n = a(1856),
                    i = a(3138),
                    s = a(6179);
                function r(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return u(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return u(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
                    return o;
                }
                var l = a(3815);
                function d(e, t, a) {
                    const o = (0, s.useMemo)(
                        () =>
                            (function (e, t, a, o) {
                                let n,
                                    i = !1,
                                    s = 0;
                                function r() {
                                    n && clearTimeout(n);
                                }
                                function u(...u) {
                                    const l = this,
                                        d = Date.now() - s;
                                    function m() {
                                        ((s = Date.now()), a.apply(l, u));
                                    }
                                    i ||
                                        (o && !n && m(),
                                        r(),
                                        void 0 === o && d > e
                                            ? m()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  o
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : m,
                                                  void 0 === o ? e - d : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((o = a), (a = t), (t = void 0)),
                                    (u.cancel = function () {
                                        (r(), (i = !0));
                                    }),
                                    u
                                );
                            })(a, e),
                        t,
                    );
                    return ((0, s.useEffect)(() => o.cancel, [o]), o);
                }
                var m = a(7030);
                let c;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(c || (c = {}));
                const p = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _ = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: u,
                        getWrapperSize: c,
                        triggerMouseMoveOnUpdate: _ = !1,
                    }) => {
                        const g = (e, a) => {
                            const n = t(e),
                                i = n[0],
                                s = n[1];
                            return (0, o.u)(i, s, a);
                        };
                        return (o = {}) => {
                            const E = o.settings,
                                C = void 0 === E ? p : E,
                                b = (0, s.useRef)(null),
                                v = (0, s.useRef)(null),
                                y = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        o = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        n = (e, ...a) => {
                                            for (var o, n = r(t(e).values()); !(o = n()).done; ) (0, o.value)(...a);
                                        };
                                    return (0, s.useMemo)(() => ({ on: a, off: o, trigger: n }), []);
                                })(),
                                A = d(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, m.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = b.current;
                                        t && (a(t, e), y.trigger('change', e), _ && A());
                                    },
                                    onRest: (e) => y.trigger('rest', e),
                                    onStart: (e) => y.trigger('start', e),
                                    onPause: (e) => y.trigger('pause', e),
                                })),
                                B = D[0],
                                h = D[1],
                                w = (0, s.useCallback)(
                                    (e, t, a) => {
                                        var o;
                                        const n = B.scrollPosition.get(),
                                            i = (null != (o = B.scrollPosition.goal) ? o : 0) - n;
                                        return g(e, t * a + i + n);
                                    },
                                    [B.scrollPosition],
                                ),
                                F = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const o = b.current;
                                        o &&
                                            h.start({
                                                scrollPosition: g(o, e),
                                                immediate: t,
                                                reset: a,
                                                config: C.animationConfig,
                                                from: { scrollPosition: g(o, B.scrollPosition.get()) },
                                            });
                                    },
                                    [h, C.animationConfig, B.scrollPosition],
                                ),
                                I = (0, s.useCallback)(
                                    (e) => {
                                        const t = b.current,
                                            a = v.current;
                                        if (!t || !a) return;
                                        const o = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return c(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, C.step),
                                            n = w(t, e, o);
                                        F(n);
                                    },
                                    [F, w, C.step],
                                ),
                                f = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && I(u(e)),
                                            b.current && y.trigger('mouseWheel', e, B.scrollPosition, t(b.current)));
                                    },
                                    [B.scrollPosition, I, y],
                                ),
                                x = ((e, t = []) => {
                                    const a = (0, s.useRef)(),
                                        o = (0, s.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [o],
                                        ),
                                        o
                                    );
                                })(
                                    () =>
                                        (0, n.v)(() => {
                                            const e = b.current;
                                            e &&
                                                (F(g(e, B.scrollPosition.goal), { immediate: !0 }),
                                                y.trigger('resizeHandled'));
                                        }),
                                    [F, B.scrollPosition.goal],
                                ),
                                S = (0, l.z)(() => {
                                    const e = b.current;
                                    if (!e) return;
                                    const t = g(e, B.scrollPosition.goal);
                                    (t !== B.scrollPosition.goal && F(t, { immediate: !0 }),
                                        y.trigger('recalculateContent'));
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            );
                            const P = (0, s.useCallback)((e) => y.trigger('isThumbDraggingChanged', e), [y]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (v.current ? c(v.current) : void 0),
                                    getContainerSize: () => (b.current ? e(b.current) : void 0),
                                    getBounds: () =>
                                        b.current
                                            ? t(b.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: C.step.clampedArrowStepTimeout,
                                    clampPosition: g,
                                    handleMouseWheel: f,
                                    applyScroll: F,
                                    applyStepTo: I,
                                    contentRef: b,
                                    wrapperRef: v,
                                    scrollPosition: h,
                                    animationScroll: B,
                                    recalculateContent: S,
                                    handleIsThumbDragging: P,
                                    events: { on: y.on, off: y.off },
                                }),
                                [B.scrollPosition, F, I, P, y.off, y.on, S, f, h, C.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            4963: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => k });
                var o = {};
                (a.r(o), a.d(o, { Area: () => P, Bar: () => f, Default: () => S, useVerticalScrollApi: () => _.c4 }));
                var n = a(5036),
                    i = a(6483),
                    s = a.n(i),
                    r = a(1856),
                    u = a(6179),
                    l = a.n(u),
                    d = a(7515),
                    m = a(3815),
                    c = a(560),
                    p = a(7727),
                    _ = a(7701);
                const g = 'VerticalBar_base_f3',
                    E = 'VerticalBar_base__nonActive_42',
                    C = 'VerticalBar_topButton_d7',
                    b = 'VerticalBar_bottomButton_06',
                    v = 'VerticalBar_track_df',
                    y = 'VerticalBar_thumb_32',
                    A = 'VerticalBar_rail_43',
                    D = 'disable',
                    B = () => {},
                    h = { pending: !1, offset: 0 },
                    w = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    F = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    I = (e, t) => Math.max(20, e.offsetHeight * t),
                    f = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = w, onDrag: o = B }) => {
                        const n = (0, u.useRef)(null),
                            i = (0, u.useRef)(null),
                            f = (0, u.useRef)(null),
                            x = (0, u.useRef)(null),
                            S = (0, u.useRef)(null),
                            P = e.stepTimeout || 100,
                            k = (0, u.useState)(h),
                            R = k[0],
                            T = k[1],
                            N = (0, u.useCallback)(
                                (e) => {
                                    (T(e),
                                        S.current &&
                                            o({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: S.current }));
                                },
                                [o],
                            ),
                            M = (0, m.z)(() => {
                                const t = S.current,
                                    a = x.current,
                                    o = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(o && i && t && a)) return;
                                const s = Math.min(1, o / i);
                                return (
                                    (t.style.height = `${I(a, s)}px`),
                                    t.classList.add(y),
                                    n.current && (1 === s ? n.current.classList.add(E) : n.current.classList.remove(E)),
                                    s
                                );
                            }),
                            L = (0, m.z)(() => {
                                const t = x.current,
                                    a = S.current,
                                    o = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(o && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, o / n),
                                    u = (0, d.u)(0, 1, s / (n - o)),
                                    l = (t.offsetHeight - I(t, r)) * u;
                                ((a.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (i.current && f.current && x.current && S.current) {
                                            if (0 === e)
                                                return (i.current.classList.add(D), void f.current.classList.remove(D));
                                            if (
                                                ((t = x.current),
                                                (a = S.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (i.current.classList.remove(D), void f.current.classList.add(D));
                                            var t, a;
                                            (i.current.classList.remove(D), f.current.classList.remove(D));
                                        }
                                    })(l));
                            }),
                            O = (0, m.z)(() => {
                                F(e, () => {
                                    (M(), L());
                                });
                            });
                        ((0, u.useEffect)(() => (0, r.v)(O)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    F(e, () => {
                                        L();
                                    });
                                };
                                let a = B;
                                const o = () => {
                                    (a(), (a = (0, r.v)(O)));
                                };
                                return (
                                    e.events.on('recalculateContent', O),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', o),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', O),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', o));
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!R.pending) return;
                                const t = (t) => {
                                        F(e, (a) => {
                                            const n = x.current,
                                                i = S.current,
                                                s = e.getContainerSize();
                                            if (!n || !i || !s) return;
                                            const r = t.screenY - R.offset - n.getBoundingClientRect().y,
                                                u = (r / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                o({ type: 'dragging', thumb: i, thumbOffset: r, contentOffset: u }));
                                        });
                                    },
                                    a = () => {
                                        (window.removeEventListener('mousemove', t), e.handleIsThumbDragging(!1), N(h));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a));
                                    }
                                );
                            }, [e, R.offset, R.pending, o, N]));
                        const H = (0, c.B)((t) => e.applyStepTo(t), P, [e]),
                            Q = H[0],
                            U = H[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', U, !0),
                                () => document.removeEventListener('mouseup', U, !0)
                            ),
                            [U],
                        );
                        const G = (e) => {
                            e.target.classList.contains(D) || (0, p.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(g, t.base), ref: n, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(C, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(D) ||
                                        0 !== e.button ||
                                        ((0, p.G)('play'), Q(_.Nm.Next));
                                },
                                ref: i,
                                onMouseEnter: G,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(v, t.track),
                                    onMouseDown: (t) => {
                                        const o = S.current;
                                        if (o && 0 === t.button)
                                            if (((0, p.G)('play'), t.target === o))
                                                (e.handleIsThumbDragging(!0),
                                                    N({
                                                        pending: !0,
                                                        offset: t.screenY - o.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    S.current &&
                                                        F(e, (o) => {
                                                            if (!o) return;
                                                            const n = a(e),
                                                                i = e.clampPosition(o, o.scrollTop + n * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > o.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: x,
                                    onMouseEnter: G,
                                },
                                l().createElement('div', { ref: S, className: t.thumb }),
                                l().createElement('div', { className: s()(A, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(b, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(D) ||
                                        0 !== e.button ||
                                        ((0, p.G)('play'), Q(_.Nm.Prev));
                                },
                                onMouseUp: U,
                                ref: f,
                                onMouseEnter: G,
                            }),
                        );
                    }),
                    x = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    S = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: o,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: r,
                        getStepByRailClick: d,
                        onDrag: m,
                    }) => {
                        const c = (0, u.useMemo)(() => {
                                const e = o || {};
                                return Object.assign({}, e, { base: s()(x.base, e.base) });
                            }, [o]),
                            p = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: s()(x.defaultScroll, a), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(x.area, n) },
                                l().createElement(P, { className: i, classNames: r, api: p }, e),
                            ),
                            l().createElement(f, { getStepByRailClick: d, api: t, onDrag: m, classNames: c }),
                        );
                    },
                    P = ({ className: e, classNames: t, children: a, api: o }) => (
                        (0, u.useEffect)(() => (0, r.v)(o.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(x.base, e), ref: o.wrapperRef, onWheel: o.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(x.content, null == t ? void 0 : t.content), ref: o.contentRef },
                                a,
                            ),
                        )
                    );
                P.Default = S;
                const k = { Vertical: o, Horizontal: n };
            },
            7613: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => h });
                var o = a(6483),
                    n = a.n(o),
                    i = a(3779),
                    s = a(280),
                    r = a(3532),
                    u = a.n(r),
                    l = a(9887),
                    d = a.n(l),
                    m = a(3377),
                    c = a(6179),
                    p = a.n(c),
                    _ = a(3393);
                const g = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                Object.keys(d());
                const C = Object.keys(u()),
                    b = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    v = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    y = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    A = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    D =
                        (Object.keys(A),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': b,
                            'heading-H36': b,
                            'heading-H28': v,
                            'heading-H24': v,
                            'heading-H24R': v,
                            'heading-H22': v,
                            'heading-H20R': v,
                            'heading-H18': v,
                            'heading-H15': y,
                            'heading-H14': y,
                            'paragraph-P24': v,
                            'paragraph-P18': v,
                            'paragraph-P16': v,
                            'paragraph-P14': y,
                            'paragraph-P12': y,
                            'paragraph-P10': y,
                        }),
                    B =
                        (Object.keys(D),
                        (e) =>
                            e
                                ? ((e) => C.includes(e))(e)
                                    ? { colorClassName: _.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    h = (0, m.ZP)((e) => {
                        let t = e.text,
                            a = e.variant,
                            o = e.className,
                            r = e.color,
                            u = e.m,
                            l = e.mt,
                            d = void 0 === l ? u : l,
                            m = e.mr,
                            C = void 0 === m ? u : m,
                            b = e.mb,
                            v = void 0 === b ? u : b,
                            y = e.ml,
                            A = void 0 === y ? u : y,
                            h = e.style,
                            w = e.format,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    o,
                                    n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, g);
                        const I = (0, c.useMemo)(() => {
                                const e = B(r),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    o = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, h, o), colorClassName: t };
                            }, [h, r]),
                            f = I.computedStyle,
                            x = I.colorClassName;
                        return p().createElement(
                            i.ZP,
                            E(
                                {
                                    className: n()(_.Z.base, a && _.Z[a], x, o),
                                    style: f,
                                    mt: !0 === d ? D[a || 'paragraph-P16'].mt : d,
                                    mr: !0 === C ? D[a || 'paragraph-P16'].mr : C,
                                    mb: !0 === v ? D[a || 'paragraph-P16'].mb : v,
                                    ml: !0 === A ? D[a || 'paragraph-P16'].ml : A,
                                },
                                F,
                            ),
                            void 0 !== w ? p().createElement(s.z, E({}, w, { text: t })) : t,
                        );
                    });
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => u });
                var o = a(6179),
                    n = a.n(o),
                    i = a(2056);
                const s = ['children'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                o,
                                n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, s);
                    return n().createElement(
                        i.u,
                        r(
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
            3415: (e, t, a) => {
                'use strict';
                a.d(t, { l: () => l });
                var o = a(6179),
                    n = a.n(o),
                    i = a(7078),
                    s = a(6373),
                    r = a(2056);
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const o = n().createElement('div', { className: a }, e);
                    if (t.header || t.body) return n().createElement(s.i, t, o);
                    const l = t.contentId,
                        d = t.args,
                        m = null == d ? void 0 : d.contentId;
                    return l || m
                        ? n().createElement(r.u, u({}, t, { contentId: l || m }), o)
                        : n().createElement(i.t, t, o);
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var o = a(2056),
                    n = a(6179),
                    i = a.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const u = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            d = e.note,
                            m = e.alert,
                            c = e.args,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    o,
                                    n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, s);
                        const _ = (0, n.useMemo)(() => {
                            const e = Object.assign({}, c, { body: a, header: l, note: d, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, a, l, d, c]);
                        return i().createElement(
                            o.u,
                            r(
                                {
                                    contentId:
                                        ((g = null == c ? void 0 : c.hasHtmlContent),
                                        g ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                p,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var o = a(7902),
                    n = a(4179),
                    i = a(6179);
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
                function r(e) {
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
                const u = (e, t, a = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            d = e.onMouseLeave,
                            m = e.onMouseDown,
                            c = e.onClick,
                            p = e.ignoreShowDelay,
                            _ = void 0 !== p && p,
                            g = e.ignoreMouseClick,
                            E = void 0 !== g && g,
                            C = e.decoratorId,
                            b = void 0 === C ? 0 : C,
                            v = e.isEnabled,
                            y = void 0 === v || v,
                            A = e.targetId,
                            D = void 0 === A ? 0 : A,
                            B = e.onShow,
                            h = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    o,
                                    n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, s);
                        const F = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            I = (0, i.useMemo)(() => D || (0, o.F)().resId, [D]),
                            f = (0, i.useCallback)(() => {
                                (F.current.isVisible && F.current.timeoutId) ||
                                    (u(a, b, { isMouseEvent: !0, on: !0, arguments: r(n) }, I),
                                    B && B(),
                                    (F.current.isVisible = !0));
                            }, [a, b, n, I, B]),
                            x = (0, i.useCallback)(() => {
                                if (F.current.isVisible || F.current.timeoutId) {
                                    const e = F.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (F.current.timeoutId = 0)),
                                        u(a, b, { on: !1 }, I),
                                        F.current.isVisible && h && h(),
                                        (F.current.isVisible = !1));
                                }
                            }, [a, b, I, h]),
                            S = (0, i.useCallback)((e) => {
                                F.current.isVisible &&
                                    ((F.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (F.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(F.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = F.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === y && x();
                            }, [y, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ));
                        return y
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((P = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((F.current.timeoutId = window.setTimeout(f, _ ? 100 : 400)),
                                                      l && l(e),
                                                      P && P(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (x(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === E && x(), null == c || c(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === E && x(), null == m || m(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var P;
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
            7515: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => o });
                const o = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => o });
                const o = (e) => {
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
            122: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => o });
                const o = (e, t) => {
                    let a;
                    const o = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        ('function' == typeof a && a(), clearTimeout(o));
                    };
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var o = a(3138);
                function n(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return i(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
                    return o;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function r({ initializer: e = !0, rootId: t = 0, getRoot: a = s, context: i = 'model' } = {}) {
                    const r = new Map();
                    function u(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = r.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const o = a(t),
                            n = i.split('.').reduce((e, t) => e[t], o);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, n);
                    };
                    return {
                        subscribe: (a, n) => {
                            const s = 'string' == typeof n ? `${i}.${n}` : i,
                                u = o.O.view.addModelObserver(s, t, !0);
                            return (r.set(u, a), e && a(l(n)), u);
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
                            for (var e, a = n(r.keys()); !(e = a()).done; ) {
                                u(e.value, t);
                            }
                        },
                        unsubscribe: u,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => u });
                var o = a(4598),
                    n = a(9174),
                    i = a(6179),
                    s = a.n(i),
                    r = a(8246);
                const u = () => (e, t) => {
                    const a = (0, i.createContext)({});
                    return [
                        function ({ mode: u = 'real', options: l, children: d, mocks: m }) {
                            const c = (0, i.useRef)([]),
                                p = (a, i, s) => {
                                    var u;
                                    const l = r.U(i),
                                        d =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (u = null == s ? void 0 : s.getter) ? u : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === a ? (null == s ? void 0 : s.getter(e)) : d.readByPath(e),
                                        p = (e) => c.current.push(e),
                                        _ = e({
                                            mode: a,
                                            readByPath: m,
                                            externalModel: d,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : m(e),
                                                        s = n.LO.box(i, { equals: o.jv });
                                                    return (
                                                        'real' === a &&
                                                            d.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : m(e),
                                                        s = n.LO.box(i, { equals: o.jv });
                                                    return (
                                                        'real' === a &&
                                                            d.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const o = m(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(o[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                d.subscribe(
                                                                    (0, n.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            r = s.reduce(
                                                                (e, [t, a]) => ((e[a] = n.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                d.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([t, a]) => {
                                                                            r[a].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: p,
                                        }),
                                        g = { mode: a, model: _, externalModel: d, cleanup: p };
                                    return {
                                        model: _,
                                        controls: 'mocks' === a && s ? s.controls(g) : t(g),
                                        externalModel: d,
                                        mode: a,
                                    };
                                },
                                _ = (0, i.useRef)(!1),
                                g = (0, i.useState)(u),
                                E = g[0],
                                C = g[1],
                                b = (0, i.useState)(() => p(u, l, m)),
                                v = b[0],
                                y = b[1];
                            return (
                                (0, i.useEffect)(() => {
                                    _.current ? y(p(E, l, m)) : (_.current = !0);
                                }, [m, E, l]),
                                (0, i.useEffect)(() => {
                                    C(u);
                                }, [u]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (v.externalModel.dispose(), c.current.forEach((e) => e()));
                                    },
                                    [v],
                                ),
                                s().createElement(a.Provider, { value: v }, d)
                            );
                        },
                        () => (0, i.useContext)(a),
                    ];
                };
            },
            7044: (e, t, a) => {
                'use strict';
                a.d(t, { f8: () => u, s_: () => n, wB: () => l, yR: () => i });
                var o = a(3649);
                (a(728), a(4179));
                const n = 1e3,
                    i = 60,
                    s = 60 * i,
                    r = 24 * s;
                Date.now();
                function u(e = 0) {
                    let t = e;
                    const a = Math.trunc(t / r);
                    t -= a * r;
                    const o = Math.trunc(t / s);
                    t -= o * s;
                    const n = Math.trunc(t / i);
                    return ((t -= n * i), { days: a, hours: o, minutes: n, seconds: t });
                }
                const l = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, o.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, o.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, o.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, o.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, o.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, o.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, o.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, o.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, t, a) => {
                'use strict';
                (a.r(t), a.d(t, { mouse: () => r, onResize: () => i }));
                var o = a(2472),
                    n = a(1176);
                const i = (0, o.E)('clientResized'),
                    s = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') };
                const r = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        r = s[t]((e) => a([e, 'outside']));
                                    function u(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, u),
                                        o(),
                                        () => {
                                            n &&
                                                (r(),
                                                window.removeEventListener(i, u),
                                                (e.listeners -= 1),
                                                o(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
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
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => o,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var o = a(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => o });
            },
            2472: (e, t, a) => {
                'use strict';
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => o });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => n });
                var o = a(5959);
                const n = { view: a(7641), client: o };
            },
            3722: (e, t, a) => {
                'use strict';
                function o(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${o(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => o }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var o = a(2472);
                const n = {
                    onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                    onTextureReady: (0, o.E)('self.onTextureReady'),
                    onDomBuilt: (0, o.E)('self.onDomBuilt'),
                    onLoaded: (0, o.E)('self.onLoaded'),
                    onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, o.E)('children.onAdded'),
                        onLoaded: (0, o.E)('children.onLoaded'),
                        onRemoved: (0, o.E)('children.onRemoved'),
                        onAttached: (0, o.E)('children.onAttached'),
                        onTextureReady: (0, o.E)('children.onTextureReady'),
                        onRequestPosition: (0, o.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => r,
                        children: () => o,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => i.U,
                        extraSize: () => F,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => E,
                        getSize: () => c,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => D,
                        isFocused: () => y,
                        pxToRem: () => C,
                        remToPx: () => b,
                        resize: () => p,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => I,
                    }));
                var o = a(3722),
                    n = a(6112),
                    i = a(6538),
                    s = a(8566);
                function r(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, o);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function _(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    F = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    I = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const o = ['args'];
                const n = 2,
                    i = 16,
                    s = 32,
                    r = 64,
                    u = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        o,
                                        n = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(t, o);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? n : s);
                        },
                        minimize() {
                            u(r);
                        },
                        move(e) {
                            u(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function o() {}
                a.d(t, { ZT: () => o, jv: () => i, yR: () => n });
                function n(e) {
                    return e;
                }
                function i() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => o });
                const o = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        o = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (o = window.subViews[a].id)),
                        { caller: a, stack: t, resId: o }
                    );
                };
            },
            3377: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => d });
                var o = a(5415),
                    n = a(6179),
                    i = a.n(n);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    r = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    u = [o.cJ.ExtraLarge, o.cJ.Large, o.cJ.Medium, o.cJ.Small, o.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((a, o) => {
                            if (o in a) return a;
                            if (r(o)) {
                                const n = o.split('_').slice(0, -1).join('_');
                                if (n in a) return a;
                                const i = u.indexOf(t),
                                    r = (-1 !== i ? s.slice(i) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = r ? e[r] : void 0;
                                return ((a[n] = void 0 !== l ? l : e[n]), a);
                            }
                            const n = e[o];
                            return (
                                void 0 === n ||
                                    ((e, t) => s.some((a) => void 0 !== t[`${e}_${a}`]))(o, e) ||
                                    (a[o] = n),
                                a
                            );
                        }, {}),
                    d = (e, t = l) => {
                        const a = (
                            (e, t = l) =>
                            (a) => {
                                const s = (0, o.GS)().mediaSize,
                                    r = (0, n.useMemo)(() => t(a, s), [a, s]);
                                return i().createElement(e, r);
                            }
                        )(e, t);
                        return i().memo((t) =>
                            Object.keys(t).some((e) => r(e) && void 0 !== t[e])
                                ? i().createElement(a, t)
                                : i().createElement(e, t),
                        );
                    };
            },
            2344: (e, t, a) => {
                'use strict';
                a.d(t, { D9: () => r, au: () => u, eI: () => s.Z, tp: () => l });
                var o = a(2790),
                    n = a(3469),
                    i = a(2133),
                    s = a(579);
                (a(5360), a(9056));
                const r = o.Z,
                    u = n.Z,
                    l = i.Z;
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var o = a(6179);
                const n = (e) => {
                    const t = (0, o.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var o = a(7044),
                    n = a(6179);
                const i = () => {},
                    s = (e = 0, t, a = 0, s = i) => {
                        const r = (0, n.useState)(e),
                            u = r[0],
                            l = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        i = t || (e > 2 * o.yR ? o.yR : 1),
                                        r = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - n) / o.s_);
                                            null !== a && t <= a ? (l(a), s && s(), clearInterval(r)) : l(t);
                                        }, i * o.s_);
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                                l(0);
                            }, [e, t, a, s]),
                            u
                        );
                    };
            },
            2133: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => i });
                var o = a(122),
                    n = a(6179);
                const i = (e, t) => {
                    const a = (0, n.useState)(e),
                        i = a[0],
                        s = a[1];
                    return ((0, n.useEffect)(() => (0, o.F)(() => s(e), t), [e, t]), i);
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => i });
                var o = a(6179);
                const n = [];
                function i(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), n)
                    );
                }
            },
            5415: (e, t, a) => {
                'use strict';
                a.d(t, { Aq: () => u, GS: () => l, cJ: () => s, fd: () => r });
                var o = a(6179),
                    n = a(7739),
                    i = a(1043);
                let s, r, u;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge'));
                    })(u || (u = {})));
                const l = () => {
                    const e = (0, o.useContext)(n.YN),
                        t = e.width,
                        a = e.height,
                        i = ((e) => {
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
                                    return r.ExtraLarge;
                                case e.largeWidth:
                                    return r.Large;
                                case e.mediumWidth:
                                    return r.Medium;
                                case e.smallWidth:
                                    return r.Small;
                                case e.extraSmallWidth:
                                    return r.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), r.ExtraSmall);
                            }
                        })(e),
                        d = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return u.ExtraLarge;
                                case e.largeHeight:
                                    return u.Large;
                                case e.mediumHeight:
                                    return u.Medium;
                                case e.smallHeight:
                                    return u.Small;
                                case e.extraSmallHeight:
                                    return u.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), u.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: i, mediaWidth: l, mediaHeight: d, remScreenWidth: t, remScreenHeight: a };
                };
            },
            5360: (e, t, a) => {
                'use strict';
                a(6536);
                var o = a(4179);
                a(6179);
                o.Sw.instance;
                let n;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(n || (n = {}));
            },
            9056: (e, t, a) => {
                'use strict';
                var o = a(4179);
                a(6179);
                o.Sw.instance;
            },
            2039: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => n });
                var o = a(6179);
                const n = (e) => {
                    (0, o.useEffect)(() => e, []);
                };
            },
            2790: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var o = a(6179);
                const n = (e) => {
                    const t = (0, o.useRef)();
                    return (
                        (0, o.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
            },
            560: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => n });
                var o = a(6179);
                function n(e, t, a = []) {
                    const n = (0, o.useRef)(0),
                        i = (0, o.useCallback)(() => window.clearInterval(n.current), a || []);
                    (0, o.useEffect)(() => i, [i]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, o.useCallback)((a) => {
                            ((n.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, s),
                        i,
                    ];
                }
            },
            579: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => i });
                var o = a(3138),
                    n = a(6179);
                const i = () => {
                    const e = o.O.view.getSize('rem'),
                        t = (0, n.useState)({ height: e.height, width: e.width }),
                        a = t[0],
                        i = t[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = (e) => {
                                i(e);
                            };
                            return (
                                engine.on('screenResized', e),
                                () => {
                                    engine.off('screenResized', e);
                                }
                            );
                        }, []),
                        a
                    );
                };
            },
            1396: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => i });
                var o = a(6179),
                    n = a(2039);
                function i() {
                    const e = (0, o.useRef)(0);
                    return (
                        (0, n.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, o.useMemo)(
                            () => ({
                                run: (t, a) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (t(), (e.current = 0));
                                        }, a)));
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
            5521: (e, t, a) => {
                'use strict';
                let o, n;
                (a.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
            5175: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => s, c: () => i });
                var o = a(9480);
                const n = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? o.map(e, (e) => ('object' == typeof e ? n(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? n(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? n(t) : t]),
                                    )
                            : e,
                    i = (e) => n(e),
                    s = (e) => o.map(e || [], (e) => (null !== e && 'object' == typeof e ? Object.assign({}, e) : e));
            },
            9480: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        contains: () => _,
                        every: () => u,
                        filter: () => d,
                        filterMap: () => h,
                        find: () => D,
                        findIndex: () => F,
                        findIndexLast: () => I,
                        findLast: () => A,
                        get: () => n,
                        includes: () => B,
                        join: () => f,
                        lastElement: () => C,
                        lastIndex: () => g,
                        lastIndexZero: () => E,
                        map: () => r,
                        mapExists: () => w,
                        pop: () => p,
                        push: () => m,
                        reduce: () => x,
                        set: () => c,
                        slice: () => b,
                        some: () => l,
                        splice: () => y,
                        tail: () => v,
                        unsafeGet: () => i,
                        unwrapItem: () => s,
                    }));
                var o = a(8968);
                function n(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const i = n;
                function s(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, o) => t(null == e ? void 0 : e.value, a, o));
                }
                function u(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let a = 0; a < e.length; a++) {
                        if (!t(i(e, a), a, e)) return !1;
                    }
                    return !0;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) {
                        if (t(i(e, a), a, e)) return !0;
                    }
                    return !1;
                }
                function d(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let n = 0; n < e.length; n++) {
                        var o;
                        const i = null == (o = e[n]) ? void 0 : o.value;
                        t(i, n, e) && a.push(i);
                    }
                    return a;
                }
                function m(e, t) {
                    if (Array.isArray(e)) return (e.push(t), e);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function c(e, t, a) {
                    if (Array.isArray(e)) return ((e[t] = a), e);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function p(e, t = e.length - 1) {
                    if (Array.isArray(e)) return e.splice(t, 1)[0];
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function _(e, t, a) {
                    for (let o = 0; o < e.length; o++) {
                        const n = i(e, o);
                        if (a && a(n)) return !0;
                        if (t === n) return !0;
                    }
                    return !1;
                }
                function g(e) {
                    return e.length - 1;
                }
                function E(e) {
                    return Math.max(0, e.length - 1);
                }
                function C(e) {
                    if (0 !== e.length) return n(e, e.length - 1);
                }
                function b(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let o = Math.max(t, 0);
                            const n = Math.min(a, E(e));
                            return {
                                next: function () {
                                    if (o > n) return { done: !0, value: null };
                                    const t = e[o++];
                                    return t ? { value: s(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function v(e, t) {
                    return b(e, Math.max(0, e.length - 1 - t), g(e));
                }
                function y(e, t, a) {
                    if (Array.isArray(e)) return e.splice(t, a);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function A(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        const o = s(e[a]);
                        if (t(o, a, e)) return o;
                    }
                }
                function D(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const o = s(e[a]);
                        if (t(o, a, e)) return o;
                    }
                }
                function B(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (i(e, a) === t) return !0;
                    }
                    return !1;
                }
                function h(e, t, a) {
                    const o = [];
                    for (let n = 0; n < e.length; n++) {
                        const s = i(e, n);
                        t(s, n, e) && o.push(a(s, n, e));
                    }
                    return o;
                }
                function w(e, t) {
                    return h(e, o.C, t);
                }
                function F(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (t(i(e, a), a, e)) return a;
                    }
                }
                function I(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(i(e, a), a, e)) return a;
                    }
                }
                function f(e, t = ',') {
                    let a = '';
                    for (let o = 0; o < e.length; o++) {
                        o > 0 && (a += t);
                        const n = i(e, o);
                        a += null == n ? '' : String(n);
                    }
                    return a;
                }
                function x(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let o = a;
                    for (let a = 0; a < e.length; a++) {
                        o = t(o, i(e, a), a, e);
                    }
                    return o;
                }
            },
            1612: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => n });
                var o = a(9174);
                function n(e) {
                    const t = {};
                    for (const a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            const n = e[a];
                            t[a] = (0, o.aD)(n);
                        }
                    return t;
                }
            },
            8968: (e, t, a) => {
                'use strict';
                function o(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                a.d(t, { C: () => o });
            },
            7727: (e, t, a) => {
                'use strict';
                function o(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => n, G: () => o });
                const n = {
                    playHighlight() {
                        o('highlight');
                    },
                    playClick() {
                        o('play');
                    },
                    playYes() {
                        o('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                let o;
                function n(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                (a.d(t, { BN: () => s, Uw: () => p, WU: () => n, uF: () => i, v2: () => o }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(o || (o = {})));
                const r = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    u = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    l = (e, t, a = o.left) => e.split(t).reduce(a === o.left ? r : u, []),
                    d = (() => {
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
                    c = (e, t = o.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return m.includes(a)
                            ? d(e)
                            : ((e, t = o.left) => {
                                  let a = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      i = e.replace(/&nbsp;/g, ' ');
                                  return (l(i, /( )/, t).forEach((e) => (a = a.concat(l(e, n, o.left)))), a);
                              })(e, t);
                    },
                    p = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : c(e, t)));
            },
            728: (e, t, a) => {
                'use strict';
                let o;
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
                })(o || (o = {}));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => i });
                var o = a(3138);
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
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = o.O.view.addModelObserver(e, a, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(i) : (this._views[a] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                            const o = this._callbacks[a];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => i.Z, B3: () => l, Z5: () => s, B0: () => u, ry: () => b });
                class o {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (o.__instance || (o.__instance = new o()), o.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            o = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== o)),
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
                o.__instance = void 0;
                const n = o;
                var i = a(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
                let u;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(u || (u = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var p = a(5521),
                    _ = a(3138);
                const g = ['args'];
                function E(e, t, a, o, n, i, s) {
                    try {
                        var r = e[i](s),
                            u = r.value;
                    } catch (e) {
                        return void a(e);
                    }
                    r.done ? t(u) : Promise.resolve(u).then(o, n);
                }
                const C = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        a = arguments;
                                    return new Promise(function (o, n) {
                                        var i = e.apply(t, a);
                                        function s(e) {
                                            E(i, o, n, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            E(i, o, n, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        o,
                                        n = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((o = n),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var o;
                    },
                    y = () => v(u.CLOSE),
                    A = (e, t) => {
                        e.keyCode === p.n.ESCAPE && t();
                    };
                var D = a(7572);
                const B = n.instance,
                    h = {
                        DataTracker: i.Z,
                        ViewModel: D.Z,
                        ViewEventType: u,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: m,
                        DateFormatType: c,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => v(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: y,
                        sendClosePopOverEvent: () => v(u.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, o, n = R.invalid('resId'), i) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                r = a.getBoundingClientRect(),
                                l = r.x,
                                d = r.y,
                                m = r.width,
                                c = r.height,
                                p = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(d) + s.y,
                                    width: _.O.view.pxToRem(m),
                                    height: _.O.view.pxToRem(c),
                                };
                            v(u.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: C(p),
                                on: !0,
                                args: i,
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
                            A(e, y);
                        },
                        handleViewEvent: v,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(u.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(u.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(u.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const n = Object.prototype.toString.call(t[o]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[o];
                                        a[o] = [];
                                        for (let t = 0; t < n.length; t++) a[o].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[o] = e(t[o]))
                                            : (a[o] = t[o]);
                                }
                            return a;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: s,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = h;
            },
            2603: (e, t, a) => {
                'use strict';
                a.d(t, { V: () => D });
                var o = a(6179),
                    n = a.n(o),
                    i = a(3099),
                    s = a(3215),
                    r = a(4598),
                    u = a(9480),
                    l = a(5175),
                    d = a(3946);
                const m = (0, s.q)()(({ observableModel: e }) => {
                        const t = { root: e.object(), quests: e.array('quests', []) },
                            a = (0, d.Om)(() => Boolean(m() && m() === c())),
                            o = (0, d.Om)(() => u.find(s(), (e) => e.status !== i.N.Done)),
                            n = (0, d.Om)((e) =>
                                e && e.postBattleCondition.items.length >= 1
                                    ? u.map(e.postBattleCondition.items, r.yR)
                                    : e && e.bonusCondition.items.length >= 1
                                      ? u.map(e.bonusCondition.items, r.yR)
                                      : void 0,
                            ),
                            s = (0, d.Om)(() => (0, l.c)(t.quests.get()), { equals: r.jv }),
                            m = (0, d.Om)(() => s().length),
                            c = (0, d.Om)(() => s().filter((e) => e.status === i.N.Done).length),
                            p = (0, d.Om)(() => {
                                const e = o(),
                                    t = n(e);
                                return (t && t.length) > 0 ? t[0].descrData : void 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                getCurrentQuest: o,
                                getQuests: s,
                                getQuestsLength: m,
                                getCompletedlQuestLength: c,
                                getAllQuestsCompleted: a,
                                getConditionDescr: p,
                            },
                        });
                    }, r.ZT),
                    c = m[0],
                    p = m[1];
                var _ = a(3403),
                    g = a(9153),
                    E = a(8975),
                    C = a(122),
                    b = a(3509);
                const v = R.strings.quests.premiumQuests.tab,
                    y = R.strings.quests.dailyQuests.tab,
                    A = (0, _.Pi)(({ isSelected: e, onClick: t }) => {
                        const a = p().model,
                            i = a.root.get(),
                            s = i.isEnabled,
                            r = i.hasPremiumAccount,
                            u = i.unseenCount,
                            l = a.computes.getAllQuestsCompleted(),
                            d = a.computes.getCurrentQuest(),
                            m = s ? v.label() : v.disabled.title(),
                            c = ((e, t, a, o) =>
                                e ? (t ? y.completed() : a ? o : v.disabled.noPrem()) : y.disabled.reason())(
                                s,
                                l,
                                r,
                                a.computes.getConditionDescr(),
                            ),
                            _ = (0, o.useState)(c),
                            A = _[0],
                            D = _[1],
                            B = (0, o.useState)(d && d.icon),
                            h = B[0],
                            w = B[1];
                        return (
                            (0, o.useEffect)(() => {
                                if (r)
                                    return (0, C.F)(() => {
                                        (D(c), w(d && d.icon));
                                    }, b.ji.unlockTabPremiumDuration);
                                (D(c), w(d && d.icon));
                            }, [r, c, d]),
                            n().createElement(E.q, {
                                tabIdx: g.g.PremiumQuests,
                                isEnabled: s,
                                isCompleted: l,
                                isSelected: e,
                                isPremium: !0,
                                hasPremium: r,
                                title: m,
                                description: A,
                                total: a.computes.getQuestsLength(),
                                current: a.computes.getCompletedlQuestLength(),
                                icon: h,
                                bubbleCounter: u,
                                onClick: t,
                            })
                        );
                    }),
                    D = (0, o.memo)(function (e) {
                        const t = (0, o.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return n().createElement(c, { options: t }, n().createElement(A, e));
                    });
            },
            648: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => v });
                var o = a(6179),
                    n = a.n(o),
                    i = a(3099),
                    s = a(3215),
                    r = a(4598),
                    u = a(9480),
                    l = a(5175),
                    d = a(3946);
                const m = (0, s.q)()(({ observableModel: e }) => {
                        const t = { root: e.object(), quests: e.array('quests', []) },
                            a = (0, d.Om)(() => Boolean(m() && m() === c())),
                            o = (0, d.Om)(() => u.find(s(), (e) => e.status !== i.N.Done)),
                            n = (0, d.Om)((e) =>
                                e && e.postBattleCondition.items.length >= 1
                                    ? u.map(e.postBattleCondition.items, r.yR)
                                    : e && e.bonusCondition.items.length >= 1
                                      ? u.map(e.bonusCondition.items, r.yR)
                                      : void 0,
                            ),
                            s = (0, d.Om)(() => (0, l.c)(t.quests.get()), { equals: r.jv }),
                            m = (0, d.Om)(() => s().length),
                            c = (0, d.Om)(() => s().filter((e) => e.status === i.N.Done).length),
                            p = (0, d.Om)(() => {
                                const e = o(),
                                    t = n(e);
                                return (t && t.length) > 0 ? t[0].descrData : void 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                getCurrentQuest: o,
                                getQuests: s,
                                getQuestsLength: m,
                                getCompletedlQuestLength: c,
                                getAllQuestsCompleted: a,
                                getConditionDescr: p,
                            },
                        });
                    }, r.ZT),
                    c = m[0],
                    p = m[1];
                var _ = a(3403),
                    g = a(8975),
                    E = a(9153);
                const C = R.strings.quests.dailyQuests.tab,
                    b = (0, _.Pi)(({ isSelected: e, onClick: t }) => {
                        const a = p().model,
                            o = a.root.get(),
                            i = o.isEnabled,
                            s = o.unseenCount,
                            r = a.computes.getAllQuestsCompleted(),
                            u = i ? C.label() : C.disabled.title(),
                            l = ((e, t, a) => (e ? (t ? C.completed() : a) : C.disabled.reason()))(
                                i,
                                r,
                                a.computes.getConditionDescr(),
                            ),
                            d = a.computes.getCurrentQuest();
                        return n().createElement(g.q, {
                            tabIdx: E.g.DailyQuests,
                            isEnabled: i,
                            isCompleted: r,
                            isSelected: e,
                            title: u,
                            description: l,
                            total: a.computes.getQuestsLength(),
                            current: a.computes.getCompletedlQuestLength(),
                            icon: d && d.icon,
                            onClick: t,
                            bubbleCounter: s,
                        });
                    }),
                    v = (0, o.memo)(function (e) {
                        const t = (0, o.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return n().createElement(c, { options: t }, n().createElement(b, e));
                    });
            },
            5390: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => xa });
                var o = a(6179),
                    n = a.n(o),
                    i = a(6483),
                    s = a.n(i),
                    r = a(7701),
                    u = a(7613),
                    l = a(6373),
                    d = a(122),
                    m = a(2344),
                    c = a(7727),
                    p = a(3403);
                let _, g;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(g || (g = {})));
                var E = a(7044),
                    C = a(3138);
                var b = a(3649);
                const v = 'Countdown_base_fe',
                    y = 'Countdown_icon_8b',
                    A = 'Countdown_description_8d';
                var D = a(280);
                const B = (e) => e.toString().padStart(2, '0'),
                    h = R.images.gui.maps.icons.components.countdown,
                    w = (e, t) => {
                        const a = 2 === t ? h.big : h;
                        switch (e) {
                            case _.Timer:
                                return a.clock();
                            case _.Countdown:
                                return a.hourglass();
                            case _.Cooldown:
                                return a.lock();
                        }
                    },
                    F = (0, o.memo)(
                        ({
                            duration: e,
                            icon: t = _.Timer,
                            style: a = g.Description,
                            onTimeReached: i,
                            className: r = '',
                            classNames: u = {},
                            labelFormat: l = '',
                        }) => {
                            const d = a !== g.Description ? 1 : void 0,
                                c = (0, m.au)(e, d),
                                p = (() => {
                                    const e = (0, o.useState)(C.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, o.useEffect)(() => {
                                            const e = () => {
                                                a(C.O.view.getScale());
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
                                })();
                            i && i[c] && i[c]();
                            const h = ((e, t) => {
                                switch (t) {
                                    case g.Description:
                                        return (0, E.wB)(e);
                                    case g.Short:
                                        return `${B(e.minutes)}:${B(e.seconds)}`;
                                    case g.Long:
                                        return `${B(e.hours)}:${B(e.minutes)}:${B(e.seconds)}`;
                                    case g.Extended:
                                        return `${(0, b.WU)(R.strings.common.duration.days(), { days: e.days })} | ${B(e.hours)}:${B(e.minutes)}:${B(e.seconds)}`;
                                }
                            })((0, E.f8)(c), a);
                            return n().createElement(
                                'div',
                                { className: s()(v, r) },
                                t !== _.None &&
                                    n().createElement('div', {
                                        className: s()(y, u.icon),
                                        style: { backgroundImage: `url('${w(t, p)}')` },
                                    }),
                                l
                                    ? n().createElement(
                                          'div',
                                          { className: s()(A, u.text) },
                                          n().createElement(D.z, { text: l, binding: { timerText: h } }),
                                      )
                                    : n().createElement('div', { className: s()(A, u.text) }, h),
                            );
                        },
                    ),
                    I = 'DailyCountdown_base_75',
                    f = 'DailyCountdown_icon_2d',
                    x = 'DailyCountdown_countdownText_65',
                    S = ({ timeToUpdate: e }) =>
                        n().createElement(
                            'div',
                            { className: I },
                            n().createElement(F, { duration: e, className: x, classNames: { icon: f } }),
                        );
                var P = a(9922);
                const k = { type: 'idle' };
                var T = a(1975),
                    N = a(5415);
                const M = {
                        [N.cJ.ExtraSmall]: {
                            mainPagePaddingTop: 48,
                            questDividerHeight: 50,
                            questCard: {
                                weeklyHeight: 120,
                                dailyHeight: 110,
                                weeklyMarginBottom: 10,
                                dailyMarginBottom: 6,
                            },
                            questListMarginBottom: 10,
                            footerHeight: 55,
                            premiumBannerHeight: 248,
                        },
                        [N.cJ.Small]: {
                            mainPagePaddingTop: 48,
                            questDividerHeight: 50,
                            questCard: {
                                weeklyHeight: 120,
                                dailyHeight: 110,
                                weeklyMarginBottom: 10,
                                dailyMarginBottom: 6,
                            },
                            questListMarginBottom: 10,
                            footerHeight: 55,
                            premiumBannerHeight: 248,
                        },
                        [N.cJ.Medium]: {
                            mainPagePaddingTop: 58,
                            questDividerHeight: 50,
                            questCard: {
                                weeklyHeight: 160,
                                dailyHeight: 140,
                                weeklyMarginBottom: 10,
                                dailyMarginBottom: 6,
                            },
                            questListMarginBottom: 10,
                            footerHeight: 65,
                            premiumBannerHeight: 260,
                        },
                        [N.cJ.Large]: {
                            mainPagePaddingTop: 78,
                            questDividerHeight: 60,
                            questCard: {
                                weeklyHeight: 170,
                                dailyHeight: 160,
                                weeklyMarginBottom: 10,
                                dailyMarginBottom: 6,
                            },
                            questListMarginBottom: 10,
                            footerHeight: 78,
                            premiumBannerHeight: 300,
                        },
                        [N.cJ.ExtraLarge]: {
                            mainPagePaddingTop: 111,
                            questDividerHeight: 60,
                            questCard: {
                                weeklyHeight: 170,
                                dailyHeight: 160,
                                weeklyMarginBottom: 10,
                                dailyMarginBottom: 6,
                            },
                            questListMarginBottom: 10,
                            footerHeight: 111,
                            premiumBannerHeight: 300,
                        },
                    },
                    L = T.uu.delta.delay + T.uu.delta.duration + T.uu.line.delay + T.uu.line.duration,
                    O = 2e3,
                    H = 500,
                    Q = 0,
                    U = 500,
                    G = 300,
                    W = O + H,
                    q = 500,
                    z = 500,
                    $ = 500;
                var j = a(2862),
                    Z = a(3099),
                    V = a(3215),
                    X = a(4598),
                    Y = a(9480),
                    K = a(5175),
                    J = a(1612),
                    ee = a(9174),
                    te = a(3946),
                    ae = a(9153),
                    oe = a(3017),
                    ne = a(3509);
                const ie = [Z.N.Locked, Z.N.Active],
                    se = (e, t, a, o) => {
                        const n = t ? M[a].premiumBannerHeight : 0;
                        let i = M[a].questListMarginBottom + n;
                        const s = M[a].questCard.dailyHeight + M[a].questCard.dailyMarginBottom,
                            r = M[a].questDividerHeight - M[a].questCard.dailyMarginBottom;
                        return e.map((t, n) => {
                            if (!n) return i;
                            if (t === Z.N.Active) return (i += s);
                            if (t === Z.N.Locked) return (i += o ? s : s - M[a].questCard.dailyMarginBottom);
                            const u = e.find((e) => e === Z.N.Locked),
                                l = ((e, t) => {
                                    const a = e[t - 1],
                                        o = e[t - 2];
                                    return (
                                        (a === Z.N.Done || a === Z.N.UndoneSubscription) &&
                                        o !== Z.N.Done &&
                                        o !== Z.N.UndoneSubscription
                                    );
                                })(e, n);
                            return (i += u || l ? (l ? s + r + M[a].questCard.dailyMarginBottom : s + r) : s);
                        });
                    },
                    re = [...Array(ne.vW + 1)],
                    ue = (e, t) => (t <= 1 ? e : 2 === t ? Z.N.Active : 3 === t ? Z.N.Locked : void 0),
                    le = (0, V.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    primitives: e.primitives(['currentTabIdx']),
                                    regular: e.object('regular'),
                                    regularQuests: e.array('regular.quests', []),
                                    premium: e.object('premium'),
                                    premiumQuests: e.array('premium.quests', []),
                                    epicQuest: e.object('epic'),
                                    unseenQuests: e.object('unseenQuests'),
                                    isRegularWindowLoaded: ee.LO.box(!1),
                                    isPremiumWindowLoaded: ee.LO.box(!1),
                                },
                                a = (0, te.Om)(() => t.primitives.currentTabIdx.get()),
                                o = (0, te.Om)((e = j.h2.Big) => d(e) === m(e)),
                                n = (0, te.Om)(() => Y.find(s(), (e) => e.status !== Z.N.Done)),
                                i = (0, te.Om)((e) => {
                                    var t, a, o, n, i;
                                    let s;
                                    var r, u;
                                    e &&
                                        e.bonusCondition &&
                                        (null == (t = e.bonusCondition) || null == (a = t.items) ? void 0 : a.length) >=
                                            1 &&
                                        (s = Y.map(null == (r = e.bonusCondition) ? void 0 : r.items, X.yR));
                                    e &&
                                        (null == (o = e.postBattleCondition) || null == (n = o.items)
                                            ? void 0
                                            : n.length) >= 1 &&
                                        (s = Y.map(null == (u = e.postBattleCondition) ? void 0 : u.items, X.yR));
                                    return (s && (null == (i = s) ? void 0 : i.length)) > 0 ? s[0] : s;
                                }),
                                s = (0, te.Om)(
                                    (e = j.h2.Big) => {
                                        const a = t.isRegularWindowLoaded.get(),
                                            o = t.regular.get().firstSeenNewBonusMissions && !a;
                                        return (0, K.c)(r()).map((a, n) =>
                                            Object.assign({}, a, {
                                                allRewards: [
                                                    ...(0, oe.rl)(a.bonuses, a.id, e),
                                                    ...(0, oe.rl)(a.subscriptionBonuses, a.id, e, !0),
                                                ],
                                                isQuestUnseen: (0, oe.ix)(
                                                    a,
                                                    (0, K.Q)(t.unseenQuests.get().unseenQuests),
                                                ),
                                                status: o ? ue(a.status, n) : a.status,
                                            }),
                                        );
                                    },
                                    { equals: X.jv },
                                ),
                                r = (0, te.Om)(
                                    () => {
                                        switch (a()) {
                                            case ae.g.DailyQuests:
                                                return t.regularQuests.get();
                                            case ae.g.PremiumQuests:
                                                return t.premiumQuests.get();
                                            default:
                                                return [];
                                        }
                                    },
                                    { equals: X.jv },
                                ),
                                u = (0, te.Om)(
                                    () => {
                                        switch (a()) {
                                            case ae.g.DailyQuests:
                                                return t.regular.get();
                                            case ae.g.PremiumQuests:
                                                return t.premium.get();
                                            default:
                                                return [];
                                        }
                                    },
                                    { equals: X.jv },
                                ),
                                l = (0, te.Om)(
                                    (e = j.h2.Big) => {
                                        var a;
                                        return Object.assign({}, t.epicQuest.get(), {
                                            allRewards: [
                                                ...(0, oe.rl)(t.epicQuest.get().bonuses, t.epicQuest.get().id, e),
                                                ...(0, oe.rl)(
                                                    null == (a = t.epicQuest.get()) ? void 0 : a.subscriptionBonuses,
                                                    t.epicQuest.get().id,
                                                    e,
                                                    !0,
                                                ),
                                            ],
                                        });
                                    },
                                    { equals: X.jv },
                                ),
                                d = (0, te.Om)((e = j.h2.Big) => s(e).length),
                                m = (0, te.Om)(
                                    (e = j.h2.Big) =>
                                        s(e).filter((e) => e.status === Z.N.Done || e.status === Z.N.UndoneSubscription)
                                            .length,
                                ),
                                c = (0, te.Om)(() => {
                                    const e = n(),
                                        t = i(e);
                                    return null == t ? void 0 : t.descrData;
                                }),
                                p = (0, te.Om)(() => a() === ae.g.PremiumQuests),
                                _ = (0, te.Om)(() => {
                                    const e = t.isPremiumWindowLoaded.get();
                                    return (
                                        p() &&
                                        (!t.premium.get().hasPremiumAccount ||
                                            (!e && t.premium.get().premMissionsTabDiscovered))
                                    );
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getCurrentTabIndex: a,
                                    getCurrentQuest: n,
                                    getQuests: s,
                                    getQuestsInfo: u,
                                    getQuestsLength: d,
                                    getCompletedlQuestLength: m,
                                    getAllQuestsCompleted: o,
                                    getConditions: i,
                                    getConditionDescr: c,
                                    getEpicQuests: l,
                                    getCurrQuests: r,
                                    isPremiumTab: p,
                                    isPremiumBannerVisible: _,
                                },
                            });
                        },
                        ({ model: e, externalModel: t }) => {
                            const a = (0, J.h)({
                                onRegularWindowLoaded: () => e.isRegularWindowLoaded.set(!0),
                                onPremiumWindowLoaded: () => e.isPremiumWindowLoaded.set(!0),
                            });
                            return Object.assign({}, a, {
                                onReroll: t.createCallback((e) => ({ rerollPremium: e }), 'onReroll'),
                                onBuyPremium: t.createCallbackNoArgs('onBuyPremiumBtnClick'),
                            });
                        },
                    ),
                    de = le[0],
                    me = le[1];
                var ce = a(4963);
                var pe = a(7030),
                    _e = a(5739),
                    ge = a(3415);
                const Ee = 'Progress_base_1a',
                    Ce = 'Progress_base__completed_99',
                    be = 'Progress_base__disabled_94',
                    ve = 'Progress_currentProgress_a5',
                    ye = 'Progress_maxProgress_27',
                    Ae = (0, o.memo)(
                        ({ current: e, max: t, completed: a, disabled: o = !1, classNames: i, className: r }) =>
                            n().createElement(u.ZP, {
                                text: R.strings.quests.dailyWidget.progress(),
                                className: s()(Ee, a && Ce, o && be, r),
                                format: {
                                    binding: {
                                        currentProgress: n().createElement(u.ZP, {
                                            text: String(e),
                                            className: s()(ve, null == i ? void 0 : i.currentProgress),
                                        }),
                                        maxProgress: n().createElement(u.ZP, {
                                            text: String(t),
                                            className: s()(ye, null == i ? void 0 : i.maxProgress),
                                        }),
                                    },
                                },
                            }),
                    ),
                    De = 'QuestCard_base_ac',
                    Be = 'QuestCard_base__weekly_15',
                    he = 'QuestCard_base__completed_34',
                    we = 'QuestCard_base__disabled_7e',
                    Fe = 'QuestCard_border_eb',
                    Ie = 'QuestCard_disableBackground_29',
                    fe = 'QuestCard_background_f3',
                    xe = 'QuestCard_base__enabled_f0',
                    Se = 'QuestCard_enableText_00',
                    Pe = 'QuestCard_bubble_5e',
                    ke = 'QuestCard_rerollBackground_ab',
                    Re = 'QuestCard_rerollBackground__visible_ca',
                    Te = 'QuestCard_header_bb',
                    Ne = 'QuestCard_timerWrapper_9f',
                    Me = 'QuestCard_timer_e2',
                    Le = 'QuestCard_countdown_ef',
                    Oe = 'QuestCard_headerDivider_9b',
                    He = 'QuestCard_weekly_3e',
                    Qe = 'QuestCard_cardWrapper_62',
                    Ue = 'QuestCard_contentWrapper_a9',
                    Ge = 'QuestCard_content_55',
                    We = 'QuestCard_content__hidden_e3',
                    qe = 'QuestCard_description_5a',
                    ze = 'QuestCard_progressWrapper_12',
                    $e = 'QuestCard_progressContainer_09',
                    je = 'QuestCard_progress_74',
                    Ze = 'QuestCard_currentProgress_19',
                    Ve = 'QuestCard_maxProgress_0a',
                    Xe = 'QuestCard_questIcon_c1',
                    Ye = 'QuestCard_divider_fa',
                    Ke = 'QuestCard_rewards_95',
                    Je = 'QuestCard_rewardWrapper_9e',
                    et = 'QuestCard_rewardWrapper__appear_4b',
                    tt = 'QuestCard_opacityContainer_5f',
                    at = 'QuestCard_opacityContainer__unlock_a8',
                    ot = 'QuestCard_rewardIcon_b9',
                    nt = 'QuestCard_rewardIcon__unlock_f8',
                    it = 'QuestCard_subscriptionIcon_a9',
                    st = 'QuestCard_rewardInfo_08',
                    rt = 'QuestCard_rewardHighlight_0d',
                    ut = 'QuestCard_rewardOverlay_dc',
                    lt = 'QuestCard_rewardOverlay__unlock_c2',
                    dt = 'QuestCard_animationSmoke_c6';
                function mt() {
                    return (
                        (mt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        mt.apply(this, arguments)
                    );
                }
                const ct = R.strings.quests,
                    pt = ['battlePassPoints'],
                    _t = 'idle',
                    gt = 'wait',
                    Et = 'flash',
                    Ct = (0, o.memo)(
                        ({
                            quest: e,
                            conditions: t,
                            disabledTooltipArgs: a,
                            isEpic: i,
                            isDisabled: r,
                            isRerollAnimation: p,
                            isUnlockAnimation: _,
                            unlockPremiumAnimationState: g,
                            position: E = 1,
                        }) => {
                            var C;
                            const b = null != (C = (0, m.D9)(e)) ? C : e,
                                v = (0, m.tp)(e, U),
                                y = (0, m.tp)(t, U),
                                A = p ? v : e,
                                D = A.isFirstView,
                                B = A.allRewards,
                                h = A.icon,
                                w = A.isActiveSubscription,
                                F = A.status,
                                I = A.countDown,
                                f = A.isQuestUnseen,
                                x = A.isCompleted,
                                P = p ? y : t,
                                k = P.earned,
                                M = P.total,
                                O = P.current,
                                H = P.descrData,
                                Q = x ? M : O,
                                G = e.status === Z.N.UndoneSubscription,
                                W = e.status === Z.N.Done,
                                q = (e) => !W && e.withSubscription && (!w || G),
                                z = (0, o.useState)(!1),
                                $ = z[0],
                                j = z[1],
                                V = (0, o.useState)(!1),
                                X = V[0],
                                Y = V[1],
                                K = (0, o.useState)(_t),
                                J = K[0],
                                ee = K[1],
                                te = (0, N.GS)().mediaSize >= N.cJ.Medium ? 'c_80' : 'c_48',
                                ae = ((F === Z.N.Done || F === Z.N.UndoneSubscription) && !$) || x,
                                oe = Boolean(r || J !== _t || (g && g !== _a.COMPLETED && g !== _a.IDLE)),
                                ie = p && !oe && !ae,
                                se = (0, o.useMemo)(() => 0.2 * E, [E]);
                            return (
                                (0, o.useEffect)(() => {
                                    ((e.status !== Z.N.Done && e.status !== Z.N.UndoneSubscription) ||
                                        !b ||
                                        (null == b ? void 0 : b.status) === Z.N.Done ||
                                        (null == b ? void 0 : b.status) === Z.N.UndoneSubscription ||
                                        (j(!0), (0, c.G)(R.sounds.dq_widget_slide_in())),
                                        (null != b && b.isActiveSubscription) ||
                                            !e.isActiveSubscription ||
                                            (Y(!0), (0, c.G)(R.sounds.dq_subscription_reward_unlock())));
                                }, [e, b]),
                                (0, o.useEffect)(() => {
                                    if (X)
                                        return (0, d.F)(() => {
                                            Y(!1);
                                        }, ne.ji.unlockSubscriptionBonusDuration);
                                }, [X]),
                                (0, o.useEffect)(() => {
                                    if ($)
                                        return (0, d.F)(() => {
                                            j(!1);
                                        }, L);
                                }, [$]),
                                (0, o.useEffect)(() => {
                                    _ && ee(gt);
                                }, [_]),
                                (0, o.useEffect)(
                                    () =>
                                        J === gt
                                            ? (0, d.F)(() => {
                                                  ((0, c.G)(R.sounds.dq_widget_slide_in()), ee(Et));
                                              }, ne.ji.unlockBonusQuestDelay)
                                            : J === Et
                                              ? (0, d.F)(() => {
                                                    ee(_t);
                                                }, ne.ji.unlockBonusQuestDuration)
                                              : void 0,
                                    [J],
                                ),
                                i && !e.isEnabled
                                    ? n().createElement(
                                          l.i,
                                          {
                                              header: ct.switch.isWeeklyEnabled(),
                                              body: ct.switch.isWeeklyEnabledTitle(),
                                          },
                                          n().createElement(
                                              'div',
                                              { className: s()(De, xe) },
                                              n().createElement('div', { className: Fe }),
                                              n().createElement('div', { className: fe }),
                                              n().createElement(u.ZP, {
                                                  text: ct.switch.isWeeklyEnabled(),
                                                  className: Se,
                                              }),
                                          ),
                                      )
                                    : n().createElement(
                                          'div',
                                          { className: s()(De, i && Be, ae && he, oe && we) },
                                          oe && n().createElement(l.i, a, n().createElement('div', { className: Ie })),
                                          n().createElement('div', { className: Fe }),
                                          n().createElement('div', { className: fe }),
                                          f && n().createElement('div', { className: Pe }),
                                          n().createElement('div', {
                                              className: s()(ke, (ie || J === Et || g === _a.QUESTS_UNLOCK) && Re),
                                          }),
                                          i &&
                                              n().createElement(
                                                  n().Fragment,
                                                  null,
                                                  n().createElement(
                                                      'div',
                                                      { className: Te },
                                                      n().createElement(u.ZP, {
                                                          text: ct.weeklyQuest.header.default(),
                                                          className: He,
                                                      }),
                                                      n().createElement(
                                                          l.i,
                                                          {
                                                              header: ct.weeklyQuest.countDown.tooltip.header(),
                                                              body: ct.weeklyQuest.countDown.tooltip.body(),
                                                          },
                                                          n().createElement(
                                                              'div',
                                                              { className: Ne },
                                                              n().createElement(u.ZP, {
                                                                  text: ct.epicQuest.countDown.remainingText(),
                                                                  className: Me,
                                                              }),
                                                              n().createElement(
                                                                  'div',
                                                                  { className: Le },
                                                                  n().createElement(S, { timeToUpdate: I }),
                                                              ),
                                                          ),
                                                      ),
                                                  ),
                                                  n().createElement('div', { className: Oe }),
                                              ),
                                          n().createElement(
                                              'div',
                                              { className: Qe },
                                              n().createElement(
                                                  'div',
                                                  { className: Ue },
                                                  n().createElement(
                                                      'div',
                                                      { className: s()(Ge, ie && We) },
                                                      !i && n().createElement(u.ZP, { text: H, className: qe }),
                                                      n().createElement(
                                                          'div',
                                                          { className: ze },
                                                          n().createElement(
                                                              'div',
                                                              { className: $e },
                                                              i
                                                                  ? n().createElement(u.ZP, {
                                                                        text: ct.weeklyQuest.description.default(),
                                                                        className: qe,
                                                                    })
                                                                  : n().createElement('div', {
                                                                        className: Xe,
                                                                        style: {
                                                                            backgroundImage: `url(${R.images.gui.maps.icons.daily.icons.$dyn(`${te}_${h}`)})`,
                                                                        },
                                                                    }),
                                                              Boolean(M) &&
                                                                  n().createElement(Ae, {
                                                                      current: Q,
                                                                      completed: ae,
                                                                      max: M,
                                                                      className: je,
                                                                      classNames: {
                                                                          currentProgress: Ze,
                                                                          maxProgress: Ve,
                                                                      },
                                                                      disabled: r,
                                                                  }),
                                                          ),
                                                          Boolean(M) &&
                                                              n().createElement(T.ko, {
                                                                  disabled: oe,
                                                                  size: i ? T.$u.Medium : T.$u.Small,
                                                                  value: Q,
                                                                  deltaFrom: Q - k,
                                                                  maxValue: M,
                                                              }),
                                                      ),
                                                  ),
                                                  n().createElement('div', { className: Ye }),
                                                  n().createElement(
                                                      'div',
                                                      { className: Ke },
                                                      B.map((e, t) => {
                                                          const a = e.withSubscription && !w,
                                                              o = pt.includes(e.name) && D,
                                                              i = X && e.withSubscription;
                                                          return n().createElement(
                                                              'div',
                                                              {
                                                                  className: s()(Je, o && et),
                                                                  style: { animationDelay: `${se}s, ${0.5 + se}s` },
                                                                  key: `reward-wrapper-${t}`,
                                                              },
                                                              n().createElement(
                                                                  'div',
                                                                  { className: s()((a || i) && tt, i && at) },
                                                                  ((e, t, a) => {
                                                                      const o = t.withSubscription && !w,
                                                                          i = X && t.withSubscription;
                                                                      return t.withSubscription && e
                                                                          ? n().createElement(
                                                                                n().Fragment,
                                                                                null,
                                                                                n().createElement(
                                                                                    ge.l,
                                                                                    {
                                                                                        tooltipArgs: {
                                                                                            header: ct.reward.tooltip.noAdditionReward(),
                                                                                            body: ct.reward.tooltip.simpleBody(),
                                                                                        },
                                                                                    },
                                                                                    n().createElement(
                                                                                        _e.Q,
                                                                                        mt({}, t, {
                                                                                            classNames: {
                                                                                                info: st,
                                                                                                rewardIcon: s()(
                                                                                                    (q(t) || i) && ot,
                                                                                                    i && nt,
                                                                                                ),
                                                                                            },
                                                                                        }),
                                                                                    ),
                                                                                ),
                                                                                t.withSubscription &&
                                                                                    n().createElement(
                                                                                        n().Fragment,
                                                                                        null,
                                                                                        n().createElement('div', {
                                                                                            className: it,
                                                                                        }),
                                                                                        n().createElement('div', {
                                                                                            className: rt,
                                                                                        }),
                                                                                    ),
                                                                            )
                                                                          : n().createElement(
                                                                                n().Fragment,
                                                                                null,
                                                                                n().createElement(
                                                                                    ge.l,
                                                                                    {
                                                                                        tooltipArgs: !W &&
                                                                                            t.withSubscription &&
                                                                                            !w && {
                                                                                                contentId:
                                                                                                    R.views.lobby.daily.tooltips.LockedSubscriptionBonusTooltip(
                                                                                                        'resId',
                                                                                                    ),
                                                                                            },
                                                                                        key: `quest-reward-${a}`,
                                                                                    },
                                                                                    n().createElement(
                                                                                        _e.Q,
                                                                                        mt({}, t, {
                                                                                            classNames: {
                                                                                                info: st,
                                                                                                rewardIcon: s()(
                                                                                                    o && ot,
                                                                                                    i && nt,
                                                                                                ),
                                                                                            },
                                                                                        }),
                                                                                    ),
                                                                                ),
                                                                                t.withSubscription &&
                                                                                    n().createElement(
                                                                                        ge.l,
                                                                                        {
                                                                                            tooltipArgs: {
                                                                                                contentId:
                                                                                                    R.views.lobby.daily.tooltips.LockedSubscriptionBonusTooltip(
                                                                                                        'resId',
                                                                                                    ),
                                                                                                args: {
                                                                                                    isQuestDone: W,
                                                                                                },
                                                                                            },
                                                                                            key: `quest-reward-icon${a}`,
                                                                                        },
                                                                                        n().createElement(
                                                                                            n().Fragment,
                                                                                            null,
                                                                                            n().createElement('div', {
                                                                                                className: it,
                                                                                            }),
                                                                                            n().createElement('div', {
                                                                                                className: rt,
                                                                                            }),
                                                                                        ),
                                                                                    ),
                                                                            );
                                                                  })(G, e, t),
                                                                  o &&
                                                                      n().createElement('div', {
                                                                          className: dt,
                                                                          style: { animationDelay: `${0.5 + se}s` },
                                                                      }),
                                                              ),
                                                              n().createElement('div', {
                                                                  className: s()((q(e) || X) && ut, X && lt),
                                                              }),
                                                          );
                                                      }),
                                                  ),
                                              ),
                                          ),
                                      )
                            );
                        },
                    );
                var bt = a(3457);
                const vt = 'PremiumBanner_base_d5',
                    yt = 'PremiumBanner_glow1_e4',
                    At = 'PremiumBanner_base__hide_c6',
                    Dt = 'PremiumBanner_glow2_e6',
                    Bt = 'PremiumBanner_icon_9e',
                    ht = 'PremiumBanner_header_76',
                    wt = 'PremiumBanner_description_ce',
                    Ft = 'PremiumBanner_button_9d',
                    It = R.strings.quests.premiumQuests.notPremiumAccount,
                    ft = (0, o.memo)(({ onBuyPremium: e, hideBanner: t }) => {
                        const a = (0, N.GS)().mediaSize >= N.cJ.Medium ? It.paragraph() : It.paragraphSmall();
                        return n().createElement(
                            'div',
                            { className: s()(vt, t && At) },
                            n().createElement('div', { className: Dt }),
                            n().createElement('div', { className: yt }),
                            n().createElement('div', { className: Bt }),
                            n().createElement(u.ZP, { text: It.title(), className: ht }),
                            n().createElement(u.ZP, { text: a, className: wt }),
                            n().createElement(
                                bt.u5,
                                {
                                    type: bt.L$.main,
                                    mixClass: Ft,
                                    onClick: () => {
                                        ((0, c.G)(R.sounds.play()), e());
                                    },
                                },
                                n().createElement(u.ZP, { text: It.button() }),
                            ),
                        );
                    }),
                    xt = 'QuestCardBlock_base_bf',
                    St = 'QuestCardBlock_base__divider_63',
                    Pt = 'QuestCardBlock_base__blinkAnimation_dc',
                    kt = 'QuestCardBlock_divider_a9',
                    Rt = 'QuestCardBlock_dividerBackground_62',
                    Tt = 'QuestCardBlock_divider__completed_b7',
                    Nt = 'QuestCardBlock_dividerContent_7a',
                    Mt = 'QuestCardBlock_dividerContent__hide_65',
                    Lt = 'QuestCardBlock_dividerIcon_aa',
                    Ot = 'QuestCardBlock_dividerDescription_64',
                    Ht = 'QuestCardBlock_dividerMask_13',
                    Qt = 'QuestCardBlock_progress_71',
                    Ut = 'QuestCardBlock_progress__disabled_a4',
                    Gt = 'QuestCardBlock_currentProgress_be',
                    Wt = 'QuestCardBlock_currentProgressItem_fb',
                    qt = 'QuestCardBlock_maxProgress_7a',
                    zt = 'QuestCardBlock_dividerBottom_f2',
                    $t = R.strings.quests;
                let jt;
                !(function (e) {
                    ((e.IDLE = 'idle'), (e.COMPLETE = 'complete'), (e.BLINK = 'blink'));
                })(jt || (jt = {}));
                const Zt = (0, p.Pi)(
                        ({
                            quest: e,
                            prevQuestStatus: t,
                            completedQuestsLength: a,
                            position: i,
                            isRerollAnimation: r,
                            isAllQuestsCompletedDelayed: l,
                            unlockPremiumAnimationState: c,
                            isPremium: p,
                        }) => {
                            var _, g;
                            const E = me().model.computes.getConditions(e),
                                C = (0, o.useState)(jt.IDLE),
                                b = C[0],
                                v = C[1],
                                y = (0, o.useState)(!1),
                                A = y[0],
                                D = y[1],
                                B = null != (_ = (0, m.D9)(e)) ? _ : e,
                                h = b === jt.IDLE,
                                w = b === jt.BLINK,
                                F = e.status === Z.N.Locked,
                                I = F && t !== Z.N.Locked && !p,
                                f =
                                    (e.status === Z.N.Done || e.status === Z.N.UndoneSubscription) &&
                                    t !== Z.N.Done &&
                                    t !== Z.N.UndoneSubscription,
                                x = null != (g = (0, m.D9)(I)) ? g : I,
                                S = A && a === ne.vW,
                                P =
                                    (e.status === Z.N.Done || e.status === Z.N.UndoneSubscription) &&
                                    B &&
                                    (null == B ? void 0 : B.status) !== Z.N.Done &&
                                    (null == B ? void 0 : B.status) !== Z.N.UndoneSubscription,
                                k = ((I || x || f) && h) || A,
                                T = A && a === ne.vW,
                                N = I || x || A,
                                M = (0, o.useMemo)(
                                    () =>
                                        p
                                            ? {
                                                  header: $t.dailyQuests.premium.locked.tooltip.header(),
                                                  body: $t.dailyQuests.premium.locked.tooltip.body(),
                                              }
                                            : {
                                                  header: $t.dailyQuests.bonus.locked.tooltip.header(),
                                                  body: $t.dailyQuests.bonus.locked.tooltip.body(),
                                              },
                                    [p],
                                );
                            return (
                                (0, o.useEffect)(
                                    () => (
                                        P && v(jt.COMPLETE),
                                        b === jt.BLINK
                                            ? (0, d.F)(() => {
                                                  v(jt.IDLE);
                                              }, H)
                                            : b === jt.COMPLETE
                                              ? (0, d.F)(() => {
                                                    v(jt.BLINK);
                                                }, O)
                                              : void 0
                                    ),
                                    [P, b],
                                ),
                                (0, o.useEffect)(() => {
                                    x && !I && D(!0);
                                }, [x, I]),
                                (0, o.useEffect)(() => {
                                    if (A)
                                        return (0, d.F)(() => {
                                            D(!1);
                                        }, W);
                                }, [A]),
                                n().createElement(
                                    'div',
                                    { className: s()(xt, I && St, w && Pt) },
                                    k &&
                                        n().createElement(
                                            'div',
                                            { className: s()(kt, f && Tt) },
                                            n().createElement('div', { className: Rt }),
                                            n().createElement('div', { className: zt }),
                                            I && n().createElement('div', { className: Ht }),
                                            n().createElement(
                                                'div',
                                                { className: s()(Nt, T && Mt) },
                                                n().createElement('div', { className: Lt }),
                                                n().createElement(u.ZP, {
                                                    text: f
                                                        ? l
                                                            ? p
                                                                ? $t.premiumQuests.countDown.title()
                                                                : $t.dailyQuests.countDown.title()
                                                            : $t.dailyQuests.completed.title()
                                                        : $t.dailyQuests.locked.title(),
                                                    className: Ot,
                                                }),
                                                N &&
                                                    n().createElement(u.ZP, {
                                                        text: R.strings.quests.dailyWidget.progress(),
                                                        className: s()(Qt, !a && Ut),
                                                        format: {
                                                            binding: {
                                                                currentProgress: n().createElement(
                                                                    'div',
                                                                    {
                                                                        className: Gt,
                                                                        style: { '--currentProgress': a },
                                                                    },
                                                                    re.map((e, t) =>
                                                                        n().createElement(u.ZP, {
                                                                            key: t,
                                                                            text: String(t),
                                                                            className: Wt,
                                                                        }),
                                                                    ),
                                                                ),
                                                                maxProgress: n().createElement(u.ZP, {
                                                                    text: String(ne.vW),
                                                                    className: qt,
                                                                }),
                                                            },
                                                        },
                                                    }),
                                            ),
                                        ),
                                    n().createElement(Ct, {
                                        quest: e,
                                        conditions: E,
                                        disabledTooltipArgs: M,
                                        isDisabled: F,
                                        position: i,
                                        isRerollAnimation: r,
                                        isUnlockAnimation: S,
                                        unlockPremiumAnimationState: c,
                                    }),
                                )
                            );
                        },
                    ),
                    Vt = 'QuestCardList_base_a1',
                    Xt = 'QuestCardList_cardList_86',
                    Yt = 'QuestCardList_cardList__allComplete_57',
                    Kt = 'QuestCardList_cardList__hide_cc',
                    Jt = 'QuestCardList_attentionMessage_3c',
                    ea = 'QuestCardList_titleIcon_3f',
                    ta = 'QuestCardList_title_a6',
                    aa = 'QuestCardList_scroll_b1',
                    oa = 'QuestCardList_scroll__maskTop_99',
                    na = 'QuestCardList_scroll__maskBottom_04',
                    ia = 'QuestCardList_scroll__maskBoth_d0',
                    sa = 'QuestCardList_scrollContent_3d',
                    ra = 'QuestCardList_questCardBlock_c2',
                    ua = 'QuestCardList_bannerWrapper_72',
                    la = 'QuestCardList_divider_3c',
                    da = 'QuestCardList_divider__hide_be',
                    ma = 'QuestCardList_scrollBar_d4',
                    ca = 'QuestCardList_barThumb_7d',
                    pa = 'QuestCardList_barRail_3c';
                let _a;
                !(function (e) {
                    ((e.IDLE = 'idle'),
                        (e.BANNER_HIDE = 'banner_hide'),
                        (e.CARD_BLINK = 'card_blink'),
                        (e.QUESTS_UNLOCK = 'quests_unlock'),
                        (e.COMPLETED = 'completed'));
                })(_a || (_a = {}));
                const ga = R.strings.quests.switch,
                    Ea = (0, p.Pi)(({ hasTopMask: e, hasBottomMask: t, scrollApi: a, isRerollAnimation: i }) => {
                        var r, l, p;
                        const _ = me(),
                            g = _.model,
                            E = _.controls,
                            C = (0, N.GS)().mediaSize,
                            b = C >= N.cJ.Medium ? j.h2.Big : j.h2.Small,
                            v = (0, o.useState)(!1),
                            y = v[0],
                            A = v[1],
                            D = (0, o.useState)(!1),
                            B = D[0],
                            h = D[1],
                            w = (0, o.useState)(!1),
                            F = w[0],
                            I = w[1],
                            f = (0, o.useState)(_a.IDLE),
                            x = f[0],
                            S = f[1],
                            P = x === _a.BANNER_HIDE,
                            k = (0, m.tp)(g.computes.getCompletedlQuestLength(b), G),
                            T = y ? k : g.computes.getCompletedlQuestLength(b),
                            L = (0, m.tp)(g.computes.getAllQuestsCompleted(b), G),
                            U = y ? L : g.computes.getAllQuestsCompleted(b),
                            W = (0, m.tp)(g.computes.isPremiumTab(), G),
                            Z = y ? W : g.computes.isPremiumTab(),
                            V = g.regular.get().isEnabled,
                            X = g.premium.get().isEnabled,
                            Y = Z ? X : V,
                            K = (0, m.tp)(g.computes.isPremiumBannerVisible(), G),
                            J = y ? K : g.computes.isPremiumBannerVisible(),
                            ee = (0, m.tp)(g.computes.getQuests(b), G),
                            te = y ? ee : g.computes.getQuests(b),
                            ae = g.computes.getEpicQuests(b),
                            oe = g.computes.getCurrentTabIndex(),
                            ne = null != (r = (0, m.D9)(oe)) ? r : oe,
                            re = null != (l = (0, m.D9)(J)) ? l : J,
                            ue = (J && !U) || P,
                            le = te.sort((e, t) => ie.indexOf(t.status) - ie.indexOf(e.status));
                        const de = le.map((e) => e.status),
                            _e = null != (p = (0, m.D9)(de)) ? p : de,
                            ge = se(de, ue, C, Z),
                            Ee = B || y,
                            Ce = re && !J && Z && !y,
                            be = (0, pe.useTransition)(
                                le.map((e, t) => {
                                    const a = le.length - 1 === t;
                                    return Object.assign(
                                        {},
                                        e,
                                        { y: `${ge[t]}rem` },
                                        a && { marginBottom: `${M[C].questListMarginBottom}rem` },
                                        { index: t },
                                    );
                                }),
                                {
                                    key: (e) => e.id,
                                    enter: ({ y: e, marginBottom: t }) => ({ y: e, marginBottom: t }),
                                    update: ({ y: e, marginBottom: t }) => ({ y: e, marginBottom: t }),
                                    config: Ee ? { duration: Q } : { duration: H },
                                    delay: Ee || x !== _a.IDLE ? Q : O,
                                },
                            );
                        var ve, ye;
                        return (
                            (0, o.useEffect)(
                                () => (
                                    Ce && ((0, c.G)(R.sounds.dq_widget_slide_in()), S(_a.BANNER_HIDE)),
                                    x === _a.BANNER_HIDE
                                        ? (0, d.F)(() => {
                                              S(_a.CARD_BLINK);
                                          }, q)
                                        : x === _a.CARD_BLINK
                                          ? (0, d.F)(() => {
                                                S(_a.QUESTS_UNLOCK);
                                            }, z)
                                          : x === _a.QUESTS_UNLOCK
                                            ? (0, d.F)(() => {
                                                  S(_a.COMPLETED);
                                              }, $)
                                            : void 0
                                ),
                                [Ce, x],
                            ),
                            (0, o.useEffect)(() => {
                                _e && JSON.stringify(de) !== JSON.stringify(_e) && oe === ne && !y && I(!0);
                            }, [de, _e, oe, ne, y]),
                            (0, o.useEffect)(() => {
                                if (F)
                                    return (0, d.F)(() => {
                                        I(!1);
                                    }, O);
                            }, [F]),
                            (ve = () => (
                                h(!0),
                                (0, d.F)(() => {
                                    h(!1);
                                }, Q)
                            )),
                            (ye = []),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', ve),
                                    () => window.removeEventListener('resize', ve)
                                ),
                                ye,
                            ),
                            (0, o.useEffect)(() => {
                                ne !== oe && A(!0);
                            }, [ne, oe]),
                            (0, o.useEffect)(() => {
                                if (y)
                                    return (0, d.F)(() => {
                                        ((0, c.G)(R.sounds.dq_widget_slide_in()), A(!1));
                                    }, G);
                            }, [y]),
                            n().createElement(
                                'div',
                                { className: Vt },
                                Y && n().createElement(Ct, { quest: ae, conditions: ae, isEpic: !0, isDisabled: !1 }),
                                Y
                                    ? n().createElement(
                                          'div',
                                          { className: s()(Xt, U && Yt, y && Kt) },
                                          n().createElement(
                                              ce.X.Vertical.Area,
                                              {
                                                  api: a,
                                                  className: s()(aa, e && !t && oa, t && !e && na, e && t && ia),
                                                  classNames: { content: sa },
                                              },
                                              ue &&
                                                  n().createElement(
                                                      'div',
                                                      { className: s()(P && ua) },
                                                      n().createElement(ft, {
                                                          hideBanner: P,
                                                          onBuyPremium: E.onBuyPremium,
                                                      }),
                                                      n().createElement('div', { className: s()(la, P && da) }),
                                                  ),
                                              be((e, t) => {
                                                  var a;
                                                  const o = null == (a = te[t.index - 1]) ? void 0 : a.status;
                                                  return n().createElement(
                                                      pe.animated.div,
                                                      { style: Object.assign({}, e), className: ra },
                                                      n().createElement(Zt, {
                                                          key: t.id,
                                                          quest: t,
                                                          prevQuestStatus: o,
                                                          isAllQuestsCompletedDelayed: L,
                                                          completedQuestsLength: T,
                                                          position: t.index + 1,
                                                          isRerollAnimation: i,
                                                          isCompleteAnimation: F,
                                                          unlockPremiumAnimationState: x,
                                                          isPremium: Z,
                                                      }),
                                                  );
                                              }),
                                          ),
                                          n().createElement(ce.X.Vertical.Bar, {
                                              api: a,
                                              classNames: { base: ma, thumb: ca, rail: pa },
                                          }),
                                      )
                                    : n().createElement(
                                          'div',
                                          { className: Jt },
                                          n().createElement('div', { className: ea }),
                                          n().createElement(u.ZP, {
                                              text: Z ? ga.isDailyPremEnabled() : ga.isDailyRegularEnabled(),
                                              format: { classMix: ta },
                                          }),
                                      ),
                            )
                        );
                    }),
                    Ca = 'App_base_f7',
                    ba = 'App_footer_f1',
                    va = 'App_lip_3f',
                    ya = 'App_lipDivider_a1',
                    Aa = 'App_lip__hidden_ca',
                    Da = 'App_lipDivider__hidden_f5',
                    Ba = 'App_divider_d4',
                    ha = 'App_countdownWrapper_6e',
                    wa = 'App_countdownText_f1',
                    Fa = 'App_countdown_4c',
                    Ia = R.strings.quests.dailyQuests.countDown.tooltip,
                    fa = (0, p.Pi)(() => {
                        var e, t;
                        const a = me(),
                            i = a.model,
                            p = a.controls,
                            _ = i.computes.isPremiumTab(),
                            g = i.computes.getCurrentTabIndex(),
                            E = _ ? i.premium.get().isEnabled : i.regular.get().isEnabled,
                            C = i.computes.getQuestsInfo(),
                            b = C.countDown,
                            v = C.rerollEnabled,
                            y = C.rerollCountDown,
                            A = null != (e = (0, m.D9)(g)) ? e : g,
                            D = null != (t = (0, m.D9)(v)) ? t : v,
                            B = (0, o.useState)(!1),
                            h = B[0],
                            w = B[1],
                            F = (0, o.useState)(!1),
                            I = F[0],
                            f = F[1],
                            x = (0, o.useState)(!1),
                            T = x[0],
                            N = x[1],
                            M = (0, r.c4)();
                        (!(function (e, t) {
                            const a = e.contentRef,
                                n = e.wrapperRef,
                                i = e.scrollPosition,
                                s = e.clampPosition,
                                r = e.animationScroll,
                                u = e.events,
                                l = (0, o.useState)(k),
                                d = l[0],
                                m = l[1];
                            ((0, o.useEffect)(() => {
                                const e = a.current;
                                e && (e.style.cursor = 'dragging' === d.type ? 'grabbing' : 'grab');
                            }, [a, d.type]),
                                (0, o.useEffect)(() => {
                                    if ('dragging' !== d.type) return;
                                    const e = (e) => {
                                            const o = a.current,
                                                u = n.current;
                                            if (!o || !u) return;
                                            const l = d.positionFrom - e.screenY,
                                                m = d.previousScrollPosition + l;
                                            i.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(o, m),
                                                        from: { scrollPosition: r.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        },
                                        o = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', o),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', o));
                                        }
                                    );
                                }, [r.scrollPosition, s, a, d, i, n, t]),
                                (0, o.useEffect)(() => {
                                    if ('scrollingToEnd' !== d.type) return;
                                    const e = () => {
                                        m(k);
                                    };
                                    return (r.scrollPosition.idle && e(), u.on('rest', e), () => u.off('rest', e));
                                }, [r.scrollPosition, d.type, u]),
                                (0, o.useEffect)(() => {
                                    const e = a.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        (e.stopPropagation(),
                                            0 === e.button &&
                                                m({
                                                    type: 'dragging',
                                                    positionFrom: e.screenY,
                                                    previousScrollPosition: r.scrollPosition.get(),
                                                }));
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [r.scrollPosition, a]));
                        })(M),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    const e = M.animationScroll.scrollPosition.goal,
                                        t = M.getBounds()[1];
                                    (w(e > 3), f(e < t - 3));
                                };
                                return (
                                    M.events.on('recalculateContent', e),
                                    M.events.on('change', e),
                                    () => {
                                        (M.events.off('recalculateContent', e), M.events.off('change', e));
                                    }
                                );
                            }, [M]),
                            (0, o.useEffect)(() => {
                                _ ? p.onPremiumWindowLoaded() : p.onRegularWindowLoaded();
                            }, [p, _]),
                            (0, o.useEffect)(() => {
                                D && !v && A === g && y && (N(!0), (0, c.G)(R.sounds.dq_widget_slide_in()));
                            }, [v, D, g, A, y]),
                            (0, o.useEffect)(() => {
                                if (T)
                                    return (0, d.F)(() => {
                                        N(!1);
                                    }, U);
                            }, [T]));
                        const L = (0, o.useCallback)(() => {
                            p.onReroll(_);
                        }, [p, _]);
                        return n().createElement(
                            'div',
                            { className: Ca },
                            n().createElement(Ea, {
                                hasTopMask: h,
                                hasBottomMask: I,
                                scrollApi: M,
                                isRerollAnimation: T,
                            }),
                            E &&
                                n().createElement(
                                    'div',
                                    { className: ba },
                                    n().createElement('div', { className: s()(va, !I && Aa) }),
                                    n().createElement('div', { className: s()(ya, I && Da) }),
                                    n().createElement(P.q, { canReroll: v, onReroll: L, rerollPremium: _ }),
                                    n().createElement('div', { className: Ba }),
                                    n().createElement(
                                        l.i,
                                        { header: Ia.header(), body: Ia.body() },
                                        n().createElement(
                                            'div',
                                            { className: ha },
                                            n().createElement(u.ZP, {
                                                text: R.strings.quests.dailyQuests.countDown.remainingText(),
                                                className: wa,
                                            }),
                                            n().createElement(
                                                'div',
                                                { className: Fa },
                                                n().createElement(S, { timeToUpdate: b }),
                                            ),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    xa = (0, o.memo)(function (e) {
                        const t = (0, o.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return n().createElement(de, { options: t }, n().createElement(fa, null));
                    });
            },
            2656: (e, t, a) => {
                'use strict';
                var o = a(7739),
                    n = a(6179),
                    i = a.n(n),
                    s = a(6483),
                    r = a.n(s),
                    u = a(926),
                    l = a.n(u),
                    d = a(5415);
                const m = ['children', 'className'];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const p = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: l().SMALL_WIDTH,
                        [d.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: l().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: l().SMALL,
                        [d.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [d.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [d.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    E = (e) => {
                        let t = e.children,
                            a = e.className,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    o,
                                    n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, m);
                        const n = (0, d.GS)(),
                            s = n.mediaWidth,
                            u = n.mediaHeight,
                            l = n.mediaSize;
                        return i().createElement('div', c({ className: r()(a, p[s], _[u], g[l]) }, o), t);
                    },
                    C = ['children'];
                const b = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                o,
                                n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, C);
                    return i().createElement(o.ZN, null, i().createElement(E, a, t));
                };
                var v = a(493),
                    y = a.n(v),
                    A = a(3138),
                    D = a(5521);
                a(4179);
                const B = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function h(e = D.n.NONE, t = B, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== D.n.NONE)
                            return (
                                window.addEventListener('keydown', o, a),
                                () => {
                                    window.removeEventListener('keydown', o, a);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (A.O.view.isEventHandled()) return;
                                (A.O.view.setEventHandled(), t(o), a && o.stopPropagation());
                            }
                        }
                    }, [t, e, a]);
                }
                var w = a(3403),
                    F = a(7030),
                    I = a(3017),
                    f = a(3215),
                    x = a(4598),
                    S = a(9480),
                    P = a(3946);
                const k = (0, f.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    primitives: e.primitives(['currentTabIdx']),
                                    dailyBattleTypes: e.array('dailyBattleTypes', []),
                                    serialEnterBattleTypes: e.array('serialEnterBattleTypes', []),
                                    playStreak: e.object('playStreak'),
                                    playStreakRewardsCalendar: e.array('playStreak.rewardsCalendar'),
                                    playStreakBattleTypes: e.array('playStreak.battleTypes'),
                                },
                                a = (0, P.Om)(() => [
                                    { tabIndex: I.g2.DailyQuests, isEnabled: t.root.get().isDailyRegularEnabled },
                                    { tabIndex: I.g2.PremiumQuests, isEnabled: t.root.get().isDailyPremEnabled },
                                    { tabIndex: I.g2.PlayStreak, isEnabled: t.root.get().isSerialEnterEnabled },
                                ]),
                                o = (0, P.Om)(() => {
                                    var e;
                                    return null == (e = a().find((e) => e.tabIndex === I.g2.PlayStreak))
                                        ? void 0
                                        : e.isEnabled;
                                }),
                                n = (0, P.Om)(() => {
                                    var e;
                                    const o = t.primitives.currentTabIdx.get(),
                                        n = a(),
                                        i = n.find((e) => e.tabIndex === o);
                                    return i ? i.tabIndex : null == (e = n[0]) ? void 0 : e.tabIndex;
                                }),
                                i = (0, P.Om)(() => S.map(t.dailyBattleTypes.get(), x.yR), { equals: x.jv }),
                                s = (0, P.Om)(() => S.map(t.serialEnterBattleTypes.get(), x.yR), { equals: x.jv }),
                                r = (0, P.Om)(() =>
                                    S.map(t.playStreakRewardsCalendar.get(), (e) =>
                                        Object.assign({}, e, {
                                            rewards: S.map(e.rewards, x.yR),
                                            tags: S.map(e.tags, x.yR),
                                        }),
                                    ),
                                ),
                                u = (0, P.Om)(() => S.map(t.playStreakBattleTypes.get(), (e) => e));
                            return Object.assign({}, t, {
                                computes: {
                                    getEnabledFeatures: a,
                                    getCurrentTabIndex: n,
                                    getDailyBattleTypes: i,
                                    getSerialEnterBattleTypes: s,
                                    getPlayStreakRewardsCalendar: r,
                                    getPlayStreakBattleTypes: u,
                                    isPlayStreakEnabled: o,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            infoClick: e.createCallbackNoArgs('onInfoClick'),
                            tabClick: e.createCallback((e) => ({ tabIdx: e }), 'onTabClick'),
                            onPlayStreakShowInfo: e.createCallbackNoArgs('onShowInfo'),
                            vehiclePreview: e.createCallback((e) => ({ vehicleCD: e }), 'onVehiclePreviewClick'),
                            stylePreview: e.createCallback((e) => ({ styleCD: e }), 'onStylePreviewClick'),
                        }),
                    ),
                    T = k[0],
                    N = k[1];
                var M = a(2344),
                    L = a(5390),
                    O = a(6096);
                let H;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(H || (H = {}));
                let Q;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(Q || (Q = {}));
                const U = 'metrics',
                    G = ({ partnerID: e, item: t, parentScreen: a, itemState: o, info: n }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: o || null,
                        additional_info: n || null,
                    }),
                    W = (e, t) => {
                        const a = (0, n.useCallback)(
                            (a, o = H.Info, n) => {
                                (n || (n = {}),
                                    Object.keys(n).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: o,
                                            params: JSON.stringify(n),
                                        }));
                            },
                            [e, t],
                        );
                        return (e, t, o) => a(e, t, o);
                    },
                    q = (e, t) => {
                        const a = W(e, t),
                            o = (0, n.useRef)([]),
                            i = (0, n.useCallback)(
                                (e, t, n) => {
                                    e && !o.current.includes(e) && (o.current.push(e), a(e, t, n));
                                },
                                [o, a],
                            );
                        return [
                            (e, t, a) => i(e, t, a),
                            () => {
                                o.current = [];
                            },
                        ];
                    };
                let z, $, j;
                (!(function (e) {
                    ((e.Hangar = 'hangar'), (e.DailyQuestsView = 'dailyQuestsView'));
                })(z || (z = {})),
                    (function (e) {
                        ((e.PlayStreakWidget = 'play_streak_widget'), (e.PlayStreakTab = 'play_streak_tab'));
                    })($ || ($ = {})),
                    (function (e) {
                        e.Click = 'click';
                    })(j || (j = {})));
                var Z = a(9153),
                    V = a(2603),
                    X = a(648),
                    Y = a(5198),
                    K = a(7613),
                    J = a(3415),
                    ee = a(6373),
                    te = a(7727);
                const ae = 'TabCathegory_base_76',
                    oe = 'TabCathegory_info_bd',
                    ne = 'TabCathegory_battleModes_cb',
                    ie = 'TabCathegory_battleModeIcon_35',
                    se = 'TabCathegory_battleModeHidden_22',
                    re = ({ label: e, infoTooltipAgs: t, battleModes: a, onInfoClick: o }) => {
                        const n = a.slice(0, 3);
                        return i().createElement(
                            'div',
                            { className: ae },
                            i().createElement('div', null, e),
                            i().createElement(
                                ee.i,
                                t,
                                i().createElement('div', {
                                    className: oe,
                                    onClick: () => {
                                        ((0, te.G)(R.sounds.play()), o());
                                    },
                                    onMouseEnter: te.$.playHighlight,
                                }),
                            ),
                            i().createElement(
                                J.l,
                                {
                                    tooltipArgs: {
                                        contentId: R.views.lobby.daily.tooltips.ModeSelectorTooltip('resId'),
                                    },
                                    className: ne,
                                },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    n.map((e, t) =>
                                        i().createElement('div', {
                                            className: ie,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.battleTypeIcons.c_32x32.c_${e})`,
                                            },
                                            key: t,
                                        }),
                                    ),
                                    a.length > 3 &&
                                        i().createElement(K.ZP, {
                                            className: se,
                                            text: R.strings.quests.dailyQuests.tab.hiddenBattleTypes(),
                                        }),
                                ),
                            ),
                        );
                    },
                    ue = 'Tabs_base_5f',
                    le = R.strings.quests,
                    de = R.strings.play_streak,
                    me = R.views.lobby,
                    ce = (0, w.Pi)(() => {
                        const e = N(),
                            t = e.model,
                            a = e.controls,
                            o = t.computes.getCurrentTabIndex(),
                            s = t.computes.isPlayStreakEnabled(),
                            r = ((e) => {
                                const t = q(e, U),
                                    a = t[0],
                                    o = t[1],
                                    i = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                o = e.logLevel;
                                            a(t, o, G(e));
                                        },
                                        [a],
                                    );
                                return [(e) => i(e), () => o()];
                            })('play_streak')[0],
                            u = (0, n.useCallback)(
                                (e) => {
                                    (r({ item: $.PlayStreakTab, action: j.Click, parentScreen: z.DailyQuestsView }),
                                        a.tabClick(e));
                                },
                                [a, r],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    a.tabClick(e);
                                },
                                [a],
                            );
                        return i().createElement(
                            'div',
                            { className: ue },
                            s &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(re, {
                                        label: de.window.playStreakRewards.tab.head(),
                                        infoTooltipAgs: {
                                            header: de.window.playStreakRewards.tab.tooltip.head(),
                                            body: de.window.playStreakRewards.tab.tooltip.body(),
                                        },
                                        battleModes: t.computes.getDailyBattleTypes(),
                                        onInfoClick: a.onPlayStreakShowInfo,
                                    }),
                                    i().createElement(Y.x, {
                                        resId: me.daily.PlayStreakTabView('resId'),
                                        onClick: u,
                                        isSelected: o === Z.g.PlayStreak,
                                    }),
                                ),
                            i().createElement(re, {
                                label: le.missions.tab.daily.header(),
                                infoTooltipAgs: {
                                    header: le.dailyQuests.tab.cathegory.tooltip.daily.header(),
                                    body: le.dailyQuests.tab.cathegory.tooltip.daily.body(),
                                },
                                onInfoClick: a.infoClick,
                                battleModes: t.computes.getDailyBattleTypes(),
                            }),
                            i().createElement(X._, {
                                resId: me.daily.DailyQuestRegularTabView('resId'),
                                onClick: l,
                                isSelected: o === Z.g.DailyQuests,
                            }),
                            i().createElement(V.V, {
                                resId: me.daily.DailyQuestPremiumTabView('resId'),
                                onClick: l,
                                isSelected: o === Z.g.PremiumQuests,
                            }),
                        );
                    }),
                    pe = 'MainPage_base_fa',
                    _e = 'MainPage_contentWrapper_03',
                    ge = (0, w.Pi)(() => {
                        const e = N().model.computes.getCurrentTabIndex(),
                            t = (0, M.tp)(e, 500);
                        return i().createElement(
                            'div',
                            { className: pe },
                            i().createElement(ce, null),
                            i().createElement(
                                'div',
                                { className: _e },
                                (() => {
                                    switch (t) {
                                        case I.g2.DailyQuests:
                                        case I.g2.PremiumQuests:
                                            return i().createElement(L.Q, {
                                                resId: R.views.lobby.daily.DailyQuestsRegularView('resId'),
                                            });
                                        case I.g2.PlayStreak:
                                            return i().createElement(O.L, {
                                                resId: R.views.lobby.daily.PlayStreakView('resId'),
                                            });
                                        default:
                                            return (console.error(`Unreachable branch in tabs index: ${e}`), null);
                                    }
                                })(),
                            ),
                        );
                    }),
                    Ee = {
                        base: 'App_base_db',
                        background: 'App_background_4b',
                        background__dailyQuests: 'App_background__dailyQuests_ab',
                        background__premiumQuests: 'App_background__premiumQuests_35',
                        background__playStreak: 'App_background__playStreak_97',
                        infoButton: 'App_infoButton_85',
                        infoButton__info: 'App_infoButton__info_f9',
                        fadeIn: 'App_fadeIn_ab',
                        rewardsButton: 'App_rewardsButton_34',
                        hiddenBlink: 'App_hiddenBlink_62',
                        zoomOut: 'App_zoomOut_51',
                        appear: 'App_appear_f7',
                        fade: 'App_fade_f2',
                        smokeDispersion: 'App_smokeDispersion_9a',
                        lockIconZoomOut: 'App_lockIconZoomOut_2b',
                        lightIn: 'App_lightIn_57',
                        lightInIcon: 'App_lightInIcon_5e',
                    },
                    Ce = (0, w.Pi)(() => {
                        var e;
                        const t = N(),
                            a = t.model,
                            o = t.controls,
                            n = a.root.get().introSeen;
                        !(function ({
                            key: e = D.n.ESCAPE,
                            callback: t = () => A.O.view.sendEvent.close(),
                            preventPropagation: a = !0,
                        } = {}) {
                            h(e, t, a);
                        })({ callback: o.close });
                        const s = null != (e = (0, I.vh)(a.computes.getCurrentTabIndex())) ? e : '',
                            u = (0, F.useTransition)(s, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                delay: 200,
                            });
                        return i().createElement(
                            'div',
                            { className: r()(Ee.base, Ee[`base__${s}`]) },
                            u((e, t) =>
                                i().createElement(F.animated.div, {
                                    style: e,
                                    className: r()(Ee.background, Ee[`background__${t}`]),
                                }),
                            ),
                            n && i().createElement(ge, null),
                        );
                    });
                engine.whenReady.then(() => {
                    y().render(
                        i().createElement(b, null, i().createElement(T, null, i().createElement(Ce, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3017: (e, t, a) => {
                'use strict';
                a.d(t, { g2: () => l, ix: () => p, rl: () => c, vh: () => m });
                var o = a(2862),
                    n = a(729),
                    i = a(9480);
                const s = 'tooltipId';
                let r, u, l;
                (!(function (e) {
                    ((e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                        (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                        (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                        (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                        (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'));
                })(r || (r = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = 32)] = 'ExtraSmall'),
                            (e[(e.Small = 48)] = 'Small'),
                            (e[(e.Medium = 64)] = 'Medium'),
                            (e[(e.Large = 80)] = 'Large'),
                            (e[(e.ExtraLarge = 100)] = 'ExtraLarge'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e[(e.DailyQuests = 0)] = 'DailyQuests'),
                            (e[(e.PremiumQuests = 1)] = 'PremiumQuests'),
                            (e[(e.PlayStreak = 2)] = 'PlayStreak'));
                    })(l || (l = {})));
                const d = {
                        [l.DailyQuests]: 'dailyQuests',
                        [l.PremiumQuests]: 'premiumQuests',
                        [l.PlayStreak]: 'playStreak',
                    },
                    m = (e) => {
                        if (void 0 !== e)
                            return (
                                void 0 === d[e] &&
                                    console.error(`Content resource name was not found for tab index ${e}`),
                                d[e]
                            );
                    },
                    c = (e, t, a = o.h2.Big, r) =>
                        null != e && e.length
                            ? null == i
                                ? void 0
                                : i.map(e, (e) => ({
                                      name: e.name,
                                      size: a,
                                      image: (0, n.ry)(e, a),
                                      special: e.overlayType,
                                      value: e.value,
                                      valueType: (0, n.p3)(e.name),
                                      tooltipArgs: (0, n.pI)({ [s]: `${t}:${e.index}` }, Number(e.tooltipContentId), {
                                          ignoreShowDelay: !0,
                                      }),
                                      withSubscription: r,
                                  }))
                            : [];
                (Object.values(o.kK),
                    r.VEHICLE_FOR_GIFT,
                    r.VEHICLE_DISCOUNT,
                    r.VEHICLE_FOR_RENT,
                    r.SELECTABLE_VEHICLE_FOR_GIFT,
                    r.SELECTABLE_VEHICLE_DISCOUNT,
                    r.VEHICLE_DISCOUNT,
                    r.SELECTABLE_VEHICLE_DISCOUNT);
                o.h2;
                const p = (e, t) => t.some((t) => t.questID === e.id);
            },
            5198: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => de });
                var o = a(6179),
                    n = a.n(o),
                    i = a(3403);
                const s = (0, a(3215).q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, { computes: {} });
                        },
                        ({ externalModel: e }) => ({
                            onShowInfo: e.createCallbackNoArgs('onShowInfo'),
                            onFinishAnimation: e.createCallbackNoArgs('onFinishAnimation'),
                        }),
                    ),
                    r = s[0],
                    u = s[1];
                var l = a(6483),
                    d = a.n(l),
                    m = a(7613),
                    c = a(6373),
                    p = a(1396),
                    _ = a(7727),
                    g = a(3649);
                const E = 3e3,
                    C = 1e3,
                    b = 500,
                    v = 200,
                    y = 350,
                    A = 0,
                    D = R.strings.play_streak.window.playStreakRewards.tab.redemptionMaxDayCount.body();
                let B, h;
                (!(function (e) {
                    ((e[(e.DailyQuests = 0)] = 'DailyQuests'),
                        (e[(e.PremiumQuests = 1)] = 'PremiumQuests'),
                        (e[(e.PlayStreak = 2)] = 'PlayStreak'));
                })(B || (B = {})),
                    (function (e) {
                        ((e.Init = 'init'),
                            (e.Start = 'start'),
                            (e.Progress = 'progress'),
                            (e.Complete = 'complete'),
                            (e.ChangeStatus = 'changeStatus'));
                    })(h || (h = {})));
                const w = 'PlayStreakTab_base_2c',
                    F = 'PlayStreakTab_base__selected_26',
                    I = 'PlayStreakTab_bg_29',
                    f = 'PlayStreakTab_hoverBg_38',
                    x = 'PlayStreakTab_selectedBg_3f',
                    S = 'PlayStreakTab_disabledBg_52',
                    P = 'PlayStreakTab_flare_14',
                    k = 'PlayStreakTab_flareWrapper_96',
                    T = 'PlayStreakTab_base__hover_ac',
                    N = 'PlayStreakTab_base__animatingProgress_49',
                    M = 'PlayStreakTab_base__completed_a5',
                    L = 'PlayStreakTab_base__paused_fd',
                    O = 'PlayStreakTab_disabledBg__event_5e',
                    H = 'PlayStreakTab_base__animatingInit_6b',
                    Q = 'PlayStreakTab_base__animatingStart_6f',
                    U = 'PlayStreakTab_contentWrapper_2b',
                    G = 'PlayStreakTab_iconWrapper_5b',
                    W = 'PlayStreakTab_base__disabled_de',
                    q = 'PlayStreakTab_base__changeStatus_e5',
                    z = 'PlayStreakTab_statusAlert_61',
                    $ = 'PlayStreakTab_streakLength_16',
                    j = 'PlayStreakTab_circleGlow_f5',
                    Z = 'PlayStreakTab_streakLengthValue_84',
                    V = 'PlayStreakTab_streakLengthValue__animated_03',
                    X = 'PlayStreakTab_separator_00',
                    Y = 'PlayStreakTab_rightBlockWrapper_e8',
                    K = 'PlayStreakTab_description_3e',
                    J = 'PlayStreakTab_pause_3e',
                    ee = 'PlayStreakTab_pauseInner_f1',
                    te = 'PlayStreakTab_pauseText_c0',
                    ae = 'PlayStreakTab_pauseText__zero_b9',
                    oe = 'PlayStreakTab_hourglass_ef',
                    ne = 'PlayStreakTab_sparks_a0';
                var ie = a(1975);
                const se = {
                        base: 'RecoveryProgression_base_a6',
                        content: 'RecoveryProgression_content_31',
                        limitDay: 'RecoveryProgression_limitDay_80',
                        limitDay__complete: 'RecoveryProgression_limitDay__complete_77',
                    },
                    re = n().memo(
                        ({ isDailyWin: e, isFirstAppearance: t, redemptionMaxDayCount: a, redemptionDayCount: o }) => {
                            const i = o >= a && e,
                                s = R.strings.play_streak.window.playStreakRewards.tab.help,
                                r = (0, g.uF)(s.blocked.body(), { redemptionMaxDayCount: a });
                            return n().createElement(
                                'div',
                                { className: se.base },
                                n().createElement(
                                    c.i,
                                    { header: s.blocked.head(), body: r },
                                    n().createElement(
                                        'div',
                                        { className: se.progressbar },
                                        n().createElement(ie.ko, {
                                            size: ie.$u.Small,
                                            deltaFrom: e && t ? o - 1 : o,
                                            value: o,
                                            maxValue: e ? a : a + 1,
                                        }),
                                    ),
                                ),
                                n().createElement(
                                    c.i,
                                    { header: s.blocked.head(), body: r },
                                    n().createElement(
                                        'div',
                                        { className: se.content },
                                        n().createElement(m.ZP, {
                                            text: String(o),
                                            variant: 'heading-H18',
                                            color: i ? 'GREEN' : 'YELLOW',
                                        }),
                                        n().createElement(m.ZP, {
                                            text: D,
                                            format: {
                                                binding: { redemptionMaxDayCount: a },
                                                classMix: i ? se.limitDay__complete : se.limitDay,
                                            },
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ue = n().memo(
                        ({
                            isSelected: e,
                            streakLength: t,
                            isBlocked: a,
                            skipDayCount: i,
                            isDailyWin: s,
                            isFirstAppearance: r,
                            redemptionMaxDayCount: u,
                            redemptionDayCount: l,
                            isPaused: D,
                            tabIdx: B,
                            onClick: ie,
                            onFinishAnimation: se,
                        }) => {
                            const ue = R.strings.play_streak.window.playStreakRewards.tab.content,
                                le = R.strings.play_streak.window.playStreakRewards.tab.help,
                                de = (0, g.uF)(le.number(), {
                                    streakLength: t,
                                    streakLengthWin: s ? t : t - 1,
                                    br: '\n',
                                }),
                                me = (0, o.useState)(!1),
                                ce = me[0],
                                pe = me[1],
                                _e = (0, o.useState)(!1),
                                ge = _e[0],
                                Ee = _e[1],
                                Ce = (0, o.useState)(!1),
                                be = Ce[0],
                                ve = Ce[1],
                                ye = (0, o.useState)(!1),
                                Ae = ye[0],
                                De = ye[1],
                                Be = (0, o.useState)(!1),
                                he = Be[0],
                                we = Be[1],
                                Fe = (0, o.useState)(!1),
                                Ie = Fe[0],
                                fe = Fe[1],
                                xe = (0, o.useState)(a),
                                Se = xe[0],
                                Pe = xe[1];
                            (0, o.useEffect)(() => {
                                Pe(a);
                            }, [a]);
                            const ke = (0, p.K)(),
                                Re = (0, p.K)(),
                                Te = (e, t) => {
                                    Re.run(() => {
                                        He(e);
                                    }, t);
                                },
                                Ne = (0, o.useCallback)(() => {
                                    (ke.isRunning && ke.clear(), Re.isRunning && Re.clear());
                                }, [ke, Re]),
                                Me = (0, o.useCallback)(() => {
                                    e || (_.$.playHighlight(), pe(!0));
                                }, [e]),
                                Le = (0, o.useCallback)(() => {
                                    e || pe(!1);
                                }, [e]),
                                Oe = (0, o.useCallback)(() => {
                                    (_.$.playClick(), ie(B), pe(!1));
                                }, [ie, B]);
                            (0, o.useEffect)(() => {
                                s && !D && r && e && Te(h.Init, a ? C : E);
                            }, [s, r, e]);
                            const He = (e) => {
                                    switch ((Ne(), e)) {
                                        case h.Init:
                                            return (Ee(!0), void Te(h.Start, b));
                                        case h.Start:
                                            return (ve(!0), void Te(h.Progress, v));
                                        case h.Progress:
                                            return (
                                                De(!0),
                                                void (s && a && l === u
                                                    ? (fe(!0), Te(h.ChangeStatus, y))
                                                    : Te(h.Complete, y))
                                            );
                                        case h.Complete:
                                            return (Ee(!1), De(!1), ve(!1), we(!0), void se());
                                        case h.ChangeStatus:
                                            return (fe(!1), Pe(!1), void Te(h.Complete, A));
                                    }
                                },
                                Qe = d()(
                                    d()(
                                        w,
                                        ce && T,
                                        e && F,
                                        s && !r && M,
                                        s && r && he && M,
                                        Ie && q,
                                        Se && W,
                                        ge && H,
                                        be && Q,
                                        Ae && N,
                                        D && L,
                                    ),
                                );
                            return n().createElement(
                                'div',
                                { className: Qe, onMouseEnter: Me, onMouseLeave: Le, onClick: Oe },
                                n().createElement('div', { className: I }),
                                n().createElement('div', { className: f }),
                                n().createElement('div', { className: x }),
                                Se && n().createElement('div', { className: S }),
                                D && n().createElement('div', { className: d()(S, O) }),
                                e &&
                                    !D &&
                                    n().createElement(
                                        'div',
                                        { className: k },
                                        n().createElement('div', { className: P }),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: U },
                                    n().createElement(
                                        'div',
                                        { className: G },
                                        D && n().createElement('div', { className: z }),
                                        Se &&
                                            !D &&
                                            n().createElement(re, {
                                                isAnimationInit: ge,
                                                isFirstAppearance: r,
                                                isDailyWin: s,
                                                redemptionMaxDayCount: u,
                                                redemptionDayCount: l,
                                            }),
                                        !Se &&
                                            !D &&
                                            n().createElement(
                                                c.i,
                                                { body: de },
                                                n().createElement(
                                                    'div',
                                                    { className: $ },
                                                    e && n().createElement('div', { className: j }),
                                                    n().createElement('div', { className: Z }, t),
                                                    n().createElement('div', { className: d()(Z, V) }, t),
                                                ),
                                            ),
                                    ),
                                    n().createElement('div', { className: X }),
                                    n().createElement(
                                        'div',
                                        { className: Y },
                                        n().createElement(
                                            'div',
                                            { className: K },
                                            D
                                                ? n().createElement(m.ZP, {
                                                      text: ue.disable(),
                                                      format: {
                                                          binding: {
                                                              br: n().createElement('div', {
                                                                  style: { width: '100%' },
                                                              }),
                                                          },
                                                      },
                                                  })
                                                : n().createElement(m.ZP, {
                                                      text: (s && !r) || (s && r && he) ? ue.complete() : ue.quest(),
                                                      format: {
                                                          binding: {
                                                              br: n().createElement('div', {
                                                                  style: { width: '100%' },
                                                              }),
                                                          },
                                                      },
                                                  }),
                                        ),
                                        !D &&
                                            n().createElement(
                                                'div',
                                                { className: J },
                                                e && n().createElement('div', { className: ne }),
                                                n().createElement(
                                                    c.i,
                                                    { header: le.head(), body: le.body() },
                                                    n().createElement(
                                                        'div',
                                                        { className: ee },
                                                        n().createElement(m.ZP, {
                                                            text: ue.pause(),
                                                            format: {
                                                                binding: { skipDayCount: i },
                                                                classMix: d()(te, 0 === i && ae),
                                                            },
                                                        }),
                                                        n().createElement('div', { className: oe }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    le = (0, i.Pi)(({ isSelected: e, onClick: t }) => {
                        const a = u(),
                            o = a.model,
                            i = a.controls,
                            s = o.root.get(),
                            r = s.skipDayCount,
                            l = s.streakLength,
                            d = s.dailyWin,
                            m = s.isFirstAppearance,
                            c = s.isFirstAppearanceRedemptionDay,
                            p = s.isLastDayRedemption,
                            _ = s.isBlocked,
                            g = s.redemptionDayCount,
                            E = s.redemptionMaxDayCount,
                            C = s.isPaused,
                            b = c || m || p,
                            v = p || _,
                            y = d ? l : l + 1,
                            A = d ? E - g : E - g + 1;
                        return n().createElement(ue, {
                            tabIdx: B.PlayStreak,
                            isSelected: e,
                            isBlocked: v,
                            streakLength: y,
                            skipDayCount: r,
                            isDailyWin: d,
                            isFirstAppearance: b,
                            redemptionDayCount: A,
                            redemptionMaxDayCount: E,
                            isPaused: C,
                            onClick: t,
                            onFinishAnimation: i.onFinishAnimation,
                        });
                    }),
                    de = (0, o.memo)(function (e) {
                        const t = (0, o.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return n().createElement(r, { options: t }, n().createElement(le, e));
                    });
            },
            6096: (e, t, a) => {
                'use strict';
                a.d(t, { L: () => ba });
                var o = a(6179),
                    n = a.n(o),
                    i = a(1612);
                const s = {
                    getter:
                        ((r = {
                            skipDayCount: 1,
                            streakLength: 5,
                            dailyWin: !0,
                            isBlocked: !1,
                            isPaused: !1,
                            isFirstAppearance: !0,
                            redemptionDayCount: 1,
                            redemptionMaxDayCount: 0,
                            isEnabled: !0,
                            battleTypes: [1, 2, 3],
                            rewardsCalendar: [
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '436',
                                            isCompensation: !1,
                                            value: '2',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '437',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 1,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '438',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 2,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '439',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 3,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '440',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 4,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '441',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '442',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 5,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '443',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 6,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '444',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 7,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedSights',
                                            label: 'Очистка линз',
                                            tooltipContentId: '25',
                                            tooltipId: '445',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '446',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 8,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '447',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 9,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '448',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 10,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '449',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 11,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '450',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 12,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '451',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 13,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '452',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 14,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '453',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 15,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '454',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '455',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 16,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '456',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 17,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '457',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 18,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '458',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 19,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '459',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 20,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '460',
                                            isCompensation: !1,
                                            value: '1000',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 21,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '461',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '462',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 22,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'universalBrochure',
                                            label: 'Универсальная брошюра',
                                            tooltipContentId: '25',
                                            tooltipId: '463',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'crewBooks',
                                            index: 0,
                                        },
                                    ],
                                    day: 23,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '464',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '465',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 24,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '466',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 25,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '467',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 26,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '468',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 27,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '469',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 28,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '470',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 29,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '471',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 30,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '472',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 31,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '473',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 32,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '474',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 33,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '475',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '476',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 34,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '477',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 35,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '478',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 36,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '479',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 37,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '480',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 38,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '481',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '482',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '483',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 39,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '484',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '485',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 40,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '486',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 41,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '487',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 42,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '488',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 43,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_smoothDriving',
                                            label: 'Тонкости работы КПП',
                                            tooltipContentId: '25',
                                            tooltipId: '489',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '490',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 44,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '491',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 45,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Компоненты',
                                            tooltipContentId: '25',
                                            tooltipId: '492',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'equipCoin',
                                            index: 0,
                                        },
                                    ],
                                    day: 46,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '493',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '494',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 47,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '495',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 48,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '496',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 49,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '497',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 50,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '498',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 51,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '499',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 52,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '500',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '501',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 53,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '502',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '503',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 54,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '504',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 55,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '505',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 56,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '506',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 57,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '507',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 58,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '508',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 59,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '509',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 60,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '510',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 61,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '511',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 62,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedDamageVentilation',
                                            label: 'Расточка каморы Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '512',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 63,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '513',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 64,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '514',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '515',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 65,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '516',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 66,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '517',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 67,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '518',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 68,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '519',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 69,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '520',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 70,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '521',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 71,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '522',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 72,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '523',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '524',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 73,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '525',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 74,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '526',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 75,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '527',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 76,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '528',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 77,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '529',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 78,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '530',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '531',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 79,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '532',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 80,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '533',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 81,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '534',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 82,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '535',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '536',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 83,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '537',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 84,
                                },
                                {
                                    additionalInfo: ['play_streak:random:goodie'],
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            icon: '',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/random_goodie.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/random_goodie.png',
                                            userName: '',
                                            label: '',
                                            tooltipContentId: '25',
                                            tooltipId: '539',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'random_goodie',
                                            index: 0,
                                        },
                                    ],
                                    day: 85,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '538',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '539',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 86,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'universalBrochure',
                                            label: 'Универсальная брошюра',
                                            tooltipContentId: '25',
                                            tooltipId: '540',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'crewBooks',
                                            index: 0,
                                        },
                                    ],
                                    day: 87,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_smoothDriving',
                                            label: 'Тонкости работы КПП',
                                            tooltipContentId: '25',
                                            tooltipId: '541',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '542',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 88,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '543',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 89,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '544',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 90,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '545',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 91,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '546',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 92,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '547',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 93,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '548',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 94,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '549',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 95,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '550',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 96,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '551',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '552',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 97,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '553',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 98,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '554',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 99,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '555',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 100,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '556',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '557',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 101,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '558',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 102,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '559',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 103,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '560',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '561',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 104,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '562',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 105,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '563',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 106,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '564',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 107,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '565',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 108,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '566',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 109,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '567',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 110,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '568',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 111,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '569',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '570',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 112,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '571',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 113,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '572',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 114,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '573',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 115,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '574',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 116,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '575',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 117,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '576',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '577',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 118,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '578',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 119,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '579',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 120,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '580',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 121,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '581',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 122,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '582',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 123,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '583',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '584',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '585',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 124,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '586',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '587',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 125,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            progressLevel: 2,
                                            branchID: 1,
                                            styleID: 31315,
                                            overlayType: '',
                                            isPeriodic: !1,
                                            dogTagType: 0,
                                            icon: 'style_progress_31315_2',
                                            label: '',
                                            tooltipContentId: '25',
                                            tooltipId: '591',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'styleProgress',
                                            index: 0,
                                        },
                                    ],
                                    day: 126,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedDamageVentilation',
                                            label: 'Расточка каморы Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '588',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 127,
                                },
                                {
                                    tags: ['streak_periodic_rent'],
                                    rewards: [
                                        {
                                            label: 'Объект 265Т',
                                            tooltipContentId: '25',
                                            tooltipId: '589',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicles_rent',
                                            index: 0,
                                        },
                                    ],
                                    day: 128,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '590',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 129,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_smoothDriving',
                                            label: 'Тонкости работы КПП',
                                            tooltipContentId: '25',
                                            tooltipId: '591',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '592',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 130,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '593',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 131,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '594',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 132,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '595',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 133,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '596',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 134,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '597',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 135,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '598',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '599',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 136,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '600',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 137,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '601',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 138,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '602',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 139,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '603',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '604',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 140,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '605',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 141,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '606',
                                            isCompensation: !1,
                                            value: '1000',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 142,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '607',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '608',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 143,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '609',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 144,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительные Серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '610',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 145,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '611',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 146,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '612',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 147,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '613',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 148,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Компоненты',
                                            tooltipContentId: '25',
                                            tooltipId: '614',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'equipCoin',
                                            index: 0,
                                        },
                                    ],
                                    day: 149,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '615',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 150,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '616',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 151,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '617',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 152,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '618',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 153,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '619',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 154,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '620',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 155,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '621',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 156,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '622',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 157,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '623',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '624',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 158,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '625',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 159,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '626',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 160,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '627',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '628',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 161,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '629',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 162,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '630',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 163,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '631',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 164,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '632',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 165,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '633',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 166,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '634',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 167,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '635',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 168,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '636',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '637',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 169,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '638',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 170,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '639',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 171,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '640',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 172,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '641',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 173,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '642',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '643',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 174,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '644',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '645',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 175,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '646',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 176,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '647',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 177,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '648',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 178,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '649',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '650',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 179,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '651',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 180,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '652',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 181,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '653',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '654',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 182,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'universalBrochure',
                                            label: 'Универсальная брошюра',
                                            tooltipContentId: '25',
                                            tooltipId: '655',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'crewBooks',
                                            index: 0,
                                        },
                                    ],
                                    day: 183,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_smoothDriving',
                                            label: 'Тонкости работы КПП',
                                            tooltipContentId: '25',
                                            tooltipId: '656',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '657',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 184,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '658',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 185,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '659',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 186,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительные Серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '660',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 187,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '661',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '662',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '663',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 188,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '664',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 189,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '665',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 190,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedDamageVentilation',
                                            label: 'Расточка каморы Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '666',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 191,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '667',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 192,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '668',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '669',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 193,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '670',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 194,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '671',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 195,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '672',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 196,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '673',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '674',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 197,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '675',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 198,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Компоненты',
                                            tooltipContentId: '25',
                                            tooltipId: '676',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'equipCoin',
                                            index: 0,
                                        },
                                    ],
                                    day: 199,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '677',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '678',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 200,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '679',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 201,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '680',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 202,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '681',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 203,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '682',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 204,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '683',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 205,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '684',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '685',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '686',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 206,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '687',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 207,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '688',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '689',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 208,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '690',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 209,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '691',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 210,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '692',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 211,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '693',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 212,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '694',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 213,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '695',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 214,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '696',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '697',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 215,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '698',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 216,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '699',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 217,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '700',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 218,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '701',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 219,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '702',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 220,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '703',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 221,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '704',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 222,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '705',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 223,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_smoothDriving',
                                            label: 'Тонкости работы КПП',
                                            tooltipContentId: '25',
                                            tooltipId: '706',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '707',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 224,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '708',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 225,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '709',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '710',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 226,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '711',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 227,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '712',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 228,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '713',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 229,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '714',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 230,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '715',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 231,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '716',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '717',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 232,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '718',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 233,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '719',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 234,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '720',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 235,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '721',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '722',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 236,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '723',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 237,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '724',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 238,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '725',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '726',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 239,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '727',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 240,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '728',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 241,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '729',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 242,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '730',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 243,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '731',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 244,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '732',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '733',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '734',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 245,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '735',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 246,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '736',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '737',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 247,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '738',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '739',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 248,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '740',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 249,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '741',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 250,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '742',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 251,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '743',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '744',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '745',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 252,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '746',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 253,
                                },
                                { tags: [], rewards: [], day: 254 },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedDamageVentilation',
                                            label: 'Расточка каморы Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '747',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 255,
                                },
                                {
                                    tags: ['streak_periodic_rent'],
                                    rewards: [
                                        {
                                            label: 'К-2',
                                            tooltipContentId: '25',
                                            tooltipId: '748',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicles_rent',
                                            index: 0,
                                        },
                                    ],
                                    day: 256,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '749',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '750',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 257,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '751',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 258,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '752',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 259,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '753',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 260,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '754',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 261,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '755',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 262,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '756',
                                            isCompensation: !1,
                                            value: '1000',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 263,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '757',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 264,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '758',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '759',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 265,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '760',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 266,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '761',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 267,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '762',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 268,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '763',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 269,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '764',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 270,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '765',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '766',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 271,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '767',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 272,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '768',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 273,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '769',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 274,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '770',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '771',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 275,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '772',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 276,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '773',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 277,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '774',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '775',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 278,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '776',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 279,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '777',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 280,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '778',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 281,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '779',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 282,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '780',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 283,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '781',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 284,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '782',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 285,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '783',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '784',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 286,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '785',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 287,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '786',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 288,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '787',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '788',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 289,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '789',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 290,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '790',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 291,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '791',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 292,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '792',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '793',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 293,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '794',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 294,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '795',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '796',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 295,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '797',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '798',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 296,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '799',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 297,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '800',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 298,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '801',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 299,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '802',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 300,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '803',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 301,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Компоненты',
                                            tooltipContentId: '25',
                                            tooltipId: '804',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'equipCoin',
                                            index: 0,
                                        },
                                    ],
                                    day: 302,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '805',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 303,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_smoothDriving',
                                            label: 'Тонкости работы КПП',
                                            tooltipContentId: '25',
                                            tooltipId: '806',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'naturalCover',
                                            label: 'Укрытия на местности',
                                            tooltipContentId: '25',
                                            tooltipId: '807',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 304,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '808',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 305,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '809',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 306,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '810',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 307,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '811',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 308,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            overlayType: '',
                                            item: 'largeMedkit',
                                            label: 'Большая аптечка',
                                            tooltipContentId: '25',
                                            tooltipId: '812',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'autoExtinguishers',
                                            label: 'Большой огнетушитель',
                                            tooltipContentId: '25',
                                            tooltipId: '813',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                        {
                                            overlayType: '',
                                            item: 'largeRepairkit',
                                            label: 'Большой ремкомплект',
                                            tooltipContentId: '25',
                                            tooltipId: '814',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 2,
                                        },
                                    ],
                                    day: 309,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '815',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '816',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 310,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'universalBrochure',
                                            label: 'Универсальная брошюра',
                                            tooltipContentId: '25',
                                            tooltipId: '817',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'crewBooks',
                                            index: 0,
                                        },
                                    ],
                                    day: 311,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_smoothTurret',
                                            label: 'Без резких движений',
                                            tooltipContentId: '25',
                                            tooltipId: '818',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'fireFighting',
                                            label: 'Искусство сбивать пламя',
                                            tooltipContentId: '25',
                                            tooltipId: '819',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 312,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '820',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 313,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Слоты в Ангаре',
                                            tooltipContentId: '25',
                                            tooltipId: '821',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 0,
                                        },
                                    ],
                                    day: 314,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '822',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 315,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Золото',
                                            tooltipContentId: '25',
                                            tooltipId: '823',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'gold',
                                            index: 0,
                                        },
                                    ],
                                    day: 316,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '824',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 317,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '825',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 318,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedDamageVentilation',
                                            label: 'Расточка каморы Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '826',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 319,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '827',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 320,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '828',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 321,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'gunner_rancorous',
                                            label: 'Концентрация на цели',
                                            tooltipContentId: '25',
                                            tooltipId: '829',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'driver_virtuoso',
                                            label: 'Полоса препятствий',
                                            tooltipContentId: '25',
                                            tooltipId: '830',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 322,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '831',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 323,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '832',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 324,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '833',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 325,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '834',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 326,
                                },
                                {
                                    additionalInfo: ['play_streak:random:goodie'],
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            icon: '',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/random_goodie.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/random_goodie.png',
                                            userName: '',
                                            label: '',
                                            tooltipContentId: '25',
                                            tooltipId: '835',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'random_goodie',
                                            index: 0,
                                        },
                                    ],
                                    day: 327,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '835',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '836',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 328,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '837',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 329,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '838',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 330,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '839',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 331,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'radioman_lastEffort',
                                            label: 'Долг превыше всего',
                                            tooltipContentId: '25',
                                            tooltipId: '840',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBoosterReplace',
                                            item: 'loader_pedant',
                                            label: 'Разложить снаряды',
                                            tooltipContentId: '25',
                                            tooltipId: '841',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 332,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Мест в Казарме',
                                            tooltipContentId: '25',
                                            tooltipId: '842',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'berths',
                                            index: 0,
                                        },
                                    ],
                                    day: 333,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '25',
                                            tooltipId: '843',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'crystal',
                                            index: 0,
                                        },
                                    ],
                                    day: 334,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'enhancedAimDrives',
                                            label: 'Настройка прицела',
                                            tooltipContentId: '25',
                                            tooltipId: '844',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'rammer',
                                            label: 'Рациональная боеукладка',
                                            tooltipContentId: '25',
                                            tooltipId: '845',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 335,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '846',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 336,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_credits',
                                            label: 'Дополнительное серебро за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '847',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 337,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '25',
                                            tooltipId: '848',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 338,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '849',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 339,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '850',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 340,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '851',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 341,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'universalBrochure',
                                            label: 'Универсальная брошюра',
                                            tooltipContentId: '25',
                                            tooltipId: '852',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'crewBooks',
                                            index: 0,
                                        },
                                    ],
                                    day: 342,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'recertificationForm',
                                            label: 'Бланк переподготовки',
                                            tooltipContentId: '25',
                                            tooltipId: '853',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 343,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Свободный опыт',
                                            tooltipContentId: '25',
                                            tooltipId: '854',
                                            isCompensation: !1,
                                            value: '2500',
                                            name: 'freeXP',
                                            index: 0,
                                        },
                                    ],
                                    day: 344,
                                },
                                {
                                    tags: ['monthly'],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '855',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 345,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '856',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 346,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '857',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 347,
                                },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Компоненты',
                                            tooltipContentId: '25',
                                            tooltipId: '858',
                                            isCompensation: !1,
                                            value: '25',
                                            name: 'equipCoin',
                                            index: 0,
                                        },
                                    ],
                                    day: 348,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '859',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 349,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '25',
                                            tooltipId: '860',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'goodies',
                                            index: 0,
                                        },
                                    ],
                                    day: 350,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '861',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 351,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'coatedOptics',
                                            label: 'Калибровка оптики',
                                            tooltipContentId: '25',
                                            tooltipId: '862',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedConfiguration',
                                            label: 'Предбоевое ТО',
                                            tooltipContentId: '25',
                                            tooltipId: '863',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 352,
                                },
                                {
                                    tags: ['monthly'],
                                    rewards: [
                                        {
                                            overlayType: 'equipmentModernized_1',
                                            item: 'modernizedTankRammerSights',
                                            label: 'Многозубая каретка досылателя Т1',
                                            tooltipContentId: '25',
                                            tooltipId: '864',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                    ],
                                    day: 353,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'improvedVentilation',
                                            label: 'Продувка воздуховодов',
                                            tooltipContentId: '25',
                                            tooltipId: '865',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 0,
                                        },
                                        {
                                            overlayType: 'battleBooster',
                                            item: 'aimingStabilizer',
                                            label: 'Смазка стабилизаторов',
                                            tooltipContentId: '25',
                                            tooltipId: '866',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'items',
                                            index: 1,
                                        },
                                    ],
                                    day: 354,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            icon: 'mtl_1_24',
                                            iconBig: 'img://gui/maps/icons/quests/bonuses/big/mtl_1_24.png',
                                            iconSmall: 'img://gui/maps/icons/quests/bonuses/small/mtl_1_24.png',
                                            userName: '',
                                            label: 'Путь воина',
                                            tooltipContentId: '665',
                                            tooltipId: '867',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'lootBoxToken',
                                            index: 0,
                                        },
                                    ],
                                    day: 355,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '868',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 356,
                                },
                                {
                                    tags: [],
                                    rewards: [
                                        {
                                            label: 'Серебро',
                                            tooltipContentId: '25',
                                            tooltipId: '869',
                                            isCompensation: !1,
                                            value: '10000',
                                            name: 'credits',
                                            index: 0,
                                        },
                                    ],
                                    day: 357,
                                },
                                { tags: [], rewards: [], day: 358 },
                                {
                                    tags: ['weekly'],
                                    rewards: [
                                        {
                                            label: 'Танковый премиум аккаунт',
                                            tooltipContentId: '25',
                                            tooltipId: '870',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'premium_plus',
                                            index: 0,
                                        },
                                    ],
                                    day: 359,
                                },
                                {
                                    tags: ['streak_periodic_rent'],
                                    rewards: [
                                        {
                                            label: 'Объект 452К',
                                            tooltipContentId: '25',
                                            tooltipId: '871',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicles_rent',
                                            index: 0,
                                        },
                                    ],
                                    day: 360,
                                },
                            ],
                            topRewards: [],
                            periodicRewards: [],
                        }),
                        (e) => (e ? e.split('.').reduce((e, t) => e[t], r) : r)),
                    controls: () =>
                        (0, i.h)({
                            vehiclePreview: (e) => {
                                console.log('Call onVehiclePreviewClick()', e);
                            },
                            stylePreview: (e) => {
                                console.log('Call onStylePreviewClick()', e);
                            },
                        }),
                };
                var r,
                    u = a(3215),
                    l = a(4598),
                    d = a(5175),
                    m = a(3946);
                const c = (0, u.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    playStreakRewardsCalendar: e.array('rewardsCalendar'),
                                    playStreakBattleTypes: e.array('battleTypes'),
                                },
                                a = (0, m.Om)(() => (0, d.c)(t.playStreakRewardsCalendar.get()), { equals: l.jv }),
                                o = (0, m.Om)(() => (0, d.c)(t.playStreakBattleTypes.get()), { equals: l.jv });
                            return Object.assign({}, t, {
                                computes: { getPlayStreakRewardsCalendar: a, getPlayStreakBattleTypes: o },
                            });
                        },
                        ({ externalModel: e }) => ({
                            vehiclePreview: e.createCallback((e) => ({ vehicleCD: e }), 'onVehiclePreviewClick'),
                            vehicleHangar: e.createCallback((e) => ({ vehCD: e }), 'onShowVehicle'),
                            stylePreview: e.createCallback((e) => ({ styleCD: e }), 'onStylePreviewClick'),
                        }),
                    ),
                    p = c[0],
                    _ = c[1];
                var g = a(6483),
                    E = a.n(g),
                    C = a(7727),
                    b = a(3403),
                    v = a(7030),
                    y = a(2344),
                    A = a(2862),
                    D = a(5739),
                    B = a(6373),
                    h = a(5415),
                    w = a(1396);
                const F = 'Check_base_75',
                    I = ({ className: e }) => n().createElement('div', { className: E()(F, e) });
                var f = a(7736);
                const x = Object.assign({}, A.E4, {
                        RandomEquipment: 'random_equipment',
                        EquipCoin: 'equipCoin',
                        RandomGoodie: 'random_goodie',
                    }),
                    S = 'largeRepairkit',
                    P = 'largeMedkit',
                    k = 'autoExtinguishers',
                    T = 'rammer',
                    N = 'improvedVentilation',
                    M = 'coatedOptics',
                    L = 'enhancedAimDrives',
                    O = 'improvedConfiguration',
                    H = 'aimingStabilizer',
                    Q = [
                        x.LootBoxToken,
                        x.RandomEquipment,
                        x.EquipCoin,
                        x.Crystal,
                        x.Gold,
                        x.Premium,
                        x.PremiumPlus,
                        x.PremiumUniversal,
                        x.RandomGoodie,
                        x.FreeXp,
                        x.Credits,
                        x.Items,
                    ],
                    U = [S, P, k, T, N, M, L, O, H],
                    G = 3e3,
                    W = 1e3,
                    q = 500,
                    z = 200,
                    $ = 350,
                    j = 0,
                    Z = 350,
                    V = {
                        cardTooltip: R.strings.play_streak.window.playStreakRewards.calendar.card.tooltip,
                        recoveryMessage: R.strings.play_streak.window.playStreakRewards.recoveryMessage.tooltip,
                    },
                    X = {
                        freezed: !1,
                        withStack: !1,
                        type: f.r.Growing,
                        line: { delay: 0, duration: 1500 },
                        delta: { delay: 0, duration: 2e3 },
                    };
                var Y = a(729);
                let K, J, ee, te, ae, oe;
                (!(function (e) {
                    ((e.left = 'left'), (e.right = 'right'));
                })(K || (K = {})),
                    (function (e) {
                        e[(e.mediaMedium = 860)] = 'mediaMedium';
                    })(J || (J = {})),
                    (function (e) {
                        ((e[(e.small = 1280)] = 'small'),
                            (e[(e.mediaSmall = 1366)] = 'mediaSmall'),
                            (e[(e.mediaMedium = 1600)] = 'mediaMedium'),
                            (e[(e.mediaLarge = 1920)] = 'mediaLarge'));
                    })(ee || (ee = {})),
                    (function (e) {
                        ((e[(e.small = 15)] = 'small'),
                            (e[(e.mediaSmall = 15)] = 'mediaSmall'),
                            (e[(e.mediaMedium = 24)] = 'mediaMedium'),
                            (e[(e.mediaLarge = 32)] = 'mediaLarge'));
                    })(te || (te = {})),
                    (function (e) {
                        ((e.rare = 'streak_periodic_rent'),
                            (e.weekly = 'weekly'),
                            (e.monthly = 'monthly'),
                            (e.final_rewards = 'streak_final_rewards'));
                    })(ae || (ae = {})),
                    (function (e) {
                        ((e.Init = 'INIT'),
                            (e.Start = 'START'),
                            (e.Progress = 'PROGRESS'),
                            (e.Complete = 'COMPLETE'),
                            (e.ChangeStatus = 'CHANGE_STATUS'));
                    })(oe || (oe = {})));
                const ne = (e) => {
                        let t = 0;
                        return (
                            e.forEach((e) => {
                                const a = e.day;
                                !isNaN(a) && (null === t || a > t) && (t = a);
                            }),
                            t
                        );
                    },
                    ie = (e) =>
                        e
                            .map((e) => {
                                var t, a;
                                return e.name === x.RandomEquipment || e.name === x.RandomGoodie
                                    ? {
                                          name: x.Items,
                                          item: e.name,
                                          label: e.label,
                                          image: (0, Y.ry)(e, A.h2.Big),
                                          value: e.value,
                                          valueType: A.$h.MULTI,
                                          tooltipArgs: (0, Y.pI)({
                                              tooltipId: e.tooltipId,
                                              contentId: R.views.lobby.daily.tooltips.RandomGoodieTooltip('resId'),
                                          }),
                                          vehCD: null != (t = null == e ? void 0 : e.vehCD) ? t : null,
                                      }
                                    : {
                                          name: e.name,
                                          label: e.label,
                                          image: (0, Y.ry)(e, A.h2.Big),
                                          value: e.value,
                                          valueType: (0, Y.p3)(e.name),
                                          tooltipArgs: (0, Y.pI)({ tooltipId: e.tooltipId }),
                                          vehCD: null != (a = null == e ? void 0 : e.vehCD) ? a : null,
                                          special: e.overlayType,
                                      };
                            })
                            .filter(Boolean),
                    se = (e, t, a) => {
                        const o = {};
                        (e.forEach((e) => {
                            e.tags &&
                                (e.tags.includes(ae.weekly) || e.tags.includes(ae.monthly)) &&
                                (e.day < t || (e.day <= t && a)) &&
                                e.rewards.forEach((e) => {
                                    const t = e.name === A.Rl.Items ? e.item || '' : e.name || '',
                                        a = e.value ? e.value.toString() : '0';
                                    t &&
                                        (o[t]
                                            ? (o[t].value = (parseInt(o[t].value, 10) + parseInt(a, 10)).toString())
                                            : (o[t] = Object.assign({}, e, {
                                                  item: e.item || '',
                                                  overlayType: e.overlayType || '',
                                                  value: a,
                                              })));
                                });
                        }),
                            Object.values(o).forEach((e) => {
                                (e.name === A.Rl.PremiumPlus &&
                                    parseInt(e.value, 10) > 3 &&
                                    ((e.name = A.Rl.Items), (e.item = A.Rl.PremiumUniversal)),
                                    e.name === x.RandomGoodie && ((e.name = A.Rl.Items), (e.item = x.RandomGoodie)),
                                    e.name === x.RandomEquipment &&
                                        ((e.name = A.Rl.Items), (e.item = x.RandomEquipment)));
                            }));
                        const n = (e) =>
                            e.name === A.E4.Items
                                ? e.item === A.Rl.PremiumUniversal
                                    ? Q.indexOf(A.E4.PremiumUniversal)
                                    : e.item === x.RandomEquipment
                                      ? Q.indexOf(x.RandomEquipment)
                                      : e.item === x.RandomGoodie
                                        ? Q.indexOf(x.RandomGoodie)
                                        : Q.indexOf(A.E4.Items)
                                : Q.indexOf(e.name);
                        return Object.values(o).sort((e, t) => {
                            const a = n(e),
                                o = n(t);
                            return a !== o
                                ? a - o
                                : e.name === A.E4.Items && t.name === A.E4.Items
                                  ? U.indexOf(e.item) - U.indexOf(t.item)
                                  : 0;
                        });
                    },
                    re = ['customizations', 'vehicles_rent', 'vehicles'],
                    ue = {
                        base: 'Card_base_c8',
                        baseInner: 'Card_baseInner_7c',
                        base__current: 'Card_base__current_ee',
                        base__animatingStart: 'Card_base__animatingStart_a8',
                        scaleReward: 'Card_scaleReward_01',
                        base__blocked: 'Card_base__blocked_48',
                        base__complete: 'Card_base__complete_ed',
                        base__animatingComplete: 'Card_base__animatingComplete_80',
                        base__locked: 'Card_base__locked_9a',
                        bg: 'Card_bg_50',
                        base__animatingProgress: 'Card_base__animatingProgress_cf',
                        base__hover: 'Card_base__hover_d3',
                        base__changeStatus: 'Card_base__changeStatus_22',
                        monthlyBg: 'Card_monthlyBg_cf',
                        hoverBg: 'Card_hoverBg_1b',
                        border: 'Card_border_b9',
                        animatedBorder: 'Card_animatedBorder_0e',
                        base__rare: 'Card_base__rare_bb',
                        base__weekly: 'Card_base__weekly_60',
                        blink: 'Card_blink_bd',
                        blinkBlocked: 'Card_blinkBlocked_09',
                        flareWrapper: 'Card_flareWrapper_42',
                        flare: 'Card_flare_bd',
                        base__animatingInit: 'Card_base__animatingInit_75',
                        circleGlow: 'Card_circleGlow_9c',
                        scaleCircle: 'Card_scaleCircle_01',
                        rewardLength: 'Card_rewardLength_7d',
                        glow: 'Card_glow_a6',
                        day: 'Card_day_c7',
                        regularIcon: 'Card_regularIcon_60',
                        temporaryIcon: 'Card_temporaryIcon_35',
                        infoIcon: 'Card_infoIcon_47',
                        check: 'Card_check_3b',
                        scaleCheck: 'Card_scaleCheck_6a',
                        disableBlink: 'Card_disableBlink_28',
                    };
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const de = ({
                        award: e,
                        streakLength: t,
                        dailyWin: a,
                        redemptionMaxDayCount: i,
                        redemptionDayCount: s,
                        isBlocked: r,
                        isAnimated: u,
                        setAnimated: l,
                        isShowBlocked: d,
                        setShowBlocked: m,
                    }) => {
                        const c = e.day,
                            p = e.rewards,
                            _ = e.tags,
                            g = (0, o.useMemo)(() => c < t || (c === t && a), [c, t, a]),
                            b = c < t,
                            v = c > t,
                            y = _ && _.includes(ae.rare),
                            F = _ && _.includes(ae.weekly),
                            f = _ && _.includes(ae.monthly),
                            x = c === t,
                            S = (0, o.useState)(!1),
                            P = S[0],
                            k = S[1],
                            T = (0, o.useState)(!1),
                            N = T[0],
                            M = T[1],
                            L = (0, o.useState)(!1),
                            O = L[0],
                            H = L[1],
                            Q = (0, o.useState)(!1),
                            U = Q[0],
                            X = Q[1],
                            Y = (0, o.useState)(!1),
                            K = Y[0],
                            J = Y[1],
                            ee = (0, o.useState)(!1),
                            te = ee[0],
                            ne = ee[1],
                            se = (0, w.K)(),
                            re = (0, w.K)(),
                            de = (e, t) => {
                                re.run(() => {
                                    ce(e);
                                }, t);
                            },
                            me = (0, o.useCallback)(() => {
                                (se.isRunning && se.clear(), re.isRunning && re.clear());
                            }, [se, re]);
                        (0, o.useEffect)(() => {
                            a && x && u && !d ? de(oe.Init, G) : a && u && d && s === i && de(oe.Init, W);
                        }, [a, u, x]);
                        const ce = (e) => {
                                switch ((me(), e)) {
                                    case oe.Init:
                                        return (M(!0), void de(oe.Start, q));
                                    case oe.Start:
                                        return (H(!0), void de(oe.Progress, z));
                                    case oe.Progress:
                                        return (
                                            X(!0),
                                            void (a && d && s === i
                                                ? (ne(!0), de(oe.ChangeStatus, Z))
                                                : de(oe.Complete, $))
                                        );
                                    case oe.ChangeStatus:
                                        return (ne(!1), m(!1), void de(oe.Complete, j));
                                    case oe.Complete:
                                        return (
                                            (0, C.G)(R.sounds.play_streak_reward_animation()),
                                            M(!1),
                                            X(!1),
                                            H(!1),
                                            J(!0),
                                            void l(!1)
                                        );
                                }
                            },
                            pe = (0, o.useCallback)(() => k(!0), []),
                            _e = (0, o.useCallback)(() => k(!1), []),
                            ge =
                                1 === p.length
                                    ? ie(p)[0]
                                    : ((e) => {
                                          var t, a, o, n;
                                          const i = e
                                              .sort((e, t) => {
                                                  var a, o, n;
                                                  return null !=
                                                      (a =
                                                          null == (o = e.item)
                                                              ? void 0
                                                              : o.localeCompare(null != (n = t.item) ? n : ''))
                                                      ? a
                                                      : 0;
                                              })
                                              .reduce((e, t) => {
                                                  var a, o;
                                                  return (
                                                      e +
                                                      (null != (a = t.item) ? a : '') +
                                                      (null != (o = t.overlayType) ? o : '')
                                                  );
                                              }, '');
                                          return [
                                              {
                                                  name: null != (t = null == (a = e[0]) ? void 0 : a.name) ? t : '',
                                                  image: `R.images.gui.maps.icons.playStreak.window.rewards.${i}`,
                                                  value: null != (o = null == (n = e[0]) ? void 0 : n.value) ? o : '1',
                                                  valueType: A.$h.MULTI,
                                                  tooltipArgs: {
                                                      contentId:
                                                          R.views.lobby.daily.tooltips.RandomRewardsTooltip('resId'),
                                                      args: { rewards: JSON.stringify(e) },
                                                  },
                                              },
                                          ];
                                      })(p),
                            Ee = (0, h.GS)().mediaSize,
                            Ce = Ee === h.cJ.Small || Ee === h.cJ.ExtraSmall || Ee === h.cJ.Medium,
                            be = E()(
                                ue.base,
                                x && ue.base__current,
                                b && ue.base__complete,
                                y && ue.base__rare,
                                (F || f) && ue.base__weekly,
                                d && ue.base__blocked,
                                P && ue.base__hover,
                                v && ue.base__locked,
                                te && ue.base__changeStatus,
                                N && ue.base__animatingInit,
                                O && ue.base__animatingStart,
                                U && ue.base__animatingProgress,
                                a && !d && (K || !u) && ue.base__animatingComplete,
                            );
                        return n().createElement(
                            'div',
                            { className: be, onMouseEnter: pe, onMouseLeave: _e },
                            n().createElement('div', { className: ue.bg }),
                            f && n().createElement('div', { className: ue.monthlyBg }),
                            x && n().createElement('div', { className: ue.animatedBg }),
                            n().createElement('div', { className: ue.hoverBg }),
                            n().createElement('div', { className: ue.border }),
                            n().createElement('div', { className: ue.animatedBorder }),
                            x &&
                                !d &&
                                n().createElement(
                                    'div',
                                    { className: ue.flareWrapper },
                                    n().createElement('div', { className: ue.flare }),
                                ),
                            n().createElement('div', { className: ue.day }, c),
                            g && n().createElement(I, { className: ue.check }),
                            !d && !v && x && n().createElement('div', { className: ue.glow }),
                            F &&
                                n().createElement(
                                    B.i,
                                    { header: V.cardTooltip.weekly.head(), body: V.cardTooltip.weekly.body() },
                                    n().createElement('div', { className: ue.regularIcon }),
                                ),
                            f &&
                                n().createElement(
                                    B.i,
                                    { header: V.cardTooltip.monthly.head(), body: V.cardTooltip.monthly.body() },
                                    n().createElement('div', { className: ue.regularIcon }),
                                ),
                            y &&
                                n().createElement(
                                    B.i,
                                    { header: V.cardTooltip.periodic.head(), body: V.cardTooltip.periodic.body() },
                                    n().createElement('div', { className: ue.temporaryIcon }),
                                ),
                            ge.name === A.E4.LootBoxToken &&
                                n().createElement(
                                    B.i,
                                    { body: V.cardTooltip.info.body() },
                                    n().createElement('div', { className: ue.infoIcon }),
                                ),
                            x && g && u && !r && n().createElement('div', { className: ue.circleGlow }),
                            n().createElement(
                                'div',
                                { className: ue.baseInner },
                                ge &&
                                    n().createElement(
                                        D.Q,
                                        le({ size: Ce ? A.h2.Small : A.h2.Big }, Array.isArray(ge) ? ge[0] : ge),
                                    ),
                            ),
                        );
                    },
                    me = 'Calendar_base_5e',
                    ce = 'Calendar_baseInner_2e',
                    pe = 'Calendar_calendar_fa',
                    _e = 'Calendar_card_9b',
                    ge = 'Calendar_pagination_c5',
                    Ee = 'Calendar_pagination__disabled_f4',
                    Ce = 'Calendar_pagination__next_fb',
                    be = 'Calendar_pagination__prev_f5';
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const ye = n().memo(
                    ({
                        streakLength: e,
                        calendarRewards: t,
                        countDays: a,
                        dailyWin: i,
                        isBlocked: s,
                        isFirstAppearance: r,
                        redemptionMaxDayCount: u,
                        redemptionDayCount: l,
                        isShowBlocked: d,
                        setShowBlocked: m,
                    }) => {
                        const c = (0, y.eI)(),
                            p = c.width,
                            _ = c.height,
                            g = (0, o.useMemo)(
                                () =>
                                    ((e, t) =>
                                        e > ee.mediaSmall && t <= J.mediaMedium
                                            ? te.mediaMedium
                                            : e <= ee.small
                                              ? te.small
                                              : e < ee.mediaSmall
                                                ? te.mediaSmall
                                                : e <= ee.mediaMedium
                                                  ? te.mediaMedium
                                                  : (ee.mediaLarge, te.mediaLarge))(p, _),
                                [p, _],
                            ),
                            b = (0, o.useState)(r),
                            A = b[0],
                            D = b[1],
                            B = (0, o.useState)(!1),
                            h = B[0],
                            w = B[1],
                            F = (0, o.useState)(e > 0 ? Math.ceil(e / g) : 1),
                            I = F[0],
                            f = F[1],
                            x = (0, o.useState)([]),
                            S = x[0],
                            P = x[1],
                            k = (0, o.useState)(K.right),
                            T = k[0],
                            N = k[1],
                            M = (0, o.useState)(!1),
                            L = M[0],
                            O = M[1];
                        (0, o.useEffect)(() => {
                            f(e > 0 ? Math.ceil(e / g) : 1);
                        }, [p]);
                        const H = (0, o.useMemo)(
                                () =>
                                    Array.from({ length: a }, (e, a) => {
                                        const o = a + 1,
                                            n = t.find((e) => e.day === o);
                                        return n || { day: o, rewards: [] };
                                    }),
                                [t, a],
                            ),
                            Q = I * g,
                            U = Q - g,
                            G = (0, o.useMemo)(() => H.slice(U, Q), [H, U, Q]),
                            W = Math.ceil(H.length / g),
                            q = (0, o.useCallback)(
                                (e) => {
                                    ((e === K.left && I > 1) || (e === K.right && I < W)) &&
                                        (0, C.G)(R.sounds.highlight());
                                },
                                [I, W],
                            ),
                            z = (0, o.useCallback)(() => {
                                !L &&
                                    I < W &&
                                    ((0, C.G)(R.sounds.play()),
                                    w(!0),
                                    O(!0),
                                    N(K.left),
                                    P(G),
                                    f(I + 1),
                                    (0, C.G)(R.sounds.play_streak_calendar_slide()));
                            }, [G, I, L, W]),
                            $ = (0, o.useCallback)(() => {
                                !L &&
                                    I > 1 &&
                                    ((0, C.G)(R.sounds.play()),
                                    w(!0),
                                    O(!0),
                                    N(K.right),
                                    P(G),
                                    f(I - 1),
                                    (0, C.G)(R.sounds.play_streak_calendar_slide()));
                            }, [G, I, L]),
                            j = (0, v.useTransition)(I, {
                                initial: { opacity: 1, transform: 'translateX(0%)' },
                                from: {
                                    opacity: 0,
                                    transform: T === K.right ? 'translateX(-100%)' : 'translateX(100%)',
                                },
                                enter: { opacity: 1, transform: 'translateX(0%)' },
                                leave: {
                                    opacity: 0,
                                    transform: T === K.right ? 'translateX(100%)' : 'translateX(-100%)',
                                },
                                config: { duration: 750 },
                                onRest: () => {
                                    (w(!1), O(!1));
                                },
                            }),
                            Z = {
                                streakLength: e,
                                dailyWin: i,
                                isBlocked: s,
                                isFirstAppearance: r,
                                redemptionMaxDayCount: u,
                                redemptionDayCount: l,
                                isAnimated: A,
                                setAnimated: D,
                                isShowBlocked: d,
                                setShowBlocked: m,
                            };
                        return n().createElement(
                            'div',
                            { className: me },
                            n().createElement('div', {
                                className: E()(ge, be, 1 === I && Ee),
                                onClick: $,
                                onMouseEnter: () => q(K.left),
                            }),
                            n().createElement(
                                'div',
                                { className: E()(h && pe) },
                                j((e, t) =>
                                    n().createElement(
                                        v.animated.div,
                                        {
                                            style: {
                                                position: t === I ? 'relative' : 'absolute',
                                                opacity: e.opacity,
                                                transform: e.transform,
                                            },
                                        },
                                        n().createElement(
                                            'div',
                                            { className: ce },
                                            t === I
                                                ? G.map((e) =>
                                                      n().createElement(
                                                          'div',
                                                          { key: e.day, className: _e },
                                                          n().createElement(de, ve({}, Z, { award: e })),
                                                      ),
                                                  )
                                                : S.map((e) =>
                                                      n().createElement(
                                                          'div',
                                                          { key: e.day, className: _e },
                                                          n().createElement(de, ve({}, Z, { award: e })),
                                                      ),
                                                  ),
                                        ),
                                    ),
                                ),
                            ),
                            n().createElement('div', {
                                className: E()(ge, Ce, I === W && Ee),
                                onClick: z,
                                onMouseEnter: () => q(K.right),
                            }),
                        );
                    },
                );
                var Ae = a(7613);
                const De = 'DisabledMessage_base_45',
                    Be = 'DisabledMessage_content_a8',
                    he = 'DisabledMessage_icon_e8',
                    we = R.strings.play_streak.window.playStreakRewards.disabledMessage.title,
                    Fe = n().memo(() =>
                        n().createElement(
                            'div',
                            { className: De },
                            n().createElement(
                                'div',
                                { className: Be },
                                n().createElement('div', { className: he }),
                                n().createElement(Ae.ZP, {
                                    text: we.head(),
                                    variant: 'paragraph-P16',
                                    color: 'WHITE_SPANISH',
                                }),
                                n().createElement(Ae.ZP, {
                                    text: we.body(),
                                    variant: 'paragraph-P16',
                                    color: 'WHITE_SPANISH',
                                }),
                            ),
                        ),
                    );
                var Ie = a(3649);
                const fe = 'Rewards_base_26',
                    xe = 'Rewards_base__vertical_9f',
                    Se = 'Rewards_reward_7b',
                    Pe = 'Rewards_reward__vertical_c6';
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Re = n().memo(
                        ({
                            data: e,
                            size: t = A.h2.Big,
                            isVertical: a = !1,
                            count: i,
                            classMix: s,
                            rewardItemClassMix: r,
                            boxRewardTooltip: u,
                            boxRewardValue: l,
                        }) => {
                            const d = (0, o.useMemo)(
                                    () =>
                                        i && i < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [i, e.length, t],
                                ),
                                m =
                                    l ||
                                    (0, Ie.uF)(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (i || 0),
                                    }),
                                c = E()(fe, a && xe, s),
                                p = E()(Se, a && Pe, r);
                            return n().createElement(
                                'div',
                                { className: c },
                                d
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          e
                                              .slice(0, i)
                                              .map((e, a) =>
                                                  n().createElement(
                                                      'div',
                                                      { key: a, className: p },
                                                      n().createElement(D.Q, ke({ size: t }, e)),
                                                  ),
                                              ),
                                          n().createElement(
                                              'div',
                                              { className: p },
                                              n().createElement(D.Q, {
                                                  name: 'more',
                                                  image: d,
                                                  size: t,
                                                  value: m,
                                                  tooltipArgs: u,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          n().createElement(
                                              'div',
                                              { key: a, className: p },
                                              n().createElement(D.Q, ke({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Te = 'PeriodicRewards_base_16',
                    Ne = 'PeriodicRewards_base__blocked_57',
                    Me = 'PeriodicRewards_baseInner_55',
                    Le = 'PeriodicRewards_head_22',
                    Oe = 'PeriodicRewards_headInner_41',
                    He = 'PeriodicRewards_body_bb',
                    Qe = 'PeriodicRewards_glow_2a',
                    Ue = 'PeriodicRewards_line_79',
                    Ge = 'PeriodicRewards_lineInner_27',
                    We = 'PeriodicRewards_blur_27',
                    qe = 'PeriodicRewards_blur__active_06',
                    ze = 'PeriodicRewards_info_30',
                    $e = n().memo(
                        ({
                            dailyWin: e,
                            hasPeriodicTag: t,
                            periodicRewardsIsHovered: a,
                            rewards: i,
                            isShowBlocked: s,
                        }) => {
                            const r = R.strings.play_streak.window.playStreakRewards.periodicRewards,
                                u = s ? r.tooltip.blocked : r.tooltip,
                                l = E()(Te, { [Ne]: s }),
                                d = (0, o.useMemo)(
                                    () =>
                                        7 < i.length
                                            ? (0, Y.pI)(
                                                  {},
                                                  R.views.lobby.daily.tooltips.PeriodicRewardsTooltip('resId'),
                                              )
                                            : void 0,
                                    [i],
                                );
                            return n().createElement(
                                'div',
                                { className: l },
                                e && t && !s && n().createElement('div', { className: Qe }),
                                n().createElement(
                                    'div',
                                    { className: Ue },
                                    n().createElement('div', { className: Ge }),
                                ),
                                n().createElement('div', { className: E()(We, a && qe) }),
                                n().createElement(
                                    'div',
                                    { className: Me },
                                    n().createElement(
                                        'div',
                                        { className: Le },
                                        n().createElement(
                                            B.i,
                                            { header: u.head(), body: u.body() },
                                            n().createElement(
                                                'div',
                                                { className: Oe },
                                                n().createElement(Ae.ZP, {
                                                    text: r.head(),
                                                    variant: 'heading-H14',
                                                    color: 'WHITE_REAL',
                                                }),
                                                n().createElement('div', { className: ze }),
                                            ),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: He },
                                        n().createElement(Re, {
                                            data: ie(i),
                                            size: A.h2.Small,
                                            boxRewardTooltip: d,
                                            count: 7,
                                        }),
                                        0 === i.length &&
                                            n().createElement(Ae.ZP, {
                                                text: r.empty(),
                                                variant: 'paragraph-P12',
                                                color: 'PAR',
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    je = 'PlayStreak_base_ee',
                    Ze = 'PlayStreak_rewardProgression_df',
                    Ve = 'PlayStreak_base__blocked_d5',
                    Xe = 'PlayStreak_recoveryMessage_20',
                    Ye = 'PlayStreak_calendar_f2',
                    Ke = 'PlayStreak_periodicRewards_b4',
                    Je = {
                        base: 'PostProgression_base_71',
                        radialLines: 'PostProgression_radialLines_1f',
                        radialLines__blocked: 'PostProgression_radialLines__blocked_29',
                        list: 'PostProgression_list_ba',
                        list__blocked: 'PostProgression_list__blocked_2e',
                    },
                    et = 'PostProgressionHeader_base_d0',
                    tt = 'PostProgressionHeader_base__inner_f6',
                    at = 'PostProgressionHeader_title_27',
                    ot = 'PostProgressionHeader_content_99',
                    nt = 'PostProgressionHeader_recoveryInfo_4a',
                    it = 'PostProgressionHeader_icon_4c',
                    st = 'PostProgressionHeader_glow_a7',
                    rt = 'PostProgressionHeader_glow__blocked_33',
                    ut = 'PostProgressionHeader_dayText_3d',
                    lt = R.strings.play_streak.window.playStreakRewards.postProgression.content,
                    dt = R.strings.play_streak.window.playStreakRewards.recoveryMessage.head,
                    mt = n().memo(({ dailyWin: e, isBlocked: t, redemptionDayCount: a, redemptionMaxDayCount: o }) => {
                        const i = e ? o - a : o - a + 1,
                            s = t ? lt.blocked.head() : lt.head(),
                            r = t ? lt.blocked.body() : lt.body(),
                            u = (0, Ie.uF)(dt.days(), { day: i }),
                            l = (0, Ie.uF)(lt.blocked.body(), { redemptionMaxDayCount: o });
                        return n().createElement(
                            'div',
                            { className: et },
                            n().createElement('div', { className: E()(st, t && rt) }),
                            n().createElement(
                                'div',
                                { className: tt },
                                n().createElement(
                                    'div',
                                    { className: at },
                                    n().createElement(Ae.ZP, { text: s }),
                                    t &&
                                        n().createElement(
                                            B.i,
                                            { header: `${lt.blocked.head()} ${u}`, body: l },
                                            n().createElement(
                                                'div',
                                                { className: nt },
                                                n().createElement('div', { className: it }),
                                                n().createElement(Ae.ZP, {
                                                    text: dt.days(),
                                                    className: ut,
                                                    format: { binding: { day: i } },
                                                }),
                                            ),
                                        ),
                                ),
                                n().createElement(Ae.ZP, {
                                    text: r,
                                    format: { binding: { redemptionMaxDayCount: o }, classMix: ot },
                                }),
                            ),
                        );
                    });
                var ct = a(4963),
                    pt = a(5036),
                    _t = a(6358);
                const gt = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Et = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'classNames',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                let bt;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(bt || (bt = {}));
                const vt = (0, o.memo)((e) => {
                    let t = e.label,
                        a = e.isVisibleLabel,
                        i = void 0 !== a && a,
                        s = e.autofocus,
                        r = void 0 !== s && s,
                        u = e.soundHover,
                        l = void 0 === u ? 'highlight' : u,
                        d = e.soundClick,
                        m = void 0 === d ? 'play' : d,
                        c = e.size,
                        p = void 0 === c ? bt.NORMAL : c,
                        _ = e.classNames,
                        g = e.onClick,
                        b = e.onMouseEnter,
                        v = e.onMouseLeave,
                        y = e.onMouseDown,
                        A = e.onMouseUp,
                        D = e.onFocus,
                        B = e.onBlur,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                o,
                                n = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, Et);
                    const w = (0, o.useState)(!1),
                        F = w[0],
                        I = w[1],
                        f = (0, o.useState)(!1),
                        x = f[0],
                        S = f[1],
                        P = (0, o.useState)(r),
                        k = P[0],
                        R = P[1],
                        T = (0, o.useRef)(null),
                        N = (0, o.useCallback)(() => {
                            T.current && (T.current.focus(), R(!0));
                        }, []),
                        M = (0, o.useCallback)(
                            (e) => {
                                k && null !== T.current && !T.current.contains(e.target) && R(!1);
                            },
                            [k],
                        );
                    ((0, o.useEffect)(
                        () => (
                            document.addEventListener('mousedown', M),
                            () => {
                                document.removeEventListener('mousedown', M);
                            }
                        ),
                        [M],
                    ),
                        (0, o.useEffect)(() => {
                            R(r);
                        }, [r]));
                    const L = (0, o.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                (I(!0), y && y(e), m && (0, C.G)(m), r && N());
                            },
                            [r, y, N, m],
                        ),
                        H = (0, o.useCallback)(
                            (e) => {
                                (I(!1), A && A(e));
                            },
                            [A],
                        ),
                        Q = (0, o.useCallback)(
                            (e) => {
                                (b && b(e), l && (0, C.G)(l), S(!0));
                            },
                            [b, l],
                        ),
                        U = (0, o.useCallback)(
                            (e) => {
                                (I(!1), S(!1), v && v(e));
                            },
                            [v],
                        ),
                        G = (0, o.useCallback)(
                            (e) => {
                                (R(!0), D && D(e));
                            },
                            [D],
                        ),
                        W = (0, o.useCallback)(
                            (e) => {
                                (R(!1), B && B(e));
                            },
                            [B],
                        ),
                        q = E()(
                            gt.base,
                            i && gt.base__visibleLabel,
                            F && gt.base__mouseDown,
                            x && gt.base__hovered,
                            k && gt.base__focused,
                            null == _ ? void 0 : _.base,
                        ),
                        z = E()(gt.icon, gt[`icon__${p}`], null == _ ? void 0 : _.icon),
                        $ = E()(gt.label, null == _ ? void 0 : _.label);
                    return n().createElement(
                        'div',
                        Ct(
                            {
                                ref: T,
                                className: q,
                                onClick: L,
                                onMouseEnter: Q,
                                onMouseLeave: U,
                                onMouseDown: O,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: W,
                            },
                            h,
                        ),
                        n().createElement('div', { className: z }),
                        n().createElement('div', { className: $ }, t),
                    );
                });
                var yt = a(3415);
                const At = 'PostProgressionStyle_base_05',
                    Dt = 'PostProgressionStyle_preview_b1',
                    Bt = 'PostProgressionStyle_image_4d',
                    ht = 'PostProgressionStyle_vehicleName_41',
                    wt = R.strings.play_streak.window.playStreakRewards.rewardProgression,
                    Ft = ({ vehicleName: e, icon: t, tooltipArgs: a, styleCD: i, handleStylePreview: s }) => {
                        const r = { backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.s600x450.${t})` },
                            u = (0, o.useCallback)(() => {
                                i && s(i);
                            }, [s, i]);
                        return n().createElement(
                            'div',
                            { className: At },
                            n().createElement(
                                yt.l,
                                { tooltipArgs: a },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Bt, style: r }),
                                    n().createElement('div', { className: ht }, e),
                                    n().createElement(
                                        'div',
                                        { className: Dt },
                                        n().createElement(vt, { onClick: u, label: wt.preview() }),
                                    ),
                                ),
                            ),
                        );
                    };
                var It = a(3457),
                    ft = a(2106);
                const xt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    St = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Pt(e) {
                    let t = '';
                    for (let a = St.length - 1; a >= 0; a--) for (; e >= St[a]; ) ((t += xt[a]), (e -= St[a]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const kt = 'PostProgressionVehicle_base_ea',
                    Rt = 'PostProgressionVehicle_preview_ca',
                    Tt = 'PostProgressionVehicle_image_56',
                    Nt = 'PostProgressionVehicle_vehicleName_d1',
                    Mt = 'PostProgressionVehicle_nation_98',
                    Lt = 'PostProgressionVehicle_type_c9',
                    Ot = R.strings.play_streak.window.playStreakRewards.postProgression.bestRewards,
                    Ht = ({
                        vehicleName: e,
                        vehicleNation: t,
                        vehCD: a,
                        vehicleLvl: i,
                        vehicleType: s,
                        isElite: r,
                        techName: u,
                        tooltipArgs: l,
                        handleVehicleHangar: d,
                    }) => {
                        const m = { backgroundImage: `url(R.images.gui.maps.shop.vehicles.c_600x450.${u})` },
                            c = { backgroundImage: `url(R.images.gui.maps.icons.filters.nations.${t})` },
                            p = {
                                backgroundImage: `url(R.images.gui.maps.icons.vehicleTypes.large.${(0, Ie.BN)(s)}${r ? '_elite' : ''})`,
                            },
                            _ = (0, o.useCallback)(() => {
                                d(a);
                            }, [d, a]);
                        return n().createElement(
                            'div',
                            { className: kt },
                            n().createElement(
                                yt.l,
                                { tooltipArgs: l },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Tt, style: m }),
                                    n().createElement(
                                        'div',
                                        { className: Nt },
                                        n().createElement('div', { className: Mt, style: c }),
                                        Pt(i),
                                        n().createElement('div', { className: Lt, style: p }),
                                        e,
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Rt },
                                        n().createElement(
                                            It.u5,
                                            { type: ft.L.ghost, size: ft.q.medium, onClick: _ },
                                            n().createElement(Ae.ZP, { text: Ot.preview() }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Qt = {
                        base: 'PostProgressionList_base_5a',
                        heading: 'PostProgressionList_heading_c2',
                        title: 'PostProgressionList_title_51',
                        divider: 'PostProgressionList_divider_b4',
                        divider__revers: 'PostProgressionList_divider__revers_02',
                        horizontal: 'PostProgressionList_horizontal_46',
                        horizontalContent: 'PostProgressionList_horizontalContent_f9',
                        horizontalItem: 'PostProgressionList_horizontalItem_d0',
                        wrapper__centered: 'PostProgressionList_wrapper__centered_ab',
                        wrapper__left: 'PostProgressionList_wrapper__left_bc',
                        wrapper__center: 'PostProgressionList_wrapper__center_1d',
                        wrapper__right: 'PostProgressionList_wrapper__right_aa',
                    };
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                const Gt = R.strings.play_streak.window.playStreakRewards.postProgression.bestRewards,
                    Wt = n().memo(({ vehicles: e, handleVehicleHangar: t, handleStylePreview: a }) => {
                        const i = (0, o.useState)(!1),
                            s = i[0],
                            r = i[1],
                            u = (0, o.useState)(!0),
                            l = u[0],
                            d = u[1],
                            m = (0, o.useState)(!0),
                            c = m[0],
                            p = m[1],
                            _ = (() => {
                                const e = (0, pt.useHorizontalScrollApi)(),
                                    t = (0, o.useCallback)(
                                        (t) => {
                                            e.contentRef.current &&
                                                (0, _t.GN)(e.contentRef.current) &&
                                                e.handleMouseWheel(t);
                                        },
                                        [e],
                                    );
                                return Object.assign({}, e, { handleMouseWheel: t });
                            })();
                        (0, o.useEffect)(() => {
                            const e = _.contentRef.current;
                            e && p((0, _t.GN)(e));
                        }, [_.contentRef]);
                        const g = (0, o.useCallback)(
                                (e) => {
                                    const t = e.value.scrollPosition,
                                        a = _.contentRef.current,
                                        o = _.wrapperRef.current;
                                    if (!a || !o) return;
                                    const n = a.getBoundingClientRect().width,
                                        i = o.getBoundingClientRect().width;
                                    if (n < i) return;
                                    const s = n - i;
                                    (r(t > 0), d(t < s));
                                },
                                [_.contentRef, _.wrapperRef],
                            ),
                            C = (0, o.useCallback)(() => {
                                const e = _.contentRef.current;
                                e && p((0, _t.GN)(e));
                            }, [_.contentRef]);
                        (0, o.useEffect)(() => {
                            const e = _.events;
                            if (e)
                                return (
                                    e.on('change', g),
                                    e.on('resizeHandled', C),
                                    window.addEventListener('resize', C),
                                    () => {
                                        (e.off('change', g),
                                            e.off('resizeHandled', C),
                                            window.removeEventListener('resize', C));
                                    }
                                );
                        }, [_, g, C]);
                        const b = E()(
                            Qt.wrapper,
                            !c && Qt.wrapper__centered,
                            s && !l && Qt.wrapper__left,
                            l && !s && Qt.wrapper__right,
                            s && l && Qt.wrapper__center,
                        );
                        return n().createElement(
                            'div',
                            { className: Qt.base },
                            n().createElement(
                                'div',
                                { className: Qt.heading },
                                n().createElement('div', { className: Qt.divider }),
                                n().createElement(
                                    'div',
                                    { className: Qt.title },
                                    n().createElement(Ae.ZP, { text: Gt.head() }),
                                ),
                                n().createElement('div', { className: E()(Qt.divider, Qt.divider__revers) }),
                            ),
                            n().createElement(
                                'div',
                                { className: Qt.horizontal },
                                n().createElement(
                                    ct.X.Horizontal.Area.Default,
                                    { api: _, classNames: { content: Qt.horizontalContent, wrapper: b } },
                                    e.map((e, o) =>
                                        n().createElement(
                                            'div',
                                            { key: o, className: Qt.horizontalItem },
                                            e.name === A.E4.StyleProgress
                                                ? n().createElement(Ft, Ut({}, e, { handleStylePreview: a }))
                                                : n().createElement(Ht, Ut({}, e, { handleVehicleHangar: t })),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    qt = n().memo(
                        ({
                            dailyWin: e,
                            isBlocked: t,
                            redemptionDayCount: a,
                            redemptionMaxDayCount: o,
                            handleVehicleHangar: i,
                            handleStylePreview: s,
                            vehicles: r,
                        }) =>
                            n().createElement(
                                'div',
                                { className: E()(Je.base, t && Je.base__blocked) },
                                n().createElement('div', {
                                    className: E()(Je.radialLines, t && Je.radialLines__blocked),
                                }),
                                n().createElement(mt, {
                                    dailyWin: e,
                                    isBlocked: t,
                                    redemptionDayCount: a,
                                    redemptionMaxDayCount: o,
                                }),
                                n().createElement(
                                    'div',
                                    { className: E()(Je.list, t && Je.list__blocked) },
                                    n().createElement(Wt, {
                                        vehicles: r,
                                        handleVehicleHangar: i,
                                        handleStylePreview: s,
                                    }),
                                ),
                            ),
                    ),
                    zt = 'RecoveryMessage_base_b0',
                    $t = 'RecoveryMessage_bg_f9',
                    jt = 'RecoveryMessage_base__animatingStart_1c',
                    Zt = 'RecoveryMessage_base__blocked_cf',
                    Vt = 'RecoveryMessage_base__complete_5a',
                    Xt = 'RecoveryMessage_inner_ea',
                    Yt = 'RecoveryMessage_content_19',
                    Kt = 'RecoveryMessage_check_b9',
                    Jt = 'RecoveryMessage_icon_aa',
                    ea = 'RecoveryMessage_dayText_f3',
                    ta = ({ dailyWin: e, isShowBlocked: t, redemptionDayCount: a, redemptionMaxDayCount: i }) => {
                        const s = e ? i - a : i - a + 1,
                            r = R.strings.play_streak.window.playStreakRewards.recoveryMessage.head,
                            u = (0, Ie.uF)(V.recoveryMessage.body(), { redemptionMaxDayCount: i }),
                            l = (0, o.useState)(!1),
                            d = l[0],
                            m = l[1],
                            c = (0, w.K)(),
                            p = (0, w.K)(),
                            _ = (e, t) => {
                                p.run(() => {
                                    C(e);
                                }, t);
                            },
                            g = (0, o.useCallback)(() => {
                                (c.isRunning && c.clear(), p.isRunning && p.clear());
                            }, [c, p]);
                        (0, o.useEffect)(() => {
                            e && t && a === i && _(oe.Init, W);
                        }, [t, a]);
                        const C = (e) => {
                                switch ((g(), e)) {
                                    case oe.Init:
                                        return void _(oe.Start, q);
                                    case oe.Start:
                                        return (m(!0), void _(oe.Progress, z));
                                    case oe.Progress:
                                        return void _(oe.Complete, $);
                                    case oe.Complete:
                                        return void m(!1);
                                }
                            },
                            b = E()(zt, t && Zt, !t && Vt, d && jt);
                        return n().createElement(
                            'div',
                            { className: b },
                            n().createElement('div', { className: $t }),
                            n().createElement(
                                'div',
                                { className: Xt },
                                n().createElement(
                                    B.i,
                                    { header: V.recoveryMessage.head(), body: u },
                                    n().createElement(
                                        'div',
                                        { className: Yt },
                                        n().createElement(Ae.ZP, {
                                            text: t ? r.disable() : r.complete(),
                                            variant: 'heading-H15',
                                            color: 'WHITE_REAL',
                                        }),
                                        t && n().createElement('div', { className: Jt }),
                                        !t && n().createElement(I, { className: Kt }),
                                        t &&
                                            n().createElement(Ae.ZP, {
                                                text: r.days(),
                                                className: ea,
                                                format: { binding: { day: s } },
                                            }),
                                    ),
                                ),
                            ),
                        );
                    };
                var aa = a(1975),
                    oa = a(3138);
                const na = (e, t) => {
                        let a = 0,
                            o = 1 / 0;
                        for (let n = 0; n < t.length; n++) {
                            const i = Math.abs(e - t[n].day);
                            i < o && t[n].day > e && ((o = i), (a = n));
                        }
                        return { award: t[a], daysLeft: o === 1 / 0 ? 0 : o };
                    },
                    ia = (e, t) => t.filter((t) => t.day <= e && 0 !== t.day).length,
                    sa = 'RewardProgessionAward_base_a8',
                    ra = 'RewardProgessionAward_card_9a',
                    ua = 'RewardProgessionAward_preview_d6',
                    la = 'RewardProgessionAward_preview__hangar_08',
                    da = 'RewardProgessionAward_image_b6';
                function ma() {
                    return (
                        (ma =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
                                }
                                return e;
                            }),
                        ma.apply(this, arguments)
                    );
                }
                const ca = R.strings.play_streak.window.playStreakRewards.rewardProgression,
                    pa = n().memo(({ isHave: e, rewards: t, handleVehiclePreview: a, handleVehicleHangar: i }) => {
                        const s = (0, o.useCallback)(
                            (t) => () => {
                                const o = t.name && ['vehicles_rent'].includes(t.name);
                                return (e ? o && t.vehCD && i(t.vehCD) : o && t.vehCD && a(t.vehCD), !1);
                            },
                            [a, i, e],
                        );
                        return n().createElement(
                            'div',
                            { className: sa },
                            ie(t)
                                .slice(0, 1)
                                .map((t, a) =>
                                    n().createElement(
                                        'div',
                                        { key: a, className: ra },
                                        n().createElement(
                                            yt.l,
                                            { tooltipArgs: t.tooltipArgs },
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement(
                                                    D.Q,
                                                    ma({ size: A.h2.Small }, t, { classNames: { image: da } }),
                                                ),
                                                ((e) => e.name && re.includes(e.name))(t) &&
                                                    n().createElement(
                                                        'div',
                                                        { className: E()(ua, e && la) },
                                                        e
                                                            ? n().createElement(
                                                                  It.u5,
                                                                  { type: ft.L.ghost, size: ft.q.small, onClick: s(t) },
                                                                  n().createElement(Ae.ZP, { text: ca.hangar() }),
                                                              )
                                                            : n().createElement(vt, {
                                                                  label: ca.preview(),
                                                                  onClick: s(t),
                                                                  soundHover: 'highlight',
                                                                  soundClick: 'play',
                                                                  isVisibleLabel: !0,
                                                              }),
                                                    ),
                                            ),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    _a = {
                        base: 'RewardProgression_base_2f',
                        bg: 'RewardProgression_bg_9c',
                        base__animatingProgress: 'RewardProgression_base__animatingProgress_82',
                        base__complete: 'RewardProgression_base__complete_2f',
                        base__animatingComplete: 'RewardProgression_base__animatingComplete_a3',
                        base__disabled: 'RewardProgression_base__disabled_bc',
                        baseInner: 'RewardProgression_baseInner_3f',
                        lightContainer: 'RewardProgression_lightContainer_63',
                        light: 'RewardProgression_light_87',
                        base__animatingStart: 'RewardProgression_base__animatingStart_0f',
                        row: 'RewardProgression_row_e0',
                        content: 'RewardProgression_content_cd',
                        contentHead: 'RewardProgression_contentHead_d7',
                        contentBody: 'RewardProgression_contentBody_f6',
                        text: 'RewardProgression_text_18',
                        countDays: 'RewardProgression_countDays_8d',
                        base__completeAll: 'RewardProgression_base__completeAll_1d',
                        limitDay: 'RewardProgression_limitDay_13',
                        progressBar: 'RewardProgression_progressBar_e0',
                        marker: 'RewardProgression_marker_8f',
                        award: 'RewardProgression_award_7c',
                        marker__prev: 'RewardProgression_marker__prev_de',
                        day: 'RewardProgression_day_10',
                        marker__complete: 'RewardProgression_marker__complete_53',
                    },
                    ga = R.strings.play_streak,
                    Ea = ({
                        streakLength: e,
                        dailyWin: t,
                        isFirstAppearance: a,
                        countDays: i,
                        rewards: s,
                        isShowBlocked: r,
                        handleVehiclePreview: u,
                        handleVehicleHangar: l,
                    }) => {
                        const d = t ? e : e - 1,
                            m = (0, o.useRef)(null),
                            c = n().useRef([]),
                            p = (0, o.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const a = [...t, { day: 0, rewards: [] }].sort((e, t) => e.day - t.day);
                                        return { keyAwards: a, collectedRewards: ia(e, a), nextAward: na(e, a) };
                                    })(d, s),
                                [d, s],
                            ),
                            _ = p.keyAwards,
                            g = p.collectedRewards,
                            b = String(_.length - 1),
                            v = _.findIndex((e) => e.day === d),
                            y = (0, o.useState)(0),
                            A = y[0],
                            D = y[1],
                            B = (0, o.useState)(!1),
                            h = B[0],
                            F = B[1],
                            I = (0, o.useState)(!1),
                            f = I[0],
                            x = I[1],
                            S = (0, o.useState)(!1),
                            P = S[0],
                            k = S[1],
                            T = (0, o.useState)(!1),
                            N = T[0],
                            M = T[1],
                            L = (0, w.K)(),
                            O = (0, w.K)(),
                            H = (e, t) => {
                                O.run(() => {
                                    U(e);
                                }, t);
                            },
                            Q = (0, o.useCallback)(() => {
                                (L.isRunning && L.clear(), O.isRunning && O.clear());
                            }, [L, O]);
                        (0, o.useEffect)(() => {
                            !t || r || v <= 0 || H(a ? oe.Init : oe.Complete, a ? G : j);
                        }, [t, v]);
                        const U = (e) => {
                            switch ((Q(), e)) {
                                case oe.Init:
                                    return (F(!0), void H(oe.Start, q));
                                case oe.Start:
                                    return (x(!0), void H(oe.Progress, z));
                                case oe.Progress:
                                    return (k(!0), void H(oe.Complete, z));
                                case oe.ChangeStatus:
                                    return void H(oe.Complete, j);
                                case oe.Complete:
                                    return (
                                        (0, C.G)(R.sounds.play_streak_reward_animation()),
                                        F(!1),
                                        k(!1),
                                        x(!1),
                                        void M(!0)
                                    );
                            }
                        };
                        (0, o.useEffect)(() => {
                            if (m.current && -1 !== v) {
                                const e = c.current[v];
                                if (e) {
                                    const t = e.getBoundingClientRect().width,
                                        a = m.current.getBoundingClientRect().width,
                                        o = m.current.getBoundingClientRect().left,
                                        n = e.getBoundingClientRect().left - o + t - a / 2;
                                    D(oa.O.view.pxToRem(n));
                                }
                            }
                        }, [v]);
                        const W = E()(
                                _a.base,
                                h && _a.base__animatingInit,
                                f && _a.base__animatingStart,
                                P && _a.base__animatingProgress,
                                N && _a.base__animatingComplete,
                                g === s.length && _a.base__complete,
                                e >= i && t && _a.base__completeAll,
                                r && _a.base__disabled,
                            ),
                            $ = ((e, t, a) => {
                                for (let o = 0; o < a.length - 1; o++) {
                                    const n = a[o].day,
                                        i = a[o + 1].day;
                                    if (e <= i) {
                                        const s = i - n,
                                            r = e - n;
                                        return Math.round((r / s) * (t / (a.length - 1)) + o * (t / (a.length - 1)));
                                    }
                                }
                                return t;
                            })(d, i, _),
                            Z = ia(d, _),
                            V = (0, o.useMemo)(() => (v < 0 || N ? Z : Math.max(0, Z - 1)), [N, Z, v]);
                        return n().createElement(
                            'div',
                            { className: W, ref: m },
                            n().createElement('div', { className: _a.bg }),
                            v > 0 &&
                                n().createElement(
                                    'div',
                                    { className: _a.lightContainer },
                                    n().createElement('div', {
                                        className: _a.light,
                                        style: { transform: `translateX(${A}rem)` },
                                    }),
                                ),
                            n().createElement(
                                'div',
                                { className: _a.baseInner },
                                n().createElement(
                                    'div',
                                    { className: _a.row },
                                    n().createElement(
                                        'div',
                                        { className: _a.content },
                                        n().createElement(
                                            'div',
                                            { className: _a.contentHead },
                                            n().createElement(Ae.ZP, {
                                                text: ga.window.playStreakRewards.rewardProgression.head(),
                                                variant: 'paragraph-P18',
                                                color: 'WHITE_REAL',
                                            }),
                                            n().createElement(Ae.ZP, {
                                                text: String(V),
                                                variant: 'paragraph-P18',
                                                className: _a.countDays,
                                            }),
                                            n().createElement(Ae.ZP, {
                                                text: ga.window.playStreakRewards.progressionLimit.body(),
                                                className: _a.limitDay,
                                                format: { binding: { maxDay: b } },
                                            }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: _a.contentBody },
                                            n().createElement(Ae.ZP, {
                                                text: ga.window.playStreakRewards.rewardProgression.body(),
                                                className: _a.text,
                                            }),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: _a.progressBar },
                                        n().createElement(aa.ko, {
                                            deltaFrom: t && a ? $ - 1 : $,
                                            value: $,
                                            maxValue: i,
                                            disabled: r,
                                            animationSettings: X,
                                        }),
                                        _.map((e, t) => {
                                            const a = (t / (_.length - 1)) * 100,
                                                o = E()(
                                                    _a.marker,
                                                    e.day < d && _a.marker__prev,
                                                    e.day === d && _a.marker__complete,
                                                );
                                            return n().createElement(
                                                'div',
                                                {
                                                    key: e.day,
                                                    className: o,
                                                    style: { left: `${a}%` },
                                                    ref: (e) => (c.current[t] = e),
                                                },
                                                n().createElement(Ae.ZP, {
                                                    text: String(e.day),
                                                    variant: 'paragraph-P12',
                                                    className: _a.day,
                                                }),
                                                n().createElement(
                                                    'div',
                                                    { className: _a.award },
                                                    n().createElement(pa, {
                                                        isHave: e.day <= d,
                                                        rewards: e.rewards,
                                                        handleVehiclePreview: u,
                                                        handleVehicleHangar: l,
                                                    }),
                                                ),
                                            );
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ca = (0, b.Pi)(() => {
                        const e = _(),
                            t = e.model,
                            a = e.controls,
                            i = t.root.get(),
                            s = i.streakLength,
                            r = i.dailyWin,
                            u = i.isFirstAppearance,
                            l = i.isFirstAppearanceRedemptionDay,
                            d = i.isLastDayRedemption,
                            m = i.isBlocked,
                            c = i.redemptionDayCount,
                            p = i.redemptionMaxDayCount,
                            g = i.isPaused,
                            b = l || u || d,
                            y = d || m,
                            D = r || y ? s : s + 1,
                            B = r ? p - c : p - c + 1;
                        if (g) return n().createElement(Fe, null);
                        const h = t.computes.getPlayStreakRewardsCalendar(),
                            w = ((e, t, a) => {
                                const o = ne(e),
                                    n = e.filter((e) => e.tags && e.tags.includes(ae.rare)),
                                    i = e
                                        .filter((e) => e.tags && e.tags.includes(ae.final_rewards))
                                        .map((e) =>
                                            e.rewards.map((e) => {
                                                var t;
                                                return {
                                                    vehicleName: e.label ? e.label : '',
                                                    vehicleNation: e.nation ? e.nation : '',
                                                    vehicleLvl: e.level ? e.level : 0,
                                                    vehCD: e.vehCD ? e.vehCD : 0,
                                                    vehicleType: e.vehType ? e.vehType : '',
                                                    isElite: !!e.isElite && e.isElite,
                                                    icon: e.icon ? e.icon : '',
                                                    techName: e.vehName ? e.vehName : '',
                                                    tooltipArgs: (0, Y.pI)({ tooltipId: e.tooltipId }),
                                                    name: e.name ? e.name : '',
                                                    label: e.label ? e.label : '',
                                                    styleCD: null != (t = e.styleCD) ? t : null,
                                                };
                                            }),
                                        )
                                        .flat();
                                return (
                                    i.sort((e, t) =>
                                        e.name === A.E4.StyleProgress ? -1 : t.name === A.E4.StyleProgress ? 1 : 0,
                                    ),
                                    {
                                        countDays: o,
                                        progressionRewards: n,
                                        periodicRewards: se(e, t, a),
                                        postProgressionRewards: i,
                                    }
                                );
                            })(h, D, r),
                            F = w.countDays,
                            I = w.progressionRewards,
                            f = w.periodicRewards,
                            x = w.postProgressionRewards,
                            S = ((e, t) => {
                                const a = e.find((e) => e.day === t);
                                if (!a) return !1;
                                const o = a.tags;
                                return (o && o.includes(ae.weekly)) || (o && o.includes(ae.monthly));
                            })(h, D),
                            P = D > F,
                            k = (0, o.useState)(!1),
                            T = k[0],
                            N = k[1],
                            M = (0, o.useState)(y),
                            L = M[0],
                            O = M[1];
                        (0, o.useEffect)(() => {
                            O(y);
                        }, [y]);
                        const H = (0, v.useSpring)({
                                transform: T ? 'translateY(0%)' : 'translateY(60%)',
                                config: { tension: 280 },
                            }),
                            Q = {
                                dailyWin: r,
                                isBlocked: y,
                                redemptionDayCount: B,
                                redemptionMaxDayCount: p,
                                handleVehicleHangar: a.vehicleHangar,
                                handleStylePreview: a.stylePreview,
                                vehicles: x,
                            },
                            U = {
                                streakLength: D,
                                isFirstAppearance: b,
                                countDays: F,
                                dailyWin: r,
                                isShowBlocked: L,
                                rewards: I,
                                handleVehiclePreview: a.vehiclePreview,
                                handleVehicleHangar: a.vehicleHangar,
                            },
                            G = {
                                streakLength: D,
                                redemptionDayCount: B,
                                redemptionMaxDayCount: p,
                                calendarRewards: h,
                                isBlocked: y,
                                dailyWin: r,
                                isFirstAppearance: b,
                                countDays: F,
                                isShowBlocked: L,
                                setShowBlocked: O,
                            },
                            W = {
                                dailyWin: r,
                                hasPeriodicTag: S,
                                rewards: f,
                                periodicRewardsIsHovered: T,
                                isShowBlocked: L,
                            },
                            q = { dailyWin: r, redemptionDayCount: B, redemptionMaxDayCount: p, isShowBlocked: L },
                            z = (0, o.useCallback)(
                                () => ((0, C.G)(R.sounds.researches_premium_panel_slide_in()), !L && N(!0)),
                                [L],
                            ),
                            $ = (0, o.useCallback)(
                                () => ((0, C.G)(R.sounds.researches_premium_panel_slide_out()), !L && N(!1)),
                                [L],
                            ),
                            j = E()(je, { [Ve]: y });
                        return n().createElement(
                            'div',
                            { className: j },
                            P
                                ? n().createElement(qt, Q)
                                : n().createElement(
                                      'div',
                                      null,
                                      n().createElement('div', { className: Ze }, n().createElement(Ea, U)),
                                      y && n().createElement('div', { className: Xe }, n().createElement(ta, q)),
                                      n().createElement('div', { className: Ye }, n().createElement(ye, G)),
                                  ),
                            n().createElement(
                                v.animated.div,
                                { className: Ke, style: H, onMouseEnter: z, onMouseLeave: $ },
                                n().createElement($e, W),
                            ),
                        );
                    }),
                    ba = (0, o.memo)(function (e) {
                        const t = (0, o.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return n().createElement(
                            p,
                            { options: t, mocks: s, mode: 'real' },
                            n().createElement(Ca, null),
                        );
                    });
            },
            9922: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => v });
                var o = a(6483),
                    n = a.n(o),
                    i = a(7613),
                    s = a(2056),
                    r = a(7727),
                    u = a(3403),
                    l = a(6179),
                    d = a.n(l);
                const m = 'RerollButton_base_7a',
                    c = 'RerollButton_base__disabled_2e',
                    p = 'RerollButton_iconWrapper_19',
                    _ = 'RerollButton_icon_62',
                    g = 'RerollButton_iconHover_e2',
                    E = 'RerollButton_iconDisabled_8f',
                    C = 'RerollButton_text_0b',
                    b = 'RerollButton_shine_75',
                    v = (0, u.Pi)(({ canReroll: e, onReroll: t, rerollPremium: a, className: o }) =>
                        d().createElement(
                            s.u,
                            {
                                ignoreMouseClick: !e,
                                contentId: R.views.lobby.daily.tooltips.RerollTooltip('resId'),
                                args: { rerollPremium: a },
                            },
                            d().createElement(
                                'div',
                                {
                                    className: n()(m, o, !e && c),
                                    onClick: e ? t : void 0,
                                    onMouseEnter: e ? () => (0, r.G)(R.sounds.highlight()) : void 0,
                                },
                                d().createElement(
                                    'div',
                                    { className: p },
                                    e
                                        ? d().createElement(
                                              d().Fragment,
                                              null,
                                              d().createElement('div', { className: _ }),
                                              d().createElement('div', { className: g }),
                                              d().createElement('div', { className: b }),
                                          )
                                        : d().createElement('div', { className: E }),
                                ),
                                d().createElement(i.ZP, {
                                    className: C,
                                    text: R.strings.quests.dailyQuests.body.reroll(),
                                }),
                            ),
                        ),
                    );
            },
            8975: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => H });
                var o = a(6483),
                    n = a.n(o),
                    i = a(6179),
                    s = a.n(i);
                const r = 'DailyQuestsTab_base_fd',
                    u = 'DailyQuestsTab_base__selected_83',
                    l = 'DailyQuestsTab_bg_ed',
                    d = 'DailyQuestsTab_hoverBg_a8',
                    m = 'DailyQuestsTab_selectedBg_25',
                    c = 'DailyQuestsTab_disabledBg_6c',
                    p = 'DailyQuestsTab_premBg_16',
                    _ = 'DailyQuestsTab_base__hover_d3',
                    g = 'DailyQuestsTab_base__completed_3f',
                    E = 'DailyQuestsTab_base__notEnabled_eb',
                    C = 'DailyQuestsTab_contentWrapper_5b',
                    b = 'DailyQuestsTab_base__unlock_34',
                    v = 'DailyQuestsTab_iconWrapper_da',
                    y = 'DailyQuestsTab_icon_40',
                    A = 'DailyQuestsTab_status_fe',
                    D = 'DailyQuestsTab_status__lock_ae',
                    B = 'DailyQuestsTab_status__alert_43',
                    h = 'DailyQuestsTab_status__check_15',
                    w = 'DailyQuestsTab_progress_2c',
                    F = 'DailyQuestsTab_current_8e',
                    I = 'DailyQuestsTab_separator_79',
                    f = 'DailyQuestsTab_rightBlockWrapper_22',
                    x = 'DailyQuestsTab_bubble_5f',
                    S = 'DailyQuestsTab_title_3d',
                    P = 'DailyQuestsTab_description_78',
                    k = 'DailyQuestsTab_bull_be';
                var T = a(7727),
                    N = a(7613),
                    M = a(122),
                    L = a(2344),
                    O = a(3509);
                const H = ({
                    tabIdx: e,
                    isEnabled: t,
                    isSelected: a,
                    isCompleted: o,
                    isPremium: H,
                    hasPremium: Q,
                    icon: U = 'win',
                    current: G,
                    total: W,
                    bubbleCounter: q,
                    title: z,
                    description: $,
                    onClick: j,
                }) => {
                    var Z;
                    const V = null != (Z = (0, L.D9)(Q)) ? Z : Q,
                        X = (0, i.useState)(!1),
                        Y = X[0],
                        K = X[1],
                        J = (0, i.useState)(!1),
                        ee = J[0],
                        te = J[1],
                        ae = (0, i.useState)(Q),
                        oe = ae[0],
                        ne = ae[1],
                        ie = H && !oe,
                        se = !t || ie,
                        re = !t || ie || o;
                    ((0, i.useEffect)(() => {
                        !V && Q && te(!0);
                    }, [V, Q]),
                        (0, i.useEffect)(() => {
                            if (ee)
                                return (
                                    ne(!1),
                                    (0, M.F)(() => {
                                        (te(!1), ne(!0));
                                    }, O.ji.unlockTabPremiumDuration)
                                );
                            ne(Q);
                        }, [ee, Q]));
                    const ue = (0, i.useCallback)(() => {
                            a || (T.$.playHighlight(), K(!0));
                        }, [a]),
                        le = (0, i.useCallback)(() => {
                            a || K(!1);
                        }, [a]),
                        de = (0, i.useCallback)(() => {
                            (T.$.playClick(), j(e), K(!1));
                        }, [j, e]);
                    return s().createElement(
                        'div',
                        {
                            className: n()(r, Y && _, a && u, t && o && g, !t && E, ee && b),
                            onMouseEnter: ue,
                            onMouseLeave: le,
                            onClick: de,
                        },
                        s().createElement('div', { className: l }),
                        s().createElement('div', { className: d }),
                        s().createElement('div', { className: m }),
                        H && s().createElement('div', { className: p }),
                        se && s().createElement('div', { className: c }),
                        s().createElement(
                            'div',
                            { className: C },
                            Boolean(q) && s().createElement(N.ZP, { className: x, text: q.toString() }),
                            s().createElement(
                                'div',
                                { className: v },
                                re
                                    ? s().createElement('div', { className: n()(A, ie && D, !t && B, o && h) })
                                    : s().createElement('div', {
                                          className: y,
                                          style: {
                                              backgroundImage: `url(R.images.gui.maps.icons.missions.icons.c_48_${U}_silver)`,
                                          },
                                      }),
                            ),
                            s().createElement('div', { className: I }),
                            s().createElement(
                                'div',
                                { className: f },
                                s().createElement(
                                    'div',
                                    { className: S },
                                    s().createElement(N.ZP, { text: z }),
                                    t &&
                                        s().createElement(N.ZP, {
                                            text: R.strings.quests.dailyQuests.tab.progress(),
                                            format: {
                                                binding: {
                                                    current: s().createElement(N.ZP, {
                                                        text: G.toString(),
                                                        className: n()(G > 0 && F),
                                                    }),
                                                    total: s().createElement(N.ZP, { text: W.toString() }),
                                                },
                                            },
                                            className: w,
                                        }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: P },
                                    !re &&
                                        s().createElement(N.ZP, {
                                            text: R.strings.quests.dailyQuests.tab.bull(),
                                            className: k,
                                        }),
                                    s().createElement(N.ZP, { text: $ }),
                                ),
                            ),
                        ),
                    );
                };
            },
            3509: (e, t, a) => {
                'use strict';
                a.d(t, { ji: () => n, vW: () => o });
                const o = 3,
                    n = {
                        unlockSubscriptionBonusDuration: 2e3,
                        unlockBonusQuestDelay: 3e3,
                        unlockBonusQuestDuration: 500,
                        unlockTabPremiumDuration: 700,
                    };
            },
            9153: (e, t, a) => {
                'use strict';
                let o;
                (a.d(t, { g: () => o }),
                    (function (e) {
                        ((e[(e.DailyQuests = 0)] = 'DailyQuests'),
                            (e[(e.PremiumQuests = 1)] = 'PremiumQuests'),
                            (e[(e.PlayStreak = 2)] = 'PlayStreak'));
                    })(o || (o = {})));
            },
            3099: (e, t, a) => {
                'use strict';
                let o;
                (a.d(t, { N: () => o }),
                    (function (e) {
                        ((e.Done = 'done'),
                            (e.UndoneSubscription = 'undoneSubscription'),
                            (e.Locked = 'notAvailable'),
                            (e.Active = ''));
                    })(o || (o = {})));
            },
            5026: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
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
            6880: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
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
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
            },
            6664: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
                    base: 'ProgressLineImpose_base_80',
                    base__disabled: 'ProgressLineImpose_base__disabled_cc',
                    base__finished: 'ProgressLineImpose_base__finished_d4',
                    base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                    pattern: 'ProgressLineImpose_pattern_1c',
                    base__small: 'ProgressLineImpose_base__small_55',
                    gradient: 'ProgressLineImpose_gradient_35',
                    glow: 'ProgressLineImpose_glow_a5',
                    glow__left: 'ProgressLineImpose_glow__left_d8',
                };
            },
            6147: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            1609: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
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
            3393: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                const o = {
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
        (__webpack_require__.O = (e, t, a, o) => {
            if (!t) {
                var n = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, o] = deferred[u], i = !0, s = 0; s < t.length; s++)
                        (!1 & o || n >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), o < n && (n = o));
                    if (i) {
                        deferred.splice(u--, 1);
                        var r = a();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > o; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, a, o];
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
        (__webpack_require__.j = 982),
        (() => {
            var e = { 982: 0, 306: 0, 83: 0, 800: 0, 444: 0, 601: 0, 486: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var o,
                        n,
                        [i, s, r] = a,
                        u = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in s) __webpack_require__.o(s, o) && (__webpack_require__.m[o] = s[o]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (t && t(a); u < i.length; u++)
                        ((n = i[u]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [272], () => __webpack_require__(2656));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
