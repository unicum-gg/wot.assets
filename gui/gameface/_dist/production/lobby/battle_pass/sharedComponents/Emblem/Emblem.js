(() => {
    'use strict';
    var e,
        a = {
            3097: (e, a, t) => {
                t.d(a, { $u: () => d.$, ko: () => h });
                var s = t(9849),
                    l = t.n(s),
                    n = t(7363),
                    r = t.n(n),
                    o = t(7947),
                    i = t(5713),
                    _ = t(9536),
                    m = t(2858),
                    d = t(233),
                    b = t(9859);
                t(6114);
                const c = m.Gh,
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
                            theme: a = c,
                            size: t = d.$.Default,
                            animationSettings: s = g,
                            disabled: n = !1,
                            withoutBackground: h = !1,
                            value: u,
                            deltaFrom: p,
                            additionalKey: f,
                            lineRef: w,
                            onChangeAnimationState: v,
                            onEndAnimation: E,
                            onComplete: L,
                            className: x,
                        }) => {
                            const S = (0, b.S)(u, e, p);
                            return r().createElement(
                                'div',
                                { className: l()(o.Z.base, x, o.Z[`base__${t}`]), style: (0, m.VQ)(a) },
                                !h && r().createElement(i.J, { size: t }),
                                r().createElement(_.r, {
                                    size: t,
                                    lineRef: w,
                                    disabled: n,
                                    value: S.value,
                                    deltaFrom: S.deltaFrom,
                                    additionalKey: f,
                                    animationSettings: s,
                                    onEndAnimation: E,
                                    onChangeAnimationState: v,
                                    onComplete: L,
                                }),
                            );
                        },
                    );
            },
            5713: (e, a, t) => {
                t.d(a, { J: () => _ });
                var s = t(9849),
                    l = t.n(s),
                    n = t(7363),
                    r = t.n(n),
                    o = t(7947),
                    i = t(233);
                const _ = ({ size: e = i.$.Default }) => {
                    const a = l()(o.Z.background, o.Z[`background__${e}`]);
                    return r().createElement('div', { className: a });
                };
            },
            8243: (e, a, t) => {
                t.d(a, { $: () => i });
                var s = t(9849),
                    l = t.n(s),
                    n = t(7363),
                    r = t.n(n),
                    o = t(2234);
                const i = ({ size: e }) => {
                    const a = l()(o.Z.base, o.Z[`base__${e}`]);
                    return r().createElement('div', { className: a });
                };
            },
            9536: (e, a, t) => {
                t.d(a, { r: () => _ });
                var s = t(7363),
                    l = t.n(s),
                    n = t(6145),
                    r = t(3107),
                    o = t(5586);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const _ = (0, s.memo)(
                    ({
                        size: e,
                        value: a,
                        lineRef: t,
                        disabled: s,
                        deltaFrom: _,
                        additionalKey: m,
                        animationSettings: d,
                        onEndAnimation: b,
                        onChangeAnimationState: c,
                        onComplete: g,
                    }) => {
                        if (_ === a)
                            return l().createElement(r.M, {
                                key: `${_}-${a}-${m}`,
                                size: e,
                                value: a,
                                lineRef: t,
                                disabled: s,
                                onComplete: g,
                            });
                        const h = {
                            from: _,
                            to: a,
                            size: e,
                            additionalKey: m,
                            lineRef: t,
                            disabled: s,
                            animationSettings: d,
                            onComplete: g,
                            onEndAnimation: b,
                            onChangeAnimationState: c,
                        };
                        return d.withStack
                            ? l().createElement(o.F, h)
                            : l().createElement(n.H, i({ key: `${_}-${a}-${m}` }, h));
                    },
                );
            },
            2420: (e, a, t) => {
                t.d(a, { t: () => _ });
                var s = t(9849),
                    l = t.n(s),
                    n = t(7363),
                    r = t.n(n),
                    o = t(8243),
                    i = t(7760);
                const _ = (0, n.memo)(
                    ({ size: e, lineRef: a, disabled: t, baseStyles: s, isComplete: n, withoutBounce: _ }) => {
                        const m = l()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                t && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                _ && i.Z.base__withoutBounce,
                            ),
                            d = !t && !n;
                        return r().createElement(
                            'div',
                            { className: m, style: s, ref: a },
                            r().createElement('div', { className: i.Z.pattern }),
                            r().createElement('div', { className: i.Z.gradient }),
                            d && r().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2170: (e, a, t) => {
                t.d(a, { O: () => g });
                var s = t(9849),
                    l = t.n(s),
                    n = t(1652),
                    r = t(7363),
                    o = t.n(r),
                    i = t(8243),
                    _ = t(6114),
                    m = t(5232);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    b = (e, a) => (e ? { right: 100 - a + '%' } : { left: `${a}%` }),
                    c = (e) => ({ transitionDuration: `${e}ms` }),
                    g = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: a,
                            freezed: t,
                            from: s,
                            size: g,
                            to: h,
                            onEndAnimation: u,
                            onChangeAnimationState: p,
                            className: f,
                        }) => {
                            const w = h < s,
                                v = (0, r.useState)(_.S.Idle),
                                E = v[0],
                                L = v[1],
                                x = E === _.S.End,
                                S = E === _.S.Idle,
                                $ = E === _.S.Grow,
                                P = E === _.S.Shrink,
                                C = (0, r.useCallback)(
                                    (e) => {
                                        (L(e), p && p(e));
                                    },
                                    [p],
                                ),
                                B = (0, r.useCallback)(
                                    (e, a) =>
                                        (0, n.F)(() => {
                                            C(e);
                                        }, a),
                                    [C],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return S
                                        ? B(_.S.Grow, a)
                                        : $
                                          ? B(_.S.Shrink, e)
                                          : P
                                            ? B(_.S.End, e)
                                            : void (x && u && u());
                            }, [B, t, x, $, S, P, u, a, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, c(e), d(w)), [w, e]),
                                M = (0, r.useMemo)(() => Object.assign({ width: '0%' }, c(e), d(w)), [w, e]),
                                I = (0, r.useMemo)(() => Object.assign({ width: '0%' }, b(w, s), c(e)), [s, w, e]),
                                k = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(h - s)}%` }, b(w, s), c(e)),
                                    [s, w, h, e],
                                );
                            if (x) return null;
                            const D = l()(m.Z.base, f, w && 0 === h && m.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: S ? I : k, className: D },
                                o().createElement(
                                    'div',
                                    { style: P ? M : y, className: m.Z.glow },
                                    o().createElement(i.$, { size: g }),
                                ),
                            );
                        },
                    );
            },
            1530: (e, a, t) => {
                t.d(a, { x: () => _ });
                var s = t(1652),
                    l = t(7363),
                    n = t.n(l),
                    r = t(8243),
                    o = t(6114),
                    i = t(9822);
                const _ = (0, l.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: a,
                        freezed: t,
                        from: _,
                        size: m,
                        to: d,
                        onEndAnimation: b,
                        onChangeAnimationState: c,
                    }) => {
                        const g = d < _,
                            h = (0, l.useState)(o.V.Idle),
                            u = h[0],
                            p = h[1],
                            f = u === o.V.In,
                            w = u === o.V.End,
                            v = u === o.V.Idle,
                            E = (0, l.useCallback)(
                                (e) => {
                                    (p(e), c && c(e));
                                },
                                [c],
                            );
                        ((0, l.useEffect)(() => {
                            if (v && !t) {
                                const e = a;
                                return (0, s.F)(() => {
                                    E(o.V.In);
                                }, e);
                            }
                        }, [E, t, v, a]),
                            (0, l.useEffect)(() => {
                                if (f) {
                                    const t = e + a;
                                    return (0, s.F)(() => {
                                        (b && b(), E(o.V.End));
                                    }, t);
                                }
                            }, [E, f, b, a, e]));
                        const L = (0, l.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${a}ms`,
                                    [g ? 'left' : 'right']: '0',
                                }),
                                [g, a, e],
                            ),
                            x = (0, l.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${a}ms`,
                                    [g ? 'left' : 'right']: '0',
                                }),
                                [g, a, e],
                            ),
                            S = (0, l.useMemo)(
                                () => ({ width: `${Math.abs(_ - d)}%`, left: `${g ? d : _}%` }),
                                [_, g, d],
                            );
                        return w
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: i.Z.base, style: S },
                                  n().createElement(
                                      'div',
                                      { style: v ? L : x, className: i.Z.delta },
                                      n().createElement(r.$, { size: m }),
                                  ),
                              );
                    },
                );
            },
            9143: (e, a, t) => {
                t.d(a, { F: () => i });
                var s = t(7363),
                    l = t.n(s),
                    n = t(2420),
                    r = t(2170),
                    o = t(6114);
                const i = (0, s.memo)(
                    ({
                        to: e,
                        size: a,
                        from: t,
                        lineRef: i,
                        disabled: _,
                        isComplete: m,
                        animationSettings: d,
                        onEndAnimation: b,
                        onChangeAnimationState: c,
                    }) => {
                        const g = e < t,
                            h = (0, s.useState)(!1),
                            u = h[0],
                            p = h[1],
                            f = (0, s.useCallback)(
                                (e) => {
                                    (e === o.S.Shrink && p(!0), c && c(e));
                                },
                                [c],
                            ),
                            w = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            v = (0, s.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(n.t, {
                                size: a,
                                lineRef: i,
                                disabled: _,
                                isComplete: m,
                                withoutBounce: g && 0 === e,
                                baseStyles: u ? v : w,
                            }),
                            t >= 0 &&
                                l().createElement(r.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: f,
                                    freezed: d.freezed,
                                    onEndAnimation: b,
                                    from: t,
                                    size: a,
                                    to: e,
                                    className: d.delta.className,
                                }),
                        );
                    },
                );
            },
            1586: (e, a, t) => {
                t.d(a, { D: () => o });
                var s = t(7363),
                    l = t.n(s),
                    n = t(2420),
                    r = t(1530);
                const o = (0, s.memo)(
                    ({
                        to: e,
                        size: a,
                        from: t,
                        lineRef: o,
                        disabled: i,
                        isComplete: _,
                        animationSettings: m,
                        onChangeAnimationState: d,
                        onEndAnimation: b,
                    }) => {
                        const c = (0, s.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${m.line.duration}ms`,
                                transitionDelay: `${m.line.delay}ms`,
                            }),
                            [m.line.delay, m.line.duration, e],
                        );
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(n.t, { size: a, lineRef: o, disabled: i, isComplete: _, baseStyles: c }),
                            t >= 0 &&
                                l().createElement(r.x, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    freezed: m.freezed,
                                    from: t,
                                    size: a,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: b,
                                }),
                        );
                    },
                );
            },
            6145: (e, a, t) => {
                t.d(a, { H: () => m });
                var s = t(7363),
                    l = t.n(s),
                    n = t(233),
                    r = t(9143),
                    o = t(1586);
                const i = ['onComplete', 'onEndAnimation'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const m = (0, s.memo)((e) => {
                    let a = e.onComplete,
                        t = e.onEndAnimation,
                        m = (function (e, a) {
                            if (null == e) return {};
                            var t = {};
                            for (var s in e)
                                if ({}.hasOwnProperty.call(e, s)) {
                                    if (-1 !== a.indexOf(s)) continue;
                                    t[s] = e[s];
                                }
                            return t;
                        })(e, i);
                    const d = (0, s.useState)(!1),
                        b = d[0],
                        c = d[1],
                        g = (0, s.useCallback)(() => {
                            const e = 100 === m.to;
                            (e !== b && c(e), e && a && a(), t && t());
                        }, [b, a, t, m.to]);
                    switch (m.animationSettings.type) {
                        case n.r.Simple:
                            return l().createElement(o.D, _({}, m, { onEndAnimation: g, isComplete: b }));
                        case n.r.Growing:
                            return l().createElement(r.F, _({}, m, { onEndAnimation: g, isComplete: b }));
                        default:
                            return null;
                    }
                });
            },
            6114: (e, a, t) => {
                t.d(a, { S: () => s, V: () => l });
                let s = (function (e) {
                        return ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e);
                    })({}),
                    l = (function (e) {
                        return ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e);
                    })({});
            },
            5586: (e, a, t) => {
                t.d(a, { F: () => i });
                var s = t(7363),
                    l = t.n(s),
                    n = t(6145);
                const r = ['onEndAnimation'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const i = (0, s.memo)((e) => {
                    let a = e.onEndAnimation,
                        t = (function (e, a) {
                            if (null == e) return {};
                            var t = {};
                            for (var s in e)
                                if ({}.hasOwnProperty.call(e, s)) {
                                    if (-1 !== a.indexOf(s)) continue;
                                    t[s] = e[s];
                                }
                            return t;
                        })(e, r);
                    const i = (0, s.useRef)({}),
                        _ = (0, s.useCallback)(() => {
                            ((i.current.from = void 0), a && a());
                        }, [a]),
                        m = 'number' == typeof i.current.from ? i.current.from : t.from;
                    return (
                        (i.current.from = m),
                        l().createElement(
                            n.H,
                            o({}, t, {
                                onEndAnimation: _,
                                key: `${m}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: m,
                            }),
                        )
                    );
                });
            },
            3107: (e, a, t) => {
                t.d(a, { M: () => r });
                var s = t(7363),
                    l = t.n(s),
                    n = t(2420);
                const r = ({ size: e, value: a, lineRef: t, disabled: r, onComplete: o }) => {
                    const i = (0, s.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                        _ = 100 === a;
                    return (
                        (0, s.useEffect)(() => {
                            _ && o && o();
                        }, [_, o]),
                        l().createElement(n.t, { size: e, disabled: r, baseStyles: i, isComplete: _, lineRef: t })
                    );
                };
            },
            2858: (e, a, t) => {
                t.d(a, { Gh: () => l, VQ: () => s });
                const s = (e) => {
                        var a, t, s, l, n, r, o, i, _, m, d, b, c, g, h, u, p, f, w, v;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (a = null == (t = e.bg) ? void 0 : t.height) ? a : '12rem',
                            '--progress-bg-height-small':
                                null != (s = null == (l = e.bg) ? void 0 : l.heightSmall) ? s : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (n = e.line.filter) ? n : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (r = e.pattern.size) ? r : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
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
                                null != (d = null == (b = e.glowSettings) ? void 0 : b.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (c = null == (g = e.glowSettings) ? void 0 : g.height) ? c : '100rem',
                            '--progress-glow-small-width':
                                null != (h = null == (u = e.glowSettings) ? void 0 : u.smallWidth) ? h : '44rem',
                            '--progress-glow-small-height':
                                null != (p = null == (f = e.glowSettings) ? void 0 : f.smallHeight) ? p : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (w = null == (v = e.glowSettings) ? void 0 : v.mixBlendMode) ? w : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    l = {
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
                    n = {
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
                Object.assign({}, n, {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                    line: Object.assign({}, n.line, {
                        bgColorBase: '#83C6A5',
                        bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                    }),
                    pattern: Object.assign({}, n.pattern, {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                    }),
                });
            },
            233: (e, a, t) => {
                t.d(a, { $: () => s, r: () => l });
                let s = (function (e) {
                        return ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e);
                    })({}),
                    l = (function (e) {
                        return ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e);
                    })({});
            },
            9859: (e, a, t) => {
                t.d(a, { S: () => r });
                var s = t(8463),
                    l = t(7363);
                const n = (e, a, t) => {
                    if ('number' == typeof t) {
                        return ((0, s.u)(0, a, t) / a) * 100;
                    }
                    return e;
                };
                function r(e, a, t) {
                    return (0, l.useMemo)(() => {
                        const l = ((0, s.u)(0, a, e) / a) * 100;
                        return { value: l, deltaFrom: n(l, a, t) };
                    }, [t, a, e]);
                }
            },
            8463: (e, a, t) => {
                t.d(a, { u: () => s });
                const s = (e, a, t) => (t < e ? e : t > a ? a : t);
            },
            1652: (e, a, t) => {
                t.d(a, { F: () => s });
                const s = (e, a) => {
                    let t;
                    const s = setTimeout(() => {
                        t = e();
                    }, a);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(s));
                    };
                };
            },
            1705: (e, a, t) => {
                t.d(a, { wD: () => s });
                t(4490);
                const s = (e, a, t = '') => {
                    const s = t.length > 0 ? `_${t}` : t,
                        l = e.$dyn(`c_${a}${s}`),
                        n = String(a).slice(-1),
                        r = e.$dyn(`default_${n}${s}`);
                    return l || r;
                };
            },
            3927: (e, a, t) => {
                var s = t(9849),
                    l = t.n(s),
                    n = t(7363),
                    r = t.n(n);
                const o = (e, a) => {
                    const t = a.postfix ? `_${a.postfix}` : '';
                    return ((e) => {
                        const a = e.path.$dyn(`${e.name}_${e.id}`),
                            t = e.path.$dyn('default');
                        return a || t;
                    })(e).$dyn(`${a.name}${t}`);
                };
                let i = (function (e) {
                    return ((e.Season = 'season'), (e.Chapter = 'chapter'), e);
                })({});
                const _ = {
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
                var m = t(1705);
                const d = {
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
                    b = ({
                        level: e,
                        size: a,
                        isGold: t,
                        isForRewardScreen: s,
                        curState: n,
                        isFirstLevel: o,
                        showProgressionCompleted: i,
                    }) => {
                        const _ = l()(d.base, d[`base__${a}`]),
                            m = l()(
                                d.text,
                                d.text__filtered,
                                d[`text__${a}`],
                                d[`text__${n}`],
                                i && d.text__hideWithDelay,
                                o && d.text__new,
                                s && d.text__rewardScreen,
                            ),
                            b = l()(
                                d.textWithBlend,
                                o && d.text__new,
                                i && d.text__hideWithDelay,
                                d[`textWithBlend__${n}`],
                            ),
                            c = l()(d.text, d.text__blended, d[`text__${a}`], s && d.text__rewardScreen),
                            g = l()(
                                d.textMask,
                                t && d.textMask__gold,
                                s && d.textMask__animated,
                                t && s && d.textMask__goldContrast,
                                d[`textMask__${a}`],
                            );
                        return r().createElement(
                            'div',
                            { className: _ },
                            r().createElement('div', { className: m }, e),
                            r().createElement(
                                'div',
                                { className: b },
                                r().createElement('div', { className: c }, e),
                                r().createElement('div', { className: g }),
                            ),
                        );
                    };
                var c = t(4490);
                const g = {
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
                    h = (e, a) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case c.$u.Small:
                                    return 'l';
                                case c.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(a)}${t}`;
                    },
                    u = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: a,
                            size: t,
                            battlePassState: s,
                            hasProgression: n,
                            isGolden: _,
                            labelAnimation: d,
                            newLabelAnimation: u,
                            isChapterChosen: p = !1,
                            chapterID: f = 0,
                            seasonNum: w = -1,
                            isProgressionCompleted: v = !1,
                            hasBeenActive: E = !1,
                            isChapterSelection: L = !1,
                            isProgression: x = !1,
                        }) => {
                            let S = '',
                                $ = '';
                            t === c.$u.Small
                                ? ((S = 'Small'), ($ = '__small'))
                                : t === c.$u.Micro && ((S = 'Micro'), ($ = '__micro'));
                            const P = s === c.Bq.SwitchedChapterRightNow,
                                C = s === c.Bq.CompletedRightNow,
                                B = ((e, a, t, s, l) => (e || l ? a || !t : a || !s))(L, v, E, p, x),
                                y = !x && !L;
                            return r().createElement(
                                r().Fragment,
                                null,
                                B
                                    ? r().createElement('div', {
                                          className: l()(g.icon, $ && g[`icon${$}`], C && g[`icon__animated${S}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      a = h(_, t);
                                                  if (y) {
                                                      if (v) {
                                                          const t = { path: e.icon, name: i.Season, id: w };
                                                          return o(t, { name: 'icon', postfix: a });
                                                      }
                                                      if (!p) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, m.wD)(e.chapterIcons, f, a);
                                              })()})`,
                                          },
                                      })
                                    : r().createElement(
                                          'div',
                                          {
                                              className: l()(
                                                  g.label,
                                                  g[`label${$}`],
                                                  P && g.label__new,
                                                  P && g[`label__new${S}`],
                                                  !C && v && g.label__disabled,
                                                  g[`label__${d}${S}`],
                                                  n && g[`label__hasProgress${S}`],
                                                  n && g[`label__hasProgress${S}${x ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          r().createElement(b, {
                                              level: a,
                                              size: t,
                                              isGold: _,
                                              isFirstLevel: P,
                                              curState: d,
                                              showProgressionCompleted: C,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: l()(
                                                g.label,
                                                g[`label${$}`],
                                                P && g.label__new,
                                                P && g[`label__new${S}`],
                                                g[`label__${u}${S}`],
                                                n && g[`label__hasProgress${S}`],
                                            ),
                                        },
                                        r().createElement(b, {
                                            level: e,
                                            size: t,
                                            isGold: _,
                                            isFirstLevel: P,
                                            curState: u,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var p = t(3097);
                const f = {
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
                    w = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: a = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: s,
                            size: n,
                        }) => {
                            const o = l()(f.base, f[`base__${n}`], t && f.base__completed, !t && s && f.base__hidden);
                            return r().createElement(
                                'div',
                                { className: o },
                                r().createElement(p.ko, {
                                    key: e.to,
                                    size: p.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: a,
                                }),
                            );
                        },
                    );
                function v() {
                    return (
                        (v = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                  }
                                  return e;
                              }),
                        v.apply(null, arguments)
                    );
                }
                let E = (function (e) {
                        return ((e.Closed = 'closed'), (e.Open = 'open'), e);
                    })({}),
                    L = (function (e) {
                        return ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'), e);
                    })({});
                const x = (e, a, t, s, l) => {
                        const n = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: s },
                            r = e ? E.Open : E.Closed,
                            _ = ((e, a) =>
                                e
                                    ? L.Gold
                                    : a === c.Bq.Completed || a === c.Bq.CompletedRightNow
                                      ? L.Completed
                                      : L.Initial)(a, t),
                            m = l.length > 0 ? `_${l}` : '';
                        return { backgroundImage: `url(${o(n, { name: 'emblem', postfix: `${r}_${_}${m}` })})` };
                    },
                    S = (e, a) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${o(t, { name: 'extra', postfix: a })})` };
                    };
                (0, n.memo)((e) => {
                    const a = e.progression,
                        t = e.size,
                        s = e.battlePassState,
                        n = e.hasBattlePass,
                        o = e.isChapterChosen,
                        i = e.hasBeenActive,
                        m = void 0 !== i && i,
                        d = e.isChapterSelection,
                        b = void 0 !== d && d,
                        g = e.isOpen,
                        h = void 0 !== g && g,
                        p = e.isProgression,
                        f = void 0 !== p && p,
                        E = e.showProgressBar,
                        L = void 0 === E || E,
                        $ = e.isExtra,
                        P = void 0 !== $ && $,
                        C = e.chapterID,
                        B = e.seasonNum,
                        y = e.clickable,
                        M = void 0 === y || y,
                        I = ((e) => {
                            switch (e) {
                                case c.$u.Small:
                                    return 'small';
                                case c.$u.Micro:
                                    return 'micro';
                                default:
                                    return '';
                            }
                        })(t),
                        k = s === c.Bq.CompletedRightNow,
                        D = n || s === c.Bq.Bought,
                        R = (s === c.Bq.Completed || k) && D,
                        z = (s === c.Bq.Completed || k) && !D,
                        A = R || z,
                        N = void 0 !== a.from,
                        O = L && ((N && o) || m);
                    return r().createElement(
                        'div',
                        { className: _.base },
                        P &&
                            r().createElement('div', {
                                className: l()(_.extra, I && _[`extra__${I}`]),
                                style: S(B, I),
                            }),
                        r().createElement(
                            'div',
                            {
                                className: l()(_.image, I && _[`image__${I}`], M && _.image__clickable),
                                style: x(h, D, s, C, I),
                            },
                            s !== c.Bq.AwaitSeason &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        u,
                                        v(
                                            {
                                                hasProgression: N,
                                                isGolden: D,
                                                isProgressionCompleted: A,
                                                isChapterChosen: o,
                                                hasBeenActive: m,
                                                isChapterSelection: b,
                                                isProgression: f,
                                            },
                                            e,
                                            a,
                                        ),
                                    ),
                                    O &&
                                        r().createElement(w, {
                                            key: a.to,
                                            progression: a,
                                            showProgressionCompleted: k,
                                            isProgressionCompleted: A,
                                            size: t,
                                        }),
                                ),
                        ),
                    );
                });
            },
            4490: (e, a, t) => {
                t.d(a, { $u: () => s, Bq: () => l });
                let s = (function (e) {
                        return ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'), e);
                    })({}),
                    l = (function (e) {
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
            7947: (e, a, t) => {
                t.d(a, { Z: () => s });
                const s = {
                    base: 'ProgressBar_base_c37bf',
                    base__small: 'ProgressBar_base__small_af6d6',
                    background: 'ProgressBar_background_a4e18',
                    background__small: 'ProgressBar_background__small_e2b95',
                    lineWrapper: 'ProgressBar_lineWrapper_e670c',
                };
            },
            2234: (e, a, t) => {
                t.d(a, { Z: () => s });
                const s = { base: 'ProgressBarBlink_base_d7125', base__small: 'ProgressBarBlink_base__small_b92f8' };
            },
            7760: (e, a, t) => {
                t.d(a, { Z: () => s });
                const s = {
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
            5232: (e, a, t) => {
                t.d(a, { Z: () => s });
                const s = {
                    base: 'ProgressBarDeltaGrow_base_f4d46',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b1398',
                    glow: 'ProgressBarDeltaGrow_glow_c912d',
                };
            },
            9822: (e, a, t) => {
                t.d(a, { Z: () => s });
                const s = { base: 'ProgressBarDeltaSimple_base_cfcd3', delta: 'ProgressBarDeltaSimple_delta_dc2b6' };
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        t = {};
    function s(e) {
        var l = t[e];
        if (void 0 !== l) return l.exports;
        var n = (t[e] = { exports: {} });
        return (a[e](n, n.exports, s), n.exports);
    }
    ((s.m = a),
        (e = []),
        (s.O = (a, t, l, n) => {
            if (!t) {
                var r = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [t, l, n] = e[m], o = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) && Object.keys(s.O).every((e) => s.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        e.splice(m--, 1);
                        var _ = l();
                        void 0 !== _ && (a = _);
                    }
                }
                return a;
            }
            n = n || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
            e[m] = [t, l, n];
        }),
        (s.n = (e) => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return (s.d(a, { a }), a);
        }),
        (s.d = (e, a) => {
            for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
        }),
        (s.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
        (s.j = 1730),
        (() => {
            var e = { 1730: 0 };
            s.O.j = (a) => 0 === e[a];
            var a = (a, t) => {
                    var l,
                        n,
                        [r, o, i] = t,
                        _ = 0;
                    if (r.some((a) => 0 !== e[a])) {
                        for (l in o) s.o(o, l) && (s.m[l] = o[l]);
                        if (i) var m = i(s);
                    }
                    for (a && a(t); _ < r.length; _++) ((n = r[_]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return s.O(m);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(a.bind(null, 0)), (t.push = a.bind(null, t.push.bind(t))));
        })());
    var l = s.O(void 0, [1519], () => s(3927));
    l = s.O(l);
})();
