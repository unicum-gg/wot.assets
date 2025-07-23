(() => {
    var __webpack_modules__ = {
            1975: (e, u, t) => {
                'use strict';
                t.d(u, { $u: () => E.$, ko: () => A });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    i = t.n(n),
                    s = t(2468),
                    o = t(7442),
                    l = t(2407),
                    c = t(156),
                    E = t(7736),
                    _ = t(1635);
                t(6823);
                const m = c.Gh,
                    d = {
                        freezed: !1,
                        withStack: !1,
                        type: E.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = m,
                            size: t = E.$.Default,
                            animationSettings: a = d,
                            disabled: n = !1,
                            withoutBackground: A = !1,
                            value: F,
                            deltaFrom: D,
                            additionalKey: h,
                            lineRef: C,
                            onChangeAnimationState: B,
                            onEndAnimation: g,
                            onComplete: p,
                        }) => {
                            const b = (0, _.S)(F, e, D);
                            return i().createElement(
                                'div',
                                { className: r()(s.Z.base, s.Z[`base__${t}`]), style: (0, c.VQ)(u) },
                                !A && i().createElement(o.J, { size: t }),
                                i().createElement(l.r, {
                                    size: t,
                                    lineRef: C,
                                    disabled: n,
                                    value: b.value,
                                    deltaFrom: b.deltaFrom,
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
                'use strict';
                t.d(u, { J: () => l });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6483),
                    i = t.n(n),
                    s = t(7736),
                    o = t(2468);
                const l = ({ size: e = s.$.Default }) => {
                    const u = i()(o.Z.background, o.Z[`background__${e}`]);
                    return r().createElement('div', { className: u });
                };
            },
            8150: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => o });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6483),
                    i = t.n(n),
                    s = t(8804);
                const o = ({ size: e }) => {
                    const u = i()(s.Z.base, s.Z[`base__${e}`]);
                    return r().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                'use strict';
                t.d(u, { r: () => l });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6736),
                    i = t(5680),
                    s = t(2386);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
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
                        onChangeAnimationState: m,
                        onComplete: d,
                    }) => {
                        if (l === u)
                            return r().createElement(i.M, {
                                key: `${l}-${u}-${c}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: a,
                                onComplete: d,
                            });
                        const A = {
                            from: l,
                            to: u,
                            size: e,
                            additionalKey: c,
                            lineRef: t,
                            disabled: a,
                            animationSettings: E,
                            onComplete: d,
                            onEndAnimation: _,
                            onChangeAnimationState: m,
                        };
                        return E.withStack
                            ? r().createElement(s.F, A)
                            : r().createElement(n.H, o({ key: `${l}-${u}-${c}` }, A));
                    },
                );
            },
            1848: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => l });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6483),
                    i = t.n(n),
                    s = t(8150),
                    o = t(6664);
                const l = (0, a.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: l }) => {
                        const c = i()(
                                o.Z.base,
                                o.Z[`base__${e}`],
                                t && o.Z.base__disabled,
                                n && o.Z.base__finished,
                                l && o.Z.base__withoutBounce,
                            ),
                            E = !t && !n;
                        return r().createElement(
                            'div',
                            { className: c, style: a, ref: u },
                            r().createElement('div', { className: o.Z.pattern }),
                            r().createElement('div', { className: o.Z.gradient }),
                            E && r().createElement(s.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => d });
                var a = t(6483),
                    r = t.n(a),
                    n = t(122),
                    i = t(7363),
                    s = t.n(i),
                    o = t(8150),
                    l = t(6823),
                    c = t(6147);
                const E = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    d = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: d,
                            to: A,
                            onEndAnimation: F,
                            onChangeAnimationState: D,
                            className: h,
                        }) => {
                            const C = A < a,
                                B = (0, i.useState)(l.S.Idle),
                                g = B[0],
                                p = B[1],
                                b = g === l.S.End,
                                v = g === l.S.Idle,
                                f = g === l.S.Grow,
                                w = g === l.S.Shrink,
                                S = (0, i.useCallback)(
                                    (e) => {
                                        (p(e), D && D(e));
                                    },
                                    [D],
                                ),
                                x = (0, i.useCallback)(
                                    (e, u) =>
                                        (0, n.F)(() => {
                                            S(e);
                                        }, u),
                                    [S],
                                );
                            (0, i.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? x(l.S.Grow, u)
                                        : f
                                          ? x(l.S.Shrink, e)
                                          : w
                                            ? x(l.S.End, e)
                                            : void (b && F && F());
                            }, [x, t, b, f, v, w, F, u, e]);
                            const L = (0, i.useMemo)(() => Object.assign({ width: '100%' }, m(e), E(C)), [C, e]),
                                y = (0, i.useMemo)(() => Object.assign({ width: '0%' }, m(e), E(C)), [C, e]),
                                P = (0, i.useMemo)(() => Object.assign({ width: '0%' }, _(C, a), m(e)), [a, C, e]),
                                T = (0, i.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, _(C, a), m(e)),
                                    [a, C, A, e],
                                );
                            if (b) return null;
                            const k = r()(c.Z.base, h, C && 0 === A && c.Z.base__withoutBounce);
                            return s().createElement(
                                'div',
                                { style: v ? P : T, className: k },
                                s().createElement(
                                    'div',
                                    { style: w ? y : L, className: c.Z.glow },
                                    s().createElement(o.$, { size: d }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                'use strict';
                t.d(u, { x: () => l });
                var a = t(7363),
                    r = t.n(a),
                    n = t(122),
                    i = t(6823),
                    s = t(8150),
                    o = t(9919);
                const l = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: c,
                        to: E,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const d = E < l,
                            A = (0, a.useState)(i.V.Idle),
                            F = A[0],
                            D = A[1],
                            h = F === i.V.In,
                            C = F === i.V.End,
                            B = F === i.V.Idle,
                            g = (0, a.useCallback)(
                                (e) => {
                                    (D(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, a.useEffect)(() => {
                            if (B && !t) {
                                const e = u;
                                return (0, n.F)(() => {
                                    g(i.V.In);
                                }, e);
                            }
                        }, [g, t, B, u]),
                            (0, a.useEffect)(() => {
                                if (h) {
                                    const t = e + u;
                                    return (0, n.F)(() => {
                                        (_ && _(), g(i.V.End));
                                    }, t);
                                }
                            }, [g, h, _, u, e]));
                        const p = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [d ? 'left' : 'right']: '0',
                                }),
                                [d, u, e],
                            ),
                            b = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [d ? 'left' : 'right']: '0',
                                }),
                                [d, u, e],
                            ),
                            v = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(l - E)}%`, left: `${d ? E : l}%` }),
                                [l, d, E],
                            );
                        return C
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: o.Z.base, style: v },
                                  r().createElement(
                                      'div',
                                      { style: B ? p : b, className: o.Z.delta },
                                      r().createElement(s.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => o });
                var a = t(7363),
                    r = t.n(a),
                    n = t(2434),
                    i = t(1848),
                    s = t(6823);
                const o = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: o,
                        disabled: l,
                        isComplete: c,
                        animationSettings: E,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const d = e < t,
                            A = (0, a.useState)(!1),
                            F = A[0],
                            D = A[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    (e === s.S.Shrink && D(!0), m && m(e));
                                },
                                [m],
                            ),
                            C = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            B = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${E.line.duration}ms` }),
                                [E.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(i.t, {
                                size: u,
                                lineRef: o,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: d && 0 === e,
                                baseStyles: F ? B : C,
                            }),
                            t >= 0 &&
                                r().createElement(n.O, {
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
                'use strict';
                t.d(u, { D: () => s });
                var a = t(7363),
                    r = t.n(a),
                    n = t(5913),
                    i = t(1848);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: s,
                        disabled: o,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: E,
                        onEndAnimation: _,
                    }) => {
                        const m = (0, a.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(i.t, { size: u, lineRef: s, disabled: o, isComplete: l, baseStyles: m }),
                            t >= 0 &&
                                r().createElement(n.x, {
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
                'use strict';
                t.d(u, { H: () => c });
                var a = t(7363),
                    r = t.n(a),
                    n = t(7736),
                    i = t(828),
                    s = t(538);
                const o = ['onComplete', 'onEndAnimation'];
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
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, o);
                    const E = (0, a.useState)(!1),
                        _ = E[0],
                        m = E[1],
                        d = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== _ && m(e), e && u && u(), t && t());
                        }, [_, u, t, c.to]);
                    switch (c.animationSettings.type) {
                        case n.r.Simple:
                            return r().createElement(i.D, l({}, c, { onEndAnimation: d, isComplete: _ }));
                        case n.r.Growing:
                            return r().createElement(s.F, l({}, c, { onEndAnimation: d, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { S: () => a, V: () => r }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(r || (r = {})));
            },
            2386: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => o });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6736);
                const i = ['onEndAnimation'];
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
                const o = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, i);
                    const o = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            ((o.current.from = void 0), u && u());
                        }, [u]),
                        c = 'number' == typeof o.current.from ? o.current.from : t.from;
                    return (
                        (o.current.from = c),
                        r().createElement(
                            n.H,
                            s({}, t, {
                                onEndAnimation: l,
                                key: `${c}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            5680: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => i });
                var a = t(7363),
                    r = t.n(a),
                    n = t(1848);
                const i = ({ size: e, value: u, lineRef: t, disabled: i, onComplete: s }) => {
                    const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, a.useEffect)(() => {
                            l && s && s();
                        }, [l, s]),
                        r().createElement(n.t, { size: e, disabled: i, baseStyles: o, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                'use strict';
                t.d(u, { Gh: () => r, VQ: () => a });
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
            7736: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { $: () => a, r: () => r }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(r || (r = {})));
            },
            1635: (e, u, t) => {
                'use strict';
                t.d(u, { S: () => i });
                var a = t(7363),
                    r = t(7515);
                const n = (e, u, t) => {
                        if ('number' == typeof t) {
                            return ((0, r.u)(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    i = (e, u, t) =>
                        (0, a.useMemo)(() => {
                            const a = ((0, r.u)(0, u, e) / u) * 100;
                            return { value: a, deltaFrom: n(a, u, t) };
                        }, [t, u, e]);
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => a });
                const a = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            122: (e, u, t) => {
                'use strict';
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
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => n, onScaleUpdated: () => i }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, s),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(n, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = t(527),
                    r = t(2493);
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
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { O: () => n });
                var a = t(5959),
                    r = t(514);
                const n = { view: t(7641), client: a, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s, hY: () => i });
                var a = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, a.playSound)(r[u])), e), {}),
                    i = Object.assign({}, n, { sound: a.playSound }),
                    s = { play: i, setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        arabic2roman: () => S,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => x,
                        events: () => i.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => g,
                        pxToRem: () => h,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    }));
                var a = t(9690),
                    r = t(3722),
                    n = t(6112),
                    i = t(6538),
                    s = t(8566);
                function o(e) {
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
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
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = a.cg,
                    x = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    i = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, r;
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
                    })(r || (r = {})));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => s, cg: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += a[t]), (e -= r[t]));
                    return u;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (i ? `${e}` : n(e));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                r.__instance = void 0;
                const n = r;
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => D });
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
                const r = a;
                var n = t(1358);
                var i = t(8613);
                let s;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    m = t(3138);
                const d = ['args'];
                function A(e, u, t, a, r, n, i) {
                    try {
                        var s = e[n](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function i(e) {
                                            A(n, a, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(n, a, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => h(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var g = t(7572);
                const p = r.instance,
                    b = {
                        DataTracker: n.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                _ = o.height,
                                d = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(d),
                                on: !0,
                                args: n,
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => n, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            9352: (e, u, t) => {
                'use strict';
                var a = t(7363),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, u, t) {
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
                        r = (function (e, u) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                !(function (e) {
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
                })(o || (o = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    _ = c.height,
                    m = Object.assign({ width: E, height: _ }, l(E, _, s)),
                    d = (0, a.createContext)(m),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, A);
                    const r = (0, a.useContext)(d),
                        i = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        _ = r.largeWidth,
                        m = r.mediumWidth,
                        F = r.smallWidth,
                        D = r.extraSmallWidth,
                        h = r.extraLargeHeight,
                        C = r.largeHeight,
                        B = r.mediumHeight,
                        g = r.smallHeight,
                        p = r.extraSmallHeight,
                        b = { extraLarge: h, large: C, medium: B, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return n(u, t, b);
                        if (t.largeWidth && _) return n(u, t, b);
                        if (t.mediumWidth && m) return n(u, t, b);
                        if (t.smallWidth && F) return n(u, t, b);
                        if (t.extraSmallWidth && D) return n(u, t, b);
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
                };
                F.defaultProps = {
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
                (0, a.memo)(F);
                const D = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = ({ children: e }) => {
                        const u = (0, a.useContext)(d),
                            t = (0, a.useState)(u),
                            n = t[0],
                            o = t[1],
                            c = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    a = i.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            E = (0, a.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        (D(() => {
                            (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E));
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    (i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', E));
                                },
                                [c, E],
                            ));
                        const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return r().createElement(d.Provider, { value: _ }, e);
                    };
                var C = t(6483),
                    B = t.n(C),
                    g = t(926),
                    p = t.n(g);
                let b, v, f;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(f || (f = {})));
                const w = () => {
                        const e = (0, a.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_HEIGHT,
                        [f.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [f.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL,
                        [b.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [b.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [b.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, S);
                        const n = w(),
                            i = n.mediaWidth,
                            s = n.mediaHeight,
                            o = n.mediaSize;
                        return r().createElement('div', x({ className: B()(t, L[i], y[s], P[o]) }, a), u);
                    },
                    k = ['children'];
                const M = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, k);
                    return r().createElement(h, null, r().createElement(T, t, u));
                };
                var O = t(1533),
                    I = t.n(O);
                function N(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const H = {
                        playHighlight() {
                            N('highlight');
                        },
                        playClick() {
                            N('play');
                        },
                        playYes() {
                            N('yes1');
                        },
                    },
                    $ = {
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
                    G = [
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class U extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && N(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && N(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            n = e.side,
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, G)),
                            m = B()($.base, $[`base__${i}`], $[`base__${n}`], null == s ? void 0 : s.base),
                            d = B()($.icon, $[`icon__${i}`], $[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = B()($.glow, null == s ? void 0 : s.glow),
                            F = B()($.caption, $[`caption__${i}`], null == s ? void 0 : s.caption),
                            D = B()($.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            W(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== i && r().createElement('div', { className: $.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                U.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var z = t(5521),
                    j = t(9916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = z.n.NONE, u = V, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== z.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t, r]);
                }
                var X = t(3403);
                let Y, Z;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(Y || (Y = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(Z || (Z = {})));
                function K() {
                    return !1;
                }
                console.log;
                var Q = t(9174);
                function J(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ee(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ee(e, u);
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
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ae = te;
                function re(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function ne(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function ie(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(ae(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function se(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        var a;
                        const n = null == (a = e[r]) ? void 0 : a.value;
                        u(n, r, e) && t.push(n);
                    }
                    return t;
                }
                function oe(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const a = re(e[t]);
                        if (u(a, t, e)) return a;
                    }
                }
                function le(e, u = ',') {
                    let t = '';
                    for (let a = 0; a < e.length; a++) {
                        a > 0 && (t += u);
                        const r = ae(e, a);
                        t += null == r ? '' : String(r);
                    }
                    return t;
                }
                function ce(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, ae(e, t), t, e);
                    }
                    return a;
                }
                var Ee = t(3946);
                let _e;
                !(function (e) {
                    ((e.Regular = 'regular'),
                        (e.ExtraSingle = 'extraSingle'),
                        (e.ExtraDouble = 'extraDouble'),
                        (e.Other = 'other'));
                })(_e || (_e = {}));
                const me = {
                        [_e.Regular]: {
                            [b.ExtraSmall]: 242,
                            [b.Small]: 242,
                            [b.Medium]: 376,
                            [b.Large]: 452,
                            [b.ExtraLarge]: 608,
                        },
                        [_e.ExtraDouble]: { [b.Medium]: 300, [b.Large]: 360, [b.ExtraLarge]: 460 },
                    },
                    de = { [_e.ExtraDouble]: { [b.Small]: 10, [b.ExtraLarge]: 20 } },
                    Ae = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: s, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, a, r) => {
                                        var n;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (r.set(l, t), e && t(s(n)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = J(r.keys()); !(e = t()).done; ) n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            _ = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = Q.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Q.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = Q.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Q.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Q.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Q.aD)((u) => {
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
                                                                n = Object.entries(r),
                                                                i = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = Q.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Q.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
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
                                                cleanup: E,
                                            }),
                                            m = { mode: t, model: _, externalModel: o, cleanup: E };
                                        return {
                                            model: _,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    d = m[0],
                                    A = m[1],
                                    F = (0, a.useState)(() => E(n, s, l)),
                                    D = F[0],
                                    h = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? h(E(d, s, l)) : (_.current = !0);
                                    }, [l, d, s]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    r().createElement(t.Provider, { value: D }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = e.array('chapters'),
                                t = { root: e.object(), chapters: u },
                                a = (0, Ee.Om)(() => ie(u.get(), ({ isExtra: e }) => e)),
                                r = (0, Ee.Om)(() => ie(u.get(), ({ chapterState: e }) => e === Y.Active)),
                                n = (0, Ee.Om)(() =>
                                    (function (e, u) {
                                        if (Array.isArray(e)) return e.every(u);
                                        for (let t = 0; t < e.length; t++) if (!u(ae(e, t), t, e)) return !1;
                                        return !0;
                                    })(u.get(), ({ chapterState: e }) => e === Y.Completed),
                                ),
                                i = (0, Ee.Om)((e) => oe(u.get(), (u) => u.chapterID === e), { equals: K }),
                                s = (0, Ee.Om)((e) => {
                                    const t = oe(u.get(), (u) => u.chapterID === e);
                                    return {
                                        levelProgression: (null == t ? void 0 : t.levelProgression) || 0,
                                        currentLevel: (null == t ? void 0 : t.currentLevel) || 0,
                                    };
                                }),
                                o = (0, Ee.Om)(() => se(t.chapters.get(), (e) => !e.isExtra), { equals: K }),
                                l = (0, Ee.Om)(() => se(o(), (e) => e.chapterState === Y.Completed).length, {
                                    equals: K,
                                }),
                                c = (0, Ee.Om)(() => se(t.chapters.get(), (e) => e.isExtra)),
                                E = [2],
                                _ = (0, Ee.Om)(() => {
                                    if (!a()) return _e.Regular;
                                    switch (c().length) {
                                        case 1:
                                            return _e.ExtraSingle;
                                        case 2:
                                            return _e.ExtraDouble;
                                        default:
                                            return _e.Other;
                                    }
                                }),
                                m = (0, Ee.Om)((e) => {
                                    var u, t, a, r;
                                    const n = me[_e.Regular][e],
                                        i = null != (u = null == (t = me[_()]) ? void 0 : t[e]) ? u : n,
                                        s = null != (a = null == (r = de[_()]) ? void 0 : r[e]) ? a : 0;
                                    return { cardWidth: viewEnv.remToPx(i), cardOffset: viewEnv.remToPx(s) };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getChapterById: i,
                                    getProgressionInfoByChapterId: s,
                                    hasExtra: a,
                                    hasActive: r,
                                    isCompleted: n,
                                    regularChapters: o,
                                    extraChapters: c,
                                    regularChaptersCompleteCount: l,
                                    chaptersLineInfo: () =>
                                        ce(
                                            o(),
                                            (e, { chapterID: u, chapterState: t }, a) => (
                                                E.includes(a + 1) || e.push({ chapterID: u, chapterState: t }),
                                                e
                                            ),
                                            [],
                                        ),
                                    chaptersLayoutType: _,
                                    getChapterCardSize: m,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            selectChapter: e.createCallback((e) => ({ chapterID: e }), 'onChapterSelect'),
                            openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            close: e.createCallbackNoArgs('onClose'),
                            showPostProgression: e.createCallbackNoArgs('onShowPostProgression'),
                        }),
                    ),
                    Fe = Ae[0],
                    De = Ae[1],
                    he = 'App_base_26',
                    Ce = 'App_additionalBackground_c6',
                    Be = 'App_infoButtons_78',
                    ge = 'App_header_41';
                var pe = t(1281);
                let be;
                function ve(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function fe(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(be || (be = {}));
                const we = (e) => e.replace(/&nbsp;/g, ' '),
                    Se = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    xe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Le = (e, u, t = be.left) => e.split(u).reduce(t === be.left ? Se : xe, []),
                    ye = (() => {
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
                    Pe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Te = (e, u = be.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Pe.includes(t)) return ye(e);
                        if ('ja' === t) {
                            return (0, pe.D4)()
                                .parse(e)
                                .map((e) => we(e));
                        }
                        return ((e, u = be.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = we(e);
                            return (Le(r, /( )/, u).forEach((e) => (t = t.concat(Le(e, a, be.left)))), t);
                        })(e, u);
                    },
                    ke = 'FormatText_base_d0',
                    Me = ({ binding: e, text: u = '', classMix: t, alignment: n = be.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = i && e ? ve(u, e) : u;
                        return r().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                r().createElement(
                                    'div',
                                    { className: B()(ke, t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Te(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => r().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Oe =
                        (e, u) =>
                        (...t) => {
                            if (e(...t)) return u(...t);
                        };
                let Ie;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Ie || (Ie = {}));
                const Re = {
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
                    Ne = [
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
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const $e = (e) => {
                        let u = e.type,
                            t = e.children,
                            n = e.className,
                            i = e.classNames,
                            s = e.disabled,
                            o = void 0 !== s && s,
                            l = e.isVisibleLabel,
                            c = void 0 !== l && l,
                            E = e.soundHover,
                            _ = void 0 === E ? R.sounds.highlight() : E,
                            m = e.soundClick,
                            d = void 0 === m ? R.sounds.play() : m,
                            A = e.size,
                            F = void 0 === A ? 'normal' : A,
                            D = e.onClick,
                            h = e.onMouseEnter,
                            C = e.onMouseLeave,
                            g = e.onMouseDown,
                            p = e.onMouseUp,
                            b = e.onFocus,
                            v = e.onBlur,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ne);
                        const w = (0, a.useState)(!1),
                            S = w[0],
                            x = w[1],
                            L = (0, a.useState)(!1),
                            y = L[0],
                            P = L[1],
                            T = (0, a.useRef)(null),
                            k = () => !1 === o,
                            M = (e) => k() && ((e) => e.button === Ie.LEFT)(e),
                            O = Oe(k, (e) => {
                                null == D || D(e);
                            }),
                            I = Oe(M, (e) => {
                                (x(!0), null == g || g(e), d && N(d));
                            }),
                            H = Oe(M, (e) => {
                                (x(!1), null == p || p(e));
                            }),
                            $ = Oe(k, (e) => {
                                (P(!0), null == h || h(e), _ && N(_));
                            }),
                            G = Oe(k, (e) => {
                                null == b || b(e);
                            }),
                            W = Oe(k, (e) => {
                                null == v || v(e);
                            });
                        return r().createElement(
                            'div',
                            He(
                                {
                                    ref: T,
                                    className: B()(
                                        Re.base,
                                        o && Re.base__disabled,
                                        c && Re.base__visibleLabel,
                                        !o && S && Re.base__mouseDown,
                                        !o && y && Re.base__hovered,
                                        n,
                                    ),
                                    onClick: O,
                                    onMouseEnter: $,
                                    onMouseLeave: (e) => {
                                        (P(!1), x(!1), null == C || C(e));
                                    },
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: G,
                                    onBlur: W,
                                },
                                f,
                            ),
                            r().createElement('div', {
                                className: B()(
                                    Re.icon,
                                    Re[`icon__${F}`],
                                    Re[`icon__${u}`],
                                    null == i ? void 0 : i.icon,
                                ),
                            }),
                            t &&
                                r().createElement(
                                    'div',
                                    { className: B()(Re.label, Re[`label__${F}`], null == i ? void 0 : i.label) },
                                    t,
                                ),
                        );
                    },
                    Ge = [
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
                function We(e) {
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
                const Ue = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ze = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            h = void 0 === D ? 0 : D,
                            C = e.onShow,
                            B = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ge);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId'),
                                            r = '';
                                        var n;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (n = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [h],
                            ),
                            v = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Ue(t, d, { isMouseEvent: !0, on: !0, arguments: We(r) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, d, r, b, C]),
                            f = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        Ue(t, d, { on: !1 }, b),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, b, B]),
                            w = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (f(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === _ && f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === _ && f(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const qe = R.views.common.tooltip_window.simple_tooltip_content,
                    Xe = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, je);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, n, i, o]);
                        return r().createElement(
                            ze,
                            Ve(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? qe.SimpleTooltipHtmlContent('resId') : qe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    Ye = [];
                var Ze = t(9485);
                var Ke = t(9690);
                const Qe = (e, u) => e.split(',').includes(u),
                    Je = {
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
                let eu, uu;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(eu || (eu = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(uu || (uu = {})));
                const tu = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: a,
                    vehicleLvl: n,
                    tags: i = '',
                    size: s = eu.extraSmall,
                    type: o = uu.colored,
                    className: l,
                    classNames: c,
                    isShortName: E = !1,
                }) => {
                    const _ = `${((m = a), m.replace(/-/g, '_'))}${e ? '_elite' : ''}`;
                    var m;
                    const d = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                    return r().createElement(
                        'div',
                        { className: B()(Je.base, Je[`base__size${fe(s)}`], Je[`base__type${fe(o)}`], l) },
                        r().createElement(
                            'div',
                            { className: B()(Je.level, null == c ? void 0 : c.level) },
                            (0, Ke.HG)(n),
                        ),
                        r().createElement('div', {
                            className: B()(
                                Je.type,
                                e && Je[`type__elite${fe(s)}`],
                                Je[`type__${s}`],
                                null == c ? void 0 : c.typeIcon,
                            ),
                            style: a ? { backgroundImage: `url(${d})` } : void 0,
                        }),
                        Qe(i, 'premiumIGR') && r().createElement('div', { className: Je.premiumIGR }),
                        r().createElement('div', { className: B()(Je.name, null == c ? void 0 : c.name) }, E ? t : u),
                    );
                };
                let au, ru, nu, iu, su, ou, lu, cu;
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
                })(au || (au = {})),
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
                    })(ru || (ru = {})),
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
                    })(nu || (nu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(iu || (iu = {})),
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
                    })(su || (su = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ou || (ou = {})),
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
                    })(lu || (lu = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(cu || (cu = {})));
                au.Attachment;
                class Eu extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = j.B3.GOLD;
                        else e = j.B3.INTEGRAL;
                        const u = j.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Eu.defaultProps = { format: 'integral' };
                (au.Items,
                    au.Equipment,
                    au.Xp,
                    au.XpFactor,
                    au.Blueprints,
                    au.BlueprintsAny,
                    au.Goodies,
                    au.Berths,
                    au.Slots,
                    au.Tokens,
                    au.CrewSkins,
                    au.CrewBooks,
                    au.Customizations,
                    au.CreditsFactor,
                    au.TankmenXp,
                    au.TankmenXpFactor,
                    au.FreeXpFactor,
                    au.BattleToken,
                    au.LootBox,
                    au.PremiumUniversal,
                    au.NaturalCover,
                    au.BpCoin,
                    au.BattlePassSelectToken,
                    au.BattlaPassFinalAchievement,
                    au.BattleBadge,
                    au.BattlePassTicket,
                    au.BonusX5,
                    au.CrewBonusX3,
                    au.EpicSelectToken,
                    au.Comp7TokenWeeklyReward,
                    au.DeluxeGift,
                    au.ModernizedDevicesT1Gift,
                    au.ModernizedDevicesT2Gift,
                    au.ModernizedDevicesT3Gift,
                    au.BattleBoosterGift,
                    au.OptionalDevice,
                    au.Attachment,
                    au.Gold,
                    au.Credits,
                    au.Crystal,
                    au.FreeXp,
                    au.BattlePassPoints,
                    au.EquipCoin,
                    au.PremiumPlus,
                    au.Premium,
                    nu.Small,
                    nu.Big);
                var _u = t(8613);
                (Date.now(), _u.Ew.getRegionalDateTime, _u.Ew.getFormattedDateTime);
                var mu = t(8546);
                let du;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(du || (du = {}));
                (du.style, du.tankman);
                const Au = 'bp_highlight';
                var Fu = t(8596);
                const Du = 'Shield_base_ec',
                    hu = 'Shield_flag_a2',
                    Cu = 'Shield_flag__isChapterChosen_81',
                    Bu = 'Shield_flag__medium_78',
                    gu = 'Shield_emblem_59',
                    pu = 'Shield_chapterLogoIcon_4b',
                    bu = (0, X.Pi)(({ size: e, chapterID: u = 0 }) => {
                        const t = De().model,
                            a = t.root.get().seasonNum,
                            n = t.computes.getChapterById(u);
                        if (!n) return null;
                        const i = n.isBought,
                            s = n.isExtra,
                            o = n.chapterState,
                            l = t.computes.getProgressionInfoByChapterId(u),
                            c = l.currentLevel,
                            E = l.levelProgression,
                            _ = { level: c, to: E, from: E },
                            m = o === Y.Completed ? mu.Bq.Completed : i ? mu.Bq.Bought : mu.Bq.Free,
                            d = o === Y.Active,
                            A = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(_),
                            F = A || o !== Y.NotStarted,
                            D = F && m !== mu.Bq.Completed;
                        return r().createElement(
                            'div',
                            { className: Du },
                            r().createElement('div', {
                                className: B()(hu, e === mu.$u.Medium && Bu, D && Cu),
                                style: (0, Ze.fW)(u, e),
                            }),
                            r().createElement(
                                'div',
                                { className: gu },
                                r().createElement(Fu.G4, {
                                    progression: _,
                                    size: e,
                                    chapterID: u,
                                    seasonNum: a,
                                    battlePassState: m,
                                    hasBattlePass: i,
                                    hasBeenActive: F,
                                    isChapterSelection: !0,
                                    isOpen: D,
                                    isChapterChosen: d,
                                    showProgressBar: d,
                                    isExtra: s,
                                }),
                                D && r().createElement('div', { className: pu, style: (0, Ze.cs)(u, i, e) }),
                            ),
                        );
                    }),
                    vu = {
                        base: 'Chapter_base_f0',
                        base__regular: 'Chapter_base__regular_27',
                        base__extraSingle: 'Chapter_base__extraSingle_26',
                        base__extraDouble: 'Chapter_base__extraDouble_08',
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
                        base__active: 'Chapter_base__active_e5',
                        content__extraSingle: 'Chapter_content__extraSingle_0f',
                        content__extraDouble: 'Chapter_content__extraDouble_c8',
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
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const wu = R.strings.battle_pass,
                    Su = (0, X.Pi)(({ chapterID: e, className: u }) => {
                        const t = De(),
                            n = t.model,
                            i = t.controls,
                            s = n.computes.getChapterById(e);
                        if (!s) return null;
                        const o = s.chapterState,
                            l = s.styleName,
                            c = s.isVehicleInHangar,
                            E = s.vehicleInfo,
                            _ = s.finalRewardType,
                            m = s.tankmanNames,
                            d = s.isExtra,
                            A = w().mediaSize,
                            F = n.computes.getChapterCardSize(A).cardWidth,
                            D = n.computes.chaptersLayoutType(),
                            h = (0, a.useCallback)(
                                (u) => {
                                    (i.openPreview(e), u.stopPropagation());
                                },
                                [e, i],
                            ),
                            C = (function (e) {
                                const u = (0, a.useRef)(e);
                                return (
                                    (0, a.useLayoutEffect)(() => {
                                        u.current = e;
                                    }),
                                    (0, a.useCallback)((...e) => (0, u.current)(...e), Ye)
                                );
                            })(() => {
                                N(Au);
                            }),
                            g = A <= b.Medium ? mu.$u.Small : mu.$u.Medium,
                            p = o === Y.Completed,
                            v = o === Y.Active,
                            f = wu.chapter.fullNameUppercased.$num(e);
                        return r().createElement(
                            'div',
                            {
                                className: B()(vu.base, vu[`base__${o}`], vu[`base__${D}`], u),
                                onMouseEnter: C,
                                onClick: () => {
                                    (H.playClick(), i.selectChapter(e));
                                },
                                style: { width: F },
                            },
                            r().createElement(
                                'div',
                                { className: vu.bg, style: (0, Ze.TZ)(e) },
                                r().createElement('div', { className: vu.vehicleImg, style: (0, Ze.OH)(e) }),
                                r().createElement('div', { className: vu.bgHover }),
                                v && r().createElement('div', { className: vu.frame }),
                            ),
                            r().createElement(
                                'div',
                                { className: B()(vu.content, d && vu[`content__${D}`]) },
                                r().createElement(
                                    'div',
                                    { className: vu.shieldWrapper },
                                    v && r().createElement('div', { className: vu.shieldShine }),
                                    r().createElement(
                                        'div',
                                        { className: vu.shield },
                                        r().createElement(bu, { size: g, chapterID: e }),
                                    ),
                                ),
                                p && r().createElement('div', { className: vu.completedIcon }),
                                r().createElement('div', { className: vu.title }, f),
                                r().createElement(
                                    'div',
                                    { className: vu.vehicleStyle },
                                    _ !== Z.Tankman &&
                                        r().createElement(
                                            'div',
                                            { className: vu.preview },
                                            r().createElement(
                                                'div',
                                                { className: vu.previewWrapper },
                                                r().createElement($e, {
                                                    type: 'preview',
                                                    onClick: h,
                                                    size: A < b.Medium ? 'small' : 'normal',
                                                }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: vu.styleTitle },
                                        ((e, u) => {
                                            switch (e) {
                                                case Z.Style:
                                                    return r().createElement(Me, {
                                                        text: wu.chapterChoice.stylePreview.name(),
                                                        binding: { styleName: u },
                                                    });
                                                case Z.Tankman:
                                                    return r().createElement(
                                                        'div',
                                                        { className: vu.crewTitle },
                                                        r().createElement(Me, {
                                                            text: wu.chapterChoice.crewMember.reward(),
                                                        }),
                                                    );
                                                case Z.Vehicle:
                                                    return r().createElement(Me, {
                                                        text: wu.chapterChoice.premiumVehicle.reward(),
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(_, l),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: vu.vehicleTitle },
                                        ((e, u, t, a) => {
                                            const n = a
                                                ? { level: vu.extraLevel, name: vu.extraName }
                                                : { level: vu.level, name: vu.name };
                                            switch (e) {
                                                case Z.Style:
                                                    return r().createElement(Me, {
                                                        text: wu.chapterChoice.stylePreview.forLabel(),
                                                        binding: {
                                                            vehicleName: r().createElement(
                                                                tu,
                                                                fu({}, t, { classNames: n }),
                                                            ),
                                                        },
                                                    });
                                                case Z.Tankman:
                                                    return r().createElement(Me, {
                                                        classMix: vu.crewSubtitle,
                                                        text: le(u, wu.common.comma()),
                                                    });
                                                case Z.Vehicle:
                                                    return r().createElement(Me, {
                                                        text: wu.chapterChoice.stylePreview.extraLabel(),
                                                        binding: {
                                                            vehicleName: r().createElement(
                                                                tu,
                                                                fu({}, t, { classNames: n }),
                                                            ),
                                                        },
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(_, m, E, d),
                                        _ === Z.Style &&
                                            c &&
                                            r().createElement(
                                                Xe,
                                                { body: wu.chapterChoice.vehicleInHangar.tooltip.text() },
                                                r().createElement('div', { className: vu.vehicleInHangar }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xu = {
                        base: 'ChapterPostProgressionLine_base_d0',
                        circleShine: 'ChapterPostProgressionLine_circleShine_6b',
                        base__hovered: 'ChapterPostProgressionLine_base__hovered_8c',
                        chapterLine: 'ChapterPostProgressionLine_chapterLine_00',
                        circle: 'ChapterPostProgressionLine_circle_2c',
                        circle__completed: 'ChapterPostProgressionLine_circle__completed_c2',
                        verticalChapterLine: 'ChapterPostProgressionLine_verticalChapterLine_0e',
                        verticalChapterLine__completed: 'ChapterPostProgressionLine_verticalChapterLine__completed_7c',
                    },
                    Lu = ({ chapterState: e, isButtonHovered: u }) => {
                        const t = w().mediaSize,
                            a = viewEnv.remToPx(t <= b.Small ? 47 : 57),
                            n = e === Y.Completed ? a + 1 : a,
                            i = viewEnv.remToPx(4);
                        return r().createElement(
                            'div',
                            { className: B()(xu.base, u && xu.base__hovered) },
                            e === Y.Completed && r().createElement('div', { className: xu.circleShine }),
                            r().createElement(
                                'svg',
                                {
                                    width: viewEnv.remToPx(8),
                                    height: n,
                                    viewBox: `0 0 ${viewEnv.remToPx(8)} ${n}`,
                                    className: xu.chapterLine,
                                },
                                r().createElement('circle', {
                                    cx: i,
                                    cy: i,
                                    r: viewEnv.remToPx(3),
                                    className: B()(xu.circle, xu[`circle__${e}`]),
                                }),
                                r().createElement('line', {
                                    x1: i,
                                    x2: i,
                                    y1: viewEnv.remToPx(7),
                                    y2: n,
                                    className: B()(xu.verticalChapterLine, xu[`verticalChapterLine__${e}`]),
                                }),
                            ),
                        );
                    };
                var yu = t(514);
                const Pu = {
                        base: 'SVGHorizontalLine_base_8f',
                        horizontalChapterLine: 'SVGHorizontalLine_horizontalChapterLine_a7',
                        horizontalChapterLine__completed: 'SVGHorizontalLine_horizontalChapterLine__completed_70',
                        base__active: 'SVGHorizontalLine_base__active_96',
                    },
                    Tu = (0, X.Pi)(({ activateLine: e }) => {
                        const u = De().model,
                            t = u.computes.chaptersLineInfo(),
                            a = w().mediaSize,
                            n = u.computes.getChapterCardSize(a),
                            i = n.cardWidth,
                            s = n.cardOffset;
                        return r().createElement(
                            'div',
                            { className: B()(Pu.base, e && Pu.base__active) },
                            r().createElement(
                                'svg',
                                { width: '100%', height: '100%', viewBox: '0 0 100% 100%' },
                                ne(t, ({ chapterID: e, chapterState: u }, t) =>
                                    r().createElement('line', {
                                        x1: i * t + Mu,
                                        x2: (i + s) * (t + 1) + Mu,
                                        y1: '0',
                                        y2: '0',
                                        key: `${e}_${t}`,
                                        className: B()(Pu.horizontalChapterLine, Pu[`horizontalChapterLine__${u}`]),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ku = {
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
                    Mu = viewEnv.remToPx(4),
                    Ou = R.strings.battle_pass.chapterChoice.postProgression,
                    Iu = (0, X.Pi)(({ setIsButtonHovered: e, isButtonHovered: u }) => {
                        const t = De(),
                            a = t.model,
                            n = t.controls,
                            i = a.computes.regularChapters(),
                            s = a.computes.regularChaptersCompleteCount(),
                            o = s === i.length,
                            l = w().mediaSize,
                            c = a.computes.getChapterCardSize(l),
                            E = ((e, u, t) => ({ width: (e + u + Mu) * (t - 1), left: e / 2 - Mu }))(
                                c.cardWidth,
                                c.cardOffset,
                                i.length,
                            );
                        return r().createElement(
                            'div',
                            { className: B()(ku.base, u && ku.base__hovered), style: E },
                            r().createElement(Tu, { activateLine: u }),
                            r().createElement(
                                'div',
                                { className: ku.buttonBlock },
                                r().createElement(
                                    'div',
                                    {
                                        className: ku.button,
                                        onMouseEnter: () => {
                                            (e(!0), yu.hY.sound('highlight'));
                                        },
                                        onMouseLeave: () => {
                                            e(!1);
                                        },
                                        onClick: () => {
                                            (n.showPostProgression(), yu.hY.sound('play'));
                                        },
                                    },
                                    r().createElement('div', { className: ku.buttonText }, Ou.button.text()),
                                    !o &&
                                        r().createElement(
                                            'div',
                                            { className: ku.lockBlock },
                                            r().createElement('div', { className: ku.lock }),
                                            r().createElement('div', { className: ku.lockShine }),
                                        ),
                                ),
                                s !== i.length &&
                                    r().createElement(
                                        'div',
                                        { className: ku.postProgressionText },
                                        r().createElement(Me, {
                                            classMix: ku.text,
                                            text: Ou.text(),
                                            binding: {
                                                completedChaptersCount: r().createElement(
                                                    'span',
                                                    { className: ku.completedChaptersCount },
                                                    s,
                                                ),
                                                chaptersCount: i.length,
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    Ru = 'Separator_base_8a',
                    Nu = 'Separator_line_97',
                    Hu = 'Separator_line__top_a6',
                    $u = 'Separator_line__bottom_a0',
                    Gu = 'Separator_plus_41',
                    Wu = () =>
                        r().createElement(
                            'div',
                            { className: Ru },
                            r().createElement('div', { className: B()(Nu, Hu) }),
                            r().createElement('div', { className: Gu }),
                            r().createElement('div', { className: B()(Nu, $u) }),
                        ),
                    Uu = {
                        base: 'Chapters_base_81',
                        base__regular: 'Chapters_base__regular_24',
                        base__extraSingle: 'Chapters_base__extraSingle_13',
                        base__extraDouble: 'Chapters_base__extraDouble_83',
                        chaptersContainer: 'Chapters_chaptersContainer_17',
                        chapterWrapper: 'Chapters_chapterWrapper_51',
                        chapter: 'Chapters_chapter_da',
                    },
                    zu = (0, X.Pi)(() => {
                        const e = De().model,
                            u = e.chapters.get(),
                            t = e.computes.chaptersLayoutType(),
                            n = (e) => e === u.length - 1,
                            i = w().mediaSize,
                            s = e.computes.getChapterCardSize(i).cardOffset,
                            o = (0, a.useState)(!1),
                            l = o[0],
                            c = o[1];
                        return r().createElement(
                            'div',
                            { className: B()(Uu.base, Uu[`base__${t}`]) },
                            r().createElement(
                                'div',
                                { className: Uu.chaptersContainer },
                                ne(u, ({ chapterID: e, chapterState: u, isExtra: a }, i) =>
                                    r().createElement(
                                        r().Fragment,
                                        { key: e },
                                        t === _e.ExtraSingle && n(i) && r().createElement(Wu, null),
                                        r().createElement(
                                            'div',
                                            {
                                                className: Uu.chapterWrapper,
                                                style: Object.assign({}, !n(i) && s && { marginRight: s }),
                                            },
                                            r().createElement(Su, { chapterID: e, className: Uu.chapter }),
                                            !a && r().createElement(Lu, { chapterState: u, isButtonHovered: l }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(Iu, { isButtonHovered: l, setIsButtonHovered: c }),
                        );
                    }),
                    ju = 'Header_base_71',
                    Vu = 'Header_title_af',
                    qu = 'Header_description_cc',
                    Xu = 'Header_freePoints_05',
                    Yu = 'Header_freePointsInfo_f3',
                    Zu = 'Header_freePointsCount_a8',
                    Ku = 'Header_freePointsIcon_be',
                    Qu = R.strings.battle_pass.chapterChoice.freePoints,
                    Ju = (0, X.Pi)(({ title: e }) => {
                        const u = De().model,
                            t = u.root.get().freePoints,
                            a = !u.computes.isCompleted() && t > 0;
                        return r().createElement(
                            'div',
                            { className: ju },
                            r().createElement('div', { className: Vu }, e),
                            r().createElement(
                                'div',
                                { className: qu },
                                a &&
                                    r().createElement(
                                        'div',
                                        { className: Xu },
                                        Qu.description(),
                                        r().createElement(
                                            Xe,
                                            { header: Qu.tooltip.title(), body: Qu.tooltip.description() },
                                            r().createElement(
                                                'div',
                                                { className: Yu },
                                                r().createElement('span', { className: Zu }, t),
                                                r().createElement('span', { className: Ku }),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    et = R.strings.battle_pass,
                    ut = (0, X.Pi)(() => {
                        const e = De(),
                            u = e.model,
                            t = e.controls,
                            n = t.openAbout,
                            i = t.openPointsInfo,
                            s = t.onViewLoaded,
                            o = t.close,
                            l = u.root.get().isSeasonWithAdditionalBackground,
                            c = u.computes.hasExtra(),
                            E = u.computes.hasActive(),
                            _ = u.computes.isCompleted(),
                            m = c && l,
                            d = (0, a.useState)(!1),
                            A = d[0],
                            F = d[1];
                        var D;
                        return (
                            (D = o),
                            q(z.n.ESCAPE, D),
                            (0, a.useEffect)(
                                () =>
                                    ((e) => {
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
                                    })(() => {
                                        A || (s(), F(!0));
                                    }),
                                [A, s],
                            ),
                            r().createElement(
                                'div',
                                { className: he },
                                m && r().createElement('div', { className: Ce }),
                                r().createElement(
                                    'div',
                                    { className: Be },
                                    r().createElement(U, { caption: et.intro.aboutButton(), type: 'info', onClick: n }),
                                    r().createElement(U, {
                                        caption: et.howToEarnPoints.title(),
                                        type: 'info',
                                        onClick: i,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ge },
                                    r().createElement(Ju, {
                                        title: E || _ ? et.chapterChoice.activeTitle() : et.chapterChoice.title(),
                                    }),
                                ),
                                r().createElement(zu, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        r().createElement(M, null, r().createElement(Fe, null, r().createElement(ut, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9485: (e, u, t) => {
                'use strict';
                t.d(u, { OH: () => l, TZ: () => o, cs: () => i, fW: () => s, wD: () => n });
                var a = t(8546);
                const r = (e) => {
                        switch (e) {
                            case a.$u.Micro:
                                return 's';
                            case a.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    n = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            r = e.$dyn(`c_${u}${a}`),
                            n = String(u).slice(-1),
                            i = e.$dyn(`default_${n}${a}`);
                        return r || i;
                    },
                    i = (e, u, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            i = u ? 'BP' : '',
                            s = `${r(t)}${i}`;
                        return { backgroundImage: `url(${n(a, e, s)})` };
                    },
                    s = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = r(u);
                        return { backgroundImage: `url(${n(t, e, a)})` };
                    },
                    o = (e) => ({
                        backgroundImage: `url(${n(R.images.gui.maps.icons.battlePass.chapter_choice.commander, e)})`,
                    }),
                    l = (e) => ({
                        backgroundImage: `url(${n(R.images.gui.maps.icons.battlePass.chapter_choice.tank, e)})`,
                    });
            },
            8596: (e, u, t) => {
                'use strict';
                t.d(u, { G4: () => w });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    i = t.n(n);
                const s = (e, u) => {
                    const t = u.postfix ? `_${u.postfix}` : '';
                    return ((e) => {
                        const u = e.path.$dyn(`${e.name}_${e.id}`),
                            t = e.path.$dyn('default');
                        return u || t;
                    })(e).$dyn(`${u.name}${t}`);
                };
                let o;
                !(function (e) {
                    ((e.Season = 'season'), (e.Chapter = 'chapter'));
                })(o || (o = {}));
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
                        curState: n,
                        isFirstLevel: s,
                        showProgressionCompleted: o,
                    }) => {
                        const l = r()(E.base, E[`base__${u}`]),
                            c = r()(
                                E.text,
                                E.text__filtered,
                                E[`text__${u}`],
                                E[`text__${n}`],
                                o && E.text__hideWithDelay,
                                s && E.text__new,
                                a && E.text__rewardScreen,
                            ),
                            _ = r()(
                                E.textWithBlend,
                                s && E.text__new,
                                o && E.text__hideWithDelay,
                                E[`textWithBlend__${n}`],
                            ),
                            m = r()(E.text, E.text__blended, E[`text__${u}`], a && E.text__rewardScreen),
                            d = r()(
                                E.textMask,
                                t && E.textMask__gold,
                                a && E.textMask__animated,
                                t && a && E.textMask__goldContrast,
                                E[`textMask__${u}`],
                            );
                        return i().createElement(
                            'div',
                            { className: l },
                            i().createElement('div', { className: c }, e),
                            i().createElement(
                                'div',
                                { className: _ },
                                i().createElement('div', { className: m }, e),
                                i().createElement('div', { className: d }),
                            ),
                        );
                    };
                var m = t(8546);
                const d = {
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
                                case m.$u.Small:
                                    return 'l';
                                case m.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(u)}${t}`;
                    },
                    F = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: u,
                            size: t,
                            battlePassState: a,
                            hasProgression: n,
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
                                f = '';
                            t === m.$u.Small
                                ? ((v = 'Small'), (f = '__small'))
                                : t === m.$u.Micro && ((v = 'Micro'), (f = '__micro'));
                            const w = a === m.Bq.SwitchedChapterRightNow,
                                S = a === m.Bq.CompletedRightNow,
                                x = ((e, u, t, a, r) => (e || r ? u || !t : u || !a))(p, B, g, D, b),
                                L = !b && !p;
                            return i().createElement(
                                i().Fragment,
                                null,
                                x
                                    ? i().createElement('div', {
                                          className: r()(d.icon, f && d[`icon${f}`], S && d[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = A(l, t);
                                                  if (L) {
                                                      if (B) {
                                                          const t = { path: e.icon, name: o.Season, id: C };
                                                          return s(t, { name: 'icon', postfix: u });
                                                      }
                                                      if (!D) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, h, u);
                                              })()})`,
                                          },
                                      })
                                    : i().createElement(
                                          'div',
                                          {
                                              className: r()(
                                                  d.label,
                                                  d[`label${f}`],
                                                  w && d.label__new,
                                                  w && d[`label__new${v}`],
                                                  !S && B && d.label__disabled,
                                                  d[`label__${E}${v}`],
                                                  n && d[`label__hasProgress${v}`],
                                                  n && d[`label__hasProgress${v}${b ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          i().createElement(_, {
                                              level: u,
                                              size: t,
                                              isGold: l,
                                              isFirstLevel: w,
                                              curState: E,
                                              showProgressionCompleted: S,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    i().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                d.label,
                                                d[`label${f}`],
                                                w && d.label__new,
                                                w && d[`label__new${v}`],
                                                d[`label__${F}${v}`],
                                                n && d[`label__hasProgress${v}`],
                                            ),
                                        },
                                        i().createElement(_, {
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
                    C = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: u = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const s = r()(h.base, h[`base__${n}`], t && h.base__completed, !t && a && h.base__hidden);
                            return i().createElement(
                                'div',
                                { className: s },
                                i().createElement(D.ko, {
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
                const b = (e, u, t, a, r) => {
                        const n = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: o.Chapter, id: a },
                            i = e ? g.Open : g.Closed,
                            l = ((e, u) =>
                                e
                                    ? p.Gold
                                    : u === m.Bq.Completed || u === m.Bq.CompletedRightNow
                                      ? p.Completed
                                      : p.Initial)(u, t),
                            c = r.length > 0 ? `_${r}` : '';
                        return { backgroundImage: `url(${s(n, { name: 'emblem', postfix: `${i}_${l}${c}` })})` };
                    },
                    v = (e, u) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: o.Season, id: e };
                        return { backgroundImage: `url(${s(t, { name: 'extra', postfix: u })})` };
                    },
                    f = (e, u) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: o.Chapter, id: e };
                        return { backgroundImage: `url(${s(t, { name: 'extra', postfix: u })})` };
                    },
                    w = (0, n.memo)((e) => {
                        const u = e.progression,
                            t = e.size,
                            a = e.battlePassState,
                            n = e.hasBattlePass,
                            s = e.isChapterChosen,
                            c = e.hasBeenActive,
                            E = void 0 !== c && c,
                            _ = e.isChapterSelection,
                            d = void 0 !== _ && _,
                            A = e.isOpen,
                            D = void 0 !== A && A,
                            h = e.isProgression,
                            g = void 0 !== h && h,
                            p = e.showProgressBar,
                            w = void 0 === p || p,
                            S = e.isExtra,
                            x = void 0 !== S && S,
                            L = e.chapterID,
                            y = e.seasonNum,
                            P = e.clickable,
                            T = void 0 === P || P,
                            k = ((e) => {
                                switch (e) {
                                    case m.$u.Small:
                                        return 'small';
                                    case m.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(t),
                            M = a === m.Bq.CompletedRightNow,
                            O = n || a === m.Bq.Bought,
                            I = (a === m.Bq.Completed || M) && O,
                            N = (a === m.Bq.Completed || M) && !O,
                            H = I || N,
                            $ = void 0 !== u.from,
                            G = w && (($ && s) || E),
                            W = R.images.gui.maps.icons.battlePass.logo.extra.$dyn(`${o.Chapter}_${L}`);
                        return i().createElement(
                            'div',
                            { className: l.base },
                            x &&
                                i().createElement('div', {
                                    className: r()(l.extra, k && l[`extra__${k}`]),
                                    style: W ? f(L, k) : v(y, k),
                                }),
                            i().createElement(
                                'div',
                                {
                                    className: r()(l.image, k && l[`image__${k}`], T && l.image__clickable),
                                    style: b(D, O, a, L, k),
                                },
                                a !== m.Bq.AwaitSeason &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(
                                            F,
                                            B(
                                                {
                                                    hasProgression: $,
                                                    isGolden: O,
                                                    isProgressionCompleted: H,
                                                    isChapterChosen: s,
                                                    hasBeenActive: E,
                                                    isChapterSelection: d,
                                                    isProgression: g,
                                                },
                                                e,
                                                u,
                                            ),
                                        ),
                                        G &&
                                            i().createElement(C, {
                                                key: u.to,
                                                progression: u,
                                                showProgressionCompleted: M,
                                                isProgressionCompleted: H,
                                                size: t,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            8546: (e, u, t) => {
                'use strict';
                let a, r, n, i;
                (t.d(u, { $u: () => a, Bq: () => n }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(i || (i = {})));
            },
            2468: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, i = 0; i < u.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
                        r,
                        [n, i, s] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(9352));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
