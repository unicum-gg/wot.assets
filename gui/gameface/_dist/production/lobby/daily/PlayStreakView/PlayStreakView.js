(() => {
    var __webpack_modules__ = {
            3779: (e, t, o) => {
                'use strict';
                o.d(t, { ZP: () => g });
                var a = o(6483),
                    n = o.n(a),
                    i = o(9887),
                    u = o.n(i),
                    s = o(3377),
                    r = o(6179),
                    l = o.n(r),
                    d = o(5026);
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
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                Object.keys(u());
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
                    C = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    g = (0, s.ZP)((e) => {
                        let t = e.className,
                            o = e.width,
                            a = e.height,
                            i = e.m,
                            u = e.mt,
                            s = void 0 === u ? i : u,
                            g = e.mr,
                            E = void 0 === g ? i : g,
                            v = e.mb,
                            b = void 0 === v ? i : v,
                            A = e.ml,
                            y = void 0 === A ? i : A,
                            F = e.column,
                            D = e.row,
                            B = e.flexDirection,
                            w = void 0 === B ? (F ? 'column' : D && 'row') || void 0 : B,
                            h = e.flexStart,
                            I = e.center,
                            f = e.flexEnd,
                            x = e.spaceBetween,
                            R = e.spaceAround,
                            S = e.justifyContent,
                            P =
                                void 0 === S
                                    ? (h ? 'flex-start' : I && 'center') ||
                                      (f && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (R && 'space-around') ||
                                      void 0
                                    : S,
                            T = e.alignItems,
                            k = void 0 === T ? (h ? 'flex-start' : I && 'center') || (f && 'flex-end') || void 0 : T,
                            M = e.alignSelf,
                            N = e.wrap,
                            L = e.flexWrap,
                            O = void 0 === L ? (N ? 'wrap' : void 0) : L,
                            H = e.grow,
                            U = e.shrink,
                            G = e.flex,
                            z = void 0 === G ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : G,
                            W = e.style,
                            j = e.children,
                            Z = (function (e, t) {
                                if (null == e) return {};
                                var o,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                                return n;
                            })(e, m);
                        const q = (0, r.useMemo)(() => {
                                const e = { mt: s, mr: E, mb: b, ml: y },
                                    t = ((e) =>
                                        _.reduce((t, o) => {
                                            const a = e[o];
                                            return a && 'number' != typeof a ? t.concat(p[!0 === a ? 'MD' : a][o]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        _.reduce((t, o) => {
                                            const a = e[o];
                                            return 'number' == typeof a && (t[C[o]] = a + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, W, n, {
                                        width: void 0 !== o && 'number' == typeof o ? o + 'rem' : o,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: z,
                                        alignSelf: M,
                                        display: w || k ? 'flex' : void 0,
                                        flexDirection: w,
                                        flexWrap: O,
                                        justifyContent: P,
                                        alignItems: k,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [o, a, s, E, b, y, W, z, M, w, O, P, k]),
                            $ = q.computedStyle,
                            V = q.computedClassNames;
                        return l().createElement('div', c({ className: n()(d.Z.base, ...V, t), style: $ }, Z), j);
                    });
            },
            3457: (e, t, o) => {
                'use strict';
                o.d(t, { u5: () => m });
                var a = o(6483),
                    n = o.n(a),
                    i = o(7727),
                    u = o(6179),
                    s = o.n(u),
                    r = o(6880),
                    l = o(2106);
                const d = ({
                    children: e,
                    size: t,
                    isFocused: o,
                    type: a,
                    disabled: d,
                    mixClass: m,
                    soundHover: c,
                    soundClick: p,
                    onMouseEnter: _,
                    onMouseMove: C,
                    onMouseDown: g,
                    onMouseUp: E,
                    onMouseLeave: v,
                    onClick: b,
                }) => {
                    const A = (0, u.useRef)(null),
                        y = (0, u.useState)(o),
                        F = y[0],
                        D = y[1],
                        B = (0, u.useState)(!1),
                        w = B[0],
                        h = B[1],
                        I = (0, u.useState)(!1),
                        f = I[0],
                        x = I[1],
                        S = (0, u.useCallback)(() => {
                            d || (A.current && (A.current.focus(), D(!0)));
                        }, [d]),
                        P = (0, u.useCallback)(
                            (e) => {
                                F && null !== A.current && !A.current.contains(e.target) && D(!1);
                            },
                            [F],
                        ),
                        T = (0, u.useCallback)(
                            (e) => {
                                d || (b && b(e));
                            },
                            [d, b],
                        ),
                        k = (0, u.useCallback)(
                            (e) => {
                                d || (null !== c && (0, i.G)(c), _ && _(e), x(!0));
                            },
                            [d, c, _],
                        ),
                        M = (0, u.useCallback)(
                            (e) => {
                                C && C(e);
                            },
                            [C],
                        ),
                        N = (0, u.useCallback)(
                            (e) => {
                                d || (E && E(e), h(!1));
                            },
                            [d, E],
                        ),
                        L = (0, u.useCallback)(
                            (e) => {
                                d || (null !== p && (0, i.G)(p), g && g(e), o && S(), h(!0));
                            },
                            [d, p, g, S, o],
                        ),
                        O = (0, u.useCallback)(
                            (e) => {
                                d || (v && v(e), h(!1));
                            },
                            [d, v],
                        ),
                        H = n()(
                            r.Z.base,
                            r.Z[`base__${a}`],
                            {
                                [r.Z.base__disabled]: d,
                                [r.Z[`base__${t}`]]: t,
                                [r.Z.base__focus]: F,
                                [r.Z.base__highlightActive]: w,
                                [r.Z.base__firstHover]: f,
                            },
                            m,
                        ),
                        U = n()(r.Z.state, r.Z.state__default);
                    return (
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, u.useEffect)(() => {
                            D(o);
                        }, [o]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: H,
                                onMouseEnter: k,
                                onMouseMove: M,
                                onMouseUp: N,
                                onMouseDown: L,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            a !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: r.Z.back }),
                                    s().createElement('span', { className: r.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: U },
                                s().createElement('span', { className: r.Z.stateDisabled }),
                                s().createElement('span', { className: r.Z.stateHighlightHover }),
                                s().createElement('span', { className: r.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: r.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                d.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = (0, u.memo)(d);
            },
            2106: (e, t, o) => {
                'use strict';
                let a, n;
                o.d(t, { L: () => a, q: () => n }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(n || (n = {}));
            },
            2372: (e, t, o) => {
                'use strict';
                o.d(t, { A: () => u });
                var a = o(6179),
                    n = o.n(a),
                    i = o(4179);
                class u extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = i.B3.GOLD;
                        else e = i.B3.INTEGRAL;
                        const t = i.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                u.defaultProps = { format: 'integral' };
            },
            280: (e, t, o) => {
                'use strict';
                o.d(t, { z: () => l });
                var a = o(6179),
                    n = o.n(a),
                    i = o(6483),
                    u = o.n(i),
                    s = o(3649),
                    r = o(5287);
                const l = ({ binding: e, text: t = '', classMix: o, alignment: i = s.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              a.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  n().createElement(
                                      'div',
                                      { className: u()(r.Z.base, o), key: `${t}-${l}` },
                                      (0, s.Uw)(t, i, e).map((e, t) =>
                                          n().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, o) => {
                'use strict';
                o.d(t, { Y: () => m });
                var a = o(3138),
                    n = o(6179),
                    i = o(1043),
                    u = o(5262);
                const s = a.O.client.getSize('rem'),
                    r = s.width,
                    l = s.height,
                    d = Object.assign({ width: r, height: l }, (0, u.T)(r, l, i.j)),
                    m = (0, n.createContext)(d);
            },
            1039: (e, t, o) => {
                'use strict';
                var a = o(6179),
                    n = o.n(a),
                    i = o(6536),
                    u = o(3495),
                    s = o(1043),
                    r = o(5262),
                    l = o(3138);
                (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(u.Y),
                        o = (0, a.useState)(t),
                        d = o[0],
                        m = o[1],
                        c = (0, a.useCallback)((e, t) => {
                            const o = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(t);
                            m(Object.assign({ width: o, height: a }, (0, r.T)(o, a, s.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]);
                    const p = (0, a.useMemo)(() => Object.assign({}, d), [d]);
                    return n().createElement(u.Y.Provider, { value: p }, e);
                });
            },
            6010: (e, t, o) => {
                'use strict';
                var a = o(6179),
                    n = o(7382),
                    i = o(3495);
                const u = ['children'];
                const s = (e) => {
                    let t = e.children,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var o,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                            return n;
                        })(e, u);
                    const s = (0, a.useContext)(i.Y),
                        r = s.extraLarge,
                        l = s.large,
                        d = s.medium,
                        m = s.small,
                        c = s.extraSmall,
                        p = s.extraLargeWidth,
                        _ = s.largeWidth,
                        C = s.mediumWidth,
                        g = s.smallWidth,
                        E = s.extraSmallWidth,
                        v = s.extraLargeHeight,
                        b = s.largeHeight,
                        A = s.mediumHeight,
                        y = s.smallHeight,
                        F = s.extraSmallHeight,
                        D = { extraLarge: v, large: b, medium: A, small: y, extraSmall: F };
                    if (o.extraLarge || o.large || o.medium || o.small || o.extraSmall) {
                        if (o.extraLarge && r) return t;
                        if (o.large && l) return t;
                        if (o.medium && d) return t;
                        if (o.small && m) return t;
                        if (o.extraSmall && c) return t;
                    } else {
                        if (o.extraLargeWidth && p) return (0, n.H)(t, o, D);
                        if (o.largeWidth && _) return (0, n.H)(t, o, D);
                        if (o.mediumWidth && C) return (0, n.H)(t, o, D);
                        if (o.smallWidth && g) return (0, n.H)(t, o, D);
                        if (o.extraSmallWidth && E) return (0, n.H)(t, o, D);
                        if (
                            !(o.extraLargeWidth || o.largeWidth || o.mediumWidth || o.smallWidth || o.extraSmallWidth)
                        ) {
                            if (o.extraLargeHeight && v) return t;
                            if (o.largeHeight && b) return t;
                            if (o.mediumHeight && A) return t;
                            if (o.smallHeight && y) return t;
                            if (o.extraSmallHeight && F) return t;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, a.memo)(s);
            },
            7382: (e, t, o) => {
                'use strict';
                o.d(t, { H: () => a });
                const a = (e, t, o) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && o.extraLarge) ||
                          (t.largeHeight && o.large) ||
                          (t.mediumHeight && o.medium) ||
                          (t.smallHeight && o.small) ||
                          (t.extraSmallHeight && o.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, o) => {
                'use strict';
                o.d(t, { YN: () => a.Y });
                o(6010), o(1039);
                var a = o(3495);
            },
            1043: (e, t, o) => {
                'use strict';
                o.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, o) => {
                'use strict';
                var a;
                function n(e, t, o) {
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
                        })(e, o),
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
                        })(t, o),
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === o.extraLarge.weight,
                        large: i === o.large.weight,
                        medium: i === o.medium.weight,
                        small: i === o.small.weight,
                        extraSmall: i === o.extraSmall.weight,
                        extraLargeWidth: a === o.extraLarge.weight,
                        largeWidth: a === o.large.weight,
                        mediumWidth: a === o.medium.weight,
                        smallWidth: a === o.small.weight,
                        extraSmallWidth: a === o.extraSmall.weight,
                        extraLargeHeight: n === o.extraLarge.weight,
                        largeHeight: n === o.large.weight,
                        mediumHeight: n === o.medium.weight,
                        smallHeight: n === o.small.weight,
                        extraSmallHeight: n === o.extraSmall.weight,
                    };
                }
                o.d(t, { T: () => n }),
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
                    })(a || (a = {}));
            },
            1975: (e, t, o) => {
                'use strict';
                o.d(t, { ko: () => C });
                var a = o(6483),
                    n = o.n(a),
                    i = o(6179),
                    u = o.n(i),
                    s = o(2468),
                    r = o(7442),
                    l = o(2407),
                    d = o(156),
                    m = o(7736),
                    c = o(1635);
                o(6823);
                const p = d.Gh,
                    _ = {
                        freezed: !1,
                        withStack: !1,
                        type: m.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    C = (0, i.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = p,
                            size: o = m.$.Default,
                            animationSettings: a = _,
                            disabled: i = !1,
                            withoutBackground: C = !1,
                            progressBarBackgroundClassMix: g,
                            value: E,
                            deltaFrom: v,
                            lineRef: b,
                            onChangeAnimationState: A,
                            onEndAnimation: y,
                            onComplete: F,
                        }) => {
                            const D = (0, c.S)(E, e, v);
                            return u().createElement(
                                'div',
                                { className: n()(s.Z.base, s.Z[`base__${o}`]), style: (0, d.VQ)(t) },
                                !C && u().createElement(r.J, { size: o, classMix: g }),
                                u().createElement(l.r, {
                                    size: o,
                                    lineRef: b,
                                    disabled: i,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: y,
                                    onChangeAnimationState: A,
                                    onComplete: F,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, o) => {
                'use strict';
                o.d(t, { J: () => l });
                var a = o(6483),
                    n = o.n(a),
                    i = o(6179),
                    u = o.n(i),
                    s = o(2468),
                    r = o(7736);
                const l = ({ size: e = r.$.Default, classMix: t }) =>
                    u().createElement('div', { className: n()(s.Z.background, s.Z[`background__${e}`], t) });
            },
            8150: (e, t, o) => {
                'use strict';
                o.d(t, { $: () => r });
                var a = o(6179),
                    n = o.n(a),
                    i = o(6483),
                    u = o.n(i),
                    s = o(8804);
                const r = ({ size: e }) => {
                    const t = u()(s.Z.base, s.Z[`base__${e}`]);
                    return n().createElement('div', { className: t });
                };
            },
            2407: (e, t, o) => {
                'use strict';
                o.d(t, { r: () => l });
                var a = o(6179),
                    n = o.n(a),
                    i = o(5680),
                    u = o(6736),
                    s = o(2386);
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: o,
                        disabled: a,
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
                                lineRef: o,
                                disabled: a,
                                onComplete: p,
                            });
                        const _ = {
                            from: l,
                            to: t,
                            size: e,
                            lineRef: o,
                            disabled: a,
                            animationSettings: d,
                            onComplete: p,
                            onEndAnimation: m,
                            onChangeAnimationState: c,
                        };
                        return d.withStack
                            ? n().createElement(s.F, _)
                            : n().createElement(u.H, r({ key: `${l}-${t}` }, _));
                    },
                );
            },
            1848: (e, t, o) => {
                'use strict';
                o.d(t, { t: () => l });
                var a = o(6179),
                    n = o.n(a),
                    i = o(6483),
                    u = o.n(i),
                    s = o(8150),
                    r = o(6664);
                const l = (0, a.memo)(
                    ({ size: e, lineRef: t, disabled: o, baseStyles: a, isComplete: i, withoutBounce: l }) => {
                        const d = u()(
                                r.Z.base,
                                r.Z[`base__${e}`],
                                o && r.Z.base__disabled,
                                i && r.Z.base__finished,
                                l && r.Z.base__withoutBounce,
                            ),
                            m = !o && !i;
                        return n().createElement(
                            'div',
                            { className: d, style: a, ref: t },
                            n().createElement('div', { className: r.Z.pattern }),
                            n().createElement('div', { className: r.Z.gradient }),
                            m && n().createElement(s.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, o) => {
                'use strict';
                o.d(t, { O: () => _ });
                var a = o(6483),
                    n = o.n(a),
                    i = o(122),
                    u = o(6179),
                    s = o.n(u),
                    r = o(8150),
                    l = o(6823),
                    d = o(6147);
                const m = (e) => (e ? { left: 0 } : { right: 0 }),
                    c = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    p = (e) => ({ transitionDuration: `${e}ms` }),
                    _ = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: o,
                            from: a,
                            size: _,
                            to: C,
                            onEndAnimation: g,
                            onChangeAnimationState: E,
                            className: v,
                        }) => {
                            const b = C < a,
                                A = (0, u.useState)(l.S.Idle),
                                y = A[0],
                                F = A[1],
                                D = y === l.S.End,
                                B = y === l.S.Idle,
                                w = y === l.S.Grow,
                                h = y === l.S.Shrink,
                                I = (0, u.useCallback)(
                                    (e) => {
                                        F(e), E && E(e);
                                    },
                                    [E],
                                ),
                                f = (0, u.useCallback)(
                                    (e, t) =>
                                        (0, i.F)(() => {
                                            I(e);
                                        }, t),
                                    [I],
                                );
                            (0, u.useEffect)(() => {
                                if (!o)
                                    return B
                                        ? f(l.S.Grow, t)
                                        : w
                                          ? f(l.S.Shrink, e)
                                          : h
                                            ? f(l.S.End, e)
                                            : void (D && g && g());
                            }, [f, o, D, w, B, h, g, t, e]);
                            const x = (0, u.useMemo)(() => Object.assign({ width: '100%' }, p(e), m(b)), [b, e]),
                                R = (0, u.useMemo)(() => Object.assign({ width: '0%' }, p(e), m(b)), [b, e]),
                                S = (0, u.useMemo)(() => Object.assign({ width: '0%' }, c(b, a), p(e)), [a, b, e]),
                                P = (0, u.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(C - a)}%` }, c(b, a), p(e)),
                                    [a, b, C, e],
                                );
                            if (D) return null;
                            const T = n()(d.Z.base, v, b && 0 === C && d.Z.base__withoutBounce);
                            return s().createElement(
                                'div',
                                { style: B ? S : P, className: T },
                                s().createElement(
                                    'div',
                                    { style: h ? R : x, className: d.Z.glow },
                                    s().createElement(r.$, { size: _ }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, o) => {
                'use strict';
                o.d(t, { x: () => l });
                var a = o(6179),
                    n = o.n(a),
                    i = o(122),
                    u = o(6823),
                    s = o(8150),
                    r = o(9919);
                const l = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: o,
                        from: l,
                        size: d,
                        to: m,
                        onEndAnimation: c,
                        onChangeAnimationState: p,
                    }) => {
                        const _ = m < l,
                            C = (0, a.useState)(u.V.Idle),
                            g = C[0],
                            E = C[1],
                            v = g === u.V.In,
                            b = g === u.V.End,
                            A = g === u.V.Idle,
                            y = (0, a.useCallback)(
                                (e) => {
                                    E(e), p && p(e);
                                },
                                [p],
                            );
                        (0, a.useEffect)(() => {
                            if (A && !o) {
                                const e = t;
                                return (0, i.F)(() => {
                                    y(u.V.In);
                                }, e);
                            }
                        }, [y, o, A, t]),
                            (0, a.useEffect)(() => {
                                if (v) {
                                    const o = e + t;
                                    return (0, i.F)(() => {
                                        c && c(), y(u.V.End);
                                    }, o);
                                }
                            }, [y, v, c, t, e]);
                        const F = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, t, e],
                            ),
                            D = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, t, e],
                            ),
                            B = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(l - m)}%`, left: `${_ ? m : l}%` }),
                                [l, _, m],
                            );
                        return b
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: r.Z.base, style: B },
                                  n().createElement(
                                      'div',
                                      { style: A ? F : D, className: r.Z.delta },
                                      n().createElement(s.$, { size: d }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, o) => {
                'use strict';
                o.d(t, { F: () => r });
                var a = o(6179),
                    n = o.n(a),
                    i = o(2434),
                    u = o(1848),
                    s = o(6823);
                const r = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: o,
                        lineRef: r,
                        disabled: l,
                        isComplete: d,
                        animationSettings: m,
                        onEndAnimation: c,
                        onChangeAnimationState: p,
                    }) => {
                        const _ = e < o,
                            C = (0, a.useState)(!1),
                            g = C[0],
                            E = C[1],
                            v = (0, a.useCallback)(
                                (e) => {
                                    e === s.S.Shrink && E(!0), p && p(e);
                                },
                                [p],
                            ),
                            b = (0, a.useMemo)(() => ({ width: `${o}%`, transitionProperty: 'none' }), [o]),
                            A = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${m.line.duration}ms` }),
                                [m.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(u.t, {
                                size: t,
                                lineRef: r,
                                disabled: l,
                                isComplete: d,
                                withoutBounce: _ && 0 === e,
                                baseStyles: g ? A : b,
                            }),
                            o >= 0 &&
                                n().createElement(i.O, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    onChangeAnimationState: v,
                                    freezed: m.freezed,
                                    onEndAnimation: c,
                                    from: o,
                                    size: t,
                                    to: e,
                                    className: m.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, o) => {
                'use strict';
                o.d(t, { D: () => s });
                var a = o(6179),
                    n = o.n(a),
                    i = o(5913),
                    u = o(1848);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: o,
                        lineRef: s,
                        disabled: r,
                        isComplete: l,
                        animationSettings: d,
                        onChangeAnimationState: m,
                        onEndAnimation: c,
                    }) => {
                        const p = (0, a.useMemo)(
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
                            n().createElement(u.t, { size: t, lineRef: s, disabled: r, isComplete: l, baseStyles: p }),
                            o >= 0 &&
                                n().createElement(i.x, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    freezed: d.freezed,
                                    from: o,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: m,
                                    onEndAnimation: c,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, o) => {
                'use strict';
                o.d(t, { H: () => d });
                var a = o(6179),
                    n = o.n(a),
                    i = o(7736),
                    u = o(828),
                    s = o(538);
                const r = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const d = (0, a.memo)((e) => {
                    let t = e.onComplete,
                        o = e.onEndAnimation,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var o,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                            return n;
                        })(e, r);
                    const m = (0, a.useState)(!1),
                        c = m[0],
                        p = m[1],
                        _ = (0, a.useCallback)(() => {
                            const e = 100 === d.to;
                            e !== c && p(e), e && t && t(), o && o();
                        }, [c, t, o, d.to]);
                    switch (d.animationSettings.type) {
                        case i.r.Simple:
                            return n().createElement(u.D, l({}, d, { onEndAnimation: _, isComplete: c }));
                        case i.r.Growing:
                            return n().createElement(s.F, l({}, d, { onEndAnimation: _, isComplete: c }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, o) => {
                'use strict';
                let a, n;
                o.d(t, { S: () => a, V: () => n }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(n || (n = {}));
            },
            2386: (e, t, o) => {
                'use strict';
                o.d(t, { F: () => r });
                var a = o(6179),
                    n = o.n(a),
                    i = o(6736);
                const u = ['onEndAnimation'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const r = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var o,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                            return n;
                        })(e, u);
                    const r = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            (r.current.from = void 0), t && t();
                        }, [t]),
                        d = 'number' == typeof r.current.from ? r.current.from : o.from;
                    return (
                        (r.current.from = d),
                        n().createElement(i.H, s({}, o, { onEndAnimation: l, key: `${d}-${o.to}`, from: d }))
                    );
                });
            },
            5680: (e, t, o) => {
                'use strict';
                o.d(t, { M: () => u });
                var a = o(6179),
                    n = o.n(a),
                    i = o(1848);
                const u = ({ size: e, value: t, lineRef: o, disabled: u, onComplete: s }) => {
                    const r = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, a.useEffect)(() => {
                            l && s && s();
                        }, [l, s]),
                        n().createElement(i.t, { size: e, disabled: u, baseStyles: r, isComplete: l, lineRef: o })
                    );
                };
            },
            156: (e, t, o) => {
                'use strict';
                o.d(t, { Gh: () => n, VQ: () => a });
                const a = (e) => ({
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
            7736: (e, t, o) => {
                'use strict';
                let a, n;
                o.d(t, { $: () => a, r: () => n }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(n || (n = {}));
            },
            1635: (e, t, o) => {
                'use strict';
                o.d(t, { S: () => u });
                var a = o(7515),
                    n = o(6179);
                const i = (e, t, o) => {
                        if ('number' == typeof o) {
                            return ((0, a.u)(0, t, o) / t) * 100;
                        }
                        return e;
                    },
                    u = (e, t, o) =>
                        (0, n.useMemo)(() => {
                            const n = ((0, a.u)(0, t, e) / t) * 100;
                            return { value: n, deltaFrom: i(n, t, o) };
                        }, [o, t, e]);
            },
            5739: (e, t, o) => {
                'use strict';
                o.d(t, { Q: () => m });
                var a = o(6483),
                    n = o.n(a),
                    i = o(6179),
                    u = o.n(i),
                    s = o(3415),
                    r = o(2862),
                    l = o(729),
                    d = o(1609);
                const m = ({
                    name: e,
                    image: t,
                    isPeriodic: o = !1,
                    size: a = r.h2.Big,
                    special: i,
                    value: m,
                    valueType: c,
                    style: p,
                    className: _,
                    classNames: C,
                    tooltipArgs: g,
                    periodicIconTooltipArgs: E,
                }) => {
                    const v = (0, l.L_)(i),
                        b = (0, l.i2)(i),
                        A = (0, l.m9)(m, c);
                    return u().createElement(
                        'div',
                        { className: n()(d.Z.base, d.Z[`base__${a}`], _), style: p },
                        u().createElement(
                            s.l,
                            { tooltipArgs: g, className: d.Z.tooltipWrapper },
                            u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(
                                    'div',
                                    { className: n()(d.Z.image, null == C ? void 0 : C.image) },
                                    v &&
                                        u().createElement('div', {
                                            className: n()(d.Z.highlight, null == C ? void 0 : C.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${v}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        u().createElement('div', {
                                            className: n()(d.Z.icon, null == C ? void 0 : C.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    b &&
                                        u().createElement('div', {
                                            className: n()(d.Z.overlay, null == C ? void 0 : C.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${b}_overlay)`,
                                            },
                                        }),
                                ),
                                A &&
                                    u().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                d.Z.info,
                                                d.Z[`info__${e}`],
                                                c === r.$h.MULTI && d.Z.info__multi,
                                                null == C ? void 0 : C.info,
                                            ),
                                        },
                                        A,
                                    ),
                            ),
                        ),
                        o &&
                            u().createElement(
                                s.l,
                                { tooltipArgs: E },
                                u().createElement('div', {
                                    className: n()(d.Z.timer, null == C ? void 0 : C.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, t, o) => {
                'use strict';
                let a, n, i, u, s, r, l;
                o.d(t, { $h: () => u, A2: () => r, E4: () => a, Rl: () => n, h2: () => i, kK: () => s, sh: () => l }),
                    (function (e) {
                        (e.Items = 'items'),
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
                            (e.HBVehicleUnlock = 'hbUnlockVehicles'),
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
                            (e.LootBoxToken = 'lootBoxToken');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48');
                    })(i || (i = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(u || (u = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(s || (s = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(r || (r = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(l || (l = {}));
            },
            729: (e, t, o) => {
                'use strict';
                o.d(t, { L_: () => g, i2: () => E, m9: () => v, p3: () => m, pI: () => C, ry: () => _ });
                var a = o(2372),
                    n = o(6179),
                    i = o.n(n),
                    u = o(2862);
                const s = [
                        u.E4.Items,
                        u.E4.Equipment,
                        u.E4.Xp,
                        u.E4.XpFactor,
                        u.E4.Blueprints,
                        u.E4.BlueprintsAny,
                        u.E4.Goodies,
                        u.E4.Berths,
                        u.E4.Slots,
                        u.E4.Tokens,
                        u.E4.CrewSkins,
                        u.E4.CrewBooks,
                        u.E4.Customizations,
                        u.E4.CreditsFactor,
                        u.E4.TankmenXp,
                        u.E4.TankmenXpFactor,
                        u.E4.FreeXpFactor,
                        u.E4.BattleToken,
                        u.E4.HBVehicleUnlock,
                        u.E4.PremiumUniversal,
                        u.E4.NaturalCover,
                        u.E4.BpCoin,
                        u.E4.BattlePassSelectToken,
                        u.E4.BattlaPassFinalAchievement,
                        u.E4.BattleBadge,
                        u.E4.BonusX5,
                        u.E4.CrewBonusX3,
                        u.E4.NewYearFillers,
                        u.E4.NewYearInvoice,
                        u.E4.EpicSelectToken,
                        u.E4.Comp7TokenWeeklyReward,
                        u.E4.Comp7TokenCouponReward,
                        u.E4.BattleBoosterGift,
                        u.E4.CosmicLootboxCommon,
                        u.E4.CosmicLootboxSilver,
                        u.E4.SelectableBonus,
                    ],
                    r = [u.E4.Gold, u.E4.Credits, u.E4.Crystal, u.E4.FreeXp],
                    l = [u.E4.BattlePassPoints],
                    d = [u.E4.PremiumPlus, u.E4.Premium],
                    m = (e) =>
                        s.includes(e)
                            ? u.$h.MULTI
                            : r.includes(e)
                              ? u.$h.CURRENCY
                              : l.includes(e)
                                ? u.$h.NUMBER
                                : d.includes(e)
                                  ? u.$h.PREMIUM_PLUS
                                  : u.$h.STRING,
                    c = ['engravings', 'backgrounds'],
                    p = ['engraving', 'background'],
                    _ = (e, t = u.h2.Small) => {
                        const o = e.name,
                            a = e.type,
                            n = e.value,
                            i = e.icon,
                            s = e.item,
                            r = e.dogTagType,
                            l = e.iconSmall,
                            d = ((e) => {
                                switch (e) {
                                    case u.h2.S600x450:
                                        return 'c_600x450';
                                    case u.h2.S400x300:
                                        return 'c_400x300';
                                    case u.h2.S296x222:
                                        return 'c_296x222';
                                    case u.h2.S232x174:
                                        return 'c_232x174';
                                    case u.h2.Big:
                                        return 'c_80x80';
                                    case u.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (o) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case u.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case u.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'hbUnlockVehicles':
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'entitlements':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${l}`;
                            case 'dogTagComponents':
                                return ((e, t, o) => {
                                    const a = c[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            i = n.$dyn(o);
                                        return i ? `${i}` : `${n.$dyn(p[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(r, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${d}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${d}.${i}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${d}.${i}`;
                        }
                    },
                    C = (e, t, o) => {
                        const a = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            a,
                            o,
                        );
                    },
                    g = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case u.kK.BATTLE_BOOSTER:
                            case u.kK.BATTLE_BOOSTER_REPLACE:
                                return u.A2.BATTLE_BOOSTER;
                        }
                    },
                    E = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case u.kK.BATTLE_BOOSTER:
                                return u.sh.BATTLE_BOOSTER;
                            case u.kK.BATTLE_BOOSTER_REPLACE:
                                return u.sh.BATTLE_BOOSTER_REPLACE;
                            case u.kK.BUILT_IN_EQUIPMENT:
                                return u.sh.BUILT_IN_EQUIPMENT;
                            case u.kK.EQUIPMENT_PLUS:
                                return u.sh.EQUIPMENT_PLUS;
                            case u.kK.EQUIPMENT_TROPHY_BASIC:
                                return u.sh.EQUIPMENT_TROPHY_BASIC;
                            case u.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return u.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case u.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return u.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case u.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return u.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case u.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return u.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case u.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return u.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case u.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return u.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case u.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return u.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case u.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return u.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    v = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case u.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case u.$h.CURRENCY:
                            case u.$h.NUMBER:
                                return i().createElement(a.A, { format: 'integral', value: Number(e) });
                            case u.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            5036: (e, t, o) => {
                'use strict';
                o.r(t),
                    o.d(t, {
                        Area: () => f,
                        Bar: () => w,
                        DefaultScroll: () => I,
                        Direction: () => c.Nm,
                        defaultSettings: () => c.he,
                        useHorizontalScrollApi: () => c.T5,
                    });
                var a = o(6483),
                    n = o.n(a),
                    i = o(1856),
                    u = o(6179),
                    s = o.n(u),
                    r = o(7515),
                    l = o(3815),
                    d = o(560),
                    m = o(7727),
                    c = o(6358);
                const p = 'HorizontalBar_base_49',
                    _ = 'HorizontalBar_base__nonActive_82',
                    C = 'HorizontalBar_leftButton_5f',
                    g = 'HorizontalBar_rightButton_03',
                    E = 'HorizontalBar_track_0d',
                    v = 'HorizontalBar_thumb_fd',
                    b = 'HorizontalBar_rail_32',
                    A = 'disable',
                    y = { pending: !1, offset: 0 },
                    F = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    D = () => {},
                    B = (e, t) => Math.max(20, e.offsetWidth * t),
                    w = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: o = F, onDrag: a = D }) => {
                        const w = (0, u.useRef)(null),
                            h = (0, u.useRef)(null),
                            I = (0, u.useRef)(null),
                            f = (0, u.useRef)(null),
                            x = (0, u.useRef)(null),
                            R = e.stepTimeout || 100,
                            S = (0, u.useState)(y),
                            P = S[0],
                            T = S[1],
                            k = (0, u.useCallback)(
                                (e) => {
                                    T(e),
                                        x.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: x.current });
                                },
                                [a],
                            ),
                            M = () => {
                                const t = f.current,
                                    o = x.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && o && n)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / n),
                                    s = (0, r.u)(0, 1, i / (n - a)),
                                    l = (t.offsetWidth - B(t, u)) * s;
                                (o.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (h.current && I.current && f.current && x.current) {
                                            if (0 === e)
                                                return h.current.classList.add(A), void I.current.classList.remove(A);
                                            if (
                                                ((t = f.current),
                                                (o = x.current),
                                                e - (t.offsetWidth - o.offsetWidth) >= -0.5)
                                            )
                                                return h.current.classList.remove(A), void I.current.classList.add(A);
                                            var t, o;
                                            h.current.classList.remove(A), I.current.classList.remove(A);
                                        }
                                    })(l);
                            },
                            N = (0, l.z)(() => {
                                (() => {
                                    const t = x.current,
                                        o = f.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && a && o)) return;
                                    const i = Math.min(1, a / n);
                                    (t.style.width = `${B(o, i)}px`),
                                        (t.style.display = 'flex'),
                                        w.current &&
                                            (1 === i ? w.current.classList.add(_) : w.current.classList.remove(_));
                                })(),
                                    M();
                            });
                        (0, u.useEffect)(() => (0, i.v)(N)),
                            (0, u.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            M();
                                        };
                                        let o = D;
                                        const a = () => {
                                            o(), (o = (0, i.v)(N));
                                        };
                                        return (
                                            e.events.on('recalculateContent', N),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                o(),
                                                    e.events.off('recalculateContent', N),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!P.pending) return;
                                const t = (t) => {
                                        var o;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const i = f.current,
                                            u = x.current;
                                        if (!n || !i || !u) return;
                                        const s = t.screenX - P.offset - i.getBoundingClientRect().x,
                                            r = (s / i.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, r),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: u, thumbOffset: s, contentOffset: r });
                                    },
                                    o = () => {
                                        window.removeEventListener('mousemove', t), k(y);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', o),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', o);
                                    }
                                );
                            }, [e, P.offset, P.pending, a, k]);
                        const L = (0, d.B)((t) => e.applyStepTo(t), R, [e]),
                            O = L[0],
                            H = L[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', H, !0),
                                () => document.removeEventListener('mouseup', H, !0)
                            ),
                            [H],
                        );
                        const U = (e) => {
                            e.target.classList.contains(A) || (0, m.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: n()(p, t.base), ref: w, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: n()(C, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, m.G)('play'), O(c.Nm.Next));
                                },
                                onMouseUp: H,
                                ref: h,
                                onMouseEnter: U,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: n()(E, t.track),
                                    onMouseDown: (t) => {
                                        const a = x.current;
                                        if (a && 0 === t.button)
                                            if (((0, m.G)('play'), t.target === a))
                                                k({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = x.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const i = o(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? c.Nm.Prev : c.Nm.Next);
                                            }
                                    },
                                    ref: f,
                                    onMouseEnter: U,
                                },
                                s().createElement('div', { ref: x, className: n()(v, t.thumb) }),
                                s().createElement('div', { className: n()(b, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: n()(g, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, m.G)('play'), O(c.Nm.Prev));
                                },
                                onMouseUp: H,
                                ref: I,
                                onMouseEnter: U,
                            }),
                        );
                    }),
                    h = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    I = ({
                        children: e,
                        api: t,
                        className: o,
                        barClassNames: a,
                        areaClassName: i,
                        classNames: r,
                        scrollClassName: l,
                        getStepByRailClick: d,
                        onDrag: m,
                    }) => {
                        const c = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: n()(h.base, e.base) });
                            }, [a]),
                            p = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: n()(h.defaultScroll, o), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: n()(h.defaultScrollArea, i) },
                                s().createElement(f, { className: l, api: p, classNames: r }, e),
                            ),
                            s().createElement(w, { getStepByRailClick: d, api: t, onDrag: m, classNames: c }),
                        );
                    },
                    f = ({ api: e, className: t, classNames: o, children: a, style: r }) => (
                        (0, u.useEffect)(() => (0, i.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: n()(h.base, t), style: r },
                            s().createElement(
                                'div',
                                {
                                    className: n()(h.wrapper, null == o ? void 0 : o.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: n()(h.content, null == o ? void 0 : o.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (f.Bar = w),
                    (f.Default = I),
                    (f.SeniorityAwards = ({ api: e, className: t, classNames: o, children: a }) => (
                        (0, u.useEffect)(() => (0, i.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: n()(h.base, t) },
                            s().createElement(
                                'div',
                                { className: n()(h.wrapper, null == o ? void 0 : o.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: n()(h.content, null == o ? void 0 : o.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    ));
            },
            6358: (e, t, o) => {
                'use strict';
                o.d(t, { GN: () => n, Nm: () => a.Nm, T5: () => i, he: () => a.he });
                var a = o(9482);
                const n = (e) => {
                        var t, o;
                        return (
                            (null != (t = null == (o = e.parentElement) ? void 0 : o.offsetWidth) ? t : 0) <
                            e.offsetWidth
                        );
                    },
                    i = (0, a.EO)({
                        getBounds: (e) => {
                            var t, o;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (o = e.parentElement) ? void 0 : o.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
            },
            7701: (e, t, o) => {
                'use strict';
                o.d(t, { Nm: () => a.Nm, c4: () => n });
                var a = o(9482);
                const n = (0, a.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                });
            },
            9482: (e, t, o) => {
                'use strict';
                o.d(t, { Nm: () => c, EO: () => _, he: () => p });
                var a = o(7515),
                    n = o(1856),
                    i = o(3138),
                    u = o(6179);
                function s(e, t) {
                    var o = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (o) return (o = o.call(e)).next.bind(o);
                    if (
                        Array.isArray(e) ||
                        (o = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === o && e.constructor && (o = e.constructor.name);
                            if ('Map' === o || 'Set' === o) return Array.from(e);
                            if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return r(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        o && (e = o);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var o = 0, a = new Array(t); o < t; o++) a[o] = e[o];
                    return a;
                }
                var l = o(3815);
                function d(e, t, o) {
                    const a = (0, u.useMemo)(
                        () =>
                            (function (e, t, o, a) {
                                let n,
                                    i = !1,
                                    u = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function r(...r) {
                                    const l = this,
                                        d = Date.now() - u;
                                    function m() {
                                        (u = Date.now()), o.apply(l, r);
                                    }
                                    i ||
                                        (a && !n && m(),
                                        s(),
                                        void 0 === a && d > e
                                            ? m()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : m,
                                                  void 0 === a ? e - d : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = o), (o = t), (t = void 0)),
                                    (r.cancel = function () {
                                        s(), (i = !0);
                                    }),
                                    r
                                );
                            })(o, e),
                        t,
                    );
                    return (0, u.useEffect)(() => a.cancel, [a]), a;
                }
                var m = o(7030);
                let c;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(c || (c = {}));
                const p = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _ = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: o,
                        getDirection: r,
                        getWrapperSize: c,
                        triggerMouseMoveOnUpdate: _ = !1,
                    }) => {
                        const C = (e, o) => {
                            const n = t(e),
                                i = n[0],
                                u = n[1];
                            return (0, a.u)(i, u, o);
                        };
                        return (a = {}) => {
                            const g = a.settings,
                                E = void 0 === g ? p : g,
                                v = (0, u.useRef)(null),
                                b = (0, u.useRef)(null),
                                A = (() => {
                                    const e = (0, u.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        o = (e, o) => {
                                            t(e).set(o, o);
                                        },
                                        a = (e, o) => {
                                            t(e).delete(o);
                                        },
                                        n = (e, ...o) => {
                                            for (var a, n = s(t(e).values()); !(a = n()).done; ) (0, a.value)(...o);
                                        };
                                    return (0, u.useMemo)(() => ({ on: o, off: a, trigger: n }), []);
                                })(),
                                y = d(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, m.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = v.current;
                                        t && (o(t, e), A.trigger('change', e), _ && y());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                w = (0, u.useCallback)(
                                    (e, t, o) => {
                                        var a;
                                        const n = D.scrollPosition.get(),
                                            i = (null != (a = D.scrollPosition.goal) ? a : 0) - n;
                                        return C(e, t * o + i + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                h = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: o = !0 } = {}) => {
                                        const a = v.current;
                                        a &&
                                            B.start({
                                                scrollPosition: C(a, e),
                                                immediate: t,
                                                reset: o,
                                                config: E.animationConfig,
                                                from: { scrollPosition: C(a, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, E.animationConfig, D.scrollPosition],
                                ),
                                I = (0, u.useCallback)(
                                    (e) => {
                                        const t = v.current,
                                            o = b.current;
                                        if (!t || !o) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return c(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(o, E.step),
                                            n = w(t, e, a);
                                        h(n);
                                    },
                                    [h, w, E.step],
                                ),
                                f = (0, u.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && I(r(e)),
                                            v.current && A.trigger('mouseWheel', e, D.scrollPosition, t(v.current));
                                    },
                                    [D.scrollPosition, I, A],
                                ),
                                x = ((e, t = []) => {
                                    const o = (0, u.useRef)(),
                                        a = (0, u.useCallback)((...t) => {
                                            o.current && o.current(), (o.current = e(...t));
                                        }, t);
                                    return (
                                        (0, u.useEffect)(
                                            () => () => {
                                                o.current && o.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        (0, n.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (h(C(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [h, D.scrollPosition.goal],
                                ),
                                R = (0, l.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const t = C(e, D.scrollPosition.goal);
                                    t !== D.scrollPosition.goal && h(t, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            );
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (b.current ? c(b.current) : void 0),
                                    getContainerSize: () => (v.current ? e(v.current) : void 0),
                                    getBounds: () =>
                                        v.current
                                            ? t(v.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: C,
                                    handleMouseWheel: f,
                                    applyScroll: h,
                                    applyStepTo: I,
                                    contentRef: v,
                                    wrapperRef: b,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: R,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, h, I, A.off, A.on, R, f, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            4963: (e, t, o) => {
                'use strict';
                o.d(t, { X: () => P });
                var a = {};
                o.r(a), o.d(a, { Area: () => S, Bar: () => f, Default: () => R, useVerticalScrollApi: () => _.c4 });
                var n = o(5036),
                    i = o(6483),
                    u = o.n(i),
                    s = o(1856),
                    r = o(6179),
                    l = o.n(r),
                    d = o(7515),
                    m = o(3815),
                    c = o(560),
                    p = o(7727),
                    _ = o(7701);
                const C = 'VerticalBar_base_f3',
                    g = 'VerticalBar_base__nonActive_42',
                    E = 'VerticalBar_topButton_d7',
                    v = 'VerticalBar_bottomButton_06',
                    b = 'VerticalBar_track_df',
                    A = 'VerticalBar_thumb_32',
                    y = 'VerticalBar_rail_43',
                    F = 'disable',
                    D = () => {},
                    B = { pending: !1, offset: 0 },
                    w = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    I = (e, t) => Math.max(20, e.offsetHeight * t),
                    f = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: o = w, onDrag: a = D }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            f = (0, r.useRef)(null),
                            x = (0, r.useRef)(null),
                            R = (0, r.useRef)(null),
                            S = e.stepTimeout || 100,
                            P = (0, r.useState)(B),
                            T = P[0],
                            k = P[1],
                            M = (0, r.useCallback)(
                                (e) => {
                                    k(e),
                                        R.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: R.current });
                                },
                                [a],
                            ),
                            N = (0, m.z)(() => {
                                const t = R.current,
                                    o = x.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && i && t && o)) return;
                                const u = Math.min(1, a / i);
                                return (
                                    (t.style.height = `${I(o, u)}px`),
                                    t.classList.add(A),
                                    n.current && (1 === u ? n.current.classList.add(g) : n.current.classList.remove(g)),
                                    u
                                );
                            }),
                            L = (0, m.z)(() => {
                                const t = x.current,
                                    o = R.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && o && n)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    r = (0, d.u)(0, 1, u / (n - a)),
                                    l = (t.offsetHeight - I(t, s)) * r;
                                (o.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (i.current && f.current && x.current && R.current) {
                                            if (0 === e)
                                                return i.current.classList.add(F), void f.current.classList.remove(F);
                                            if (
                                                ((t = x.current),
                                                (o = R.current),
                                                e - (t.offsetHeight - o.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(F), void f.current.classList.add(F);
                                            var t, o;
                                            i.current.classList.remove(F), f.current.classList.remove(F);
                                        }
                                    })(l);
                            }),
                            O = (0, m.z)(() => {
                                h(e, () => {
                                    N(), L();
                                });
                            });
                        (0, r.useEffect)(() => (0, s.v)(O)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        L();
                                    });
                                };
                                let o = D;
                                const a = () => {
                                    o(), (o = (0, s.v)(O));
                                };
                                return (
                                    e.events.on('recalculateContent', O),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        o(),
                                            e.events.off('recalculateContent', O),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!T.pending) return;
                                const t = (t) => {
                                        h(e, (o) => {
                                            const n = x.current,
                                                i = R.current,
                                                u = e.getContainerSize();
                                            if (!n || !i || !u) return;
                                            const s = t.screenY - T.offset - n.getBoundingClientRect().y,
                                                r = (s / n.offsetHeight) * u;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(o, r),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: o.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: r });
                                        });
                                    },
                                    o = () => {
                                        window.removeEventListener('mousemove', t), M(B);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', o),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', o);
                                    }
                                );
                            }, [e, T.offset, T.pending, a, M]);
                        const H = (0, c.B)((t) => e.applyStepTo(t), S, [e]),
                            U = H[0],
                            G = H[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', G, !0),
                                () => document.removeEventListener('mouseup', G, !0)
                            ),
                            [G],
                        );
                        const z = (e) => {
                            e.target.classList.contains(F) || (0, p.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: u()(C, t.base), ref: n, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: u()(E, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(F) ||
                                        0 !== e.button ||
                                        ((0, p.G)('play'), U(_.Nm.Next));
                                },
                                ref: i,
                                onMouseEnter: z,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: u()(b, t.track),
                                    onMouseDown: (t) => {
                                        const a = R.current;
                                        if (a && 0 === t.button)
                                            if (((0, p.G)('play'), t.target === a))
                                                M({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    R.current &&
                                                        h(e, (a) => {
                                                            if (!a) return;
                                                            const n = o(e),
                                                                i = e.clampPosition(a, a.scrollTop + n * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: x,
                                    onMouseEnter: z,
                                },
                                l().createElement('div', { ref: R, className: t.thumb }),
                                l().createElement('div', { className: u()(y, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: u()(v, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(F) ||
                                        0 !== e.button ||
                                        ((0, p.G)('play'), U(_.Nm.Prev));
                                },
                                onMouseUp: G,
                                ref: f,
                                onMouseEnter: z,
                            }),
                        );
                    }),
                    x = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    R = ({
                        children: e,
                        api: t,
                        className: o,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: d,
                        onDrag: m,
                    }) => {
                        const c = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: u()(x.base, e.base) });
                            }, [a]),
                            p = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: u()(x.defaultScroll, o), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: u()(x.area, n) },
                                l().createElement(S, { className: i, classNames: s, api: p }, e),
                            ),
                            l().createElement(f, { getStepByRailClick: d, api: t, onDrag: m, classNames: c }),
                        );
                    },
                    S = ({ className: e, classNames: t, children: o, api: a }) => (
                        (0, r.useEffect)(() => (0, s.v)(a.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: u()(x.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: u()(x.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                o,
                            ),
                        )
                    );
                S.Default = R;
                const P = { Vertical: a, Horizontal: n };
            },
            7613: (e, t, o) => {
                'use strict';
                o.d(t, { ZP: () => B });
                var a = o(6483),
                    n = o.n(a),
                    i = o(3779),
                    u = o(280),
                    s = o(3532),
                    r = o.n(s),
                    l = o(9887),
                    d = o.n(l),
                    m = o(3377),
                    c = o(6179),
                    p = o.n(c),
                    _ = o(3393);
                const C = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                Object.keys(d());
                const E = Object.keys(r()),
                    v = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    b = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    A = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    y = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    F =
                        (Object.keys(y),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': v,
                            'heading-H36': v,
                            'heading-H28': b,
                            'heading-H24': b,
                            'heading-H24R': b,
                            'heading-H22': b,
                            'heading-H20R': b,
                            'heading-H18': b,
                            'heading-H15': A,
                            'heading-H14': A,
                            'paragraph-P24': b,
                            'paragraph-P18': b,
                            'paragraph-P16': b,
                            'paragraph-P14': A,
                            'paragraph-P12': A,
                            'paragraph-P10': A,
                        }),
                    D =
                        (Object.keys(F),
                        (e) =>
                            e
                                ? ((e) => E.includes(e))(e)
                                    ? { colorClassName: _.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    B = (0, m.ZP)((e) => {
                        let t = e.text,
                            o = e.variant,
                            a = e.className,
                            s = e.color,
                            r = e.m,
                            l = e.mt,
                            d = void 0 === l ? r : l,
                            m = e.mr,
                            E = void 0 === m ? r : m,
                            v = e.mb,
                            b = void 0 === v ? r : v,
                            A = e.ml,
                            y = void 0 === A ? r : A,
                            B = e.style,
                            w = e.format,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var o,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                                return n;
                            })(e, C);
                        const I = (0, c.useMemo)(() => {
                                const e = D(s),
                                    t = e.colorClassName,
                                    o = e.colorStyle,
                                    a = void 0 === o ? {} : o;
                                return { computedStyle: Object.assign({}, B, a), colorClassName: t };
                            }, [B, s]),
                            f = I.computedStyle,
                            x = I.colorClassName;
                        return p().createElement(
                            i.ZP,
                            g(
                                {
                                    className: n()(_.Z.base, o && _.Z[o], x, a),
                                    style: f,
                                    mt: !0 === d ? F[o || 'paragraph-P16'].mt : d,
                                    mr: !0 === E ? F[o || 'paragraph-P16'].mr : E,
                                    mb: !0 === b ? F[o || 'paragraph-P16'].mb : b,
                                    ml: !0 === y ? F[o || 'paragraph-P16'].ml : y,
                                },
                                h,
                            ),
                            void 0 !== w ? p().createElement(u.z, g({}, w, { text: t })) : t,
                        );
                    });
            },
            7078: (e, t, o) => {
                'use strict';
                o.d(t, { t: () => r });
                var a = o(6179),
                    n = o.n(a),
                    i = o(2056);
                const u = ['children'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const r = (e) => {
                    let t = e.children,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var o,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                            return n;
                        })(e, u);
                    return n().createElement(
                        i.u,
                        s(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            o,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, o) => {
                'use strict';
                o.d(t, { l: () => l });
                var a = o(6179),
                    n = o.n(a),
                    i = o(7078),
                    u = o(6373),
                    s = o(2056);
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: o }) => {
                    if (!t) return e;
                    const a = n().createElement('div', { className: o }, e);
                    if (t.header || t.body) return n().createElement(u.i, t, a);
                    const l = t.contentId,
                        d = t.args,
                        m = null == d ? void 0 : d.contentId;
                    return l || m
                        ? n().createElement(s.u, r({}, t, { contentId: l || m }), a)
                        : n().createElement(i.t, t, a);
                };
            },
            6373: (e, t, o) => {
                'use strict';
                o.d(t, { i: () => l });
                var a = o(2056),
                    n = o(6179),
                    i = o.n(n);
                const u = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const r = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            o = e.body,
                            l = e.header,
                            d = e.note,
                            m = e.alert,
                            c = e.args,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var o,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                                return n;
                            })(e, u);
                        const _ = (0, n.useMemo)(() => {
                            const e = Object.assign({}, c, { body: o, header: l, note: d, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, o, l, d, c]);
                        return i().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((C = null == c ? void 0 : c.hasHtmlContent),
                                        C ? r.SimpleTooltipHtmlContent('resId') : r.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                p,
                            ),
                            t,
                        );
                        var C;
                    };
            },
            2056: (e, t, o) => {
                'use strict';
                o.d(t, { u: () => l });
                var a = o(7902),
                    n = o(4179),
                    i = o(6179);
                const u = [
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
                function s(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const o = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                o.number = t;
                                break;
                            case 'boolean':
                                o.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                o.string = t.toString();
                        }
                        return o;
                    });
                }
                const r = (e, t, o = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                o,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            o = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            d = e.onMouseLeave,
                            m = e.onMouseDown,
                            c = e.onClick,
                            p = e.ignoreShowDelay,
                            _ = void 0 !== p && p,
                            C = e.ignoreMouseClick,
                            g = void 0 !== C && C,
                            E = e.decoratorId,
                            v = void 0 === E ? 0 : E,
                            b = e.isEnabled,
                            A = void 0 === b || b,
                            y = e.targetId,
                            F = void 0 === y ? 0 : y,
                            D = e.onShow,
                            B = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var o,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                                return n;
                            })(e, u);
                        const h = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            I = (0, i.useMemo)(() => F || (0, a.F)().resId, [F]),
                            f = (0, i.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (r(o, v, { isMouseEvent: !0, on: !0, arguments: s(n) }, I),
                                    D && D(),
                                    (h.current.isVisible = !0));
                            }, [o, v, n, I, D]),
                            x = (0, i.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        r(o, v, { on: !1 }, I),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1);
                                }
                            }, [o, v, I, B]),
                            R = (0, i.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(h.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === A && x();
                            }, [A, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return A
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, _ ? 100 : 400)),
                                                      l && l(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              x(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === g && x(), null == c || c(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === g && x(), null == m || m(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var S;
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
            7515: (e, t, o) => {
                'use strict';
                o.d(t, { u: () => a });
                const a = (e, t, o) => (o < e ? e : o > t ? t : o);
            },
            1856: (e, t, o) => {
                'use strict';
                o.d(t, { v: () => a });
                const a = (e) => {
                    let t,
                        o = null;
                    return (
                        (o = requestAnimationFrame(() => {
                            o = requestAnimationFrame(() => {
                                (o = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== o && cancelAnimationFrame(o);
                        }
                    );
                };
            },
            122: (e, t, o) => {
                'use strict';
                o.d(t, { F: () => a });
                const a = (e, t) => {
                    let o;
                    const a = setTimeout(() => {
                        o = e();
                    }, t);
                    return () => {
                        'function' == typeof o && o(), clearTimeout(a);
                    };
                };
            },
            8246: (e, t, o) => {
                'use strict';
                o.d(t, { U: () => s });
                var a = o(3138);
                function n(e, t) {
                    var o = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (o) return (o = o.call(e)).next.bind(o);
                    if (
                        Array.isArray(e) ||
                        (o = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === o && e.constructor && (o = e.constructor.name);
                            if ('Map' === o || 'Set' === o) return Array.from(e);
                            if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return i(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        o && (e = o);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var o = 0, a = new Array(t); o < t; o++) a[o] = e[o];
                    return a;
                }
                const u = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: o = u, context: i = 'model' } = {}) {
                    const s = new Map();
                    function r(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, o) => {
                            o.forEach((t) => {
                                const o = s.get(t);
                                void 0 !== o && o(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = o(t),
                            n = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const o = e[t];
                                  return 'function' == typeof o ? o.bind(e) : o;
                              }, n);
                    };
                    return {
                        subscribe: (o, n) => {
                            const u = 'string' == typeof n ? `${i}.${n}` : i,
                                r = a.O.view.addModelObserver(u, t, !0);
                            return s.set(r, o), e && o(l(n)), r;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const o = l(t);
                            return (...t) => {
                                o(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, o = n(s.keys()); !(e = o()).done; ) {
                                r(e.value, t);
                            }
                        },
                        unsubscribe: r,
                    };
                }
            },
            3215: (e, t, o) => {
                'use strict';
                o.d(t, { q: () => r });
                var a = o(4598),
                    n = o(9174),
                    i = o(6179),
                    u = o.n(i),
                    s = o(8246);
                const r = () => (e, t) => {
                    const o = (0, i.createContext)({});
                    return [
                        function ({ mode: r = 'real', options: l, children: d, mocks: m }) {
                            const c = (0, i.useRef)([]),
                                p = (o, i, u) => {
                                    var r;
                                    const l = s.U(i),
                                        d =
                                            'real' === o
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (r = null == u ? void 0 : u.getter) ? r : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === o ? (null == u ? void 0 : u.getter(e)) : d.readByPath(e),
                                        p = (e) => c.current.push(e),
                                        _ = e({
                                            mode: o,
                                            readByPath: m,
                                            externalModel: d,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : m(e),
                                                        u = n.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === o &&
                                                            d.subscribe(
                                                                (0, n.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : m(e),
                                                        u = n.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === o &&
                                                            d.subscribe(
                                                                (0, n.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = m(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === o &&
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
                                                            u = Object.entries(i),
                                                            s = u.reduce(
                                                                (e, [t, o]) => ((e[o] = n.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === o &&
                                                                d.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        u.forEach(([t, o]) => {
                                                                            s[o].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: p,
                                        }),
                                        C = { mode: o, model: _, externalModel: d, cleanup: p };
                                    return {
                                        model: _,
                                        controls: 'mocks' === o && u ? u.controls(C) : t(C),
                                        externalModel: d,
                                        mode: o,
                                    };
                                },
                                _ = (0, i.useRef)(!1),
                                C = (0, i.useState)(r),
                                g = C[0],
                                E = C[1],
                                v = (0, i.useState)(() => p(r, l, m)),
                                b = v[0],
                                A = v[1];
                            return (
                                (0, i.useEffect)(() => {
                                    _.current ? A(p(g, l, m)) : (_.current = !0);
                                }, [m, g, l]),
                                (0, i.useEffect)(() => {
                                    E(r);
                                }, [r]),
                                (0, i.useEffect)(
                                    () => () => {
                                        b.externalModel.dispose(), c.current.forEach((e) => e());
                                    },
                                    [b],
                                ),
                                u().createElement(o.Provider, { value: b }, d)
                            );
                        },
                        () => (0, i.useContext)(o),
                    ];
                };
            },
            7044: (e, t, o) => {
                'use strict';
                o(3649), o(728), o(4179);
                Date.now();
            },
            527: (e, t, o) => {
                'use strict';
                o.r(t), o.d(t, { mouse: () => s, onResize: () => i });
                var a = o(2472),
                    n = o(1176);
                const i = (0, a.E)('clientResized'),
                    u = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function o() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', o))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', o))
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, o) => (
                            (t[o] = (function (t) {
                                return (o) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        s = u[t]((e) => o([e, 'outside']));
                                    function r(e) {
                                        o([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(i, r),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(o)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
            5959: (e, t, o) => {
                'use strict';
                o.r(t),
                    o.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => u,
                    });
                var a = o(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const u = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, o) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                o.d(t, { R: () => a });
            },
            2472: (e, t, o) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                o.d(t, { E: () => a });
            },
            3138: (e, t, o) => {
                'use strict';
                o.d(t, { O: () => n });
                var a = o(5959);
                const n = { view: o(7641), client: a };
            },
            3722: (e, t, o) => {
                'use strict';
                function a(e, t, o = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, o);
                }
                function n(e, t, o) {
                    return `url(${a(e, t, o)})`;
                }
                o.r(t), o.d(t, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, t, o) => {
                'use strict';
                o.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, o) => {
                'use strict';
                o.d(t, { U: () => n });
                var a = o(2472);
                const n = {
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
            7641: (e, t, o) => {
                'use strict';
                o.r(t),
                    o.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => i.U,
                        extraSize: () => h,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => C,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => g,
                        getSize: () => c,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => F,
                        isFocused: () => A,
                        pxToRem: () => E,
                        remToPx: () => v,
                        resize: () => p,
                        sendEvent: () => u.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => r,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => I,
                    });
                var a = o(3722),
                    n = o(6112),
                    i = o(6538),
                    u = o(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function r(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, o, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, o, a);
                }
                function d(e, t, o) {
                    return viewEnv.addDataChangedCallback(e, t, o);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, o = 'px') {
                    return 'rem' === o ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function _(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function C() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    h = {
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
            8566: (e, t, o) => {
                'use strict';
                o.d(t, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    i = 16,
                    u = 32,
                    s = 64,
                    r = (e, t) => {
                        const o = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var o,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: o, type: e }, u, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
                                                  const o = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: o, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: o, name: e, bool: t };
                                                      default:
                                                          return { __Type: o, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: o, type: e }, u));
                        }
                        return viewEnv.handleViewEvent({ __Type: o, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            r('popover' === e ? n : u);
                        },
                        minimize() {
                            r(s);
                        },
                        move(e) {
                            r(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, o) => {
                'use strict';
                o.d(t, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, o) => {
                'use strict';
                o.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let o,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((o = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== o &&
                                window.subViews[o] &&
                                (a = window.subViews[o].id)),
                        { caller: o, stack: t, resId: a }
                    );
                };
            },
            3377: (e, t, o) => {
                'use strict';
                o.d(t, { ZP: () => d });
                var a = o(5415),
                    n = o(6179),
                    i = o.n(n);
                const u = ['xl', 'lg', 'md', 'sm', 'xs'],
                    s = (e) => e.includes('_') && ((e) => u.includes(e))(e.split('_').at(-1)),
                    r = [a.cJ.ExtraLarge, a.cJ.Large, a.cJ.Medium, a.cJ.Small, a.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((o, a) => {
                            if (a in o) return o;
                            if (s(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in o) return o;
                                const i = r.indexOf(t),
                                    s = (-1 !== i ? u.slice(i) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = s ? e[s] : void 0;
                                return (o[n] = void 0 !== l ? l : e[n]), o;
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, t) => u.some((o) => void 0 !== t[`${e}_${o}`]))(a, e) ||
                                    (o[a] = n),
                                o
                            );
                        }, {}),
                    d = (e, t = l) => {
                        const o = (
                            (e, t = l) =>
                            (o) => {
                                const u = (0, a.GS)().mediaSize,
                                    s = (0, n.useMemo)(() => t(o, u), [o, u]);
                                return i().createElement(e, s);
                            }
                        )(e, t);
                        return i().memo((t) =>
                            Object.keys(t).some((e) => s(e) && void 0 !== t[e])
                                ? i().createElement(o, t)
                                : i().createElement(e, t),
                        );
                    };
            },
            2344: (e, t, o) => {
                'use strict';
                o.d(t, { eI: () => a.Z });
                o(2790), o(3469), o(2133), o(4777);
                var a = o(579);
                o(5360), o(9056);
            },
            6536: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => n });
                var a = o(6179);
                const n = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, o) => {
                'use strict';
                o(7044), o(6179);
            },
            2133: (e, t, o) => {
                'use strict';
                o(6179);
            },
            3815: (e, t, o) => {
                'use strict';
                o.d(t, { z: () => i });
                var a = o(6179);
                const n = [];
                function i(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), n)
                    );
                }
            },
            4777: (e, t, o) => {
                'use strict';
                o(7727), o(6179);
            },
            5415: (e, t, o) => {
                'use strict';
                o.d(t, { GS: () => l, cJ: () => u });
                var a = o(6179),
                    n = o(7739),
                    i = o(1043);
                let u, s, r;
                !(function (e) {
                    (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(u || (u = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(r || (r = {}));
                const l = () => {
                    const e = (0, a.useContext)(n.YN),
                        t = e.width,
                        o = e.height,
                        i = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return u.ExtraLarge;
                                case e.large:
                                    return u.Large;
                                case e.medium:
                                    return u.Medium;
                                case e.small:
                                    return u.Small;
                                case e.extraSmall:
                                    return u.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), u.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        d = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return r.ExtraLarge;
                                case e.largeHeight:
                                    return r.Large;
                                case e.mediumHeight:
                                    return r.Medium;
                                case e.smallHeight:
                                    return r.Small;
                                case e.extraSmallHeight:
                                    return r.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), r.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: i, mediaWidth: l, mediaHeight: d, remScreenWidth: t, remScreenHeight: o };
                };
            },
            5360: (e, t, o) => {
                'use strict';
                o(6536);
                var a = o(4179);
                o(6179);
                a.Sw.instance;
                let n;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(n || (n = {}));
            },
            9056: (e, t, o) => {
                'use strict';
                var a = o(4179);
                o(6179);
                a.Sw.instance;
            },
            2039: (e, t, o) => {
                'use strict';
                o.d(t, { k: () => n });
                var a = o(6179);
                const n = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
            },
            2790: (e, t, o) => {
                'use strict';
                o(6179);
            },
            560: (e, t, o) => {
                'use strict';
                o.d(t, { B: () => n });
                var a = o(6179);
                function n(e, t, o = []) {
                    const n = (0, a.useRef)(0),
                        i = (0, a.useCallback)(() => window.clearInterval(n.current), o || []);
                    (0, a.useEffect)(() => i, [i]);
                    const u = (null != o ? o : []).concat([t]);
                    return [
                        (0, a.useCallback)((o) => {
                            (n.current = window.setInterval(() => e(o, !0), t)), e(o, !1);
                        }, u),
                        i,
                    ];
                }
            },
            579: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => i });
                var a = o(3138),
                    n = o(6179);
                const i = () => {
                    const e = a.O.view.getSize('rem'),
                        t = (0, n.useState)({ height: e.height, width: e.width }),
                        o = t[0],
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
                        o
                    );
                };
            },
            1396: (e, t, o) => {
                'use strict';
                o.d(t, { K: () => i });
                var a = o(6179),
                    n = o(2039);
                function i() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, n.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t, o) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            t(), (e.current = 0);
                                        }, o));
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
            5521: (e, t, o) => {
                'use strict';
                let a, n;
                o.d(t, { n: () => a }),
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
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(a || (a = {})),
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
                    })(n || (n = {}));
            },
            5175: (e, t, o) => {
                'use strict';
                o.d(t, { c: () => i });
                var a = o(9480);
                const n = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? a.map(e, (e) => ('object' == typeof e ? n(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? n(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? n(t) : t]),
                                    )
                            : e,
                    i = (e) => n(e);
            },
            9480: (e, t, o) => {
                'use strict';
                o.d(t, { map: () => a });
                function a(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, o, a) => t(null == e ? void 0 : e.value, o, a));
                }
            },
            1612: (e, t, o) => {
                'use strict';
                o.d(t, { h: () => n });
                var a = o(9174);
                function n(e) {
                    const t = {};
                    for (const o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            const n = e[o];
                            t[o] = (0, a.aD)(n);
                        }
                    return t;
                }
            },
            7727: (e, t, o) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                o.d(t, { G: () => a });
            },
            3649: (e, t, o) => {
                'use strict';
                let a;
                function n(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const o = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(o, -o)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                o.d(t, { BN: () => i, Uw: () => c, uF: () => n, v2: () => a }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const u = (e, t, o) => {
                        if (o % 2) {
                            const o = e.pop();
                            return [...e, o + t];
                        }
                        return [...e, t];
                    },
                    s = (e, t, o) => {
                        if (0 === o) return [t];
                        if (o % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const o = e.pop();
                            return [...e, o + t];
                        }
                    },
                    r = (e, t, o = a.left) => e.split(t).reduce(o === a.left ? u : s, []),
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
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, t = a.left) => {
                        const o = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return d.includes(o)
                            ? l(e)
                            : ((e, t = a.left) => {
                                  let o = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      i = e.replace(/&nbsp;/g, ' ');
                                  return r(i, /( )/, t).forEach((e) => (o = o.concat(r(e, n, a.left)))), o;
                              })(e, t);
                    },
                    c = (e, t, o) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (o && e in o ? o[e] : m(e, t)));
            },
            728: (e, t, o) => {
                'use strict';
                let a;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
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
                        (e.DATE_YEAR = 'date-year');
                })(a || (a = {}));
            },
            1358: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => i });
                var a = o(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, o = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, o, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  o > 0 && (this._views[o] ? this._views[o].push(i) : (this._views[o] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let o = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((o = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            o || console.error("Can't remove callback by id:", e),
                            o
                        );
                    }
                    _emmitDataChanged(e, t, o) {
                        o.forEach((o) => {
                            const a = this._callbacks[o];
                            void 0 !== a && a(e, t);
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
            4179: (e, t, o) => {
                'use strict';
                o.d(t, { Sw: () => i.Z, B3: () => l, Z5: () => u, B0: () => r, ry: () => v });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: o }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    o();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const o = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== o || t !== a)),
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
                a.__instance = void 0;
                const n = a;
                var i = o(1358);
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, o) => userLocale.getTimeFormat(e, t, void 0 === o || o),
                        getTimeString: (e, t, o) => userLocale.getTimeString(e, t, void 0 === o || o),
                    };
                let r;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(r || (r = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var p = o(5521),
                    _ = o(3138);
                const C = ['args'];
                function g(e, t, o, a, n, i, u) {
                    try {
                        var s = e[i](u),
                            r = s.value;
                    } catch (e) {
                        return void o(e);
                    }
                    s.done ? t(r) : Promise.resolve(r).then(a, n);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                        o = arguments;
                                    return new Promise(function (a, n) {
                                        var i = e.apply(t, o);
                                        function u(e) {
                                            g(i, a, n, u, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(i, a, n, u, s, 'throw', e);
                                        }
                                        u(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const o = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var o,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                                    return n;
                                })(t, C);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: o, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const o = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          o.number = t;
                                                          break;
                                                      case 'boolean':
                                                          o.bool = t;
                                                          break;
                                                      default:
                                                          o.string = t.toString();
                                                  }
                                                  return o;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: o, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: o, type: e });
                        var a;
                    },
                    A = () => b(r.CLOSE),
                    y = (e, t) => {
                        e.keyCode === p.n.ESCAPE && t();
                    };
                var F = o(7572);
                const D = n.instance,
                    B = {
                        DataTracker: i.Z,
                        ViewModel: F.Z,
                        ViewEventType: r,
                        NumberFormatType: l,
                        RealFormatType: d,
                        TimeFormatType: m,
                        DateFormatType: c,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => b(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: A,
                        sendClosePopOverEvent: () => b(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, o = 0) => {
                            b(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: o, args: t });
                        },
                        sendShowPopOverEvent: (e, t, o, a, n = R.invalid('resId'), i) => {
                            const u = _.O.view.getViewGlobalPosition(),
                                s = o.getBoundingClientRect(),
                                l = s.x,
                                d = s.y,
                                m = s.width,
                                c = s.height,
                                p = {
                                    x: _.O.view.pxToRem(l) + u.x,
                                    y: _.O.view.pxToRem(d) + u.y,
                                    width: _.O.view.pxToRem(m),
                                    height: _.O.view.pxToRem(c),
                                };
                            b(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: E(p),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => y(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            y(e, A);
                        },
                        handleViewEvent: b,
                        onBindingsReady: v,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
                        dumpViewModel: function e(t) {
                            const o = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        o[a] = [];
                                        for (let t = 0; t < n.length; t++) o[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (o[a] = e(t[a]))
                                            : (o[a] = t[a]);
                                }
                            return o;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: u,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = B;
            },
            6096: (e, t, o) => {
                'use strict';
                var a = o(6179),
                    n = o.n(a),
                    i = o(1612);
                const u = {
                    getter:
                        ((s = {
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Дополнительные кредиты за бой',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                                            label: 'Кредиты',
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
                        (e) => (e ? e.split('.').reduce((e, t) => e[t], s) : s)),
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
                var s,
                    r = o(3215),
                    l = o(4598),
                    d = o(5175),
                    m = o(3946);
                const c = (0, r.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    playStreakRewardsCalendar: e.array('rewardsCalendar'),
                                    playStreakBattleTypes: e.array('battleTypes'),
                                },
                                o = (0, m.Om)(() => (0, d.c)(t.playStreakRewardsCalendar.get()), { equals: l.jv }),
                                a = (0, m.Om)(() => (0, d.c)(t.playStreakBattleTypes.get()), { equals: l.jv });
                            return Object.assign({}, t, {
                                computes: { getPlayStreakRewardsCalendar: o, getPlayStreakBattleTypes: a },
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
                var C = o(6483),
                    g = o.n(C),
                    E = o(7727),
                    v = o(8515),
                    b = o(7030),
                    A = o(2344),
                    y = o(2862),
                    F = o(5739),
                    D = o(6373),
                    B = o(5415),
                    w = o(1396);
                const h = 'Check_base_75',
                    I = ({ className: e }) => n().createElement('div', { className: g()(h, e) });
                var f = o(7736);
                const x = Object.assign({}, y.E4, {
                        RandomEquipment: 'random_equipment',
                        EquipCoin: 'equipCoin',
                        RandomGoodie: 'random_goodie',
                    }),
                    S = 'largeRepairkit',
                    P = 'largeMedkit',
                    T = 'autoExtinguishers',
                    k = 'rammer',
                    M = 'improvedVentilation',
                    N = 'coatedOptics',
                    L = 'enhancedAimDrives',
                    O = 'improvedConfiguration',
                    H = 'aimingStabilizer',
                    U = [
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
                    G = [S, P, T, k, M, N, L, O, H],
                    z = 3e3,
                    W = 1e3,
                    j = 500,
                    Z = 200,
                    q = 350,
                    $ = 0,
                    V = 350,
                    X = {
                        cardTooltip: R.strings.play_streak.window.playStreakRewards.calendar.card.tooltip,
                        recoveryMessage: R.strings.play_streak.window.playStreakRewards.recoveryMessage.tooltip,
                    },
                    Y = {
                        freezed: !1,
                        withStack: !1,
                        type: f.r.Growing,
                        line: { delay: 0, duration: 1500 },
                        delta: { delay: 0, duration: 2e3 },
                    };
                var K = o(729);
                let Q, J, ee, te, oe;
                !(function (e) {
                    (e.left = 'left'), (e.right = 'right');
                })(Q || (Q = {})),
                    (function (e) {
                        (e[(e.small = 1280)] = 'small'),
                            (e[(e.mediaSmall = 1366)] = 'mediaSmall'),
                            (e[(e.mediaMedium = 1600)] = 'mediaMedium'),
                            (e[(e.mediaLarge = 1920)] = 'mediaLarge');
                    })(J || (J = {})),
                    (function (e) {
                        (e[(e.small = 15)] = 'small'),
                            (e[(e.mediaSmall = 24)] = 'mediaSmall'),
                            (e[(e.mediaMedium = 24)] = 'mediaMedium'),
                            (e[(e.mediaLarge = 32)] = 'mediaLarge');
                    })(ee || (ee = {})),
                    (function (e) {
                        (e.rare = 'streak_periodic_rent'),
                            (e.weekly = 'weekly'),
                            (e.monthly = 'monthly'),
                            (e.final_rewards = 'streak_final_rewards');
                    })(te || (te = {})),
                    (function (e) {
                        (e.Init = 'INIT'),
                            (e.Start = 'START'),
                            (e.Progress = 'PROGRESS'),
                            (e.Complete = 'COMPLETE'),
                            (e.ChangeStatus = 'CHANGE_STATUS');
                    })(oe || (oe = {}));
                const ae = (e) => {
                        let t = 0;
                        return (
                            e.forEach((e) => {
                                const o = e.day;
                                !isNaN(o) && (null === t || o > t) && (t = o);
                            }),
                            t
                        );
                    },
                    ne = (e) =>
                        e
                            .map((e) => {
                                var t, o;
                                return e.name === x.RandomEquipment || e.name === x.RandomGoodie
                                    ? {
                                          name: x.Items,
                                          item: e.name,
                                          image: (0, K.ry)(e, y.h2.Big),
                                          value: e.value,
                                          valueType: y.$h.MULTI,
                                          tooltipArgs: (0, K.pI)({ tooltipId: e.tooltipId }),
                                          vehCD: null != (t = null == e ? void 0 : e.vehCD) ? t : null,
                                      }
                                    : {
                                          name: e.name,
                                          image: (0, K.ry)(e, y.h2.Big),
                                          value: e.value,
                                          valueType: (0, K.p3)(e.name),
                                          tooltipArgs: (0, K.pI)({ tooltipId: e.tooltipId }),
                                          vehCD: null != (o = null == e ? void 0 : e.vehCD) ? o : null,
                                          special: e.overlayType,
                                      };
                            })
                            .filter(Boolean),
                    ie = (e, t, o) => {
                        const a = {};
                        e.forEach((e) => {
                            e.tags &&
                                (e.tags.includes(te.weekly) || e.tags.includes(te.monthly)) &&
                                (e.day < t || (e.day <= t && o)) &&
                                e.rewards.forEach((e) => {
                                    const t = e.name === y.Rl.Items ? e.item || '' : e.name || '',
                                        o = e.value ? e.value.toString() : '0';
                                    t &&
                                        (a[t]
                                            ? (a[t].value = (parseInt(a[t].value, 10) + parseInt(o, 10)).toString())
                                            : (a[t] = Object.assign({}, e, {
                                                  item: e.item || '',
                                                  overlayType: e.overlayType || '',
                                                  value: o,
                                              })));
                                });
                        }),
                            Object.values(a).forEach((e) => {
                                e.name === y.Rl.PremiumPlus &&
                                    parseInt(e.value, 10) > 3 &&
                                    ((e.name = y.Rl.Items), (e.item = y.Rl.PremiumUniversal)),
                                    e.name === x.RandomGoodie && ((e.name = y.Rl.Items), (e.item = x.RandomGoodie)),
                                    e.name === x.RandomEquipment &&
                                        ((e.name = y.Rl.Items), (e.item = x.RandomEquipment));
                            });
                        const n = (e) =>
                            e.name === y.E4.Items
                                ? e.item === y.Rl.PremiumUniversal
                                    ? U.indexOf(y.E4.PremiumUniversal)
                                    : e.item === x.RandomEquipment
                                      ? U.indexOf(x.RandomEquipment)
                                      : e.item === x.RandomGoodie
                                        ? U.indexOf(x.RandomGoodie)
                                        : U.indexOf(y.E4.Items)
                                : U.indexOf(e.name);
                        return Object.values(a).sort((e, t) => {
                            const o = n(e),
                                a = n(t);
                            return o !== a
                                ? o - a
                                : e.name === y.E4.Items && t.name === y.E4.Items
                                  ? G.indexOf(e.item) - G.indexOf(t.item)
                                  : 0;
                        });
                    },
                    ue = ['customizations', 'vehicles_rent', 'vehicles'],
                    se = {
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
                        check: 'Card_check_3b',
                        scaleCheck: 'Card_scaleCheck_6a',
                        disableBlink: 'Card_disableBlink_28',
                    };
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const le = ({
                        award: e,
                        streakLength: t,
                        dailyWin: o,
                        redemptionMaxDayCount: i,
                        redemptionDayCount: u,
                        isBlocked: s,
                        isAnimated: r,
                        setAnimated: l,
                        isShowBlocked: d,
                        setShowBlocked: m,
                    }) => {
                        const c = e.day,
                            p = e.rewards,
                            _ = e.tags,
                            C = (0, a.useMemo)(() => c < t || (c === t && o), [c, t, o]),
                            v = c < t,
                            b = c > t,
                            A = _ && _.includes(te.rare),
                            h = _ && _.includes(te.weekly),
                            f = _ && _.includes(te.monthly),
                            x = c === t,
                            S = (0, a.useState)(!1),
                            P = S[0],
                            T = S[1],
                            k = (0, a.useState)(!1),
                            M = k[0],
                            N = k[1],
                            L = (0, a.useState)(!1),
                            O = L[0],
                            H = L[1],
                            U = (0, a.useState)(!1),
                            G = U[0],
                            Y = U[1],
                            K = (0, a.useState)(!1),
                            Q = K[0],
                            J = K[1],
                            ee = (0, a.useState)(!1),
                            ae = ee[0],
                            ie = ee[1],
                            ue = (0, w.K)(),
                            le = (0, w.K)(),
                            de = (e, t) => {
                                le.run(() => {
                                    ce(e);
                                }, t);
                            },
                            me = (0, a.useCallback)(() => {
                                ue.isRunning && ue.clear(), le.isRunning && le.clear();
                            }, [ue, le]);
                        (0, a.useEffect)(() => {
                            o && x && r && !d ? de(oe.Init, z) : o && r && d && u === i && de(oe.Init, W);
                        }, [o, r, x]);
                        const ce = (e) => {
                                switch ((me(), e)) {
                                    case oe.Init:
                                        return N(!0), void de(oe.Start, j);
                                    case oe.Start:
                                        return H(!0), void de(oe.Progress, Z);
                                    case oe.Progress:
                                        return (
                                            Y(!0),
                                            void (o && d && u === i
                                                ? (ie(!0), de(oe.ChangeStatus, V))
                                                : de(oe.Complete, q))
                                        );
                                    case oe.ChangeStatus:
                                        return ie(!1), m(!1), void de(oe.Complete, $);
                                    case oe.Complete:
                                        return (
                                            (0, E.G)(R.sounds.play_streak_reward_animation()),
                                            N(!1),
                                            Y(!1),
                                            H(!1),
                                            J(!0),
                                            void l(!1)
                                        );
                                }
                            },
                            pe = (0, a.useCallback)(() => T(!0), []),
                            _e = (0, a.useCallback)(() => T(!1), []),
                            Ce =
                                1 === p.length
                                    ? ne(p)[0]
                                    : ((e) => {
                                          var t, o, a, n;
                                          const i = e
                                                  .sort((e, t) => {
                                                      var o, a, n;
                                                      return null !=
                                                          (o =
                                                              null == (a = e.item)
                                                                  ? void 0
                                                                  : a.localeCompare(null != (n = t.item) ? n : ''))
                                                          ? o
                                                          : 0;
                                                  })
                                                  .reduce((e, t) => {
                                                      var o, a;
                                                      return (
                                                          e +
                                                          (null != (o = t.item) ? o : '') +
                                                          (null != (a = t.overlayType) ? a : '')
                                                      );
                                                  }, ''),
                                              u = e.reduce((e, t) => {
                                                  var o;
                                                  return `${e}• ${null != (o = t.label) ? o : ''}${t.value && '1' !== t.value ? ` (x${t.value})` : ''}\n`;
                                              }, '');
                                          return [
                                              {
                                                  name: null != (t = null == (o = e[0]) ? void 0 : o.name) ? t : '',
                                                  image: `R.images.gui.maps.icons.playStreak.window.rewards.${i}`,
                                                  value: null != (a = null == (n = e[0]) ? void 0 : n.value) ? a : '1',
                                                  valueType: y.$h.MULTI,
                                                  tooltipArgs: {
                                                      header: R.strings.play_streak.window.playStreakRewards.calendar.card.tooltip.multi.head(),
                                                      body: u,
                                                  },
                                              },
                                          ];
                                      })(p),
                            ge = (0, B.GS)().mediaSize,
                            Ee = ge === B.cJ.Small || ge === B.cJ.ExtraSmall || ge === B.cJ.Medium,
                            ve = g()(
                                se.base,
                                x && se.base__current,
                                v && se.base__complete,
                                A && se.base__rare,
                                (h || f) && se.base__weekly,
                                d && se.base__blocked,
                                P && se.base__hover,
                                b && se.base__locked,
                                ae && se.base__changeStatus,
                                M && se.base__animatingInit,
                                O && se.base__animatingStart,
                                G && se.base__animatingProgress,
                                o && !d && (Q || !r) && se.base__animatingComplete,
                            );
                        return n().createElement(
                            'div',
                            { className: ve, onMouseEnter: pe, onMouseLeave: _e },
                            n().createElement('div', { className: se.bg }),
                            f && n().createElement('div', { className: se.monthlyBg }),
                            x && n().createElement('div', { className: se.animatedBg }),
                            n().createElement('div', { className: se.hoverBg }),
                            n().createElement('div', { className: se.border }),
                            n().createElement('div', { className: se.animatedBorder }),
                            x &&
                                !d &&
                                n().createElement(
                                    'div',
                                    { className: se.flareWrapper },
                                    n().createElement('div', { className: se.flare }),
                                ),
                            n().createElement('div', { className: se.day }, c),
                            C && n().createElement(I, { className: se.check }),
                            !d && !b && x && n().createElement('div', { className: se.glow }),
                            h &&
                                n().createElement(
                                    D.i,
                                    { header: X.cardTooltip.weekly.head(), body: X.cardTooltip.weekly.body() },
                                    n().createElement('div', { className: se.regularIcon }),
                                ),
                            f &&
                                n().createElement(
                                    D.i,
                                    { header: X.cardTooltip.monthly.head(), body: X.cardTooltip.monthly.body() },
                                    n().createElement('div', { className: se.regularIcon }),
                                ),
                            A &&
                                n().createElement(
                                    D.i,
                                    { header: X.cardTooltip.periodic.head(), body: X.cardTooltip.periodic.body() },
                                    n().createElement('div', { className: se.temporaryIcon }),
                                ),
                            x && C && r && !s && n().createElement('div', { className: se.circleGlow }),
                            n().createElement(
                                'div',
                                { className: se.baseInner },
                                Ce &&
                                    n().createElement(
                                        F.Q,
                                        re({ size: Ee ? y.h2.Small : y.h2.Big }, Array.isArray(Ce) ? Ce[0] : Ce),
                                    ),
                            ),
                        );
                    },
                    de = 'Calendar_base_5e',
                    me = 'Calendar_baseInner_2e',
                    ce = 'Calendar_calendar_fa',
                    pe = 'Calendar_card_9b',
                    _e = 'Calendar_pagination_c5',
                    Ce = 'Calendar_pagination__disabled_f4',
                    ge = 'Calendar_pagination__next_fb',
                    Ee = 'Calendar_pagination__prev_f5';
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const be = n().memo(
                    ({
                        streakLength: e,
                        calendarRewards: t,
                        countDays: o,
                        dailyWin: i,
                        isBlocked: u,
                        isFirstAppearance: s,
                        redemptionMaxDayCount: r,
                        redemptionDayCount: l,
                        isShowBlocked: d,
                        setShowBlocked: m,
                    }) => {
                        const c = (0, A.eI)().width,
                            p = (0, a.useMemo)(
                                () =>
                                    ((e) =>
                                        e <= J.small
                                            ? ee.small
                                            : e <= J.mediaSmall
                                              ? ee.mediaSmall
                                              : e <= J.mediaMedium
                                                ? ee.mediaMedium
                                                : (J.mediaLarge, ee.mediaLarge))(c),
                                [c],
                            ),
                            _ = (0, a.useState)(s),
                            C = _[0],
                            v = _[1],
                            y = (0, a.useState)(!1),
                            F = y[0],
                            D = y[1],
                            B = (0, a.useState)(e > 0 ? Math.ceil(e / p) : 1),
                            w = B[0],
                            h = B[1],
                            I = (0, a.useState)([]),
                            f = I[0],
                            x = I[1],
                            S = (0, a.useState)(Q.right),
                            P = S[0],
                            T = S[1],
                            k = (0, a.useState)(!1),
                            M = k[0],
                            N = k[1];
                        (0, a.useEffect)(() => {
                            h(e > 0 ? Math.ceil(e / p) : 1);
                        }, [c]);
                        const L = (0, a.useMemo)(
                                () =>
                                    Array.from({ length: o }, (e, o) => {
                                        const a = o + 1,
                                            n = t.find((e) => e.day === a);
                                        return n || { day: a, rewards: [] };
                                    }),
                                [t, o],
                            ),
                            O = w * p,
                            H = O - p,
                            U = (0, a.useMemo)(() => L.slice(H, O), [L, H, O]),
                            G = Math.ceil(L.length / p),
                            z = (0, a.useCallback)(
                                (e) => {
                                    ((e === Q.left && w > 1) || (e === Q.right && w < G)) &&
                                        (0, E.G)(R.sounds.highlight());
                                },
                                [w, G],
                            ),
                            W = (0, a.useCallback)(() => {
                                !M &&
                                    w < G &&
                                    ((0, E.G)(R.sounds.play()),
                                    D(!0),
                                    N(!0),
                                    T(Q.left),
                                    x(U),
                                    h(w + 1),
                                    (0, E.G)(R.sounds.play_streak_calendar_slide()));
                            }, [U, w, M, G]),
                            j = (0, a.useCallback)(() => {
                                !M &&
                                    w > 1 &&
                                    ((0, E.G)(R.sounds.play()),
                                    D(!0),
                                    N(!0),
                                    T(Q.right),
                                    x(U),
                                    h(w - 1),
                                    (0, E.G)(R.sounds.play_streak_calendar_slide()));
                            }, [U, w, M]),
                            Z = (0, b.useTransition)(w, {
                                initial: { opacity: 1, transform: 'translateX(0%)' },
                                from: {
                                    opacity: 0,
                                    transform: P === Q.right ? 'translateX(-100%)' : 'translateX(100%)',
                                },
                                enter: { opacity: 1, transform: 'translateX(0%)' },
                                leave: {
                                    opacity: 0,
                                    transform: P === Q.right ? 'translateX(100%)' : 'translateX(-100%)',
                                },
                                config: { duration: 750 },
                                onRest: () => {
                                    D(!1), N(!1);
                                },
                            }),
                            q = {
                                streakLength: e,
                                dailyWin: i,
                                isBlocked: u,
                                isFirstAppearance: s,
                                redemptionMaxDayCount: r,
                                redemptionDayCount: l,
                                isAnimated: C,
                                setAnimated: v,
                                isShowBlocked: d,
                                setShowBlocked: m,
                            };
                        return n().createElement(
                            'div',
                            { className: de },
                            n().createElement('div', {
                                className: g()(_e, Ee, 1 === w && Ce),
                                onClick: j,
                                onMouseEnter: () => z(Q.left),
                            }),
                            n().createElement(
                                'div',
                                { className: g()(F && ce) },
                                Z((e, t) =>
                                    n().createElement(
                                        b.animated.div,
                                        {
                                            style: {
                                                position: t === w ? 'relative' : 'absolute',
                                                opacity: e.opacity,
                                                transform: e.transform,
                                            },
                                        },
                                        n().createElement(
                                            'div',
                                            { className: me },
                                            t === w
                                                ? U.map((e) =>
                                                      n().createElement(
                                                          'div',
                                                          { key: e.day, className: pe },
                                                          n().createElement(le, ve({}, q, { award: e })),
                                                      ),
                                                  )
                                                : f.map((e) =>
                                                      n().createElement(
                                                          'div',
                                                          { key: e.day, className: pe },
                                                          n().createElement(le, ve({}, q, { award: e })),
                                                      ),
                                                  ),
                                        ),
                                    ),
                                ),
                            ),
                            n().createElement('div', {
                                className: g()(_e, ge, w === G && Ce),
                                onClick: W,
                                onMouseEnter: () => z(Q.right),
                            }),
                        );
                    },
                );
                var Ae = o(7613);
                const ye = 'DisabledMessage_base_45',
                    Fe = 'DisabledMessage_content_a8',
                    De = 'DisabledMessage_icon_e8',
                    Be = R.strings.play_streak.window.playStreakRewards.disabledMessage.title,
                    we = n().memo(() =>
                        n().createElement(
                            'div',
                            { className: ye },
                            n().createElement(
                                'div',
                                { className: Fe },
                                n().createElement('div', { className: De }),
                                n().createElement(Ae.ZP, {
                                    text: Be.head(),
                                    variant: 'paragraph-P16',
                                    color: 'WHITE_SPANISH',
                                }),
                                n().createElement(Ae.ZP, {
                                    text: Be.body(),
                                    variant: 'paragraph-P16',
                                    color: 'WHITE_SPANISH',
                                }),
                            ),
                        ),
                    );
                var he = o(3649);
                const Ie = 'Rewards_base_26',
                    fe = 'Rewards_base__vertical_9f',
                    xe = 'Rewards_reward_7b',
                    Re = 'Rewards_reward__vertical_c6';
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Pe = n().memo(
                        ({
                            data: e,
                            size: t = y.h2.Big,
                            isVertical: o = !1,
                            count: i,
                            classMix: u,
                            rewardItemClassMix: s,
                            boxRewardTooltip: r,
                            boxRewardValue: l,
                        }) => {
                            const d = (0, a.useMemo)(
                                    () =>
                                        i && i < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [i, e.length, t],
                                ),
                                m =
                                    l ||
                                    (0, he.uF)(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (i || 0),
                                    }),
                                c = g()(Ie, o && fe, u),
                                p = g()(xe, o && Re, s);
                            return n().createElement(
                                'div',
                                { className: c },
                                d
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          e
                                              .slice(0, i)
                                              .map((e, o) =>
                                                  n().createElement(
                                                      'div',
                                                      { key: o, className: p },
                                                      n().createElement(F.Q, Se({ size: t }, e)),
                                                  ),
                                              ),
                                          n().createElement(
                                              'div',
                                              { className: p },
                                              n().createElement(F.Q, {
                                                  name: 'more',
                                                  image: d,
                                                  size: t,
                                                  value: m,
                                                  tooltipArgs: r,
                                              }),
                                          ),
                                      )
                                    : e.map((e, o) =>
                                          n().createElement(
                                              'div',
                                              { key: o, className: p },
                                              n().createElement(F.Q, Se({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Te = 'PeriodicRewards_base_16',
                    ke = 'PeriodicRewards_base__blocked_57',
                    Me = 'PeriodicRewards_baseInner_55',
                    Ne = 'PeriodicRewards_head_22',
                    Le = 'PeriodicRewards_headInner_41',
                    Oe = 'PeriodicRewards_body_bb',
                    He = 'PeriodicRewards_glow_2a',
                    Ue = 'PeriodicRewards_line_79',
                    Ge = 'PeriodicRewards_lineInner_27',
                    ze = 'PeriodicRewards_blur_27',
                    We = 'PeriodicRewards_blur__active_06',
                    je = 'PeriodicRewards_info_30',
                    Ze = n().memo(
                        ({
                            dailyWin: e,
                            hasPeriodicTag: t,
                            periodicRewardsIsHovered: o,
                            rewards: i,
                            isShowBlocked: u,
                        }) => {
                            const s = R.strings.play_streak.window.playStreakRewards.periodicRewards,
                                r = u ? s.tooltip.blocked : s.tooltip,
                                l = g()(Te, { [ke]: u }),
                                d = (0, a.useMemo)(
                                    () => (7 < i.length ? (0, K.pI)({ showCount: 7 }) : void 0),
                                    [i.length],
                                );
                            return n().createElement(
                                'div',
                                { className: l },
                                e && t && !u && n().createElement('div', { className: He }),
                                n().createElement(
                                    'div',
                                    { className: Ue },
                                    n().createElement('div', { className: Ge }),
                                ),
                                n().createElement('div', { className: g()(ze, o && We) }),
                                n().createElement(
                                    'div',
                                    { className: Me },
                                    n().createElement(
                                        'div',
                                        { className: Ne },
                                        n().createElement(
                                            D.i,
                                            { header: r.head(), body: r.body() },
                                            n().createElement(
                                                'div',
                                                { className: Le },
                                                n().createElement(Ae.ZP, {
                                                    text: s.head(),
                                                    variant: 'heading-H14',
                                                    color: 'WHITE_REAL',
                                                }),
                                                n().createElement('div', { className: je }),
                                            ),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Oe },
                                        n().createElement(Pe, {
                                            data: ne(i),
                                            size: y.h2.Small,
                                            boxRewardTooltip: d,
                                            count: 7,
                                        }),
                                        0 === i.length &&
                                            n().createElement(Ae.ZP, {
                                                text: s.empty(),
                                                variant: 'paragraph-P12',
                                                color: 'PAR',
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    qe = 'PlayStreak_base_ee',
                    $e = 'PlayStreak_rewardProgression_df',
                    Ve = 'PlayStreak_base__blocked_d5',
                    Xe = 'PlayStreak_recoveryMessage_20',
                    Ye = 'PlayStreak_calendar_f2',
                    Ke = 'PlayStreak_periodicRewards_b4',
                    Qe = {
                        base: 'PostProgression_base_71',
                        radialLines: 'PostProgression_radialLines_1f',
                        radialLines__blocked: 'PostProgression_radialLines__blocked_29',
                        list: 'PostProgression_list_ba',
                        list__blocked: 'PostProgression_list__blocked_2e',
                    },
                    Je = 'PostProgressionHeader_base_d0',
                    et = 'PostProgressionHeader_base__inner_f6',
                    tt = 'PostProgressionHeader_title_27',
                    ot = 'PostProgressionHeader_content_99',
                    at = 'PostProgressionHeader_recoveryInfo_4a',
                    nt = 'PostProgressionHeader_icon_4c',
                    it = 'PostProgressionHeader_glow_a7',
                    ut = 'PostProgressionHeader_glow__blocked_33',
                    st = 'PostProgressionHeader_dayText_3d',
                    rt = R.strings.play_streak.window.playStreakRewards.postProgression.content,
                    lt = R.strings.play_streak.window.playStreakRewards.recoveryMessage.head,
                    dt = n().memo(({ dailyWin: e, isBlocked: t, redemptionDayCount: o, redemptionMaxDayCount: a }) => {
                        const i = e ? a - o : a - o + 1,
                            u = t ? rt.blocked.head() : rt.head(),
                            s = t ? rt.blocked.body() : rt.body(),
                            r = (0, he.uF)(lt.days(), { day: i }),
                            l = (0, he.uF)(rt.blocked.body(), { redemptionMaxDayCount: a });
                        return n().createElement(
                            'div',
                            { className: Je },
                            n().createElement('div', { className: g()(it, t && ut) }),
                            n().createElement(
                                'div',
                                { className: et },
                                n().createElement(
                                    'div',
                                    { className: tt },
                                    n().createElement(Ae.ZP, { text: u }),
                                    t &&
                                        n().createElement(
                                            D.i,
                                            { header: `${rt.blocked.head()} ${r}`, body: l },
                                            n().createElement(
                                                'div',
                                                { className: at },
                                                n().createElement('div', { className: nt }),
                                                n().createElement(Ae.ZP, {
                                                    text: lt.days(),
                                                    className: st,
                                                    format: { binding: { day: i } },
                                                }),
                                            ),
                                        ),
                                ),
                                n().createElement(Ae.ZP, {
                                    text: s,
                                    format: { binding: { redemptionMaxDayCount: a }, classMix: ot },
                                }),
                            ),
                        );
                    });
                var mt = o(4963),
                    ct = o(5036),
                    pt = o(6358);
                const _t = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Ct = [
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
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                let Et;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(Et || (Et = {}));
                const vt = (0, a.memo)((e) => {
                    let t = e.label,
                        o = e.isVisibleLabel,
                        i = void 0 !== o && o,
                        u = e.autofocus,
                        s = void 0 !== u && u,
                        r = e.soundHover,
                        l = void 0 === r ? 'highlight' : r,
                        d = e.soundClick,
                        m = void 0 === d ? 'play' : d,
                        c = e.size,
                        p = void 0 === c ? Et.NORMAL : c,
                        _ = e.classNames,
                        C = e.onClick,
                        v = e.onMouseEnter,
                        b = e.onMouseLeave,
                        A = e.onMouseDown,
                        y = e.onMouseUp,
                        F = e.onFocus,
                        D = e.onBlur,
                        B = (function (e, t) {
                            if (null == e) return {};
                            var o,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (o = i[a]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                            return n;
                        })(e, Ct);
                    const w = (0, a.useState)(!1),
                        h = w[0],
                        I = w[1],
                        f = (0, a.useState)(!1),
                        x = f[0],
                        R = f[1],
                        S = (0, a.useState)(s),
                        P = S[0],
                        T = S[1],
                        k = (0, a.useRef)(null),
                        M = (0, a.useCallback)(() => {
                            k.current && (k.current.focus(), T(!0));
                        }, []),
                        N = (0, a.useCallback)(
                            (e) => {
                                P && null !== k.current && !k.current.contains(e.target) && T(!1);
                            },
                            [P],
                        );
                    (0, a.useEffect)(
                        () => (
                            document.addEventListener('mousedown', N),
                            () => {
                                document.removeEventListener('mousedown', N);
                            }
                        ),
                        [N],
                    ),
                        (0, a.useEffect)(() => {
                            T(s);
                        }, [s]);
                    const L = (0, a.useCallback)(
                            (e) => {
                                C && C(e);
                            },
                            [C],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                I(!0), A && A(e), m && (0, E.G)(m), s && M();
                            },
                            [s, A, M, m],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                I(!1), y && y(e);
                            },
                            [y],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                v && v(e), l && (0, E.G)(l), R(!0);
                            },
                            [v, l],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                I(!1), R(!1), b && b(e);
                            },
                            [b],
                        ),
                        z = (0, a.useCallback)(
                            (e) => {
                                T(!0), F && F(e);
                            },
                            [F],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                T(!1), D && D(e);
                            },
                            [D],
                        ),
                        j = g()(
                            _t.base,
                            i && _t.base__visibleLabel,
                            h && _t.base__mouseDown,
                            x && _t.base__hovered,
                            P && _t.base__focused,
                            null == _ ? void 0 : _.base,
                        ),
                        Z = g()(_t.icon, _t[`icon__${p}`], null == _ ? void 0 : _.icon),
                        q = g()(_t.label, null == _ ? void 0 : _.label);
                    return n().createElement(
                        'div',
                        gt(
                            {
                                ref: k,
                                className: j,
                                onClick: L,
                                onMouseEnter: U,
                                onMouseLeave: G,
                                onMouseDown: O,
                                onMouseUp: H,
                                onFocus: z,
                                onBlur: W,
                            },
                            B,
                        ),
                        n().createElement('div', { className: Z }),
                        n().createElement('div', { className: q }, t),
                    );
                });
                var bt = o(3415);
                const At = 'PostProgressionStyle_base_05',
                    yt = 'PostProgressionStyle_preview_b1',
                    Ft = 'PostProgressionStyle_image_4d',
                    Dt = 'PostProgressionStyle_vehicleName_41',
                    Bt = R.strings.play_streak.window.playStreakRewards.rewardProgression,
                    wt = ({ vehicleName: e, icon: t, tooltipArgs: o, styleCD: i, handleStylePreview: u }) => {
                        const s = { backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.s600x450.${t})` },
                            r = (0, a.useCallback)(() => {
                                i && u(i);
                            }, [u, i]);
                        return n().createElement(
                            'div',
                            { className: At },
                            n().createElement(
                                bt.l,
                                { tooltipArgs: o },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Ft, style: s }),
                                    n().createElement('div', { className: Dt }, e),
                                    n().createElement(
                                        'div',
                                        { className: yt },
                                        n().createElement(vt, { onClick: r, label: Bt.preview() }),
                                    ),
                                ),
                            ),
                        );
                    };
                var ht = o(3457),
                    It = o(2106);
                const ft = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    xt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Rt(e) {
                    let t = '';
                    for (let o = xt.length - 1; o >= 0; o--) for (; e >= xt[o]; ) (t += ft[o]), (e -= xt[o]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const St = 'PostProgressionVehicle_base_ea',
                    Pt = 'PostProgressionVehicle_preview_ca',
                    Tt = 'PostProgressionVehicle_image_56',
                    kt = 'PostProgressionVehicle_vehicleName_d1',
                    Mt = 'PostProgressionVehicle_nation_98',
                    Nt = 'PostProgressionVehicle_type_c9',
                    Lt = R.strings.play_streak.window.playStreakRewards.postProgression.bestRewards,
                    Ot = ({
                        vehicleName: e,
                        vehicleNation: t,
                        vehCD: o,
                        vehicleLvl: i,
                        vehicleType: u,
                        isElite: s,
                        techName: r,
                        tooltipArgs: l,
                        handleVehicleHangar: d,
                    }) => {
                        const m = { backgroundImage: `url(R.images.gui.maps.shop.vehicles.c_600x450.${r})` },
                            c = { backgroundImage: `url(R.images.gui.maps.icons.filters.nations.${t})` },
                            p = {
                                backgroundImage: `url(R.images.gui.maps.icons.vehicleTypes.large.${(0, he.BN)(u)}${s ? '_elite' : ''})`,
                            },
                            _ = (0, a.useCallback)(() => {
                                d(o);
                            }, [d, o]);
                        return n().createElement(
                            'div',
                            { className: St },
                            n().createElement(
                                bt.l,
                                { tooltipArgs: l },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Tt, style: m }),
                                    n().createElement(
                                        'div',
                                        { className: kt },
                                        n().createElement('div', { className: Mt, style: c }),
                                        Rt(i),
                                        n().createElement('div', { className: Nt, style: p }),
                                        e,
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Pt },
                                        n().createElement(
                                            ht.u5,
                                            { type: It.L.ghost, size: It.q.medium, onClick: _ },
                                            n().createElement(Ae.ZP, { text: Lt.preview() }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ht = {
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
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                const Gt = R.strings.play_streak.window.playStreakRewards.postProgression.bestRewards,
                    zt = n().memo(({ vehicles: e, handleVehicleHangar: t, handleStylePreview: o }) => {
                        const i = (0, a.useState)(!1),
                            u = i[0],
                            s = i[1],
                            r = (0, a.useState)(!0),
                            l = r[0],
                            d = r[1],
                            m = (0, a.useState)(!0),
                            c = m[0],
                            p = m[1],
                            _ = (() => {
                                const e = (0, ct.useHorizontalScrollApi)(),
                                    t = (0, a.useCallback)(
                                        (t) => {
                                            e.contentRef.current &&
                                                (0, pt.GN)(e.contentRef.current) &&
                                                e.handleMouseWheel(t);
                                        },
                                        [e],
                                    );
                                return Object.assign({}, e, { handleMouseWheel: t });
                            })();
                        (0, a.useEffect)(() => {
                            const e = _.contentRef.current;
                            e && p((0, pt.GN)(e));
                        }, [_.contentRef]);
                        const C = (0, a.useCallback)(
                                (e) => {
                                    const t = e.value.scrollPosition,
                                        o = _.contentRef.current,
                                        a = _.wrapperRef.current;
                                    if (!o || !a) return;
                                    const n = o.getBoundingClientRect().width,
                                        i = a.getBoundingClientRect().width;
                                    if (n < i) return;
                                    const u = n - i;
                                    s(t > 0), d(t < u);
                                },
                                [_.contentRef, _.wrapperRef],
                            ),
                            E = (0, a.useCallback)(() => {
                                const e = _.contentRef.current;
                                e && p((0, pt.GN)(e));
                            }, [_.contentRef]);
                        (0, a.useEffect)(() => {
                            const e = _.events;
                            if (e)
                                return (
                                    e.on('change', C),
                                    e.on('resizeHandled', E),
                                    window.addEventListener('resize', E),
                                    () => {
                                        e.off('change', C),
                                            e.off('resizeHandled', E),
                                            window.removeEventListener('resize', E);
                                    }
                                );
                        }, [_, C, E]);
                        const v = g()(
                            Ht.wrapper,
                            !c && Ht.wrapper__centered,
                            u && !l && Ht.wrapper__left,
                            l && !u && Ht.wrapper__right,
                            u && l && Ht.wrapper__center,
                        );
                        return n().createElement(
                            'div',
                            { className: Ht.base },
                            n().createElement(
                                'div',
                                { className: Ht.heading },
                                n().createElement('div', { className: Ht.divider }),
                                n().createElement(
                                    'div',
                                    { className: Ht.title },
                                    n().createElement(Ae.ZP, { text: Gt.head() }),
                                ),
                                n().createElement('div', { className: g()(Ht.divider, Ht.divider__revers) }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ht.horizontal },
                                n().createElement(
                                    mt.X.Horizontal.Area.Default,
                                    { api: _, classNames: { content: Ht.horizontalContent, wrapper: v } },
                                    e.map((e, a) =>
                                        n().createElement(
                                            'div',
                                            { key: a, className: Ht.horizontalItem },
                                            e.name === y.E4.StyleProgress
                                                ? n().createElement(wt, Ut({}, e, { handleStylePreview: o }))
                                                : n().createElement(Ot, Ut({}, e, { handleVehicleHangar: t })),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Wt = n().memo(
                        ({
                            dailyWin: e,
                            isBlocked: t,
                            redemptionDayCount: o,
                            redemptionMaxDayCount: a,
                            handleVehicleHangar: i,
                            handleStylePreview: u,
                            vehicles: s,
                        }) =>
                            n().createElement(
                                'div',
                                { className: g()(Qe.base, t && Qe.base__blocked) },
                                n().createElement('div', {
                                    className: g()(Qe.radialLines, t && Qe.radialLines__blocked),
                                }),
                                n().createElement(dt, {
                                    dailyWin: e,
                                    isBlocked: t,
                                    redemptionDayCount: o,
                                    redemptionMaxDayCount: a,
                                }),
                                n().createElement(
                                    'div',
                                    { className: g()(Qe.list, t && Qe.list__blocked) },
                                    n().createElement(zt, {
                                        vehicles: s,
                                        handleVehicleHangar: i,
                                        handleStylePreview: u,
                                    }),
                                ),
                            ),
                    ),
                    jt = 'RecoveryMessage_base_b0',
                    Zt = 'RecoveryMessage_bg_f9',
                    qt = 'RecoveryMessage_base__animatingStart_1c',
                    $t = 'RecoveryMessage_base__blocked_cf',
                    Vt = 'RecoveryMessage_base__complete_5a',
                    Xt = 'RecoveryMessage_inner_ea',
                    Yt = 'RecoveryMessage_content_19',
                    Kt = 'RecoveryMessage_check_b9',
                    Qt = 'RecoveryMessage_icon_aa',
                    Jt = 'RecoveryMessage_dayText_f3',
                    eo = ({ dailyWin: e, isShowBlocked: t, redemptionDayCount: o, redemptionMaxDayCount: i }) => {
                        const u = e ? i - o : i - o + 1,
                            s = R.strings.play_streak.window.playStreakRewards.recoveryMessage.head,
                            r = (0, he.uF)(X.recoveryMessage.body(), { redemptionMaxDayCount: i }),
                            l = (0, a.useState)(!1),
                            d = l[0],
                            m = l[1],
                            c = (0, w.K)(),
                            p = (0, w.K)(),
                            _ = (e, t) => {
                                p.run(() => {
                                    E(e);
                                }, t);
                            },
                            C = (0, a.useCallback)(() => {
                                c.isRunning && c.clear(), p.isRunning && p.clear();
                            }, [c, p]);
                        (0, a.useEffect)(() => {
                            e && t && o === i && _(oe.Init, W);
                        }, [t, o]);
                        const E = (e) => {
                                switch ((C(), e)) {
                                    case oe.Init:
                                        return void _(oe.Start, j);
                                    case oe.Start:
                                        return m(!0), void _(oe.Progress, Z);
                                    case oe.Progress:
                                        return void _(oe.Complete, q);
                                    case oe.Complete:
                                        return void m(!1);
                                }
                            },
                            v = g()(jt, t && $t, !t && Vt, d && qt);
                        return n().createElement(
                            'div',
                            { className: v },
                            n().createElement('div', { className: Zt }),
                            n().createElement(
                                'div',
                                { className: Xt },
                                n().createElement(
                                    D.i,
                                    { header: X.recoveryMessage.head(), body: r },
                                    n().createElement(
                                        'div',
                                        { className: Yt },
                                        n().createElement(Ae.ZP, {
                                            text: t ? s.disable() : s.complete(),
                                            variant: 'heading-H15',
                                            color: 'WHITE_REAL',
                                        }),
                                        t && n().createElement('div', { className: Qt }),
                                        !t && n().createElement(I, { className: Kt }),
                                        t &&
                                            n().createElement(Ae.ZP, {
                                                text: s.days(),
                                                className: Jt,
                                                format: { binding: { day: u } },
                                            }),
                                    ),
                                ),
                            ),
                        );
                    };
                var to = o(1975),
                    oo = o(3138);
                const ao = (e, t) => {
                        let o = 0,
                            a = 1 / 0;
                        for (let n = 0; n < t.length; n++) {
                            const i = Math.abs(e - t[n].day);
                            i < a && t[n].day > e && ((a = i), (o = n));
                        }
                        return { award: t[o], daysLeft: a === 1 / 0 ? 0 : a };
                    },
                    no = (e, t) => t.filter((t) => t.day <= e && 0 !== t.day).length,
                    io = 'RewardProgessionAward_base_a8',
                    uo = 'RewardProgessionAward_card_9a',
                    so = 'RewardProgessionAward_preview_d6',
                    ro = 'RewardProgessionAward_preview__hangar_08',
                    lo = 'RewardProgessionAward_image_b6';
                function mo() {
                    return (
                        (mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                                }
                                return e;
                            }),
                        mo.apply(this, arguments)
                    );
                }
                const co = R.strings.play_streak.window.playStreakRewards.rewardProgression,
                    po = n().memo(({ isHave: e, rewards: t, handleVehiclePreview: o, handleVehicleHangar: i }) => {
                        const u = (0, a.useCallback)(
                            (t) => () => {
                                const a = t.name && ['vehicles_rent'].includes(t.name);
                                return e ? a && t.vehCD && i(t.vehCD) : a && t.vehCD && o(t.vehCD), !1;
                            },
                            [o, i, e],
                        );
                        return n().createElement(
                            'div',
                            { className: io },
                            ne(t)
                                .slice(0, 1)
                                .map((t, o) =>
                                    n().createElement(
                                        'div',
                                        { key: o, className: uo },
                                        n().createElement(
                                            bt.l,
                                            { tooltipArgs: t.tooltipArgs },
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement(
                                                    F.Q,
                                                    mo({ size: y.h2.Small }, t, { classNames: { image: lo } }),
                                                ),
                                                ((e) => e.name && ue.includes(e.name))(t) &&
                                                    n().createElement(
                                                        'div',
                                                        { className: g()(so, e && ro) },
                                                        e
                                                            ? n().createElement(
                                                                  ht.u5,
                                                                  { type: It.L.ghost, size: It.q.small, onClick: u(t) },
                                                                  n().createElement(Ae.ZP, { text: co.hangar() }),
                                                              )
                                                            : n().createElement(vt, {
                                                                  label: co.preview(),
                                                                  onClick: u(t),
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
                    _o = {
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
                    Co = R.strings.play_streak,
                    go = ({
                        streakLength: e,
                        dailyWin: t,
                        isFirstAppearance: o,
                        countDays: i,
                        rewards: u,
                        isShowBlocked: s,
                        handleVehiclePreview: r,
                        handleVehicleHangar: l,
                    }) => {
                        const d = t ? e : e - 1,
                            m = (0, a.useRef)(null),
                            c = n().useRef([]),
                            p = (0, a.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const o = [...t, { day: 0, rewards: [] }].sort((e, t) => e.day - t.day);
                                        return { keyAwards: o, collectedRewards: no(e, o), nextAward: ao(e, o) };
                                    })(d, u),
                                [d, u],
                            ),
                            _ = p.keyAwards,
                            C = p.collectedRewards,
                            v = String(_.length - 1),
                            b = _.findIndex((e) => e.day === d),
                            A = (0, a.useState)(0),
                            y = A[0],
                            F = A[1],
                            D = (0, a.useState)(!1),
                            B = D[0],
                            h = D[1],
                            I = (0, a.useState)(!1),
                            f = I[0],
                            x = I[1],
                            S = (0, a.useState)(!1),
                            P = S[0],
                            T = S[1],
                            k = (0, a.useState)(!1),
                            M = k[0],
                            N = k[1],
                            L = (0, w.K)(),
                            O = (0, w.K)(),
                            H = (e, t) => {
                                O.run(() => {
                                    G(e);
                                }, t);
                            },
                            U = (0, a.useCallback)(() => {
                                L.isRunning && L.clear(), O.isRunning && O.clear();
                            }, [L, O]);
                        (0, a.useEffect)(() => {
                            !t || s || b <= 0 || H(o ? oe.Init : oe.Complete, o ? z : $);
                        }, [t, b]);
                        const G = (e) => {
                            switch ((U(), e)) {
                                case oe.Init:
                                    return h(!0), void H(oe.Start, j);
                                case oe.Start:
                                    return x(!0), void H(oe.Progress, Z);
                                case oe.Progress:
                                    return T(!0), void H(oe.Complete, Z);
                                case oe.ChangeStatus:
                                    return void H(oe.Complete, $);
                                case oe.Complete:
                                    return (
                                        (0, E.G)(R.sounds.play_streak_reward_animation()),
                                        h(!1),
                                        T(!1),
                                        x(!1),
                                        void N(!0)
                                    );
                            }
                        };
                        (0, a.useEffect)(() => {
                            if (m.current && -1 !== b) {
                                const e = c.current[b];
                                if (e) {
                                    const t = e.getBoundingClientRect().width,
                                        o = m.current.getBoundingClientRect().width,
                                        a = m.current.getBoundingClientRect().left,
                                        n = e.getBoundingClientRect().left - a + t - o / 2;
                                    F(oo.O.view.pxToRem(n));
                                }
                            }
                        }, [b]);
                        const W = g()(
                                _o.base,
                                B && _o.base__animatingInit,
                                f && _o.base__animatingStart,
                                P && _o.base__animatingProgress,
                                M && _o.base__animatingComplete,
                                C === u.length && _o.base__complete,
                                e >= i && t && _o.base__completeAll,
                                s && _o.base__disabled,
                            ),
                            q = ((e, t, o) => {
                                for (let a = 0; a < o.length - 1; a++) {
                                    const n = o[a].day,
                                        i = o[a + 1].day;
                                    if (e <= i) {
                                        const u = i - n,
                                            s = e - n;
                                        return Math.round((s / u) * (t / (o.length - 1)) + a * (t / (o.length - 1)));
                                    }
                                }
                                return t;
                            })(d, i, _),
                            V = no(d, _),
                            X = (0, a.useMemo)(() => (b < 0 || M ? V : Math.max(0, V - 1)), [M, V, b]);
                        return n().createElement(
                            'div',
                            { className: W, ref: m },
                            n().createElement('div', { className: _o.bg }),
                            b > 0 &&
                                n().createElement(
                                    'div',
                                    { className: _o.lightContainer },
                                    n().createElement('div', {
                                        className: _o.light,
                                        style: { transform: `translateX(${y}rem)` },
                                    }),
                                ),
                            n().createElement(
                                'div',
                                { className: _o.baseInner },
                                n().createElement(
                                    'div',
                                    { className: _o.row },
                                    n().createElement(
                                        'div',
                                        { className: _o.content },
                                        n().createElement(
                                            'div',
                                            { className: _o.contentHead },
                                            n().createElement(Ae.ZP, {
                                                text: Co.window.playStreakRewards.rewardProgression.head(),
                                                variant: 'paragraph-P18',
                                                color: 'WHITE_REAL',
                                            }),
                                            n().createElement(Ae.ZP, {
                                                text: String(X),
                                                variant: 'paragraph-P18',
                                                className: _o.countDays,
                                            }),
                                            n().createElement(Ae.ZP, {
                                                text: Co.window.playStreakRewards.progressionLimit.body(),
                                                className: _o.limitDay,
                                                format: { binding: { maxDay: v } },
                                            }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: _o.contentBody },
                                            n().createElement(Ae.ZP, {
                                                text: Co.window.playStreakRewards.rewardProgression.body(),
                                                className: _o.text,
                                            }),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: _o.progressBar },
                                        n().createElement(to.ko, {
                                            deltaFrom: t && o ? q - 1 : q,
                                            value: q,
                                            maxValue: i,
                                            disabled: s,
                                            animationSettings: Y,
                                        }),
                                        _.map((e, t) => {
                                            const o = (t / (_.length - 1)) * 100,
                                                a = g()(
                                                    _o.marker,
                                                    e.day < d && _o.marker__prev,
                                                    e.day === d && _o.marker__complete,
                                                );
                                            return n().createElement(
                                                'div',
                                                {
                                                    key: e.day,
                                                    className: a,
                                                    style: { left: `${o}%` },
                                                    ref: (e) => (c.current[t] = e),
                                                },
                                                n().createElement(Ae.ZP, {
                                                    text: String(e.day),
                                                    variant: 'paragraph-P12',
                                                    className: _o.day,
                                                }),
                                                n().createElement(
                                                    'div',
                                                    { className: _o.award },
                                                    n().createElement(po, {
                                                        isHave: e.day <= d,
                                                        rewards: e.rewards,
                                                        handleVehiclePreview: r,
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
                    Eo = (0, v.Pi)(() => {
                        const e = _(),
                            t = e.model,
                            o = e.controls,
                            i = t.root.get(),
                            u = i.streakLength,
                            s = i.dailyWin,
                            r = i.isFirstAppearance,
                            l = i.isBlocked,
                            d = i.redemptionDayCount,
                            m = i.redemptionMaxDayCount,
                            c = i.isPaused,
                            p = s || l ? u : u + 1,
                            C = s ? m - d : m - d + 1;
                        if (c) return n().createElement(we, null);
                        const v = t.computes.getPlayStreakRewardsCalendar(),
                            A = ((e, t, o) => {
                                const a = ae(e),
                                    n = e.filter((e) => e.tags && e.tags.includes(te.rare)),
                                    i = e
                                        .filter((e) => e.tags && e.tags.includes(te.final_rewards))
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
                                                    tooltipArgs: (0, K.pI)({ tooltipId: e.tooltipId }),
                                                    name: e.name ? e.name : '',
                                                    styleCD: null != (t = e.styleCD) ? t : null,
                                                };
                                            }),
                                        )
                                        .flat();
                                return (
                                    i.sort((e, t) =>
                                        e.name === y.E4.StyleProgress ? -1 : t.name === y.E4.StyleProgress ? 1 : 0,
                                    ),
                                    {
                                        countDays: a,
                                        progressionRewards: n,
                                        periodicRewards: ie(e, t, o),
                                        postProgressionRewards: i,
                                    }
                                );
                            })(v, p, s),
                            F = A.countDays,
                            D = A.progressionRewards,
                            B = A.periodicRewards,
                            w = A.postProgressionRewards,
                            h = ((e, t) => {
                                const o = e.find((e) => e.day === t);
                                if (!o) return !1;
                                const a = o.tags;
                                return (a && a.includes(te.weekly)) || (a && a.includes(te.monthly));
                            })(v, p),
                            I = p > F,
                            f = (0, a.useState)(!1),
                            x = f[0],
                            S = f[1],
                            P = (0, a.useState)(l),
                            T = P[0],
                            k = P[1];
                        (0, a.useEffect)(() => {
                            k(l);
                        }, [l]);
                        const M = (0, b.useSpring)({
                                transform: x ? 'translateY(0%)' : 'translateY(60%)',
                                config: { tension: 280 },
                            }),
                            N = {
                                dailyWin: s,
                                isBlocked: l,
                                redemptionDayCount: C,
                                redemptionMaxDayCount: m,
                                handleVehicleHangar: o.vehicleHangar,
                                handleStylePreview: o.stylePreview,
                                vehicles: w,
                            },
                            L = {
                                streakLength: p,
                                isFirstAppearance: r,
                                countDays: F,
                                dailyWin: s,
                                isShowBlocked: T,
                                rewards: D,
                                handleVehiclePreview: o.vehiclePreview,
                                handleVehicleHangar: o.vehicleHangar,
                            },
                            O = {
                                streakLength: p,
                                redemptionDayCount: C,
                                redemptionMaxDayCount: m,
                                calendarRewards: v,
                                isBlocked: l,
                                dailyWin: s,
                                isFirstAppearance: r,
                                countDays: F,
                                isShowBlocked: T,
                                setShowBlocked: k,
                            },
                            H = {
                                dailyWin: s,
                                hasPeriodicTag: h,
                                rewards: B,
                                periodicRewardsIsHovered: x,
                                isShowBlocked: T,
                            },
                            U = { dailyWin: s, redemptionDayCount: C, redemptionMaxDayCount: m, isShowBlocked: T },
                            G = (0, a.useCallback)(
                                () => ((0, E.G)(R.sounds.researches_premium_panel_slide_in()), !T && S(!0)),
                                [T],
                            ),
                            z = (0, a.useCallback)(
                                () => ((0, E.G)(R.sounds.researches_premium_panel_slide_out()), !T && S(!1)),
                                [T],
                            ),
                            W = g()(qe, { [Ve]: l });
                        return n().createElement(
                            'div',
                            { className: W },
                            I
                                ? n().createElement(Wt, N)
                                : n().createElement(
                                      'div',
                                      null,
                                      n().createElement('div', { className: $e }, n().createElement(go, L)),
                                      l && n().createElement('div', { className: Xe }, n().createElement(eo, U)),
                                      n().createElement('div', { className: Ye }, n().createElement(be, O)),
                                  ),
                            n().createElement(
                                b.animated.div,
                                { className: Ke, style: M, onMouseEnter: G, onMouseLeave: z },
                                n().createElement(Ze, H),
                            ),
                        );
                    });
                (0, a.memo)(function (e) {
                    const t = (0, a.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                    return n().createElement(p, { options: t, mocks: u, mode: 'real' }, n().createElement(Eo, null));
                });
            },
            5026: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
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
            6880: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
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
            5287: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
            },
            6664: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = {
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
            6147: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            1609: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
                const a = {
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
            3393: (e, t, o) => {
                'use strict';
                o.d(t, { Z: () => a });
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
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var o = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](o, o.exports, __webpack_require__), o.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, o, a) => {
            if (!t) {
                var n = 1 / 0;
                for (r = 0; r < deferred.length; r++) {
                    for (var [t, o, a] = deferred[r], i = !0, u = 0; u < t.length; u++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(r--, 1);
                        var s = o();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var r = deferred.length; r > 0 && deferred[r - 1][2] > a; r--) deferred[r] = deferred[r - 1];
            deferred[r] = [t, o, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var o in t)
                __webpack_require__.o(t, o) &&
                    !__webpack_require__.o(e, o) &&
                    Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
        (__webpack_require__.j = 486),
        (() => {
            var e = { 486: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, o) => {
                    var a,
                        n,
                        [i, u, s] = o,
                        r = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in u) __webpack_require__.o(u, a) && (__webpack_require__.m[a] = u[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(o); r < i.length; r++)
                        (n = i[r]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [272], () => __webpack_require__(6096));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
