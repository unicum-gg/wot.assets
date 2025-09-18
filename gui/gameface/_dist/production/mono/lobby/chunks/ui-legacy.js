import { r as e, R as t, f as a } from './vendor.js';
var n = {
        d: (e, t) => {
            for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    },
    r = {};
n.d(r, { SG: () => p, ko: () => T, VF: () => _, $u: () => g, uu: () => K, uH: () => L });
const s = ((o = { default: () => a }), (i = {}), n.d(i, o), i);
var o, i;
const l =
        ((d = {
            default: () => t,
            memo: () => e.memo,
            useCallback: () => e.useCallback,
            useEffect: () => e.useEffect,
            useMemo: () => e.useMemo,
            useRef: () => e.useRef,
            useState: () => e.useState,
        }),
        (u = {}),
        n.d(u, d),
        u),
    m = {
        base: 'ProgressBar-ProgressBar_base_45',
        base__small: 'ProgressBar-ProgressBar_base__small_df',
        background: 'ProgressBar-ProgressBar_background_51',
        background__small: 'ProgressBar-ProgressBar_background__small_46',
        lineWrapper: 'ProgressBar-ProgressBar_lineWrapper_6a',
    };
var d, u;
let g = (function (e) {
        return ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e);
    })({}),
    c = (function (e) {
        return ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e);
    })({});
const f = ({ size: e = g.Default }) => {
        const t = (0, s.default)(m.background, m[`background__${e}`]);
        return l.default.createElement('div', { className: t });
    },
    b = (e, t) => {
        let a;
        const n = setTimeout(() => {
            a = e();
        }, t);
        return () => {
            ('function' == typeof a && a(), clearTimeout(n));
        };
    };
let p = (function (e) {
        return ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e);
    })({}),
    _ = (function (e) {
        return ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e);
    })({});
const h = { base: 'ProgressBar-ProgressBarBlink_base_24', base__small: 'ProgressBar-ProgressBarBlink_base__small_0f' },
    E = ({ size: e }) => {
        const t = (0, s.default)(h.base, h[`base__${e}`]);
        return l.default.createElement('div', { className: t });
    },
    w = (0, l.memo)(
        ({
            transitionDuration: e,
            transitionDelay: t,
            freezed: a,
            from: n,
            size: r,
            to: s,
            onEndAnimation: o,
            onChangeAnimationState: i,
        }) => {
            const m = s < n,
                d = (0, l.useState)(_.Idle),
                u = d[0],
                g = d[1],
                c = u === _.In,
                f = u === _.End,
                p = u === _.Idle,
                h = (0, l.useCallback)(
                    (e) => {
                        (g(e), i && i(e));
                    },
                    [i],
                );
            ((0, l.useEffect)(() => {
                if (p && !a)
                    return b(() => {
                        h(_.In);
                    }, t);
            }, [h, a, p, t]),
                (0, l.useEffect)(() => {
                    if (c)
                        return b(() => {
                            (o && o(), h(_.End));
                        }, e + t);
                }, [h, c, o, t, e]));
            const w = (0, l.useMemo)(
                    () => ({
                        width: '100%',
                        transitionDuration: `${e}ms`,
                        transitionDelay: `${t}ms`,
                        [m ? 'left' : 'right']: '0',
                    }),
                    [m, t, e],
                ),
                P = (0, l.useMemo)(
                    () => ({
                        width: '0%',
                        transitionDuration: `${e}ms`,
                        transitionDelay: `${t}ms`,
                        [m ? 'left' : 'right']: '0',
                    }),
                    [m, t, e],
                ),
                y = (0, l.useMemo)(() => ({ width: `${Math.abs(n - s)}%`, left: `${m ? s : n}%` }), [n, m, s]);
            return f
                ? null
                : l.default.createElement(
                      'div',
                      { className: 'ProgressBar-ProgressBarDeltaSimple_base_6c', style: y },
                      l.default.createElement(
                          'div',
                          { style: p ? w : P, className: 'ProgressBar-ProgressBarDeltaSimple_delta_99' },
                          l.default.createElement(E, { size: r }),
                      ),
                  );
        },
    ),
    P = {
        base: 'ProgressBar-ProgressLineImpose_base_80',
        base__disabled: 'ProgressBar-ProgressLineImpose_base__disabled_cc',
        base__finished: 'ProgressBar-ProgressLineImpose_base__finished_d4',
        base__withoutBounce: 'ProgressBar-ProgressLineImpose_base__withoutBounce_56',
        pattern: 'ProgressBar-ProgressLineImpose_pattern_1c',
        base__small: 'ProgressBar-ProgressLineImpose_base__small_55',
        gradient: 'ProgressBar-ProgressLineImpose_gradient_35',
        glow: 'ProgressBar-ProgressLineImpose_glow_a5',
        glow__left: 'ProgressBar-ProgressLineImpose_glow__left_d8',
    },
    y = (0, l.memo)(({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: r, withoutBounce: o }) => {
        const i = (0, s.default)(
                P.base,
                P[`base__${e}`],
                a && P.base__disabled,
                r && P.base__finished,
                o && P.base__withoutBounce,
            ),
            m = !a && !r;
        return l.default.createElement(
            'div',
            { className: i, style: n, ref: t },
            l.default.createElement('div', { className: P.pattern }),
            l.default.createElement('div', { className: P.gradient }),
            m && l.default.createElement(E, { size: e }),
        );
    }),
    B = (0, l.memo)(
        ({
            to: e,
            size: t,
            from: a,
            lineRef: n,
            disabled: r,
            isComplete: s,
            animationSettings: o,
            onChangeAnimationState: i,
            onEndAnimation: m,
        }) => {
            const d = (0, l.useMemo)(
                () => ({
                    width: `${e}%`,
                    transitionDuration: `${o.line.duration}ms`,
                    transitionDelay: `${o.line.delay}ms`,
                }),
                [o.line.delay, o.line.duration, e],
            );
            return l.default.createElement(
                l.default.Fragment,
                null,
                l.default.createElement(y, { size: t, lineRef: n, disabled: r, isComplete: s, baseStyles: d }),
                a >= 0 &&
                    l.default.createElement(w, {
                        transitionDuration: o.delta.duration,
                        transitionDelay: o.delta.delay,
                        freezed: o.freezed,
                        from: a,
                        size: t,
                        to: e,
                        onChangeAnimationState: i,
                        onEndAnimation: m,
                    }),
            );
        },
    ),
    S = (e) => (e ? { left: 0 } : { right: 0 }),
    v = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
    C = (e) => ({ transitionDuration: `${e}ms` }),
    $ = (0, l.memo)(
        ({
            transitionDuration: e,
            transitionDelay: t,
            freezed: a,
            from: n,
            size: r,
            to: o,
            onEndAnimation: i,
            onChangeAnimationState: m,
            className: d,
        }) => {
            const u = o < n,
                g = (0, l.useState)(p.Idle),
                c = g[0],
                f = g[1],
                _ = c === p.End,
                h = c === p.Idle,
                w = c === p.Grow,
                P = c === p.Shrink,
                y = (0, l.useCallback)(
                    (e) => {
                        (f(e), m && m(e));
                    },
                    [m],
                ),
                B = (0, l.useCallback)(
                    (e, t) =>
                        b(() => {
                            y(e);
                        }, t),
                    [y],
                );
            (0, l.useEffect)(() => {
                if (!a) return h ? B(p.Grow, t) : w ? B(p.Shrink, e) : P ? B(p.End, e) : void (_ && i && i());
            }, [B, a, _, w, h, P, i, t, e]);
            const $ = (0, l.useMemo)(() => Object.assign({ width: '100%' }, C(e), S(u)), [u, e]),
                z = (0, l.useMemo)(() => Object.assign({ width: '0%' }, C(e), S(u)), [u, e]),
                I = (0, l.useMemo)(() => Object.assign({ width: '0%' }, v(u, n), C(e)), [n, u, e]),
                k = (0, l.useMemo)(() => Object.assign({ width: `${Math.abs(o - n)}%` }, v(u, n), C(e)), [n, u, o, e]);
            if (_) return null;
            const D = (0, s.default)(
                'ProgressBar-ProgressBarDeltaGrow_base_7e',
                d,
                u && 0 === o && 'ProgressBar-ProgressBarDeltaGrow_base__withoutBounce_b5',
            );
            return l.default.createElement(
                'div',
                { style: h ? I : k, className: D },
                l.default.createElement(
                    'div',
                    { style: P ? z : $, className: 'ProgressBar-ProgressBarDeltaGrow_glow_68' },
                    l.default.createElement(E, { size: r }),
                ),
            );
        },
    ),
    z = (0, l.memo)(
        ({
            to: e,
            size: t,
            from: a,
            lineRef: n,
            disabled: r,
            isComplete: s,
            animationSettings: o,
            onEndAnimation: i,
            onChangeAnimationState: m,
        }) => {
            const d = e < a,
                u = (0, l.useState)(!1),
                g = u[0],
                c = u[1],
                f = (0, l.useCallback)(
                    (e) => {
                        (e === p.Shrink && c(!0), m && m(e));
                    },
                    [m],
                ),
                b = (0, l.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                _ = (0, l.useMemo)(
                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                    [o.line.duration, e],
                );
            return l.default.createElement(
                l.default.Fragment,
                null,
                l.default.createElement(y, {
                    size: t,
                    lineRef: n,
                    disabled: r,
                    isComplete: s,
                    withoutBounce: d && 0 === e,
                    baseStyles: g ? _ : b,
                }),
                a >= 0 &&
                    l.default.createElement($, {
                        transitionDuration: o.delta.duration,
                        transitionDelay: o.delta.delay,
                        onChangeAnimationState: f,
                        freezed: o.freezed,
                        onEndAnimation: i,
                        from: a,
                        size: t,
                        to: e,
                        className: o.delta.className,
                    }),
            );
        },
    ),
    I = ['onComplete', 'onEndAnimation'];
function k() {
    return (
        (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var a = arguments[t];
                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
              }),
        k.apply(null, arguments)
    );
}
const D = (0, l.memo)((e) => {
        let t = e.onComplete,
            a = e.onEndAnimation,
            n = (function (e, t) {
                if (null == e) return {};
                var a = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        a[n] = e[n];
                    }
                return a;
            })(e, I);
        const r = (0, l.useState)(!1),
            s = r[0],
            o = r[1],
            i = (0, l.useCallback)(() => {
                const e = 100 === n.to;
                (e !== s && o(e), e && t && t(), a && a());
            }, [s, t, a, n.to]);
        switch (n.animationSettings.type) {
            case c.Simple:
                return l.default.createElement(B, k({}, n, { onEndAnimation: i, isComplete: s }));
            case c.Growing:
                return l.default.createElement(z, k({}, n, { onEndAnimation: i, isComplete: s }));
            default:
                return null;
        }
    }),
    A = ({ size: e, value: t, lineRef: a, disabled: n, onComplete: r }) => {
        const s = (0, l.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
            o = 100 === t;
        return (
            (0, l.useEffect)(() => {
                o && r && r();
            }, [o, r]),
            l.default.createElement(y, { size: e, disabled: n, baseStyles: s, isComplete: o, lineRef: a })
        );
    },
    R = ['onEndAnimation'];
function O() {
    return (
        (O = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var a = arguments[t];
                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
              }),
        O.apply(null, arguments)
    );
}
const M = (0, l.memo)((e) => {
    let t = e.onEndAnimation,
        a = (function (e, t) {
            if (null == e) return {};
            var a = {};
            for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    a[n] = e[n];
                }
            return a;
        })(e, R);
    const n = (0, l.useRef)({}),
        r = (0, l.useCallback)(() => {
            ((n.current.from = void 0), t && t());
        }, [t]),
        s = 'number' == typeof n.current.from ? n.current.from : a.from;
    return (
        (n.current.from = s),
        l.default.createElement(
            D,
            O({}, a, { onEndAnimation: r, key: `${s}-${a.to}-${null == a ? void 0 : a.additionalKey}`, from: s }),
        )
    );
});
function j() {
    return (
        (j = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var a = arguments[t];
                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
              }),
        j.apply(null, arguments)
    );
}
const N = (0, l.memo)(
        ({
            size: e,
            value: t,
            lineRef: a,
            disabled: n,
            deltaFrom: r,
            additionalKey: s,
            animationSettings: o,
            onEndAnimation: i,
            onChangeAnimationState: m,
            onComplete: d,
        }) => {
            if (r === t)
                return l.default.createElement(A, {
                    key: `${r}-${t}-${s}`,
                    size: e,
                    value: t,
                    lineRef: a,
                    disabled: n,
                    onComplete: d,
                });
            const u = {
                from: r,
                to: t,
                size: e,
                additionalKey: s,
                lineRef: a,
                disabled: n,
                animationSettings: o,
                onComplete: d,
                onEndAnimation: i,
                onChangeAnimationState: m,
            };
            return o.withStack
                ? l.default.createElement(M, u)
                : l.default.createElement(D, j({ key: `${r}-${t}-${s}` }, u));
        },
    ),
    x = (e) => ({
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
    F = (e, t, a) => (a < e ? e : a > t ? t : a),
    G = (e, t, a) => ('number' == typeof a ? (F(0, t, a) / t) * 100 : e),
    L = {
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
    K = {
        freezed: !1,
        withStack: !1,
        type: c.Growing,
        delta: { duration: 500, delay: 0 },
        line: { duration: 500, delay: 0 },
    },
    T = (0, l.memo)(
        ({
            maxValue: e = 100,
            theme: t = L,
            size: a = g.Default,
            animationSettings: n = K,
            disabled: r = !1,
            withoutBackground: o = !1,
            value: i,
            deltaFrom: d,
            additionalKey: u,
            lineRef: c,
            onChangeAnimationState: b,
            onEndAnimation: p,
            onComplete: _,
        }) => {
            const h =
                ((E = i),
                (w = e),
                (P = d),
                (0, l.useMemo)(() => {
                    const e = (F(0, w, E) / w) * 100;
                    return { value: e, deltaFrom: G(e, w, P) };
                }, [P, w, E]));
            var E, w, P;
            return l.default.createElement(
                'div',
                { className: (0, s.default)(m.base, m[`base__${a}`]), style: x(t) },
                !o && l.default.createElement(f, { size: a }),
                l.default.createElement(N, {
                    size: a,
                    lineRef: c,
                    disabled: r,
                    value: h.value,
                    deltaFrom: h.deltaFrom,
                    additionalKey: u,
                    animationSettings: n,
                    onEndAnimation: p,
                    onChangeAnimationState: b,
                    onComplete: _,
                }),
            );
        },
    );
var V = r.uu;
export { V as H };
