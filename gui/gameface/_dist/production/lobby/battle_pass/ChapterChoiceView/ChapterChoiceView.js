(() => {
    'use strict';
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                t(9916);
            },
            280: (e, u, t) => {
                t.d(u, { z: () => l });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3649),
                    o = t(7363),
                    i = t.n(o),
                    s = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: a = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(u, e) : u;
                    return i().createElement(
                        o.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: n()(s.Z.base, t), key: `${u}-${l}` },
                                (0, r.Uw)(u, a, e).map((e, u) =>
                                    i().createElement(o.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                t.d(u, { z: () => a.z });
                var a = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                t(3649);
            },
            2828: (e, u, t) => {
                t.d(u, { h: () => d });
                var a = t(6483),
                    n = t.n(a);
                const r =
                    (e, u) =>
                    (...t) => {
                        if (e(...t)) return u(...t);
                    };
                var o = t(1641),
                    i = t(7727),
                    s = t(7363),
                    l = t.n(s);
                const c = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    E = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let u = e.type,
                        t = e.children,
                        a = e.className,
                        d = e.classNames,
                        m = e.disabled,
                        A = void 0 !== m && m,
                        F = e.isVisibleLabel,
                        D = void 0 !== F && F,
                        h = e.soundHover,
                        C = void 0 === h ? R.sounds.highlight() : h,
                        B = e.soundClick,
                        g = void 0 === B ? R.sounds.play() : B,
                        p = e.size,
                        b = void 0 === p ? 'normal' : p,
                        v = e.onClick,
                        w = e.onMouseEnter,
                        f = e.onMouseLeave,
                        S = e.onMouseDown,
                        x = e.onMouseUp,
                        P = e.onFocus,
                        y = e.onBlur,
                        L = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, E);
                    const k = (0, s.useState)(!1),
                        T = k[0],
                        M = k[1],
                        O = (0, s.useState)(!1),
                        N = O[0],
                        I = O[1],
                        H = (0, s.useRef)(null),
                        $ = () => !1 === A,
                        G = (e) => $() && ((e) => e.button === o.t.LEFT)(e),
                        z = r($, (e) => {
                            null == v || v(e);
                        }),
                        U = r(G, (e) => {
                            (M(!0), null == S || S(e), g && (0, i.G)(g));
                        }),
                        W = r(G, (e) => {
                            (M(!1), null == x || x(e));
                        }),
                        j = r($, (e) => {
                            (I(!0), null == w || w(e), C && (0, i.G)(C));
                        }),
                        q = r($, (e) => {
                            null == P || P(e);
                        }),
                        V = r($, (e) => {
                            null == y || y(e);
                        });
                    return l().createElement(
                        'div',
                        _(
                            {
                                ref: H,
                                className: n()(
                                    c.base,
                                    A && c.base__disabled,
                                    D && c.base__visibleLabel,
                                    !A && T && c.base__mouseDown,
                                    !A && N && c.base__hovered,
                                    a,
                                ),
                                onClick: z,
                                onMouseEnter: j,
                                onMouseLeave: (e) => {
                                    (I(!1), M(!1), null == f || f(e));
                                },
                                onMouseDown: U,
                                onMouseUp: W,
                                onFocus: q,
                                onBlur: V,
                            },
                            L,
                        ),
                        l().createElement('div', {
                            className: n()(c.icon, c[`icon__${b}`], c[`icon__${u}`], null == d ? void 0 : d.icon),
                        }),
                        t &&
                            l().createElement(
                                'div',
                                { className: n()(c.label, c[`label__${b}`], null == d ? void 0 : d.label) },
                                t,
                            ),
                    );
                };
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => s });
                var a = t(3138),
                    n = t(7363),
                    r = t(1043),
                    o = t(5262);
                const i = (function (e = a.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, o.T)(u, t, r.j));
                    })(),
                    s = (0, n.createContext)(i);
            },
            1039: (e, u, t) => {
                (t(3138), t(7363), t(3495));
            },
            6010: (e, u, t) => {
                var a = t(7363),
                    n = t(7382),
                    r = t(3495);
                const o = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, o);
                    const i = (0, a.useContext)(r.Y),
                        s = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        E = i.small,
                        _ = i.extraSmall,
                        d = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        h = i.extraLargeHeight,
                        C = i.largeHeight,
                        B = i.mediumHeight,
                        g = i.smallHeight,
                        p = i.extraSmallHeight,
                        b = { extraLarge: h, large: C, medium: B, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, n.H)(u, t, b);
                        if (t.largeWidth && m) return (0, n.H)(u, t, b);
                        if (t.mediumWidth && A) return (0, n.H)(u, t, b);
                        if (t.smallWidth && F) return (0, n.H)(u, t, b);
                        if (t.extraSmallWidth && D) return (0, n.H)(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                });
            },
            7382: (e, u, t) => {
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
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
                t.d(u, { YN: () => a.Y });
                (t(6010), t(1039));
                var a = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var a;
                function n(e, u, t) {
                    const a = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                    })(a || (a = {})));
            },
            1975: (e, u, t) => {
                t.d(u, { $u: () => E.$, ko: () => A });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(2468),
                    s = t(7442),
                    l = t(2407),
                    c = t(156),
                    E = t(7736),
                    _ = t(1635);
                t(6823);
                const d = c.Gh,
                    m = {
                        freezed: !1,
                        withStack: !1,
                        type: E.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = d,
                            size: t = E.$.Default,
                            animationSettings: a = m,
                            disabled: r = !1,
                            withoutBackground: A = !1,
                            value: F,
                            deltaFrom: D,
                            additionalKey: h,
                            lineRef: C,
                            onChangeAnimationState: B,
                            onEndAnimation: g,
                            onComplete: p,
                            className: b,
                        }) => {
                            const v = (0, _.S)(F, e, D);
                            return o().createElement(
                                'div',
                                { className: n()(i.Z.base, b, i.Z[`base__${t}`]), style: (0, c.VQ)(u) },
                                !A && o().createElement(s.J, { size: t }),
                                o().createElement(l.r, {
                                    size: t,
                                    lineRef: C,
                                    disabled: r,
                                    value: v.value,
                                    deltaFrom: v.deltaFrom,
                                    additionalKey: h,
                                    animationSettings: a,
                                    onEndAnimation: g,
                                    onChangeAnimationState: B,
                                    onComplete: p,
                                }),
                            );
                        },
                    );
            },
            7442: (e, u, t) => {
                t.d(u, { J: () => l });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(2468),
                    s = t(7736);
                const l = ({ size: e = s.$.Default }) => {
                    const u = n()(i.Z.background, i.Z[`background__${e}`]);
                    return o().createElement('div', { className: u });
                };
            },
            8150: (e, u, t) => {
                t.d(u, { $: () => s });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(8804);
                const s = ({ size: e }) => {
                    const u = n()(i.Z.base, i.Z[`base__${e}`]);
                    return o().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                t.d(u, { r: () => l });
                var a = t(7363),
                    n = t.n(a),
                    r = t(6736),
                    o = t(5680),
                    i = t(2386);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: a,
                        deltaFrom: l,
                        additionalKey: c,
                        animationSettings: E,
                        onEndAnimation: _,
                        onChangeAnimationState: d,
                        onComplete: m,
                    }) => {
                        if (l === u)
                            return n().createElement(o.M, {
                                key: `${l}-${u}-${c}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: a,
                                onComplete: m,
                            });
                        const A = {
                            from: l,
                            to: u,
                            size: e,
                            additionalKey: c,
                            lineRef: t,
                            disabled: a,
                            animationSettings: E,
                            onComplete: m,
                            onEndAnimation: _,
                            onChangeAnimationState: d,
                        };
                        return E.withStack
                            ? n().createElement(i.F, A)
                            : n().createElement(r.H, s({ key: `${l}-${u}-${c}` }, A));
                    },
                );
            },
            1848: (e, u, t) => {
                t.d(u, { t: () => l });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(8150),
                    s = t(6664);
                const l = (0, r.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: r, withoutBounce: l }) => {
                        const c = n()(
                                s.Z.base,
                                s.Z[`base__${e}`],
                                t && s.Z.base__disabled,
                                r && s.Z.base__finished,
                                l && s.Z.base__withoutBounce,
                            ),
                            E = !t && !r;
                        return o().createElement(
                            'div',
                            { className: c, style: a, ref: u },
                            o().createElement('div', { className: s.Z.pattern }),
                            o().createElement('div', { className: s.Z.gradient }),
                            E && o().createElement(i.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                t.d(u, { O: () => m });
                var a = t(6483),
                    n = t.n(a),
                    r = t(122),
                    o = t(7363),
                    i = t.n(o),
                    s = t(8150),
                    l = t(6823),
                    c = t(6147);
                const E = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    d = (e) => ({ transitionDuration: `${e}ms` }),
                    m = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: m,
                            to: A,
                            onEndAnimation: F,
                            onChangeAnimationState: D,
                            className: h,
                        }) => {
                            const C = A < a,
                                B = (0, o.useState)(l.S.Idle),
                                g = B[0],
                                p = B[1],
                                b = g === l.S.End,
                                v = g === l.S.Idle,
                                w = g === l.S.Grow,
                                f = g === l.S.Shrink,
                                S = (0, o.useCallback)(
                                    (e) => {
                                        (p(e), D && D(e));
                                    },
                                    [D],
                                ),
                                x = (0, o.useCallback)(
                                    (e, u) =>
                                        (0, r.F)(() => {
                                            S(e);
                                        }, u),
                                    [S],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? x(l.S.Grow, u)
                                        : w
                                          ? x(l.S.Shrink, e)
                                          : f
                                            ? x(l.S.End, e)
                                            : void (b && F && F());
                            }, [x, t, b, w, v, f, F, u, e]);
                            const P = (0, o.useMemo)(() => Object.assign({ width: '100%' }, d(e), E(C)), [C, e]),
                                y = (0, o.useMemo)(() => Object.assign({ width: '0%' }, d(e), E(C)), [C, e]),
                                L = (0, o.useMemo)(() => Object.assign({ width: '0%' }, _(C, a), d(e)), [a, C, e]),
                                k = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, _(C, a), d(e)),
                                    [a, C, A, e],
                                );
                            if (b) return null;
                            const T = n()(c.Z.base, h, C && 0 === A && c.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: v ? L : k, className: T },
                                i().createElement(
                                    'div',
                                    { style: f ? y : P, className: c.Z.glow },
                                    i().createElement(s.$, { size: m }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                t.d(u, { x: () => l });
                var a = t(122),
                    n = t(7363),
                    r = t.n(n),
                    o = t(8150),
                    i = t(6823),
                    s = t(9919);
                const l = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: c,
                        to: E,
                        onEndAnimation: _,
                        onChangeAnimationState: d,
                    }) => {
                        const m = E < l,
                            A = (0, n.useState)(i.V.Idle),
                            F = A[0],
                            D = A[1],
                            h = F === i.V.In,
                            C = F === i.V.End,
                            B = F === i.V.Idle,
                            g = (0, n.useCallback)(
                                (e) => {
                                    (D(e), d && d(e));
                                },
                                [d],
                            );
                        ((0, n.useEffect)(() => {
                            if (B && !t) {
                                const e = u;
                                return (0, a.F)(() => {
                                    g(i.V.In);
                                }, e);
                            }
                        }, [g, t, B, u]),
                            (0, n.useEffect)(() => {
                                if (h) {
                                    const t = e + u;
                                    return (0, a.F)(() => {
                                        (_ && _(), g(i.V.End));
                                    }, t);
                                }
                            }, [g, h, _, u, e]));
                        const p = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            b = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            v = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(l - E)}%`, left: `${m ? E : l}%` }),
                                [l, m, E],
                            );
                        return C
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: s.Z.base, style: v },
                                  r().createElement(
                                      'div',
                                      { style: B ? p : b, className: s.Z.delta },
                                      r().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                t.d(u, { F: () => s });
                var a = t(7363),
                    n = t.n(a),
                    r = t(1848),
                    o = t(2434),
                    i = t(6823);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: s,
                        disabled: l,
                        isComplete: c,
                        animationSettings: E,
                        onEndAnimation: _,
                        onChangeAnimationState: d,
                    }) => {
                        const m = e < t,
                            A = (0, a.useState)(!1),
                            F = A[0],
                            D = A[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    (e === i.S.Shrink && D(!0), d && d(e));
                                },
                                [d],
                            ),
                            C = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            B = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${E.line.duration}ms` }),
                                [E.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(r.t, {
                                size: u,
                                lineRef: s,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: m && 0 === e,
                                baseStyles: F ? B : C,
                            }),
                            t >= 0 &&
                                n().createElement(o.O, {
                                    transitionDuration: E.delta.duration,
                                    transitionDelay: E.delta.delay,
                                    onChangeAnimationState: h,
                                    freezed: E.freezed,
                                    onEndAnimation: _,
                                    from: t,
                                    size: u,
                                    to: e,
                                    className: E.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, u, t) => {
                t.d(u, { D: () => i });
                var a = t(7363),
                    n = t.n(a),
                    r = t(1848),
                    o = t(5913);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: i,
                        disabled: s,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: E,
                        onEndAnimation: _,
                    }) => {
                        const d = (0, a.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(r.t, { size: u, lineRef: i, disabled: s, isComplete: l, baseStyles: d }),
                            t >= 0 &&
                                n().createElement(o.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: t,
                                    size: u,
                                    to: e,
                                    onChangeAnimationState: E,
                                    onEndAnimation: _,
                                }),
                        );
                    },
                );
            },
            6736: (e, u, t) => {
                t.d(u, { H: () => c });
                var a = t(7363),
                    n = t.n(a),
                    r = t(7736),
                    o = t(538),
                    i = t(828);
                const s = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, a.memo)((e) => {
                    let u = e.onComplete,
                        t = e.onEndAnimation,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, s);
                    const E = (0, a.useState)(!1),
                        _ = E[0],
                        d = E[1],
                        m = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== _ && d(e), e && u && u(), t && t());
                        }, [_, u, t, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(i.D, l({}, c, { onEndAnimation: m, isComplete: _ }));
                        case r.r.Growing:
                            return n().createElement(o.F, l({}, c, { onEndAnimation: m, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
                let a, n;
                (t.d(u, { S: () => a, V: () => n }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(n || (n = {})));
            },
            2386: (e, u, t) => {
                t.d(u, { F: () => s });
                var a = t(7363),
                    n = t.n(a),
                    r = t(6736);
                const o = ['onEndAnimation'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, o);
                    const s = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            ((s.current.from = void 0), u && u());
                        }, [u]),
                        c = 'number' == typeof s.current.from ? s.current.from : t.from;
                    return (
                        (s.current.from = c),
                        n().createElement(
                            r.H,
                            i({}, t, {
                                onEndAnimation: l,
                                key: `${c}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            5680: (e, u, t) => {
                t.d(u, { M: () => o });
                var a = t(7363),
                    n = t.n(a),
                    r = t(1848);
                const o = ({ size: e, value: u, lineRef: t, disabled: o, onComplete: i }) => {
                    const s = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, a.useEffect)(() => {
                            l && i && i();
                        }, [l, i]),
                        n().createElement(r.t, { size: e, disabled: o, baseStyles: s, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                t.d(u, { Gh: () => n, VQ: () => a });
                const a = (e) => {
                        var u, t, a, n, r, o, i, s, l, c, E, _, d, m, A, F, D, h, C, B;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (n = e.bg) ? void 0 : n.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (s = e.pattern.gradient)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (E = null == (_ = e.glowSettings) ? void 0 : _.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (m = e.glowSettings) ? void 0 : m.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (F = e.glowSettings) ? void 0 : F.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (D = null == (h = e.glowSettings) ? void 0 : h.smallHeight) ? D : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (C = null == (B = e.glowSettings) ? void 0 : B.mixBlendMode) ? C : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
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
            7736: (e, u, t) => {
                let a, n;
                (t.d(u, { $: () => a, r: () => n }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(n || (n = {})));
            },
            1635: (e, u, t) => {
                t.d(u, { S: () => o });
                var a = t(7515),
                    n = t(7363);
                const r = (e, u, t) => {
                    if ('number' == typeof t) {
                        return ((0, a.u)(0, u, t) / u) * 100;
                    }
                    return e;
                };
                function o(e, u, t) {
                    return (0, n.useMemo)(() => {
                        const n = ((0, a.u)(0, u, e) / u) * 100;
                        return { value: n, deltaFrom: r(n, u, t) };
                    }, [t, u, e]);
                }
            },
            2862: (e, u, t) => {
                let a, n, r, o, i, s, l, c;
                (t.d(u, { E4: () => a, h2: () => r }),
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
                            (e.Tankman = 'tankman'),
                            (e.Tankwoman = 'tankwoman'),
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
                            (e.BattlePassTicket = 'lootBox_commonTicket'),
                            (e.BattlePassTaler = 'bptaler'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.DeluxeGift = 'deluxe_gift'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                            (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                            (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                            (e.OptionalDevice = 'optionalDevice'),
                            (e.EquipCoin = 'equipCoin'),
                            (e.LootBox = 'lootBox'),
                            (e.BrCoin = 'brcoin'),
                            (e.Attachment = 'attachment'));
                    })(a || (a = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(s || (s = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(c || (c = {})));
                a.Attachment;
            },
            729: (e, u, t) => {
                (t(2372), t(7363));
                var a = t(2862);
                (a.E4.Items,
                    a.E4.Equipment,
                    a.E4.Xp,
                    a.E4.XpFactor,
                    a.E4.Blueprints,
                    a.E4.BlueprintsAny,
                    a.E4.Goodies,
                    a.E4.Berths,
                    a.E4.Slots,
                    a.E4.Tokens,
                    a.E4.CrewSkins,
                    a.E4.CrewBooks,
                    a.E4.Customizations,
                    a.E4.CreditsFactor,
                    a.E4.TankmenXp,
                    a.E4.TankmenXpFactor,
                    a.E4.FreeXpFactor,
                    a.E4.BattleToken,
                    a.E4.LootBox,
                    a.E4.PremiumUniversal,
                    a.E4.NaturalCover,
                    a.E4.BpCoin,
                    a.E4.BattlePassSelectToken,
                    a.E4.BattlaPassFinalAchievement,
                    a.E4.BattleBadge,
                    a.E4.BattlePassTicket,
                    a.E4.BonusX5,
                    a.E4.CrewBonusX3,
                    a.E4.EpicSelectToken,
                    a.E4.Comp7TokenWeeklyReward,
                    a.E4.DeluxeGift,
                    a.E4.ModernizedDevicesT1Gift,
                    a.E4.ModernizedDevicesT2Gift,
                    a.E4.ModernizedDevicesT3Gift,
                    a.E4.BattleBoosterGift,
                    a.E4.OptionalDevice,
                    a.E4.Attachment,
                    a.E4.Gold,
                    a.E4.Credits,
                    a.E4.Crystal,
                    a.E4.FreeXp,
                    a.E4.BattlePassPoints,
                    a.E4.EquipCoin,
                    a.E4.PremiumPlus,
                    a.E4.Premium,
                    a.h2.Small,
                    a.h2.Big);
            },
            8089: (e, u, t) => {
                t.d(u, { A: () => E });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3138),
                    o = t(7363),
                    i = t.n(o),
                    s = t(7476);
                const l = [
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const E = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        a = e.goto,
                        E = e.classNames,
                        _ = e.onMouseEnter,
                        d = e.onMouseLeave,
                        m = e.onMouseDown,
                        A = e.onMouseUp,
                        F = e.side,
                        D = void 0 === F ? 'left' : F,
                        h = e.type,
                        C = void 0 === h ? 'back' : h,
                        B = e.soundHover,
                        g = void 0 === B ? 'highlight' : B,
                        p = e.soundClick,
                        b = void 0 === p ? 'play' : p,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, l);
                    const w = (0, o.useCallback)(
                            (e) => {
                                (null == _ || _(e), r.O.sound.play.sound(g));
                            },
                            [_, g],
                        ),
                        f = (0, o.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        ),
                        S = (0, o.useCallback)(
                            (e) => {
                                (null == m || m(e), r.O.sound.play.sound(b));
                            },
                            [m, b],
                        ),
                        x = (0, o.useCallback)(
                            (e) => {
                                null == A || A(e);
                            },
                            [A],
                        );
                    return i().createElement(
                        'div',
                        c(
                            {
                                className: n()(
                                    s.Z.base,
                                    s.Z[`base__${C}`],
                                    s.Z[`base__${D}`],
                                    null == E ? void 0 : E.base,
                                ),
                                onMouseEnter: w,
                                onMouseLeave: f,
                                onMouseDown: S,
                                onMouseUp: x,
                                onClick: t,
                            },
                            v,
                        ),
                        'info' !== C && i().createElement('div', { className: s.Z.shine }),
                        i().createElement(
                            'div',
                            {
                                className: n()(
                                    s.Z.icon,
                                    s.Z[`icon__${C}`],
                                    s.Z[`icon__${D}`],
                                    null == E ? void 0 : E.icon,
                                ),
                            },
                            i().createElement('div', { className: n()(s.Z.glow, null == E ? void 0 : E.glow) }),
                        ),
                        i().createElement(
                            'div',
                            { className: n()(s.Z.caption, s.Z[`caption__${C}`], null == E ? void 0 : E.caption) },
                            u,
                        ),
                        a && i().createElement('div', { className: n()(s.Z.goto, null == E ? void 0 : E.goto) }, a),
                    );
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var a = t(2056),
                    n = t(7363),
                    r = t.n(n);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            _ = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, o);
                        const m = (0, n.useMemo)(() => {
                            const e = Object.assign({}, _, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, _]);
                        return r().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == _ ? void 0 : _.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                d,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var a = t(7902),
                    n = t(9916),
                    r = t(7363);
                const o = [
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
                const s = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
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
                            _ = e.onClick,
                            d = e.ignoreShowDelay,
                            m = void 0 !== d && d,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            h = void 0 === D ? 0 : D,
                            C = e.isEnabled,
                            B = void 0 === C || C,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            b = e.onShow,
                            v = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, o);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => p || (0, a.F)().resId, [p]),
                            x = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (s(t, h, { isMouseEvent: !0, on: !0, arguments: i(n) }, S),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [t, h, n, S, b]),
                            P = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        s(t, h, { on: !1 }, S),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, h, S, v]),
                            y = (0, r.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === B && P();
                            }, [B, P]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return B
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(f.current.timeoutId),
                                                      (f.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (P(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && P(), null == _ || _(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && P(), null == E || E(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
                        var L;
                    };
            },
            7515: (e, u, t) => {
                t.d(u, { u: () => a });
                const a = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                t.d(u, { v: () => a });
                const a = (e) => {
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
                t.d(u, { F: () => a });
                const a = (e, u) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(a));
                    };
                };
            },
            8246: (e, u, t) => {
                t.d(u, { U: () => i });
                var a = t(3138);
                function n(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = o, context: r = 'model' } = {}) {
                    const i = new Map();
                    function s(e, u = 0) {
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
                        const a = t(u),
                            n = r.split('.').reduce((e, u) => e[u], a);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const o = 'string' == typeof n ? `${r}.${n}` : r,
                                s = a.O.view.addModelObserver(o, u, !0);
                            return (i.set(s, t), e && t(l(n)), s);
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
                            for (var e, t = n(i.keys()); !(e = t()).done; ) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q3: () => s });
                var a = t(4598),
                    n = t(9174),
                    r = t(7363),
                    o = t.n(r),
                    i = t(8246);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: E }) {
                            const _ = (0, r.useRef)([]),
                                d = (t, r, o) => {
                                    var s;
                                    const l = i.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        E = (e) =>
                                            'mocks' === t ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        d = (e) => _.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = E(e),
                                                        r = n.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const r = null != u ? u : E(e),
                                                        o = n.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : E(e),
                                                        o = n.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const a = E(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = n.LO.box(a[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            o = Object.entries(r),
                                                            i = o.reduce(
                                                                (e, [u, t]) => ((e[t] = n.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        o.forEach(([u, t]) => {
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
                                            cleanup: d,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: d };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && o ? o.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, r.useRef)(!1),
                                A = (0, r.useState)(s),
                                F = A[0],
                                D = A[1],
                                h = (0, r.useState)(() => d(s, l, E)),
                                C = h[0],
                                B = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? B(d(F, l, E)) : (m.current = !0);
                                }, [E, F, l]),
                                (0, r.useEffect)(() => {
                                    D(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (C.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [C],
                                ),
                                o().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                (t(3649), t(9916));
                var a = t(8613);
                (Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime);
            },
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => r, onScaleUpdated: () => o }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function a() {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        o = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = t(527),
                    n = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
            },
            2472: (e, u, t) => {
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => o });
                var a = t(5959),
                    n = t(7698),
                    r = t(514);
                const o = { view: t(7641), client: a, sound: r.ZP, intl: n.N };
            },
            7698: (e, u, t) => {
                t.d(u, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => i, hY: () => o });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    o = Object.assign({}, r, { sound: a.playSound }),
                    i = { play: o, setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => n });
                var a = t(2472);
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
            7641: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        arabic2roman: () => S,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => k,
                        events: () => o.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => f,
                        getScale: () => D,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => T,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => h,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    }));
                var a = t(9690),
                    n = t(3722),
                    r = t(6112),
                    o = t(6538),
                    i = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = a.cg;
                function x() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function k() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function T(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            a = u.right,
                            n = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    o = 32,
                    i = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? n : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId'),
                        n = '';
                    var r;
                    u &&
                        ((n = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (a = window.subViews[t].id));
                    return { callerUrl: n, caller: t, stack: u, resId: a };
                };
            },
            3815: (e, u, t) => {
                t.d(u, { z: () => r });
                var a = t(7363);
                const n = [];
                function r(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), n)
                    );
                }
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => o });
                var a = t(7363),
                    n = t(7739),
                    r = t(1043);
                let o, i, s;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(o || (o = {})),
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
                    })(s || (s = {})));
                const l = () => {
                    const e = (0, a.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
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
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                let a, n;
                (t.d(u, { n: () => a }),
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
                    })(n || (n = {})));
            },
            9480: (e, u, t) => {
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { G: () => s, UI: () => o, hX: () => l, sE: () => c, u4: () => _, v_: () => E, yW: () => i });
                const n = a;
                function r(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function i(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(n(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function s(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(n(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function l(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        var a;
                        const r = null == (a = e[n]) ? void 0 : a.value;
                        u(r, n, e) && t.push(r);
                    }
                    return t;
                }
                function c(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const a = r(e[t]);
                        if (u(a, t, e)) return a;
                    }
                }
                function E(e, u = ',') {
                    let t = '';
                    for (let a = 0; a < e.length; a++) {
                        a > 0 && (t += u);
                        const r = n(e, a);
                        t += null == r ? '' : String(r);
                    }
                    return t;
                }
                function _(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, n(e, t), t, e);
                    }
                    return a;
                }
            },
            1641: (e, u, t) => {
                let a;
                (t.d(u, { t: () => a }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(a || (a = {})));
            },
            9690: (e, u, t) => {
                t.d(u, { HG: () => i, cg: () => r });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t]; ) ((u += a[t]), (e -= n[t]));
                    return u;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (o ? `${e}` : r(e));
            },
            7727: (e, u, t) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => n, G: () => a });
                const n = {
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
            3649: (e, u, t) => {
                t.d(u, { BN: () => o, Uw: () => A, WU: () => r, e: () => i, v2: () => n });
                var a = t(1281);
                let n;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    c = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    E = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? l : c, []),
                    _ = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return _(e);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = n.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = s(e);
                            return (E(r, /( )/, u).forEach((e) => (t = t.concat(E(e, a, n.left)))), t);
                        })(e, u);
                    },
                    A = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                        const r = a.O.view.addModelObserver(e, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, u, t) => {
                t.d(u, { B0: () => i, ry: () => D });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const n = a;
                var r = t(1358);
                var o = t(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const m = ['args'];
                function A(e, u, t, a, n, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            A(r, a, n, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, a, n, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => h(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var g = t(7572);
                const p = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                _ = s.height,
                                m = {
                                    x: d.O.view.pxToRem(l) + o.x,
                                    y: d.O.view.pxToRem(c) + o.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(_),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: h,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            2765: (e, u, t) => {
                var a = t(7363),
                    n = t.n(a),
                    r = t(5216),
                    o = t(3215),
                    i = t(4598),
                    s = t(9480),
                    l = t(3946);
                const c = (0, o.q3)()(
                        ({ observableModel: e }) => {
                            const u = e.array('chapters'),
                                t = { root: e.object(), chapters: u },
                                a = (0, l.Om)(() => s.G(u.get(), ({ isExtra: e }) => e)),
                                n = (0, l.Om)(() => s.G(u.get(), ({ chapterState: e }) => e === r.l.Active)),
                                o = (0, l.Om)(() => s.yW(u.get(), ({ chapterState: e }) => e === r.l.Completed)),
                                c = (0, l.Om)((e) => s.sE(u.get(), (u) => u.chapterID === e), { equals: i.jv }),
                                E = (0, l.Om)((e) => {
                                    const t = s.sE(u.get(), (u) => u.chapterID === e);
                                    return {
                                        levelProgression: (null == t ? void 0 : t.levelProgression) || 0,
                                        currentLevel: (null == t ? void 0 : t.currentLevel) || 0,
                                    };
                                }),
                                _ = (0, l.Om)(() => s.hX(t.chapters.get(), (e) => !e.isExtra), { equals: i.jv }),
                                d = (0, l.Om)(() => s.hX(_(), (e) => e.chapterState === r.l.Completed).length, {
                                    equals: i.jv,
                                }),
                                m = (0, l.Om)(() => s.hX(t.chapters.get(), (e) => e.isExtra)),
                                A = [2];
                            return Object.assign({}, t, {
                                computes: {
                                    getChapterById: c,
                                    getProgressionInfoByChapterId: E,
                                    hasExtra: a,
                                    hasActive: n,
                                    isCompleted: o,
                                    regularChapters: _,
                                    extraChapters: m,
                                    regularChaptersCompleteCount: d,
                                    chaptersLineInfo: () =>
                                        s.u4(
                                            _(),
                                            (e, { chapterID: u, chapterState: t }, a) => (
                                                A.includes(a + 1) || e.push({ chapterID: u, chapterState: t }),
                                                e
                                            ),
                                            [],
                                        ),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                        }),
                    ),
                    E = (c[0], c[1]);
                var _ = t(8089),
                    d = t(1856),
                    m = t(5521),
                    A = t(3403),
                    F = t(8030),
                    D = t(6444);
                const h = 'App_base_26',
                    C = 'App_additionalBackground_c6',
                    B = 'App_infoButtons_78',
                    g = 'App_header_41';
                var p = t(6483),
                    b = t.n(p),
                    v = t(5415),
                    w = t(9766),
                    f = t(2828),
                    S = t(6373),
                    x = t(3815),
                    P = t(7727),
                    y = t(9485),
                    L = t(7994),
                    k = t(2893),
                    T = t(8546),
                    M = t(8596);
                const O = 'Shield_base_ec',
                    N = 'Shield_flag_a2',
                    I = 'Shield_flag__isChapterChosen_81',
                    H = 'Shield_flag__medium_78',
                    $ = 'Shield_emblem_59',
                    G = 'Shield_chapterLogoIcon_4b',
                    z = (0, A.Pi)(({ size: e, chapterID: u = 0 }) => {
                        const t = E().model,
                            a = t.root.get().seasonNum,
                            o = t.computes.getChapterById(u);
                        if (!o) return null;
                        const i = o.isBought,
                            s = o.isExtra,
                            l = o.chapterState,
                            c = t.computes.getProgressionInfoByChapterId(u),
                            _ = c.currentLevel,
                            d = c.levelProgression,
                            m = { level: _, to: d, from: d },
                            A = l === r.l.Completed ? T.Bq.Completed : i ? T.Bq.Bought : T.Bq.Free,
                            F = l === r.l.Active,
                            D = (0, k.UP)(m) || l !== r.l.NotStarted,
                            h = D && A !== T.Bq.Completed;
                        return n().createElement(
                            'div',
                            { className: O },
                            n().createElement('div', {
                                className: b()(N, e === T.$u.Medium && H, h && I),
                                style: (0, y.fW)(u, e),
                            }),
                            n().createElement(
                                'div',
                                { className: $ },
                                n().createElement(M.G4, {
                                    progression: m,
                                    size: e,
                                    chapterID: u,
                                    seasonNum: a,
                                    battlePassState: A,
                                    hasBattlePass: i,
                                    hasBeenActive: D,
                                    isChapterSelection: !0,
                                    isOpen: h,
                                    isChapterChosen: F,
                                    showProgressBar: F,
                                    isExtra: s,
                                }),
                                h && n().createElement('div', { className: G, style: (0, y.cs)(u, i, e) }),
                            ),
                        );
                    }),
                    U = {
                        base: 'Chapter_base_f0',
                        base__qHDSize: 'Chapter_base__qHDSize_da',
                        bg: 'Chapter_bg_2e',
                        base__paused: 'Chapter_base__paused_ff',
                        base__notStarted: 'Chapter_base__notStarted_9b',
                        base__completed: 'Chapter_base__completed_88',
                        bgHover: 'Chapter_bgHover_ac',
                        border: 'Chapter_border_5c',
                        frame: 'Chapter_frame_58',
                        content: 'Chapter_content_61',
                        vehicleImg: 'Chapter_vehicleImg_b1',
                        shieldWrapper: 'Chapter_shieldWrapper_27',
                        shield: 'Chapter_shield_bc',
                        shieldShine: 'Chapter_shieldShine_3f',
                        rotate: 'Chapter_rotate_78',
                        completedIcon: 'Chapter_completedIcon_f2',
                        title: 'Chapter_title_57',
                        content__extraChapterContent: 'Chapter_content__extraChapterContent_02',
                        base__active: 'Chapter_base__active_e5',
                        vehicleStyle: 'Chapter_vehicleStyle_85',
                        preview: 'Chapter_preview_1d',
                        previewWrapper: 'Chapter_previewWrapper_74',
                        styleTitle: 'Chapter_styleTitle_0d',
                        vehicleTitle: 'Chapter_vehicleTitle_10',
                        crewTitle: 'Chapter_crewTitle_71',
                        crewSubtitle: 'Chapter_crewSubtitle_f3',
                        vehicleInHangar: 'Chapter_vehicleInHangar_61',
                        extraLevel: 'Chapter_extraLevel_b2',
                        extraName: 'Chapter_extraName_4c',
                        level: 'Chapter_level_e1',
                        name: 'Chapter_name_f0',
                        fadeOut: 'Chapter_fadeOut_82',
                        fadeIn: 'Chapter_fadeIn_f7',
                        fadeInWithScale: 'Chapter_fadeInWithScale_4c',
                        slideUp: 'Chapter_slideUp_71',
                        scale: 'Chapter_scale_96',
                    };
                var W = t(5831);
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const q = R.strings.battle_pass,
                    V = (0, A.Pi)(({ chapterID: e }) => {
                        const u = E(),
                            t = u.model,
                            o = u.controls,
                            i = t.computes.getChapterById(e);
                        if (!i) return null;
                        const l = (0, D.tv)(),
                            c = i.chapterState,
                            _ = i.styleName,
                            d = i.isVehicleInHangar,
                            m = i.vehicleInfo,
                            A = i.finalRewardType,
                            F = i.tankmanNames,
                            h = i.isExtra,
                            C = (0, v.GS)(),
                            B = C.mediaSize,
                            g = C.remScreenWidth,
                            p = C.remScreenHeight,
                            M = (0, a.useCallback)(
                                (u) => {
                                    (o.openPreview(e), u.stopPropagation());
                                },
                                [e, o],
                            ),
                            O = (0, x.z)(() => {
                                (0, P.G)(k.r_.BP_HIGHLIGHT);
                            }),
                            N = B <= v.cJ.Medium ? T.$u.Small : T.$u.Medium,
                            I = g >= 2560 && p >= 1440,
                            R = c === r.l.Completed,
                            H = c === r.l.Active,
                            $ = q.chapter.fullNameUppercased.$num(e);
                        return n().createElement(
                            'div',
                            {
                                className: b()(U.base, U[`base__${c}`], I && U.base__qHDSize),
                                onMouseEnter: O,
                                onClick: () => {
                                    (P.$.playClick(), l.push(W._.battlePass.progression, { chapterID: e }));
                                },
                                style: { width: viewEnv.remToPx(De[B]) },
                            },
                            n().createElement(
                                'div',
                                { className: U.bg, style: (0, y.TZ)(e) },
                                n().createElement('div', { className: U.vehicleImg, style: (0, y.OH)(e) }),
                                n().createElement('div', { className: U.bgHover }),
                                H && n().createElement('div', { className: U.frame }),
                            ),
                            n().createElement(
                                'div',
                                { className: b()(U.content, h && U.content__extraChapterContent) },
                                n().createElement(
                                    'div',
                                    { className: U.shieldWrapper },
                                    H && n().createElement('div', { className: U.shieldShine }),
                                    n().createElement(
                                        'div',
                                        { className: U.shield },
                                        n().createElement(z, { size: N, chapterID: e }),
                                    ),
                                ),
                                R && n().createElement('div', { className: U.completedIcon }),
                                n().createElement('div', { className: U.title }, $),
                                n().createElement(
                                    'div',
                                    { className: U.vehicleStyle },
                                    A !== r.E.Tankman &&
                                        n().createElement(
                                            'div',
                                            { className: U.preview },
                                            n().createElement(
                                                'div',
                                                { className: U.previewWrapper },
                                                n().createElement(f.h, {
                                                    type: 'preview',
                                                    onClick: M,
                                                    size: B < v.cJ.Medium ? 'small' : 'normal',
                                                }),
                                            ),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: U.styleTitle },
                                        ((e, u) => {
                                            switch (e) {
                                                case r.E.Style:
                                                    return n().createElement(w.z, {
                                                        text: q.chapterChoice.stylePreview.name(),
                                                        binding: { styleName: u },
                                                    });
                                                case r.E.Tankman:
                                                    return n().createElement(
                                                        'div',
                                                        { className: U.crewTitle },
                                                        n().createElement(w.z, {
                                                            text: q.chapterChoice.crewMember.reward(),
                                                        }),
                                                    );
                                                case r.E.Vehicle:
                                                    return n().createElement(w.z, {
                                                        text: q.chapterChoice.premiumVehicle.reward(),
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(A, _),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: U.vehicleTitle },
                                        ((e, u, t, a) => {
                                            const o = a
                                                ? { level: U.extraLevel, name: U.extraName }
                                                : { level: U.level, name: U.name };
                                            switch (e) {
                                                case r.E.Style:
                                                    return n().createElement(w.z, {
                                                        text: q.chapterChoice.stylePreview.forLabel(),
                                                        binding: {
                                                            vehicleName: n().createElement(
                                                                L.U4,
                                                                j({}, t, { classNames: o }),
                                                            ),
                                                        },
                                                    });
                                                case r.E.Tankman:
                                                    return n().createElement(w.z, {
                                                        classMix: U.crewSubtitle,
                                                        text: s.v_(u, q.common.comma()),
                                                    });
                                                case r.E.Vehicle:
                                                    return n().createElement(w.z, {
                                                        text: q.chapterChoice.stylePreview.extraLabel(),
                                                        binding: {
                                                            vehicleName: n().createElement(
                                                                L.U4,
                                                                j({}, t, { classNames: o }),
                                                            ),
                                                        },
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(A, F, m, h),
                                        A === r.E.Style &&
                                            d &&
                                            n().createElement(
                                                S.i,
                                                { body: q.chapterChoice.vehicleInHangar.tooltip.text() },
                                                n().createElement('div', { className: U.vehicleInHangar }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Z = {
                        base: 'ChapterPostProgressionLine_base_d0',
                        circleShine: 'ChapterPostProgressionLine_circleShine_6b',
                        base__hovered: 'ChapterPostProgressionLine_base__hovered_8c',
                        chapterLine: 'ChapterPostProgressionLine_chapterLine_00',
                        circle: 'ChapterPostProgressionLine_circle_2c',
                        circle__completed: 'ChapterPostProgressionLine_circle__completed_c2',
                        verticalChapterLine: 'ChapterPostProgressionLine_verticalChapterLine_0e',
                        verticalChapterLine__completed: 'ChapterPostProgressionLine_verticalChapterLine__completed_7c',
                    },
                    Y = ({ chapterState: e, isButtonHovered: u }) => {
                        const t = (0, v.GS)().mediaSize,
                            a = viewEnv.remToPx(t <= v.cJ.Small ? 47 : 57),
                            o = e === r.l.Completed ? a + 1 : a,
                            i = viewEnv.remToPx(4);
                        return n().createElement(
                            'div',
                            { className: b()(Z.base, u && Z.base__hovered) },
                            e === r.l.Completed && n().createElement('div', { className: Z.circleShine }),
                            n().createElement(
                                'svg',
                                {
                                    width: viewEnv.remToPx(8),
                                    height: o,
                                    viewBox: `0 0 ${viewEnv.remToPx(8)} ${o}`,
                                    className: Z.chapterLine,
                                },
                                n().createElement('circle', {
                                    cx: i,
                                    cy: i,
                                    r: viewEnv.remToPx(3),
                                    className: b()(Z.circle, Z[`circle__${e}`]),
                                }),
                                n().createElement('line', {
                                    x1: i,
                                    x2: i,
                                    y1: viewEnv.remToPx(7),
                                    y2: o,
                                    className: b()(Z.verticalChapterLine, Z[`verticalChapterLine__${e}`]),
                                }),
                            ),
                        );
                    };
                var X = t(514);
                const K = {
                        base: 'SVGHorizontalLine_base_8f',
                        horizontalChapterLine: 'SVGHorizontalLine_horizontalChapterLine_a7',
                        horizontalChapterLine__completed: 'SVGHorizontalLine_horizontalChapterLine__completed_70',
                        base__active: 'SVGHorizontalLine_base__active_96',
                    },
                    Q = (0, A.Pi)(({ activateLine: e }) => {
                        const u = E().model.computes.chaptersLineInfo(),
                            t = (0, v.GS)().mediaSize;
                        return n().createElement(
                            'div',
                            { className: b()(K.base, e && K.base__active) },
                            n().createElement(
                                'svg',
                                { width: '100%', height: '100%', viewBox: '0 0 100% 100%' },
                                s.UI(u, ({ chapterID: e, chapterState: u }, a) =>
                                    n().createElement('line', {
                                        x1: ee(t) * a + ue,
                                        x2: ee(t) * (a + 1) + ue,
                                        y1: '0',
                                        y2: '0',
                                        key: `${e}_${a}`,
                                        className: b()(K.horizontalChapterLine, K[`horizontalChapterLine__${u}`]),
                                    }),
                                ),
                            ),
                        );
                    }),
                    J = {
                        base: 'PostProgressionEntryPoint_base_5a',
                        buttonBlock: 'PostProgressionEntryPoint_buttonBlock_5a',
                        button: 'PostProgressionEntryPoint_button_d3',
                        buttonText: 'PostProgressionEntryPoint_buttonText_28',
                        lockBlock: 'PostProgressionEntryPoint_lockBlock_6c',
                        lock: 'PostProgressionEntryPoint_lock_c4',
                        lockShine: 'PostProgressionEntryPoint_lockShine_07',
                        postProgressionText: 'PostProgressionEntryPoint_postProgressionText_b7',
                        base__hovered: 'PostProgressionEntryPoint_base__hovered_13',
                        completedChaptersCount: 'PostProgressionEntryPoint_completedChaptersCount_32',
                    },
                    ee = (e) => viewEnv.remToPx(De[e]),
                    ue = viewEnv.remToPx(4),
                    te = R.strings.battle_pass.chapterChoice.postProgression,
                    ae = (0, A.Pi)(({ setIsButtonHovered: e, isButtonHovered: u }) => {
                        const t = E().model,
                            a = (0, D.tv)(),
                            r = (0, v.GS)().mediaSize,
                            o = t.computes.regularChapters(),
                            i = t.computes.regularChaptersCompleteCount(),
                            s = i === o.length;
                        return n().createElement(
                            'div',
                            {
                                className: b()(J.base, u && J.base__hovered),
                                style: { width: (ee(r) + ue) * (o.length - 1) },
                            },
                            n().createElement(Q, { activateLine: u }),
                            n().createElement(
                                'div',
                                { className: J.buttonBlock },
                                n().createElement(
                                    'div',
                                    {
                                        className: J.button,
                                        onMouseEnter: () => {
                                            (e(!0), X.hY.sound('highlight'));
                                        },
                                        onMouseLeave: () => {
                                            e(!1);
                                        },
                                        onClick: () => {
                                            (a.push(W._.battlePass.postProgression), X.hY.sound('play'));
                                        },
                                    },
                                    n().createElement('div', { className: J.buttonText }, te.button.text()),
                                    !s &&
                                        n().createElement(
                                            'div',
                                            { className: J.lockBlock },
                                            n().createElement('div', { className: J.lock }),
                                            n().createElement('div', { className: J.lockShine }),
                                        ),
                                ),
                                i !== o.length &&
                                    n().createElement(
                                        'div',
                                        { className: J.postProgressionText },
                                        n().createElement(w.z, {
                                            classMix: J.text,
                                            text: te.text(),
                                            binding: {
                                                completedChaptersCount: n().createElement(
                                                    'span',
                                                    { className: J.completedChaptersCount },
                                                    i,
                                                ),
                                                chaptersCount: o.length,
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    ne = 'Separator_base_8a',
                    re = 'Separator_base__qHDSize_bb',
                    oe = 'Separator_line_97',
                    ie = 'Separator_line__top_a6',
                    se = 'Separator_line__bottom_a0',
                    le = 'Separator_plus_41',
                    ce = () => {
                        const e = (0, v.GS)(),
                            u = e.remScreenWidth,
                            t = e.remScreenHeight,
                            a = u >= 2560 && t >= 1440;
                        return n().createElement(
                            'div',
                            { className: b()(ne, a && re) },
                            n().createElement('div', { className: b()(oe, ie) }),
                            n().createElement('div', { className: le }),
                            n().createElement('div', { className: b()(oe, se) }),
                        );
                    },
                    Ee = 'Chapters_base_81',
                    _e = 'Chapters_base__normal_49',
                    de = 'Chapters_base__extend_cb',
                    me = 'Chapters_regular_4d',
                    Ae = 'Chapters_regularChapters_e9',
                    Fe = 'Chapters_chapterWrapper_51',
                    De = {
                        [v.cJ.ExtraSmall]: 242,
                        [v.cJ.Small]: 242,
                        [v.cJ.Medium]: 376,
                        [v.cJ.Large]: 452,
                        [v.cJ.ExtraLarge]: 608,
                    },
                    he = (0, A.Pi)(() => {
                        const e = E().model,
                            u = e.computes.hasExtra(),
                            t = e.computes.regularChapters(),
                            r = e.computes.extraChapters(),
                            o = (0, a.useState)(!1),
                            i = o[0],
                            l = o[1];
                        return n().createElement(
                            'div',
                            { className: b()(Ee, u ? de : _e) },
                            n().createElement(
                                'div',
                                { className: me },
                                n().createElement(
                                    'div',
                                    { className: Ae },
                                    s.UI(t, ({ chapterID: e, chapterState: u }, t) =>
                                        n().createElement(
                                            'div',
                                            { className: Fe, key: t },
                                            n().createElement(V, { chapterID: e }),
                                            n().createElement(Y, { chapterState: u, isButtonHovered: i }),
                                        ),
                                    ),
                                ),
                                n().createElement(ae, { isButtonHovered: i, setIsButtonHovered: l }),
                            ),
                            u && n().createElement(ce, null),
                            s.UI(r, ({ chapterID: e }, u) =>
                                n().createElement(n().Fragment, { key: u }, n().createElement(V, { chapterID: e })),
                            ),
                        );
                    }),
                    Ce = 'Header_base_71',
                    Be = 'Header_title_af',
                    ge = 'Header_base__qHDSize_a9',
                    pe = 'Header_description_cc',
                    be = 'Header_freePoints_05',
                    ve = 'Header_freePointsInfo_f3',
                    we = 'Header_freePointsCount_a8',
                    fe = 'Header_freePointsIcon_be',
                    Se = R.strings.battle_pass.chapterChoice.freePoints,
                    xe = (0, A.Pi)(({ title: e }) => {
                        const u = E().model,
                            t = u.root.get().freePoints,
                            a = !u.computes.isCompleted() && t > 0,
                            r = (0, v.GS)(),
                            o = r.remScreenWidth,
                            i = r.remScreenHeight,
                            s = o >= 2560 && i >= 1440;
                        return n().createElement(
                            'div',
                            { className: b()(Ce, s && ge) },
                            n().createElement('div', { className: Be }, e),
                            n().createElement(
                                'div',
                                { className: pe },
                                a &&
                                    n().createElement(
                                        'div',
                                        { className: be },
                                        Se.description(),
                                        n().createElement(
                                            S.i,
                                            { header: Se.tooltip.title(), body: Se.tooltip.description() },
                                            n().createElement(
                                                'div',
                                                { className: ve },
                                                n().createElement('span', { className: we }, t),
                                                n().createElement('span', { className: fe }),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Pe = R.strings.battle_pass;
                (0, A.Pi)(() => {
                    const e = E(),
                        u = e.model,
                        t = e.controls,
                        r = (0, D.tv)(),
                        o = t.openAbout,
                        i = t.openPointsInfo,
                        s = t.onViewLoaded,
                        l = u.root.get().isSeasonWithAdditionalBackground,
                        c = u.computes.hasExtra(),
                        A = u.computes.hasActive(),
                        p = u.computes.isCompleted(),
                        b = c && l,
                        v = (0, a.useState)(!1),
                        w = v[0],
                        f = v[1];
                    return (
                        F.N.useHandleKeydown(m.n.ESCAPE, () => {
                            r.goBack();
                        }),
                        (0, a.useEffect)(
                            () =>
                                (0, d.v)(() => {
                                    w || (s(), f(!0));
                                }),
                            [w, s],
                        ),
                        n().createElement(
                            'div',
                            { className: h },
                            b && n().createElement('div', { className: C }),
                            n().createElement(
                                'div',
                                { className: B },
                                n().createElement(_.A, { caption: Pe.intro.aboutButton(), type: 'info', onClick: o }),
                                n().createElement(_.A, {
                                    caption: Pe.howToEarnPoints.title(),
                                    type: 'info',
                                    onClick: i,
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: g },
                                n().createElement(xe, {
                                    title: A || p ? Pe.chapterChoice.activeTitle() : Pe.chapterChoice.title(),
                                }),
                            ),
                            n().createElement(he, null),
                        )
                    );
                });
            },
            5831: (e, u, t) => {
                t.d(u, { _: () => a });
                const a = {
                    root: '/hangar',
                    battlePass: {
                        chapterChoice: '/battlePass/chapterChoice',
                        progression: '/battlePass/progression',
                        postProgression: '/battlePass/postProgression',
                        intro: '/battlePass/intro',
                        buyPass: '/battlePass/buyPass',
                        buyPassConfirm: '/battlePass/buyPassConfirm',
                        buyPassRewards: '/battlePass/buyPassRewards',
                        buyLevels: '/battlePass/buyLevels',
                        buyLevelsRewards: '/battlePass/buyLevelsRewards',
                        holidayFinal: '/battlePass/holidayFinal',
                    },
                };
            },
            9485: (e, u, t) => {
                t.d(u, { OH: () => l, TZ: () => s, cs: () => o, fW: () => i, wD: () => r });
                var a = t(8546);
                const n = (e) => {
                        switch (e) {
                            case a.$u.Micro:
                                return 's';
                            case a.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    r = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            n = e.$dyn(`c_${u}${a}`),
                            r = String(u).slice(-1),
                            o = e.$dyn(`default_${r}${a}`);
                        return n || o;
                    },
                    o = (e, u, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            o = u ? 'BP' : '',
                            i = `${n(t)}${o}`;
                        return { backgroundImage: `url(${r(a, e, i)})` };
                    },
                    i = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = n(u);
                        return { backgroundImage: `url(${r(t, e, a)})` };
                    },
                    s = (e) => ({
                        backgroundImage: `url(${r(R.images.gui.maps.icons.battlePass.chapter_choice.commander, e)})`,
                    }),
                    l = (e) => ({
                        backgroundImage: `url(${r(R.images.gui.maps.icons.battlePass.chapter_choice.tank, e)})`,
                    });
            },
            930: (e, u, t) => {
                let a;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(a || (a = {}));
                (a.style, a.tankman);
            },
            2893: (e, u, t) => {
                t.d(u, { UP: () => n, r_: () => a });
                (t(2862), t(729), t(5216), t(7044), t(3649), t(8546), t(930));
                const a = { BP_HIGHLIGHT: 'bp_highlight' },
                    n = (e) => void 0 !== e.from && (e.level > 1 || e.from > 0);
            },
            8596: (e, u, t) => {
                t.d(u, { G4: () => w });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r);
                const i = (e, u) => {
                    const t = u.postfix ? `_${u.postfix}` : '';
                    return ((e) => {
                        const u = e.path.$dyn(`${e.name}_${e.id}`),
                            t = e.path.$dyn('default');
                        return u || t;
                    })(e).$dyn(`${u.name}${t}`);
                };
                let s;
                !(function (e) {
                    ((e.Season = 'season'), (e.Chapter = 'chapter'));
                })(s || (s = {}));
                const l = {
                    base: 'Emblem_base_be',
                    progress: 'Emblem_progress_37',
                    progress__small: 'Emblem_progress__small_42',
                    progress__completed: 'Emblem_progress__completed_69',
                    hideProgress: 'Emblem_hideProgress_b4',
                    progress__hidden: 'Emblem_progress__hidden_6d',
                    image: 'Emblem_image_dc',
                    image__clickable: 'Emblem_image__clickable_b7',
                    image__micro: 'Emblem_image__micro_aa',
                    image__small: 'Emblem_image__small_ce',
                    extra: 'Emblem_extra_d4',
                    extra__micro: 'Emblem_extra__micro_f7',
                    extra__small: 'Emblem_extra__small_28',
                    hideLevel: 'Emblem_hideLevel_f2',
                    showLevel: 'Emblem_showLevel_c5',
                    hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                    showLevelSmall: 'Emblem_showLevelSmall_31',
                    hideLevelMicro: 'Emblem_hideLevelMicro_15',
                    showLevelMicro: 'Emblem_showLevelMicro_bc',
                    showIcon: 'Emblem_showIcon_c2',
                    showIconSmall: 'Emblem_showIconSmall_1d',
                    showIconMicro: 'Emblem_showIconMicro_f8',
                };
                var c = t(9485);
                const E = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    _ = ({
                        level: e,
                        size: u,
                        isGold: t,
                        isForRewardScreen: a,
                        curState: r,
                        isFirstLevel: i,
                        showProgressionCompleted: s,
                    }) => {
                        const l = n()(E.base, E[`base__${u}`]),
                            c = n()(
                                E.text,
                                E.text__filtered,
                                E[`text__${u}`],
                                E[`text__${r}`],
                                s && E.text__hideWithDelay,
                                i && E.text__new,
                                a && E.text__rewardScreen,
                            ),
                            _ = n()(
                                E.textWithBlend,
                                i && E.text__new,
                                s && E.text__hideWithDelay,
                                E[`textWithBlend__${r}`],
                            ),
                            d = n()(E.text, E.text__blended, E[`text__${u}`], a && E.text__rewardScreen),
                            m = n()(
                                E.textMask,
                                t && E.textMask__gold,
                                a && E.textMask__animated,
                                t && a && E.textMask__goldContrast,
                                E[`textMask__${u}`],
                            );
                        return o().createElement(
                            'div',
                            { className: l },
                            o().createElement('div', { className: c }, e),
                            o().createElement(
                                'div',
                                { className: _ },
                                o().createElement('div', { className: d }, e),
                                o().createElement('div', { className: m }),
                            ),
                        );
                    };
                var d = t(8546);
                const m = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    A = (e, u) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case d.$u.Small:
                                    return 'l';
                                case d.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(u)}${t}`;
                    },
                    F = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: u,
                            size: t,
                            battlePassState: a,
                            hasProgression: r,
                            isGolden: l,
                            labelAnimation: E,
                            newLabelAnimation: F,
                            isChapterChosen: D = !1,
                            chapterID: h = 0,
                            seasonNum: C = -1,
                            isProgressionCompleted: B = !1,
                            hasBeenActive: g = !1,
                            isChapterSelection: p = !1,
                            isProgression: b = !1,
                        }) => {
                            let v = '',
                                w = '';
                            t === d.$u.Small
                                ? ((v = 'Small'), (w = '__small'))
                                : t === d.$u.Micro && ((v = 'Micro'), (w = '__micro'));
                            const f = a === d.Bq.SwitchedChapterRightNow,
                                S = a === d.Bq.CompletedRightNow,
                                x = ((e, u, t, a, n) => (e || n ? u || !t : u || !a))(p, B, g, D, b),
                                P = !b && !p;
                            return o().createElement(
                                o().Fragment,
                                null,
                                x
                                    ? o().createElement('div', {
                                          className: n()(m.icon, w && m[`icon${w}`], S && m[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = A(l, t);
                                                  if (P) {
                                                      if (B) {
                                                          const t = { path: e.icon, name: s.Season, id: C };
                                                          return i(t, { name: 'icon', postfix: u });
                                                      }
                                                      if (!D) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, h, u);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  m.label,
                                                  m[`label${w}`],
                                                  f && m.label__new,
                                                  f && m[`label__new${v}`],
                                                  !S && B && m.label__disabled,
                                                  m[`label__${E}${v}`],
                                                  r && m[`label__hasProgress${v}`],
                                                  r && m[`label__hasProgress${v}${b ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(_, {
                                              level: u,
                                              size: t,
                                              isGold: l,
                                              isFirstLevel: f,
                                              curState: E,
                                              showProgressionCompleted: S,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                m.label,
                                                m[`label${w}`],
                                                f && m.label__new,
                                                f && m[`label__new${v}`],
                                                m[`label__${F}${v}`],
                                                r && m[`label__hasProgress${v}`],
                                            ),
                                        },
                                        o().createElement(_, {
                                            level: e,
                                            size: t,
                                            isGold: l,
                                            isFirstLevel: f,
                                            curState: F,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var D = t(1975);
                const h = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    C = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: u = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: a,
                            size: r,
                        }) => {
                            const i = n()(h.base, h[`base__${r}`], t && h.base__completed, !t && a && h.base__hidden);
                            return o().createElement(
                                'div',
                                { className: i },
                                o().createElement(D.ko, {
                                    key: e.to,
                                    size: D.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: u,
                                }),
                            );
                        },
                    );
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                let g, p;
                (!(function (e) {
                    ((e.Closed = 'closed'), (e.Open = 'open'));
                })(g || (g = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'));
                    })(p || (p = {})));
                const b = (e, u, t, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: s.Chapter, id: a },
                            o = e ? g.Open : g.Closed,
                            l = ((e, u) =>
                                e
                                    ? p.Gold
                                    : u === d.Bq.Completed || u === d.Bq.CompletedRightNow
                                      ? p.Completed
                                      : p.Initial)(u, t),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${i(r, { name: 'emblem', postfix: `${o}_${l}${c}` })})` };
                    },
                    v = (e, u) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: s.Season, id: e };
                        return { backgroundImage: `url(${i(t, { name: 'extra', postfix: u })})` };
                    },
                    w = (0, r.memo)((e) => {
                        const u = e.progression,
                            t = e.size,
                            a = e.battlePassState,
                            r = e.hasBattlePass,
                            i = e.isChapterChosen,
                            s = e.hasBeenActive,
                            c = void 0 !== s && s,
                            E = e.isChapterSelection,
                            _ = void 0 !== E && E,
                            m = e.isOpen,
                            A = void 0 !== m && m,
                            D = e.isProgression,
                            h = void 0 !== D && D,
                            g = e.showProgressBar,
                            p = void 0 === g || g,
                            w = e.isExtra,
                            f = void 0 !== w && w,
                            S = e.chapterID,
                            x = e.seasonNum,
                            P = e.clickable,
                            y = void 0 === P || P,
                            L = ((e) => {
                                switch (e) {
                                    case d.$u.Small:
                                        return 'small';
                                    case d.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(t),
                            k = a === d.Bq.CompletedRightNow,
                            T = r || a === d.Bq.Bought,
                            M = (a === d.Bq.Completed || k) && T,
                            O = (a === d.Bq.Completed || k) && !T,
                            N = M || O,
                            I = void 0 !== u.from,
                            R = p && ((I && i) || c);
                        return o().createElement(
                            'div',
                            { className: l.base },
                            f &&
                                o().createElement('div', {
                                    className: n()(l.extra, L && l[`extra__${L}`]),
                                    style: v(x, L),
                                }),
                            o().createElement(
                                'div',
                                {
                                    className: n()(l.image, L && l[`image__${L}`], y && l.image__clickable),
                                    style: b(A, T, a, S, L),
                                },
                                a !== d.Bq.AwaitSeason &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            F,
                                            B(
                                                {
                                                    hasProgression: I,
                                                    isGolden: T,
                                                    isProgressionCompleted: N,
                                                    isChapterChosen: i,
                                                    hasBeenActive: c,
                                                    isChapterSelection: _,
                                                    isProgression: h,
                                                },
                                                e,
                                                u,
                                            ),
                                        ),
                                        R &&
                                            o().createElement(C, {
                                                key: u.to,
                                                progression: u,
                                                showProgressionCompleted: k,
                                                isProgressionCompleted: N,
                                                size: t,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            8546: (e, u, t) => {
                let a, n, r, o;
                (t.d(u, { $u: () => a, Bq: () => r }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(o || (o = {})));
            },
            8470: (e, u, t) => {
                t.d(u, { t: () => r });
                var a = t(7363);
                const n = (0, a.createContext)(void 0);
                function r() {
                    const e = (0, a.useContext)(n);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            8030: (e, u, t) => {
                t.d(u, { N: () => a });
                var a = {};
                (t.r(a), t.d(a, { Provider: () => A, useApi: () => d, useHandleKeydown: () => m }));
                var n = t(3138),
                    r = t(3815),
                    o = t(7363),
                    i = t.n(o),
                    s = t(5521);
                class l {
                    constructor() {
                        this.items = [];
                    }
                    get length() {
                        return this.items.length;
                    }
                    push(e) {
                        this.items.push(e);
                    }
                    pop() {
                        return this.items.pop();
                    }
                    peek() {
                        return this.items[this.items.length - 1];
                    }
                    clear() {
                        this.items = [];
                    }
                    includes(e) {
                        return this.items.includes(e);
                    }
                    some(e) {
                        return this.items.some(e);
                    }
                    remove(e) {
                        const u = this.items.indexOf(e);
                        return -1 !== u && (this.items.splice(u, 1), !0);
                    }
                    isEmpty() {
                        return 0 === this.items.length;
                    }
                    toArray() {
                        return this.items.slice();
                    }
                }
                var c = t(4598);
                const E = () => {
                        const e = new Map();
                        function u(u) {
                            const t = e.get(u);
                            if (t) return t;
                            const a = new l();
                            return (e.set(u, a), a);
                        }
                        function t(u, t) {
                            const a = e.get(u);
                            return !!a && a.remove(t);
                        }
                        return {
                            handlers: e,
                            obtain: u,
                            register: function (e, a) {
                                if (e === s.n.NONE) return c.jv;
                                const n = u(e);
                                return (n.includes(a) || n.push(a), () => t(e, a));
                            },
                            unregister: t,
                            takeCurrent: function (u) {
                                const t = e.get(u);
                                if (!t) return;
                                const a = t.peek();
                                return a || void 0;
                            },
                        };
                    },
                    _ = (0, o.createContext)(void 0);
                function d() {
                    const e = (0, o.useContext)(_);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function m(e, u, t) {
                    const a = (0, r.z)((e) => {
                            n.O.view.isEventHandled() || (u(e), n.O.view.setEventHandled(), t && e.stopPropagation());
                        }),
                        i = d(),
                        s = (0, o.useMemo)(() => i.keydown.register(e, a), [i, e, a]);
                    (0, o.useEffect)(() => s, [s]);
                }
                const A = (e) => {
                    const u = (0, o.useMemo)(E, []);
                    (0, o.useEffect)(() => {
                        function e(e) {
                            const t = u.takeCurrent(e.keyCode);
                            t && t(e);
                        }
                        return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
                    });
                    const t = (0, o.useMemo)(
                        () => ({ keydown: { register: u.register, unregister: u.unregister } }),
                        [u],
                    );
                    return i().createElement(_.Provider, { value: t }, e.children);
                };
            },
            6444: (e, u, t) => {
                t.d(u, { tv: () => a.t });
                var a = t(8470),
                    n = t(7363);
                (0, n.createContext)(void 0);
            },
            7994: (e, u, t) => {
                t.d(u, { U4: () => m });
                var a = t(6483),
                    n = t.n(a),
                    r = t(5716),
                    o = t(9690),
                    i = t(3649),
                    s = t(7363),
                    l = t.n(s),
                    c = t(8032),
                    E = t(1960);
                let _, d;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(d || (d = {})));
                const m = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: a,
                    vehicleLvl: s,
                    tags: m = '',
                    size: A = _.extraSmall,
                    type: F = d.colored,
                    className: D,
                    classNames: h,
                    isShortName: C = !1,
                }) => {
                    const B = `${(0, i.BN)(a)}${e ? '_elite' : ''}`,
                        g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(B);
                    return l().createElement(
                        'div',
                        {
                            className: n()(
                                E.Z.base,
                                E.Z[`base__size${(0, i.e)(A)}`],
                                E.Z[`base__type${(0, i.e)(F)}`],
                                D,
                            ),
                        },
                        l().createElement(
                            'div',
                            { className: n()(E.Z.level, null == h ? void 0 : h.level) },
                            (0, o.HG)(s),
                        ),
                        l().createElement('div', {
                            className: n()(
                                E.Z.type,
                                e && E.Z[`type__elite${(0, i.e)(A)}`],
                                E.Z[`type__${A}`],
                                null == h ? void 0 : h.typeIcon,
                            ),
                            style: a ? { backgroundImage: `url(${g})` } : void 0,
                        }),
                        (0, c.f)(m, r.f3) && l().createElement('div', { className: E.Z.premiumIGR }),
                        l().createElement('div', { className: n()(E.Z.name, null == h ? void 0 : h.name) }, C ? t : u),
                    );
                };
            },
            8032: (e, u, t) => {
                t.d(u, { f: () => a });
                const a = (e, u) => e.split(',').includes(u);
            },
            5216: (e, u, t) => {
                let a, n;
                (t.d(u, { E: () => n, l: () => a }),
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(n || (n = {})));
            },
            5716: (e, u, t) => {
                t.d(u, { f3: () => a });
                const a = 'premiumIGR';
            },
            5287: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            2468: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, u, t) => {
                t.d(u, { Z: () => a });
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
            6147: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            7476: (e, u, t) => {
                t.d(u, { Z: () => a });
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
            1960: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
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
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], r = !0, o = 0; o < u.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
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
        (__webpack_require__.j = 1201),
        (() => {
            var e = { 1201: 0, 1730: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2765));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
