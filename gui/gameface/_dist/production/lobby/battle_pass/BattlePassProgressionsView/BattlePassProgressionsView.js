(() => {
    'use strict';
    var __webpack_modules__ = {
            7109: (e, t, a) => {
                a.d(t, { L$: () => c.L, qE: () => c.q, u5: () => d });
                var u = a(9849),
                    n = a.n(u),
                    r = a(4170),
                    s = a(4029),
                    o = a(7363),
                    i = a.n(o),
                    l = a(6290),
                    c = a(2262);
                const d = ({
                    children: e,
                    size: t,
                    disabled: a,
                    mixClass: u,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: g,
                    onClick: b,
                    isFocused: p = !1,
                    type: h = c.L.primary,
                    soundHover: v = 'highlight',
                    soundClick: f = 'play',
                }) => {
                    const A = (0, o.useRef)(null),
                        C = (0, o.useState)(p),
                        F = C[0],
                        D = C[1],
                        B = (0, o.useState)(!1),
                        w = B[0],
                        y = B[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                F && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, o.useEffect)(() => {
                            D(p);
                        }, [p]),
                        i().createElement(
                            'div',
                            {
                                ref: A,
                                className: n()(
                                    l.Z.base,
                                    l.Z[`base__${h}`],
                                    a && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    F && l.Z.base__focus,
                                    w && l.Z.base__highlightActive,
                                    u,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== v && (0, s.G)(v), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    a || (E && E(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    if (a) return;
                                    const t = e.button === r.t.LEFT;
                                    (null !== f && t && (0, s.G)(f),
                                        m && m(e),
                                        p && (a || (A.current && (A.current.focus(), D(!0)))),
                                        t && y(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (g && g(e), y(!1));
                                },
                                onClick: function (e) {
                                    a || (b && b(e));
                                },
                            },
                            h !== c.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: l.Z.back }),
                                    i().createElement('span', { className: l.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: n()(l.Z.state, l.Z.state__default) },
                                i().createElement('span', { className: l.Z.stateDisabled }),
                                i().createElement('span', { className: l.Z.stateHighlightHover }),
                                i().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2262: (e, t, a) => {
                a.d(t, { L: () => u, q: () => n });
                let u = (function (e) {
                        return (
                            (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
                            (e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            e
                        );
                    })({});
            },
            1602: (e, t, a) => {
                a.d(t, { A: () => n });
                var u = a(828);
                const n = ({ value: e, format: t = 'integral' }) => {
                    const a = (function (e) {
                            return 'gold' === e ? u.B3.GOLD : u.B3.INTEGRAL;
                        })(t),
                        n = u.Z5.getNumberFormat(e, a);
                    return void 0 !== e && void 0 !== n ? n : null;
                };
            },
            2616: (e, t, a) => {
                a.d(t, { z: () => l });
                var u = a(9849),
                    n = a.n(u),
                    r = a(6758),
                    s = a(7363),
                    o = a.n(s),
                    i = a(4880);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: u = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(t, e) : t;
                    return o().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: n()(i.Z.base, a), key: `${t}-${l}` },
                                (0, r.Uw)(t, u, e).map((e, t) =>
                                    o().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            5603: (e, t, a) => {
                a.d(t, { z: () => u.z });
                var u = a(2616);
                a(1749);
            },
            1749: (e, t, a) => {
                a(6758);
            },
            7436: (e, t, a) => {
                a.d(t, { h: () => m });
                var u = a(9849),
                    n = a.n(u);
                const r =
                    (e, t) =>
                    (...a) => {
                        if (e(...a)) return t(...a);
                    };
                var s = a(4170),
                    o = a(4029),
                    i = a(7363),
                    l = a.n(i);
                const c = {
                        base: 'IconButton_base_edac2',
                        base__hovered: 'IconButton_base__hovered_bedf8',
                        base__disabled: 'IconButton_base__disabled_f97d3',
                        icon: 'IconButton_icon_e81ef',
                        icon__preview: 'IconButton_icon__preview_d420c',
                        icon__compare: 'IconButton_icon__compare_e0c48',
                        icon__small: 'IconButton_icon__small_bdc70',
                        icon__normal: 'IconButton_icon__normal_e10ba',
                        base__mouseDown: 'IconButton_base__mouseDown_af6e6',
                        label: 'IconButton_label_bb533',
                        label__small: 'IconButton_label__small_a0a45',
                        label__normal: 'IconButton_label__normal_ecd39',
                        base__visibleLabel: 'IconButton_base__visibleLabel_ed77c',
                    },
                    d = [
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
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.type,
                        a = e.children,
                        u = e.className,
                        m = e.classNames,
                        E = e.disabled,
                        g = void 0 !== E && E,
                        b = e.isVisibleLabel,
                        p = void 0 !== b && b,
                        h = e.soundHover,
                        v = void 0 === h ? R.sounds.highlight() : h,
                        f = e.soundClick,
                        A = void 0 === f ? R.sounds.play() : f,
                        C = e.size,
                        F = void 0 === C ? 'normal' : C,
                        D = e.onClick,
                        B = e.onMouseEnter,
                        w = e.onMouseLeave,
                        y = e.onMouseDown,
                        S = e.onMouseUp,
                        P = e.onFocus,
                        k = e.onBlur,
                        N = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, d);
                    const T = (0, i.useState)(!1),
                        x = T[0],
                        L = T[1],
                        I = (0, i.useState)(!1),
                        M = I[0],
                        O = I[1],
                        $ = (0, i.useRef)(null),
                        W = () => !1 === g,
                        z = (e) => W() && ((e) => e.button === s.t.LEFT)(e),
                        H = r(W, (e) => {
                            null == D || D(e);
                        }),
                        G = r(z, (e) => {
                            (L(!0), null == y || y(e), A && (0, o.G)(A));
                        }),
                        U = r(z, (e) => {
                            (L(!1), null == S || S(e));
                        }),
                        j = r(W, (e) => {
                            (O(!0), null == B || B(e), v && (0, o.G)(v));
                        }),
                        V = r(W, (e) => {
                            null == P || P(e);
                        }),
                        Z = r(W, (e) => {
                            null == k || k(e);
                        });
                    return l().createElement(
                        'div',
                        _(
                            {
                                ref: $,
                                className: n()(
                                    c.base,
                                    g && c.base__disabled,
                                    p && c.base__visibleLabel,
                                    !g && x && c.base__mouseDown,
                                    !g && M && c.base__hovered,
                                    u,
                                ),
                                onClick: H,
                                onMouseEnter: j,
                                onMouseLeave: (e) => {
                                    (O(!1), L(!1), null == w || w(e));
                                },
                                onMouseDown: G,
                                onMouseUp: U,
                                onFocus: V,
                                onBlur: Z,
                            },
                            N,
                        ),
                        l().createElement('div', {
                            className: n()(c.icon, c[`icon__${F}`], c[`icon__${t}`], null == m ? void 0 : m.icon),
                        }),
                        a &&
                            l().createElement(
                                'div',
                                { className: n()(c.label, c[`label__${F}`], null == m ? void 0 : m.label) },
                                a,
                            ),
                    );
                };
            },
            397: (e, t, a) => {
                a.d(t, { Y: () => i });
                var u = a(7475),
                    n = a(7363),
                    r = a(1958),
                    s = a(9478);
                const o = (function (e = u.O.client.getSize('rem')) {
                        const t = e.width,
                            a = e.height;
                        return Object.assign({ width: t, height: a }, (0, s.T)(t, a, r.j));
                    })(),
                    i = (0, n.createContext)(o);
            },
            68: (e, t, a) => {
                (a(7475), a(7363), a(397));
            },
            5191: (e, t, a) => {
                var u = a(7363),
                    n = a(3034),
                    r = a(397);
                const s = ['children'];
                (0, u.memo)((e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, s);
                    const o = (0, u.useContext)(r.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        _ = o.extraSmall,
                        m = o.extraLargeWidth,
                        E = o.largeWidth,
                        g = o.mediumWidth,
                        b = o.smallWidth,
                        p = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        v = o.largeHeight,
                        f = o.mediumHeight,
                        A = o.smallHeight,
                        C = o.extraSmallHeight,
                        F = { extraLarge: h, large: v, medium: f, small: A, extraSmall: C };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && i) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && d) return t;
                        if (a.extraSmall && _) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, n.H)(t, a, F);
                        if (a.largeWidth && E) return (0, n.H)(t, a, F);
                        if (a.mediumWidth && g) return (0, n.H)(t, a, F);
                        if (a.smallWidth && b) return (0, n.H)(t, a, F);
                        if (a.extraSmallWidth && p) return (0, n.H)(t, a, F);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && h) return t;
                            if (a.largeHeight && v) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && A) return t;
                            if (a.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                });
            },
            3034: (e, t, a) => {
                a.d(t, { H: () => u });
                const u = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            5579: (e, t, a) => {
                a.d(t, { YN: () => u.Y });
                (a(5191), a(68));
                var u = a(397);
            },
            1958: (e, t, a) => {
                a.d(t, { j: () => u });
                const u = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            9478: (e, t, a) => {
                a.d(t, { T: () => n, u: () => u });
                var u = (function (e) {
                    return (
                        (e.extraLarge = 'extraLarge'),
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
                        (e.extraSmallHeight = 'extraSmallHeight'),
                        e
                    );
                })(u || {});
                function n(e, t, a) {
                    const u = (function (e, t) {
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
                        })(e, a),
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
                        })(t, a),
                        r = Math.min(u, n);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
                    };
                }
            },
            5938: (e, t, a) => {
                a.d(t, { ru: () => g.r, _e: () => f, uu: () => i.uu, MR: () => h });
                var u = a(9849),
                    n = a.n(u),
                    r = a(8463),
                    s = a(7363),
                    o = a.n(s),
                    i = a(3097),
                    l = a(5713),
                    c = a(2858);
                const d = 'OptimizedProgressBar_base_eb321',
                    _ = 'OptimizedProgressBar_wrapper_f28f4',
                    m = 'OptimizedProgressBar_backgroundWrapper_a8cba',
                    E = 'OptimizedProgressBar_background_e6342';
                var g = a(233);
                const b = ['api', 'value', 'maxValue', 'theme', 'className'];
                function p() {
                    return (
                        (p = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        p.apply(null, arguments)
                    );
                }
                const h = () => ({ update: () => {} }),
                    v = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    f = (e) => {
                        let t = e.api,
                            a = e.value,
                            u = e.maxValue,
                            g = void 0 === u ? 100 : u,
                            h = e.theme,
                            f = void 0 === h ? i.uH : h,
                            A = e.className,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var u in e)
                                    if ({}.hasOwnProperty.call(e, u)) {
                                        if (-1 !== t.indexOf(u)) continue;
                                        a[u] = e[u];
                                    }
                                return a;
                            })(e, b);
                        const F = (0, s.useRef)(null),
                            D = (0, s.useRef)(null),
                            B = (0, s.useRef)(null),
                            w = (0, r.u)(0, a, g) / g,
                            y = (0, s.useCallback)(
                                (e) => {
                                    (B.current &&
                                        F.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, u) => {
                                            const n = (e - v(a, t)) | 0,
                                                s = (0, r.u)(0, a.offsetWidth, n);
                                            u.style.transform = `translateX(${s}px)`;
                                        })(e, F.current, B.current),
                                        D.current &&
                                            F.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: u, line: n },
                                            ) => {
                                                const s = Math.max(0, Math.floor(u.offsetWidth * a) - 8e3),
                                                    o = (e - v(u, t)) | 0,
                                                    i = (0, r.u)(0, s, o);
                                                n.style.transform = `translateX(${i}px)`;
                                            })(e, w, { line: D.current, container: F.current }));
                                },
                                [w],
                            ),
                            S = (0, s.useMemo)(() => (0, c.VQ)(f), [f]);
                        return (
                            (t.current.update = y),
                            o().createElement(
                                'div',
                                { className: n()(d, A), ref: F },
                                o().createElement(
                                    'div',
                                    { className: _ },
                                    o().createElement(
                                        'div',
                                        { className: m },
                                        o().createElement(
                                            'div',
                                            { style: S, className: E, ref: B },
                                            o().createElement(l.J, { size: C.size }),
                                        ),
                                    ),
                                    o().createElement(
                                        i.ko,
                                        p({}, C, {
                                            lineRef: D,
                                            value: a,
                                            theme: f,
                                            maxValue: g,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
            },
            3097: (e, t, a) => {
                a.d(t, { $u: () => d.$, ko: () => g, uH: () => m, uu: () => E });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(7947),
                    i = a(5713),
                    l = a(9536),
                    c = a(2858),
                    d = a(233),
                    _ = a(9859);
                a(6114);
                const m = c.Gh,
                    E = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = m,
                            size: a = d.$.Default,
                            animationSettings: u = E,
                            disabled: r = !1,
                            withoutBackground: g = !1,
                            value: b,
                            deltaFrom: p,
                            additionalKey: h,
                            lineRef: v,
                            onChangeAnimationState: f,
                            onEndAnimation: A,
                            onComplete: C,
                            className: F,
                        }) => {
                            const D = (0, _.S)(b, e, p);
                            return s().createElement(
                                'div',
                                { className: n()(o.Z.base, F, o.Z[`base__${a}`]), style: (0, c.VQ)(t) },
                                !g && s().createElement(i.J, { size: a }),
                                s().createElement(l.r, {
                                    size: a,
                                    lineRef: v,
                                    disabled: r,
                                    value: D.value,
                                    deltaFrom: D.deltaFrom,
                                    additionalKey: h,
                                    animationSettings: u,
                                    onEndAnimation: A,
                                    onChangeAnimationState: f,
                                    onComplete: C,
                                }),
                            );
                        },
                    );
            },
            5713: (e, t, a) => {
                a.d(t, { J: () => l });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(7947),
                    i = a(233);
                const l = ({ size: e = i.$.Default }) => {
                    const t = n()(o.Z.background, o.Z[`background__${e}`]);
                    return s().createElement('div', { className: t });
                };
            },
            8243: (e, t, a) => {
                a.d(t, { $: () => i });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(2234);
                const i = ({ size: e }) => {
                    const t = n()(o.Z.base, o.Z[`base__${e}`]);
                    return s().createElement('div', { className: t });
                };
            },
            9536: (e, t, a) => {
                a.d(t, { r: () => l });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6145),
                    s = a(3107),
                    o = a(5586);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = (0, u.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: u,
                        deltaFrom: l,
                        additionalKey: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                        onComplete: E,
                    }) => {
                        if (l === t)
                            return n().createElement(s.M, {
                                key: `${l}-${t}-${c}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: u,
                                onComplete: E,
                            });
                        const g = {
                            from: l,
                            to: t,
                            size: e,
                            additionalKey: c,
                            lineRef: a,
                            disabled: u,
                            animationSettings: d,
                            onComplete: E,
                            onEndAnimation: _,
                            onChangeAnimationState: m,
                        };
                        return d.withStack
                            ? n().createElement(o.F, g)
                            : n().createElement(r.H, i({ key: `${l}-${t}-${c}` }, g));
                    },
                );
            },
            2420: (e, t, a) => {
                a.d(t, { t: () => l });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(8243),
                    i = a(7760);
                const l = (0, r.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: u, isComplete: r, withoutBounce: l }) => {
                        const c = n()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                a && i.Z.base__disabled,
                                r && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            d = !a && !r;
                        return s().createElement(
                            'div',
                            { className: c, style: u, ref: t },
                            s().createElement('div', { className: i.Z.pattern }),
                            s().createElement('div', { className: i.Z.gradient }),
                            d && s().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2170: (e, t, a) => {
                a.d(t, { O: () => E });
                var u = a(9849),
                    n = a.n(u),
                    r = a(1652),
                    s = a(7363),
                    o = a.n(s),
                    i = a(8243),
                    l = a(6114),
                    c = a(5232);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: E,
                            to: g,
                            onEndAnimation: b,
                            onChangeAnimationState: p,
                            className: h,
                        }) => {
                            const v = g < u,
                                f = (0, s.useState)(l.S.Idle),
                                A = f[0],
                                C = f[1],
                                F = A === l.S.End,
                                D = A === l.S.Idle,
                                B = A === l.S.Grow,
                                w = A === l.S.Shrink,
                                y = (0, s.useCallback)(
                                    (e) => {
                                        (C(e), p && p(e));
                                    },
                                    [p],
                                ),
                                S = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, r.F)(() => {
                                            y(e);
                                        }, t),
                                    [y],
                                );
                            (0, s.useEffect)(() => {
                                if (!a)
                                    return D
                                        ? S(l.S.Grow, t)
                                        : B
                                          ? S(l.S.Shrink, e)
                                          : w
                                            ? S(l.S.End, e)
                                            : void (F && b && b());
                            }, [S, a, F, B, D, w, b, t, e]);
                            const P = (0, s.useMemo)(() => Object.assign({ width: '100%' }, m(e), d(v)), [v, e]),
                                k = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(e), d(v)), [v, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, _(v, u), m(e)), [u, v, e]),
                                N = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - u)}%` }, _(v, u), m(e)),
                                    [u, v, g, e],
                                );
                            if (F) return null;
                            const T = n()(c.Z.base, h, v && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: D ? R : N, className: T },
                                o().createElement(
                                    'div',
                                    { style: w ? k : P, className: c.Z.glow },
                                    o().createElement(i.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            1530: (e, t, a) => {
                a.d(t, { x: () => l });
                var u = a(1652),
                    n = a(7363),
                    r = a.n(n),
                    s = a(8243),
                    o = a(6114),
                    i = a(9822);
                const l = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: l,
                        size: c,
                        to: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const E = d < l,
                            g = (0, n.useState)(o.V.Idle),
                            b = g[0],
                            p = g[1],
                            h = b === o.V.In,
                            v = b === o.V.End,
                            f = b === o.V.Idle,
                            A = (0, n.useCallback)(
                                (e) => {
                                    (p(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, n.useEffect)(() => {
                            if (f && !a) {
                                const e = t;
                                return (0, u.F)(() => {
                                    A(o.V.In);
                                }, e);
                            }
                        }, [A, a, f, t]),
                            (0, n.useEffect)(() => {
                                if (h) {
                                    const a = e + t;
                                    return (0, u.F)(() => {
                                        (_ && _(), A(o.V.End));
                                    }, a);
                                }
                            }, [A, h, _, t, e]));
                        const C = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            F = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            D = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${E ? d : l}%` }),
                                [l, E, d],
                            );
                        return v
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: i.Z.base, style: D },
                                  r().createElement(
                                      'div',
                                      { style: f ? C : F, className: i.Z.delta },
                                      r().createElement(s.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            9143: (e, t, a) => {
                a.d(t, { F: () => i });
                var u = a(7363),
                    n = a.n(u),
                    r = a(2420),
                    s = a(2170),
                    o = a(6114);
                const i = (0, u.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const E = e < a,
                            g = (0, u.useState)(!1),
                            b = g[0],
                            p = g[1],
                            h = (0, u.useCallback)(
                                (e) => {
                                    (e === o.S.Shrink && p(!0), m && m(e));
                                },
                                [m],
                            ),
                            v = (0, u.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            f = (0, u.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(r.t, {
                                size: t,
                                lineRef: i,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: E && 0 === e,
                                baseStyles: b ? f : v,
                            }),
                            a >= 0 &&
                                n().createElement(s.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: h,
                                    freezed: d.freezed,
                                    onEndAnimation: _,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: d.delta.className,
                                }),
                        );
                    },
                );
            },
            1586: (e, t, a) => {
                a.d(t, { D: () => o });
                var u = a(7363),
                    n = a.n(u),
                    r = a(2420),
                    s = a(1530);
                const o = (0, u.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: o,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: d,
                        onEndAnimation: _,
                    }) => {
                        const m = (0, u.useMemo)(
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
                            n().createElement(r.t, { size: t, lineRef: o, disabled: i, isComplete: l, baseStyles: m }),
                            a >= 0 &&
                                n().createElement(s.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: _,
                                }),
                        );
                    },
                );
            },
            6145: (e, t, a) => {
                a.d(t, { H: () => c });
                var u = a(7363),
                    n = a.n(u),
                    r = a(233),
                    s = a(9143),
                    o = a(1586);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (0, u.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, i);
                    const d = (0, u.useState)(!1),
                        _ = d[0],
                        m = d[1],
                        E = (0, u.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== _ && m(e), e && t && t(), a && a());
                        }, [_, t, a, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(o.D, l({}, c, { onEndAnimation: E, isComplete: _ }));
                        case r.r.Growing:
                            return n().createElement(s.F, l({}, c, { onEndAnimation: E, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6114: (e, t, a) => {
                a.d(t, { S: () => u, V: () => n });
                let u = (function (e) {
                        return ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e);
                    })({}),
                    n = (function (e) {
                        return ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e);
                    })({});
            },
            5586: (e, t, a) => {
                a.d(t, { F: () => i });
                var u = a(7363),
                    n = a.n(u),
                    r = a(6145);
                const s = ['onEndAnimation'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const i = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, s);
                    const i = (0, u.useRef)({}),
                        l = (0, u.useCallback)(() => {
                            ((i.current.from = void 0), t && t());
                        }, [t]),
                        c = 'number' == typeof i.current.from ? i.current.from : a.from;
                    return (
                        (i.current.from = c),
                        n().createElement(
                            r.H,
                            o({}, a, {
                                onEndAnimation: l,
                                key: `${c}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            3107: (e, t, a) => {
                a.d(t, { M: () => s });
                var u = a(7363),
                    n = a.n(u),
                    r = a(2420);
                const s = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                    const i = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, u.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        n().createElement(r.t, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: a })
                    );
                };
            },
            2858: (e, t, a) => {
                a.d(t, { Gh: () => n, VQ: () => u, fV: () => r });
                const u = (e) => {
                        var t, a, u, n, r, s, o, i, l, c, d, _, m, E, g, b, p, h, v, f;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (a = e.bg) ? void 0 : a.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (u = null == (n = e.bg) ? void 0 : n.heightSmall) ? u : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (s = e.pattern.size) ? s : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (i = e.pattern.gradient)
                                    ? i
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (d = null == (_ = e.glowSettings) ? void 0 : _.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (m = null == (E = e.glowSettings) ? void 0 : E.height) ? m : '100rem',
                            '--progress-glow-small-width':
                                null != (g = null == (b = e.glowSettings) ? void 0 : b.smallWidth) ? g : '44rem',
                            '--progress-glow-small-height':
                                null != (p = null == (h = e.glowSettings) ? void 0 : h.smallHeight) ? p : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (v = null == (f = e.glowSettings) ? void 0 : f.mixBlendMode) ? v : 'lighten',
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
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: {
                            bgColorBase: 'rgba(200, 200, 200, 0.5)',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'rgba(200, 200, 200, 0.5)',
                        },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                        },
                        glow: 'R.images.gui.maps.icons.battlePass.progression.progress_glow_white',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#fff',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    s = {
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
                Object.assign({}, s, {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                    line: Object.assign({}, s.line, {
                        bgColorBase: '#83C6A5',
                        bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                    }),
                    pattern: Object.assign({}, s.pattern, {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                    }),
                });
            },
            233: (e, t, a) => {
                a.d(t, { $: () => u, r: () => n });
                let u = (function (e) {
                        return ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e);
                    })({}),
                    n = (function (e) {
                        return ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e);
                    })({});
            },
            9859: (e, t, a) => {
                a.d(t, { S: () => s });
                var u = a(8463),
                    n = a(7363);
                const r = (e, t, a) => {
                    if ('number' == typeof a) {
                        return ((0, u.u)(0, t, a) / t) * 100;
                    }
                    return e;
                };
                function s(e, t, a) {
                    return (0, n.useMemo)(() => {
                        const n = ((0, u.u)(0, t, e) / t) * 100;
                        return { value: n, deltaFrom: r(n, t, a) };
                    }, [a, t, e]);
                }
            },
            3359: (e, t, a) => {
                a.d(t, { Q: () => d });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(1672),
                    i = a(2486),
                    l = a(4692),
                    c = a(5261);
                const d = ({
                    name: e,
                    image: t,
                    isPeriodic: a = !1,
                    size: u = i.h2.Big,
                    special: r,
                    value: d,
                    valueType: _,
                    title: m,
                    style: E,
                    className: g,
                    classNames: b,
                    tooltipArgs: p,
                    periodicIconTooltipArgs: h,
                }) => {
                    const v = (0, l.c$)(u, r),
                        f = (0, l.i2)(r),
                        A = (0, l.m9)(d, _);
                    return s().createElement(
                        'div',
                        {
                            className: n()(c.Z.base, c.Z[`base__${u}`], i.oy.includes(e) && c.Z.base__normalize, g),
                            style: E,
                        },
                        s().createElement(
                            o.l,
                            { tooltipArgs: p, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == b ? void 0 : b.image) },
                                    v &&
                                        s().createElement('div', {
                                            className: n()(c.Z.highlight, null == b ? void 0 : b.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${v}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        s().createElement('div', {
                                            className: n()(c.Z.icon, null == b ? void 0 : b.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    f &&
                                        s().createElement('div', {
                                            className: n()(c.Z.overlay, null == b ? void 0 : b.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${f}_overlay)`,
                                            },
                                        }),
                                ),
                                A &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                _ === i.$h.MULTI && c.Z.info__multi,
                                                null == b ? void 0 : b.info,
                                            ),
                                        },
                                        A,
                                    ),
                                m && s().createElement('div', { className: c.Z.title }, m),
                            ),
                        ),
                        a &&
                            s().createElement(
                                o.l,
                                { tooltipArgs: h },
                                s().createElement('div', {
                                    className: n()(c.Z.timer, null == b ? void 0 : b.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2486: (e, t, a) => {
                a.d(t, { $h: () => r, A2: () => o, E4: () => u, h2: () => n, kK: () => s, oy: () => l, sh: () => i });
                let u = (function (e) {
                        return (
                            (e.Items = 'items'),
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
                            (e.Attachment = 'attachment'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
                            (e.Big = 'big'),
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
                            (e.S48x48 = 's48x48'),
                            e
                        );
                    })({}),
                    r = (function (e) {
                        return (
                            (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'),
                            e
                        );
                    })({}),
                    s = (function (e) {
                        return (
                            (e.ATTACHMENT_RARE = 'rare'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            e
                        );
                    })({}),
                    o = (function (e) {
                        return ((e.BATTLE_BOOSTER = 'battleBooster'), e);
                    })({}),
                    i = (function (e) {
                        return (
                            (e.ATTACHMENT_RARE = 'rare'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            e
                        );
                    })({});
                const l = [u.Attachment];
            },
            4692: (e, t, a) => {
                a.d(t, { c$: () => p, i2: () => h, m9: () => v, p3: () => d, pI: () => g, ry: () => E });
                var u = a(1602),
                    n = a(7363),
                    r = a.n(n),
                    s = a(2486);
                const o = [
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
                    i = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints, s.E4.EquipCoin],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    d = (e) =>
                        o.includes(e)
                            ? s.$h.MULTI
                            : i.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    m = ['engraving', 'background'],
                    E = (e, t = s.h2.Small) => {
                        const a = e.name,
                            u = e.type,
                            n = e.value,
                            r = e.icon,
                            o = e.item,
                            i = e.dogTagType,
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
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const u = _[e];
                                    if (u) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(u),
                                            r = n.$dyn(a);
                                        return r ? `${r}` : `${n.$dyn(m[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${r}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    g = (e, t, a) => {
                        const u = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            u,
                            a,
                        );
                    },
                    b = [s.h2.Small, s.h2.Big],
                    p = (e, t) => {
                        if (void 0 === t || !b.includes(e)) return null;
                        switch (t) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    h = (e) => {
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
                    v = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case s.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return r().createElement(u.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            8656: (e, t, a) => {
                a.d(t, { nS: () => u });
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                ('undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                function u() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
            },
            7925: (e, t, a) => {
                a.d(t, { $Q: () => f });
                var u = a(9849),
                    n = a.n(u),
                    r = a(8463),
                    s = a(8978),
                    o = a(7475),
                    i = a(9659),
                    l = a(5239),
                    c = a(4029),
                    d = a(7363),
                    _ = a.n(d),
                    m = a(8718),
                    E = a(8823);
                const g = 'disable',
                    b = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = () => {},
                    v = (e, t) => Math.max(20, e.offsetWidth * t),
                    f = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = p, onDrag: u = h }) => {
                        const f = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            F = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            B = e.stepTimeout || 100,
                            w = (0, d.useState)(b),
                            y = w[0],
                            S = w[1],
                            P = (0, d.useCallback)(
                                (e) => {
                                    (S(e),
                                        D.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current }));
                                },
                                [u],
                            ),
                            k = () => {
                                const t = F.current,
                                    a = D.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, u / n),
                                    i = (0, r.u)(0, 1, s / (n - u)),
                                    l = (t.offsetWidth - v(t, o)) * i;
                                ((a.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (A.current && C.current && F.current && D.current) {
                                            if (0 === e)
                                                return (A.current.classList.add(g), void C.current.classList.remove(g));
                                            if (
                                                ((t = F.current),
                                                (a = D.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (A.current.classList.remove(g), void C.current.classList.add(g));
                                            var t, a;
                                            (A.current.classList.remove(g), C.current.classList.remove(g));
                                        }
                                    })(l));
                            },
                            R = (0, i.z)(() => {
                                ((() => {
                                    const t = D.current,
                                        a = F.current,
                                        u = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && u && a)) return;
                                    const r = Math.min(1, u / n);
                                    ((t.style.width = `${v(a, r)}px`),
                                        (t.style.display = 'flex'),
                                        f.current &&
                                            (1 !== r
                                                ? f.current.classList.add(E.Z.base__active)
                                                : f.current.classList.remove(E.Z.base__active)));
                                })(),
                                    k());
                            });
                        ((0, d.useEffect)(() => (0, s.v)(R)),
                            (0, d.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            k();
                                        };
                                        let a = h;
                                        const u = () => {
                                            (a(), (a = (0, s.v)(R)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', R),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', u),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', R),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', u));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const t = o.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = F.current,
                                            i = D.current;
                                        if (!o || !i) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - y.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            u({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c }));
                                    }),
                                    a = o.O.client.events.mouse.up(() => {
                                        (t(), P(b));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, y.offset, y.pending, u, P]));
                        const N = (0, l.B)((t) => e.applyStepTo(t), B, [e]),
                            T = N[0],
                            x = N[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', x, !0),
                                () => document.removeEventListener('mouseup', x, !0)
                            ),
                            [x],
                        );
                        const L = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: n()(E.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: n()(E.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(m.Nm.Next));
                                },
                                onMouseUp: x,
                                ref: A,
                                onMouseEnter: L,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: n()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const u = D.current;
                                        if (u && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === u))
                                                P({ pending: !0, offset: t.screenX - u.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const u = D.current,
                                                        n = e.contentRef.current;
                                                    if (!u || !n) return;
                                                    const r = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > u.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: F,
                                    onMouseEnter: L,
                                },
                                _().createElement('div', { ref: D, className: n()(E.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: n()(E.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: n()(E.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(m.Nm.Prev));
                                },
                                onMouseUp: x,
                                ref: C,
                                onMouseEnter: L,
                            }),
                        );
                    });
            },
            2893: (e, t, a) => {
                a.d(t, { K: () => c });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(7925),
                    i = a(969),
                    l = a(4109);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: u,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: _,
                    getStepByRailClick: m,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = u || {};
                            return Object.assign({}, e, { base: n()(l.Z.base, e.base) });
                        }, [u]),
                        b = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: n()(l.Z.defaultScrollArea, c) },
                            s().createElement(i.Area, { className: _, api: b, classNames: d }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: m, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            969: (e, t, a) => {
                (a.r(t),
                    a.d(t, {
                        Area: () => _,
                        Bar: () => i.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var u = a(9849),
                    n = a.n(u),
                    r = a(8978),
                    s = a(7363),
                    o = a.n(s),
                    i = a(7925),
                    l = a(2893),
                    c = a(4109),
                    d = a(8718);
                const _ = ({ api: e, className: t, classNames: a, children: u }) => (
                    (0, s.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: n()(c.Z.base, t) },
                        o().createElement(
                            'div',
                            {
                                className: n()(c.Z.wrapper, null == a ? void 0 : a.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: n()(c.Z.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                u,
                            ),
                        ),
                    )
                );
                ((_.Bar = i.$Q), (_.Default = l.K));
            },
            8718: (e, t, a) => {
                a.d(t, { Nm: () => n.Nm, T5: () => s, he: () => n.he });
                var u = a(7475),
                    n = a(4977);
                const r = {
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var a;
                            e.style.transform = `translateX(-${0 | (null != (a = t.value.scrollPosition) ? a : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                        forceTriggerMouseMove: u.O.view.forceTriggerMouseMove,
                    },
                    s = (0, n.EO)(r);
            },
            5154: (e, t, a) => {
                a.d(t, { $Q: () => A });
                var u = a(9849),
                    n = a.n(u),
                    r = a(8463),
                    s = a(8978),
                    o = a(7475),
                    i = a(9659),
                    l = a(5239),
                    c = a(4029),
                    d = a(7363),
                    _ = a.n(d),
                    m = a(4222),
                    E = a(1905);
                const g = 'disable',
                    b = () => {},
                    p = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    v = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    f = (e, t) => Math.max(20, e.offsetHeight * t),
                    A = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = h, onDrag: u = b }) => {
                        const A = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            F = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(p),
                            S = y[0],
                            P = y[1],
                            k = (0, d.useCallback)(
                                (e) => {
                                    (P(e),
                                        B.current &&
                                            u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: B.current }));
                                },
                                [u],
                            ),
                            R = (0, i.z)(() => {
                                const t = B.current,
                                    a = D.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && n && t && a)) return;
                                const r = Math.min(1, u / n);
                                return (
                                    (t.style.height = `${f(a, r)}px`),
                                    (t.style.display = 'flex'),
                                    A.current &&
                                        (1 !== r
                                            ? A.current.classList.add(E.Z.base__active)
                                            : A.current.classList.remove(E.Z.base__active)),
                                    r
                                );
                            }),
                            N = (0, i.z)(() => {
                                const t = D.current,
                                    a = B.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && t && a && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, u / n),
                                    i = (0, r.u)(0, 1, s / (n - u)),
                                    l = (t.offsetHeight - f(t, o)) * i;
                                ((a.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && F.current && D.current && B.current) {
                                            if (0 === Math.round(e))
                                                return (C.current.classList.add(g), void F.current.classList.remove(g));
                                            if (
                                                ((t = D.current),
                                                (a = B.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (C.current.classList.remove(g), void F.current.classList.add(g));
                                            var t, a;
                                            (C.current.classList.remove(g), F.current.classList.remove(g));
                                        }
                                    })(l));
                            }),
                            T = (0, i.z)(() => {
                                v(e, () => {
                                    (R(), N());
                                });
                            });
                        ((0, d.useEffect)(() => (0, s.v)(T)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    v(e, () => {
                                        N();
                                    });
                                };
                                let a = b;
                                const u = () => {
                                    (a(), (a = (0, s.v)(T)));
                                };
                                return (
                                    e.events.on('recalculateContent', T),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', u),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', T),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', u));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!S.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        k(p);
                                    }),
                                    a = o.O.client.events.mouse.move(([t]) => {
                                        v(e, (a) => {
                                            const n = D.current,
                                                r = B.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const o = t.screenY - S.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                u({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, S.offset, S.pending, u, k]));
                        const x = (0, l.B)((t) => e.applyStepTo(t), w, [e]),
                            L = x[0],
                            I = x[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', I, !0),
                                () => document.removeEventListener('mouseup', I, !0)
                            ),
                            [I],
                        );
                        const M = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: n()(E.Z.base, t.base), ref: A, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: n()(E.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: M,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: n()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const u = B.current;
                                        if (u && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === u))
                                                k({ pending: !0, offset: t.screenY - u.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    B.current &&
                                                        v(e, (u) => {
                                                            if (!u) return;
                                                            const n = a(e),
                                                                r = e.clampPosition(u, u.scrollTop + n * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > u.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: D,
                                    onMouseEnter: M,
                                },
                                _().createElement('div', { ref: B, className: n()(E.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: n()(E.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: n()(E.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Prev));
                                },
                                onMouseUp: I,
                                ref: F,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            4444: (e, t, a) => {
                a.d(t, { K: () => c });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r),
                    o = a(5154),
                    i = a(3934),
                    l = a(2459);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: u,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: _,
                    getStepByRailClick: m,
                    onDrag: E,
                }) => {
                    const g = (0, r.useMemo)(() => {
                            const e = u || {};
                            return Object.assign({}, e, { base: n()(l.Z.base, e.base) });
                        }, [u]),
                        b = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: n()(l.Z.area, c) },
                            s().createElement(i.Area, { className: d, classNames: _, api: b }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: m, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            3934: (e, t, a) => {
                (a.r(t),
                    a.d(t, { Area: () => _, Bar: () => i.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var u = a(9849),
                    n = a.n(u),
                    r = a(8978),
                    s = a(7363),
                    o = a.n(s),
                    i = a(5154),
                    l = a(4444),
                    c = a(4222),
                    d = a(2459);
                const _ = ({ className: e, classNames: t, children: a, api: u }) => (
                    (0, s.useEffect)(() => (0, r.v)(u.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: n()(d.Z.base, e), ref: u.wrapperRef, onWheel: u.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: n()(d.Z.content, null == t ? void 0 : t.content), ref: u.contentRef },
                            a,
                        ),
                    )
                );
                _.Default = l.K;
            },
            4222: (e, t, a) => {
                a.d(t, { Nm: () => u.Nm, c4: () => r });
                var u = a(4977);
                const n = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? u.Nm.Next : u.Nm.Prev),
                    },
                    r = (0, u.EO)(n);
            },
            4977: (e, t, a) => {
                a.d(t, { EO: () => m, Nm: () => d, he: () => _ });
                var u = a(8463),
                    n = a(8978),
                    r = a(7845),
                    s = a(603),
                    o = a(9659),
                    i = a(3024),
                    l = a(7363),
                    c = a(1374);
                let d = (function (e) {
                    return ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e);
                })({});
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    m = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: d,
                        getWrapperSize: m,
                        forceTriggerMouseMove: E,
                    }) => {
                        const g = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return s <= r ? 0 : (0, u.u)(r, s, a);
                        };
                        return (u = {}) => {
                            const b = u.settings,
                                p = void 0 === b ? _ : b,
                                h = (0, l.useRef)(null),
                                v = (0, l.useRef)(null),
                                f = (0, l.useRef)(!1),
                                A = (0, s.q)(),
                                C = (0, i.f)(
                                    () => {
                                        E && E();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (a(t, e), A.trigger('change', e), E && f.current && C());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                w = (0, l.useCallback)(
                                    (e, t, a) => {
                                        var u;
                                        const n = D.scrollPosition.get(),
                                            r = (null != (u = D.scrollPosition.goal) ? u : 0) - n;
                                        return g(e, t * a + r + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const u = h.current;
                                        u &&
                                            B.start({
                                                scrollPosition: g(u, e),
                                                immediate: t,
                                                reset: a,
                                                config: p.animationConfig,
                                                from: { scrollPosition: g(u, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, p.animationConfig, D.scrollPosition],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            a = v.current;
                                        if (!t || !a) return;
                                        const u = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return m(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, p.step),
                                            n = w(t, e, u);
                                        y(n);
                                    },
                                    [y, w, p.step],
                                ),
                                P = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && S(d(e)),
                                            h.current && A.trigger('mouseWheel', e, D.scrollPosition, t(h.current)));
                                    },
                                    [D.scrollPosition, S, A],
                                ),
                                k = (0, r.M)(
                                    () =>
                                        (0, n.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (y(g(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [y, D.scrollPosition.goal],
                                ),
                                R = (0, o.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = g(e, D.scrollPosition.goal);
                                    (t !== D.scrollPosition.goal && y(t, { immediate: !0 }),
                                        A.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = h.current;
                                    if (!e || !E) return;
                                    const t = () => {
                                            f.current = !0;
                                        },
                                        a = () => {
                                            f.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', a),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', a));
                                        }
                                    );
                                }, [h]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (v.current ? m(v.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: p.step.clampedArrowStepTimeout,
                                    clampPosition: g,
                                    handleMouseWheel: P,
                                    applyScroll: y,
                                    applyStepTo: S,
                                    contentRef: h,
                                    wrapperRef: v,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: R,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, y, S, A.off, A.on, R, P, B, p.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            2884: (e, t, a) => {
                a.d(t, { X: () => n });
                var u = a(969);
                const n = { Vertical: a(3934), Horizontal: u };
            },
            9279: (e, t, a) => {
                a.d(t, { A: () => d });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7475),
                    s = a(7363),
                    o = a.n(s),
                    i = a(3242);
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
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.caption,
                        a = e.onClick,
                        u = e.goto,
                        d = e.classNames,
                        _ = e.onMouseEnter,
                        m = e.onMouseLeave,
                        E = e.onMouseDown,
                        g = e.onMouseUp,
                        b = e.side,
                        p = void 0 === b ? 'left' : b,
                        h = e.type,
                        v = void 0 === h ? 'back' : h,
                        f = e.soundHover,
                        A = void 0 === f ? 'highlight' : f,
                        C = e.soundClick,
                        F = void 0 === C ? 'play' : C,
                        D = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, l);
                    const B = (0, s.useCallback)(
                            (e) => {
                                (null == _ || _(e), r.O.sound.play.sound(A));
                            },
                            [_, A],
                        ),
                        w = (0, s.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        ),
                        y = (0, s.useCallback)(
                            (e) => {
                                (null == E || E(e), r.O.sound.play.sound(F));
                            },
                            [E, F],
                        ),
                        S = (0, s.useCallback)(
                            (e) => {
                                null == g || g(e);
                            },
                            [g],
                        );
                    return o().createElement(
                        'div',
                        c(
                            {
                                className: n()(
                                    i.Z.base,
                                    i.Z[`base__${v}`],
                                    i.Z[`base__${p}`],
                                    null == d ? void 0 : d.base,
                                ),
                                onMouseEnter: B,
                                onMouseLeave: w,
                                onMouseDown: y,
                                onMouseUp: S,
                                onClick: a,
                            },
                            D,
                        ),
                        'info' !== v && o().createElement('div', { className: i.Z.shine }),
                        o().createElement(
                            'div',
                            {
                                className: n()(
                                    i.Z.icon,
                                    i.Z[`icon__${v}`],
                                    i.Z[`icon__${p}`],
                                    null == d ? void 0 : d.icon,
                                ),
                            },
                            o().createElement('div', { className: n()(i.Z.glow, null == d ? void 0 : d.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: n()(i.Z.caption, i.Z[`caption__${v}`], null == d ? void 0 : d.caption) },
                            t,
                        ),
                        u && o().createElement('div', { className: n()(i.Z.goto, null == d ? void 0 : d.goto) }, u),
                    );
                };
            },
            941: (e, t, a) => {
                a.d(t, { t: () => i });
                var u = a(7363),
                    n = a.n(u),
                    r = a(2278);
                const s = ['children'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, s);
                    return n().createElement(
                        r.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
            },
            1672: (e, t, a) => {
                a.d(t, { l: () => l });
                var u = a(7363),
                    n = a.n(u),
                    r = a(941),
                    s = a(6485),
                    o = a(2278);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const u = n().createElement('div', { className: a }, e);
                    if (t.header || t.body) return n().createElement(s.i, t, u);
                    const l = t.contentId;
                    return l ? n().createElement(o.u, i({}, t, { contentId: l }), u) : n().createElement(r.t, t, u);
                };
            },
            6485: (e, t, a) => {
                a.d(t, { i: () => l });
                var u = a(2278),
                    n = a(7363),
                    r = a.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var u in e)
                                    if ({}.hasOwnProperty.call(e, u)) {
                                        if (-1 !== t.indexOf(u)) continue;
                                        a[u] = e[u];
                                    }
                                return a;
                            })(e, s);
                        const E = (0, n.useMemo)(() => {
                            const e = Object.assign({}, _, { body: a, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, a, l, c, _]);
                        return r().createElement(
                            u.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2278: (e, t, a) => {
                a.d(t, { u: () => l });
                var u = a(3485),
                    n = a(828),
                    r = a(7363);
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
                function o(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const i = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            b = void 0 !== g && g,
                            p = e.decoratorId,
                            h = void 0 === p ? 0 : p,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            F = e.onShow,
                            D = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var u in e)
                                    if ({}.hasOwnProperty.call(e, u)) {
                                        if (-1 !== t.indexOf(u)) continue;
                                        a[u] = e[u];
                                    }
                                return a;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => C || (0, u.F)().resId, [C]),
                            S = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(a, h, { isMouseEvent: !0, on: !0, arguments: o(n) }, y),
                                    F && F(),
                                    (w.current.isVisible = !0));
                            }, [a, h, n, y, F]),
                            P = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(a, h, { on: !1 }, y),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1));
                                }
                            }, [a, h, y, D]),
                            k = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && P();
                            }, [f, P]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return f
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(S, E ? 100 : 400)),
                                                      l && l(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (P(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === b && P(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === b && P(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var R;
                    };
            },
            8463: (e, t, a) => {
                a.d(t, { u: () => u });
                const u = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            8978: (e, t, a) => {
                a.d(t, { v: () => u });
                const u = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                ((a = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                        }
                    );
                };
            },
            1652: (e, t, a) => {
                a.d(t, { F: () => u });
                const u = (e, t) => {
                    let a;
                    const u = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        ('function' == typeof a && a(), clearTimeout(u));
                    };
                };
            },
            9352: (e, t, a) => {
                a.d(t, { U: () => o });
                var u = a(7475);
                function n(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return r(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === a && e.constructor && (a = e.constructor.name),
                                    'Map' === a || 'Set' === a
                                        ? Array.from(e)
                                        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                          ? r(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: a = s, context: r = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = o.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const u = a(t),
                            n = r.split('.').reduce((e, t) => e[t], u);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, n);
                    };
                    return {
                        subscribe: (a, n) => {
                            const s = 'string' == typeof n ? `${r}.${n}` : r,
                                i = u.O.view.addModelObserver(s, t, !0);
                            return (o.set(i, a), e && a(l(n)), i);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const a = l(t);
                            return (...t) => {
                                a(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, a = n(o.keys()); !(e = a()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            5090: (e, t, a) => {
                a.d(t, { q3: () => i });
                var u = a(9723),
                    n = a(3305),
                    r = a(7363),
                    s = a.n(r),
                    o = a(9352);
                const i = () => (e, t) => {
                    const a = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, r.useRef)([]),
                                m = (a, r, s) => {
                                    var i;
                                    const l = o.U(r),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === a ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        E = e({
                                            mode: a,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
                                                        r = n.LO.box(t, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        s = n.LO.box(r, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        s = n.LO.box(r, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const u = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(u[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            s = Object.entries(r),
                                                            o = s.reduce(
                                                                (e, [t, a]) => ((e[a] = n.LO.box(u[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([t, a]) => {
                                                                            o[a].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        g = { mode: a, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === a && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(i),
                                b = g[0],
                                p = g[1],
                                h = (0, r.useState)(() => m(i, l, d)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? f(m(b, l, d)) : (E.current = !0);
                                }, [d, b, l]),
                                (0, r.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (v.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [v],
                                ),
                                s().createElement(a.Provider, { value: v }, c)
                            );
                        },
                        () => (0, r.useContext)(a),
                    ];
                };
            },
            873: (e, t, a) => {
                a.d(t, { UI: () => i, f8: () => l, s_: () => n, yR: () => r });
                (a(6758), a(828));
                var u = a(6609);
                const n = 1e3,
                    r = 60,
                    s = 60 * r,
                    o = 24 * s,
                    i = (Date.now(), u.Ew.getRegionalDateTime);
                u.Ew.getFormattedDateTime;
                function l(e = 0) {
                    let t = e;
                    const a = Math.trunc(t / o);
                    t -= a * o;
                    const u = Math.trunc(t / s);
                    t -= u * s;
                    const n = Math.trunc(t / r);
                    return ((t -= n * r), { days: a, hours: u, minutes: n, seconds: t });
                }
            },
            5034: (e, t, a) => {
                (a.r(t),
                    a.d(t, {
                        mouse: () => d,
                        off: () => l,
                        on: () => i,
                        onMinimize: () => o,
                        onResize: () => r,
                        onScaleUpdated: () => s,
                    }));
                var u = a(8277),
                    n = a(1708);
                const r = (0, u.E)('clientResized'),
                    s = (0, u.E)('self.onScaleUpdated'),
                    o = (0, u.E)('clientMinimized'),
                    i = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function u() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${t}`,
                                        s = c[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        u(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                u(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), u());
                        },
                        enable() {
                            ((e.enabled = !0), u());
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
            3157: (e, t, a) => {
                (a.r(t),
                    a.d(t, {
                        events: () => u,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var u = a(5034),
                    n = a(9703);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1708: (e, t, a) => {
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            9703: (e, t, a) => {
                function u(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => n, G: () => u });
            },
            8277: (e, t, a) => {
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            7475: (e, t, a) => {
                a.d(t, { O: () => s });
                var u = a(3157),
                    n = a(8133),
                    r = a(3925);
                const s = { view: a(7553), client: u, sound: r.ZP, intl: n.N };
            },
            8133: (e, t, a) => {
                a.d(t, { N: () => u });
                const u = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, t, a) => {
                a.d(t, { ZP: () => o, hY: () => s });
                var u = a(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, u.playSound)(n[t])), e), {}),
                    s = Object.assign({}, r, { sound: u.playSound }),
                    o = { play: s, setRTPC: u.setRTPC };
            },
            5544: (e, t, a) => {
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => u }));
            },
            3163: (e, t, a) => {
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, t, a) => {
                a.d(t, { U: () => n });
                var u = a(8277);
                const n = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            7553: (e, t, a) => {
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => l,
                        arabic2roman: () => S,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => k,
                        enableFullScreenModeSupported: () => T,
                        events: () => s.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => P,
                        getFontNames: () => y,
                        getScale: () => h,
                        getSize: () => E,
                        getViewGlobalPosition: () => b,
                        initExternalPaddings: () => x,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => v,
                        remToPx: () => f,
                        resize: () => g,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => N,
                    }));
                var u = a(1308),
                    n = a(5544),
                    r = a(3163),
                    s = a(7576),
                    o = a(2319);
                const i = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function d(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function _(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = u.cg;
                function P() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const k = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function x(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            a = t.top,
                            u = t.right,
                            n = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${a}rem`),
                            e.style.setProperty('--external-padding-right', `${u}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            2319: (e, t, a) => {
                a.d(t, { qP: () => l });
                const u = ['args'];
                const n = 2,
                    r = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var u in e)
                                        if ({}.hasOwnProperty.call(e, u)) {
                                            if (-1 !== t.indexOf(u)) continue;
                                            a[u] = e[u];
                                        }
                                    return a;
                                })(t, u);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? n : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            9723: (e, t, a) => {
                a.d(t, { jv: () => n, yR: () => u });
                function u(e) {
                    return e;
                }
                function n() {
                    return !1;
                }
                console.log;
            },
            3485: (e, t, a) => {
                a.d(t, { F: () => u });
                const u = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        u = R.invalid('resId'),
                        n = '';
                    var r;
                    t &&
                        ((n = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== a &&
                            window.subViews[a] &&
                            (u = window.subViews[a].id));
                    return { callerUrl: n, caller: a, stack: t, resId: u };
                };
            },
            995: (e, t, a) => {
                a.d(t, { au: () => n });
                var u = a(5129);
                (a(1453), a(4434), a(8291), a(6756), a(5609));
                const n = u.Z;
            },
            9314: (e, t, a) => {
                a(7363);
            },
            7845: (e, t, a) => {
                a.d(t, { M: () => n });
                var u = a(7363);
                const n = (e, t = []) => {
                    const a = (0, u.useRef)(),
                        n = (0, u.useCallback)((...t) => {
                            (a.current && a.current(), (a.current = e(...t)));
                        }, t);
                    return (
                        (0, u.useEffect)(
                            () => () => {
                                a.current && a.current();
                            },
                            [n],
                        ),
                        n
                    );
                };
            },
            5129: (e, t, a) => {
                a.d(t, { Z: () => s });
                var u = a(873),
                    n = a(7363);
                const r = () => {},
                    s = (e = 0, t, a = 0, s = r) => {
                        const o = (0, n.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        r = t || (e > 2 * u.yR ? u.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - n) / u.s_);
                                            null !== a && t <= a ? (l(a), s && s(), clearInterval(o)) : l(t);
                                        }, r * u.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, a, s]),
                            i
                        );
                    };
            },
            1453: (e, t, a) => {
                a(7363);
            },
            603: (e, t, a) => {
                a.d(t, { q: () => s });
                var u = a(7363);
                function n(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return r(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === a && e.constructor && (a = e.constructor.name),
                                    'Map' === a || 'Set' === a
                                        ? Array.from(e)
                                        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                          ? r(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const s = () => {
                    const e = (0, u.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        a = (e, a) => {
                            t(e).set(a, a);
                        },
                        r = (e, a) => {
                            t(e).delete(a);
                        },
                        s = (e, ...a) => {
                            for (var u, r = n(t(e).values()); !(u = r()).done; ) {
                                (0, u.value)(...a);
                            }
                        };
                    return (0, u.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                };
            },
            9659: (e, t, a) => {
                a.d(t, { z: () => r });
                var u = a(7363);
                const n = [];
                function r(e) {
                    const t = (0, u.useRef)(e);
                    return (
                        (0, u.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, u.useCallback)((...e) => (0, t.current)(...e), n)
                    );
                }
            },
            8925: (e, t, a) => {
                a.d(t, { GS: () => l, cJ: () => s });
                var u = a(7363),
                    n = a(5579),
                    r = a(1958);
                let s = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    o = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    i = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const l = () => {
                    const e = (0, u.useContext)(n.YN),
                        t = e.width,
                        a = e.height,
                        r = ((e) => {
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
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: a };
                };
            },
            6756: (e, t, a) => {
                a(9314);
                var u = a(828);
                a(7363);
                u.Sw.instance;
            },
            5609: (e, t, a) => {
                var u = a(828);
                a(7363);
                u.Sw.instance;
            },
            4434: (e, t, a) => {
                a(7363);
            },
            5239: (e, t, a) => {
                a.d(t, { B: () => n });
                var u = a(7363);
                function n(e, t, a = []) {
                    const n = (0, u.useRef)(0),
                        r = (0, u.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, a || []);
                    (0, u.useEffect)(() => r, [r]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, u.useCallback)((a) => {
                            (0 !== n.current && r(), (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, s),
                        r,
                    ];
                }
            },
            1527: (e, t, a) => {
                a.d(t, { V: () => r });
                var u = a(7363),
                    n = a(7475);
                const r = () => {
                    const e = (0, u.useState)(n.O.view.getScale()),
                        t = e[0],
                        a = e[1];
                    return (
                        (0, u.useEffect)(() => {
                            const e = () => {
                                a(n.O.view.getScale());
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
                };
            },
            8291: (e, t, a) => {
                (a(7475), a(7363));
            },
            3024: (e, t, a) => {
                a.d(t, { f: () => r });
                var u = a(8658),
                    n = a(7363);
                function r(e, t, a) {
                    const r = (0, n.useMemo)(() => (0, u.Z)(a, e), t);
                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                }
            },
            4020: (e, t, a) => {
                a.d(t, { n: () => u });
                let u = (function (e) {
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
            8739: (e, t, a) => {
                function u(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                a.d(t, { MH: () => n, UI: () => r, kd: () => s });
                const n = u;
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, u) => t(null == e ? void 0 : e.value, a, u));
                }
                function s(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(n(e, a), a, e)) return a;
                    }
                }
            },
            4170: (e, t, a) => {
                a.d(t, { t: () => u });
                let u = (function (e) {
                    return (
                        (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'),
                        e
                    );
                })({});
            },
            1308: (e, t, a) => {
                a.d(t, { HG: () => o, cg: () => r });
                const u = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let a = n.length - 1; a >= 0; a--) for (; e >= n[a]; ) ((t += u[a]), (e -= n[a]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (s ? `${e}` : r(e));
            },
            4029: (e, t, a) => {
                function u(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => n, G: () => u });
                const n = {
                    playHighlight() {
                        u('highlight');
                    },
                    playClick() {
                        u('play');
                    },
                    playYes() {
                        u('yes1');
                    },
                };
            },
            6758: (e, t, a) => {
                a.d(t, { BN: () => o, Uw: () => b, WU: () => r, e: () => i, uF: () => s, v2: () => n });
                var u = a(8354);
                let n = (function (e) {
                    return ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e);
                })({});
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    _ = (e, t, a = n.left) => e.split(t).reduce(a === n.left ? c : d, []),
                    m = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = n.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(a)) return m(e);
                        if ('ja' === a) {
                            return (0, u.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = n.left) => {
                            let a = [];
                            const u =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = l(e);
                            return (_(r, /( )/, t).forEach((e) => (a = a.concat(_(e, u, n.left)))), a);
                        })(e, t);
                    },
                    b = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : g(e, t)));
            },
            8658: (e, t, a) => {
                function u(e, t, a, u) {
                    let n,
                        r = !1,
                        s = 0;
                    function o() {
                        n && clearTimeout(n);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function d() {
                            ((s = Date.now()), a.apply(l, i));
                        }
                        r ||
                            (u && !n && d(),
                            o(),
                            void 0 === u && c > e
                                ? d()
                                : !0 !== t &&
                                  (n = setTimeout(
                                      u
                                          ? function () {
                                                n = void 0;
                                            }
                                          : d,
                                      void 0 === u ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((u = a), (a = t), (t = void 0)),
                        (i.cancel = function () {
                            (o(), (r = !0));
                        }),
                        i
                    );
                }
                a.d(t, { Z: () => u });
            },
            8973: (e, t, a) => {
                a.d(t, { Z: () => r });
                var u = a(7475);
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
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = u.O.view.addModelObserver(e, a, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(r) : (this._views[a] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            828: (e, t, a) => {
                a.d(t, { Sw: () => r.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => p, Eu: () => h });
                class u {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (u.__instance || (u.__instance = new u()), u.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const n = u;
                var r = a(8973);
                var s = a(6609);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(4020),
                    m = a(7475);
                const E = ['args'];
                function g(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        a = arguments;
                                    return new Promise(function (u, n) {
                                        var r = e.apply(t, a);
                                        function s(e) {
                                            g(r, u, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, u, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var u in e)
                                        if ({}.hasOwnProperty.call(e, u)) {
                                            if (-1 !== t.indexOf(u)) continue;
                                            a[u] = e[u];
                                        }
                                    return a;
                                })(t, E);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((u = n),
                                              Object.entries(u).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    f = () => v(o.CLOSE),
                    A = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = a(5533);
                const F = n.instance,
                    D = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, u, n = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = a.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: u || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: b(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => A(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            A(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: p,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const n = Object.prototype.toString.call(t[u]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < n.length; t++) a[u].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = D;
            },
            6609: (e, t, a) => {
                a.d(t, { Ew: () => r, Z5: () => u, cy: () => n });
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, a = 2) => systemLocale.getRealFormat(e, t, a),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    r = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            2016: (e, t, a) => {
                var u = a(7363),
                    n = a.n(u),
                    r = a(8978),
                    s = a(4020),
                    o = a(4029),
                    i = a(2041),
                    l = a(9994),
                    c = a(8862);
                let d = (function (e) {
                        return (
                            (e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            e
                        );
                    })({}),
                    _ = (function (e) {
                        return (
                            (e.NoAction = 'noAction'),
                            (e.Buy = 'buy'),
                            (e.BuyLevel = 'buyLevel'),
                            (e.ActivateChapter = 'activateChapter'),
                            e
                        );
                    })({}),
                    m = (function (e) {
                        return ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'), e);
                    })({});
                var E = a(5090),
                    g = a(9723),
                    b = a(8739),
                    p = a(5369),
                    h = a(5278);
                let v = (function (e) {
                        return ((e.left = 'left'), (e.right = 'right'), e);
                    })({}),
                    f = (function (e) {
                        return (
                            (e.COMPLETED = 'completed'),
                            (e.IN_PROGRESS = 'inProgress'),
                            (e.NOT_STARTED = 'notStarted'),
                            e
                        );
                    })({}),
                    A = (function (e) {
                        return (
                            (e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward'),
                            e
                        );
                    })({}),
                    C = (function (e) {
                        return ((e.back = 'back'), (e.forward = 'forward'), e);
                    })({}),
                    F = (function (e) {
                        return ((e.Default = 'default'), (e.Gray = 'gray'), e);
                    })({});
                const D = [d.Active, d.Completed],
                    B = (0, E.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    levels: e.array('levels.items'),
                                    widget3dStyle: e.object('widget3dStyle'),
                                    widget3dStyleVehicleInfo: e.object('widget3dStyle.vehicleInfo'),
                                    widgetFinalRewards: e.object('widgetFinalRewards'),
                                    vehicleInfo: e.object('widgetFinalRewards.vehicleInfo'),
                                    freeTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.free'),
                                    paidTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.paid'),
                                    styleInfo: e.object('widgetFinalRewards.styleInfo'),
                                    vehicleInfoFromStyle: e.object('widgetFinalRewards.styleInfo.vehicleInfo'),
                                    price: e.array('price'),
                                    freeFinalRewards: e.array('freeFinalRewards'),
                                    paidFinalRewards: e.array('paidFinalRewards'),
                                },
                                a = (0, p.Om)(() => b.UI(t.freeFinalRewards.get(), g.yR), { equals: g.jv }),
                                u = (0, p.Om)(() => b.UI(t.paidFinalRewards.get(), g.yR), { equals: g.jv }),
                                n = (0, p.Om)(() => t.root.get().chapterType === m.HOLIDAY),
                                r = (0, p.Om)(() =>
                                    Object.assign(
                                        { freeFinalRewards: (0, h.at)(a()) },
                                        u().length && { paidFinalRewards: (0, h.at)(u()) },
                                    ),
                                ),
                                s = (0, p.Om)(() => {
                                    const e = r(),
                                        t = e.freeFinalRewards;
                                    return !(!e.paidFinalRewards && t.mainReward === h.Hj.progressiveStyle);
                                }),
                                o = (0, p.Om)(() => t.root.get().chapterType === m.EXTRA),
                                i = (0, p.Om)(() => !(n() || o()), { equals: g.jv }),
                                l = (0, p.Om)(() => t.price.get().prices.length > 1),
                                c = (0, p.Om)((e) => (e ? t.paidTankmanInfo.get() : t.freeTankmanInfo.get())),
                                _ = (0, p.Om)((e) => {
                                    const a = t.levels.get(),
                                        u = b.MH(a, e - 1);
                                    return (
                                        u || console.warn(`level info not found for number: ${e}`),
                                        Object.assign({}, u, { maxLevel: a.length })
                                    );
                                }),
                                E = (0, p.Om)((e, t) => {
                                    const a = _(e);
                                    return t
                                        ? b.UI(a.freeRewardItems.items, (e) => Object.assign({}, e))
                                        : b.UI(a.paidRewardItems.items, (e) => Object.assign({}, e));
                                }),
                                v = (0, p.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.freePointsInLevel,
                                        u = e.currentPointsInLevel,
                                        n = e.chapterState,
                                        r = e.hasExtra,
                                        s = D.includes(n) || r ? u : a,
                                        o = _(1);
                                    return { current: s, total: null == o ? void 0 : o.levelPoints };
                                }),
                                A = (0, p.Om)((e, a) => {
                                    const u = t.root.get(),
                                        n = u.chapterState,
                                        r = u.currentLevel,
                                        s = u.potentialLevel,
                                        o = u.currentPointsInChapter,
                                        i = u.freePointsInChapter,
                                        l = _(e),
                                        c = l.levelPoints,
                                        m = l.maxLevel,
                                        E = a ? i : o,
                                        g = a ? s : r;
                                    return e < g || (g === m && E === c * m)
                                        ? f.COMPLETED
                                        : e === g && (n !== d.NotStarted || E > 0)
                                          ? f.IN_PROGRESS
                                          : f.NOT_STARTED;
                                }),
                                C = (0, p.Om)((e, a, u, n) => {
                                    const r = t.root.get();
                                    return ((r.currentLevel - 1) * e + (r.currentPointsInLevel / n) * a) / u;
                                }),
                                F = (0, p.Om)(() => {
                                    const e = t.levels.get();
                                    return e[e.length - 1].value.levelPoints;
                                }),
                                B = (0, p.Om)((e, t) => {
                                    const a = _(e),
                                        u = a.needTakeFree,
                                        n = a.needTakePaid;
                                    return t ? n : u;
                                }),
                                w = (0, p.Om)((e, a) => {
                                    const u = t.root.get(),
                                        n = u.isBattlePassPurchased,
                                        r = u.chapterState,
                                        s = _(e),
                                        o = A(e, !1);
                                    return {
                                        cardStatus: { current: o, potential: A(e, !0) },
                                        isRare: s.isRare && o !== f.IN_PROGRESS,
                                        isDisabled: (a && !n) || (r !== d.Active && o === f.NOT_STARTED),
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    isMulticurrency: l,
                                    getFreeFinalRewards: a,
                                    getPaidFinalRewards: u,
                                    regularBattlePass: i,
                                    getFinalRewardTankmanInfo: c,
                                    currentLevelPoints: v,
                                    levelInfo: _,
                                    levelRewardItems: E,
                                    getCurrentWidth: C,
                                    getTotalLevelPoints: F,
                                    isRewardNeedTake: B,
                                    cardStates: w,
                                    isLayoutWithExtraWidget: s,
                                    getFinalRewardsDescription: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            chapterActivate: e.createCallbackNoArgs('onChapterActivate'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPreview: e.createCallbackNoArgs('widgetFinalRewards.onRewardPreviewClick'),
                            open3dStylePreview: e.createCallback((e) => ({ level: e }), 'widget3dStyle.onPreviewClick'),
                            onStyleBonusPreview: e.createCallback((e) => ({ bonusId: e }), 'onStyleBonusPreview'),
                            showTankmen: e.createCallbackNoArgs('widgetFinalRewards.showTankmen'),
                            openInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            viewLoad: e.createCallbackNoArgs('onViewLoaded'),
                            finishLevelsAnimation: e.createCallbackNoArgs('onLevelsAnimationFinished'),
                            takeReward: e.createCallback(({ level: e }) => ({ level: e }), 'onTakeClick'),
                            finishAnimation: e.createCallbackNoArgs('onFinishedAnimation'),
                        }),
                    ),
                    w = (B[0], B[1]);
                var y = a(9849),
                    S = a.n(y),
                    P = a(1705);
                const k = 'BattlePassProgressionsViewContent_base_b4bfc',
                    N = 'BattlePassProgressionsViewContent_base__extra_adca5',
                    T = 'BattlePassProgressionsViewContent_base__extraChapter_a7db9',
                    x = 'BattlePassProgressionsViewContent_header_eb2f2',
                    L = 'BattlePassProgressionsViewContent_progression_e83d6',
                    I = 'BattlePassProgressionsViewContent_progression__extraChapter_bdad6',
                    M = 'BattlePassProgressionsViewContent_extraChapterWidget_d53a9',
                    O = 'BattlePassProgressionsViewContent_footer_e10f1';
                var $ = a(5603),
                    W = a(7436),
                    z = a(6485),
                    H = a(2278),
                    G = a(1623);
                var U = a(6758),
                    j = a(828);
                const V = 'AdditionalRewardInfo_rewardText_d8769',
                    Z = 'AdditionalRewardInfo_subTitle_f6f8c',
                    q = 'AdditionalRewardInfo_subTitleTextWrapper_c0df5',
                    Y = 'AdditionalRewardInfo_subTitleText_f44dc',
                    K = 'AdditionalRewardInfo_subTitleText__truncated_ca484',
                    X = 'AdditionalRewardInfo_infoIcon_af118';
                function Q(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                function J(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, n) {
                            var r = e.apply(t, a);
                            function s(e) {
                                Q(r, u, n, s, o, 'next', e);
                            }
                            function o(e) {
                                Q(r, u, n, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const ee = R.strings.battle_pass.progression.extraChapterWidget,
                    te = (0, i.Pi)(({ additionalReward: e }) => {
                        const t = w().model,
                            a = t.widgetFinalRewards,
                            r = t.styleInfo,
                            s = t.vehicleInfo.get().vehicleName,
                            o = a.get().battleQuest,
                            i = (0, u.useState)(!1),
                            l = i[0],
                            c = i[1],
                            d = (0, u.useRef)(null),
                            _ = (0, u.useCallback)(
                                J(function* () {
                                    yield (0, j.Eu)();
                                    const e = d.current;
                                    e && c(e.scrollWidth > e.offsetWidth);
                                }),
                                [],
                            );
                        var m;
                        return (
                            (m = () => (
                                _(),
                                engine.on('clientResized', _),
                                () => {
                                    engine.off('clientResized', _);
                                }
                            )),
                            (0, u.useEffect)(m, []),
                            n().createElement(
                                n().Fragment,
                                null,
                                e === h.Hj.style &&
                                    n().createElement($.z, {
                                        classMix: V,
                                        text: ee.vehicleSubTitle(),
                                        binding: { styleName: r.get().styleName },
                                    }),
                                e === h.Hj.battleQuest &&
                                    n().createElement(
                                        H.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: o },
                                        },
                                        n().createElement(
                                            'div',
                                            { className: Z },
                                            n().createElement(
                                                'div',
                                                { className: q },
                                                n().createElement(
                                                    'div',
                                                    { className: S()(Y, l && K), ref: d },
                                                    (0, U.uF)(ee.styleSubTitle(), { vehicleName: s }),
                                                ),
                                            ),
                                            n().createElement('div', { className: X }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    ae = 'StyleDescription_rewardTitle_fddf9',
                    ue = 'StyleDescription_rewardTitle__singleReward_b1406',
                    ne = 'StyleDescription_title_f6096',
                    re = 'StyleDescription_title__singleReward_deef2',
                    se = 'StyleDescription_vehicleTitle_bad22',
                    oe = 'StyleDescription_vehicleName_d37ee',
                    ie = 'StyleDescription_vehicleTypeIcon_ec0e1',
                    le = 'StyleDescription_vehicleInHangar_dd569',
                    ce = 'StyleDescription_remark_cbc89',
                    de = 'StyleDescription_lockIcon_d6936';
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const me = R.strings.battle_pass.progression.extraChapterWidget,
                    Ee = (0, i.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = w(),
                            u = a.model,
                            r = u.styleInfo,
                            s = u.vehicleInfoFromStyle,
                            o = u.root,
                            i = u.computes,
                            l = a.controls,
                            c = o.get().isBattlePassPurchased,
                            d = r.get(),
                            _ = d.styleName,
                            m = d.isVehicleInHangar,
                            E = i.getPaidFinalRewards().length;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(W.h, { type: 'preview', size: 'normal', onClick: l.openPreview }),
                            n().createElement(
                                'div',
                                { className: S()(ae, !E && ue) },
                                E ? me.style3DTitle() : me.styleTitle(),
                            ),
                            n().createElement($.z, {
                                classMix: S()(ne, !E && re),
                                text: me.styleName(),
                                binding: { styleName: _ },
                            }),
                            !E &&
                                n().createElement(
                                    'div',
                                    { className: se },
                                    n().createElement($.z, {
                                        text: me.forLabel(),
                                        binding: {
                                            vehicleName: n().createElement(
                                                G.U4,
                                                _e({}, s.get(), {
                                                    type: G.b0.whiteOrange,
                                                    className: oe,
                                                    classNames: { typeIcon: ie },
                                                }),
                                            ),
                                        },
                                    }),
                                    m &&
                                        n().createElement(
                                            z.i,
                                            { body: me.inHangarTooltip() },
                                            n().createElement('div', { className: le }),
                                        ),
                                ),
                            e && n().createElement(te, { additionalReward: e }),
                            t &&
                                !c &&
                                n().createElement(
                                    H.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: ce },
                                        n().createElement('div', { className: de }),
                                        n().createElement('div', null, me.styleRemark()),
                                    ),
                                ),
                        );
                    });
                var ge = a(7109),
                    be = a(8803);
                const pe = 'TankmanDescription_title_d186e',
                    he = 'TankmanDescription_title__noVoice_ff9a1',
                    ve = 'TankmanDescription_name_cd527',
                    fe = 'TankmanDescription_skills_f59f9',
                    Ae = 'TankmanDescription_skill_a894b',
                    Ce = 'TankmanDescription_skill__paidReward_ade21',
                    Fe = 'TankmanDescription_description_b1972',
                    De = 'TankmanDescription_lockIcon_d2053',
                    Be = 'TankmanDescription_lockText_f0e23',
                    we = 'TankmanDescription_showCommander_ee53b',
                    ye = 'TankmanDescription_close_a1d1c';
                var Se = a(1652),
                    Pe = a(7959);
                const ke = 'Voice_base_fa280',
                    Re = 'Voice_icon_fdd16',
                    Ne = 'Voice_icon__speaker_b1b3a',
                    Te = 'Voice_icon__wave0_c5759',
                    xe = 'Voice_base__animate_d775f',
                    Le = 'Voice_icon__wave1_aa782',
                    Ie = 'Voice_icon__wave2_cf111',
                    Me = R.strings.battle_pass.progression.extraChapterWidget,
                    Oe = (() => {
                        const e = Math.ceil(Pe.k9 / 800);
                        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
                    })(),
                    $e = ({ groupName: e }) => {
                        const t = (0, u.useState)(!1),
                            a = t[0],
                            r = t[1],
                            s = (0, u.useCallback)(() => {
                                a || ((0, o.G)(R.sounds.play()), (0, o.G)(e), r(!0));
                            }, [a, e]);
                        return (
                            (0, u.useEffect)(() => {
                                a &&
                                    (0, Se.F)(() => {
                                        r(!1);
                                    }, Oe.totalDuration);
                            }, [a]),
                            n().createElement(
                                z.i,
                                { body: Me.voiceoverTooltip() },
                                n().createElement(
                                    'div',
                                    {
                                        className: S()(ke, a && xe),
                                        onClick: s,
                                        onMouseEnter: () => {
                                            (0, o.G)(R.sounds.bp_highlight());
                                        },
                                        style: {
                                            '--animation-duration': `${Oe.duration}ms`,
                                            '--animation-iteration-count': Oe.iterationCount,
                                        },
                                    },
                                    n().createElement('div', { className: S()(Re, Ne) }),
                                    n().createElement('div', { className: S()(Re, Te) }),
                                    n().createElement('div', { className: S()(Re, Le) }),
                                    n().createElement('div', { className: S()(Re, Ie) }),
                                ),
                            )
                        );
                    },
                    We = R.strings.battle_pass.progression.extraChapterWidget,
                    ze = R.strings.battle_pass.awardsWidget.description.commander(),
                    He = (0, i.Pi)(({ isPaidReward: e }) => {
                        const t = w(),
                            a = t.model,
                            u = t.controls,
                            r = a.root.get(),
                            s = r.tankmenScreenID,
                            o = r.isBattlePassPurchased,
                            i = a.computes.getFinalRewardTankmanInfo(e),
                            l = i.tankman,
                            c = i.hasVoice,
                            d = i.skills,
                            _ = i.groupName,
                            m = a.computes.getFinalRewardsDescription(),
                            E = m.freeFinalRewards,
                            g = m.paidFinalRewards,
                            b = E.mainReward === h.Hj.tankman && (null == g ? void 0 : g.mainReward) === h.Hj.tankman;
                        return n().createElement(
                            n().Fragment,
                            null,
                            c && n().createElement($e, { groupName: _ }),
                            n().createElement('div', { className: S()(pe, !c && he) }, We.tankman()),
                            n().createElement('div', { className: ve }, l),
                            d.length > 0 &&
                                n().createElement(
                                    'div',
                                    { className: fe },
                                    n().createElement(be.C, { skills: d, className: S()(Ae, e && Ce) }),
                                ),
                            e &&
                                !o &&
                                n().createElement(
                                    H.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: Fe },
                                        n().createElement('div', { className: De }),
                                        n().createElement('div', { className: Be }, We.labelWithBP()),
                                    ),
                                ),
                            Boolean(s) &&
                                !b &&
                                n().createElement(
                                    z.i,
                                    { body: ze, isEnabled: Boolean(ze) },
                                    n().createElement(
                                        'div',
                                        { className: we },
                                        n().createElement(
                                            ge.u5,
                                            {
                                                type: ge.L$.ghost,
                                                size: ge.qE.small,
                                                mixClass: ye,
                                                onClick: u.showTankmen,
                                            },
                                            We.commanderVoices(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var Ge = a(873),
                    Ue = a(995);
                const je = (e) => (e < 10 ? '0' + e : e),
                    Ve = 'Timer_base_d6532',
                    Ze = 'Timer_light_bc7e9',
                    qe = 'Timer_icon_d5ed6',
                    Ye = 'Timer_value_b3666',
                    Ke = ({ expireTime: e = 0 }) => {
                        const t = (0, Ue.au)(e, 1),
                            a = `${(u = (0, Ge.f8)(t)).days ? (0, U.WU)(R.strings.common.duration.days(), { days: u.days }) : ''} ${je(u.hours)} : ${je(u.minutes)} : ${je(u.seconds)}`;
                        var u;
                        return n().createElement(
                            z.i,
                            { body: R.strings.battle_pass.progression.extraChapterWidget.timer() },
                            n().createElement(
                                'div',
                                { className: Ve },
                                n().createElement('div', { className: qe }),
                                n().createElement('div', { className: Ye }, a),
                                n().createElement('div', { className: Ze }),
                                n().createElement('div', { className: Ze }),
                            ),
                        );
                    };
                var Xe = a(8925);
                const Qe = {
                    vehicleBg: 'VehicleDescription_vehicleBg_b6750',
                    vehicleBg__description: 'VehicleDescription_vehicleBg__description_f2c68',
                    vehicleCaption: 'VehicleDescription_vehicleCaption_cc988',
                    description: 'VehicleDescription_description_b38b0',
                    rewardLabel: 'VehicleDescription_rewardLabel_b3ad2',
                    rewardDescription: 'VehicleDescription_rewardDescription_a88bc',
                    rewardLockIcon: 'VehicleDescription_rewardLockIcon_daee0',
                    rewardLockText: 'VehicleDescription_rewardLockText_cbb9b',
                };
                var Je = a(1308);
                const et = 'VehicleInfo_base_b33d9',
                    tt = 'VehicleInfo_type_e1f52',
                    at = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u, classNames: r }) =>
                        n().createElement(
                            'div',
                            { className: S()(et, null == r ? void 0 : r.base) },
                            (0, Je.cg)(e),
                            n().createElement('div', {
                                className: S()(tt, null == r ? void 0 : r.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, U.BN)(a)}${u ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    ut = R.strings.battle_pass.progression.extraChapterWidget,
                    nt = (0, i.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = w(),
                            u = a.model,
                            r = u.vehicleInfo,
                            s = u.root,
                            o = u.computes,
                            i = a.controls,
                            l = r.get(),
                            c = l.vehicleType,
                            d = l.isElite,
                            _ = l.vehicleName,
                            m = l.vehicleShortName,
                            E = l.vehicleLvl,
                            g = l.vehicleNation,
                            b = (0, Xe.GS)().mediaSize,
                            p = s.get(),
                            h = p.isBattlePassPurchased,
                            v = p.seasonNum,
                            f = o.getPaidFinalRewards().length,
                            A = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${g})` },
                            C = b > Xe.cJ.Medium ? 14 : 12,
                            F = _.length > C ? m : _,
                            D = ut.tank.description.$num(v);
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement('div', {
                                className: S()(Qe.vehicleBg, !f && Qe.vehicleBg__description),
                                style: A,
                            }),
                            n().createElement(W.h, { type: 'preview', size: 'normal', onClick: i.openPreview }),
                            n().createElement('div', { className: Qe.vehicleCaption }, ut.vehicleCaption()),
                            n().createElement(at, {
                                classNames: { base: Qe.vehicleInfo },
                                vehicleLvl: E,
                                vehicleName: F,
                                vehicleType: c,
                                isElite: d,
                            }),
                            !f &&
                                D &&
                                n().createElement(
                                    'div',
                                    { className: Qe.description },
                                    n().createElement($.z, { text: D }),
                                ),
                            e &&
                                n().createElement(
                                    'div',
                                    { className: Qe.rewardLabel },
                                    n().createElement(te, { additionalReward: e }),
                                ),
                            t &&
                                !h &&
                                n().createElement(
                                    H.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: Qe.rewardDescription },
                                        n().createElement('div', { className: Qe.rewardLockIcon }),
                                        n().createElement('div', { className: Qe.rewardLockText }, ut.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    rt = 'ExtraChapterWidget_base_b8ad4',
                    st = 'ExtraChapterWidget_widgetWrapper_f315a',
                    ot = 'ExtraChapterWidget_base__styleReward_c2dbf',
                    it = 'ExtraChapterWidget_glow_eb869',
                    lt = 'ExtraChapterWidget_glow__styleReward_b7662',
                    ct = 'ExtraChapterWidget_content_ce739',
                    dt = 'ExtraChapterWidget_content__left_e9784',
                    _t = 'ExtraChapterWidget_content__singleReward_fc56e',
                    mt = 'ExtraChapterWidget_separatorBg_dc707',
                    Et = 'ExtraChapterWidget_timer_fb615',
                    gt = 'Separator_base_f1a76',
                    bt = 'Separator_separatorBg_dc8e1',
                    pt = ({ classNames: e }) =>
                        n().createElement(
                            'div',
                            { className: S()(gt, null == e ? void 0 : e.base) },
                            n().createElement('div', { className: S()(bt, null == e ? void 0 : e.separatorBg) }),
                        );
                function ht() {
                    return (
                        (ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        ht.apply(null, arguments)
                    );
                }
                const vt = { [h.Hj.tankman]: He, [h.Hj.vehicle]: nt, [h.Hj.style]: Ee },
                    ft = ({ mainReward: e, additionalReward: t }, a) => {
                        const u = vt[e];
                        return u
                            ? n().createElement(u, ht({ additionalReward: t }, a))
                            : (console.warn('Unknown final reward type:', e), null);
                    },
                    At = (0, i.Pi)(() => {
                        const e = w().model,
                            t = e.root,
                            a = e.computes,
                            u = t.get().timeLeft,
                            r = a.getFinalRewardsDescription(),
                            s = r.freeFinalRewards,
                            o = r.paidFinalRewards,
                            i = a.regularBattlePass(),
                            l = !o && s.mainReward === h.Hj.style;
                        return n().createElement(
                            'div',
                            { className: S()(rt, l && ot) },
                            n().createElement(
                                'div',
                                { className: st },
                                n().createElement('div', { className: S()(it, l && lt) }),
                                n().createElement('div', { className: S()(ct, !o && _t) }, ft(s, { isPaidReward: !1 })),
                                o &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(pt, { classNames: { separatorBg: mt } }),
                                        n().createElement(
                                            'div',
                                            { className: S()(ct, dt) },
                                            ft(o, { isPaidReward: !0 }),
                                        ),
                                    ),
                            ),
                            !i && n().createElement('div', { className: Et }, n().createElement(Ke, { expireTime: u })),
                        );
                    });
                var Ct = a(2317);
                const Ft = {
                        base: 'Footer_base_ccb19',
                        light: 'Footer_light_b5cbe',
                        light__red: 'Footer_light__red_dad17',
                        light__green: 'Footer_light__green_d5b69',
                        buttonWrapper: 'Footer_buttonWrapper_a8a89',
                        buttonWrapper__multiCurrency: 'Footer_buttonWrapper__multiCurrency_a9025',
                        multicurrencyIcon: 'Footer_multicurrencyIcon_cddba',
                        button: 'Footer_button_ae41d',
                        labelContainer: 'Footer_labelContainer_c3614',
                        label: 'Footer_label_ef760',
                        days: 'Footer_days_ef320',
                        points: 'Footer_points_f060b',
                        status: 'Footer_status_bd881',
                        info: 'Footer_info_e4b35',
                        infoHover: 'Footer_infoHover_f09ce',
                        blink: 'Footer_blink_b8276',
                        move: 'Footer_move_b0add',
                    },
                    Dt = R.strings.battle_pass.progression,
                    Bt = R.strings.battle_pass.tooltips.footerBuyBtn,
                    wt = R.strings.battle_pass.tooltips.progression,
                    yt = (e, t) =>
                        e
                            ? t
                                ? Dt.activatePausedExtraChapterDescr()
                                : Dt.activateExtraChapterDescr()
                            : Dt.activateChapterDescr();
                let St = (function (e) {
                    return ((e.Red = 'red'), (e.Green = 'green'), (e.None = ''), e);
                })({});
                const Pt = (0, i.Pi)(() => {
                    const e = w(),
                        t = e.model,
                        a = e.controls,
                        u = (0, c.tv)(),
                        r = t.root.get(),
                        s = r.actionType,
                        o = r.chapterType,
                        i = r.hasExtra,
                        l = r.isSeasonEndingSoon,
                        E = r.freePointsInChapter,
                        g = r.currentPointsInChapter,
                        b = r.chapterState,
                        p = r.timeLeft,
                        v = r.chapterID,
                        f = o === m.EXTRA,
                        A = o === m.HOLIDAY,
                        C = b === d.Paused,
                        F = E - g,
                        D = s === _.ActivateChapter && F > 0,
                        B = s !== _.ActivateChapter && l,
                        y = t.computes.isMulticurrency() && s === _.Buy,
                        P = ((e) => {
                            switch (e) {
                                case _.Buy:
                                    return {
                                        buyBtnLabel: Dt.battlePassBuyBtn(),
                                        tooltip: Bt.battlePass.descr(),
                                        label: A ? Dt.battlePassBuyHolidayDescr() : Dt.battlePassBuyDescr(),
                                        warning: Dt.seasonEndingDescr(),
                                        buttonType: ge.L$.main,
                                        lightColor: St.Red,
                                        route: A ? Ct._.battlePass.buyPassConfirm : Ct._.battlePass.buyPass,
                                        params: {},
                                    };
                                case _.BuyLevel:
                                    return {
                                        buyBtnLabel: Dt.episodeBuyBtn(),
                                        tooltip: A ? Bt.episode.holidayDescr() : Bt.episode.descr(),
                                        label: Dt.episodeBuyDescr(),
                                        warning: Dt.seasonEndingDescr(),
                                        buttonType: ge.L$.main,
                                        lightColor: St.None,
                                        route: Ct._.battlePass.buyLevels,
                                        params: { chapterID: v },
                                    };
                                case _.ActivateChapter:
                                    return {
                                        buyBtnLabel: Dt.activateChapter(),
                                        tooltip: Bt.activateChapter.descr(),
                                        label: yt(f, C),
                                        warning: Dt.footer.freePointsDescr(),
                                        buttonType: ge.L$.primary,
                                        lightColor: St.Green,
                                        route: '',
                                        params: {},
                                    };
                                default:
                                    return {
                                        buyBtnLabel: '',
                                        tooltip: '',
                                        label: '',
                                        warning: '',
                                        buttonType: ge.L$.ghost,
                                        lightColor: St.Green,
                                        route: '',
                                        params: {},
                                    };
                            }
                        })(s),
                        k = P.buyBtnLabel,
                        R = P.tooltip,
                        N = P.label,
                        T = P.warning,
                        x = P.buttonType,
                        L = P.lightColor,
                        I = P.route,
                        M = P.params,
                        O = D || B ? T : N,
                        $ = (0, h.u6)(p);
                    return n().createElement(
                        'div',
                        { className: Ft.base },
                        n().createElement('div', { className: S()(Ft.light, Ft[`light__${L}`]) }),
                        n().createElement(
                            'div',
                            { className: Ft.labelContainer },
                            C && n().createElement('div', { className: Ft.status }, Dt.footer.status.paused()),
                            n().createElement('div', { className: Ft.label }, O),
                            B && n().createElement('div', { className: Ft.days }, $),
                            D &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Ft.points }, F),
                                    n().createElement(
                                        'div',
                                        { className: Ft.info },
                                        n().createElement(
                                            z.i,
                                            {
                                                header: wt.freePoints.header(),
                                                body: i ? wt.freePoints.bodyExceptExtra() : wt.freePoints.body(),
                                            },
                                            n().createElement('div', { className: Ft.infoHover }),
                                        ),
                                    ),
                                ),
                        ),
                        n().createElement(
                            'div',
                            { className: S()(Ft.buttonWrapper, y && Ft.buttonWrapper__multiCurrency) },
                            n().createElement(
                                z.i,
                                { body: R },
                                n().createElement(
                                    ge.u5,
                                    {
                                        type: x,
                                        size: ge.qE.medium,
                                        mixClass: Ft.button,
                                        onClick: () => {
                                            s === _.ActivateChapter
                                                ? a.chapterActivate()
                                                : I && u.push(I, { chapterID: M.chapterID || void 0, reset: M.reset });
                                        },
                                    },
                                    B && n().createElement('div', { className: Ft.blink }),
                                    k,
                                ),
                            ),
                            y &&
                                n().createElement(
                                    z.i,
                                    { body: Dt.footer.multicurrencyTooltip() },
                                    n().createElement('div', { className: Ft.multicurrencyIcon }),
                                ),
                        ),
                    );
                });
                var kt = a(8656),
                    Rt = a(9279),
                    Nt = a(935),
                    Tt = a(3927),
                    xt = a(4490),
                    Lt = a(5579),
                    It = a(9478);
                function Mt(e, t, a) {
                    const n = (0, u.useContext)(Lt.YN);
                    let r = Object.entries(n).filter(([e, t]) => !0 === t && e in It.u);
                    return (
                        a && (r = r.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const u = r.map((e) =>
                                S()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, U.e)(t))(a, e[0])]),
                            );
                            return ((e[a] = S()(t[a], ...u)), e);
                        }, {})
                    );
                }
                const Ot = {
                    base: 'ViewDecorator_base_a8f2f',
                    container: 'ViewDecorator_container_ce6b5',
                    container__shown: 'ViewDecorator_container__shown_d156b',
                    leftBlock: 'ViewDecorator_leftBlock_fe537',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_a53f6',
                    rightBlock: 'ViewDecorator_rightBlock_a02eb',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_f6930',
                    view: 'ViewDecorator_view_aed70',
                };
                let $t = (function (e) {
                    return ((e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info'), e);
                })({});
                (0, u.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: r,
                        leftSubText: s,
                        leftButtonType: o,
                        onClose: i,
                        onLeftButtonClick: l,
                        isHideButtons: c = !1,
                    }) => {
                        const d = Mt(['leftBlock', 'rightBlock'], Ot),
                            _ = (0, u.useState)(c),
                            m = _[0],
                            E = _[1];
                        (0, u.useEffect)(() => E(!c), [c]);
                        const g = (0, u.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            b = S()(Ot.container, m && Ot.container__shown);
                        return n().createElement(
                            'div',
                            { className: Ot.base, style: g },
                            n().createElement(
                                'div',
                                { className: b },
                                Boolean(a) &&
                                    n().createElement(
                                        'div',
                                        { className: d.leftBlock },
                                        n().createElement(Rt.A, {
                                            caption: a || '',
                                            goto: s,
                                            type: o,
                                            side: 'left',
                                            onClick: l,
                                        }),
                                    ),
                                Boolean(t) &&
                                    n().createElement(
                                        'div',
                                        { className: d.rightBlock },
                                        n().createElement(Rt.A, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            n().createElement('div', { className: Ot.view }, r),
                        );
                    },
                );
                var Wt = a(2215);
                const zt = 'Header_base_da7c9',
                    Ht = 'Header_labels_a1b58',
                    Gt = 'Header_title_d6d83',
                    Ut = 'Header_chapterWrapper_afd18',
                    jt = 'Header_chapterText_d8c70',
                    Vt = 'Header_chapterText__overflow_bc87c',
                    Zt = 'Header_chapterStatus_a07c4',
                    qt = 'Header_date_ec8aa',
                    Yt = 'Header_titleButtons_fb384',
                    Kt = 'Header_titleButton_ba478',
                    Xt = 'Header_logo_e9969',
                    Qt = 'Header_awards_a1b2b',
                    Jt = 'Header_flag_fed5e',
                    ea = 'Header_flag__isChapterChosen_b1649',
                    ta = 'Header_flag__isChapterNotChosen_e32bf',
                    aa = 'Header_emblem_a859d',
                    ua = 'Header_emblem__isChapterNotChosen_e4f53',
                    na = 'Header_chapterLogoIcon_b8037';
                function ra(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                function sa(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, n) {
                            var r = e.apply(t, a);
                            function s(e) {
                                ra(r, u, n, s, o, 'next', e);
                            }
                            function o(e) {
                                ra(r, u, n, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let oa = (function (e) {
                    return ((e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium'), e);
                })({});
                const ia = R.strings.battle_pass,
                    la = 'auto',
                    ca = (0, i.Pi)(() => {
                        const e = w(),
                            t = e.controls,
                            a = e.model.root.get(),
                            r = a.chapterID,
                            s = a.chapterState,
                            o = a.seasonNum,
                            i = a.expireTime,
                            l = a.currentLevel,
                            c = a.isBattlePassPurchased,
                            _ = a.currentPointsInChapter,
                            E = a.timeLeft,
                            g = a.chapterType,
                            b = [d.NotStarted, d.Paused],
                            p = (0, u.useState)(!1),
                            v = p[0],
                            f = p[1],
                            A = (0, u.useState)(la),
                            C = A[0],
                            F = A[1],
                            D = (0, Xe.GS)().mediaSize,
                            B = D <= Xe.cJ.Medium ? xt.$u.Small : xt.$u.Medium,
                            y = D <= Xe.cJ.Medium ? viewEnv.pxToRem(oa.Small) : viewEnv.pxToRem(oa.Medium),
                            k = (0, u.useRef)(null),
                            N = (0, u.useRef)(null),
                            T =
                                (x = s) === d.Paused
                                    ? ia.progression.header.paused()
                                    : x === d.NotStarted
                                      ? ia.progression.header.inactive()
                                      : void 0;
                        var x;
                        const L = (0, u.useRef)(0),
                            I = s === d.Completed,
                            M = g === m.EXTRA,
                            O = g === m.HOLIDAY,
                            $ = () => (I ? xt.Bq.Completed : c ? xt.Bq.Bought : xt.Bq.Free),
                            W = { level: l, from: _ },
                            H = s === d.Active,
                            G = (0, h.UP)(W) || s !== d.NotStarted,
                            V = G && $() !== xt.Bq.Completed,
                            Z = $() === xt.Bq.Bought,
                            q = Math.trunc(E / 86400),
                            Y = ia.chapter.fullName.$num(r),
                            K = (0, U.uF)(ia.progression.seasonEndingTooltip(), { day: q }),
                            X = (0, U.uF)(ia.progression.header.chapter.status(), { chapterName: Y }),
                            Q = (0, u.useCallback)(
                                (e) => {
                                    e > L.current && (L.current = e);
                                },
                                [L],
                            ),
                            J = (0, u.useCallback)(
                                sa(function* () {
                                    (yield (0, j.Eu)(), yield (0, kt.nS)());
                                    const e = k.current,
                                        t = N.current;
                                    e &&
                                        t &&
                                        (Q(t.offsetWidth),
                                        T
                                            ? (f(L.current >= e.offsetWidth - y),
                                              F(e.offsetWidth / viewEnv.getScale() - y + 'rem'))
                                            : (f(L.current >= e.offsetWidth), F(la)));
                                }),
                                [Q, T, y],
                            );
                        return (
                            (0, u.useEffect)(
                                () => (
                                    J(),
                                    engine.on('clientResized', J),
                                    () => {
                                        engine.off('clientResized', J);
                                    }
                                ),
                                [s],
                            ),
                            n().createElement(
                                'div',
                                { className: zt },
                                n().createElement(
                                    'div',
                                    { className: Xt },
                                    n().createElement('div', {
                                        className: S()(Jt, V && ea, b.includes(s) && ta),
                                        style: (0, P.fW)(r, B),
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: S()(aa, b.includes(s) && ua) },
                                        n().createElement(Tt.G4, {
                                            progression: W,
                                            size: B,
                                            battlePassState: $(),
                                            hasBattlePass: c,
                                            isChapterChosen: H,
                                            isProgression: !0,
                                            chapterID: r,
                                            hasBeenActive: G,
                                            showProgressBar: !1,
                                            isOpen: V,
                                            isExtra: M || O,
                                            seasonNum: o,
                                        }),
                                        V && n().createElement('div', { className: na, style: (0, P.cs)(r, Z, B) }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ht },
                                    n().createElement(
                                        'div',
                                        { className: Gt },
                                        n().createElement(
                                            z.i,
                                            { body: K, isEnabled: Boolean(E) },
                                            n().createElement(
                                                'div',
                                                { className: qt },
                                                M
                                                    ? (0, U.uF)(ia.progression.season.end.special(), {
                                                          endTime: (0, Ge.UI)(i, Nt.C.DayMonthFull),
                                                      })
                                                    : O
                                                      ? (0, U.uF)(ia.progression.season.end.special(), {
                                                            endTime: (0, Ge.UI)(i, Nt.C.DayMonthFullTime),
                                                        })
                                                      : (0, U.uF)(ia.progression.season.end.normal(), {
                                                            seasonNum: (0, Je.cg)(o),
                                                            seasonName: ia.season.fullName.$num(o),
                                                            endDate: (0, Ge.UI)(i, Nt.C.DayMonthFull),
                                                        }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ut, ref: k },
                                            n().createElement(
                                                'div',
                                                { style: { maxWidth: `${C}` } },
                                                n().createElement(
                                                    z.i,
                                                    { body: X, isEnabled: v },
                                                    n().createElement(
                                                        'div',
                                                        { className: S()(jt, v && Vt), ref: N },
                                                        X,
                                                    ),
                                                ),
                                            ),
                                            T && n().createElement('div', { className: Zt }, T),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Yt },
                                            n().createElement(
                                                'div',
                                                { className: Kt },
                                                n().createElement(Rt.A, {
                                                    caption:
                                                        M || O ? ia.progression.aboutExtra() : ia.progression.about(),
                                                    type: $t.Info,
                                                    onClick: t.openAbout,
                                                }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Kt },
                                                n().createElement(Rt.A, {
                                                    caption: ia.howToEarnPoints.title(),
                                                    type: $t.Info,
                                                    onClick: t.openInfo,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Qt },
                                    n().createElement(Wt.Z, {
                                        rootId: R.aliases.battle_pass.Progression('resId'),
                                        context: 'model.awardsWidget',
                                    }),
                                ),
                            )
                        );
                    }),
                    da = {
                        base: 'Progression_base_bd5a5',
                        base__isLayoutWithExtraWidget: 'Progression_base__isLayoutWithExtraWidget_d2d96',
                        scrollWrapper: 'Progression_scrollWrapper_d9b7c',
                        wrapper: 'Progression_wrapper_a85a3',
                        section__last: 'Progression_section__last_a5190',
                        divider: 'Progression_divider_eceb7',
                        dividerContent: 'Progression_dividerContent_a413f',
                        dividerText: 'Progression_dividerText_a0264',
                        progressContainer: 'Progression_progressContainer_a84cb',
                        progress: 'Progression_progress_bb8e8',
                        progress__inactive: 'Progression_progress__inactive_c0c4d',
                        progressBackground: 'Progression_progressBackground_dec14',
                        progressBackground__disabled: 'Progression_progressBackground__disabled_c11d1',
                        progressBackground__finished: 'Progression_progressBackground__finished_efe62',
                        decor: 'Progression_decor_f5bc3',
                        decorBackground: 'Progression_decorBackground_be274',
                        decor__left: 'Progression_decor__left_fb2d7',
                        row: 'Progression_row_e8e8e',
                        row__basic: 'Progression_row__basic_b1829',
                        bookmark: 'Progression_bookmark_be5de',
                        bookmark__start: 'Progression_bookmark__start_bc7df',
                        bookmarkLeftFixed: 'Progression_bookmarkLeftFixed_f9536',
                        bookmarkLeftFixed__active: 'Progression_bookmarkLeftFixed__active_b4965',
                        bookmarkLeftResponsive: 'Progression_bookmarkLeftResponsive_f5de1',
                        bookmarkBackground: 'Progression_bookmarkBackground_ad764',
                        scrollToButton: 'Progression_scrollToButton_e89bb',
                        scrollToButton__visible: 'Progression_scrollToButton__visible_d493a',
                        scrollToButton__forward: 'Progression_scrollToButton__forward_e2fdc',
                        scrollToButton__backward: 'Progression_scrollToButton__backward_f5ff9',
                        arrowButton: 'Progression_arrowButton_deaef',
                        progressionToButton: 'Progression_progressionToButton_b8411',
                        progressionToButton__hidden: 'Progression_progressionToButton__hidden_b1747',
                        progressionToButton__back: 'Progression_progressionToButton__back_cc434',
                        progressionToButton__forward: 'Progression_progressionToButton__forward_ef436',
                        shadow: 'Progression_shadow_bedbd',
                        shadow__left: 'Progression_shadow__left_f2d0f',
                        shadow__right: 'Progression_shadow__right_a0a00',
                        additionalShadow: 'Progression_additionalShadow_f346d',
                        additionalShadow__active: 'Progression_additionalShadow__active_cdff1',
                        scrollBarPosition: 'Progression_scrollBarPosition_a8f52',
                        fadeOut: 'Progression_fadeOut_f7b78',
                        fadeIn: 'Progression_fadeIn_eeacf',
                        fadeInWithScale: 'Progression_fadeInWithScale_d28b7',
                        slideUp: 'Progression_slideUp_c51a8',
                        scale: 'Progression_scale_d8293',
                        rotate: 'Progression_rotate_ab98f',
                    };
                var _a = a(2884),
                    ma = a(8718);
                let Ea = (function (e) {
                    return ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'), e);
                })({});
                const ga = { type: Ea.Idle };
                let ba = (function (e) {
                    return (
                        (e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton'),
                        e
                    );
                })({});
                var pa = a(7475);
                const ha = {
                        base: 'ArrowButton_base_b4f92',
                        base__gray: 'ArrowButton_base__gray_b816c',
                        icon: 'ArrowButton_icon_b4157',
                        icon__4k: 'ArrowButton_icon__4k_d0460',
                        icon__back: 'ArrowButton_icon__back_fa3f2',
                        icon__forward: 'ArrowButton_icon__forward_ecc0c',
                    },
                    va = ({ onClick: e, direction: t, type: a = F.Default, className: r, tooltipBody: s }) => {
                        const i = (0, u.useCallback)(() => {
                                (0, o.G)('highlight');
                            }, []),
                            l = (0, u.useCallback)(() => {
                                ((0, o.G)('bp_slide'), e());
                            }, [e]);
                        return n().createElement(
                            z.i,
                            { body: s },
                            n().createElement(
                                'div',
                                { className: S()(ha.base, ha[`base__${a}`], r), onClick: l, onMouseEnter: i },
                                n().createElement('div', {
                                    className: S()(
                                        ha.icon,
                                        ha[`icon__${t}`],
                                        2 === pa.O.view.getScale() && ha.icon__4k,
                                    ),
                                }),
                            ),
                        );
                    },
                    fa = 'Bookmark_base_a8bd2',
                    Aa = 'Bookmark_container_e9af3',
                    Ca = 'Bookmark_container__start_b278b',
                    Fa = 'Bookmark_container__wide_c9180',
                    Da = 'Bookmark_textWrapper_ed5dd',
                    Ba = 'Bookmark_withTooltip_aac7e',
                    wa = 'Bookmark_text_d272f',
                    ya = 'Bookmark_text__basic_abd49',
                    Sa = 'Bookmark_text__premium_a0b87',
                    Pa = 'Bookmark_text__single_e579a',
                    ka = 'Bookmark_text__wide_c36c2',
                    Ra = 'Bookmark_text__disappeared_e51d8',
                    Na = 'Bookmark_textInner_b04b4',
                    Ta = 'Bookmark_leftTextLine_d2774',
                    xa = 'Bookmark_rightTextLine_dd0a0',
                    La = ({ isWide: e, isDecorated: t }) =>
                        n().createElement(
                            'div',
                            { className: S()(wa, Pa, e && ka) },
                            t && n().createElement('div', { className: Ta }),
                            n().createElement(
                                'div',
                                { className: Na },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && n().createElement('div', { className: xa }),
                        ),
                    Ia = (0, u.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: r,
                                chapterStep: s,
                                mixClass: o,
                            },
                            i,
                        ) => {
                            const l = (0, u.useRef)(null);
                            (0, u.useImperativeHandle)(i, () => ({
                                width: () => {
                                    const e = l.current;
                                    if (e) {
                                        const t = window.getComputedStyle(e, null).getPropertyValue('width');
                                        return Number(t.split('rem')[0]);
                                    }
                                    return 0;
                                },
                            }));
                            const c = (0, U.uF)(R.strings.battle_pass.tooltips.postProgress.body(), { chapterStep: s });
                            return n().createElement(
                                'div',
                                { className: S()(fa, o), ref: l },
                                n().createElement(
                                    'div',
                                    { className: S()(Aa, e && Fa, !e && Ca) },
                                    e
                                        ? n().createElement(
                                              z.i,
                                              { body: a, header: r, isEnabled: 'string' == typeof a },
                                              n().createElement(
                                                  'div',
                                                  { className: Ba },
                                                  n().createElement(La, { isWide: e, isDecorated: !0 }),
                                              ),
                                          )
                                        : n().createElement(
                                              n().Fragment,
                                              null,
                                              n().createElement(
                                                  'div',
                                                  { className: Da },
                                                  n().createElement(
                                                      z.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: c,
                                                      },
                                                      n().createElement(La, { isWide: e }),
                                                  ),
                                              ),
                                              n().createElement(
                                                  H.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  n().createElement(
                                                      'div',
                                                      { className: S()(wa, Sa) },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              n().createElement(
                                                  'div',
                                                  { className: S()(wa, ya, t && Ra) },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                var Ma = a(5938),
                    Oa = a(7927);
                const $a = 'VehicleInfo_base_ed07f',
                    Wa = 'VehicleInfo_prefix_d23ec',
                    za = 'VehicleInfo_type_b5687',
                    Ha = R.strings.battle_pass.progression.widget3dStyle,
                    Ga = (0, u.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: r }) => {
                        const s = (0, u.useMemo)(() => {
                            const e = (0, U.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${r ? '_elite' : ''}`)})`,
                            };
                        }, [a, r]);
                        return n().createElement(
                            'div',
                            { className: $a },
                            n().createElement('div', { className: Wa }, Ha.forVehicle()),
                            (0, Je.cg)(e),
                            n().createElement('div', { className: za, style: s }),
                            t,
                        );
                    }),
                    Ua = 'Widget3dStyle_base_c5c20',
                    ja = 'Widget3dStyle_title_cde97',
                    Va = 'Widget3dStyle_base__closedChapter_a4545',
                    Za = 'Widget3dStyle_box_b94b5',
                    qa = 'Widget3dStyle_light_b90e1',
                    Ya = 'Widget3dStyle_image_ec516',
                    Ka = 'Widget3dStyle_previewButton_bfc81',
                    Xa = 'Widget3dStyle_box__hovered_dc6b6',
                    Qa = 'Widget3dStyle_footer_b4eaa',
                    Ja = 'Widget3dStyle_caption_c09a9',
                    eu = R.strings.battle_pass.progression.widget3dStyle;
                let tu = (function (e) {
                    return ((e.None = ''), (e.Small = '_small'), (e.Medium = '_medium'), e);
                })({});
                const au = (0, i.Pi)(({ widget3dStyleRef: e, level: t, isShowTitle: a }) => {
                    const r = (0, u.useState)(!1),
                        s = r[0],
                        o = r[1],
                        i = w(),
                        l = i.controls,
                        c = i.model,
                        _ = c.root.get(),
                        m = _.chapterState,
                        E = _.isStyleTaken,
                        g = c.widget3dStyle.get(),
                        b = g.styleName,
                        p = g.styleId,
                        v = ((e, t) => (2 !== t ? (e <= Xe.cJ.Small ? tu.Small : tu.Medium) : tu.None))(
                            (0, Xe.GS)().mediaSize,
                            viewEnv.getScale(),
                        ),
                        f = (0, h.uc)(t, p, v),
                        A = (0, U.uF)(eu.currentStyle(), { name: b }),
                        C = (0, u.useCallback)(() => {
                            l.open3dStylePreview(t);
                        }, [l, t]);
                    return n().createElement(
                        'div',
                        { className: S()(Ua, m === d.Completed && Va), ref: e },
                        !E && a && n().createElement('div', { className: ja }, eu.titleNoChapterSelected()),
                        n().createElement(
                            'div',
                            { className: S()(Za, s && Xa), onMouseEnter: () => o(!0), onMouseLeave: () => o(!1) },
                            !E && t === Yn && n().createElement('div', { className: qa }),
                            n().createElement('div', { className: Ya, style: f }),
                            n().createElement('div', { className: Ka }, n().createElement(Oa.k, { onClick: C })),
                        ),
                        n().createElement(
                            'div',
                            { className: Qa },
                            n().createElement('div', { className: Ja }, A),
                            n().createElement(Ga, c.widget3dStyleVehicleInfo.get()),
                        ),
                    );
                });
                var uu = a(2858),
                    nu = a(1527);
                const ru = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: u,
                        totalPointsInLevel: n,
                        currentLevel: r,
                    }) => (e > r ? a + t * (e - 2) + t * (u / n) : (e - 1) * t + a * (u / n)),
                    su = (e) => e + 1,
                    ou = (0, i.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: s,
                            level: o,
                            previousLevel: i,
                            currentPointsInLevel: l,
                            previousPointsInLevel: c,
                            currentPointsInChapter: d,
                            previousPointsInChapter: _,
                            theme: m,
                        }) => {
                            const E = w().model,
                                g = E.root.get(),
                                b = g.isPaused,
                                p = g.showLevelsAnimations,
                                h = g.currentLevel,
                                v = E.levels.get(),
                                f = (0, u.useState)(0),
                                A = f[0],
                                C = f[1],
                                F = (0, u.useRef)(-1),
                                D = (0, u.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                B = D[0],
                                y = B.previousBaseEarnedPoints,
                                S = B.maxBasePoints,
                                P = B.baseProgressionSize,
                                k = D[1];
                            (0, u.useEffect)(() => {
                                if (b) return;
                                const e = F.current !== _,
                                    t = e ? i : o,
                                    u = s + (v.length - 1) * a,
                                    n = v[t - 1],
                                    r = o <= v.length ? o - 1 : v.length - 1,
                                    m = v[r].value.levelPoints,
                                    E = ru({
                                        level: o,
                                        levelWidth: a,
                                        currentLevelWidth: s,
                                        pointsInLevel: l,
                                        totalPointsInLevel: m,
                                        currentLevel: h,
                                    }),
                                    g = n ? n.value.levelPoints : 0,
                                    p = ru({
                                        level: t > o ? o : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < h ? a : s,
                                        pointsInLevel: c,
                                        totalPointsInLevel: g,
                                        currentLevel: h,
                                    }),
                                    f = e && t <= o ? p : E;
                                (_ !== d && a && (F.current = _),
                                    k({ maxBasePoints: u, previousBaseEarnedPoints: f, baseProgressionSize: E }));
                            }, [b, a, s, o, i, d, c, l, _, h, v]);
                            const R = (0, u.useMemo)(
                                () =>
                                    Object.assign({}, Ma.uu, {
                                        withStack: !0,
                                        type: Ma.ru.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, u.useEffect)(() => {
                                    const e = h !== i || l !== c;
                                    if (!p && (e || d === _))
                                        return e && -1 === F.current
                                            ? (0, Se.F)(() => {
                                                  C(su);
                                              }, 700)
                                            : void 0;
                                    C(su);
                                }, [d, _, p]),
                                (0, u.useEffect)(() => {
                                    if (p)
                                        return (0, r.v)(() => {
                                            t && t();
                                        });
                                }, [t, p]),
                                n().createElement(Ma._e, {
                                    key: A,
                                    animationSettings: R,
                                    deltaFrom: y,
                                    value: P,
                                    maxValue: S || void 0,
                                    api: e,
                                    theme: m,
                                })
                            );
                        },
                    ),
                    iu = R.strings.battle_pass.tooltips.progression.freePoints,
                    lu = (0, i.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            progressChange: r,
                        }) => {
                            const s = w().model,
                                o = s.root.get(),
                                i = o.chapterState,
                                l = o.currentLevel,
                                c = o.previousLevel,
                                _ = o.currentPointsInLevel,
                                m = o.previousPointsInLevel,
                                E = o.currentPointsInChapter,
                                g = o.previousPointsInChapter,
                                b = o.freePointsInLevel,
                                p = o.freePointsInChapter,
                                h = o.previousFreePointsInChapter,
                                v = o.previousFreePointsInLevel,
                                f = o.potentialLevel,
                                A = o.previousPotentialLevel,
                                C = s.levels.get(),
                                F = (0, nu.V)(),
                                D = (i === d.NotStarted || i === d.Paused) && p - E > 0,
                                B = s.computes.getTotalLevelPoints(),
                                y = s.computes.getCurrentWidth(a, u, F, B),
                                P = E >= C.length * B,
                                k = {
                                    '--progress-line-base': uu.Gh.line.bgColorBase,
                                    '--progress-line-disabled': uu.Gh.line.bgColorDisabled,
                                    '--progress-line-finished': uu.Gh.line.bgColorFinished,
                                };
                            return n().createElement(
                                'div',
                                { className: da.progressContainer },
                                D &&
                                    n().createElement(
                                        z.i,
                                        { header: iu.header(), body: iu.body() },
                                        n().createElement(
                                            'div',
                                            { className: da.progress },
                                            n().createElement(ou, {
                                                api: t,
                                                progressChange: r,
                                                levelWidth: a,
                                                currentLevelWidth: u,
                                                level: f,
                                                previousLevel: A,
                                                currentPointsInLevel: b,
                                                previousPointsInLevel: v,
                                                currentPointsInChapter: p,
                                                previousPointsInChapter: h,
                                                theme: uu.fV,
                                            }),
                                        ),
                                    ),
                                n().createElement('div', {
                                    className: S()(da.progressBackground, P && da.progressBackground__finished),
                                    style: Object.assign({ width: `${y}rem` }, k),
                                }),
                                n().createElement(
                                    H.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    n().createElement(
                                        'div',
                                        { className: S()(da.progress, D && da.progress__inactive) },
                                        n().createElement(ou, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: u,
                                            level: l,
                                            previousLevel: c,
                                            currentPointsInLevel: _,
                                            previousPointsInLevel: m,
                                            currentPointsInChapter: E,
                                            previousPointsInChapter: g,
                                            progressChange: r,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    cu = 'Background_base_d177f',
                    du = 'Background_default_cfec9',
                    _u = 'Background_base__premium_dfcd5',
                    mu = 'Background_rare_fdd8d',
                    Eu = 'Background_rareBg_bd92f',
                    gu = 'Background_pattern_e7668',
                    bu = 'Background_pattern__left_ed7af',
                    pu = 'Background_pattern__right_caafc',
                    hu = 'Background_pattern__leftIndent_dfcef',
                    vu = 'Background_pattern__rightIndent_de502',
                    fu = 'Background_pattern__completed_dacc5',
                    Au = 'Background_disabled_ece5d',
                    Cu = 'Background_inProgress_fa440',
                    Fu = 'Background_inProgressInner_e00bc',
                    Du = 'Background_inProgressPart_c40e2',
                    Bu = 'Background_inProgressPart__left_d7f31',
                    wu = 'Background_inProgressPart__right_ef764',
                    yu = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
                    Su = (0, i.Pi)(({ level: e, isPremium: t = !1 }) => {
                        const a = w().model.computes.cardStates(e, t),
                            u = a.cardStatus,
                            r = a.isRare,
                            s = a.isDisabled,
                            o =
                                u.current !== f.IN_PROGRESS &&
                                ((e, t) => {
                                    switch (e) {
                                        case f.NOT_STARTED:
                                            return t;
                                        case f.COMPLETED:
                                            return !t;
                                        default:
                                            return (console.warn(`Unsupported status for isIndent: ${e}`), !1);
                                    }
                                })(u.current, t);
                        return n().createElement(
                            'div',
                            { className: S()(cu, t && _u) },
                            n().createElement('div', { className: du }),
                            s && n().createElement('div', { className: Au }),
                            u.current === f.IN_PROGRESS &&
                                n().createElement(
                                    'div',
                                    { className: Cu },
                                    n().createElement('div', { className: S()(Du, Bu) }),
                                    !t && n().createElement('div', { className: Fu }),
                                    n().createElement('div', { className: S()(Du, wu) }),
                                ),
                            r &&
                                n().createElement(
                                    'div',
                                    { className: mu },
                                    n().createElement('div', {
                                        className: S()(gu, bu, o && hu, u.current === f.COMPLETED && fu),
                                        style: { backgroundImage: yu('left') },
                                    }),
                                    n().createElement('div', {
                                        className: S()(gu, pu, !o && vu, u.current === f.COMPLETED && fu),
                                        style: { backgroundImage: yu('right') },
                                    }),
                                    u.current === f.NOT_STARTED && n().createElement('div', { className: Eu }),
                                ),
                        );
                    });
                var Pu = a(9659),
                    ku = a(1374);
                const Ru = {
                        base: 'Stage_base_decca',
                        base__rewardTaken: 'Stage_base__rewardTaken_f488d',
                        number: 'Stage_number_dc122',
                        animatedNumber: 'Stage_animatedNumber_d7118',
                        numberInProgress: 'Stage_numberInProgress_fd0a3',
                        title: 'Stage_title_fb36f',
                        glow: 'Stage_glow_a35ce',
                        base__inProgress: 'Stage_base__inProgress_cca3c',
                        animatedGlow: 'Stage_animatedGlow_f7143',
                        iconFinal: 'Stage_iconFinal_a10ea',
                    },
                    Nu = R.strings.battle_pass.progression,
                    Tu = (0, i.Pi)(({ stepNumber: e, stageAnimationDelay: t, isRewardAnimationActive: a }) => {
                        const r = w(),
                            s = r.model,
                            i = r.controls,
                            l = s.root.get(),
                            c = l.chapterState,
                            _ = l.showLevelsAnimations,
                            m = (0, u.useState)(!1),
                            E = m[0],
                            g = m[1],
                            b = s.computes.cardStates(e, !1).cardStatus,
                            p = s.computes.isRewardNeedTake(e, !1) || s.computes.isRewardNeedTake(e, !0),
                            v = s.computes.levelInfo(e).maxLevel === e,
                            A = b.current === f.IN_PROGRESS,
                            C = c === d.NotStarted || c === d.Paused,
                            F = b.current === f.COMPLETED && !p && !a,
                            D = (0, ku.useSpring)({
                                from: { stageOpacity: E ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, o.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: h.ei },
                            }).stageOpacity,
                            B = (0, ku.useSpring)({
                                from: { sparkOpacity: E ? 1 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => g(!1),
                                config: { duration: 1500, easing: h.ei },
                            }).sparkOpacity;
                        return (
                            (0, u.useEffect)(() => {
                                if (_ && A)
                                    return (0, Se.F)(() => {
                                        (g(!0), i.finishLevelsAnimation());
                                    }, t + 100);
                            }, [_, A, t]),
                            n().createElement(
                                'div',
                                { className: S()(Ru.base, Ru[`base__${b.current}`], F && Ru.base__rewardTaken) },
                                A &&
                                    !C &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: Ru.glow }),
                                        n().createElement(ku.animated.div, {
                                            style: { opacity: B },
                                            className: Ru.animatedGlow,
                                        }),
                                    ),
                                v && n().createElement('div', { className: Ru.iconFinal }),
                                A
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement(
                                              'div',
                                              { className: Ru.numberInProgress },
                                              e,
                                              n().createElement(
                                                  ku.animated.div,
                                                  {
                                                      style: {
                                                          opacity: D,
                                                          transform: D.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: Ru.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          n().createElement(
                                              'div',
                                              { className: Ru.title },
                                              C ? Nu.pausedStep() : Nu.currentStep(),
                                          ),
                                      )
                                    : n().createElement('div', { className: Ru.number }, e),
                            )
                        );
                    });
                var xu = a(5623);
                const Lu = 'ClosedStatus_base_a5589',
                    Iu = 'ClosedStatus_icon_d3aa6',
                    Mu = 'ClosedStatus_icon__current_ab55b',
                    Ou = 'ClosedStatus_icon__exit_ee3d9',
                    $u = 'ClosedStatus_icon__exitActive_faeca',
                    Wu = 'ClosedStatus_icon__exitCurrentActive_d14fe',
                    zu = 'ClosedStatus_icon__exitDone_cb25e',
                    Hu = 'ClosedStatus_title_d4f18',
                    Gu = 'ClosedStatus_title__exit_f1750',
                    Uu = 'ClosedStatus_title__exitActive_b80d4',
                    ju = 'ClosedStatus_title__exitDone_e397e';
                function Vu() {
                    return (
                        (Vu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        Vu.apply(null, arguments)
                    );
                }
                const Zu = (0, i.Pi)(
                        ({
                            level: e,
                            playUnlockAnimation: t = !1,
                            handleUnlockAnimationExited: a,
                            baseUnlockProps: u,
                        }) => {
                            const r = w().model,
                                s = r.root.get().isBattlePassPurchased,
                                o = r.computes.cardStates(e, !0).cardStatus.current === f.IN_PROGRESS,
                                i = { exit: Ou, exitActive: o ? Wu : $u, exitDone: zu },
                                l = { exit: Gu, exitActive: Uu, exitDone: ju },
                                c = !s || t,
                                d = o && c;
                            return n().createElement(
                                'div',
                                { className: Lu },
                                c &&
                                    n().createElement(
                                        xu.Z,
                                        Vu({}, u, { classNames: i, onExited: a }),
                                        n().createElement('div', { className: S()(Iu, o && Mu) }),
                                    ),
                                d &&
                                    n().createElement(
                                        xu.Z,
                                        Vu({}, u, { classNames: c ? l : {} }),
                                        n().createElement(
                                            'div',
                                            { className: Hu },
                                            R.strings.battle_pass.progression.currentStepLocked(),
                                        ),
                                    ),
                            );
                        },
                    ),
                    qu = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_ee08f',
                        slideUp: 'CompletedStatus_slideUp_b504e',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_e393f',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_f8ba9',
                        showUp: 'CompletedStatus_showUp_b2604',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_b580f',
                        icon: 'CompletedStatus_icon_cf0d0',
                    },
                    Yu = ({ completedIn: e, handleCompleteGlowAnimationExited: t, children: a }) => {
                        const u = {
                            exit: qu.iconGlow__completedEnter,
                            exitActive: qu.iconGlow__completedEnterActive,
                            exitDone: qu.iconGlow__completedEnterDone,
                        };
                        return n().createElement(
                            'div',
                            { className: S()(qu.base, e && qu.base__showAnimation) },
                            n().createElement(xu.Z, { in: !e, timeout: En, classNames: u, onExited: t }, a),
                            n().createElement(
                                z.i,
                                { body: gn.tooltips.completed.got() },
                                n().createElement('div', { className: qu.icon }),
                            ),
                        );
                    },
                    Ku = {
                        base: 'CurrentPoints_base_d4d04',
                        value__current: 'CurrentPoints_value__current_b5908',
                        value__total: 'CurrentPoints_value__total_d6632',
                        divider: 'CurrentPoints_divider_a5bc2',
                        icon: 'CurrentPoints_icon_d53f3',
                    },
                    Xu = (0, i.Pi)(() => {
                        const e = w().model.computes.currentLevelPoints(),
                            t = e.current,
                            a = e.total;
                        return n().createElement(
                            H.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            n().createElement(
                                'div',
                                { className: Ku.base },
                                n().createElement('div', { className: S()(Ku.value, Ku.value__current) }, t),
                                n().createElement('div', { className: Ku.divider }, '/'),
                                n().createElement('div', { className: S()(Ku.value, Ku.value__total) }, a),
                                n().createElement('div', { className: Ku.icon }),
                            ),
                        );
                    }),
                    Qu = 'Effects_glowWrapper_db1a8',
                    Ju = 'Effects_glow_bb9d3',
                    en = 'Effects_glow__active_e14ed',
                    tn = 'Effects_dust_a7961',
                    an = 'Effects_dust__active_f59e8';
                function un() {
                    return (
                        (un = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        un.apply(null, arguments)
                    );
                }
                const nn = ({ baseUnlockProps: e }) => {
                        const t = { exit: Ju, exitActive: en, exitDone: Ju },
                            a = { exit: tn, exitActive: an, exitDone: tn };
                        return n().createElement(
                            'div',
                            null,
                            n().createElement(
                                xu.Z,
                                un({}, e, { classNames: t }),
                                n().createElement(
                                    'div',
                                    { className: Qu },
                                    n().createElement('div', { className: Ju }),
                                ),
                            ),
                            n().createElement(
                                xu.Z,
                                un({}, e, { classNames: a }),
                                n().createElement(
                                    'div',
                                    { className: Qu },
                                    n().createElement('div', { className: tn }),
                                ),
                            ),
                        );
                    },
                    rn = 'Status_base_abcb2',
                    sn = 'Status_base__inProgress_a7870',
                    on = 'Status_iconContainer_b1172',
                    ln = 'Status_iconInner_dbb9d',
                    cn = 'Status_iconGlow_de32d',
                    dn = 'Status_iconGlow__completed_d97d5',
                    _n = 'Status_iconGlow__hidden_f10a3',
                    mn = 'Status_pointsWrapper_f7978',
                    En = 1500,
                    gn = R.strings.battle_pass,
                    bn = R.views.lobby.battle_pass,
                    pn = (0, i.Pi)(
                        ({
                            isPremium: e,
                            playCompleteAnimation: t,
                            playUnlockAnimation: a,
                            completeAnimationDelay: r = 0,
                            unlockAnimationDelay: s = 0,
                            baseTimeout: i = 0,
                            playUnlockAnimationSound: l = !0,
                            playCompleteAnimationSound: c = !0,
                            onAnimationDone: d,
                            initialAnimationDelay: _,
                            completedDuration: m,
                            level: E,
                        }) => {
                            const g = w().model,
                                b = g.computes.cardStates(E, e),
                                p = b.cardStatus,
                                h = b.isDisabled,
                                v = g.computes.isRewardNeedTake(E, e),
                                C = (0, u.useState)(!1),
                                F = C[0],
                                D = C[1],
                                B = (0, u.useState)(!1),
                                y = B[0],
                                P = B[1],
                                k = (0, u.useState)(!0),
                                R = k[0],
                                N = k[1],
                                T = (0, u.useState)(!1),
                                x = T[0],
                                L = T[1],
                                I = p.current === f.COMPLETED && !v && !h,
                                M = (h && e) || I || a,
                                O = !e && p.current === f.IN_PROGRESS && p.potential !== f.COMPLETED,
                                $ = () => {
                                    (c && (0, o.G)(A.IMPROVED_REWARD), D(!0));
                                };
                            ((0, u.useEffect)(
                                () =>
                                    a
                                        ? (0, Se.F)(() => {
                                              (N(!1),
                                                  l &&
                                                      !x &&
                                                      (p.current === f.IN_PROGRESS
                                                          ? (0, o.G)(A.UNLOCK_BIG)
                                                          : (0, o.G)(A.UNLOCK_SMALL)));
                                          }, _ + s)
                                        : t
                                          ? (P(!0),
                                            (0, Se.F)(() => {
                                                (P(!1), $());
                                            }, _ + r))
                                          : void (y && P(!1)),
                                [a, t, y],
                            ),
                                (0, u.useEffect)(() => {
                                    if (t && x)
                                        return (0, Se.F)(() => {
                                            $();
                                        }, r);
                                }, [t, x]));
                            const W = () => {
                                    (!t && d && d(), L(!0));
                                },
                                z = { in: R, timeout: En + i };
                            return n().createElement(
                                'div',
                                {
                                    className: S()(rn, p.current === f.IN_PROGRESS && sn),
                                    style: { '--animation-duration': `${m}ms` },
                                },
                                M &&
                                    n().createElement(
                                        'div',
                                        { className: on },
                                        ((!t && I) || (F && !v)) &&
                                            n().createElement(
                                                Yu,
                                                {
                                                    completedIn: F,
                                                    handleCompleteGlowAnimationExited: () => {
                                                        y && P(!1);
                                                    },
                                                },
                                                n().createElement('div', { className: S()(cn, dn, y && _n) }),
                                            ),
                                        !t &&
                                            !a &&
                                            h &&
                                            e &&
                                            n().createElement(
                                                H.u,
                                                {
                                                    isEnabled: e,
                                                    contentId: bn.tooltips.BattlePassLockIconTooltipView('resId'),
                                                },
                                                n().createElement(
                                                    'div',
                                                    null,
                                                    n().createElement(Zu, {
                                                        level: E,
                                                        baseUnlockProps: z,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: W,
                                                    }),
                                                ),
                                            ),
                                        a &&
                                            !x &&
                                            n().createElement(
                                                H.u,
                                                { contentId: bn.tooltips.BattlePassLockIconTooltipView('resId') },
                                                n().createElement(
                                                    'div',
                                                    { className: ln },
                                                    n().createElement(Zu, {
                                                        level: E,
                                                        baseUnlockProps: z,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: W,
                                                    }),
                                                    p.current === f.IN_PROGRESS &&
                                                        n().createElement(nn, { baseUnlockProps: z }),
                                                ),
                                            ),
                                    ),
                                O && n().createElement('div', { className: mn }, n().createElement(Xu, null)),
                            );
                        },
                    ),
                    hn = 'CardContent_base_ca1bb',
                    vn = 'CardContent_status_a8030',
                    fn = 'CardContent_buttonHolder_ed05d',
                    An = 'CardContent_buttonLight_dc5a2',
                    Cn = 'CardContent_buttonInner_e781b',
                    Fn = 'CardContent_buttonInner__disabled_ccd6c',
                    Dn = 'CardContent_button_feb73',
                    Bn = 'CardContent_button__disabled_db6e3',
                    wn = 'CardContent_buttonBlink_fc9d6',
                    yn = 'CardContent_buttonText_f9bb4';
                var Sn = a(2486),
                    Pn = a(4692),
                    kn = a(3359);
                const Rn = {
                    base: 'Rewards_base_d1531',
                    base__column: 'Rewards_base__column_dd945',
                    base__inProgress: 'Rewards_base__inProgress_a141d',
                    reward: 'Rewards_reward_bdbe9',
                    base__tripleDefault: 'Rewards_base__tripleDefault_da649',
                    reward__0: 'Rewards_reward__0_ae09d',
                    reward__2: 'Rewards_reward__2_f32e5',
                    base__reverse: 'Rewards_base__reverse_c2f9c',
                    base__tripleInProgress: 'Rewards_base__tripleInProgress_cee13',
                    reward__1: 'Rewards_reward__1_d574b',
                    base__single: 'Rewards_base__single_cea3c',
                    shine: 'Rewards_shine_d44a8',
                    base__animated: 'Rewards_base__animated_baed4',
                    fade: 'Rewards_fade_a8142',
                    rewardInner: 'Rewards_rewardInner_d0b1d',
                    changeReward: 'Rewards_changeReward_e1e3a',
                    staticShine: 'Rewards_staticShine_b6dd3',
                    explosion: 'Rewards_explosion_b5c0a',
                    preview: 'Rewards_preview_ff59a',
                    iconButton: 'Rewards_iconButton_c83d5',
                };
                function Nn() {
                    return (
                        (Nn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        Nn.apply(null, arguments)
                    );
                }
                const Tn = (0, p.Om)((e) => {
                        const t = e.item,
                            a = e.name,
                            u = e.value,
                            n = e.overlayType,
                            r = e.tooltipId,
                            s = e.tooltipContentId;
                        return {
                            id: e.id,
                            icon: e.icon,
                            name: t || a,
                            smallImage: (0, Pn.ry)(e, Sn.h2.Big),
                            bigImage: (0, Pn.ry)(e, Sn.h2.S180x135),
                            special: n,
                            value: u,
                            valueType: (0, Pn.p3)(a),
                            tooltipArgs: (0, Pn.pI)({ tooltipId: r }, Number(s), { ignoreShowDelay: !0 }),
                        };
                    }),
                    xn = (0, i.Pi)(({ isPremium: e, levelNum: t, hasAnimation: a }) => {
                        const r = (0, Xe.GS)().mediaSize,
                            s = w(),
                            o = s.model,
                            i = s.controls,
                            l = o.computes.cardStates(t, e).cardStatus,
                            c = o.computes.isRewardNeedTake(t, e),
                            d = o.computes.levelRewardItems(t, !0),
                            _ = o.computes.levelRewardItems(t, !1),
                            m = e ? _ : d,
                            E = (0, u.useState)(m),
                            g = E[0],
                            p = E[1],
                            v = l.current === f.IN_PROGRESS,
                            A = (0, u.useRef)(!1);
                        (0, u.useEffect)(() => {
                            if (A.current) return (0, Se.F)(() => p(m), 1e3);
                            A.current = !0;
                        }, [m, A]);
                        return n().createElement(
                            'div',
                            {
                                className: S()(
                                    Rn.base,
                                    v && Rn.base__inProgress,
                                    e && Rn.base__reverse,
                                    a && Rn.base__animated,
                                    1 === m.length && Rn.base__single,
                                    2 === m.length && Rn.base__column,
                                    3 === m.length && (v ? Rn.base__tripleInProgress : Rn.base__tripleDefault),
                                ),
                            },
                            b.UI(g, (e, t) => {
                                const u = Tn(e),
                                    s =
                                        u.name.includes(Sn.E4.StyleProgressToken) ||
                                        u.name.includes(Sn.E4.BattlePassSelectToken),
                                    o = (c && s) || a,
                                    l = ((e) => {
                                        const t = r < Xe.cJ.Medium;
                                        return m.length > 1
                                            ? t
                                                ? { size: Sn.h2.Small, image: e.smallImage }
                                                : { size: Sn.h2.Big, image: e.smallImage }
                                            : t
                                              ? { size: Sn.h2.Big, image: e.smallImage }
                                              : { size: Sn.h2.S180x135, image: e.bigImage };
                                    })(u),
                                    d = l.size,
                                    _ = l.image;
                                return n().createElement(
                                    'div',
                                    { key: `reward__${u.name}${t}`, className: S()(Rn.reward, Rn[`reward__${t}`]) },
                                    o && n().createElement('div', { className: Rn.shine }),
                                    a &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: Rn.staticShine }),
                                            n().createElement('div', { className: Rn.explosion }),
                                        ),
                                    n().createElement(kn.Q, Nn({ size: d, image: _, className: Rn.rewardInner }, u)),
                                    u.icon === h.Hj.style &&
                                        n().createElement(
                                            'div',
                                            { className: Rn.preview },
                                            n().createElement(W.h, {
                                                type: 'preview',
                                                size: 'normal',
                                                className: Rn.iconButton,
                                                onClick: () => i.onStyleBonusPreview(u.id),
                                            }),
                                        ),
                                );
                            }),
                        );
                    }),
                    Ln = 'CardRewards_base_aa62c',
                    In = 'CardRewards_base__completed_a37c7',
                    Mn = (0, i.Pi)(({ levelNum: e, isRewardAnimationActive: t, isPremium: a = !1 }) => {
                        const u = w().model,
                            r = u.computes.cardStates(e, a),
                            s = r.cardStatus,
                            o = r.isDisabled,
                            i = u.computes.isRewardNeedTake(e, a),
                            l = s.current === f.COMPLETED && !i && !o && !t;
                        return n().createElement(
                            'div',
                            { className: S()(Ln, l && In) },
                            n().createElement(xn, { levelNum: e, isPremium: a, hasAnimation: t }),
                        );
                    });
                function On() {
                    return (
                        (On = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        On.apply(null, arguments)
                    );
                }
                const $n = 100,
                    Wn = 1800,
                    zn = R.strings.battle_pass.progression,
                    Hn = (0, i.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            onFinalAnimationDone: a,
                            maxVisibleCards: r,
                            showLevelsAnimations: s,
                            showBuyAnimations: o,
                        }) => {
                            const i = w(),
                                l = i.model,
                                c = i.controls,
                                d = c.finishAnimation,
                                _ = c.takeReward,
                                m = l.root.get(),
                                E = m.isBattlePassPurchased,
                                g = m.currentLevel,
                                b = m.previousLevel,
                                p = l.computes.levelInfo(t),
                                h = p.needTakePaid,
                                v = p.needTakeFree,
                                A = p.isFreeRewardChoiceEnabled,
                                C = p.isPaidRewardChoiceEnabled,
                                F = l.computes.cardStates(t, e).cardStatus,
                                D = l.computes.isRewardNeedTake(t, e),
                                B = F.current === f.IN_PROGRESS,
                                y = F.current === f.COMPLETED,
                                P = (0, u.useState)(!1),
                                k = P[0],
                                R = P[1],
                                N = (0, u.useState)(!1),
                                T = N[0],
                                x = N[1],
                                L = (0, Xe.GS)().mediaSize <= Xe.cJ.Small ? ge.qE.extraSmall : ge.qE.small,
                                I = (0, u.useRef)(D),
                                M = I.current;
                            ((0, u.useEffect)(() => {
                                I.current = D;
                            }),
                                (0, u.useEffect)(() => {
                                    if (M && !D) {
                                        const e = (0, Se.F)(() => {
                                                (R(!1), d());
                                            }, Wn),
                                            t = (0, Se.F)(() => {
                                                x(!1);
                                            }, 2300);
                                        return (
                                            R(!0),
                                            x(!0),
                                            () => {
                                                (e(), t());
                                            }
                                        );
                                    }
                                }, [D]));
                            const O = (() => {
                                    let u,
                                        n = 0,
                                        i = 0,
                                        l = 0,
                                        c = 0,
                                        d = !1,
                                        _ = !1,
                                        m = !1,
                                        p = 300 * Math.ceil(g / 25);
                                    if (r && o && E) {
                                        const e = Math.floor(0.5 * r);
                                        let a = g - e,
                                            u = g + e,
                                            s = 0;
                                        a <= 0 && ((s = 1 - a), (u += s), (a = 1));
                                        const o = t < g && t >= a,
                                            l = t > g && t <= u,
                                            E = t === a;
                                        (o ? (n = (t - a + 1) * $n) : l && (n = (t - a) * $n),
                                            (d = Boolean(B || o || l || E)),
                                            (_ = Boolean(B || E)),
                                            (m = Boolean(y && d)),
                                            (i = (r - s - 1) * $n),
                                            B && (c = (t - a + 1) * $n * 2.5));
                                    }
                                    if (r && s) {
                                        const n = Math.min(g - b, Math.floor(0.5 * r));
                                        let o = g - n;
                                        o <= 0 && (o = 1);
                                        const c = t < g && t >= o;
                                        (c && ((i = (t - o + 1) * $n), e && (i += $n)),
                                            (m = Boolean(y && c)),
                                            (l = n * $n + $n * Math.trunc(n / 2) + p),
                                            s && (u = a));
                                    }
                                    return (
                                        T && ((p = 0), (i = Wn), (m = Boolean(y))),
                                        t === g - 1 && (u = a),
                                        {
                                            baseTimeout: c,
                                            playCompleteAnimation: m,
                                            playCompleteAnimationSound: m,
                                            playUnlockAnimation: d,
                                            playUnlockAnimationSound: _,
                                            unlockAnimationDelay: n,
                                            onAnimationDone: u,
                                            completeAnimationDelay: i,
                                            stageAnimationDelay: l,
                                            initialAnimationDelay: p,
                                        }
                                    );
                                })(),
                                $ = (0, Pu.z)(() => {
                                    _({ level: t });
                                }),
                                W = v || h,
                                H = W && !(A || C);
                            return n().createElement(
                                'div',
                                { className: hn },
                                !e &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(Tu, {
                                            stepNumber: t,
                                            stageAnimationDelay: O.stageAnimationDelay,
                                            isRewardAnimationActive: k,
                                        }),
                                        W &&
                                            n().createElement(
                                                z.i,
                                                { isEnabled: H, body: zn.btnRewardsUnavailable() },
                                                n().createElement(
                                                    'div',
                                                    { className: fn },
                                                    !H && n().createElement('div', { className: An }),
                                                    n().createElement(
                                                        'div',
                                                        { className: S()(Cn, H && Fn) },
                                                        n().createElement(
                                                            ge.u5,
                                                            {
                                                                type: ge.L$.ghost,
                                                                size: L,
                                                                disabled: H,
                                                                onClick: $,
                                                                mixClass: S()(Dn, H && Bn),
                                                            },
                                                            !H && n().createElement('div', { className: wn }),
                                                            n().createElement(
                                                                'div',
                                                                { className: yn },
                                                                zn.takeReward(),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                n().createElement(Mn, { levelNum: t, isPremium: e, isRewardAnimationActive: k }),
                                n().createElement(
                                    'div',
                                    { className: vn },
                                    n().createElement(
                                        pn,
                                        On({ isPremium: Boolean(e), completedDuration: 500, level: t }, O),
                                    ),
                                ),
                            );
                        },
                    ),
                    Gn = {
                        base: 'Divider_base_d00f8',
                        base__left: 'Divider_base__left_e2049',
                        base__right: 'Divider_base__right_a9feb',
                        base__rare: 'Divider_base__rare_b484e',
                        base__completed: 'Divider_base__completed_ef61e',
                        base__premium: 'Divider_base__premium_e6eae',
                        inner: 'Divider_inner_cbff9',
                    },
                    Un = ({ position: e, isPremium: t = !1, isRare: a = !1, status: u }) =>
                        n().createElement(
                            'div',
                            {
                                className: S()(
                                    Gn.base,
                                    Gn[`base__${u}`],
                                    Gn[`base__${e}`],
                                    a && Gn.base__rare,
                                    t && Gn.base__premium,
                                ),
                            },
                            n().createElement('div', { className: Gn.inner }),
                        ),
                    jn = {
                        base: 'Card_base_ea305',
                        base__inProgress: 'Card_base__inProgress_df5f7',
                        base__nonPremium: 'Card_base__nonPremium_b638b',
                        totalPoints: 'Card_totalPoints_b5252',
                        totalPoints__default: 'Card_totalPoints__default_a27e8',
                        totalPoints__final: 'Card_totalPoints__final_cf634',
                        progressShadow: 'Card_progressShadow_a2727',
                    },
                    Vn = (0, i.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            maxLevels: a,
                            maxVisibleCards: r,
                            showBuyAnimations: s,
                            showLevelsAnimations: o,
                            onAnimationDone: i,
                            levelRef: l,
                        }) => {
                            const c = w().model,
                                _ = c.root.get(),
                                m = _.currentPointsInLevel,
                                E = _.chapterState,
                                g = c.computes.cardStates(t, e),
                                b = g.cardStatus,
                                p = g.isRare,
                                h = c.computes.levelInfo(t).levelPoints,
                                A = !e && (b.current === f.COMPLETED || b.current === f.IN_PROGRESS),
                                C = 1 === t,
                                F = t === a,
                                D = C ? void 0 : c.computes.cardStates(t - 1, e),
                                B = F ? void 0 : c.computes.cardStates(t + 1, e),
                                y = (0, u.useRef)(null),
                                P = e ? (t - 1) * h : h;
                            (0, u.useImperativeHandle)(l, () => ({
                                width: () => {
                                    const e = y.current;
                                    return e ? e.offsetWidth : void 0;
                                },
                                offsetLeft: () => {
                                    const e = y.current;
                                    return e ? e.offsetLeft : void 0;
                                },
                                getOffsetLeftInArea: () => {
                                    const e = y.current;
                                    if (!e) return 0;
                                    const t = e.parentNode,
                                        a = t ? t.offsetLeft : 0;
                                    return e.offsetLeft + a;
                                },
                                getHTMLElement: () => y.current,
                            }));
                            const k =
                                    !C &&
                                    ((b.current === f.NOT_STARTED && !p) ||
                                        ((null == D ? void 0 : D.isRare) && b.current !== f.IN_PROGRESS) ||
                                        (null == D ? void 0 : D.cardStatus.current) === f.IN_PROGRESS),
                                R =
                                    !F &&
                                    ((b.current === f.COMPLETED && !p) ||
                                        ((null == B ? void 0 : B.isRare) && b.current !== f.IN_PROGRESS) ||
                                        (null == B ? void 0 : B.cardStatus.current) === f.IN_PROGRESS),
                                N = ((e, t, a, u) =>
                                    e === f.COMPLETED
                                        ? 100
                                        : e !== f.IN_PROGRESS || (t !== d.NotStarted && t !== d.Paused)
                                          ? 0
                                          : (100 * a) / u)(b.current, E, m, P),
                                T = { width: `${N}%` },
                                x = {
                                    '--small-card-width': '140rem',
                                    '--small-current-card-width': '224rem',
                                    '--big-card-width': '220rem',
                                    '--big-current-card-width': '340rem',
                                };
                            return n().createElement(
                                'div',
                                {
                                    className: S()(jn.base, jn[`base__${b.current}`], !e && jn.base__nonPremium),
                                    ref: y,
                                    style: x,
                                },
                                n().createElement(Su, { level: t, isPremium: e }),
                                n().createElement(Hn, {
                                    isPremium: e,
                                    stepNumber: t,
                                    maxVisibleCards: r,
                                    showLevelsAnimations: o,
                                    showBuyAnimations: s,
                                    onFinalAnimationDone: i,
                                }),
                                e &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: S()(jn.totalPoints, jn.totalPoints__default) },
                                            P,
                                        ),
                                        F &&
                                            n().createElement(
                                                'div',
                                                { className: S()(jn.totalPoints, jn.totalPoints__final) },
                                                a * h,
                                            ),
                                    ),
                                A && n().createElement('div', { className: jn.progressShadow, style: T }),
                                !k &&
                                    n().createElement(Un, {
                                        position: v.left,
                                        isPremium: e,
                                        isRare: p,
                                        status: b.current,
                                    }),
                                !R &&
                                    n().createElement(Un, {
                                        position: v.right,
                                        isPremium: e,
                                        isRare: p,
                                        status: b.current,
                                    }),
                            );
                        },
                    ),
                    Zn = (0, i.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            isPremium: r,
                            sectionKey: s,
                            maxVisibleCards: o,
                        }) => {
                            const i = w().model,
                                l = i.root.get(),
                                c = l.chapterID,
                                d = l.currentLevel,
                                _ = l.potentialLevel,
                                m = l.showBuyAnimations,
                                E = l.showLevelsAnimations,
                                g = i.levels.get(),
                                p = (0, u.useState)(!1),
                                h = p[0],
                                v = p[1],
                                f = () => {
                                    v(!0);
                                },
                                A = Boolean(o && r && m),
                                C = Boolean(o && E),
                                F = (u, n, r) => (u === n ? e : u === r ? a : t);
                            return n().createElement(
                                'div',
                                { className: S()(da.row, !r && da.row__basic) },
                                b.UI(g, (e, t) =>
                                    n().createElement(Vn, {
                                        key: `${c}_${s}_${t}`,
                                        showBuyAnimations: A && !h,
                                        showLevelsAnimations: C,
                                        levelRef: F(e.level, d, _),
                                        stepNumber: e.level,
                                        isPremium: r,
                                        maxLevels: g.length,
                                        maxVisibleCards: o,
                                        onAnimationDone: f,
                                    }),
                                ),
                            );
                        },
                    );
                function qn() {
                    return (
                        (qn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        qn.apply(null, arguments)
                    );
                }
                const Yn = 1,
                    Kn = (0, i.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: r,
                            widget3dStyleLeftRef: s,
                            shadowLipRef: i,
                            api: l,
                        }) => {
                            const c = w().model,
                                d = c.root.get(),
                                _ = d.currentLevel,
                                m = d.currentPointsInLevel,
                                E = d.showLevelsAnimations,
                                g = c.computes.isLayoutWithExtraWidget(),
                                b = c.levels.get(),
                                p = (0, u.useRef)((0, Ma.MR)()),
                                h = (0, u.useRef)((0, Ma.MR)());
                            l.current.moveProgressBars = (e) => {
                                (p.current.update(e), h.current.update(e));
                            };
                            const v = (0, u.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                f = v[0],
                                A = v[1],
                                C = (0, u.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            u = t.current,
                                            n = a ? a.width() : 0,
                                            r = u ? u.width() : 0;
                                        return !r && n
                                            ? { currentLevelWidth: n, levelWidth: 224 === n ? 140 : 220 }
                                            : { currentLevelWidth: n, levelWidth: r };
                                    }
                                }, [e, t]),
                                F = (0, Xe.GS)().mediaSize;
                            return (
                                (0, u.useEffect)(() => {
                                    (0, j.Eu)().then(() => {
                                        const e = C();
                                        if (e) {
                                            const t =
                                                Math.floor(
                                                    (viewEnv.getClientSizeRem().width - e.currentLevelWidth) /
                                                        e.levelWidth,
                                                ) + 1;
                                            A({
                                                levelWidth: e.levelWidth,
                                                currentLevelWidth: e.currentLevelWidth,
                                                maxCardsShown: t,
                                            });
                                        }
                                    });
                                }, [F, C, b.length, _, m]),
                                (0, u.useEffect)(() => {
                                    E && (0, o.G)(R.sounds.bp_progress_bar_start());
                                }, [E]),
                                (0, u.useEffect)(() => {
                                    r && r();
                                }, [_, m, r]),
                                n().createElement(
                                    'div',
                                    { className: da.wrapper },
                                    !g &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement(au, { widget3dStyleRef: s, level: Yn, isShowTitle: !0 }),
                                            n().createElement(
                                                'div',
                                                { className: S()(da.decor, da.decor__left) },
                                                n().createElement('div', { className: da.decorBackground }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: da.bookmarkBackground, ref: i },
                                                n().createElement(Ia, {
                                                    isDisappeared: !0,
                                                    mixClass: da.bookmarkLeftResponsive,
                                                }),
                                            ),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: da.section },
                                        n().createElement(Zn, {
                                            sectionKey: 'baseCard',
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: E ? f.maxCardsShown : 0,
                                            currentLevel: _,
                                        }),
                                        n().createElement(
                                            lu,
                                            qn({ progressApi: p, freePointsApi: h, progressChange: r }, f),
                                        ),
                                        n().createElement(Zn, {
                                            sectionKey: 'basePremiumCard',
                                            isPremium: !0,
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: f.maxCardsShown,
                                            currentLevel: _,
                                        }),
                                    ),
                                    !g &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement(
                                                'div',
                                                { className: da.decor },
                                                n().createElement('div', { className: da.decorBackground }),
                                            ),
                                            n().createElement(au, { level: 4 }),
                                        ),
                                )
                            );
                        },
                    );
                function Xn() {
                    return (
                        (Xn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        Xn.apply(null, arguments)
                    );
                }
                function Qn(e, t, a, u, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, n);
                }
                const Jn = { allowedButtons: [ba.MainButton] },
                    er = R.strings.battle_pass.progression;
                let tr = (function (e) {
                    return (
                        (e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel'),
                        e
                    );
                })({});
                const ar = ['dragStart', 'dragEnd', 'dragging'],
                    ur = (0, i.Pi)(({ onHorizontalScroll: e }) => {
                        const t = w().model,
                            a = t.levels.get(),
                            s = t.root.get(),
                            o = s.currentLevel,
                            i = s.isBattlePassPurchased,
                            l = s.showBuyAnimations,
                            c = (0, u.useRef)({ moveProgressBars: () => {} }),
                            d = (0, u.useRef)(null),
                            _ = (0, u.useRef)(null),
                            m = (0, u.useRef)(null),
                            E = (0, u.useRef)(null),
                            g = (0, u.useRef)(null),
                            b = (0, u.useRef)(null),
                            p = (0, u.useRef)(null),
                            h = (0, u.useRef)(0),
                            v = t.computes.isLayoutWithExtraWidget(),
                            f = (0, u.useState)(tr.Hidden),
                            A = f[0],
                            D = f[1],
                            B = (0, u.useState)(tr.Hidden),
                            y = B[0],
                            P = B[1],
                            k = (0, u.useState)(!1),
                            R = k[0],
                            N = k[1],
                            T = (0, u.useState)(void 0),
                            x = T[0],
                            L = T[1],
                            I = (0, ma.T5)(),
                            M = I.animationScroll.scrollPosition,
                            O = I.applyScroll,
                            $ = I.events,
                            W = I.handleMouseWheel,
                            z = I.getContainerSize,
                            H = I.getWrapperSize,
                            G = (function (e, t, a) {
                                const n = e.contentRef,
                                    r = e.wrapperRef,
                                    s = e.scrollPosition,
                                    o = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, u.useState)(ga),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        const e = n.current;
                                        e && (e.style.cursor = d.type === Ea.Dragging ? 'move' : 'grab');
                                    }, [n, d.type]),
                                    (0, u.useEffect)(() => {
                                        if (d.type !== Ea.Dragging) return;
                                        const e = (e) => {
                                            const a = n.current,
                                                u = r.current;
                                            if (!a || !u) return;
                                            const l = d.positionFrom - e.screenX,
                                                c = d.previousScrollPosition + l;
                                            s.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: o(a, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        };
                                        function a() {
                                            (window.removeEventListener('mousemove', e),
                                                document.body.removeEventListener('mouseleave', a),
                                                _({ type: 'scrollingToEnd' }));
                                        }
                                        return (
                                            window.addEventListener('mousemove', e),
                                            window.addEventListener('mouseup', a),
                                            document.body.addEventListener('mouseleave', a),
                                            () => {
                                                (window.removeEventListener('mousemove', e),
                                                    window.removeEventListener('mouseup', a),
                                                    document.body.removeEventListener('mouseleave', a));
                                            }
                                        );
                                    }, [i.scrollPosition, o, n, d, s, r, t, a]),
                                    (0, u.useEffect)(() => {
                                        if (d.type !== Ea.End) return;
                                        const e = () => {
                                            _(ga);
                                        };
                                        return (i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                    }, [i.scrollPosition, d.type, l]),
                                    (0, u.useEffect)(() => {
                                        const e = n.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                _({
                                                    type: Ea.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, n, a]),
                                    [d, _]
                                );
                            })(I, void 0, Jn),
                            U = G[0],
                            V = G[1],
                            Z = (e) => {
                                (U.type === Ea.Dragging && V({ type: Ea.End }), W(e));
                            },
                            q = (0, u.useMemo)(() => Object.assign({}, I, { handleMouseWheel: Z }), []),
                            Y = (0, u.useCallback)(
                                (e) => {
                                    const t = E.current ? E.current.offsetWidth : 0,
                                        a = g.current ? g.current.offsetWidth : 0;
                                    if (d.current) {
                                        const u = H();
                                        (c.current.moveProgressBars({
                                            viewPort: d.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                            leftOffset: t + a,
                                        }),
                                            N(v || e > t + 0.5 * a));
                                    }
                                },
                                [H, v],
                            ),
                            K = (0, u.useCallback)((e = !1) => {
                                const t = _.current;
                                let a = 0,
                                    u = 0;
                                const n = E.current ? E.current.offsetWidth : 0,
                                    r = g.current ? g.current.offsetWidth : 0;
                                t && ((a = t.width()), (u = t.offsetLeft() + n + r));
                                const s = d.current;
                                let o = 0;
                                if (a && s) {
                                    const t = 0.5 * s.offsetWidth;
                                    e && h.current
                                        ? (o = u + a - 0.5 * h.current - t)
                                        : ((o = u + 0.5 * a - t), (h.current = a));
                                }
                                return ((o = Math.round(o < 0 ? 0 : o)), o);
                            }, []),
                            X = () => {
                                const e = d.current,
                                    t = _ && _.current,
                                    a = m.current,
                                    u = E.current ? E.current.offsetWidth : 0,
                                    n = g.current ? g.current.offsetWidth : 0;
                                if (t) {
                                    const r = t.offsetLeft() + u + n,
                                        s = (null == a ? void 0 : a.offsetLeft()) + u + n,
                                        o =
                                            M.goal < r - e.offsetWidth
                                                ? tr.NavToCurrentLevel
                                                : a && M.goal < s - e.offsetWidth
                                                  ? tr.NavToPotentialLevel
                                                  : tr.Hidden,
                                        i = (() => {
                                            switch (!0) {
                                                case a && M.goal > s + a.width():
                                                    return tr.NavToPotentialLevel;
                                                case M.goal > r + t.width():
                                                    return tr.NavToCurrentLevel;
                                                default:
                                                    return tr.Hidden;
                                            }
                                        })();
                                    (D(o), P(i));
                                }
                            },
                            Q = (e) => {
                                const t = ((e) => {
                                    let t = 0;
                                    if (e && e.current && d && d.current) {
                                        const a = e.current,
                                            u = E.current ? E.current.offsetWidth : 0,
                                            n = g.current ? g.current.offsetWidth : 0;
                                        let r = 0,
                                            s = 0;
                                        a && ((r = a.width()), (s = a.offsetLeft() + u + n));
                                        const o = d.current;
                                        (r && o && (t = s + 0.5 * r - 0.5 * o.offsetWidth),
                                            (t = Math.round(t < 0 ? 0 : t)));
                                    }
                                    return t;
                                })(e);
                                (Y(M.goal), O(t), X());
                            },
                            J = (e) => {
                                switch (e) {
                                    case tr.NavToCurrentLevel:
                                        return Q(_);
                                    case tr.NavToPotentialLevel:
                                        return Q(m);
                                }
                            },
                            ee = (e) => {
                                switch (e) {
                                    case tr.NavToCurrentLevel:
                                        return { type: F.Default, tooltipBody: er.backToCurrentStageArrow.descr() };
                                    case tr.NavToPotentialLevel:
                                        return { type: F.Gray, tooltipBody: er.backToPotentialStageArrow.descr() };
                                }
                            },
                            te = (e) => {
                                (Y(M.goal), X(), L(null == e ? void 0 : e.type));
                            };
                        return (
                            (0, u.useEffect)(
                                () =>
                                    (0, r.v)(() => {
                                        i && l && O(K());
                                    }),
                                [O, K, i, l],
                            ),
                            (0, u.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = z(),
                                                    t = M.goal;
                                                (yield (0, j.Eu)(), yield (0, kt.nS)());
                                                const a = z(),
                                                    u = d.current,
                                                    n = I.getBounds()[1],
                                                    r = 0.25 * u.offsetWidth,
                                                    s = a && e && a !== e ? (t * a) / e : t;
                                                (Y(s), O(s > n - r ? n : s));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (u, n) {
                                                    var r = e.apply(t, a);
                                                    function s(e) {
                                                        Qn(r, u, n, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Qn(r, u, n, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, u.useEffect)(() => (0, Se.F)(() => Q(_), 700), [o]),
                            (0, u.useEffect)(() => {
                                if (((e = '') => ar.includes(e))(x)) return void e('dragStart' === x);
                                const t = () => {
                                        x || Y(M.goal);
                                    },
                                    a = () => {
                                        (e(!1), Y(M.goal));
                                    },
                                    u = () => {
                                        (e(!0), Y(M.goal));
                                    };
                                return (
                                    $.on('change', t),
                                    $.on('rest', a),
                                    $.on('start', u),
                                    () => {
                                        ($.off('change', t), $.off('rest', a), $.off('start', u));
                                    }
                                );
                            }, [$, Y, e, M.goal, x]),
                            n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(
                                    'div',
                                    { className: S()(da.bookmark, da.bookmark__start) },
                                    n().createElement(Ia, {
                                        chapterStep: a.length,
                                        mixClass: S()(da.bookmarkLeftFixed, R && da.bookmarkLeftFixed__active),
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: da.scrollWrapper, ref: d, onClick: te, onMouseLeave: X, onWheel: te },
                                    n().createElement(
                                        _a.X.Horizontal.Area.Default,
                                        { api: q, barClassNames: { base: da.scrollBarPosition }, onDrag: te },
                                        n().createElement(Kn, {
                                            api: c,
                                            currentCardRef: _,
                                            freeProgressionCutCardRef: b,
                                            potentialLevelCardRef: m,
                                            separatorRef: p,
                                            widget3dStyleLeftRef: E,
                                            shadowLipRef: g,
                                            onProgressChanged: te,
                                        }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: S()(
                                            da.scrollToButton,
                                            da.scrollToButton__backward,
                                            y !== tr.Hidden && da.scrollToButton__visible,
                                        ),
                                    },
                                    n().createElement(
                                        va,
                                        Xn(
                                            { onClick: () => J(y), direction: C.back, className: da.arrowButton },
                                            ee(y),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: S()(
                                            da.scrollToButton,
                                            da.scrollToButton__forward,
                                            A !== tr.Hidden && da.scrollToButton__visible,
                                        ),
                                    },
                                    n().createElement(
                                        va,
                                        Xn(
                                            { onClick: () => J(A), direction: C.forward, className: da.arrowButton },
                                            ee(A),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    nr = (0, i.Pi)(() => {
                        const e = w().model.computes.isLayoutWithExtraWidget(),
                            t = (0, u.useState)(!1),
                            a = t[0],
                            r = t[1],
                            s = S()(da.additionalShadow, a && da.additionalShadow__active);
                        return n().createElement(
                            'div',
                            { className: S()(da.base, e && da.base__isLayoutWithExtraWidget) },
                            n().createElement(
                                'div',
                                { className: S()(da.shadow, da.shadow__left) },
                                n().createElement('div', { className: s }),
                            ),
                            n().createElement(
                                'div',
                                { className: S()(da.shadow, da.shadow__right) },
                                n().createElement('div', { className: s }),
                            ),
                            n().createElement(ur, {
                                onHorizontalScroll: (e) => {
                                    r(e);
                                },
                            }),
                        );
                    }),
                    rr = (0, i.Pi)(() => {
                        const e = w().model,
                            t = e.root,
                            a = e.computes,
                            u = t.get(),
                            r = u.chapterType,
                            s = u.chapterID,
                            o = u.actionType,
                            i = u.isPaused,
                            l = a.isLayoutWithExtraWidget(),
                            c = r === m.EXTRA,
                            d = o !== _.NoAction,
                            E = S()(L, l && I);
                        return n().createElement(
                            'div',
                            { className: S()(k, l && N, c && T), style: (0, P.W4)(s) },
                            !i && n().createElement('div', { className: E }, n().createElement(nr, null)),
                            n().createElement('div', { className: x }, n().createElement(ca, null)),
                            n().createElement('div', { className: O }, d && n().createElement(Pt, null)),
                            l && n().createElement('div', { className: M }, n().createElement(At, null)),
                        );
                    }),
                    sr = 'BattlePassProgressionsViewApp_base_aafe6';
                (0, i.Pi)(() => {
                    const e = w(),
                        t = e.model,
                        a = e.controls,
                        i = t.root.get().showReplaceRewardsAnimations,
                        d = (0, c.tv)();
                    return (
                        l.N.useHandleKeydown(s.n.ESCAPE, () => d.goBack()),
                        (0, u.useEffect)(() => {
                            const e = () => {
                                document.body.style.height = window.innerHeight - (innerHeight % 2) + 'px';
                            };
                            return (
                                window.addEventListener('resize', e),
                                e(),
                                () => {
                                    (window.removeEventListener('resize', e), (document.body.style.height = 'auto'));
                                }
                            );
                        }, []),
                        (0, u.useEffect)(
                            () =>
                                (0, r.v)(() => {
                                    a.viewLoad();
                                }),
                            [],
                        ),
                        (0, u.useEffect)(() => {
                            i && (0, o.G)(R.sounds.bp_pick_up_award());
                        }, [i]),
                        n().createElement('div', { className: sr }, n().createElement(rr, null))
                    );
                });
            },
            2317: (e, t, a) => {
                a.d(t, { _: () => u });
                const u = {
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
            7959: (e, t, a) => {
                a.d(t, { jw: () => n, k9: () => u });
                const u = 3e3,
                    n = 'new_skill';
            },
            1705: (e, t, a) => {
                a.d(t, { W4: () => i, cs: () => s, fW: () => o, wD: () => r });
                var u = a(4490);
                const n = (e) => {
                        switch (e) {
                            case u.$u.Micro:
                                return 's';
                            case u.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    r = (e, t, a = '') => {
                        const u = a.length > 0 ? `_${a}` : a,
                            n = e.$dyn(`c_${t}${u}`),
                            r = String(t).slice(-1),
                            s = e.$dyn(`default_${r}${u}`);
                        return n || s;
                    },
                    s = (e, t, a) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            s = t ? 'BP' : '',
                            o = `${n(a)}${s}`;
                        return { backgroundImage: `url(${r(u, e, o)})` };
                    },
                    o = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.flag,
                            u = n(t);
                        return { backgroundImage: `url(${r(a, e, u)})` };
                    },
                    i = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${r(t.progression, e)})` }
                            : { backgroundImage: `url(${t.$dyn('common')})` };
                    };
            },
            3245: (e, t, a) => {
                let u = (function (e) {
                    return ((e.style = 'style'), (e.tankman = 'tankman'), e);
                })({});
                (u.style, u.tankman);
            },
            5278: (e, t, a) => {
                a.d(t, { Hj: () => s, UP: () => o, at: () => c, ei: () => r, u6: () => _, uc: () => d });
                (a(2486), a(4692), a(768));
                var u = a(873),
                    n = a(6758);
                (a(4490), a(3245));
                const r = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    s = {
                        progressiveStyle: 'progressiveStyle',
                        style: 'style',
                        tankman: 'tankman',
                        vehicle: 'vehicle',
                        battleQuest: 'battleQuest',
                    },
                    o = (e) => void 0 !== e.from && (e.level > 1 || e.from > 0),
                    i = [s.battleQuest, s.tankman, s.style, s.progressiveStyle, s.vehicle],
                    l = (e, t) => i.indexOf(t) - i.indexOf(e),
                    c = (e) => {
                        const t = e.sort(l);
                        return { mainReward: t[0], additionalReward: t[1] };
                    },
                    d = (e, t, a) => {
                        const u = `style_3d_${e}_${t}${a}`;
                        return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(u)})` };
                    },
                    _ = (e) => {
                        const t = (0, u.f8)(e),
                            a = R.strings.battle_pass.status.timeLeft;
                        switch (!0) {
                            case t.days >= 1:
                                return (0, n.uF)(a.days(), { day: t.days });
                            case t.hours >= 1:
                                return (0, n.uF)(a.hours(), { hour: t.hours });
                            case t.minutes >= 1:
                                return (0, n.uF)(a.min(), { min: t.minutes });
                            default:
                                return a.lessMin();
                        }
                    };
            },
            2215: (e, t, a) => {
                a.d(t, { Z: () => me });
                var u = a(7363),
                    n = a.n(u),
                    r = a(9849),
                    s = a.n(r),
                    o = a(8739),
                    i = a(2041),
                    l = a(6485),
                    c = a(4029),
                    d = a(8925);
                const _ = (e, t, a, u, n) => {
                    const r = R.images.gui.maps.icons.battlePass.awards_widget;
                    return n
                        ? `url(${r.$dyn(`${e.toLowerCase()}_${t}${a}_${u}_${n}`)})`
                        : `url(${r.$dyn(`${e.toLowerCase()}_${t}${a}_${u}`)})`;
                };
                let m = (function (e) {
                        return (
                            (e.Award = 'Award'),
                            (e.Ticket = 'Ticket'),
                            (e.Coin = 'Coin'),
                            (e.Taler = 'Taler'),
                            (e.Collection = 'Collection'),
                            (e.Commander = 'Commander'),
                            e
                        );
                    })({}),
                    E = (function (e) {
                        return ((e.Small = 'small'), (e.Big = 'big'), e);
                    })({}),
                    g = (function (e) {
                        return ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'), e);
                    })({}),
                    b = (function (e) {
                        return ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''), e);
                    })({}),
                    p = (function (e) {
                        return (
                            (e.Hover = 'Hover'),
                            (e.Disabled = 'Disabled'),
                            (e.Triggered = 'Triggered'),
                            (e.None = ''),
                            e
                        );
                    })({});
                const h = {
                        base: 'Background_base_f3073',
                        bg: 'Background_bg_a03fd',
                        bgDisabled: 'Background_bgDisabled_abb43',
                        bgHover: 'Background_bgHover_a39f3',
                        base__big: 'Background_base__big_a6d00',
                        base__hovered: 'Background_base__hovered_a74f9',
                    },
                    v = ({ size: e, isHover: t, disabled: a = !1, type: u = m.Coin }) => {
                        const r = (0, d.GS)().mediaSize >= d.cJ.Medium ? g.Medium : g.Small;
                        return n().createElement(
                            'div',
                            { className: s()(h.base, h[`base__${e}`], h[`base__${e}${u}`], t && h.base__hovered) },
                            a
                                ? n().createElement('div', {
                                      className: h.bgDisabled,
                                      style: { backgroundImage: _(u, b.Background, p.Disabled, e, r) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: h.bg,
                                          style: { backgroundImage: _(u, b.Background, p.None, e, r) },
                                      }),
                                      n().createElement('div', {
                                          className: h.bgHover,
                                          style: { backgroundImage: _(u, b.Background, p.Hover, e, r) },
                                      }),
                                  ),
                        );
                    },
                    f = {
                        base: 'Border_base_a4523',
                        border: 'Border_border_d8967',
                        borderHover: 'Border_borderHover_e30d7',
                        base__hovered: 'Border_base__hovered_d4ec9',
                        borderDisabled: 'Border_borderDisabled_eb6d6',
                        borderDisabled__big: 'Border_borderDisabled__big_f5398',
                    },
                    A = ({ size: e, isHover: t, highlighted: a = !1, disabled: u = !1, type: r = m.Coin }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? g.Medium : g.Small;
                        return n().createElement(
                            'div',
                            { className: s()(f.base, f[`base__${e}`], t && f.base__hovered) },
                            u
                                ? n().createElement('div', {
                                      className: s()(f.borderDisabled, f[`borderDisabled__${e}`]),
                                      style: { backgroundImage: _(r, b.Border, p.Disabled, e, o) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: f.border,
                                          style: { backgroundImage: _(a ? m.Collection : r, b.Border, p.None, e, o) },
                                      }),
                                      n().createElement('div', {
                                          className: f.borderHover,
                                          style: { backgroundImage: _(r, b.Border, p.Hover, e, o) },
                                      }),
                                  ),
                        );
                    };
                var C = a(1602),
                    F = a(5603);
                const D = { base: 'CountValue_base_b47f3', base__big: 'CountValue_base__big_b1f00' },
                    B = ({ state: e, count: t, size: a, maxCount: u = 0 }) => {
                        switch (e) {
                            case y.InProgress:
                                return n().createElement(F.z, { text: `${t || 0} / ${u}` });
                            case y.Completed:
                                return n().createElement('div', { className: s()(D.base, D[`base__${a}`]) });
                            default:
                                return n().createElement(C.A, { format: 'integral', value: t });
                        }
                    },
                    w = {
                        base: 'Count_base_d2aba',
                        base__big: 'Count_base__big_fa81f',
                        base__locked: 'Count_base__locked_cb8f9',
                        base__disabled: 'Count_base__disabled_ac367',
                    };
                let y = (function (e) {
                    return ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'), e);
                })({});
                const S = ({
                        size: e,
                        count: t,
                        maxCount: a,
                        state: u = y.Default,
                        isLocked: r = !1,
                        disabled: o = !1,
                    }) =>
                        n().createElement(
                            'div',
                            { className: s()(w.base, w[`base__${e}`], r && w.base__locked, o && w.base__disabled) },
                            n().createElement(B, { state: u, size: e, count: t, maxCount: a }),
                        ),
                    P = {
                        base: 'Icon_base_be976',
                        base__big: 'Icon_base__big_b2756',
                        base__darkened: 'Icon_base__darkened_d968e',
                        base__hover: 'Icon_base__hover_e2ee8',
                        base__disabled: 'Icon_base__disabled_a1f6f',
                    },
                    k = (e, t, a) => {
                        switch (!0) {
                            case a:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case t:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    N = ({ size: e, isHover: t, isDark: a = !0, disabled: u = !1, type: r }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? g.Medium : g.Small;
                        return n().createElement('div', {
                            className: s()(P.base, P[`base__${e}`], P[`base__${k(t, a, u)}`]),
                            style: { backgroundImage: _(r, b.Icon, p.None, e, r === m.Collection ? g.None : o) },
                        });
                    },
                    T = {
                        base: 'Label_base_f2adf',
                        base__big: 'Label_base__big_dbfd8',
                        base__gold: 'Label_base__gold_bb470',
                        base__hover: 'Label_base__hover_e4ce6',
                        base__disabled: 'Label_base__disabled_dad1b',
                    },
                    x = (e, t) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case t:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    L = ({ size: e, title: t, isHover: a, disabled: u = !1, isGold: r = !1 }) =>
                        n().createElement(
                            'div',
                            { className: s()(T.base, T[`base__${e}`], T[`base__${x(u, a)}`], r && T.base__gold) },
                            t,
                        ),
                    I = {
                        base: 'ChoiceAward_base_ab1a3',
                        base__big: 'ChoiceAward_base__big_febd0',
                        base__disabled: 'ChoiceAward_base__disabled_d33bf',
                        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_cfc1a',
                        baseAppear: 'ChoiceAward_baseAppear_df31e',
                        shine: 'ChoiceAward_shine_c0a04',
                        shine_small_s: 'ChoiceAward_shine_small_s_b113b',
                        shine_small_m: 'ChoiceAward_shine_small_m_a346a',
                        shine_big_s: 'ChoiceAward_shine_big_s_f2580',
                        shine_big_m: 'ChoiceAward_shine_big_m_e95e2',
                        shine__left: 'ChoiceAward_shine__left_c76a8',
                        shine__right: 'ChoiceAward_shine__right_d7679',
                        arrow: 'ChoiceAward_arrow_d0fa6',
                        blinkShape: 'ChoiceAward_blinkShape_a9abc',
                        blink: 'ChoiceAward_blink_b918b',
                        blinker: 'ChoiceAward_blinker_e8cd4',
                    },
                    M = R.strings.battle_pass.awardsWidget,
                    O = ({ count: e, disabled: t = !1, onClick: a, size: r }) => {
                        const o = (0, u.useState)(!1),
                            i = o[0],
                            d = o[1],
                            _ = 1 === e ? M.title.awardSingle() : M.title.awardMultiple(),
                            E = t ? M.description.awardDisabled() : M.description.award(),
                            g = (0, u.useCallback)(() => {
                                t || (c.$.playClick(), a());
                            }, [t, a]);
                        return n().createElement(
                            l.i,
                            { body: E, isEnabled: Boolean(E) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(
                                        I.base,
                                        I[`base__${r}`],
                                        t ? I.base__disabled : I.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: g,
                                },
                                n().createElement(A, { size: r, isHover: i, type: m.Award, disabled: t }),
                                n().createElement(v, { size: r, isHover: i, type: m.Award, disabled: t }),
                                n().createElement(N, { size: r, isHover: i, type: m.Award, disabled: t, isDark: !1 }),
                                n().createElement(S, { size: r, count: e, disabled: t }),
                                n().createElement(L, { size: r, isHover: i, title: _, disabled: t, isGold: !0 }),
                                !t &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: s()(I.shine, I.shine__left) }),
                                        n().createElement('div', { className: s()(I.shine, I.shine__right) }),
                                        n().createElement('div', { className: I.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: I.blinkShape },
                                            n().createElement('div', { className: I.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    $ = { base: 'CoinAward_base_eb565', base__big: 'CoinAward_base__big_ddf7f' },
                    W = R.strings.battle_pass.awardsWidget,
                    z = ({ count: e, onClick: t, size: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1];
                        return n().createElement(
                            l.i,
                            { body: W.description.coin(), isEnabled: Boolean(W.description.coin()) },
                            n().createElement(
                                'div',
                                {
                                    className: s()($.base, $[`base__${a}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        (c.$.playClick(), t());
                                    },
                                },
                                n().createElement(A, { size: a, isHover: o }),
                                n().createElement(v, { size: a, isHover: o }),
                                n().createElement(N, { size: a, isHover: o, type: m.Coin }),
                                n().createElement(S, { size: a, count: e }),
                                n().createElement(L, { size: a, isHover: o, title: W.title.coin() }),
                            ),
                        );
                    },
                    H = {
                        base: 'Counter_base_b457c',
                        show: 'Counter_show_a62c2',
                        base__big: 'Counter_base__big_d6a57',
                        base__small: 'Counter_base__small_ea547',
                        base__empty: 'Counter_base__empty_c2ad2',
                        base__animated: 'Counter_base__animated_fb5ef',
                        base__hidden: 'Counter_base__hidden_b1e71',
                        hide: 'Counter_hide_d1bf0',
                        bg: 'Counter_bg_f25ac',
                        value: 'Counter_value_d1de3',
                        value__text: 'Counter_value__text_bb007',
                        base__pattern: 'Counter_base__pattern_d1fff',
                        plus: 'Counter_plus_a405c',
                        pattern: 'Counter_pattern_a4be2',
                    },
                    G = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function U() {
                    return (
                        (U = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        U.apply(null, arguments)
                    );
                }
                const j = (e) => {
                    let t = e.value,
                        a = e.isEmpty,
                        u = void 0 !== a && a,
                        r = e.className,
                        o = e.size,
                        i = void 0 === o ? 'normal' : o,
                        l = e.fadeInAnimation,
                        c = void 0 !== l && l,
                        d = e.hide,
                        _ = void 0 !== d && d,
                        m = e.maximumNumber,
                        E = void 0 === m ? 99 : m,
                        g = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var u in e)
                                if ({}.hasOwnProperty.call(e, u)) {
                                    if (-1 !== t.indexOf(u)) continue;
                                    a[u] = e[u];
                                }
                            return a;
                        })(e, G);
                    const b = u ? null : t,
                        p = 'string' == typeof b;
                    if ((b && !p && b < 0) || 0 === b) return null;
                    const h = b && !p && b > E,
                        v = s()(
                            H.base,
                            H[`base__${i}`],
                            c && H.base__animated,
                            _ && H.base__hidden,
                            !b && H.base__pattern,
                            u && H.base__empty,
                            r,
                        );
                    return n().createElement(
                        'div',
                        U({ className: v }, g),
                        n().createElement('div', { className: H.bg }),
                        n().createElement('div', { className: H.pattern }),
                        n().createElement(
                            'div',
                            { className: s()(H.value, p && H.value__text) },
                            h ? E : b,
                            h && n().createElement('span', { className: H.plus }, '+'),
                        ),
                    );
                };
                var V = a(9659);
                const Z = {
                        base: 'CollectionAward_base_f6b67',
                        base__big: 'CollectionAward_base__big_a4e03',
                        bubble: 'CollectionAward_bubble_c556b',
                    },
                    q = R.strings.battle_pass.awardsWidget,
                    Y = ({ count: e, maxCount: t, newItemsCount: a, hasTrigger: r, size: o, onClick: i }) => {
                        const d = (0, u.useState)(!1),
                            _ = d[0],
                            g = d[1],
                            b = t === e,
                            p = o === E.Small && r,
                            h = b ? q.description.collectionCompleted() : q.description.collection(),
                            f = (0, V.z)(() => {
                                (c.$.playClick(), i());
                            });
                        return n().createElement(
                            l.i,
                            { body: h, isEnabled: Boolean(h) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(Z.base, Z[`base__${o}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), g(!0));
                                    },
                                    onMouseLeave: () => {
                                        g(!1);
                                    },
                                    onClick: f,
                                },
                                n().createElement(A, { size: o, isHover: _, type: m.Coin, highlighted: p }),
                                n().createElement(v, { size: o, isHover: _ }),
                                n().createElement(N, { size: o, isHover: _, type: m.Collection }),
                                n().createElement(S, {
                                    size: o,
                                    count: e,
                                    maxCount: t,
                                    state: b ? y.Completed : y.InProgress,
                                }),
                                n().createElement(L, { size: o, isHover: _, title: q.title.collection() }),
                                a > 0 &&
                                    n().createElement(
                                        'div',
                                        { className: Z.bubble },
                                        n().createElement(j, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var K = a(3925);
                const X = {
                        base: 'CommanderAward_base_ad575',
                        icon: 'CommanderAward_icon_e1e10',
                        base__hover: 'CommanderAward_base__hover_cedd4',
                    },
                    Q = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: t, tankmenScreenID: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1],
                            c = Q.description.commander(),
                            d =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${a}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return n().createElement(
                            l.i,
                            { body: c, isEnabled: Boolean(c) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(X.base, X[`base__${t}`], o && X.base__hover),
                                    onMouseEnter: () => {
                                        (K.hY.sound(R.sounds.bp_highlight_02()), i(!0));
                                    },
                                    onMouseLeave: () => i(!1),
                                    onClick: () => {
                                        (K.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                n().createElement(A, { size: t, isHover: o }),
                                n().createElement(v, { size: t, isHover: o }),
                                n().createElement(L, { size: t, isHover: o, title: Q.title.commander() }),
                                n().createElement('div', {
                                    className: X.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_bd8d2', base__big: 'TalerAward_base__big_e13b6' },
                    te = R.strings.battle_pass.awardsWidget,
                    ae = ({ count: e, onClick: t, size: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1];
                        return n().createElement(
                            l.i,
                            { body: te.description.taler() },
                            n().createElement(
                                'div',
                                {
                                    className: s()(ee.base, ee[`base__${a}`], o && ee.base__hover),
                                    onMouseEnter: () => {
                                        (K.hY.sound(R.sounds.bp_highlight_02()), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        (K.hY.click(), t());
                                    },
                                },
                                n().createElement(A, { size: a, isHover: o }),
                                n().createElement(v, { size: a, isHover: o }),
                                n().createElement(N, { size: a, isHover: o, type: m.Taler }),
                                n().createElement(S, { size: a, count: e }),
                                n().createElement(L, { size: a, isHover: o, title: te.title.taler() }),
                            ),
                        );
                    },
                    ue = {
                        base: 'TicketAward_base_f3d98',
                        base__big: 'TicketAward_base__big_a6dda',
                        base__hasAppearAnimation: 'TicketAward_base__hasAppearAnimation_d3808',
                        baseAppear: 'TicketAward_baseAppear_cbc10',
                        shine: 'TicketAward_shine_d75b9',
                        shine_small_s: 'TicketAward_shine_small_s_b2d1d',
                        shine_small_m: 'TicketAward_shine_small_m_aa1d4',
                        shine_big_s: 'TicketAward_shine_big_s_ddf65',
                        shine_big_m: 'TicketAward_shine_big_m_ef804',
                        shine__left: 'TicketAward_shine__left_c8f17',
                        shine__right: 'TicketAward_shine__right_c0a9f',
                        arrow: 'TicketAward_arrow_d5617',
                        blinkShape: 'TicketAward_blinkShape_c798a',
                        blink: 'TicketAward_blink_d9f53',
                        blinker: 'TicketAward_blinker_ee314',
                    },
                    ne = R.strings.battle_pass.awardsWidget,
                    re = ({ count: e, onClick: t, size: a }) => {
                        const r = (0, u.useState)(!1),
                            o = r[0],
                            i = r[1],
                            c = Boolean(e),
                            d = c ? m.Ticket : void 0;
                        return n().createElement(
                            l.i,
                            { body: ne.description.ticket(), isEnabled: Boolean(ne.description.ticket()) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(ue.base, ue[`base__${a}`], c && ue.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (K.hY.sound('bp_highlight_02'), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        (K.hY.sound('play'), t());
                                    },
                                },
                                n().createElement(A, { size: a, isHover: o, type: d }),
                                n().createElement(v, { size: a, isHover: o, type: d }),
                                n().createElement(N, { size: a, isHover: o, type: m.Ticket, isDark: !c }),
                                n().createElement(S, { size: a, count: e }),
                                n().createElement(L, { size: a, isHover: o, title: ne.title.ticket(), isGold: c }),
                                c &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: s()(ue.shine, ue.shine__left) }),
                                        n().createElement('div', { className: s()(ue.shine, ue.shine__right) }),
                                        n().createElement('div', { className: ue.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: ue.blinkShape },
                                            n().createElement('div', { className: ue.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var se = a(5090),
                    oe = a(5369);
                const ie = (0, se.q3)()(
                        ({ observableModel: e, externalModel: t }) => {
                            const a = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                u = (0, oe.Om)((e) => {
                                    const u = a.root.get(),
                                        n = u.talerCount,
                                        r = u.notChosenRewardCount,
                                        s = u.bpcoinCount,
                                        o = u.ticketsCount,
                                        i = u.isChooseRewardsEnabled,
                                        l = u.tankmenScreenID,
                                        c = u.isTalerEnabled,
                                        d = u.isBpCoinEnabled,
                                        _ = u.isTicketsEnabled,
                                        E = a.collectionEntryPoint.get(),
                                        g = E.collectionItemCount,
                                        b = E.newCollectionItemCount,
                                        p = E.maxCollectionItemCount,
                                        h = E.isFirstEnter,
                                        v = E.isCollectionsEnabled;
                                    return [
                                        {
                                            type: m.Award,
                                            props: {
                                                size: e,
                                                count: r,
                                                disabled: !i,
                                                onClick: t.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: r > 0,
                                        },
                                        {
                                            type: m.Ticket,
                                            props: {
                                                size: e,
                                                count: o,
                                                onClick: t.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: _,
                                        },
                                        {
                                            type: m.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: t.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: m.Taler,
                                            props: { size: e, count: n, onClick: t.createCallbackNoArgs('showTalers') },
                                            condition: c,
                                        },
                                        {
                                            type: m.Collection,
                                            props: {
                                                size: e,
                                                count: g,
                                                maxCount: p,
                                                newItemsCount: b,
                                                hasTrigger: h,
                                                onClick: t.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: v,
                                        },
                                        {
                                            type: m.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                tankmenScreenID: l,
                                                onClick: t.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: 0 !== l,
                                        },
                                    ];
                                });
                            return Object.assign({}, a, { computes: { awardsList: u } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    le = ie[0],
                    ce = ie[1],
                    de = {
                        base: 'AwardsWrapper_base_c2632',
                        award: 'AwardsWrapper_award_a5575',
                        base__big: 'AwardsWrapper_base__big_c4528',
                    },
                    _e = (0, i.Pi)(({ size: e, classNames: t }) => {
                        const a = ce().model;
                        return n().createElement(
                            'div',
                            { className: s()(de.base, de[`base__${e}`], null == t ? void 0 : t.base) },
                            o.UI(
                                a.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    n().createElement(
                                        'div',
                                        { key: e.type, className: s()(de.award, null == t ? void 0 : t.award) },
                                        ((e, t) => {
                                            switch (e) {
                                                case m.Award:
                                                    return n().createElement(O, t);
                                                case m.Ticket:
                                                    return n().createElement(re, t);
                                                case m.Coin:
                                                    return n().createElement(z, t);
                                                case m.Taler:
                                                    return n().createElement(ae, t);
                                                case m.Collection:
                                                    return n().createElement(Y, t);
                                                case m.Commander:
                                                    return n().createElement(J, t);
                                                default:
                                                    return (console.warn('Unknown award type: ', e), null);
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    me = ({ rootId: e, size: t = E.Small, context: a = 'model', classNames: u }) =>
                        n().createElement(
                            le,
                            { options: { context: a, rootId: e } },
                            n().createElement(_e, { size: t, classNames: u }),
                        );
            },
            3927: (e, t, a) => {
                a.d(t, { G4: () => B });
                var u = a(9849),
                    n = a.n(u),
                    r = a(7363),
                    s = a.n(r);
                const o = (e, t) => {
                    const a = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            a = e.path.$dyn('default');
                        return t || a;
                    })(e).$dyn(`${t.name}${a}`);
                };
                let i = (function (e) {
                    return ((e.Season = 'season'), (e.Chapter = 'chapter'), e);
                })({});
                const l = {
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
                var c = a(1705);
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
                    _ = ({
                        level: e,
                        size: t,
                        isGold: a,
                        isForRewardScreen: u,
                        curState: r,
                        isFirstLevel: o,
                        showProgressionCompleted: i,
                    }) => {
                        const l = n()(d.base, d[`base__${t}`]),
                            c = n()(
                                d.text,
                                d.text__filtered,
                                d[`text__${t}`],
                                d[`text__${r}`],
                                i && d.text__hideWithDelay,
                                o && d.text__new,
                                u && d.text__rewardScreen,
                            ),
                            _ = n()(
                                d.textWithBlend,
                                o && d.text__new,
                                i && d.text__hideWithDelay,
                                d[`textWithBlend__${r}`],
                            ),
                            m = n()(d.text, d.text__blended, d[`text__${t}`], u && d.text__rewardScreen),
                            E = n()(
                                d.textMask,
                                a && d.textMask__gold,
                                u && d.textMask__animated,
                                a && u && d.textMask__goldContrast,
                                d[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: c }, e),
                            s().createElement(
                                'div',
                                { className: _ },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: E }),
                            ),
                        );
                    };
                var m = a(4490);
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
                        const a = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case m.$u.Small:
                                    return 'l';
                                case m.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${a}`;
                    },
                    b = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: u,
                            hasProgression: r,
                            isGolden: l,
                            labelAnimation: d,
                            newLabelAnimation: b,
                            isChapterChosen: p = !1,
                            chapterID: h = 0,
                            seasonNum: v = -1,
                            isProgressionCompleted: f = !1,
                            hasBeenActive: A = !1,
                            isChapterSelection: C = !1,
                            isProgression: F = !1,
                        }) => {
                            let D = '',
                                B = '';
                            a === m.$u.Small
                                ? ((D = 'Small'), (B = '__small'))
                                : a === m.$u.Micro && ((D = 'Micro'), (B = '__micro'));
                            const w = u === m.Bq.SwitchedChapterRightNow,
                                y = u === m.Bq.CompletedRightNow,
                                S = ((e, t, a, u, n) => (e || n ? t || !a : t || !u))(C, f, A, p, F),
                                P = !F && !C;
                            return s().createElement(
                                s().Fragment,
                                null,
                                S
                                    ? s().createElement('div', {
                                          className: n()(E.icon, B && E[`icon${B}`], y && E[`icon__animated${D}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = g(l, a);
                                                  if (P) {
                                                      if (f) {
                                                          const a = { path: e.icon, name: i.Season, id: v };
                                                          return o(a, { name: 'icon', postfix: t });
                                                      }
                                                      if (!p) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, h, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  E.label,
                                                  E[`label${B}`],
                                                  w && E.label__new,
                                                  w && E[`label__new${D}`],
                                                  !y && f && E.label__disabled,
                                                  E[`label__${d}${D}`],
                                                  r && E[`label__hasProgress${D}`],
                                                  r && E[`label__hasProgress${D}${F ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(_, {
                                              level: t,
                                              size: a,
                                              isGold: l,
                                              isFirstLevel: w,
                                              curState: d,
                                              showProgressionCompleted: y,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                E.label,
                                                E[`label${B}`],
                                                w && E.label__new,
                                                w && E[`label__new${D}`],
                                                E[`label__${b}${D}`],
                                                r && E[`label__hasProgress${D}`],
                                            ),
                                        },
                                        s().createElement(_, {
                                            level: e,
                                            size: a,
                                            isGold: l,
                                            isFirstLevel: w,
                                            curState: b,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var p = a(3097);
                const h = {
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
                    v = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: u,
                            size: r,
                        }) => {
                            const o = n()(h.base, h[`base__${r}`], a && h.base__completed, !a && u && h.base__hidden);
                            return s().createElement(
                                'div',
                                { className: o },
                                s().createElement(p.ko, {
                                    key: e.to,
                                    size: p.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function f() {
                    return (
                        (f = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var u in a) ({}).hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                  }
                                  return e;
                              }),
                        f.apply(null, arguments)
                    );
                }
                let A = (function (e) {
                        return ((e.Closed = 'closed'), (e.Open = 'open'), e);
                    })({}),
                    C = (function (e) {
                        return ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'), e);
                    })({});
                const F = (e, t, a, u, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: u },
                            s = e ? A.Open : A.Closed,
                            l = ((e, t) =>
                                e
                                    ? C.Gold
                                    : t === m.Bq.Completed || t === m.Bq.CompletedRightNow
                                      ? C.Completed
                                      : C.Initial)(t, a),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${o(r, { name: 'emblem', postfix: `${s}_${l}${c}` })})` };
                    },
                    D = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${o(a, { name: 'extra', postfix: t })})` };
                    },
                    B = (0, r.memo)((e) => {
                        const t = e.progression,
                            a = e.size,
                            u = e.battlePassState,
                            r = e.hasBattlePass,
                            o = e.isChapterChosen,
                            i = e.hasBeenActive,
                            c = void 0 !== i && i,
                            d = e.isChapterSelection,
                            _ = void 0 !== d && d,
                            E = e.isOpen,
                            g = void 0 !== E && E,
                            p = e.isProgression,
                            h = void 0 !== p && p,
                            A = e.showProgressBar,
                            C = void 0 === A || A,
                            B = e.isExtra,
                            w = void 0 !== B && B,
                            y = e.chapterID,
                            S = e.seasonNum,
                            P = e.clickable,
                            k = void 0 === P || P,
                            R = ((e) => {
                                switch (e) {
                                    case m.$u.Small:
                                        return 'small';
                                    case m.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(a),
                            N = u === m.Bq.CompletedRightNow,
                            T = r || u === m.Bq.Bought,
                            x = (u === m.Bq.Completed || N) && T,
                            L = (u === m.Bq.Completed || N) && !T,
                            I = x || L,
                            M = void 0 !== t.from,
                            O = C && ((M && o) || c);
                        return s().createElement(
                            'div',
                            { className: l.base },
                            w &&
                                s().createElement('div', {
                                    className: n()(l.extra, R && l[`extra__${R}`]),
                                    style: D(S, R),
                                }),
                            s().createElement(
                                'div',
                                {
                                    className: n()(l.image, R && l[`image__${R}`], k && l.image__clickable),
                                    style: F(g, T, u, y, R),
                                },
                                u !== m.Bq.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            b,
                                            f(
                                                {
                                                    hasProgression: M,
                                                    isGolden: T,
                                                    isProgressionCompleted: I,
                                                    isChapterChosen: o,
                                                    hasBeenActive: c,
                                                    isChapterSelection: _,
                                                    isProgression: h,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        O &&
                                            s().createElement(v, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: N,
                                                isProgressionCompleted: I,
                                                size: a,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            4490: (e, t, a) => {
                a.d(t, { $u: () => u, Bq: () => n });
                let u = (function (e) {
                        return ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'), e);
                    })({}),
                    n = (function (e) {
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
            7927: (e, t, a) => {
                a.d(t, { k: () => _ });
                var u = a(7363),
                    n = a.n(u),
                    r = a(9849),
                    s = a.n(r),
                    o = a(4029);
                const i = 'LoupeButton_base_bb1aa',
                    l = 'LoupeButton_icon_f984f',
                    c = 'LoupeButton_iconHover_dc9e3',
                    d = 'LoupeButton_hoverArea_b1c43',
                    _ = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, u.useCallback)(() => (0, o.G)('highlight'), []),
                            r = (0, u.useCallback)(() => {
                                ((0, o.G)('play'), e());
                            }, [e]),
                            _ = s()(d, t);
                        return n().createElement(
                            'div',
                            { className: i, onClick: r, onMouseEnter: a },
                            n().createElement('div', { className: l }),
                            n().createElement('div', { className: c }),
                            t && n().createElement('div', { className: _ }),
                        );
                    };
            },
            8803: (e, t, a) => {
                a.d(t, { C: () => v });
                var u = a(9849),
                    n = a.n(u),
                    r = a(2278),
                    s = a(8739),
                    o = a(7363),
                    i = a.n(o),
                    l = a(7959);
                const c = 'TankmanSkills_base_e6387',
                    d = 'TankmanSkills_skill_fb3a8',
                    _ = 'TankmanSkills_zeroSkill_a5243',
                    m = 'TankmanSkills_glow_f8c3e',
                    E = 'TankmanSkills_zeroSkillIcon_c9c99',
                    g = 'TankmanSkills_skillIcon_a90e0',
                    b = 'TankmanSkills_skillIcon__specificPerk_b46ae',
                    p = 'TankmanSkills_divider_f3eec',
                    h = 'TankmanSkills_light_ab3d8',
                    v = ({ skills: e, className: t = '' }) => {
                        const a = s.kd(e, (e) => e.isZero);
                        return i().createElement(
                            'div',
                            { className: n()(c, t) },
                            s.UI(e, (e, t) =>
                                i().createElement(
                                    'div',
                                    { key: `${e.name}_${t}`, className: d },
                                    i().createElement(
                                        r.u,
                                        {
                                            contentId:
                                                R.views.lobby.battle_pass.tooltips.CrewMemberSkillTooltip('resId'),
                                            args: { name: e.name, isZero: e.isZero, hasZeroPerk: void 0 !== a },
                                        },
                                        i().createElement(
                                            'div',
                                            null,
                                            e.isZero &&
                                                e.name === l.jw &&
                                                i().createElement(
                                                    'div',
                                                    { className: _ },
                                                    i().createElement('div', { className: m }),
                                                    i().createElement('div', { className: E }),
                                                ),
                                            i().createElement('div', {
                                                className: n()(g, e.name !== l.jw && b),
                                                style: {
                                                    backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${e.name}')`,
                                                },
                                            }),
                                        ),
                                    ),
                                    a === t && i().createElement('div', { className: p }),
                                ),
                            ),
                            i().createElement('div', { className: h }),
                        );
                    };
            },
            4053: (e, t, a) => {
                a.d(t, { t: () => r });
                var u = a(7363);
                const n = (0, u.createContext)(void 0);
                function r() {
                    const e = (0, u.useContext)(n);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            9994: (e, t, a) => {
                a.d(t, { N: () => u });
                var u = {};
                (a.r(u), a.d(u, { Provider: () => g, useApi: () => m, useHandleKeydown: () => E }));
                var n = a(7475),
                    r = a(9659),
                    s = a(7363),
                    o = a.n(s),
                    i = a(4020);
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
                        const t = this.items.indexOf(e);
                        return -1 !== t && (this.items.splice(t, 1), !0);
                    }
                    isEmpty() {
                        return 0 === this.items.length;
                    }
                    toArray() {
                        return this.items.slice();
                    }
                }
                var c = a(9723);
                const d = () => {
                        const e = new Map();
                        function t(t) {
                            const a = e.get(t);
                            if (a) return a;
                            const u = new l();
                            return (e.set(t, u), u);
                        }
                        function a(t, a) {
                            const u = e.get(t);
                            return !!u && u.remove(a);
                        }
                        return {
                            handlers: e,
                            obtain: t,
                            register: function (e, u) {
                                if (e === i.n.NONE) return c.jv;
                                const n = t(e);
                                return (n.includes(u) || n.push(u), () => a(e, u));
                            },
                            unregister: a,
                            takeCurrent: function (t) {
                                const a = e.get(t);
                                if (!a) return;
                                const u = a.peek();
                                return u || void 0;
                            },
                        };
                    },
                    _ = (0, s.createContext)(void 0);
                function m() {
                    const e = (0, s.useContext)(_);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function E(e, t, a) {
                    const u = (0, r.z)((e) => {
                            n.O.view.isEventHandled() || (t(e), n.O.view.setEventHandled(), a && e.stopPropagation());
                        }),
                        o = m(),
                        i = (0, s.useMemo)(() => o.keydown.register(e, u), [o, e, u]);
                    (0, s.useEffect)(() => i, [i]);
                }
                const g = (e) => {
                    const t = (0, s.useMemo)(d, []);
                    (0, s.useEffect)(() => {
                        function e(e) {
                            const a = t.takeCurrent(e.keyCode);
                            a && a(e);
                        }
                        return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
                    });
                    const a = (0, s.useMemo)(
                        () => ({ keydown: { register: t.register, unregister: t.unregister } }),
                        [t],
                    );
                    return o().createElement(_.Provider, { value: a }, e.children);
                };
            },
            8862: (e, t, a) => {
                a.d(t, { tv: () => u.t });
                var u = a(4053),
                    n = a(7363);
                (0, n.createContext)(void 0);
            },
            1623: (e, t, a) => {
                a.d(t, { U4: () => E, b0: () => m });
                var u = a(9849),
                    n = a.n(u),
                    r = a(5208),
                    s = a(1308),
                    o = a(6758),
                    i = a(7363),
                    l = a.n(i),
                    c = a(9932),
                    d = a(2204);
                let _ = (function (e) {
                        return ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'), e);
                    })({}),
                    m = (function (e) {
                        return (
                            (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'),
                            e
                        );
                    })({});
                const E = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: a,
                    vehicleType: u,
                    vehicleLvl: i,
                    tags: E = '',
                    size: g = _.extraSmall,
                    type: b = m.colored,
                    className: p,
                    classNames: h,
                    isShortName: v = !1,
                }) => {
                    const f = `${(0, o.BN)(u)}${e ? '_elite' : ''}`,
                        A = R.images.gui.maps.icons.vehicleTypes.big.$dyn(f);
                    return l().createElement(
                        'div',
                        {
                            className: n()(
                                d.Z.base,
                                d.Z[`base__size${(0, o.e)(g)}`],
                                d.Z[`base__type${(0, o.e)(b)}`],
                                p,
                            ),
                        },
                        l().createElement(
                            'div',
                            { className: n()(d.Z.level, null == h ? void 0 : h.level) },
                            (0, s.HG)(i),
                        ),
                        l().createElement('div', {
                            className: n()(
                                d.Z.type,
                                e && d.Z[`type__elite${(0, o.e)(g)}`],
                                d.Z[`type__${g}`],
                                null == h ? void 0 : h.typeIcon,
                            ),
                            style: u ? { backgroundImage: `url(${A})` } : void 0,
                        }),
                        (0, c.f)(E, r.f3) && l().createElement('div', { className: d.Z.premiumIGR }),
                        l().createElement('div', { className: n()(d.Z.name, null == h ? void 0 : h.name) }, v ? a : t),
                    );
                };
            },
            9932: (e, t, a) => {
                a.d(t, { f: () => u });
                const u = (e, t) => e.split(',').includes(t);
            },
            935: (e, t, a) => {
                a.d(t, { C: () => u });
                let u = (function (e) {
                    return (
                        (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'),
                        e
                    );
                })({});
            },
            768: (e, t, a) => {},
            5208: (e, t, a) => {
                a.d(t, { f3: () => u });
                const u = 'premiumIGR';
            },
            6290: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'CButton_base_bb13f',
                    base__main: 'CButton_base__main_dd05d',
                    base__primary: 'CButton_base__primary_c75a2',
                    base__primaryGreen: 'CButton_base__primaryGreen_ae65b',
                    base__primaryRed: 'CButton_base__primaryRed_b1341',
                    base__secondary: 'CButton_base__secondary_f2c20',
                    base__ghost: 'CButton_base__ghost_f452b',
                    base__extraSmall: 'CButton_base__extraSmall_e1273',
                    base__small: 'CButton_base__small_c20a3',
                    base__medium: 'CButton_base__medium_ef59a',
                    base__large: 'CButton_base__large_bafd5',
                    base__disabled: 'CButton_base__disabled_eef7a',
                    back: 'CButton_back_e957b',
                    texture: 'CButton_texture_ccd7e',
                    state: 'CButton_state_f2bb4',
                    base__focus: 'CButton_base__focus_b0875',
                    stateHighlightHover: 'CButton_stateHighlightHover_bd0cb',
                    stateHighlightActive: 'CButton_stateHighlightActive_e9a8a',
                    stateDisabled: 'CButton_stateDisabled_ed209',
                    base__highlightActive: 'CButton_base__highlightActive_db27d',
                    content: 'CButton_content_a99fc',
                };
            },
            4880: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = { base: 'FormatText_base_f27a4' };
            },
            7947: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBar_base_c37bf',
                    base__small: 'ProgressBar_base__small_af6d6',
                    background: 'ProgressBar_background_a4e18',
                    background__small: 'ProgressBar_background__small_e2b95',
                    lineWrapper: 'ProgressBar_lineWrapper_e670c',
                };
            },
            2234: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = { base: 'ProgressBarBlink_base_d7125', base__small: 'ProgressBarBlink_base__small_b92f8' };
            },
            7760: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
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
            5232: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBarDeltaGrow_base_f4d46',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b1398',
                    glow: 'ProgressBarDeltaGrow_glow_c912d',
                };
            },
            9822: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = { base: 'ProgressBarDeltaSimple_base_cfcd3', delta: 'ProgressBarDeltaSimple_delta_dc2b6' };
            },
            5261: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'Reward_base_b1fec',
                    base__s48x48: 'Reward_base__s48x48_ea3ee',
                    base__small: 'Reward_base__small_d4940',
                    base__s80x80: 'Reward_base__s80x80_de3ac',
                    base__big: 'Reward_base__big_a4f0e',
                    base__s128x100: 'Reward_base__s128x100_c29f0',
                    base__s180x135: 'Reward_base__s180x135_cb4c8',
                    base__s232x174: 'Reward_base__s232x174_aea24',
                    base__s296x222: 'Reward_base__s296x222_cbf7c',
                    base__s400x300: 'Reward_base__s400x300_bb29d',
                    base__s600x450: 'Reward_base__s600x450_c4f07',
                    tooltipWrapper: 'Reward_tooltipWrapper_af665',
                    icon: 'Reward_icon_b619b',
                    overlay: 'Reward_overlay_dac5c',
                    base__normalize: 'Reward_base__normalize_b8703',
                    highlight: 'Reward_highlight_df36b',
                    image: 'Reward_image_e2997',
                    info: 'Reward_info_b27d2',
                    info__multi: 'Reward_info__multi_e08a5',
                    info__credits: 'Reward_info__credits_ccc0d',
                    info__gold: 'Reward_info__gold_af0a5',
                    info__bptaler: 'Reward_info__bptaler_d4229',
                    info__crystal: 'Reward_info__crystal_b0d9d',
                    info__premiumTank: 'Reward_info__premiumTank_f53be',
                    title: 'Reward_title_ab4e2',
                    timer: 'Reward_timer_c097c',
                };
            },
            8823: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'HorizontalBar_base_fa517',
                    base__active: 'HorizontalBar_base__active_ad89b',
                    leftButton: 'HorizontalBar_leftButton_eb8c3',
                    rightButton: 'HorizontalBar_rightButton_f5116',
                    track: 'HorizontalBar_track_fd3af',
                    thumb: 'HorizontalBar_thumb_bb7e0',
                    rail: 'HorizontalBar_rail_a3d9e',
                };
            },
            4109: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'HorizontalScroll_base_a33a9',
                    wrapper: 'HorizontalScroll_wrapper_b622e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a2315',
                };
            },
            1905: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'VerticalBar_base_b5610',
                    base__active: 'VerticalBar_base__active_be260',
                    topButton: 'VerticalBar_topButton_c2227',
                    bottomButton: 'VerticalBar_bottomButton_ef09b',
                    track: 'VerticalBar_track_e3345',
                    thumb: 'VerticalBar_thumb_a34e7',
                    rail: 'VerticalBar_rail_ff232',
                };
            },
            2459: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    content: 'VerticalScroll_content_fe263',
                    defaultScroll: 'VerticalScroll_defaultScroll_e27f5',
                    bar: 'VerticalScroll_bar_b8700',
                    area: 'VerticalScroll_area_b5a82',
                };
            },
            3242: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'TextButton_base_a231c',
                    base__right: 'TextButton_base__right_bfac3',
                    icon: 'TextButton_icon_cdfc0',
                    icon__back: 'TextButton_icon__back_fc1bb',
                    icon__forward: 'TextButton_icon__forward_efa2d',
                    icon__close: 'TextButton_icon__close_e2f0f',
                    icon__info: 'TextButton_icon__info_e32c0',
                    glow: 'TextButton_glow_d6e04',
                    caption: 'TextButton_caption_f4e8d',
                    caption__back: 'TextButton_caption__back_d358d',
                    caption__forward: 'TextButton_caption__forward_ff93d',
                    caption__close: 'TextButton_caption__close_fc554',
                    caption__info: 'TextButton_caption__info_c263a',
                    goto: 'TextButton_goto_d3960',
                    base__left: 'TextButton_base__left_ec79d',
                    shine: 'TextButton_shine_f8873',
                };
            },
            2204: (e, t, a) => {
                a.d(t, { Z: () => u });
                const u = {
                    base: 'TankName_base_e9676',
                    base__sizeMedium: 'TankName_base__sizeMedium_be079',
                    base__sizBig: 'TankName_base__sizBig_b71dc',
                    base__typeWhite: 'TankName_base__typeWhite_af1ba',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_c7979',
                    base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_eb635',
                    base__typeColored: 'TankName_base__typeColored_efc8d',
                    level: 'TankName_level_fb3d0',
                    type: 'TankName_type_f3426',
                    type__extraSmall: 'TankName_type__extraSmall_a1019',
                    type__medium: 'TankName_type__medium_ad9e8',
                    type__big: 'TankName_type__big_cbcfe',
                    type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_af236',
                    type__eliteMedium: 'TankName_type__eliteMedium_b273d',
                    type__eliteBig: 'TankName_type__eliteBig_a7f6c',
                    name: 'TankName_name_e6ffb',
                    premiumIGR: 'TankName_premiumIGR_bd935',
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, u] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & u || n >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), u < n && (n = u));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > u; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, u];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 1488),
        (() => {
            var e = { 1488: 0, 7737: 0, 1730: 0, 8363: 0, 6660: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var u,
                        n,
                        [r, s, o] = a,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (u in s) __webpack_require__.o(s, u) && (__webpack_require__.m[u] = s[u]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); i < r.length; i++)
                        ((n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2016));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
