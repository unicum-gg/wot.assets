'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [3820],
    {
        2308: (e, n, t) => {
            t.d(n, { ko: () => V, $u: () => l });
            var a = t(6483),
                o = t.n(a),
                r = t(6179),
                s = t.n(r);
            const i = {
                base: 'ProgressBar_base_45',
                base__small: 'ProgressBar_base__small_df',
                background: 'ProgressBar_background_51',
                background__small: 'ProgressBar_background__small_46',
                lineWrapper: 'ProgressBar_lineWrapper_6a',
            };
            let l, m;
            (!(function (e) {
                ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
            })(l || (l = {})),
                (function (e) {
                    ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                })(m || (m = {})));
            const c = ({ size: e = l.Default }) => {
                    const n = o()(i.background, i[`background__${e}`]);
                    return s().createElement('div', { className: n });
                },
                g = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                d = ({ size: e }) => {
                    const n = o()(g.base, g[`base__${e}`]);
                    return s().createElement('div', { className: n });
                },
                u = {
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
                p = (0, r.memo)(
                    ({ size: e, lineRef: n, disabled: t, baseStyles: a, isComplete: r, withoutBounce: i }) => {
                        const l = o()(
                                u.base,
                                u[`base__${e}`],
                                t && u.base__disabled,
                                r && u.base__finished,
                                i && u.base__withoutBounce,
                            ),
                            m = !t && !r;
                        return s().createElement(
                            'div',
                            { className: l, style: a, ref: n },
                            s().createElement('div', { className: u.pattern }),
                            s().createElement('div', { className: u.gradient }),
                            m && s().createElement(d, { size: e }),
                        );
                    },
                ),
                b = ({ size: e, value: n, lineRef: t, disabled: a, onComplete: o }) => {
                    const i = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                        l = 100 === n;
                    return (
                        (0, r.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        s().createElement(p, { size: e, disabled: a, baseStyles: i, isComplete: l, lineRef: t })
                    );
                };
            var _ = t(122);
            let f, h;
            (!(function (e) {
                ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
            })(f || (f = {})),
                (function (e) {
                    ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                })(h || (h = {})));
            const C = 'ProgressBarDeltaSimple_base_6c',
                w = 'ProgressBarDeltaSimple_delta_99',
                E = (0, r.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: n,
                        freezed: t,
                        from: a,
                        size: o,
                        to: i,
                        onEndAnimation: l,
                        onChangeAnimationState: m,
                    }) => {
                        const c = i < a,
                            g = (0, r.useState)(h.Idle),
                            u = g[0],
                            p = g[1],
                            b = u === h.In,
                            f = u === h.End,
                            E = u === h.Idle,
                            y = (0, r.useCallback)(
                                (e) => {
                                    (p(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, r.useEffect)(() => {
                            if (E && !t) {
                                const e = n;
                                return (0, _.F)(() => {
                                    y(h.In);
                                }, e);
                            }
                        }, [y, t, E, n]),
                            (0, r.useEffect)(() => {
                                if (b) {
                                    const t = e + n;
                                    return (0, _.F)(() => {
                                        (l && l(), y(h.End));
                                    }, t);
                                }
                            }, [y, b, l, n, e]));
                        const S = (0, r.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${n}ms`,
                                    [c ? 'left' : 'right']: '0',
                                }),
                                [c, n, e],
                            ),
                            v = (0, r.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${n}ms`,
                                    [c ? 'left' : 'right']: '0',
                                }),
                                [c, n, e],
                            ),
                            x = (0, r.useMemo)(
                                () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                [a, c, i],
                            );
                        return f
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: C, style: x },
                                  s().createElement(
                                      'div',
                                      { style: E ? S : v, className: w },
                                      s().createElement(d, { size: o }),
                                  ),
                              );
                    },
                ),
                y = (0, r.memo)(
                    ({
                        to: e,
                        size: n,
                        from: t,
                        lineRef: a,
                        disabled: o,
                        isComplete: i,
                        animationSettings: l,
                        onChangeAnimationState: m,
                        onEndAnimation: c,
                    }) => {
                        const g = (0, r.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${l.line.duration}ms`,
                                transitionDelay: `${l.line.delay}ms`,
                            }),
                            [l.line.delay, l.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(p, { size: n, lineRef: a, disabled: o, isComplete: i, baseStyles: g }),
                            t >= 0 &&
                                s().createElement(E, {
                                    transitionDuration: l.delta.duration,
                                    transitionDelay: l.delta.delay,
                                    freezed: l.freezed,
                                    from: t,
                                    size: n,
                                    to: e,
                                    onChangeAnimationState: m,
                                    onEndAnimation: c,
                                }),
                        );
                    },
                ),
                S = 'ProgressBarDeltaGrow_base_7e',
                v = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                x = 'ProgressBarDeltaGrow_glow_68',
                $ = (e) => (e ? { left: 0 } : { right: 0 }),
                B = (e, n) => (e ? { right: 100 - n + '%' } : { left: `${n}%` }),
                I = (e) => ({ transitionDuration: `${e}ms` }),
                z = (0, r.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: n,
                        freezed: t,
                        from: a,
                        size: i,
                        to: l,
                        onEndAnimation: m,
                        onChangeAnimationState: c,
                        className: g,
                    }) => {
                        const u = l < a,
                            p = (0, r.useState)(f.Idle),
                            b = p[0],
                            h = p[1],
                            C = b === f.End,
                            w = b === f.Idle,
                            E = b === f.Grow,
                            y = b === f.Shrink,
                            z = (0, r.useCallback)(
                                (e) => {
                                    (h(e), c && c(e));
                                },
                                [c],
                            ),
                            k = (0, r.useCallback)(
                                (e, n) =>
                                    (0, _.F)(() => {
                                        z(e);
                                    }, n),
                                [z],
                            );
                        (0, r.useEffect)(() => {
                            if (!t)
                                return w ? k(f.Grow, n) : E ? k(f.Shrink, e) : y ? k(f.End, e) : void (C && m && m());
                        }, [k, t, C, E, w, y, m, n, e]);
                        const D = (0, r.useMemo)(() => Object.assign({ width: '100%' }, I(e), $(u)), [u, e]),
                            P = (0, r.useMemo)(() => Object.assign({ width: '0%' }, I(e), $(u)), [u, e]),
                            A = (0, r.useMemo)(() => Object.assign({ width: '0%' }, B(u, a), I(e)), [a, u, e]),
                            F = (0, r.useMemo)(
                                () => Object.assign({ width: `${Math.abs(l - a)}%` }, B(u, a), I(e)),
                                [a, u, l, e],
                            );
                        if (C) return null;
                        const O = o()(S, g, u && 0 === l && v);
                        return s().createElement(
                            'div',
                            { style: w ? A : F, className: O },
                            s().createElement(
                                'div',
                                { style: y ? P : D, className: x },
                                s().createElement(d, { size: i }),
                            ),
                        );
                    },
                ),
                k = (0, r.memo)(
                    ({
                        to: e,
                        size: n,
                        from: t,
                        lineRef: a,
                        disabled: o,
                        isComplete: i,
                        animationSettings: l,
                        onEndAnimation: m,
                        onChangeAnimationState: c,
                    }) => {
                        const g = e < t,
                            d = (0, r.useState)(!1),
                            u = d[0],
                            b = d[1],
                            _ = (0, r.useCallback)(
                                (e) => {
                                    (e === f.Shrink && b(!0), c && c(e));
                                },
                                [c],
                            ),
                            h = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            C = (0, r.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                [l.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(p, {
                                size: n,
                                lineRef: a,
                                disabled: o,
                                isComplete: i,
                                withoutBounce: g && 0 === e,
                                baseStyles: u ? C : h,
                            }),
                            t >= 0 &&
                                s().createElement(z, {
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
                D = ['onComplete', 'onEndAnimation'];
            function P() {
                return (
                    (P = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                              }
                              return e;
                          }),
                    P.apply(null, arguments)
                );
            }
            const A = (0, r.memo)((e) => {
                    let n = e.onComplete,
                        t = e.onEndAnimation,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (n.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, D);
                    const o = (0, r.useState)(!1),
                        i = o[0],
                        l = o[1],
                        c = (0, r.useCallback)(() => {
                            const e = 100 === a.to;
                            (e !== i && l(e), e && n && n(), t && t());
                        }, [i, n, t, a.to]);
                    switch (a.animationSettings.type) {
                        case m.Simple:
                            return s().createElement(y, P({}, a, { onEndAnimation: c, isComplete: i }));
                        case m.Growing:
                            return s().createElement(k, P({}, a, { onEndAnimation: c, isComplete: i }));
                        default:
                            return null;
                    }
                }),
                F = ['onEndAnimation'];
            function O() {
                return (
                    (O = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                              }
                              return e;
                          }),
                    O.apply(null, arguments)
                );
            }
            const R = (0, r.memo)((e) => {
                let n = e.onEndAnimation,
                    t = (function (e, n) {
                        if (null == e) return {};
                        var t = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (n.indexOf(a) >= 0) continue;
                                t[a] = e[a];
                            }
                        return t;
                    })(e, F);
                const a = (0, r.useRef)({}),
                    o = (0, r.useCallback)(() => {
                        ((a.current.from = void 0), n && n());
                    }, [n]),
                    i = 'number' == typeof a.current.from ? a.current.from : t.from;
                return (
                    (a.current.from = i),
                    s().createElement(A, O({}, t, { onEndAnimation: o, key: `${i}-${t.to}`, from: i }))
                );
            });
            function T() {
                return (
                    (T = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                              }
                              return e;
                          }),
                    T.apply(null, arguments)
                );
            }
            const M = (0, r.memo)(
                ({
                    size: e,
                    value: n,
                    lineRef: t,
                    disabled: a,
                    deltaFrom: o,
                    animationSettings: r,
                    onEndAnimation: i,
                    onChangeAnimationState: l,
                    onComplete: m,
                }) => {
                    if (o === n)
                        return s().createElement(b, {
                            key: `${o}-${n}`,
                            size: e,
                            value: n,
                            lineRef: t,
                            disabled: a,
                            onComplete: m,
                        });
                    const c = {
                        from: o,
                        to: n,
                        size: e,
                        lineRef: t,
                        disabled: a,
                        animationSettings: r,
                        onComplete: m,
                        onEndAnimation: i,
                        onChangeAnimationState: l,
                    };
                    return r.withStack ? s().createElement(R, c) : s().createElement(A, T({ key: `${o}-${n}` }, c));
                },
            );
            var N = t(156),
                j = t(7515);
            const G = (e, n, t) => {
                    if ('number' == typeof t) {
                        return ((0, j.u)(0, n, t) / n) * 100;
                    }
                    return e;
                },
                W = N.Gh,
                L = {
                    freezed: !1,
                    withStack: !1,
                    type: m.Growing,
                    delta: { duration: 500, delay: 0 },
                    line: { duration: 500, delay: 0 },
                },
                V = (0, r.memo)(
                    ({
                        maxValue: e = 100,
                        theme: n = W,
                        size: t = l.Default,
                        animationSettings: a = L,
                        disabled: m = !1,
                        withoutBackground: g = !1,
                        value: d,
                        deltaFrom: u,
                        lineRef: p,
                        onChangeAnimationState: b,
                        onEndAnimation: _,
                        onComplete: f,
                    }) => {
                        const h = ((e, n, t) =>
                            (0, r.useMemo)(() => {
                                const a = ((0, j.u)(0, n, e) / n) * 100;
                                return { value: a, deltaFrom: G(a, n, t) };
                            }, [t, n, e]))(d, e, u);
                        return s().createElement(
                            'div',
                            { className: o()(i.base, i[`base__${t}`]), style: (0, N.VQ)(n) },
                            !g && s().createElement(c, { size: t }),
                            s().createElement(M, {
                                size: t,
                                lineRef: p,
                                disabled: m,
                                value: h.value,
                                deltaFrom: h.deltaFrom,
                                animationSettings: a,
                                onEndAnimation: _,
                                onChangeAnimationState: b,
                                onComplete: f,
                            }),
                        );
                    },
                );
        },
        156: (e, n, t) => {
            t.d(n, { Gh: () => o, VQ: () => a, Yy: () => r });
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
                o = {
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
                    line: { bgColorBase: '#005aca', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                    pattern: {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_blue',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                    },
                    glow: 'R.images.gui.maps.icons.components.progress_bar.glow_blue',
                    glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small_blue',
                    delta: {
                        color: '#c2ffff',
                        shadow: '0 0 4px 1px #00e4ff66, 0 0 9px 1px #00c6ff66, 0 0 12px 2px #00a8ff66, 0 0 12px 4px #0b5aca66',
                    },
                };
        },
        406: (e, n, t) => {
            t.d(n, { B: () => m });
            var a = t(280),
                o = t(6179),
                r = t.n(o);
            const s = {
                    creamColor: 'FormatTextWithColorTags_creamColor_8f',
                    brownColor: 'FormatTextWithColorTags_brownColor_90',
                    credColor: 'FormatTextWithColorTags_credColor_a7',
                    blueColor: 'FormatTextWithColorTags_blueColor_73',
                    lightBlueColor: 'FormatTextWithColorTags_lightBlueColor_fa',
                    goldColor: 'FormatTextWithColorTags_goldColor_d6',
                    grayColor: 'FormatTextWithColorTags_grayColor_8b',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_4b',
                    bondColor: 'FormatTextWithColorTags_bondColor_53',
                    yellowColor: 'FormatTextWithColorTags_yellowColor_84',
                },
                i = ['text', 'binding', 'className'];
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = arguments[n];
                                  for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                              }
                              return e;
                          }),
                    l.apply(null, arguments)
                );
            }
            const m = (0, o.memo)((e) => {
                let n = e.text,
                    t = e.binding,
                    o = e.className,
                    m = (function (e, n) {
                        if (null == e) return {};
                        var t = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (n.indexOf(a) >= 0) continue;
                                t[a] = e[a];
                            }
                        return t;
                    })(e, i);
                const c = ((e, n) => {
                        const t =
                                /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                            o = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                            i = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                            l = n ? Object.assign({}, n) : {};
                        let m = t.exec(e),
                            c = e,
                            g = 0;
                        for (; m; ) {
                            const u = m[0],
                                p = o.exec(u),
                                b = i.exec(u),
                                _ = m[1];
                            if (p && b) {
                                const e = p[0],
                                    t = e + g++ + b[0].replaceAll(')', '') + e;
                                ((c = c.replace(u, `%(${t})`)),
                                    (l[t] = s[e]
                                        ? r().createElement(
                                              'span',
                                              { className: s[e] },
                                              r().createElement(a.z, { text: _, binding: n }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: ((d = e), { color: `#${d}` }) },
                                              r().createElement(a.z, { text: _, binding: n }),
                                          )));
                            }
                            m = t.exec(e);
                        }
                        var d;
                        return [c, l];
                    })(n, t),
                    g = c[0],
                    d = c[1];
                return r().createElement(a.z, l({ text: g, classMix: o, binding: d }, m));
            });
        },
    },
]);
