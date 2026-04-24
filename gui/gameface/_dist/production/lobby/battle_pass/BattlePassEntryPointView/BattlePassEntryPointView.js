(() => {
    var __webpack_modules__ = {
            3097: (e, t, u) => {
                'use strict';
                u.d(t, { $u: () => _.$, ko: () => g });
                var a = u(9849),
                    n = u.n(a),
                    r = u(7363),
                    l = u.n(r),
                    o = u(7947),
                    s = u(5713),
                    i = u(9536),
                    c = u(2858),
                    _ = u(233),
                    m = u(9859);
                u(6114);
                const d = c.Gh,
                    E = {
                        freezed: !1,
                        withStack: !1,
                        type: _.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = d,
                            size: u = _.$.Default,
                            animationSettings: a = E,
                            disabled: r = !1,
                            withoutBackground: g = !1,
                            value: h,
                            deltaFrom: A,
                            additionalKey: b,
                            lineRef: p,
                            onChangeAnimationState: C,
                            onEndAnimation: F,
                            onComplete: f,
                            className: B,
                        }) => {
                            const v = (0, m.S)(h, e, A);
                            return l().createElement(
                                'div',
                                { className: n()(o.Z.base, B, o.Z[`base__${u}`]), style: (0, c.VQ)(t) },
                                !g && l().createElement(s.J, { size: u }),
                                l().createElement(i.r, {
                                    size: u,
                                    lineRef: p,
                                    disabled: r,
                                    value: v.value,
                                    deltaFrom: v.deltaFrom,
                                    additionalKey: b,
                                    animationSettings: a,
                                    onEndAnimation: F,
                                    onChangeAnimationState: C,
                                    onComplete: f,
                                }),
                            );
                        },
                    );
            },
            5713: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => i });
                var a = u(9849),
                    n = u.n(a),
                    r = u(7363),
                    l = u.n(r),
                    o = u(7947),
                    s = u(233);
                const i = ({ size: e = s.$.Default }) => {
                    const t = n()(o.Z.background, o.Z[`background__${e}`]);
                    return l().createElement('div', { className: t });
                };
            },
            8243: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => s });
                var a = u(9849),
                    n = u.n(a),
                    r = u(7363),
                    l = u.n(r),
                    o = u(2234);
                const s = ({ size: e }) => {
                    const t = n()(o.Z.base, o.Z[`base__${e}`]);
                    return l().createElement('div', { className: t });
                };
            },
            9536: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => i });
                var a = u(7363),
                    n = u.n(a),
                    r = u(6145),
                    l = u(3107),
                    o = u(5586);
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const i = (0, a.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: a,
                        deltaFrom: i,
                        additionalKey: c,
                        animationSettings: _,
                        onEndAnimation: m,
                        onChangeAnimationState: d,
                        onComplete: E,
                    }) => {
                        if (i === t)
                            return n().createElement(l.M, {
                                key: `${i}-${t}-${c}`,
                                size: e,
                                value: t,
                                lineRef: u,
                                disabled: a,
                                onComplete: E,
                            });
                        const g = {
                            from: i,
                            to: t,
                            size: e,
                            additionalKey: c,
                            lineRef: u,
                            disabled: a,
                            animationSettings: _,
                            onComplete: E,
                            onEndAnimation: m,
                            onChangeAnimationState: d,
                        };
                        return _.withStack
                            ? n().createElement(o.F, g)
                            : n().createElement(r.H, s({ key: `${i}-${t}-${c}` }, g));
                    },
                );
            },
            2420: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var a = u(9849),
                    n = u.n(a),
                    r = u(7363),
                    l = u.n(r),
                    o = u(8243),
                    s = u(7760);
                const i = (0, r.memo)(
                    ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: r, withoutBounce: i }) => {
                        const c = n()(
                                s.Z.base,
                                s.Z[`base__${e}`],
                                u && s.Z.base__disabled,
                                r && s.Z.base__finished,
                                i && s.Z.base__withoutBounce,
                            ),
                            _ = !u && !r;
                        return l().createElement(
                            'div',
                            { className: c, style: a, ref: t },
                            l().createElement('div', { className: s.Z.pattern }),
                            l().createElement('div', { className: s.Z.gradient }),
                            _ && l().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2170: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => E });
                var a = u(9849),
                    n = u.n(a),
                    r = u(1652),
                    l = u(7363),
                    o = u.n(l),
                    s = u(8243),
                    i = u(6114),
                    c = u(5232);
                const _ = (e) => (e ? { left: 0 } : { right: 0 }),
                    m = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    d = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, l.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: E,
                            to: g,
                            onEndAnimation: h,
                            onChangeAnimationState: A,
                            className: b,
                        }) => {
                            const p = g < a,
                                C = (0, l.useState)(i.S.Idle),
                                F = C[0],
                                f = C[1],
                                B = F === i.S.End,
                                v = F === i.S.Idle,
                                S = F === i.S.Grow,
                                D = F === i.S.Shrink,
                                w = (0, l.useCallback)(
                                    (e) => {
                                        (f(e), A && A(e));
                                    },
                                    [A],
                                ),
                                L = (0, l.useCallback)(
                                    (e, t) =>
                                        (0, r.F)(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, l.useEffect)(() => {
                                if (!u)
                                    return v
                                        ? L(i.S.Grow, t)
                                        : S
                                          ? L(i.S.Shrink, e)
                                          : D
                                            ? L(i.S.End, e)
                                            : void (B && h && h());
                            }, [L, u, B, S, v, D, h, t, e]);
                            const O = (0, l.useMemo)(() => Object.assign({ width: '100%' }, d(e), _(p)), [p, e]),
                                P = (0, l.useMemo)(() => Object.assign({ width: '0%' }, d(e), _(p)), [p, e]),
                                y = (0, l.useMemo)(() => Object.assign({ width: '0%' }, m(p, a), d(e)), [a, p, e]),
                                x = (0, l.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - a)}%` }, m(p, a), d(e)),
                                    [a, p, g, e],
                                );
                            if (B) return null;
                            const I = n()(c.Z.base, b, p && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: v ? y : x, className: I },
                                o().createElement(
                                    'div',
                                    { style: D ? P : O, className: c.Z.glow },
                                    o().createElement(s.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            1530: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => i });
                var a = u(1652),
                    n = u(7363),
                    r = u.n(n),
                    l = u(8243),
                    o = u(6114),
                    s = u(9822);
                const i = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: u,
                        from: i,
                        size: c,
                        to: _,
                        onEndAnimation: m,
                        onChangeAnimationState: d,
                    }) => {
                        const E = _ < i,
                            g = (0, n.useState)(o.V.Idle),
                            h = g[0],
                            A = g[1],
                            b = h === o.V.In,
                            p = h === o.V.End,
                            C = h === o.V.Idle,
                            F = (0, n.useCallback)(
                                (e) => {
                                    (A(e), d && d(e));
                                },
                                [d],
                            );
                        ((0, n.useEffect)(() => {
                            if (C && !u) {
                                const e = t;
                                return (0, a.F)(() => {
                                    F(o.V.In);
                                }, e);
                            }
                        }, [F, u, C, t]),
                            (0, n.useEffect)(() => {
                                if (b) {
                                    const u = e + t;
                                    return (0, a.F)(() => {
                                        (m && m(), F(o.V.End));
                                    }, u);
                                }
                            }, [F, b, m, t, e]));
                        const f = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            B = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            v = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(i - _)}%`, left: `${E ? _ : i}%` }),
                                [i, E, _],
                            );
                        return p
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: s.Z.base, style: v },
                                  r().createElement(
                                      'div',
                                      { style: C ? f : B, className: s.Z.delta },
                                      r().createElement(l.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            9143: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => s });
                var a = u(7363),
                    n = u.n(a),
                    r = u(2420),
                    l = u(2170),
                    o = u(6114);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: s,
                        disabled: i,
                        isComplete: c,
                        animationSettings: _,
                        onEndAnimation: m,
                        onChangeAnimationState: d,
                    }) => {
                        const E = e < u,
                            g = (0, a.useState)(!1),
                            h = g[0],
                            A = g[1],
                            b = (0, a.useCallback)(
                                (e) => {
                                    (e === o.S.Shrink && A(!0), d && d(e));
                                },
                                [d],
                            ),
                            p = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            C = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${_.line.duration}ms` }),
                                [_.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(r.t, {
                                size: t,
                                lineRef: s,
                                disabled: i,
                                isComplete: c,
                                withoutBounce: E && 0 === e,
                                baseStyles: h ? C : p,
                            }),
                            u >= 0 &&
                                n().createElement(l.O, {
                                    transitionDuration: _.delta.duration,
                                    transitionDelay: _.delta.delay,
                                    onChangeAnimationState: b,
                                    freezed: _.freezed,
                                    onEndAnimation: m,
                                    from: u,
                                    size: t,
                                    to: e,
                                    className: _.delta.className,
                                }),
                        );
                    },
                );
            },
            1586: (e, t, u) => {
                'use strict';
                u.d(t, { D: () => o });
                var a = u(7363),
                    n = u.n(a),
                    r = u(2420),
                    l = u(1530);
                const o = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: o,
                        disabled: s,
                        isComplete: i,
                        animationSettings: c,
                        onChangeAnimationState: _,
                        onEndAnimation: m,
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
                            n().createElement(r.t, { size: t, lineRef: o, disabled: s, isComplete: i, baseStyles: d }),
                            u >= 0 &&
                                n().createElement(l.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: u,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: _,
                                    onEndAnimation: m,
                                }),
                        );
                    },
                );
            },
            6145: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => c });
                var a = u(7363),
                    n = u.n(a),
                    r = u(233),
                    l = u(9143),
                    o = u(1586);
                const s = ['onComplete', 'onEndAnimation'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const c = (0, a.memo)((e) => {
                    let t = e.onComplete,
                        u = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== t.indexOf(a)) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, s);
                    const _ = (0, a.useState)(!1),
                        m = _[0],
                        d = _[1],
                        E = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== m && d(e), e && t && t(), u && u());
                        }, [m, t, u, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(o.D, i({}, c, { onEndAnimation: E, isComplete: m }));
                        case r.r.Growing:
                            return n().createElement(l.F, i({}, c, { onEndAnimation: E, isComplete: m }));
                        default:
                            return null;
                    }
                });
            },
            6114: (e, t, u) => {
                'use strict';
                u.d(t, { S: () => a, V: () => n });
                let a = (function (e) {
                        return ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e);
                    })({}),
                    n = (function (e) {
                        return ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e);
                    })({});
            },
            5586: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => s });
                var a = u(7363),
                    n = u.n(a),
                    r = u(6145);
                const l = ['onEndAnimation'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== t.indexOf(a)) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, l);
                    const s = (0, a.useRef)({}),
                        i = (0, a.useCallback)(() => {
                            ((s.current.from = void 0), t && t());
                        }, [t]),
                        c = 'number' == typeof s.current.from ? s.current.from : u.from;
                    return (
                        (s.current.from = c),
                        n().createElement(
                            r.H,
                            o({}, u, {
                                onEndAnimation: i,
                                key: `${c}-${u.to}-${null == u ? void 0 : u.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            3107: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => l });
                var a = u(7363),
                    n = u.n(a),
                    r = u(2420);
                const l = ({ size: e, value: t, lineRef: u, disabled: l, onComplete: o }) => {
                    const s = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        i = 100 === t;
                    return (
                        (0, a.useEffect)(() => {
                            i && o && o();
                        }, [i, o]),
                        n().createElement(r.t, { size: e, disabled: l, baseStyles: s, isComplete: i, lineRef: u })
                    );
                };
            },
            2858: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => n, VQ: () => a });
                const a = (e) => {
                        var t, u, a, n, r, l, o, s, i, c, _, m, d, E, g, h, A, b, p, C;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (u = e.bg) ? void 0 : u.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (n = e.bg) ? void 0 : n.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (l = e.pattern.size) ? l : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (s = e.pattern.gradient)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (i = e.pattern.gradientFinished)
                                    ? i
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (_ = null == (m = e.glowSettings) ? void 0 : m.width) ? _ : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (g = null == (h = e.glowSettings) ? void 0 : h.smallWidth) ? g : '44rem',
                            '--progress-glow-small-height':
                                null != (A = null == (b = e.glowSettings) ? void 0 : b.smallHeight) ? A : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (p = null == (C = e.glowSettings) ? void 0 : C.mixBlendMode) ? p : 'lighten',
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
            233: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => a, r: () => n });
                let a = (function (e) {
                        return ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e);
                    })({}),
                    n = (function (e) {
                        return ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e);
                    })({});
            },
            9859: (e, t, u) => {
                'use strict';
                u.d(t, { S: () => l });
                var a = u(8463),
                    n = u(7363);
                const r = (e, t, u) => {
                    if ('number' == typeof u) {
                        return ((0, a.u)(0, t, u) / t) * 100;
                    }
                    return e;
                };
                function l(e, t, u) {
                    return (0, n.useMemo)(() => {
                        const n = ((0, a.u)(0, t, e) / t) * 100;
                        return { value: n, deltaFrom: r(n, t, u) };
                    }, [u, t, e]);
                }
            },
            184: (e) => {
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
            8463: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => a });
                const a = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1652: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => a });
                const a = (e, t) => {
                    let u;
                    const a = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        ('function' == typeof u && u(), clearTimeout(a));
                    };
                };
            },
            5034: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        mouse: () => _,
                        off: () => i,
                        on: () => s,
                        onMinimize: () => o,
                        onResize: () => r,
                        onScaleUpdated: () => l,
                    }));
                var a = u(8277),
                    n = u(1708);
                const r = (0, a.E)('clientResized'),
                    l = (0, a.E)('self.onScaleUpdated'),
                    o = (0, a.E)('clientMinimized'),
                    s = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${t}`,
                                        l = c[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        a(),
                                        () => {
                                            n &&
                                                (l(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
            3157: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => l,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = u(5034),
                    n = u(9703);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function l(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1708: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            9703: (e, t, u) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => n, G: () => a });
            },
            8277: (e, t, u) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => a });
            },
            7475: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => l });
                var a = u(3157),
                    n = u(8133),
                    r = u(3925);
                const l = { view: u(7553), client: a, sound: r.ZP, intl: n.N };
            },
            8133: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => l });
                var a = u(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    l = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            5544: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function n(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            3163: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => n });
                var a = u(8277);
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
            7553: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => i,
                        arabic2roman: () => L,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => I,
                        events: () => l.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => D,
                        getExternalPaddingsRem: () => O,
                        getFontNames: () => w,
                        getScale: () => b,
                        getSize: () => E,
                        getViewGlobalPosition: () => h,
                        initExternalPaddings: () => M,
                        isEventHandled: () => v,
                        isFocused: () => f,
                        pxToRem: () => p,
                        remToPx: () => C,
                        resize: () => g,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var a = u(1308),
                    n = u(5544),
                    r = u(3163),
                    l = u(7576),
                    o = u(2319);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function _(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function m(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: C(t.x), y: C(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    L = a.cg;
                function O() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : l.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function I() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function M(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            a = t.right,
                            n = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            2319: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => i });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    l = 32,
                    o = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (-1 !== t.indexOf(a)) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, l, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    i = {
                        close(e) {
                            s('popover' === e ? n : l);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4020: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => a });
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
            1308: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = n.length - 1; u >= 0; u--) for (; e >= n[u]; ) ((t += a[u]), (e -= n[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            8973: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(7475);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            828: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B0: () => o, ry: () => A });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                var r = u(8973);
                var l = u(6609);
                let o = (function (e) {
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
                    i = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(4020),
                    d = u(7475);
                const E = ['args'];
                function g(e, t, u, a, n, r, l) {
                    try {
                        var o = e[r](l),
                            s = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(s) : Promise.resolve(s).then(a, n);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        u = arguments;
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function l(e) {
                                            g(r, a, n, l, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, a, n, l, o, 'throw', e);
                                        }
                                        l(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (-1 !== t.indexOf(a)) continue;
                                            u[a] = e[a];
                                        }
                                    return u;
                                })(t, E);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    p = () => b(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var F = u(5533);
                const f = n.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: F.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: i,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => b(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => b(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const l = d.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                i = s.x,
                                c = s.y,
                                _ = s.width,
                                m = s.height,
                                E = {
                                    x: d.O.view.pxToRem(i) + l.x,
                                    y: d.O.view.pxToRem(c) + l.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(m),
                                };
                            b(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: h(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, p);
                        },
                        handleViewEvent: b,
                        onBindingsReady: A,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: l.Z5,
                        UserLocale: l.cy,
                    };
                window.ViewEnvHelper = B;
            },
            6609: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, u = 2) => systemLocale.getRealFormat(e, t, u),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            8655: (e, t, u) => {
                'use strict';
                var a = u(7363),
                    n = u.n(a),
                    r = u(1533),
                    l = u.n(r);
                const o = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var s = u(7475);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                function c(e = s.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign(
                        { width: t, height: u },
                        (function (e, t, u) {
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
                                })(e, u),
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
                                })(t, u),
                                r = Math.min(a, n);
                            return {
                                extraLarge: r === u.extraLarge.weight,
                                large: r === u.large.weight,
                                medium: r === u.medium.weight,
                                small: r === u.small.weight,
                                extraSmall: r === u.extraSmall.weight,
                                extraLargeWidth: a === u.extraLarge.weight,
                                largeWidth: a === u.large.weight,
                                mediumWidth: a === u.medium.weight,
                                smallWidth: a === u.small.weight,
                                extraSmallWidth: a === u.extraSmall.weight,
                                extraLargeHeight: n === u.extraLarge.weight,
                                largeHeight: n === u.large.weight,
                                mediumHeight: n === u.medium.weight,
                                smallHeight: n === u.small.weight,
                                extraSmallHeight: n === u.extraSmall.weight,
                            };
                        })(t, u, i),
                    );
                }
                const _ = c(),
                    m = (0, a.createContext)(_),
                    d = ['children'];
                (0, a.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (-1 !== t.indexOf(a)) continue;
                                    u[a] = e[a];
                                }
                            return u;
                        })(e, d);
                    const n = (0, a.useContext)(m),
                        r = n.extraLarge,
                        l = n.large,
                        s = n.medium,
                        i = n.small,
                        c = n.extraSmall,
                        _ = n.extraLargeWidth,
                        E = n.largeWidth,
                        g = n.mediumWidth,
                        h = n.smallWidth,
                        A = n.extraSmallWidth,
                        b = n.extraLargeHeight,
                        p = n.largeHeight,
                        C = n.mediumHeight,
                        F = n.smallHeight,
                        f = n.extraSmallHeight,
                        B = { extraLarge: b, large: p, medium: C, small: F, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && r) return t;
                        if (u.large && l) return t;
                        if (u.medium && s) return t;
                        if (u.small && i) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && _) return o(t, u, B);
                        if (u.largeWidth && E) return o(t, u, B);
                        if (u.mediumWidth && g) return o(t, u, B);
                        if (u.smallWidth && h) return o(t, u, B);
                        if (u.extraSmallWidth && A) return o(t, u, B);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && b) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && C) return t;
                            if (u.smallHeight && F) return t;
                            if (u.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                });
                const E = ({ children: e }) => {
                    const t = (0, a.useState)(c),
                        u = t[0],
                        r = t[1],
                        l = (0, a.useState)(!1),
                        o = l[0],
                        i = l[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const t = s.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : c(t);
                                });
                            }
                            return (
                                e(),
                                i(!0),
                                s.O.client.events.on('clientResized', e),
                                s.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (s.O.client.events.off('clientResized', e),
                                        s.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        n().createElement(m.Provider, { value: u }, o && e)
                    );
                };
                var g = u(9849),
                    h = u.n(g),
                    A = u(184),
                    b = u.n(A);
                let p = (function (e) {
                        return (
                            (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    C = (function (e) {
                        return (
                            (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    F = (function (e) {
                        return (
                            (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const f = () => {
                        const e = (0, a.useContext)(m),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return C.ExtraLarge;
                                    case e.largeWidth:
                                        return C.Large;
                                    case e.mediumWidth:
                                        return C.Medium;
                                    case e.smallWidth:
                                        return C.Small;
                                    case e.extraSmallWidth:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e),
                            l = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return F.ExtraLarge;
                                    case e.largeHeight:
                                        return F.Large;
                                    case e.mediumHeight:
                                        return F.Medium;
                                    case e.smallHeight:
                                        return F.Small;
                                    case e.extraSmallHeight:
                                        return F.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), F.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: l, remScreenWidth: t, remScreenHeight: u };
                    },
                    B = ['children', 'className'];
                function v() {
                    return (
                        (v = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        v.apply(null, arguments)
                    );
                }
                const S = {
                        [C.ExtraSmall]: '',
                        [C.Small]: b().SMALL_WIDTH,
                        [C.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [C.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [F.ExtraSmall]: '',
                        [F.Small]: b().SMALL_HEIGHT,
                        [F.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [F.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [F.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [p.ExtraSmall]: '',
                        [p.Small]: b().SMALL,
                        [p.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [p.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [p.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (-1 !== t.indexOf(a)) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, B);
                        const r = f(),
                            l = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return n().createElement('div', v({ className: h()(u, S[l], D[o], w[s]) }, a), t);
                    },
                    O = ['children'];
                const P = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (-1 !== t.indexOf(a)) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, O);
                        return n().createElement(E, null, n().createElement(L, u, t));
                    },
                    y = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                            }
                        );
                    },
                    x = 33,
                    I = 0,
                    M = !0,
                    T = 'play';
                function N(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const n = a % u,
                            r = (n % t.columns) * e.width,
                            l = Math.trunc(n / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: r, y: l };
                    };
                }
                const H = [
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
                function k() {
                    return (
                        (k = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        k.apply(null, arguments)
                    );
                }
                const U = (0, a.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            l = e.frameCount,
                            o = e.onAnimate,
                            s = e.frameTime,
                            i = void 0 === s ? x : s,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? I : c,
                            m = e.lastFrameIndex,
                            d = void 0 === m ? l - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? M : E,
                            h = e.state,
                            A = void 0 === h ? T : h,
                            b = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            C = e.poster,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (-1 !== t.indexOf(a)) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, H);
                        const f = (0, a.useRef)(null),
                            B = (0, a.useState)(!0),
                            v = B[0],
                            S = B[1];
                        return (
                            (0, a.useEffect)(() => y(() => y(() => S(!1))), []),
                            (0, a.useEffect)(() => {
                                const e = f.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (A) {
                                    case 'play':
                                        return (function () {
                                            const e = G(_, d, r),
                                                t = W(_, d),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == o || o(n, r),
                                                          u(r),
                                                          n === d &&
                                                              (null == p || p(),
                                                              g || (null == b || b(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, i);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && C ? { path: C, x: 0, y: 0 } : r(_),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => u($(e, t));
                                            return (
                                                t.addEventListener('load', a),
                                                () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [i, r, _, d, g, o, p, b, C, A, v]),
                            n().createElement('canvas', k({}, F, { width: t, height: u, ref: f }))
                        );
                    }),
                    W = (e, t) => {
                        let u = e;
                        return () => {
                            const a = u;
                            return ((u += 1), u > t && (u = e), a);
                        };
                    },
                    $ = (e, t) => Object.assign({}, e, { img: t }),
                    G = (e, t, u) => {
                        const a = new Map(),
                            n = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = n[e.path];
                            if (t) a.set(r, $(e, t));
                            else {
                                const t = new Image();
                                ((n[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(r, $(e, t)));
                            }
                        }
                        return a;
                    };
                let j = (function (e) {
                        return (
                            (e.NORMAL = 'normal'),
                            (e.NEW_LEVEL = 'newLevel'),
                            (e.BUY_BATTLE_PASS = 'buyBattlePass'),
                            (e.NOT_TAKEN_REWARDS = 'notTakenRewards'),
                            (e.PROGRESSION_COMPLETED = 'progressionCompleted'),
                            (e.NEW_CHAPTER = 'newChapter'),
                            (e.CHANGE_PROGRESS = 'changeProgress'),
                            (e.CHAPTER_NOT_CHOSEN = 'chapterNotChosen'),
                            e
                        );
                    })({}),
                    V = (function (e) {
                        return (
                            (e.DISABLED = 'disabled'),
                            (e.SEASON_WAITING = 'seasonWaiting'),
                            (e.NORMAL = 'normal'),
                            (e.ATTENTION = 'attention'),
                            e
                        );
                    })({});
                var z = u(2041);
                function X() {
                    return !1;
                }
                console.log;
                var q = u(3305);
                function K(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Z(e, t);
                                var u = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === u && e.constructor && (u = e.constructor.name),
                                    'Map' === u || 'Set' === u
                                        ? Array.from(e)
                                        : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                          ? Z(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Z(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const Y = (e) => (0 === e ? window : window.subViews.get(e));
                const Q = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: l, children: o, mocks: i }) {
                                const c = (0, a.useRef)([]),
                                    _ = (u, a, n) => {
                                        var r;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Y,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            i = s.O.view.addModelObserver(o, t, !0);
                                                        return (n.set(i, u), e && u(l(r)), i);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const u = l(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = K(n.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            o =
                                                'real' === u
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            m = e({
                                                mode: u,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = i(e),
                                                            a = q.LO.box(t, { equals: X });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, q.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const a = null != t ? t : i(e),
                                                            n = q.LO.box(a, { equals: X });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : i(e),
                                                            n = q.LO.box(a, { equals: X });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = q.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, q.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                l = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = q.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, q.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                l[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            d = { mode: u, model: m, externalModel: o, cleanup: _ };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && n ? n.controls(d) : t(d),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    d = (0, a.useState)(r),
                                    E = d[0],
                                    g = d[1],
                                    h = (0, a.useState)(() => _(r, l, i)),
                                    A = h[0],
                                    b = h[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? b(_(E, l, i)) : (m.current = !0);
                                    }, [i, E, l]),
                                    (0, a.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (A.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [A],
                                    ),
                                    n().createElement(u.Provider, { value: A }, o)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({ openBattlePass: e.createCallbackNoArgs('onClick') }),
                    ),
                    J = Q[0],
                    ee = Q[1];
                var te = u(828);
                const ue = [
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
                function ae(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const ne = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: te.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    re = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            l = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            i = e.ignoreShowDelay,
                            c = void 0 !== i && i,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            g = e.isEnabled,
                            h = void 0 === g || g,
                            A = e.targetId,
                            b = void 0 === A ? 0 : A,
                            p = e.onShow,
                            C = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (-1 !== t.indexOf(a)) continue;
                                        u[a] = e[a];
                                    }
                                return u;
                            })(e, ue);
                        const f = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, a.useMemo)(
                                () =>
                                    b ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            a = R.invalid('resId'),
                                            n = '';
                                        var r;
                                        return (
                                            t &&
                                                ((n =
                                                    (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (a = window.subViews[u].id)),
                                            { callerUrl: n, caller: u, stack: t, resId: a }
                                        );
                                    })().resId,
                                [b],
                            ),
                            v = (0, a.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (ne(u, E, { isMouseEvent: !0, on: !0, arguments: ae(n) }, B),
                                    p && p(),
                                    (f.current.isVisible = !0));
                            }, [u, E, n, B, p]),
                            S = (0, a.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        ne(u, E, { on: !1 }, B),
                                        f.current.isVisible && C && C(),
                                        (f.current.isVisible = !1));
                                }
                            }, [u, E, B, C]),
                            D = (0, a.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', D, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', D, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return h
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(f.current.timeoutId),
                                                      (f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == l || l(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === m && S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === m && S(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
                        var w;
                    };
                u(8354);
                (() => {
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
                })();
                var le = u(6609);
                (Date.now(), le.Ew.getRegionalDateTime, le.Ew.getFormattedDateTime);
                const oe = (e, t) => {
                    const u = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
                te.Sw.instance;
                te.Sw.instance;
                const se = oe,
                    ie = [];
                function ce(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), ie)
                    );
                }
                function _e(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const me = 'Blink_base_ba1bb',
                    de = 'Blink_shadowWrapper_b869f',
                    Ee = 'Blink_blinkWrapper_f4612',
                    ge = 'Blink_blinkInner_d4b4f',
                    he = 'Blink_blink_b1275',
                    Ae = (0, z.Pi)(({ isInfinite: e = !1, children: t }) => {
                        const u = ee().model.root.get().isSmall,
                            a = e ? 'infinite' : 1;
                        return n().createElement(
                            'div',
                            { className: me },
                            n().createElement('div', {
                                className: de,
                                style: {
                                    maskImage: `url('R.images.gui.maps.icons.battlePass.logo.full_widget_mask${u ? '_small' : ''}')`,
                                    animationIterationCount: a,
                                },
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: Ee,
                                    style: {
                                        maskImage: `url('R.images.gui.maps.icons.battlePass.logo.widget_mask${u ? '_small' : ''}')`,
                                    },
                                },
                                n().createElement(
                                    'div',
                                    { className: ge, style: { animationIterationCount: a } },
                                    n().createElement('div', { className: he }),
                                ),
                            ),
                            t,
                        );
                    });
                var be = u(1652),
                    pe = u(1705),
                    Ce = u(3927),
                    Fe = u(4490);
                const fe = 'StateNormal_base_b01ea',
                    Be = 'StateNormal_flag_de5d3',
                    ve = 'StateNormal_base__medium_def26',
                    Se = 'StateNormal_emblem_eb5e5',
                    De = 'StateNormal_counter_b565b',
                    we = 'StateNormal_chapterLogoIcon_dbf21',
                    Le = 'StateNormal_base__smallX2_a70d0',
                    Oe = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = t ? 'm' : 'l';
                        return { backgroundImage: `url(${(0, pe.wD)(u, e, a)})` };
                    },
                    Pe = ({
                        chapterID: e,
                        seasonNum: t,
                        isSmall: u,
                        scale: r,
                        progressionState: l,
                        hasBattlePass: o,
                        stateClasses: s,
                        onFinish: i,
                        duration: c,
                        progressInfo: _,
                        emblem: m,
                        notChosenRewardCount: d,
                        isSeasonWaiting: E,
                        isChapterChosen: g,
                        hasExtra: A,
                        children: b,
                    }) => {
                        const C = f().mediaSize;
                        (0, a.useEffect)(() => {
                            if (void 0 !== c && void 0 !== i)
                                return (0, be.F)(() => {
                                    i();
                                }, c);
                        }, [c, i]);
                        const F = (0, a.useMemo)(
                                () =>
                                    E
                                        ? Fe.Bq.AwaitSeason
                                        : g || l === Fe.Tj.ACTIVE || l === Fe.Bq.Completed
                                          ? l === Fe.Tj.ACTIVE
                                              ? o
                                                  ? Fe.Bq.Bought
                                                  : Fe.Bq.Free
                                              : Fe.Bq.Completed
                                          : Fe.Bq.ChapterNotChosen,
                                [o, l, E, g],
                            ),
                            B = F === Fe.Bq.Completed,
                            v = Boolean(g) && F !== Fe.Bq.ChapterNotChosen,
                            S = Boolean(g) && !B,
                            D = v,
                            w = u ? Fe.$u.Small : Fe.$u.Medium;
                        return n().createElement(
                            'div',
                            { className: h()(fe, !u && ve, C <= p.Small && 2 === r && Le) },
                            S &&
                                n().createElement('div', {
                                    className: h()(Be, null == s ? void 0 : s.flag),
                                    style: Oe(e, u),
                                }),
                            n().createElement(
                                'div',
                                { className: h()(Se, null == s ? void 0 : s.emblem) },
                                n().createElement(Ce.G4, {
                                    chapterID: e,
                                    seasonNum: t,
                                    progression: _,
                                    size: u ? Fe.$u.Small : Fe.$u.Medium,
                                    battlePassState: m || F,
                                    hasBattlePass: o,
                                    isChapterChosen: g,
                                    isOpen: D,
                                    isExtra: A,
                                }),
                                l === Fe.Tj.NOT_CHOSEN && n().createElement(Ae, { isInfinite: !0 }),
                                0 !== d &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: h()(De, s && s.counter),
                                            lang: R.strings.settings.LANGUAGE_CODE(),
                                        },
                                        d,
                                    ),
                                b,
                            ),
                            v &&
                                n().createElement('div', {
                                    className: h()(we, s && s.chapterLogoIcon),
                                    style: (0, pe.cs)(e, o, w),
                                }),
                        );
                    },
                    ye = 'StateAttention_base_b4d5a',
                    xe = 'StateAttention_emblem_a1773',
                    Ie = 'StateAttention_emblemCopy_a6579';
                function Me() {
                    return (
                        (Me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Me.apply(null, arguments)
                    );
                }
                const Te = (e) => {
                        const t = (0, a.useMemo)(() => ({ emblem: xe }), []);
                        return (
                            (0, a.useEffect)(() => {
                                _e('bp_attention_widget');
                            }, []),
                            n().createElement(
                                'div',
                                { className: ye },
                                n().createElement('div', { className: Ie }),
                                n().createElement(
                                    Pe,
                                    Me({ stateClasses: t, duration: 2600 }, e),
                                    n().createElement(Ae, null),
                                ),
                            )
                        );
                    },
                    Re = {
                        base: 'StateBuyBP_base_bf9d7',
                        flag: 'StateBuyBP_flag_eb8b8',
                        flagBuyBPIn: 'StateBuyBP_flagBuyBPIn_d787e',
                        emblem: 'StateBuyBP_emblem_a6765',
                        emblemBuyBP: 'StateBuyBP_emblemBuyBP_d9b36',
                        fadeInWithScale: 'StateBuyBP_fadeInWithScale_e2fa4',
                        slideUp: 'StateBuyBP_slideUp_ec2ac',
                        wrapperHover: 'StateBuyBP_wrapperHover_a439a',
                        wrapperOut: 'StateBuyBP_wrapperOut_a3a18',
                        flagHover: 'StateBuyBP_flagHover_a67a6',
                        emblemHover: 'StateBuyBP_emblemHover_cb5d2',
                        logoIconHover: 'StateBuyBP_logoIconHover_ddf28',
                        logoIconHoverSmall: 'StateBuyBP_logoIconHoverSmall_b2abe',
                        logoSmallX2IconHover: 'StateBuyBP_logoSmallX2IconHover_f025d',
                        freePointsHover: 'StateBuyBP_freePointsHover_a1d19',
                        freePointsSmallX2Hover: 'StateBuyBP_freePointsSmallX2Hover_c3695',
                        flagOut: 'StateBuyBP_flagOut_b99b1',
                        emblemOut: 'StateBuyBP_emblemOut_ef2db',
                        freePointsOut: 'StateBuyBP_freePointsOut_f0686',
                        freePointsSmallX2Out: 'StateBuyBP_freePointsSmallX2Out_f40f7',
                        logoIconOut: 'StateBuyBP_logoIconOut_c87dc',
                        logoIconOutSmall: 'StateBuyBP_logoIconOutSmall_a8c96',
                        logoSmallX2IconOut: 'StateBuyBP_logoSmallX2IconOut_ac0ba',
                        emblemLevelUp: 'StateBuyBP_emblemLevelUp_c5dbb',
                        emblemAttention: 'StateBuyBP_emblemAttention_c6a50',
                        emblemCopyAttention: 'StateBuyBP_emblemCopyAttention_e6c0a',
                        flagLevelUp: 'StateBuyBP_flagLevelUp_ab26d',
                        flagLevelUpPosOut: 'StateBuyBP_flagLevelUpPosOut_ff6c6',
                        flagLevelUpLightOut: 'StateBuyBP_flagLevelUpLightOut_f6fe8',
                        flareLevelUp: 'StateBuyBP_flareLevelUp_e21c6',
                        flagSwitchChapter: 'StateBuyBP_flagSwitchChapter_d7483',
                        lightBuyBP: 'StateBuyBP_lightBuyBP_e34b8',
                        lightAttention: 'StateBuyBP_lightAttention_fc852',
                        lightAttentionSmall: 'StateBuyBP_lightAttentionSmall_deb75',
                        lightChapterNotChosen: 'StateBuyBP_lightChapterNotChosen_b21f8',
                        lightChapterNotChosenSmall: 'StateBuyBP_lightChapterNotChosenSmall_a5e45',
                    },
                    Ne = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = f().mediaSize;
                        return n().createElement(
                            'div',
                            {
                                className: h()(
                                    Re.base,
                                    !t && Re.base__medium,
                                    a <= p.Small && 2 === u && Re.base__smallX2,
                                ),
                            },
                            n().createElement(Pe, e, n().createElement(Ae, null)),
                        );
                    },
                    He = 'StateChapterNotChosen_base_b3549',
                    ke = 'StateChapterNotChosen_flag_c8c83',
                    Ue = 'StateChapterNotChosen_emblem_e5e76';
                function We() {
                    return (
                        (We = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        We.apply(null, arguments)
                    );
                }
                const $e = (e) =>
                        n().createElement(
                            'div',
                            { className: He },
                            n().createElement(
                                Pe,
                                We({}, e, { stateClasses: { emblem: e.isFirstShow ? Ue : '', flag: ke } }),
                            ),
                        ),
                    Ge = {
                        base: 'StateComplete_base_e1318',
                        flag: 'StateComplete_flag_b8e45',
                        flagLevelUp: 'StateComplete_flagLevelUp_b23c9',
                        emblem: 'StateComplete_emblem_a9666',
                        emblemLevelUp: 'StateComplete_emblemLevelUp_ad051',
                        fadeInWithScale: 'StateComplete_fadeInWithScale_df744',
                        slideUp: 'StateComplete_slideUp_a378f',
                        wrapperHover: 'StateComplete_wrapperHover_aff3b',
                        wrapperOut: 'StateComplete_wrapperOut_ee3f9',
                        flagHover: 'StateComplete_flagHover_fe560',
                        emblemHover: 'StateComplete_emblemHover_af961',
                        logoIconHover: 'StateComplete_logoIconHover_c7874',
                        logoIconHoverSmall: 'StateComplete_logoIconHoverSmall_b250b',
                        logoSmallX2IconHover: 'StateComplete_logoSmallX2IconHover_d6b6b',
                        freePointsHover: 'StateComplete_freePointsHover_b2186',
                        freePointsSmallX2Hover: 'StateComplete_freePointsSmallX2Hover_dbcf4',
                        flagOut: 'StateComplete_flagOut_f66e6',
                        emblemOut: 'StateComplete_emblemOut_dcd46',
                        freePointsOut: 'StateComplete_freePointsOut_efc61',
                        freePointsSmallX2Out: 'StateComplete_freePointsSmallX2Out_d0cb2',
                        logoIconOut: 'StateComplete_logoIconOut_cfac7',
                        logoIconOutSmall: 'StateComplete_logoIconOutSmall_e99ab',
                        logoSmallX2IconOut: 'StateComplete_logoSmallX2IconOut_bf48a',
                        emblemAttention: 'StateComplete_emblemAttention_caa94',
                        emblemCopyAttention: 'StateComplete_emblemCopyAttention_d75b3',
                        flagLevelUpPosOut: 'StateComplete_flagLevelUpPosOut_bd97c',
                        flagLevelUpLightOut: 'StateComplete_flagLevelUpLightOut_ec38a',
                        flareLevelUp: 'StateComplete_flareLevelUp_fa920',
                        flagBuyBPIn: 'StateComplete_flagBuyBPIn_bd3f8',
                        flagSwitchChapter: 'StateComplete_flagSwitchChapter_c5421',
                        emblemBuyBP: 'StateComplete_emblemBuyBP_db507',
                        lightBuyBP: 'StateComplete_lightBuyBP_badad',
                        lightAttention: 'StateComplete_lightAttention_b9477',
                        lightAttentionSmall: 'StateComplete_lightAttentionSmall_edece',
                        lightChapterNotChosen: 'StateComplete_lightChapterNotChosen_cb5e7',
                        lightChapterNotChosenSmall: 'StateComplete_lightChapterNotChosenSmall_e1514',
                    };
                function je() {
                    return (
                        (je = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        je.apply(null, arguments)
                    );
                }
                const Ve = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = f().mediaSize,
                            r = { emblem: Ge.emblem, flag: Ge.flag };
                        return n().createElement(
                            'div',
                            {
                                className: h()(
                                    Ge.base,
                                    !t && Ge.base__medium,
                                    a <= p.Small && 2 === u && Ge.base__smallX2,
                                ),
                            },
                            n().createElement(Pe, je({}, e, { stateClasses: r }), n().createElement(Ae, null)),
                        );
                    },
                    ze = {
                        base: 'StateLevelUp_base_c5441',
                        flag: 'StateLevelUp_flag_c5899',
                        flagLevelUp: 'StateLevelUp_flagLevelUp_a8cfc',
                        emblem: 'StateLevelUp_emblem_b4771',
                        emblemLevelUp: 'StateLevelUp_emblemLevelUp_cbbe9',
                        fadeInWithScale: 'StateLevelUp_fadeInWithScale_a17aa',
                        slideUp: 'StateLevelUp_slideUp_cfb65',
                        wrapperHover: 'StateLevelUp_wrapperHover_ef036',
                        wrapperOut: 'StateLevelUp_wrapperOut_af178',
                        flagHover: 'StateLevelUp_flagHover_a084f',
                        emblemHover: 'StateLevelUp_emblemHover_d4653',
                        logoIconHover: 'StateLevelUp_logoIconHover_b552e',
                        logoIconHoverSmall: 'StateLevelUp_logoIconHoverSmall_c8d3a',
                        logoSmallX2IconHover: 'StateLevelUp_logoSmallX2IconHover_d52da',
                        freePointsHover: 'StateLevelUp_freePointsHover_c059b',
                        freePointsSmallX2Hover: 'StateLevelUp_freePointsSmallX2Hover_e00c6',
                        flagOut: 'StateLevelUp_flagOut_f814c',
                        emblemOut: 'StateLevelUp_emblemOut_c1673',
                        freePointsOut: 'StateLevelUp_freePointsOut_f76fa',
                        freePointsSmallX2Out: 'StateLevelUp_freePointsSmallX2Out_b49d4',
                        logoIconOut: 'StateLevelUp_logoIconOut_a2531',
                        logoIconOutSmall: 'StateLevelUp_logoIconOutSmall_c1e11',
                        logoSmallX2IconOut: 'StateLevelUp_logoSmallX2IconOut_b24fd',
                        emblemAttention: 'StateLevelUp_emblemAttention_f4fb2',
                        emblemCopyAttention: 'StateLevelUp_emblemCopyAttention_c1388',
                        flagLevelUpPosOut: 'StateLevelUp_flagLevelUpPosOut_a070d',
                        flagLevelUpLightOut: 'StateLevelUp_flagLevelUpLightOut_b8875',
                        flareLevelUp: 'StateLevelUp_flareLevelUp_ed6a1',
                        flagBuyBPIn: 'StateLevelUp_flagBuyBPIn_ca4ac',
                        flagSwitchChapter: 'StateLevelUp_flagSwitchChapter_cf964',
                        emblemBuyBP: 'StateLevelUp_emblemBuyBP_f9f8f',
                        lightBuyBP: 'StateLevelUp_lightBuyBP_d8d3e',
                        lightAttention: 'StateLevelUp_lightAttention_ea558',
                        lightAttentionSmall: 'StateLevelUp_lightAttentionSmall_b9866',
                        lightChapterNotChosen: 'StateLevelUp_lightChapterNotChosen_f498a',
                        lightChapterNotChosenSmall: 'StateLevelUp_lightChapterNotChosenSmall_c0e3b',
                    };
                function Xe() {
                    return (
                        (Xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Xe.apply(null, arguments)
                    );
                }
                const qe = (e) => {
                        const t = e.prevLevel,
                            u = e.progressInfo,
                            r = e.scale,
                            l = e.isSmall,
                            o = e.cycle,
                            s = e.prevCycle,
                            i = (0, a.useState)(0),
                            c = i[0],
                            _ = i[1],
                            m = (0, a.useState)(0),
                            d = m[0],
                            E = m[1],
                            g = (0, a.useState)(u),
                            A = g[0],
                            b = g[1],
                            C = (0, a.useState)(!1),
                            F = C[0],
                            B = C[1],
                            v = (0, a.useState)(!1),
                            S = v[0],
                            D = v[1],
                            w = f().mediaSize,
                            L = (0, a.useMemo)(() => (F ? { emblem: ze.emblem, flag: ze.flag } : void 0), [F]),
                            O = t > u.level && o === s ? 99 : 0,
                            P = (0, a.useCallback)(() => {
                                b({
                                    from: O,
                                    to: u.to,
                                    level: u.level,
                                    labelAnimation: Fe.ru.None,
                                    newLabelAnimation: Fe.ru.None,
                                });
                            }, [O, u.level, u.to]),
                            y = (0, a.useCallback)(() => {
                                (_e('bp_levelup_widget'),
                                    B(!0),
                                    b({
                                        from: O,
                                        to: u.to,
                                        level: t,
                                        newLevel: u.level,
                                        labelAnimation: Fe.ru.HideLevel,
                                        newLabelAnimation: Fe.ru.ShowLevel,
                                    }),
                                    E(window.setTimeout(P, 1200)));
                            }, [O, u.to, u.level, t, P]);
                        return (
                            (0, a.useLayoutEffect)(() => {
                                S ||
                                    (_(window.setTimeout(y, 1200)),
                                    b({ from: u.from, to: t > u.level && o === s ? 0 : 99, level: t }),
                                    D(!0));
                            }, [y, u, t, S, o, s]),
                            (0, a.useEffect)(
                                () => () => {
                                    (window.clearTimeout(c), window.clearTimeout(d));
                                },
                                [c, d],
                            ),
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        ze.base,
                                        !l && ze.base__medium,
                                        w <= p.Small && 2 === r && ze.base__smallX2,
                                    ),
                                },
                                n().createElement(
                                    Pe,
                                    Xe({}, e, { progressInfo: A, stateClasses: L, duration: 3e3 }),
                                    F && n().createElement(Ae, null),
                                ),
                            )
                        );
                    },
                    Ke = 'StateMouseOut_base_f2e9a',
                    Ze = 'StateMouseOut_flag_aa571',
                    Ye = 'StateMouseOut_emblem_f461b',
                    Qe = 'StateMouseOut_chapterLogoIcon_f47b8',
                    Je = 'StateMouseOut_base__medium_f7f08',
                    et = 'StateMouseOut_base__smallX2_ae6d6',
                    tt = 'StateMouseOut_freePoints_d9567';
                function ut() {
                    return (
                        (ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        ut.apply(null, arguments)
                    );
                }
                const at = (e) => {
                        const t = e.scale,
                            u = f().mediaSize,
                            a = { emblem: Ye, flag: Ze, chapterLogoIcon: Qe, freePoints: tt };
                        return n().createElement(
                            'div',
                            { className: h()(Ke, u <= p.Small && 2 === t && et, u > p.Small && Je) },
                            n().createElement(Pe, ut({}, e, { stateClasses: a, duration: 200 })),
                        );
                    },
                    nt = 'StateMouseOver_base_ee1e7',
                    rt = 'StateMouseOver_flag_ec9a3',
                    lt = 'StateMouseOver_emblem_de73d',
                    ot = 'StateMouseOver_chapterLogoIcon_c6473',
                    st = 'StateMouseOver_base__medium_dd608',
                    it = 'StateMouseOver_base__smallX2_e537f',
                    ct = 'StateMouseOver_freePoints_ec16c';
                function _t() {
                    return (
                        (_t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        _t.apply(null, arguments)
                    );
                }
                const mt = (e) => {
                        const t = e.scale,
                            u = f().mediaSize,
                            r = { emblem: lt, flag: rt, chapterLogoIcon: ot, freePoints: ct };
                        return (
                            (0, a.useEffect)(() => {
                                _e('highlight');
                            }, []),
                            n().createElement(
                                'div',
                                { className: h()(nt, u <= p.Small && 2 === t && it, u > p.Small && st) },
                                n().createElement(Pe, _t({}, e, { stateClasses: r })),
                            )
                        );
                    },
                    dt = 'StateNotTakenRewards_base_e20f2',
                    Et = 'StateNotTakenRewards_counter_e1e9a';
                function gt() {
                    return (
                        (gt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        gt.apply(null, arguments)
                    );
                }
                const ht = (e) => {
                        const t = (0, a.useMemo)(() => ({ counter: Et }), []);
                        return n().createElement(
                            'div',
                            { className: dt },
                            n().createElement(Pe, gt({ stateClasses: t, duration: 2600 }, e)),
                        );
                    },
                    At = 'StateProgressChange_base_f7aaa';
                function bt() {
                    return (
                        (bt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        bt.apply(null, arguments)
                    );
                }
                const pt = (e) =>
                        n().createElement(
                            'div',
                            { className: At },
                            n().createElement(Pe, bt({}, e, { duration: 1200 })),
                        ),
                    Ct = 'StateShow_base_be9d9',
                    Ft = 'StateShow_flag_e6bb4',
                    ft = 'StateShow_emblem_e057c',
                    Bt = 'StateShow_chapterLogoIcon_d1f1b',
                    vt = 'StateShow_freePoints_f8ae7';
                function St() {
                    return (
                        (St = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        St.apply(null, arguments)
                    );
                }
                const Dt = (e) => {
                        const t = e.isFirstShow,
                            u = e.progressionState,
                            r = (0, a.useMemo)(
                                () => ({ emblem: ft, flag: Ft, chapterLogoIcon: Bt, freePoints: vt }),
                                [],
                            );
                        (0, a.useEffect)(() => {
                            _e(t || u === Fe.Tj.NOT_CHOSEN ? 'bp_show_widget' : 'bp_show_widget_02');
                        }, [t, u]);
                        const l = u === Fe.Tj.COMPLETED;
                        return n().createElement(
                            'div',
                            { className: Ct },
                            n().createElement(
                                Pe,
                                St({}, e, { stateClasses: r, duration: t ? 1650 : 600 }),
                                t && !l && n().createElement(Ae, null),
                            ),
                        );
                    },
                    wt = {
                        base: 'StateSwitchChapter_base_d9234',
                        flag: 'StateSwitchChapter_flag_c9185',
                        flagSwitchChapter: 'StateSwitchChapter_flagSwitchChapter_b766a',
                        emblem: 'StateSwitchChapter_emblem_eeb06',
                        slideUp: 'StateSwitchChapter_slideUp_f5188',
                        fadeInWithScale: 'StateSwitchChapter_fadeInWithScale_cbd81',
                        wrapperHover: 'StateSwitchChapter_wrapperHover_c7503',
                        wrapperOut: 'StateSwitchChapter_wrapperOut_c36ba',
                        flagHover: 'StateSwitchChapter_flagHover_b036d',
                        emblemHover: 'StateSwitchChapter_emblemHover_e519e',
                        logoIconHover: 'StateSwitchChapter_logoIconHover_b357e',
                        logoIconHoverSmall: 'StateSwitchChapter_logoIconHoverSmall_cf439',
                        logoSmallX2IconHover: 'StateSwitchChapter_logoSmallX2IconHover_b660e',
                        freePointsHover: 'StateSwitchChapter_freePointsHover_b584d',
                        freePointsSmallX2Hover: 'StateSwitchChapter_freePointsSmallX2Hover_f4773',
                        flagOut: 'StateSwitchChapter_flagOut_b4e29',
                        emblemOut: 'StateSwitchChapter_emblemOut_be70b',
                        freePointsOut: 'StateSwitchChapter_freePointsOut_fb432',
                        freePointsSmallX2Out: 'StateSwitchChapter_freePointsSmallX2Out_f685b',
                        logoIconOut: 'StateSwitchChapter_logoIconOut_d1809',
                        logoIconOutSmall: 'StateSwitchChapter_logoIconOutSmall_b5ec3',
                        logoSmallX2IconOut: 'StateSwitchChapter_logoSmallX2IconOut_f9e2e',
                        emblemLevelUp: 'StateSwitchChapter_emblemLevelUp_aed2b',
                        emblemAttention: 'StateSwitchChapter_emblemAttention_c68da',
                        emblemCopyAttention: 'StateSwitchChapter_emblemCopyAttention_f75cf',
                        flagLevelUp: 'StateSwitchChapter_flagLevelUp_c5bcb',
                        flagLevelUpPosOut: 'StateSwitchChapter_flagLevelUpPosOut_bba81',
                        flagLevelUpLightOut: 'StateSwitchChapter_flagLevelUpLightOut_bfc33',
                        flareLevelUp: 'StateSwitchChapter_flareLevelUp_d5935',
                        flagBuyBPIn: 'StateSwitchChapter_flagBuyBPIn_b5933',
                        emblemBuyBP: 'StateSwitchChapter_emblemBuyBP_c11c1',
                        lightBuyBP: 'StateSwitchChapter_lightBuyBP_a4116',
                        lightAttention: 'StateSwitchChapter_lightAttention_b2d8a',
                        lightAttentionSmall: 'StateSwitchChapter_lightAttentionSmall_f0727',
                        lightChapterNotChosen: 'StateSwitchChapter_lightChapterNotChosen_c3c6a',
                        lightChapterNotChosenSmall: 'StateSwitchChapter_lightChapterNotChosenSmall_ea82f',
                    };
                function Lt() {
                    return (
                        (Lt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        Lt.apply(null, arguments)
                    );
                }
                const Ot = (e) => {
                    const t = e.progressInfo,
                        u = e.isSmall,
                        r = e.scale,
                        l = e.hasBattlePass,
                        o = (0, a.useState)(!1),
                        s = o[0],
                        i = o[1],
                        c = f().mediaSize,
                        _ = { emblem: wt.emblem, flag: wt.flag },
                        m = (0, a.useCallback)(() => {
                            i(!0);
                        }, []),
                        d = (0, a.useCallback)(() => {
                            const e = window.setTimeout(m, 500);
                            return () => {
                                window.clearTimeout(e);
                            };
                        }, [m]);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            const e = window.setTimeout(d, 450);
                            return () => {
                                window.clearTimeout(e);
                            };
                        }, [d]),
                        n().createElement(
                            'div',
                            {
                                className: h()(
                                    wt.base,
                                    !u && wt.base__medium,
                                    c <= p.Small && 2 === r && wt.base__smallX2,
                                ),
                            },
                            n().createElement(
                                Pe,
                                Lt({}, e, {
                                    progressInfo: t,
                                    emblem: l ? Fe.Bq.Bought : Fe.Bq.Free,
                                    stateClasses: _,
                                    duration: 3500,
                                }),
                                s && n().createElement(Ae, null),
                            ),
                        )
                    );
                };
                let Pt = (function (e) {
                    return (
                        (e.NORMAL = 'NORMAL'),
                        (e.SHOW = 'SHOW'),
                        (e.PROGRESS_CHANGE = 'PROGRESS_CHANGE'),
                        (e.MOUSE_OVER = 'MOUSE_OVER'),
                        (e.MOUSE_OUT = 'MOUSE_OUT'),
                        (e.LEVEL_DOWN = 'LEVEL_DOWN'),
                        (e.LEVEL_UP = 'LEVEL_UP'),
                        (e.BUY_BP = 'BUY_BP'),
                        (e.SWITCH_CHAPTER = 'SWITCH_CHAPTER'),
                        (e.SHOW_NOT_TAKEN_REWARDS = 'SHOW_NOT_TAKEN_REWARDS'),
                        (e.COMPLETE = 'COMPLETE'),
                        (e.ATTENTION = 'ATTENTION'),
                        (e.CHAPTER_NOT_CHOSEN = 'CHAPTER_NOT_CHOSEN'),
                        (e.MARATHON_CHAPTER = 'MARATHON_CHAPTER'),
                        e
                    );
                })({});
                const yt = {
                    base: 'Content_base_fb178',
                    base__smallX2: 'Content_base__smallX2_cf0c9',
                    base__disabled: 'Content_base__disabled_adc58',
                    base__seasonWaiting: 'Content_base__seasonWaiting_cfe32',
                    effects: 'Content_effects_eae0e',
                    effects__normal: 'Content_effects__normal_f798e',
                    effects__disabled: 'Content_effects__disabled_d136f',
                    effects__seasonWaiting: 'Content_effects__seasonWaiting_d30b4',
                    componentWrapper: 'Content_componentWrapper_b2c51',
                    componentWrapper__hidden: 'Content_componentWrapper__hidden_ecafd',
                    fadeInWithScale: 'Content_fadeInWithScale_ce8a4',
                    slideUp: 'Content_slideUp_d1ab6',
                    wrapperHover: 'Content_wrapperHover_f4cf7',
                    wrapperOut: 'Content_wrapperOut_bd952',
                    flagHover: 'Content_flagHover_c04ae',
                    emblemHover: 'Content_emblemHover_cd72d',
                    logoIconHover: 'Content_logoIconHover_f9950',
                    logoIconHoverSmall: 'Content_logoIconHoverSmall_f07f8',
                    logoSmallX2IconHover: 'Content_logoSmallX2IconHover_c1ae8',
                    freePointsHover: 'Content_freePointsHover_ee338',
                    freePointsSmallX2Hover: 'Content_freePointsSmallX2Hover_c00d2',
                    flagOut: 'Content_flagOut_e4a9e',
                    emblemOut: 'Content_emblemOut_c553d',
                    freePointsOut: 'Content_freePointsOut_f2e2b',
                    freePointsSmallX2Out: 'Content_freePointsSmallX2Out_dde1d',
                    logoIconOut: 'Content_logoIconOut_eb504',
                    logoIconOutSmall: 'Content_logoIconOutSmall_c1e0e',
                    logoSmallX2IconOut: 'Content_logoSmallX2IconOut_c6166',
                    emblemLevelUp: 'Content_emblemLevelUp_b9605',
                    emblemAttention: 'Content_emblemAttention_fa787',
                    emblemCopyAttention: 'Content_emblemCopyAttention_d3251',
                    flagLevelUp: 'Content_flagLevelUp_fb7f4',
                    flagLevelUpPosOut: 'Content_flagLevelUpPosOut_e9af5',
                    flagLevelUpLightOut: 'Content_flagLevelUpLightOut_b6054',
                    flareLevelUp: 'Content_flareLevelUp_b0122',
                    flagBuyBPIn: 'Content_flagBuyBPIn_ff9e7',
                    flagSwitchChapter: 'Content_flagSwitchChapter_ee413',
                    emblemBuyBP: 'Content_emblemBuyBP_c814a',
                    lightBuyBP: 'Content_lightBuyBP_f31db',
                    lightAttention: 'Content_lightAttention_b68ac',
                    lightAttentionSmall: 'Content_lightAttentionSmall_f0277',
                    lightChapterNotChosen: 'Content_lightChapterNotChosen_d2106',
                    lightChapterNotChosenSmall: 'Content_lightChapterNotChosenSmall_f67fc',
                };
                function xt() {
                    return (
                        (xt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        xt.apply(null, arguments)
                    );
                }
                const It = R.strings.battle_pass.tooltips.entryPoint.disabled,
                    Mt = R.views.common.tooltip_window,
                    Tt = (e, t, u, a, n, r) => {
                        if (e) return Pt.SHOW;
                        switch (t) {
                            case j.BUY_BATTLE_PASS:
                                return Pt.BUY_BP;
                            case j.PROGRESSION_COMPLETED:
                                return Pt.COMPLETE;
                            case j.NEW_LEVEL:
                                return u === a
                                    ? n === r
                                        ? Pt.NORMAL
                                        : Pt.LEVEL_UP
                                    : u < a
                                      ? n !== r
                                          ? Pt.LEVEL_UP
                                          : Pt.LEVEL_DOWN
                                      : Pt.LEVEL_UP;
                            case j.CHANGE_PROGRESS:
                                return u !== a ? Pt.LEVEL_UP : Pt.PROGRESS_CHANGE;
                            case j.NEW_CHAPTER:
                                return u === a ? Pt.NORMAL : Pt.SWITCH_CHAPTER;
                            case j.NOT_TAKEN_REWARDS:
                                return Pt.SHOW_NOT_TAKEN_REWARDS;
                            case j.NORMAL:
                                return n === r ? Pt.NORMAL : Pt.LEVEL_UP;
                            case j.CHAPTER_NOT_CHOSEN:
                                return Pt.CHAPTER_NOT_CHOSEN;
                        }
                    },
                    Rt = (e) => {
                        var t;
                        return '' === e ? It.body() : null != (t = It.$dyn(e)) ? t : It.body();
                    },
                    Nt = (0, z.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            u = e.controls,
                            r = t.root.get(),
                            l = r.level,
                            o = r.prevLevel,
                            i = r.battlePassState,
                            c = r.isSmall,
                            _ = r.tooltipID,
                            m = r.progression,
                            d = r.prevProgression,
                            E = r.animState,
                            g = r.animStateKey,
                            A = r.hasBattlePass,
                            b = r.chapterID,
                            C = r.seasonNum,
                            F = r.isProgressionCompleted,
                            B = r.notChosenRewardCount,
                            v = r.battleType,
                            S = r.isChapterChosen,
                            D = r.hasExtra,
                            w = r.isFirstShow,
                            L = r.isHoliday,
                            O = r.cycle,
                            P = r.prevCycle,
                            y = i !== V.DISABLED,
                            x = (0, a.useState)(!0),
                            I = x[0],
                            M = x[1],
                            T = (0, a.useState)([I ? Pt.SHOW : Pt.NORMAL])[1],
                            R = (0, a.useState)(Tt(I, E, l, o, O, P)),
                            N = R[0],
                            H = R[1],
                            k = (0, a.useState)(A),
                            U = k[0],
                            W = k[1],
                            $ = (0, a.useState)(E),
                            G = $[0],
                            z = $[1],
                            X = (0, a.useState)(!1),
                            q = X[0],
                            K = X[1],
                            Z = (0, a.useState)(!1),
                            Y = Z[0],
                            Q = Z[1],
                            J = (0, a.useState)(D),
                            te = J[0],
                            ue = J[1],
                            ae = se(D),
                            ne = (() => {
                                const e = (0, a.useState)(s.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            u(s.O.view.getScale());
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
                            le = f().mediaSize,
                            oe = i === V.DISABLED,
                            ie = h()(
                                yt.base,
                                yt[`${yt.base}__${i}`],
                                oe && yt.base__disabled,
                                i === V.SEASON_WAITING && yt.base__seasonWaiting,
                                le <= p.Small && 2 === ne && yt.base__smallX2,
                            ),
                            me = (0, a.useMemo)(
                                () =>
                                    oe || N !== Pt.MOUSE_OVER
                                        ? Mt.simple_tooltip_content.SimpleTooltipContent('resId')
                                        : _,
                                [oe, _, N],
                            ),
                            de = (0, a.useMemo)(() => (oe ? Mt.tooltip_window.TooltipWindow('resId') : void 0), [oe]),
                            Ee = (0, a.useMemo)(() => (oe ? { header: It.header(), body: Rt(v) } : void 0), [v, oe]),
                            ge = (0, a.useCallback)(
                                (e) => {
                                    T((t) => {
                                        const u = t[0],
                                            a = t[t.length - 1];
                                        if (0 === t.length) H(e);
                                        else {
                                            if (1 === t.length && u === Pt.NORMAL) return (H(e), [e]);
                                            if (a === Pt.NORMAL) return t.splice(t.length - 1, 1).concat(e);
                                        }
                                        return t.concat(e);
                                    });
                                },
                                [T],
                            ),
                            he = (0, a.useCallback)(() => {
                                y && K(!0);
                            }, [y]),
                            Ae = (0, a.useCallback)(() => {
                                y && K(!1);
                            }, [y]),
                            pe = (0, a.useCallback)(() => {
                                y && (u.openBattlePass(), H(Pt.MOUSE_OUT), T([]), K(!1), _e('play'));
                            }, [u, y, T]),
                            Ce = (0, a.useCallback)(
                                () => (F && L ? Fe.Tj.COMPLETED : S ? Fe.Tj.ACTIVE : Fe.Tj.NOT_CHOSEN),
                                [F, S, L],
                            );
                        var fe;
                        ((fe = () => {
                            M(!1);
                        }),
                            (0, a.useEffect)(fe, []),
                            (0, a.useEffect)(() => {
                                z(E);
                            }, [E, g, l, m, O]),
                            (0, a.useEffect)(() => {
                                A !== U && W(A);
                            }, [U, A, N]));
                        const Be = ce(() => {
                                (H(Pt.MOUSE_OVER), T([]));
                            }),
                            ve = ce(() => {
                                (H(Pt.MOUSE_OUT), T([]));
                            }),
                            Se = ((e, t, u, n) => {
                                const r = (0, a.useState)(!1),
                                    l = r[0],
                                    o = r[1],
                                    s = (0, a.useRef)(!1);
                                return (
                                    (0, a.useEffect)(() => {
                                        if (l)
                                            return (0, be.F)(() => {
                                                o(!1);
                                            }, t);
                                    }, [t, l]),
                                    (0, a.useEffect)(() => {
                                        l
                                            ? (s.current = !0)
                                            : !s.current || e
                                              ? ((s.current = !1), e ? u && u() : n && n())
                                              : (s.current = !1);
                                    }, [l, e, n, u]),
                                    { setIsAnimationPending: o }
                                );
                            })(q, 3200, Be, ve),
                            De = Se.setIsAnimationPending;
                        ((0, a.useEffect)(() => {
                            if (
                                !(
                                    (N === Tt(I, G, l, o, O, P) && N !== Pt.SHOW) ||
                                    N === Pt.MOUSE_OVER ||
                                    (N === Pt.MOUSE_OUT && G === j.NORMAL)
                                )
                            )
                                switch (G) {
                                    case j.BUY_BATTLE_PASS:
                                        ge(Pt.BUY_BP);
                                        break;
                                    case j.PROGRESSION_COMPLETED:
                                        ge(Pt.COMPLETE);
                                        break;
                                    case j.NEW_LEVEL:
                                        (De(!0), ge(l < o && O === P ? Pt.LEVEL_DOWN : Pt.LEVEL_UP));
                                        break;
                                    case j.CHANGE_PROGRESS:
                                        ge(l !== o ? Pt.LEVEL_UP : O === P ? Pt.PROGRESS_CHANGE : Pt.LEVEL_UP);
                                        break;
                                    case j.NEW_CHAPTER:
                                        (T([]), ge(Pt.SWITCH_CHAPTER));
                                        break;
                                    case j.NOT_TAKEN_REWARDS:
                                        ge(Pt.SHOW_NOT_TAKEN_REWARDS);
                                        break;
                                    case j.NORMAL:
                                        ge(O === P ? Pt.NORMAL : Pt.LEVEL_UP);
                                        break;
                                    case j.CHAPTER_NOT_CHOSEN:
                                        ge(Pt.CHAPTER_NOT_CHOSEN);
                                }
                        }, [G, ge, l, o, te, I, N, T, De, O, P, E]),
                            (0, a.useEffect)(() => {
                                O !== P && H(Pt.PROGRESS_CHANGE);
                            }, [O, P]),
                            (0, a.useEffect)(() => {
                                'boolean' == typeof ae &&
                                    ae !== D &&
                                    (Q(!0),
                                    setTimeout(() => {
                                        (ue(D), Q(!1));
                                    }, 800));
                            }, [ae, D]));
                        const we = (0, a.useCallback)(() => {
                                (N === Tt(I, G, l, o, O, P) &&
                                    N !== Pt.LEVEL_UP &&
                                    N !== Pt.LEVEL_DOWN &&
                                    N !== Pt.PROGRESS_CHANGE &&
                                    N !== Pt.SHOW) ||
                                    T((e) => (e.length > 1 ? (H(e[1]), e.slice(1)) : (z(j.NORMAL), [])));
                            }, [N, I, G, l, o, O, P, T]),
                            Le = (0, a.useMemo)(() => {
                                const e = Ce(),
                                    t = {
                                        cycle: O,
                                        prevCycle: P,
                                        chapterID: b,
                                        seasonNum: C,
                                        isSmall: c,
                                        isMouseOver: q,
                                        progressInfo: { level: l, to: m, from: m },
                                        hasBattlePass: U,
                                        onFinish: we,
                                        progressionState: e,
                                        notChosenRewardCount: B,
                                        isSeasonWaiting: i === V.SEASON_WAITING,
                                        isDisabled: oe,
                                        isChapterChosen: S,
                                        hasExtra: te || L,
                                        duration: D !== ae ? 1650 : 0,
                                        scale: ne,
                                    };
                                switch (N) {
                                    case Pt.ATTENTION:
                                        return q ? n().createElement(mt, t) : n().createElement(Te, t);
                                    case Pt.SHOW:
                                        return (
                                            t.progressInfo.level !== o && -1 !== o && (t.progressInfo.level = o),
                                            n().createElement(Dt, xt({}, t, { isFirstShow: w }))
                                        );
                                    case Pt.NORMAL:
                                        return O === P
                                            ? n().createElement(Pe, t)
                                            : ((t.progressInfo.from = d),
                                              n().createElement(
                                                  qe,
                                                  xt({}, t, { prevLevel: o, cycle: O, prevCycle: P }),
                                              ));
                                    case Pt.PROGRESS_CHANGE:
                                        return ((t.progressInfo.from = d > m ? 0 : d), n().createElement(pt, t));
                                    case Pt.MOUSE_OVER:
                                        return n().createElement(mt, t);
                                    case Pt.MOUSE_OUT:
                                        return n().createElement(at, t);
                                    case Pt.LEVEL_DOWN:
                                    case Pt.LEVEL_UP:
                                        return (
                                            (t.progressInfo.from = d),
                                            n().createElement(qe, xt({}, t, { prevLevel: o, cycle: O, prevCycle: P }))
                                        );
                                    case Pt.BUY_BP:
                                        return n().createElement(Ne, t);
                                    case Pt.SWITCH_CHAPTER:
                                        return n().createElement(Ot, xt({ prevLevel: o }, t));
                                    case Pt.SHOW_NOT_TAKEN_REWARDS:
                                        return n().createElement(ht, t);
                                    case Pt.COMPLETE:
                                        return e === Fe.Tj.NOT_CHOSEN
                                            ? n().createElement($e, t)
                                            : e === Fe.Tj.COMPLETED
                                              ? n().createElement(Ve, t)
                                              : n().createElement(Pe, t);
                                    case Pt.CHAPTER_NOT_CHOSEN:
                                        return n().createElement($e, xt({}, t, { isFirstShow: I }));
                                }
                            }, [Ce, O, P, b, C, c, q, l, m, U, we, B, i, oe, S, te, L, D, ae, ne, N, o, w, d, I]);
                        return n().createElement(
                            re,
                            { contentId: me, decoratorId: de, args: Ee },
                            n().createElement(
                                'div',
                                {
                                    className: ie,
                                    style: { cursor: y ? 'pointer' : 'default' },
                                    onMouseEnter: he,
                                    onMouseLeave: Ae,
                                    onClick: pe,
                                },
                                n().createElement(
                                    'div',
                                    { className: h()(yt.effects, yt[`${yt.effects}__${i}`]) },
                                    n().createElement(
                                        'div',
                                        { className: h()(yt.componentWrapper, Y && yt.componentWrapper__hidden) },
                                        Le,
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ht = 'App_base_c4687',
                    kt = 'App_light_e1abe',
                    Ut = 'App_light__chapterNotChosen_a7fbc',
                    Wt = {
                        width: 250,
                        height: 250,
                        frameCount: 75,
                        chunk: { count: 2, columns: 7, rows: 6 },
                        getChunkPath:
                            (($t = 'R.images.gui.maps.icons.sequence.sun_shine_sprite.sprite_'), (e) => `${$t}${e}`),
                    };
                var $t;
                const Gt = (0, z.Pi)(() => {
                    const e = ee().model.root.get(),
                        t = e.isChapterChosen,
                        u = e.battlePassState,
                        a = e.isProgressionCompleted,
                        r = [V.DISABLED, V.SEASON_WAITING].includes(u);
                    return n().createElement(
                        'div',
                        { className: Ht },
                        !t &&
                            !r &&
                            n().createElement(
                                'div',
                                { className: h()(kt, a && Ut) },
                                n().createElement(U, {
                                    width: Wt.width,
                                    height: Wt.height,
                                    frameCount: Wt.frameCount,
                                    getImageSource: N(Wt),
                                }),
                            ),
                        n().createElement(Nt, null),
                    );
                });
                engine.whenReady.then(() => {
                    l().render(
                        n().createElement(J, null, n().createElement(P, null, n().createElement(Gt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1705: (e, t, u) => {
                'use strict';
                u.d(t, { cs: () => l, wD: () => r });
                var a = u(4490);
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
                    r = (e, t, u = '') => {
                        const a = u.length > 0 ? `_${u}` : u,
                            n = e.$dyn(`c_${t}${a}`),
                            r = String(t).slice(-1),
                            l = e.$dyn(`default_${r}${a}`);
                        return n || l;
                    },
                    l = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            l = t ? 'BP' : '',
                            o = `${n(u)}${l}`;
                        return { backgroundImage: `url(${r(a, e, o)})` };
                    };
            },
            3927: (e, t, u) => {
                'use strict';
                u.d(t, { G4: () => S });
                var a = u(9849),
                    n = u.n(a),
                    r = u(7363),
                    l = u.n(r);
                const o = (e, t) => {
                    const u = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            u = e.path.$dyn('default');
                        return t || u;
                    })(e).$dyn(`${t.name}${u}`);
                };
                let s = (function (e) {
                    return ((e.Season = 'season'), (e.Chapter = 'chapter'), e);
                })({});
                const i = {
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
                var c = u(1705);
                const _ = {
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
                    m = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: r,
                        isFirstLevel: o,
                        showProgressionCompleted: s,
                    }) => {
                        const i = n()(_.base, _[`base__${t}`]),
                            c = n()(
                                _.text,
                                _.text__filtered,
                                _[`text__${t}`],
                                _[`text__${r}`],
                                s && _.text__hideWithDelay,
                                o && _.text__new,
                                a && _.text__rewardScreen,
                            ),
                            m = n()(
                                _.textWithBlend,
                                o && _.text__new,
                                s && _.text__hideWithDelay,
                                _[`textWithBlend__${r}`],
                            ),
                            d = n()(_.text, _.text__blended, _[`text__${t}`], a && _.text__rewardScreen),
                            E = n()(
                                _.textMask,
                                u && _.textMask__gold,
                                a && _.textMask__animated,
                                u && a && _.textMask__goldContrast,
                                _[`textMask__${t}`],
                            );
                        return l().createElement(
                            'div',
                            { className: i },
                            l().createElement('div', { className: c }, e),
                            l().createElement(
                                'div',
                                { className: m },
                                l().createElement('div', { className: d }, e),
                                l().createElement('div', { className: E }),
                            ),
                        );
                    };
                var d = u(4490);
                const E = {
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
                    g = (e, t) => {
                        const u = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case d.$u.Small:
                                    return 'l';
                                case d.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${u}`;
                    },
                    h = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: r,
                            isGolden: i,
                            labelAnimation: _,
                            newLabelAnimation: h,
                            isChapterChosen: A = !1,
                            chapterID: b = 0,
                            seasonNum: p = -1,
                            isProgressionCompleted: C = !1,
                            hasBeenActive: F = !1,
                            isChapterSelection: f = !1,
                            isProgression: B = !1,
                        }) => {
                            let v = '',
                                S = '';
                            u === d.$u.Small
                                ? ((v = 'Small'), (S = '__small'))
                                : u === d.$u.Micro && ((v = 'Micro'), (S = '__micro'));
                            const D = a === d.Bq.SwitchedChapterRightNow,
                                w = a === d.Bq.CompletedRightNow,
                                L = ((e, t, u, a, n) => (e || n ? t || !u : t || !a))(f, C, F, A, B),
                                O = !B && !f;
                            return l().createElement(
                                l().Fragment,
                                null,
                                L
                                    ? l().createElement('div', {
                                          className: n()(E.icon, S && E[`icon${S}`], w && E[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = g(i, u);
                                                  if (O) {
                                                      if (C) {
                                                          const u = { path: e.icon, name: s.Season, id: p };
                                                          return o(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!A) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, b, t);
                                              })()})`,
                                          },
                                      })
                                    : l().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  E.label,
                                                  E[`label${S}`],
                                                  D && E.label__new,
                                                  D && E[`label__new${v}`],
                                                  !w && C && E.label__disabled,
                                                  E[`label__${_}${v}`],
                                                  r && E[`label__hasProgress${v}`],
                                                  r && E[`label__hasProgress${v}${B ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          l().createElement(m, {
                                              level: t,
                                              size: u,
                                              isGold: i,
                                              isFirstLevel: D,
                                              curState: _,
                                              showProgressionCompleted: w,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    l().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                E.label,
                                                E[`label${S}`],
                                                D && E.label__new,
                                                D && E[`label__new${v}`],
                                                E[`label__${h}${v}`],
                                                r && E[`label__hasProgress${v}`],
                                            ),
                                        },
                                        l().createElement(m, {
                                            level: e,
                                            size: u,
                                            isGold: i,
                                            isFirstLevel: D,
                                            curState: h,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var A = u(3097);
                const b = {
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
                    p = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: r,
                        }) => {
                            const o = n()(b.base, b[`base__${r}`], u && b.base__completed, !u && a && b.base__hidden);
                            return l().createElement(
                                'div',
                                { className: o },
                                l().createElement(A.ko, {
                                    key: e.to,
                                    size: A.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function C() {
                    return (
                        (C = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var a in u) ({}).hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                  }
                                  return e;
                              }),
                        C.apply(null, arguments)
                    );
                }
                let F = (function (e) {
                        return ((e.Closed = 'closed'), (e.Open = 'open'), e);
                    })({}),
                    f = (function (e) {
                        return ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'), e);
                    })({});
                const B = (e, t, u, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: s.Chapter, id: a },
                            l = e ? F.Open : F.Closed,
                            i = ((e, t) =>
                                e
                                    ? f.Gold
                                    : t === d.Bq.Completed || t === d.Bq.CompletedRightNow
                                      ? f.Completed
                                      : f.Initial)(t, u),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${o(r, { name: 'emblem', postfix: `${l}_${i}${c}` })})` };
                    },
                    v = (e, t) => {
                        const u = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: s.Season, id: e };
                        return { backgroundImage: `url(${o(u, { name: 'extra', postfix: t })})` };
                    },
                    S = (0, r.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            a = e.battlePassState,
                            r = e.hasBattlePass,
                            o = e.isChapterChosen,
                            s = e.hasBeenActive,
                            c = void 0 !== s && s,
                            _ = e.isChapterSelection,
                            m = void 0 !== _ && _,
                            E = e.isOpen,
                            g = void 0 !== E && E,
                            A = e.isProgression,
                            b = void 0 !== A && A,
                            F = e.showProgressBar,
                            f = void 0 === F || F,
                            S = e.isExtra,
                            D = void 0 !== S && S,
                            w = e.chapterID,
                            L = e.seasonNum,
                            O = e.clickable,
                            P = void 0 === O || O,
                            y = ((e) => {
                                switch (e) {
                                    case d.$u.Small:
                                        return 'small';
                                    case d.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(u),
                            x = a === d.Bq.CompletedRightNow,
                            I = r || a === d.Bq.Bought,
                            M = (a === d.Bq.Completed || x) && I,
                            T = (a === d.Bq.Completed || x) && !I,
                            R = M || T,
                            N = void 0 !== t.from,
                            H = f && ((N && o) || c);
                        return l().createElement(
                            'div',
                            { className: i.base },
                            D &&
                                l().createElement('div', {
                                    className: n()(i.extra, y && i[`extra__${y}`]),
                                    style: v(L, y),
                                }),
                            l().createElement(
                                'div',
                                {
                                    className: n()(i.image, y && i[`image__${y}`], P && i.image__clickable),
                                    style: B(g, I, a, w, y),
                                },
                                a !== d.Bq.AwaitSeason &&
                                    l().createElement(
                                        l().Fragment,
                                        null,
                                        l().createElement(
                                            h,
                                            C(
                                                {
                                                    hasProgression: N,
                                                    isGolden: I,
                                                    isProgressionCompleted: R,
                                                    isChapterChosen: o,
                                                    hasBeenActive: c,
                                                    isChapterSelection: m,
                                                    isProgression: b,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        H &&
                                            l().createElement(p, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: x,
                                                isProgressionCompleted: R,
                                                size: u,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            4490: (e, t, u) => {
                'use strict';
                u.d(t, { $u: () => a, Bq: () => r, Tj: () => n, ru: () => l });
                let a = (function (e) {
                        return ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'), e);
                    })({}),
                    n = (function (e) {
                        return ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'), e);
                    })({}),
                    r = (function (e) {
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
                    })({}),
                    l = (function (e) {
                        return (
                            (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'),
                            e
                        );
                    })({});
            },
            7947: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_c37bf',
                    base__small: 'ProgressBar_base__small_af6d6',
                    background: 'ProgressBar_background_a4e18',
                    background__small: 'ProgressBar_background__small_e2b95',
                    lineWrapper: 'ProgressBar_lineWrapper_e670c',
                };
            },
            2234: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_d7125', base__small: 'ProgressBarBlink_base__small_b92f8' };
            },
            7760: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
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
            5232: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_f4d46',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b1398',
                    glow: 'ProgressBarDeltaGrow_glow_c912d',
                };
            },
            9822: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_cfcd3', delta: 'ProgressBarDeltaSimple_delta_dc2b6' };
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, a] = deferred[s], r = !0, l = 0; l < t.length; l++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 6229),
        (() => {
            var e = { 6229: 0, 1730: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, l, o] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in l) __webpack_require__.o(l, a) && (__webpack_require__.m[a] = l[a]);
                        if (o) var i = o(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(i);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(8655));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
