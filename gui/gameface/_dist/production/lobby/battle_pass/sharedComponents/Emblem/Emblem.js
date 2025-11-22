(() => {
    'use strict';
    var e,
        t = {
            1975: (e, t, a) => {
                a.d(t, { $u: () => d.$, ko: () => h });
                var l = a(6483),
                    s = a.n(l),
                    n = a(7363),
                    o = a.n(n),
                    r = a(2468),
                    i = a(7442),
                    _ = a(2407),
                    m = a(156),
                    d = a(7736),
                    c = a(1635);
                a(6823);
                const b = m.Gh,
                    g = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    h = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = b,
                            size: a = d.$.Default,
                            animationSettings: l = g,
                            disabled: n = !1,
                            withoutBackground: h = !1,
                            value: u,
                            deltaFrom: p,
                            additionalKey: w,
                            lineRef: f,
                            onChangeAnimationState: v,
                            onEndAnimation: E,
                            onComplete: L,
                            className: S,
                        }) => {
                            const x = (0, c.S)(u, e, p);
                            return o().createElement(
                                'div',
                                { className: s()(r.Z.base, S, r.Z[`base__${a}`]), style: (0, m.VQ)(t) },
                                !h && o().createElement(i.J, { size: a }),
                                o().createElement(_.r, {
                                    size: a,
                                    lineRef: f,
                                    disabled: n,
                                    value: x.value,
                                    deltaFrom: x.deltaFrom,
                                    additionalKey: w,
                                    animationSettings: l,
                                    onEndAnimation: E,
                                    onChangeAnimationState: v,
                                    onComplete: L,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                a.d(t, { J: () => _ });
                var l = a(6483),
                    s = a.n(l),
                    n = a(7363),
                    o = a.n(n),
                    r = a(2468),
                    i = a(7736);
                const _ = ({ size: e = i.$.Default }) => {
                    const t = s()(r.Z.background, r.Z[`background__${e}`]);
                    return o().createElement('div', { className: t });
                };
            },
            8150: (e, t, a) => {
                a.d(t, { $: () => i });
                var l = a(6483),
                    s = a.n(l),
                    n = a(7363),
                    o = a.n(n),
                    r = a(8804);
                const i = ({ size: e }) => {
                    const t = s()(r.Z.base, r.Z[`base__${e}`]);
                    return o().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                a.d(t, { r: () => _ });
                var l = a(7363),
                    s = a.n(l),
                    n = a(6736),
                    o = a(5680),
                    r = a(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const _ = (0, l.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: l,
                        deltaFrom: _,
                        additionalKey: m,
                        animationSettings: d,
                        onEndAnimation: c,
                        onChangeAnimationState: b,
                        onComplete: g,
                    }) => {
                        if (_ === t)
                            return s().createElement(o.M, {
                                key: `${_}-${t}-${m}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: l,
                                onComplete: g,
                            });
                        const h = {
                            from: _,
                            to: t,
                            size: e,
                            additionalKey: m,
                            lineRef: a,
                            disabled: l,
                            animationSettings: d,
                            onComplete: g,
                            onEndAnimation: c,
                            onChangeAnimationState: b,
                        };
                        return d.withStack
                            ? s().createElement(r.F, h)
                            : s().createElement(n.H, i({ key: `${_}-${t}-${m}` }, h));
                    },
                );
            },
            1848: (e, t, a) => {
                a.d(t, { t: () => _ });
                var l = a(6483),
                    s = a.n(l),
                    n = a(7363),
                    o = a.n(n),
                    r = a(8150),
                    i = a(6664);
                const _ = (0, n.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: l, isComplete: n, withoutBounce: _ }) => {
                        const m = s()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                a && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                _ && i.Z.base__withoutBounce,
                            ),
                            d = !a && !n;
                        return o().createElement(
                            'div',
                            { className: m, style: l, ref: t },
                            o().createElement('div', { className: i.Z.pattern }),
                            o().createElement('div', { className: i.Z.gradient }),
                            d && o().createElement(r.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                a.d(t, { O: () => g });
                var l = a(6483),
                    s = a.n(l),
                    n = a(122),
                    o = a(7363),
                    r = a.n(o),
                    i = a(8150),
                    _ = a(6823),
                    m = a(6147);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    c = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    b = (e) => ({ transitionDuration: `${e}ms` }),
                    g = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: l,
                            size: g,
                            to: h,
                            onEndAnimation: u,
                            onChangeAnimationState: p,
                            className: w,
                        }) => {
                            const f = h < l,
                                v = (0, o.useState)(_.S.Idle),
                                E = v[0],
                                L = v[1],
                                S = E === _.S.End,
                                x = E === _.S.Idle,
                                $ = E === _.S.Grow,
                                P = E === _.S.Shrink,
                                y = (0, o.useCallback)(
                                    (e) => {
                                        (L(e), p && p(e));
                                    },
                                    [p],
                                ),
                                C = (0, o.useCallback)(
                                    (e, t) =>
                                        (0, n.F)(() => {
                                            y(e);
                                        }, t),
                                    [y],
                                );
                            (0, o.useEffect)(() => {
                                if (!a)
                                    return x
                                        ? C(_.S.Grow, t)
                                        : $
                                          ? C(_.S.Shrink, e)
                                          : P
                                            ? C(_.S.End, e)
                                            : void (S && u && u());
                            }, [C, a, S, $, x, P, u, t, e]);
                            const B = (0, o.useMemo)(() => Object.assign({ width: '100%' }, b(e), d(f)), [f, e]),
                                M = (0, o.useMemo)(() => Object.assign({ width: '0%' }, b(e), d(f)), [f, e]),
                                k = (0, o.useMemo)(() => Object.assign({ width: '0%' }, c(f, l), b(e)), [l, f, e]),
                                I = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(h - l)}%` }, c(f, l), b(e)),
                                    [l, f, h, e],
                                );
                            if (S) return null;
                            const D = s()(m.Z.base, w, f && 0 === h && m.Z.base__withoutBounce);
                            return r().createElement(
                                'div',
                                { style: x ? k : I, className: D },
                                r().createElement(
                                    'div',
                                    { style: P ? M : B, className: m.Z.glow },
                                    r().createElement(i.$, { size: g }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                a.d(t, { x: () => _ });
                var l = a(122),
                    s = a(7363),
                    n = a.n(s),
                    o = a(8150),
                    r = a(6823),
                    i = a(9919);
                const _ = (0, s.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: _,
                        size: m,
                        to: d,
                        onEndAnimation: c,
                        onChangeAnimationState: b,
                    }) => {
                        const g = d < _,
                            h = (0, s.useState)(r.V.Idle),
                            u = h[0],
                            p = h[1],
                            w = u === r.V.In,
                            f = u === r.V.End,
                            v = u === r.V.Idle,
                            E = (0, s.useCallback)(
                                (e) => {
                                    (p(e), b && b(e));
                                },
                                [b],
                            );
                        ((0, s.useEffect)(() => {
                            if (v && !a) {
                                const e = t;
                                return (0, l.F)(() => {
                                    E(r.V.In);
                                }, e);
                            }
                        }, [E, a, v, t]),
                            (0, s.useEffect)(() => {
                                if (w) {
                                    const a = e + t;
                                    return (0, l.F)(() => {
                                        (c && c(), E(r.V.End));
                                    }, a);
                                }
                            }, [E, w, c, t, e]));
                        const L = (0, s.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [g ? 'left' : 'right']: '0',
                                }),
                                [g, t, e],
                            ),
                            S = (0, s.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [g ? 'left' : 'right']: '0',
                                }),
                                [g, t, e],
                            ),
                            x = (0, s.useMemo)(
                                () => ({ width: `${Math.abs(_ - d)}%`, left: `${g ? d : _}%` }),
                                [_, g, d],
                            );
                        return f
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: i.Z.base, style: x },
                                  n().createElement(
                                      'div',
                                      { style: v ? L : S, className: i.Z.delta },
                                      n().createElement(o.$, { size: m }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                a.d(t, { F: () => i });
                var l = a(7363),
                    s = a.n(l),
                    n = a(1848),
                    o = a(2434),
                    r = a(6823);
                const i = (0, l.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: _,
                        isComplete: m,
                        animationSettings: d,
                        onEndAnimation: c,
                        onChangeAnimationState: b,
                    }) => {
                        const g = e < a,
                            h = (0, l.useState)(!1),
                            u = h[0],
                            p = h[1],
                            w = (0, l.useCallback)(
                                (e) => {
                                    (e === r.S.Shrink && p(!0), b && b(e));
                                },
                                [b],
                            ),
                            f = (0, l.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            v = (0, l.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, {
                                size: t,
                                lineRef: i,
                                disabled: _,
                                isComplete: m,
                                withoutBounce: g && 0 === e,
                                baseStyles: u ? v : f,
                            }),
                            a >= 0 &&
                                s().createElement(o.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: w,
                                    freezed: d.freezed,
                                    onEndAnimation: c,
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
                a.d(t, { D: () => r });
                var l = a(7363),
                    s = a.n(l),
                    n = a(1848),
                    o = a(5913);
                const r = (0, l.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: i,
                        isComplete: _,
                        animationSettings: m,
                        onChangeAnimationState: d,
                        onEndAnimation: c,
                    }) => {
                        const b = (0, l.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${m.line.duration}ms`,
                                transitionDelay: `${m.line.delay}ms`,
                            }),
                            [m.line.delay, m.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, { size: t, lineRef: r, disabled: i, isComplete: _, baseStyles: b }),
                            a >= 0 &&
                                s().createElement(o.x, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    freezed: m.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: c,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, a) => {
                a.d(t, { H: () => m });
                var l = a(7363),
                    s = a.n(l),
                    n = a(7736),
                    o = a(538),
                    r = a(828);
                const i = ['onComplete', 'onEndAnimation'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = (0, l.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                l,
                                s = {},
                                n = Object.keys(e);
                            for (l = 0; l < n.length; l++) ((a = n[l]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, i);
                    const d = (0, l.useState)(!1),
                        c = d[0],
                        b = d[1],
                        g = (0, l.useCallback)(() => {
                            const e = 100 === m.to;
                            (e !== c && b(e), e && t && t(), a && a());
                        }, [c, t, a, m.to]);
                    switch (m.animationSettings.type) {
                        case n.r.Simple:
                            return s().createElement(r.D, _({}, m, { onEndAnimation: g, isComplete: c }));
                        case n.r.Growing:
                            return s().createElement(o.F, _({}, m, { onEndAnimation: g, isComplete: c }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                let l, s;
                (a.d(t, { S: () => l, V: () => s }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(s || (s = {})));
            },
            2386: (e, t, a) => {
                a.d(t, { F: () => i });
                var l = a(7363),
                    s = a.n(l),
                    n = a(6736);
                const o = ['onEndAnimation'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const i = (0, l.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                l,
                                s = {},
                                n = Object.keys(e);
                            for (l = 0; l < n.length; l++) ((a = n[l]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, o);
                    const i = (0, l.useRef)({}),
                        _ = (0, l.useCallback)(() => {
                            ((i.current.from = void 0), t && t());
                        }, [t]),
                        m = 'number' == typeof i.current.from ? i.current.from : a.from;
                    return (
                        (i.current.from = m),
                        s().createElement(
                            n.H,
                            r({}, a, {
                                onEndAnimation: _,
                                key: `${m}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                                from: m,
                            }),
                        )
                    );
                });
            },
            5680: (e, t, a) => {
                a.d(t, { M: () => o });
                var l = a(7363),
                    s = a.n(l),
                    n = a(1848);
                const o = ({ size: e, value: t, lineRef: a, disabled: o, onComplete: r }) => {
                    const i = (0, l.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        _ = 100 === t;
                    return (
                        (0, l.useEffect)(() => {
                            _ && r && r();
                        }, [_, r]),
                        s().createElement(n.t, { size: e, disabled: o, baseStyles: i, isComplete: _, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                a.d(t, { Gh: () => s, VQ: () => l });
                const l = (e) => {
                        var t, a, l, s, n, o, r, i, _, m, d, c, b, g, h, u, p, w, f, v;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (a = e.bg) ? void 0 : a.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (l = null == (s = e.bg) ? void 0 : s.heightSmall) ? l : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (n = e.line.filter) ? n : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (r = e.pattern.borderSize) ? r : '1rem',
                            '--progress-pattern-gradient':
                                null != (i = e.pattern.gradient)
                                    ? i
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (_ = e.pattern.gradientFinished)
                                    ? _
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (m = e.pattern.mixBlendMode) ? m : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (d = null == (c = e.glowSettings) ? void 0 : c.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (b = null == (g = e.glowSettings) ? void 0 : g.height) ? b : '100rem',
                            '--progress-glow-small-width':
                                null != (h = null == (u = e.glowSettings) ? void 0 : u.smallWidth) ? h : '44rem',
                            '--progress-glow-small-height':
                                null != (p = null == (w = e.glowSettings) ? void 0 : w.smallHeight) ? p : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (f = null == (v = e.glowSettings) ? void 0 : v.mixBlendMode) ? f : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    s = {
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
                let l, s;
                (a.d(t, { $: () => l, r: () => s }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(s || (s = {})));
            },
            1635: (e, t, a) => {
                a.d(t, { S: () => o });
                var l = a(7515),
                    s = a(7363);
                const n = (e, t, a) => {
                    if ('number' == typeof a) {
                        return ((0, l.u)(0, t, a) / t) * 100;
                    }
                    return e;
                };
                function o(e, t, a) {
                    return (0, s.useMemo)(() => {
                        const s = ((0, l.u)(0, t, e) / t) * 100;
                        return { value: s, deltaFrom: n(s, t, a) };
                    }, [a, t, e]);
                }
            },
            7515: (e, t, a) => {
                a.d(t, { u: () => l });
                const l = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            122: (e, t, a) => {
                a.d(t, { F: () => l });
                const l = (e, t) => {
                    let a;
                    const l = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        ('function' == typeof a && a(), clearTimeout(l));
                    };
                };
            },
            9485: (e, t, a) => {
                a.d(t, { wD: () => l });
                a(8546);
                const l = (e, t, a = '') => {
                    const l = a.length > 0 ? `_${a}` : a,
                        s = e.$dyn(`c_${t}${l}`),
                        n = String(t).slice(-1),
                        o = e.$dyn(`default_${n}${l}`);
                    return s || o;
                };
            },
            8596: (e, t, a) => {
                var l = a(6483),
                    s = a.n(l),
                    n = a(7363),
                    o = a.n(n);
                const r = (e, t) => {
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
                const _ = {
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
                var m = a(9485);
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
                    c = ({
                        level: e,
                        size: t,
                        isGold: a,
                        isForRewardScreen: l,
                        curState: n,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const _ = s()(d.base, d[`base__${t}`]),
                            m = s()(
                                d.text,
                                d.text__filtered,
                                d[`text__${t}`],
                                d[`text__${n}`],
                                i && d.text__hideWithDelay,
                                r && d.text__new,
                                l && d.text__rewardScreen,
                            ),
                            c = s()(
                                d.textWithBlend,
                                r && d.text__new,
                                i && d.text__hideWithDelay,
                                d[`textWithBlend__${n}`],
                            ),
                            b = s()(d.text, d.text__blended, d[`text__${t}`], l && d.text__rewardScreen),
                            g = s()(
                                d.textMask,
                                a && d.textMask__gold,
                                l && d.textMask__animated,
                                a && l && d.textMask__goldContrast,
                                d[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: _ },
                            o().createElement('div', { className: m }, e),
                            o().createElement(
                                'div',
                                { className: c },
                                o().createElement('div', { className: b }, e),
                                o().createElement('div', { className: g }),
                            ),
                        );
                    };
                var b = a(8546);
                const g = {
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
                    h = (e, t) => {
                        const a = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case b.$u.Small:
                                    return 'l';
                                case b.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${a}`;
                    },
                    u = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: l,
                            hasProgression: n,
                            isGolden: _,
                            labelAnimation: d,
                            newLabelAnimation: u,
                            isChapterChosen: p = !1,
                            chapterID: w = 0,
                            seasonNum: f = -1,
                            isProgressionCompleted: v = !1,
                            hasBeenActive: E = !1,
                            isChapterSelection: L = !1,
                            isProgression: S = !1,
                        }) => {
                            let x = '',
                                $ = '';
                            a === b.$u.Small
                                ? ((x = 'Small'), ($ = '__small'))
                                : a === b.$u.Micro && ((x = 'Micro'), ($ = '__micro'));
                            const P = l === b.Bq.SwitchedChapterRightNow,
                                y = l === b.Bq.CompletedRightNow,
                                C = ((e, t, a, l, s) => (e || s ? t || !a : t || !l))(L, v, E, p, S),
                                B = !S && !L;
                            return o().createElement(
                                o().Fragment,
                                null,
                                C
                                    ? o().createElement('div', {
                                          className: s()(g.icon, $ && g[`icon${$}`], y && g[`icon__animated${x}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = h(_, a);
                                                  if (B) {
                                                      if (v) {
                                                          const a = { path: e.icon, name: i.Season, id: f };
                                                          return r(a, { name: 'icon', postfix: t });
                                                      }
                                                      if (!p) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, m.wD)(e.chapterIcons, w, t);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  g.label,
                                                  g[`label${$}`],
                                                  P && g.label__new,
                                                  P && g[`label__new${x}`],
                                                  !y && v && g.label__disabled,
                                                  g[`label__${d}${x}`],
                                                  n && g[`label__hasProgress${x}`],
                                                  n && g[`label__hasProgress${x}${S ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(c, {
                                              level: t,
                                              size: a,
                                              isGold: _,
                                              isFirstLevel: P,
                                              curState: d,
                                              showProgressionCompleted: y,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                g.label,
                                                g[`label${$}`],
                                                P && g.label__new,
                                                P && g[`label__new${x}`],
                                                g[`label__${u}${x}`],
                                                n && g[`label__hasProgress${x}`],
                                            ),
                                        },
                                        o().createElement(c, {
                                            level: e,
                                            size: a,
                                            isGold: _,
                                            isFirstLevel: P,
                                            curState: u,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var p = a(1975);
                const w = {
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
                    f = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: l,
                            size: n,
                        }) => {
                            const r = s()(w.base, w[`base__${n}`], a && w.base__completed, !a && l && w.base__hidden);
                            return o().createElement(
                                'div',
                                { className: r },
                                o().createElement(p.ko, {
                                    key: e.to,
                                    size: p.$u.Small,
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
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                let E, L;
                (!(function (e) {
                    ((e.Closed = 'closed'), (e.Open = 'open'));
                })(E || (E = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'));
                    })(L || (L = {})));
                const S = (e, t, a, l, s) => {
                        const n = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: l },
                            o = e ? E.Open : E.Closed,
                            _ = ((e, t) =>
                                e
                                    ? L.Gold
                                    : t === b.Bq.Completed || t === b.Bq.CompletedRightNow
                                      ? L.Completed
                                      : L.Initial)(t, a),
                            m = s.length > 0 ? `_${s}` : '';
                        return { backgroundImage: `url(${r(n, { name: 'emblem', postfix: `${o}_${_}${m}` })})` };
                    },
                    x = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${r(a, { name: 'extra', postfix: t })})` };
                    };
                (0, n.memo)((e) => {
                    const t = e.progression,
                        a = e.size,
                        l = e.battlePassState,
                        n = e.hasBattlePass,
                        r = e.isChapterChosen,
                        i = e.hasBeenActive,
                        m = void 0 !== i && i,
                        d = e.isChapterSelection,
                        c = void 0 !== d && d,
                        g = e.isOpen,
                        h = void 0 !== g && g,
                        p = e.isProgression,
                        w = void 0 !== p && p,
                        E = e.showProgressBar,
                        L = void 0 === E || E,
                        $ = e.isExtra,
                        P = void 0 !== $ && $,
                        y = e.chapterID,
                        C = e.seasonNum,
                        B = e.clickable,
                        M = void 0 === B || B,
                        k = ((e) => {
                            switch (e) {
                                case b.$u.Small:
                                    return 'small';
                                case b.$u.Micro:
                                    return 'micro';
                                default:
                                    return '';
                            }
                        })(a),
                        I = l === b.Bq.CompletedRightNow,
                        D = n || l === b.Bq.Bought,
                        N = (l === b.Bq.Completed || I) && D,
                        z = (l === b.Bq.Completed || I) && !D,
                        A = N || z,
                        O = void 0 !== t.from,
                        R = L && ((O && r) || m);
                    return o().createElement(
                        'div',
                        { className: _.base },
                        P &&
                            o().createElement('div', {
                                className: s()(_.extra, k && _[`extra__${k}`]),
                                style: x(C, k),
                            }),
                        o().createElement(
                            'div',
                            {
                                className: s()(_.image, k && _[`image__${k}`], M && _.image__clickable),
                                style: S(h, D, l, y, k),
                            },
                            l !== b.Bq.AwaitSeason &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        u,
                                        v(
                                            {
                                                hasProgression: O,
                                                isGolden: D,
                                                isProgressionCompleted: A,
                                                isChapterChosen: r,
                                                hasBeenActive: m,
                                                isChapterSelection: c,
                                                isProgression: w,
                                            },
                                            e,
                                            t,
                                        ),
                                    ),
                                    R &&
                                        o().createElement(f, {
                                            key: t.to,
                                            progression: t,
                                            showProgressionCompleted: I,
                                            isProgressionCompleted: A,
                                            size: a,
                                        }),
                                ),
                        ),
                    );
                });
            },
            8546: (e, t, a) => {
                let l, s, n, o;
                (a.d(t, { $u: () => l, Bq: () => n }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(s || (s = {})),
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
                    })(o || (o = {})));
            },
            2468: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = {
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
                a.d(t, { Z: () => l });
                const l = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        a = {};
    function l(e) {
        var s = a[e];
        if (void 0 !== s) return s.exports;
        var n = (a[e] = { exports: {} });
        return (t[e](n, n.exports, l), n.exports);
    }
    ((l.m = t),
        (e = []),
        (l.O = (t, a, s, n) => {
            if (!a) {
                var o = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [a, s, n] = e[m], r = !0, i = 0; i < a.length; i++)
                        (!1 & n || o >= n) && Object.keys(l.O).every((e) => l.O[e](a[i]))
                            ? a.splice(i--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        e.splice(m--, 1);
                        var _ = s();
                        void 0 !== _ && (t = _);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
            e[m] = [a, s, n];
        }),
        (l.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (l.d(t, { a: t }), t);
        }),
        (l.d = (e, t) => {
            for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (l.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.j = 1730),
        (() => {
            var e = { 1730: 0 };
            l.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var s,
                        n,
                        [o, r, i] = a,
                        _ = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (s in r) l.o(r, s) && (l.m[s] = r[s]);
                        if (i) var m = i(l);
                    }
                    for (t && t(a); _ < o.length; _++) ((n = o[_]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return l.O(m);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var s = l.O(void 0, [1519], () => l(8596));
    s = l.O(s);
})();
