(() => {
    'use strict';
    var e,
        n = {
            7515: (e, n, t) => {
                t.d(n, { u: () => a });
                const a = (e, n, t) => (t < e ? e : t > n ? n : t);
            },
            122: (e, n, t) => {
                t.d(n, { F: () => a });
                const a = (e, n) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, n);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(a));
                    };
                };
            },
            6128: (e, n, t) => {
                var a = t(6483),
                    r = t.n(a),
                    s = t(6179),
                    o = t.n(s),
                    i = t(9960),
                    l = t(3724),
                    m = t(6840);
                const d = {
                        base: 'ProgressBarBlink_base_22',
                        base__medium: 'ProgressBarBlink_base__medium_0a',
                        base__small: 'ProgressBarBlink_base__small_b5',
                    },
                    u = ({ size: e }) => {
                        const n = r()(d.base, d[`base__${e}`]);
                        return o().createElement('div', { className: n });
                    },
                    c = {
                        base: 'ProgressLineImpose_base_12',
                        base__disabled: 'ProgressLineImpose_base__disabled_82',
                        base__finished: 'ProgressLineImpose_base__finished_0f',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_e3',
                        pattern: 'ProgressLineImpose_pattern_0c',
                        base__small: 'ProgressLineImpose_base__small_7a',
                        gradient: 'ProgressLineImpose_gradient_f7',
                        glow: 'ProgressLineImpose_glow_b5',
                        glow__left: 'ProgressLineImpose_glow__left_4a',
                    },
                    g = (0, s.memo)(
                        ({ size: e, lineRef: n, disabled: t, baseStyles: a, isComplete: s, withoutBounce: i }) => {
                            const l = r()(
                                    c.base,
                                    c[`base__${e}`],
                                    t && c.base__disabled,
                                    s && c.base__finished,
                                    i && c.base__withoutBounce,
                                ),
                                m = !t && !s;
                            return o().createElement(
                                'div',
                                { className: l, style: a, ref: n },
                                o().createElement('div', { className: c.pattern }),
                                o().createElement('div', { className: c.gradient }),
                                m && o().createElement(u, { size: e }),
                            );
                        },
                    );
                var p = t(122);
                let b, f;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(b || (b = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(f || (f = {})));
                const _ = (e) => (e ? { left: 0 } : { right: 0 }),
                    h = (e, n) => (e ? { right: 100 - n + '%' } : { left: `${n}%` }),
                    v = (e) => ({ transitionDuration: `${e}ms` }),
                    w = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: n,
                            freezed: t,
                            from: a,
                            size: i,
                            to: l,
                            onEndAnimation: m,
                            onChangeAnimationState: d,
                            className: c,
                        }) => {
                            const g = l < a,
                                f = (0, s.useState)(b.Idle),
                                w = f[0],
                                E = f[1],
                                y = w === b.End,
                                C = w === b.Idle,
                                S = w === b.Grow,
                                k = w === b.Shrink,
                                $ = (0, s.useCallback)(
                                    (e) => {
                                        (E(e), d && d(e));
                                    },
                                    [d],
                                ),
                                B = (0, s.useCallback)(
                                    (e, n) =>
                                        (0, p.F)(() => {
                                            $(e);
                                        }, n),
                                    [$],
                                );
                            (0, s.useEffect)(() => {
                                if (!t)
                                    return C
                                        ? B(b.Grow, n)
                                        : S
                                          ? B(b.Shrink, e)
                                          : k
                                            ? B(b.End, e)
                                            : void (y && m && m());
                            }, [B, t, y, S, C, k, m, n, e]);
                            const P = (0, s.useMemo)(() => Object.assign({ width: '100%' }, v(e), _(g)), [g, e]),
                                z = (0, s.useMemo)(() => Object.assign({ width: '0%' }, v(e), _(g)), [g, e]),
                                I = (0, s.useMemo)(() => Object.assign({ width: '0%' }, h(g, a), v(e)), [a, g, e]),
                                D = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(l - a)}%` }, h(g, a), v(e)),
                                    [a, g, l, e],
                                );
                            if (y) return null;
                            const O = r()(
                                'ProgressBarDeltaGrow_base_2a',
                                c,
                                g && 0 === l && 'ProgressBarDeltaGrow_base__withoutBounce_fd',
                            );
                            return o().createElement(
                                'div',
                                { style: C ? I : D, className: O },
                                o().createElement(
                                    'div',
                                    { style: k ? z : P, className: 'ProgressBarDeltaGrow_glow_37' },
                                    o().createElement(u, { size: i }),
                                ),
                            );
                        },
                    ),
                    E = (0, s.memo)(
                        ({
                            to: e,
                            size: n,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: i,
                            animationSettings: l,
                            onEndAnimation: m,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < t,
                                c = (0, s.useState)(!1),
                                p = c[0],
                                f = c[1],
                                _ = (0, s.useCallback)(
                                    (e) => {
                                        (e === b.Shrink && f(!0), d && d(e));
                                    },
                                    [d],
                                ),
                                h = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                v = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(g, {
                                    size: n,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: i,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: p ? v : h,
                                }),
                                t >= 0 &&
                                    o().createElement(w, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: l.freezed,
                                        onEndAnimation: m,
                                        from: t,
                                        size: n,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    y = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: n,
                            freezed: t,
                            from: a,
                            size: r,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: m,
                        }) => {
                            const d = i < a,
                                c = (0, s.useState)(f.Idle),
                                g = c[0],
                                b = c[1],
                                _ = g === f.In,
                                h = g === f.End,
                                v = g === f.Idle,
                                w = (0, s.useCallback)(
                                    (e) => {
                                        (b(e), m && m(e));
                                    },
                                    [m],
                                );
                            ((0, s.useEffect)(() => {
                                if (v && !t) {
                                    const e = n;
                                    return (0, p.F)(() => {
                                        w(f.In);
                                    }, e);
                                }
                            }, [w, t, v, n]),
                                (0, s.useEffect)(() => {
                                    if (_) {
                                        const t = e + n;
                                        return (0, p.F)(() => {
                                            (l && l(), w(f.End));
                                        }, t);
                                    }
                                }, [w, _, l, n, e]));
                            const E = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${n}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, n, e],
                                ),
                                y = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${n}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, n, e],
                                ),
                                C = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${d ? i : a}%` }),
                                    [a, d, i],
                                );
                            return h
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_81', style: C },
                                      o().createElement(
                                          'div',
                                          { style: v ? E : y, className: 'ProgressBarDeltaSimple_delta_c8' },
                                          o().createElement(u, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    C = (0, s.memo)(
                        ({
                            to: e,
                            size: n,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: i,
                            animationSettings: l,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(g, {
                                    size: n,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: i,
                                    baseStyles: u,
                                }),
                                t >= 0 &&
                                    o().createElement(y, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: t,
                                        size: n,
                                        to: e,
                                        onChangeAnimationState: m,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    S = ['onComplete', 'onEndAnimation'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const $ = (0, s.memo)((e) => {
                        let n = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((t = s[a]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, S);
                        const r = (0, s.useState)(!1),
                            i = r[0],
                            l = r[1],
                            d = (0, s.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== i && l(e), e && n && n(), t && t());
                            }, [i, n, t, a.to]);
                        switch (a.animationSettings.type) {
                            case m.r.Simple:
                                return o().createElement(
                                    C,
                                    k({}, a, { onEndAnimation: d, isComplete: !a.isNeverComplete && i }),
                                );
                            case m.r.Growing:
                                return o().createElement(
                                    E,
                                    k({}, a, { onEndAnimation: d, isComplete: !a.isNeverComplete && i }),
                                );
                            default:
                                return null;
                        }
                    }),
                    B = ({ size: e, value: n, lineRef: t, disabled: a, onComplete: r, isNeverComplete: i }) => {
                        const l = (0, s.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                            m = 100 === n;
                        return (
                            (0, s.useEffect)(() => {
                                m && r && r();
                            }, [m, r]),
                            o().createElement(g, {
                                size: e,
                                disabled: a,
                                baseStyles: l,
                                isComplete: !i && m,
                                lineRef: t,
                            })
                        );
                    },
                    P = ['onEndAnimation'];
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                const I = (0, s.memo)((e) => {
                    let n = e.onEndAnimation,
                        t = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((t = s[a]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, P);
                    const a = (0, s.useRef)({}),
                        r = (0, s.useCallback)(() => {
                            ((a.current.from = void 0), n && n());
                        }, [n]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        o().createElement($, z({}, t, { onEndAnimation: r, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const O = (0, s.memo)(
                    ({
                        size: e,
                        value: n,
                        lineRef: t,
                        disabled: a,
                        deltaFrom: r,
                        animationSettings: s,
                        onEndAnimation: i,
                        onChangeAnimationState: l,
                        onComplete: m,
                        isNeverComplete: d,
                    }) => {
                        if (r === n)
                            return o().createElement(B, {
                                key: `${r}-${n}`,
                                size: e,
                                value: n,
                                lineRef: t,
                                disabled: a,
                                onComplete: m,
                                isNeverComplete: d,
                            });
                        const u = {
                            from: r,
                            to: n,
                            size: e,
                            lineRef: t,
                            disabled: a,
                            animationSettings: s,
                            onComplete: m,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            isNeverComplete: d,
                        };
                        return s.withStack ? o().createElement(I, u) : o().createElement($, D({ key: `${r}-${n}` }, u));
                    },
                );
                var A = t(4553),
                    N = t(7515);
                const j = (e, n, t) => ('number' == typeof t ? ((0, N.u)(0, n, t) / n) * 100 : e),
                    M = A.Gh,
                    R = {
                        freezed: !1,
                        withStack: !1,
                        type: m.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    };
                (0, s.memo)(
                    ({
                        maxValue: e = 100,
                        theme: n = M,
                        size: t = m.$.Default,
                        animationSettings: a = R,
                        disabled: d = !1,
                        withoutBackground: u = !1,
                        progressBarBackgroundClassMix: c,
                        value: g,
                        deltaFrom: p,
                        lineRef: b,
                        onChangeAnimationState: f,
                        onEndAnimation: _,
                        onComplete: h,
                        isNeverComplete: v,
                    }) => {
                        const w = ((e, n, t) =>
                            (0, s.useMemo)(() => {
                                const a = ((0, N.u)(0, n, e) / n) * 100;
                                return { value: a, deltaFrom: j(a, n, t) };
                            }, [t, n, e]))(g, e, p);
                        return o().createElement(
                            'div',
                            { className: r()(i.Z.base, i.Z[`base__${t}`]), style: (0, A.VQ)(n) },
                            !u && o().createElement(l.J, { size: t, classMix: c }),
                            o().createElement(O, {
                                size: t,
                                lineRef: b,
                                disabled: d,
                                value: w.value,
                                deltaFrom: w.deltaFrom,
                                animationSettings: a,
                                onEndAnimation: _,
                                onChangeAnimationState: f,
                                onComplete: h,
                                isNeverComplete: v,
                            }),
                        );
                    },
                );
            },
            3724: (e, n, t) => {
                t.d(n, { J: () => m });
                var a = t(6483),
                    r = t.n(a),
                    s = t(6179),
                    o = t.n(s),
                    i = t(9960),
                    l = t(6840);
                const m = ({ size: e = l.$.Default, classMix: n }) =>
                    o().createElement('div', { className: r()(i.Z.background, i.Z[`background__${e}`], n) });
            },
            4553: (e, n, t) => {
                t.d(n, { Gh: () => r, VQ: () => a });
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
            6840: (e, n, t) => {
                let a, r;
                (t.d(n, { $: () => a, r: () => r }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(r || (r = {})));
            },
            9960: (e, n, t) => {
                t.d(n, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_e9',
                    base__medium: 'ProgressBar_base__medium_f7',
                    base__small: 'ProgressBar_base__small_75',
                    background: 'ProgressBar_background_12',
                    background__medium: 'ProgressBar_background__medium_c7',
                    background__small: 'ProgressBar_background__small_d4',
                    lineWrapper: 'ProgressBar_lineWrapper_2a',
                };
            },
        },
        t = {};
    function a(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var s = (t[e] = { exports: {} });
        return (n[e](s, s.exports, a), s.exports);
    }
    ((a.m = n),
        (e = []),
        (a.O = (n, t, r, s) => {
            if (!t) {
                var o = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, s] = e[d], i = !0, l = 0; l < t.length; l++)
                        (!1 & s || o >= s) && Object.keys(a.O).every((e) => a.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((i = !1), s < o && (o = s));
                    if (i) {
                        e.splice(d--, 1);
                        var m = r();
                        void 0 !== m && (n = m);
                    }
                }
                return n;
            }
            s = s || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
            e[d] = [t, r, s];
        }),
        (a.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (a.d(n, { a: n }), n);
        }),
        (a.d = (e, n) => {
            for (var t in n) a.o(n, t) && !a.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (a.j = 849),
        (() => {
            var e = { 849: 0 };
            a.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        s,
                        [o, i, l] = t,
                        m = 0;
                    if (o.some((n) => 0 !== e[n])) {
                        for (r in i) a.o(i, r) && (a.m[r] = i[r]);
                        if (l) var d = l(a);
                    }
                    for (n && n(t); m < o.length; m++) ((s = o[m]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0));
                    return a.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = a.O(void 0, [503], () => a(6128));
    r = a.O(r);
})();
