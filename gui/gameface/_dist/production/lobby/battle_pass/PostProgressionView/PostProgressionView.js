(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7727),
                    s = t(7363),
                    i = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: a,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                    isFocused: F = !1,
                    type: g = l.L.primary,
                    soundHover: D = 'highlight',
                    soundClick: C = 'play',
                }) => {
                    const p = (0, s.useRef)(null),
                        b = (0, s.useState)(F),
                        B = b[0],
                        h = b[1],
                        v = (0, s.useState)(!1),
                        f = v[0],
                        w = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                B && null !== p.current && !p.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, s.useEffect)(() => {
                            h(F);
                        }, [F]),
                        i().createElement(
                            'div',
                            {
                                ref: p,
                                className: r()(
                                    o.Z.base,
                                    o.Z[`base__${g}`],
                                    t && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    B && o.Z.base__focus,
                                    f && o.Z.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== D && (0, n.G)(D), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    t || (_ && _(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== C && (0, n.G)(C),
                                        E && E(e),
                                        F && (t || (p.current && (p.current.focus(), h(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (m && m(e), w(!1));
                                },
                                onClick: function (e) {
                                    t || (A && A(e));
                                },
                            },
                            g !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: r()(o.Z.state, o.Z.state__default) },
                                i().createElement('span', { className: o.Z.stateDisabled }),
                                i().createElement('span', { className: o.Z.stateHighlightHover }),
                                i().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, u, t) => {
                let a, r;
                (t.d(u, { L: () => a, q: () => r }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(r || (r = {})));
            },
            2372: (e, u, t) => {
                t.d(u, { A: () => r });
                var a = t(9916);
                const r = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? a.B3.GOLD : a.B3.INTEGRAL;
                        })(u),
                        r = a.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== r ? r : null;
                };
            },
            280: (e, u, t) => {
                t.d(u, { z: () => l });
                var a = t(6483),
                    r = t.n(a),
                    n = t(3649),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: a = n.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, n.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: r()(o.Z.base, t), key: `${u}-${l}` },
                                (0, n.Uw)(u, a, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                t.d(u, { z: () => a.z });
                var a = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                t(3649);
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => o });
                var a = t(3138),
                    r = t(7363),
                    n = t(1043),
                    s = t(5262);
                const i = (function (e = a.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, s.T)(u, t, n.j));
                    })(),
                    o = (0, r.createContext)(i);
            },
            1039: (e, u, t) => {
                (t(3138), t(7363), t(3495));
            },
            6010: (e, u, t) => {
                var a = t(7363),
                    r = t(7382),
                    n = t(3495);
                const s = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    const i = (0, a.useContext)(n.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        E = i.extraSmall,
                        _ = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        g = i.extraSmallWidth,
                        D = i.extraLargeHeight,
                        C = i.largeHeight,
                        p = i.mediumHeight,
                        b = i.smallHeight,
                        B = i.extraSmallHeight,
                        h = { extraLarge: D, large: C, medium: p, small: b, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && E) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, r.H)(u, t, h);
                        if (t.largeWidth && m) return (0, r.H)(u, t, h);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, h);
                        if (t.smallWidth && F) return (0, r.H)(u, t, h);
                        if (t.extraSmallWidth && g) return (0, r.H)(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && b) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                });
            },
            7382: (e, u, t) => {
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                t.d(u, { YN: () => a.Y });
                (t(6010), t(1039));
                var a = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var a;
                function r(e, u, t) {
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
                (t.d(u, { T: () => r }),
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
                    })(a || (a = {})));
            },
            8910: (e, u, t) => {
                t.d(u, { _e: () => C, MR: () => g });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7515),
                    s = t(7363),
                    i = t.n(s),
                    o = t(1975),
                    l = t(7442),
                    c = t(156);
                const d = 'OptimizedProgressBar_base_1f',
                    E = 'OptimizedProgressBar_wrapper_ab',
                    _ = 'OptimizedProgressBar_backgroundWrapper_b6',
                    m = 'OptimizedProgressBar_background_ce';
                t(7736);
                const A = ['api', 'value', 'maxValue', 'theme', 'className'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const g = () => ({ update: () => {} }),
                    D = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    C = (e) => {
                        let u = e.api,
                            t = e.value,
                            a = e.maxValue,
                            g = void 0 === a ? 100 : a,
                            C = e.theme,
                            p = void 0 === C ? o.uH : C,
                            b = e.className,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const h = (0, s.useRef)(null),
                            v = (0, s.useRef)(null),
                            f = (0, s.useRef)(null),
                            w = (0, n.u)(0, t, g) / g,
                            P = (0, s.useCallback)(
                                (e) => {
                                    (f.current &&
                                        h.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, a) => {
                                            const r = (e - D(t, u)) | 0,
                                                s = (0, n.u)(0, t.offsetWidth, r);
                                            a.style.transform = `translateX(${s}px)`;
                                        })(e, h.current, f.current),
                                        v.current &&
                                            h.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: a, line: r },
                                            ) => {
                                                const s = Math.max(0, Math.floor(a.offsetWidth * t) - 8e3),
                                                    i = (e - D(a, u)) | 0,
                                                    o = (0, n.u)(0, s, i);
                                                r.style.transform = `translateX(${o}px)`;
                                            })(e, w, { line: v.current, container: h.current }));
                                },
                                [w],
                            ),
                            y = (0, s.useMemo)(() => (0, c.VQ)(p), [p]);
                        return (
                            (u.current.update = P),
                            i().createElement(
                                'div',
                                { className: r()(d, b), ref: h },
                                i().createElement(
                                    'div',
                                    { className: E },
                                    i().createElement(
                                        'div',
                                        { className: _ },
                                        i().createElement(
                                            'div',
                                            { style: y, className: m, ref: f },
                                            i().createElement(l.J, { size: B.size }),
                                        ),
                                    ),
                                    i().createElement(
                                        o.ko,
                                        F({}, B, {
                                            lineRef: v,
                                            value: t,
                                            theme: p,
                                            maxValue: g,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
            },
            1975: (e, u, t) => {
                t.d(u, { ko: () => A, uH: () => _, uu: () => m });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    s = t.n(n),
                    i = t(2468),
                    o = t(7442),
                    l = t(2407),
                    c = t(156),
                    d = t(7736),
                    E = t(1635);
                t(6823);
                const _ = c.Gh,
                    m = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = _,
                            size: t = d.$.Default,
                            animationSettings: a = m,
                            disabled: n = !1,
                            withoutBackground: A = !1,
                            value: F,
                            deltaFrom: g,
                            additionalKey: D,
                            lineRef: C,
                            onChangeAnimationState: p,
                            onEndAnimation: b,
                            onComplete: B,
                            className: h,
                        }) => {
                            const v = (0, E.S)(F, e, g);
                            return s().createElement(
                                'div',
                                { className: r()(i.Z.base, h, i.Z[`base__${t}`]), style: (0, c.VQ)(u) },
                                !A && s().createElement(o.J, { size: t }),
                                s().createElement(l.r, {
                                    size: t,
                                    lineRef: C,
                                    disabled: n,
                                    value: v.value,
                                    deltaFrom: v.deltaFrom,
                                    additionalKey: D,
                                    animationSettings: a,
                                    onEndAnimation: b,
                                    onChangeAnimationState: p,
                                    onComplete: B,
                                }),
                            );
                        },
                    );
            },
            7442: (e, u, t) => {
                t.d(u, { J: () => l });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    s = t.n(n),
                    i = t(2468),
                    o = t(7736);
                const l = ({ size: e = o.$.Default }) => {
                    const u = r()(i.Z.background, i.Z[`background__${e}`]);
                    return s().createElement('div', { className: u });
                };
            },
            8150: (e, u, t) => {
                t.d(u, { $: () => o });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    s = t.n(n),
                    i = t(8804);
                const o = ({ size: e }) => {
                    const u = r()(i.Z.base, i.Z[`base__${e}`]);
                    return s().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                t.d(u, { r: () => l });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6736),
                    s = t(5680),
                    i = t(2386);
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
                        animationSettings: d,
                        onEndAnimation: E,
                        onChangeAnimationState: _,
                        onComplete: m,
                    }) => {
                        if (l === u)
                            return r().createElement(s.M, {
                                key: `${l}-${u}-${c}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: a,
                                onComplete: m,
                            });
                        const A = {
                            from: l,
                            to: u,
                            size: e,
                            additionalKey: c,
                            lineRef: t,
                            disabled: a,
                            animationSettings: d,
                            onComplete: m,
                            onEndAnimation: E,
                            onChangeAnimationState: _,
                        };
                        return d.withStack
                            ? r().createElement(i.F, A)
                            : r().createElement(n.H, o({ key: `${l}-${u}-${c}` }, A));
                    },
                );
            },
            1848: (e, u, t) => {
                t.d(u, { t: () => l });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    s = t.n(n),
                    i = t(8150),
                    o = t(6664);
                const l = (0, n.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: l }) => {
                        const c = r()(
                                o.Z.base,
                                o.Z[`base__${e}`],
                                t && o.Z.base__disabled,
                                n && o.Z.base__finished,
                                l && o.Z.base__withoutBounce,
                            ),
                            d = !t && !n;
                        return s().createElement(
                            'div',
                            { className: c, style: a, ref: u },
                            s().createElement('div', { className: o.Z.pattern }),
                            s().createElement('div', { className: o.Z.gradient }),
                            d && s().createElement(i.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                t.d(u, { O: () => m });
                var a = t(6483),
                    r = t.n(a),
                    n = t(122),
                    s = t(7363),
                    i = t.n(s),
                    o = t(8150),
                    l = t(6823),
                    c = t(6147);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    E = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    _ = (e) => ({ transitionDuration: `${e}ms` }),
                    m = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: m,
                            to: A,
                            onEndAnimation: F,
                            onChangeAnimationState: g,
                            className: D,
                        }) => {
                            const C = A < a,
                                p = (0, s.useState)(l.S.Idle),
                                b = p[0],
                                B = p[1],
                                h = b === l.S.End,
                                v = b === l.S.Idle,
                                f = b === l.S.Grow,
                                w = b === l.S.Shrink,
                                P = (0, s.useCallback)(
                                    (e) => {
                                        (B(e), g && g(e));
                                    },
                                    [g],
                                ),
                                y = (0, s.useCallback)(
                                    (e, u) =>
                                        (0, n.F)(() => {
                                            P(e);
                                        }, u),
                                    [P],
                                );
                            (0, s.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? y(l.S.Grow, u)
                                        : f
                                          ? y(l.S.Shrink, e)
                                          : w
                                            ? y(l.S.End, e)
                                            : void (h && F && F());
                            }, [y, t, h, f, v, w, F, u, e]);
                            const S = (0, s.useMemo)(() => Object.assign({ width: '100%' }, _(e), d(C)), [C, e]),
                                k = (0, s.useMemo)(() => Object.assign({ width: '0%' }, _(e), d(C)), [C, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, E(C, a), _(e)), [a, C, e]),
                                T = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, E(C, a), _(e)),
                                    [a, C, A, e],
                                );
                            if (h) return null;
                            const N = r()(c.Z.base, D, C && 0 === A && c.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: v ? R : T, className: N },
                                i().createElement(
                                    'div',
                                    { style: w ? k : S, className: c.Z.glow },
                                    i().createElement(o.$, { size: m }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                t.d(u, { x: () => l });
                var a = t(122),
                    r = t(7363),
                    n = t.n(r),
                    s = t(8150),
                    i = t(6823),
                    o = t(9919);
                const l = (0, r.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: c,
                        to: d,
                        onEndAnimation: E,
                        onChangeAnimationState: _,
                    }) => {
                        const m = d < l,
                            A = (0, r.useState)(i.V.Idle),
                            F = A[0],
                            g = A[1],
                            D = F === i.V.In,
                            C = F === i.V.End,
                            p = F === i.V.Idle,
                            b = (0, r.useCallback)(
                                (e) => {
                                    (g(e), _ && _(e));
                                },
                                [_],
                            );
                        ((0, r.useEffect)(() => {
                            if (p && !t) {
                                const e = u;
                                return (0, a.F)(() => {
                                    b(i.V.In);
                                }, e);
                            }
                        }, [b, t, p, u]),
                            (0, r.useEffect)(() => {
                                if (D) {
                                    const t = e + u;
                                    return (0, a.F)(() => {
                                        (E && E(), b(i.V.End));
                                    }, t);
                                }
                            }, [b, D, E, u, e]));
                        const B = (0, r.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            h = (0, r.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            v = (0, r.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${m ? d : l}%` }),
                                [l, m, d],
                            );
                        return C
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: o.Z.base, style: v },
                                  n().createElement(
                                      'div',
                                      { style: p ? B : h, className: o.Z.delta },
                                      n().createElement(s.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                t.d(u, { F: () => o });
                var a = t(7363),
                    r = t.n(a),
                    n = t(1848),
                    s = t(2434),
                    i = t(6823);
                const o = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: o,
                        disabled: l,
                        isComplete: c,
                        animationSettings: d,
                        onEndAnimation: E,
                        onChangeAnimationState: _,
                    }) => {
                        const m = e < t,
                            A = (0, a.useState)(!1),
                            F = A[0],
                            g = A[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (e === i.S.Shrink && g(!0), _ && _(e));
                                },
                                [_],
                            ),
                            C = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            p = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(n.t, {
                                size: u,
                                lineRef: o,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: m && 0 === e,
                                baseStyles: F ? p : C,
                            }),
                            t >= 0 &&
                                r().createElement(s.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: D,
                                    freezed: d.freezed,
                                    onEndAnimation: E,
                                    from: t,
                                    size: u,
                                    to: e,
                                    className: d.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, u, t) => {
                t.d(u, { D: () => i });
                var a = t(7363),
                    r = t.n(a),
                    n = t(1848),
                    s = t(5913);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: i,
                        disabled: o,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: d,
                        onEndAnimation: E,
                    }) => {
                        const _ = (0, a.useMemo)(
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
                            r().createElement(n.t, { size: u, lineRef: i, disabled: o, isComplete: l, baseStyles: _ }),
                            t >= 0 &&
                                r().createElement(s.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: t,
                                    size: u,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: E,
                                }),
                        );
                    },
                );
            },
            6736: (e, u, t) => {
                t.d(u, { H: () => c });
                var a = t(7363),
                    r = t.n(a),
                    n = t(7736),
                    s = t(538),
                    i = t(828);
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
                    const d = (0, a.useState)(!1),
                        E = d[0],
                        _ = d[1],
                        m = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== E && _(e), e && u && u(), t && t());
                        }, [E, u, t, c.to]);
                    switch (c.animationSettings.type) {
                        case n.r.Simple:
                            return r().createElement(i.D, l({}, c, { onEndAnimation: m, isComplete: E }));
                        case n.r.Growing:
                            return r().createElement(s.F, l({}, c, { onEndAnimation: m, isComplete: E }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
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
                t.d(u, { F: () => o });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6736);
                const s = ['onEndAnimation'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
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
                        })(e, s);
                    const o = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            ((o.current.from = void 0), u && u());
                        }, [u]),
                        c = 'number' == typeof o.current.from ? o.current.from : t.from;
                    return (
                        (o.current.from = c),
                        r().createElement(
                            n.H,
                            i({}, t, {
                                onEndAnimation: l,
                                key: `${c}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            5680: (e, u, t) => {
                t.d(u, { M: () => s });
                var a = t(7363),
                    r = t.n(a),
                    n = t(1848);
                const s = ({ size: e, value: u, lineRef: t, disabled: s, onComplete: i }) => {
                    const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, a.useEffect)(() => {
                            l && i && i();
                        }, [l, i]),
                        r().createElement(n.t, { size: e, disabled: s, baseStyles: o, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                t.d(u, { Gh: () => r, VQ: () => a });
                const a = (e) => {
                        var u, t, a, r, n, s, i, o, l, c, d, E, _, m, A, F, g, D, C, p;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (r = e.bg) ? void 0 : r.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (n = e.line.filter) ? n : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (s = e.pattern.size) ? s : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (o = e.pattern.gradient)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (_ = null == (m = e.glowSettings) ? void 0 : m.height) ? _ : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (F = e.glowSettings) ? void 0 : F.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (g = null == (D = e.glowSettings) ? void 0 : D.smallHeight) ? g : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (C = null == (p = e.glowSettings) ? void 0 : p.mixBlendMode) ? C : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
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
                t.d(u, { S: () => s });
                var a = t(7515),
                    r = t(7363);
                const n = (e, u, t) => {
                    if ('number' == typeof t) {
                        return ((0, a.u)(0, u, t) / u) * 100;
                    }
                    return e;
                };
                function s(e, u, t) {
                    return (0, r.useMemo)(() => {
                        const r = ((0, a.u)(0, u, e) / u) * 100;
                        return { value: r, deltaFrom: n(r, u, t) };
                    }, [t, u, e]);
                }
            },
            5739: (e, u, t) => {
                t.d(u, { Q: () => d });
                var a = t(6483),
                    r = t.n(a),
                    n = t(7363),
                    s = t.n(n),
                    i = t(3415),
                    o = t(2862),
                    l = t(729),
                    c = t(1609);
                const d = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: a = o.h2.Big,
                    special: n,
                    value: d,
                    valueType: E,
                    title: _,
                    style: m,
                    className: A,
                    classNames: F,
                    tooltipArgs: g,
                    periodicIconTooltipArgs: D,
                }) => {
                    const C = (0, l.c$)(a, n),
                        p = (0, l.i2)(n),
                        b = (0, l.m9)(d, E);
                    return s().createElement(
                        'div',
                        {
                            className: r()(c.Z.base, c.Z[`base__${a}`], o.oy.includes(e) && c.Z.base__normalize, A),
                            style: m,
                        },
                        s().createElement(
                            i.l,
                            { tooltipArgs: g, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.image, null == F ? void 0 : F.image) },
                                    C &&
                                        s().createElement('div', {
                                            className: r()(c.Z.highlight, null == F ? void 0 : F.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${C}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: r()(c.Z.icon, null == F ? void 0 : F.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    p &&
                                        s().createElement('div', {
                                            className: r()(c.Z.overlay, null == F ? void 0 : F.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${p}_overlay)`,
                                            },
                                        }),
                                ),
                                b &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                E === o.$h.MULTI && c.Z.info__multi,
                                                null == F ? void 0 : F.info,
                                            ),
                                        },
                                        b,
                                    ),
                                _ && s().createElement('div', { className: c.Z.title }, _),
                            ),
                        ),
                        t &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: D },
                                s().createElement('div', {
                                    className: r()(c.Z.timer, null == F ? void 0 : F.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                let a, r, n, s, i, o, l, c;
                (t.d(u, { $h: () => s, A2: () => o, E4: () => a, h2: () => n, kK: () => i, oy: () => d, sh: () => l }),
                    (function (e) {
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
                    })(a || (a = {})),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(s || (s = {})),
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
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(o || (o = {})),
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
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(c || (c = {})));
                const d = [a.Attachment];
            },
            729: (e, u, t) => {
                t.d(u, { c$: () => g, i2: () => D, m9: () => C, p3: () => d, pI: () => A, ry: () => m });
                var a = t(2372),
                    r = t(7363),
                    n = t.n(r),
                    s = t(2862);
                const i = [
                        s.E4.Items,
                        s.E4.Equipment,
                        s.E4.Xp,
                        s.E4.XpFactor,
                        s.E4.Blueprints,
                        s.E4.BlueprintsAny,
                        s.E4.Goodies,
                        s.E4.Berths,
                        s.E4.Slots,
                        s.E4.Tokens,
                        s.E4.CrewSkins,
                        s.E4.CrewBooks,
                        s.E4.Customizations,
                        s.E4.CreditsFactor,
                        s.E4.TankmenXp,
                        s.E4.TankmenXpFactor,
                        s.E4.FreeXpFactor,
                        s.E4.BattleToken,
                        s.E4.LootBox,
                        s.E4.PremiumUniversal,
                        s.E4.NaturalCover,
                        s.E4.BpCoin,
                        s.E4.BattlePassSelectToken,
                        s.E4.BattlaPassFinalAchievement,
                        s.E4.BattleBadge,
                        s.E4.BattlePassTicket,
                        s.E4.BonusX5,
                        s.E4.CrewBonusX3,
                        s.E4.EpicSelectToken,
                        s.E4.Comp7TokenWeeklyReward,
                        s.E4.DeluxeGift,
                        s.E4.ModernizedDevicesT1Gift,
                        s.E4.ModernizedDevicesT2Gift,
                        s.E4.ModernizedDevicesT3Gift,
                        s.E4.BattleBoosterGift,
                        s.E4.OptionalDevice,
                        s.E4.Attachment,
                    ],
                    o = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints, s.E4.EquipCoin],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    d = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    E = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    m = (e, u = s.h2.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            i = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case s.h2.S600x450:
                                        return 'c_600x450';
                                    case s.h2.S400x300:
                                        return 'c_400x300';
                                    case s.h2.S296x222:
                                        return 'c_296x222';
                                    case s.h2.S232x174:
                                        return 'c_232x174';
                                    case s.h2.Big:
                                        return 'c_80x80';
                                    case s.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = E[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${n}`;
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
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${n}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${n}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    A = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    F = [s.h2.Small, s.h2.Big],
                    g = (e, u) => {
                        if (void 0 === u || !F.includes(e)) return null;
                        switch (u) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    D = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                                return s.sh.BATTLE_BOOSTER;
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.sh.BATTLE_BOOSTER_REPLACE;
                            case s.kK.BUILT_IN_EQUIPMENT:
                                return s.sh.BUILT_IN_EQUIPMENT;
                            case s.kK.EQUIPMENT_PLUS:
                                return s.sh.EQUIPMENT_PLUS;
                            case s.kK.EQUIPMENT_TROPHY_BASIC:
                                return s.sh.EQUIPMENT_TROPHY_BASIC;
                            case s.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return s.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_4;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_6;
                            case s.kK.ATTACHMENT_RARE:
                                return s.sh.ATTACHMENT_RARE;
                            case s.kK.ATTACHMENT_EPIC:
                                return s.sh.ATTACHMENT_EPIC;
                            case s.kK.ATTACHMENT_LEGENDARY:
                                return s.sh.ATTACHMENT_LEGENDARY;
                        }
                    },
                    C = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return n().createElement(a.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            8089: (e, u, t) => {
                t.d(u, { A: () => d });
                var a = t(6483),
                    r = t.n(a),
                    n = t(3138),
                    s = t(7363),
                    i = t.n(s),
                    o = t(7476);
                const l = [
                    'caption',
                    'onClick',
                    'goto',
                    'classNames',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'side',
                    'type',
                    'soundHover',
                    'soundClick',
                ];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        a = e.goto,
                        d = e.classNames,
                        E = e.onMouseEnter,
                        _ = e.onMouseLeave,
                        m = e.onMouseDown,
                        A = e.onMouseUp,
                        F = e.side,
                        g = void 0 === F ? 'left' : F,
                        D = e.type,
                        C = void 0 === D ? 'back' : D,
                        p = e.soundHover,
                        b = void 0 === p ? 'highlight' : p,
                        B = e.soundClick,
                        h = void 0 === B ? 'play' : B,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, l);
                    const f = (0, s.useCallback)(
                            (e) => {
                                (null == E || E(e), n.O.sound.play.sound(b));
                            },
                            [E, b],
                        ),
                        w = (0, s.useCallback)(
                            (e) => {
                                null == _ || _(e);
                            },
                            [_],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                (null == m || m(e), n.O.sound.play.sound(h));
                            },
                            [m, h],
                        ),
                        y = (0, s.useCallback)(
                            (e) => {
                                null == A || A(e);
                            },
                            [A],
                        );
                    return i().createElement(
                        'div',
                        c(
                            {
                                className: r()(
                                    o.Z.base,
                                    o.Z[`base__${C}`],
                                    o.Z[`base__${g}`],
                                    null == d ? void 0 : d.base,
                                ),
                                onMouseEnter: f,
                                onMouseLeave: w,
                                onMouseDown: P,
                                onMouseUp: y,
                                onClick: t,
                            },
                            v,
                        ),
                        'info' !== C && i().createElement('div', { className: o.Z.shine }),
                        i().createElement(
                            'div',
                            {
                                className: r()(
                                    o.Z.icon,
                                    o.Z[`icon__${C}`],
                                    o.Z[`icon__${g}`],
                                    null == d ? void 0 : d.icon,
                                ),
                            },
                            i().createElement('div', { className: r()(o.Z.glow, null == d ? void 0 : d.glow) }),
                        ),
                        i().createElement(
                            'div',
                            { className: r()(o.Z.caption, o.Z[`caption__${C}`], null == d ? void 0 : d.caption) },
                            u,
                        ),
                        a && i().createElement('div', { className: r()(o.Z.goto, null == d ? void 0 : d.goto) }, a),
                    );
                };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => o });
                var a = t(7363),
                    r = t.n(a),
                    n = t(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        n.u,
                        i(
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
            },
            3415: (e, u, t) => {
                t.d(u, { l: () => l });
                var a = t(7363),
                    r = t.n(a),
                    n = t(7078),
                    s = t(6373),
                    i = t(2056);
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
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(s.i, u, a);
                    const l = u.contentId;
                    return l ? r().createElement(i.u, o({}, u, { contentId: l }), a) : r().createElement(n.t, u, a);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var a = t(2056),
                    r = t(7363),
                    n = t.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            E = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const m = (0, r.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, E]);
                        return n().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == E ? void 0 : E.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                _,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var a = t(7902),
                    r = t(9916),
                    n = t(7363);
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
                function i(e) {
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
                const o = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            E = e.onClick,
                            _ = e.ignoreShowDelay,
                            m = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            g = e.decoratorId,
                            D = void 0 === g ? 0 : g,
                            C = e.isEnabled,
                            p = void 0 === C || C,
                            b = e.targetId,
                            B = void 0 === b ? 0 : b,
                            h = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, n.useMemo)(() => B || (0, a.F)().resId, [B]),
                            y = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, D, { isMouseEvent: !0, on: !0, arguments: i(r) }, P),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [t, D, r, P, h]),
                            S = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, D, { on: !1 }, P),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, D, P, v]),
                            k = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && S();
                            }, [p, S]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return p
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(y, m ? 100 : 400)),
                                                      l && l(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (S(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && S(), null == E || E(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && S(), null == d || d(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var R;
                    };
            },
            7515: (e, u, t) => {
                t.d(u, { u: () => a });
                const a = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            122: (e, u, t) => {
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
            8246: (e, u, t) => {
                t.d(u, { U: () => i });
                var a = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return n(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(e, u);
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
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: n = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
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
                            const s = 'string' == typeof r ? `${n}.${r}` : n,
                                o = a.O.view.addModelObserver(s, u, !0);
                            return (i.set(o, t), e && t(l(r)), o);
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = r(i.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q3: () => o });
                var a = t(4598),
                    r = t(9174),
                    n = t(7363),
                    s = t.n(n),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const E = (0, n.useRef)([]),
                                _ = (t, n, s) => {
                                    var o;
                                    const l = i.U(n),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => E.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = d(e),
                                                        n = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const n = null != u ? u : d(e),
                                                        s = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : d(e),
                                                        s = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const a = d(u);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(a[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            n[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    }
                                                    {
                                                        const n = e,
                                                            s = Object.entries(n),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
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
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: _ };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, n.useRef)(!1),
                                A = (0, n.useState)(o),
                                F = A[0],
                                g = A[1],
                                D = (0, n.useState)(() => _(o, l, d)),
                                C = D[0],
                                p = D[1];
                            return (
                                (0, n.useEffect)(() => {
                                    m.current ? p(_(F, l, d)) : (m.current = !0);
                                }, [d, F, l]),
                                (0, n.useEffect)(() => {
                                    g(o);
                                }, [o]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (C.externalModel.dispose(), E.current.forEach((e) => e()));
                                    },
                                    [C],
                                ),
                                s().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                t.d(u, { UI: () => r });
                (t(3649), t(9916));
                var a = t(8613);
                Date.now();
                const r = a.Ew.getRegionalDateTime;
                a.Ew.getFormattedDateTime;
            },
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => n, onScaleUpdated: () => s }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
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
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, i),
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
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = t(527),
                    r = t(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
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
                t.d(u, { O: () => s });
                var a = t(5959),
                    r = t(7698),
                    n = t(514);
                const s = { view: t(7641), client: a, sound: n.ZP, intl: r.N };
            },
            7698: (e, u, t) => {
                t.d(u, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => i, hY: () => s });
                var a = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, a.playSound)(r[u])), e), {}),
                    s = Object.assign({}, n, { sound: a.playSound }),
                    i = { play: s, setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
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
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => P,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => T,
                        events: () => s.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => N,
                        isEventHandled: () => h,
                        isFocused: () => b,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => R,
                    }));
                var a = t(9690),
                    r = t(3722),
                    n = t(6112),
                    s = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function h() {
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
                    P = a.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    k = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            a = u.right,
                            r = u.bottom,
                            n = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${n}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId'),
                        r = '';
                    var n;
                    u &&
                        ((r = (null == (n = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (a = window.subViews[t].id));
                    return { callerUrl: r, caller: t, stack: u, resId: a };
                };
            },
            3815: (e, u, t) => {
                t.d(u, { z: () => n });
                var a = t(7363);
                const r = [];
                function n(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), r)
                    );
                }
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => s });
                var a = t(7363),
                    r = t(7739),
                    n = t(1043);
                let s, i, o;
                (!(function (e) {
                    ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const l = () => {
                    const e = (0, a.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        n = ((e) => {
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
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: n, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            3112: (e, u, t) => {
                t.d(u, { V: () => n });
                var a = t(7363),
                    r = t(3138);
                const n = () => {
                    const e = (0, a.useState)(r.O.view.getScale()),
                        u = e[0],
                        t = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                t(r.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                        u
                    );
                };
            },
            5521: (e, u, t) => {
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
            9480: (e, u, t) => {
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { G: () => s, MH: () => r, UI: () => n, hX: () => i, u4: () => o });
                const r = a;
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function s(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(r(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function i(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        var a;
                        const n = null == (a = e[r]) ? void 0 : a.value;
                        u(n, r, e) && t.push(n);
                    }
                    return t;
                }
                function o(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let a = t;
                    for (let t = 0; t < e.length; t++) {
                        a = u(a, r(e, t), t, e);
                    }
                    return a;
                }
            },
            9690: (e, u, t) => {
                t.d(u, { cg: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += a[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, u, t) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => r, G: () => a });
                const r = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                t.d(u, { Uw: () => _, WU: () => n, v2: () => r });
                var a = t(1281);
                let r;
                function n(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(r || (r = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e, u, t) => {
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
                    l = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? i : o, []),
                    c = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return c(e);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = s(e);
                            return (l(n, /( )/, u).forEach((e) => (t = t.concat(l(e, a, r.left)))), t);
                        })(e, u);
                    },
                    _ = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : E(e, u)));
            },
            1358: (e, u, t) => {
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
                t.d(u, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => g });
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
                var s = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    _ = t(3138);
                const m = ['args'];
                function A(e, u, t, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        function s(e) {
                                            A(n, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(n, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
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
                                })(u, m);
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
                    C = () => D(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var b = t(7572);
                const B = r.instance,
                    h = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, C);
                        },
                        handleViewEvent: D,
                        onBindingsReady: g,
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
                        ClickOutsideManager: B,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
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
            5831: (e, u, t) => {
                t.d(u, { _: () => a });
                const a = {
                    root: '/hangar',
                    battlePass: {
                        chapterChoice: '/battlePass/chapterChoice',
                        progression: '/battlePass/progression',
                        postProgression: '/battlePass/postProgression',
                        intro: '/battlePass/intro',
                        buyPass: '/battlePass/buyPass',
                        buyPassConfirm: '/battlePass/buyPassConfirm',
                        buyPassRewards: '/battlePass/buyPassRewards',
                        buyLevels: '/battlePass/buyLevels',
                        buyLevelsRewards: '/battlePass/buyLevelsRewards',
                        holidayFinal: '/battlePass/holidayFinal',
                    },
                };
            },
            9574: (e, u, t) => {
                var a = t(7363),
                    r = t.n(a);
                let n, s;
                (!(function (e) {
                    ((e[(e.Active = 0)] = 'Active'),
                        (e[(e.Paused = 1)] = 'Paused'),
                        (e[(e.Completed = 2)] = 'Completed'),
                        (e[(e.NotStarted = 3)] = 'NotStarted'));
                })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Locked = 0)] = 'Locked'),
                            (e[(e.Unlocked = 1)] = 'Unlocked'),
                            (e[(e.Paused = 2)] = 'Paused'));
                    })(s || (s = {})));
                var i = t(3215),
                    o = t(4598),
                    l = t(9480),
                    c = t(9174),
                    d = t(3946),
                    E = t(1975),
                    _ = t(156),
                    m = t(7736);
                const A = 1e3,
                    F = Object.assign({}, E.uu, {
                        withStack: !0,
                        type: m.r.Simple,
                        delta: { duration: 500, delay: 300 },
                        line: { duration: 500, delay: 300 },
                    }),
                    g = Object.assign({}, _.Gh, {
                        line: Object.assign({}, _.Gh.line, { bgColorFinished: '#000000' }),
                        pattern: Object.assign({}, _.Gh.pattern, { bgImageFinished: _.Gh.bgImageBase }),
                    });
                let D;
                !(function (e) {
                    ((e.FillProgressMax = 'fillProgressMax'),
                        (e.RunCycle = 'runCycle'),
                        (e.ResetProgress = 'resetProgress'),
                        (e.RefillProgress = 'refillProgress'),
                        (e.Idle = 'idle'));
                })(D || (D = {}));
                const C = {
                    [D.FillProgressMax]: { nextStep: D.RunCycle, delay: A },
                    [D.RunCycle]: { nextStep: D.ResetProgress, delay: 2200 },
                    [D.ResetProgress]: { nextStep: D.RefillProgress, delay: A },
                    [D.RefillProgress]: { nextStep: D.Idle, delay: A },
                };
                let p, b, B;
                (!(function (e) {
                    ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'));
                })(p || (p = {})),
                    (function (e) {
                        ((e.NotAvailable = 'notAvailable'),
                            (e.PurchasingIP = 'purchasingIP'),
                            (e.ExtraChapter = 'extraChapter'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e.left = 'left'), (e.right = 'right'));
                    })(B || (B = {})));
                var h = t(5415);
                const v = {
                        '--small-card-width': '140rem',
                        '--small-current-card-width': '224rem',
                        '--medium-card-width': '220rem',
                        '--medium-current-card-width': '340rem',
                        '--extra-large-card-width': '276rem',
                    },
                    f = (e, u = !1) =>
                        u ? (e < h.cJ.Medium ? 224 : 340) : e < h.cJ.Medium ? 140 : e < h.cJ.ExtraLarge ? 220 : 276,
                    w = (0, i.q3)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    levels: e.array('levels'),
                                    chapters: e.array('chapters'),
                                    animationStep: c.LO.box(D.Idle),
                                },
                                t = (0, d.Om)((e) => {
                                    const t = u.levels.get(),
                                        a = l.MH(t, e - 1);
                                    a || console.warn(`level info not found for number: ${e}`);
                                    const r = t.length;
                                    return Object.assign({}, a, {
                                        maxLevel: r,
                                        isFirstLevel: 1 === e,
                                        isLastLevel: e === r,
                                    });
                                }),
                                a = (0, d.Om)((e) => {
                                    const u = t(e);
                                    return l.UI(u.rewards, (e) => Object.assign({}, e));
                                }),
                                r = (0, d.Om)((e) => {
                                    const a = u.root.get(),
                                        r = a.currentLevel,
                                        n = a.currentLevelPoints,
                                        i = a.previousLevel,
                                        o = a.postProgressionStatus,
                                        l = u.animationStep.get();
                                    if ([D.FillProgressMax, D.RunCycle].includes(l))
                                        return e === i ? p.IN_PROGRESS : p.COMPLETED;
                                    const c = t(e),
                                        d = c.levelPoints,
                                        E = c.maxLevel;
                                    return e < r || (r === E && n === d * E)
                                        ? p.COMPLETED
                                        : e === r && (o !== s.Locked || n > 0)
                                          ? p.IN_PROGRESS
                                          : p.NOT_STARTED;
                                }),
                                i = (0, d.Om)((e) => {
                                    const t = u.root.get().postProgressionStatus,
                                        a = r(e);
                                    return { cardStatus: a, isDisabled: t !== s.Unlocked && a === p.NOT_STARTED };
                                }),
                                E = (0, d.Om)(
                                    () =>
                                        A()
                                            ? g().length && C() && B()
                                                ? b.ExtraChapter
                                                : F()
                                                  ? b.PurchasingIP
                                                  : void 0
                                            : b.NotAvailable,
                                    { equals: o.jv },
                                ),
                                _ = (0, d.Om)(() => l.hX(u.chapters.get(), (e) => e.isRegular), { equals: o.jv }),
                                m = (0, d.Om)(
                                    () =>
                                        l.hX(u.chapters.get(), (e) => e.isRegular && e.chapterStatus === n.Completed)
                                            .length,
                                    { equals: o.jv },
                                ),
                                A = (0, d.Om)(() => m() === _().length),
                                F = (0, d.Om)(() => l.G(u.chapters.get(), (e) => !e.isBattlePassPurchased)),
                                g = (0, d.Om)(() => l.hX(u.chapters.get(), (e) => !e.isRegular)),
                                C = (0, d.Om)(() => l.G(g(), (e) => e.chapterStatus !== n.Active)),
                                B = (0, d.Om)(() => l.G(g(), (e) => e.chapterStatus !== n.Completed)),
                                h = (0, d.Om)(() => {
                                    const e = u.root.get(),
                                        t = e.currentLevel,
                                        a = e.currentLevelPoints,
                                        r = t - 1;
                                    return l.u4(
                                        u.levels.get(),
                                        (e, { levelPoints: u }, t) => (t < r ? e + u : t === r ? e + a : e),
                                        0,
                                    );
                                }),
                                v = (0, d.Om)(() => l.u4(u.levels.get(), (e, { levelPoints: u }) => e + u, 0)),
                                w = (0, d.Om)(() => {
                                    const e = u.root.get(),
                                        t = e.currentLevel,
                                        a = e.currentLevelPoints,
                                        r = e.previousLevel,
                                        n = e.previousLevelPoints;
                                    return t !== r || a !== n;
                                }),
                                P = (0, d.Om)(() => {
                                    const e = u.root.get();
                                    return e.cyclesCompletedCount > e.previousCyclesCompletedCount;
                                }),
                                y = (0, d.Om)((e) => {
                                    const a = u.root.get(),
                                        r = a.currentLevel,
                                        n = a.currentLevelPoints,
                                        i = a.previousLevel,
                                        o = a.previousLevelPoints,
                                        l = a.postProgressionStatus,
                                        c = u.animationStep.get(),
                                        d = t(r),
                                        E = d.levelPoints,
                                        _ = d.maxLevel,
                                        m = t(i).levelPoints,
                                        A = P(),
                                        F = ((e, u) => {
                                            const t = f(e),
                                                a = f(e, u);
                                            return [t, u ? a : t];
                                        })(e, l !== s.Locked),
                                        g = F[0],
                                        C = F[1],
                                        p = g * (_ - 1) + C,
                                        b = (
                                            (e, u) =>
                                            (t, a, r, n = !1) =>
                                                e * (t - 1) + ((n ? e : u) / r) * a
                                        )(g, C),
                                        B = !A && i < r;
                                    return {
                                        progressValue: [D.FillProgressMax, D.RunCycle].includes(c) ? p : b(r, n, E),
                                        previousProgressValue: c === D.ResetProgress ? 0 : b(i, o, m, B),
                                        maxProgressValue: p,
                                    };
                                }),
                                S = (0, d.Om)(() => l.hX(u.chapters.get(), (e) => !e.isBattlePassPurchased));
                            return Object.assign({}, u, {
                                computes: {
                                    footerState: E,
                                    regularChapters: _,
                                    completedRegularChaptersCount: m,
                                    extraChapters: g,
                                    cardStates: i,
                                    levelInfo: t,
                                    levelRewards: a,
                                    currentPointsInChapter: h,
                                    totalPointsInChapter: v,
                                    progressChanged: w,
                                    cycleChanged: P,
                                    getProgressValues: y,
                                    chaptersForPurchase: S,
                                },
                            });
                        },
                        ({ model: e, externalModel: u }) => ({
                            openPointsInfo: u.createCallbackNoArgs('onOpenPointsInfo'),
                            openInfoPage: u.createCallbackNoArgs('onOpenInfoPage'),
                            setAnimationStep: (0, c.aD)((u) => e.animationStep.set(u)),
                            handleProgressAchieved: u.createCallbackNoArgs('onProgressAchieved'),
                            handleCycleCompleted: u.createCallbackNoArgs('onCycleCompleted'),
                        }),
                    ),
                    P = (w[0], w[1]);
                var y = t(122),
                    S = t(5521),
                    k = t(3403),
                    T = t(9485),
                    N = t(2432),
                    x = t(8030),
                    O = t(6444),
                    I = t(6483),
                    M = t.n(I);
                const L = {
                        base: 'Card_base_5d',
                        base__inProgress: 'Card_base__inProgress_e1',
                        stage: 'Card_stage_92',
                        rewards: 'Card_rewards_f5',
                        status: 'Card_status_65',
                        points: 'Card_points_ed',
                        points__initial: 'Card_points__initial_e9',
                        progressShadow: 'Card_progressShadow_4c',
                    },
                    $ = 'Background_base_1d',
                    U = 'Background_default_66',
                    G = 'Background_base__first_70',
                    z = 'Background_base__last_59',
                    H = 'Background_disabled_e9',
                    j = 'Highlight_base_af',
                    W = 'Highlight_inner_67',
                    Z = 'Highlight_side_19',
                    V = 'Highlight_side__left_1c',
                    q = 'Highlight_side__right_ed',
                    Y = (0, a.memo)(() =>
                        r().createElement(
                            'div',
                            { className: j },
                            r().createElement('div', { className: M()(Z, V) }),
                            r().createElement('div', { className: W }),
                            r().createElement('div', { className: M()(Z, q) }),
                        ),
                    ),
                    K = (0, k.Pi)(({ level: e }) => {
                        const u = P().model,
                            t = u.computes.levelInfo(e),
                            a = t.isFirstLevel,
                            n = t.isLastLevel,
                            s = u.computes.cardStates(e),
                            i = s.cardStatus,
                            o = s.isDisabled;
                        return r().createElement(
                            'div',
                            { className: M()($, a && G, n && z) },
                            r().createElement('div', { className: U }),
                            o && r().createElement('div', { className: H }),
                            i === p.IN_PROGRESS && r().createElement(Y, null),
                        );
                    });
                var X = t(2862),
                    Q = t(729),
                    J = t(5739);
                const ee = {
                    base: 'CardRewards_base_f2',
                    base__completed: 'CardRewards_base__completed_08',
                    rewards: 'CardRewards_rewards_0a',
                    rewards__2: 'CardRewards_rewards__2_ee',
                    base__inProgress: 'CardRewards_base__inProgress_7c',
                    rewards__3: 'CardRewards_rewards__3_f9',
                    reward: 'CardRewards_reward_0e',
                    rewards__1: 'CardRewards_rewards__1_10',
                };
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const te = (0, d.Om)((e) => {
                        const u = e.item,
                            t = e.name,
                            a = e.value,
                            r = e.overlayType,
                            n = e.tooltipId,
                            s = e.tooltipContentId;
                        return {
                            name: u || t,
                            smallImage: (0, Q.ry)(e, X.h2.Big),
                            bigImage: (0, Q.ry)(e, X.h2.S180x135),
                            special: r,
                            value: a,
                            valueType: (0, Q.p3)(t),
                            tooltipArgs: (0, Q.pI)({ tooltipId: n }, Number(s), { ignoreShowDelay: !0 }),
                        };
                    }),
                    ae = (0, k.Pi)(({ level: e, className: u }) => {
                        const t = P().model,
                            a = t.computes.levelRewards(e),
                            n = t.computes.cardStates(e).cardStatus,
                            s = (0, h.GS)().mediaSize < h.cJ.Medium,
                            i = 1 === a.length,
                            o = ((e, u) => (u ? (e ? X.h2.Big : X.h2.S180x135) : e ? X.h2.Small : X.h2.Big))(s, i),
                            c = (e) => (s || !i ? e.smallImage : e.bigImage);
                        return r().createElement(
                            'div',
                            { className: M()(ee.base, ee[`base__${n}`], u) },
                            r().createElement(
                                'div',
                                { className: M()(ee.rewards, ee[`rewards__${a.length}`]) },
                                l.UI(a, (e, u) => {
                                    const t = te(e);
                                    return r().createElement(
                                        'div',
                                        { key: `reward__${t.name}${u}`, className: M()(ee.reward) },
                                        r().createElement(J.Q, ue({ size: o, image: c(t) }, t)),
                                    );
                                }),
                            ),
                        );
                    }),
                    re = {
                        base: 'Divider_base_a2',
                        base__left: 'Divider_base__left_a0',
                        base__right: 'Divider_base__right_91',
                        inner: 'Divider_inner_c8',
                    },
                    ne = ({ position: e }) =>
                        r().createElement(
                            'div',
                            { className: M()(re.base, re[`base__${e}`]) },
                            r().createElement('div', { className: re.inner }),
                        );
                var se = t(7727),
                    ie = t(7030),
                    oe = t(2893);
                const le = {
                        base: 'Stage_base_4c',
                        number: 'Stage_number_f6',
                        animatedNumber: 'Stage_animatedNumber_90',
                        numberInProgress: 'Stage_numberInProgress_e0',
                        title: 'Stage_title_1e',
                        glow: 'Stage_glow_9b',
                        base__inProgress: 'Stage_base__inProgress_e1',
                        animatedGlow: 'Stage_animatedGlow_7f',
                    },
                    ce = (0, k.Pi)(({ level: e, className: u }) => {
                        const t = P().model,
                            n = t.root.get().postProgressionStatus,
                            i = t.computes.cardStates(e).cardStatus,
                            o = (0, a.useState)(!1),
                            l = o[0],
                            c = o[1],
                            d = i === p.IN_PROGRESS,
                            E = n === s.Unlocked,
                            _ = (0, ie.useSpring)({
                                from: { stageOpacity: l ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, se.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: oe.ei },
                            }).stageOpacity,
                            m = (0, ie.useSpring)({
                                from: { sparkOpacity: l ? 0.7 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => c(!1),
                                config: { duration: 300, easing: oe.ei },
                            }).sparkOpacity;
                        return (
                            (0, a.useEffect)(() => {
                                if (d)
                                    return (0, y.F)(() => {
                                        c(!0);
                                    }, 100);
                            }, [d]),
                            r().createElement(
                                'div',
                                { className: M()(le.base, le[`base__${i}`], u) },
                                d
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          E &&
                                              r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  r().createElement('div', { className: le.glow }),
                                                  r().createElement(ie.animated.div, {
                                                      style: { opacity: m },
                                                      className: le.animatedGlow,
                                                  }),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: le.numberInProgress },
                                              e,
                                              r().createElement(
                                                  ie.animated.div,
                                                  {
                                                      style: {
                                                          opacity: _,
                                                          transform: _.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: le.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          r().createElement(
                                              'div',
                                              { className: le.title },
                                              R.strings.battle_pass.postProgressionView.progression.currentStep(),
                                          ),
                                      )
                                    : r().createElement('div', { className: le.number }, e),
                            )
                        );
                    });
                var de = t(6373);
                const Ee = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_4b',
                        slideUp: 'CompletedStatus_slideUp_60',
                        fadeIn: 'CompletedStatus_fadeIn_0a',
                        base__hideAnimation: 'CompletedStatus_base__hideAnimation_d6',
                        slideDown: 'CompletedStatus_slideDown_db',
                        fadeOut: 'CompletedStatus_fadeOut_59',
                        icon: 'CompletedStatus_icon_ab',
                        iconGlow: 'CompletedStatus_iconGlow_e9',
                        fadeInWithScale: 'CompletedStatus_fadeInWithScale_51',
                        scale: 'CompletedStatus_scale_0b',
                        rotate: 'CompletedStatus_rotate_61',
                    },
                    _e = ({ shouldAppear: e }) =>
                        r().createElement(
                            'div',
                            { className: M()(Ee.base, e ? Ee.base__showAnimation : Ee.base__hideAnimation) },
                            r().createElement('div', { className: Ee.iconGlow }),
                            r().createElement(
                                de.i,
                                { body: R.strings.battle_pass.tooltips.completed.got() },
                                r().createElement('div', { className: Ee.icon }),
                            ),
                        );
                var me = t(2056);
                const Ae = {
                        base: 'CurrentPoints_base_62',
                        base__appear: 'CurrentPoints_base__appear_c2',
                        fadeIn: 'CurrentPoints_fadeIn_13',
                        base__disappear: 'CurrentPoints_base__disappear_dd',
                        fadeOut: 'CurrentPoints_fadeOut_47',
                        value__current: 'CurrentPoints_value__current_02',
                        value__total: 'CurrentPoints_value__total_56',
                        divider: 'CurrentPoints_divider_0b',
                        icon: 'CurrentPoints_icon_67',
                        fadeInWithScale: 'CurrentPoints_fadeInWithScale_ee',
                        slideUp: 'CurrentPoints_slideUp_c4',
                        scale: 'CurrentPoints_scale_e9',
                        rotate: 'CurrentPoints_rotate_21',
                    },
                    Fe = (0, k.Pi)(({ totalLevelPoints: e, shouldAppear: u, shouldDisappear: t, className: a }) => {
                        const n = P().model.root.get(),
                            s = n.currentLevelPoints,
                            i = n.previousLevelPoints;
                        return r().createElement(
                            me.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            r().createElement(
                                'div',
                                { className: M()(Ae.base, u && Ae.base__appear, t && Ae.base__disappear, a) },
                                r().createElement('div', { className: M()(Ae.value, Ae.value__current) }, t ? i : s),
                                r().createElement('div', { className: Ae.divider }, '/'),
                                r().createElement('div', { className: M()(Ae.value, Ae.value__total) }, e),
                                r().createElement('div', { className: Ae.icon }),
                            ),
                        );
                    }),
                    ge = 'Status_base_76',
                    De = 'Status_pointsWrapper_26',
                    Ce = (0, k.Pi)(({ level: e, className: u }) => {
                        const t = P().model,
                            n = t.computes.cardStates(e),
                            s = n.cardStatus,
                            i = n.isDisabled,
                            o = t.computes.levelInfo(e).levelPoints,
                            l = t.animationStep.get(),
                            c = [D.FillProgressMax, D.RunCycle].includes(l),
                            d = l === D.ResetProgress,
                            E = s === p.COMPLETED && !i,
                            _ = s === p.IN_PROGRESS,
                            m = (0, a.useState)(E),
                            A = m[0],
                            F = m[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (l === D.RunCycle) return void F(!1);
                                const u = l === D.FillProgressMax,
                                    t = l === D.ResetProgress;
                                return A
                                    ? void 0
                                    : (0, y.F)(
                                          () => {
                                              F(!!u || E);
                                          },
                                          (t ? 500 : 0) + 100 * e,
                                      );
                            }, [l, A, E, e]),
                            r().createElement(
                                'div',
                                { className: M()(ge, u) },
                                E && r().createElement(_e, { key: `statusCompleted-${e}`, shouldAppear: A }),
                                _ &&
                                    r().createElement(Fe, {
                                        className: De,
                                        totalLevelPoints: o,
                                        shouldAppear: d,
                                        shouldDisappear: c,
                                    }),
                            )
                        );
                    }),
                    pe = (0, k.Pi)(({ level: e }) => {
                        const u = P().model,
                            t = u.computes.levelInfo(e),
                            a = t.levelPoints,
                            n = t.isFirstLevel,
                            s = t.isLastLevel,
                            i = u.computes.cardStates(e).cardStatus,
                            o = !n && i === p.IN_PROGRESS,
                            l = !s && u.computes.cardStates(e + 1).cardStatus !== p.IN_PROGRESS;
                        return r().createElement(
                            'div',
                            { className: M()(L.base, L[`base__${i}`]), style: v },
                            r().createElement(K, { level: e }),
                            r().createElement(ce, { className: L.stage, level: e }),
                            r().createElement(ae, { className: L.rewards, level: e }),
                            r().createElement(Ce, { className: L.status, level: e }),
                            r().createElement('div', { className: L.points }, e * a),
                            n && r().createElement('div', { className: M()(L.points, L.points__initial) }, 0),
                            o && r().createElement(ne, { position: B.left }),
                            l && r().createElement(ne, { position: B.right }),
                        );
                    }),
                    be = 'Cards_base_3e',
                    Be = (0, k.Pi)(() => {
                        const e = P().model,
                            u = e.levels.get(),
                            t = e.root.get().chapterID;
                        return r().createElement(
                            'div',
                            { className: be },
                            l.UI(u, ({ level: e }, u) => r().createElement(pe, { key: `${t}_${u}`, level: e })),
                        );
                    }),
                    he = 'Footer_base_0b';
                var ve = t(514);
                const fe = 'ExtraChapter_base_37',
                    we = 'ExtraChapter_wrapper_f7',
                    Pe = 'ExtraChapter_border_a2',
                    ye = 'ExtraChapter_base__hover_bf',
                    Se = 'ExtraChapter_bg_25',
                    ke = 'ExtraChapter_widget_71',
                    Re = 'ExtraChapter_title_1c',
                    Te = 'ExtraChapter_description_33',
                    Ne = 'ExtraChapter_content_9d';
                var xe = t(5831);
                const Oe = R.strings.battle_pass.postProgressionView.footer.extraChapter,
                    Ie = (0, k.Pi)(() => {
                        var e;
                        const u = null == (e = P().model.computes.extraChapters()[0]) ? void 0 : e.chapterID,
                            t = (0, a.useState)(!1),
                            n = t[0],
                            s = t[1],
                            i = (0, O.tv)();
                        return u
                            ? r().createElement(
                                  'div',
                                  {
                                      className: M()(fe, n && ye),
                                      onMouseOver: (e) => {
                                          (e.stopPropagation(), s(!0), ve.hY.sound('highlight'));
                                      },
                                      onMouseOut: () => {
                                          s(!1);
                                      },
                                      onClick: () => {
                                          (i.push(xe._.battlePass.progression, { chapterID: u }), ve.hY.sound('play'));
                                      },
                                  },
                                  r().createElement(
                                      'div',
                                      { className: we },
                                      r().createElement('div', { className: Se }),
                                      r().createElement(
                                          'div',
                                          { className: Ne },
                                          r().createElement('div', { className: Re }, Oe.title.text()),
                                          r().createElement('div', { className: Te }, Oe.description.text()),
                                      ),
                                  ),
                                  r().createElement('div', { className: ke }),
                                  r().createElement('div', { className: Pe }),
                              )
                            : null;
                    });
                var Me = t(3457),
                    Le = t(9766);
                const $e = 'NotAvailable_base_54',
                    Ue = 'NotAvailable_background_c6',
                    Ge = 'NotAvailable_content_53',
                    ze = 'NotAvailable_button_7a',
                    He = 'NotAvailable_description_9b',
                    je = 'NotAvailable_completedCount_12',
                    We = R.strings.battle_pass.postProgressionView.footer,
                    Ze = (0, k.Pi)(() => {
                        const e = P().model,
                            u = (0, O.tv)(),
                            t = e.computes.completedRegularChaptersCount(),
                            a = e.computes.regularChapters().length;
                        return r().createElement(
                            'div',
                            { className: $e },
                            r().createElement('div', { className: Ue }),
                            r().createElement(
                                'div',
                                { className: Ge },
                                r().createElement(Le.z, {
                                    classMix: He,
                                    text: We.description.text(),
                                    binding: {
                                        completedChapters: r().createElement('span', { className: je }, t),
                                        chaptersAmount: a,
                                    },
                                }),
                                r().createElement(
                                    Me.u5,
                                    {
                                        type: Me.L$.ghost,
                                        size: Me.qE.medium,
                                        mixClass: ze,
                                        onClick: () => u.push(xe._.battlePass.chapterChoice),
                                    },
                                    We.button.text(),
                                ),
                            ),
                        );
                    });
                var Ve = t(2106);
                const qe = 'PurchasingIP_base_a7',
                    Ye = 'PurchasingIP_wrapper_66',
                    Ke = 'PurchasingIP_border_3f',
                    Xe = 'PurchasingIP_base__hover_da',
                    Qe = 'PurchasingIP_bg_fa',
                    Je = 'PurchasingIP_blink_ce',
                    eu = 'PurchasingIP_text_35',
                    uu = 'PurchasingIP_button_f8',
                    tu = 'PurchasingIP_content_53',
                    au = R.strings.battle_pass.postProgressionView.footer.purchaseIP,
                    ru = (0, k.Pi)(() => {
                        const e = P().model,
                            u = (0, O.tv)(),
                            t = (0, a.useState)(!1),
                            n = t[0],
                            s = t[1];
                        return r().createElement(
                            'div',
                            {
                                className: M()(qe, n && Xe),
                                onMouseOver: (e) => {
                                    (e.stopPropagation(), s(!0), ve.hY.sound('highlight'));
                                },
                                onMouseOut: () => {
                                    s(!1);
                                },
                                onClick: () => {
                                    const t = e.computes.chaptersForPurchase();
                                    (ve.hY.sound('play'),
                                        1 === t.length
                                            ? u.push(xe._.battlePass.buyPassConfirm, { packageID: t[0].chapterID })
                                            : u.push(xe._.battlePass.buyPass));
                                },
                            },
                            r().createElement(
                                'div',
                                { className: Ye },
                                r().createElement('div', { className: Qe }),
                                r().createElement('div', { className: Je }),
                                r().createElement(
                                    'div',
                                    { className: tu },
                                    r().createElement(
                                        'div',
                                        { className: eu },
                                        R.strings.battle_pass.postProgressionView.footer.purchaseIP.banner.text(),
                                    ),
                                    r().createElement(
                                        Me.u5,
                                        { type: Ve.L.main, size: Ve.q.medium, mixClass: uu },
                                        au.button.text(),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: Ke }),
                        );
                    }),
                    nu = (0, k.Pi)(({ className: e = '' }) => {
                        const u = P().model.computes.footerState();
                        return r().createElement(
                            'div',
                            { className: M()(he, e) },
                            (() => {
                                switch (u) {
                                    case b.NotAvailable:
                                        return r().createElement(Ze, null);
                                    case b.PurchasingIP:
                                        return r().createElement(ru, null);
                                    case b.ExtraChapter:
                                        return r().createElement(Ie, null);
                                    default:
                                        return null;
                                }
                            })(),
                        );
                    });
                var su = t(615),
                    iu = t(7044);
                const ou = 'Header_base_07',
                    lu = 'Header_background_b8',
                    cu = 'Header_headlineContainer_53',
                    du = 'Header_headline_16',
                    Eu = 'Header_divider_87',
                    _u = 'Header_title_14',
                    mu = 'Header_descriptionContainer_9b',
                    Au = 'Header_descriptionPaused_28',
                    Fu = 'Header_description_c0',
                    gu = 'Header_icon_1b',
                    Du = 'Header_label_b2',
                    Cu = R.strings.battle_pass.postProgressionView.header,
                    pu = (0, k.Pi)(({ className: e }) => {
                        const u = P().model.root.get(),
                            t = u.postProgressionStatus,
                            a = u.endDate,
                            n = t === s.Locked,
                            i = t === s.Paused,
                            o = (0, iu.UI)(a, su.C.DayMonthFull);
                        return r().createElement(
                            'div',
                            { className: M()(ou, e) },
                            r().createElement('div', { className: lu }),
                            r().createElement(
                                'div',
                                { className: cu },
                                !n &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('span', { className: du }, Cu.headline.unlocked()),
                                        r().createElement('div', { className: Eu }),
                                    ),
                                r().createElement(Le.z, {
                                    classMix: du,
                                    text: Cu.headline.deadline(),
                                    binding: { endDate: o },
                                }),
                            ),
                            r().createElement('span', { className: _u }, Cu.title()),
                            r().createElement(
                                'div',
                                { className: mu },
                                i
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: gu }),
                                          r().createElement(
                                              'span',
                                              { className: Du },
                                              Cu.description.onPause.highlight(),
                                          ),
                                          r().createElement(
                                              'span',
                                              { className: Au },
                                              Cu.description.onPause.regular(),
                                          ),
                                      )
                                    : r().createElement('span', { className: Fu }, Cu.description.active()),
                            ),
                        );
                    });
                var bu = t(8910);
                var Bu = t(3112);
                const hu = 'Counter_base_8f',
                    vu = 'Counter_infinityIconContainer_2c',
                    fu = 'Counter_infinityIcon_12',
                    wu = 'Counter_label_db',
                    Pu = 'Counter_cyclesCompleted_a0',
                    yu = 'Counter_cyclesNumber_5c',
                    Su = 'Counter_cyclesNumber__animated_d8',
                    ku = 'Counter_cyclesNumber__hidden_c1',
                    Ru = R.strings.battle_pass.postProgressionView.progression,
                    Tu = (0, k.Pi)(({ className: e, labelRef: u, shouldRun: t }) => {
                        const a = P().model,
                            n = a.root.get(),
                            s = n.cyclesCompletedCount,
                            i = n.previousCyclesCompletedCount,
                            o = a.animationStep.get(),
                            l = s !== i && [D.Idle, D.FillProgressMax].includes(o);
                        return r().createElement(
                            'div',
                            { className: M()(hu, e), ref: u },
                            r().createElement('div', { className: vu }, r().createElement('div', { className: fu })),
                            r().createElement(
                                'div',
                                { className: wu },
                                s
                                    ? r().createElement(
                                          'div',
                                          { className: Pu },
                                          r().createElement('span', null, Ru.cyclesCompleted()),
                                          r().createElement(
                                              'span',
                                              {
                                                  key: `cyclesCompletedCount-${t}`,
                                                  className: M()(yu, t && Su, l && ku),
                                              },
                                              s,
                                          ),
                                      )
                                    : Ru.cyclicalProgression(),
                            ),
                        );
                    }),
                    Nu = {
                        base: 'Cycle_base_cb',
                        labelContainer: 'Cycle_labelContainer_1d',
                        contour: 'Cycle_contour_6d',
                        border: 'Cycle_border_7e',
                        border__horizontal: 'Cycle_border__horizontal_22',
                        contour__2x: 'Cycle_contour__2x_5c',
                        border__vertical: 'Cycle_border__vertical_ee',
                        arrow: 'Cycle_arrow_2f',
                        bar: 'Cycle_bar_fa',
                        bar__state1: 'Cycle_bar__state1_a9',
                        state1: 'Cycle_state1_0e',
                        bar__state2: 'Cycle_bar__state2_38',
                        state2: 'Cycle_state2_92',
                        bar__state3: 'Cycle_bar__state3_9f',
                        state3: 'Cycle_state3_5d',
                        bar__state4: 'Cycle_bar__state4_7e',
                        state4: 'Cycle_state4_2b',
                        bar__state5: 'Cycle_bar__state5_b9',
                        state5: 'Cycle_state5_28',
                    },
                    xu = '--label-offset',
                    Ou = { left: 0, width: 0 },
                    Iu = (0, k.Pi)(({ className: e, shouldRun: u }) => {
                        const t = P().model.root.get().cyclesCompletedCount,
                            n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, h.GS)().mediaSize,
                            o = (0, Bu.V)(),
                            l = (0, a.useState)({ [xu]: '0%' }),
                            c = l[0],
                            d = l[1];
                        var E, _;
                        return (
                            (E = () => {
                                var e, u, t, a;
                                const r =
                                        null != (e = null == (u = n.current) ? void 0 : u.getBoundingClientRect())
                                            ? e
                                            : Ou,
                                    i =
                                        null != (t = null == (a = s.current) ? void 0 : a.getBoundingClientRect().left)
                                            ? t
                                            : 0,
                                    l = 15 * o,
                                    c = (100 * (i - r.left - l)) / r.width;
                                d({ [xu]: `${c}%` });
                            }),
                            (_ = [n.current, s.current, i, o, t]),
                            (0, a.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            ((e = null), E());
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, _),
                            r().createElement(
                                'div',
                                { className: M()(Nu.base, e), style: c },
                                r().createElement('div', { className: Nu.arrow }),
                                r().createElement(
                                    'div',
                                    { className: M()(Nu.contour, Nu[`contour__${o}x`]), ref: n },
                                    r().createElement('div', { className: M()(Nu.border, Nu.border__vertical) }),
                                    r().createElement('div', { className: M()(Nu.border, Nu.border__horizontal) }),
                                    u &&
                                        Array(5)
                                            .fill(void 0)
                                            .map((e, u) =>
                                                r().createElement('div', {
                                                    key: `bar-${u}`,
                                                    className: M()(Nu.bar, Nu[`bar__state${u + 1}`]),
                                                }),
                                            ),
                                ),
                                r().createElement(Tu, { className: Nu.labelContainer, labelRef: s, shouldRun: u }),
                            )
                        );
                    }),
                    Mu = 'ProgressBar_base_11',
                    Lu = 'ProgressBar_progressBackground_20',
                    $u = 'ProgressBar_progressBar_b0',
                    Uu = 'ProgressBar_progressBar__disabled_21',
                    Gu = 'ProgressBar_cycle_49',
                    zu = (0, k.Pi)(() => {
                        const e = P(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().postProgressionStatus,
                            i = u.animationStep.get(),
                            o = i === D.RunCycle,
                            l = n === s.Locked,
                            c = n === s.Paused,
                            d = l || c,
                            E = (0, h.GS)().mediaSize,
                            _ = u.computes.getProgressValues(E),
                            m = _.progressValue,
                            C = _.previousProgressValue,
                            p = _.maxProgressValue,
                            b = u.computes.progressChanged();
                        ((0, a.useEffect)(() => {
                            switch (i) {
                                case D.FillProgressMax:
                                case D.RefillProgress:
                                    return void t.handleProgressAchieved();
                                case D.RunCycle:
                                    return void t.handleCycleCompleted();
                            }
                        }, [i, t]),
                            (0, a.useEffect)(() => {
                                if (b && i === D.Idle)
                                    return (0, y.F)(() => {
                                        t.handleProgressAchieved();
                                    }, A);
                            }, [i, t, b]));
                        const B = (0, a.useRef)((0, bu.MR)());
                        return r().createElement(
                            'div',
                            { className: Mu, style: { '--progress-line-width': `${p}rem` } },
                            r().createElement('div', { className: Lu }),
                            r().createElement(
                                me.u,
                                { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                r().createElement(
                                    'div',
                                    { className: M()($u, d && Uu) },
                                    r().createElement(bu._e, {
                                        api: B,
                                        value: m,
                                        deltaFrom: C,
                                        maxValue: p,
                                        disabled: d,
                                        animationSettings: F,
                                        theme: g,
                                    }),
                                ),
                            ),
                            r().createElement(Iu, { className: Gu, shouldRun: o }),
                        );
                    });
                var Hu = t(8089);
                const ju = 'Toolbar_infoButtons_d0',
                    Wu = R.strings.battle_pass.postProgressionView.toolbar,
                    Zu = (0, k.Pi)(({ className: e }) => {
                        const u = P().controls,
                            t = u.openInfoPage,
                            a = u.openPointsInfo;
                        return r().createElement(
                            'div',
                            { className: e },
                            r().createElement(
                                'div',
                                { className: ju },
                                r().createElement(Hu.A, { caption: Wu.aboutBattlePass(), type: 'info', onClick: t }),
                                r().createElement(Hu.A, { caption: Wu.howToEarnPoints(), type: 'info', onClick: a }),
                            ),
                        );
                    }),
                    Vu = 'App_base_21',
                    qu = 'App_toolbar_de',
                    Yu = 'App_awardsWidget_e1',
                    Ku = 'App_award_6a',
                    Xu = 'App_content_c6',
                    Qu = 'App_header_a1',
                    Ju = 'App_progression_75',
                    et = 'App_footer_8e',
                    ut = R.images.gui.maps.icons.battlePass.backgrounds.progression;
                (0, k.Pi)(() => {
                    const e = P(),
                        u = e.model,
                        t = e.controls,
                        n = u.root.get().chapterID,
                        s = u.animationStep.get(),
                        i = u.computes.cycleChanged(),
                        o = (0, O.tv)();
                    ((0, a.useEffect)(() => {
                        if (s !== D.Idle) {
                            const e = C[s],
                                u = e.nextStep,
                                a = e.delay;
                            return (0, y.F)(() => {
                                t.setAnimationStep(u);
                            }, a);
                        }
                        i && t.setAnimationStep(D.FillProgressMax);
                    }, [s, t, i]),
                        x.N.useHandleKeydown(S.n.ESCAPE, () => o.goBack()));
                    const l = `url(${(0, T.wD)(ut, n)})`;
                    return r().createElement(
                        'div',
                        { className: Vu, style: { backgroundImage: l } },
                        r().createElement(Zu, { className: qu }),
                        r().createElement(N.Z, {
                            rootId: R.aliases.battle_pass.PostProgression('resId'),
                            context: 'model.awardsWidget',
                            classNames: { base: Yu, award: Ku },
                        }),
                        r().createElement(
                            'div',
                            { className: Xu },
                            r().createElement(pu, { className: Qu }),
                            r().createElement(
                                'div',
                                { className: Ju },
                                r().createElement(Be, null),
                                r().createElement(zu, null),
                            ),
                        ),
                        r().createElement(nu, { className: et }),
                    );
                });
            },
            9485: (e, u, t) => {
                t.d(u, { wD: () => a });
                t(8546);
                const a = (e, u, t = '') => {
                    const a = t.length > 0 ? `_${t}` : t,
                        r = e.$dyn(`c_${u}${a}`),
                        n = String(u).slice(-1),
                        s = e.$dyn(`default_${n}${a}`);
                    return r || s;
                };
            },
            930: (e, u, t) => {
                let a;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(a || (a = {}));
                (a.style, a.tankman);
            },
            2893: (e, u, t) => {
                t.d(u, { ei: () => a });
                (t(2862), t(729), t(5216), t(7044), t(3649), t(8546), t(930));
                const a = (e) => Math.sqrt(1 - Math.pow(e - 1, 2));
            },
            2432: (e, u, t) => {
                t.d(u, { Z: () => _e });
                var a = t(7363),
                    r = t.n(a),
                    n = t(6483),
                    s = t.n(n),
                    i = t(9480),
                    o = t(3403),
                    l = t(6373),
                    c = t(7727),
                    d = t(5415);
                const E = (e, u, t, a, r) => {
                    const n = R.images.gui.maps.icons.battlePass.awards_widget;
                    return r
                        ? `url(${n.$dyn(`${e.toLowerCase()}_${u}${t}_${a}_${r}`)})`
                        : `url(${n.$dyn(`${e.toLowerCase()}_${u}${t}_${a}`)})`;
                };
                let _, m, A, F, g;
                (!(function (e) {
                    ((e.Award = 'Award'),
                        (e.Ticket = 'Ticket'),
                        (e.Coin = 'Coin'),
                        (e.Taler = 'Taler'),
                        (e.Collection = 'Collection'),
                        (e.Commander = 'Commander'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(m || (m = {})),
                    (function (e) {
                        ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'));
                    })(A || (A = {})),
                    (function (e) {
                        ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''));
                    })(F || (F = {})),
                    (function (e) {
                        ((e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = ''));
                    })(g || (g = {})));
                const D = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    C = ({ size: e, isHover: u, disabled: t = !1, type: a = _.Coin }) => {
                        const n = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement(
                            'div',
                            { className: s()(D.base, D[`base__${e}`], D[`base__${e}${a}`], u && D.base__hovered) },
                            t
                                ? r().createElement('div', {
                                      className: D.bgDisabled,
                                      style: { backgroundImage: E(a, F.Background, g.Disabled, e, n) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: D.bg,
                                          style: { backgroundImage: E(a, F.Background, g.None, e, n) },
                                      }),
                                      r().createElement('div', {
                                          className: D.bgHover,
                                          style: { backgroundImage: E(a, F.Background, g.Hover, e, n) },
                                      }),
                                  ),
                        );
                    },
                    p = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    b = ({ size: e, isHover: u, highlighted: t = !1, disabled: a = !1, type: n = _.Coin }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement(
                            'div',
                            { className: s()(p.base, p[`base__${e}`], u && p.base__hovered) },
                            a
                                ? r().createElement('div', {
                                      className: s()(p.borderDisabled, p[`borderDisabled__${e}`]),
                                      style: { backgroundImage: E(n, F.Border, g.Disabled, e, i) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: p.border,
                                          style: { backgroundImage: E(t ? _.Collection : n, F.Border, g.None, e, i) },
                                      }),
                                      r().createElement('div', {
                                          className: p.borderHover,
                                          style: { backgroundImage: E(n, F.Border, g.Hover, e, i) },
                                      }),
                                  ),
                        );
                    };
                var B = t(2372),
                    h = t(9766);
                const v = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    f = ({ state: e, count: u, size: t, maxCount: a = 0 }) => {
                        switch (e) {
                            case P.InProgress:
                                return r().createElement(h.z, { text: `${u || 0} / ${a}` });
                            case P.Completed:
                                return r().createElement('div', { className: s()(v.base, v[`base__${t}`]) });
                            default:
                                return r().createElement(B.A, { format: 'integral', value: u });
                        }
                    },
                    w = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let P;
                !(function (e) {
                    ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'));
                })(P || (P = {}));
                const y = ({
                        size: e,
                        count: u,
                        maxCount: t,
                        state: a = P.Default,
                        isLocked: n = !1,
                        disabled: i = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: s()(w.base, w[`base__${e}`], n && w.base__locked, i && w.base__disabled) },
                            r().createElement(f, { state: a, size: e, count: u, maxCount: t }),
                        ),
                    S = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    k = (e, u, t) => {
                        switch (!0) {
                            case t:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case u:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    T = ({ size: e, isHover: u, isDark: t = !0, disabled: a = !1, type: n }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement('div', {
                            className: s()(S.base, S[`base__${e}`], S[`base__${k(u, t, a)}`]),
                            style: { backgroundImage: E(n, F.Icon, g.None, e, n === _.Collection ? A.None : i) },
                        });
                    },
                    N = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
                    },
                    x = (e, u) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case u:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    O = ({ size: e, title: u, isHover: t, disabled: a = !1, isGold: n = !1 }) =>
                        r().createElement(
                            'div',
                            { className: s()(N.base, N[`base__${e}`], N[`base__${x(a, t)}`], n && N.base__gold) },
                            u,
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
                    L = ({ count: e, disabled: u = !1, onClick: t, size: n }) => {
                        const i = (0, a.useState)(!1),
                            o = i[0],
                            d = i[1],
                            E = 1 === e ? M.title.awardSingle() : M.title.awardMultiple(),
                            m = u ? M.description.awardDisabled() : M.description.award(),
                            A = (0, a.useCallback)(() => {
                                u || (c.$.playClick(), t());
                            }, [u, t]);
                        return r().createElement(
                            l.i,
                            { body: m, isEnabled: Boolean(m) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        I.base,
                                        I[`base__${n}`],
                                        u ? I.base__disabled : I.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: A,
                                },
                                r().createElement(b, { size: n, isHover: o, type: _.Award, disabled: u }),
                                r().createElement(C, { size: n, isHover: o, type: _.Award, disabled: u }),
                                r().createElement(T, { size: n, isHover: o, type: _.Award, disabled: u, isDark: !1 }),
                                r().createElement(y, { size: n, count: e, disabled: u }),
                                r().createElement(O, { size: n, isHover: o, title: E, disabled: u, isGold: !0 }),
                                !u &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(I.shine, I.shine__left) }),
                                        r().createElement('div', { className: s()(I.shine, I.shine__right) }),
                                        r().createElement('div', { className: I.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: I.blinkShape },
                                            r().createElement('div', { className: I.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    $ = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    U = R.strings.battle_pass.awardsWidget,
                    G = ({ count: e, onClick: u, size: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1];
                        return r().createElement(
                            l.i,
                            { body: U.description.coin(), isEnabled: Boolean(U.description.coin()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()($.base, $[`base__${t}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (c.$.playClick(), u());
                                    },
                                },
                                r().createElement(b, { size: t, isHover: i }),
                                r().createElement(C, { size: t, isHover: i }),
                                r().createElement(T, { size: t, isHover: i, type: _.Coin }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(O, { size: t, isHover: i, title: U.title.coin() }),
                            ),
                        );
                    },
                    z = {
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
                    H = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let u = e.value,
                        t = e.isEmpty,
                        a = e.className,
                        n = e.size,
                        i = void 0 === n ? 'normal' : n,
                        o = e.fadeInAnimation,
                        l = void 0 !== o && o,
                        c = e.hide,
                        d = void 0 !== c && c,
                        E = e.maximumNumber,
                        _ = void 0 === E ? 99 : E,
                        m = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, H);
                    const A = t ? null : u,
                        F = 'string' == typeof A;
                    if ((A && !F && A < 0) || 0 === A) return null;
                    const g = A && !F && A > _,
                        D = s()(
                            z.base,
                            z[`base__${i}`],
                            l && z.base__animated,
                            d && z.base__hidden,
                            !A && z.base__pattern,
                            t && z.base__empty,
                            a,
                        );
                    return r().createElement(
                        'div',
                        j({ className: D }, m),
                        r().createElement('div', { className: z.bg }),
                        r().createElement('div', { className: z.pattern }),
                        r().createElement(
                            'div',
                            { className: s()(z.value, F && z.value__text) },
                            g ? _ : A,
                            g && r().createElement('span', { className: z.plus }, '+'),
                        ),
                    );
                };
                var Z = t(3815);
                const V = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    q = R.strings.battle_pass.awardsWidget,
                    Y = ({ count: e, maxCount: u, newItemsCount: t, hasTrigger: n, size: i, onClick: o }) => {
                        const d = (0, a.useState)(!1),
                            E = d[0],
                            A = d[1],
                            F = u === e,
                            g = i === m.Small && n,
                            D = F ? q.description.collectionCompleted() : q.description.collection(),
                            p = (0, Z.z)(() => {
                                (c.$.playClick(), o());
                            });
                        return r().createElement(
                            l.i,
                            { body: D, isEnabled: Boolean(D) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(V.base, V[`base__${i}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), A(!0));
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                    onClick: p,
                                },
                                r().createElement(b, { size: i, isHover: E, type: _.Coin, highlighted: g }),
                                r().createElement(C, { size: i, isHover: E }),
                                r().createElement(T, { size: i, isHover: E, type: _.Collection }),
                                r().createElement(y, {
                                    size: i,
                                    count: e,
                                    maxCount: u,
                                    state: F ? P.Completed : P.InProgress,
                                }),
                                r().createElement(O, { size: i, isHover: E, title: q.title.collection() }),
                                t > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: V.bubble },
                                        r().createElement(W, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var K = t(514);
                const X = {
                        base: 'CommanderAward_base_11',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    Q = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: u, tankmenScreenID: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            c = Q.description.commander(),
                            d =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${t}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return r().createElement(
                            l.i,
                            { body: c, isEnabled: Boolean(c) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(X.base, X[`base__${u}`], i && X.base__hover),
                                    onMouseEnter: () => {
                                        (K.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => o(!1),
                                    onClick: () => {
                                        (K.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                r().createElement(b, { size: u, isHover: i }),
                                r().createElement(C, { size: u, isHover: i }),
                                r().createElement(O, { size: u, isHover: i, title: Q.title.commander() }),
                                r().createElement('div', {
                                    className: X.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_ef', base__big: 'TalerAward_base__big_6b' },
                    ue = R.strings.battle_pass.awardsWidget,
                    te = ({ count: e, onClick: u, size: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1];
                        return r().createElement(
                            l.i,
                            { body: ue.description.taler() },
                            r().createElement(
                                'div',
                                {
                                    className: s()(ee.base, ee[`base__${t}`], i && ee.base__hover),
                                    onMouseEnter: () => {
                                        (K.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (K.hY.click(), u());
                                    },
                                },
                                r().createElement(b, { size: t, isHover: i }),
                                r().createElement(C, { size: t, isHover: i }),
                                r().createElement(T, { size: t, isHover: i, type: _.Taler }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(O, { size: t, isHover: i, title: ue.title.taler() }),
                            ),
                        );
                    },
                    ae = {
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
                    re = R.strings.battle_pass.awardsWidget,
                    ne = ({ count: e, onClick: u, size: t }) => {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            o = n[1],
                            c = Boolean(e),
                            d = c ? _.Ticket : void 0;
                        return r().createElement(
                            l.i,
                            { body: re.description.ticket(), isEnabled: Boolean(re.description.ticket()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(ae.base, ae[`base__${t}`], c && ae.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (K.hY.sound('bp_highlight_02'), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (K.hY.sound('play'), u());
                                    },
                                },
                                r().createElement(b, { size: t, isHover: i, type: d }),
                                r().createElement(C, { size: t, isHover: i, type: d }),
                                r().createElement(T, { size: t, isHover: i, type: _.Ticket, isDark: !c }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(O, { size: t, isHover: i, title: re.title.ticket(), isGold: c }),
                                c &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(ae.shine, ae.shine__left) }),
                                        r().createElement('div', { className: s()(ae.shine, ae.shine__right) }),
                                        r().createElement('div', { className: ae.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: ae.blinkShape },
                                            r().createElement('div', { className: ae.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var se = t(3215),
                    ie = t(3946);
                const oe = (0, se.q3)()(
                        ({ observableModel: e, externalModel: u }) => {
                            const t = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                a = (0, ie.Om)((e) => {
                                    const a = t.root.get(),
                                        r = a.talerCount,
                                        n = a.notChosenRewardCount,
                                        s = a.bpcoinCount,
                                        i = a.ticketsCount,
                                        o = a.isChooseRewardsEnabled,
                                        l = a.tankmenScreenID,
                                        c = a.isTalerEnabled,
                                        d = a.isBpCoinEnabled,
                                        E = a.isTicketsEnabled,
                                        m = t.collectionEntryPoint.get(),
                                        A = m.collectionItemCount,
                                        F = m.newCollectionItemCount,
                                        g = m.maxCollectionItemCount,
                                        D = m.isFirstEnter,
                                        C = m.isCollectionsEnabled;
                                    return [
                                        {
                                            type: _.Award,
                                            props: {
                                                size: e,
                                                count: n,
                                                disabled: !o,
                                                onClick: u.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: n > 0,
                                        },
                                        {
                                            type: _.Ticket,
                                            props: {
                                                size: e,
                                                count: i,
                                                onClick: u.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: E,
                                        },
                                        {
                                            type: _.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: u.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: _.Taler,
                                            props: { size: e, count: r, onClick: u.createCallbackNoArgs('showTalers') },
                                            condition: c,
                                        },
                                        {
                                            type: _.Collection,
                                            props: {
                                                size: e,
                                                count: A,
                                                maxCount: g,
                                                newItemsCount: F,
                                                hasTrigger: D,
                                                onClick: u.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: C,
                                        },
                                        {
                                            type: _.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                tankmenScreenID: l,
                                                onClick: u.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: 0 !== l,
                                        },
                                    ];
                                });
                            return Object.assign({}, t, { computes: { awardsList: a } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    le = oe[0],
                    ce = oe[1],
                    de = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    Ee = (0, o.Pi)(({ size: e, classNames: u }) => {
                        const t = ce().model;
                        return r().createElement(
                            'div',
                            { className: s()(de.base, de[`base__${e}`], null == u ? void 0 : u.base) },
                            i.UI(
                                t.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    r().createElement(
                                        'div',
                                        { key: e.type, className: s()(de.award, null == u ? void 0 : u.award) },
                                        ((e, u) => {
                                            switch (e) {
                                                case _.Award:
                                                    return r().createElement(L, u);
                                                case _.Ticket:
                                                    return r().createElement(ne, u);
                                                case _.Coin:
                                                    return r().createElement(G, u);
                                                case _.Taler:
                                                    return r().createElement(te, u);
                                                case _.Collection:
                                                    return r().createElement(Y, u);
                                                case _.Commander:
                                                    return r().createElement(J, u);
                                                default:
                                                    return (console.warn('Unknown award type: ', e), null);
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    _e = ({ rootId: e, size: u = m.Small, context: t = 'model', classNames: a }) =>
                        r().createElement(
                            le,
                            { options: { context: t, rootId: e } },
                            r().createElement(Ee, { size: u, classNames: a }),
                        );
            },
            8546: (e, u, t) => {
                let a, r, n, s;
                (!(function (e) {
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
                    })(s || (s = {})));
            },
            8470: (e, u, t) => {
                t.d(u, { t: () => n });
                var a = t(7363);
                const r = (0, a.createContext)(void 0);
                function n() {
                    const e = (0, a.useContext)(r);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            8030: (e, u, t) => {
                t.d(u, { N: () => a });
                var a = {};
                (t.r(a), t.d(a, { Provider: () => A, useApi: () => _, useHandleKeydown: () => m }));
                var r = t(3138),
                    n = t(3815),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5521);
                class l {
                    constructor() {
                        this.items = [];
                    }
                    get length() {
                        return this.items.length;
                    }
                    push(e) {
                        this.items.push(e);
                    }
                    pop() {
                        return this.items.pop();
                    }
                    peek() {
                        return this.items[this.items.length - 1];
                    }
                    clear() {
                        this.items = [];
                    }
                    includes(e) {
                        return this.items.includes(e);
                    }
                    some(e) {
                        return this.items.some(e);
                    }
                    remove(e) {
                        const u = this.items.indexOf(e);
                        return -1 !== u && (this.items.splice(u, 1), !0);
                    }
                    isEmpty() {
                        return 0 === this.items.length;
                    }
                    toArray() {
                        return this.items.slice();
                    }
                }
                var c = t(4598);
                const d = () => {
                        const e = new Map();
                        function u(u) {
                            const t = e.get(u);
                            if (t) return t;
                            const a = new l();
                            return (e.set(u, a), a);
                        }
                        function t(u, t) {
                            const a = e.get(u);
                            return !!a && a.remove(t);
                        }
                        return {
                            handlers: e,
                            obtain: u,
                            register: function (e, a) {
                                if (e === o.n.NONE) return c.jv;
                                const r = u(e);
                                return (r.includes(a) || r.push(a), () => t(e, a));
                            },
                            unregister: t,
                            takeCurrent: function (u) {
                                const t = e.get(u);
                                if (!t) return;
                                const a = t.peek();
                                return a || void 0;
                            },
                        };
                    },
                    E = (0, s.createContext)(void 0);
                function _() {
                    const e = (0, s.useContext)(E);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function m(e, u, t) {
                    const a = (0, n.z)((e) => {
                            r.O.view.isEventHandled() || (u(e), r.O.view.setEventHandled(), t && e.stopPropagation());
                        }),
                        i = _(),
                        o = (0, s.useMemo)(() => i.keydown.register(e, a), [i, e, a]);
                    (0, s.useEffect)(() => o, [o]);
                }
                const A = (e) => {
                    const u = (0, s.useMemo)(d, []);
                    (0, s.useEffect)(() => {
                        function e(e) {
                            const t = u.takeCurrent(e.keyCode);
                            t && t(e);
                        }
                        return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
                    });
                    const t = (0, s.useMemo)(
                        () => ({ keydown: { register: u.register, unregister: u.unregister } }),
                        [u],
                    );
                    return i().createElement(E.Provider, { value: t }, e.children);
                };
            },
            6444: (e, u, t) => {
                t.d(u, { tv: () => a.t });
                var a = t(8470),
                    r = t(7363);
                (0, r.createContext)(void 0);
            },
            615: (e, u, t) => {
                let a;
                (t.d(u, { C: () => a }),
                    (function (e) {
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
                    })(a || (a = {})));
            },
            5216: (e, u, t) => {
                let a, r;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(a || (a = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(r || (r = {})));
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
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
            },
            5287: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            2468: (e, u, t) => {
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
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, u, t) => {
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
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            1609: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
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
                };
            },
            7476: (e, u, t) => {
                t.d(u, { Z: () => a });
                const a = {
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
                };
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
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
                    for (var [u, t, a] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 4051),
        (() => {
            var e = { 4051: 0, 7737: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(9574));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
