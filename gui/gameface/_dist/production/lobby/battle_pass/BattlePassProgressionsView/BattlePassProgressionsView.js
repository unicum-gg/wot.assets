(() => {
    var __webpack_modules__ = {
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => s });
                var u = a(7363),
                    n = a.n(u),
                    r = a(9916);
                class s extends n().PureComponent {
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
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var u = a(6483),
                    n = a.n(u),
                    r = a(3649),
                    s = a(7363),
                    o = a.n(s),
                    i = a(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: u = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(t, e) : t;
                    return o().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: n()(i.Z.base, a), key: `${t}-${l}` },
                                (0, r.Uw)(t, u, e).map((e, t) =>
                                    o().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => u.z });
                var u = a(280);
                a(8082);
            },
            8082: (e, t, a) => {
                'use strict';
                a(3649);
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => d });
                var u = a(3138),
                    n = a(7363),
                    r = a(1043),
                    s = a(5262);
                const o = u.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, r.j)),
                    d = (0, n.createContext)(c);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var u = a(3138),
                    n = a(6536),
                    r = a(7363),
                    s = a.n(r),
                    o = a(3495),
                    i = a(1043),
                    l = a(5262);
                const c = ({ children: e }) => {
                    const t = (0, r.useContext)(o.Y),
                        a = (0, r.useState)(t),
                        c = a[0],
                        d = a[1],
                        _ = (0, r.useCallback)((e, t) => {
                            const a = u.O.view.pxToRem(e),
                                n = u.O.view.pxToRem(t);
                            d(Object.assign({ width: a, height: n }, (0, l.T)(a, n, i.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = u.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    ((0, n.Z)(() => {
                        (u.O.client.events.on('clientResized', _), u.O.client.events.on('self.onScaleUpdated', m));
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                (u.O.client.events.off('clientResized', _),
                                    u.O.client.events.off('self.onScaleUpdated', m));
                            },
                            [_, m],
                        ));
                    const E = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(o.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var u = a(7363),
                    n = a(7382),
                    r = a(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, s);
                    const o = (0, u.useContext)(r.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        _ = o.extraSmall,
                        m = o.extraLargeWidth,
                        E = o.largeWidth,
                        g = o.mediumWidth,
                        p = o.smallWidth,
                        b = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        A = o.largeHeight,
                        v = o.mediumHeight,
                        f = o.smallHeight,
                        C = o.extraSmallHeight,
                        D = { extraLarge: h, large: A, medium: v, small: f, extraSmall: C };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && i) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && d) return t;
                        if (a.extraSmall && _) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, n.H)(t, a, D);
                        if (a.largeWidth && E) return (0, n.H)(t, a, D);
                        if (a.mediumWidth && g) return (0, n.H)(t, a, D);
                        if (a.smallWidth && p) return (0, n.H)(t, a, D);
                        if (a.extraSmallWidth && b) return (0, n.H)(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && h) return t;
                            if (a.largeHeight && A) return t;
                            if (a.mediumHeight && v) return t;
                            if (a.smallHeight && f) return t;
                            if (a.extraSmallHeight && C) return t;
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
                (0, u.memo)(o);
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => u });
                const u = (e, t, a) =>
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
                a.d(t, { YN: () => n.Y, ZN: () => u.Z });
                a(6010);
                var u = a(1039),
                    n = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => u });
                const u = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var u;
                function n(e, t, a) {
                    const u = (function (e, t) {
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
                        r = Math.min(u, n);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
                    };
                }
                (a.d(t, { T: () => n, u: () => u }),
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
                    })(u || (u = {})));
            },
            1975: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => d.$, ko: () => g, uH: () => m, uu: () => E });
                var u = a(6483),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(2468),
                    i = a(7442),
                    l = a(2407),
                    c = a(156),
                    d = a(7736),
                    _ = a(1635);
                a(6823);
                const m = c.Gh,
                    E = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = m,
                            size: a = d.$.Default,
                            animationSettings: u = E,
                            disabled: r = !1,
                            withoutBackground: g = !1,
                            value: p,
                            deltaFrom: b,
                            additionalKey: h,
                            lineRef: A,
                            onChangeAnimationState: v,
                            onEndAnimation: f,
                            onComplete: C,
                        }) => {
                            const D = (0, _.S)(p, e, b);
                            return s().createElement(
                                'div',
                                { className: n()(o.Z.base, o.Z[`base__${a}`]), style: (0, c.VQ)(t) },
                                !g && s().createElement(i.J, { size: a }),
                                s().createElement(l.r, {
                                    size: a,
                                    lineRef: A,
                                    disabled: r,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    additionalKey: h,
                                    animationSettings: u,
                                    onEndAnimation: f,
                                    onChangeAnimationState: v,
                                    onComplete: C,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => l });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6483),
                    s = a.n(r),
                    o = a(7736),
                    i = a(2468);
                const l = ({ size: e = o.$.Default }) => {
                    const t = s()(i.Z.background, i.Z[`background__${e}`]);
                    return n().createElement('div', { className: t });
                };
            },
            8150: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => i });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6483),
                    s = a.n(r),
                    o = a(8804);
                const i = ({ size: e }) => {
                    const t = s()(o.Z.base, o.Z[`base__${e}`]);
                    return n().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => l });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6736),
                    s = a(5680),
                    o = a(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, u.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: u,
                        deltaFrom: l,
                        additionalKey: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                        onComplete: E,
                    }) => {
                        if (l === t)
                            return n().createElement(s.M, {
                                key: `${l}-${t}-${c}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: u,
                                onComplete: E,
                            });
                        const g = {
                            from: l,
                            to: t,
                            size: e,
                            additionalKey: c,
                            lineRef: a,
                            disabled: u,
                            animationSettings: d,
                            onComplete: E,
                            onEndAnimation: _,
                            onChangeAnimationState: m,
                        };
                        return d.withStack
                            ? n().createElement(o.F, g)
                            : n().createElement(r.H, i({ key: `${l}-${t}-${c}` }, g));
                    },
                );
            },
            1848: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6483),
                    s = a.n(r),
                    o = a(8150),
                    i = a(6664);
                const l = (0, u.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: u, isComplete: r, withoutBounce: l }) => {
                        const c = s()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                a && i.Z.base__disabled,
                                r && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            d = !a && !r;
                        return n().createElement(
                            'div',
                            { className: c, style: u, ref: t },
                            n().createElement('div', { className: i.Z.pattern }),
                            n().createElement('div', { className: i.Z.gradient }),
                            d && n().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => E });
                var u = a(6483),
                    n = a.n(u),
                    r = a(122),
                    s = a(7363),
                    o = a.n(s),
                    i = a(8150),
                    l = a(6823),
                    c = a(6147);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: E,
                            to: g,
                            onEndAnimation: p,
                            onChangeAnimationState: b,
                            className: h,
                        }) => {
                            const A = g < u,
                                v = (0, s.useState)(l.S.Idle),
                                f = v[0],
                                C = v[1],
                                D = f === l.S.End,
                                F = f === l.S.Idle,
                                B = f === l.S.Grow,
                                w = f === l.S.Shrink,
                                S = (0, s.useCallback)(
                                    (e) => {
                                        (C(e), b && b(e));
                                    },
                                    [b],
                                ),
                                y = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, r.F)(() => {
                                            S(e);
                                        }, t),
                                    [S],
                                );
                            (0, s.useEffect)(() => {
                                if (!a)
                                    return F
                                        ? y(l.S.Grow, t)
                                        : B
                                          ? y(l.S.Shrink, e)
                                          : w
                                            ? y(l.S.End, e)
                                            : void (D && p && p());
                            }, [y, a, D, B, F, w, p, t, e]);
                            const P = (0, s.useMemo)(() => Object.assign({ width: '100%' }, m(e), d(A)), [A, e]),
                                k = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(e), d(A)), [A, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, _(A, u), m(e)), [u, A, e]),
                                N = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - u)}%` }, _(A, u), m(e)),
                                    [u, A, g, e],
                                );
                            if (D) return null;
                            const T = n()(c.Z.base, h, A && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: F ? R : N, className: T },
                                o().createElement(
                                    'div',
                                    { style: w ? k : P, className: c.Z.glow },
                                    o().createElement(i.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => l });
                var u = a(7363),
                    n = a.n(u),
                    r = a(122),
                    s = a(6823),
                    o = a(8150),
                    i = a(9919);
                const l = (0, u.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: l,
                        size: c,
                        to: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const E = d < l,
                            g = (0, u.useState)(s.V.Idle),
                            p = g[0],
                            b = g[1],
                            h = p === s.V.In,
                            A = p === s.V.End,
                            v = p === s.V.Idle,
                            f = (0, u.useCallback)(
                                (e) => {
                                    (b(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, u.useEffect)(() => {
                            if (v && !a) {
                                const e = t;
                                return (0, r.F)(() => {
                                    f(s.V.In);
                                }, e);
                            }
                        }, [f, a, v, t]),
                            (0, u.useEffect)(() => {
                                if (h) {
                                    const a = e + t;
                                    return (0, r.F)(() => {
                                        (_ && _(), f(s.V.End));
                                    }, a);
                                }
                            }, [f, h, _, t, e]));
                        const C = (0, u.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            D = (0, u.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            F = (0, u.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${E ? d : l}%` }),
                                [l, E, d],
                            );
                        return A
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: i.Z.base, style: F },
                                  n().createElement(
                                      'div',
                                      { style: v ? C : D, className: i.Z.delta },
                                      n().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => i });
                var u = a(7363),
                    n = a.n(u),
                    r = a(2434),
                    s = a(1848),
                    o = a(6823);
                const i = (0, u.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const E = e < a,
                            g = (0, u.useState)(!1),
                            p = g[0],
                            b = g[1],
                            h = (0, u.useCallback)(
                                (e) => {
                                    (e === o.S.Shrink && b(!0), m && m(e));
                                },
                                [m],
                            ),
                            A = (0, u.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            v = (0, u.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, {
                                size: t,
                                lineRef: i,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: E && 0 === e,
                                baseStyles: p ? v : A,
                            }),
                            a >= 0 &&
                                n().createElement(r.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: h,
                                    freezed: d.freezed,
                                    onEndAnimation: _,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: d.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => o });
                var u = a(7363),
                    n = a.n(u),
                    r = a(5913),
                    s = a(1848);
                const o = (0, u.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: o,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: d,
                        onEndAnimation: _,
                    }) => {
                        const m = (0, u.useMemo)(
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
                            n().createElement(s.t, { size: t, lineRef: o, disabled: i, isComplete: l, baseStyles: m }),
                            a >= 0 &&
                                n().createElement(r.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: _,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => c });
                var u = a(7363),
                    n = a.n(u),
                    r = a(7736),
                    s = a(828),
                    o = a(538);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, u.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, i);
                    const d = (0, u.useState)(!1),
                        _ = d[0],
                        m = d[1],
                        E = (0, u.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== _ && m(e), e && t && t(), a && a());
                        }, [_, t, a, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(s.D, l({}, c, { onEndAnimation: E, isComplete: _ }));
                        case r.r.Growing:
                            return n().createElement(o.F, l({}, c, { onEndAnimation: E, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                'use strict';
                let u, n;
                (a.d(t, { S: () => u, V: () => n }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(n || (n = {})));
            },
            2386: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => i });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6736);
                const s = ['onEndAnimation'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, s);
                    const i = (0, u.useRef)({}),
                        l = (0, u.useCallback)(() => {
                            ((i.current.from = void 0), t && t());
                        }, [t]),
                        c = 'number' == typeof i.current.from ? i.current.from : a.from;
                    return (
                        (i.current.from = c),
                        n().createElement(
                            r.H,
                            o({}, a, {
                                onEndAnimation: l,
                                key: `${c}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            5680: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => s });
                var u = a(7363),
                    n = a.n(u),
                    r = a(1848);
                const s = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                    const i = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, u.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        n().createElement(r.t, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                'use strict';
                a.d(t, { Gh: () => n, VQ: () => u, fV: () => r });
                const u = (e) => ({
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
                    },
                    r = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: {
                            bgColorBase: 'rgba(200, 200, 200, 0.5)',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'rgba(200, 200, 200, 0.5)',
                        },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                        },
                        glow: 'R.images.gui.maps.icons.battlePass.progression.progress_glow_white',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#fff',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    };
            },
            7736: (e, t, a) => {
                'use strict';
                let u, n;
                (a.d(t, { $: () => u, r: () => n }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(n || (n = {})));
            },
            1635: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => s });
                var u = a(7363),
                    n = a(7515);
                const r = (e, t, a) => {
                        if ('number' == typeof a) {
                            return ((0, n.u)(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    s = (e, t, a) =>
                        (0, u.useMemo)(() => {
                            const u = ((0, n.u)(0, t, e) / t) * 100;
                            return { value: u, deltaFrom: r(u, t, a) };
                        }, [a, t, e]);
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var u = a(2056),
                    n = a(7363),
                    r = a.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, s);
                        const E = (0, n.useMemo)(() => {
                            const e = Object.assign({}, _, { body: a, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, a, l, c, _]);
                        return r().createElement(
                            u.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var u = a(7902),
                    n = a(9916),
                    r = a(7363);
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
                const i = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
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
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            A = e.isEnabled,
                            v = void 0 === A || A,
                            f = e.targetId,
                            C = void 0 === f ? 0 : f,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => C || (0, u.F)().resId, [C]),
                            y = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(a, h, { isMouseEvent: !0, on: !0, arguments: o(n) }, S),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [a, h, n, S, D]),
                            P = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(a, h, { on: !1 }, S),
                                        w.current.isVisible && F && F(),
                                        (w.current.isVisible = !1));
                                }
                            }, [a, h, S, F]),
                            k = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === v && P();
                            }, [v, P]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return v
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                      l && l(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (P(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === p && P(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === p && P(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var R;
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
            7515: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => u });
                const u = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            122: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e, t) => {
                    let a;
                    const u = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        ('function' == typeof a && a(), clearTimeout(u));
                    };
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => o });
                var u = a(3138);
                function n(e, t) {
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
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: a = s, context: r = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
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
                        const u = a(t),
                            n = r.split('.').reduce((e, t) => e[t], u);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, n);
                    };
                    return {
                        subscribe: (a, n) => {
                            const s = 'string' == typeof n ? `${r}.${n}` : r,
                                i = u.O.view.addModelObserver(s, t, !0);
                            return (o.set(i, a), e && a(l(n)), i);
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
                            for (var e, a = n(o.keys()); !(e = a()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q3: () => i });
                var u = a(4598),
                    n = a(9174),
                    r = a(7363),
                    s = a.n(r),
                    o = a(8246);
                const i = () => (e, t) => {
                    const a = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, r.useRef)([]),
                                m = (a, r, s) => {
                                    var i;
                                    const l = o.U(r),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === a ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        E = e({
                                            mode: a,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        s = n.LO.box(r, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        s = n.LO.box(r, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const u = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(u[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((t) => {
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
                                                            o = s.reduce(
                                                                (e, [t, a]) => ((e[a] = n.LO.box(u[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([t, a]) => {
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
                                        g = { mode: a, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === a && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                p = g[0],
                                b = g[1],
                                h = (0, r.useState)(() => m(i, l, d)),
                                A = h[0],
                                v = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? v(m(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, r.useEffect)(() => {
                                    b(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (A.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [A],
                                ),
                                s().createElement(a.Provider, { value: A }, c)
                            );
                        },
                        () => (0, r.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => r, onScaleUpdated: () => s }));
                var u = a(2472),
                    n = a(1176);
                const r = (0, u.E)('clientResized'),
                    s = (0, u.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function u() {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${t}`,
                                        s = l[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        u(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                u(),
                                                (n = !1));
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
                            ((e.enabled = !1), u());
                        },
                        enable() {
                            ((e.enabled = !0), u());
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
                        events: () => u,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var u = a(527),
                    n = a(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
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
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            2493: (e, t, a) => {
                'use strict';
                function u(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => n, G: () => u });
            },
            2472: (e, t, a) => {
                'use strict';
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var u = a(5959),
                    n = a(514);
                const r = { view: a(7641), client: u, sound: n.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => o, hY: () => s });
                var u = a(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, u.playSound)(n[t])), e), {}),
                    s = Object.assign({}, r, { sound: u.playSound }),
                    o = { play: s, setRTPC: u.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => u }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var u = a(2472);
                const n = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        arabic2roman: () => S,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getFontNames: () => w,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => D,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => A,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => k,
                    }));
                var u = a(9690),
                    n = a(3722),
                    r = a(6112),
                    s = a(6538),
                    o = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = u.cg,
                    y = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    P = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const u = ['args'];
                const n = 2,
                    r = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        n = {},
                                        r = Object.keys(e);
                                    for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(t, u);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
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
                            i('popover' === e ? n : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                a.d(t, { jv: () => n, yR: () => u });
                function u(e) {
                    return e;
                }
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        u = R.invalid('resId'),
                        n = '';
                    var r;
                    t &&
                        ((n = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== a &&
                            window.subViews[a] &&
                            (u = window.subViews[a].id));
                    return { callerUrl: n, caller: a, stack: t, resId: u };
                };
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var u = a(7363);
                const n = (e) => {
                    const t = (0, u.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r });
                var u = a(7363);
                const n = [];
                function r(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), n)
                    );
                }
            },
            5415: (e, t, a) => {
                'use strict';
                a.d(t, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var u = a(7363),
                    n = a(7739),
                    r = a(1043);
                let s, o, i;
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
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, u.useContext)(n.YN),
                        t = e.width,
                        a = e.height,
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: a };
                };
            },
            5521: (e, t, a) => {
                'use strict';
                let u, n;
                (a.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            9480: (e, t, a) => {
                'use strict';
                function u(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                a.d(t, { MH: () => n, UI: () => r, kd: () => s });
                const n = u;
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, u) => t(null == e ? void 0 : e.value, a, u));
                }
                function s(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(n(e, a), a, e)) return a;
                    }
                }
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => o, cg: () => r });
                const u = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let a = n.length - 1; a >= 0; a--) for (; e >= n[a]; ) ((t += u[a]), (e -= n[a]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (s ? `${e}` : r(e));
            },
            7727: (e, t, a) => {
                'use strict';
                function u(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => n, G: () => u });
                const n = {
                    playHighlight() {
                        u('highlight');
                    },
                    playClick() {
                        u('play');
                    },
                    playYes() {
                        u('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                a.d(t, { BN: () => o, Uw: () => p, WU: () => r, e: () => i, uF: () => s, v2: () => n });
                var u = a(1281);
                let n;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
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
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e, t, a) => {
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
                    _ = (e, t, a = n.left) => e.split(t).reduce(a === n.left ? c : d, []),
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = n.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(a)) return m(e);
                        if ('ja' === a) {
                            return (0, u.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = n.left) => {
                            let a = [];
                            const u =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = l(e);
                            return (_(r, /( )/, t).forEach((e) => (a = a.concat(_(e, u, n.left)))), a);
                        })(e, t);
                    },
                    p = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : g(e, t)));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                var u = a(3138);
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
                        const r = u.O.view.addModelObserver(e, a, n);
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
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => r.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => b, Eu: () => h });
                class u {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (u.__instance || (u.__instance = new u()), u.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const n = u;
                var r = a(1358);
                var s = a(8613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    m = a(3138);
                const E = ['args'];
                function g(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (u, n) {
                                        var r = e.apply(t, a);
                                        function s(e) {
                                            g(r, u, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, u, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
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
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        n = {},
                                        r = Object.keys(e);
                                    for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(t, E);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((u = n),
                                              Object.entries(u).map(([e, t]) => {
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
                        var u;
                    },
                    v = () => A(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = a(7572);
                const D = n.instance,
                    F = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, u, n = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = a.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: u || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: p(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, v);
                        },
                        handleViewEvent: A,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const n = Object.prototype.toString.call(t[u]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < n.length; t++) a[u].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => r, Z5: () => u, cy: () => n });
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    r = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            886: (e, t, a) => {
                'use strict';
                var u = {};
                (a.r(u),
                    a.d(u, {
                        Area: () => en,
                        Bar: () => Ku,
                        DefaultScroll: () => Ju,
                        Direction: () => xu,
                        defaultSettings: () => Iu,
                        useHorizontalScrollApi: () => Ou,
                    }));
                var n = {};
                (a.r(n), a.d(n, { Area: () => An, Bar: () => pn, Default: () => hn, useVerticalScrollApi: () => tn }));
                var r = a(7739),
                    s = a(7363),
                    o = a.n(s),
                    i = a(6483),
                    l = a.n(i),
                    c = a(926),
                    d = a.n(c),
                    _ = a(5415);
                const m = ['children', 'className'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = {
                        [_.fd.ExtraSmall]: '',
                        [_.fd.Small]: d().SMALL_WIDTH,
                        [_.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [_.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [_.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [_.Aq.ExtraSmall]: '',
                        [_.Aq.Small]: d().SMALL_HEIGHT,
                        [_.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [_.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [_.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    b = {
                        [_.cJ.ExtraSmall]: '',
                        [_.cJ.Small]: d().SMALL,
                        [_.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [_.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [_.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    h = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, m);
                        const n = (0, _.GS)(),
                            r = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', E({ className: l()(a, g[r], p[s], b[i]) }, u), t);
                    },
                    A = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, A);
                    return o().createElement(r.ZN, null, o().createElement(h, a, t));
                };
                var f = a(1533),
                    C = a.n(f);
                const D = (e) => {
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
                var F = a(3138),
                    B = a(5521),
                    w = a(9916);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function y(e = B.n.NONE, t = S, a = !1, u = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== B.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!u && F.O.view.isEventHandled()) return;
                                (F.O.view.setEventHandled(), t(n), a && n.stopPropagation());
                            }
                        }
                    }, [t, e, a, u]);
                }
                var P = a(7727),
                    k = a(3403);
                let N, T, L;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(N || (N = {})),
                    (function (e) {
                        ((e.NoAction = 'noAction'),
                            (e.Buy = 'buy'),
                            (e.BuyLevel = 'buyLevel'),
                            (e.ActivateChapter = 'activateChapter'));
                    })(T || (T = {})),
                    (function (e) {
                        ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'));
                    })(L || (L = {})));
                var x = a(3215),
                    I = a(4598),
                    M = a(9480),
                    O = a(3946);
                let $, W, H, G, z, U, j, V;
                (!(function (e) {
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
                })($ || ($ = {})),
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
                    })(W || (W = {})),
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
                    })(H || (H = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(G || (G = {})),
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
                    })(z || (z = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(U || (U = {})),
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
                    })(j || (j = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(V || (V = {})));
                const q = [$.Attachment];
                var Y = a(2372);
                const Z = [
                        $.Items,
                        $.Equipment,
                        $.Xp,
                        $.XpFactor,
                        $.Blueprints,
                        $.BlueprintsAny,
                        $.Goodies,
                        $.Berths,
                        $.Slots,
                        $.Tokens,
                        $.CrewSkins,
                        $.CrewBooks,
                        $.Customizations,
                        $.CreditsFactor,
                        $.TankmenXp,
                        $.TankmenXpFactor,
                        $.FreeXpFactor,
                        $.BattleToken,
                        $.LootBox,
                        $.PremiumUniversal,
                        $.NaturalCover,
                        $.BpCoin,
                        $.BattlePassSelectToken,
                        $.BattlaPassFinalAchievement,
                        $.BattleBadge,
                        $.BattlePassTicket,
                        $.BonusX5,
                        $.CrewBonusX3,
                        $.EpicSelectToken,
                        $.Comp7TokenWeeklyReward,
                        $.DeluxeGift,
                        $.ModernizedDevicesT1Gift,
                        $.ModernizedDevicesT2Gift,
                        $.ModernizedDevicesT3Gift,
                        $.BattleBoosterGift,
                        $.OptionalDevice,
                        $.Attachment,
                    ],
                    X = [$.Gold, $.Credits, $.Crystal, $.FreeXp],
                    K = [$.BattlePassPoints, $.EquipCoin],
                    Q = [$.PremiumPlus, $.Premium],
                    J = ['engravings', 'backgrounds'],
                    ee = ['engraving', 'background'],
                    te = (e, t = H.Small) => {
                        const a = e.name,
                            u = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case H.S600x450:
                                        return 'c_600x450';
                                    case H.S400x300:
                                        return 'c_400x300';
                                    case H.S296x222:
                                        return 'c_296x222';
                                    case H.S232x174:
                                        return 'c_232x174';
                                    case H.Big:
                                        return 'c_80x80';
                                    case H.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const u = J[e];
                                    if (u) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(u),
                                            r = n.$dyn(a);
                                        return r ? `${r}` : `${n.$dyn(ee[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
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
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${r}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    ae = (e, t, a) => {
                        const u = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            u,
                            a,
                        );
                    },
                    ue = [H.Small, H.Big];
                let ne, re;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(ne || (ne = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(re || (re = {})));
                var se = a(3649),
                    oe = a(8613);
                const ie = 60,
                    le = 3600,
                    ce = 86400,
                    de = (Date.now(), oe.Ew.getRegionalDateTime);
                oe.Ew.getFormattedDateTime;
                function _e(e = 0) {
                    let t = e;
                    const a = Math.trunc(t / ce);
                    t -= a * ce;
                    const u = Math.trunc(t / le);
                    t -= u * le;
                    const n = Math.trunc(t / ie);
                    return ((t -= n * ie), { days: a, hours: u, minutes: n, seconds: t });
                }
                var me = a(8546);
                let Ee;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(Ee || (Ee = {}));
                (Ee.style, Ee.tankman);
                const ge = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    pe = 'progressiveStyle',
                    be = 'style',
                    he = 'tankman',
                    Ae = 'vehicle',
                    ve = 'battleQuest',
                    fe = [ve, he, be, pe, Ae],
                    Ce = (e, t) => fe.indexOf(t) - fe.indexOf(e),
                    De = (e) => {
                        const t = e.sort(Ce);
                        return { mainReward: t[0], additionalReward: t[1] };
                    };
                let Fe, Be, we, Se, ye;
                (!(function (e) {
                    ((e.left = 'left'), (e.right = 'right'));
                })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'));
                    })(Be || (Be = {})),
                    (function (e) {
                        ((e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward'));
                    })(we || (we = {})),
                    (function (e) {
                        ((e.back = 'back'), (e.forward = 'forward'));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Gray = 'gray'));
                    })(ye || (ye = {})));
                const Pe = [N.Active, N.Completed],
                    ke = (0, x.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    levels: e.array('levels.items'),
                                    widget3dStyle: e.object('widget3dStyle'),
                                    widget3dStyleVehicleInfo: e.object('widget3dStyle.vehicleInfo'),
                                    widgetFinalRewards: e.object('widgetFinalRewards'),
                                    vehicleInfo: e.object('widgetFinalRewards.vehicleInfo'),
                                    freeTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.free'),
                                    paidTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.paid'),
                                    styleInfo: e.object('widgetFinalRewards.styleInfo'),
                                    vehicleInfoFromStyle: e.object('widgetFinalRewards.styleInfo.vehicleInfo'),
                                    price: e.array('price'),
                                    freeFinalRewards: e.array('freeFinalRewards'),
                                    paidFinalRewards: e.array('paidFinalRewards'),
                                },
                                a = (0, O.Om)(() => M.UI(t.freeFinalRewards.get(), I.yR), { equals: I.jv }),
                                u = (0, O.Om)(() => M.UI(t.paidFinalRewards.get(), I.yR), { equals: I.jv }),
                                n = (0, O.Om)(() => t.root.get().chapterType === L.HOLIDAY),
                                r = (0, O.Om)(() =>
                                    Object.assign(
                                        { freeFinalRewards: De(a()) },
                                        u().length && { paidFinalRewards: De(u()) },
                                    ),
                                ),
                                s = (0, O.Om)(() => {
                                    const e = r(),
                                        t = e.freeFinalRewards;
                                    return !(!e.paidFinalRewards && t.mainReward === pe);
                                }),
                                o = (0, O.Om)(() => t.root.get().chapterType === L.EXTRA),
                                i = (0, O.Om)(() => !(n() || o()), { equals: I.jv }),
                                l = (0, O.Om)(() => t.price.get().prices.length > 1),
                                c = (0, O.Om)((e) => (e ? t.paidTankmanInfo.get() : t.freeTankmanInfo.get())),
                                d = (0, O.Om)((e) => {
                                    const a = t.levels.get(),
                                        u = M.MH(a, e - 1);
                                    return (
                                        u || console.warn(`level info not found for number: ${e}`),
                                        Object.assign({}, u, { maxLevel: a.length })
                                    );
                                }),
                                _ = (0, O.Om)((e, t) => {
                                    const a = d(e);
                                    return t
                                        ? M.UI(a.freeRewardItems.items, (e) => Object.assign({}, e))
                                        : M.UI(a.paidRewardItems.items, (e) => Object.assign({}, e));
                                }),
                                m = (0, O.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.freePointsInLevel,
                                        u = e.currentPointsInLevel,
                                        n = e.chapterState,
                                        r = e.hasExtra,
                                        s = Pe.includes(n) || r ? u : a,
                                        o = d(1);
                                    return { current: s, total: null == o ? void 0 : o.levelPoints };
                                }),
                                E = (0, O.Om)((e, a) => {
                                    const u = t.root.get(),
                                        n = u.chapterState,
                                        r = u.currentLevel,
                                        s = u.potentialLevel,
                                        o = u.currentPointsInChapter,
                                        i = u.freePointsInChapter,
                                        l = d(e),
                                        c = l.levelPoints,
                                        _ = l.maxLevel,
                                        m = a ? i : o,
                                        E = a ? s : r;
                                    return e < E || (E === _ && m === c * _)
                                        ? Be.COMPLETED
                                        : e === E && (n !== N.NotStarted || m > 0)
                                          ? Be.IN_PROGRESS
                                          : Be.NOT_STARTED;
                                }),
                                g = (0, O.Om)((e, a, u, n) => {
                                    const r = t.root.get();
                                    return ((r.currentLevel - 1) * e + (r.currentPointsInLevel / n) * a) / u;
                                }),
                                p = (0, O.Om)(() => {
                                    const e = t.levels.get();
                                    return e[e.length - 1].value.levelPoints;
                                }),
                                b = (0, O.Om)((e, t) => {
                                    const a = d(e),
                                        u = a.needTakeFree,
                                        n = a.needTakePaid;
                                    return t ? n : u;
                                }),
                                h = (0, O.Om)((e, a) => {
                                    const u = t.root.get(),
                                        n = u.isBattlePassPurchased,
                                        r = u.chapterState,
                                        s = d(e),
                                        o = E(e, !1);
                                    return {
                                        cardStatus: { current: o, potential: E(e, !0) },
                                        isRare: s.isRare && o !== Be.IN_PROGRESS,
                                        isDisabled: (a && !n) || (r !== N.Active && o === Be.NOT_STARTED),
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    isMulticurrency: l,
                                    getFreeFinalRewards: a,
                                    getPaidFinalRewards: u,
                                    regularBattlePass: i,
                                    getFinalRewardTankmanInfo: c,
                                    currentLevelPoints: m,
                                    levelInfo: d,
                                    levelRewardItems: _,
                                    getCurrentWidth: g,
                                    getTotalLevelPoints: p,
                                    isRewardNeedTake: b,
                                    cardStates: h,
                                    isLayoutWithExtraWidget: s,
                                    getFinalRewardsDescription: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPreview: e.createCallbackNoArgs('widgetFinalRewards.onRewardPreviewClick'),
                            open3dStylePreview: e.createCallback((e) => ({ level: e }), 'widget3dStyle.onPreviewClick'),
                            onStyleBonusPreview: e.createCallback((e) => ({ bonusId: e }), 'onStyleBonusPreview'),
                            confirm: e.createCallbackNoArgs('onActionClick'),
                            showTankmen: e.createCallbackNoArgs('widgetFinalRewards.showTankmen'),
                            openInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            chapterChoice: e.createCallbackNoArgs('onChapterChoice'),
                            close: e.createCallbackNoArgs('onClose'),
                            viewLoad: e.createCallbackNoArgs('onViewLoaded'),
                            finishLevelsAnimation: e.createCallbackNoArgs('onLevelsAnimationFinished'),
                            takeReward: e.createCallback(({ level: e }) => ({ level: e }), 'onTakeClick'),
                            finishAnimation: e.createCallbackNoArgs('onFinishedAnimation'),
                        }),
                    ),
                    Re = ke[0],
                    Ne = ke[1],
                    Te = {
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
                    Le = [
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
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                class Ie extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, P.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, P.G)(this.props.soundClick));
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
                            a = e.onClick,
                            u = e.goto,
                            n = e.side,
                            r = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        n = {},
                                        r = Object.keys(e);
                                    for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                    return n;
                                })(e, Le)),
                            E = l()(Te.base, Te[`base__${r}`], Te[`base__${n}`], null == s ? void 0 : s.base),
                            g = l()(Te.icon, Te[`icon__${r}`], Te[`icon__${n}`], null == s ? void 0 : s.icon),
                            p = l()(Te.glow, null == s ? void 0 : s.glow),
                            b = l()(Te.caption, Te[`caption__${r}`], null == s ? void 0 : s.caption),
                            h = l()(Te.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            xe(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== r && o().createElement('div', { className: Te.shine }),
                            o().createElement('div', { className: g }, o().createElement('div', { className: p })),
                            o().createElement('div', { className: b }, t),
                            u && o().createElement('div', { className: h }, u),
                        );
                    }
                }
                Ie.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Me = a(9485);
                const Oe = 'BattlePassProgressionsViewContent_base_67',
                    $e = 'BattlePassProgressionsViewContent_base__extra_e2',
                    We = 'BattlePassProgressionsViewContent_base__extraChapter_17',
                    He = 'BattlePassProgressionsViewContent_header_76',
                    Ge = 'BattlePassProgressionsViewContent_progression_7c',
                    ze = 'BattlePassProgressionsViewContent_progression__extraChapter_01',
                    Ue = 'BattlePassProgressionsViewContent_extraChapterWidget_e2',
                    je = 'BattlePassProgressionsViewContent_footer_13',
                    Ve = 'BattlePassProgressionsViewContent_close_69';
                var qe = a(9766);
                const Ye =
                    (e, t) =>
                    (...a) => {
                        if (e(...a)) return t(...a);
                    };
                let Ze;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Ze || (Ze = {}));
                const Xe = {
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
                    Ke = [
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
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Je = (e) => {
                    let t = e.type,
                        a = e.children,
                        u = e.className,
                        n = e.classNames,
                        r = e.disabled,
                        i = void 0 !== r && r,
                        c = e.isVisibleLabel,
                        d = void 0 !== c && c,
                        _ = e.soundHover,
                        m = void 0 === _ ? R.sounds.highlight() : _,
                        E = e.soundClick,
                        g = void 0 === E ? R.sounds.play() : E,
                        p = e.size,
                        b = void 0 === p ? 'normal' : p,
                        h = e.onClick,
                        A = e.onMouseEnter,
                        v = e.onMouseLeave,
                        f = e.onMouseDown,
                        C = e.onMouseUp,
                        D = e.onFocus,
                        F = e.onBlur,
                        B = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, Ke);
                    const w = (0, s.useState)(!1),
                        S = w[0],
                        y = w[1],
                        k = (0, s.useState)(!1),
                        N = k[0],
                        T = k[1],
                        L = (0, s.useRef)(null),
                        x = () => !1 === i,
                        I = (e) => x() && ((e) => e.button === Ze.LEFT)(e),
                        M = Ye(x, (e) => {
                            null == h || h(e);
                        }),
                        O = Ye(I, (e) => {
                            (y(!0), null == f || f(e), g && (0, P.G)(g));
                        }),
                        $ = Ye(I, (e) => {
                            (y(!1), null == C || C(e));
                        }),
                        W = Ye(x, (e) => {
                            (T(!0), null == A || A(e), m && (0, P.G)(m));
                        }),
                        H = Ye(x, (e) => {
                            null == D || D(e);
                        }),
                        G = Ye(x, (e) => {
                            null == F || F(e);
                        });
                    return o().createElement(
                        'div',
                        Qe(
                            {
                                ref: L,
                                className: l()(
                                    Xe.base,
                                    i && Xe.base__disabled,
                                    d && Xe.base__visibleLabel,
                                    !i && S && Xe.base__mouseDown,
                                    !i && N && Xe.base__hovered,
                                    u,
                                ),
                                onClick: M,
                                onMouseEnter: W,
                                onMouseLeave: (e) => {
                                    (T(!1), y(!1), null == v || v(e));
                                },
                                onMouseDown: O,
                                onMouseUp: $,
                                onFocus: H,
                                onBlur: G,
                            },
                            B,
                        ),
                        o().createElement('div', {
                            className: l()(Xe.icon, Xe[`icon__${b}`], Xe[`icon__${t}`], null == n ? void 0 : n.icon),
                        }),
                        a &&
                            o().createElement(
                                'div',
                                { className: l()(Xe.label, Xe[`label__${b}`], null == n ? void 0 : n.label) },
                                a,
                            ),
                    );
                };
                var et = a(6373),
                    tt = a(2056);
                var at = a(9690);
                const ut = (e, t) => e.split(',').includes(t),
                    nt = {
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
                let rt, st;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(rt || (rt = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(st || (st = {})));
                const ot = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: u,
                        vehicleLvl: n,
                        tags: r = '',
                        size: s = rt.extraSmall,
                        type: i = st.colored,
                        className: c,
                        classNames: d,
                        isShortName: _ = !1,
                    }) => {
                        const m = `${(0, se.BN)(u)}${e ? '_elite' : ''}`,
                            E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    nt.base,
                                    nt[`base__size${(0, se.e)(s)}`],
                                    nt[`base__type${(0, se.e)(i)}`],
                                    c,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: l()(nt.level, null == d ? void 0 : d.level) },
                                (0, at.HG)(n),
                            ),
                            o().createElement('div', {
                                className: l()(
                                    nt.type,
                                    e && nt[`type__elite${(0, se.e)(s)}`],
                                    nt[`type__${s}`],
                                    null == d ? void 0 : d.typeIcon,
                                ),
                                style: u ? { backgroundImage: `url(${E})` } : void 0,
                            }),
                            ut(r, 'premiumIGR') && o().createElement('div', { className: nt.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: l()(nt.name, null == d ? void 0 : d.name) },
                                _ ? a : t,
                            ),
                        );
                    },
                    it = 'AdditionalRewardInfo_rewardText_6f',
                    lt = 'AdditionalRewardInfo_subTitle_89',
                    ct = 'AdditionalRewardInfo_subTitleTextWrapper_cf',
                    dt = 'AdditionalRewardInfo_subTitleText_bb',
                    _t = 'AdditionalRewardInfo_subTitleText__truncated_9f',
                    mt = 'AdditionalRewardInfo_infoIcon_33';
                function Et(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                function gt(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, n) {
                            var r = e.apply(t, a);
                            function s(e) {
                                Et(r, u, n, s, o, 'next', e);
                            }
                            function o(e) {
                                Et(r, u, n, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const pt = R.strings.battle_pass.progression.extraChapterWidget,
                    bt = (0, k.Pi)(({ additionalReward: e }) => {
                        const t = Ne().model,
                            a = t.widgetFinalRewards,
                            u = t.styleInfo,
                            n = t.vehicleInfo.get().vehicleName,
                            r = a.get().battleQuest,
                            i = (0, s.useState)(!1),
                            c = i[0],
                            d = i[1],
                            _ = (0, s.useRef)(null),
                            m = (0, s.useCallback)(
                                gt(function* () {
                                    yield (0, w.Eu)();
                                    const e = _.current;
                                    e && d(e.scrollWidth > e.offsetWidth);
                                }),
                                [],
                            );
                        var E;
                        return (
                            (E = () => (
                                m(),
                                engine.on('clientResized', m),
                                () => {
                                    engine.off('clientResized', m);
                                }
                            )),
                            (0, s.useEffect)(E, []),
                            o().createElement(
                                o().Fragment,
                                null,
                                e === be &&
                                    o().createElement(qe.z, {
                                        classMix: it,
                                        text: pt.vehicleSubTitle(),
                                        binding: { styleName: u.get().styleName },
                                    }),
                                e === ve &&
                                    o().createElement(
                                        tt.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: r },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: lt },
                                            o().createElement(
                                                'div',
                                                { className: ct },
                                                o().createElement(
                                                    'div',
                                                    { className: l()(dt, c && _t), ref: _ },
                                                    (0, se.uF)(pt.styleSubTitle(), { vehicleName: n }),
                                                ),
                                            ),
                                            o().createElement('div', { className: mt }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    ht = 'StyleDescription_rewardTitle_81',
                    At = 'StyleDescription_rewardTitle__singleReward_e6',
                    vt = 'StyleDescription_title_60',
                    ft = 'StyleDescription_title__singleReward_4b',
                    Ct = 'StyleDescription_vehicleTitle_f3',
                    Dt = 'StyleDescription_vehicleName_42',
                    Ft = 'StyleDescription_vehicleTypeIcon_f7',
                    Bt = 'StyleDescription_vehicleInHangar_7a',
                    wt = 'StyleDescription_remark_0e',
                    St = 'StyleDescription_lockIcon_35';
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const Pt = R.strings.battle_pass.progression.extraChapterWidget,
                    kt = (0, k.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = Ne(),
                            u = a.model,
                            n = u.styleInfo,
                            r = u.vehicleInfoFromStyle,
                            s = u.root,
                            i = u.computes,
                            c = a.controls,
                            d = s.get().isBattlePassPurchased,
                            _ = n.get(),
                            m = _.styleName,
                            E = _.isVehicleInHangar,
                            g = i.getPaidFinalRewards().length;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(Je, { type: 'preview', size: 'normal', onClick: c.openPreview }),
                            o().createElement(
                                'div',
                                { className: l()(ht, !g && At) },
                                g ? Pt.style3DTitle() : Pt.styleTitle(),
                            ),
                            o().createElement(qe.z, {
                                classMix: l()(vt, !g && ft),
                                text: Pt.styleName(),
                                binding: { styleName: m },
                            }),
                            !g &&
                                o().createElement(
                                    'div',
                                    { className: Ct },
                                    o().createElement(qe.z, {
                                        text: Pt.forLabel(),
                                        binding: {
                                            vehicleName: o().createElement(
                                                ot,
                                                yt({}, r.get(), {
                                                    type: st.whiteOrange,
                                                    className: Dt,
                                                    classNames: { typeIcon: Ft },
                                                }),
                                            ),
                                        },
                                    }),
                                    E &&
                                        o().createElement(
                                            et.i,
                                            { body: Pt.inHangarTooltip() },
                                            o().createElement('div', { className: Bt }),
                                        ),
                                ),
                            e && o().createElement(bt, { additionalReward: e }),
                            t &&
                                !d &&
                                o().createElement(
                                    tt.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: wt },
                                        o().createElement('div', { className: St }),
                                        o().createElement('div', null, Pt.styleRemark()),
                                    ),
                                ),
                        );
                    }),
                    Rt = {
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
                let Nt, Tt;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Nt || (Nt = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Tt || (Tt = {})));
                const Lt = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: u,
                    disabled: n,
                    mixClass: r,
                    soundHover: i,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: g,
                    onClick: p,
                }) => {
                    const b = (0, s.useRef)(null),
                        h = (0, s.useState)(a),
                        A = h[0],
                        v = h[1],
                        f = (0, s.useState)(!1),
                        C = f[0],
                        D = f[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                A && null !== b.current && !b.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, s.useEffect)(() => {
                            v(a);
                        }, [a]),
                        o().createElement(
                            'div',
                            {
                                ref: b,
                                className: l()(
                                    Rt.base,
                                    Rt[`base__${u}`],
                                    n && Rt.base__disabled,
                                    t && Rt[`base__${t}`],
                                    A && Rt.base__focus,
                                    C && Rt.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== i && (0, P.G)(i), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    n || (E && E(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== c && (0, P.G)(c),
                                        m && m(e),
                                        a && (n || (b.current && (b.current.focus(), v(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (g && g(e), D(!1));
                                },
                                onClick: function (e) {
                                    n || (p && p(e));
                                },
                            },
                            u !== Nt.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Rt.back }),
                                    o().createElement('span', { className: Rt.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: l()(Rt.state, Rt.state__default) },
                                o().createElement('span', { className: Rt.stateDisabled }),
                                o().createElement('span', { className: Rt.stateHighlightHover }),
                                o().createElement('span', { className: Rt.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Rt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Lt.defaultProps = { type: Nt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const xt = Lt;
                var It = a(734);
                const Mt = 'TankmanDescription_title_56',
                    Ot = 'TankmanDescription_title__noVoice_6e',
                    $t = 'TankmanDescription_name_8a',
                    Wt = 'TankmanDescription_skills_11',
                    Ht = 'TankmanDescription_skill_2d',
                    Gt = 'TankmanDescription_skill__paidReward_6e',
                    zt = 'TankmanDescription_description_78',
                    Ut = 'TankmanDescription_lockIcon_88',
                    jt = 'TankmanDescription_lockText_99',
                    Vt = 'TankmanDescription_showCommander_56',
                    qt = 'TankmanDescription_close_71';
                var Yt = a(122),
                    Zt = a(5689);
                const Xt = 'Voice_base_7e',
                    Kt = 'Voice_icon_41',
                    Qt = 'Voice_icon__speaker_d2',
                    Jt = 'Voice_icon__wave0_6b',
                    ea = 'Voice_base__animate_82',
                    ta = 'Voice_icon__wave1_a6',
                    aa = 'Voice_icon__wave2_32',
                    ua = R.strings.battle_pass.progression.extraChapterWidget,
                    na = (() => {
                        const e = Math.ceil(Zt.k9 / 800);
                        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
                    })(),
                    ra = ({ groupName: e }) => {
                        const t = (0, s.useState)(!1),
                            a = t[0],
                            u = t[1],
                            n = (0, s.useCallback)(() => {
                                a || ((0, P.G)(R.sounds.play()), (0, P.G)(e), u(!0));
                            }, [a, e]);
                        return (
                            (0, s.useEffect)(() => {
                                a &&
                                    (0, Yt.F)(() => {
                                        u(!1);
                                    }, na.totalDuration);
                            }, [a]),
                            o().createElement(
                                et.i,
                                { body: ua.voiceoverTooltip() },
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(Xt, a && ea),
                                        onClick: n,
                                        onMouseEnter: () => {
                                            (0, P.G)(R.sounds.bp_highlight());
                                        },
                                        style: {
                                            '--animation-duration': `${na.duration}ms`,
                                            '--animation-iteration-count': na.iterationCount,
                                        },
                                    },
                                    o().createElement('div', { className: l()(Kt, Qt) }),
                                    o().createElement('div', { className: l()(Kt, Jt) }),
                                    o().createElement('div', { className: l()(Kt, ta) }),
                                    o().createElement('div', { className: l()(Kt, aa) }),
                                ),
                            )
                        );
                    },
                    sa = R.strings.battle_pass.progression.extraChapterWidget,
                    oa = R.strings.battle_pass.awardsWidget.description.commander(),
                    ia = (0, k.Pi)(({ isPaidReward: e }) => {
                        const t = Ne(),
                            a = t.model,
                            u = t.controls,
                            n = a.root.get(),
                            r = n.tankmenScreenID,
                            s = n.isBattlePassPurchased,
                            i = a.computes.getFinalRewardTankmanInfo(e),
                            c = i.tankman,
                            d = i.hasVoice,
                            _ = i.skills,
                            m = i.groupName,
                            E = a.computes.getFinalRewardsDescription(),
                            g = E.freeFinalRewards,
                            p = E.paidFinalRewards,
                            b = g.mainReward === he && (null == p ? void 0 : p.mainReward) === he;
                        return o().createElement(
                            o().Fragment,
                            null,
                            d && o().createElement(ra, { groupName: m }),
                            o().createElement('div', { className: l()(Mt, !d && Ot) }, sa.tankman()),
                            o().createElement('div', { className: $t }, c),
                            _.length > 0 &&
                                o().createElement(
                                    'div',
                                    { className: Wt },
                                    o().createElement(It.C, { skills: _, className: l()(Ht, e && Gt) }),
                                ),
                            e &&
                                !s &&
                                o().createElement(
                                    tt.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: zt },
                                        o().createElement('div', { className: Ut }),
                                        o().createElement('div', { className: jt }, sa.labelWithBP()),
                                    ),
                                ),
                            Boolean(r) &&
                                !b &&
                                o().createElement(
                                    et.i,
                                    { body: oa, isEnabled: Boolean(oa) },
                                    o().createElement(
                                        'div',
                                        { className: Vt },
                                        o().createElement(
                                            xt,
                                            { type: Nt.ghost, size: Tt.small, mixClass: qt, onClick: u.showTankmen },
                                            sa.commanderVoices(),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    la = () => {},
                    ca = (e = 0, t, a = 0, u = la) => {
                        const n = (0, s.useState)(e),
                            r = n[0],
                            o = n[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== a && t <= a ? (o(a), u && u(), clearInterval(r)) : o(t);
                                            },
                                            1e3 * (t || (e > 120 ? ie : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, a, u]),
                            r
                        );
                    };
                a(6536);
                w.Sw.instance;
                let da;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(da || (da = {}));
                w.Sw.instance;
                const _a = ca,
                    ma = (e) => (e < 10 ? '0' + e : e),
                    Ea = 'Timer_base_0c',
                    ga = 'Timer_light_02',
                    pa = 'Timer_icon_c5',
                    ba = 'Timer_value_1c',
                    ha = ({ expireTime: e = 0 }) => {
                        const t = _a(e, 1),
                            a = `${(u = _e(t)).days ? (0, se.WU)(R.strings.common.duration.days(), { days: u.days }) : ''} ${ma(u.hours)} : ${ma(u.minutes)} : ${ma(u.seconds)}`;
                        var u;
                        return o().createElement(
                            et.i,
                            { body: R.strings.battle_pass.progression.extraChapterWidget.timer() },
                            o().createElement(
                                'div',
                                { className: Ea },
                                o().createElement('div', { className: ga }),
                                o().createElement('div', { className: ga }),
                                o().createElement('div', { className: pa }),
                                o().createElement('div', { className: ba }, a),
                            ),
                        );
                    },
                    Aa = {
                        vehicleBg: 'VehicleDescription_vehicleBg_26',
                        vehicleBg__description: 'VehicleDescription_vehicleBg__description_96',
                        vehicleCaption: 'VehicleDescription_vehicleCaption_d5',
                        description: 'VehicleDescription_description_58',
                        rewardLabel: 'VehicleDescription_rewardLabel_95',
                        rewardDescription: 'VehicleDescription_rewardDescription_26',
                        rewardLockIcon: 'VehicleDescription_rewardLockIcon_b5',
                        rewardLockText: 'VehicleDescription_rewardLockText_b3',
                    },
                    va = 'VehicleInfo_base_ef',
                    fa = 'VehicleInfo_type_40',
                    Ca = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u, classNames: n }) =>
                        o().createElement(
                            'div',
                            { className: l()(va, null == n ? void 0 : n.base) },
                            (0, at.cg)(e),
                            o().createElement('div', {
                                className: l()(fa, null == n ? void 0 : n.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, se.BN)(a)}${u ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    Da = R.strings.battle_pass.progression.extraChapterWidget,
                    Fa = (0, k.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = Ne(),
                            u = a.model,
                            n = u.vehicleInfo,
                            r = u.root,
                            s = u.computes,
                            i = a.controls,
                            c = n.get(),
                            d = c.vehicleType,
                            m = c.isElite,
                            E = c.vehicleName,
                            g = c.vehicleShortName,
                            p = c.vehicleLvl,
                            b = c.vehicleNation,
                            h = (0, _.GS)().mediaSize,
                            A = r.get(),
                            v = A.isBattlePassPurchased,
                            f = A.seasonNum,
                            C = s.getPaidFinalRewards().length,
                            D = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${b})` },
                            F = h > _.cJ.Medium ? 14 : 12,
                            B = E.length > F ? g : E,
                            w = Da.tank.description.$num(f);
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', {
                                className: l()(Aa.vehicleBg, !C && Aa.vehicleBg__description),
                                style: D,
                            }),
                            o().createElement(Je, { type: 'preview', size: 'normal', onClick: i.openPreview }),
                            o().createElement('div', { className: Aa.vehicleCaption }, Da.vehicleCaption()),
                            o().createElement(Ca, {
                                classNames: { base: Aa.vehicleInfo },
                                vehicleLvl: p,
                                vehicleName: B,
                                vehicleType: d,
                                isElite: m,
                            }),
                            !C &&
                                w &&
                                o().createElement(
                                    'div',
                                    { className: Aa.description },
                                    o().createElement(qe.z, { text: w }),
                                ),
                            e &&
                                o().createElement(
                                    'div',
                                    { className: Aa.rewardLabel },
                                    o().createElement(bt, { additionalReward: e }),
                                ),
                            t &&
                                !v &&
                                o().createElement(
                                    tt.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Aa.rewardDescription },
                                        o().createElement('div', { className: Aa.rewardLockIcon }),
                                        o().createElement('div', { className: Aa.rewardLockText }, Da.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    Ba = 'ExtraChapterWidget_base_61',
                    wa = 'ExtraChapterWidget_widgetWrapper_00',
                    Sa = 'ExtraChapterWidget_base__styleReward_78',
                    ya = 'ExtraChapterWidget_glow_e7',
                    Pa = 'ExtraChapterWidget_glow__styleReward_40',
                    ka = 'ExtraChapterWidget_content_a7',
                    Ra = 'ExtraChapterWidget_content__left_be',
                    Na = 'ExtraChapterWidget_content__singleReward_5f',
                    Ta = 'ExtraChapterWidget_separatorBg_ab',
                    La = 'ExtraChapterWidget_timer_9b',
                    xa = 'Separator_base_c5',
                    Ia = 'Separator_separatorBg_28',
                    Ma = ({ classNames: e }) =>
                        o().createElement(
                            'div',
                            { className: l()(xa, null == e ? void 0 : e.base) },
                            o().createElement('div', { className: l()(Ia, null == e ? void 0 : e.separatorBg) }),
                        );
                function Oa() {
                    return (
                        (Oa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Oa.apply(this, arguments)
                    );
                }
                const $a = { [he]: ia, [Ae]: Fa, [be]: kt },
                    Wa = ({ mainReward: e, additionalReward: t }, a) => {
                        const u = $a[e];
                        return u
                            ? o().createElement(u, Oa({ additionalReward: t }, a))
                            : (console.warn('Unknown final reward type:', e), null);
                    },
                    Ha = (0, k.Pi)(() => {
                        const e = Ne().model,
                            t = e.root,
                            a = e.computes,
                            u = t.get().timeLeft,
                            n = a.getFinalRewardsDescription(),
                            r = n.freeFinalRewards,
                            s = n.paidFinalRewards,
                            i = a.regularBattlePass(),
                            c = !s && r.mainReward === be;
                        return o().createElement(
                            'div',
                            { className: l()(Ba, c && Sa) },
                            o().createElement(
                                'div',
                                { className: wa },
                                o().createElement('div', { className: l()(ya, c && Pa) }),
                                o().createElement('div', { className: l()(ka, !s && Na) }, Wa(r, { isPaidReward: !1 })),
                                s &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(Ma, { classNames: { separatorBg: Ta } }),
                                        o().createElement(
                                            'div',
                                            { className: l()(ka, Ra) },
                                            Wa(s, { isPaidReward: !0 }),
                                        ),
                                    ),
                            ),
                            !i && o().createElement('div', { className: La }, o().createElement(ha, { expireTime: u })),
                        );
                    }),
                    Ga = {
                        base: 'Footer_base_5e',
                        light: 'Footer_light_19',
                        light__red: 'Footer_light__red_67',
                        light__green: 'Footer_light__green_ec',
                        buttonWrapper: 'Footer_buttonWrapper_fc',
                        buttonWrapper__multiCurrency: 'Footer_buttonWrapper__multiCurrency_df',
                        multicurrencyIcon: 'Footer_multicurrencyIcon_bc',
                        button: 'Footer_button_80',
                        labelContainer: 'Footer_labelContainer_43',
                        label: 'Footer_label_2a',
                        days: 'Footer_days_5e',
                        points: 'Footer_points_af',
                        status: 'Footer_status_b0',
                        info: 'Footer_info_a4',
                        infoHover: 'Footer_infoHover_81',
                        blink: 'Footer_blink_bc',
                        move: 'Footer_move_b0',
                    },
                    za = R.strings.battle_pass.progression,
                    Ua = R.strings.battle_pass.tooltips.footerBuyBtn,
                    ja = R.strings.battle_pass.tooltips.progression,
                    Va = (e, t) =>
                        e
                            ? t
                                ? za.activatePausedExtraChapterDescr()
                                : za.activateExtraChapterDescr()
                            : za.activateChapterDescr();
                let qa;
                !(function (e) {
                    ((e.Red = 'red'), (e.Green = 'green'), (e.None = ''));
                })(qa || (qa = {}));
                const Ya = (0, k.Pi)(() => {
                    const e = Ne(),
                        t = e.model,
                        a = e.controls,
                        u = t.root.get(),
                        n = u.actionType,
                        r = u.chapterType,
                        s = u.hasExtra,
                        i = u.isSeasonEndingSoon,
                        c = u.freePointsInChapter,
                        d = u.currentPointsInChapter,
                        m = u.chapterState,
                        E = u.timeLeft,
                        g = r === L.EXTRA,
                        p = m === N.Paused,
                        b = c - d,
                        h = n === T.ActivateChapter && b > 0,
                        A = n !== T.ActivateChapter && i,
                        v = t.computes.isMulticurrency() && n === T.Buy,
                        f = (0, _.GS)().mediaSize <= _.cJ.Small ? Tt.small : Tt.medium,
                        C = ((e) => {
                            switch (e) {
                                case T.Buy:
                                    return {
                                        buyBtnLabel: za.battlePassBuyBtn(),
                                        tooltip: Ua.battlePass.descr(),
                                        label: za.battlePassBuyDescr(),
                                        warning: za.seasonEndingDescr(),
                                        buttonType: Nt.main,
                                        lightColor: qa.Red,
                                    };
                                case T.BuyLevel:
                                    return {
                                        buyBtnLabel: za.episodeBuyBtn(),
                                        tooltip: Ua.episode.descr(),
                                        label: za.episodeBuyDescr(),
                                        warning: za.seasonEndingDescr(),
                                        buttonType: Nt.main,
                                        lightColor: qa.None,
                                    };
                                case T.ActivateChapter:
                                    return {
                                        buyBtnLabel: za.activateChapter(),
                                        tooltip: Ua.activateChapter.descr(),
                                        label: Va(g, p),
                                        warning: za.footer.freePointsDescr(),
                                        buttonType: Nt.primary,
                                        lightColor: qa.Green,
                                    };
                                default:
                                    return {
                                        buyBtnLabel: '',
                                        tooltip: '',
                                        label: '',
                                        warning: '',
                                        buttonType: Nt.ghost,
                                        lightColor: qa.Green,
                                    };
                            }
                        })(n),
                        D = C.buyBtnLabel,
                        F = C.tooltip,
                        B = C.label,
                        w = C.warning,
                        S = C.buttonType,
                        y = C.lightColor,
                        P = h || A ? w : B,
                        k = ((e) => {
                            const t = _e(e),
                                a = R.strings.battle_pass.status.timeLeft;
                            switch (!0) {
                                case t.days >= 1:
                                    return (0, se.uF)(a.days(), { day: t.days });
                                case t.hours >= 1:
                                    return (0, se.uF)(a.hours(), { hour: t.hours });
                                case t.minutes >= 1:
                                    return (0, se.uF)(a.min(), { min: t.minutes });
                                default:
                                    return a.lessMin();
                            }
                        })(E);
                    return o().createElement(
                        'div',
                        { className: Ga.base },
                        o().createElement('div', { className: l()(Ga.light, Ga[`light__${y}`]) }),
                        o().createElement(
                            'div',
                            { className: Ga.labelContainer },
                            p && o().createElement('div', { className: Ga.status }, za.footer.status.paused()),
                            o().createElement('div', { className: Ga.label }, P),
                            A && o().createElement('div', { className: Ga.days }, k),
                            h &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Ga.points }, b),
                                    o().createElement(
                                        'div',
                                        { className: Ga.info },
                                        o().createElement(
                                            et.i,
                                            {
                                                header: ja.freePoints.header(),
                                                body: s ? ja.freePoints.bodyExceptExtra() : ja.freePoints.body(),
                                            },
                                            o().createElement('div', { className: Ga.infoHover }),
                                        ),
                                    ),
                                ),
                        ),
                        o().createElement(
                            'div',
                            { className: l()(Ga.buttonWrapper, v && Ga.buttonWrapper__multiCurrency) },
                            o().createElement(
                                et.i,
                                { body: F },
                                o().createElement(
                                    xt,
                                    { type: S, size: f, mixClass: Ga.button, onClick: a.confirm },
                                    A && o().createElement('div', { className: Ga.blink }),
                                    D,
                                ),
                            ),
                            v &&
                                o().createElement(
                                    et.i,
                                    { body: za.footer.multicurrencyTooltip() },
                                    o().createElement('div', { className: Ga.multicurrencyIcon }),
                                ),
                        ),
                    );
                });
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
                function Za() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                let Xa;
                !(function (e) {
                    ((e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'));
                })(Xa || (Xa = {}));
                var Ka = a(8596),
                    Qa = a(5262);
                function Ja(e, t, a) {
                    const u = (0, s.useContext)(r.YN);
                    let n = Object.entries(u).filter(([e, t]) => !0 === t && e in Qa.u);
                    return (
                        a && (n = n.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const u = n.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, se.e)(t))(a, e[0])]),
                            );
                            return ((e[a] = l()(t[a], ...u)), e);
                        }, {})
                    );
                }
                const eu = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let tu;
                !(function (e) {
                    ((e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info'));
                })(tu || (tu = {}));
                (0, s.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: u,
                        leftSubText: n,
                        leftButtonType: r,
                        onClose: i,
                        onLeftButtonClick: c,
                        isHideButtons: d = !1,
                    }) => {
                        const _ = Ja(['leftBlock', 'rightBlock'], eu),
                            m = (0, s.useState)(d),
                            E = m[0],
                            g = m[1];
                        (0, s.useEffect)(() => g(!d), [d]);
                        const p = (0, s.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            b = l()(eu.container, E && eu.container__shown);
                        return o().createElement(
                            'div',
                            { className: eu.base, style: p },
                            o().createElement(
                                'div',
                                { className: b },
                                Boolean(a) &&
                                    o().createElement(
                                        'div',
                                        { className: _.leftBlock },
                                        o().createElement(Ie, {
                                            caption: a || '',
                                            goto: n,
                                            type: r,
                                            side: 'left',
                                            onClick: c,
                                        }),
                                    ),
                                Boolean(t) &&
                                    o().createElement(
                                        'div',
                                        { className: _.rightBlock },
                                        o().createElement(Ie, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            o().createElement('div', { className: eu.view }, u),
                        );
                    },
                );
                var au = a(2432);
                const uu = 'Header_base_6a',
                    nu = 'Header_labels_ec',
                    ru = 'Header_title_3d',
                    su = 'Header_chapterWrapper_6c',
                    ou = 'Header_chapterText_57',
                    iu = 'Header_chapterText__overflow_ce',
                    lu = 'Header_chapterStatus_2e',
                    cu = 'Header_date_f2',
                    du = 'Header_titleButtons_e8',
                    _u = 'Header_titleButton_5f',
                    mu = 'Header_logo_84',
                    Eu = 'Header_awards_92',
                    gu = 'Header_flag_3d',
                    pu = 'Header_flag__isChapterChosen_ea',
                    bu = 'Header_flag__isChapterNotChosen_d8',
                    hu = 'Header_emblem_56',
                    Au = 'Header_emblem__isChapterNotChosen_fd',
                    vu = 'Header_chapterLogoIcon_6b';
                function fu(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                function Cu(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, n) {
                            var r = e.apply(t, a);
                            function s(e) {
                                fu(r, u, n, s, o, 'next', e);
                            }
                            function o(e) {
                                fu(r, u, n, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let Du;
                !(function (e) {
                    ((e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium'));
                })(Du || (Du = {}));
                const Fu = R.strings.battle_pass,
                    Bu = 'auto',
                    wu = (0, k.Pi)(() => {
                        const e = Ne(),
                            t = e.controls,
                            a = e.model,
                            u = a.root.get(),
                            n = u.chapterID,
                            r = u.chapterState,
                            i = u.seasonNum,
                            c = u.expireTime,
                            d = u.currentLevel,
                            m = u.isBattlePassPurchased,
                            E = u.currentPointsInChapter,
                            g = u.timeLeft,
                            p = u.chapterType,
                            b = [N.NotStarted, N.Paused],
                            h = (0, s.useState)(!1),
                            A = h[0],
                            v = h[1],
                            f = (0, s.useState)(Bu),
                            C = f[0],
                            D = f[1],
                            F = (0, _.GS)().mediaSize,
                            B = F <= _.cJ.Medium ? me.$u.Small : me.$u.Medium,
                            S = F <= _.cJ.Medium ? viewEnv.pxToRem(Du.Small) : viewEnv.pxToRem(Du.Medium),
                            y = (0, s.useRef)(null),
                            P = (0, s.useRef)(null),
                            k =
                                (R = r) === N.Paused
                                    ? Fu.progression.header.paused()
                                    : R === N.NotStarted
                                      ? Fu.progression.header.inactive()
                                      : void 0;
                        var R;
                        const T = (0, s.useRef)(0),
                            x = r === N.Completed,
                            I = p === L.EXTRA,
                            M = p === L.HOLIDAY,
                            O = () => (x ? me.Bq.Completed : m ? me.Bq.Bought : me.Bq.Free),
                            $ = { level: d, from: E },
                            W = r === N.Active,
                            H = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))($) || r !== N.NotStarted,
                            G = H && O() !== me.Bq.Completed,
                            z = O() === me.Bq.Bought,
                            U = Math.trunc(g / 86400),
                            j = Fu.chapter.fullName.$num(n),
                            V = a.computes.regularBattlePass()
                                ? (0, se.uF)(Fu.progression.season.end.normal(), {
                                      seasonNum: (0, at.cg)(i),
                                      seasonName: Fu.season.fullName.$num(i),
                                      endDate: de(c, Xa.DayMonthFull),
                                  })
                                : (0, se.uF)(Fu.progression.season.end.special(), {
                                      endTime: de(c, Xa.DayMonthFullTime),
                                  }),
                            q = (0, se.uF)(Fu.progression.seasonEndingTooltip(), { day: U }),
                            Y = (0, se.uF)(Fu.progression.header.chapter.status(), { chapterName: j }),
                            Z = (0, s.useCallback)(
                                (e) => {
                                    e > T.current && (T.current = e);
                                },
                                [T],
                            ),
                            X = (0, s.useCallback)(
                                Cu(function* () {
                                    (yield (0, w.Eu)(), yield Za());
                                    const e = y.current,
                                        t = P.current;
                                    e &&
                                        t &&
                                        (Z(t.offsetWidth),
                                        k
                                            ? (v(T.current >= e.offsetWidth - S),
                                              D(e.offsetWidth / viewEnv.getScale() - S + 'rem'))
                                            : (v(T.current >= e.offsetWidth), D(Bu)));
                                }),
                                [Z, k, S],
                            );
                        return (
                            (0, s.useEffect)(
                                () => (
                                    X(),
                                    engine.on('clientResized', X),
                                    () => {
                                        engine.off('clientResized', X);
                                    }
                                ),
                                [r],
                            ),
                            o().createElement(
                                'div',
                                { className: uu },
                                o().createElement(
                                    'div',
                                    { className: mu },
                                    o().createElement('div', {
                                        className: l()(gu, G && pu, b.includes(r) && bu),
                                        style: (0, Me.fW)(n, B),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: l()(hu, b.includes(r) && Au) },
                                        o().createElement(Ka.G4, {
                                            progression: $,
                                            size: B,
                                            battlePassState: O(),
                                            hasBattlePass: m,
                                            isChapterChosen: W,
                                            isProgression: !0,
                                            chapterID: n,
                                            hasBeenActive: H,
                                            showProgressBar: !1,
                                            isOpen: G,
                                            isExtra: I || M,
                                            seasonNum: i,
                                        }),
                                        G && o().createElement('div', { className: vu, style: (0, Me.cs)(n, z, B) }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: nu },
                                    o().createElement(
                                        'div',
                                        { className: ru },
                                        o().createElement(
                                            et.i,
                                            { body: q, isEnabled: Boolean(g) },
                                            o().createElement('div', { className: cu }, V),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: su, ref: y },
                                            o().createElement(
                                                'div',
                                                { style: { maxWidth: `${C}` } },
                                                o().createElement(
                                                    et.i,
                                                    { body: Y, isEnabled: A },
                                                    o().createElement(
                                                        'div',
                                                        { className: l()(ou, A && iu), ref: P },
                                                        Y,
                                                    ),
                                                ),
                                            ),
                                            k && o().createElement('div', { className: lu }, k),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: du },
                                            o().createElement(
                                                'div',
                                                { className: _u },
                                                o().createElement(Ie, {
                                                    caption: I ? Fu.progression.aboutExtra() : Fu.progression.about(),
                                                    type: tu.Info,
                                                    onClick: t.openAbout,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: _u },
                                                o().createElement(Ie, {
                                                    caption: Fu.howToEarnPoints.title(),
                                                    type: tu.Info,
                                                    onClick: t.openInfo,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Eu },
                                    o().createElement(au.Z, { context: 'model.awardsWidget' }),
                                ),
                            )
                        );
                    }),
                    Su = {
                        base: 'Progression_base_52',
                        base__isLayoutWithExtraWidget: 'Progression_base__isLayoutWithExtraWidget_53',
                        scrollWrapper: 'Progression_scrollWrapper_3a',
                        wrapper: 'Progression_wrapper_0f',
                        section__last: 'Progression_section__last_4d',
                        divider: 'Progression_divider_4e',
                        dividerContent: 'Progression_dividerContent_82',
                        dividerText: 'Progression_dividerText_8c',
                        progressContainer: 'Progression_progressContainer_7f',
                        progress: 'Progression_progress_c8',
                        progress__inactive: 'Progression_progress__inactive_b8',
                        progressBackground: 'Progression_progressBackground_8c',
                        progressBackground__disabled: 'Progression_progressBackground__disabled_0b',
                        progressBackground__finished: 'Progression_progressBackground__finished_0e',
                        decor: 'Progression_decor_7f',
                        decorBackground: 'Progression_decorBackground_4c',
                        decor__left: 'Progression_decor__left_4e',
                        row: 'Progression_row_2c',
                        row__basic: 'Progression_row__basic_05',
                        bookmark: 'Progression_bookmark_78',
                        bookmark__start: 'Progression_bookmark__start_e7',
                        bookmarkLeftFixed: 'Progression_bookmarkLeftFixed_6c',
                        bookmarkLeftFixed__active: 'Progression_bookmarkLeftFixed__active_3b',
                        bookmarkLeftResponsive: 'Progression_bookmarkLeftResponsive_c3',
                        bookmarkBackground: 'Progression_bookmarkBackground_d6',
                        scrollToButton: 'Progression_scrollToButton_38',
                        scrollToButton__visible: 'Progression_scrollToButton__visible_47',
                        scrollToButton__forward: 'Progression_scrollToButton__forward_18',
                        scrollToButton__backward: 'Progression_scrollToButton__backward_1f',
                        arrowButton: 'Progression_arrowButton_ad',
                        progressionToButton: 'Progression_progressionToButton_3b',
                        progressionToButton__hidden: 'Progression_progressionToButton__hidden_29',
                        progressionToButton__back: 'Progression_progressionToButton__back_a8',
                        progressionToButton__forward: 'Progression_progressionToButton__forward_ce',
                        shadow: 'Progression_shadow_4a',
                        shadow__left: 'Progression_shadow__left_e1',
                        shadow__right: 'Progression_shadow__right_f8',
                        additionalShadow: 'Progression_additionalShadow_69',
                        additionalShadow__active: 'Progression_additionalShadow__active_80',
                        scrollBarPosition: 'Progression_scrollBarPosition_40',
                        fadeOut: 'Progression_fadeOut_7c',
                        fadeIn: 'Progression_fadeIn_1d',
                        fadeInWithScale: 'Progression_fadeInWithScale_74',
                        slideUp: 'Progression_slideUp_a2',
                        scale: 'Progression_scale_a8',
                        rotate: 'Progression_rotate_1c',
                    };
                var yu = a(7515),
                    Pu = a(3815);
                function ku(e, t, a = []) {
                    const u = (0, s.useRef)(0),
                        n = (0, s.useCallback)(() => window.clearInterval(u.current), a || []);
                    (0, s.useEffect)(() => n, [n]);
                    const r = (null != a ? a : []).concat([t]);
                    return [
                        (0, s.useCallback)((a) => {
                            ((u.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, r),
                        n,
                    ];
                }
                function Ru(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Nu(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Nu(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Nu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                function Tu(e, t, a) {
                    const u = (0, s.useMemo)(
                        () =>
                            (function (e, t, a, u) {
                                let n,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        ((s = Date.now()), a.apply(l, i));
                                    }
                                    r ||
                                        (u && !n && d(),
                                        o(),
                                        void 0 === u && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  u
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : d,
                                                  void 0 === u ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((u = a), (a = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (o(), (r = !0));
                                    }),
                                    i
                                );
                            })(a, e),
                        t,
                    );
                    return ((0, s.useEffect)(() => u.cancel, [u]), u);
                }
                var Lu = a(7030);
                let xu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(xu || (xu = {}));
                const Iu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Mu = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: u,
                        getWrapperSize: n,
                        forceTriggerMouseMove: r,
                    }) => {
                        const o = (e, a) => {
                            const u = t(e),
                                n = u[0],
                                r = u[1];
                            return r <= n ? 0 : (0, yu.u)(n, r, a);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Iu : l,
                                d = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                m = (0, s.useRef)(!1),
                                E = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        u = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        n = (e, ...a) => {
                                            for (var u, n = Ru(t(e).values()); !(u = n()).done; ) (0, u.value)(...a);
                                        };
                                    return (0, s.useMemo)(() => ({ on: a, off: u, trigger: n }), []);
                                })(),
                                g = Tu(
                                    () => {
                                        r && r();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Lu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), E.trigger('change', e), r && m.current && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                b = p[0],
                                h = p[1],
                                A = (0, s.useCallback)(
                                    (e, t, a) => {
                                        var u;
                                        const n = b.scrollPosition.get(),
                                            r = (null != (u = b.scrollPosition.goal) ? u : 0) - n;
                                        return o(e, t * a + r + n);
                                    },
                                    [b.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const u = d.current;
                                        u &&
                                            h.start({
                                                scrollPosition: o(u, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(u, b.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, b.scrollPosition],
                                ),
                                f = (0, s.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = _.current;
                                        if (!t || !a) return;
                                        const u = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            r = A(t, e, u);
                                        v(r);
                                    },
                                    [v, A, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && f(u(e)),
                                            d.current && E.trigger('mouseWheel', e, b.scrollPosition, t(d.current)));
                                    },
                                    [b.scrollPosition, f, E],
                                ),
                                F = ((e, t = []) => {
                                    const a = (0, s.useRef)(),
                                        u = (0, s.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [u],
                                        ),
                                        u
                                    );
                                })(
                                    () =>
                                        D(() => {
                                            const e = d.current;
                                            e &&
                                                (v(o(e, b.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, b.scrollPosition.goal],
                                ),
                                B = (0, Pu.z)(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
                                });
                            ((0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', F),
                                    () => {
                                        window.removeEventListener('resize', F);
                                    }
                                ),
                                [F],
                            ),
                                (0, s.useEffect)(() => {
                                    const e = d.current;
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
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', a));
                                        }
                                    );
                                }, [d]));
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: v,
                                    applyStepTo: f,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: h,
                                    animationScroll: b,
                                    recalculateContent: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [b.scrollPosition, v, f, E.off, E.on, B, C, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ou = Mu({
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
                        getDirection: (e) => (e.deltaY > 1 ? xu.Next : xu.Prev),
                        forceTriggerMouseMove: F.O.view.forceTriggerMouseMove,
                    }),
                    $u = 'HorizontalBar_base_49',
                    Wu = 'HorizontalBar_base__nonActive_82',
                    Hu = 'HorizontalBar_leftButton_5f',
                    Gu = 'HorizontalBar_rightButton_03',
                    zu = 'HorizontalBar_track_0d',
                    Uu = 'HorizontalBar_thumb_fd',
                    ju = 'HorizontalBar_rail_32',
                    Vu = 'disable',
                    qu = { pending: !1, offset: 0 },
                    Yu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Zu = () => {},
                    Xu = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ku = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Yu, onDrag: u = Zu }) => {
                        const n = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(qu),
                            E = m[0],
                            g = m[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [u],
                            ),
                            b = () => {
                                const t = c.current,
                                    a = d.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, u / n),
                                    l = (0, yu.u)(0, 1, s / (n - u)),
                                    _ = (t.offsetWidth - Xu(t, o)) * l;
                                ((a.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(Vu),
                                                    void i.current.classList.remove(Vu)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(Vu),
                                                    void i.current.classList.add(Vu)
                                                );
                                            var t, a;
                                            (r.current.classList.remove(Vu), i.current.classList.remove(Vu));
                                        }
                                    })(_));
                            },
                            h = (0, Pu.z)(() => {
                                ((() => {
                                    const t = d.current,
                                        a = c.current,
                                        u = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && u && a)) return;
                                    const s = Math.min(1, u / r);
                                    ((t.style.width = `${Xu(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(Wu) : n.current.classList.remove(Wu)));
                                })(),
                                    b());
                            });
                        ((0, s.useEffect)(() => D(h)),
                            (0, s.useEffect)(
                                () =>
                                    D(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let a = Zu;
                                        const u = () => {
                                            (a(), (a = D(h)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', u),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', u));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = F.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - o.getBoundingClientRect().x,
                                            _ = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            u({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: _ }));
                                    }),
                                    a = F.O.client.events.mouse.up(() => {
                                        (t(), p(qu));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, E.offset, E.pending, u, p]));
                        const A = ku((t) => e.applyStepTo(t), _, [e]),
                            v = A[0],
                            f = A[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Vu) || (0, P.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()($u, t.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Hu, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Vu) || 0 !== e.button || ((0, P.G)('play'), v(xu.Next));
                                },
                                onMouseUp: f,
                                ref: r,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(zu, t.track),
                                    onMouseDown: (t) => {
                                        const u = d.current;
                                        if (u && 0 === t.button)
                                            if (((0, P.G)('play'), t.target === u))
                                                p({ pending: !0, offset: t.screenX - u.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const u = d.current,
                                                        n = e.contentRef.current;
                                                    if (!u || !n) return;
                                                    const r = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > u.getBoundingClientRect().x ? xu.Prev : xu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: d, className: l()(Uu, t.thumb) }),
                                o().createElement('div', { className: l()(ju, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Gu, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Vu) || 0 !== e.button || ((0, P.G)('play'), v(xu.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Qu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ju = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: n,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: l()(Qu.base, e.base) });
                            }, [u]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(Qu.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Qu.defaultScrollArea, n) },
                                o().createElement(en, { className: i, api: m, classNames: r }, e),
                            ),
                            o().createElement(Ku, { getStepByRailClick: c, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    en = ({ api: e, className: t, classNames: a, children: u }) => (
                        (0, s.useEffect)(() => D(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Qu.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: l()(Qu.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(Qu.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    );
                ((en.Bar = Ku), (en.Default = Ju));
                const tn = Mu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? xu.Next : xu.Prev),
                    }),
                    an = 'VerticalBar_base_f3',
                    un = 'VerticalBar_base__nonActive_42',
                    nn = 'VerticalBar_topButton_d7',
                    rn = 'VerticalBar_bottomButton_06',
                    sn = 'VerticalBar_track_df',
                    on = 'VerticalBar_thumb_32',
                    ln = 'VerticalBar_rail_43',
                    cn = 'disable',
                    dn = () => {},
                    _n = { pending: !1, offset: 0 },
                    mn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    En = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    gn = (e, t) => Math.max(20, e.offsetHeight * t),
                    pn = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = mn, onDrag: u = dn }) => {
                        const n = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(_n),
                            E = m[0],
                            g = m[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [u],
                            ),
                            b = (0, Pu.z)(() => {
                                const t = d.current,
                                    a = c.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && r && t && a)) return;
                                const s = Math.min(1, u / r);
                                return (
                                    (t.style.height = `${gn(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(un) : n.current.classList.remove(un)),
                                    s
                                );
                            }),
                            h = (0, Pu.z)(() => {
                                const t = c.current,
                                    a = d.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, u / n),
                                    l = (0, yu.u)(0, 1, s / (n - u)),
                                    _ = (t.offsetHeight - gn(t, o)) * l;
                                ((a.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    r.current.classList.add(cn),
                                                    void i.current.classList.remove(cn)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(cn),
                                                    void i.current.classList.add(cn)
                                                );
                                            var t, a;
                                            (r.current.classList.remove(cn), i.current.classList.remove(cn));
                                        }
                                    })(_));
                            }),
                            A = (0, Pu.z)(() => {
                                En(e, () => {
                                    (b(), h());
                                });
                            });
                        ((0, s.useEffect)(() => D(A)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    En(e, () => {
                                        h();
                                    });
                                };
                                let a = dn;
                                const u = () => {
                                    (a(), (a = D(A)));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', u),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', u));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = F.O.client.events.mouse.up(() => {
                                        p(_n);
                                    }),
                                    a = F.O.client.events.mouse.move(([t]) => {
                                        En(e, (a) => {
                                            const n = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const o = t.screenY - E.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                u({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, E.offset, E.pending, u, p]));
                        const v = ku((t) => e.applyStepTo(t), _, [e]),
                            f = v[0],
                            C = v[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const B = (e) => {
                            e.target.classList.contains(cn) || (0, P.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(an, t.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(nn, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(cn) || 0 !== e.button || ((0, P.G)('play'), f(xu.Next));
                                },
                                ref: r,
                                onMouseEnter: B,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(sn, t.track),
                                    onMouseDown: (t) => {
                                        const u = d.current;
                                        if (u && 0 === t.button)
                                            if (((0, P.G)('play'), t.target === u))
                                                p({ pending: !0, offset: t.screenY - u.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        En(e, (u) => {
                                                            if (!u) return;
                                                            const n = a(e),
                                                                r = e.clampPosition(u, u.scrollTop + n * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > u.getBoundingClientRect().y ? xu.Prev : xu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                o().createElement('div', { ref: d, className: l()(on, t.thumb) }),
                                o().createElement('div', { className: l()(ln, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(rn, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(cn) || 0 !== e.button || ((0, P.G)('play'), f(xu.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    bn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    hn = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: n,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: l()(bn.base, e.base) });
                            }, [u]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(bn.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(bn.area, n) },
                                o().createElement(An, { className: r, classNames: i, api: m }, e),
                            ),
                            o().createElement(pn, { getStepByRailClick: c, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    An = ({ className: e, classNames: t, children: a, api: u }) => (
                        (0, s.useEffect)(() => D(u.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(bn.base, e), ref: u.wrapperRef, onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(bn.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                a,
                            ),
                        )
                    );
                An.Default = hn;
                const vn = { Vertical: n, Horizontal: u };
                let fn;
                !(function (e) {
                    ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'));
                })(fn || (fn = {}));
                const Cn = { type: fn.Idle };
                let Dn;
                !(function (e) {
                    ((e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton'));
                })(Dn || (Dn = {}));
                const Fn = {
                        base: 'ArrowButton_base_8c',
                        base__gray: 'ArrowButton_base__gray_bd',
                        icon: 'ArrowButton_icon_af',
                        icon__4k: 'ArrowButton_icon__4k_23',
                        icon__back: 'ArrowButton_icon__back_28',
                        icon__forward: 'ArrowButton_icon__forward_ff',
                    },
                    Bn = ({ onClick: e, direction: t, type: a = ye.Default, className: u, tooltipBody: n }) => {
                        const r = (0, s.useCallback)(() => {
                                (0, P.G)('highlight');
                            }, []),
                            i = (0, s.useCallback)(() => {
                                ((0, P.G)('bp_slide'), e());
                            }, [e]);
                        return o().createElement(
                            et.i,
                            { body: n },
                            o().createElement(
                                'div',
                                { className: l()(Fn.base, Fn[`base__${a}`], u), onClick: i, onMouseEnter: r },
                                o().createElement('div', {
                                    className: l()(Fn.icon, Fn[`icon__${t}`], 2 === F.O.view.getScale() && Fn.icon__4k),
                                }),
                            ),
                        );
                    },
                    wn = 'Bookmark_base_cc',
                    Sn = 'Bookmark_container_72',
                    yn = 'Bookmark_container__start_b1',
                    Pn = 'Bookmark_container__wide_14',
                    kn = 'Bookmark_textWrapper_46',
                    Rn = 'Bookmark_withTooltip_58',
                    Nn = 'Bookmark_text_6f',
                    Tn = 'Bookmark_text__basic_01',
                    Ln = 'Bookmark_text__premium_b8',
                    xn = 'Bookmark_text__single_a0',
                    In = 'Bookmark_text__wide_4c',
                    Mn = 'Bookmark_text__disappeared_f2',
                    On = 'Bookmark_textInner_b4',
                    $n = 'Bookmark_leftTextLine_0a',
                    Wn = 'Bookmark_rightTextLine_37',
                    Hn = ({ isWide: e, isDecorated: t }) =>
                        o().createElement(
                            'div',
                            { className: l()(Nn, xn, e && In) },
                            t && o().createElement('div', { className: $n }),
                            o().createElement(
                                'div',
                                { className: On },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && o().createElement('div', { className: Wn }),
                        ),
                    Gn = (0, s.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: u,
                                chapterStep: n,
                                mixClass: r,
                            },
                            i,
                        ) => {
                            const c = (0, s.useRef)(null);
                            (0, s.useImperativeHandle)(i, () => ({
                                width: () => {
                                    const e = c.current;
                                    if (e) {
                                        const t = window.getComputedStyle(e, null).getPropertyValue('width');
                                        return Number(t.split('rem')[0]);
                                    }
                                    return 0;
                                },
                            }));
                            const d = (0, se.uF)(R.strings.battle_pass.tooltips.postProgress.body(), {
                                chapterStep: n,
                            });
                            return o().createElement(
                                'div',
                                { className: l()(wn, r), ref: c },
                                o().createElement(
                                    'div',
                                    { className: l()(Sn, e && Pn, !e && yn) },
                                    e
                                        ? o().createElement(
                                              et.i,
                                              { body: a, header: u, isEnabled: 'string' == typeof a },
                                              o().createElement(
                                                  'div',
                                                  { className: Rn },
                                                  o().createElement(Hn, { isWide: e, isDecorated: !0 }),
                                              ),
                                          )
                                        : o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: kn },
                                                  o().createElement(
                                                      et.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: d,
                                                      },
                                                      o().createElement(Hn, { isWide: e }),
                                                  ),
                                              ),
                                              o().createElement(
                                                  tt.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      { className: l()(Nn, Ln) },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: l()(Nn, Tn, t && Mn) },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                var zn = a(1975),
                    Un = a(7442),
                    jn = a(156);
                const Vn = 'OptimizedProgressBar_base_1f',
                    qn = 'OptimizedProgressBar_wrapper_ab',
                    Yn = 'OptimizedProgressBar_background_ce';
                var Zn = a(7736);
                const Xn = ['api', 'value', 'maxValue', 'theme'];
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                const Qn = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Jn = (e) => {
                        let t = e.api,
                            a = e.value,
                            u = e.maxValue,
                            n = void 0 === u ? 100 : u,
                            r = e.theme,
                            i = void 0 === r ? zn.uH : r,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    r = Object.keys(e);
                                for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                                return n;
                            })(e, Xn);
                        const c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            m = (0, yu.u)(0, a, n) / n,
                            E = (0, s.useCallback)(
                                (e) => {
                                    (_.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, u) => {
                                            const n = a.offsetWidth - u.offsetWidth,
                                                r = e - Qn(a, t),
                                                s = (0, yu.u)(0, n, r);
                                            u.style.left = `${s}px`;
                                        })(e, c.current, _.current),
                                        d.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: u, line: n },
                                            ) => {
                                                const r = Math.max(0, Math.floor(u.offsetWidth * a) - 8e3),
                                                    s = e - Qn(u, t),
                                                    o = (0, yu.u)(0, r, s);
                                                n.style.left = `${o}px`;
                                            })(e, m, { line: d.current, container: c.current }));
                                },
                                [m],
                            ),
                            g = (0, s.useMemo)(() => (0, jn.VQ)(i), [i]);
                        return (
                            (t.current.update = E),
                            o().createElement(
                                'div',
                                { className: Vn, ref: c },
                                o().createElement(
                                    'div',
                                    { className: qn },
                                    o().createElement(
                                        'div',
                                        { style: g, className: Yn, ref: _ },
                                        o().createElement(Un.J, { size: l.size }),
                                    ),
                                    o().createElement(
                                        zn.ko,
                                        Kn({}, l, {
                                            lineRef: d,
                                            value: a,
                                            theme: i,
                                            maxValue: n,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
                var er = a(1481);
                const tr = 'VehicleInfo_base_b3',
                    ar = 'VehicleInfo_prefix_f6',
                    ur = 'VehicleInfo_type_1b',
                    nr = R.strings.battle_pass.progression.widget3dStyle,
                    rr = (0, s.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u }) => {
                        const n = (0, s.useMemo)(() => {
                            const e = (0, se.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${u ? '_elite' : ''}`)})`,
                            };
                        }, [a, u]);
                        return o().createElement(
                            'div',
                            { className: tr },
                            o().createElement('div', { className: ar }, nr.forVehicle()),
                            (0, at.cg)(e),
                            o().createElement('div', { className: ur, style: n }),
                            t,
                        );
                    }),
                    sr = 'Widget3dStyle_base_ae',
                    or = 'Widget3dStyle_title_20',
                    ir = 'Widget3dStyle_base__closedChapter_d4',
                    lr = 'Widget3dStyle_box_f8',
                    cr = 'Widget3dStyle_light_82',
                    dr = 'Widget3dStyle_image_f7',
                    _r = 'Widget3dStyle_previewButton_03',
                    mr = 'Widget3dStyle_box__hovered_c3',
                    Er = 'Widget3dStyle_footer_b9',
                    gr = 'Widget3dStyle_caption_2b',
                    pr = R.strings.battle_pass.progression.widget3dStyle;
                let br;
                !(function (e) {
                    ((e.None = ''), (e.Small = '_small'), (e.Medium = '_medium'));
                })(br || (br = {}));
                const hr = (0, k.Pi)(({ widget3dStyleRef: e, level: t, isShowTitle: a }) => {
                        const u = (0, s.useState)(!1),
                            n = u[0],
                            r = u[1],
                            i = Ne(),
                            c = i.controls,
                            d = i.model,
                            m = d.root.get(),
                            E = m.chapterState,
                            g = m.isStyleTaken,
                            p = d.widget3dStyle.get(),
                            b = p.styleName,
                            h = p.styleId,
                            A = ((e, t) => (2 !== t ? (e <= _.cJ.Small ? br.Small : br.Medium) : br.None))(
                                (0, _.GS)().mediaSize,
                                viewEnv.getScale(),
                            ),
                            v = ((e, t, a) => {
                                const u = `style_3d_${e}_${t}${a}`;
                                return {
                                    backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(u)})`,
                                };
                            })(t, h, A),
                            f = (0, se.uF)(pr.currentStyle(), { name: b }),
                            C = (0, s.useCallback)(() => {
                                c.open3dStylePreview(t);
                            }, [c, t]);
                        return o().createElement(
                            'div',
                            { className: l()(sr, E === N.Completed && ir), ref: e },
                            !g && a && o().createElement('div', { className: or }, pr.titleNoChapterSelected()),
                            o().createElement(
                                'div',
                                { className: l()(lr, n && mr), onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
                                !g && t === co && o().createElement('div', { className: cr }),
                                o().createElement('div', { className: dr, style: v }),
                                o().createElement('div', { className: _r }, o().createElement(er.k, { onClick: C })),
                            ),
                            o().createElement(
                                'div',
                                { className: Er },
                                o().createElement('div', { className: gr }, f),
                                o().createElement(rr, d.widget3dStyleVehicleInfo.get()),
                            ),
                        );
                    }),
                    Ar = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: u,
                        totalPointsInLevel: n,
                        currentLevel: r,
                    }) => (e > r ? a + t * (e - 2) + t * (u / n) : (e - 1) * t + a * (u / n)),
                    vr = (e) => e + 1,
                    fr = (0, k.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            level: n,
                            previousLevel: r,
                            currentPointsInLevel: i,
                            previousPointsInLevel: l,
                            currentPointsInChapter: c,
                            previousPointsInChapter: d,
                            theme: _,
                        }) => {
                            const m = Ne().model,
                                E = m.root.get(),
                                g = E.isPaused,
                                p = E.showLevelsAnimations,
                                b = E.currentLevel,
                                h = m.levels.get(),
                                A = (0, s.useState)(0),
                                v = A[0],
                                f = A[1],
                                C = (0, s.useRef)(-1),
                                F = (0, s.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                B = F[0],
                                w = B.previousBaseEarnedPoints,
                                S = B.maxBasePoints,
                                y = B.baseProgressionSize,
                                P = F[1];
                            (0, s.useEffect)(() => {
                                if (g) return;
                                const e = C.current !== d,
                                    t = e ? r : n,
                                    s = u + (h.length - 1) * a,
                                    o = h[t - 1],
                                    _ = n <= h.length ? n - 1 : h.length - 1,
                                    m = h[_].value.levelPoints,
                                    E = Ar({
                                        level: n,
                                        levelWidth: a,
                                        currentLevelWidth: u,
                                        pointsInLevel: i,
                                        totalPointsInLevel: m,
                                        currentLevel: b,
                                    }),
                                    p = o ? o.value.levelPoints : 0,
                                    A = Ar({
                                        level: t > n ? n : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < b ? a : u,
                                        pointsInLevel: l,
                                        totalPointsInLevel: p,
                                        currentLevel: b,
                                    }),
                                    v = e && t <= n ? A : E;
                                (d !== c && a && (C.current = d),
                                    P({ maxBasePoints: s, previousBaseEarnedPoints: v, baseProgressionSize: E }));
                            }, [g, a, u, n, r, c, l, i, d, b, h]);
                            const k = (0, s.useMemo)(
                                () =>
                                    Object.assign({}, zn.uu, {
                                        withStack: !0,
                                        type: Zn.r.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, s.useEffect)(() => {
                                    const e = b !== r || i !== l;
                                    if (!p && (e || c === d))
                                        return e && -1 === C.current
                                            ? (0, Yt.F)(() => {
                                                  f(vr);
                                              }, 700)
                                            : void 0;
                                    f(vr);
                                }, [c, d, p]),
                                (0, s.useEffect)(() => {
                                    if (p)
                                        return D(() => {
                                            t && t();
                                        });
                                }, [t, p]),
                                o().createElement(Jn, {
                                    key: v,
                                    animationSettings: k,
                                    deltaFrom: w,
                                    value: y,
                                    maxValue: S || void 0,
                                    api: e,
                                    theme: _,
                                })
                            );
                        },
                    ),
                    Cr = R.strings.battle_pass.tooltips.progression.freePoints,
                    Dr = (0, k.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            progressChange: n,
                        }) => {
                            const r = Ne().model,
                                i = r.root.get(),
                                c = i.chapterState,
                                d = i.currentLevel,
                                _ = i.previousLevel,
                                m = i.currentPointsInLevel,
                                E = i.previousPointsInLevel,
                                g = i.currentPointsInChapter,
                                p = i.previousPointsInChapter,
                                b = i.freePointsInLevel,
                                h = i.freePointsInChapter,
                                A = i.previousFreePointsInChapter,
                                v = i.previousFreePointsInLevel,
                                f = i.potentialLevel,
                                C = i.previousPotentialLevel,
                                D = r.levels.get(),
                                B = (() => {
                                    const e = (0, s.useState)(F.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, s.useEffect)(() => {
                                            const e = () => {
                                                a(F.O.view.getScale());
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
                                w = (c === N.NotStarted || c === N.Paused) && h - g > 0,
                                S = r.computes.getTotalLevelPoints(),
                                y = r.computes.getCurrentWidth(a, u, B, S),
                                P = g >= D.length * S,
                                k = {
                                    '--progress-line-base': jn.Gh.line.bgColorBase,
                                    '--progress-line-disabled': jn.Gh.line.bgColorDisabled,
                                    '--progress-line-finished': jn.Gh.line.bgColorFinished,
                                };
                            return o().createElement(
                                'div',
                                { className: Su.progressContainer },
                                w &&
                                    o().createElement(
                                        et.i,
                                        { header: Cr.header(), body: Cr.body() },
                                        o().createElement(
                                            'div',
                                            { className: Su.progress },
                                            o().createElement(fr, {
                                                api: t,
                                                progressChange: n,
                                                levelWidth: a,
                                                currentLevelWidth: u,
                                                level: f,
                                                previousLevel: C,
                                                currentPointsInLevel: b,
                                                previousPointsInLevel: v,
                                                currentPointsInChapter: h,
                                                previousPointsInChapter: A,
                                                theme: jn.fV,
                                            }),
                                        ),
                                    ),
                                o().createElement('div', {
                                    className: l()(Su.progressBackground, P && Su.progressBackground__finished),
                                    style: Object.assign({ width: `${y}rem` }, k),
                                }),
                                o().createElement(
                                    tt.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    o().createElement(
                                        'div',
                                        { className: l()(Su.progress, w && Su.progress__inactive) },
                                        o().createElement(fr, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: u,
                                            level: d,
                                            previousLevel: _,
                                            currentPointsInLevel: m,
                                            previousPointsInLevel: E,
                                            currentPointsInChapter: g,
                                            previousPointsInChapter: p,
                                            progressChange: n,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Fr = 'Background_base_f7',
                    Br = 'Background_default_c1',
                    wr = 'Background_base__premium_e1',
                    Sr = 'Background_rare_b6',
                    yr = 'Background_rareBg_ee',
                    Pr = 'Background_pattern_81',
                    kr = 'Background_pattern__left_86',
                    Rr = 'Background_pattern__right_c6',
                    Nr = 'Background_pattern__leftIndent_14',
                    Tr = 'Background_pattern__rightIndent_48',
                    Lr = 'Background_pattern__completed_20',
                    xr = 'Background_disabled_ba',
                    Ir = 'Background_inProgress_68',
                    Mr = 'Background_inProgressInner_0d',
                    Or = 'Background_inProgressPart_68',
                    $r = 'Background_inProgressPart__left_76',
                    Wr = 'Background_inProgressPart__right_5b',
                    Hr = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
                    Gr = (0, k.Pi)(({ level: e, isPremium: t = !1 }) => {
                        const a = Ne().model.computes.cardStates(e, t),
                            u = a.cardStatus,
                            n = a.isRare,
                            r = a.isDisabled,
                            s =
                                u.current !== Be.IN_PROGRESS &&
                                ((e, t) => {
                                    switch (e) {
                                        case Be.NOT_STARTED:
                                            return t;
                                        case Be.COMPLETED:
                                            return !t;
                                        default:
                                            return (console.warn(`Unsupported status for isIndent: ${e}`), !1);
                                    }
                                })(u.current, t);
                        return o().createElement(
                            'div',
                            { className: l()(Fr, t && wr) },
                            o().createElement('div', { className: Br }),
                            r && o().createElement('div', { className: xr }),
                            u.current === Be.IN_PROGRESS &&
                                o().createElement(
                                    'div',
                                    { className: Ir },
                                    o().createElement('div', { className: l()(Or, $r) }),
                                    !t && o().createElement('div', { className: Mr }),
                                    o().createElement('div', { className: l()(Or, Wr) }),
                                ),
                            n &&
                                o().createElement(
                                    'div',
                                    { className: Sr },
                                    o().createElement('div', {
                                        className: l()(Pr, kr, s && Nr, u.current === Be.COMPLETED && Lr),
                                        style: { backgroundImage: Hr('left') },
                                    }),
                                    o().createElement('div', {
                                        className: l()(Pr, Rr, !s && Tr, u.current === Be.COMPLETED && Lr),
                                        style: { backgroundImage: Hr('right') },
                                    }),
                                    u.current === Be.NOT_STARTED && o().createElement('div', { className: yr }),
                                ),
                        );
                    }),
                    zr = {
                        base: 'Stage_base_46',
                        base__rewardTaken: 'Stage_base__rewardTaken_fc',
                        number: 'Stage_number_1f',
                        animatedNumber: 'Stage_animatedNumber_5b',
                        numberInProgress: 'Stage_numberInProgress_69',
                        title: 'Stage_title_ee',
                        glow: 'Stage_glow_9e',
                        base__inProgress: 'Stage_base__inProgress_d9',
                        animatedGlow: 'Stage_animatedGlow_11',
                        iconFinal: 'Stage_iconFinal_70',
                    },
                    Ur = R.strings.battle_pass.progression,
                    jr = (0, k.Pi)(({ stepNumber: e, stageAnimationDelay: t, isRewardAnimationActive: a }) => {
                        const u = Ne(),
                            n = u.model,
                            r = u.controls,
                            i = n.root.get(),
                            c = i.chapterState,
                            d = i.showLevelsAnimations,
                            _ = (0, s.useState)(!1),
                            m = _[0],
                            E = _[1],
                            g = n.computes.cardStates(e, !1).cardStatus,
                            p = n.computes.isRewardNeedTake(e, !1) || n.computes.isRewardNeedTake(e, !0),
                            b = n.computes.levelInfo(e).maxLevel === e,
                            h = g.current === Be.IN_PROGRESS,
                            A = c === N.NotStarted || c === N.Paused,
                            v = g.current === Be.COMPLETED && !p && !a,
                            f = (0, Lu.useSpring)({
                                from: { stageOpacity: m ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, P.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: ge },
                            }).stageOpacity,
                            C = (0, Lu.useSpring)({
                                from: { sparkOpacity: m ? 1 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => E(!1),
                                config: { duration: 1500, easing: ge },
                            }).sparkOpacity;
                        return (
                            (0, s.useEffect)(() => {
                                if (d && h)
                                    return (0, Yt.F)(() => {
                                        (E(!0), r.finishLevelsAnimation());
                                    }, t + 100);
                            }, [d, h, t]),
                            o().createElement(
                                'div',
                                { className: l()(zr.base, zr[`base__${g.current}`], v && zr.base__rewardTaken) },
                                h &&
                                    !A &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: zr.glow }),
                                        o().createElement(Lu.animated.div, {
                                            style: { opacity: C },
                                            className: zr.animatedGlow,
                                        }),
                                    ),
                                b && o().createElement('div', { className: zr.iconFinal }),
                                h
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: zr.numberInProgress },
                                              e,
                                              o().createElement(
                                                  Lu.animated.div,
                                                  {
                                                      style: {
                                                          opacity: f,
                                                          transform: f
                                                              .to([0, 1], [2.5, 1])
                                                              .to((e) => `translate(-50%, -50%) scale(${e})`),
                                                      },
                                                      className: zr.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: zr.title },
                                              A ? Ur.pausedStep() : Ur.currentStep(),
                                          ),
                                      )
                                    : o().createElement('div', { className: zr.number }, e),
                            )
                        );
                    });
                var Vr = a(8664);
                const qr = 'ClosedStatus_base_8a',
                    Yr = 'ClosedStatus_icon_18',
                    Zr = 'ClosedStatus_icon__current_44',
                    Xr = 'ClosedStatus_icon__exit_fd',
                    Kr = 'ClosedStatus_icon__exitActive_65',
                    Qr = 'ClosedStatus_icon__exitCurrentActive_4d',
                    Jr = 'ClosedStatus_icon__exitDone_b2',
                    es = 'ClosedStatus_title_a3',
                    ts = 'ClosedStatus_title__exit_16',
                    as = 'ClosedStatus_title__exitActive_44',
                    us = 'ClosedStatus_title__exitDone_51';
                function ns() {
                    return (
                        (ns =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ns.apply(this, arguments)
                    );
                }
                const rs = (0, k.Pi)(
                        ({
                            level: e,
                            playUnlockAnimation: t = !1,
                            handleUnlockAnimationExited: a,
                            baseUnlockProps: u,
                        }) => {
                            const n = Ne().model,
                                r = n.root.get().isBattlePassPurchased,
                                s = n.computes.cardStates(e, !0).cardStatus.current === Be.IN_PROGRESS,
                                i = { exit: Xr, exitActive: s ? Qr : Kr, exitDone: Jr },
                                c = { exit: ts, exitActive: as, exitDone: us },
                                d = !r || t,
                                _ = s && d;
                            return o().createElement(
                                'div',
                                { className: qr },
                                d &&
                                    o().createElement(
                                        Vr.Z,
                                        ns({}, u, { classNames: i, onExited: a }),
                                        o().createElement('div', { className: l()(Yr, s && Zr) }),
                                    ),
                                _ &&
                                    o().createElement(
                                        Vr.Z,
                                        ns({}, u, { classNames: d ? c : {} }),
                                        o().createElement(
                                            'div',
                                            { className: es },
                                            R.strings.battle_pass.progression.currentStepLocked(),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ss = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_3f',
                        slideUp: 'CompletedStatus_slideUp_d2',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_03',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_19',
                        showUp: 'CompletedStatus_showUp_a2',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_d8',
                        icon: 'CompletedStatus_icon_b1',
                    },
                    os = ({ completedIn: e, handleCompleteGlowAnimationExited: t, children: a }) => {
                        const u = {
                            exit: ss.iconGlow__completedEnter,
                            exitActive: ss.iconGlow__completedEnterActive,
                            exitDone: ss.iconGlow__completedEnterDone,
                        };
                        return o().createElement(
                            'div',
                            { className: l()(ss.base, e && ss.base__showAnimation) },
                            o().createElement(Vr.Z, { in: !e, timeout: Bs, classNames: u, onExited: t }, a),
                            o().createElement(
                                et.i,
                                { body: ws.tooltips.completed.got() },
                                o().createElement('div', { className: ss.icon }),
                            ),
                        );
                    },
                    is = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    ls = (0, k.Pi)(() => {
                        const e = Ne().model.computes.currentLevelPoints(),
                            t = e.current,
                            a = e.total;
                        return o().createElement(
                            tt.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            o().createElement(
                                'div',
                                { className: is.base },
                                o().createElement('div', { className: l()(is.value, is.value__current) }, t),
                                o().createElement('div', { className: is.divider }, '/'),
                                o().createElement('div', { className: l()(is.value, is.value__total) }, a),
                                o().createElement('div', { className: is.icon }),
                            ),
                        );
                    }),
                    cs = 'Effects_glowWrapper_94',
                    ds = 'Effects_glow_f7',
                    _s = 'Effects_glow__active_d4',
                    ms = 'Effects_dust_5a',
                    Es = 'Effects_dust__active_b4';
                function gs() {
                    return (
                        (gs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        gs.apply(this, arguments)
                    );
                }
                const ps = ({ baseUnlockProps: e }) => {
                        const t = { exit: ds, exitActive: _s, exitDone: ds },
                            a = { exit: ms, exitActive: Es, exitDone: ms };
                        return o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Vr.Z,
                                gs({}, e, { classNames: t }),
                                o().createElement(
                                    'div',
                                    { className: cs },
                                    o().createElement('div', { className: ds }),
                                ),
                            ),
                            o().createElement(
                                Vr.Z,
                                gs({}, e, { classNames: a }),
                                o().createElement(
                                    'div',
                                    { className: cs },
                                    o().createElement('div', { className: ms }),
                                ),
                            ),
                        );
                    },
                    bs = 'Status_base_1f',
                    hs = 'Status_base__inProgress_b8',
                    As = 'Status_iconContainer_2f',
                    vs = 'Status_iconInner_30',
                    fs = 'Status_iconGlow_c5',
                    Cs = 'Status_iconGlow__completed_b9',
                    Ds = 'Status_iconGlow__hidden_24',
                    Fs = 'Status_pointsWrapper_e8',
                    Bs = 1500,
                    ws = R.strings.battle_pass,
                    Ss = R.views.lobby.battle_pass,
                    ys = (0, k.Pi)(
                        ({
                            isPremium: e,
                            playCompleteAnimation: t,
                            playUnlockAnimation: a,
                            completeAnimationDelay: u = 0,
                            unlockAnimationDelay: n = 0,
                            baseTimeout: r = 0,
                            playUnlockAnimationSound: i = !0,
                            playCompleteAnimationSound: c = !0,
                            onAnimationDone: d,
                            initialAnimationDelay: _,
                            completedDuration: m,
                            level: E,
                        }) => {
                            const g = Ne().model,
                                p = g.computes.cardStates(E, e),
                                b = p.cardStatus,
                                h = p.isDisabled,
                                A = g.computes.isRewardNeedTake(E, e),
                                v = (0, s.useState)(!1),
                                f = v[0],
                                C = v[1],
                                D = (0, s.useState)(!1),
                                F = D[0],
                                B = D[1],
                                w = (0, s.useState)(!0),
                                S = w[0],
                                y = w[1],
                                k = (0, s.useState)(!1),
                                R = k[0],
                                N = k[1],
                                T = b.current === Be.COMPLETED && !A && !h,
                                L = (h && e) || T || a,
                                x = !e && b.current === Be.IN_PROGRESS && b.potential !== Be.COMPLETED,
                                I = () => {
                                    (c && (0, P.G)(we.IMPROVED_REWARD), C(!0));
                                };
                            ((0, s.useEffect)(
                                () =>
                                    a
                                        ? (0, Yt.F)(() => {
                                              (y(!1),
                                                  i &&
                                                      !R &&
                                                      (b.current === Be.IN_PROGRESS
                                                          ? (0, P.G)(we.UNLOCK_BIG)
                                                          : (0, P.G)(we.UNLOCK_SMALL)));
                                          }, _ + n)
                                        : t
                                          ? (B(!0),
                                            (0, Yt.F)(() => {
                                                (B(!1), I());
                                            }, _ + u))
                                          : void (F && B(!1)),
                                [a, t, F],
                            ),
                                (0, s.useEffect)(() => {
                                    if (t && R)
                                        return (0, Yt.F)(() => {
                                            I();
                                        }, u);
                                }, [t, R]));
                            const M = () => {
                                    (!t && d && d(), N(!0));
                                },
                                O = { in: S, timeout: Bs + r };
                            return o().createElement(
                                'div',
                                {
                                    className: l()(bs, b.current === Be.IN_PROGRESS && hs),
                                    style: { '--animation-duration': `${m}ms` },
                                },
                                L &&
                                    o().createElement(
                                        'div',
                                        { className: As },
                                        ((!t && T) || (f && !A)) &&
                                            o().createElement(
                                                os,
                                                {
                                                    completedIn: f,
                                                    handleCompleteGlowAnimationExited: () => {
                                                        F && B(!1);
                                                    },
                                                },
                                                o().createElement('div', { className: l()(fs, Cs, F && Ds) }),
                                            ),
                                        !t &&
                                            !a &&
                                            h &&
                                            e &&
                                            o().createElement(
                                                tt.u,
                                                {
                                                    isEnabled: e,
                                                    contentId: Ss.tooltips.BattlePassLockIconTooltipView('resId'),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(rs, {
                                                        level: E,
                                                        baseUnlockProps: O,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: M,
                                                    }),
                                                ),
                                            ),
                                        a &&
                                            !R &&
                                            o().createElement(
                                                tt.u,
                                                { contentId: Ss.tooltips.BattlePassLockIconTooltipView('resId') },
                                                o().createElement(
                                                    'div',
                                                    { className: vs },
                                                    o().createElement(rs, {
                                                        level: E,
                                                        baseUnlockProps: O,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: M,
                                                    }),
                                                    b.current === Be.IN_PROGRESS &&
                                                        o().createElement(ps, { baseUnlockProps: O }),
                                                ),
                                            ),
                                    ),
                                x && o().createElement('div', { className: Fs }, o().createElement(ls, null)),
                            );
                        },
                    ),
                    Ps = 'CardContent_base_aa',
                    ks = 'CardContent_status_6f',
                    Rs = 'CardContent_buttonHolder_a0',
                    Ns = 'CardContent_buttonLight_95',
                    Ts = 'CardContent_buttonInner_27',
                    Ls = 'CardContent_buttonInner__disabled_b1',
                    xs = 'CardContent_button_3a',
                    Is = 'CardContent_button__disabled_a8',
                    Ms = 'CardContent_buttonBlink_db',
                    Os = 'CardContent_buttonText_fc',
                    $s = ['children'];
                function Ws() {
                    return (
                        (Ws =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ws.apply(this, arguments)
                    );
                }
                const Hs = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, $s);
                    return o().createElement(
                        tt.u,
                        Ws(
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
                function Gs() {
                    return (
                        (Gs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Gs.apply(this, arguments)
                    );
                }
                const zs = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const u = o().createElement('div', { className: a }, e);
                        if (t.header || t.body) return o().createElement(et.i, t, u);
                        const n = t.contentId;
                        return n
                            ? o().createElement(tt.u, Gs({}, t, { contentId: n }), u)
                            : o().createElement(Hs, t, u);
                    },
                    Us = {
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
                        base__normalize: 'Reward_base__normalize_a6',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    js = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: u = H.Big,
                        special: n,
                        value: r,
                        valueType: s,
                        title: i,
                        style: c,
                        className: d,
                        classNames: _,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !ue.includes(e)) return null;
                                switch (t) {
                                    case z.BATTLE_BOOSTER:
                                    case z.BATTLE_BOOSTER_REPLACE:
                                        return U.BATTLE_BOOSTER;
                                }
                            })(u, n),
                            p = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case z.BATTLE_BOOSTER:
                                        return j.BATTLE_BOOSTER;
                                    case z.BATTLE_BOOSTER_REPLACE:
                                        return j.BATTLE_BOOSTER_REPLACE;
                                    case z.BUILT_IN_EQUIPMENT:
                                        return j.BUILT_IN_EQUIPMENT;
                                    case z.EQUIPMENT_PLUS:
                                        return j.EQUIPMENT_PLUS;
                                    case z.EQUIPMENT_TROPHY_BASIC:
                                        return j.EQUIPMENT_TROPHY_BASIC;
                                    case z.EQUIPMENT_TROPHY_UPGRADED:
                                        return j.EQUIPMENT_TROPHY_UPGRADED;
                                    case z.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return j.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case z.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return j.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case z.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return j.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case z.PROGRESSION_STYLE_UPGRADED_1:
                                        return j.PROGRESSION_STYLE_UPGRADED_1;
                                    case z.PROGRESSION_STYLE_UPGRADED_2:
                                        return j.PROGRESSION_STYLE_UPGRADED_2;
                                    case z.PROGRESSION_STYLE_UPGRADED_3:
                                        return j.PROGRESSION_STYLE_UPGRADED_3;
                                    case z.PROGRESSION_STYLE_UPGRADED_4:
                                        return j.PROGRESSION_STYLE_UPGRADED_4;
                                    case z.PROGRESSION_STYLE_UPGRADED_5:
                                        return j.PROGRESSION_STYLE_UPGRADED_5;
                                    case z.PROGRESSION_STYLE_UPGRADED_6:
                                        return j.PROGRESSION_STYLE_UPGRADED_6;
                                    case z.ATTACHMENT_RARE:
                                        return j.ATTACHMENT_RARE;
                                    case z.ATTACHMENT_EPIC:
                                        return j.ATTACHMENT_EPIC;
                                    case z.ATTACHMENT_LEGENDARY:
                                        return j.ATTACHMENT_LEGENDARY;
                                }
                            })(n),
                            b = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case G.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case G.CURRENCY:
                                    case G.NUMBER:
                                        return o().createElement(Y.A, { format: 'integral', value: Number(e) });
                                    case G.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, s);
                        return o().createElement(
                            'div',
                            {
                                className: l()(Us.base, Us[`base__${u}`], q.includes(e) && Us.base__normalize, d),
                                style: c,
                            },
                            o().createElement(
                                zs,
                                { tooltipArgs: m, className: Us.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: l()(Us.image, null == _ ? void 0 : _.image) },
                                        g &&
                                            o().createElement('div', {
                                                className: l()(Us.highlight, null == _ ? void 0 : _.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            o().createElement('div', {
                                                className: l()(Us.icon, null == _ ? void 0 : _.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        p &&
                                            o().createElement('div', {
                                                className: l()(Us.overlay, null == _ ? void 0 : _.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${p}_overlay)`,
                                                },
                                            }),
                                    ),
                                    b &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    Us.info,
                                                    Us[`info__${e}`],
                                                    s === G.MULTI && Us.info__multi,
                                                    null == _ ? void 0 : _.info,
                                                ),
                                            },
                                            b,
                                        ),
                                    i && o().createElement('div', { className: Us.title }, i),
                                ),
                            ),
                            a &&
                                o().createElement(
                                    zs,
                                    { tooltipArgs: E },
                                    o().createElement('div', {
                                        className: l()(Us.timer, null == _ ? void 0 : _.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Vs = {
                        base: 'Rewards_base_46',
                        base__column: 'Rewards_base__column_5d',
                        base__inProgress: 'Rewards_base__inProgress_a5',
                        reward: 'Rewards_reward_1f',
                        base__tripleDefault: 'Rewards_base__tripleDefault_fd',
                        reward__0: 'Rewards_reward__0_7c',
                        reward__2: 'Rewards_reward__2_e3',
                        base__reverse: 'Rewards_base__reverse_14',
                        base__tripleInProgress: 'Rewards_base__tripleInProgress_85',
                        reward__1: 'Rewards_reward__1_11',
                        base__single: 'Rewards_base__single_f9',
                        shine: 'Rewards_shine_3f',
                        base__animated: 'Rewards_base__animated_6a',
                        fade: 'Rewards_fade_96',
                        rewardInner: 'Rewards_rewardInner_ac',
                        changeReward: 'Rewards_changeReward_ee',
                        staticShine: 'Rewards_staticShine_e4',
                        explosion: 'Rewards_explosion_f6',
                        preview: 'Rewards_preview_2f',
                        iconButton: 'Rewards_iconButton_6d',
                    };
                function qs() {
                    return (
                        (qs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        qs.apply(this, arguments)
                    );
                }
                const Ys = (0, O.Om)((e) => {
                        const t = e.item,
                            a = e.name,
                            u = e.value,
                            n = e.overlayType,
                            r = e.tooltipId,
                            s = e.tooltipContentId;
                        return {
                            id: e.id,
                            icon: e.icon,
                            name: t || a,
                            smallImage: te(e, H.Big),
                            bigImage: te(e, H.S180x135),
                            special: n,
                            value: u,
                            valueType:
                                ((o = a),
                                Z.includes(o)
                                    ? G.MULTI
                                    : X.includes(o)
                                      ? G.CURRENCY
                                      : K.includes(o)
                                        ? G.NUMBER
                                        : Q.includes(o)
                                          ? G.PREMIUM_PLUS
                                          : G.STRING),
                            tooltipArgs: ae({ tooltipId: r }, Number(s), { ignoreShowDelay: !0 }),
                        };
                        var o;
                    }),
                    Zs = (0, k.Pi)(({ isPremium: e, levelNum: t, hasAnimation: a }) => {
                        const u = (0, _.GS)().mediaSize,
                            n = Ne(),
                            r = n.model,
                            i = n.controls,
                            c = r.computes.cardStates(t, e).cardStatus,
                            d = r.computes.isRewardNeedTake(t, e),
                            m = r.computes.levelRewardItems(t, !0),
                            E = r.computes.levelRewardItems(t, !1),
                            g = e ? E : m,
                            p = (0, s.useState)(g),
                            b = p[0],
                            h = p[1],
                            A = c.current === Be.IN_PROGRESS,
                            v = (0, s.useRef)(!1);
                        (0, s.useEffect)(() => {
                            if (v.current) return (0, Yt.F)(() => h(g), 1e3);
                            v.current = !0;
                        }, [g, v]);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    Vs.base,
                                    A && Vs.base__inProgress,
                                    e && Vs.base__reverse,
                                    a && Vs.base__animated,
                                    1 === g.length && Vs.base__single,
                                    2 === g.length && Vs.base__column,
                                    3 === g.length && (A ? Vs.base__tripleInProgress : Vs.base__tripleDefault),
                                ),
                            },
                            M.UI(b, (e, t) => {
                                const n = Ys(e),
                                    r =
                                        n.name.includes($.StyleProgressToken) ||
                                        n.name.includes($.BattlePassSelectToken),
                                    s = (d && r) || a,
                                    c = ((e) => {
                                        const t = u < _.cJ.Medium;
                                        return g.length > 1
                                            ? t
                                                ? { size: H.Small, image: e.smallImage }
                                                : { size: H.Big, image: e.smallImage }
                                            : t
                                              ? { size: H.Big, image: e.smallImage }
                                              : { size: H.S180x135, image: e.bigImage };
                                    })(n),
                                    m = c.size,
                                    E = c.image;
                                return o().createElement(
                                    'div',
                                    { key: `reward__${n.name}${t}`, className: l()(Vs.reward, Vs[`reward__${t}`]) },
                                    s && o().createElement('div', { className: Vs.shine }),
                                    a &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('div', { className: Vs.staticShine }),
                                            o().createElement('div', { className: Vs.explosion }),
                                        ),
                                    o().createElement(js, qs({ size: m, image: E, className: Vs.rewardInner }, n)),
                                    n.icon === be &&
                                        o().createElement(
                                            'div',
                                            { className: Vs.preview },
                                            o().createElement(Je, {
                                                type: 'preview',
                                                size: 'normal',
                                                className: Vs.iconButton,
                                                onClick: () => i.onStyleBonusPreview(n.id),
                                            }),
                                        ),
                                );
                            }),
                        );
                    }),
                    Xs = 'CardRewards_base_d6',
                    Ks = 'CardRewards_base__completed_56',
                    Qs = (0, k.Pi)(({ levelNum: e, isRewardAnimationActive: t, isPremium: a = !1 }) => {
                        const u = Ne().model,
                            n = u.computes.cardStates(e, a),
                            r = n.cardStatus,
                            s = n.isDisabled,
                            i = u.computes.isRewardNeedTake(e, a),
                            c = r.current === Be.COMPLETED && !i && !s && !t;
                        return o().createElement(
                            'div',
                            { className: l()(Xs, c && Ks) },
                            o().createElement(Zs, { levelNum: e, isPremium: a, hasAnimation: t }),
                        );
                    });
                function Js() {
                    return (
                        (Js =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Js.apply(this, arguments)
                    );
                }
                const eo = 100,
                    to = 1800,
                    ao = R.strings.battle_pass.progression,
                    uo = (0, k.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            onFinalAnimationDone: a,
                            maxVisibleCards: u,
                            showLevelsAnimations: n,
                            showBuyAnimations: r,
                        }) => {
                            const i = Ne(),
                                c = i.model,
                                d = i.controls,
                                m = d.finishAnimation,
                                E = d.takeReward,
                                g = c.root.get(),
                                p = g.isBattlePassPurchased,
                                b = g.currentLevel,
                                h = g.previousLevel,
                                A = c.computes.levelInfo(t),
                                v = A.needTakePaid,
                                f = A.needTakeFree,
                                C = A.isFreeRewardChoiceEnabled,
                                D = A.isPaidRewardChoiceEnabled,
                                F = c.computes.cardStates(t, e).cardStatus,
                                B = c.computes.isRewardNeedTake(t, e),
                                w = F.current === Be.IN_PROGRESS,
                                S = F.current === Be.COMPLETED,
                                y = (0, s.useState)(!1),
                                P = y[0],
                                k = y[1],
                                R = (0, s.useState)(!1),
                                N = R[0],
                                T = R[1],
                                L = (0, _.GS)().mediaSize <= _.cJ.Small ? Tt.extraSmall : Tt.small,
                                x = (0, s.useRef)(B),
                                I = x.current;
                            ((0, s.useEffect)(() => {
                                x.current = B;
                            }),
                                (0, s.useEffect)(() => {
                                    if (I && !B) {
                                        const e = (0, Yt.F)(() => {
                                                (k(!1), m());
                                            }, to),
                                            t = (0, Yt.F)(() => {
                                                T(!1);
                                            }, 2300);
                                        return (
                                            k(!0),
                                            T(!0),
                                            () => {
                                                (e(), t());
                                            }
                                        );
                                    }
                                }, [B]));
                            const M = (() => {
                                    let s,
                                        o = 0,
                                        i = 0,
                                        l = 0,
                                        c = 0,
                                        d = !1,
                                        _ = !1,
                                        m = !1,
                                        E = 300 * Math.ceil(b / 25);
                                    if (u && r && p) {
                                        const e = Math.floor(0.5 * u);
                                        let a = b - e,
                                            n = b + e,
                                            r = 0;
                                        a <= 0 && ((r = 1 - a), (n += r), (a = 1));
                                        const s = t < b && t >= a,
                                            l = t > b && t <= n,
                                            E = t === a;
                                        (s ? (o = (t - a + 1) * eo) : l && (o = (t - a) * eo),
                                            (d = Boolean(w || s || l || E)),
                                            (_ = Boolean(w || E)),
                                            (m = Boolean(S && d)),
                                            (i = (u - r - 1) * eo),
                                            w && (c = (t - a + 1) * eo * 2.5));
                                    }
                                    if (u && n) {
                                        const r = Math.min(b - h, Math.floor(0.5 * u));
                                        let o = b - r;
                                        o <= 0 && (o = 1);
                                        const c = t < b && t >= o;
                                        (c && ((i = (t - o + 1) * eo), e && (i += eo)),
                                            (m = Boolean(S && c)),
                                            (l = r * eo + eo * Math.trunc(r / 2) + E),
                                            n && (s = a));
                                    }
                                    return (
                                        N && ((E = 0), (i = to), (m = Boolean(S))),
                                        t === b - 1 && (s = a),
                                        {
                                            baseTimeout: c,
                                            playCompleteAnimation: m,
                                            playCompleteAnimationSound: m,
                                            playUnlockAnimation: d,
                                            playUnlockAnimationSound: _,
                                            unlockAnimationDelay: o,
                                            onAnimationDone: s,
                                            completeAnimationDelay: i,
                                            stageAnimationDelay: l,
                                            initialAnimationDelay: E,
                                        }
                                    );
                                })(),
                                O = (0, Pu.z)(() => {
                                    E({ level: t });
                                }),
                                $ = f || v,
                                W = $ && !(C || D);
                            return o().createElement(
                                'div',
                                { className: Ps },
                                !e &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(jr, {
                                            stepNumber: t,
                                            stageAnimationDelay: M.stageAnimationDelay,
                                            isRewardAnimationActive: P,
                                        }),
                                        $ &&
                                            o().createElement(
                                                et.i,
                                                { isEnabled: W, body: ao.btnRewardsUnavailable() },
                                                o().createElement(
                                                    'div',
                                                    { className: Rs },
                                                    !W && o().createElement('div', { className: Ns }),
                                                    o().createElement(
                                                        'div',
                                                        { className: l()(Ts, W && Ls) },
                                                        o().createElement(
                                                            xt,
                                                            {
                                                                type: Nt.ghost,
                                                                size: L,
                                                                disabled: W,
                                                                onClick: O,
                                                                mixClass: l()(xs, W && Is),
                                                            },
                                                            !W && o().createElement('div', { className: Ms }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Os },
                                                                ao.takeReward(),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                o().createElement(Qs, { levelNum: t, isPremium: e, isRewardAnimationActive: P }),
                                o().createElement(
                                    'div',
                                    { className: ks },
                                    o().createElement(
                                        ys,
                                        Js({ isPremium: Boolean(e), completedDuration: 500, level: t }, M),
                                    ),
                                ),
                            );
                        },
                    ),
                    no = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__rare: 'Divider_base__rare_89',
                        base__completed: 'Divider_base__completed_ed',
                        base__premium: 'Divider_base__premium_82',
                        inner: 'Divider_inner_40',
                    },
                    ro = ({ position: e, isPremium: t = !1, isRare: a = !1, status: u }) =>
                        o().createElement(
                            'div',
                            {
                                className: l()(
                                    no.base,
                                    no[`base__${u}`],
                                    no[`base__${e}`],
                                    a && no.base__rare,
                                    t && no.base__premium,
                                ),
                            },
                            o().createElement('div', { className: no.inner }),
                        ),
                    so = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__nonPremium: 'Card_base__nonPremium_ee',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    oo = (0, k.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            maxLevels: a,
                            maxVisibleCards: u,
                            showBuyAnimations: n,
                            showLevelsAnimations: r,
                            onAnimationDone: i,
                            levelRef: c,
                        }) => {
                            const d = Ne().model,
                                _ = d.root.get(),
                                m = _.currentPointsInLevel,
                                E = _.chapterState,
                                g = d.computes.cardStates(t, e),
                                p = g.cardStatus,
                                b = g.isRare,
                                h = d.computes.levelInfo(t).levelPoints,
                                A = !e && (p.current === Be.COMPLETED || p.current === Be.IN_PROGRESS),
                                v = 1 === t,
                                f = t === a,
                                C = v ? void 0 : d.computes.cardStates(t - 1, e),
                                D = f ? void 0 : d.computes.cardStates(t + 1, e),
                                F = (0, s.useRef)(null),
                                B = e ? (t - 1) * h : h;
                            (0, s.useImperativeHandle)(c, () => ({
                                width: () => {
                                    const e = F.current;
                                    return e ? e.offsetWidth : void 0;
                                },
                                offsetLeft: () => {
                                    const e = F.current;
                                    return e ? e.offsetLeft : void 0;
                                },
                                getOffsetLeftInArea: () => {
                                    const e = F.current;
                                    if (!e) return 0;
                                    const t = e.parentNode,
                                        a = t ? t.offsetLeft : 0;
                                    return e.offsetLeft + a;
                                },
                                getHTMLElement: () => F.current,
                            }));
                            const w =
                                    !v &&
                                    ((p.current === Be.NOT_STARTED && !b) ||
                                        ((null == C ? void 0 : C.isRare) && p.current !== Be.IN_PROGRESS) ||
                                        (null == C ? void 0 : C.cardStatus.current) === Be.IN_PROGRESS),
                                S =
                                    !f &&
                                    ((p.current === Be.COMPLETED && !b) ||
                                        ((null == D ? void 0 : D.isRare) && p.current !== Be.IN_PROGRESS) ||
                                        (null == D ? void 0 : D.cardStatus.current) === Be.IN_PROGRESS),
                                y = ((e, t, a, u) =>
                                    e === Be.COMPLETED
                                        ? 100
                                        : e !== Be.IN_PROGRESS || (t !== N.NotStarted && t !== N.Paused)
                                          ? 0
                                          : (100 * a) / u)(p.current, E, m, B),
                                P = { width: `${y}%` },
                                k = {
                                    '--small-card-width': '140rem',
                                    '--small-current-card-width': '224rem',
                                    '--big-card-width': '220rem',
                                    '--big-current-card-width': '340rem',
                                };
                            return o().createElement(
                                'div',
                                {
                                    className: l()(so.base, so[`base__${p.current}`], !e && so.base__nonPremium),
                                    ref: F,
                                    style: k,
                                },
                                o().createElement(Gr, { level: t, isPremium: e }),
                                o().createElement(uo, {
                                    isPremium: e,
                                    stepNumber: t,
                                    maxVisibleCards: u,
                                    showLevelsAnimations: r,
                                    showBuyAnimations: n,
                                    onFinalAnimationDone: i,
                                }),
                                e &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            { className: l()(so.totalPoints, so.totalPoints__default) },
                                            B,
                                        ),
                                        f &&
                                            o().createElement(
                                                'div',
                                                { className: l()(so.totalPoints, so.totalPoints__final) },
                                                a * h,
                                            ),
                                    ),
                                A && o().createElement('div', { className: so.progressShadow, style: P }),
                                !w &&
                                    o().createElement(ro, {
                                        position: Fe.left,
                                        isPremium: e,
                                        isRare: b,
                                        status: p.current,
                                    }),
                                !S &&
                                    o().createElement(ro, {
                                        position: Fe.right,
                                        isPremium: e,
                                        isRare: b,
                                        status: p.current,
                                    }),
                            );
                        },
                    ),
                    io = (0, k.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            isPremium: u,
                            sectionKey: n,
                            maxVisibleCards: r,
                        }) => {
                            const i = Ne().model,
                                c = i.root.get(),
                                d = c.chapterID,
                                _ = c.currentLevel,
                                m = c.potentialLevel,
                                E = c.showBuyAnimations,
                                g = c.showLevelsAnimations,
                                p = i.levels.get(),
                                b = (0, s.useState)(!1),
                                h = b[0],
                                A = b[1],
                                v = () => {
                                    A(!0);
                                },
                                f = Boolean(r && u && E),
                                C = Boolean(r && g),
                                D = (u, n, r) => (u === n ? e : u === r ? a : t);
                            return o().createElement(
                                'div',
                                { className: l()(Su.row, !u && Su.row__basic) },
                                M.UI(p, (e, t) =>
                                    o().createElement(oo, {
                                        key: `${d}_${n}_${t}`,
                                        showBuyAnimations: f && !h,
                                        showLevelsAnimations: C,
                                        levelRef: D(e.level, _, m),
                                        stepNumber: e.level,
                                        isPremium: u,
                                        maxLevels: p.length,
                                        maxVisibleCards: r,
                                        onAnimationDone: v,
                                    }),
                                ),
                            );
                        },
                    );
                function lo() {
                    return (
                        (lo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        lo.apply(this, arguments)
                    );
                }
                const co = 1,
                    _o = (0, k.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: u,
                            widget3dStyleLeftRef: n,
                            shadowLipRef: r,
                            api: i,
                        }) => {
                            const c = Ne().model,
                                d = c.root.get(),
                                m = d.currentLevel,
                                E = d.currentPointsInLevel,
                                g = d.showLevelsAnimations,
                                p = c.computes.isLayoutWithExtraWidget(),
                                b = c.levels.get(),
                                h = (0, s.useRef)({ update: () => {} }),
                                A = (0, s.useRef)({ update: () => {} });
                            i.current.moveProgressBars = (e) => {
                                (h.current.update(e), A.current.update(e));
                            };
                            const v = (0, s.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                f = v[0],
                                C = v[1],
                                D = (0, s.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            u = t.current,
                                            n = a ? a.width() : 0,
                                            r = u ? u.width() : 0;
                                        return !r && n
                                            ? { currentLevelWidth: n, levelWidth: 224 === n ? 140 : 220 }
                                            : { currentLevelWidth: n, levelWidth: r };
                                    }
                                }, [e, t]),
                                F = (0, _.GS)().mediaSize;
                            return (
                                (0, s.useEffect)(() => {
                                    (0, w.Eu)().then(() => {
                                        const e = D();
                                        if (e) {
                                            const t =
                                                Math.floor(
                                                    (viewEnv.getClientSizeRem().width - e.currentLevelWidth) /
                                                        e.levelWidth,
                                                ) + 1;
                                            C({
                                                levelWidth: e.levelWidth,
                                                currentLevelWidth: e.currentLevelWidth,
                                                maxCardsShown: t,
                                            });
                                        }
                                    });
                                }, [F, D, b.length, m, E]),
                                (0, s.useEffect)(() => {
                                    g && (0, P.G)(R.sounds.bp_progress_bar_start());
                                }, [g]),
                                (0, s.useEffect)(() => {
                                    u && u();
                                }, [m, E, u]),
                                o().createElement(
                                    'div',
                                    { className: Su.wrapper },
                                    !p &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(hr, { widget3dStyleRef: n, level: co, isShowTitle: !0 }),
                                            o().createElement(
                                                'div',
                                                { className: l()(Su.decor, Su.decor__left) },
                                                o().createElement('div', { className: Su.decorBackground }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Su.bookmarkBackground, ref: r },
                                                o().createElement(Gn, {
                                                    isDisappeared: !0,
                                                    mixClass: Su.bookmarkLeftResponsive,
                                                }),
                                            ),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: Su.section },
                                        o().createElement(io, {
                                            sectionKey: 'baseCard',
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: g ? f.maxCardsShown : 0,
                                            currentLevel: m,
                                        }),
                                        o().createElement(
                                            Dr,
                                            lo({ progressApi: h, freePointsApi: A, progressChange: u }, f),
                                        ),
                                        o().createElement(io, {
                                            sectionKey: 'basePremiumCard',
                                            isPremium: !0,
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: f.maxCardsShown,
                                            currentLevel: m,
                                        }),
                                    ),
                                    !p &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(
                                                'div',
                                                { className: Su.decor },
                                                o().createElement('div', { className: Su.decorBackground }),
                                            ),
                                            o().createElement(hr, { level: 4 }),
                                        ),
                                )
                            );
                        },
                    );
                function mo() {
                    return (
                        (mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        mo.apply(this, arguments)
                    );
                }
                function Eo(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                const go = { allowedButtons: [Dn.MainButton] },
                    po = R.strings.battle_pass.progression;
                let bo;
                !(function (e) {
                    ((e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel'));
                })(bo || (bo = {}));
                const ho = ['dragStart', 'dragEnd', 'dragging'],
                    Ao = (0, k.Pi)(({ onHorizontalScroll: e }) => {
                        const t = Ne().model,
                            a = t.levels.get(),
                            u = t.root.get(),
                            n = u.currentLevel,
                            r = u.isBattlePassPurchased,
                            i = u.showBuyAnimations,
                            c = (0, s.useRef)({ moveProgressBars: () => {} }),
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            g = (0, s.useRef)(null),
                            p = (0, s.useRef)(null),
                            b = (0, s.useRef)(null),
                            h = (0, s.useRef)(0),
                            A = t.computes.isLayoutWithExtraWidget(),
                            v = (0, s.useState)(bo.Hidden),
                            f = v[0],
                            C = v[1],
                            F = (0, s.useState)(bo.Hidden),
                            B = F[0],
                            S = F[1],
                            y = (0, s.useState)(!1),
                            P = y[0],
                            k = y[1],
                            R = (0, s.useState)(void 0),
                            N = R[0],
                            T = R[1],
                            L = Ou(),
                            x = L.animationScroll.scrollPosition,
                            I = L.applyScroll,
                            M = L.events,
                            O = L.handleMouseWheel,
                            $ = L.getContainerSize,
                            W = L.getWrapperSize,
                            H = (function (e, t, a) {
                                const u = e.contentRef,
                                    n = e.wrapperRef,
                                    r = e.scrollPosition,
                                    o = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, s.useState)(Cn),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = u.current;
                                        e && (e.style.cursor = d.type === fn.Dragging ? 'move' : 'grab');
                                    }, [u, d.type]),
                                    (0, s.useEffect)(() => {
                                        if (d.type !== fn.Dragging) return;
                                        const e = (e) => {
                                            const a = u.current,
                                                s = n.current;
                                            if (!a || !s) return;
                                            const l = d.positionFrom - e.screenX,
                                                c = d.previousScrollPosition + l;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: o(a, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        };
                                        function a() {
                                            (window.removeEventListener('mousemove', e),
                                                document.body.removeEventListener('mouseleave', a),
                                                _({ type: 'scrollingToEnd' }));
                                        }
                                        return (
                                            window.addEventListener('mousemove', e),
                                            window.addEventListener('mouseup', a),
                                            document.body.addEventListener('mouseleave', a),
                                            () => {
                                                (window.removeEventListener('mousemove', e),
                                                    window.removeEventListener('mouseup', a),
                                                    document.body.removeEventListener('mouseleave', a));
                                            }
                                        );
                                    }, [i.scrollPosition, o, u, d, r, n, t, a]),
                                    (0, s.useEffect)(() => {
                                        if (d.type !== fn.End) return;
                                        const e = () => {
                                            _(Cn);
                                        };
                                        return (i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                    }, [i.scrollPosition, d.type, l]),
                                    (0, s.useEffect)(() => {
                                        const e = u.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                _({
                                                    type: fn.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, u, a]),
                                    [d, _]
                                );
                            })(L, void 0, go),
                            G = H[0],
                            z = H[1],
                            U = (e) => {
                                (G.type === fn.Dragging && z({ type: fn.End }), O(e));
                            },
                            j = (0, s.useMemo)(() => Object.assign({}, L, { handleMouseWheel: U }), []),
                            V = (0, s.useCallback)(
                                (e) => {
                                    const t = E.current ? E.current.offsetWidth : 0,
                                        a = g.current ? g.current.offsetWidth : 0;
                                    if (d.current) {
                                        const u = W();
                                        (c.current.moveProgressBars({
                                            viewPort: d.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                            leftOffset: t + a,
                                        }),
                                            k(A || e > t + 0.5 * a));
                                    }
                                },
                                [W, A],
                            ),
                            q = (0, s.useCallback)((e = !1) => {
                                const t = _.current;
                                let a = 0,
                                    u = 0;
                                const n = E.current ? E.current.offsetWidth : 0,
                                    r = g.current ? g.current.offsetWidth : 0;
                                t && ((a = t.width()), (u = t.offsetLeft() + n + r));
                                const s = d.current;
                                let o = 0;
                                if (a && s) {
                                    const t = 0.5 * s.offsetWidth;
                                    e && h.current
                                        ? (o = u + a - 0.5 * h.current - t)
                                        : ((o = u + 0.5 * a - t), (h.current = a));
                                }
                                return ((o = Math.round(o < 0 ? 0 : o)), o);
                            }, []),
                            Y = () => {
                                const e = d.current,
                                    t = _ && _.current,
                                    a = m.current,
                                    u = E.current ? E.current.offsetWidth : 0,
                                    n = g.current ? g.current.offsetWidth : 0;
                                if (t) {
                                    const r = t.offsetLeft() + u + n,
                                        s = (null == a ? void 0 : a.offsetLeft()) + u + n,
                                        o =
                                            x.goal < r - e.offsetWidth
                                                ? bo.NavToCurrentLevel
                                                : a && x.goal < s - e.offsetWidth
                                                  ? bo.NavToPotentialLevel
                                                  : bo.Hidden,
                                        i = (() => {
                                            switch (!0) {
                                                case a && x.goal > s + a.width():
                                                    return bo.NavToPotentialLevel;
                                                case x.goal > r + t.width():
                                                    return bo.NavToCurrentLevel;
                                                default:
                                                    return bo.Hidden;
                                            }
                                        })();
                                    (C(o), S(i));
                                }
                            },
                            Z = (e) => {
                                const t = ((e) => {
                                    let t = 0;
                                    if (e && e.current && d && d.current) {
                                        const a = e.current,
                                            u = E.current ? E.current.offsetWidth : 0,
                                            n = g.current ? g.current.offsetWidth : 0;
                                        let r = 0,
                                            s = 0;
                                        a && ((r = a.width()), (s = a.offsetLeft() + u + n));
                                        const o = d.current;
                                        (r && o && (t = s + 0.5 * r - 0.5 * o.offsetWidth),
                                            (t = Math.round(t < 0 ? 0 : t)));
                                    }
                                    return t;
                                })(e);
                                (V(x.goal), I(t), Y());
                            },
                            X = (e) => {
                                switch (e) {
                                    case bo.NavToCurrentLevel:
                                        return Z(_);
                                    case bo.NavToPotentialLevel:
                                        return Z(m);
                                }
                            },
                            K = (e) => {
                                switch (e) {
                                    case bo.NavToCurrentLevel:
                                        return { type: ye.Default, tooltipBody: po.backToCurrentStageArrow.descr() };
                                    case bo.NavToPotentialLevel:
                                        return { type: ye.Gray, tooltipBody: po.backToPotentialStageArrow.descr() };
                                }
                            },
                            Q = (e) => {
                                (V(x.goal), Y(), T(null == e ? void 0 : e.type));
                            };
                        return (
                            (0, s.useEffect)(
                                () =>
                                    D(() => {
                                        r && i && I(q());
                                    }),
                                [I, q, r, i],
                            ),
                            (0, s.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = $(),
                                                    t = x.goal;
                                                (yield (0, w.Eu)(), yield Za());
                                                const a = $(),
                                                    u = d.current,
                                                    n = L.getBounds()[1],
                                                    r = 0.25 * u.offsetWidth,
                                                    s = a && e && a !== e ? (t * a) / e : t;
                                                (V(s), I(s > n - r ? n : s));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (u, n) {
                                                    var r = e.apply(t, a);
                                                    function s(e) {
                                                        Eo(r, u, n, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Eo(r, u, n, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => (0, Yt.F)(() => Z(_), 700), [n]),
                            (0, s.useEffect)(() => {
                                if (((e = '') => ho.includes(e))(N)) return void e('dragStart' === N);
                                const t = () => {
                                        N || V(x.goal);
                                    },
                                    a = () => {
                                        (e(!1), V(x.goal));
                                    },
                                    u = () => {
                                        (e(!0), V(x.goal));
                                    };
                                return (
                                    M.on('change', t),
                                    M.on('rest', a),
                                    M.on('start', u),
                                    () => {
                                        (M.off('change', t), M.off('rest', a), M.off('start', u));
                                    }
                                );
                            }, [M, V, e, x.goal, N]),
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: l()(Su.bookmark, Su.bookmark__start) },
                                    o().createElement(Gn, {
                                        chapterStep: a.length,
                                        mixClass: l()(Su.bookmarkLeftFixed, P && Su.bookmarkLeftFixed__active),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Su.scrollWrapper, ref: d, onClick: Q, onMouseLeave: Y, onWheel: Q },
                                    o().createElement(
                                        vn.Horizontal.Area.Default,
                                        { api: j, barClassNames: { base: Su.scrollBarPosition }, onDrag: Q },
                                        o().createElement(_o, {
                                            api: c,
                                            currentCardRef: _,
                                            freeProgressionCutCardRef: p,
                                            potentialLevelCardRef: m,
                                            separatorRef: b,
                                            widget3dStyleLeftRef: E,
                                            shadowLipRef: g,
                                            onProgressChanged: Q,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            Su.scrollToButton,
                                            Su.scrollToButton__backward,
                                            B !== bo.Hidden && Su.scrollToButton__visible,
                                        ),
                                    },
                                    o().createElement(
                                        Bn,
                                        mo(
                                            { onClick: () => X(B), direction: Se.back, className: Su.arrowButton },
                                            K(B),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            Su.scrollToButton,
                                            Su.scrollToButton__forward,
                                            f !== bo.Hidden && Su.scrollToButton__visible,
                                        ),
                                    },
                                    o().createElement(
                                        Bn,
                                        mo(
                                            { onClick: () => X(f), direction: Se.forward, className: Su.arrowButton },
                                            K(f),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    vo = (0, k.Pi)(() => {
                        const e = Ne().model.computes.isLayoutWithExtraWidget(),
                            t = (0, s.useState)(!1),
                            a = t[0],
                            u = t[1],
                            n = l()(Su.additionalShadow, a && Su.additionalShadow__active);
                        return o().createElement(
                            'div',
                            { className: l()(Su.base, e && Su.base__isLayoutWithExtraWidget) },
                            o().createElement(
                                'div',
                                { className: l()(Su.shadow, Su.shadow__left) },
                                o().createElement('div', { className: n }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(Su.shadow, Su.shadow__right) },
                                o().createElement('div', { className: n }),
                            ),
                            o().createElement(Ao, {
                                onHorizontalScroll: (e) => {
                                    u(e);
                                },
                            }),
                        );
                    }),
                    fo = (0, k.Pi)(() => {
                        const e = Ne(),
                            t = e.model,
                            a = t.root,
                            u = t.computes,
                            n = e.controls,
                            r = a.get(),
                            s = r.chapterType,
                            i = r.chapterID,
                            c = r.actionType,
                            d = r.isPaused,
                            _ = u.isLayoutWithExtraWidget(),
                            m = s === L.EXTRA,
                            E = c !== T.NoAction,
                            g = R.strings.battle_pass.progression.btnAllChapters(),
                            p = l()(Ge, _ && ze);
                        return o().createElement(
                            'div',
                            { className: l()(Oe, _ && $e, m && We), style: (0, Me.W4)(i) },
                            s !== L.HOLIDAY &&
                                o().createElement(
                                    'div',
                                    { className: Ve },
                                    o().createElement(Ie, {
                                        caption: g,
                                        side: 'left',
                                        type: 'back',
                                        onClick: n.chapterChoice,
                                    }),
                                ),
                            !d && o().createElement('div', { className: p }, o().createElement(vo, null)),
                            o().createElement('div', { className: je }, E && o().createElement(Ya, null)),
                            o().createElement('div', { className: He }, o().createElement(wu, null)),
                            _ && o().createElement('div', { className: Ue }, o().createElement(Ha, null)),
                        );
                    }),
                    Co = 'BattlePassProgressionsViewApp_base_40',
                    Do = (0, k.Pi)(() => {
                        const e = Ne(),
                            t = e.model,
                            a = e.controls,
                            u = t.root.get().showReplaceRewardsAnimations;
                        var n;
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    document.body.style.height = window.innerHeight - (innerHeight % 2) + 'px';
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    e(),
                                    () => {
                                        (window.removeEventListener('resize', e),
                                            (document.body.style.height = 'auto'));
                                    }
                                );
                            }, []),
                            (n = a.close),
                            y(B.n.ESCAPE, n),
                            (0, s.useEffect)(
                                () =>
                                    D(() => {
                                        a.viewLoad();
                                    }),
                                [],
                            ),
                            (0, s.useEffect)(() => {
                                u && (0, P.G)(R.sounds.bp_pick_up_award());
                            }, [u]),
                            o().createElement('div', { className: Co }, o().createElement(fo, null))
                        );
                    });
                engine.whenReady.then(() => {
                    C().render(
                        o().createElement(Re, null, o().createElement(v, null, o().createElement(Do, null))),
                        document.getElementById('root'),
                    );
                });
            },
            5689: (e, t, a) => {
                'use strict';
                a.d(t, { jw: () => n, k9: () => u });
                const u = 3e3,
                    n = 'new_skill';
            },
            9485: (e, t, a) => {
                'use strict';
                a.d(t, { W4: () => i, cs: () => s, fW: () => o, wD: () => r });
                var u = a(8546);
                const n = (e) => {
                        switch (e) {
                            case u.$u.Micro:
                                return 's';
                            case u.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    r = (e, t, a = '') => {
                        const u = a.length > 0 ? `_${a}` : a,
                            n = e.$dyn(`c_${t}${u}`),
                            r = String(t).slice(-1),
                            s = e.$dyn(`default_${r}${u}`);
                        return n || s;
                    },
                    s = (e, t, a) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            s = t ? 'BP' : '',
                            o = `${n(a)}${s}`;
                        return { backgroundImage: `url(${r(u, e, o)})` };
                    },
                    o = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.flag,
                            u = n(t);
                        return { backgroundImage: `url(${r(a, e, u)})` };
                    },
                    i = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${r(t.progression, e)})` }
                            : { backgroundImage: `url(${t.$dyn('common')})` };
                    };
            },
            2432: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => me });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6483),
                    s = a.n(r),
                    o = a(9480),
                    i = a(3403),
                    l = a(6373),
                    c = a(7727),
                    d = a(5415);
                const _ = (e, t, a, u, n) => {
                    const r = R.images.gui.maps.icons.battlePass.awards_widget;
                    return n
                        ? `url(${r.$dyn(`${e.toLowerCase()}_${t}${a}_${u}_${n}`)})`
                        : `url(${r.$dyn(`${e.toLowerCase()}_${t}${a}_${u}`)})`;
                };
                let m, E, g, p, b;
                (!(function (e) {
                    ((e.Award = 'Award'),
                        (e.Ticket = 'Ticket'),
                        (e.Coin = 'Coin'),
                        (e.Taler = 'Taler'),
                        (e.Collection = 'Collection'),
                        (e.Commander = 'Commander'));
                })(m || (m = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(E || (E = {})),
                    (function (e) {
                        ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'));
                    })(g || (g = {})),
                    (function (e) {
                        ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''));
                    })(p || (p = {})),
                    (function (e) {
                        ((e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = ''));
                    })(b || (b = {})));
                const h = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    A = ({ size: e, isHover: t, disabled: a = !1, type: u = m.Coin }) => {
                        const r = (0, d.GS)().mediaSize >= d.cJ.Medium ? g.Medium : g.Small;
                        return n().createElement(
                            'div',
                            { className: s()(h.base, h[`base__${e}`], h[`base__${e}${u}`], t && h.base__hovered) },
                            a
                                ? n().createElement('div', {
                                      className: h.bgDisabled,
                                      style: { backgroundImage: _(u, p.Background, b.Disabled, e, r) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: h.bg,
                                          style: { backgroundImage: _(u, p.Background, b.None, e, r) },
                                      }),
                                      n().createElement('div', {
                                          className: h.bgHover,
                                          style: { backgroundImage: _(u, p.Background, b.Hover, e, r) },
                                      }),
                                  ),
                        );
                    },
                    v = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    f = ({ size: e, isHover: t, highlighted: a = !1, disabled: u = !1, type: r = m.Coin }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? g.Medium : g.Small;
                        return n().createElement(
                            'div',
                            { className: s()(v.base, v[`base__${e}`], t && v.base__hovered) },
                            u
                                ? n().createElement('div', {
                                      className: s()(v.borderDisabled, v[`borderDisabled__${e}`]),
                                      style: { backgroundImage: _(r, p.Border, b.Disabled, e, o) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: v.border,
                                          style: { backgroundImage: _(a ? m.Collection : r, p.Border, b.None, e, o) },
                                      }),
                                      n().createElement('div', {
                                          className: v.borderHover,
                                          style: { backgroundImage: _(r, p.Border, b.Hover, e, o) },
                                      }),
                                  ),
                        );
                    };
                var C = a(2372),
                    D = a(9766);
                const F = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    B = ({ state: e, count: t, size: a, maxCount: u = 0 }) => {
                        switch (e) {
                            case S.InProgress:
                                return n().createElement(D.z, { text: `${t || 0} / ${u}` });
                            case S.Completed:
                                return n().createElement('div', { className: s()(F.base, F[`base__${a}`]) });
                            default:
                                return n().createElement(C.A, { format: 'integral', value: t });
                        }
                    },
                    w = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let S;
                !(function (e) {
                    ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'));
                })(S || (S = {}));
                const y = ({
                        size: e,
                        count: t,
                        maxCount: a,
                        state: u = S.Default,
                        isLocked: r = !1,
                        disabled: o = !1,
                    }) =>
                        n().createElement(
                            'div',
                            { className: s()(w.base, w[`base__${e}`], r && w.base__locked, o && w.base__disabled) },
                            n().createElement(B, { state: u, size: e, count: t, maxCount: a }),
                        ),
                    P = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    k = (e, t, a) => {
                        switch (!0) {
                            case a:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case t:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    N = ({ size: e, isHover: t, isDark: a = !0, disabled: u = !1, type: r }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? g.Medium : g.Small;
                        return n().createElement('div', {
                            className: s()(P.base, P[`base__${e}`], P[`base__${k(t, a, u)}`]),
                            style: { backgroundImage: _(r, p.Icon, b.None, e, r === m.Collection ? g.None : o) },
                        });
                    },
                    T = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
                    },
                    L = (e, t) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case t:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    x = ({ size: e, title: t, isHover: a, disabled: u = !1, isGold: r = !1 }) =>
                        n().createElement(
                            'div',
                            { className: s()(T.base, T[`base__${e}`], T[`base__${L(u, a)}`], r && T.base__gold) },
                            t,
                        ),
                    I = {
                        base: 'ChoiceAward_base_0d',
                        base__big: 'ChoiceAward_base__big_ec',
                        base__disabled: 'ChoiceAward_base__disabled_f1',
                        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_a0',
                        baseAppear: 'ChoiceAward_baseAppear_89',
                        shine: 'ChoiceAward_shine_d5',
                        shine_small_s: 'ChoiceAward_shine_small_s_f2',
                        shine_small_m: 'ChoiceAward_shine_small_m_de',
                        shine_big_s: 'ChoiceAward_shine_big_s_02',
                        shine_big_m: 'ChoiceAward_shine_big_m_ed',
                        shine__left: 'ChoiceAward_shine__left_2e',
                        shine__right: 'ChoiceAward_shine__right_64',
                        arrow: 'ChoiceAward_arrow_30',
                        blinkShape: 'ChoiceAward_blinkShape_89',
                        blink: 'ChoiceAward_blink_f0',
                        blinker: 'ChoiceAward_blinker_0c',
                    },
                    M = R.strings.battle_pass.awardsWidget,
                    O = ({ count: e, disabled: t = !1, onClick: a, size: r }) => {
                        const o = (0, u.useState)(!1),
                            i = o[0],
                            d = o[1],
                            _ = 1 === e ? M.title.awardSingle() : M.title.awardMultiple(),
                            E = t ? M.description.awardDisabled() : M.description.award(),
                            g = (0, u.useCallback)(() => {
                                t || (c.$.playClick(), a());
                            }, [t, a]);
                        return n().createElement(
                            l.i,
                            { body: E, isEnabled: Boolean(E) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(
                                        I.base,
                                        I[`base__${r}`],
                                        t ? I.base__disabled : I.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: g,
                                },
                                n().createElement(f, { size: r, isHover: i, type: m.Award, disabled: t }),
                                n().createElement(A, { size: r, isHover: i, type: m.Award, disabled: t }),
                                n().createElement(N, { size: r, isHover: i, type: m.Award, disabled: t, isDark: !1 }),
                                n().createElement(y, { size: r, count: e, disabled: t }),
                                n().createElement(x, { size: r, isHover: i, title: _, disabled: t, isGold: !0 }),
                                !t &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: s()(I.shine, I.shine__left) }),
                                        n().createElement('div', { className: s()(I.shine, I.shine__right) }),
                                        n().createElement('div', { className: I.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: I.blinkShape },
                                            n().createElement('div', { className: I.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    $ = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    W = R.strings.battle_pass.awardsWidget,
                    H = ({ count: e, onClick: t, size: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1];
                        return n().createElement(
                            l.i,
                            { body: W.description.coin(), isEnabled: Boolean(W.description.coin()) },
                            n().createElement(
                                'div',
                                {
                                    className: s()($.base, $[`base__${a}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        (c.$.playClick(), t());
                                    },
                                },
                                n().createElement(f, { size: a, isHover: o }),
                                n().createElement(A, { size: a, isHover: o }),
                                n().createElement(N, { size: a, isHover: o, type: m.Coin }),
                                n().createElement(y, { size: a, count: e }),
                                n().createElement(x, { size: a, isHover: o, title: W.title.coin() }),
                            ),
                        );
                    },
                    G = {
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
                    z = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                const j = (e) => {
                    let t = e.size,
                        a = e.value,
                        u = e.isEmpty,
                        r = e.fadeInAnimation,
                        o = e.hide,
                        i = e.maximumNumber,
                        l = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                r = Object.keys(e);
                            for (u = 0; u < r.length; u++) ((a = r[u]), t.indexOf(a) >= 0 || (n[a] = e[a]));
                            return n;
                        })(e, z);
                    const d = u ? null : a,
                        _ = 'string' == typeof d;
                    if ((d && !_ && d < 0) || 0 === d) return null;
                    const m = d && !_ && d > i,
                        E = s()(
                            G.base,
                            G[`base__${t}`],
                            r && G.base__animated,
                            o && G.base__hidden,
                            !d && G.base__pattern,
                            u && G.base__empty,
                            l,
                        );
                    return n().createElement(
                        'div',
                        U({ className: E }, c),
                        n().createElement('div', { className: G.bg }),
                        n().createElement('div', { className: G.pattern }),
                        n().createElement(
                            'div',
                            { className: s()(G.value, _ && G.value__text) },
                            m ? i : d,
                            m && n().createElement('span', { className: G.plus }, '+'),
                        ),
                    );
                };
                j.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var V = a(3815);
                const q = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    Y = R.strings.battle_pass.awardsWidget,
                    Z = ({ count: e, maxCount: t, newItemsCount: a, hasTrigger: r, size: o, onClick: i }) => {
                        const d = (0, u.useState)(!1),
                            _ = d[0],
                            g = d[1],
                            p = t === e,
                            b = o === E.Small && r,
                            h = p ? Y.description.collectionCompleted() : Y.description.collection(),
                            v = (0, V.z)(() => {
                                (c.$.playClick(), i());
                            });
                        return n().createElement(
                            l.i,
                            { body: h, isEnabled: Boolean(h) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(q.base, q[`base__${o}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), g(!0));
                                    },
                                    onMouseLeave: () => {
                                        g(!1);
                                    },
                                    onClick: v,
                                },
                                n().createElement(f, { size: o, isHover: _, type: m.Coin, highlighted: b }),
                                n().createElement(A, { size: o, isHover: _ }),
                                n().createElement(N, { size: o, isHover: _, type: m.Collection }),
                                n().createElement(y, {
                                    size: o,
                                    count: e,
                                    maxCount: t,
                                    state: p ? S.Completed : S.InProgress,
                                }),
                                n().createElement(x, { size: o, isHover: _, title: Y.title.collection() }),
                                a > 0 &&
                                    n().createElement(
                                        'div',
                                        { className: q.bubble },
                                        n().createElement(j, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var X = a(514);
                const K = {
                        base: 'CommanderAward_base_11',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    Q = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: t, tankmenScreenID: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1],
                            c = Q.description.commander(),
                            d =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${a}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return n().createElement(
                            l.i,
                            { body: c, isEnabled: Boolean(c) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(K.base, K[`base__${t}`], o && K.base__hover),
                                    onMouseEnter: () => {
                                        (X.hY.sound(R.sounds.bp_highlight_02()), i(!0));
                                    },
                                    onMouseLeave: () => i(!1),
                                    onClick: () => {
                                        (X.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                n().createElement(f, { size: t, isHover: o }),
                                n().createElement(A, { size: t, isHover: o }),
                                n().createElement(x, { size: t, isHover: o, title: Q.title.commander() }),
                                n().createElement('div', {
                                    className: K.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_ef', base__big: 'TalerAward_base__big_6b' },
                    te = R.strings.battle_pass.awardsWidget,
                    ae = ({ count: e, onClick: t, size: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1];
                        return n().createElement(
                            l.i,
                            { body: te.description.taler() },
                            n().createElement(
                                'div',
                                {
                                    className: s()(ee.base, ee[`base__${a}`], o && ee.base__hover),
                                    onMouseEnter: () => {
                                        (X.hY.sound(R.sounds.bp_highlight_02()), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        (X.hY.click(), t());
                                    },
                                },
                                n().createElement(f, { size: a, isHover: o }),
                                n().createElement(A, { size: a, isHover: o }),
                                n().createElement(N, { size: a, isHover: o, type: m.Taler }),
                                n().createElement(y, { size: a, count: e }),
                                n().createElement(x, { size: a, isHover: o, title: te.title.taler() }),
                            ),
                        );
                    },
                    ue = {
                        base: 'TicketAward_base_76',
                        base__big: 'TicketAward_base__big_91',
                        base__hasAppearAnimation: 'TicketAward_base__hasAppearAnimation_09',
                        baseAppear: 'TicketAward_baseAppear_ef',
                        shine: 'TicketAward_shine_46',
                        shine_small_s: 'TicketAward_shine_small_s_22',
                        shine_small_m: 'TicketAward_shine_small_m_5b',
                        shine_big_s: 'TicketAward_shine_big_s_43',
                        shine_big_m: 'TicketAward_shine_big_m_80',
                        shine__left: 'TicketAward_shine__left_15',
                        shine__right: 'TicketAward_shine__right_4b',
                        arrow: 'TicketAward_arrow_d4',
                        blinkShape: 'TicketAward_blinkShape_17',
                        blink: 'TicketAward_blink_1b',
                        blinker: 'TicketAward_blinker_1e',
                    },
                    ne = R.strings.battle_pass.awardsWidget,
                    re = ({ count: e, onClick: t, size: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1],
                            c = Boolean(e),
                            d = c ? m.Ticket : void 0;
                        return n().createElement(
                            l.i,
                            { body: ne.description.ticket(), isEnabled: Boolean(ne.description.ticket()) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(ue.base, ue[`base__${a}`], c && ue.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (X.hY.sound('bp_highlight_02'), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        (X.hY.sound('play'), t());
                                    },
                                },
                                n().createElement(f, { size: a, isHover: o, type: d }),
                                n().createElement(A, { size: a, isHover: o, type: d }),
                                n().createElement(N, { size: a, isHover: o, type: m.Ticket, isDark: !c }),
                                n().createElement(y, { size: a, count: e }),
                                n().createElement(x, { size: a, isHover: o, title: ne.title.ticket(), isGold: c }),
                                c &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: s()(ue.shine, ue.shine__left) }),
                                        n().createElement('div', { className: s()(ue.shine, ue.shine__right) }),
                                        n().createElement('div', { className: ue.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: ue.blinkShape },
                                            n().createElement('div', { className: ue.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var se = a(3215),
                    oe = a(3946);
                const ie = (0, se.q3)()(
                        ({ observableModel: e, externalModel: t }) => {
                            const a = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                u = (0, oe.Om)((e) => {
                                    const u = a.root.get(),
                                        n = u.talerCount,
                                        r = u.notChosenRewardCount,
                                        s = u.bpcoinCount,
                                        o = u.ticketsCount,
                                        i = u.isChooseRewardsEnabled,
                                        l = u.tankmenScreenID,
                                        c = u.isTalerEnabled,
                                        d = u.isBpCoinEnabled,
                                        _ = u.isTicketsEnabled,
                                        E = a.collectionEntryPoint.get(),
                                        g = E.collectionItemCount,
                                        p = E.newCollectionItemCount,
                                        b = E.maxCollectionItemCount,
                                        h = E.isFirstEnter,
                                        A = E.isCollectionsEnabled;
                                    return [
                                        {
                                            type: m.Award,
                                            props: {
                                                size: e,
                                                count: r,
                                                disabled: !i,
                                                onClick: t.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: r > 0,
                                        },
                                        {
                                            type: m.Ticket,
                                            props: {
                                                size: e,
                                                count: o,
                                                onClick: t.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: _,
                                        },
                                        {
                                            type: m.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: t.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: m.Taler,
                                            props: { size: e, count: n, onClick: t.createCallbackNoArgs('showTalers') },
                                            condition: c,
                                        },
                                        {
                                            type: m.Collection,
                                            props: {
                                                size: e,
                                                count: g,
                                                maxCount: b,
                                                newItemsCount: p,
                                                hasTrigger: h,
                                                onClick: t.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: A,
                                        },
                                        {
                                            type: m.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                tankmenScreenID: l,
                                                onClick: t.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: 0 !== l,
                                        },
                                    ];
                                });
                            return Object.assign({}, a, { computes: { awardsList: u } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    le = ie[0],
                    ce = ie[1],
                    de = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    _e = (0, i.Pi)(({ size: e, classNames: t }) => {
                        const a = ce().model;
                        return n().createElement(
                            'div',
                            { className: s()(de.base, de[`base__${e}`], null == t ? void 0 : t.base) },
                            o.UI(
                                a.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    n().createElement(
                                        'div',
                                        { key: e.type, className: s()(de.award, null == t ? void 0 : t.award) },
                                        ((e, t) => {
                                            switch (e) {
                                                case m.Award:
                                                    return n().createElement(O, t);
                                                case m.Ticket:
                                                    return n().createElement(re, t);
                                                case m.Coin:
                                                    return n().createElement(H, t);
                                                case m.Taler:
                                                    return n().createElement(ae, t);
                                                case m.Collection:
                                                    return n().createElement(Z, t);
                                                case m.Commander:
                                                    return n().createElement(J, t);
                                                default:
                                                    return (console.warn('Unknown award type: ', e), null);
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    me = ({ size: e = E.Small, context: t = 'model', classNames: a }) =>
                        n().createElement(
                            le,
                            { options: { context: t } },
                            n().createElement(_e, { size: e, classNames: a }),
                        );
            },
            8596: (e, t, a) => {
                'use strict';
                a.d(t, { G4: () => w });
                var u = a(6483),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r);
                const o = (e, t) => {
                    const a = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            a = e.path.$dyn('default');
                        return t || a;
                    })(e).$dyn(`${t.name}${a}`);
                };
                let i;
                !(function (e) {
                    ((e.Season = 'season'), (e.Chapter = 'chapter'));
                })(i || (i = {}));
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
                var c = a(9485);
                const d = {
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
                        size: t,
                        isGold: a,
                        isForRewardScreen: u,
                        curState: r,
                        isFirstLevel: o,
                        showProgressionCompleted: i,
                    }) => {
                        const l = n()(d.base, d[`base__${t}`]),
                            c = n()(
                                d.text,
                                d.text__filtered,
                                d[`text__${t}`],
                                d[`text__${r}`],
                                i && d.text__hideWithDelay,
                                o && d.text__new,
                                u && d.text__rewardScreen,
                            ),
                            _ = n()(
                                d.textWithBlend,
                                o && d.text__new,
                                i && d.text__hideWithDelay,
                                d[`textWithBlend__${r}`],
                            ),
                            m = n()(d.text, d.text__blended, d[`text__${t}`], u && d.text__rewardScreen),
                            E = n()(
                                d.textMask,
                                a && d.textMask__gold,
                                u && d.textMask__animated,
                                a && u && d.textMask__goldContrast,
                                d[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: c }, e),
                            s().createElement(
                                'div',
                                { className: _ },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: E }),
                            ),
                        );
                    };
                var m = a(8546);
                const E = {
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
                    g = (e, t) => {
                        const a = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case m.$u.Small:
                                    return 'l';
                                case m.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${a}`;
                    },
                    p = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: u,
                            hasProgression: r,
                            isGolden: l,
                            labelAnimation: d,
                            newLabelAnimation: p,
                            isChapterChosen: b = !1,
                            chapterID: h = 0,
                            seasonNum: A = -1,
                            isProgressionCompleted: v = !1,
                            hasBeenActive: f = !1,
                            isChapterSelection: C = !1,
                            isProgression: D = !1,
                        }) => {
                            let F = '',
                                B = '';
                            a === m.$u.Small
                                ? ((F = 'Small'), (B = '__small'))
                                : a === m.$u.Micro && ((F = 'Micro'), (B = '__micro'));
                            const w = u === m.Bq.SwitchedChapterRightNow,
                                S = u === m.Bq.CompletedRightNow,
                                y = ((e, t, a, u, n) => (e || n ? t || !a : t || !u))(C, v, f, b, D),
                                P = !D && !C;
                            return s().createElement(
                                s().Fragment,
                                null,
                                y
                                    ? s().createElement('div', {
                                          className: n()(E.icon, B && E[`icon${B}`], S && E[`icon__animated${F}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = g(l, a);
                                                  if (P) {
                                                      if (v) {
                                                          const a = { path: e.icon, name: i.Season, id: A };
                                                          return o(a, { name: 'icon', postfix: t });
                                                      }
                                                      if (!b) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, h, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  E.label,
                                                  E[`label${B}`],
                                                  w && E.label__new,
                                                  w && E[`label__new${F}`],
                                                  !S && v && E.label__disabled,
                                                  E[`label__${d}${F}`],
                                                  r && E[`label__hasProgress${F}`],
                                                  r && E[`label__hasProgress${F}${D ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(_, {
                                              level: t,
                                              size: a,
                                              isGold: l,
                                              isFirstLevel: w,
                                              curState: d,
                                              showProgressionCompleted: S,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                E.label,
                                                E[`label${B}`],
                                                w && E.label__new,
                                                w && E[`label__new${F}`],
                                                E[`label__${p}${F}`],
                                                r && E[`label__hasProgress${F}`],
                                            ),
                                        },
                                        s().createElement(_, {
                                            level: e,
                                            size: a,
                                            isGold: l,
                                            isFirstLevel: w,
                                            curState: p,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var b = a(1975);
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
                    A = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: u,
                            size: r,
                        }) => {
                            const o = n()(h.base, h[`base__${r}`], a && h.base__completed, !a && u && h.base__hidden);
                            return s().createElement(
                                'div',
                                { className: o },
                                s().createElement(b.ko, {
                                    key: e.to,
                                    size: b.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                let f, C;
                (!(function (e) {
                    ((e.Closed = 'closed'), (e.Open = 'open'));
                })(f || (f = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'));
                    })(C || (C = {})));
                const D = (e, t, a, u, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: u },
                            s = e ? f.Open : f.Closed,
                            l = ((e, t) =>
                                e
                                    ? C.Gold
                                    : t === m.Bq.Completed || t === m.Bq.CompletedRightNow
                                      ? C.Completed
                                      : C.Initial)(t, a),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${o(r, { name: 'emblem', postfix: `${s}_${l}${c}` })})` };
                    },
                    F = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${o(a, { name: 'extra', postfix: t })})` };
                    },
                    B = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Chapter, id: e };
                        return { backgroundImage: `url(${o(a, { name: 'extra', postfix: t })})` };
                    },
                    w = (0, r.memo)((e) => {
                        const t = e.progression,
                            a = e.size,
                            u = e.battlePassState,
                            r = e.hasBattlePass,
                            o = e.isChapterChosen,
                            c = e.hasBeenActive,
                            d = void 0 !== c && c,
                            _ = e.isChapterSelection,
                            E = void 0 !== _ && _,
                            g = e.isOpen,
                            b = void 0 !== g && g,
                            h = e.isProgression,
                            f = void 0 !== h && h,
                            C = e.showProgressBar,
                            w = void 0 === C || C,
                            S = e.isExtra,
                            y = void 0 !== S && S,
                            P = e.chapterID,
                            k = e.seasonNum,
                            N = e.clickable,
                            T = void 0 === N || N,
                            L = ((e) => {
                                switch (e) {
                                    case m.$u.Small:
                                        return 'small';
                                    case m.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(a),
                            x = u === m.Bq.CompletedRightNow,
                            I = r || u === m.Bq.Bought,
                            M = (u === m.Bq.Completed || x) && I,
                            O = (u === m.Bq.Completed || x) && !I,
                            $ = M || O,
                            W = void 0 !== t.from,
                            H = w && ((W && o) || d),
                            G = R.images.gui.maps.icons.battlePass.logo.extra.$dyn(`${i.Chapter}_${P}`);
                        return s().createElement(
                            'div',
                            { className: l.base },
                            y &&
                                s().createElement('div', {
                                    className: n()(l.extra, L && l[`extra__${L}`]),
                                    style: G ? B(P, L) : F(k, L),
                                }),
                            s().createElement(
                                'div',
                                {
                                    className: n()(l.image, L && l[`image__${L}`], T && l.image__clickable),
                                    style: D(b, I, u, P, L),
                                },
                                u !== m.Bq.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            p,
                                            v(
                                                {
                                                    hasProgression: W,
                                                    isGolden: I,
                                                    isProgressionCompleted: $,
                                                    isChapterChosen: o,
                                                    hasBeenActive: d,
                                                    isChapterSelection: E,
                                                    isProgression: f,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        H &&
                                            s().createElement(A, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: x,
                                                isProgressionCompleted: $,
                                                size: a,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            8546: (e, t, a) => {
                'use strict';
                let u, n, r, s;
                (a.d(t, { $u: () => u, Bq: () => r }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(u || (u = {})),
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
                    })(s || (s = {})));
            },
            1481: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => _ });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6483),
                    s = a.n(r),
                    o = a(7727);
                const i = 'LoupeButton_base_ba',
                    l = 'LoupeButton_icon_44',
                    c = 'LoupeButton_iconHover_91',
                    d = 'LoupeButton_hoverArea_d0',
                    _ = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, u.useCallback)(() => (0, o.G)('highlight'), []),
                            r = (0, u.useCallback)(() => {
                                ((0, o.G)('play'), e());
                            }, [e]),
                            _ = s()(d, t);
                        return n().createElement(
                            'div',
                            { className: i, onClick: r, onMouseEnter: a },
                            n().createElement('div', { className: l }),
                            n().createElement('div', { className: c }),
                            t && n().createElement('div', { className: _ }),
                        );
                    };
            },
            734: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => A });
                var u = a(6483),
                    n = a.n(u),
                    r = a(2056),
                    s = a(9480),
                    o = a(7363),
                    i = a.n(o),
                    l = a(5689);
                const c = 'TankmanSkills_base_59',
                    d = 'TankmanSkills_skill_2d',
                    _ = 'TankmanSkills_zeroSkill_e7',
                    m = 'TankmanSkills_glow_b1',
                    E = 'TankmanSkills_zeroSkillIcon_f8',
                    g = 'TankmanSkills_skillIcon_9c',
                    p = 'TankmanSkills_skillIcon__specificPerk_23',
                    b = 'TankmanSkills_divider_38',
                    h = 'TankmanSkills_light_6b',
                    A = ({ skills: e, className: t = '' }) => {
                        const a = s.kd(e, (e) => e.isZero);
                        return i().createElement(
                            'div',
                            { className: n()(c, t) },
                            s.UI(e, (e, t) =>
                                i().createElement(
                                    'div',
                                    { key: `${e.name}_${t}`, className: d },
                                    i().createElement(
                                        r.u,
                                        {
                                            contentId:
                                                R.views.lobby.battle_pass.tooltips.CrewMemberSkillTooltip('resId'),
                                            args: { name: e.name, isZero: e.isZero, hasZeroPerk: void 0 !== a },
                                        },
                                        i().createElement(
                                            'div',
                                            null,
                                            e.isZero &&
                                                e.name === l.jw &&
                                                i().createElement(
                                                    'div',
                                                    { className: _ },
                                                    i().createElement('div', { className: m }),
                                                    i().createElement('div', { className: E }),
                                                ),
                                            i().createElement('div', {
                                                className: n()(g, e.name !== l.jw && p),
                                                style: {
                                                    backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${e.name}')`,
                                                },
                                            }),
                                        ),
                                    ),
                                    a === t && i().createElement('div', { className: b }),
                                ),
                            ),
                            i().createElement('div', { className: h }),
                        );
                    };
            },
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
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
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, u] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & u || n >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), u < n && (n = u));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > u; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, u];
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
        (__webpack_require__.j = 1488),
        (() => {
            var e = { 1488: 0, 7737: 0, 1730: 0, 8363: 0, 6660: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var u,
                        n,
                        [r, s, o] = a,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (u in s) __webpack_require__.o(s, u) && (__webpack_require__.m[u] = s[u]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); i < r.length; i++)
                        ((n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(886));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
