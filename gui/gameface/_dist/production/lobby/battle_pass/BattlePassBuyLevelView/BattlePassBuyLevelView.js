(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    s = t(7363),
                    o = t.n(s),
                    i = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                    isFocused: F = !1,
                    type: g = l.L.primary,
                    soundHover: D = 'highlight',
                    soundClick: B = 'play',
                }) => {
                    const C = (0, s.useRef)(null),
                        p = (0, s.useState)(F),
                        h = p[0],
                        f = p[1],
                        v = (0, s.useState)(!1),
                        b = v[0],
                        w = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                h && null !== C.current && !C.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, s.useEffect)(() => {
                            f(F);
                        }, [F]),
                        o().createElement(
                            'div',
                            {
                                ref: C,
                                className: r()(
                                    i.Z.base,
                                    i.Z[`base__${g}`],
                                    t && i.Z.base__disabled,
                                    u && i.Z[`base__${u}`],
                                    h && i.Z.base__focus,
                                    b && i.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== D && (0, a.G)(D), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    t || (m && m(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== B && (0, a.G)(B),
                                        d && d(e),
                                        F && (t || (C.current && (C.current.focus(), f(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (_ && _(e), w(!1));
                                },
                                onClick: function (e) {
                                    t || (A && A(e));
                                },
                            },
                            g !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(i.Z.state, i.Z.state__default) },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, u, t) => {
                let n, r;
                (t.d(u, { L: () => n, q: () => r }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(r || (r = {})));
            },
            918: (e, u, t) => {
                t.d(u, { F: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(2372),
                    s = t(7363),
                    o = t.n(s);
                const i = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
                var l = t(329);
                const c = (0, s.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        value: s,
                        discountValue: c,
                        showPlus: E,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: _,
                        classNames: A,
                    }) =>
                        o().createElement(
                            'span',
                            { className: r()(i.base, i[`base__${t}`], _) },
                            o().createElement(
                                'span',
                                {
                                    className: r()(
                                        i.value,
                                        i[`value__${n}`],
                                        !d && i.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                E && s > 0 && '+',
                                o().createElement(a.A, { value: s, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: r()(i.icon, i[`icon__${n}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: r()(
                                            i.stock,
                                            c && i.stock__indent,
                                            u && i.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: i.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, u, t) => {
                let n, r, a;
                (t.d(u, { V2: () => r, we: () => a }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(a || (a = {})));
            },
            2372: (e, u, t) => {
                t.d(u, { A: () => r });
                var n = t(9916);
                const r = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(u),
                        r = n.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== r ? r : null;
                };
            },
            280: (e, u, t) => {
                t.d(u, { z: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    s = t(7363),
                    o = t.n(s),
                    i = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, a.WU)(u, e) : u;
                    return o().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            o().createElement(
                                'div',
                                { className: r()(i.Z.base, t), key: `${u}-${l}` },
                                (0, a.Uw)(u, n, e).map((e, u) =>
                                    o().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                t.d(u, { z: () => n.z });
                var n = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                t(3649);
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => i });
                var n = t(3138),
                    r = t(7363),
                    a = t(1043),
                    s = t(5262);
                const o = (function (e = n.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, s.T)(u, t, a.j));
                    })(),
                    i = (0, r.createContext)(o);
            },
            1039: (e, u, t) => {
                (t(3138), t(7363), t(3495));
            },
            6010: (e, u, t) => {
                var n = t(7363),
                    r = t(7382),
                    a = t(3495);
                const s = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    const o = (0, n.useContext)(a.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        E = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        _ = o.largeWidth,
                        A = o.mediumWidth,
                        F = o.smallWidth,
                        g = o.extraSmallWidth,
                        D = o.extraLargeHeight,
                        B = o.largeHeight,
                        C = o.mediumHeight,
                        p = o.smallHeight,
                        h = o.extraSmallHeight,
                        f = { extraLarge: D, large: B, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && m) return (0, r.H)(u, t, f);
                        if (t.largeWidth && _) return (0, r.H)(u, t, f);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, f);
                        if (t.smallWidth && F) return (0, r.H)(u, t, f);
                        if (t.extraSmallWidth && g) return (0, r.H)(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                });
            },
            7382: (e, u, t) => {
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
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
                t.d(u, { YN: () => n.Y });
                (t(6010), t(1039));
                var n = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var n;
                function r(e, u, t) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
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
                    })(n || (n = {})));
            },
            1975: (e, u, t) => {
                t.d(u, { $u: () => E.$, ko: () => A, uu: () => _ });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(2468),
                    i = t(7442),
                    l = t(2407),
                    c = t(156),
                    E = t(7736),
                    d = t(1635);
                t(6823);
                const m = c.Gh,
                    _ = {
                        freezed: !1,
                        withStack: !1,
                        type: E.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = m,
                            size: t = E.$.Default,
                            animationSettings: n = _,
                            disabled: a = !1,
                            withoutBackground: A = !1,
                            value: F,
                            deltaFrom: g,
                            additionalKey: D,
                            lineRef: B,
                            onChangeAnimationState: C,
                            onEndAnimation: p,
                            onComplete: h,
                            className: f,
                        }) => {
                            const v = (0, d.S)(F, e, g);
                            return s().createElement(
                                'div',
                                { className: r()(o.Z.base, f, o.Z[`base__${t}`]), style: (0, c.VQ)(u) },
                                !A && s().createElement(i.J, { size: t }),
                                s().createElement(l.r, {
                                    size: t,
                                    lineRef: B,
                                    disabled: a,
                                    value: v.value,
                                    deltaFrom: v.deltaFrom,
                                    additionalKey: D,
                                    animationSettings: n,
                                    onEndAnimation: p,
                                    onChangeAnimationState: C,
                                    onComplete: h,
                                }),
                            );
                        },
                    );
            },
            7442: (e, u, t) => {
                t.d(u, { J: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(2468),
                    i = t(7736);
                const l = ({ size: e = i.$.Default }) => {
                    const u = r()(o.Z.background, o.Z[`background__${e}`]);
                    return s().createElement('div', { className: u });
                };
            },
            8150: (e, u, t) => {
                t.d(u, { $: () => i });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(8804);
                const i = ({ size: e }) => {
                    const u = r()(o.Z.base, o.Z[`base__${e}`]);
                    return s().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                t.d(u, { r: () => l });
                var n = t(7363),
                    r = t.n(n),
                    a = t(6736),
                    s = t(5680),
                    o = t(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, n.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: n,
                        deltaFrom: l,
                        additionalKey: c,
                        animationSettings: E,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                        onComplete: _,
                    }) => {
                        if (l === u)
                            return r().createElement(s.M, {
                                key: `${l}-${u}-${c}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: n,
                                onComplete: _,
                            });
                        const A = {
                            from: l,
                            to: u,
                            size: e,
                            additionalKey: c,
                            lineRef: t,
                            disabled: n,
                            animationSettings: E,
                            onComplete: _,
                            onEndAnimation: d,
                            onChangeAnimationState: m,
                        };
                        return E.withStack
                            ? r().createElement(o.F, A)
                            : r().createElement(a.H, i({ key: `${l}-${u}-${c}` }, A));
                    },
                );
            },
            1848: (e, u, t) => {
                t.d(u, { t: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(8150),
                    i = t(6664);
                const l = (0, a.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: l }) => {
                        const c = r()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                t && i.Z.base__disabled,
                                a && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            E = !t && !a;
                        return s().createElement(
                            'div',
                            { className: c, style: n, ref: u },
                            s().createElement('div', { className: i.Z.pattern }),
                            s().createElement('div', { className: i.Z.gradient }),
                            E && s().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                t.d(u, { O: () => _ });
                var n = t(6483),
                    r = t.n(n),
                    a = t(122),
                    s = t(7363),
                    o = t.n(s),
                    i = t(8150),
                    l = t(6823),
                    c = t(6147);
                const E = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    _ = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: _,
                            to: A,
                            onEndAnimation: F,
                            onChangeAnimationState: g,
                            className: D,
                        }) => {
                            const B = A < n,
                                C = (0, s.useState)(l.S.Idle),
                                p = C[0],
                                h = C[1],
                                f = p === l.S.End,
                                v = p === l.S.Idle,
                                b = p === l.S.Grow,
                                w = p === l.S.Shrink,
                                y = (0, s.useCallback)(
                                    (e) => {
                                        (h(e), g && g(e));
                                    },
                                    [g],
                                ),
                                S = (0, s.useCallback)(
                                    (e, u) =>
                                        (0, a.F)(() => {
                                            y(e);
                                        }, u),
                                    [y],
                                );
                            (0, s.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? S(l.S.Grow, u)
                                        : b
                                          ? S(l.S.Shrink, e)
                                          : w
                                            ? S(l.S.End, e)
                                            : void (f && F && F());
                            }, [S, t, f, b, v, w, F, u, e]);
                            const P = (0, s.useMemo)(() => Object.assign({ width: '100%' }, m(e), E(B)), [B, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(e), E(B)), [B, e]),
                                T = (0, s.useMemo)(() => Object.assign({ width: '0%' }, d(B, n), m(e)), [n, B, e]),
                                x = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - n)}%` }, d(B, n), m(e)),
                                    [n, B, A, e],
                                );
                            if (f) return null;
                            const N = r()(c.Z.base, D, B && 0 === A && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: v ? T : x, className: N },
                                o().createElement(
                                    'div',
                                    { style: w ? R : P, className: c.Z.glow },
                                    o().createElement(i.$, { size: _ }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                t.d(u, { x: () => l });
                var n = t(122),
                    r = t(7363),
                    a = t.n(r),
                    s = t(8150),
                    o = t(6823),
                    i = t(9919);
                const l = (0, r.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: c,
                        to: E,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                    }) => {
                        const _ = E < l,
                            A = (0, r.useState)(o.V.Idle),
                            F = A[0],
                            g = A[1],
                            D = F === o.V.In,
                            B = F === o.V.End,
                            C = F === o.V.Idle,
                            p = (0, r.useCallback)(
                                (e) => {
                                    (g(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, r.useEffect)(() => {
                            if (C && !t) {
                                const e = u;
                                return (0, n.F)(() => {
                                    p(o.V.In);
                                }, e);
                            }
                        }, [p, t, C, u]),
                            (0, r.useEffect)(() => {
                                if (D) {
                                    const t = e + u;
                                    return (0, n.F)(() => {
                                        (d && d(), p(o.V.End));
                                    }, t);
                                }
                            }, [p, D, d, u, e]));
                        const h = (0, r.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, u, e],
                            ),
                            f = (0, r.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, u, e],
                            ),
                            v = (0, r.useMemo)(
                                () => ({ width: `${Math.abs(l - E)}%`, left: `${_ ? E : l}%` }),
                                [l, _, E],
                            );
                        return B
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: i.Z.base, style: v },
                                  a().createElement(
                                      'div',
                                      { style: C ? h : f, className: i.Z.delta },
                                      a().createElement(s.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                t.d(u, { F: () => i });
                var n = t(7363),
                    r = t.n(n),
                    a = t(1848),
                    s = t(2434),
                    o = t(6823);
                const i = (0, n.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: E,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                    }) => {
                        const _ = e < t,
                            A = (0, n.useState)(!1),
                            F = A[0],
                            g = A[1],
                            D = (0, n.useCallback)(
                                (e) => {
                                    (e === o.S.Shrink && g(!0), m && m(e));
                                },
                                [m],
                            ),
                            B = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            C = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${E.line.duration}ms` }),
                                [E.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(a.t, {
                                size: u,
                                lineRef: i,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: _ && 0 === e,
                                baseStyles: F ? C : B,
                            }),
                            t >= 0 &&
                                r().createElement(s.O, {
                                    transitionDuration: E.delta.duration,
                                    transitionDelay: E.delta.delay,
                                    onChangeAnimationState: D,
                                    freezed: E.freezed,
                                    onEndAnimation: d,
                                    from: t,
                                    size: u,
                                    to: e,
                                    className: E.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, u, t) => {
                t.d(u, { D: () => o });
                var n = t(7363),
                    r = t.n(n),
                    a = t(1848),
                    s = t(5913);
                const o = (0, n.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: o,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: E,
                        onEndAnimation: d,
                    }) => {
                        const m = (0, n.useMemo)(
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
                            r().createElement(a.t, { size: u, lineRef: o, disabled: i, isComplete: l, baseStyles: m }),
                            t >= 0 &&
                                r().createElement(s.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: t,
                                    size: u,
                                    to: e,
                                    onChangeAnimationState: E,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, u, t) => {
                t.d(u, { H: () => c });
                var n = t(7363),
                    r = t.n(n),
                    a = t(7736),
                    s = t(538),
                    o = t(828);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, n.memo)((e) => {
                    let u = e.onComplete,
                        t = e.onEndAnimation,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, i);
                    const E = (0, n.useState)(!1),
                        d = E[0],
                        m = E[1],
                        _ = (0, n.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== d && m(e), e && u && u(), t && t());
                        }, [d, u, t, c.to]);
                    switch (c.animationSettings.type) {
                        case a.r.Simple:
                            return r().createElement(o.D, l({}, c, { onEndAnimation: _, isComplete: d }));
                        case a.r.Growing:
                            return r().createElement(s.F, l({}, c, { onEndAnimation: _, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
                let n, r;
                (t.d(u, { S: () => n, V: () => r }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(r || (r = {})));
            },
            2386: (e, u, t) => {
                t.d(u, { F: () => i });
                var n = t(7363),
                    r = t.n(n),
                    a = t(6736);
                const s = ['onEndAnimation'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    const i = (0, n.useRef)({}),
                        l = (0, n.useCallback)(() => {
                            ((i.current.from = void 0), u && u());
                        }, [u]),
                        c = 'number' == typeof i.current.from ? i.current.from : t.from;
                    return (
                        (i.current.from = c),
                        r().createElement(
                            a.H,
                            o({}, t, {
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
                var n = t(7363),
                    r = t.n(n),
                    a = t(1848);
                const s = ({ size: e, value: u, lineRef: t, disabled: s, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, n.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        r().createElement(a.t, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                t.d(u, { Gh: () => r, VQ: () => n });
                const n = (e) => {
                        var u, t, n, r, a, s, o, i, l, c, E, d, m, _, A, F, g, D, B, C;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (n = null == (r = e.bg) ? void 0 : r.heightSmall) ? n : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (a = e.line.filter) ? a : 'none',
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
                                null != (E = null == (d = e.glowSettings) ? void 0 : d.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (m = null == (_ = e.glowSettings) ? void 0 : _.height) ? m : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (F = e.glowSettings) ? void 0 : F.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (g = null == (D = e.glowSettings) ? void 0 : D.smallHeight) ? g : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (B = null == (C = e.glowSettings) ? void 0 : C.mixBlendMode) ? B : 'lighten',
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
                let n, r;
                (t.d(u, { $: () => n, r: () => r }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(r || (r = {})));
            },
            1635: (e, u, t) => {
                t.d(u, { S: () => s });
                var n = t(7515),
                    r = t(7363);
                const a = (e, u, t) => {
                    if ('number' == typeof t) {
                        return ((0, n.u)(0, u, t) / u) * 100;
                    }
                    return e;
                };
                function s(e, u, t) {
                    return (0, r.useMemo)(() => {
                        const r = ((0, n.u)(0, u, e) / u) * 100;
                        return { value: r, deltaFrom: a(r, u, t) };
                    }, [t, u, e]);
                }
            },
            5739: (e, u, t) => {
                t.d(u, { Q: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(3415),
                    i = t(2862),
                    l = t(729),
                    c = t(1609);
                const E = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: n = i.h2.Big,
                    special: a,
                    value: E,
                    valueType: d,
                    title: m,
                    style: _,
                    className: A,
                    classNames: F,
                    tooltipArgs: g,
                    periodicIconTooltipArgs: D,
                }) => {
                    const B = (0, l.c$)(n, a),
                        C = (0, l.i2)(a),
                        p = (0, l.m9)(E, d);
                    return s().createElement(
                        'div',
                        {
                            className: r()(c.Z.base, c.Z[`base__${n}`], i.oy.includes(e) && c.Z.base__normalize, A),
                            style: _,
                        },
                        s().createElement(
                            o.l,
                            { tooltipArgs: g, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.image, null == F ? void 0 : F.image) },
                                    B &&
                                        s().createElement('div', {
                                            className: r()(c.Z.highlight, null == F ? void 0 : F.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${B}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: r()(c.Z.icon, null == F ? void 0 : F.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    C &&
                                        s().createElement('div', {
                                            className: r()(c.Z.overlay, null == F ? void 0 : F.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${C}_overlay)`,
                                            },
                                        }),
                                ),
                                p &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                d === i.$h.MULTI && c.Z.info__multi,
                                                null == F ? void 0 : F.info,
                                            ),
                                        },
                                        p,
                                    ),
                                m && s().createElement('div', { className: c.Z.title }, m),
                            ),
                        ),
                        t &&
                            s().createElement(
                                o.l,
                                { tooltipArgs: D },
                                s().createElement('div', {
                                    className: r()(c.Z.timer, null == F ? void 0 : F.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                let n, r, a, s, o, i, l, c;
                (t.d(u, { $h: () => s, A2: () => i, E4: () => n, h2: () => a, kK: () => o, oy: () => E, sh: () => l }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})),
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
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
                const E = [n.Attachment];
            },
            729: (e, u, t) => {
                t.d(u, { c$: () => g, i2: () => D, m9: () => B, p3: () => E, pI: () => A, ry: () => _ });
                var n = t(2372),
                    r = t(7363),
                    a = t.n(r),
                    s = t(2862);
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
                    E = (e) =>
                        o.includes(e)
                            ? s.$h.MULTI
                            : i.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    d = ['engravings', 'backgrounds'],
                    m = ['engraving', 'background'],
                    _ = (e, u = s.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
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
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = d[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(m[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${a}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    A = (e, u, t) => {
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
                    B = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(n.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            6724: (e, u, t) => {
                t.d(u, { nS: () => n });
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
                function n() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
            },
            2773: (e, u, t) => {
                t.d(u, { $Q: () => C });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    s = t(1856),
                    o = t(3138),
                    i = t(3815),
                    l = t(560),
                    c = t(7727),
                    E = t(7363),
                    d = t.n(E),
                    m = t(6358),
                    _ = t(372);
                const A = 'disable',
                    F = { pending: !1, offset: 0 },
                    g = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    D = () => {},
                    B = (e, u) => Math.max(20, e.offsetWidth * u),
                    C = (0, E.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = g, onDrag: n = D }) => {
                        const C = (0, E.useRef)(null),
                            p = (0, E.useRef)(null),
                            h = (0, E.useRef)(null),
                            f = (0, E.useRef)(null),
                            v = (0, E.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, E.useState)(F),
                            y = w[0],
                            S = w[1],
                            P = (0, E.useCallback)(
                                (e) => {
                                    (S(e),
                                        v.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [n],
                            ),
                            R = () => {
                                const u = f.current,
                                    t = v.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = (0, a.u)(0, 1, s / (r - n)),
                                    l = (u.offsetWidth - B(u, o)) * i;
                                ((t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (p.current && h.current && f.current && v.current) {
                                            if (0 === e)
                                                return (p.current.classList.add(A), void h.current.classList.remove(A));
                                            if (
                                                ((u = f.current),
                                                (t = v.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (p.current.classList.remove(A), void h.current.classList.add(A));
                                            var u, t;
                                            (p.current.classList.remove(A), h.current.classList.remove(A));
                                        }
                                    })(l));
                            },
                            T = (0, i.z)(() => {
                                ((() => {
                                    const u = v.current,
                                        t = f.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    ((u.style.width = `${B(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        C.current &&
                                            (1 !== a
                                                ? C.current.classList.add(_.Z.base__active)
                                                : C.current.classList.remove(_.Z.base__active)));
                                })(),
                                    R());
                            });
                        ((0, E.useEffect)(() => (0, s.v)(T)),
                            (0, E.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const u = () => {
                                            R();
                                        };
                                        let t = D;
                                        const n = () => {
                                            (t(), (t = (0, s.v)(T)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', T),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', T),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, E.useEffect)(() => {
                                if (!y.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = f.current,
                                            i = v.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - y.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c }));
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        (u(), P(F));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, y.offset, y.pending, n, P]));
                        const x = (0, l.B)((u) => e.applyStepTo(u), b, [e]),
                            N = x[0],
                            k = x[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const L = (e) => {
                            e.target.classList.contains(A) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: C, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(_.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(m.Nm.Next));
                                },
                                onMouseUp: k,
                                ref: p,
                                onMouseEnter: L,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = v.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                P({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = v.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: f,
                                    onMouseEnter: L,
                                },
                                d().createElement('div', { ref: v, className: r()(_.Z.thumb, u.thumb) }),
                                d().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(_.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(m.Nm.Prev));
                                },
                                onMouseUp: k,
                                ref: h,
                                onMouseEnter: L,
                            }),
                        );
                    });
            },
            2840: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(2773),
                    i = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: E,
                    scrollClassName: d,
                    getStepByRailClick: m,
                    onDrag: _,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            s().createElement(i.Area, { className: d, api: F, classNames: E }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: m, api: u, onDrag: _, classNames: A }),
                    );
                };
            },
            7950: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        Area: () => d,
                        Bar: () => i.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => E.Nm,
                        defaultSettings: () => E.he,
                        useHorizontalScrollApi: () => E.T5,
                    }));
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    s = t(7363),
                    o = t.n(s),
                    i = t(2773),
                    l = t(2840),
                    c = t(4682),
                    E = t(6358);
                const d = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(c.Z.base, u) },
                        o().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                ((d.Bar = i.$Q), (d.Default = l.K));
            },
            6358: (e, u, t) => {
                t.d(u, { Nm: () => r.Nm, T5: () => s, he: () => r.he });
                var n = t(3138),
                    r = t(7308);
                const a = {
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
                            var t;
                            e.style.transform = `translateX(-${0 | (null != (t = u.value.scrollPosition) ? t : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                        forceTriggerMouseMove: n.O.view.forceTriggerMouseMove,
                    },
                    s = (0, r.EO)(a);
            },
            6225: (e, u, t) => {
                t.d(u, { $Q: () => p });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    s = t(1856),
                    o = t(3138),
                    i = t(3815),
                    l = t(560),
                    c = t(7727),
                    E = t(7363),
                    d = t.n(E),
                    m = t(7701),
                    _ = t(9168);
                const A = 'disable',
                    F = () => {},
                    g = { pending: !1, offset: 0 },
                    D = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    B = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    C = (e, u) => Math.max(20, e.offsetHeight * u),
                    p = (0, E.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = D, onDrag: n = F }) => {
                        const p = (0, E.useRef)(null),
                            h = (0, E.useRef)(null),
                            f = (0, E.useRef)(null),
                            v = (0, E.useRef)(null),
                            b = (0, E.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, E.useState)(g),
                            S = y[0],
                            P = y[1],
                            R = (0, E.useCallback)(
                                (e) => {
                                    (P(e),
                                        b.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current }));
                                },
                                [n],
                            ),
                            T = (0, i.z)(() => {
                                const u = b.current,
                                    t = v.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${C(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    p.current &&
                                        (1 !== a
                                            ? p.current.classList.add(_.Z.base__active)
                                            : p.current.classList.remove(_.Z.base__active)),
                                    a
                                );
                            }),
                            x = (0, i.z)(() => {
                                const u = v.current,
                                    t = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = (0, a.u)(0, 1, s / (r - n)),
                                    l = (u.offsetHeight - C(u, o)) * i;
                                ((t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (h.current && f.current && v.current && b.current) {
                                            if (0 === Math.round(e))
                                                return (h.current.classList.add(A), void f.current.classList.remove(A));
                                            if (
                                                ((u = v.current),
                                                (t = b.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (h.current.classList.remove(A), void f.current.classList.add(A));
                                            var u, t;
                                            (h.current.classList.remove(A), f.current.classList.remove(A));
                                        }
                                    })(l));
                            }),
                            N = (0, i.z)(() => {
                                B(e, () => {
                                    (T(), x());
                                });
                            });
                        ((0, E.useEffect)(() => (0, s.v)(N)),
                            (0, E.useEffect)(() => {
                                const u = () => {
                                    B(e, () => {
                                        x();
                                    });
                                };
                                let t = F;
                                const n = () => {
                                    (t(), (t = (0, s.v)(N)));
                                };
                                return (
                                    e.events.on('recalculateContent', N),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', N),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, E.useEffect)(() => {
                                if (!S.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        R(g);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        B(e, (t) => {
                                            const r = v.current,
                                                a = b.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = u.screenY - S.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, S.offset, S.pending, n, R]));
                        const k = (0, l.B)((u) => e.applyStepTo(u), w, [e]),
                            L = k[0],
                            O = k[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', O, !0),
                                () => document.removeEventListener('mouseup', O, !0)
                            ),
                            [O],
                        );
                        const M = (e) => {
                            e.target.classList.contains(A) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: p, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(_.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Next));
                                },
                                ref: h,
                                onMouseEnter: M,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = b.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                R({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    b.current &&
                                                        B(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: v,
                                    onMouseEnter: M,
                                },
                                d().createElement('div', { ref: b, className: r()(_.Z.thumb, u.thumb) }),
                                d().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(_.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Prev));
                                },
                                onMouseUp: O,
                                ref: f,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            1158: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(6225),
                    i = t(9605),
                    l = t(5636);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: E,
                    scrollClassNames: d,
                    getStepByRailClick: m,
                    onDrag: _,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            s().createElement(i.Area, { className: E, classNames: d, api: F }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: m, api: u, onDrag: _, classNames: A }),
                    );
                };
            },
            9605: (e, u, t) => {
                (t.r(u),
                    t.d(u, { Area: () => d, Bar: () => i.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    s = t(7363),
                    o = t.n(s),
                    i = t(6225),
                    l = t(1158),
                    c = t(7701),
                    E = t(5636);
                const d = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, s.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(E.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(E.Z.content, null == u ? void 0 : u.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
                d.Default = l.K;
            },
            7701: (e, u, t) => {
                t.d(u, { Nm: () => n.Nm, c4: () => a });
                var n = t(7308);
                const r = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    },
                    a = (0, n.EO)(r);
            },
            7308: (e, u, t) => {
                t.d(u, { EO: () => m, Nm: () => E, he: () => d });
                var n = t(7515),
                    r = t(1856),
                    a = t(4532),
                    s = t(9653),
                    o = t(3815),
                    i = t(4489),
                    l = t(7363),
                    c = t(7030);
                let E;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(E || (E = {}));
                const d = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    m = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: E,
                        getWrapperSize: m,
                        forceTriggerMouseMove: _,
                    }) => {
                        const A = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                s = r[1];
                            return s <= a ? 0 : (0, n.u)(a, s, t);
                        };
                        return (n = {}) => {
                            const F = n.settings,
                                g = void 0 === F ? d : F,
                                D = (0, l.useRef)(null),
                                B = (0, l.useRef)(null),
                                C = (0, l.useRef)(!1),
                                p = (0, s.q)(),
                                h = (0, i.f)(
                                    () => {
                                        _ && _();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = D.current;
                                        u && (t(u, e), p.trigger('change', e), _ && C.current && h());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                v = f[0],
                                b = f[1],
                                w = (0, l.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = v.scrollPosition.get(),
                                            a = (null != (n = v.scrollPosition.goal) ? n : 0) - r;
                                        return A(e, u * t + a + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = D.current;
                                        n &&
                                            b.start({
                                                scrollPosition: A(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: g.animationConfig,
                                                from: { scrollPosition: A(n, v.scrollPosition.get()) },
                                            });
                                    },
                                    [b, g.animationConfig, v.scrollPosition],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        const u = D.current,
                                            t = B.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return m(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, g.step),
                                            r = w(u, e, n);
                                        y(r);
                                    },
                                    [y, w, g.step],
                                ),
                                P = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && S(E(e)),
                                            D.current && p.trigger('mouseWheel', e, v.scrollPosition, u(D.current)));
                                    },
                                    [v.scrollPosition, S, p],
                                ),
                                R = (0, a.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = D.current;
                                            e &&
                                                (y(A(e, v.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [y, v.scrollPosition.goal],
                                ),
                                T = (0, o.z)(() => {
                                    const e = D.current;
                                    if (!e) return;
                                    const u = A(e, v.scrollPosition.goal);
                                    (u !== v.scrollPosition.goal && y(u, { immediate: !0 }),
                                        p.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', R),
                                    () => {
                                        window.removeEventListener('resize', R);
                                    }
                                ),
                                [R],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = D.current;
                                    if (!e || !_) return;
                                    const u = () => {
                                            C.current = !0;
                                        },
                                        t = () => {
                                            C.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [D]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (B.current ? m(B.current) : void 0),
                                    getContainerSize: () => (D.current ? e(D.current) : void 0),
                                    getBounds: () =>
                                        D.current
                                            ? u(D.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: g.step.clampedArrowStepTimeout,
                                    clampPosition: A,
                                    handleMouseWheel: P,
                                    applyScroll: y,
                                    applyStepTo: S,
                                    contentRef: D,
                                    wrapperRef: B,
                                    scrollPosition: b,
                                    animationScroll: v,
                                    recalculateContent: T,
                                    events: { on: p.on, off: p.off },
                                }),
                                [v.scrollPosition, y, S, p.off, p.on, T, P, b, g.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, u, t) => {
                t.d(u, { X: () => r });
                var n = t(7950);
                const r = { Vertical: t(9605), Horizontal: n };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => i });
                var n = t(7363),
                    r = t.n(n),
                    a = t(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        a.u,
                        o(
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
                var n = t(7363),
                    r = t.n(n),
                    a = t(7078),
                    s = t(6373),
                    o = t(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(s.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(o.u, i({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(7363),
                    a = t.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            d = e.args,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, d]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                m,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
                    a = t(7363);
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
                const i = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
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
                            E = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            _ = void 0 !== m && m,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            g = e.decoratorId,
                            D = void 0 === g ? 0 : g,
                            B = e.isEnabled,
                            C = void 0 === B || B,
                            p = e.targetId,
                            h = void 0 === p ? 0 : p,
                            f = e.onShow,
                            v = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => h || (0, n.F)().resId, [h]),
                            S = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(t, D, { isMouseEvent: !0, on: !0, arguments: o(r) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, D, r, y, f]),
                            P = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(t, D, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, D, y, v]),
                            R = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === C && P();
                            }, [C, P]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return C
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(S, _ ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (P(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && P(), null == d || d(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && P(), null == E || E(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var T;
                    };
            },
            7515: (e, u, t) => {
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                t.d(u, { v: () => n });
                const n = (e) => {
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
            },
            122: (e, u, t) => {
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
            8246: (e, u, t) => {
                t.d(u, { U: () => o });
                var n = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
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
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: a = 'model' } = {}) {
                    const o = new Map();
                    function i(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = o.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            r = a.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const s = 'string' == typeof r ? `${a}.${r}` : a,
                                i = n.O.view.addModelObserver(s, u, !0);
                            return (o.set(i, t), e && t(l(r)), i);
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
                            for (var e, t = r(o.keys()); !(e = t()).done; ) {
                                i(e.value, u);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q3: () => i });
                var n = t(4598),
                    r = t(9174),
                    a = t(7363),
                    s = t.n(a),
                    o = t(8246);
                const i = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: E }) {
                            const d = (0, a.useRef)([]),
                                m = (t, a, s) => {
                                    var i;
                                    const l = o.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        E = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = E(e),
                                                        a = r.LO.box(u, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        s = r.LO.box(a, { equals: n.jv });
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
                                                    const a = null != u ? u : E(e),
                                                        s = r.LO.box(a, { equals: n.jv });
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
                                                    const n = E(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
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
                                                            s = Object.entries(a),
                                                            o = s.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        A = { mode: t, model: _, externalModel: c, cleanup: m };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                A = (0, a.useState)(i),
                                F = A[0],
                                g = A[1],
                                D = (0, a.useState)(() => m(i, l, E)),
                                B = D[0],
                                C = D[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? C(m(F, l, E)) : (_.current = !0);
                                }, [E, F, l]),
                                (0, a.useEffect)(() => {
                                    g(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (B.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [B],
                                ),
                                s().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                (t(3649), t(9916));
                var n = t(8613);
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
            },
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => o, onResize: () => a, onScaleUpdated: () => s }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
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
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
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
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
            },
            2472: (e, u, t) => {
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => s });
                var n = t(5959),
                    r = t(7698),
                    a = t(514);
                const s = { view: t(7641), client: n, sound: a.ZP, intl: r.N };
            },
            7698: (e, u, t) => {
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    s = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        arabic2roman: () => y,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => x,
                        events: () => s.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => N,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var n = t(9690),
                    r = t(3722),
                    a = t(6112),
                    s = t(6538),
                    o = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
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
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = n.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    R = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = a),
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
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                function n() {}
                t.d(u, { ZT: () => n, jv: () => r });
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId'),
                        r = '';
                    var a;
                    u &&
                        ((r = (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: r, caller: t, stack: u, resId: n };
                };
            },
            4532: (e, u, t) => {
                t.d(u, { M: () => r });
                var n = t(7363);
                const r = (e, u = []) => {
                    const t = (0, n.useRef)(),
                        r = (0, n.useCallback)((...u) => {
                            (t.current && t.current(), (t.current = e(...u)));
                        }, u);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            9653: (e, u, t) => {
                t.d(u, { q: () => s });
                var n = t(7363);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
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
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const s = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        s = (e, ...t) => {
                            for (var n, a = r(u(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: s }), []);
                };
            },
            3815: (e, u, t) => {
                t.d(u, { z: () => a });
                var n = t(7363);
                const r = [];
                function a(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), r)
                    );
                }
            },
            8526: (e, u, t) => {
                t.d(u, { gd: () => o });
                var n = t(3138),
                    r = t(5521),
                    a = (t(9916), t(7363));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = r.n.NONE, u = s, t = !1, o = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== r.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(r) {
                            if (r.keyCode === e) {
                                if (!o && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, o]);
                }
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => s });
                var n = t(7363),
                    r = t(7739),
                    a = t(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        a = ((e) => {
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            560: (e, u, t) => {
                t.d(u, { B: () => r });
                var n = t(7363);
                function r(e, u, t = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => {
                            (window.clearInterval(r.current), (r.current = 0));
                        }, t || []);
                    (0, n.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (0 !== r.current && a(), (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        a,
                    ];
                }
            },
            4489: (e, u, t) => {
                t.d(u, { f: () => a });
                var n = t(5139),
                    r = t(7363);
                function a(e, u, t) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(t, e), u);
                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                }
            },
            5521: (e, u, t) => {
                let n, r;
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'));
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
                    })(r || (r = {})));
            },
            9480: (e, u, t) => {
                function n(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { DZ: () => s, UI: () => a });
                const r = n;
                function a(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function s(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const s = r(e, a);
                        u(s, a, e) && n.push(t(s, a, e));
                    }
                    return n;
                }
            },
            9690: (e, u, t) => {
                t.d(u, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => n });
            },
            3649: (e, u, t) => {
                t.d(u, { Uw: () => _, WU: () => a, uF: () => s, v2: () => r });
                var n = t(1281);
                let r;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function s(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(r || (r = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    c = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? i : l, []),
                    E = (() => {
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
                    m = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return E(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = o(e);
                            return (c(a, /( )/, u).forEach((e) => (t = t.concat(c(e, n, r.left)))), t);
                        })(e, u);
                    },
                    _ = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            5139: (e, u, t) => {
                function n(e, u, t, n) {
                    let r,
                        a = !1,
                        s = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function E() {
                            ((s = Date.now()), t.apply(l, i));
                        }
                        a ||
                            (n && !r && E(),
                            o(),
                            void 0 === n && c > e
                                ? E()
                                : !0 !== u &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : E,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (i.cancel = function () {
                            (o(), (a = !0));
                        }),
                        i
                    );
                }
                t.d(u, { Z: () => n });
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => g, Eu: () => D });
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
                const r = n;
                var a = t(1358);
                var s = t(8613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            A(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => B(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: a,
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
                        handleViewEvent: B,
                        onBindingsReady: g,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
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
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            1425: (e, u, t) => {
                var n = t(7363),
                    r = t.n(n);
                var a = t(3403),
                    s = t(3215);
                const o = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const u = {
                                main: e.primitives(['state', 'isWalletAvailable']),
                                levels: e.primitives(
                                    [
                                        'price',
                                        'levelsStart',
                                        'levelsPassed',
                                        'levelsTotal',
                                        'levelsSelected',
                                        'chapterID',
                                        'backBtnText',
                                    ],
                                    'confirmAnyNumber',
                                ),
                            };
                            return Object.assign({}, u);
                        },
                        ({ externalModel: e }) => ({
                            showRewards: e.createCallback(() => ({}), 'showRewards'),
                            buy: e.createCallbackNoArgs('confirmAnyNumber.onBuyClick'),
                        }),
                    ),
                    i = (o[0], o[1]);
                var l = t(5521),
                    c = t(9485),
                    E = t(8030),
                    d = t(3290),
                    m = t(5831),
                    _ = t(9525),
                    A = t(3942),
                    F = t(6444);
                const g = 'BuyLevelsContent_base_63',
                    D = 'BuyLevelsContent_background_be',
                    B = 'BuyLevelsContent_shadow_fb',
                    C = 'BuyLevelsContent_content_f7',
                    p = 'BuyLevelsContent_footer_f1',
                    h = 'BuyLevelsContent_divider_af',
                    f = 'BuyLevelsContent_title_1e',
                    v = 'BuyLevelsContent_buttons_8b';
                var b = t(6483),
                    w = t.n(b),
                    y = t(3457),
                    S = t(9766),
                    P = t(122),
                    T = t(3815),
                    x = t(5415),
                    N = t(4598),
                    k = t(3946);
                const L = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    levels: e.primitives({
                                        levelsStart: 'start',
                                        levelsPassed: 'passed',
                                        levelsTotal: 'total',
                                        levelsSelected: 'selected',
                                    }),
                                    root: e.object(),
                                    rewards: e.array('rewards.items'),
                                },
                                t = (0, k.Om)(() => u.rewards.get(), { equals: N.jv }),
                                n = (0, k.Om)(() => u.rewards.get().length);
                            return Object.assign({}, u, { computes: { rewards: t, rewardsLength: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSelectedLevels: e.createCallback(
                                (e) => (e ? { count: null == e ? void 0 : e.count } : {}),
                                'onChangeSelectedLevels',
                            ),
                        }),
                    ),
                    O = L[0],
                    M = L[1];
                var I = t(7515),
                    G = t(7727),
                    U = t(1975),
                    $ = t(156),
                    z = t(7736);
                let H;
                !(function (e) {
                    ((e.Passed = 'passed'),
                        (e.PossiblySelected = 'possiblySelected'),
                        (e.Selected = 'selected'),
                        (e.Available = 'available'));
                })(H || (H = {}));
                const W = (e, u) => (e / u) * 100 + '%',
                    Z = {
                        base: 'LevelProgressBar_base_8b',
                        base__small: 'LevelProgressBar_base__small_c2',
                        glowWrapper: 'LevelProgressBar_glowWrapper_34',
                        glow: 'LevelProgressBar_glow_8f',
                        glow__left: 'LevelProgressBar_glow__left_e4',
                        glow__right: 'LevelProgressBar_glow__right_55',
                    },
                    j = Object.assign({}, U.uu, { freezed: !0, type: z.r.Simple }),
                    q = (0, n.memo)(
                        ({ size: e = U.$u.Default, value: u, slideValue: t, maximum: n, theme: a = $.Gh }) => {
                            const s = u >= n ? n : u;
                            return r().createElement(
                                'div',
                                { className: w()(Z.base, Z[`base__${e}`]) },
                                r().createElement(U.ko, {
                                    value: u,
                                    maxValue: n,
                                    deltaFrom: t,
                                    animationSettings: j,
                                    theme: a,
                                }),
                                r().createElement(
                                    'div',
                                    { className: Z.glowWrapper, style: { left: W(s, n) } },
                                    r().createElement('div', { className: w()(Z.glow, Z.glow__left) }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Z.glowWrapper, style: { left: W(t, n) } },
                                    r().createElement('div', { className: w()(Z.glow, Z.glow__right) }),
                                ),
                            );
                        },
                    ),
                    V = 'LevelSlider_base_d5',
                    X = 'LevelSlider_base__locked_05',
                    Y = 'LevelSlider_slider_e4',
                    K = 'LevelSlider_slider__down_92',
                    Q = {
                        base: 'Points_base_ce',
                        labelSplitter: 'Points_labelSplitter_c3',
                        label: 'Points_label_1c',
                        label__passed: 'Points_label__passed_4a',
                        label__selected: 'Points_label__selected_2c',
                        label__possiblySelected: 'Points_label__possiblySelected_bf',
                        label__available: 'Points_label__available_30',
                    },
                    J = ({ start: e, total: u, passed: t, selected: n, possiblySelected: a, width: s }) =>
                        r().createElement(
                            'div',
                            { className: Q.base },
                            ((e, u) => {
                                const t = [];
                                for (let n = 0; n < e; n++) t.push(u(n));
                                return t;
                            })(u, (o) => {
                                const i = ((e, u, t, n, r) =>
                                        e === u || e === t - 1 || (e + 1) % 5 == 0 || e === n || e === r - 1
                                            ? e + 1
                                            : '')(o, e, u, t, n),
                                    l = ((e, u, t, n) => {
                                        switch (!0) {
                                            case e >= t && e < n:
                                                return H.PossiblySelected;
                                            case e < u:
                                                return H.Passed;
                                            case e >= u && e < t:
                                                return H.Selected;
                                            default:
                                                return H.Available;
                                        }
                                    })(o, t, n, a),
                                    c = s - 1;
                                return r().createElement(
                                    'div',
                                    { className: Q.labelSplitter, key: o },
                                    r().createElement(
                                        'div',
                                        {
                                            className: w()(Q.label, Q[`label__${l}`]),
                                            style: { width: `${o === u - 1 ? c : s}rem` },
                                        },
                                        i,
                                    ),
                                );
                            }),
                        ),
                    ee = ({
                        start: e = 0,
                        total: u = 0,
                        passed: t = 0,
                        selected: a = 0,
                        width: s = 22,
                        allowSlide: o = !0,
                        onChangeSelectedLevels: i,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            E = l[1],
                            d = (0, n.useState)(a),
                            m = d[0],
                            _ = d[1],
                            A = (0, n.useState)(t + 1),
                            F = A[0],
                            g = A[1],
                            D = (0, n.useRef)(null),
                            B = (0, n.useCallback)(
                                (n) => {
                                    const r = D.current.getBoundingClientRect(),
                                        a = r.width / (u - e),
                                        s = (n - r.left) / (a || 1),
                                        o = e + Math.round(s),
                                        i = t + 1;
                                    return (0, I.u)(i, u, o);
                                },
                                [t, e, u],
                            );
                        ((0, n.useEffect)(() => {
                            (_(a), g(t + 1));
                        }, [a, t]),
                            (0, n.useEffect)(() => {
                                const e = (e) => {
                                        if (o && c) {
                                            const u = B(e.clientX);
                                            (_(u), E(!1), i({ count: u - t }));
                                        }
                                    },
                                    u = (e) => {
                                        if (o)
                                            if (c) {
                                                const u = B(e.clientX);
                                                m !== u && ((0, G.G)('bp_progress_bar_drag'), _(u), g(u));
                                            } else if (e.target === D.current) {
                                                const u = B(e.clientX);
                                                F !== u && g(u);
                                            }
                                    };
                                return (
                                    document.addEventListener('mouseup', e),
                                    document.addEventListener('mousemove', u),
                                    () => {
                                        (document.removeEventListener('mouseup', e),
                                            document.removeEventListener('mousemove', u));
                                    }
                                );
                            }, [o, m, B, c, i, t, F]));
                        const C = (e) => {
                                if (o && 0 === e.button) {
                                    (0, G.G)('bp_progress_bar_take');
                                    const u = B(e.clientX);
                                    (_(u), g(u), E(!0));
                                }
                            },
                            p = u - e,
                            h = 0 === t ? t : t - e,
                            f = m - e;
                        return r().createElement(
                            'div',
                            null,
                            r().createElement(
                                'div',
                                {
                                    className: w()(V, !o && X),
                                    style: { width: s * p + 'rem' },
                                    ref: D,
                                    onMouseOut: () => {
                                        o && g(m);
                                    },
                                    onMouseDown: C,
                                },
                                r().createElement(J, {
                                    start: e,
                                    total: u,
                                    passed: t,
                                    selected: m,
                                    possiblySelected: F,
                                    width: s,
                                }),
                                r().createElement(q, { value: h, maximum: p, allowSlide: o, slideValue: f }),
                            ),
                            o &&
                                r().createElement('div', {
                                    className: w()(Y, c && K),
                                    style: { left: s * f + 1 + 'rem' },
                                    onMouseDown: C,
                                }),
                        );
                    };
                var ue = t(2862),
                    te = t(5739),
                    ne = t(9480),
                    re = t(2893),
                    ae = t(7264);
                const se = 'RewardsList_base_9f',
                    oe = 'RewardsList_base__disappearing_19',
                    ie = 'RewardsList_reward_22',
                    le = 'RewardsList_base__small_ad',
                    ce = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, G.G)('bp_reward');
                        },
                    }),
                    Ee = (0, a.Pi)(({ rewards: e, isDisappearing: u }) => {
                        const t = (0, x.GS)().mediaSize <= x.cJ.Small;
                        return r().createElement(
                            'div',
                            { className: w()(se, u && oe, t && le) },
                            ne.DZ(
                                e,
                                (e, u) => u < 10,
                                (e, u) => {
                                    const n = t ? ue.h2.Small : ue.h2.Big;
                                    return r().createElement(
                                        ae.d,
                                        { key: `reward${u}`, animationConfig: ce(u), className: ie },
                                        r().createElement(te.Q, (0, re.$n)(e, n)),
                                    );
                                },
                            ),
                        );
                    }),
                    de = 'Content_base_a8',
                    me = 'Content_buttonWrapper_c2',
                    _e = 'Content_base__active_92',
                    Ae = 'Content_base__hidden_c7',
                    Fe = 'Content_rewardBtn_36',
                    ge = R.strings.battle_pass.battlePassBuyView.confirmAnyNumber,
                    De = 10,
                    Be = 12,
                    Ce = 20,
                    pe = 24,
                    he = 50,
                    fe = (0, a.Pi)(() => {
                        const e = M(),
                            u = e.model,
                            t = e.controls,
                            a = u.levels,
                            s = a.start,
                            o = a.passed,
                            i = a.total,
                            l = a.selected,
                            c = (0, n.useState)(!0),
                            E = c[0],
                            d = c[1],
                            _ = (0, n.useState)(0),
                            A = _[0],
                            g = _[1],
                            D = (0, x.GS)(),
                            B = D.mediaSize,
                            C = D.remScreenWidth,
                            p = B <= x.cJ.Small,
                            h = E ? u.computes.rewards() : [],
                            f = u.computes.rewardsLength(),
                            v = u.root.get().chapterID,
                            b = (0, F.tv)();
                        ((0, n.useEffect)(
                            () => (
                                d(!1),
                                (0, P.F)(() => {
                                    d(!0);
                                }, 400)
                            ),
                            [l],
                        ),
                            (0, n.useEffect)(() => {
                                if (E)
                                    return (0, P.F)(() => {
                                        g(f - 10);
                                    }, 0);
                            }, [E, f]));
                        const R = (0, T.z)(() => {
                                b.push(m._.battlePass.buyLevelsRewards, { chapterID: v });
                            }),
                            N = (() => {
                                const e = p ? Ce : pe;
                                if (i.get() <= he) return e;
                                const u = C - 2 * De,
                                    t = Math.floor(u / i.get()),
                                    n = Math.min(t, e);
                                return (
                                    n < Be &&
                                        console.warn(
                                            `BuyLevelSlider is so big. Current size is ${n * i.get()}, max size is ${u}`,
                                        ),
                                    n
                                );
                            })();
                        return r().createElement(
                            'div',
                            { className: w()(de, !E && Ae, A > 0 && _e) },
                            r().createElement(ee, {
                                start: s.get(),
                                total: i.get(),
                                passed: o.get(),
                                selected: l.get(),
                                width: N,
                                onChangeSelectedLevels: t.changeSelectedLevels,
                                allowSlide: !0,
                            }),
                            r().createElement(Ee, { rewards: h, isDisappearing: !E }),
                            r().createElement(
                                'div',
                                { className: me },
                                r().createElement(
                                    y.u5,
                                    { type: y.L$.ghost, size: y.qE.medium, mixClass: Fe, onClick: R },
                                    A > 0 && r().createElement(S.z, { text: ge.moreRewards(), binding: { count: A } }),
                                ),
                            ),
                        );
                    });
                var ve = t(918);
                const be = 'Footer_base_31',
                    we = 'Footer_levelsBlock_f7',
                    ye = 'Footer_priceBlock_98',
                    Se = 'Footer_levelsLabel_ab',
                    Pe = 'Footer_footerLabel_a8',
                    Re = ({ levelsToBuy: e, price: u }) =>
                        r().createElement(
                            'div',
                            { className: be },
                            r().createElement(
                                'div',
                                { className: we },
                                r().createElement(
                                    'div',
                                    { className: Pe },
                                    R.strings.battle_pass.battlePassBuyView.levelsSelected(),
                                ),
                                r().createElement('div', { className: Se }, e),
                            ),
                            r().createElement(
                                'div',
                                { className: ye },
                                r().createElement(
                                    'div',
                                    { className: Pe },
                                    R.strings.battle_pass.battlePassBuyView.price(),
                                ),
                                r().createElement(ve.F, { type: 'gold', size: 'big', value: u }),
                            ),
                        ),
                    Te = R.strings.battle_pass.battlePassBuyView,
                    xe = (0, a.Pi)(() => {
                        const e = i(),
                            u = e.model,
                            t = e.controls,
                            n = u.main.isWalletAvailable,
                            a = u.levels,
                            s = a.price,
                            o = a.levelsPassed,
                            b = a.levelsSelected,
                            w = a.chapterID,
                            y = b.get() - o.get(),
                            S = { context: 'model.confirmAnyNumber', rootId: R.aliases.battle_pass.BuyLevels('resId') },
                            P = (0, F.tv)();
                        ((0, d.d)(t.buy), E.N.useHandleKeydown(l.n.ESCAPE || l.n.SPACE, () => P.goBack()));
                        const T = {
                            backgroundImage: `url(${(0, c.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, w.get())})`,
                        };
                        return r().createElement(
                            'div',
                            { className: g },
                            r().createElement('div', { style: T, className: D }),
                            r().createElement('div', { className: B }),
                            r().createElement(
                                'div',
                                { className: C },
                                r().createElement(A.D, {
                                    chapter: w.get(),
                                    buyBP: Te.confirmAnyNumber.title(),
                                    subTitle: Te.confirmAnyNumber.descr(),
                                    className: f,
                                }),
                                r().createElement(O, { options: S }, r().createElement(fe, null)),
                                r().createElement(
                                    'div',
                                    { className: p },
                                    r().createElement('div', { className: h }),
                                    r().createElement(Re, { levelsToBuy: y, price: s.get() }),
                                    r().createElement(_._, {
                                        onAccept: t.buy,
                                        onCancel: () => P.push(m._.battlePass.progression, { chapterID: w.get() }),
                                        isWalletAvailable: n.get(),
                                        buttonAcceptText: R.strings.menu.boosterBuyWindow.buyButtonLabel(),
                                        className: v,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Ne = (0, s.q3)()(({ observableModel: e }) => {
                        const u = {
                                rewardsInfo: e.primitives(['chapterID', 'packageState', 'toLevel', 'fromLevel']),
                                nowRewards: e.array('nowRewards.items'),
                            },
                            t = (0, k.Om)(() => u.nowRewards.get(), { equals: N.jv });
                        return Object.assign({}, u, { computes: { nowRewards: t } });
                    }, N.ZT),
                    ke = Ne[0],
                    Le = Ne[1];
                var Oe = t(4420),
                    Me = t(3862),
                    Ie = t(9430),
                    Ge = t(1307);
                const Ue = 'Content_base_80',
                    $e = 'Content_mainContent_23',
                    ze = R.strings.battle_pass.battlePassBuyView.reward,
                    He = ({ fromLevel: e, toLevel: u, rewards: t }) => {
                        const n = ((e, u) =>
                                e < u
                                    ? { description: ze.descriptionNowRewards(), completedSteps: `${e} – ${u}` }
                                    : { description: ze.descriptionNowRewardsSingle(), completedSteps: `${u}` })(e, u),
                            a = n.description,
                            s = n.completedSteps;
                        return r().createElement(
                            'div',
                            { className: Ue },
                            r().createElement(
                                Ge.z,
                                null,
                                r().createElement(Ie.r, {
                                    title: ze.titleNowRewards(),
                                    description: a,
                                    iconType: Me.Q.now,
                                    steps: s,
                                    rewards: t,
                                    className: $e,
                                }),
                            ),
                        );
                    },
                    We = 'RewardsViewContent_base_ac',
                    Ze = 'RewardsViewContent_background_ee',
                    je = 'RewardsViewContent_shadow_dc',
                    qe = (0, a.Pi)(() => {
                        const e = Le().model,
                            u = e.rewardsInfo,
                            t = u.chapterID,
                            n = u.toLevel,
                            a = u.fromLevel,
                            s = (0, F.tv)();
                        E.N.useHandleKeydown(l.n.ESCAPE, () => s.goBack());
                        const o = {
                            backgroundImage: `url(${(0, c.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, t.get())})`,
                        };
                        return r().createElement(
                            'div',
                            { className: We },
                            r().createElement(
                                'div',
                                { className: Ze },
                                r().createElement(Oe.N, { chapter: t.get(), isCurrent: !0, customBackgroundStyle: o }),
                            ),
                            r().createElement('div', { className: je }),
                            r().createElement(He, {
                                rewards: e.computes.nowRewards(),
                                toLevel: n.get(),
                                fromLevel: a.get(),
                            }),
                        );
                    }),
                    Ve = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyLevels('resId') };
                (0, a.Pi)(() =>
                    'rewardsState' === i().model.main.state.get()
                        ? r().createElement(ke, { options: Ve }, r().createElement(qe, null))
                        : r().createElement(xe, null),
                );
            },
            5831: (e, u, t) => {
                t.d(u, { _: () => n });
                const n = {
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
            9485: (e, u, t) => {
                t.d(u, { W4: () => r, wD: () => n });
                t(8546);
                const n = (e, u, t = '') => {
                        const n = t.length > 0 ? `_${t}` : t,
                            r = e.$dyn(`c_${u}${n}`),
                            a = String(u).slice(-1),
                            s = e.$dyn(`default_${a}${n}`);
                        return r || s;
                    },
                    r = (e) => {
                        const u = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${n(u.progression, e)})` }
                            : { backgroundImage: `url(${u.$dyn('common')})` };
                    };
            },
            930: (e, u, t) => {
                let n;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(n || (n = {}));
                (n.style, n.tankman);
            },
            2893: (e, u, t) => {
                t.d(u, { $n: () => o, pC: () => a });
                var n = t(2862),
                    r = t(729);
                (t(5216), t(7044), t(3649), t(8546), t(930));
                const a = (e) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${e}`),
                    s = (e) =>
                        e.bigIcon.includes('vehicle')
                            ? e.vehicleName
                            : e.bigIcon.includes('style_3d')
                              ? e.userName
                              : void 0,
                    o = (e, u = n.h2.Big, t = !1) => {
                        const a = e.item,
                            o = e.name,
                            i = e.value,
                            l = e.overlayType,
                            c = e.tooltipId,
                            E = e.tooltipContentId;
                        return {
                            name: a || o,
                            image: (0, r.ry)(e, u),
                            special: l,
                            value: i,
                            valueType: (0, r.p3)(o),
                            title: t && s(e),
                            tooltipArgs: (0, r.pI)({ tooltipId: c }, Number(E), { ignoreShowDelay: !0 }),
                            size: u,
                        };
                    };
            },
            3290: (e, u, t) => {
                t.d(u, { d: () => s });
                var n = t(8526),
                    r = t(5521),
                    a = t(7363);
                const s = (e) => {
                    const u = (0, a.useCallback)(
                        (u) => {
                            u.altKey || e();
                        },
                        [e],
                    );
                    (0, n.gd)(r.n.ENTER, u);
                };
            },
            7264: (e, u, t) => {
                t.d(u, { d: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(7030);
                const i = 'AnimatedReward_base_f0',
                    l = ({ children: e, animationConfig: u, className: t }) => {
                        const n = (0, o.useSpring)(u);
                        return s().createElement(o.animated.div, { style: n, className: r()(i, t) }, e);
                    };
            },
            9525: (e, u, t) => {
                t.d(u, { _: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3457),
                    s = t(7363),
                    o = t.n(s);
                const i = 'BuyButtons_base_4b',
                    l = 'BuyButtons_button_32',
                    c = R.strings.battle_pass.battlePassBuyView,
                    E = ({
                        isWalletAvailable: e,
                        onAccept: u,
                        buttonAcceptText: t,
                        onCancel: n,
                        className: s,
                        isMulticurrency: E = !1,
                    }) =>
                        o().createElement(
                            'div',
                            { className: r()(i, s) },
                            o().createElement(
                                a.u5,
                                { type: a.L$.main, size: a.qE.medium, disabled: !e, onClick: u, mixClass: l },
                                t,
                            ),
                            !E &&
                                o().createElement(
                                    a.u5,
                                    { type: a.L$.primary, size: a.qE.medium, onClick: n, mixClass: l },
                                    c.btnCancel(),
                                ),
                        );
            },
            4420: (e, u, t) => {
                t.d(u, { N: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(9485);
                const i = 'ChapterBackground_base_fa',
                    l = 'ChapterBackground_base__current_7a',
                    c = ({ chapter: e, isCurrent: u, customBackgroundStyle: t }) =>
                        s().createElement('div', { className: r()(i, u && l), style: t || (0, o.W4)(e) });
            },
            8546: (e, u, t) => {
                let n, r, a, s;
                (!(function (e) {
                    ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                })(n || (n = {})),
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
                    })(a || (a = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(s || (s = {})));
            },
            9430: (e, u, t) => {
                t.d(u, { r: () => C });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    o = t(2862),
                    i = t(5739),
                    l = t(5415),
                    c = t(9480),
                    E = t(2893);
                const d = 'GroupRewards_base_70',
                    m = 'GroupRewards_item_af',
                    _ = ({ rewards: e, className: u }) => {
                        const t = (0, l.GS)().mediaSize < l.cJ.Medium ? o.h2.Small : o.h2.Big;
                        return s().createElement(
                            'div',
                            { className: r()(d, u) },
                            c.UI(e, (e, u) =>
                                s().createElement(
                                    'div',
                                    { key: `reward_${u}_${e.name}`, className: m },
                                    s().createElement(i.Q, (0, E.$n)(e, t, !0)),
                                ),
                            ),
                        );
                    };
                var A = t(3862);
                const F = 'RewardsBlock_base_0e',
                    g = 'RewardsBlock_groupTitle_2f',
                    D = 'RewardsBlock_groupRewards_38',
                    B = 'RewardsBlock_groupRewards__future_b9',
                    C = ({
                        description: e,
                        iconType: u,
                        steps: t = '',
                        rewards: n,
                        className: a = '',
                        title: o = '',
                    }) =>
                        s().createElement(
                            'div',
                            { className: r()(F, a) },
                            s().createElement(A.p, { description: e, type: u, steps: t, className: g, title: o }),
                            s().createElement(_, { rewards: n, className: r()(D, u === A.Q.future && B) }),
                        );
            },
            3862: (e, u, t) => {
                t.d(u, { p: () => c, Q: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(280),
                    s = t(7363),
                    o = t.n(s);
                const i = {
                    base: 'GroupTitle_base_e8',
                    title: 'GroupTitle_title_0c',
                    iconShadow: 'GroupTitle_iconShadow_81',
                    base__now: 'GroupTitle_base__now_fa',
                    base__future: 'GroupTitle_base__future_42',
                    icon: 'GroupTitle_icon_62',
                    titleText: 'GroupTitle_titleText_90',
                    descriptionText: 'GroupTitle_descriptionText_bc',
                    steps: 'GroupTitle_steps_8d',
                };
                let l;
                !(function (e) {
                    ((e.now = 'now'), (e.future = 'future'));
                })(l || (l = {}));
                const c = ({ description: e, type: u, steps: t = '', className: n = '', title: s = '' }) =>
                    o().createElement(
                        'div',
                        { className: r()(i.base, i[`base__${u}`], n) },
                        o().createElement('div', { className: i.iconShadow }),
                        o().createElement(
                            'div',
                            { className: i.title },
                            o().createElement('div', { className: i.icon }),
                            o().createElement('div', { className: i.titleText }, s),
                        ),
                        o().createElement(a.z, {
                            classMix: i.descriptionText,
                            text: e,
                            binding: { steps: o().createElement('span', { className: i.steps, key: t }, t) },
                        }),
                    );
            },
            1307: (e, u, t) => {
                t.d(u, { z: () => w });
                var n = t(6483),
                    r = t.n(n),
                    a = t(794),
                    s = t(9605),
                    o = t(7363),
                    i = t.n(o),
                    l = t(6724),
                    c = t(1856),
                    E = t(9916);
                function d(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                function m(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (n, r) {
                            var a = e.apply(u, t);
                            function s(e) {
                                d(a, n, r, s, o, 'next', e);
                            }
                            function o(e) {
                                d(a, n, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let _;
                !(function (e) {
                    ((e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'));
                })(_ || (_ = {}));
                const A = (e) => {
                        const u = (0, o.useState)(_.Idle),
                            t = u[0],
                            n = u[1],
                            r = e.animationScroll,
                            a = e.getContainerSize,
                            s = e.getWrapperSize,
                            i = e.events,
                            d = (0, o.useCallback)(() => {
                                const e = r.scrollPosition.get(),
                                    u = a() - s();
                                switch (!0) {
                                    case !u:
                                        return n(_.Idle);
                                    case e <= 0:
                                        return n(_.Start);
                                    case e >= u:
                                        return n(_.End);
                                    default:
                                        n(_.Between);
                                }
                            }, [r.scrollPosition, a, s]);
                        return (
                            (0, o.useEffect)(
                                () => (
                                    (function () {
                                        var e = m(function* () {
                                            yield (0, c.v)(d);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    i.on('change', d),
                                    () => i.off('change', d)
                                ),
                                [i, d],
                            ),
                            (0, o.useEffect)(() => {
                                const e = (function () {
                                    var e = m(function* () {
                                        (yield (0, E.Eu)(), yield (0, l.nS)(), d());
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, [d]),
                            t
                        );
                    },
                    F = { type: 'idle' };
                const g = 'ScrollWithLips_base_69',
                    D = 'ScrollWithLips_lip_90',
                    B = 'ScrollWithLips_lip__top_ab',
                    C = 'ScrollWithLips_lip__bottom_17',
                    p = 'ScrollWithLips_scroll_7e',
                    h = 'ScrollWithLips_scroll__loaded_b2',
                    f = 'ScrollWithLips_topButton_4e',
                    v = 'ScrollWithLips_bottomButton_1e',
                    b = 'ScrollWithLips_track_4f',
                    w = ({ className: e, children: u, setVisibleScroll: t }) => {
                        const n = (0, s.useVerticalScrollApi)();
                        !(function (e, u) {
                            const t = e.contentRef,
                                n = e.wrapperRef,
                                r = e.scrollPosition,
                                a = e.clampPosition,
                                s = e.animationScroll,
                                i = e.events,
                                l = e.getContainerSize,
                                c = e.getWrapperSize,
                                E = (0, o.useState)(F),
                                d = E[0],
                                m = E[1],
                                _ = (0, o.useState)(!1),
                                A = _[0],
                                g = _[1];
                            ((0, o.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = A ? ('dragging' === d.type ? 'grabbing' : 'grab') : 'default');
                            }, [t, A, d.type]),
                                (0, o.useEffect)(() => {
                                    if ('dragging' !== d.type) return;
                                    const e = (e) => {
                                            const o = t.current,
                                                i = n.current;
                                            if (!o || !i) return;
                                            const l = d.positionFrom - e.screenY,
                                                c = d.previousScrollPosition + l;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(o, c),
                                                        from: { scrollPosition: s.scrollPosition.get() },
                                                    },
                                                    u && { config: u },
                                                ),
                                            );
                                        },
                                        o = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', o),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', o));
                                        }
                                    );
                                }, [s.scrollPosition, a, t, d, r, n, u]),
                                (0, o.useEffect)(() => {
                                    if ('scrollingToEnd' !== d.type) return;
                                    const e = () => {
                                        m(F);
                                    };
                                    return (s.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [s.scrollPosition, d.type, i]),
                                (0, o.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        0 === e.button &&
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: s.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        e.addEventListener('mousedown', u),
                                        () => e.removeEventListener('mousedown', u)
                                    );
                                }, [s.scrollPosition, t]),
                                (0, o.useEffect)(() => {
                                    const e = () => {
                                        var e, u;
                                        const t = null != (e = l()) ? e : 0,
                                            n = null != (u = c()) ? u : 0;
                                        g(t > n);
                                    };
                                    return (
                                        i.on('resizeHandled', e),
                                        i.on('recalculateContent', e),
                                        () => {
                                            (i.off('resizeHandled', e), i.off('recalculateContent', e));
                                        }
                                    );
                                }, [i, l, c]));
                        })(n);
                        const l = A(n),
                            c = l !== _.Idle;
                        return (
                            (0, o.useEffect)(() => {
                                t && t(l !== _.Idle);
                            }, [t, l]),
                            i().createElement(
                                'div',
                                { className: r()(g, e) },
                                l !== _.Start && l !== _.Idle && i().createElement('div', { className: r()(D, B) }),
                                l !== _.End && l !== _.Idle && i().createElement('div', { className: r()(D, C) }),
                                i().createElement(
                                    a.X.Vertical.Area.Default,
                                    {
                                        api: n,
                                        barClassNames: {
                                            base: r()(p, c && h),
                                            topButton: f,
                                            bottomButton: v,
                                            track: b,
                                        },
                                    },
                                    u,
                                ),
                            )
                        );
                    };
            },
            3942: (e, u, t) => {
                t.d(u, { D: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    s = t(7363),
                    o = t.n(s),
                    i = t(2893);
                const l = {
                    base: 'Title_base_29',
                    chapter: 'Title_chapter_74',
                    base__transparentChapterName: 'Title_base__transparentChapterName_18',
                    buyBPTitle: 'Title_buyBPTitle_dd',
                    subTitle: 'Title_subTitle_52',
                };
                let c;
                !(function (e) {
                    ((e.Default = 'default'), (e.TransparentChapterName = 'transparentChapterName'));
                })(c || (c = {}));
                const E = R.strings.battle_pass.battlePassBuyView.confirm,
                    d = ({ chapter: e, buyBP: u, subTitle: t, className: n, type: s = c.Default }) => {
                        const d = (0, a.uF)(E.chapter(), { name: (0, i.pC)(e) });
                        return o().createElement(
                            'div',
                            { className: r()(l.base, l[`base__${s}`], n) },
                            o().createElement('span', { className: l.chapter }, d),
                            o().createElement('span', { className: l.buyBPTitle }, u),
                            o().createElement('span', { className: l.subTitle }, t),
                        );
                    };
            },
            8470: (e, u, t) => {
                t.d(u, { t: () => a });
                var n = t(7363);
                const r = (0, n.createContext)(void 0);
                function a() {
                    const e = (0, n.useContext)(r);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            8030: (e, u, t) => {
                t.d(u, { N: () => n });
                var n = {};
                (t.r(n), t.d(n, { Provider: () => A, useApi: () => m, useHandleKeydown: () => _ }));
                var r = t(3138),
                    a = t(3815),
                    s = t(7363),
                    o = t.n(s),
                    i = t(5521);
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
                const E = () => {
                        const e = new Map();
                        function u(u) {
                            const t = e.get(u);
                            if (t) return t;
                            const n = new l();
                            return (e.set(u, n), n);
                        }
                        function t(u, t) {
                            const n = e.get(u);
                            return !!n && n.remove(t);
                        }
                        return {
                            handlers: e,
                            obtain: u,
                            register: function (e, n) {
                                if (e === i.n.NONE) return c.jv;
                                const r = u(e);
                                return (r.includes(n) || r.push(n), () => t(e, n));
                            },
                            unregister: t,
                            takeCurrent: function (u) {
                                const t = e.get(u);
                                if (!t) return;
                                const n = t.peek();
                                return n || void 0;
                            },
                        };
                    },
                    d = (0, s.createContext)(void 0);
                function m() {
                    const e = (0, s.useContext)(d);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function _(e, u, t) {
                    const n = (0, a.z)((e) => {
                            r.O.view.isEventHandled() || (u(e), r.O.view.setEventHandled(), t && e.stopPropagation());
                        }),
                        o = m(),
                        i = (0, s.useMemo)(() => o.keydown.register(e, n), [o, e, n]);
                    (0, s.useEffect)(() => i, [i]);
                }
                const A = (e) => {
                    const u = (0, s.useMemo)(E, []);
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
                    return o().createElement(d.Provider, { value: t }, e.children);
                };
            },
            6444: (e, u, t) => {
                t.d(u, { tv: () => n.t });
                var n = t(8470),
                    r = t(7363);
                (0, r.createContext)(void 0);
            },
            5216: (e, u, t) => {
                let n, r;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(n || (n = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(r || (r = {})));
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
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
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            2468: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
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
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            1609: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
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
            372: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__active: 'HorizontalBar_base__active_5e',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__active: 'VerticalBar_base__active_72',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 9819),
        (() => {
            var e = { 9819: 0, 8872: 0, 1523: 0, 8805: 0, 6488: 0, 2670: 0, 3132: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(1425));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
