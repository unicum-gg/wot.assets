(() => {
    var __webpack_modules__ = {
            875: (e, u, t) => {
                'use strict';
                t.d(u, { ko: () => W, uu: () => z });
                var n = t(483),
                    a = t.n(n),
                    r = t(179),
                    s = t.n(r);
                const o = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                var i = t(736);
                const l = ({ size: e = i.$.Default, classMix: u }) =>
                        s().createElement('div', { className: a()(o.background, o[`background__${e}`], u) }),
                    c = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    d = ({ size: e }) => {
                        const u = a()(c.base, c[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    m = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    E = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: o }) => {
                            const i = a()(
                                    m.base,
                                    m[`base__${e}`],
                                    t && m.base__disabled,
                                    r && m.base__finished,
                                    o && m.base__withoutBounce,
                                ),
                                l = !t && !r;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                s().createElement('div', { className: m.pattern }),
                                s().createElement('div', { className: m.gradient }),
                                l && s().createElement(d, { size: e }),
                            );
                        },
                    ),
                    _ = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: a }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                i && a && a();
                            }, [i, a]),
                            s().createElement(E, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    };
                var A = t(122);
                let g, F;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(g || (g = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(F || (F = {})));
                const D = 'ProgressBarDeltaSimple_base_6c',
                    C = 'ProgressBarDeltaSimple_delta_99',
                    p = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: a,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                m = (0, r.useState)(F.Idle),
                                E = m[0],
                                _ = m[1],
                                g = E === F.In,
                                p = E === F.End,
                                B = E === F.Idle,
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (B && !t) {
                                    const e = u;
                                    return (0, A.F)(() => {
                                        b(F.In);
                                    }, e);
                                }
                            }, [b, t, B, u]),
                                (0, r.useEffect)(() => {
                                    if (g) {
                                        const t = e + u;
                                        return (0, A.F)(() => {
                                            (i && i(), b(F.End));
                                        }, t);
                                    }
                                }, [b, g, i, u, e]));
                            const f = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                v = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return p
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: D, style: v },
                                      s().createElement(
                                          'div',
                                          { style: B ? f : h, className: C },
                                          s().createElement(d, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    B = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(E, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(p, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    b = 'ProgressBarDeltaGrow_base_7e',
                    f = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    h = 'ProgressBarDeltaGrow_glow_68',
                    v = (e) => (e ? { left: 0 } : { right: 0 }),
                    w = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    y = (e) => ({ transitionDuration: `${e}ms` }),
                    S = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: o,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const E = i < n,
                                _ = (0, r.useState)(g.Idle),
                                F = _[0],
                                D = _[1],
                                C = F === g.End,
                                p = F === g.Idle,
                                B = F === g.Grow,
                                S = F === g.Shrink,
                                T = (0, r.useCallback)(
                                    (e) => {
                                        (D(e), c && c(e));
                                    },
                                    [c],
                                ),
                                R = (0, r.useCallback)(
                                    (e, u) =>
                                        (0, A.F)(() => {
                                            T(e);
                                        }, u),
                                    [T],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return p
                                        ? R(g.Grow, u)
                                        : B
                                          ? R(g.Shrink, e)
                                          : S
                                            ? R(g.End, e)
                                            : void (C && l && l());
                            }, [R, t, C, B, p, S, l, u, e]);
                            const x = (0, r.useMemo)(() => Object.assign({ width: '100%' }, y(e), v(E)), [E, e]),
                                N = (0, r.useMemo)(() => Object.assign({ width: '0%' }, y(e), v(E)), [E, e]),
                                P = (0, r.useMemo)(() => Object.assign({ width: '0%' }, w(E, n), y(e)), [n, E, e]),
                                k = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, w(E, n), y(e)),
                                    [n, E, i, e],
                                );
                            if (C) return null;
                            const M = a()(b, m, E && 0 === i && f);
                            return s().createElement(
                                'div',
                                { style: p ? P : k, className: M },
                                s().createElement(
                                    'div',
                                    { style: S ? N : x, className: h },
                                    s().createElement(d, { size: o }),
                                ),
                            );
                        },
                    ),
                    T = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, r.useState)(!1),
                                _ = m[0],
                                A = m[1],
                                F = (0, r.useCallback)(
                                    (e) => {
                                        (e === g.Shrink && A(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                D = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                C = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(E, {
                                    size: u,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? C : D,
                                }),
                                t >= 0 &&
                                    s().createElement(S, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: F,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    R = ['onComplete', 'onEndAnimation'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const N = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, R);
                        const a = (0, r.useState)(!1),
                            o = a[0],
                            l = a[1],
                            c = (0, r.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && l(e), e && u && u(), t && t());
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case i.r.Simple:
                                return s().createElement(B, x({}, n, { onEndAnimation: c, isComplete: o }));
                            case i.r.Growing:
                                return s().createElement(T, x({}, n, { onEndAnimation: c, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    P = ['onEndAnimation'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const M = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, P);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        s().createElement(N, k({}, t, { onEndAnimation: a, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const I = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: r,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return s().createElement(_, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return r.withStack
                                ? s().createElement(M, c)
                                : s().createElement(N, O({ key: `${a}-${u}` }, c));
                        },
                    ),
                    L = (e) => ({
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
                    });
                var H = t(515);
                const U = (e, u, t) => {
                        if ('number' == typeof t) {
                            return ((0, H.u)(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    $ = {
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
                    z = {
                        freezed: !1,
                        withStack: !1,
                        type: i.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    W = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = $,
                            size: t = i.$.Default,
                            animationSettings: n = z,
                            disabled: c = !1,
                            withoutBackground: d = !1,
                            progressBarBackgroundClassMix: m,
                            value: E,
                            deltaFrom: _,
                            lineRef: A,
                            onChangeAnimationState: g,
                            onEndAnimation: F,
                            onComplete: D,
                        }) => {
                            const C = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const n = ((0, H.u)(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: U(n, u, t) };
                                }, [t, u, e]))(E, e, _);
                            return s().createElement(
                                'div',
                                { className: a()(o.base, o[`base__${t}`]), style: L(u) },
                                !d && s().createElement(l, { size: t, classMix: m }),
                                s().createElement(I, {
                                    size: t,
                                    lineRef: A,
                                    disabled: c,
                                    value: C.value,
                                    deltaFrom: C.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: F,
                                    onChangeAnimationState: g,
                                    onComplete: D,
                                }),
                            );
                        },
                    );
            },
            736: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { $: () => n, r: () => a }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(a || (a = {})));
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
            515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
            },
            374: (e, u, t) => {
                'use strict';
                t.d(u, { s_: () => a, dV: () => s, yR: () => r, f8: () => i });
                t(649);
                let n;
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
                })(n || (n = {}));
                t(364);
                const a = 1e3,
                    r = 60,
                    s = 60 * r,
                    o = 24 * s;
                Date.now();
                function i(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / o);
                    u -= t * o;
                    const n = Math.trunc(u / s);
                    u -= n * s;
                    const a = Math.trunc(u / r);
                    return ((u -= a * r), { days: t, hours: n, minutes: a, seconds: u });
                }
            },
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => V });
                var n = {};
                (t.r(n), t.d(n, { mouse: () => d, onResize: () => l }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => E,
                        getSize: () => m,
                        graphicsQuality: () => _,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => g, getTextureUrl: () => A }));
                var s = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (t.r(s),
                    t.d(s, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => w,
                        children: () => r,
                        displayStatus: () => F,
                        displayStatusIs: () => G,
                        events: () => D,
                        extraSize: () => Q,
                        forceTriggerMouseMove: () => z,
                        freezeTextureBeforeResize: () => k,
                        getBrowserTexturePath: () => S,
                        getDisplayStatus: () => W,
                        getScale: () => M,
                        getSize: () => x,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => $,
                        isFocused: () => H,
                        pxToRem: () => O,
                        remToPx: () => I,
                        resize: () => N,
                        sendEvent: () => v,
                        setAnimateWindow: () => L,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => q,
                    }));
                const l = o('clientResized'),
                    c = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : i(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        s = c[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function g(e, u, t) {
                    return `url(${A(e, u, t)})`;
                }
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    D = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const p = 2,
                    B = 16,
                    b = 32,
                    f = 64,
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, C);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    v = {
                        close(e) {
                            h('popover' === e ? p : b);
                        },
                        minimize() {
                            h(f);
                        },
                        move(e) {
                            h(B, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function S(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function T(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function P(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: I(u.x), y: I(u.y) };
                }
                function k() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function O(e) {
                    return viewEnv.pxToRem(e);
                }
                function I(e) {
                    return viewEnv.remToPx(e);
                }
                function L(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function W() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(F).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === F[u]), e), {}),
                    Q = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    V = { view: s, client: a };
            },
            255: (e, u, t) => {
                'use strict';
                t.d(u, { au: () => E, tp: () => _, D9: () => m });
                var n = t(179);
                const a = (e) => {
                    const u = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            u.current = e;
                        }, [e]),
                        u.current
                    );
                };
                var r = t(374);
                const s = () => {},
                    o = (e = 0, u, t = 0, a = s) => {
                        const o = (0, n.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        s = u || (e > 2 * r.yR ? r.yR : 1),
                                        o = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - n) / r.s_);
                                            null !== t && u <= t ? (l(t), a && a(), clearInterval(o)) : l(u);
                                        }, s * r.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, u, t, a]),
                            i
                        );
                    };
                var i = t(122);
                const l = (e, u) => {
                    const t = (0, n.useState)(e),
                        a = t[0],
                        r = t[1];
                    return ((0, n.useEffect)(() => (0, i.F)(() => r(e), u), [e, u]), a);
                };
                t(67);
                t(536);
                var c = t(364);
                c.Sw.instance;
                let d;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(d || (d = {}));
                c.Sw.instance;
                const m = a,
                    E = o,
                    _ = l;
            },
            536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            521: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})));
            },
            649: (e, u, t) => {
                'use strict';
                let n;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function r(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                (t.d(u, { Uw: () => m, WU: () => a, uF: () => r, v2: () => n }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(n || (n = {})));
                const s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    o = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    i = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? s : o, []),
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? l(e)
                            : ((e, u = n.left) => {
                                  let t = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return (i(r, /( )/, u).forEach((e) => (t = t.concat(i(e, a, n.left)))), t);
                              })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : d(e, u)));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(67);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => l, Z5: () => s, B0: () => i, ry: () => D });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = t(358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    _ = t(67);
                const A = ['args'];
                function g(e, u, t, n, a, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            g(r, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    p = () => C(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var b = t(572);
                const f = a.instance,
                    h = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(E),
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
                            B(e, p);
                        },
                        handleViewEvent: C,
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
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = h;
            },
            181: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => ku,
                        Bar: () => xu,
                        DefaultScroll: () => Pu,
                        Direction: () => Au,
                        defaultSettings: () => gu,
                        useHorizontalScrollApi: () => Du,
                    }));
                var a = {};
                (t.r(a), t.d(a, { Area: () => Zu, Bar: () => Yu, Default: () => Ku, useVerticalScrollApi: () => Mu }));
                var r = t(179),
                    s = t.n(r);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(67);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(c || (c = {}));
                const m = i.O.client.getSize('rem'),
                    E = m.width,
                    _ = m.height,
                    A = Object.assign({ width: E, height: _ }, d(E, _, l)),
                    g = (0, r.createContext)(A),
                    F = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, F);
                    const n = (0, r.useContext)(g),
                        a = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        E = n.mediumWidth,
                        _ = n.smallWidth,
                        A = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        C = n.largeHeight,
                        p = n.mediumHeight,
                        B = n.smallHeight,
                        b = n.extraSmallHeight,
                        f = { extraLarge: D, large: C, medium: p, small: B, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return o(u, t, f);
                        if (t.largeWidth && m) return o(u, t, f);
                        if (t.mediumWidth && E) return o(u, t, f);
                        if (t.smallWidth && _) return o(u, t, f);
                        if (t.extraSmallWidth && A) return o(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                };
                D.defaultProps = {
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
                (0, r.memo)(D);
                var C = t(536);
                const p = (0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(g),
                        t = (0, r.useState)(u),
                        n = t[0],
                        a = t[1],
                        o = (0, r.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(u);
                            a(Object.assign({ width: t, height: n }, d(t, n, l)));
                        }, []);
                    ((0, C.Z)(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]));
                    const c = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(g.Provider, { value: c }, e);
                });
                var B = t(483),
                    b = t.n(B),
                    f = t(926),
                    h = t.n(f);
                let v, w, y;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(w || (w = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(y || (y = {})));
                const S = () => {
                        const e = (0, r.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL_WIDTH,
                        [w.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [w.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [y.ExtraSmall]: '',
                        [y.Small]: h().SMALL_HEIGHT,
                        [y.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [y.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL,
                        [v.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [v.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [v.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    M = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, T);
                        const a = S(),
                            r = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return s().createElement('div', x({ className: b()(t, N[r], P[o], k[i]) }, n), u);
                    },
                    O = ['children'];
                const I = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, O);
                    return s().createElement(p, null, s().createElement(M, t, u));
                };
                var L = t(493),
                    H = t.n(L);
                let U, $;
                (!(function (e) {
                    e.Default = 'default';
                })(U || (U = {})),
                    (function (e) {
                        ((e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers'));
                    })($ || ($ = {})));
                var z = t(521),
                    W = t(364);
                const G = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Q(e = z.n.NONE, u = G, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== z.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var q = t(403),
                    V = t(30);
                let j, Y, X, K, Z, J, ee;
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
                        (e.LootBoxToken = 'lootBoxToken'));
                })(j || (j = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(Y || (Y = {})),
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
                    })(X || (X = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(K || (K = {})),
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
                    })(Z || (Z = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(J || (J = {})),
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
                    })(ee || (ee = {})));
                class ue extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = W.B3.GOLD;
                        else e = W.B3.INTEGRAL;
                        const u = W.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ue.defaultProps = { format: 'integral' };
                const te = [
                        j.Items,
                        j.Equipment,
                        j.Xp,
                        j.XpFactor,
                        j.Blueprints,
                        j.BlueprintsAny,
                        j.Goodies,
                        j.Berths,
                        j.Slots,
                        j.Tokens,
                        j.CrewSkins,
                        j.CrewBooks,
                        j.Customizations,
                        j.CreditsFactor,
                        j.TankmenXp,
                        j.TankmenXpFactor,
                        j.FreeXpFactor,
                        j.BattleToken,
                        j.PremiumUniversal,
                        j.NaturalCover,
                        j.BpCoin,
                        j.BattlePassSelectToken,
                        j.BattlaPassFinalAchievement,
                        j.BattleBadge,
                        j.BonusX5,
                        j.CrewBonusX3,
                        j.NewYearFillers,
                        j.NewYearInvoice,
                        j.EpicSelectToken,
                        j.Comp7TokenWeeklyReward,
                        j.Comp7TokenCouponReward,
                        j.BattleBoosterGift,
                        j.CosmicLootboxCommon,
                        j.CosmicLootboxSilver,
                        j.SelectableBonus,
                    ],
                    ne = [j.Gold, j.Credits, j.Crystal, j.FreeXp],
                    ae = [j.BattlePassPoints],
                    re = [j.PremiumPlus, j.Premium],
                    se = (e) =>
                        te.includes(e)
                            ? K.MULTI
                            : ne.includes(e)
                              ? K.CURRENCY
                              : ae.includes(e)
                                ? K.NUMBER
                                : re.includes(e)
                                  ? K.PREMIUM_PLUS
                                  : K.STRING,
                    oe = ['engravings', 'backgrounds'],
                    ie = ['engraving', 'background'],
                    le = (e, u = X.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case X.S600x450:
                                        return 'c_600x450';
                                    case X.S400x300:
                                        return 'c_400x300';
                                    case X.S296x222:
                                        return 'c_296x222';
                                    case X.S232x174:
                                        return 'c_232x174';
                                    case X.Big:
                                        return 'c_80x80';
                                    case X.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case X.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case X.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = oe[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(ie[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ce = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    };
                let de;
                function me(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                !(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Active = ''));
                })(de || (de = {}));
                const Ee = me;
                function _e(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Ae(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const r = Ee(e, a);
                        u(r, a, e) && n.push(t(r, a, e));
                    }
                    return n;
                }
                const ge = ['from', 'enter', 'leave'],
                    Fe = ['from', 'enter', 'leave'],
                    De = ['from', 'enter', 'leave'];
                function Ce(e, u) {
                    if (null == e) return {};
                    var t,
                        n,
                        a = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                    return a;
                }
                const pe = 'tooltipId';
                let Be, be, fe;
                (!(function (e) {
                    ((e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                        (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                        (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                        (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                        (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'));
                })(Be || (Be = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = 32)] = 'ExtraSmall'),
                            (e[(e.Small = 48)] = 'Small'),
                            (e[(e.Medium = 64)] = 'Medium'),
                            (e[(e.Large = 80)] = 'Large'),
                            (e[(e.ExtraLarge = 100)] = 'ExtraLarge'));
                    })(be || (be = {})),
                    (function (e) {
                        ((e[(e.DailyQuests = 0)] = 'DailyQuests'), (e[(e.PremiumQuests = 1)] = 'PremiumQuests'));
                    })(fe || (fe = {})));
                const he = { [fe.DailyQuests]: 'dailyQuests', [fe.PremiumQuests]: 'premiumQuests' },
                    ve = (e) => {
                        if (void 0 !== e)
                            return (
                                void 0 === he[e] &&
                                    console.error(`Content resource name was not found for tab index ${e}`),
                                he[e]
                            );
                    },
                    we = (e, u, t) => {
                        const n = R.images.gui.maps.icons.missions.missionIcons.$num(
                                ((e) => {
                                    switch (!0) {
                                        case e >= v.ExtraLarge:
                                            return be.ExtraLarge;
                                        case e >= v.Large:
                                            return be.Large;
                                        case e >= v.Medium:
                                            return be.Medium;
                                        default:
                                            return be.ExtraSmall;
                                    }
                                })(e),
                            ),
                            a = t ? '_gold' : '_silver';
                        return { backgroundImage: `url(${n.$dyn(`${u}${a}`)})` };
                    },
                    ye = (e, u, t) =>
                        _e(e, (e) => ({
                            name: e.name,
                            image: le(e, t),
                            special: e.overlayType,
                            value: e.value,
                            valueType: se(e.name),
                            tooltipArgs: ce({ [pe]: `${u}:${e.index}` }, Number(e.tooltipContentId), {
                                ignoreShowDelay: !0,
                            }),
                        })),
                    Se = (e, u) => (e.items.length >= 1 ? e : u.items.length >= 1 ? u : void 0),
                    Te = (e) =>
                        (function (e, u) {
                            if (Array.isArray(e)) return e.filter(u);
                            const t = [];
                            for (let a = 0; a < e.length; a++) {
                                var n;
                                const r = null == (n = e[a]) ? void 0 : n.value;
                                u(r, a, e) && t.push(r);
                            }
                            return t;
                        })(e, (e) => e.status === de.Done || e.status === de.UndoneSubscription).length,
                    Re = (e) => e.filter((e) => e.value).length,
                    xe =
                        (Object.values(Z),
                        Be.VEHICLE_FOR_GIFT,
                        Be.VEHICLE_DISCOUNT,
                        Be.VEHICLE_FOR_RENT,
                        Be.SELECTABLE_VEHICLE_FOR_GIFT,
                        Be.SELECTABLE_VEHICLE_DISCOUNT,
                        Be.VEHICLE_DISCOUNT,
                        Be.SELECTABLE_VEHICLE_DISCOUNT,
                        {
                            easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
                            easeInCubic: (e) => e * e * e,
                            easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
                            easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
                            easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
                            easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                            easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        }),
                    Ne = (e, u = {}) => {
                        let t = u.from,
                            n = void 0 === t ? {} : t,
                            a = u.enter,
                            r = void 0 === a ? {} : a,
                            s = u.leave,
                            o = void 0 === s ? {} : s,
                            i = Ce(u, ge);
                        return (0, V.useTransition)(
                            e,
                            Object.assign(
                                {
                                    from: Object.assign({ opacity: 0, pointerEvents: 'none' }, n),
                                    enter: Object.assign(
                                        {
                                            opacity: 1,
                                            pointerEvents: 'auto',
                                            config: { duration: 400, easing: xe.easeInSine },
                                        },
                                        r,
                                    ),
                                    leave: Object.assign(
                                        {
                                            opacity: 0,
                                            pointerEvents: 'none',
                                            config: { duration: 400, easing: xe.easeOutSine },
                                        },
                                        o,
                                    ),
                                    expires: !1,
                                },
                                i,
                            ),
                        );
                    },
                    Pe = (e, u, t = {}) => {
                        let n = t.from,
                            a = void 0 === n ? {} : n,
                            r = t.enter,
                            s = void 0 === r ? {} : r,
                            o = t.leave,
                            i = void 0 === o ? {} : o,
                            l = Ce(t, Fe);
                        return (0, V.useTransition)(
                            e,
                            Object.assign(
                                {
                                    from: Object.assign(
                                        { opacity: 0, transform: `translateY(${u}rem)`, pointerEvents: 'none' },
                                        a,
                                    ),
                                    enter: Object.assign(
                                        {
                                            opacity: 1,
                                            transform: 'translateY(0rem)',
                                            pointerEvents: 'auto',
                                            config: { duration: 200, easing: xe.easeOutCirc },
                                        },
                                        s,
                                    ),
                                    leave: Object.assign(
                                        {
                                            opacity: 0,
                                            transform: `translateY(${u}rem)`,
                                            pointerEvents: 'none',
                                            config: { duration: 300, easing: xe.easeInCirc },
                                        },
                                        i,
                                    ),
                                    expires: !1,
                                },
                                l,
                            ),
                        );
                    },
                    ke = (e, u, t = {}) => {
                        let n = t.from,
                            a = void 0 === n ? {} : n,
                            r = t.enter,
                            s = void 0 === r ? {} : r,
                            o = t.leave,
                            i = void 0 === o ? {} : o,
                            l = Ce(t, De);
                        return (0, V.useTransition)(
                            e,
                            Object.assign(
                                {
                                    from: Object.assign(
                                        { opacity: 0, transform: `translateX(${u}rem)`, pointerEvents: 'none' },
                                        a,
                                    ),
                                    enter: Object.assign(
                                        {
                                            opacity: 1,
                                            transform: 'translateX(0rem)',
                                            pointerEvents: 'auto',
                                            config: { duration: 300, easing: xe.easeOutQuint },
                                        },
                                        s,
                                    ),
                                    leave: Object.assign(
                                        {
                                            opacity: 0,
                                            transform: `translateX(${u}rem)`,
                                            pointerEvents: 'none',
                                            config: { duration: 300, easing: xe.easeInCubic },
                                        },
                                        i,
                                    ),
                                    expires: !1,
                                },
                                l,
                            ),
                        );
                    };
                function Me() {
                    return !1;
                }
                console.log;
                var Oe = t(174);
                function Ie(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Le(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Le(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Le(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const He = (e) => (0 === e ? window : window.subViews.get(e));
                var Ue = t(946);
                const $e = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: o, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = He,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (a.set(l, t), e && t(s(r)), l);
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
                                                        for (var e, t = Ie(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Oe.LO.box(n, { equals: Me });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Oe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Oe.LO.box(n, { equals: Me });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Oe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = Oe.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Oe.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Oe.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Oe.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            E = { mode: t, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && a ? a.controls(E) : u(E),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    E = (0, r.useState)(n),
                                    _ = E[0],
                                    A = E[1],
                                    g = (0, r.useState)(() => d(n, a, l)),
                                    F = g[0],
                                    D = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? D(d(_, a, l)) : (m.current = !0);
                                    }, [l, _, a]),
                                    (0, r.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    primitives: e.primitives(['currentTabIdx']),
                                    daily: e.object('dailyQuests'),
                                    dailyQuests: e.array('dailyQuests.quests', []),
                                    dailyQuestsCompletedVisited: e.array('dailyQuests.missionsCompletedVisited', []),
                                    premium: e.object('premiumMissions'),
                                    premiumQuests: e.array('premiumMissions.missions', []),
                                    premiumQuestsCompletedVisited: e.array(
                                        'premiumMissions.missionsCompletedVisited',
                                        [],
                                    ),
                                    epicQuest: e.object('epicQuest'),
                                    epicQuestBonuses: e.array('epicQuest.bonuses'),
                                },
                                t = (0, Ue.Om)(() => {
                                    const e = u.root.get().premMissionsTabDiscovered;
                                    return [
                                        { id: fe.DailyQuests, title: R.strings.quests.dailyQuests.tab.label() },
                                        {
                                            id: fe.PremiumQuests,
                                            title: R.strings.quests.premiumQuests.tab.label(),
                                            notification: e ? void 0 : { type: 'dot' },
                                        },
                                    ];
                                }),
                                n = (0, Ue.Om)(() =>
                                    [
                                        { tabIndex: fe.DailyQuests, isEnabled: u.daily.get().isEnabled },
                                        { tabIndex: fe.PremiumQuests, isEnabled: u.premium.get().isEnabled },
                                    ].filter((e) => e.isEnabled),
                                ),
                                a = (0, Ue.Om)(() => {
                                    var e;
                                    const t = u.primitives.currentTabIdx.get(),
                                        a = n(),
                                        r = a.find((e) => e.tabIndex === t);
                                    return r ? r.tabIndex : null == (e = a[0]) ? void 0 : e.tabIndex;
                                }),
                                r = (0, Ue.Om)((e, t) => {
                                    const n = t >= v.Large ? X.Big : X.Small,
                                        a = (e) =>
                                            _e(e, (e) =>
                                                Object.assign({}, e, {
                                                    rewardSize: n,
                                                    bonuses: ye(e.bonuses, e.id, n),
                                                    subscriptionBonuses: ye(e.subscriptionBonuses, e.id, n),
                                                }),
                                            );
                                    switch (e) {
                                        case fe.DailyQuests:
                                            return a(u.dailyQuests.get()).slice(0, 3);
                                        case fe.PremiumQuests:
                                            return a(u.premiumQuests.get());
                                        default:
                                            return [];
                                    }
                                }),
                                s = (0, Ue.Om)(() => u.dailyQuests.get().some((e) => e.value.isEnabledSubscription)),
                                o = (0, Ue.Om)(() => u.dailyQuestsCompletedVisited.get(), { equals: Me }),
                                i = (0, Ue.Om)(() => u.premiumQuestsCompletedVisited.get(), { equals: Me }),
                                l = (0, Ue.Om)((e, u) => {
                                    switch (e) {
                                        case fe.DailyQuests:
                                            return me(o(), u);
                                        case fe.PremiumQuests:
                                            return me(i(), u);
                                        default:
                                            return void console.error(`Unreachable branch in tabIndex ${e}`);
                                    }
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    getEnabledFeatures: n,
                                    getCurrentTabIndex: a,
                                    getTabs: t,
                                    getQuests: r,
                                    isCardVisited: l,
                                    isEnabledSubscription: s,
                                    getDailyQuestsCompletedVisited: o,
                                    getPremiumQuestsCompletedVisited: i,
                                    getRerolledCardsIds: (e, u) =>
                                        Ae(
                                            e,
                                            (e, t) => {
                                                const n = u[t];
                                                return (
                                                    void 0 !== n &&
                                                    (e.id !== n.id ||
                                                        ((e.status === de.Done || e.status === de.UndoneSubscription) &&
                                                            n.status !== de.Done &&
                                                            n.status !== de.UndoneSubscription))
                                                );
                                            },
                                            (e) => e.id,
                                        ),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            reroll: e.createCallback((e) => ({ questId: e }), 'onReroll'),
                            tabClick: e.createCallback((e) => ({ tabIdx: e }), 'onTabClick'),
                            infoToggle: e.createCallbackNoArgs('onInfoToggle'),
                            buyPremiumBtnClick: e.createCallbackNoArgs('onBuyPremiumBtnClick'),
                            rerollEnabled: e.createCallbackNoArgs('onRerollEnabled'),
                            claimRewards: e.createCallbackNoArgs('onClaimRewards'),
                        }),
                    ),
                    ze = $e[0],
                    We = $e[1],
                    Ge = {
                        base: 'App_base_9b',
                        background: 'App_background_5f',
                        background__dailyQuests: 'App_background__dailyQuests_0c',
                        background__premiumQuests: 'App_background__premiumQuests_5b',
                        infoButton: 'App_infoButton_9b',
                        infoButton__info: 'App_infoButton__info_67',
                        fadeIn: 'App_fadeIn_77',
                        rewardsButton: 'App_rewardsButton_f4',
                    };
                function Qe(e) {
                    engine.call('PlaySound', e);
                }
                const qe = {
                        playHighlight() {
                            Qe('highlight');
                        },
                        playClick() {
                            Qe('play');
                        },
                        playYes() {
                            Qe('yes1');
                        },
                    },
                    Ve = {
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
                    je = [
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
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                class Xe extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Qe(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Qe(this.props.soundClick));
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
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, je)),
                            E = b()(Ve.base, Ve[`base__${r}`], Ve[`base__${a}`], null == o ? void 0 : o.base),
                            _ = b()(Ve.icon, Ve[`icon__${r}`], Ve[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = b()(Ve.glow, null == o ? void 0 : o.glow),
                            g = b()(Ve.caption, Ve[`caption__${r}`], null == o ? void 0 : o.caption),
                            F = b()(Ve.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Ye(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== r && s().createElement('div', { className: Ve.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                Xe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ke = [
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
                function Ze(e) {
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
                const Je = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    eu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            C = e.onShow,
                            p = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ke);
                        const b = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, r.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [D],
                            ),
                            h = (0, r.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Je(t, _, { isMouseEvent: !0, on: !0, arguments: Ze(n) }, f),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, _, n, f, C]),
                            v = (0, r.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Je(t, _, { on: !1 }, f),
                                        b.current.isVisible && p && p(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, _, f, p]),
                            w = (0, r.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return g
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                      a && a(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (v(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === m && v(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === m && v(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    uu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const nu = R.views.common.tooltip_window.simple_tooltip_content,
                    au = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            a = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, uu);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: a, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, a, i]);
                        return s().createElement(
                            eu,
                            tu(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? nu.SimpleTooltipHtmlContent('resId') : nu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    ru = R.strings.quests.infoPage,
                    su = (0, q.Pi)(({ className: e }) => {
                        const u = We(),
                            t = u.model,
                            n = u.controls,
                            a = t.root.get(),
                            r = a.infoVisible,
                            o = a.dailyType,
                            i = S().mediaSize;
                        return s().createElement(
                            'div',
                            { className: e },
                            r
                                ? s().createElement(Xe, {
                                      type: 'back',
                                      caption: ru.infoButton.back.title(),
                                      goto: i >= v.Small ? ru.infoButton.back.goto() : void 0,
                                      onClick: n.infoToggle,
                                  })
                                : s().createElement(
                                      au,
                                      {
                                          body: ru.infoButtonTooltip.body(),
                                          header: ru.infoButtonTooltip.header.$dyn(o),
                                      },
                                      s().createElement(Xe, {
                                          type: 'info',
                                          caption: ru.infoButton.$dyn(o),
                                          onClick: n.infoToggle,
                                      }),
                                  ),
                        );
                    }),
                    ou = (e) => {
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
                var iu = t(515);
                const lu = [];
                function cu(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), lu)
                    );
                }
                function du(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        a,
                    ];
                }
                function mu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Eu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Eu(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Eu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function _u(e, u, t) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    a && clearTimeout(a);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        ((s = Date.now()), t.apply(l, i));
                                    }
                                    r ||
                                        (n && !a && d(),
                                        o(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        (o(), (r = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                }
                let Au;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Au || (Au = {}));
                const gu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Fu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return (0, iu.u)(a, r, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? gu : c,
                                m = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var n, a = mu(u(e).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                A = _u(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, V.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                C = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - a;
                                        return o(e, u * t + r + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, d.animationConfig, F.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            r = C(u, e, n);
                                        p(r);
                                    },
                                    [p, C, d.step],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && B(n(e)),
                                            m.current && _.trigger('mouseWheel', e, F.scrollPosition, u(m.current)));
                                    },
                                    [F.scrollPosition, B, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        ou(() => {
                                            const e = m.current;
                                            e &&
                                                (p(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [p, F.scrollPosition.goal],
                                ),
                                h = cu(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && p(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? a(E.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: b,
                                    applyScroll: p,
                                    applyStepTo: B,
                                    contentRef: m,
                                    wrapperRef: E,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: h,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, p, B, _.off, _.on, h, b, D, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Du = Fu({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Au.Next : Au.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Cu = 'HorizontalBar_base_49',
                    pu = 'HorizontalBar_base__nonActive_82',
                    Bu = 'HorizontalBar_leftButton_5f',
                    bu = 'HorizontalBar_rightButton_03',
                    fu = 'HorizontalBar_track_0d',
                    hu = 'HorizontalBar_thumb_fd',
                    vu = 'HorizontalBar_rail_32',
                    wu = 'disable',
                    yu = { pending: !1, offset: 0 },
                    Su = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Tu = () => {},
                    Ru = (e, u) => Math.max(20, e.offsetWidth * u),
                    xu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Su, onDrag: n = Tu }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(yu),
                            E = m[0],
                            _ = m[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (_(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    d = (0, iu.u)(0, 1, r / (a - n)),
                                    m = (u.offsetWidth - Ru(u, s)) * d;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(wu),
                                                    void i.current.classList.remove(wu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(wu),
                                                    void i.current.classList.add(wu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(wu), i.current.classList.remove(wu));
                                        }
                                    })(m));
                            },
                            F = cu(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    ((u.style.width = `${Ru(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(pu) : a.current.classList.remove(pu)));
                                })(),
                                    g());
                            });
                        ((0, r.useEffect)(() => ou(F)),
                            (0, r.useEffect)(
                                () =>
                                    ou(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Tu;
                                        const n = () => {
                                            (t(), (t = ou(F)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = l.current,
                                            s = c.current;
                                        if (!a || !r || !s) return;
                                        const o = u.screenX - E.offset - r.getBoundingClientRect().x,
                                            i = (o / r.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(yu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, E.offset, E.pending, n, A]));
                        const D = du((u) => e.applyStepTo(u), d, [e]),
                            C = D[0],
                            p = D[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const B = (e) => {
                            e.target.classList.contains(wu) || Qe('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()(Cu, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()(Bu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wu) || 0 !== e.button || (Qe('play'), C(Au.Next));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: B,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()(fu, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((Qe('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Au.Prev : Au.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: B,
                                },
                                s().createElement('div', { ref: c, className: b()(hu, u.thumb) }),
                                s().createElement('div', { className: b()(vu, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()(bu, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wu) || 0 !== e.button || (Qe('play'), C(Au.Prev));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    Nu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Pu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: b()(Nu.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(Nu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(Nu.defaultScrollArea, a) },
                                s().createElement(ku, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(xu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    ku = ({ api: e, className: u, classNames: t, children: n, style: a }) => (
                        (0, r.useEffect)(() => ou(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(Nu.base, u), style: a },
                            s().createElement(
                                'div',
                                {
                                    className: b()(Nu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: b()(Nu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((ku.Bar = xu),
                    (ku.Default = Pu),
                    (ku.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => ou(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(Nu.base, u) },
                            s().createElement(
                                'div',
                                { className: b()(Nu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: b()(Nu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const Mu = Fu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Au.Next : Au.Prev),
                    }),
                    Ou = 'VerticalBar_base_f3',
                    Iu = 'VerticalBar_base__nonActive_42',
                    Lu = 'VerticalBar_topButton_d7',
                    Hu = 'VerticalBar_bottomButton_06',
                    Uu = 'VerticalBar_track_df',
                    $u = 'VerticalBar_thumb_32',
                    zu = 'VerticalBar_rail_43',
                    Wu = 'disable',
                    Gu = () => {},
                    Qu = { pending: !1, offset: 0 },
                    qu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Vu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ju = (e, u) => Math.max(20, e.offsetHeight * u),
                    Yu = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = qu, onDrag: n = Gu }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(Qu),
                            E = m[0],
                            _ = m[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (_(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            g = cu(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${ju(t, s)}px`),
                                    u.classList.add($u),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(Iu) : a.current.classList.remove(Iu)),
                                    s
                                );
                            }),
                            F = cu(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    d = (0, iu.u)(0, 1, r / (a - n)),
                                    m = (u.offsetHeight - ju(u, s)) * d;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(Wu),
                                                    void i.current.classList.remove(Wu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Wu),
                                                    void i.current.classList.add(Wu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Wu), i.current.classList.remove(Wu));
                                        }
                                    })(m));
                            }),
                            D = cu(() => {
                                Vu(e, () => {
                                    (g(), F());
                                });
                            });
                        ((0, r.useEffect)(() => ou(D)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Vu(e, () => {
                                        F();
                                    });
                                };
                                let t = Gu;
                                const n = () => {
                                    (t(), (t = ou(D)));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        Vu(e, (t) => {
                                            const a = l.current,
                                                r = c.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const o = u.screenY - E.offset - a.getBoundingClientRect().y,
                                                i = (o / a.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(Qu));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, E.offset, E.pending, n, A]));
                        const C = du((u) => e.applyStepTo(u), d, [e]),
                            p = C[0],
                            B = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Wu) || Qe('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()(Ou, u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()(Lu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Wu) || 0 !== e.button || (Qe('play'), p(Au.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()(Uu, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((Qe('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        Vu(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Au.Prev : Au.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: b()(zu, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()(Hu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Wu) || 0 !== e.button || (Qe('play'), p(Au.Prev));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Xu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ku = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: b()(Xu.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(Xu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(Xu.area, a) },
                                s().createElement(Zu, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(Yu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Zu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => ou(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(Xu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(Xu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Zu.Default = Ku;
                const Ju = { Vertical: a, Horizontal: n };
                var et = t(411),
                    ut = t(982),
                    tt = t(649);
                const nt = 'FormatText_base_d0',
                    at = ({ binding: e, text: u = '', classMix: t, alignment: n = tt.v2.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  r.Fragment,
                                  null,
                                  u.split('\n').map((u, a) =>
                                      s().createElement(
                                          'div',
                                          { className: b()(nt, t), key: `${u}-${a}` },
                                          (0, tt.Uw)(u, n, e).map((e, u) =>
                                              s().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    rt = {
                        base: 'InfoCard_base_0b',
                        base__general: 'InfoCard_base__general_fd',
                        base__horizontal: 'InfoCard_base__horizontal_d3',
                        base__horizontalReversed: 'InfoCard_base__horizontalReversed_e5',
                        image: 'InfoCard_image_91',
                        container: 'InfoCard_container_2d',
                        title: 'InfoCard_title_96',
                        content: 'InfoCard_content_b5',
                    };
                let st;
                !(function (e) {
                    ((e.Horizontal = 'horizontal'),
                        (e.HorizontalReversed = 'horizontalReversed'),
                        (e.General = 'general'));
                })(st || (st = {}));
                const ot = ({ icon: e, title: u, paragraph: t, cardType: n = st.General }) =>
                        s().createElement(
                            'div',
                            { className: b()(rt.base, rt[`base__${n}`]) },
                            s().createElement('div', { className: rt.image, style: { backgroundImage: `url(${e})` } }),
                            s().createElement(
                                'div',
                                { className: rt.container },
                                s().createElement(at, { text: u, classMix: rt.title }),
                                s().createElement(at, { text: t, classMix: rt.content }),
                            ),
                        ),
                    it = R.strings.quests.infoPage,
                    lt = R.images.gui.maps.icons.missions.icons,
                    ct = (...e) => e.filter((e) => e.length).join('\n'),
                    dt = 'InfoPage_base_dd',
                    mt = 'InfoPage_scrollContent_4d',
                    Et = 'InfoPage_scrollBar_f7',
                    _t = 'InfoPage_content_24',
                    At = 'InfoPage_missionsDescription_ba',
                    gt = 'InfoPage_generalDescription_9b',
                    Ft = 'InfoPage_separator_44',
                    Dt = 'InfoPage_title_bd';
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const pt = R.strings.quests.infoPage,
                    Bt = (0, q.Pi)(() => {
                        const e = We().model,
                            u = e.root.get(),
                            t = u.dailyType,
                            n = u.isBattlePassActive,
                            a = u.isComp7Active,
                            r = e.computes.isEnabledSubscription(),
                            o = e.daily.get().rerollTimeout,
                            i = Mu(),
                            l = S().mediaSize,
                            c =
                                t === U.Default
                                    ? ((e, u, t, n) => {
                                          const a = n >= v.Medium ? lt.big : lt,
                                              r = u ? it.dailyMissions.subscription.default() : '';
                                          return {
                                              missionsDescription: [
                                                  {
                                                      cardType: st.HorizontalReversed,
                                                      icon: e ? a.daily_bp_active() : a.daily(),
                                                      title: it.dailyMissionTitle(),
                                                      paragraph: ct(
                                                          e
                                                              ? it.dailyMissions.battlePassDailyMissions.default()
                                                              : it.dailyMissions.default(),
                                                          r,
                                                      ),
                                                  },
                                                  {
                                                      cardType: st.Horizontal,
                                                      icon: a.premium(),
                                                      title: it.premiumMissionsTitle(),
                                                      paragraph: it.premiumMissions.default(),
                                                  },
                                              ],
                                              generalDescription: [
                                                  {
                                                      icon: lt.pm_info_2(),
                                                      title: it.conditionsTitle(),
                                                      paragraph: it.conditions.default(),
                                                  },
                                                  {
                                                      icon: lt.dq_info_3(),
                                                      title: it.bonusMissionTitle(),
                                                      paragraph: it.bonusMission.default(),
                                                  },
                                                  {
                                                      icon: lt.pm_info_3(),
                                                      title: it.epicRewardsTitle(),
                                                      paragraph: it.epicRewards.default(),
                                                  },
                                                  {
                                                      icon: lt.dq_info_2(),
                                                      title: it.missionSwitchTitle(),
                                                      paragraph: (0, ut.G)(
                                                          ((s = t),
                                                          s % 3600 > 0
                                                              ? it.missionSwitch_min()
                                                              : it.missionSwitch_hrs()),
                                                          t,
                                                      ),
                                                  },
                                              ],
                                          };
                                          var s;
                                      })(n, r, o, l)
                                    : ((e, u, t, n, a) => {
                                          const r = a >= v.Medium ? lt.big : lt,
                                              s = n ? it.dailyMissions.subscription.default() : '';
                                          return {
                                              missionsDescription: [
                                                  {
                                                      cardType: st.HorizontalReversed,
                                                      icon: t ? r.daily_bp_active() : r.daily(),
                                                      title: it.dailyMissionTitle(),
                                                      paragraph: ct(
                                                          t
                                                              ? it.dailyMissions.battlePassDailyMissions.winback()
                                                              : it.dailyMissions.winback(),
                                                          s,
                                                      ),
                                                  },
                                                  {
                                                      cardType: st.Horizontal,
                                                      icon: r.premium(),
                                                      title: it.premiumMissionsTitle(),
                                                      paragraph: u
                                                          ? it.premiumMissions.winback_comp7Active()
                                                          : it.premiumMissions.winback(),
                                                  },
                                              ],
                                              generalDescription: [
                                                  {
                                                      icon: lt.pm_info_2(),
                                                      title: it.conditionsTitle(),
                                                      paragraph: u
                                                          ? it.conditions.winback_comp7Active()
                                                          : it.conditions.winback(),
                                                  },
                                                  {
                                                      icon: lt.dq_info_3(),
                                                      title: it.bonusMissionTitle(),
                                                      paragraph: it.bonusMission.winback(),
                                                  },
                                                  {
                                                      icon: lt.pm_info_3(),
                                                      title: it.epicRewardsTitle(),
                                                      paragraph: it.epicRewards.winback(),
                                                  },
                                                  {
                                                      icon: lt.dq_info_2(),
                                                      title: it.missionSwitchTitle(),
                                                      paragraph: it.missionSwitch.winback(),
                                                  },
                                              ],
                                          };
                                      })(0, a, n, r, l);
                        return s().createElement(
                            'div',
                            { className: dt },
                            s().createElement(
                                Ju.Vertical.Area.Default,
                                { api: i, scrollClassNames: { content: mt }, barClassNames: { base: Et } },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement('div', { className: Dt }, pt.header.$dyn(t)),
                                    s().createElement(
                                        'div',
                                        { className: _t },
                                        s().createElement(
                                            'div',
                                            { className: At },
                                            c.missionsDescription.map((e, u) =>
                                                s().createElement(ot, Ct({ key: u }, e)),
                                            ),
                                        ),
                                        s().createElement('div', { className: Ft }),
                                        s().createElement(
                                            'div',
                                            { className: gt },
                                            c.generalDescription.map((e, u) =>
                                                s().createElement(ot, Ct({ key: u }, e)),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    bt = 'Disabled_base_13',
                    ft = 'Disabled_alert_f6',
                    ht = 'Disabled_icon_43',
                    vt = 'Disabled_info_e1',
                    wt = R.strings.menu.browser.dataUnavailable,
                    yt = () =>
                        s().createElement(
                            'div',
                            { className: bt },
                            s().createElement(
                                'div',
                                { className: ft },
                                s().createElement('div', { className: ht }),
                                wt.header(),
                            ),
                            s().createElement('div', { className: vt }, wt.description()),
                        ),
                    St = s().memo;
                const Tt = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    Rt = { mouseEnter: 'highlight', click: 'play' },
                    xt = (e, { active: u, enableInteractiveActiveTab: t = !1 }) => !!t || e !== u,
                    Nt = St(function (e) {
                        const u = e.active,
                            t = e.tabs,
                            n = e.onClick,
                            a = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.className,
                            i = e.classNames,
                            l = e.sounds,
                            c = void 0 === l ? Rt : l,
                            d = (u) => () => {
                                xt(u, e) && (c.click && Qe(c.click), null == n || n(u));
                            },
                            m = (u) => () => {
                                xt(u, e) && (c.mouseEnter && Qe(c.mouseEnter), null == a || a(u));
                            },
                            E = (u) => () => {
                                xt(u, e) && (c.mouseLeave && Qe(c.mouseLeave), null == r || r(u));
                            };
                        return s().createElement(
                            'div',
                            { className: b()(Tt.base, o) },
                            t.map(({ id: n, title: a, notification: r }, o) => {
                                var l;
                                return s().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            Tt.tab,
                                            n === u && b()(Tt.tab__active, null == i ? void 0 : i.activeTab),
                                            !xt(n, e) && Tt.tab__nonInteractive,
                                            null == i ? void 0 : i.tab,
                                        ),
                                        key: n,
                                        onClick: d(n),
                                        onMouseEnter: m(n),
                                        onMouseLeave: E(n),
                                    },
                                    ((e, u) => !((e, u) => e.length - 1 === u)(e, u))(t, o) &&
                                        s().createElement('div', {
                                            className: b()(Tt.divider, null == i ? void 0 : i.divider),
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: b()(Tt.state, null == i ? void 0 : i.state) },
                                        s().createElement('div', {
                                            className: b()(Tt.highlight, null == i ? void 0 : i.highlight),
                                        }),
                                        s().createElement('div', {
                                            className: b()(
                                                Tt.border,
                                                Tt.border__left,
                                                null == i ? void 0 : i.border,
                                                null == i ? void 0 : i.borderLeft,
                                            ),
                                        }),
                                        s().createElement('div', {
                                            className: b()(
                                                Tt.border,
                                                Tt.border__right,
                                                null == i ? void 0 : i.border,
                                                null == i ? void 0 : i.borderRight,
                                            ),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: b()(Tt.title, null == i ? void 0 : i.title) },
                                        a,
                                    ),
                                    void 0 !== r &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    Tt.notification,
                                                    Tt[`notification__${r.type}`],
                                                    Tt[`notification__${null != (l = r.size) ? l : 'medium'}`],
                                                    null == i ? void 0 : i.notification,
                                                ),
                                            },
                                            'dot' !== r.type && r.value,
                                        ),
                                );
                            }),
                        );
                    });
                var Pt = t(255),
                    kt = t(122);
                const Mt = {
                        questsContainer: 'styles_questsContainer_79',
                        questsContainer__winback: 'styles_questsContainer__winback_4d',
                    },
                    Ot = 'BonusCard_base_95',
                    It = 'BonusCard_glow_f0',
                    Lt = 'BonusCard_wrapper_c4',
                    Ht = 'BonusCard_flag_6d',
                    Ut = 'BonusCard_content_6f',
                    $t = ['children'];
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Wt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, $t);
                    return s().createElement(
                        eu,
                        zt(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const Qt = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(au, u, n);
                        const a = u.contentId,
                            r = u.args,
                            o = null == r ? void 0 : r.contentId;
                        return a || o
                            ? s().createElement(eu, Gt({}, u, { contentId: a || o }), n)
                            : s().createElement(Wt, u, n);
                    },
                    qt = {
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
                    },
                    Vt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = X.Big,
                        special: a,
                        value: r,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Z.BATTLE_BOOSTER:
                                    case Z.BATTLE_BOOSTER_REPLACE:
                                        return J.BATTLE_BOOSTER;
                                }
                            })(a),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Z.BATTLE_BOOSTER:
                                        return ee.BATTLE_BOOSTER;
                                    case Z.BATTLE_BOOSTER_REPLACE:
                                        return ee.BATTLE_BOOSTER_REPLACE;
                                    case Z.BUILT_IN_EQUIPMENT:
                                        return ee.BUILT_IN_EQUIPMENT;
                                    case Z.EQUIPMENT_PLUS:
                                        return ee.EQUIPMENT_PLUS;
                                    case Z.EQUIPMENT_TROPHY_BASIC:
                                        return ee.EQUIPMENT_TROPHY_BASIC;
                                    case Z.EQUIPMENT_TROPHY_UPGRADED:
                                        return ee.EQUIPMENT_TROPHY_UPGRADED;
                                    case Z.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Z.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Z.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Z.PROGRESSION_STYLE_UPGRADED_1:
                                        return ee.PROGRESSION_STYLE_UPGRADED_1;
                                    case Z.PROGRESSION_STYLE_UPGRADED_2:
                                        return ee.PROGRESSION_STYLE_UPGRADED_2;
                                    case Z.PROGRESSION_STYLE_UPGRADED_3:
                                        return ee.PROGRESSION_STYLE_UPGRADED_3;
                                    case Z.PROGRESSION_STYLE_UPGRADED_4:
                                        return ee.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case K.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case K.CURRENCY:
                                    case K.NUMBER:
                                        return s().createElement(ue, { format: 'integral', value: Number(e) });
                                    case K.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, o);
                        return s().createElement(
                            'div',
                            { className: b()(qt.base, qt[`base__${n}`], l), style: i },
                            s().createElement(
                                Qt,
                                { tooltipArgs: d, className: qt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: b()(qt.image, null == c ? void 0 : c.image) },
                                        E &&
                                            s().createElement('div', {
                                                className: b()(qt.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: b()(qt.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            s().createElement('div', {
                                                className: b()(qt.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    qt.info,
                                                    qt[`info__${e}`],
                                                    o === K.MULTI && qt.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Qt,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: b()(qt.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    jt = 'Rewards_base_26',
                    Yt = 'Rewards_base__vertical_9f',
                    Xt = 'Rewards_reward_7b',
                    Kt = 'Rewards_reward__vertical_c6';
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Jt = s().memo(
                    ({
                        data: e,
                        size: u = X.Big,
                        isVertical: t = !1,
                        count: n,
                        classMix: a,
                        rewardItemClassMix: o,
                        boxRewardTooltip: i,
                        boxRewardValue: l,
                    }) => {
                        const c = (0, r.useMemo)(
                                () => (n && n < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : ''),
                                [n, e.length, u],
                            ),
                            d =
                                l ||
                                (0, tt.uF)(R.strings.tooltips.quests.awards.additional.bottom(), {
                                    count: e.length - (n || 0),
                                }),
                            m = b()(jt, t && Yt, a),
                            E = b()(Xt, t && Kt, o);
                        return s().createElement(
                            'div',
                            { className: m },
                            c
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      e
                                          .slice(0, n)
                                          .map((e, t) =>
                                              s().createElement(
                                                  'div',
                                                  { key: t, className: E },
                                                  s().createElement(Vt, Zt({ size: u }, e)),
                                              ),
                                          ),
                                      s().createElement(
                                          'div',
                                          { className: E },
                                          s().createElement(Vt, {
                                              name: 'more',
                                              image: c,
                                              size: u,
                                              value: d,
                                              tooltipArgs: i,
                                          }),
                                      ),
                                  )
                                : e.map((e, t) =>
                                      s().createElement(
                                          'div',
                                          { key: t, className: E },
                                          s().createElement(Vt, Zt({ size: u }, e)),
                                      ),
                                  ),
                        );
                    },
                );
                var en = t(438);
                const un = {
                        base: 'Transition_base_f1',
                        component: 'Transition_component_9a',
                        fadeIn: 'Transition_fadeIn_c5',
                        lock: 'Transition_lock_58',
                        zoomOut: 'Transition_zoomOut_f4',
                        lock__big: 'Transition_lock__big_c0',
                        background: 'Transition_background_e2',
                        fadeInBg: 'Transition_fadeInBg_ed',
                        background__big: 'Transition_background__big_a0',
                    },
                    tn = (0, r.memo)(({ delay: e, isEnabled: u = !0, size: t = X.Small, children: n }) =>
                        u
                            ? s().createElement(
                                  'div',
                                  { className: un.base },
                                  s().createElement('div', {
                                      className: b()(un.lock, un[`lock__${t}`]),
                                      style: { animationDelay: `${e + 300}ms, ${e + 400}ms` },
                                  }),
                                  s().createElement('div', {
                                      className: b()(un.background, un[`background__${t}`]),
                                      style: { animationDelay: `${e + 400}ms` },
                                  }),
                                  s().createElement(
                                      'div',
                                      { className: un.component, style: { animationDelay: `${e + 400}ms` } },
                                      n,
                                  ),
                              )
                            : n,
                    ),
                    nn = {
                        base: 'BonusReward_base_3a',
                        base__locked: 'BonusReward_base__locked_52',
                        subscriptionRewardBackground: 'BonusReward_subscriptionRewardBackground_45',
                        subscriptionRewardBackground__big: 'BonusReward_subscriptionRewardBackground__big_fb',
                        subscriptionRewardBackground__animated: 'BonusReward_subscriptionRewardBackground__animated_0d',
                        lockedIcon: 'BonusReward_lockedIcon_39',
                        lockedIcon__big: 'BonusReward_lockedIcon__big_1f',
                        reward: 'BonusReward_reward_eb',
                    };
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const rn = R.strings.subscription,
                    sn = ({
                        data: e,
                        isUnlockedQuestReward: u = !1,
                        size: t = X.Small,
                        isClosedRewardOnCompletedQuest: n = !1,
                        animationDelay: a = 0,
                        isAnimatedUnlock: o = !1,
                    }) => {
                        (0, r.useEffect)(() => {
                            o &&
                                setTimeout(() => {
                                    Qe('dq_subscription_reward_unlock');
                                }, a);
                        }, []);
                        const i = u
                            ? b()(
                                  nn.subscriptionRewardBackground,
                                  nn[`subscriptionRewardBackground__${t}`],
                                  o && nn.subscriptionRewardBackground__animated,
                              )
                            : b()(nn.lockedIcon, nn[`lockedIcon__${t}`]);
                        return s().createElement(
                            'div',
                            { className: nn.base },
                            e.map((e, r) =>
                                s().createElement(
                                    au,
                                    {
                                        isEnabled: n,
                                        header: rn.dailyQuestsLockedReward.header(),
                                        body: rn.dailyQuestsLockedReward.body(),
                                        key: r,
                                    },
                                    ((e, n) =>
                                        e
                                            ? s().createElement(
                                                  'div',
                                                  { className: nn.reward },
                                                  s().createElement('div', { className: i }),
                                                  s().createElement(
                                                      'div',
                                                      { className: u ? '' : nn.base__locked },
                                                      s().createElement(Vt, an({ size: t }, n)),
                                                  ),
                                              )
                                            : s().createElement(
                                                  tn,
                                                  { delay: a, isEnabled: o, size: t },
                                                  s().createElement(
                                                      Qt,
                                                      {
                                                          tooltipArgs: u
                                                              ? n.tooltipArgs
                                                              : {
                                                                    contentId:
                                                                        R.views.lobby.daily.tooltips.LockedSubscriptionBonusTooltip(
                                                                            'resId',
                                                                        ),
                                                                },
                                                      },
                                                      s().createElement(
                                                          'div',
                                                          { className: nn.reward },
                                                          s().createElement('div', { className: i }),
                                                          s().createElement(
                                                              'div',
                                                              { className: u ? '' : nn.base__locked },
                                                              s().createElement(Vt, an({ size: t }, n)),
                                                          ),
                                                      ),
                                                  ),
                                              ))(n, e),
                                ),
                            ),
                        );
                    },
                    on = 'Content_base_b4',
                    ln = 'Content_header_92',
                    cn = 'Content_title_39',
                    dn = 'Content_countDownContainer_ec',
                    mn = 'Content_timer_78',
                    En = 'Content_countDown_ae',
                    _n = 'Content_missionIcon_65',
                    An = 'Content_battleConditions_e0',
                    gn = 'Content_text_b9',
                    Fn = 'Content_progressInfo_85',
                    Dn = 'Content_progressBar_e8',
                    Cn = 'Content_rewards_4a';
                let pn;
                !(function (e) {
                    ((e[(e.BIG = 80)] = 'BIG'), (e[(e.MEDIUM = 48)] = 'MEDIUM'), (e[(e.SMALL = 32)] = 'SMALL'));
                })(pn || (pn = {}));
                const Bn = R.images.gui.maps.icons.missions.icons,
                    bn = R.strings.quests.dailyQuests.bonusQuest,
                    fn = (e) => (e >= v.Large ? pn.BIG : e >= v.Medium ? pn.MEDIUM : pn.SMALL),
                    hn = (0, q.Pi)(() => {
                        const e = We().model,
                            u = e.root.get().countDown,
                            t = (0, r.useContext)(rr).isExiting,
                            n = S().mediaSize,
                            a = me(e.dailyQuests.get(), 3);
                        if (void 0 === a) throw new Error('There is no bonus quest in daily quests');
                        const o = a.bonusCondition,
                            i = a.id,
                            l = a.postBattleCondition,
                            c = a.bonuses,
                            d = a.subscriptionBonuses,
                            m = a.isActiveSubscription,
                            E = a.isEnabledSubscription,
                            _ = a.icon,
                            A = a.status,
                            g = a.isFirstView,
                            F = Se(o, l),
                            D = n >= v.Large ? X.Big : X.Small,
                            C = ye(c, i, D),
                            p = ye(d, i, D),
                            B = Pe(t, -10, {
                                leave: { opacity: 1, config: { duration: 400, easing: xe.easeInCubic } },
                                delay: t ? 100 : 300,
                            });
                        return s().createElement(
                            'div',
                            { className: on },
                            B(
                                (e, t) =>
                                    !t &&
                                    s().createElement(
                                        V.animated.div,
                                        { style: e, className: ln },
                                        s().createElement('div', { className: cn }, bn.bonusMissionTitle()),
                                        s().createElement(
                                            'div',
                                            { className: dn },
                                            s().createElement('div', { className: mn }),
                                            s().createElement(et.Z, {
                                                startValue: u,
                                                hourFormat: bn.countDown_hrs(),
                                                minuteFormat: bn.countDown_minSec(),
                                                pendingDotCount: 8,
                                                className: En,
                                            }),
                                        ),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: An },
                                s().createElement('div', {
                                    className: _n,
                                    style: { backgroundImage: `url(${Bn.$dyn(`c_${fn(n)}_${_}_silver`)})` },
                                }),
                                void 0 !== F &&
                                    s().createElement(en.L, {
                                        conditions: F,
                                        missionId: i,
                                        columns: !0,
                                        reverse: !0,
                                        swapProgress: !0,
                                        classNames: { text: gn, progressInfo: Fn, progressBar: Dn },
                                    }),
                            ),
                            s().createElement(
                                'div',
                                { className: Cn },
                                s().createElement(Jt, {
                                    size: D,
                                    data: C,
                                    count: ((b = C.length), (f = 3), b > f ? f - 1 : void 0),
                                }),
                                E &&
                                    s().createElement(sn, {
                                        data: p,
                                        size: D,
                                        isUnlockedQuestReward:
                                            (m && A !== de.UndoneSubscription) || (!m && A === de.Done),
                                        isClosedRewardOnCompletedQuest: A === de.UndoneSubscription,
                                        isAnimatedUnlock: g && A === de.Active && m,
                                    }),
                            ),
                        );
                        var b, f;
                    }),
                    vn = {
                        from: { opacity: 0, transform: 'translateY(-200rem) scaleX(0.15) scaleY(0.15)' },
                        enter: {
                            opacity: 1,
                            transform: 'translateY(0rem) scaleX(1) scaleY(1)',
                            config: { duration: 800, easing: xe.easeOutQuint },
                        },
                        leave: {
                            opacity: 0,
                            transform: 'translateY(0rem) scaleX(1) scaleY(1)',
                            config: { duration: 100, easing: xe.easeInCubic },
                            delay: 300,
                        },
                    },
                    wn = ({ bonusQuestCompleted: e, isFirstAppearing: u }) => {
                        const t = (0, r.useContext)(rr).isExiting,
                            n = t || e,
                            a = Ne(n, {
                                enter: { pointerEvents: 'none', config: { duration: 400, easing: xe.easeOutCirc } },
                                leave: { config: { duration: 300, easing: xe.easeInCubic } },
                                delay: n ? (e ? 2300 : 0) : 600,
                            }),
                            o = Pe(e, 20, {
                                from: { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                                delay: e ? 2300 : 0,
                            }),
                            i = Pe(
                                t,
                                20,
                                Object.assign(
                                    {},
                                    u ? vn : { from: { transform: 'translateY(0rem)' }, delay: t ? 100 : 200 },
                                ),
                            ),
                            l = Pe(
                                t,
                                -30,
                                Object.assign(
                                    {},
                                    u
                                        ? {
                                              enter: { config: { duration: 800, easing: xe.easeOutQuint } },
                                              leave: {
                                                  transform: 'translateY(-20rem)',
                                                  opacity: 0,
                                                  config: { duration: 300, easing: xe.easeInCubic },
                                              },
                                          }
                                        : {
                                              from: { transform: 'translateY(-20rem)' },
                                              enter: {
                                                  transform: 'translateY(0rem)',
                                                  config: { duration: 600, easing: xe.easeOutCirc },
                                              },
                                              leave: { transform: 'translateY(20rem)' },
                                          },
                                    { delay: t ? 100 : 400 },
                                ),
                            );
                        return s().createElement(
                            'div',
                            { className: Ot },
                            a((e, u) => !u && s().createElement(V.animated.div, { style: e, className: It })),
                            o(
                                (e, u) =>
                                    !u &&
                                    s().createElement(
                                        V.animated.div,
                                        { style: e, className: Lt },
                                        i(
                                            (e, u) =>
                                                !u && s().createElement(V.animated.div, { style: e, className: Ht }),
                                        ),
                                        l(
                                            (e, u) =>
                                                !u &&
                                                s().createElement(
                                                    V.animated.div,
                                                    { style: e, className: Ut },
                                                    s().createElement(hn, null),
                                                ),
                                        ),
                                    ),
                            ),
                        );
                    },
                    yn = 'AllCompleteCountdown_base_ab',
                    Sn = 'AllCompleteCountdown_title_90',
                    Tn = 'AllCompleteCountdown_subTitle_2b',
                    Rn = 'AllCompleteCountdown_timer_47',
                    xn = 'AllCompleteCountdown_timerDecoration_7b',
                    Nn = 'AllCompleteCountdown_timerDecoration__left_4e',
                    Pn = 'AllCompleteCountdown_timerCountdown_2d',
                    kn = (0, q.Pi)(() => {
                        const e = We().model,
                            u = (0, r.useContext)(rr),
                            t = u.previousTabIndex,
                            n = u.isExiting,
                            a = e.root.get().countDown,
                            o = ve(t);
                        if (void 0 === o) throw new Error('Can not show content for undefined content resource name.');
                        const i = R.strings.quests.$dyn(o).$dyn('countDown'),
                            l = Pe(n, 50, { delay: n ? 300 : 200 }),
                            c = ke(n, -50),
                            d = ke(n, 50);
                        return l(
                            (e, u) =>
                                !u &&
                                s().createElement(
                                    V.animated.div,
                                    { style: e, className: yn },
                                    s().createElement('div', { className: Sn }, i.$dyn('title')),
                                    s().createElement(
                                        'div',
                                        { className: Rn },
                                        c(
                                            (e, u) =>
                                                !u &&
                                                s().createElement(
                                                    V.animated.div,
                                                    { style: e },
                                                    s().createElement('div', { className: b()(xn, Nn) }),
                                                ),
                                        ),
                                        s().createElement(et.Z, { startValue: a, className: Pn }),
                                        d(
                                            (e, u) =>
                                                !u &&
                                                s().createElement(
                                                    V.animated.div,
                                                    { style: e },
                                                    s().createElement('div', { className: xn }),
                                                ),
                                        ),
                                    ),
                                    s().createElement('div', { className: Tn }, i.$dyn('remainingText')),
                                ),
                        );
                    }),
                    Mn = {
                        bonusCard: 'DailyQuests_bonusCard_c0',
                        bonusCard__winback: 'DailyQuests_bonusCard__winback_44',
                    };
                var On = t(374),
                    In = t(229);
                const Ln = 'BattleCondition_base_b4',
                    Hn = 'BattleCondition_text_a6',
                    Un = 'BattleCondition_base__prem_e6',
                    $n = 'BattleCondition_progressInfo_1a',
                    zn = 'BattleCondition_progressBar_b9',
                    Wn = (0, q.Pi)(({ quest: e, className: u, isPremium: t }) => {
                        const n = Se(e.bonusCondition, e.postBattleCondition);
                        return n
                            ? s().createElement(
                                  'div',
                                  { className: b()(Ln, t && Un, u) },
                                  s().createElement(en.L, {
                                      conditions: n,
                                      inlineOperator: !0,
                                      columns: !0,
                                      size: In.$.BIG,
                                      missionId: e.id,
                                      swapProgress: !0,
                                      reverse: !0,
                                      classNames: { text: Hn, progressInfo: $n, progressBar: zn },
                                  }),
                              )
                            : null;
                    }),
                    Gn = {
                        base: 'Card_base_09',
                        base__done: 'Card_base__done_dc',
                        base__undoneSubscription: 'Card_base__undoneSubscription_a3',
                        base__notAvailable: 'Card_base__notAvailable_b8',
                        base__prem: 'Card_base__prem_cb',
                        borderTop: 'Card_borderTop_ee',
                        borderAnimationWrapper: 'Card_borderAnimationWrapper_7a',
                        borderAnimation: 'Card_borderAnimation_1f',
                        'border-anim': 'Card_border-anim_3d',
                        completedAnimationBg: 'Card_completedAnimationBg_fc',
                        'bg-blink': 'Card_bg-blink_8e',
                        cardIcon: 'Card_cardIcon_29',
                        condition: 'Card_condition_f1',
                        rewardsWrapper: 'Card_rewardsWrapper_40',
                        premiumLock: 'Card_premiumLock_3b',
                        rerollButton: 'Card_rerollButton_06',
                        statusIcon: 'Card_statusIcon_2b',
                        statusIcon__animated: 'Card_statusIcon__animated_9d',
                        'completed-icon': 'Card_completed-icon_0d',
                        arrow: 'Card_arrow_64',
                        arrow__done: 'Card_arrow__done_44',
                        arrow__undoneSubscription: 'Card_arrow__undoneSubscription_3f',
                    },
                    Qn = 'RerollButton_base_22',
                    qn = 'RerollButton_base__disabled_2c',
                    Vn = 'RerollButton_text_a3',
                    jn = 'RerollButton_icons_98',
                    Yn = 'RerollButton_icon_2b',
                    Xn = 'RerollButton_iconHover_5c',
                    Kn = 'RerollButton_iconDisabled_64',
                    Zn = (0, q.Pi)(({ canReroll: e, questId: u, className: t }) => {
                        const n = We().controls,
                            a = (0, r.useContext)(rr).isExiting;
                        return s().createElement(
                            eu,
                            {
                                ignoreMouseClick: !e,
                                contentId: R.views.lobby.missions.legacy.RerollTooltipWithCountdown('resId'),
                                isEnabled: !a && !e,
                            },
                            s().createElement(
                                'div',
                                {
                                    className: b()(Qn, t, !e && qn),
                                    onClick: e ? () => n.reroll(u) : void 0,
                                    onMouseEnter: e ? () => Qe(R.sounds.highlight()) : void 0,
                                },
                                e &&
                                    s().createElement(
                                        'div',
                                        { className: Vn },
                                        R.strings.quests.dailyQuests.body.reroll(),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: jn },
                                    e
                                        ? s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement('div', { className: Yn }),
                                              s().createElement('div', { className: Xn }),
                                          )
                                        : s().createElement('div', { className: Kn }),
                                ),
                            ),
                        );
                    }),
                    Jn = (e, u) => (e === de.Active && u ? 'prem' : e),
                    ea = R.strings.quests.premiumQuests.tooltips.locked,
                    ua = ({
                        quest: e,
                        isRerolling: u,
                        isRerollEnabled: t,
                        isRerollAvailable: n,
                        isVisited: a,
                        isPremium: o,
                        className: i,
                        index: l,
                    }) => {
                        const c = S().mediaSize,
                            d = (0, r.useContext)(rr).isExiting,
                            m = !o && t && e.status === de.Active,
                            E = 400 + 300 * (3 + l - 1),
                            _ = d || u;
                        return Pe(_, 20, {
                            enter: { config: { duration: 300, easing: xe.easeOutCirc } },
                            delay: _ ? (u ? 1e3 : 200 * l) : u ? 0 : 400 + 200 * l,
                        })(
                            (u, t) =>
                                !t &&
                                s().createElement(
                                    V.animated.div,
                                    { style: u, className: b()(Gn.base, i, Gn[`base__${Jn(e.status, o)}`]) },
                                    s().createElement('div', { className: Gn.borderTop }),
                                    (e.status === de.Done || e.status === de.UndoneSubscription) &&
                                        !a &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: Gn.borderAnimationWrapper },
                                                s().createElement('div', { className: Gn.borderAnimation }),
                                            ),
                                            s().createElement('div', { className: b()(Gn.completedAnimationBg) }),
                                        ),
                                    s().createElement('div', { className: Gn.cardIcon, style: we(c, e.icon, o) }),
                                    s().createElement(Wn, { className: Gn.condition, quest: e, isPremium: o }),
                                    s().createElement(
                                        'div',
                                        { className: Gn.rewardsWrapper },
                                        s().createElement(Jt, { size: e.rewardSize, data: e.bonuses }),
                                        e.isEnabledSubscription &&
                                            !o &&
                                            s().createElement(sn, {
                                                data: e.subscriptionBonuses,
                                                size: e.rewardSize,
                                                isUnlockedQuestReward:
                                                    (e.isActiveSubscription && e.status !== de.UndoneSubscription) ||
                                                    (!e.isActiveSubscription && e.status === de.Done),
                                                isClosedRewardOnCompletedQuest: e.status === de.UndoneSubscription,
                                                animationDelay: E,
                                                isAnimatedUnlock:
                                                    e.isFirstView && e.status === de.Active && e.isActiveSubscription,
                                            }),
                                    ),
                                    o &&
                                        e.status === de.Locked &&
                                        s().createElement(
                                            au,
                                            {
                                                ignoreMouseClick: !0,
                                                isEnabled: !d,
                                                body: ea.body(),
                                                header: ea.header(),
                                            },
                                            s().createElement('div', { className: Gn.premiumLock }),
                                        ),
                                    m &&
                                        s().createElement(Zn, {
                                            className: Gn.rerollButton,
                                            canReroll: n,
                                            questId: e.id,
                                        }),
                                    (e.status === de.Done || e.status === de.UndoneSubscription) &&
                                        s().createElement('div', {
                                            className: b()(Gn.statusIcon, !a && Gn.statusIcon__animated),
                                        }),
                                    o &&
                                        2 !== l &&
                                        s().createElement('div', {
                                            className: b()(Gn.arrow, Gn[`arrow__${e.status}`]),
                                        }),
                                ),
                        );
                    },
                    ta = 'Cards_base_ee',
                    na = 'Cards_card_c2',
                    aa = { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                    ra = (0, q.Pi)(({ isOutAnimation: e, delayOut: u }) => {
                        const t = S().mediaSize,
                            n = We().model,
                            a = n.computes.getRerolledCardsIds,
                            o = (0, r.useContext)(rr).previousTabIndex,
                            i = n.computes.getQuests(o, t),
                            l = (0, r.useState)(i),
                            c = l[0],
                            d = l[1],
                            m = (0, r.useState)([]),
                            E = m[0],
                            _ = m[1];
                        (0, r.useEffect)(() => {
                            const e = a(c, i);
                            if (e.length > 0)
                                return (
                                    Qe(R.sounds.dq_screen_quest_reroll()),
                                    _(e),
                                    (0, kt.F)(() => {
                                        (d(i), _([]));
                                    }, 1500)
                                );
                            d(i);
                        }, [a, c, i]);
                        const A = (0, V.useSpring)(() => aa),
                            g = A[0],
                            F = A[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e)
                                    return (0, kt.F)(() => {
                                        F.start({
                                            opacity: 0,
                                            transform: 'translateY(20rem)',
                                            pointerEvents: 'none',
                                            config: { duration: 300, easing: xe.easeInCirc },
                                        });
                                    }, u);
                                F.start(Object.assign({}, aa, { config: { duration: 200, easing: xe.easeOutCirc } }));
                            }, [F, e, u]),
                            s().createElement(
                                V.animated.div,
                                { style: g, className: ta },
                                c.map((e, u) => {
                                    var t;
                                    return s().createElement(ua, {
                                        key: e.id,
                                        className: na,
                                        isPremium: o === fe.PremiumQuests,
                                        index: u,
                                        quest: e,
                                        isRerolling: E.includes(e.id),
                                        isRerollEnabled: n.daily.get().rerollEnabled,
                                        isRerollAvailable: n.daily.get().rerollCountDown <= 0,
                                        isVisited: null == (t = n.computes.isCardVisited(o, u)) || t,
                                    });
                                }),
                            )
                        );
                    }),
                    sa = 'AnimatedFlag_base_e5',
                    oa = s().memo(({ baseQuestsCompleted: e }) => {
                        const u = S().mediaSize >= v.Medium,
                            t = (0, V.useSpring)({
                                x: e ? 1 : 0,
                                transform: e
                                    ? `translateY(${u ? '-450rem' : '-240rem'}) scale(1.3, 1.3)`
                                    : `translateY(0rem) scale(${u ? '0.8, 0.8' : '0.6, 0.6'})`,
                                config: { duration: 1e3, easing: xe.easeOutCubic },
                                delay: 2e3,
                            }),
                            n = t.x,
                            a = t.transform;
                        return s().createElement(V.animated.div, {
                            style: { opacity: n.to({ range: [0, 0.4, 0.7, 1], output: [0, 0, 0.8, 0] }), transform: a },
                            className: sa,
                        });
                    }),
                    ia = 'LockedBonusQuest_base_51',
                    la = 'LockedBonusQuest_flag_27',
                    ca = 'LockedBonusQuest_bonusMissionDescription_d0',
                    da = 'LockedBonusQuest_lockIcon_5e',
                    ma = 'LockedBonusQuest_text_aa',
                    Ea = 'LockedBonusQuest_styleLine_b1',
                    _a = 'LockedBonusQuest_styleLine__left_4b',
                    Aa = 'LockedBonusQuest_styleLine__right_22',
                    ga = R.strings.quests.dailyQuests,
                    Fa = s().memo(({ baseQuestsCompleted: e }) => {
                        const u = (0, r.useContext)(rr).isExiting,
                            t = Pe(u, 20, { delay: u ? 0 : 150 }),
                            n = (0, V.useSpring)({
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                cancel: !e,
                                reset: !e,
                                config: { duration: 300, easing: xe.easeInCirc },
                                delay: 1700,
                            });
                        return s().createElement(
                            V.animated.div,
                            { style: n },
                            t(
                                (e, u) =>
                                    !u &&
                                    s().createElement(
                                        V.animated.div,
                                        { style: e, className: ia },
                                        s().createElement('div', { className: la }),
                                        s().createElement(
                                            au,
                                            {
                                                ignoreMouseClick: !0,
                                                isEnabled: !u,
                                                header: ga.bonus.tooltipTitle(),
                                                body: ga.bonus.tooltipDescription(),
                                            },
                                            s().createElement(
                                                'div',
                                                { className: ca },
                                                s().createElement('div', { className: da }),
                                                s().createElement(
                                                    'div',
                                                    { className: ma },
                                                    ga.bonusQuest.bonusMissionTitle(),
                                                ),
                                            ),
                                        ),
                                        s().createElement('div', { className: b()(Ea, _a) }),
                                        s().createElement('div', { className: b()(Ea, Aa) }),
                                    ),
                            ),
                        );
                    }),
                    Da = 'MainContent_base_67',
                    Ca = 'MainContent_lockedBonusQuest_89',
                    pa = 'MainContent_animatedFlag_d1',
                    Ba = 'MainContent_countDownContainer_32',
                    ba = 'MainContent_timer_72',
                    fa = 'MainContent_countDown_3b',
                    ha = (0, q.Pi)(({ baseQuestsCompleted: e }) => {
                        const u = We().model.daily.get().rerollCountDown,
                            t =
                                (n = u) < On.yR
                                    ? R.strings.quests.general.countdown.text.timer_sec()
                                    : n < On.dV
                                      ? R.strings.quests.general.countdown.text.timer_min()
                                      : R.strings.quests.general.countdown.text.timer_hrs();
                        var n;
                        const a = (0, r.useContext)(rr).isExiting,
                            o = Ne(e);
                        return s().createElement(
                            'div',
                            { className: Da },
                            u > 0 &&
                                s().createElement(
                                    eu,
                                    {
                                        ignoreMouseClick: !0,
                                        isEnabled: !a && u > 0,
                                        contentId: R.views.lobby.missions.legacy.RerollTooltip('resId'),
                                    },
                                    o(
                                        (e, n) =>
                                            !n &&
                                            s().createElement(
                                                V.animated.div,
                                                { style: e, className: Ba },
                                                s().createElement('div', { className: ba }),
                                                s().createElement('div', { className: fa }, (0, ut.G)(t, u)),
                                            ),
                                    ),
                                ),
                            s().createElement(ra, { isOutAnimation: e, delayOut: 1500 }),
                            s().createElement(
                                'div',
                                { className: Ca },
                                s().createElement(
                                    'div',
                                    { className: pa },
                                    s().createElement(oa, { baseQuestsCompleted: e }),
                                ),
                                s().createElement(Fa, { baseQuestsCompleted: e }),
                            ),
                        );
                    }),
                    va = (0, q.Pi)(() => {
                        var e, u;
                        const t = We().model,
                            n = (0, r.useContext)(rr).isExiting,
                            a = t.root.get().dailyType,
                            o = t.daily.get().bonusMissionVisited,
                            i = t.computes.getDailyQuestsCompletedVisited(),
                            l = t.dailyQuests.get(),
                            c = Te(l),
                            d = null != (e = (0, Pt.D9)(c)) ? e : c,
                            m = 4 === c,
                            E = 3 === c,
                            _ = Re(i) >= 3,
                            A = (0, r.useState)(!1),
                            g = A[0],
                            F = A[1],
                            D = (0, r.useState)(!!(c >= 3 && i[3]) && o),
                            C = D[0],
                            p = D[1],
                            B = (0, r.useState)(m && null != (u = t.computes.isCardVisited(fe.DailyQuests, 3)) && u),
                            f = B[0],
                            h = B[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (E && l.length > 3) {
                                    if ((F(!0), !o)) {
                                        const e = (0, kt.F)(() => Qe(R.sounds.dq_screen_bonus_quest_unlock()), 1600),
                                            u = (0, kt.F)(() => p(!0), 3e3);
                                        return () => {
                                            (e(), u());
                                        };
                                    }
                                    p(!0);
                                }
                            }, [o, E, l.length]),
                            (0, r.useEffect)(() => {
                                void 0 !== d &&
                                    d >= 3 &&
                                    c < 3 &&
                                    (Qe(R.sounds.dq_screen_switch()), F(!1), p(!1), h(!1));
                            }, [c, d]),
                            (0, r.useEffect)(() => {
                                if (m && !i[3].value)
                                    return (
                                        Qe(R.sounds.dq_screen_bonus_quest_complete()),
                                        (0, kt.F)(() => {
                                            h(!0);
                                        }, 2600)
                                    );
                            }, [m, i]),
                            (0, r.useEffect)(() => {
                                n || m || (_ && !(c > d)) || Qe(R.sounds.dq_screen_quest_complete());
                            }, [n, m, _, c, d]),
                            f
                                ? s().createElement(kn, null)
                                : C && l.length > 3
                                  ? s().createElement(
                                        'div',
                                        { className: b()(Mn.bonusCard, Mn[`bonusCard__${a}`]) },
                                        s().createElement(wn, { bonusQuestCompleted: m, isFirstAppearing: !o }),
                                    )
                                  : s().createElement(
                                        'div',
                                        { className: b()(Mt.questsContainer, Mt[`questsContainer__${a}`]) },
                                        s().createElement(ha, { baseQuestsCompleted: g }),
                                    )
                        );
                    }),
                    wa = {
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
                let ya, Sa;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ya || (ya = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(Sa || (Sa = {})));
                const Ta = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: a,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const g = (0, r.useRef)(null),
                        F = (0, r.useState)(t),
                        D = F[0],
                        C = F[1],
                        p = (0, r.useState)(!1),
                        B = p[0],
                        f = p[1],
                        h = (0, r.useState)(!1),
                        v = h[0],
                        w = h[1],
                        y = (0, r.useCallback)(() => {
                            a || (g.current && (g.current.focus(), C(!0)));
                        }, [a]),
                        S = (0, r.useCallback)(
                            (e) => {
                                D && null !== g.current && !g.current.contains(e.target) && C(!1);
                            },
                            [D],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                a || (A && A(e));
                            },
                            [a, A],
                        ),
                        x = (0, r.useCallback)(
                            (e) => {
                                a || (null !== i && Qe(i), c && c(e), w(!0));
                            },
                            [a, i, c],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                a || (E && E(e), f(!1));
                            },
                            [a, E],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                a || (null !== l && Qe(l), m && m(e), t && y(), f(!0));
                            },
                            [a, l, m, y, t],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                a || (_ && _(e), f(!1));
                            },
                            [a, _],
                        ),
                        O = b()(
                            wa.base,
                            wa[`base__${n}`],
                            {
                                [wa.base__disabled]: a,
                                [wa[`base__${u}`]]: u,
                                [wa.base__focus]: D,
                                [wa.base__highlightActive]: B,
                                [wa.base__firstHover]: v,
                            },
                            o,
                        ),
                        I = b()(wa.state, wa.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, r.useEffect)(() => {
                            C(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: O,
                                onMouseEnter: x,
                                onMouseMove: N,
                                onMouseUp: P,
                                onMouseDown: k,
                                onMouseLeave: M,
                                onClick: T,
                            },
                            n !== ya.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: wa.back }),
                                    s().createElement('span', { className: wa.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: wa.stateDisabled }),
                                s().createElement('span', { className: wa.stateHighlightHover }),
                                s().createElement('span', { className: wa.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: wa.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ta.defaultProps = { type: ya.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ra = (0, r.memo)(Ta),
                    xa = 'NotPremiumAccount_base_31',
                    Na = 'NotPremiumAccount_image_4a',
                    Pa = 'NotPremiumAccount_title_4f',
                    ka = 'NotPremiumAccount_text_06',
                    Ma = 'NotPremiumAccount_button_75',
                    Oa = R.strings.quests.premiumQuests.notPremiumAccount,
                    Ia = (0, q.Pi)(({ isPremiumChanging: e }) => {
                        const u = We().controls,
                            t = (0, r.useContext)(rr).isExiting;
                        return Pe(t || e, 20, {
                            delay: 100,
                            enter: { config: { duration: 300, easing: xe.easeOutCirc } },
                        })(
                            (e, t) =>
                                !t &&
                                s().createElement(
                                    V.animated.div,
                                    { style: e, className: xa },
                                    s().createElement('div', { className: Na }),
                                    s().createElement(at, { text: Oa.title(), classMix: Pa }),
                                    s().createElement(at, { text: Oa.paragraph(), classMix: ka }),
                                    s().createElement(
                                        Ra,
                                        { type: ya.main, size: Sa.medium, mixClass: Ma, onClick: u.buyPremiumBtnClick },
                                        Oa.button(),
                                    ),
                                ),
                        );
                    }),
                    La = (0, q.Pi)(() => {
                        const e = We().model,
                            u = e.root.get().dailyType,
                            t = e.premium.get().isPremiumAccount,
                            n = e.computes.getPremiumQuestsCompletedVisited(),
                            a = e.premiumQuests.get(),
                            o = Te(a),
                            i = (0, Pt.D9)(o),
                            l = 3 === o,
                            c = Re(n),
                            d = e.computes.isCardVisited(fe.PremiumQuests, 2),
                            m = void 0 !== d && !d,
                            E = (0, r.useState)(l && !m),
                            _ = E[0],
                            A = E[1];
                        ((0, r.useEffect)(() => {
                            if (l && m)
                                return (
                                    Qe(R.sounds.dq_screen_premium_missions_all_complete()),
                                    (0, kt.F)(() => {
                                        A(!0);
                                    }, 3500)
                                );
                        }, [l, m]),
                            (0, r.useEffect)(() => {
                                3 === i && o < 3 && (Qe(R.sounds.dq_screen_switch()), A(!1));
                            }, [i, o]),
                            (0, r.useEffect)(() => {
                                const e = o - c;
                                e > 0 && e < 3 && Qe(R.sounds.dq_screen_premium_missions_complete());
                            }, [o, c]));
                        const g = (0, Pt.tp)(t, 500),
                            F = g !== t;
                        return g
                            ? _
                                ? s().createElement(kn, null)
                                : s().createElement(
                                      'div',
                                      { className: b()(Mt.questsContainer, Mt[`questsContainer__${u}`]) },
                                      s().createElement(ra, { isOutAnimation: l || F, delayOut: F ? 0 : 2400 }),
                                  )
                            : s().createElement(Ia, { isPremiumChanging: F });
                    });
                var Ha = t(875);
                const Ua = 'Progress_base_55',
                    $a = 'Progress_infoContainer_ca',
                    za = 'Progress_missionsCompleted_73',
                    Wa = 'Progress_title_a4',
                    Ga = 'Progress_description_aa',
                    Qa = 'Progress_current_af',
                    qa = 'Progress_separator_7e',
                    Va = 'Progress_checkIcon_9d',
                    ja = 'Progress_rewardsWrapper_c7',
                    Ya = 'Progress_progressWrapper_7c',
                    Xa = 'Progress_footerSeparator_08',
                    Ka = 'Progress_disabled_af',
                    Za = 'Progress_alertIcon_f5',
                    Ja = 'Progress_alertText_63',
                    er = Object.assign({}, Ha.uu, {
                        delta: { delay: 100, duration: 2e3 },
                        line: { delay: 100, duration: 2e3 },
                    }),
                    ur = R.strings.quests.dailyQuests.footer,
                    tr = (0, q.Pi)(() => {
                        const e = We().model,
                            u = S().mediaSize,
                            t = e.epicQuest.get(),
                            n = t.id,
                            a = t.earned,
                            o = t.total,
                            i = t.isEnabled,
                            l = t.current,
                            c = e.epicQuestBonuses.get(),
                            d = u >= v.Large ? X.Big : X.Small;
                        (0, r.useEffect)(() => {
                            a > 0 && i && Qe(R.sounds.dq_screen_progress_bar());
                        }, [a, i]);
                        const m = (0, V.useSpring)({
                            from: { opacity: 0, transform: 'translateY(20rem)' },
                            to: { opacity: 1, transform: 'translateY(0rem)' },
                            config: { duration: 600, easing: xe.easeOutQuint },
                        });
                        return s().createElement(
                            V.animated.div,
                            { style: m, className: Ua },
                            s().createElement('div', { className: Xa }),
                            i
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: $a },
                                          s().createElement(
                                              'div',
                                              { className: za },
                                              s().createElement(
                                                  'div',
                                                  { className: Wa },
                                                  ur.title(),
                                                  s().createElement('div', { className: Qa }, l),
                                                  s().createElement('div', { className: qa }, '/'),
                                                  o,
                                                  s().createElement('div', { className: Va }),
                                              ),
                                              s().createElement('div', { className: Ga }, ur.paragraph()),
                                          ),
                                          s().createElement(Jt, {
                                              data: ye(c, n, d),
                                              size: u >= v.Large ? X.Big : X.Small,
                                              classMix: ja,
                                          }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: Ya },
                                          s().createElement(Ha.ko, {
                                              animationSettings: er,
                                              value: l,
                                              deltaFrom: l - a,
                                              maxValue: o,
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: Ka },
                                      s().createElement('div', { className: Za }),
                                      s().createElement(
                                          'div',
                                          { className: Ja },
                                          R.strings.menu.browser.dataUnavailable.description(),
                                      ),
                                  ),
                        );
                    }),
                    nr = {
                        base: 'QuestsContent_base_39',
                        header: 'QuestsContent_header_71',
                        fadeIn: 'QuestsContent_fadeIn_31',
                        title: 'QuestsContent_title_ec',
                        tab: 'QuestsContent_tab_18',
                        content: 'QuestsContent_content_bb',
                    },
                    ar = R.strings.quests,
                    rr = (0, r.createContext)({}),
                    sr = (0, q.Pi)(() => {
                        const e = We(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().dailyType,
                            a = u.computes.getCurrentTabIndex(),
                            o = u.computes.getTabs();
                        if (void 0 === a) throw new Error('Can not show quests for undefined tab index.');
                        const i = (0, Pt.tp)(a, 500),
                            l = (0, r.useMemo)(() => ({ isExiting: i !== a, previousTabIndex: i }), [i, a]);
                        return s().createElement(
                            rr.Provider,
                            { value: l },
                            s().createElement(
                                'div',
                                { className: nr.base },
                                s().createElement(
                                    'div',
                                    { className: nr.header },
                                    s().createElement('div', { className: nr.title }, ar.dailyQuests.header.$dyn(n)),
                                    s().createElement(Nt, {
                                        tabs: o,
                                        active: a,
                                        onClick: (e) => {
                                            (Qe(R.sounds.dq_screen_switch()), t.tabClick(e));
                                        },
                                        classNames: { tab: nr.tab },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: nr.content },
                                    (() => {
                                        switch (i) {
                                            case fe.DailyQuests:
                                                return s().createElement(va, null);
                                            case fe.PremiumQuests:
                                                return s().createElement(La, null);
                                            default:
                                                return (console.error(`Unreachable branch in tabs index: ${i}`), null);
                                        }
                                    })(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: nr.progress },
                                    n === U.Default
                                        ? s().createElement(tr, null)
                                        : (console.error(`Unreachable branch in progress type: ${n}`), null),
                                ),
                            ),
                        );
                    }),
                    or = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                    },
                    ir = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    lr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    cr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    dr = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, r.useMemo)(() => u || {}, [u]);
                        let o = ir.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                r = lr.exec(t),
                                c = cr.exec(t),
                                d = o[1];
                            if (r && c) {
                                const e = r[0],
                                    o = e + l++ + e;
                                ((i = i.replace(t, `%(${o})`)),
                                    (a[o] = or[e]
                                        ? s().createElement(
                                              'span',
                                              { className: or[e] },
                                              s().createElement(at, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: n(e) },
                                              s().createElement(at, { text: d, binding: u }),
                                          )));
                            }
                            o = ir.exec(e);
                        }
                        return s().createElement(at, { text: i, classMix: t, binding: a });
                    }),
                    mr = R.strings.common.duration,
                    Er = {
                        base: 'TakeRewards_base_ac',
                        base__disabled: 'TakeRewards_base__disabled_ae',
                        button: 'TakeRewards_button_d4',
                        border: 'TakeRewards_border_d7',
                        glow: 'TakeRewards_glow_16',
                        content: 'TakeRewards_content_49',
                        buttonIcon: 'TakeRewards_buttonIcon_a9',
                        hightlightWrapper: 'TakeRewards_hightlightWrapper_0f',
                        hightlight: 'TakeRewards_hightlight_21',
                        slide: 'TakeRewards_slide_10',
                        countdown: 'TakeRewards_countdown_6c',
                        countdownIcon: 'TakeRewards_countdownIcon_77',
                    },
                    _r = { [$.AVAILABLE]: 'active', [$.NO_OFFERS]: 'hidden', [$.DISABLED]: 'disabled' },
                    Ar = R.strings.quests.dailyQuests.takeRewardsButton,
                    gr = (0, q.Pi)(({ className: e }) => {
                        const u = We(),
                            t = u.model,
                            n = u.controls,
                            a = t.root.get(),
                            r = a.getRewardsTimeLeft,
                            o = a.offersState,
                            i = o === $.DISABLED,
                            l = ((e, u = !0) =>
                                e.days > 7 && u
                                    ? (0, tt.WU)(mr.days(), { days: e.days })
                                    : e.days >= 1
                                      ? (0, tt.WU)(mr.days(), { days: 0 === e.hours ? e.days : e.days + 1 })
                                      : e.hours >= 1
                                        ? (0, tt.WU)(mr.hours(), { hours: 0 === e.minutes ? e.hours : e.hours + 1 })
                                        : (0, tt.WU)(mr.minutes(), { minutes: e.minutes || 1 }))((0, On.f8)(r), !1);
                        return s().createElement(
                            'div',
                            { className: b()(Er.base, e, Er[`base__${_r[o]}`]) },
                            s().createElement(
                                au,
                                { body: i ? Ar.tooltipDisable() : Ar.tooltip() },
                                s().createElement(
                                    'div',
                                    {
                                        className: Er.button,
                                        onClick: i
                                            ? void 0
                                            : () => {
                                                  (qe.playClick(), n.claimRewards());
                                              },
                                        onMouseEnter: i ? void 0 : qe.playHighlight,
                                    },
                                    !i &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: Er.border }),
                                            s().createElement('div', { className: Er.glow }),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: Er.content },
                                        s().createElement('div', { className: Er.buttonIcon }),
                                        Ar.text(),
                                    ),
                                    !i &&
                                        s().createElement(
                                            'div',
                                            { className: Er.hightlightWrapper },
                                            s().createElement('div', { className: Er.hightlight }),
                                        ),
                                ),
                            ),
                            !i &&
                                r > 0 &&
                                s().createElement(
                                    'div',
                                    { className: Er.countdown },
                                    s().createElement('div', { className: Er.countdownIcon }),
                                    s().createElement(dr, { text: Ar.countdown(), binding: { leftTime: l } }),
                                ),
                        );
                    }),
                    Fr = (0, q.Pi)(() => {
                        var e;
                        const u = We(),
                            t = u.model,
                            n = u.controls,
                            a = t.root.get(),
                            r = a.infoVisible,
                            o = a.offersState;
                        var i;
                        ((i = r ? n.infoToggle : n.close), Q(z.n.ESCAPE, i));
                        const l = null != (e = ve(t.computes.getCurrentTabIndex())) ? e : '',
                            c = (0, V.useTransition)(l, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                delay: 200,
                            });
                        return 0 === t.computes.getEnabledFeatures().length
                            ? s().createElement(yt, null)
                            : s().createElement(
                                  'div',
                                  { className: b()(Ge.base, Ge[`base__${l}`]) },
                                  c((e, u) =>
                                      s().createElement(V.animated.div, {
                                          style: e,
                                          className: b()(Ge.background, Ge[`background__${u}`]),
                                      }),
                                  ),
                                  r
                                      ? s().createElement(Bt, null)
                                      : s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(sr, null),
                                            o &&
                                                o !== $.NO_OFFERS &&
                                                s().createElement(gr, { className: Ge.rewardsButton }),
                                        ),
                                  s().createElement(su, { className: b()(Ge.infoButton, !r && Ge.infoButton__info) }),
                              );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(I, null, s().createElement(ze, null, s().createElement(Fr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            438: (e, u, t) => {
                'use strict';
                t.d(u, { L: () => k });
                var n = t(483),
                    a = t.n(n),
                    r = t(179),
                    s = t.n(r);
                const o = 'BattleConditions_base_3c',
                    i = 'BattleConditions_base__big_fd',
                    l = 'BattleConditions_description_97',
                    c = 'BattleConditions_operator_43',
                    d = 'BattleConditions_base__huge_92',
                    m = 'BattleConditions_base__reverse_1a',
                    E = 'BattleConditions_condition_e2',
                    _ = 'BattleConditions_base__bolded_92',
                    A = 'BattleConditions_conditionBlockColumn_c7',
                    g = 'BattleConditions_conditionBlockRow_a8',
                    F = 'BattleConditions_description_inlineOperator_34',
                    D = 'BattleConditions_progress_c0',
                    C = 'BattleConditions_progress__completed_1b',
                    p = 'BattleConditions_progress_current_fa',
                    B = 'BattleConditions_progress_separator_d0',
                    b = 'BattleConditions_progress_total_62',
                    f = 'BattleConditions_progressBarWrapper_85',
                    h = 'BattleConditions_timingFunction_8f';
                var v = t(875),
                    w = t(736);
                const y = ({
                        conditionData: e,
                        children: u,
                        swapProgress: t,
                        progressBarStyles: n,
                        progressInfoStyles: o,
                        progressBarTheme: i,
                        classNames: l,
                    }) => {
                        const c = e.current,
                            d = e.earned,
                            m = e.total,
                            _ = a()(D, { [C]: c === m }),
                            A = (0, r.useMemo)(
                                () =>
                                    Object.assign({}, v.uu, {
                                        line: { delay: 1e3, duration: 1e3 },
                                        delta: { className: h, delay: 200, duration: 1e3 },
                                    }),
                                [],
                            ),
                            g = t
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: a()(f, null == l ? void 0 : l.progressBar), style: n },
                                          s().createElement(v.ko, {
                                              size: w.$.Small,
                                              value: c,
                                              deltaFrom: c - d,
                                              maxValue: m,
                                              animationSettings: A,
                                              theme: i,
                                          }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: a()(_, null == l ? void 0 : l.progressInfo), style: o },
                                          s().createElement('div', { className: p }, c),
                                          s().createElement('div', { className: B }, '/'),
                                          s().createElement('div', { className: b }, m),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: a()(_, null == l ? void 0 : l.progressInfo), style: o },
                                          s().createElement('div', { className: p }, c),
                                          s().createElement('div', { className: B }, '/'),
                                          s().createElement('div', { className: b }, m),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: a()(f, null == l ? void 0 : l.progressBar), style: n },
                                          s().createElement(v.ko, {
                                              size: w.$.Small,
                                              value: c,
                                              deltaFrom: c - d,
                                              maxValue: m,
                                              animationSettings: A,
                                              theme: i,
                                          }),
                                      ),
                                  );
                        return s().createElement('div', { className: E }, m > 0 && g, u);
                    },
                    S = R.strings.quests.dailyQuests.postBattle.genericAmpersand(),
                    T = R.strings.quests.dailyQuests.postBattle.and(),
                    x = ({
                        conditions: e,
                        missionId: u,
                        columns: t,
                        depth: n,
                        inlineOperator: r,
                        align: o,
                        swapProgress: i,
                        progressBarStyles: d,
                        textStyles: m,
                        progressInfoStyles: E,
                        progressBarTheme: _,
                        inlineOperatorStyles: D,
                        useAmpersand: C,
                        classNames: p,
                    }) => {
                        if (e.items.length <= 0 || (void 0 !== n && 0 === n)) return null;
                        const B = Object.assign({}, m, { textAlign: `${o}` });
                        return s().createElement(
                            'div',
                            { className: t ? A : g },
                            e.items.map(({ value: A }, g) => {
                                const b = ((e, u, t, n) => {
                                    const a = { processMore: !0, showOperator: !1, isFirstCondition: !1 };
                                    if (u.items) t < e.items.length - 1 && (a.showOperator = !0);
                                    else {
                                        if (void 0 !== n) {
                                            for (let u = t + 1; u < e.items.length; u++)
                                                if (!e.items[u].value.items || (e.items[u].value.items && n - 1 != 0)) {
                                                    a.showOperator = !0;
                                                    break;
                                                }
                                        } else t < e.items.length - 1 && (a.showOperator = !0);
                                        ((a.processMore = !1), t || (a.isFirstCondition = !0));
                                    }
                                    return a;
                                })(e, A, g, n);
                                let f = A.descrData;
                                if (f && b.isFirstCondition) {
                                    f = `${systemLocale.toUpperCase(f[0])}${f.slice(1)}`;
                                }
                                return s().createElement(
                                    s().Fragment,
                                    { key: `${u}_${g}` },
                                    b.processMore
                                        ? s().createElement(x, {
                                              conditions: A,
                                              missionId: u,
                                              columns: !t,
                                              depth: n ? n - 1 : void 0,
                                              inlineOperator: r,
                                              align: o,
                                              swapProgress: i,
                                              progressBarStyles: d,
                                              progressBarTheme: _,
                                              textStyles: m,
                                              progressInfoStyles: E,
                                              inlineOperatorStyles: D,
                                              useAmpersand: C,
                                              classNames: p,
                                          })
                                        : s().createElement(
                                              y,
                                              {
                                                  conditionData: A,
                                                  swapProgress: i,
                                                  progressBarStyles: d,
                                                  progressInfoStyles: E,
                                                  progressBarTheme: _,
                                                  classNames: {
                                                      progressBar: null == p ? void 0 : p.progressBar,
                                                      progressInfo: null == p ? void 0 : p.progressInfo,
                                                  },
                                              },
                                              b.showOperator && r
                                                  ? s().createElement(
                                                        'div',
                                                        { className: a()(l, null == p ? void 0 : p.text), style: m },
                                                        f,
                                                        s().createElement(
                                                            'span',
                                                            { className: F, style: D },
                                                            'and' === e.conditionType && C ? S : T,
                                                        ),
                                                    )
                                                  : s().createElement(
                                                        'div',
                                                        { className: a()(l, null == p ? void 0 : p.text), style: B },
                                                        f,
                                                    ),
                                          ),
                                    b.showOperator &&
                                        !r &&
                                        s().createElement(
                                            'div',
                                            { className: c },
                                            'and' === e.conditionType && C ? S : T,
                                        ),
                                );
                            }),
                        );
                    },
                    N = x;
                var P = t(229);
                const k = ({
                    conditions: e,
                    columns: u,
                    depth: t,
                    size: n,
                    reverse: r,
                    isBold: l,
                    inlineOperator: c,
                    align: E,
                    swapProgress: A,
                    missionId: g,
                    progressBarStyles: F,
                    progressBarTheme: D,
                    textStyles: C,
                    progressInfoStyles: p,
                    inlineOperatorStyles: B,
                    useAmpersand: b,
                    className: f,
                    classNames: h,
                }) => {
                    if (0 === e.items.length) return null;
                    const v = a()(o, f, { [i]: n === P.$.BIG, [d]: n === P.$.HUGE, [m]: r, [_]: l });
                    return s().createElement(
                        'div',
                        { className: v },
                        s().createElement(N, {
                            conditions: e,
                            missionId: g,
                            columns: u,
                            depth: t,
                            inlineOperator: c,
                            align: E,
                            swapProgress: A,
                            progressBarStyles: F,
                            progressBarTheme: D,
                            inlineOperatorStyles: B,
                            textStyles: C,
                            progressInfoStyles: p,
                            useAmpersand: b,
                            classNames: h,
                        }),
                    );
                };
                k.defaultProps = { align: P.I.CENTER, swapProgress: !1, isBold: !1, columns: !1 };
            },
            229: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { $: () => a, I: () => n }),
                    (function (e) {
                        ((e.LEFT = 'left'), (e.RIGHT = 'right'), (e.CENTER = 'center'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.BIG = 'big'), (e.HUGE = 'huge'));
                    })(a || (a = {})));
            },
            411: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => l });
                var n = t(374),
                    a = t(255),
                    r = t(179),
                    s = t.n(r),
                    o = t(982),
                    i = t(963);
                const l = ({
                    startValue: e,
                    hourFormat: u = R.strings.quests.general.countdown.timer_hrs(),
                    minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                    roundUpHours: r = !1,
                    pendingDotCount: l = 5,
                    className: c,
                }) => {
                    const d = e > n.dV + n.yR ? n.yR : 1,
                        m = (0, a.au)(e, d);
                    return s().createElement(
                        'div',
                        { className: c },
                        m > 0
                            ? ((e, u, t, a) => {
                                  const r = e < n.dV ? t : u;
                                  return (0, o.G)(r, e, a);
                              })(m, u, t, r)
                            : s().createElement(i.Z, { count: l, delay: 500 }),
                    );
                };
            },
            963: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(179),
                    a = t.n(n);
                const r = ({ className: e, count: u, delay: t }) => {
                    const r = (0, n.useState)(1),
                        s = r[0],
                        o = r[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = setInterval(() => {
                                o((e) => (e <= u ? e + 1 : 1));
                            }, t);
                            return () => {
                                clearInterval(e);
                            };
                        }),
                        a().createElement('span', { className: e }, '. '.repeat(s))
                    );
                };
            },
            982: (e, u, t) => {
                'use strict';
                t.d(u, { G: () => n });
                const n = (e, u, t) => {
                    const n = Math.floor(u / 3600).toString(),
                        a = Math.floor((u % 3600) / 60).toString(),
                        r = Math.floor(u % 60).toString();
                    return e
                        .replace('%HH', n.padStart(2, '0'))
                        .replace('%H', t && Number(a) >= 30 ? (Number(n) + 1).toString() : n)
                        .replace('%MM', a.padStart(2, '0'))
                        .replace('%M', a.toString())
                        .replace('%SS', r.padStart(2, '0'))
                        .replace('%S', r);
                };
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 476),
        (() => {
            var e = { 476: 0, 320: 0, 428: 0, 993: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [45], () => __webpack_require__(181));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
