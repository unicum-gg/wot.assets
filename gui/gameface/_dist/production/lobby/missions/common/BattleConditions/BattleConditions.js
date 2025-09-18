(() => {
    'use strict';
    var e,
        n = {
            1975: (e, n, t) => {
                t.d(n, { ko: () => b, uu: () => p });
                var r = t(6483),
                    a = t.n(r),
                    s = t(7363),
                    o = t.n(s),
                    i = t(2468),
                    l = t(7442),
                    d = t(2407),
                    m = t(156),
                    u = t(7736),
                    g = t(1635);
                t(6823);
                const c = m.Gh,
                    p = {
                        freezed: !1,
                        withStack: !1,
                        type: u.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    b = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: n = c,
                            size: t = u.$.Default,
                            animationSettings: r = p,
                            disabled: s = !1,
                            withoutBackground: b = !1,
                            value: f,
                            deltaFrom: h,
                            additionalKey: _,
                            lineRef: w,
                            onChangeAnimationState: v,
                            onEndAnimation: E,
                            onComplete: y,
                            className: S,
                        }) => {
                            const $ = (0, g.S)(f, e, h);
                            return o().createElement(
                                'div',
                                { className: a()(i.Z.base, S, i.Z[`base__${t}`]), style: (0, m.VQ)(n) },
                                !b && o().createElement(l.J, { size: t }),
                                o().createElement(d.r, {
                                    size: t,
                                    lineRef: w,
                                    disabled: s,
                                    value: $.value,
                                    deltaFrom: $.deltaFrom,
                                    additionalKey: _,
                                    animationSettings: r,
                                    onEndAnimation: E,
                                    onChangeAnimationState: v,
                                    onComplete: y,
                                }),
                            );
                        },
                    );
            },
            7442: (e, n, t) => {
                t.d(n, { J: () => d });
                var r = t(6483),
                    a = t.n(r),
                    s = t(7363),
                    o = t.n(s),
                    i = t(2468),
                    l = t(7736);
                const d = ({ size: e = l.$.Default }) => {
                    const n = a()(i.Z.background, i.Z[`background__${e}`]);
                    return o().createElement('div', { className: n });
                };
            },
            8150: (e, n, t) => {
                t.d(n, { $: () => l });
                var r = t(6483),
                    a = t.n(r),
                    s = t(7363),
                    o = t.n(s),
                    i = t(8804);
                const l = ({ size: e }) => {
                    const n = a()(i.Z.base, i.Z[`base__${e}`]);
                    return o().createElement('div', { className: n });
                };
            },
            2407: (e, n, t) => {
                t.d(n, { r: () => d });
                var r = t(7363),
                    a = t.n(r),
                    s = t(6736),
                    o = t(5680),
                    i = t(2386);
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const d = (0, r.memo)(
                    ({
                        size: e,
                        value: n,
                        lineRef: t,
                        disabled: r,
                        deltaFrom: d,
                        additionalKey: m,
                        animationSettings: u,
                        onEndAnimation: g,
                        onChangeAnimationState: c,
                        onComplete: p,
                    }) => {
                        if (d === n)
                            return a().createElement(o.M, {
                                key: `${d}-${n}-${m}`,
                                size: e,
                                value: n,
                                lineRef: t,
                                disabled: r,
                                onComplete: p,
                            });
                        const b = {
                            from: d,
                            to: n,
                            size: e,
                            additionalKey: m,
                            lineRef: t,
                            disabled: r,
                            animationSettings: u,
                            onComplete: p,
                            onEndAnimation: g,
                            onChangeAnimationState: c,
                        };
                        return u.withStack
                            ? a().createElement(i.F, b)
                            : a().createElement(s.H, l({ key: `${d}-${n}-${m}` }, b));
                    },
                );
            },
            1848: (e, n, t) => {
                t.d(n, { t: () => d });
                var r = t(6483),
                    a = t.n(r),
                    s = t(7363),
                    o = t.n(s),
                    i = t(8150),
                    l = t(6664);
                const d = (0, s.memo)(
                    ({ size: e, lineRef: n, disabled: t, baseStyles: r, isComplete: s, withoutBounce: d }) => {
                        const m = a()(
                                l.Z.base,
                                l.Z[`base__${e}`],
                                t && l.Z.base__disabled,
                                s && l.Z.base__finished,
                                d && l.Z.base__withoutBounce,
                            ),
                            u = !t && !s;
                        return o().createElement(
                            'div',
                            { className: m, style: r, ref: n },
                            o().createElement('div', { className: l.Z.pattern }),
                            o().createElement('div', { className: l.Z.gradient }),
                            u && o().createElement(i.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, n, t) => {
                t.d(n, { O: () => p });
                var r = t(6483),
                    a = t.n(r),
                    s = t(122),
                    o = t(7363),
                    i = t.n(o),
                    l = t(8150),
                    d = t(6823),
                    m = t(6147);
                const u = (e) => (e ? { left: 0 } : { right: 0 }),
                    g = (e, n) => (e ? { right: 100 - n + '%' } : { left: `${n}%` }),
                    c = (e) => ({ transitionDuration: `${e}ms` }),
                    p = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: n,
                            freezed: t,
                            from: r,
                            size: p,
                            to: b,
                            onEndAnimation: f,
                            onChangeAnimationState: h,
                            className: _,
                        }) => {
                            const w = b < r,
                                v = (0, o.useState)(d.S.Idle),
                                E = v[0],
                                y = v[1],
                                S = E === d.S.End,
                                $ = E === d.S.Idle,
                                C = E === d.S.Grow,
                                B = E === d.S.Shrink,
                                k = (0, o.useCallback)(
                                    (e) => {
                                        (y(e), h && h(e));
                                    },
                                    [h],
                                ),
                                z = (0, o.useCallback)(
                                    (e, n) =>
                                        (0, s.F)(() => {
                                            k(e);
                                        }, n),
                                    [k],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return $
                                        ? z(d.S.Grow, n)
                                        : C
                                          ? z(d.S.Shrink, e)
                                          : B
                                            ? z(d.S.End, e)
                                            : void (S && f && f());
                            }, [z, t, S, C, $, B, f, n, e]);
                            const I = (0, o.useMemo)(() => Object.assign({ width: '100%' }, c(e), u(w)), [w, e]),
                                D = (0, o.useMemo)(() => Object.assign({ width: '0%' }, c(e), u(w)), [w, e]),
                                O = (0, o.useMemo)(() => Object.assign({ width: '0%' }, g(w, r), c(e)), [r, w, e]),
                                A = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(b - r)}%` }, g(w, r), c(e)),
                                    [r, w, b, e],
                                );
                            if (S) return null;
                            const P = a()(m.Z.base, _, w && 0 === b && m.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: $ ? O : A, className: P },
                                i().createElement(
                                    'div',
                                    { style: B ? D : I, className: m.Z.glow },
                                    i().createElement(l.$, { size: p }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, n, t) => {
                t.d(n, { x: () => d });
                var r = t(122),
                    a = t(7363),
                    s = t.n(a),
                    o = t(8150),
                    i = t(6823),
                    l = t(9919);
                const d = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: n,
                        freezed: t,
                        from: d,
                        size: m,
                        to: u,
                        onEndAnimation: g,
                        onChangeAnimationState: c,
                    }) => {
                        const p = u < d,
                            b = (0, a.useState)(i.V.Idle),
                            f = b[0],
                            h = b[1],
                            _ = f === i.V.In,
                            w = f === i.V.End,
                            v = f === i.V.Idle,
                            E = (0, a.useCallback)(
                                (e) => {
                                    (h(e), c && c(e));
                                },
                                [c],
                            );
                        ((0, a.useEffect)(() => {
                            if (v && !t) {
                                const e = n;
                                return (0, r.F)(() => {
                                    E(i.V.In);
                                }, e);
                            }
                        }, [E, t, v, n]),
                            (0, a.useEffect)(() => {
                                if (_) {
                                    const t = e + n;
                                    return (0, r.F)(() => {
                                        (g && g(), E(i.V.End));
                                    }, t);
                                }
                            }, [E, _, g, n, e]));
                        const y = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${n}ms`,
                                    [p ? 'left' : 'right']: '0',
                                }),
                                [p, n, e],
                            ),
                            S = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${n}ms`,
                                    [p ? 'left' : 'right']: '0',
                                }),
                                [p, n, e],
                            ),
                            $ = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(d - u)}%`, left: `${p ? u : d}%` }),
                                [d, p, u],
                            );
                        return w
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: l.Z.base, style: $ },
                                  s().createElement(
                                      'div',
                                      { style: v ? y : S, className: l.Z.delta },
                                      s().createElement(o.$, { size: m }),
                                  ),
                              );
                    },
                );
            },
            538: (e, n, t) => {
                t.d(n, { F: () => l });
                var r = t(7363),
                    a = t.n(r),
                    s = t(1848),
                    o = t(2434),
                    i = t(6823);
                const l = (0, r.memo)(
                    ({
                        to: e,
                        size: n,
                        from: t,
                        lineRef: l,
                        disabled: d,
                        isComplete: m,
                        animationSettings: u,
                        onEndAnimation: g,
                        onChangeAnimationState: c,
                    }) => {
                        const p = e < t,
                            b = (0, r.useState)(!1),
                            f = b[0],
                            h = b[1],
                            _ = (0, r.useCallback)(
                                (e) => {
                                    (e === i.S.Shrink && h(!0), c && c(e));
                                },
                                [c],
                            ),
                            w = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            v = (0, r.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${u.line.duration}ms` }),
                                [u.line.duration, e],
                            );
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(s.t, {
                                size: n,
                                lineRef: l,
                                disabled: d,
                                isComplete: m,
                                withoutBounce: p && 0 === e,
                                baseStyles: f ? v : w,
                            }),
                            t >= 0 &&
                                a().createElement(o.O, {
                                    transitionDuration: u.delta.duration,
                                    transitionDelay: u.delta.delay,
                                    onChangeAnimationState: _,
                                    freezed: u.freezed,
                                    onEndAnimation: g,
                                    from: t,
                                    size: n,
                                    to: e,
                                    className: u.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, n, t) => {
                t.d(n, { D: () => i });
                var r = t(7363),
                    a = t.n(r),
                    s = t(1848),
                    o = t(5913);
                const i = (0, r.memo)(
                    ({
                        to: e,
                        size: n,
                        from: t,
                        lineRef: i,
                        disabled: l,
                        isComplete: d,
                        animationSettings: m,
                        onChangeAnimationState: u,
                        onEndAnimation: g,
                    }) => {
                        const c = (0, r.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${m.line.duration}ms`,
                                transitionDelay: `${m.line.delay}ms`,
                            }),
                            [m.line.delay, m.line.duration, e],
                        );
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(s.t, { size: n, lineRef: i, disabled: l, isComplete: d, baseStyles: c }),
                            t >= 0 &&
                                a().createElement(o.x, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    freezed: m.freezed,
                                    from: t,
                                    size: n,
                                    to: e,
                                    onChangeAnimationState: u,
                                    onEndAnimation: g,
                                }),
                        );
                    },
                );
            },
            6736: (e, n, t) => {
                t.d(n, { H: () => m });
                var r = t(7363),
                    a = t.n(r),
                    s = t(7736),
                    o = t(538),
                    i = t(828);
                const l = ['onComplete', 'onEndAnimation'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (0, r.memo)((e) => {
                    let n = e.onComplete,
                        t = e.onEndAnimation,
                        m = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) ((t = s[r]), n.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, l);
                    const u = (0, r.useState)(!1),
                        g = u[0],
                        c = u[1],
                        p = (0, r.useCallback)(() => {
                            const e = 100 === m.to;
                            (e !== g && c(e), e && n && n(), t && t());
                        }, [g, n, t, m.to]);
                    switch (m.animationSettings.type) {
                        case s.r.Simple:
                            return a().createElement(i.D, d({}, m, { onEndAnimation: p, isComplete: g }));
                        case s.r.Growing:
                            return a().createElement(o.F, d({}, m, { onEndAnimation: p, isComplete: g }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, n, t) => {
                let r, a;
                (t.d(n, { S: () => r, V: () => a }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(a || (a = {})));
            },
            2386: (e, n, t) => {
                t.d(n, { F: () => l });
                var r = t(7363),
                    a = t.n(r),
                    s = t(6736);
                const o = ['onEndAnimation'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, r.memo)((e) => {
                    let n = e.onEndAnimation,
                        t = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) ((t = s[r]), n.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, o);
                    const l = (0, r.useRef)({}),
                        d = (0, r.useCallback)(() => {
                            ((l.current.from = void 0), n && n());
                        }, [n]),
                        m = 'number' == typeof l.current.from ? l.current.from : t.from;
                    return (
                        (l.current.from = m),
                        a().createElement(
                            s.H,
                            i({}, t, {
                                onEndAnimation: d,
                                key: `${m}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: m,
                            }),
                        )
                    );
                });
            },
            5680: (e, n, t) => {
                t.d(n, { M: () => o });
                var r = t(7363),
                    a = t.n(r),
                    s = t(1848);
                const o = ({ size: e, value: n, lineRef: t, disabled: o, onComplete: i }) => {
                    const l = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                        d = 100 === n;
                    return (
                        (0, r.useEffect)(() => {
                            d && i && i();
                        }, [d, i]),
                        a().createElement(s.t, { size: e, disabled: o, baseStyles: l, isComplete: d, lineRef: t })
                    );
                };
            },
            156: (e, n, t) => {
                t.d(n, { Gh: () => a, VQ: () => r });
                const r = (e) => {
                        var n, t, r, a, s, o, i, l, d, m, u, g, c, p, b, f, h, _, w, v;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (n = null == (t = e.bg) ? void 0 : t.height) ? n : '12rem',
                            '--progress-bg-height-small':
                                null != (r = null == (a = e.bg) ? void 0 : a.heightSmall) ? r : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (s = e.line.filter) ? s : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (l = e.pattern.gradient)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (d = e.pattern.gradientFinished)
                                    ? d
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (m = e.pattern.mixBlendMode) ? m : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (u = null == (g = e.glowSettings) ? void 0 : g.width) ? u : '60rem',
                            '--progress-glow-height':
                                null != (c = null == (p = e.glowSettings) ? void 0 : p.height) ? c : '100rem',
                            '--progress-glow-small-width':
                                null != (b = null == (f = e.glowSettings) ? void 0 : f.smallWidth) ? b : '44rem',
                            '--progress-glow-small-height':
                                null != (h = null == (_ = e.glowSettings) ? void 0 : _.smallHeight) ? h : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (w = null == (v = e.glowSettings) ? void 0 : v.mixBlendMode) ? w : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
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
            7736: (e, n, t) => {
                let r, a;
                (t.d(n, { $: () => r, r: () => a }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(a || (a = {})));
            },
            1635: (e, n, t) => {
                t.d(n, { S: () => o });
                var r = t(7515),
                    a = t(7363);
                const s = (e, n, t) => {
                    if ('number' == typeof t) {
                        return ((0, r.u)(0, n, t) / n) * 100;
                    }
                    return e;
                };
                function o(e, n, t) {
                    return (0, a.useMemo)(() => {
                        const a = ((0, r.u)(0, n, e) / n) * 100;
                        return { value: a, deltaFrom: s(a, n, t) };
                    }, [t, n, e]);
                }
            },
            7515: (e, n, t) => {
                t.d(n, { u: () => r });
                const r = (e, n, t) => (t < e ? e : t > n ? n : t);
            },
            122: (e, n, t) => {
                t.d(n, { F: () => r });
                const r = (e, n) => {
                    let t;
                    const r = setTimeout(() => {
                        t = e();
                    }, n);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(r));
                    };
                };
            },
            3847: (e, n, t) => {
                (t(6483), t(7363));
                (t(1975), t(7736));
                (R.strings.quests.dailyQuests.postBattle.genericAmpersand(),
                    R.strings.quests.dailyQuests.postBattle.conditionTypeAnd());
                var r = t(800);
                r.I.CENTER;
            },
            800: (e, n, t) => {
                let r, a;
                (t.d(n, { $: () => a, I: () => r }),
                    (function (e) {
                        ((e.LEFT = 'left'), (e.RIGHT = 'right'), (e.CENTER = 'center'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.BIG = 'big'), (e.HUGE = 'huge'));
                    })(a || (a = {})));
            },
            2468: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = {
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
            6147: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, n, t) => {
                t.d(n, { Z: () => r });
                const r = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        t = {};
    function r(e) {
        var a = t[e];
        if (void 0 !== a) return a.exports;
        var s = (t[e] = { exports: {} });
        return (n[e](s, s.exports, r), s.exports);
    }
    ((r.m = n),
        (e = []),
        (r.O = (n, t, a, s) => {
            if (!t) {
                var o = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [t, a, s] = e[m], i = !0, l = 0; l < t.length; l++)
                        (!1 & s || o >= s) && Object.keys(r.O).every((e) => r.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((i = !1), s < o && (o = s));
                    if (i) {
                        e.splice(m--, 1);
                        var d = a();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            s = s || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > s; m--) e[m] = e[m - 1];
            e[m] = [t, a, s];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (r.d(n, { a: n }), n);
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.j = 376),
        (() => {
            var e = { 376: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var a,
                        s,
                        [o, i, l] = t,
                        d = 0;
                    if (o.some((n) => 0 !== e[n])) {
                        for (a in i) r.o(i, a) && (r.m[a] = i[a]);
                        if (l) var m = l(r);
                    }
                    for (n && n(t); d < o.length; d++) ((s = o[d]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0));
                    return r.O(m);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var a = r.O(void 0, [45], () => r(3847));
    a = r.O(a);
})();
