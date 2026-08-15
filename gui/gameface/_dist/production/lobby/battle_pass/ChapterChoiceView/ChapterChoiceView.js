(() => {
    'use strict';
    var __webpack_modules__ = {
            1602: (e, u, t) => {
                t(828);
            },
            2616: (e, u, t) => {
                t.d(u, { z: () => l });
                var a = t(9849),
                    n = t.n(a),
                    r = t(6758),
                    o = t(7363),
                    i = t.n(o),
                    s = t(4880);
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
            5603: (e, u, t) => {
                t.d(u, { z: () => a.z });
                var a = t(2616);
                t(1749);
            },
            1749: (e, u, t) => {
                t(6758);
            },
            7436: (e, u, t) => {
                t.d(u, { h: () => _ });
                var a = t(9849),
                    n = t.n(a);
                const r =
                    (e, u) =>
                    (...t) => {
                        if (e(...t)) return u(...t);
                    };
                var o = t(4170),
                    i = t(4029),
                    s = t(7363),
                    l = t.n(s);
                const c = {
                        base: 'IconButton_base_edac2',
                        base__hovered: 'IconButton_base__hovered_bedf8',
                        base__disabled: 'IconButton_base__disabled_f97d3',
                        icon: 'IconButton_icon_e81ef',
                        icon__preview: 'IconButton_icon__preview_d420c',
                        icon__compare: 'IconButton_icon__compare_e0c48',
                        icon__small: 'IconButton_icon__small_bdc70',
                        icon__normal: 'IconButton_icon__normal_e10ba',
                        base__mouseDown: 'IconButton_base__mouseDown_af6e6',
                        label: 'IconButton_label_bb533',
                        label__small: 'IconButton_label__small_a0a45',
                        label__normal: 'IconButton_label__normal_ecd39',
                        base__visibleLabel: 'IconButton_base__visibleLabel_ed77c',
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
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const _ = (e) => {
                    let u = e.type,
                        t = e.children,
                        a = e.className,
                        _ = e.classNames,
                        m = e.disabled,
                        A = void 0 !== m && m,
                        F = e.isVisibleLabel,
                        D = void 0 !== F && F,
                        h = e.soundHover,
                        C = void 0 === h ? R.sounds.highlight() : h,
                        B = e.soundClick,
                        g = void 0 === B ? R.sounds.play() : B,
                        b = e.size,
                        p = void 0 === b ? 'normal' : b,
                        v = e.onClick,
                        f = e.onMouseEnter,
                        w = e.onMouseLeave,
                        x = e.onMouseDown,
                        y = e.onMouseUp,
                        S = e.onFocus,
                        P = e.onBlur,
                        L = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== u.indexOf(a)) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, E);
                    const k = (0, s.useState)(!1),
                        T = k[0],
                        M = k[1],
                        I = (0, s.useState)(!1),
                        N = I[0],
                        O = I[1],
                        $ = (0, s.useRef)(null),
                        z = () => !1 === A,
                        H = (e) => z() && ((e) => e.button === o.t.LEFT)(e),
                        W = r(z, (e) => {
                            null == v || v(e);
                        }),
                        G = r(H, (e) => {
                            (M(!0), null == x || x(e), g && (0, i.G)(g));
                        }),
                        j = r(H, (e) => {
                            (M(!1), null == y || y(e));
                        }),
                        U = r(z, (e) => {
                            (O(!0), null == f || f(e), C && (0, i.G)(C));
                        }),
                        V = r(z, (e) => {
                            null == S || S(e);
                        }),
                        q = r(z, (e) => {
                            null == P || P(e);
                        });
                    return l().createElement(
                        'div',
                        d(
                            {
                                ref: $,
                                className: n()(
                                    c.base,
                                    A && c.base__disabled,
                                    D && c.base__visibleLabel,
                                    !A && T && c.base__mouseDown,
                                    !A && N && c.base__hovered,
                                    a,
                                ),
                                onClick: W,
                                onMouseEnter: U,
                                onMouseLeave: (e) => {
                                    (O(!1), M(!1), null == w || w(e));
                                },
                                onMouseDown: G,
                                onMouseUp: j,
                                onFocus: V,
                                onBlur: q,
                            },
                            L,
                        ),
                        l().createElement('div', {
                            className: n()(c.icon, c[`icon__${p}`], c[`icon__${u}`], null == _ ? void 0 : _.icon),
                        }),
                        t &&
                            l().createElement(
                                'div',
                                { className: n()(c.label, c[`label__${p}`], null == _ ? void 0 : _.label) },
                                t,
                            ),
                    );
                };
            },
            397: (e, u, t) => {
                t.d(u, { Y: () => s });
                var a = t(7475),
                    n = t(7363),
                    r = t(1958),
                    o = t(9478);
                const i = (function (e = a.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, o.T)(u, t, r.j));
                    })(),
                    s = (0, n.createContext)(i);
            },
            68: (e, u, t) => {
                (t(7475), t(7363), t(397));
            },
            5191: (e, u, t) => {
                var a = t(7363),
                    n = t(3034),
                    r = t(397);
                const o = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== u.indexOf(a)) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, o);
                    const i = (0, a.useContext)(r.Y),
                        s = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        E = i.small,
                        d = i.extraSmall,
                        _ = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        h = i.extraLargeHeight,
                        C = i.largeHeight,
                        B = i.mediumHeight,
                        g = i.smallHeight,
                        b = i.extraSmallHeight,
                        p = { extraLarge: h, large: C, medium: B, small: g, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, n.H)(u, t, p);
                        if (t.largeWidth && m) return (0, n.H)(u, t, p);
                        if (t.mediumWidth && A) return (0, n.H)(u, t, p);
                        if (t.smallWidth && F) return (0, n.H)(u, t, p);
                        if (t.extraSmallWidth && D) return (0, n.H)(u, t, p);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                });
            },
            3034: (e, u, t) => {
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
            5579: (e, u, t) => {
                t.d(u, { YN: () => a.Y });
                (t(5191), t(68));
                var a = t(397);
            },
            1958: (e, u, t) => {
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            9478: (e, u, t) => {
                t.d(u, { T: () => a });
                function a(e, u, t) {
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
            },
            3097: (e, u, t) => {
                t.d(u, { $u: () => E.$, ko: () => A });
                var a = t(9849),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(7947),
                    s = t(5713),
                    l = t(9536),
                    c = t(2858),
                    E = t(233),
                    d = t(9859);
                t(6114);
                const _ = c.Gh,
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
                            theme: u = _,
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
                            onComplete: b,
                            className: p,
                        }) => {
                            const v = (0, d.S)(F, e, D);
                            return o().createElement(
                                'div',
                                { className: n()(i.Z.base, p, i.Z[`base__${t}`]), style: (0, c.VQ)(u) },
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
                                    onComplete: b,
                                }),
                            );
                        },
                    );
            },
            5713: (e, u, t) => {
                t.d(u, { J: () => l });
                var a = t(9849),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(7947),
                    s = t(233);
                const l = ({ size: e = s.$.Default }) => {
                    const u = n()(i.Z.background, i.Z[`background__${e}`]);
                    return o().createElement('div', { className: u });
                };
            },
            8243: (e, u, t) => {
                t.d(u, { $: () => s });
                var a = t(9849),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(2234);
                const s = ({ size: e }) => {
                    const u = n()(i.Z.base, i.Z[`base__${e}`]);
                    return o().createElement('div', { className: u });
                };
            },
            9536: (e, u, t) => {
                t.d(u, { r: () => l });
                var a = t(7363),
                    n = t.n(a),
                    r = t(6145),
                    o = t(3107),
                    i = t(5586);
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
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
                        onEndAnimation: d,
                        onChangeAnimationState: _,
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
                            onEndAnimation: d,
                            onChangeAnimationState: _,
                        };
                        return E.withStack
                            ? n().createElement(i.F, A)
                            : n().createElement(r.H, s({ key: `${l}-${u}-${c}` }, A));
                    },
                );
            },
            2420: (e, u, t) => {
                t.d(u, { t: () => l });
                var a = t(9849),
                    n = t.n(a),
                    r = t(7363),
                    o = t.n(r),
                    i = t(8243),
                    s = t(7760);
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
            2170: (e, u, t) => {
                t.d(u, { O: () => m });
                var a = t(9849),
                    n = t.n(a),
                    r = t(1652),
                    o = t(7363),
                    i = t.n(o),
                    s = t(8243),
                    l = t(6114),
                    c = t(5232);
                const E = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    _ = (e) => ({ transitionDuration: `${e}ms` }),
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
                                b = B[1],
                                p = g === l.S.End,
                                v = g === l.S.Idle,
                                f = g === l.S.Grow,
                                w = g === l.S.Shrink,
                                x = (0, o.useCallback)(
                                    (e) => {
                                        (b(e), D && D(e));
                                    },
                                    [D],
                                ),
                                y = (0, o.useCallback)(
                                    (e, u) =>
                                        (0, r.F)(() => {
                                            x(e);
                                        }, u),
                                    [x],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? y(l.S.Grow, u)
                                        : f
                                          ? y(l.S.Shrink, e)
                                          : w
                                            ? y(l.S.End, e)
                                            : void (p && F && F());
                            }, [y, t, p, f, v, w, F, u, e]);
                            const S = (0, o.useMemo)(() => Object.assign({ width: '100%' }, _(e), E(C)), [C, e]),
                                P = (0, o.useMemo)(() => Object.assign({ width: '0%' }, _(e), E(C)), [C, e]),
                                L = (0, o.useMemo)(() => Object.assign({ width: '0%' }, d(C, a), _(e)), [a, C, e]),
                                k = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, d(C, a), _(e)),
                                    [a, C, A, e],
                                );
                            if (p) return null;
                            const T = n()(c.Z.base, h, C && 0 === A && c.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: v ? L : k, className: T },
                                i().createElement(
                                    'div',
                                    { style: w ? P : S, className: c.Z.glow },
                                    i().createElement(s.$, { size: m }),
                                ),
                            );
                        },
                    );
            },
            1530: (e, u, t) => {
                t.d(u, { x: () => l });
                var a = t(1652),
                    n = t(7363),
                    r = t.n(n),
                    o = t(8243),
                    i = t(6114),
                    s = t(9822);
                const l = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: c,
                        to: E,
                        onEndAnimation: d,
                        onChangeAnimationState: _,
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
                                    (D(e), _ && _(e));
                                },
                                [_],
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
                                        (d && d(), g(i.V.End));
                                    }, t);
                                }
                            }, [g, h, d, u, e]));
                        const b = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            p = (0, n.useMemo)(
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
                                      { style: B ? b : p, className: s.Z.delta },
                                      r().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            9143: (e, u, t) => {
                t.d(u, { F: () => s });
                var a = t(7363),
                    n = t.n(a),
                    r = t(2420),
                    o = t(2170),
                    i = t(6114);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: s,
                        disabled: l,
                        isComplete: c,
                        animationSettings: E,
                        onEndAnimation: d,
                        onChangeAnimationState: _,
                    }) => {
                        const m = e < t,
                            A = (0, a.useState)(!1),
                            F = A[0],
                            D = A[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    (e === i.S.Shrink && D(!0), _ && _(e));
                                },
                                [_],
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
                                    onEndAnimation: d,
                                    from: t,
                                    size: u,
                                    to: e,
                                    className: E.delta.className,
                                }),
                        );
                    },
                );
            },
            1586: (e, u, t) => {
                t.d(u, { D: () => i });
                var a = t(7363),
                    n = t.n(a),
                    r = t(2420),
                    o = t(1530);
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
                        onEndAnimation: d,
                    }) => {
                        const _ = (0, a.useMemo)(
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
                            n().createElement(r.t, { size: u, lineRef: i, disabled: s, isComplete: l, baseStyles: _ }),
                            t >= 0 &&
                                n().createElement(o.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: t,
                                    size: u,
                                    to: e,
                                    onChangeAnimationState: E,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6145: (e, u, t) => {
                t.d(u, { H: () => c });
                var a = t(7363),
                    n = t.n(a),
                    r = t(233),
                    o = t(9143),
                    i = t(1586);
                const s = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (0, a.memo)((e) => {
                    let u = e.onComplete,
                        t = e.onEndAnimation,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== u.indexOf(a)) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, s);
                    const E = (0, a.useState)(!1),
                        d = E[0],
                        _ = E[1],
                        m = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== d && _(e), e && u && u(), t && t());
                        }, [d, u, t, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(i.D, l({}, c, { onEndAnimation: m, isComplete: d }));
                        case r.r.Growing:
                            return n().createElement(o.F, l({}, c, { onEndAnimation: m, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6114: (e, u, t) => {
                t.d(u, { S: () => a, V: () => n });
                let a = (function (e) {
                        return ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e);
                    })({}),
                    n = (function (e) {
                        return ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e);
                    })({});
            },
            5586: (e, u, t) => {
                t.d(u, { F: () => s });
                var a = t(7363),
                    n = t.n(a),
                    r = t(6145);
                const o = ['onEndAnimation'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== u.indexOf(a)) continue;
                                    t[a] = e[a];
                                }
                            return t;
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
            3107: (e, u, t) => {
                t.d(u, { M: () => o });
                var a = t(7363),
                    n = t.n(a),
                    r = t(2420);
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
            2858: (e, u, t) => {
                t.d(u, { Gh: () => n, VQ: () => a });
                const a = (e) => {
                        var u, t, a, n, r, o, i, s, l, c, E, d, _, m, A, F, D, h, C, B;
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
                                null != (E = null == (d = e.glowSettings) ? void 0 : d.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (_ = null == (m = e.glowSettings) ? void 0 : m.height) ? _ : '100rem',
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
                    },
                    r = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_bg_base',
                        bg: { height: '22rem', heightSmall: '4rem' },
                        glowSettings: {
                            width: '34rem',
                            height: '54rem',
                            mixBlendMode: 'normal',
                            smallWidth: '34rem',
                            smallHeight: '36rem',
                        },
                        line: {
                            bgColorBase: 'rgba(191, 232, 255, 0.6)',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'rgba(191, 232, 255, 0.6)',
                            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.16)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.24))',
                        },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            bgImageDisabled:
                                'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            size: '4rem 22rem',
                            borderSize: '0',
                            gradient: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            gradientFinished: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            mixBlendMode: 'normal',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow_small',
                        delta: {
                            color: '#fff',
                            shadow: ' 0 0 4px 1px rgba(120, 180, 255, 0.4), 0 0 9px 1px rgba(100, 160, 255, 0.4), 0 0 12px 2px rgba(80, 140, 255, 0.4), 0 0 12px 4px rgba(60, 120, 255, 0.4)',
                        },
                    };
                Object.assign({}, r, {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                    line: Object.assign({}, r.line, {
                        bgColorBase: '#83C6A5',
                        bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                    }),
                    pattern: Object.assign({}, r.pattern, {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                    }),
                });
            },
            233: (e, u, t) => {
                t.d(u, { $: () => a, r: () => n });
                let a = (function (e) {
                        return ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e);
                    })({}),
                    n = (function (e) {
                        return ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e);
                    })({});
            },
            9859: (e, u, t) => {
                t.d(u, { S: () => o });
                var a = t(8463),
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
            2486: (e, u, t) => {
                t.d(u, { E4: () => a, h2: () => n });
                let a = (function (e) {
                        return (
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
                            (e.Attachment = 'attachment'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'),
                            e
                        );
                    })({});
                a.Attachment;
            },
            4692: (e, u, t) => {
                (t(1602), t(7363));
                var a = t(2486);
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
            9279: (e, u, t) => {
                t.d(u, { A: () => E });
                var a = t(9849),
                    n = t.n(a),
                    r = t(7475),
                    o = t(7363),
                    i = t.n(o),
                    s = t(3242);
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
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                const E = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        a = e.goto,
                        E = e.classNames,
                        d = e.onMouseEnter,
                        _ = e.onMouseLeave,
                        m = e.onMouseDown,
                        A = e.onMouseUp,
                        F = e.side,
                        D = void 0 === F ? 'left' : F,
                        h = e.type,
                        C = void 0 === h ? 'back' : h,
                        B = e.soundHover,
                        g = void 0 === B ? 'highlight' : B,
                        b = e.soundClick,
                        p = void 0 === b ? 'play' : b,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== u.indexOf(a)) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, l);
                    const f = (0, o.useCallback)(
                            (e) => {
                                (null == d || d(e), r.O.sound.play.sound(g));
                            },
                            [d, g],
                        ),
                        w = (0, o.useCallback)(
                            (e) => {
                                null == _ || _(e);
                            },
                            [_],
                        ),
                        x = (0, o.useCallback)(
                            (e) => {
                                (null == m || m(e), r.O.sound.play.sound(p));
                            },
                            [m, p],
                        ),
                        y = (0, o.useCallback)(
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
                                onMouseEnter: f,
                                onMouseLeave: w,
                                onMouseDown: x,
                                onMouseUp: y,
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
            6485: (e, u, t) => {
                t.d(u, { i: () => l });
                var a = t(2278),
                    n = t(7363),
                    r = t.n(n);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            d = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (-1 !== u.indexOf(a)) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, o);
                        const m = (0, n.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, d]);
                        return r().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                _,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2278: (e, u, t) => {
                t.d(u, { u: () => l });
                var a = t(3485),
                    n = t(828),
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
                            d = e.onClick,
                            _ = e.ignoreShowDelay,
                            m = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            h = void 0 === D ? 0 : D,
                            C = e.isEnabled,
                            B = void 0 === C || C,
                            g = e.targetId,
                            b = void 0 === g ? 0 : g,
                            p = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (-1 !== u.indexOf(a)) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, o);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, r.useMemo)(() => b || (0, a.F)().resId, [b]),
                            y = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, h, { isMouseEvent: !0, on: !0, arguments: i(n) }, x),
                                    p && p(),
                                    (w.current.isVisible = !0));
                            }, [t, h, n, x, p]),
                            S = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, h, { on: !1 }, x),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, h, x, v]),
                            P = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === B && S();
                            }, [B, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
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
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(y, m ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (S(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && S(), null == d || d(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && S(), null == E || E(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var L;
                    };
            },
            8463: (e, u, t) => {
                t.d(u, { u: () => a });
                const a = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            8978: (e, u, t) => {
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
            1652: (e, u, t) => {
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
            9352: (e, u, t) => {
                t.d(u, { U: () => i });
                var a = t(7475);
                function n(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return r(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? r(e, u)
                                          : void 0
                                );
                            }
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
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
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
                            for (var e, t = n(i.keys()); !(e = t()).done;) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            5090: (e, u, t) => {
                t.d(u, { q3: () => s });
                var a = t(9723),
                    n = t(3305),
                    r = t(7363),
                    o = t.n(r),
                    i = t(9352);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: E }) {
                            const d = (0, r.useRef)([]),
                                _ = (t, r, o) => {
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
                                        _ = (e) => d.current.push(e),
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
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: _ };
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
                                h = (0, r.useState)(() => _(s, l, E)),
                                C = h[0],
                                B = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? B(_(F, l, E)) : (m.current = !0);
                                }, [E, F, l]),
                                (0, r.useEffect)(() => {
                                    D(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (C.externalModel.dispose(), d.current.forEach((e) => e()));
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
            873: (e, u, t) => {
                (t(6758), t(828));
                var a = t(6609);
                (Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime);
            },
            5034: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        mouse: () => E,
                        off: () => l,
                        on: () => s,
                        onMinimize: () => i,
                        onResize: () => r,
                        onScaleUpdated: () => o,
                    }));
                var a = t(8277),
                    n = t(1708);
                const r = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    i = (0, a.E)('clientMinimized'),
                    s = (e, u) => engine.on(e, u),
                    l = (e, u) => engine.off(e, u),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const E = (function () {
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
                                        o = c[u]((e) => t([e, 'outside']));
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
            3157: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = t(5034),
                    n = t(9703);
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
            1708: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            9703: (e, u, t) => {
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
            8277: (e, u, t) => {
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
            7475: (e, u, t) => {
                t.d(u, { O: () => o });
                var a = t(3157),
                    n = t(8133),
                    r = t(3925);
                const o = { view: t(7553), client: a, sound: r.ZP, intl: n.N };
            },
            8133: (e, u, t) => {
                t.d(u, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, u, t) => {
                t.d(u, { ZP: () => i, hY: () => o });
                var a = t(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    o = Object.assign({}, r, { sound: a.playSound }),
                    i = { play: o, setRTPC: a.setRTPC };
            },
            5544: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            3163: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, u, t) => {
                t.d(u, { U: () => n });
                var a = t(8277);
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
            7553: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => y,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => T,
                        events: () => o.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => x,
                        getScale: () => h,
                        getSize: () => m,
                        getViewGlobalPosition: () => F,
                        initExternalPaddings: () => M,
                        isEventHandled: () => v,
                        isFocused: () => b,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => k,
                    }));
                var a = t(1308),
                    n = t(5544),
                    r = t(3163),
                    o = t(7576),
                    i = t(2319);
                const s = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function E(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const x = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = a.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    L = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function M(e) {
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
            2319: (e, u, t) => {
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
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (-1 !== u.indexOf(a)) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
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
            9723: (e, u, t) => {
                t.d(u, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            3485: (e, u, t) => {
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
            9659: (e, u, t) => {
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
            8925: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => o });
                var a = t(7363),
                    n = t(5579),
                    r = t(1958);
                let o = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    i = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    s = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
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
            4020: (e, u, t) => {
                t.d(u, { n: () => a });
                let a = (function (e) {
                    return (
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
                        e
                    );
                })({});
            },
            8739: (e, u, t) => {
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { G: () => s, UI: () => o, hX: () => l, sE: () => c, u4: () => d, v_: () => E, yW: () => i });
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
                function d(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, n(e, t), t, e);
                    }
                    return a;
                }
            },
            4170: (e, u, t) => {
                t.d(u, { t: () => a });
                let a = (function (e) {
                    return (
                        (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'),
                        e
                    );
                })({});
            },
            1308: (e, u, t) => {
                t.d(u, { HG: () => i, cg: () => r });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t];) ((u += a[t]), (e -= n[t]));
                    return u;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (o ? `${e}` : r(e));
            },
            4029: (e, u, t) => {
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
            6758: (e, u, t) => {
                t.d(u, { BN: () => o, Uw: () => A, WU: () => r, e: () => i, v2: () => n });
                var a = t(8354);
                let n = (function (e) {
                    return ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e);
                })({});
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
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
                    d = (() => {
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
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (_.includes(t)) return d(e);
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
            8973: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(7475);
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
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8973),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(828);
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
            828: (e, u, t) => {
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
                var r = t(8973);
                var o = t(6609);
                let i = (function (e) {
                    return (
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'),
                        e
                    );
                })({});
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(4020),
                    _ = t(7475);
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
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
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
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (-1 !== u.indexOf(a)) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
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
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var g = t(5533);
                const b = n.instance,
                    p = {
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
                            const o = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
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
                        ClickOutsideManager: b,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = p;
            },
            6609: (e, u, t) => {
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
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
            8218: (e, u, t) => {
                var a = t(7363),
                    n = t.n(a),
                    r = t(768),
                    o = t(5090),
                    i = t(9723),
                    s = t(8739),
                    l = t(5369);
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
                                d = (0, l.Om)(() => s.hX(t.chapters.get(), (e) => !e.isExtra), { equals: i.jv }),
                                _ = (0, l.Om)(() => s.hX(d(), (e) => e.chapterState === r.l.Completed).length, {
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
                                    regularChapters: d,
                                    extraChapters: m,
                                    regularChaptersCompleteCount: _,
                                    chaptersLineInfo: () =>
                                        s.u4(
                                            d(),
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
                var d = t(9279),
                    _ = t(8978),
                    m = t(4020),
                    A = t(2041),
                    F = t(9994),
                    D = t(8862);
                const h = 'App_base_b06dc',
                    C = 'App_additionalBackground_b721c',
                    B = 'App_infoButtons_c3097',
                    g = 'App_header_d1475';
                var b = t(9849),
                    p = t.n(b),
                    v = t(8925),
                    f = t(5603),
                    w = t(7436),
                    x = t(6485),
                    y = t(9659),
                    S = t(4029),
                    P = t(1705),
                    L = t(1623),
                    k = t(5278),
                    T = t(4490),
                    M = t(3927);
                const I = 'Shield_base_ae9ae',
                    N = 'Shield_flag_e5ec5',
                    O = 'Shield_flag__isChapterChosen_c8b0f',
                    $ = 'Shield_flag__medium_de411',
                    z = 'Shield_emblem_c90b7',
                    H = 'Shield_chapterLogoIcon_e4a36',
                    W = (0, A.Pi)(({ size: e, chapterID: u = 0 }) => {
                        const t = E().model,
                            a = t.root.get().seasonNum,
                            o = t.computes.getChapterById(u);
                        if (!o) return null;
                        const i = o.isBought,
                            s = o.isExtra,
                            l = o.chapterState,
                            c = t.computes.getProgressionInfoByChapterId(u),
                            d = c.currentLevel,
                            _ = c.levelProgression,
                            m = { level: d, to: _, from: _ },
                            A = l === r.l.Completed ? T.Bq.Completed : i ? T.Bq.Bought : T.Bq.Free,
                            F = l === r.l.Active,
                            D = (0, k.UP)(m) || l !== r.l.NotStarted,
                            h = D && A !== T.Bq.Completed;
                        return n().createElement(
                            'div',
                            { className: I },
                            n().createElement('div', {
                                className: p()(N, e === T.$u.Medium && $, h && O),
                                style: (0, P.fW)(u, e),
                            }),
                            n().createElement(
                                'div',
                                { className: z },
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
                                h && n().createElement('div', { className: H, style: (0, P.cs)(u, i, e) }),
                            ),
                        );
                    }),
                    G = {
                        base: 'Chapter_base_b358b',
                        base__qHDSize: 'Chapter_base__qHDSize_bb6a7',
                        bg: 'Chapter_bg_ddaa3',
                        base__paused: 'Chapter_base__paused_d7bba',
                        base__notStarted: 'Chapter_base__notStarted_ac9a4',
                        base__completed: 'Chapter_base__completed_d3947',
                        bgHover: 'Chapter_bgHover_e90e3',
                        border: 'Chapter_border_dde17',
                        frame: 'Chapter_frame_ee243',
                        content: 'Chapter_content_adf51',
                        vehicleImg: 'Chapter_vehicleImg_e52e6',
                        shieldWrapper: 'Chapter_shieldWrapper_cb058',
                        shield: 'Chapter_shield_ef159',
                        shieldShine: 'Chapter_shieldShine_d13e4',
                        rotate: 'Chapter_rotate_c2563',
                        completedIcon: 'Chapter_completedIcon_a9a6e',
                        title: 'Chapter_title_eb8fe',
                        content__extraChapterContent: 'Chapter_content__extraChapterContent_ceaac',
                        base__active: 'Chapter_base__active_aedef',
                        vehicleStyle: 'Chapter_vehicleStyle_e804b',
                        preview: 'Chapter_preview_ac04f',
                        previewWrapper: 'Chapter_previewWrapper_a907e',
                        styleTitle: 'Chapter_styleTitle_ddc40',
                        vehicleTitle: 'Chapter_vehicleTitle_d4cba',
                        crewTitle: 'Chapter_crewTitle_a3ccc',
                        crewSubtitle: 'Chapter_crewSubtitle_c8510',
                        vehicleInHangar: 'Chapter_vehicleInHangar_ffa30',
                        extraLevel: 'Chapter_extraLevel_c209f',
                        extraName: 'Chapter_extraName_db0c8',
                        level: 'Chapter_level_a9c70',
                        name: 'Chapter_name_b1882',
                        fadeOut: 'Chapter_fadeOut_bea74',
                        fadeIn: 'Chapter_fadeIn_d2fe6',
                        fadeInWithScale: 'Chapter_fadeInWithScale_c05ca',
                        slideUp: 'Chapter_slideUp_fc3c8',
                        scale: 'Chapter_scale_bce33',
                    };
                var j = t(2317);
                function U() {
                    return (
                        (U = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        U.apply(null, arguments)
                    );
                }
                const V = R.strings.battle_pass,
                    q = (0, A.Pi)(({ chapterID: e }) => {
                        const u = E(),
                            t = u.model,
                            o = u.controls,
                            i = t.computes.getChapterById(e);
                        if (!i) return null;
                        const l = (0, D.tv)(),
                            c = i.chapterState,
                            d = i.styleName,
                            _ = i.isVehicleInHangar,
                            m = i.vehicleInfo,
                            A = i.finalRewardType,
                            F = i.tankmanNames,
                            h = i.isExtra,
                            C = (0, v.GS)(),
                            B = C.mediaSize,
                            g = C.remScreenWidth,
                            b = C.remScreenHeight,
                            M = (0, a.useCallback)(
                                (u) => {
                                    (o.openPreview(e), u.stopPropagation());
                                },
                                [e, o],
                            ),
                            I = (0, y.z)(() => {
                                (0, S.G)(k.r_.BP_HIGHLIGHT);
                            }),
                            N = B <= v.cJ.Medium ? T.$u.Small : T.$u.Medium,
                            O = g >= 2560 && b >= 1440,
                            R = c === r.l.Completed,
                            $ = c === r.l.Active,
                            z = V.chapter.fullNameUppercased.$num(e);
                        return n().createElement(
                            'div',
                            {
                                className: p()(G.base, G[`base__${c}`], O && G.base__qHDSize),
                                onMouseEnter: I,
                                onClick: () => {
                                    (S.$.playClick(), l.push(j._.battlePass.progression, { chapterID: e }));
                                },
                                style: { width: viewEnv.remToPx(De[B]) },
                            },
                            n().createElement(
                                'div',
                                { className: G.bg, style: (0, P.TZ)(e) },
                                n().createElement('div', { className: G.vehicleImg, style: (0, P.OH)(e) }),
                                n().createElement('div', { className: G.bgHover }),
                                $ && n().createElement('div', { className: G.frame }),
                            ),
                            n().createElement(
                                'div',
                                { className: p()(G.content, h && G.content__extraChapterContent) },
                                n().createElement(
                                    'div',
                                    { className: G.shieldWrapper },
                                    $ && n().createElement('div', { className: G.shieldShine }),
                                    n().createElement(
                                        'div',
                                        { className: G.shield },
                                        n().createElement(W, { size: N, chapterID: e }),
                                    ),
                                ),
                                R && n().createElement('div', { className: G.completedIcon }),
                                n().createElement('div', { className: G.title }, z),
                                n().createElement(
                                    'div',
                                    { className: G.vehicleStyle },
                                    A !== r.E.Tankman &&
                                        n().createElement(
                                            'div',
                                            { className: G.preview },
                                            n().createElement(
                                                'div',
                                                { className: G.previewWrapper },
                                                n().createElement(w.h, {
                                                    type: 'preview',
                                                    onClick: M,
                                                    size: B < v.cJ.Medium ? 'small' : 'normal',
                                                }),
                                            ),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: G.styleTitle },
                                        ((e, u) => {
                                            switch (e) {
                                                case r.E.Style:
                                                    return n().createElement(f.z, {
                                                        text: V.chapterChoice.stylePreview.name(),
                                                        binding: { styleName: u },
                                                    });
                                                case r.E.Tankman:
                                                    return n().createElement(
                                                        'div',
                                                        { className: G.crewTitle },
                                                        n().createElement(f.z, {
                                                            text: V.chapterChoice.crewMember.reward(),
                                                        }),
                                                    );
                                                case r.E.Vehicle:
                                                    return n().createElement(f.z, {
                                                        text: V.chapterChoice.premiumVehicle.reward(),
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(A, d),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: G.vehicleTitle },
                                        ((e, u, t, a) => {
                                            const o = a
                                                ? { level: G.extraLevel, name: G.extraName }
                                                : { level: G.level, name: G.name };
                                            switch (e) {
                                                case r.E.Style:
                                                    return n().createElement(f.z, {
                                                        text: V.chapterChoice.stylePreview.forLabel(),
                                                        binding: {
                                                            vehicleName: n().createElement(
                                                                L.U4,
                                                                U({}, t, { classNames: o }),
                                                            ),
                                                        },
                                                    });
                                                case r.E.Tankman:
                                                    return n().createElement(f.z, {
                                                        classMix: G.crewSubtitle,
                                                        text: s.v_(u, V.common.comma()),
                                                    });
                                                case r.E.Vehicle:
                                                    return n().createElement(f.z, {
                                                        text: V.chapterChoice.stylePreview.extraLabel(),
                                                        binding: {
                                                            vehicleName: n().createElement(
                                                                L.U4,
                                                                U({}, t, { classNames: o }),
                                                            ),
                                                        },
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(A, F, m, h),
                                        A === r.E.Style &&
                                            _ &&
                                            n().createElement(
                                                x.i,
                                                { body: V.chapterChoice.vehicleInHangar.tooltip.text() },
                                                n().createElement('div', { className: G.vehicleInHangar }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Z = {
                        base: 'ChapterPostProgressionLine_base_d25a1',
                        circleShine: 'ChapterPostProgressionLine_circleShine_e8015',
                        base__hovered: 'ChapterPostProgressionLine_base__hovered_d0c77',
                        chapterLine: 'ChapterPostProgressionLine_chapterLine_a8450',
                        circle: 'ChapterPostProgressionLine_circle_d65e9',
                        circle__completed: 'ChapterPostProgressionLine_circle__completed_c5a4e',
                        verticalChapterLine: 'ChapterPostProgressionLine_verticalChapterLine_c1e5f',
                        verticalChapterLine__completed:
                            'ChapterPostProgressionLine_verticalChapterLine__completed_a3cb2',
                    },
                    K = ({ chapterState: e, isButtonHovered: u }) => {
                        const t = (0, v.GS)().mediaSize,
                            a = viewEnv.remToPx(t <= v.cJ.Small ? 47 : 57),
                            o = e === r.l.Completed ? a + 1 : a,
                            i = viewEnv.remToPx(4);
                        return n().createElement(
                            'div',
                            { className: p()(Z.base, u && Z.base__hovered) },
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
                                    strokeWidth: viewEnv.remToPx(1),
                                    className: p()(Z.circle, Z[`circle__${e}`]),
                                }),
                                n().createElement('line', {
                                    x1: i,
                                    x2: i,
                                    y1: viewEnv.remToPx(7),
                                    y2: o,
                                    strokeWidth: viewEnv.remToPx(e === r.l.Completed ? 2 : 1),
                                    className: p()(Z.verticalChapterLine, Z[`verticalChapterLine__${e}`]),
                                }),
                            ),
                        );
                    };
                var X = t(3925);
                const Y = {
                        base: 'SVGHorizontalLine_base_fbbc0',
                        horizontalChapterLine: 'SVGHorizontalLine_horizontalChapterLine_bd6ca',
                        base__active: 'SVGHorizontalLine_base__active_f2d22',
                        horizontalChapterLine__completed: 'SVGHorizontalLine_horizontalChapterLine__completed_d290b',
                    },
                    J = (0, A.Pi)(({ activateLine: e }) => {
                        const u = E().model.computes.chaptersLineInfo(),
                            t = (0, v.GS)().mediaSize;
                        return n().createElement(
                            'div',
                            { className: p()(Y.base, e && Y.base__active) },
                            n().createElement(
                                'svg',
                                { width: '100%', height: '100%', viewBox: '0 0 100% 100%' },
                                s.UI(u, ({ chapterID: e, chapterState: u }, a) =>
                                    n().createElement('line', {
                                        x1: ee(t) * a + ue,
                                        x2: ee(t) * (a + 1) + ue,
                                        y1: '0',
                                        y2: '0',
                                        strokeWidth: viewEnv.remToPx(u === r.l.Completed ? 4 : 2),
                                        key: `${e}_${a}`,
                                        className: p()(Y.horizontalChapterLine, Y[`horizontalChapterLine__${u}`]),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Q = {
                        base: 'PostProgressionEntryPoint_base_e88f2',
                        buttonBlock: 'PostProgressionEntryPoint_buttonBlock_f50eb',
                        button: 'PostProgressionEntryPoint_button_db54f',
                        buttonText: 'PostProgressionEntryPoint_buttonText_a0226',
                        lockBlock: 'PostProgressionEntryPoint_lockBlock_c9b26',
                        lock: 'PostProgressionEntryPoint_lock_e36c2',
                        lockShine: 'PostProgressionEntryPoint_lockShine_ce692',
                        postProgressionText: 'PostProgressionEntryPoint_postProgressionText_ac1d7',
                        base__hovered: 'PostProgressionEntryPoint_base__hovered_d9a12',
                        completedChaptersCount: 'PostProgressionEntryPoint_completedChaptersCount_b352d',
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
                                className: p()(Q.base, u && Q.base__hovered),
                                style: { width: (ee(r) + ue) * (o.length - 1) },
                            },
                            n().createElement(J, { activateLine: u }),
                            n().createElement(
                                'div',
                                { className: Q.buttonBlock },
                                n().createElement(
                                    'div',
                                    {
                                        className: Q.button,
                                        onMouseEnter: () => {
                                            (e(!0), X.hY.sound('highlight'));
                                        },
                                        onMouseLeave: () => {
                                            e(!1);
                                        },
                                        onClick: () => {
                                            (a.push(j._.battlePass.postProgression), X.hY.sound('play'));
                                        },
                                    },
                                    n().createElement('div', { className: Q.buttonText }, te.button.text()),
                                    !s &&
                                        n().createElement(
                                            'div',
                                            { className: Q.lockBlock },
                                            n().createElement('div', { className: Q.lock }),
                                            n().createElement('div', { className: Q.lockShine }),
                                        ),
                                ),
                                i !== o.length &&
                                    n().createElement(
                                        'div',
                                        { className: Q.postProgressionText },
                                        n().createElement(f.z, {
                                            classMix: Q.text,
                                            text: te.text(),
                                            binding: {
                                                completedChaptersCount: n().createElement(
                                                    'span',
                                                    { className: Q.completedChaptersCount },
                                                    i,
                                                ),
                                                chaptersCount: o.length,
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    ne = 'Separator_base_f234e',
                    re = 'Separator_base__qHDSize_fc96c',
                    oe = 'Separator_line_d573c',
                    ie = 'Separator_line__top_d50f1',
                    se = 'Separator_line__bottom_c26a5',
                    le = 'Separator_plus_de7af',
                    ce = () => {
                        const e = (0, v.GS)(),
                            u = e.remScreenWidth,
                            t = e.remScreenHeight,
                            a = u >= 2560 && t >= 1440;
                        return n().createElement(
                            'div',
                            { className: p()(ne, a && re) },
                            n().createElement('div', { className: p()(oe, ie) }),
                            n().createElement('div', { className: le }),
                            n().createElement('div', { className: p()(oe, se) }),
                        );
                    },
                    Ee = 'Chapters_base_b3f7f',
                    de = 'Chapters_base__normal_c7055',
                    _e = 'Chapters_base__extend_b7d8d',
                    me = 'Chapters_regular_dde08',
                    Ae = 'Chapters_regularChapters_d8831',
                    Fe = 'Chapters_chapterWrapper_b2435',
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
                            { className: p()(Ee, u ? _e : de) },
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
                                            n().createElement(q, { chapterID: e }),
                                            n().createElement(K, { chapterState: u, isButtonHovered: i }),
                                        ),
                                    ),
                                ),
                                n().createElement(ae, { isButtonHovered: i, setIsButtonHovered: l }),
                            ),
                            u && n().createElement(ce, null),
                            s.UI(r, ({ chapterID: e }, u) =>
                                n().createElement(n().Fragment, { key: u }, n().createElement(q, { chapterID: e })),
                            ),
                        );
                    }),
                    Ce = 'Header_base_aca6d',
                    Be = 'Header_title_bb612',
                    ge = 'Header_base__qHDSize_a45c5',
                    be = 'Header_description_bb43d',
                    pe = 'Header_freePoints_a3e6e',
                    ve = 'Header_freePointsInfo_cd5c9',
                    fe = 'Header_freePointsCount_c3f13',
                    we = 'Header_freePointsIcon_fe70c',
                    xe = R.strings.battle_pass.chapterChoice.freePoints,
                    ye = (0, A.Pi)(({ title: e }) => {
                        const u = E().model,
                            t = u.root.get().freePoints,
                            a = !u.computes.isCompleted() && t > 0,
                            r = (0, v.GS)(),
                            o = r.remScreenWidth,
                            i = r.remScreenHeight,
                            s = o >= 2560 && i >= 1440;
                        return n().createElement(
                            'div',
                            { className: p()(Ce, s && ge) },
                            n().createElement('div', { className: Be }, e),
                            n().createElement(
                                'div',
                                { className: be },
                                a &&
                                    n().createElement(
                                        'div',
                                        { className: pe },
                                        xe.description(),
                                        n().createElement(
                                            x.i,
                                            { header: xe.tooltip.title(), body: xe.tooltip.description() },
                                            n().createElement(
                                                'div',
                                                { className: ve },
                                                n().createElement('span', { className: fe }, t),
                                                n().createElement('span', { className: we }),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Se = R.strings.battle_pass;
                (0, A.Pi)(() => {
                    const e = E(),
                        u = e.model,
                        t = e.controls,
                        r = (0, D.tv)(),
                        o = t.openAbout,
                        i = t.openPointsInfo,
                        s = t.onViewLoaded,
                        l = u.computes.hasExtra(),
                        c = u.computes.hasActive(),
                        A = u.computes.isCompleted(),
                        b = (0, a.useState)(!1),
                        p = b[0],
                        v = b[1];
                    return (
                        F.N.useHandleKeydown(m.n.ESCAPE, () => {
                            r.goBack();
                        }),
                        (0, a.useEffect)(
                            () =>
                                (0, _.v)(() => {
                                    p || (s(), v(!0));
                                }),
                            [p, s],
                        ),
                        n().createElement(
                            'div',
                            { className: h },
                            l && n().createElement('div', { className: C }),
                            n().createElement(
                                'div',
                                { className: B },
                                n().createElement(d.A, { caption: Se.intro.aboutButton(), type: 'info', onClick: o }),
                                n().createElement(d.A, {
                                    caption: Se.howToEarnPoints.title(),
                                    type: 'info',
                                    onClick: i,
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: g },
                                n().createElement(ye, {
                                    title: c || A ? Se.chapterChoice.activeTitle() : Se.chapterChoice.title(),
                                }),
                            ),
                            n().createElement(he, null),
                        )
                    );
                });
            },
            2317: (e, u, t) => {
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
            1705: (e, u, t) => {
                t.d(u, { OH: () => l, TZ: () => s, cs: () => o, fW: () => i, wD: () => r });
                var a = t(4490);
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
            3245: (e, u, t) => {
                let a = (function (e) {
                    return ((e.style = 'style'), (e.tankman = 'tankman'), e);
                })({});
                (a.style, a.tankman);
            },
            5278: (e, u, t) => {
                t.d(u, { UP: () => n, r_: () => a });
                (t(2486), t(4692), t(768), t(873), t(6758), t(4490), t(3245));
                const a = { BP_HIGHLIGHT: 'bp_highlight' },
                    n = (e) => void 0 !== e.from && (e.level > 1 || e.from > 0);
            },
            3927: (e, u, t) => {
                t.d(u, { G4: () => f });
                var a = t(9849),
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
                let s = (function (e) {
                    return ((e.Season = 'season'), (e.Chapter = 'chapter'), e);
                })({});
                const l = {
                    base: 'Emblem_base_bef4a',
                    progress: 'Emblem_progress_a49d9',
                    progress__small: 'Emblem_progress__small_d568c',
                    progress__completed: 'Emblem_progress__completed_aa5dd',
                    hideProgress: 'Emblem_hideProgress_c1e41',
                    progress__hidden: 'Emblem_progress__hidden_dc384',
                    image: 'Emblem_image_f35a8',
                    image__clickable: 'Emblem_image__clickable_d35a4',
                    image__micro: 'Emblem_image__micro_f2aa0',
                    image__small: 'Emblem_image__small_b0595',
                    extra: 'Emblem_extra_bfa7b',
                    extra__micro: 'Emblem_extra__micro_cd7fb',
                    extra__small: 'Emblem_extra__small_ebf1e',
                    hideLevel: 'Emblem_hideLevel_bacb4',
                    showLevel: 'Emblem_showLevel_ae56a',
                    hideLevelSmall: 'Emblem_hideLevelSmall_c96f6',
                    showLevelSmall: 'Emblem_showLevelSmall_dbc03',
                    hideLevelMicro: 'Emblem_hideLevelMicro_a41c4',
                    showLevelMicro: 'Emblem_showLevelMicro_f303f',
                    showIcon: 'Emblem_showIcon_b0171',
                    showIconSmall: 'Emblem_showIconSmall_ee24d',
                    showIconMicro: 'Emblem_showIconMicro_e0234',
                };
                var c = t(1705);
                const E = {
                        base: 'Label_base_c8d2c',
                        textWithBlend: 'Label_textWithBlend_d0913',
                        textWithBlend__show: 'Label_textWithBlend__show_f15c0',
                        show: 'Label_show_f964a',
                        textWithBlend__new: 'Label_textWithBlend__new_bb7bf',
                        textWithBlend__hide: 'Label_textWithBlend__hide_fd92c',
                        hide: 'Label_hide_bd6bc',
                        textMask: 'Label_textMask_e3ad7',
                        textMask__gold: 'Label_textMask__gold_ed411',
                        textMask__goldContrast: 'Label_textMask__goldContrast_cd248',
                        textMask__animated: 'Label_textMask__animated_b168b',
                        maskAppearance: 'Label_maskAppearance_d0e65',
                        textMask__micro: 'Label_textMask__micro_e9ea0',
                        textMask__small: 'Label_textMask__small_f565f',
                        textMask__medium: 'Label_textMask__medium_c1c7d',
                        textMask__large: 'Label_textMask__large_c920a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_e7931',
                        text: 'Label_text_e24e5',
                        text__micro: 'Label_text__micro_f627f',
                        text__small: 'Label_text__small_cb939',
                        text__large: 'Label_text__large_d7fb9',
                        text__extraLarge: 'Label_text__extraLarge_ee710',
                        text__blended: 'Label_text__blended_ad25e',
                        text__filtered: 'Label_text__filtered_f7c04',
                        text__rewardScreen: 'Label_text__rewardScreen_d5f43',
                        textAppearance: 'Label_textAppearance_d298d',
                        text__show: 'Label_text__show_d2cbf',
                        text__hide: 'Label_text__hide_a1a1a',
                        text__hideWithDelay: 'Label_text__hideWithDelay_b22ea',
                        text__new: 'Label_text__new_bee7c',
                        hideLevel: 'Label_hideLevel_d2be9',
                        showLevel: 'Label_showLevel_bcc23',
                        hideLevelSmall: 'Label_hideLevelSmall_e5cec',
                        showLevelSmall: 'Label_showLevelSmall_a7e84',
                        hideLevelMicro: 'Label_hideLevelMicro_ce992',
                        showLevelMicro: 'Label_showLevelMicro_fe874',
                        showIcon: 'Label_showIcon_e22b9',
                        showIconSmall: 'Label_showIconSmall_ea275',
                        hideProgress: 'Label_hideProgress_da721',
                        showIconMicro: 'Label_showIconMicro_ad3ea',
                    },
                    d = ({
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
                            d = n()(
                                E.textWithBlend,
                                i && E.text__new,
                                s && E.text__hideWithDelay,
                                E[`textWithBlend__${r}`],
                            ),
                            _ = n()(E.text, E.text__blended, E[`text__${u}`], a && E.text__rewardScreen),
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
                                { className: d },
                                o().createElement('div', { className: _ }, e),
                                o().createElement('div', { className: m }),
                            ),
                        );
                    };
                var _ = t(4490);
                const m = {
                        label: 'EmblemLabels_label_a557e',
                        label__small: 'EmblemLabels_label__small_bda44',
                        label__micro: 'EmblemLabels_label__micro_e17f7',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_ba8bc',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_e8fd3',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_bca0b',
                        label__show: 'EmblemLabels_label__show_d2f81',
                        showLevel: 'EmblemLabels_showLevel_b4814',
                        label__showSmall: 'EmblemLabels_label__showSmall_f220b',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_cfcb6',
                        label__hide: 'EmblemLabels_label__hide_fabfb',
                        hideLevel: 'EmblemLabels_hideLevel_ef734',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_b5d84',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_f17bb',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_fc72a',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_f152c',
                        label__new: 'EmblemLabels_label__new_be3ab',
                        label__newSmall: 'EmblemLabels_label__newSmall_ede09',
                        label__disabled: 'EmblemLabels_label__disabled_ae6c2',
                        icon: 'EmblemLabels_icon_e96f7',
                        icon__small: 'EmblemLabels_icon__small_c59bb',
                        icon__micro: 'EmblemLabels_icon__micro_ee30d',
                        icon__animated: 'EmblemLabels_icon__animated_ad765',
                        showIcon: 'EmblemLabels_showIcon_fa87e',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_c983c',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_fdd88',
                        showIconSmall: 'EmblemLabels_showIconSmall_ad347',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_d92f5',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_fcd6f',
                        hideProgress: 'EmblemLabels_hideProgress_ddd93',
                        showIconMicro: 'EmblemLabels_showIconMicro_f0aa1',
                    },
                    A = (e, u) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case _.$u.Small:
                                    return 'l';
                                case _.$u.Micro:
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
                            isChapterSelection: b = !1,
                            isProgression: p = !1,
                        }) => {
                            let v = '',
                                f = '';
                            t === _.$u.Small
                                ? ((v = 'Small'), (f = '__small'))
                                : t === _.$u.Micro && ((v = 'Micro'), (f = '__micro'));
                            const w = a === _.Bq.SwitchedChapterRightNow,
                                x = a === _.Bq.CompletedRightNow,
                                y = ((e, u, t, a, n) => (e || n ? u || !t : u || !a))(b, B, g, D, p),
                                S = !p && !b;
                            return o().createElement(
                                o().Fragment,
                                null,
                                y
                                    ? o().createElement('div', {
                                          className: n()(m.icon, f && m[`icon${f}`], x && m[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = A(l, t);
                                                  if (S) {
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
                                                  m[`label${f}`],
                                                  w && m.label__new,
                                                  w && m[`label__new${v}`],
                                                  !x && B && m.label__disabled,
                                                  m[`label__${E}${v}`],
                                                  r && m[`label__hasProgress${v}`],
                                                  r && m[`label__hasProgress${v}${p ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(d, {
                                              level: u,
                                              size: t,
                                              isGold: l,
                                              isFirstLevel: w,
                                              curState: E,
                                              showProgressionCompleted: x,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                m.label,
                                                m[`label${f}`],
                                                w && m.label__new,
                                                w && m[`label__new${v}`],
                                                m[`label__${F}${v}`],
                                                r && m[`label__hasProgress${v}`],
                                            ),
                                        },
                                        o().createElement(d, {
                                            level: e,
                                            size: t,
                                            isGold: l,
                                            isFirstLevel: w,
                                            curState: F,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var D = t(3097);
                const h = {
                        base: 'EmblemProgressBar_base_fcc92',
                        base__small: 'EmblemProgressBar_base__small_b1974',
                        base__completed: 'EmblemProgressBar_base__completed_fabc2',
                        hideProgress: 'EmblemProgressBar_hideProgress_fc810',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_dc7cb',
                        base__hidden: 'EmblemProgressBar_base__hidden_e2b1c',
                        hideLevel: 'EmblemProgressBar_hideLevel_a112a',
                        showLevel: 'EmblemProgressBar_showLevel_dec07',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_a7539',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_f1abb',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_d4f2f',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_f1420',
                        showIcon: 'EmblemProgressBar_showIcon_de47c',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_a2a37',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_b4a55',
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
                        (B = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        B.apply(null, arguments)
                    );
                }
                let g = (function (e) {
                        return ((e.Closed = 'closed'), (e.Open = 'open'), e);
                    })({}),
                    b = (function (e) {
                        return ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'), e);
                    })({});
                const p = (e, u, t, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: s.Chapter, id: a },
                            o = e ? g.Open : g.Closed,
                            l = ((e, u) =>
                                e
                                    ? b.Gold
                                    : u === _.Bq.Completed || u === _.Bq.CompletedRightNow
                                      ? b.Completed
                                      : b.Initial)(u, t),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${i(r, { name: 'emblem', postfix: `${o}_${l}${c}` })})` };
                    },
                    v = (e, u) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: s.Season, id: e };
                        return { backgroundImage: `url(${i(t, { name: 'extra', postfix: u })})` };
                    },
                    f = (0, r.memo)((e) => {
                        const u = e.progression,
                            t = e.size,
                            a = e.battlePassState,
                            r = e.hasBattlePass,
                            i = e.isChapterChosen,
                            s = e.hasBeenActive,
                            c = void 0 !== s && s,
                            E = e.isChapterSelection,
                            d = void 0 !== E && E,
                            m = e.isOpen,
                            A = void 0 !== m && m,
                            D = e.isProgression,
                            h = void 0 !== D && D,
                            g = e.showProgressBar,
                            b = void 0 === g || g,
                            f = e.isExtra,
                            w = void 0 !== f && f,
                            x = e.chapterID,
                            y = e.seasonNum,
                            S = e.clickable,
                            P = void 0 === S || S,
                            L = ((e) => {
                                switch (e) {
                                    case _.$u.Small:
                                        return 'small';
                                    case _.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(t),
                            k = a === _.Bq.CompletedRightNow,
                            T = r || a === _.Bq.Bought,
                            M = (a === _.Bq.Completed || k) && T,
                            I = (a === _.Bq.Completed || k) && !T,
                            N = M || I,
                            O = void 0 !== u.from,
                            R = b && ((O && i) || c);
                        return o().createElement(
                            'div',
                            { className: l.base },
                            w &&
                                o().createElement('div', {
                                    className: n()(l.extra, L && l[`extra__${L}`]),
                                    style: v(y, L),
                                }),
                            o().createElement(
                                'div',
                                {
                                    className: n()(l.image, L && l[`image__${L}`], P && l.image__clickable),
                                    style: p(A, T, a, x, L),
                                },
                                a !== _.Bq.AwaitSeason &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            F,
                                            B(
                                                {
                                                    hasProgression: O,
                                                    isGolden: T,
                                                    isProgressionCompleted: N,
                                                    isChapterChosen: i,
                                                    hasBeenActive: c,
                                                    isChapterSelection: d,
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
            4490: (e, u, t) => {
                t.d(u, { $u: () => a, Bq: () => n });
                let a = (function (e) {
                        return ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'), e);
                    })({}),
                    n = (function (e) {
                        return (
                            (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'),
                            e
                        );
                    })({});
            },
            4053: (e, u, t) => {
                t.d(u, { t: () => r });
                var a = t(7363);
                const n = (0, a.createContext)(void 0);
                function r() {
                    const e = (0, a.useContext)(n);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            9994: (e, u, t) => {
                t.d(u, { N: () => a });
                var a = {};
                (t.r(a), t.d(a, { Provider: () => A, useApi: () => _, useHandleKeydown: () => m }));
                var n = t(7475),
                    r = t(9659),
                    o = t(7363),
                    i = t.n(o),
                    s = t(4020);
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
                var c = t(9723);
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
                    d = (0, o.createContext)(void 0);
                function _() {
                    const e = (0, o.useContext)(d);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function m(e, u, t) {
                    const a = (0, r.z)((e) => {
                            n.O.view.isEventHandled() || (u(e), n.O.view.setEventHandled(), t && e.stopPropagation());
                        }),
                        i = _(),
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
                    return i().createElement(d.Provider, { value: t }, e.children);
                };
            },
            8862: (e, u, t) => {
                t.d(u, { tv: () => a.t });
                var a = t(4053),
                    n = t(7363);
                (0, n.createContext)(void 0);
            },
            1623: (e, u, t) => {
                t.d(u, { U4: () => m });
                var a = t(9849),
                    n = t.n(a),
                    r = t(5208),
                    o = t(1308),
                    i = t(6758),
                    s = t(7363),
                    l = t.n(s),
                    c = t(9932),
                    E = t(2204);
                let d = (function (e) {
                        return ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'), e);
                    })({}),
                    _ = (function (e) {
                        return (
                            (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'),
                            e
                        );
                    })({});
                const m = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: a,
                    vehicleLvl: s,
                    tags: m = '',
                    size: A = d.extraSmall,
                    type: F = _.colored,
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
            9932: (e, u, t) => {
                t.d(u, { f: () => a });
                const a = (e, u) => e.split(',').includes(u);
            },
            768: (e, u, t) => {
                t.d(u, { E: () => n, l: () => a });
                let a = (function (e) {
                        return (
                            (e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
                            (e.Vehicle = 'vehicle'),
                            (e.VehicleStyle = 'vehicleStyle'),
                            (e.Style = 'style'),
                            (e.Tankman = 'tankman'),
                            (e.PostProgression = 'postProgression'),
                            e
                        );
                    })({});
            },
            5208: (e, u, t) => {
                t.d(u, { f3: () => a });
                const a = 'premiumIGR';
            },
            4880: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_f27a4' };
            },
            7947: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_c37bf',
                    base__small: 'ProgressBar_base__small_af6d6',
                    background: 'ProgressBar_background_a4e18',
                    background__small: 'ProgressBar_background__small_e2b95',
                    lineWrapper: 'ProgressBar_lineWrapper_e670c',
                };
            },
            2234: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_d7125', base__small: 'ProgressBarBlink_base__small_b92f8' };
            },
            7760: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressLineImpose_base_a3558',
                    base__disabled: 'ProgressLineImpose_base__disabled_a9e8e',
                    base__finished: 'ProgressLineImpose_base__finished_f889e',
                    base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_c0ff9',
                    pattern: 'ProgressLineImpose_pattern_a4023',
                    base__small: 'ProgressLineImpose_base__small_da260',
                    gradient: 'ProgressLineImpose_gradient_f73c0',
                    glow: 'ProgressLineImpose_glow_f237a',
                    glow__left: 'ProgressLineImpose_glow__left_b7ffa',
                };
            },
            5232: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_f4d46',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b1398',
                    glow: 'ProgressBarDeltaGrow_glow_c912d',
                };
            },
            9822: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_cfcd3', delta: 'ProgressBarDeltaSimple_delta_dc2b6' };
            },
            3242: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'TextButton_base_a231c',
                    base__right: 'TextButton_base__right_bfac3',
                    icon: 'TextButton_icon_cdfc0',
                    icon__back: 'TextButton_icon__back_fc1bb',
                    icon__forward: 'TextButton_icon__forward_efa2d',
                    icon__close: 'TextButton_icon__close_e2f0f',
                    icon__info: 'TextButton_icon__info_e32c0',
                    glow: 'TextButton_glow_d6e04',
                    caption: 'TextButton_caption_f4e8d',
                    caption__back: 'TextButton_caption__back_d358d',
                    caption__forward: 'TextButton_caption__forward_ff93d',
                    caption__close: 'TextButton_caption__close_fc554',
                    caption__info: 'TextButton_caption__info_c263a',
                    goto: 'TextButton_goto_d3960',
                    base__left: 'TextButton_base__left_ec79d',
                    shine: 'TextButton_shine_f8873',
                };
            },
            2204: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
                    base: 'TankName_base_e9676',
                    base__sizeMedium: 'TankName_base__sizeMedium_be079',
                    base__sizBig: 'TankName_base__sizBig_b71dc',
                    base__typeWhite: 'TankName_base__typeWhite_af1ba',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_c7979',
                    base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_eb635',
                    base__typeColored: 'TankName_base__typeColored_efc8d',
                    level: 'TankName_level_fb3d0',
                    type: 'TankName_type_f3426',
                    type__extraSmall: 'TankName_type__extraSmall_a1019',
                    type__medium: 'TankName_type__medium_ad9e8',
                    type__big: 'TankName_type__big_cbcfe',
                    type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_af236',
                    type__eliteMedium: 'TankName_type__eliteMedium_b273d',
                    type__eliteBig: 'TankName_type__eliteBig_a7f6c',
                    name: 'TankName_name_e6ffb',
                    premiumIGR: 'TankName_premiumIGR_bd935',
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(8218));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
